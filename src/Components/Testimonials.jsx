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
    <div>
      <style>{`
        /* The box automatically fits the widget's height, then crops
           a fixed amount (--crop) off the bottom, where the Elfsight
           badge sits. Works the same on mobile, tablet and desktop.

           --crop bigger  -> more is cut off the bottom
           --crop smaller -> less is cut off the bottom           */
        .reviews-scroll-box {
          --crop: 40px;
          min-height: 200px;
          padding-top: 10px;
          overflow: hidden;            /* fallback for older browsers */
          overflow: clip;              /* blocks all scrolling */
          border: 1px solid #e5e5e5;
          border-radius: 16px;
          background: #fff;
        }

        .reviews-scroll-inner {
          margin-bottom: calc(var(--crop) * -1);
        }

        /* Mobile: change only if the badge peeks in or cards get cut */
        @media (max-width: 767px) {
          .reviews-scroll-box {
            --crop: 40px;
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
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">
                  Google Reviews
                </span>

                <h2 className="text-anime-style-3" data-cursor="-opaque">
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
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "800",
                      color: "#111",
                    }}
                  >
                    5.0
                  </span>

                  <span
                    style={{
                      color: "#fbbc04",
                      fontSize: "22px",
                      letterSpacing: "2px",
                    }}
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
                    <i className="fa-brands fa-google"></i>
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
                    <i className="fa-solid fa-pen-to-square"></i>
                    Write a Review
                  </a>
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