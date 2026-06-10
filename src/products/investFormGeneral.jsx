import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import * as yup from 'yup'
import { API_CONFIG } from '../config/api'

const fieldStyle = {
  width: '100%',
  height: '38px',
  padding: '8px 10px',
  lineHeight: '20px',
  boxSizing: 'border-box',
  borderRadius: '6px',
  border: '1px solid #cbd5e1',
  fontSize: '12.5px',
  background: 'white',
  color: '#1f2937',
  boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.04)'
}

const errorTextStyle = {
  color: '#d97706',
  fontSize: '11.5px',
  marginTop: '4px',
  paddingLeft: '2px'
}

const schema = yup.object({
  firstName: yup.string().trim().required('First name is required'),
  lastName: yup.string().trim().required('Last name is required'),
  email: yup
    .string()
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),
  phone: yup.string().trim().required('Phone is required'),
  dob: yup.string().trim(),
  gender: yup.string().trim().required('Select gender'),
  pincode: yup.string().trim(),
  pan: yup.string().trim(),
  aadhar: yup.string().trim(),
  employeeType: yup.string().trim().required('Select employeeType type'),
  amount: yup.number().required('Amount is required').positive('Amount must be a positive number'),
  city: yup.string().trim(),
  state: yup.string().trim().required('Select state'),
  fundType: yup.string().trim().required('Select fund type'),
  amount: yup.string().trim(),
  income: yup.string().trim().required('Income is required'),
  agree: yup.bool().oneOf([true], 'You must accept the terms')
})

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  amount: '',
  dob: '',
  gender: '',
  pincode: '',
  pan: '',
  aadhar: '',
  employeeType: '',
  city: '',
  state: '',
  fundType: '',
  amount: '',
  income: '',
  agree: false
}

