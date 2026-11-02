// import React from "react";

// const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Aktik+Designs/@12.8718378,74.8519083,17z/data=!4m8!3m7!1s0x3ba35b5428751c99:0x4c3301db078adf14!8m2!3d12.8718378!4d74.8519083!9m1!1b1";
// const WRITE_REVIEW_URL = "https://search.google.com/local/writereview?placeid=ChIJmRx1KFRbozsRFN-KB9sBM0w";

// export default function Testimonials() {
//   return (
//     <div>
//       <div className="page-header dark-section parallaxie">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="page-header-box">
//                 <h1 className="text-anime-style-3" data-cursor="-opaque">
//                   Testimonials
//                 </h1>
//                 <nav className="wow fadeInUp">
//                   <ol className="breadcrumb">
//                     <li className="breadcrumb-item">
//                       <a href="/">Home</a>
//                     </li>
//                     <li className="breadcrumb-item active" aria-current="page">
//                       Testimonials
//                     </li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="page-testimonials">
//         <div className="container">
//           <div className="row section-row">
//             <div className="col-lg-12">
//               <div className="section-title section-title-center">
//                 <span className="section-sub-title wow fadeInUp">
//                   Google Reviews
//                 </span>
//                 <h2 className="text-anime-style-3" data-cursor="-opaque">
//                   What Our Customers Say On Google
//                 </h2>

//                 <div
//                   style={{
//                     marginTop: "18px",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     gap: "10px",
//                     flexWrap: "wrap",
//                   }}
//                 >
//                   <span style={{ fontSize: "24px", fontWeight: "800", color: "#111" }}>5.0</span>
//                   <span style={{ color: "#fbbc04", fontSize: "22px", letterSpacing: "2px" }}>★★★★★</span>
//                   <span style={{ color: "#555", fontWeight: "600", fontSize: "15px" }}>Google Reviews</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="row mt-4">
//             <div className="col-lg-12">
//               <div
//                 style={{
//                   background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
//                   borderRadius: "16px",
//                   padding: "36px 30px",
//                   color: "#fff",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   flexWrap: "wrap",
//                   gap: "20px",
//                 }}
//               >
//                 <div>
//                   <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
//                     <span style={{ color: "#fbbc04", fontSize: "18px" }}>★★★★★</span>
//                     <span style={{ fontWeight: "700", fontSize: "16px" }}>Trusted by our clients</span>
//                   </div>
//                   <p style={{ margin: 0, color: "#9ca3af", fontSize: "14px" }}>
//                     Experience the Aktik Designs difference for your home, villa, or commercial space in Mangalore.
//                   </p>
//                 </div>

//                 <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
//                   <a
//                     href={WRITE_REVIEW_URL}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-default"
//                     style={{
//                       backgroundColor: "#4285F4",
//                       borderColor: "#4285F4",
//                       color: "#fff",
//                       display: "inline-flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       padding: "12px 24px",
//                     }}
//                   >
//                     Write a Review
//                   </a>
//                   <a
//                     href={GOOGLE_MAPS_URL}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn-default btn-border"
//                     style={{
//                       color: "#fff",
//                       borderColor: "rgba(255,255,255,0.3)",
//                       display: "inline-flex",
//                       alignItems: "center",
//                       gap: "8px",
//                       padding: "12px 24px",
//                     }}
//                   >
//                     Read Our Reviews on Google
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <!-- Elfsight Google Reviews | Untitled Google Reviews --> */}
// <script src="https://elfsightcdn.com/platform.js" async></script>
// <div class="elfsight-app-1377e287-9c40-4993-b457-a2a3a1ffcc6e" data-elfsight-app-lazy></div>
//     </div>
//   );
// }
// 
import React, { useEffect } from "react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Aktik+Designs/@12.8718378,74.8519083,17z/data=!4m8!3m7!1s0x3ba35b5428751c99:0x4c3301db078adf14!8m2!3d12.8718378!4d74.8519083!9m1!1b1";

const WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJmRx1KFRbozsRFN-KB9sBM0w";

