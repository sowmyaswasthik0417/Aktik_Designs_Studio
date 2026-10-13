import React from 'react'

export default function Footer() {
  const email = "aktikdesignstudio@gmail.com";
const subject = "Enquiry about Furniture & Interior Design Services";
const body = `Hello Aktik Design Studio Team,

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

const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
 
  return (
    <div>
          {/* Main Footer Start */}
  <footer className="main-footer dark-section">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          {/* Footer Header Box Start */}
          <div className="footer-header">
            {/* Footer Social Link Start */}
            <div className="footer-social-links">
              {/* <ul>
                <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
              </ul> */}
            
<ul>
  {/* Pinterest */}
  <li>
    <a
      href="https://pin.it/7ExwNgzA2"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pinterest"
    >
      <i className="fa-brands fa-pinterest-p" />
    </a>
  </li>





  {/* Instagram */}
  <li>
    <a
      href="https://www.instagram.com/aktik_designs/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <i className="fa-brands fa-instagram" />
    </a>
  </li>

  {/* WhatsApp */}
  <li>
    <a
      href="https://wa.me/917259759858"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" />
    </a>
  </li>

  {/* Phone */}
  <li>
    <a href="tel:+917259759858" aria-label="Call us">
      <i className="fa-solid fa-phone" />
    </a>
  </li>

  {/* Email */}
  <li>
    <a
       href={gmailLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email us"
    >
      <i className="fa-solid fa-envelope" />
    </a>
  </li>
</ul>
            </div>
            {/* Footer Social Link End */} 
            {/* Footer Logo Start */}
            <div className="footer-logo">
              <img  src="../assets/images/logo_white1.avif" alt="Logo" />
            </div>
            {/* Footer Logo End */}
            {/* Footer Contact Item List Start */}
            <div className="footer-contact-item-list">
              {/* Footer Contact Item Start */}
              <div className="footer-contact-item">
                <div className="icon-box">
                  <img src="/assets/images/icon-phone-primary.svg" alt />
                </div>
                <div className="footer-contact-item-content">
                  {/* <p>Call 24/7</p> */}
                  <h2><a href="tel:7259759858">+91 7259759858</a></h2>
                  <h2><a href="tel:7760587309">+91 7760587309</a></h2>
                </div>
              </div>
              {/* Footer Contact Item End */}
            </div>
            {/* Footer Contact Item List End */}
          </div>
          {/* Footer Header Box End */}
        </div>
        <div className="col-xl-4">
          {/* Footer Newsletter Box Start */}
          <div className="footer-newsletter-box">
            {/* Footer Newsletter Content Start */}
            <div className="footer-newsletter-content">
              <p>Crafted with passion deliver elegant furniture experiences for modern homes and lifestyles.</p>
            </div>
            {/* Footer Newsletter Content End */}
            {/* Footer Newsletter Form Start */}
            
            {/* Footer Newsletter Form End */}
          </div>
          {/* Footer Newsletter Box End */}
        </div>
        <div className="col-xl-8">
          {/* Footer Links Box Start */}
          <div className="footer-links-box">
            {/* Footer Links Start */}
            <div className="footer-links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">About Us</a></li>
                <li><a href="/Services">Services</a></li>
                {/* <li><a href="/Projects">Projects</a></li> */}
                {/* <li><a href="/Products">Products</a></li> */}
                <li><a href="/Testimonials">Testimonials</a></li>
                <li><a href="/Contact">Contact Us</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
            {/* Footer Links Start */}
            <div className="footer-links">
              <h2>Services</h2>
              <ul>
                <li><a href="/Services">Residential Interiors</a></li>
                <li><a href="/Services">Modular Kitchens</a></li>
                <li><a href="/Services">Bedrooms</a></li>
                <li><a href="/Services">Living Rooms</a></li>
                <li><a href="/Services">Wardrobes</a></li>
                <li><a href="/Services">Custom Furniture</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
            {/* Footer Links Start */}
            <div className="footer-links footer-contact-list">
              <h2>Contact Information</h2>
              <ul>
                <li>
1st Floor, Prime towers, opp. to Mangalore nursing home, Bendoorwell, Kankanady, Mangaluru, Karnataka 575002</li>
                <li><a href="tel:7259759858">+91 7259759858</a></li>
                <li><a href="tel:7760587309">+91 7760587309</a></li>
                <li><a href="mailto:aktikdesignstudio@gmail.com">aktikdesignstudio@gmail.com</a></li>
              </ul>
            </div>
            {/* Footer Links End */}
          </div>
          {/* Footer Links Box End */}
        </div>
      </div>
    </div>
    {/* Foooter Copyright Start */}
    <div className="footer-copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Footer Copyright Start */}
            <div className="footer-copyright-box">
              {/* Footer Copyright Text Start */}
              <div className="footer-copyright-text">
                <p>Copyright © 2026 All Rights Reserved.</p>
              </div>
              {/* Footer Copyright Text End */}
              {/* Footer Payment Options Start */}
              {/* <div className="footer-payment-options">
                <ul>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-1.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-2.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-3.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-4.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-5.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-6.svg" alt /></a></li>
                </ul>
              </div> */}
              {/* Footer Payment Options End */}
            </div>
            {/* Footer Copyright End */}
          </div>
        </div>
      </div>
    </div>
    {/* Foooter Copyright Start */}
  </footer>
  {/* Main Footer End */}
    </div>
  )
}
