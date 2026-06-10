import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const FORM_DEFAULTS = {
  phone: '',
  otp: '',
  agreeToTerms: false,
  firstName: '',
  middleName: '',
  lastName: '',
  businessType: '',
  industryType: '',
  businessRevenue: '',
  yearsInBusiness: '',
  geoArea: '',
  dataflowMode: false
}

const normalizePhone = value => {
  const digits = String(value || '').replace(/\D/g, '')
  return digits.length > 10 ? digits.slice(-10) : digits
}

const postJsonWithFallback = async (path, payload) => {
  const configuredBase = API_BASE_URL.trim()
  const candidateUrls = configuredBase
    ? [`${configuredBase}${path}`]
    : [path, `https://bynd-backend-owi6.onrender.com${path}`] // Fixed: Closed the backtick here

  let lastError = null

  for (const url of candidateUrls) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.message || `Request failed (${response.status})`)
      }

      return result
    } catch (error) {
      console.log(error)
    }
  }

  throw lastError || new Error('Request failed')
}

const fullSchema = yup.object().shape({
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  agreeToTerms: yup.boolean().oneOf([true], 'You must accept the terms and conditions').required(),
  firstName: yup.string().trim().notRequired(),
  middleName: yup.string().trim().notRequired(),
  lastName: yup.string().trim().notRequired(),
  email: yup.string().trim().email('Invalid email format').notRequired(),
  businessType: yup.string().when('$step', { is: 3, then: schema => schema.required('Business type is required'), otherwise: schema => schema.notRequired() }),
  industryType: yup.string().when('$step', { is: 3, then: schema => schema.required('Industry type is required'), otherwise: schema => schema.notRequired() }),
  businessRevenue: yup.string().when('$step', { is: 3, then: schema => schema.required('Business revenue is required'), otherwise: schema => schema.notRequired() }),
  yearsInBusiness: yup.string().when('$step', { is: 3, then: schema => schema.required('Years in business is required'), otherwise: schema => schema.notRequired() }),
  geoArea: yup.string().when('$step', { is: 3, then: schema => schema.required('Geographical area is required'), otherwise: schema => schema.notRequired() }),
  dataflowMode: yup.boolean()
})

const PartnerWithUs = () => {
  const [step, setStep] = useState(1)
  const [otpSent, setOtpSent] = useState(false)
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)
  const [isSendingOtp, setIsSendingOtp] = useState(false)
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false)
  const [otpStatusMessage, setOtpStatusMessage] = useState('')
  const navigate = useNavigate()

  const { register, handleSubmit, trigger, watch, getValues, setValue, setError, clearErrors, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(fullSchema),
    context: { step },
    mode: 'onChange',
    defaultValues: FORM_DEFAULTS
  })

  const phoneValue = watch('phone')

  useEffect(() => {
    setOtpSent(false)
    setIsPhoneVerified(false)
    setOtpStatusMessage('')
    clearErrors('otp')
  }, [phoneValue, clearErrors])

  const handleClose = () => navigate('/')

  const nextStep = async () => {
    const fieldsToValidate = step === 1 ? ['phone', 'agreeToTerms'] : []
    const isValid = await trigger(fieldsToValidate)
    if (!isValid) return
    if (step === 1 && !isPhoneVerified) {
      setError('otp', { type: 'manual', message: 'Please verify your phone number using OTP' })
      return
    }
    setStep(prev => prev + 1)
  }

  const prevStep = () => setStep(prev => prev - 1)

  const sendOtpToPhone = async () => {
    const phone = normalizePhone(getValues('phone'))
    if (phone.length !== 10) return
    setIsSendingOtp(true)
    try {
      const result = await postJsonWithFallback('/api/partner/otp/send', { phone })
      setOtpSent(true)
      setOtpStatusMessage(result.otp ? `OTP: ${result.otp}` : 'OTP sent.')
    } catch (error) {
      setOtpStatusMessage('Unable to send OTP')
    } finally {
      setIsSendingOtp(false)
    }
  }

  const verifyPhoneOtp = async () => {
    setIsVerifyingOtp(true)
    try {
      const result = await postJsonWithFallback('/api/partner/otp/verify', { phone: normalizePhone(getValues('phone')), otp: getValues('otp') })
      if (!result.verified) throw new Error()
      setIsPhoneVerified(true)
      setOtpStatusMessage('Verified successfully.')
    } catch (error) {
      setOtpStatusMessage('Verification failed.')
    } finally {
      setIsVerifyingOtp(false)
    }
  }

  const onSubmit = async (data) => {
    try {
      await postJsonWithFallback('/api/partner/partner-with-us', { ...data, phone: normalizePhone(data.phone), otpVerified: isPhoneVerified })
      alert('Success!')
      handleClose()
    } catch (error) {
      alert(error.message || 'Failed to submit')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-[420px] max-h-[80vh] overflow-y-auto relative">
        <button onClick={handleClose} className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-600">&times;</button>
        <h2 className="text-[#84bd00] text-[22px] font-bold mb-0">Create Your Account</h2>
        <p className="text-[#666] text-xs mb-4">Sign Up to our portal in just 3 steps</p>

        <Stepper currentStep={step} />

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {step === 1 && <Step1 {...{ register, setValue, errors, nextStep, sendOtpToPhone, verifyPhoneOtp, otpSent, isPhoneVerified, isSendingOtp, isVerifyingOtp, otpStatusMessage }} />}
          {step === 2 && <Step2 {...{ register, errors, nextStep, prevStep }} />}
          {step === 3 && <Step3 {...{ register, errors, prevStep, isSubmitting }} />}
        </form>
      </div>
    </div>
  )
}

