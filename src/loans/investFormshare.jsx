import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import * as yup from "yup";
import { API_CONFIG } from "../config/api";

const fieldStyle = {
  width: "100%",
  height: "38px",
  padding: "8px 10px",
  lineHeight: "20px",
  boxSizing: "border-box",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  fontSize: "12.5px",
  background: "white",
  color: "#1f2937",
  boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
};

const row3 = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "8px 12px",
  alignItems: "center",
};

const row2 = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "8px 12px",
  alignItems: "center",
};

const errorTextStyle = {
  color: "#d97706",
  fontSize: "11.5px",
  marginTop: "4px",
  paddingLeft: "2px",
};

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
  employeeType: yup.string().trim().required("Select employment type"),
  city: yup.string().trim(),
  state: yup.string().trim().required("Select state"),
  requiredAmount: yup.string().trim().required("Required loan amount is required"),
  income: yup.string().trim().required("Annual income is required"),
  propertyDescription: yup.string().trim().required("Select property type"),
  marketvalue: yup.string().trim().required("Market value is required"),
  agree: yup.bool().oneOf([true], "You must accept the terms"),
});

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  pincode: "",
  pan: "",
  aadhar: "",
  employeeType: "",
  city: "",
  state: "",
  requiredAmount: "",
  income: "",
  propertyDescription: "",
  marketvalue: "",
  agree: false,
};

function Field({ as = "input", error, touched, style, children, ...props }) {
  const Component = as === "select" ? "select" : "input";

  const mergedStyle = {
    ...fieldStyle,
    ...style,
    border: touched && error ? "1px solid #f59e0b" : fieldStyle.border,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Component {...props} style={mergedStyle} aria-invalid={touched && Boolean(error)}>
        {children}
      </Component>
      <div style={{ minHeight: "18px" }}>
        {touched && error ? <div style={errorTextStyle}>{error}</div> : null}
      </div>
    </div>
  );
}

