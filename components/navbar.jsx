import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/logo1.png";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Loans",
    children: [
      
      { label: "Loan Against Property", href: "/loans/loan-against-property" },
      { label: "Vehicle Loan", href: "/loans/vehicle" },
      { label: "Education Loan", href: "/loans/education" },
      { label: "Medical Loan", href: "/loans/medical" },
      { label: "Home Loan", href: "/loans/home" },
      { label: "Loan Against Share", href: "/loans/loan-against-share" },
       { label: "Supply chain Finance", href: "/loans/supply-chain" },
    ],
  },
  {
    label: "Investment Plans",
    children: [
      { label: "14% Investment Club", href: "/investment-plans" },
      { label: "Invest in Mutual Funds", href: "/investment-plans/mutual-funds" },
      
      { label: "Investment in Equity", href: "/investment-plans/equity" },
    ],
  },
  {
    label: "Products",
    children: [
      { label: "Credit Card", href: "/products/credit-card" },
      { label: "Life Insurance", href: "/products/life-insurance" },
      { label: "General Insurance", href: "/products/general-insurance" },
    ],
  },
  
  {
    label: "Support",
    children: [
      { label: "About Us", href: "/support/about-us" },
      { label: "Contact Us", href: "/support/contact-us" },
    ],
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      setOpen(null);
    }
  }, [mobileOpen]);

  const handleItemClick = (item) => {
    if (!item.children) {
      setMobileOpen(false);
      setOpen(null);
      return;
    }

    if (isMobile) {
      setOpen((prev) => (prev === item.label ? null : item.label));
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-bar">
        <Link to="/" className="nav-logo" aria-label="BYND Finserve home" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="BYND Finserve" />
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="nav-list"
          onClick={() =>
            setMobileOpen((prev) => {
              const next = !prev;
              if (!next) {
                setOpen(null);
              }
              return next;
            })
          }
        >
          <span className="nav-toggle-bars" aria-hidden="true">
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </span>
          <span>Menu</span>
        </button>

        <ul
          id="nav-list"
          className={`nav-list ${mobileOpen ? "is-open" : ""}`}
          onMouseLeave={() => !isMobile && setOpen(null)}
        >
          {NAV_ITEMS.map((item, idx) => (
            <li
              key={item.label}
              className="nav-item"
              onMouseEnter={() => !isMobile && setOpen(item.label)}
              onMouseLeave={() => !isMobile && setOpen(null)}
              style={{ borderLeft: idx !== 0 ? undefined : "none" }}
            >
              {item.children ? (
                <button
                  type="button"
                  className="nav-link nav-link-button"
                  aria-expanded={open === item.label}
                  onClick={() => handleItemClick(item)}
                >
                  <span>{item.label}</span>
                  {}
                </button>
              ) : (
                <Link
                  className="nav-link"
                  to={item.href ?? "#"}
                  onClick={() => {
                    setMobileOpen(false);
                    setOpen(null);
                  }}
                >
                  {item.label}
                </Link>
              )}

              {item.children && open === item.label && (
                <ul className="nav-dropdown">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <Link
                        to={child.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setOpen(null);
                        }}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        
      </div>
    </nav>
  );
}

