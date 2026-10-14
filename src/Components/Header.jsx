import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Header
 *
 * Mobile menu note:
 * The original theme drove its mobile nav with the SlickNav jQuery plugin,
 * which never fires correctly against React-mounted content. This component
 * renders SlickNav's markup/classes itself (`.slicknav_btn`, `.slicknav_icon`,
 * etc.) so custom.css still styles it, with open/close handled in React
 * instead of jQuery.
 *
 * NAV_ITEMS is the single source of truth for both the desktop menu
 * and the mobile menu, so they can't drift out of sync — update
 * this list once and both views pick it up.
 */

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/AboutUs" },
  { label: "Services", to: "/Services" },
  { label: "Blog", to: "/Blog" },
  { label: "Contact Us", to: "/Contact" },
];

const GMAIL_EMAIL = "aktikdesignstudio@gmail.com";
const GMAIL_SUBJECT = "Enquiry about Furniture & Interior Design Services";
const GMAIL_BODY = `Hello Aktik Design Studio Team,

I came across your website and I'm interested in your interior design services. I'd love to know more about what you offer.

My requirement:
(e.g., living room furniture, bedroom set, modular kitchen, full home interior)

Preferred budget range:

Location:

Please share details about your collections, pricing, and the next steps to get started. I'd also appreciate it if we could schedule a call or visit to discuss further.

My details:
Name:
Phone:

Thank you, and I look forward to hearing from you.

Best regards,`;

const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${GMAIL_EMAIL}&su=${encodeURIComponent(GMAIL_SUBJECT)}&body=${encodeURIComponent(GMAIL_BODY)}`;

function MobileNav({ isOpen, onLinkClick }) {
  return (
    <div
      className="slicknav_menu"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <ul className="slicknav_nav">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link to={item.to} className="slicknav_row" onClick={onLinkClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  // Close menu when clicking outside the header
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Header Start */}
      <header className="main-header" ref={headerRef}>
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="header-action-box">
              {/* Header Contact Info List Start */}
              <div className="header-contact-info-list mobile-hide">
                {/* Header Contact Info Start */}
                <div className="header-contact-info">
                  <div className="icon-box">
                    <img src="/assets/images/icon-phone-primary.svg" alt="Phone" />
                  </div>
                  <div className="header-contact-info-content">
                    <p>Need Help ?</p>
                    <span>
                      <a href="tel:+917259759858">+91 7259759858</a>
                    </span>
                  </div>
                </div>
                {/* Header Contact Info End */}
              </div>
              {/* Header Contact Info List End */}

              {/* Logo Start */}
              <Link className="navbar-brand" to="/">
                <img src="/assets/images/logo_dark.avif" alt="Aktik Designs Logo" />
              </Link>
              {/* Logo End */}

              {/* Header Action Details Start */}
              <div className="header-action-details">
                <ul>
                  <li>
                    <a
                      href="https://www.instagram.com/aktik_designs/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.82.34-.46.18-.79.39-1.13.73-.34.34-.55.67-.73 1.13-.14.34-.3.86-.34 1.82C3.19 8.5 3.18 8.85 3.18 12s.01 3.5.07 4.73c.04.96.2 1.48.34 1.82.18.46.39.79.73 1.13.34.34.67.55 1.13.73.34.14.86.3 1.82.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.82-.34.46-.18.79-.39 1.13-.73.34-.34.55-.67.73-1.13.14-.34.3-.86.34-1.82.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.82a2.96 2.96 0 0 0-.73-1.13 2.96 2.96 0 0 0-1.13-.73c-.34-.14-.86-.3-1.82-.34C15.5 3.19 15.15 3.18 12 3.18zm0 3.06a5.76 5.76 0 1 1 0 11.52 5.76 5.76 0 0 1 0-11.52zm0 1.8a3.96 3.96 0 1 0 0 7.92 3.96 3.96 0 0 0 0-7.92zm6-.54a1.35 1.35 0 1 1-2.7 0 1.35 1.35 0 0 1 2.7 0z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/917259759858"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with us on WhatsApp"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.44 1.32 4.94L2 22l5.27-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.35c0-4.55 3.7-8.24 8.26-8.24 2.2 0 4.28.86 5.84 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.55-3.71 8.21-8.27 8.21zm4.53-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02s-.43.06-.66.31c-.23.25-.87.85-.87 2.08s.89 2.42 1.02 2.58c.12.16 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="tel:+917259759858" aria-label="Call us at +91 7259759858">
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href={gmailLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Email us at aktikdesignstudio@gmail.com"
                    >
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 12l8-5.99V6H4zm16 12V8.24l-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Header Action Details End */}
            </div>

            {/* Main Menu Start (desktop) */}
            <div className="main-menu">
              <div className="collapse navbar-collapse">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    {NAV_ITEMS.map((item) => (
                      <li className="nav-item" key={item.label}>
                        <Link className="nav-link" to={item.to}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile toggle button (replaces SlickNav's generated button) */}
              <div className="navbar-toggle">
                <button
                  type="button"
                  className={`slicknav_btn${isMenuOpen ? " slicknav_open" : ""}`}
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-nav-menu"
                >
                  <span className="slicknav_icon" aria-hidden="true">
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                    <span className="slicknav_icon-bar" />
                  </span>
                </button>
              </div>
            </div>
            {/* Main Menu End */}
          </nav>

          {/* Mobile menu panel (replaces SlickNav's generated menu) */}
          <div className="responsive-menu" id="mobile-nav-menu">
            <MobileNav isOpen={isMenuOpen} onLinkClick={closeMenu} />
          </div>
        </div>
      </header>
      {/* Header End */}
    </>
  );
}