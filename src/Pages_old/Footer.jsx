import React from 'react'

export default function Footer() {
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
              <ul>
                <li><a href="#"><i className="fa-brands fa-pinterest-p" /></a></li>
                <li><a href="#"><i className="fa-brands fa-x-twitter" /></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f" /></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram" /></a></li>
              </ul>
            </div>
            {/* Footer Social Link End */} 
            {/* Footer Logo Start */}
            <div className="footer-logo">
              <img src="/assets/images/logo-white.svg" alt />
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
                  <p>Call 24/7</p>
                  <h2><a href="tel:123456789">+91 12345 6789</a></h2>
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
            <div className="footer-newsletter-form">
              <form id="newslettersForm" action="#" method="POST">
                <div className="form-group">
                  <input type="email" name="mail" className="form-control" id="mail" placeholder="Enter Email Address *" required />
                  <button type="submit" className="newsletter-btn"><img src="/assets/images/arrow-primary.svg" alt /></button>
                </div>
              </form>
            </div>
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
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Products">Products</a></li>
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
                <li><a href="tel:123456789">7259759858</a></li>
                <li><a href="mailto:support@domain.com">support@domain.com</a></li>
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
              <div className="footer-payment-options">
                <ul>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-1.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-2.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-3.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-4.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-5.svg" alt /></a></li>
                  <li><a href="#"><img src="/assets/images/icon-payment-options-6.svg" alt /></a></li>
                </ul>
              </div>
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
