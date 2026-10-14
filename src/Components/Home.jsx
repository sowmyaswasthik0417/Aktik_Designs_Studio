import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
const categories = [
  { img: "../assets/images/category-item-image-1.jpg", title: "Living Room" },
  { img: "../assets/images/category-item-image-2.jpg", title: "Bedroom" },
  { img: "../assets/images/category-item-image-3.jpg", title: "Dining Room" },
  { img: "../assets/images/category-item-image-4.jpg", title: "Office" },
  { img: "../assets/images/category-item-image-5.jpg", title: "Outdoor" },
  { img: "../assets/images/category-item-image-6.jpg", title: "Home Storage" },
  { img: "../assets/images/category-item-image-7.jpg", title: "Kitchen" },
];

  return (
  <div>
    {/* Preloader Start */}
    {/* <div className="preloader">
      <div className="loading-container">
        <div className="loading" />
        <div id="loading-icon"><img src="../assets/images/logoo.svg" alt /></div>
      </div>
    </div> */}

    <div className="hero dark-section parallaxie">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            {/* Hero Content Box Start */}
            <div className="hero-content-box">
              {/* Section Title Start */}
              <div className="section-title">
                <span className="section-sub-title wow fadeInUp">From Vision to Reality ✨</span>
                <h1 className="text-anime-style-3" data-cursor="-opaque">Creating Beautiful Spaces for Better Living ✨</h1>
              </div>
              {/* Section Title End */}
              {/* Hero Content Button Start */}
              <div className="hero-content-btn wow fadeInUp" data-wow-delay="0.2s">
                <a href="/contact" className="btn-default btn-highlighted">Contact Us</a>
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
              {/* <span className="section-sub-title">Our services</span> */}
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
    {categories.map((category, index) => (
      <SwiperSlide key={index}>
        <div className="category-item">
          <div className="category-item-image-box">
            <div className="category-item-image">
              <figure>
               <img src={category.img} alt={category.title} />
              </figure>
            </div>
            <div className="category-item-info">
             <Link to="/Products"> 
             <p>{category.title}</p>
             </Link>
            </div>
          </div>
          <div className="category-item-content">
            <h3>
              <Link to="/Products">{category.name}</Link>
            </h3>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className="category-pagination"></div>
</div>
          </div>
        </div>
      </div>
    </div>
    {/* Our Categories Section End */}
    {/* Our Offers Section Start */}
   
 
    <div className="intro-video dark-section">
      {/* Video Start */}
      <div className="intro-video-bg-video">
        {/* Selfhosted Video Start */}
        {/* <video autoplay muted loop id="introvideo"><source src="../assets/images/intro-bg-video.mp4" type="video/mp4"></video> */}
        <video autoPlay muted playsInline loop id="introvideo"><source src="../assets/images/livora-intro-video.mp4" /></video>
        {/* Selfhosted Video End */}
        {/* Youtube Video Start */}
        {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
        {/* Youtube Video End */}
      </div>
      {/* Video End */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-9">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">Interior Design Showcase</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Explore Spaces Designed for Modern Living ✨</h2>
            </div>
            {/* Section Title End */}
          </div>
          <div className="col-xl-6 col-md-3">
            {/* Intro Video Circle Start */}
            <div className="intro-video-circle">
              <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                <img src="../assets/images/intro-video-circle.svg" alt />
              </a>
            </div>
            {/* Intro Video Circle End */}
          </div>
        </div>
      </div>
    </div>
    {/* Intro Video Section End */}
  
  
    <div className="our-stories">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <span className="section-sub-title wow fadeInUp">Design Stories</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Modern Living Inspirations</h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            {/* Story Item List Start */}
            <div className="stoty-item-list">
              {/* Story Item Start */}
              <div className="story-item">
                {/* Story Item Video Start */}
                <div className="story-item-video">
                  <a href="../assets/images/livora-our-story-1-video.mp4" className="popup-video" data-cursor-text="View">
                    {/* Selfhosted Video Start */}
                    {/* <video autoplay muted loop id="storyvideo1"><source src="../assets/images/livora-our-story-1-video.mp4" type="video/mp4"></video> */}
                    <video autoPlay muted playsInline loop id="storyvideo1"><source src="../assets/images/livora-our-story-1-video.mp4" type="video/mp4" /></video>
                    {/* Selfhosted Video End */}
                    {/* Youtube Video Start */}
                    {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                    {/* Youtube Video End */}
                  </a>
                </div>
                {/* Story Item Video End */}
                {/* <div className="icon-box">
                  <a href="#"><i className="fa-brands fa-instagram" /></a>
                </div> */}
              </div>
              {/* Story Item End */}
              {/* Story Item Start */}
              <div className="story-item">
                {/* Story Item Video Start */}
                <div className="story-item-video">
                  <a href="../assets/images/livora-our-story-2-video.mp4" className="popup-video" data-cursor-text="View">
                    {/* Selfhosted Video Start */}
                    {/* <video autoplay muted loop id="storyvideo2"><source src="../assets/images/livora-our-story-2-video.mp4" type="video/mp4"></video> */}
                    <video autoPlay muted playsInline loop id="storyvideo2"><source src="../assets/images/livora-our-story-2-video.mp4" type="video/mp4" /></video>
                    {/* Selfhosted Video End */}
                    {/* Youtube Video Start */}
                    {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                    {/* Youtube Video End */}
                  </a>
                </div>
                {/* Story Item Video End */}
                {/* <div className="icon-box">
                  <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                </div> */}
              </div>
              {/* Story Item End */}
              {/* Story Item Start */}
              <div className="story-item">
                {/* Story Item Video Start */}
                <div className="story-item-video">
                  <a href="../assets/images/livora-our-story-3-video.mp4" className="popup-video" data-cursor-text="View">
                    {/* Selfhosted Video Start */}
                    {/* <video autoplay muted loop id="storyvideo3"><source src="../assets/images/livora-our-story-3-video.mp4" type="video/mp4"></video> */}
                    <video autoPlay muted playsInline loop id="storyvideo3"><source src="../assets/images/livora-our-story-3-video.mp4" type="video/mp4" /></video>
                    {/* Selfhosted Video End */}
                    {/* Youtube Video Start */}
                    {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                    {/* Youtube Video End */}
                  </a>
                </div>
                {/* Story Item Video End */}
                {/* <div className="icon-box">
                  <a href="#"><i className="fa-brands fa-pinterest-p" /></a>
                </div> */}
              </div>
              {/* Story Item End */}
              {/* Story Item Start */}
              <div className="story-item">
                {/* Story Item Video Start */}
                <div className="story-item-video">
                  <a href="../assets/images/livora-our-story-4-video.mp4" className="popup-video" data-cursor-text="View">
                    {/* Selfhosted Video Start */}
                    {/* <video autoplay muted loop id="storyvideo4"><source src="../assets/images/livora-our-story-4-video.mp4" type="video/mp4"></video> */}
                    <video autoPlay muted playsInline loop id="storyvideo4"><source src="../assets/images/livora-our-story-4-video.mp4" type="video/mp4" /></video>
                    {/* Selfhosted Video End */}
                    {/* Youtube Video Start */}
                    {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                    {/* Youtube Video End */}
                  </a>
                </div>
                {/* Story Item Video End */}
                {/* <div className="icon-box">
                  <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                </div> */}
              </div>
              {/* Story Item End */}
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
              src="../assets/images/testimonials-image.png"
              alt="Aktik Designs interior design"
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

            <p>
              ★ 4.9/5 on Google · 48 Reviews
            </p>
          </div>

          {/* Testimonial Slider Start */}
          <div className="testimonial-slider">
            <div className="swiper">
              <div className="swiper-wrapper" data-cursor-text="Drag">

                {/* Google Review 1 */}
          
{/* Google Review - Sanya Bekal */}
<div className="swiper-slide">
  <div className="testimonial-item">
    <div className="testimonial-item-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <i key={star} className="fa-solid fa-star" />
      ))}
    </div>

    <div className="testimonial-item-content">
      <p>
        “I had got home interiors from Aktik. From the designs to the
        end finishing, everything was amazing. They kept in mind our
        selections and also gave suggestions based on their experience
        in the field, which many companies don't give. I just loved the
        interiors of my new house. It has turned out to be perfect,
        exactly how I wanted it to be. I highly recommend Aktik for
        everyone. ❤️”
      </p>
    </div>

    <div className="testimonial-item-author-box">
      <div className="testimonial-item-author">
        <div className="testimonial-item-author-image">
          <figure className="image-anime">
            <img
              src="../assets/images/author-1.jpg"
              alt="Sanya Bekal"
            />
          </figure>
        </div>

        <div className="testimonial-item-author-content">
          <h2>Sanya Bekal</h2>
          <p>Google Review · 5 Stars</p>
        </div>
      </div>

      <div className="testimonial-item-quotes">
        <img
          src="../assets/images/icon-testimonials-quotes.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</div>


            

              </div>
            </div>
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
    {/* Our Blog Section Start */}
   
  
  </div>  
  )

}