const Stepper = ({ currentStep }) => {
  const steps = [{ number: 1, title: 'Phone no.' }, { number: 2, title: 'Personal details' }, { number: 3, title: 'Business details' }]
  return (
    <div className="flex justify-between items-start w-full mb-6">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          <div className="flex flex-col items-center text-center w-[70px]">
            <div className={`w-[22px] h-[22px] rounded-full flex items-center justify-center font-bold text-xs border-2 mb-1 ${currentStep >= step.number ? 'bg-[#84bd00] text-white border-[#84bd00]' : 'bg-gray-100 text-gray-400 border-gray-100'}`}>
              {step.number}
            </div>
            <div className={`text-[11px] font-medium ${currentStep >= step.number ? 'text-[#84bd00] font-bold' : 'text-gray-400'}`}>
              {step.title}
            </div>
          </div>
          {index < steps.length - 1 && <div className="flex-1 h-[2px] bg-gray-100 mt-[10px]" />}
        </React.Fragment>
      ))}
    </div>
  )
}

const Step1 = ({ register, setValue, errors, nextStep, sendOtpToPhone, verifyPhoneOtp, otpSent, isPhoneVerified, isSendingOtp, isVerifyingOtp, otpStatusMessage }) => (
  <>
    <Field label='Phone No.' {...register('phone')} type='tel' inputMode='numeric' maxLength={10} onInput={e => { const val = normalizePhone(e.target.value); e.target.value = val; setValue('phone', val, { shouldValidate: true }) }} placeholder='Phone No.' error={errors.phone} />
    <button type='button' onClick={sendOtpToPhone} className="w-full py-2 bg-[#84bd00] text-white rounded text-sm font-bold mt-2" disabled={isSendingOtp}>{isSendingOtp ? 'Sending...' : otpSent ? 'Resend OTP' : 'Send OTP'}</button>
    {otpSent && (
      <>
        <Field label='Enter OTP' {...register('otp')} type='tel' inputMode='numeric' maxLength={6} onInput={e => { const val = e.target.value.replace(/\D/g, '').slice(0, 6); e.target.value = val; setValue('otp', val, { shouldValidate: true }) }} placeholder='6-digit OTP' error={errors.otp} />
        <button type='button' onClick={verifyPhoneOtp} className="w-full py-2 bg-[#84bd00] text-white rounded text-sm font-bold" disabled={isVerifyingOtp || isPhoneVerified}>{isPhoneVerified ? 'Verified' : isVerifyingOtp ? 'Verifying...' : 'Verify OTP'}</button>
      </>
    )}
    {otpStatusMessage && <p className={`text-xs mt-2 ${isPhoneVerified ? 'text-green-700' : errors.otp ? 'text-red-500' : 'text-gray-500'}`}>{otpStatusMessage}</p>}
    <div className="flex items-center my-3 text-left">
      <input type='checkbox' id='agreeToTerms' {...register('agreeToTerms')} />
      <label htmlFor='agreeToTerms' className="ml-2 text-xs text-gray-500">By filling this form you agree to <a href='/privacy-policy' target='_blank' className="text-[#84bd00] underline">Privacy Policy</a> & <a href='/terms' target='_blank' className="text-[#84bd00] underline">Terms</a></label>
    </div>
    {errors.agreeToTerms && <p className="text-red-500 text-xs">{errors.agreeToTerms.message}</p>}
    <button type='button' onClick={nextStep} className="w-full py-2 bg-[#84bd00] text-white rounded text-sm font-bold mt-2">Next</button>
  </>
)

