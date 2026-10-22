

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "./OurWorkspace.css";

const locations = [
  { name: "Mangalore", tag: "Karnataka" },
  { name: "Bangalore", tag: "Karnataka" },
  { name: "Udupi", tag: "Karnataka" },
  { name: "Moodbidri", tag: "Karnataka" },
  { name: "Karkala", tag: "Karnataka" },
  { name: "Mysore", tag: "Karnataka" },
  { name: "Puttur", tag: "Karnataka" },
  { name: "Kerala", tag: "God's Own Country" },
];


const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="30"
    height="30"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export default function OurWorkspace() {
  return (
    <div className="our-categories our-workspace">
      <div className="container">
        <div className="row section-row">
          <div className="col-xl-12">
            <div className="section-title section-title-center">
              <span className="section-sub-title ws-fade-up">
                Where we've worked
              </span>

              <h2
                className="text-anime-style-3 ws-fade-up ws-delay-1"
                data-cursor="-opaque"
              >
                Our Services Across
              </h2>

              <p className="ws-count ws-fade-up ws-delay-2">
                <strong>{locations.length}+</strong> cities designed &amp;
                delivered
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="category-item-slider">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                loop
                speed={800}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  el: ".workspace-pagination",
                  clickable: true,
                }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  576: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  992: { slidesPerView: 6 },
                }}
              >
                {locations.map((loc, i) => (
                  <SwiperSlide key={loc.name}>
                    <Link
                      to={{
                        pathname: "/Projects",
                        search: `?${new URLSearchParams({
                          location: loc.name,
                        }).toString()}`,
                      }}
                      className="workspace-item ws-pop"
                      style={{ animationDelay: `${i * 0.08}s` }}
                      aria-label={`View ${loc.name} interior design projects`}
                    >
                      <div className="workspace-ring">
                        <div className="workspace-circle">
                          <span className="workspace-icon">
                            <PinIcon />
                          </span>

                          <span className="workspace-script">
                            {loc.name}
                          </span>

                          <span className="workspace-small">
                            {loc.name.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <h3>{loc.name}</h3>
                      <span className="workspace-tag">{loc.tag}</span>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="workspace-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
