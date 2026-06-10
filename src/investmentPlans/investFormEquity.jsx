import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as yup from "yup";
import { API_CONFIG } from "../config/api";

const schema = yup.object({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  email: yup.string().trim().email("Enter a valid email").required("Email is required"),
  phone: yup.string().trim().required("Phone is required"),
  dob: yup.string().trim(),
  gender: yup.string().trim().required("Select gender"),
  pincode: yup.string().trim(),
  pan: yup.string().trim(),
  aadhar: yup.string().trim(),
  employeeType: yup.string().trim().required("Select employeeType type"),
  city: yup.string().trim(),
  state: yup.string().trim().required("Select state"),
  investIn: yup.string().trim().required("Select investment type"),
  tenure: yup.string().trim(),
  amountrange: yup.string().trim(),
  income: yup.string().trim().required("Income is required"),
  agree: yup.bool().oneOf([true], "You must accept the terms"),
});

const initialFormData = {
  firstName: "", lastName: "", email: "", phone: "", dob: "", gender: "",
  pincode: "", pan: "", aadhar: "", employeeType: "", city: "", state: "",
  investIn: "", tenure: "", amountrange: "", income: "", agree: false,
};

export default function InvestFormEquity({
  buttonLabel = "Apply Now",
  buttonClassName,
  buttonStyle,
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const next = { ...formData, [name]: type === "checkbox" ? checked : value };
    setFormData(next);

    if (touched[name]) {
      schema.validateAt(name, next)
        .then(() => setErrors(prev => ({ ...prev, [name]: undefined })))
        .catch(err => setErrors(prev => ({ ...prev, [name]: err.message })));
    }
  };

  const handleBlur = (e) => {
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
        setLoading(true);

        try {
          const response = await fetch(
            API_CONFIG.FORMS.SUBMIT_PRODUCT_FORM('equity'),
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...formData,
                productCategory: "Equity",
              }),
            }
          );

          const data = await response.json();

          if (response.ok) {
            alert("✅ Equity Investment Application Submitted Successfully!");
            handleClose();
          } else {
            alert(data.message || "Submission failed");
          }
        } catch (err) {
          alert("Network error. Please try again.");
          console.error(err);
        } finally {
          setLoading(false);
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
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={buttonClassName}
        style={{
          ...(buttonClassName ? {} : {
            background: "#8bc700",
            color: "white",
            padding: "10px 16px",
            borderRadius: "6px",
            fontWeight: 700,
            cursor: "pointer",
          }),
          ...buttonStyle,
        }}
      >
        {buttonLabel}
      </button>

      {open && createPortal(
        <div className="fixed inset-0 bg-black/55 flex items-center justify-center z-[2147483647] p-3" onClick={handleClose}>
          <div className="bg-[#f5f8fc] text-[#1f2933] rounded-xl w-[min(860px,100%)] border border-[#d9e2ec] shadow-xl p-6 relative max-h-[calc(100vh-24px)] overflow-y-auto" onClick={e => e.stopPropagation()}>
            
            <button onClick={handleClose} className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-700">×</button>

            <h2 className="text-center mb-6 text-[#7ab600] text-2xl font-bold">Apply for Investment in Equity</h2>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-3">
                <div style={row3}>
                  <Field name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} error={errors.firstName} touched={touched.firstName} />
                  <Field name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} error={errors.lastName} touched={touched.lastName} />
                  <Field name="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} />
                </div>

                <div style={row3}>
                  <Field name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} touched={touched.phone} />
                  <Field name="dob" placeholder="D.O.B" value={formData.dob} onChange={handleChange} onBlur={handleBlur} />
                  <Field as="select" name="gender" value={formData.gender} onChange={handleChange} onBlur={handleBlur} error={errors.gender} touched={touched.gender}>
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Field>
                </div>

                <div style={row3}>
                  <Field name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} onBlur={handleBlur} />
                  <Field name="pan" placeholder="PAN Number" value={formData.pan} onChange={handleChange} onBlur={handleBlur} />
                  <Field name="aadhar" placeholder="Aadhar Number" value={formData.aadhar} onChange={handleChange} onBlur={handleBlur} />
                </div>

                <div style={row2}>
                  <Field name="income" placeholder="Annual Income (INR)" value={formData.income} onChange={handleChange} onBlur={handleBlur} error={errors.income} touched={touched.income} />
                  <Field as="select" name="employeeType" value={formData.employeeType} onChange={handleChange} onBlur={handleBlur} error={errors.employeeType} touched={touched.employeeType}>
                    <option value="">employeeType Type</option>
                    <option>Salaried</option>
                    <option>Self Employed</option>
                  </Field>
                </div>

                <div style={row2}>
                  <Field name="city" placeholder="City" value={formData.city} onChange={handleChange} onBlur={handleBlur} />
                  <Field as="select" name="state" value={formData.state} onChange={handleChange} onBlur={handleBlur} error={errors.state} touched={touched.state}>
                    <option value="">Select State</option>
                    <option>Delhi</option>
                    <option>Haryana</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </Field>
                </div>

                <div style={row2}>
                  <Field as="select" name="investIn" value={formData.investIn} onChange={handleChange} onBlur={handleBlur} error={errors.investIn} touched={touched.investIn}>
                    <option value="">Select Investment Type</option>
                    <option>Equity Shares</option>
                    <option>Private Equity</option>
                    <option>Startup Investment</option>
                  </Field>
                  <Field name="tenure" placeholder="Tenure (in months)" value={formData.tenure} onChange={handleChange} onBlur={handleBlur} />
                </div>

                <Field name="amountrange" placeholder="Investment Amount Range" value={formData.amountrange} onChange={handleChange} onBlur={handleBlur} />
              </div>

              <label className="flex items-center gap-2 mt-4 text-sm cursor-pointer select-none">
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} onBlur={handleBlur} className="w-4 h-4 accent-[#7ab600]" />
                <span>I agree to the Terms & Conditions and Privacy Policy</span>
              </label>

              {touched.agree && errors.agree && <p className="text-red-500 text-xs font-semibold mt-1">{errors.agree}</p>}

              <div className="text-center mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-[#8bc700] to-[#7ab600] text-white py-3 px-10 rounded-lg font-bold disabled:opacity-70 shadow-md active:scale-[0.99] transition-transform"
                >
                  {loading ? "Submitting..." : "Apply Now"}
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

function Field({ as = "input", error, touched, ...props }) {
  const Component = as === "select" ? "select" : "input";
  return (
    <div className="flex flex-col gap-1 flex-1 min-w-[150px]">
      <Component
        {...props}
        style={fieldStyle}
        className={`border text-sm outline-none transition-colors ${
          touched && error ? "border-red-500 bg-red-50/20" : "border-[#cbd5e1] focus:border-[#7ab600]"
        }`}
      />
      {touched && error && <p style={errorTextStyle}>{error}</p>}
    </div>
  );
}

// Layout Configuration CSS Objects (Fixes the undefined ReferenceErrors)
const row3 = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const row2 = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const fieldStyle = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "6px",
  backgroundColor: "#ffffff",
  color: "#1f2933",
};

const errorTextStyle = {
  color: "#ef4444",
  fontSize: "12px",
  fontWeight: "600",
  marginTop: "2px",
};