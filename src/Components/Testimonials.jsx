import React, { useEffect } from "react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Aktik+Designs/@12.8718378,74.8519083,17z/data=!4m8!3m7!1s0x3ba35b5428751c99:0x4c3301db078adf14!8m2!3d12.8718378!4d74.8519083!9m1!1b1";

const WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJmRx1KFRbozsRFN-KB9sBM0w";

/**
 * Load Elfsight Google Reviews script once.
 * The script id prevents duplicate injection if the component re-mounts.
 */
function useElfsightScript() {
  useEffect(() => {
    const scriptId = "elfsight-platform-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
}

export default function Testimonials() {
  useElfsightScript();

  return (
    <div>
      {/* Hide Elfsight "Free Google Reviews Widget" badge */}
      <style>{`
        .eapps-widget-toolbar,
        .eapps-widget-toolbar-button,
        a[href*="elfsight.com"],
        [class*="eapps-google-reviews-toolbar"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          pointer-events: none !important;
        }
      `}</style>

      {/* =========================================================
          PAGE HEADER START
      ========================================================= */}
      <div className="page-header dark-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-3" data-cursor="-opaque">
                  Testimonials
                </h1>

                <nav className="wow fadeInUp">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      Testimonials
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =========================================================
          PAGE HEADER END
      ========================================================= */}


      {/* =========================================================
          GOOGLE TESTIMONIALS SECTION START
      ========================================================= */}
      <div className="page-testimonials">
        <div className="container">

          {/* Section Heading */}
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center">

                <span className="section-sub-title wow fadeInUp">
                  Google Reviews
                </span>

                <h2
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                >
                  What Our Customers Say On Google
                </h2>

                {/* Google Rating */}
                <div
                  style={{
                    marginTop: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  {/* Rating */}
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "800",
                      color: "#111",
                    }}
                  >
                    5.0
                  </span>

                  {/* Stars */}
                  <span
                    style={{
                      color: "#fbbc04",
                      fontSize: "22px",
                      letterSpacing: "2px",
                    }}
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </span>

                  <span
                    style={{
                      color: "#555",
                      fontWeight: "600",
                      fontSize: "15px",
                    }}
                  >
                    Google Reviews
                  </span>

                  {/* Google Maps Button */}
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginLeft: "6px",
                      padding: "6px 14px",
                      background: "#4285F4",
                      color: "#fff",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: "600",
                      textDecoration: "none",
                      boxShadow: "0 2px 6px rgba(66,133,244,0.3)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <i className="fa-brands fa-google" aria-hidden="true" />
                    View on Google Maps
                  </a>

                  {/* Write Review Button */}
                  <a
                    href={WRITE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      marginLeft: "4px",
                      padding: "6px 14px",
                      background: "#fff",
                      color: "#1a73e8",
                      border: "1px solid #dadce0",
                      borderRadius: "20px",
                      fontSize: "13px",
                      fontWeight: "600",
                      textDecoration: "none",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square" aria-hidden="true" />
                    Write a Review
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* =====================================================
              ELFSIGHT GOOGLE REVIEWS WIDGET
          ===================================================== */}
          <div className="row">
            <div className="col-lg-12">
              <div
                style={{
                  width: "100%",
                  minHeight: "400px",
                }}
              >
                <div
                  className="elfsight-app-87fd69a6-4842-4c84-aeb5-658e7e2078ed"
                  data-elfsight-app-lazy
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* =========================================================
          GOOGLE TESTIMONIALS SECTION END
      ========================================================= */}
    </div>
  );
}