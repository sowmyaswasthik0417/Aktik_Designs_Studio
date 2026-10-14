import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Defined outside the component to avoid re-creation on every render
const CATEGORIES = [
  { img: "/assets/images/category-item-image-1.jpg", title: "Living Room" },
  { img: "/assets/images/category-item-image-2.jpg", title: "Bedroom" },
  { img: "/assets/images/category-item-image-3.jpg", title: "Dining Room" },
  { img: "/assets/images/category-item-image-4.jpg", title: "Office" },
  { img: "/assets/images/category-item-image-5.jpg", title: "Outdoor" },
  { img: "/assets/images/category-item-image-6.jpg", title: "Home Storage" },
  { img: "/assets/images/category-item-image-7.jpg", title: "Kitchen" },
];

const STORIES = [
  { src: "/assets/images/livora-our-story-1-video.mp4", id: "storyvideo1" },
  { src: "/assets/images/livora-our-story-2-video.mp4", id: "storyvideo2" },
  { src: "/assets/images/livora-our-story-3-video.mp4", id: "storyvideo3" },
  { src: "/assets/images/livora-our-story-4-video.mp4", id: "storyvideo4" },
];

const TESTIMONIALS = [
  {
    id: "sanya-bekal",
    initial: "S",
    initialBg: "#8d24aaae",
    name: "Sanya Bekal",
    source: "Google Review · 5 Stars",
    text: `"I had got home interiors from Aktik. From the designs to the end finishing, everything was amazing. They kept in mind our selections and also gave suggestions based on their experience in the field, which many companies don't give. I just loved the interiors of my new house. It has turned out to be perfect, exactly how I wanted it to be. I highly recommend Aktik for everyone. ❤️"`,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section Start */}
      <div className="hero dark-section parallaxie">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {/* Hero Content Box Start */}
              <div className="hero-content-box">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">From Vision to Reality ✨</span>
                  <h1 className="text-anime-style-3" data-cursor="-opaque">
                    Creating Beautiful Spaces for Better Living ✨
                  </h1>
                </div>
                {/* Section Title End */}
                {/* Hero Content Button Start */}
                <div className="hero-content-btn wow fadeInUp" data-wow-delay="0.2s">
                  <Link to="/Contact" className="btn-default btn-highlighted">Contact Us</Link>
                </div>
                {/* Hero Content Button End */}
              </div>
              {/* Hero Content Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* Our Categories Section Start */}
      <div className="our-categories">
        <div className="container">
          <div className="row section-row">
            <div className="col-xl-12">
              <div className="section-title section-title-center">
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Our services
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="category-item-slider">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  pagination={{ el: '.category-pagination', clickable: true }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 5 },
                  }}
                >
                  {CATEGORIES.map((category) => (
                    <SwiperSlide key={category.title}>
                      <div className="category-item">
                        <div className="category-item-image-box">
                          <div className="category-item-image">
                            <figure>
                              <img src={category.img} alt={category.title} />
                            </figure>
                          </div>
                          <div className="category-item-info">
                            <Link to="/Services">
                              <p>{category.title}</p>
                            </Link>
                          </div>
                        </div>
                        <div className="category-item-content">
                          <h3>
                            <Link to="/Services">{category.title}</Link>
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="category-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Categories Section End */}

      {/* Intro Video Section Start */}
      <div className="intro-video dark-section">
        {/* Video Start */}
        <div className="intro-video-bg-video">
          <video autoPlay muted playsInline loop id="introvideo">
            <source src="/assets/images/livora-intro-video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Video End */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-9">
              {/* Section Title Start */}
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">Interior Design Showcase</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Explore Spaces Designed for Modern Living ✨
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-xl-6 col-md-3">
              {/* Intro Video Circle Start */}
              <div className="intro-video-circle">
                <a
                  href="https://www.youtube.com/watch?v=Y-x0efG1seA"
                  className="popup-video"
                  data-cursor-text="Play"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch our showreel on YouTube"
                >
                  <img src="/assets/images/intro-video-circle.svg" alt="Play video" />
                </a>
              </div>
              {/* Intro Video Circle End */}
            </div>
          </div>
        </div>
      </div>
      {/* Intro Video Section End */}

      {/* Our Stories Section Start */}
      <div className="our-stories">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <span className="section-sub-title wow fadeInUp">Design Stories</span>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Modern Living Inspirations
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {/* Story Item List Start */}
              <div className="stoty-item-list">
                {STORIES.map((story) => (
                  <div className="story-item" key={story.id}>
                    {/* Story Item Video Start */}
                    <div className="story-item-video">
                      <a
                        href={story.src}
                        className="popup-video"
                        data-cursor-text="View"
                        aria-label="View design story video"
                      >
                        <video autoPlay muted playsInline loop id={story.id}>
                          <source src={story.src} type="video/mp4" />
                        </video>
                      </a>
                    </div>
                    {/* Story Item Video End */}
                  </div>
                ))}
              </div>
              {/* Story Item List End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Stories Section End */}

      {/* Our Testimonials Section Start */}
      <div className="our-testimonials light-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              {/* Testimonials Image Start */}
              <div className="testimonials-image wow fadeInUp">
                <figure>
                  <img
                    src="/assets/images/testimonials-image.png"
                    alt="Aktik Designs interior design showcase"
                  />
                </figure>
              </div>
              {/* Testimonials Image End */}
            </div>

            <div className="col-xl-6">
              {/* Testimonials Content Start */}
              <div className="testimonials-content">
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">
                    Happy Customers
                  </span>

                  <h2 className="text-anime-style-3" data-cursor="-opaque">
                    Beautiful Interiors, Trusted by Our Customers
                  </h2>

                  <p>★ 4.9/5 on Google · 48 Reviews</p>
                </div>

                {/* Testimonial Slider Start */}
                <div className="testimonial-slider">
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={TESTIMONIALS.length > 1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                  >
                    {TESTIMONIALS.map((review) => (
                      <SwiperSlide key={review.id}>
                        <div className="testimonial-item">
                          <div className="testimonial-item-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <i key={star} className="fa-solid fa-star" aria-hidden="true" />
                            ))}
                          </div>

                          <div className="testimonial-item-content">
                            <p>{review.text}</p>
                          </div>

                          <div className="testimonial-item-author-box">
                            <div className="testimonial-item-author">
                              <div className="testimonial-item-author-image">
                                <figure
                                  className="image-anime"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    backgroundColor: review.initialBg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: "hidden",
                                    margin: 0,
                                  }}
                                >
                                  <span
                                    style={{
                                      color: "#ffffff",
                                      fontSize: "22px",
                                      fontWeight: "600",
                                    }}
                                    aria-hidden="true"
                                  >
                                    {review.initial}
                                  </span>
                                </figure>
                              </div>

                              <div className="testimonial-item-author-content">
                                <h2>{review.name}</h2>
                                <p>{review.source}</p>
                              </div>
                            </div>

                            <div className="testimonial-item-quotes">
                              <img
                                src="/assets/images/icon-testimonials-quotes.svg"
                                alt=""
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* Testimonial Slider End */}

                <a
                  href="https://www.google.com/search?q=Aktik+Designs+Mangaluru+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-default"
                >
                  Read Our Google Reviews
                </a>
              </div>
              {/* Testimonials Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Testimonials Section End */}
    </div>
  );
}