const Step2 = ({ register, errors, nextStep, prevStep }) => (
  <>
    <Field label='First Name' {...register('firstName')} placeholder='First Name' error={errors.firstName} />
    <Field label='Middle Name' {...register('middleName')} placeholder='Middle Name' error={errors.middleName} />
    <Field label='Last Name' {...register('lastName')} placeholder='Last Name' error={errors.lastName} />
    <Field label='Email' type='email' {...register('email')} placeholder='Email' error={errors.email} />
    <div className="flex gap-2 mt-4">
      <button type='button' onClick={prevStep} className="w-full py-2 bg-[#84bd00] text-white rounded text-sm font-bold">Previous</button>
      <button type='button' onClick={nextStep} className="w-full py-2 bg-[#84bd00] text-white rounded text-sm font-bold">Next</button>
    </div>
  </>
)

const Step3 = ({ register, errors, prevStep, isSubmitting }) => (
  <>
    <RadioGroup label='Business type' name='businessType' register={register} error={errors.businessType} options={['Individual', 'Proprietorship', 'Private Ltd', 'Partnership', 'Limited Liability Company', 'Public Limited Company']} />
    <SelectGroup label='Industry Type' name='industryType' register={register} error={errors.industryType} options={['IT', 'Finance', 'Healthcare', 'Education', 'Manufacturing']} />
    <RadioGroup label='Business Revenue Monthly' name='businessRevenue' register={register} error={errors.businessRevenue} options={['0 - 5 Lacs', '5 - 10 Lacs', '10 - 50 Lacs', '> 50 Lacs']} />
    <RadioGroup label='Years in Business' name='yearsInBusiness' register={register} error={errors.yearsInBusiness} options={['0 - 0.5 Years', '0.5 - 2 Years', '> 2 Years']} />
    <RadioGroup label='Geographical Area Covered' name='geoArea' register={register} error={errors.geoArea} options={['Pan India', 'State', 'City']} />
    <div className="flex items-center my-3 text-left">
      <input type='checkbox' id='dataflowMode' {...register('dataflowMode')} />
      <label htmlFor='dataflowMode' className="ml-2 text-xs text-gray-500"><b>Channel Partner Dashboard</b> - Login customer files manually</label>
    </div>
    <div className="flex gap-2 mt-4">
      <button type='button' onClick={prevStep} className="w-full py-2 bg-[#84bd00] text-white rounded text-sm font-bold">Previous</button>
      <button type='submit' className="w-full py-2 bg-[#84bd00] text-white rounded text-sm font-bold" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Send'}</button>
    </div>
  </>
)

const Field = React.forwardRef(({ label, error, ...props }, ref) => (
  <div className="mb-2 w-full text-left">
    <label className="block mb-1 font-bold text-xs text-gray-700">{label}</label>
    <input ref={ref} className="w-full p-2 border border-gray-300 rounded text-xs" {...props} />
    {error && <p className="text-red-500 text-[10px] mt-1">{error.message}</p>}
  </div>
))
Field.displayName = 'Field'

const RadioGroup = ({ label, name, register, error, options }) => (
  <div className="mb-2 w-full text-left">
    <label className="block mb-1 font-bold text-xs text-gray-700">{label}</label>
    <div className="flex flex-wrap gap-3">{options.map(opt => (<label key={opt} className="flex items-center text-xs"><input type='radio' value={opt} {...register(name)} className="mr-1" />{opt}</label>))}</div>
    {error && <p className="text-red-500 text-[10px] mt-1">{error.message}</p>}
  </div>
)

const SelectGroup = ({ label, name, register, error, options }) => (
  <div className="mb-2 w-full text-left">
    <label className="block mb-1 font-bold text-xs text-gray-700">{label}</label>
    <select {...register(name)} className="w-full p-2 border border-gray-300 rounded text-xs"><option value='' disabled>Select an option</option>{options.map(opt => (<option key={opt} value={opt}>{opt}</option>))}</select>
    {error && <p className="text-red-500 text-[10px] mt-1">{error.message}</p>}
  </div>
)

export default PartnerWithUs