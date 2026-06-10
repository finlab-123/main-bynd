import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as yup from "yup";
import { apiCall, API_CONFIG } from "../config/api";

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

// Syncing validations directly with database schema keys
const schema = yup.object({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().required("Last name is required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup.string().trim().required("Phone number is required"),
  dob: yup.string().trim(),
  gender: yup.string().trim().required("Select gender"),
  pincode: yup.string().trim(),
  pan: yup.string().trim(),
  aadhar: yup.string().trim(),
  employeeType: yup.string().trim().required("Select employee type"),
  city: yup.string().trim(),
  state: yup.string().trim().required("Select state"),
  investIn: yup.string().trim().required("Select investment fund type"),
  tenure: yup.string().trim(),
  amountrange: yup.string().trim().required("Select amount range"),
  annualIncome: yup.string().trim().required("Annual income is required"),
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
  investIn: "",
  tenure: "",
  amountrange: "",
  annualIncome: "",
  agree: false,
};

export default function InvestForm({
  buttonLabel = "Apply Now",
  buttonClassName,
  buttonStyle,
}) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const next = { ...formData, [name]: type === "checkbox" ? checked : value };
    setFormData(next);
    if (touched[name]) {
      schema
        .validateAt(name, next)
        .then(() => setErrors((prev) => ({ ...prev, [name]: undefined })))
        .catch((err) =>
          setErrors((prev) => ({ ...prev, [name]: err.message })),
        );
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    schema
      .validateAt(name, formData)
      .then(() => setErrors((prev) => ({ ...prev, [name]: undefined })))
      .catch((err) => setErrors((prev) => ({ ...prev, [name]: err.message })));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        setErrors({});

        const targetUrl = API_CONFIG.FORMS.SUBMIT_PRODUCT_FORM('mutual-fund');
        const options = {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            productCategory: "mutual-fund", // ✅ FIXED: Exact match for Schema/Auto-assigner
          }),
        };

        const result = await apiCall(targetUrl, options);

        if (result.success) {
          alert(result.data?.message || "Investment request processed successfully!");
          handleClose();
        } else {
          alert(result.error || "Failed to submit investment request.");
        }
      })
      .catch((validationError) => {
        const nextErrors = {};
        if (validationError.inner) {
          validationError.inner.forEach((err) => {
            nextErrors[err.path] = err.message;
          });
        }
        setErrors(nextErrors);
        setTouched(
          Object.keys(formData).reduce(
            (acc, key) => ({ ...acc, [key]: true }),
            {},
          ),
        );
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
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={buttonClassName}
        style={{
          ...(buttonClassName
            ? {}
            : {
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

      {open && typeof document !== "undefined" && createPortal(
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2147483647,
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
            role="dialog"
            aria-modal="true"
            aria-label="Apply for Invest in Mutual Funds"
          >
            <button
              onClick={handleClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "10px",
                right: "12px",
                border: "none",
                background: "transparent",
                fontSize: "18px",
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
              Apply for Mutual Fund Investment
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={row3}>
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName}
                    touched={touched.firstName}
                  />
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.lastName}
                    touched={touched.lastName}
                  />
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                  />
                </div>

                <div style={row3}>
                  <Field
                    name="phone"
                    placeholder="Enter Phone no."
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    touched={touched.phone}
                  />
                  <Field
                    name="dob"
                    placeholder="D.O.B"
                    value={formData.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    as="select"
                    name="gender"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.gender}
                    touched={touched.gender}
                  >
                    <option value="" disabled>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </Field>
                </div>

                <div style={row3}>
                  <Field
                    name="pincode"
                    placeholder="Pin code"
                    value={formData.pincode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    name="pan"
                    placeholder="Pan Number"
                    value={formData.pan}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    name="aadhar"
                    placeholder="Aadhar Number"
                    value={formData.aadhar} // ✅ FIXED: Bound missing attributes
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>

                <div style={row2}>
                  <Field
                    name="annualIncome"
                    placeholder="Annual Income (INR)"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.annualIncome}
                    touched={touched.annualIncome}
                  />
                  <Field
                    as="select"
                    name="employeeType"
                    value={formData.employeeType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.employeeType}
                    touched={touched.employeeType}
                  >
                    <option value="" disabled>Employee Type</option>
                    <option>Salaried</option>
                    <option>Self Employed</option>
                  </Field>
                </div>

                <div style={row2}>
                  <Field
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    as="select"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.state}
                    touched={touched.state}
                  >
                    <option value="" disabled>State</option>
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

                <div style={row3}>
                  <Field
                    as="select"
                    name="investIn"
                    value={formData.investIn}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.investIn}
                    touched={touched.investIn}
                  >
                    <option value="" disabled>Invest Choices</option>
                    <option value="Invest in Mutual Funds">Invest in Mutual Funds</option>
                    <option value="Invest in Company">Invest in Company</option>
                    <option value="Invest in Private Credit">Invest in Private Credit</option>
                    <option value="Invest in Firm">Invest in Firm</option>
                  </Field>
                  <Field
                    name="tenure"
                    placeholder="Tenure (e.g. 12-36 months)"
                    value={formData.tenure}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Field
                    name="amountrange"
                    placeholder="Amount Range (1L - 3Cr)"
                    value={formData.amountrange}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.amountrange}
                    touched={touched.amountrange}
                  />
                </div>
              </div>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  marginTop: "14px",
                }}
              >
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span>
                  I agree to the{" "}
                  <a href="/terms" style={{ color: "#0d6efd" }}>
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="/privacy-policy" style={{ color: "#0d6efd" }}>
                    Privacy Policy
                  </a>.
                </span>
              </label>
              ={touched.agree && errors.agree && (
                <div style={errorTextStyle}>{errors.agree}</div>
              )}

              <p style={{ fontSize: "12px", marginTop: "6px", color: "#334155" }}>
                Your investments are in safe hands. We ensure your data and
                funds are protected with top-tier security.
              </p>

              <div style={{ textAlign: "center", marginTop: "12px" }}>
                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(90deg, #8bc700, #7ab600)",
                    color: "white",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "8px",
                    fontWeight: 800,
                    cursor: "pointer",
                    minWidth: "140px",
                    boxShadow: "0 10px 18px rgba(139,199,0,0.35)",
                  }}
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
  );
}

function Field({ as = "input", error, touched, style, ...props }) {
  const Component = as === "select" ? "select" : "input";
  const mergedStyle = {
    ...fieldStyle,
    ...style,
    border: touched && error ? "1px solid #f59e0b" : fieldStyle.border,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Component
        {...props}
        style={mergedStyle}
        aria-invalid={touched && Boolean(error)}
      />
      <div style={{ minHeight: "18px" }}>
        {touched && error ? <div style={errorTextStyle}>{error}</div> : null}
      </div>
    </div>
  );
}