export default function InvestFormEducation({
  buttonLabel = "Apply Now",
  buttonClassName,
  buttonStyle,
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const location = useLocation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = async (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    try {
      await schema.validateAt(name, formData);
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [name]: err.message }));
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialFormData);
    setErrors({});
    setTouched({});
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set all inputs to touched so any validation error highlights instantly
    const dynamicTouched = {};
    Object.keys(initialFormData).forEach((key) => {
      dynamicTouched[key] = true;
    });
    setTouched(dynamicTouched);

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      setLoading(true);

      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        dob: formData.dob,
        gender: formData.gender,
        pincode: formData.pincode,
        pan: formData.pan,
        aadhar: formData.aadhar,
        employeeType: formData.employeeType,
        city: formData.city,
        state: formData.state,
        loanAmount: Number(formData.requiredAmount) || 0,
        annualIncome: Number(formData.income) || 0,
        marketvalue: formData.marketvalue,
        propertyDescription: formData.propertyDescription,
        productCategory: "education-loan", 
        loanType: "Education Loan",
        agree: formData.agree,
      };

      console.log("Sending Form Payload to API Submissions Router:", payload);

      const response = await fetch(API_CONFIG.FORMS.SUBMIT_LOAN_FORM("education-loan"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Application submitted successfully!");
        setTimeout(() => handleClose(), 2500);
      } else {
        alert(data.message || "Submission failed");
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        const nextErrors = {};
        err.inner.forEach((error) => {
          nextErrors[error.path] = error.message;
        });
        setErrors(nextErrors);
      } else {
        alert(err.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={buttonClassName}
        style={{
          ...(buttonClassName ? {} : {
            background: "#8bc700",
            color: "white",
            border: "none",
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
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            zIndex: 2147483647,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
          }}
          onClick={handleClose}
        >
          <div
            style={{
              background: "#f5f8fc",
              color: "#1f2933",
              borderRadius: "12px",
              width: "min(860px, 100%)",
              border: "1px solid #d9e2ec",
              boxShadow: "0 18px 48px rgba(0,0,0,0.14)",
              padding: "18px 20px",
              position: "relative",
              maxHeight: "calc(100vh - 24px)",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "12px",
                right: "16px",
                border: "none",
                background: "transparent",
                fontSize: "24px",
                fontWeight: 700,
                cursor: "pointer",
                color: "#64748b",
              }}
            >
              ×
            </button>

            <h2
              style={{
                textAlign: "center",
                margin: "0 0 18px",
                color: "#7ab600",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              Apply For Education Loan
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={row3}>
                  <Field name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} onBlur={handleBlur} error={errors.firstName} touched={touched.firstName} />
                  <Field name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} onBlur={handleBlur} error={errors.lastName} touched={touched.lastName} />
                  <Field name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} onBlur={handleBlur} error={errors.email} touched={touched.email} />
                </div>

                <div style={row3}>
                  <Field name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone} touched={touched.phone} />
                  <Field name="dob" type="date" value={formData.dob} onChange={handleChange} onBlur={handleBlur} error={errors.dob} touched={touched.dob} />
                  <Field as="select" name="gender" value={formData.gender} onChange={handleChange} onBlur={handleBlur} error={errors.gender} touched={touched.gender}>
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Field>
                </div>

                <div style={row3}>
                  <Field name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} onBlur={handleBlur} error={errors.pincode} touched={touched.pincode} />
                  <Field name="pan" placeholder="PAN Number" value={formData.pan} onChange={handleChange} onBlur={handleBlur} error={errors.pan} touched={touched.pan} />
                  <Field name="aadhar" placeholder="Aadhar Number" value={formData.aadhar} onChange={handleChange} onBlur={handleBlur} error={errors.aadhar} touched={touched.aadhar} />
                </div>

                <div style={row2}>
                  <Field name="income" placeholder="Annual Income (INR)" value={formData.income} onChange={handleChange} onBlur={handleBlur} error={errors.income} touched={touched.income} />
                  <Field as="select" name="employeeType" value={formData.employeeType} onChange={handleChange} onBlur={handleBlur} error={errors.employeeType} touched={touched.employeeType}>
                    <option value="">Employment Type</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self-Employed</option>
                  </Field>
                </div>

                <div style={row2}>
                  <Field name="city" placeholder="City" value={formData.city} onChange={handleChange} onBlur={handleBlur} error={errors.city} touched={touched.city} />
                  <Field as="select" name="state" value={formData.state} onChange={handleChange} onBlur={handleBlur} error={errors.state} touched={touched.state}>
                    <option value="">Select State</option>
                    <option>Delhi</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                    <option>Uttar Pradesh</option>
                  </Field>
                </div>

                <div style={row3}>
                  <Field name="requiredAmount" placeholder="Required Loan Amount" value={formData.requiredAmount} onChange={handleChange} onBlur={handleBlur} error={errors.requiredAmount} touched={touched.requiredAmount} />
                  <Field as="select" name="propertyDescription" value={formData.propertyDescription} onChange={handleChange} onBlur={handleBlur} error={errors.propertyDescription} touched={touched.propertyDescription}>
                    <option value="">Property Description</option>
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </Field>
                  <Field name="marketvalue" placeholder="Current Market Value" value={formData.marketvalue} onChange={handleChange} onBlur={handleBlur} error={errors.marketvalue} touched={touched.marketvalue} />
                </div>
              </div>

              <label style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "14px", fontSize: "12px" }}>
                <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} onBlur={handleBlur} />
                <span>I agree to the Terms & Conditions and Privacy Policy.</span>
              </label>

              {touched.agree && errors.agree && <div style={errorTextStyle}>{errors.agree}</div>}

              {successMessage && <div style={{ color: "green", textAlign: "center", marginTop: "12px", fontWeight: "600" }}>{successMessage}</div>}

              <div style={{ textAlign: "center", marginTop: "18px" }}>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? "#94a3b8" : "#22c55e",
                    color: "white",
                    border: "none",
                    padding: "12px 32px",
                    borderRadius: "8px",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? "Submitting..." : "Apply for Education Loan"}
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