export default function InvestForm({
  buttonLabel = 'Apply',
  buttonClassName,
  buttonStyle,
  onOpenRef
}) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = e => {
    const { name, value, type, checked } = e.target

    const next = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    }

    setFormData(next)

    if (touched[name]) {
      schema
        .validateAt(name, next)
        .then(() => {
          setErrors(prev => ({
            ...prev,
            [name]: undefined
          }))
        })
        .catch(err => {
          setErrors(prev => ({
            ...prev,
            [name]: err.message
          }))
        })
    }
  }

  const handleBlur = e => {
    const { name } = e.target

    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    schema
      .validateAt(name, formData)
      .then(() => {
        setErrors(prev => ({
          ...prev,
          [name]: undefined
        }))
      })
      .catch(err => {
        setErrors(prev => ({
          ...prev,
          [name]: err.message
        }))
      })
  }

  const handleSubmit = e => {
    e.preventDefault()

    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        setErrors({})

        try {
          const response = await fetch(
            API_CONFIG.FORMS.SUBMIT_PRODUCT_FORM('general-insurance'),
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                ...formData,
                productCategory: 'General Insurance'
              })
            }
          )

          const data = await response.json()

          if (response.ok) {
            alert('General insurance application submitted successfully!')
            handleClose()
          } else {
            alert(data.message || 'Failed to submit general insurance request.')
          }
        } catch (err) {
          alert('Network error. Please try again later.')
        }
      })
      .catch(validationError => {
        const nextErrors = {}

        validationError.inner.forEach(err => {
          nextErrors[err.path] = err.message
        })

        setErrors(nextErrors)

        setTouched(
          Object.keys(formData).reduce(
            (acc, key) => ({
              ...acc,
              [key]: true
            }),
            {}
          )
        )
      })
  }

  const handleClose = () => {
    setOpen(false)
    setFormData(initialFormData)
    setErrors({})
    setTouched({})
  }

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (onOpenRef) {
      onOpenRef(() => setOpen(true))
    }
  }, [onOpenRef])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={buttonClassName}
        style={{
          ...(buttonClassName
            ? {}
            : {
                background: '#7eac15',
                color: 'white',
                border: 'none',
                padding: '10px 16px',
                borderRadius: '6px',
                fontWeight: 700,
                cursor: 'pointer'
              }),
          ...buttonStyle
        }}
      >
        {buttonLabel}
      </button>

      {open &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.55)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2147483647,
              padding: '12px'
            }}
            onClick={handleClose}
          >
            <div
              style={{
                background: '#fff',
                color: '#1f2933',
                borderRadius: '12px',
                width: 'min(650px, 100%)',
                border: '1px solid #d9e2ec',
                boxShadow: '0 18px 48px rgba(0,0,0,0.14)',
                padding: '18px 20px 24px 20px',
                position: 'relative',
                maxHeight: 'calc(100vh - 24px)',
                overflowY: 'auto'
              }}
              onClick={e => e.stopPropagation()}
              role='dialog'
              aria-modal='true'
              aria-label='Apply For General Insurance'
            >
              <button
                onClick={handleClose}
                aria-label='Close'
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '18px',
                  border: 'none',
                  background: 'transparent',
                  fontSize: '22px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color: '#64748b'
                }}
              >
                ×
              </button>

              <h2
                style={{
                  textAlign: 'center',
                  margin: '0 0 18px',
                  color: '#81b507',
                  fontSize: '32px',
                  fontWeight: 700,
                  letterSpacing: '0.5px'
                }}
              >
                Apply For General Insurance
              </h2>

              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  <Field
                    name='firstName'
                    placeholder='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName}
                    touched={touched.firstName}
                  />

                  <Field
                    name='lastName'
                    placeholder='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.lastName}
                    touched={touched.lastName}
                  />

                  <Field
                    name='email'
                    type='email'
                    placeholder='Enter Email'
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                  />

                  <Field
                    name='phone'
                    placeholder='Enter Phone no.'
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    touched={touched.phone}
                  />

                  <Field
                    name='dob'
                    type='date'
                    value={formData.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    as='select'
                    name='gender'
                    value={formData.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.gender}
                    touched={touched.gender}
                  >
                    <option value=''>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Field>

                  <Field
                    name='pincode'
                    placeholder='Pin code'
                    value={formData.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    name='pan'
                    placeholder='Pan Number'
                    value={formData.pan}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    name='aadhar'
                    placeholder='Aadhar Number'
                    value={formData.aadhar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    name='income'
                    placeholder='Annual Income (INR)'
                    value={formData.income}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.income}
                    touched={touched.income}
                  />
<Field
  name='amount'
  placeholder='Required Coverage Amount (INR)'
  value={formData.amount}
  onChange={handleChange}
  onBlur={handleBlur}
  error={errors.amount}
  touched={touched.amount}
/>
                  <Field
                    as='select'
                    name='employeeType'
                    value={formData.employeeType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.employeeType}
                    touched={touched.employeeType}
                  >
                    <option value=''>employeeType Type</option>
                    <option>Salaried</option>
                    <option>Self Employed</option>
                  </Field>

                  <Field
                    name='city'
                    placeholder='City'
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    as='select'
                    name='state'
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.state}
                    touched={touched.state}
                  >
                    <option value=''>State</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                    <option>Delhi</option>
                  </Field>

                  <Field
                    as='select'
                    name='fundType'
                    value={formData.fundType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.fundType}
                    touched={touched.fundType}
                  >
                    <option value=''>Select General Insurance</option>
                    <option>Health Insurance</option>
                    <option>Motor Insurance</option>
                    <option>Home Insurance</option>
                    <option>Commercial Insurance</option>
                    <option>Travel Insurance</option>
                  </Field>
                </div>

                <label
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    marginTop: '14px'
                  }}
                >
                  <input
                    type='checkbox'
                    name='agree'
                    checked={formData.agree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <span>
                    I agree to the{' '}
                    <a href='/terms' style={{ color: '#0d6efd' }}>
                      Terms & Conditions
                    </a>{' '}
                    and{' '}
                    <a
                      href='/privacy-policy'
                      style={{ color: '#0d6efd' }}
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {touched.agree && errors.agree && (
                  <div style={errorTextStyle}>{errors.agree}</div>
                )}

                <div style={{ textAlign: 'center', marginTop: '18px' }}>
                  <button
                    type='submit'
                    style={{
                      background: '#7eac15',
                      color: '#fff',
                      border: 'none',
                      padding: '10px 38px',
                      borderRadius: '8px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      minWidth: '140px',
                      fontSize: '18px',
                      boxShadow: '0 10px 18px rgba(139,199,0,0.18)'
                    }}
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

function Field({
  as = 'input',
  error,
  touched,
  style,
  children,
  ...props
}) {
  const Component = as === 'select' ? 'select' : 'input'

  const mergedStyle = {
    ...fieldStyle,
    ...style,
    border: touched && error ? '1px solid #f59e0b' : fieldStyle.border
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}
    >
      <Component
        {...props}
        style={mergedStyle}
        aria-invalid={touched && Boolean(error)}
      >
        {children}
      </Component>

      <div style={{ minHeight: '18px' }}>
        {touched && error ? (
          <div style={errorTextStyle}>{error}</div>
        ) : null}
      </div>
    </div>
  )
}