export default function Testimonials() {
  /* Re-load the Elfsight script every time this page mounts */
  useEffect(() => {
    const old = document.getElementById("elfsight-platform-script");
    if (old) old.remove();

    const script = document.createElement("script");
    script.id = "elfsight-platform-script";
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="testimonials-page">
      <style>{`
        /* The box automatically fits the widget's height, then crops
           a fixed amount (--crop) off the bottom, where the Elfsight
           badge sits. Works the same on mobile, tablet and desktop.

           --crop bigger  -> more is cut off the bottom
           --crop smaller -> less is cut off the bottom           */
        .testimonials-page .page-testimonials {
          padding: 88px 0 96px;
          background: linear-gradient(180deg, #f8f5ef 0%, #fff 100%);
        }

        .testimonials-page .reviews-heading {
          max-width: 760px;
          margin: 0 auto 34px;
        }

        .testimonials-page .reviews-heading .section-sub-title {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #a27d45;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .testimonials-page .reviews-heading .section-sub-title::before,
        .testimonials-page .reviews-heading .section-sub-title::after {
          width: 24px;
          height: 1px;
          background: #c9a96e;
          content: "";
        }

        .testimonials-page .reviews-heading h2 {
          max-width: 680px;
          margin: 12px auto 0;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.15;
        }

        .testimonials-page .reviews-trust-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          margin-top: 26px;
        }

        .testimonials-page .reviews-rating {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          border: 1px solid #e8e1d4;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.82);
          box-shadow: 0 6px 20px rgba(41, 40, 33, 0.05);
        }

        .testimonials-page .reviews-score {
          color: #292821;
          font-size: 26px;
          font-weight: 700;
          line-height: 1;
        }

        .testimonials-page .reviews-rating-copy {
          display: grid;
          gap: 3px;
          color: #77766e;
          font-size: 12px;
          line-height: 1.2;
          text-align: left;
        }

        .testimonials-page .reviews-stars {
          color: #d3a33f;
          font-size: 15px;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .testimonials-page .reviews-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .testimonials-page .reviews-action {
          display: inline-flex;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 9px 16px;
          border: 1px solid #dcd5c8;
          border-radius: 999px;
          background: #fff;
          color: #292821;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: border-color 180ms ease, background 180ms ease, transform 180ms ease;
        }

        .testimonials-page .reviews-action:hover {
          transform: translateY(-2px);
          border-color: #c9a96e;
          background: #fbf8f1;
          color: #292821;
        }

        .testimonials-page .reviews-action-google i {
          color: #4285f4;
        }

        .reviews-scroll-box {
          --crop: 40px;
          --card-inset: 16px;
          min-height: 200px;
          padding: var(--card-inset) var(--card-inset) 0;
          box-sizing: border-box;
          overflow: hidden;
          overflow: clip;
          border: 1px solid #e7e1d5;
          border-radius: 24px;
          background: #f4f0e8;
          box-shadow: 0 18px 48px rgba(41, 40, 33, 0.09);
        }

        .reviews-scroll-inner {
          margin-bottom: calc(0px - var(--crop) - var(--card-inset));
          overflow: hidden;
          border-radius: 14px;
          background: #fff;
        }

        @media (max-width: 767px) {
          .testimonials-page .page-testimonials {
            padding: 56px 0 64px;
          }

          .testimonials-page .reviews-heading {
            margin-bottom: 26px;
          }

          .testimonials-page .reviews-rating {
            gap: 9px;
            padding: 10px 15px;
          }

          .testimonials-page .reviews-score {
            font-size: 23px;
          }

          .testimonials-page .reviews-action {
            min-height: 40px;
            padding: 8px 13px;
            font-size: 12px;
          }

          .reviews-scroll-box {
            --crop: 40px;
            --card-inset: 10px;
            border-radius: 18px;
          }
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

                    <li className="breadcrumb-item active" aria-current="page">
                      Testimonials
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PAGE HEADER END */}

      {/* =========================================================
          GOOGLE TESTIMONIALS SECTION START
      ========================================================= */}
      <div className="page-testimonials">
        <div className="container">
          {/* Section Heading */}
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title section-title-center reviews-heading">
                <span className="section-sub-title wow fadeInUp">
                  Google Reviews
                </span>

                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  What Our Customers Say On Google
                </h2>

                {/* Google Rating */}
                <div className="reviews-trust-row">
                  <div className="reviews-rating" aria-label="Rated 5 out of 5 on Google">
                    <span className="reviews-score">5.0</span>
                    <span className="reviews-rating-copy">
                      <span className="reviews-stars" aria-hidden="true">★★★★★</span>
                      <span>Google Reviews</span>
                    </span>
                  </div>

                  <div className="reviews-actions">
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reviews-action reviews-action-google"
                  >
                    <i className="fa-brands fa-google"></i>
                    View on Google Maps
                  </a>

                  {/* Write Review Button */}
                  <a
                    href={WRITE_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reviews-action"
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                    Write a Review
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              ELFSIGHT GOOGLE REVIEWS WIDGET (carousel, badge cropped)
          ===================================================== */}
          <div className="row">
            <div className="col-lg-12">
              <div className="reviews-scroll-box">
                <div className="reviews-scroll-inner">
                  <div className="elfsight-app-87fd69a6-4842-4c84-aeb5-658e7e2078ed"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* GOOGLE TESTIMONIALS SECTION END */}
    </div>
  );
}