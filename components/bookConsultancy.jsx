import { useState } from "react";
import * as yup from "yup";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const schema = yup.object({
  fullname: yup.string().trim().required("Name is required"),

  phone: yup
    .string()
    .trim()
    .required("Phone number is required"),

  email: yup
    .string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required"),

  city: yup.string().trim().required("City is required"),

  state: yup.string().trim().required("State is required"),

  pin: yup.string().trim().required("Pin code is required"),

  message: yup.string().trim().required("Message is required"),
});

export default function BookConsultancy() {
  const [form, setForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    pin: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);
    setSuccess("");
    setError("");
    setErrors({});

    try {
      await schema.validate(form, { abortEarly: false });

      const response = await fetch(
        "https://bynd-backend-owi6.onrender.com/api/book-consultant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSuccess("Your request has been submitted successfully!");

      setForm({
        fullname: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        pin: "",
        message: "",
      });
    } catch (err) {
      if (err.name === "ValidationError") {
        const nextErrors = {};

        err.inner.forEach((e) => {
          nextErrors[e.path] = e.message;
        });

        setErrors(nextErrors);
      } else {
        setError(err.message || "Something went wrong");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <aside className="w-full max-w-[360px] mx-auto p-4 md:p-3 bg-[#c8e48e] text-[#283618] flex flex-col gap-4 rounded-md font-sans">

      <div className="flex flex-col gap-1.5">
        <div className="text-xs font-semibold uppercase">
          Investment Plans
        </div>

        <div className="text-[13px] font-bold">
          Book A Consultation
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="p-4 bg-white rounded-[10px] shadow-[0_12px_28px_rgba(0,0,0,0.14)] border border-[#dfe8c9]"
      >
        <div className="text-xs font-extrabold text-[#0a3d62] mb-2.5 tracking-wide">
          Start Investing Today
        </div>

        <div className="flex flex-col gap-2.5">

          {[
            "fullname",
            "phone",
            "email",
            "city",
            "state",
            "pin",
          ].map((field) => (
            <div key={field}>
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={
                  field === "fullname"
                    ? "Full Name"
                    : field === "pin"
                      ? "Pin Code"
                      : field.charAt(0).toUpperCase() + field.slice(1)
                }
                className="w-full h-8 px-3 py-2 rounded-md border border-[#cdd9b2] text-xs bg-[#f7fbef] outline-none"
              />

              {errors[field] && (
                <p className="text-red-600 text-[10px] mt-0.5">
                  {errors[field]}
                </p>
              )}
            </div>
          ))}

          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={3}
              className="w-full p-2.5 rounded-md border border-[#cdd9b2] text-xs resize-vertical bg-[#f7fbef] outline-none"
            />

            {errors.message && (
              <p className="text-red-600 text-[10px] mt-0.5">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full h-9 bg-gradient-to-r from-[#8bc700] to-[#7ab600] text-white rounded-full font-extrabold text-xs shadow-[0_8px_16px_rgba(139,199,0,0.35)] disabled:opacity-70"
          >
            {submitting ? "Submitting..." : "Apply Now"}
          </button>

          {success && (
            <p className="text-green-700 text-xs">
              {success}
            </p>
          )}

          {error && (
            <p className="text-red-600 text-xs">
              {error}
            </p>
          )}
        </div>
      </form>

      <div className="flex flex-col gap-2 text-xs">
        <div className="font-bold">Contact Us</div>

        <div className="flex items-center gap-2">
          <Phone size={14} />
          +91 9837010594
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} />
          contact@byndfinserve.com
        </div>

        <div className="flex items-start gap-2">
          <MapPin size={14} className="mt-0.5" />

          <p>
            Vatika Professional Point SPACIFY 1401,
            <br />
            14th Floor, Sector 66 Gurgaon,
            <br />
            Haryana, India 122002
          </p>
        </div>
      </div>

      <div className="rounded-md overflow-hidden shadow-md">
        <iframe
          title="Location"
          width="100%"
          height="160"
          className="border-0"
          src="https://www.google.com/maps/embed?pb=..."
        />
      </div>

      <div className="flex flex-col gap-2 text-xs">
        <div className="font-bold">Investment Plans</div>

        <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
          {[
            "14% Club",
            "Mutual Funds",
            "Private Credit",
            "Equity",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 text-[10px]"
            >
              ➤
              <span className="text-xs text-[#283618]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative min-h-[200px] p-3 bg-[url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=400&q=80')] bg-cover bg-center rounded-lg overflow-hidden shadow-lg flex flex-col justify-end">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative text-white text-center flex flex-col gap-2">
          <div className="inline-flex self-center px-2.5 py-1.5 rounded bg-white/80 text-[#2f2d35] text-xs font-bold">
            Start Your Investment Journey Today
          </div>

          <p className="text-[10px] leading-relaxed">
            Discover the potential of mutual fund investing with
            BYND. Explore curated options and grow your wealth.
          </p>

          <button className="bg-[#8bc700] text-white px-3 py-2 rounded-full text-[11px] font-bold self-center flex items-center gap-1.5 shadow-md">
            Invest Today <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}