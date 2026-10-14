import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

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

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/AboutUs" },
  { label: "Services", to: "/Services" },
  { label: "Testimonials", to: "/Testimonials" },
  { label: "Contact Us", to: "/Contact" },
];

const SERVICE_LINKS = [
  "Residential Interiors",
  "Modular Kitchens",
  "Bedrooms",
  "Living Rooms",
  "Wardrobes",
  "Custom Furniture",
];

export default function Footer() {
  return (
    <div className="aktik-footer">
      {/* Main Footer Start */}
      <footer className="main-footer dark-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* Footer Header Box Start */}
              <div className="footer-header">
                {/* Footer Social Links Start */}
                <div className="footer-social-links">
                  <ul>
                    {/* Pinterest */}
                    <li>
                      <a
                        href="https://pin.it/7ExwNgzA2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Pinterest"
                      >
                        <i className="fa-brands fa-pinterest-p" aria-hidden="true" />
                      </a>
                    </li>

                    {/* Instagram */}
                    <li>
                      <a
                        href="https://www.instagram.com/aktik_designs/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Instagram"
                      >
                        <i className="fa-brands fa-instagram" aria-hidden="true" />
                      </a>
                    </li>

                    {/* WhatsApp */}
                    <li>
                      <a
                        href="https://wa.me/917259759858"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with us on WhatsApp"
                      >
                        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
                      </a>
                    </li>

                    {/* Phone */}
                    <li>
                      <a href="tel:+917259759858" aria-label="Call us at +91 7259759858">
                        <i className="fa-solid fa-phone" aria-hidden="true" />
                      </a>
                    </li>

                    {/* Email */}
                    <li>
                      <a
                        href={gmailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email us at aktikdesignstudio@gmail.com"
                      >
                        <i className="fa-solid fa-envelope" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Social Links End */}

                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <Link to="/">
                    <img src="/assets/images/logo_white1.avif" alt="Aktik Designs Logo" />
                  </Link>
                </div>
                {/* Footer Logo End */}

                {/* Footer Contact Item List Start */}
                <div className="footer-contact-item-list">
                  {/* Footer Contact Item Start */}
                  <div className="footer-contact-item">
                    <div className="icon-box">
                      <img src="/assets/images/icon-phone-primary.svg" alt="Phone" />
                    </div>
                    <div className="footer-contact-item-content">
                      <h2><a href="tel:+917259759858">+91 7259759858</a></h2>
                      <h2><a href="tel:+917760587309">+91 7760587309</a></h2>
                    </div>
                  </div>
                  {/* Footer Contact Item End */}
                </div>
                {/* Footer Contact Item List End */}
              </div>
              {/* Footer Header Box End */}
            </div>

            <div className="col-xl-4 col-lg-12">
              {/* Footer Newsletter Box Start */}
              <div className="footer-newsletter-box">
                {/* Footer Newsletter Content Start */}
                <div className="footer-newsletter-content">
                  <p>Crafted with passion deliver elegant furniture experiences for modern homes and lifestyles.</p>
                </div>
                {/* Footer Newsletter Content End */}
              </div>
              {/* Footer Newsletter Box End */}
            </div>

            <div className="col-xl-8 col-lg-12">
              {/* Footer Links Box Start */}
              <div className="footer-links-box">
                {/* Quick Links */}
                <div className="footer-links">
                  <h2>Quick Links</h2>
                  <ul>
                    {QUICK_LINKS.map((link) => (
                      <li key={link.label}>
                        <Link to={link.to}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services Links */}
                <div className="footer-links">
                  <h2>Services</h2>
                  <ul>
                    {SERVICE_LINKS.map((service) => (
                      <li key={service}>
                        <Link to="/Services">{service}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Information */}
                <div className="footer-links footer-contact-list">
                  <h2>Contact Information</h2>
                  <ul>
                    <li>
                      1st Floor, Prime towers, opp. to Mangalore nursing home,
                      Bendoorwell, Kankanady, Mangaluru, Karnataka 575002
                    </li>
                    <li><a href="tel:+917259759858">+91 7259759858</a></li>
                    <li><a href="tel:+917760587309">+91 7760587309</a></li>
                    <li>
                      <a href="mailto:aktikdesignstudio@gmail.com">
                        aktikdesignstudio@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Links Box End */}
            </div>
          </div>
        </div>

        {/* Footer Copyright Start */}
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Footer Copyright Start */}
                <div className="footer-copyright-box">
                  {/* Footer Copyright Text Start */}
                  <div className="footer-copyright-text">
                    <p>Copyright &copy; 2026 All Rights Reserved.</p>
                  </div>
                  {/* Footer Copyright Text End */}
                </div>
                {/* Footer Copyright End */}
              </div>
            </div>
          </div>
        </div>
        {/* Footer Copyright End */}
      </footer>
      {/* Main Footer End */}
    </div>
  );
}