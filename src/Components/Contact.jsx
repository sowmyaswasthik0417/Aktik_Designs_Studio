import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwaRoa6phhz7l000cXG99Qa13V_Gf3JaMsU4WrxN851_XsdBrsJiMzx12zx1ylCeAps/exec"

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'
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
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    setStatus('sending')

    const data = {
      fname: form.fname.value,
      lname: form.lname.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    }

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data),
      })
      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Page Header Start */}
      <div className="page-header dark-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">Contact Us</h1>
                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact us</li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Page Contact Us Section Start */}
      <div className="page-contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Contact Us Body Box Start */}
              <div className="contact-us-body-box">
                {/* Contact Form Start */}
                <div className="contact-form-box">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h2 className="text-anime-style-3" data-cursor="-opaque">Do You Have Any Questions?</h2>
                    <p className="wow fadeInUp">Your comfort matters - reach out to us for any furniture related question or assistance.</p>
                  </div>
                  {/* Section Title End */}
                  <div className="contact-form">
                    <form
                      ref={formRef}
                      id="contactForm"
                      onSubmit={handleSubmit}
                      className="wow fadeInUp"
                      data-wow-delay="0.2s"
                    >
                      <div className="row">
                        <div className="form-group col-md-6 mb-4">
                          <input type="text" name="fname" className="form-control" id="fname" placeholder="Enter First Name *" required />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <input type="text" name="lname" className="form-control" id="lname" placeholder="Enter Last Name *" required />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <input type="email" name="email" className="form-control" id="email" placeholder="Enter Email Address *" required />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-6 mb-4">
                          <input type="tel" name="phone" className="form-control" id="phone" placeholder="Enter Phone Number *" required />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group col-md-12 mb-4">
                          <textarea name="message" className="form-control" id="message" rows={5} placeholder="Any Additional Message..." defaultValue="" />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="col-md-12">
                          <div className="contact-form-btn">
                            <button type="submit" className="btn-default" disabled={status === 'sending'}>
                              {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>
                            {status === 'success' && (
                              <div className="h3 mb-0">Thank you! Your message has been sent.</div>
                            )}
                            {status === 'error' && (
                              <div className="h3 mb-0">Something went wrong. Please try again.</div>
                            )}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Contact Form End */}

                {/* Contact Info Box Start */}
                <div className="contact-info-box">
                  {/* Contact Info Box Header Start */}
                  <div className="contact-info-box-header">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="text-anime-style-3" data-cursor="-opaque">Contact Info</h2>
                    </div>
                    {/* Section Title End */}
                    {/* Contact Info Item List Start */}
                    <div className="contact-info-item-list">
                      {/* Contact Info Item Start */}
                      <div className="contact-info-item wow fadeInUp">
                        <div className="icon-box">
                          <img src="/assets/images/icon-home-primary.svg" alt="" />
                        </div>
                        <div className="contact-info-item-content">
                          <h3>Address:</h3>
                          <p>1st Floor, Prime towers, opp. to Mangalore nursing home, Bendoorwell, Kankanady, Mangaluru, Karnataka 575002</p>
                        </div>
                      </div>
                      {/* Contact Info Item End */}
                      {/* Contact Info Item Start */}
                      <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                        <div className="icon-box">
                          <img src="/assets/images/icon-phone-primary.svg" alt="" />
                        </div>
                        <div className="contact-info-item-content">
                          <h3>Contact No.:</h3>
                          <p><a href="tel:7259759858">+91 7259759858</a></p>
                        </div>
                      </div>
                      {/* Contact Info Item End */}
                      {/* Contact Info Item Start */}
                      <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="icon-box">
                          <img src="/assets/images/icon-mail-primary.svg" alt="" />
                        </div>
                        <div className="contact-info-item-content">
                          <h3>Email:</h3>
                          <p><a href="mailto:aktikdesignstudio@gmail.com">aktikdesignstudio@gmail.com</a></p>
                        </div>
                      </div>
                      {/* Contact Info Item End */}
                      {/* Contact Info Item Start */}
                      <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                        <div className="icon-box">
                          <img src="/assets/images/icon-clock-primary.svg" alt="" />
                        </div>
                        <div className="contact-info-item-content">
                          <h3>Open Store:</h3>
                          <p>Monday - Saturday 10 AM - 6 PM</p>
                        </div>
                      </div>
                      {/* Contact Info Item End */}
                    </div>
                    {/* Contact Info Item List End */}
                  </div>
                  {/* Contact Info Box Header End */}

                  {/* Contact Social Links Box Start */}
                  <div className="contact-social-links-box">
                    <h3>Our Social:</h3>
                    {/* <ul>
                     <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
<li><a href="#"><i className="fab fa-twitter" /></a></li>
<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
<li><a href="#"><i className="fab fa-instagram" /></a></li>
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
                  {/* Contact Social Links Box End */}
                </div>
                {/* Contact Info Box End */}
              </div>
              {/* Contact Us Body Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Contact Us End */}

      {/* Google Map Section Start */}
      <div className="google-map">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Studio Location</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">Visit Our Studio Today</h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Google Map Start */}
              <div className="google-map-iframe wow fadeInUp" data-wow-delay="0.2s">
               <iframe
  title="Aktik Designs location"
  src="https://maps.google.com/maps?q=Aktik%20Designs%2C%20Prime%20Towers%2C%20Bendoorwell%2C%20Kankanady%2C%20Mangaluru%2C%20Karnataka%20575002&t=&z=16&ie=UTF8&iwloc=&output=embed"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
              </div>
              {/* Google Map End */}
            </div>
          </div>
        </div>
      </div>
      {/* Google Map Section End */}
    </div>
  )
}