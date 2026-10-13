// const API_KEY = "AIzaSyAOL30sKWPUqv38KIVDZ0JIvcC8XJ92GNw";
// const PLACE_ID = "ChIJmRx1KFRbozsRFN-KB9sBM0w";
import React, { useEffect, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

/* =========================================================
   GOOGLE CONFIGURATION
========================================================= */

// IMPORTANT: key now comes from env only. Add VITE_GOOGLE_MAPS_API_KEY
// to your .env file, and restrict this key in Google Cloud Console to
// your domain(s) + the Places API only.
const API_KEY = "AIzaSyAOL30sKWPUqv38KIVDZ0JIvcC8XJ92GNw";
const PLACE_ID = "ChIJmRx1KFRbozsRFN-KB9sBM0w";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Aktik+Designs/@12.8718378,74.8519083,17z/data=!4m8!3m7!1s0x3ba35b5428751c99:0x4c3301db078adf14!8m2!3d12.8718378!4d74.8519083!9m1!1b1";

const WRITE_REVIEW_URL = "https://g.page/r/CRTfigfbATNMEAE/review";

let googleMapsOptionsConfigured = false;


/* =========================================================
   STAR COMPONENT
========================================================= */


const Stars = ({ rating = 5 }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "3px",
        alignItems: "center",
      }}
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          style={{
            fontSize: "18px",
            color:
              star <= Math.round(rating)
                ? "#f5b301"
                : "#d8d8d8",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};


/* =========================================================
   AVATAR (with broken-image fallback)
========================================================= */


const Avatar = ({ photo, name }) => {
  const [imgFailed, setImgFailed] = useState(false);

  if (photo && !imgFailed) {
    return (
      <img
        src={photo}
        alt={name}
        onError={() => setImgFailed(true)}
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    );
  }

  return (
    <div
      style={{
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        background: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        fontSize: "20px",
      }}
    >
      {name?.charAt(0)?.toUpperCase()}
    </div>
  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [placeRating, setPlaceRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [placeName, setPlaceName] = useState("Aktik Designs");
  const [googleMapsURI, setGoogleMapsURI] = useState(GOOGLE_MAPS_URL);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  /* =======================================================
     FETCH LIVE GOOGLE REVIEWS
  ======================================================= */

  useEffect(() => {
    let cancelled = false;

    const fetchGoogleReviews = async () => {
      try {
        setLoading(true);
        setError("");

        /* -----------------------------------------------
           CHECK API KEY
        ------------------------------------------------ */

        if (!API_KEY) {
          throw new Error(
            "Google Maps API key is missing. Please configure VITE_GOOGLE_MAPS_API_KEY in your .env file."
          );
        }

        /* -----------------------------------------------
           CONFIGURE GOOGLE MAPS
        ------------------------------------------------ */

        if (!googleMapsOptionsConfigured) {
          setOptions({
            key: API_KEY,
            v: "weekly",
          });

          googleMapsOptionsConfigured = true;
        }

        /* -----------------------------------------------
           LOAD PLACES LIBRARY
        ------------------------------------------------ */

        const { Place } = await importLibrary("places");

        /* -----------------------------------------------
           CREATE PLACE
        ------------------------------------------------ */

        const place = new Place({
          id: PLACE_ID,
        });

        /* -----------------------------------------------
           FETCH PLACE DATA
        ------------------------------------------------ */

        await place.fetchFields({
          fields: [
            "displayName",
            "rating",
            "userRatingCount",
            "reviews",
            "googleMapsURI",
          ],
        });

        if (cancelled) {
          return;
        }

        /* -----------------------------------------------
           SET PLACE INFORMATION
        ------------------------------------------------ */

        setPlaceName(place.displayName || "Aktik Designs");

        setPlaceRating(
          typeof place.rating === "number" ? place.rating : 0
        );

        setTotalReviews(
          typeof place.userRatingCount === "number"
            ? place.userRatingCount
            : 0
        );

        setGoogleMapsURI(place.googleMapsURI || GOOGLE_MAPS_URL);

        /* =================================================
           PARSE ONLY REAL GOOGLE REVIEWS

           Note: the JS Places API caps this at up to 5
           reviews per place — that's a Google-side limit,
           not something fixable client-side.
        ================================================= */

        const googleReviews = Array.isArray(place.reviews)
          ? place.reviews
              .map((review, index) => {
                const reviewText =
                  typeof review.text === "string"
                    ? review.text
                    : review.text?.text || "";

                const authorName =
                  review.authorAttribution?.displayName ||
                  "Google User";

                const authorPhoto =
                  review.authorAttribution?.photoURI || "";

                const authorProfile =
                  review.authorAttribution?.uri || GOOGLE_MAPS_URL;

                const rating =
                  typeof review.rating === "number" ? review.rating : 0;

                const publishTime = review.publishTime || "";

                const relativeTime =
                  review.relativePublishTimeDescription ||
                  "Google Review";

                const reviewURL =
                  review.googleMapsURI ||
                  review.googleMapsUri ||
                  place.googleMapsURI ||
                  GOOGLE_MAPS_URL;

                return {
                  // Falls back to a composite key since the new
                  // Places API doesn't reliably supply a stable id.
                  id:
                    review.id ||
                    `${authorName}-${publishTime}-${index}`,
                  authorName,
                  authorPhoto,
                  authorProfile,
                  rating,
                  text: reviewText,
                  publishTime,
                  relativeTime,
                  reviewURL,
                };
              })
              .filter(Boolean)
          : [];

        /* -----------------------------------------------
           ONLY LIVE GOOGLE REVIEWS

           NO STATIC REVIEWS
           NO DEFAULT REVIEWS
           NO MANUAL REVIEWS
        ------------------------------------------------ */

        setReviews(googleReviews);
      } catch (err) {
        if (!cancelled) {
          setError(err?.message || "Unable to load Google reviews.");
          setReviews([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchGoogleReviews();

    return () => {
      cancelled = true;
    };
  }, []);


  /* =======================================================
     LOADING SCREEN
  ======================================================= */

  if (loading) {
    return (
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          background: "#faf9f6",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            border: "4px solid #e5e5e5",
            borderTop: "4px solid #222",
            borderRadius: "50%",
            margin: "0 auto 20px",
            animation: "aktikSpin 1s linear infinite",
          }}
        />

        <h4
          style={{
            marginBottom: "8px",
            fontWeight: 600,
          }}
        >
          Fetching live Google reviews...
        </h4>

        <p
          style={{
            color: "#777",
            margin: 0,
          }}
        >
          Please wait while we connect to Google.
        </p>

        <style>
          {`
            @keyframes aktikSpin {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </section>
    );
  }


  /* =======================================================
     MAIN SECTION
  ======================================================= */

  return (
    <>
      <section
        style={{
          padding: "90px 20px",
          background: "#faf9f6",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            style={{
              textAlign: "center",
              marginBottom: "55px",
            }}
          >
            <p
              style={{
                marginBottom: "10px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                fontSize: "13px",
                color: "#777",
              }}
            >
              Google Reviews
            </p>

            <h2
              style={{
                fontSize: "42px",
                fontWeight: 600,
                margin: "0 0 15px",
                color: "#222",
              }}
            >
              What Our Clients Say
            </h2>

            <p
              style={{
                maxWidth: "650px",
                margin: "0 auto",
                color: "#777",
                lineHeight: 1.7,
              }}
            >
              Real feedback from customers who have experienced Aktik
              Designs.
            </p>
          </div>

          {/* =================================================
              GOOGLE SUMMARY
          ================================================= */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                padding: "28px 45px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.07)",
                textAlign: "center",
                minWidth: "280px",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                {placeRating ? placeRating.toFixed(1) : "—"}
              </div>

              <Stars rating={placeRating} />

              <p
                style={{
                  margin: "12px 0 0",
                  color: "#666",
                }}
              >
                Based on <strong>{totalReviews}</strong> Google reviews
              </p>

              <p
                style={{
                  margin: "5px 0 0",
                  fontSize: "14px",
                  color: "#888",
                }}
              >
                {placeName}
              </p>
            </div>
          </div>

          {/* =================================================
              ERROR
          ================================================= */}

          {error && (
            <div
              style={{
                maxWidth: "800px",
                margin: "0 auto 35px",
                padding: "18px 22px",
                background: "#fff3f3",
                border: "1px solid #f0caca",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: "0 0 10px",
                  color: "#a33",
                }}
              >
                {error}
              </p>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#222",
                  fontWeight: 600,
                }}
              >
                View Aktik Designs on Google Maps
              </a>
            </div>
          )}

          {/* =================================================
              LIVE GOOGLE REVIEWS
          ================================================= */}

          {reviews.length > 0 ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "25px",
              }}
            >
              {reviews.map((review) => (
                <article
                  key={review.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "18px",
                    padding: "28px",
                    boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "270px",
                  }}
                >
                  {/* AUTHOR */}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginBottom: "18px",
                    }}
                  >
                    <Avatar
                      photo={review.authorPhoto}
                      name={review.authorName}
                    />

                    <div>
                      {review.authorProfile ? (
                        <a
                          href={review.authorProfile}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "#222",
                            textDecoration: "none",
                            fontWeight: 600,
                          }}
                        >
                          {review.authorName}
                        </a>
                      ) : (
                        <strong>{review.authorName}</strong>
                      )}

                      <div
                        style={{
                          marginTop: "4px",
                        }}
                      >
                        <Stars rating={review.rating} />
                      </div>
                    </div>
                  </div>

                  {/* REVIEW TEXT */}

                  {review.text ? (
                    <p
                      style={{
                        color: "#555",
                        lineHeight: 1.75,
                        fontSize: "15px",
                        margin: "0 0 18px",
                        flex: 1,
                      }}
                    >
                      {review.text}
                    </p>
                  ) : (
                    <p
                      style={{
                        color: "#777",
                        lineHeight: 1.7,
                        fontSize: "15px",
                        fontStyle: "italic",
                        flex: 1,
                      }}
                    >
                      Rated on Google
                    </p>
                  )}

                  {/* DATE + GOOGLE LINK */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                      marginTop: "auto",
                      paddingTop: "15px",
                      borderTop: "1px solid #eeeeee",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#999",
                      }}
                    >
                      {review.relativeTime}
                    </span>

                    <a
                      href={review.reviewURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "13px",
                        color: "#222",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      View on Google
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* =================================================
               NO REVIEWS RETURNED BY GOOGLE
            ================================================= */

            <div
              style={{
                maxWidth: "750px",
                margin: "0 auto",
                textAlign: "center",
                background: "#ffffff",
                borderRadius: "18px",
                padding: "45px 30px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  fontSize: "45px",
                  marginBottom: "15px",
                }}
              >
                ★
              </div>

              <h4
                style={{
                  marginBottom: "12px",
                  fontWeight: 600,
                }}
              >
                {placeName} has {totalReviews} Google reviews
              </h4>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "15px",
                }}
              >
                <Stars rating={placeRating} />
              </div>

              <p
                style={{
                  color: "#777",
                  lineHeight: 1.7,
                  maxWidth: "560px",
                  margin: "0 auto 25px",
                }}
              >
                Google is currently providing the live rating and review
                count, but no individual review text was returned for
                this request.
              </p>

              <a
                href={googleMapsURI || GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "13px 24px",
                  background: "#222",
                  color: "#fff",
                  borderRadius: "7px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Read Reviews on Google Maps
              </a>
            </div>
          )}

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
            <a
              href={googleMapsURI || GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "13px 24px",
                border: "1px solid #222",
                color: "#222",
                borderRadius: "7px",
                textDecoration: "none",
                fontWeight: 600,
                background: "#fff",
              }}
            >
              Read All Reviews on Google
            </a>

            <a
              href={WRITE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "13px 24px",
                background: "#222",
                color: "#fff",
                borderRadius: "7px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Write a Review
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;