import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import * as yup from 'yup';
import { API_CONFIG } from '../config/api';

const schema = yup.object({
  firstName: yup.string().trim().required('First name is required'),
  lastName: yup.string().trim().required('Last name is required'),
  email: yup.string().trim().email('Enter a valid email').required('Email is required'),
  phone: yup.string().trim().required('Phone is required'),
  dob: yup.string().trim(),
  gender: yup.string().trim().required('Select gender'),
  pincode: yup.string().trim(),
  pan: yup.string().trim(),
  aadhar: yup.string().trim(),
  employeeType: yup.string().trim().required('Select employeeType type'),
  city: yup.string().trim(),
  state: yup.string().trim().required('Select state'),
  requiredLoanAmount: yup.string().trim().required('Required loan amount'),
  income: yup.string().trim().required('Income is required'),
  reasonLoanAmount: yup.string().trim().required('Reason for loan is required'),
  agree: yup.bool().oneOf([true], 'You must accept the terms')
});

const initialFormData = {
  firstName: '', lastName: '', email: '', phone: '', dob: '', gender: '',
  pincode: '', pan: '', aadhar: '', employeeType: '', city: '', state: '',
  requiredLoanAmount: '', income: '', reasonLoanAmount: '', agree: false
};

export default function InvestFormMedical({
  buttonLabel = 'Apply Now',
  buttonClassName,
  buttonStyle
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const next = { ...formData, [name]: type === 'checkbox' ? checked : value };
    setFormData(next);
    if (touched[name]) {
      schema.validateAt(name, next)
        .then(() => setErrors(prev => ({ ...prev, [name]: undefined })))
        .catch(err => setErrors(prev => ({ ...prev, [name]: err.message })));
    }
  };

  const handleBlur = e => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    schema.validateAt(name, formData)
      .then(() => setErrors(prev => ({ ...prev, [name]: undefined })))
      .catch(err => setErrors(prev => ({ ...prev, [name]: err.message })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    schema.validate(formData, { abortEarly: false })
      .then(async () => {
        setErrors({});
        try {
          const response = await fetch(
            API_CONFIG.FORMS.SUBMIT_LOAN_FORM('medical-loan'),
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...formData,
                loanAmount: Number(formData.requiredLoanAmount) || 0,
                productCategory: "Medical Loan"
              })
            }
          );

          const data = await response.json();

          if (response.ok) {
            alert("✅ Medical Loan Application Submitted Successfully!");
            handleClose();
          } else {
            alert(data.message || "Submission failed");
          }
        } catch (err) {
          alert("Network error. Please try again.");
          console.error(err);
        }
      })
      .catch((validationError) => {
        const nextErrors = {};
        validationError.inner.forEach(err => {
          nextErrors[err.path] = err.message;
        });
        setErrors(nextErrors);
        setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      });
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);
  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={buttonClassName || "bg-[#8bc700] text-white border-none py-2.5 px-4 rounded-md font-bold cursor-pointer"}
        style={buttonStyle}
      >
        {buttonLabel}
      </button>

      {open && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 bg-black/55 flex items-center justify-center z-[2147483647] p-3"
          onClick={handleClose}
        >
          <div
            className="bg-[#f5f8fc] text-[#1f2933] rounded-xl w-[min(860px,100%)] border border-[#d9e2ec] shadow-[0_18px_48px_rgba(0,0,0,0.14)] px-5 py-[18px] relative max-h-[calc(100vh-24px)] overflow-y-auto"
            onClick={e => e.stopPropagation()}
            role='dialog'
            aria-modal='true'
            aria-label='Apply For Medical Loan'
          >
            <button
              onClick={handleClose}
              aria-label='Close'
              className="absolute top-2.5 right-3 border-none bg-transparent text-lg font-bold cursor-pointer text-[#64748b]"
            >
              ×
            </button>

            <h2 className="text-center mt-0 mb-4 text-[#7ab600] text-2xl font-bold">
              Apply For Medical Loan
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2.5">
                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-2 items-start">
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
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-3 gap-2 items-start">
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
                    placeholder='D.O.B'
                    value={formData.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    as='select'
                    name='gender'
                    placeholder='Gender'
                    value={formData.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.gender}
                    touched={touched.gender}
                  >
                    <option value='' disabled>
                      Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Field>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-3 gap-2 items-start">
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
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-2 gap-2 items-start">
                  <Field
                    as='select'
                    name='employeeType'
                    placeholder='employeeType Type'
                    value={formData.employeeType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.employeeType}
                    touched={touched.employeeType}
                  >
                    <option value='' disabled>
                      employeeType Type
                    </option>
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
                </div>

                {/* Row 5 */}
                <div className="grid grid-cols-2 gap-2 items-start">
                  <Field
                    name="income"
                    placeholder="Annual Income (INR)"
                    value={formData.income}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.income}
                    touched={touched.income}
                  />
                  <Field
                    as='select'
                    name='state'
                    placeholder='State'
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.state}
                    touched={touched.state}
                  >
                    <option value='' disabled>
                      State
                    </option>
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
                    <option>Andaman and Nicobar Islands</option>
                    <option>Chandigarh</option>
                    <option>Dadra and Nagar Haveli and Daman and Diu</option>
                    <option>Delhi</option>
                    <option>Jammu and Kashmir</option>
                    <option>Ladakh</option>
                    <option>Lakshadweep</option>
                    <option>Puducherry</option>
                  </Field>
                </div>

                {/* Row 6 */}
                <div className="grid grid-cols-2 gap-2 items-start">
                  <Field
                    name='requiredLoanAmount'
                    placeholder='Required Loan Amount'
                    value={formData.requiredLoanAmount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    name='reasonLoanAmount'
                    placeholder='Reason for Loan'
                    value={formData.reasonLoanAmount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              {/* Checkbox Wrapper */}
              <label className="flex items-center gap-2 text-xs mt-3.5 select-none cursor-pointer">
                <input
                  type='checkbox'
                  name='agree'
                  checked={formData.agree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="rounded border-gray-300 text-[#8bc700] focus:ring-[#8bc700]"
                />
                <span className="text-gray-700">
                  I agree to the{' '}
                  <a href='/terms' className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>{' '}
                  and{' '}
                  <a href='/privacy-policy' className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              {touched.agree && errors.agree && (
                <div className="text-amber-600 text-[11.5px] mt-1 pl-0.5">{errors.agree}</div>
              )}

              {/* Submit Wrapper */}
              <div className="text-center mt-3">
                <button
                  type='submit'
                  className="bg-gradient-to-r from-[#8bc700] to-[#7ab600] text-white border-none py-2.5 px-4.5 rounded-lg font-semibold cursor-pointer min-w-[140px] shadow-[0_10px_18px_rgba(139,199,0,0.35)] transition-transform active:scale-[0.98]"
                >
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

function Field ({ as = 'input', error, touched, className, ...props }) {
  const Component = as === 'select' ? 'select' : 'input'
  
  // Base field styling with conditional error boundary
  const inputStyles = `
    w-full h-9 py-1.5 px-2.5 leading-5 box-border rounded-md text-[12.5px] bg-white text-gray-800 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-1 focus:ring-[#8bc700]
    ${touched && error ? 'border border-amber-500' : 'border border-slate-300'}
  `

  return (
    <div className="flex flex-col gap-0.5">
      <Component
        {...props}
        className={`${inputStyles} ${className || ''}`}
        aria-invalid={touched && Boolean(error)}
      />
      <div className="min-h-[16px]">
        {touched && error ? (
          <div className="text-amber-600 text-[11.5px] mt-0.5 pl-0.5">
            {error}
          </div>
        ) : null}
      </div>
    </div>
  )
}