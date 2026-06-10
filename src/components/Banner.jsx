import React from "react";
import landingpagebanner from "../assets/landinpagebanner.png";

export default function Banner() {
  return (
    <div className="banner">
      <img
        src= {landingpagebanner}
        alt="Banner"
      />

      {/* <div className="overlay">
        <h1>Invest Smartly</h1>
        <p>Grow your wealth with secure returns</p>
        <button>Get Started</button>
      </div> */}

      <style jsx>{`
        .banner {
          position: relative;
          width: 100%;
        }

        .banner img {
          width: 100%;
          height: 500px;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
          color: white;
        }

        h1 {
          font-size: 40px;
          margin-bottom: 10px;
        }

        button {
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .banner img {
            height: 300px;
          }

          .overlay {
            left: 5%;
          }

          h1 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}