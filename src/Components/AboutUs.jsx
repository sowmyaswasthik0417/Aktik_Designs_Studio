import React from "react";
import "./About.css";
import ProjectMarquee from "./ProjectMarquee";

export default function AboutUs() {
  return (
    <div className="aktik-about-page">
      {/* Page Header */}
      <section className="page-header dark-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <span className="aktik-about-eyebrow">
                  AKTIK DESIGNS STUDIO
                </span>

                <h1 className="text-anime-style-3">
                  About Us
                </h1>

                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      About us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="aktik-our-story">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="aktik-story-heading">
                <span className="aktik-section-label">
                  GET TO KNOW US
                </span>

                <h2>
                  Our <span>Story</span>
                </h2>

                <div className="aktik-heading-line" />

                <p className="aktik-story-highlight">
                  Designing spaces that feel beautiful, functional,
                  and uniquely yours.
                </p>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="aktik-story-content">
                <span className="aktik-story-quote">
                  &ldquo;
                </span>

                <p>
                  At Aktik Designs, we transform spaces into stunning,
                  functional environments that reflect your style and
                  needs. With a passion for design and attention to
                  detail, our team creates timeless interiors that
                  balance beauty and practicality. Whether it's a home,
                  office, or commercial space, we bring creativity,
                  expertise, and personalized service to every project.
                </p>

                <div className="aktik-story-signature">
                  <span className="aktik-story-signature-line" />
                  <span>AKTIK DESIGNS STUDIO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="aktik-about-intro">
        <div className="container">
          <div className="aktik-about-heading">
            <span className="aktik-section-label">
              OUR VISION &amp; PURPOSE
            </span>

            <h2>
              Where Comfort Meets
              <span> Timeless Interiors</span>
            </h2>

            <div className="aktik-heading-line" />

            <p>
              Thoughtfully designed spaces that reflect the people
              who live and work in them.
            </p>
          </div>

          <div className="row g-4 aktik-vm-row">
            {/* Vision Card */}
            <div className="col-lg-6">
              <article className="aktik-vm-card">
                <div className="aktik-vm-image">
                  <img
                    src="../assets/images/vision-mission-item-image-1.jpg"
                    alt="Our Vision"
                  />

                  <span className="aktik-vm-number">01</span>

                  <span className="aktik-vm-badge">
                    FUTURE &amp; FOCUS
                  </span>
                </div>

                <div className="aktik-vm-content">
                  <span className="aktik-vm-overline">
                    OUR VISION
                  </span>

                  <h3>Spaces With Meaning</h3>

                  <p>
                    To turn every space into a true reflection of
                    the people who live and work in it, bringing
                    residential and commercial interiors to life
                    with thoughtful design and lasting quality.
                  </p>

                  <div className="aktik-vm-bottom-line" />
                </div>
              </article>
            </div>

            {/* Mission Card */}
            <div className="col-lg-6">
              <article className="aktik-vm-card">
                <div className="aktik-vm-image">
                  <img
                    src="../assets/images/vision-mission-item-image-2.jpg"
                    alt="Our Mission"
                  />

                  <span className="aktik-vm-number">02</span>

                  <span className="aktik-vm-badge">
                    PURPOSE &amp; EXECUTION
                  </span>
                </div>

                <div className="aktik-vm-content">
                  <span className="aktik-vm-overline">
                    OUR MISSION
                  </span>

                  <h3>From Vision to Reality</h3>

                  <p>
                    To take every project from vision to reality,
                    delivering personalised interior solutions
                    across Mangalore, Moodbidri &amp; Bangalore
                    with honest guidance from consultation to
                    handover.
                  </p>

                  <div className="aktik-vm-bottom-line" />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Existing Project Marquee */}
      <ProjectMarquee />

      {/* Frequently Asked Questions */}
      <section className="aktik-about-faq">
        <div className="container">
          <div className="row g-5 align-items-start">
            {/* FAQ Introduction */}
            <div className="col-xl-5">
              <div className="aktik-faq-intro">
                <span className="aktik-section-label">
                  NEED TO KNOW MORE?
                </span>

                <h2>
                  Frequently Asked
                  <span> Questions</span>
                </h2>

                <p>
                  Find quick answers to the most common questions
                  about our residential and commercial interior
                  projects, including consultation, timelines,
                  and service areas.
                </p>


                <div className="aktik-faq-decoration">
                  <span>DESIGNED AROUND YOU</span>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="col-xl-7">
              <div className="aktik-faq-list" id="accordion">
                {/* FAQ 1 */}
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    id="heading1"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      <span className="aktik-faq-number">01</span>
                      <span>What areas does Aktik Designs serve?</span>
                    </button>
                  </h3>

                  <div
                    id="collapse1"
                    className="accordion-collapse collapse show"
                    role="region"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        We currently take on residential and
                        commercial interior projects across
                        Mangalore, Moodbidri and Bangalore.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    id="heading2"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      <span className="aktik-faq-number">02</span>
                      <span>Do you offer a free consultation?</span>
                    </button>
                  </h3>

                  <div
                    id="collapse2"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading2"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, you can DM or WhatsApp us to book a
                        free consultation before any project begins.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    id="heading3"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      <span className="aktik-faq-number">03</span>
                      <span>
                        Do you handle both residential and
                        commercial interiors?
                      </span>
                    </button>
                  </h3>

                  <div
                    id="collapse3"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading3"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Yes, we design and execute interiors for
                        homes as well as offices, retail and other
                        commercial spaces.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    id="heading4"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      <span className="aktik-faq-number">04</span>
                      <span>
                        How long does a typical project take?
                      </span>
                    </button>
                  </h3>

                  <div
                    id="collapse4"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading4"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Timelines depend on scope, but most home
                        interiors are completed within a few weeks
                        of design sign-off.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    id="heading5"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      <span className="aktik-faq-number">05</span>
                      <span>
                        How do I get started with Aktik Designs?
                      </span>
                    </button>
                  </h3>

                  <div
                    id="collapse5"
                    className="accordion-collapse collapse"
                    role="region"
                    aria-labelledby="heading5"
                    data-bs-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Simply DM or WhatsApp us with your space
                        details and we&apos;ll set up a free
                        consultation to get started.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
