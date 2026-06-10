import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f1419 0%, #1a1f2e 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {/* 404 Error Code */}
        <div
          style={{
            fontSize: "120px",
            fontWeight: "900",
            background: "linear-gradient(135deg, #8bc700 0%, #7ab600 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: 1,
            marginBottom: "20px",
            letterSpacing: "-2px",
          }}
        >
          404
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#ffffff",
            marginBottom: "12px",
            lineHeight: 1.3,
          }}
        >
          Page Not Found
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255, 255, 255, 0.7)",
            marginBottom: "32px",
            lineHeight: 1.6,
          }}
        >
          Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "linear-gradient(135deg, #8bc700 0%, #7ab600 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 20px rgba(139, 199, 0, 0.25)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 28px rgba(139, 199, 0, 0.35)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 8px 20px rgba(139, 199, 0, 0.25)";
            }}
          >
            <Home size={18} />
            Go Home
          </button>

          <button
            onClick={() => navigate(-1)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              background: "rgba(255, 255, 255, 0.1)",
              color: "#ffffff",
              border: "1px solid rgba(139, 199, 0, 0.3)",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.15)";
              e.target.style.borderColor = "rgba(139, 199, 0, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.1)";
              e.target.style.borderColor = "rgba(139, 199, 0, 0.3)";
            }}
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        {/* Decorative Elements */}
        <div
          style={{
            marginTop: "60px",
            opacity: 0.3,
            fontSize: "60px",
          }}
        >
          🔍
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
