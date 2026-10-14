import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
   <div>
  {/* Page Header Start */}
  <div className="page-header dark-section parallaxie">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Page Header Box Start */}
          <div className="page-header-box">
            <h1 className="text-anime-style-3" data-cursor="-opaque">About Us</h1>
            <nav className="wow fadeInUp">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">About us</li>
              </ol>
            </nav>
          </div>
          {/* Page Header Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Our Best Offers Section Start */}
  <div className="our-best-offers">
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title section-title-center">
            {/* <span className="section-sub-title wow fadeInUp">Best Offer</span> */}
            <h2 className="text-anime-style-3" data-cursor="-opaque">Where Comfort Meets Timeless Interiors</h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        {/* <div className="col-md-6">
    
          <div className="best-offer-item wow fadeInUp">
            <div className="best-offer-item-content-box">
              <div className="best-offer-item-content">
                <h3>Lounge Chair</h3>
                <p>Contemporary Chair Collections Inspired By Modern Living Room</p>
              </div>
              <div className="best-offer-item-button">
                <a href="products.html" className="btn-default">Shop Now</a>
              </div>
            </div>
            <div className="best-offer-item-image">
              <figure>
                <img src="../assets/images/best-offer-image-1.png" alt />
              </figure>
              <div className="best-offer-save-tag">
                <p>Save</p>
                <h3>40%</h3>
              </div>
            </div>
          </div>
        
        </div>
        <div className="col-md-6">
    
          <div className="best-offer-item wow fadeInUp" data-wow-delay="0.2s">
            <div className="best-offer-item-content-box">
              <div className="best-offer-item-content">
                <h3>Recliner Chair</h3>
                <p>Contemporary Chair Collections Inspired By Modern Living Room</p>
              </div>
              <div className="best-offer-item-button">
                <a href="products.html" className="btn-default">Shop Now</a>
              </div>
            </div>
            <div className="best-offer-item-image">
              <figure>
                <img src="../assets/images/best-offer-image-2.png" alt />
              </figure>
              <div className="best-offer-save-tag">
                <p>Save</p>
                <h3>40%</h3>
              </div>
            </div>
          </div>
       
        </div> */}
      
        <div className="col-lg-12">
          {/* Vision Mission Item Boxes Start */}
          <div className="vision-mission-item-boxes">
            {/* Vision Mission Item Start */}
            <div className="vision-mission-item wow fadeInUp">
              <div className="vision-mission-item-image">
                <figure>
                  <img src="/assets/images/vision-mission-item-image-1.jpg" alt="Our Vision" />
                </figure>
              </div>
              <div className="vision-mission-item-content">
                <h3>Our Vision</h3>
                {/* <p>Our vision is to create stylish, comfortable &amp; high-quality furniture that enhance everyday living we are dedicated.</p> */}
                <p>Our vision is to turn every space into a true reflection of the people who live and work in it, bringing residential and commercial interiors to life with thoughtful design and lasting quality.</p>
              
              </div>
            </div>
            {/* Vision Mission Item End */}
            {/* Vision Mission Item Start */}
            <div className="vision-mission-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="vision-mission-item-image">
                <figure>
                  <img src="/assets/images/vision-mission-item-image-2.jpg" alt="Our Mission" />
                </figure>
              </div>
              <div className="vision-mission-item-content">
                <h3>Our Mission</h3>
                {/* <p>Our mission is to create stylish, comfortable &amp; high-quality furniture that enhance everyday living we are dedicate</p> */}
               <p>Our mission is to take every project from vision to reality, delivering personalised interior solutions across Mangalore, Moodbidri &amp; Bangalore with honest guidance from consultation to handover.</p>
            
              </div>
            </div>
            {/* Vision Mission Item End */}
          </div>
          {/* Vision Mission Item Boxes End */}
        </div>
      </div>
    </div>
  </div>

<div className="our-faqs">
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          {/* FAQ Content Box Start */}
          <div className="faq-content-box">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">Frequently Asked Questions</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Common Questions About Our Interior Design Services</h2>
              <p className="wow fadeInUp" data-wow-delay="0.2s">Find quick answers to the most common questions about our residential and commercial interior projects, including consultation, timelines, and service areas.</p>
            </div>
            {/* Section Title End */}
            {/* FAQ Content Button Start */}
            <div className="faq-content-button wow fadeInUp" data-wow-delay="0.4s">
              <a href="faqs.html" className="btn-default">View all FAQ's</a>
            </div>
            {/* FAQ Content Button End */}
          </div>
          {/* FAQ Content Box End */}
        </div>
        <div className="col-xl-6">
          {/* FAQ Accordion Start */}
          <div className="faq-accordion" id="accordion">
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp">
              <h2 className="accordion-header" id="heading1">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  1. What areas does Aktik Designs serve?
                </button>
              </h2>
              <div id="collapse1" className="accordion-collapse collapse show" role="region" aria-labelledby="heading1" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>We currently take on residential and commercial interior projects across Mangalore, Moodbidri and Bangalore.</p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
              <h2 className="accordion-header" id="heading2">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  2. Do you offer a free consultation?
                </button>
              </h2>
              <div id="collapse2" className="accordion-collapse collapse" role="region" aria-labelledby="heading2" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Yes, you can DM or WhatsApp us to book a free consultation before any project begins.</p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
              <h2 className="accordion-header" id="heading3">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  3. Do you handle both residential and commercial interiors?
                </button>
              </h2>
              <div id="collapse3" className="accordion-collapse collapse" role="region" aria-labelledby="heading3" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Yes, we design and execute interiors for homes as well as offices, retail and other commercial spaces.</p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
              <h2 className="accordion-header" id="heading4">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                  4. How long does a typical project take?
                </button>
              </h2>
              <div id="collapse4" className="accordion-collapse collapse" role="region" aria-labelledby="heading4" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Timelines depend on scope, but most home interiors are completed within a few weeks of design sign-off.</p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
            {/* FAQ Item Start */}
            <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
              <h2 className="accordion-header" id="heading5">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                  5. How do I get started with Aktik Designs?
                </button>
              </h2>
              <div id="collapse5" className="accordion-collapse collapse" role="region" aria-labelledby="heading5" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <p>Simply DM or WhatsApp us with your space details and we'll set up a free consultation to get started.</p>
                </div>
              </div>
            </div>
            {/* FAQ Item End */}
          </div>
          {/* FAQ Accordion End */}                    
        </div>
      </div>
    </div>
  </div>

</div>

  )
}
