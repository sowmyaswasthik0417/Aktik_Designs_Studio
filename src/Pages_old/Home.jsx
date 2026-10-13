import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
export default function Home() {

const AnimatedHeading = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  fontFamily: '"Playfair Display", "Georgia", serif',
  fontWeight: 600,
  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
  lineHeight: 1.15,
  letterSpacing: '-0.02em',
  color: '#ffffff',
  background: 'linear-gradient(90deg, #ffffff 0%, #ffffff 40%, #1c1c2e 50%, #ffffff 60%, #ffffff 100%)',
  backgroundSize: '250% auto',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'shineSweep 3.5s ease-in-out infinite',
  '@keyframes shineSweep': {
    '0%': { backgroundPosition: '150% center' },
    '100%': { backgroundPosition: '-150% center' },
  },
}));
 useEffect(() => {
  if (window.Swiper) {
    const categorySwiper = new window.Swiper(
      '.category-item-slider .swiper',
      {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,

        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },

        pagination: {
          el: '.category-pagination',
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 5,
          },
        },
      }
    )

    return () => {
      categorySwiper.destroy()
    }
  }
}, [])
const categories = [
  {
    image: "/assets/images/myproject (1).jpeg",
    name: "Living Room",
    items: "40+ Projects",
  },
  {
    image: "/assets/images/myproject (2).jpeg",
    name: "Bedroom",
    items: "40+ Projects",
  },
  {
    image: "/assets/images/myproject (3).jpeg",
    name: "Dining Room",
    items: "40+ Projects",
  },
  {
    image: "/assets/images/myproject (4).jpeg",
    name: "Office",
    items: "40+ Projects",
  },
  {
    image: "/assets/images/myproject (5).jpeg",
    name: "Outdoor",
    items: "40+ Projects",
  },
  {
    image: "/assets/images/myproject (6).jpeg",
    name: "Home Storage",
    items: "40+ Projects",
  },
  {
    image: "/assets/images/myproject (7).jpeg",
    name: "Kitchen",
    items: "40+ Projects",
  },
]
  return (
    <div>
      <div>
  {/* Preloader Start */}
  {/* <div className="preloader">
    <div className="loading-container">
      <div className="loading" />
      <div id="loading-icon"><img src="/assets/images/loader.svg" alt /></div>
    </div>
  </div> */}
  {/* Preloader End */}

  <div className="hero dark-section parallaxie">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          {/* Hero Content Box Start */}
          <div className="hero-content-box">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">From Vision To Reality</span>
              {/* <h1  className="text-anime-style-3 heading-hover"
  data-cursor="-opaque">Designing Interiors You’ll Love To Live In</h1> */}
  <AnimatedHeading
  variant="h1"
  className="text-anime-style-3"
  
  data-cursor="-opaque"
>
  Designing Interiors You'll Love To Live In
</AnimatedHeading>
            </div>
            {/* Section Title End */}
            {/* Hero Content Button Start */}
            <div className="hero-content-btn wow fadeInUp" data-wow-delay="0.2s">
              <Link to="/Contact" className="btn-default btn-highlighted">Book Free Consultation</Link>
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
          {/* Section Title Start */}
          <div className="section-title section-title-center">
            <span className="section-sub-title">Explore By Space</span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">Explore Our Interior Services</h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
  <div className="row">
  <div className="col-lg-12">

    {/* Category Item Slider Start */}
    <div className="category-item-slider">

      <div className="swiper">

        <div className="swiper-wrapper">

          {categories.map((category, index) => (
            <div className="swiper-slide" key={index}>

              {/* Category Item Start */}
              <div className="category-item">

                <div className="category-item-image-box">

                  <div className="category-item-image">
                    <figure>
                      <img
                        src={category.image}
                        alt={category.name}
                      />
                    </figure>
                  </div>

                  <div className="category-item-info">
                    <Link to="/Products">
                      <p>Explore More</p>
                    </Link>
                  </div>

                </div>

                <div className="category-item-content">
                  <h3>
                    <Link to="/Products">
                      {category.name}
                    </Link>
                  </h3>
                </div>

              </div>
              {/* Category Item End */}

            </div>
          ))}

        </div>

        <div className="category-pagination"></div>

      </div>

    </div>
    {/* Category Item Slider End */}

  </div>
</div>
    </div>
  </div>
  {/* Our Categories Section End */}
  {/* Our Offers Section Start */}

  {/* Our Offers Section End */}
  {/* Our Products Section Start */}
  <div className="our-products">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-xl-6">
          {/* Section Title Start */}
          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">Featured Work</span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">Discover Our Recent Projects</h2>
          </div>
          {/* Section Title End */}
        </div>
        <div className="col-xl-6">
          {/* Section Title Content Start */}
          <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
            <p>Take a look at interiors we've designed and executed, crafted to transform ordinary spaces into warm, elegant, and functional living experiences.</p>
          </div>
          {/* Section Title Content End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Product Item List Start */}
          <div className="product-item-list">
            {/* Product Item Start */}
            <div className="product-item wow fadeInUp">
              {/* Product Item Header Start */}
              <div className="product-item-header">
                {/* Product Item Image Start */}
                <div className="product-item-image">
                  <a href="product-single.html">
                    <figure>
                      <img src="/assets/images/myproject (10).jpeg" alt />
                    </figure>
                  </a>
                </div>
                {/* Product Item Image End */}
                {/* Product Item Action Start */}
                <div className="product-item-action">
                  <ul>
                    <li><a href="account-wishlist.html"><img src="/assets/images/icon-wishlist-primary.svg" alt /></a></li>
                    <li><a href="#"><img src="/assets/images/icon-preview.svg" alt /></a></li>
                    <li><a href="cart.html"><img src="/assets/images/icon-cart-primary.svg" alt /></a></li>
                  </ul>
                </div>
                {/* Product Item Action End */}
              </div>
              {/* Product Item Header End */}                                        
              {/* Product Item Body Start */}
              <div className="product-item-body">
                {/* Product Item Content Start */}
                <div className="product-item-content">
                  <h2 className="product-item-title"><a href="product-single.html">Modern Living Room Makeover</a></h2>
                  <span className="product-item-rating">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
                {/* Product Item Content End */}
                {/* Product Item Price Start */}
                <div className="product-item-price">
                  <h3>Mangaluru <small>Residential</small></h3>
                </div>
                {/* Product Item Price End */}
              </div>
              {/* Product Item Body End */}
            </div>
            {/* Product Item End */}
            {/* Product Item Start */}
            <div className="product-item wow fadeInUp" data-wow-delay="0.2s">
              {/* Product Item Header Start */}
              <div className="product-item-header">
                {/* Product Item Image Start */}
                <div className="product-item-image">
                  <a href="product-single.html">
                    <figure>
                      <img src="/assets/images/myproject (11).jpeg" alt />
                    </figure>
                  </a>
                </div>
                {/* Product Item Image End */}
                {/* Product Item Action Start */}
                <div className="product-item-action">
                  <ul>
                    <li><a href="account-wishlist.html"><img src="/assets/images/icon-wishlist-primary.svg" alt /></a></li>
                    <li><a href="#"><img src="/assets/images/icon-preview.svg" alt /></a></li>
                    <li><a href="cart.html"><img src="/assets/images/icon-cart-primary.svg" alt /></a></li>
                  </ul>
                </div>
                {/* Product Item Action End */}
              </div>
              {/* Product Item Header End */}                                        
              {/* Product Item Body Start */}
              <div className="product-item-body">
                {/* Product Item Content Start */}
                <div className="product-item-content">
                  <h2 className="product-item-title"><a href="product-single.html">Scandinavian Style Dining Space</a></h2>
                  <span className="product-item-rating">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
                {/* Product Item Content End */}
                {/* Product Item Price Start */}
                <div className="product-item-price">
                  <h3>Moodbidri <small>Residential</small></h3>
                </div>
                {/* Product Item Price End */}
              </div>
              {/* Product Item Body End */}
            </div>
            {/* Product Item End */}
            {/* Product Item Start */}
            <div className="product-item wow fadeInUp" data-wow-delay="0.4s">
              {/* Product Item Header Start */}
              <div className="product-item-header">
                {/* Product Item Image Start */}
                <div className="product-item-image">
                  <a href="product-single.html">
                    <figure>
                      <img src="/assets/images/myproject (12).jpeg" alt />
                    </figure>
                  </a>
                </div>
                {/* Product Item Image End */}
                {/* Product Item Action Start */}
                <div className="product-item-action">
                  <ul>
                    <li><a href="account-wishlist.html"><img src="/assets/images/icon-wishlist-primary.svg" alt /></a></li>
                    <li><a href="#"><img src="/assets/images/icon-preview.svg" alt /></a></li>
                    <li><a href="cart.html"><img src="/assets/images/icon-cart-primary.svg" alt /></a></li>
                  </ul>
                </div>
                {/* Product Item Action End */}
              </div>
              {/* Product Item Header End */}                                        
              {/* Product Item Body Start */}
              <div className="product-item-body">
                {/* Product Item Content Start */}
                <div className="product-item-content">
                  <h2 className="product-item-title"><a href="product-single.html">Luxury Office Fit-Out</a></h2>
                  <span className="product-item-rating">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
                {/* Product Item Content End */}
                {/* Product Item Price Start */}
                <div className="product-item-price">
                  <h3>Bangalore <small>Commercial</small></h3>
                </div>
                {/* Product Item Price End */}
              </div>
              {/* Product Item Body End */}
            </div>
            {/* Product Item End */}
            {/* Product Item Start */}
            <div className="product-item wow fadeInUp" data-wow-delay="0.6s">
              {/* Product Item Header Start */}
              <div className="product-item-header">
                {/* Product Item Image Start */}
                <div className="product-item-image">
                  <a href="product-single.html">
                    <figure>
                      <img src="/assets/images/myproject (13).jpeg" alt />
                    </figure>
                  </a>
                </div>
                {/* Product Item Image End */}
                {/* Product Item Action Start */}
                <div className="product-item-action">
                  <ul>
                    <li><a href="account-wishlist.html"><img src="/assets/images/icon-wishlist-primary.svg" alt /></a></li>
                    <li><a href="#"><img src="/assets/images/icon-preview.svg" alt /></a></li>
                    <li><a href="cart.html"><img src="/assets/images/icon-cart-primary.svg" alt /></a></li>
                  </ul>
                </div>
                {/* Product Item Action End */}
              </div>
              {/* Product Item Header End */}                                        
              {/* Product Item Body Start */}
              <div className="product-item-body">
                {/* Product Item Content Start */}
                <div className="product-item-content">
                  <h2 className="product-item-title"><a href="product-single.html">Compact Modular Kitchen</a></h2>
                  <span className="product-item-rating">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
                {/* Product Item Content End */}
                {/* Product Item Price Start */}
                <div className="product-item-price">
                  <h3>Mangaluru <small>Residential</small></h3>
                </div>
                {/* Product Item Price End */}
              </div>
              {/* Product Item Body End */}
            </div>
            {/* Product Item End */}
          </div>
          {/* Product Item List Start */}
        </div>
        <div className="col-lg-12">
          {/* Section Footer Text Start */}
          <div className="section-footer-text section-satisfy-img wow fadeInUp" data-wow-delay="0.2s">
            {/* Satisfy Client Images Start */}
            <div className="satisfy-client-images">
              <div className="satisfy-client-image">
                <figure className="image-anime">
                  <img src="/assets/images/author-1.jpg" alt />
                </figure>
              </div>
              <div className="satisfy-client-image add-more">
                <img src="/assets/images/icon-phone-white.svg" alt />
              </div>
            </div>
            {/* Satisfy Client Images End */}    
            <p>Let's design something great together. <a href="products.html">View our full portfolio.</a></p>
          </div>
          {/* Section Footer Text End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Products Section End */}
  {/* Intro Video Section Start */}
  <div className="intro-video dark-section">
    {/* Video Start */}
    <div className="intro-video-bg-video">
      {/* Selfhosted Video Start */}
      {/* <video autoplay muted loop id="introvideo"><source src="/assets/images/intro-bg-video.mp4" type="video/mp4"></video> */}
      <video autoPlay muted playsInline loop id="introvideo"><source src="https://demo.awaikenthemes.com/assets/videos/livora-intro-video.mp4" /></video>
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
            <span className="section-sub-title wow fadeInUp">Studio Walkthrough</span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">Watch How We Bring Interiors To Life</h2>
          </div>
          {/* Section Title End */}
        </div>
        <div className="col-xl-6 col-md-3">
          {/* Intro Video Circle Start */}
          <div className="intro-video-circle">
            <a href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
              <img src="/assets/images/intro-video-circle.svg" alt />
            </a>
          </div>
          {/* Intro Video Circle End */}
        </div>
      </div>
    </div>
  </div>
  {/* Intro Video Section End */}
  {/* Our Trending Products Section Start */}
  <div className="our-trending-products">
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title section-title-center">
            <span className="section-sub-title wow fadeInUp">Trending Now</span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">Trending Interior Inspirations</h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* Trending Product Item Boxes Start */}
          <div className="trending-product-item-boxes">
            {/* Trending Product Item Start */}
            <div className="trending-product-item wow fadeInUp">
              <div className="trending-product-item-image">
                <a href="products.html" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (10).jpeg" alt />
                  </figure>
                </a>
              </div>
              <div className="trending-product-item-content">
                <h3><a href="products.html">OFFICE</a></h3>
                <p>Designed For Productive <b>Working</b></p>
              </div>
            </div>
            {/* Trending Product Item End */}
            {/* Trending Product Item Start */}
            <div className="trending-product-item wow fadeInUp" data-wow-delay="0.2s">
              <div className="trending-product-item-image">
                <a href="products.html" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (11).jpeg" alt />
                  </figure>
                </a>
              </div>
              <div className="trending-product-item-content">
                <h3><a href="products.html">FOYER</a></h3>
                <p>Comfort Meets Timeless <b>Style</b></p>
              </div>
            </div>
            {/* Trending Product Item End */}
            {/* Trending Product Item Start */}
            <div className="trending-product-item wow fadeInUp" data-wow-delay="0.4s">
              <div className="trending-product-item-image">
                <a href="products.html" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (12).jpeg" alt />
                  </figure>
                </a>
              </div>
              <div className="trending-product-item-content">
                <h3><a href="products.html">LIVING ROOM</a></h3>
                <p>Create Moments Of <b>Togetherness</b></p>
              </div>
            </div>
            {/* Trending Product Item End */}
            {/* Product Offer Item Start */}
            <div className="product-offer-item box-1 wow fadeInUp" data-wow-delay="0.6s">
              <div className="product-offer-item-content">
                <div className="product-offer-item-header-content">
                  <span>FREE CONSULTATION</span>
                  <h3><a href="products.html">Residential Interiors</a></h3>
                  <p>Elegant Modern Comfort</p>
                </div>
                <div className="product-offer-item-body-content">
                  <p>Serving</p>
                  <h3>Mangaluru</h3>
                </div>
              </div>
              <div className="product-offer-item-image">
                <figure>
                  <img src="/assets/images/myproject (8).jpeg" alt />
                </figure>
              </div>
            </div>
            {/* Product Offer Item End */}
            {/* Product Offer Item Start */}
            <div className="product-offer-item box-2 wow fadeInUp" data-wow-delay="0.8s">
              <div className="product-offer-item-content">
                <div className="product-offer-item-header-content">
                  <span>FREE CONSULTATION</span>
                  <h3><a href="products.html">Commercial Interiors</a></h3>
                  <p>Smart Workspaces</p>
                </div>
                <div className="product-offer-item-body-content">
                  <p>Serving</p>
                  <h3>Bangalore</h3>
                </div>
              </div>
              <div className="product-offer-item-image">
                <figure>
                  <img src="/assets/images/myproject (9).jpeg" alt />
                </figure>
              </div>
            </div>
            {/* Product Offer Item End */}
            {/* Product Offer Item Start */}
            <div className="product-offer-item box-3 wow fadeInUp" data-wow-delay="1s">
              <div className="product-offer-item-content">
                <div className="product-offer-item-header-content">
                  <span>FREE CONSULTATION</span>
                  <h3><a href="products.html">Modular Kitchens</a></h3>
                  <p>Elegant Dining</p>
                </div>
                <div className="product-offer-item-body-content">
                  <p>Serving</p>
                  <h3>Moodbidri</h3>
                </div>
              </div>
              <div className="product-offer-item-image">
                <figure>
                  <img src="/assets/images/myproject (10).jpeg" alt />
                </figure>
              </div>
            </div>
            {/* Product Offer Item End */}
          </div>
          {/* Trending Product Item Boxes End */}
        </div>
      </div>
    </div>
  </div> 
  {/* Our Trending Products Section End */}
  {/* Our Arrivals Section Start */}
  <div className="our-arrivals light-section">
    <div className="container">
      <div className="row section-row align-items-center">
        <div className="col-xl-6">
          {/* Section Title Start */}
          <div className="section-title">
            <span className="section-sub-title wow fadeInUp">Recent Projects</span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">Newly Completed Interiors</h2>
          </div>
          {/* Section Title End */}
        </div>
        <div className="col-xl-6">
          {/* Section Title Content Start */}
          <div className="section-title-content wow fadeInUp" data-wow-delay="0.2s">
            <p>Explore recently completed residential and commercial interior projects crafted to bring modern elegance, comfort, and timeless style into every space.</p>
          </div>
          {/* Section Title Content End */}
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          {/* Arrivals Item Box Start */}
          <div className="our-arrivals-item-box">
            {/* Arrivals Item Start */}
            <div className="arrivals-item highlighted-item dark-section">
              {/* Arrivals Item Image Start */}
              <div className="arrivals-item-image">
                <a href="#" data-cursor-text="View">
                  <figure>
                    <img src="/assets/images/myproject (14).jpeg" alt />
                  </figure>
                </a>
              </div>
              {/* Arrivals Item Image End */}
              {/* Arrivals Item Content Start */}
              <div className="arrivals-item-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <span className="section-sub-title wow fadeInUp">Free Consultation</span>
                  <h2 className="text-anime-style-3" data-cursor="-opaque">Style Meets Comfort</h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">Upgrade your home or office with modern interior design for elegance &amp; everyday living, backed by a free initial consultation.</p>
                </div>
                {/* Section Title End */}
                {/* Arrivals Item Button Start */}
                <div className="arrivals-item-btn wow fadeInUp" data-wow-delay="0.4s">
                  <a href="products.html" className="btn-default btn-highlighted">Enquire Now</a>
                </div>
                {/* Arrivals Item Button End */}
              </div>
              {/* Arrivals Item Content End */}
            </div>
            {/* Arrivals Item End */}
            {/* Arrivals Item List Start */}
            <div className="arrivals-item-list">
              {/* Arrivals Item Start */}
              <div className="arrivals-item">
                {/* Arrivals Item Image Start */}
                <div className="arrivals-item-image">
                  <a href="#" data-cursor-text="View">
                    <figure>
                      <img src="/assets/images/myproject (15).jpeg" alt />
                    </figure>
                  </a>
                </div>
                {/* Arrivals Item Image End */}
                {/* Arrivals Item Content Start */}
                <div className="arrivals-item-content">
                  <h3><a href="#">Marble Foyer Design</a></h3>
                </div>
                {/* Arrivals Item Content End */}
              </div>
              {/* Arrivals Item End */}
              {/* Arrivals Item Start */}
              <div className="arrivals-item">
                {/* Arrivals Item Image Start */}
                <div className="arrivals-item-image">
                  <a href="#" data-cursor-text="View">
                    <figure>
                      <img src="/assets/images/myproject (16).jpeg" alt />
                    </figure>
                  </a>
                </div>
                {/* Arrivals Item Image End */}
                {/* Arrivals Item Content Start */}
                <div className="arrivals-item-content">
                  <h3><a href="#">Minimal Home Office</a></h3>
                </div>
                {/* Arrivals Item Content End */}
              </div>
              {/* Arrivals Item End */}
              {/* Arrivals Item Start */}
              <div className="arrivals-item">
                {/* Arrivals Item Image Start */}
                <div className="arrivals-item-image">
                  <a href="#" data-cursor-text="View">
                    <figure>
                      <img src="/assets/images/myproject (17).jpeg" alt />
                    </figure>
                  </a>
                </div>
                {/* Arrivals Item Image End */}
                {/* Arrivals Item Content Start */}
                <div className="arrivals-item-content">
                  <h3><a href="#">Living Room Renovation</a></h3>
                </div>
                {/* Arrivals Item Content End */}
              </div>
              {/* Arrivals Item End */}
              {/* Arrivals Item Start */}
              <div className="arrivals-item">
                {/* Arrivals Item Image Start */}
                <div className="arrivals-item-image">
                  <a href="#" data-cursor-text="View">
                    <figure>
                      <img src="/assets/images/myproject (18).jpeg" alt />
                    </figure>
                  </a>
                </div>
                {/* Arrivals Item Image End */}
                {/* Arrivals Item Content Start */}
                <div className="arrivals-item-content">
                  <h3><a href="#">Wooden TV Unit</a></h3>
                </div>
                {/* Arrivals Item Content End */}
              </div>
              {/* Arrivals Item End */}
            </div>
            {/* Arrivals Item List End */}
          </div>
          {/* Arrivals Item Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Arrivals Section End */}
  {/* Our Best Selleter Section Start */}
  <div className="our-best-seller">
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title section-title-center">
            <span className="section-sub-title wow fadeInUp">Popular Services</span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">Popular Interior Design Services</h2>
          </div>
          {/* Section Title End */}
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          {/* Best Seller Box Start */}
          <div className="best-seller-box">
            {/* Best Seller Item Start */}
            <div className="best-seller-item highlighted-item wow fadeInUp">
              <div className="best-seller-item-image">
                <a href="#" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (16).jpeg" alt />
                  </figure>
                </a>
              </div>
              <div className="best-seller-item-body">
                <div className="best-seller-item-content">
                  <h3><a href="#">Wardrobes | 200+ Layouts</a></h3>
                  <p>Starting from <span>Free Consultation</span></p>
                </div>
                <div className="best-seller-item-btn">
                  <a href="#"><img src="/assets/images/arrow-white.svg" alt /></a>
                </div>
              </div>
            </div>
            {/* Best Seller Item End */}
            {/* Best Seller Item List Start */}
            <div className="best-seller-item-list">
              {/* Best Seller Item Start */}
              <div className="best-seller-item wow fadeInUp">
                <div className="best-seller-item-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/assets/images/myproject (17).jpeg" alt />
                    </figure>
                  </a>
                </div>
                <div className="best-seller-item-body">
                  <div className="best-seller-item-content">
                    <h3><a href="#">Cabinets &amp; Storage | 150+ Items</a></h3>
                    <p>Starting from <span>Free Consultation</span></p>
                  </div>
                  <div className="best-seller-item-btn">
                    <a href="#"><img src="/assets/images/arrow-white.svg" alt /></a>
                  </div>
                </div>
              </div>
              {/* Best Seller Item End */}
              {/* Best Seller Item Start */}
              <div className="best-seller-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="best-seller-item-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/assets/images/myproject (18).jpeg" alt />
                    </figure>
                  </a>
                </div>
                <div className="best-seller-item-body">
                  <div className="best-seller-item-content">
                    <h3><a href="#">Modular Kitchens | 100+ Designs</a></h3>
                    <p>Starting from <span>Free Consultation</span></p>
                  </div>
                  <div className="best-seller-item-btn">
                    <a href="#"><img src="/assets/images/arrow-white.svg" alt /></a>
                  </div>
                </div>
              </div>
              {/* Best Seller Item End */}
              {/* Best Seller Item Start */}
              <div className="best-seller-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="best-seller-item-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/assets/images/myproject (19).jpeg" alt />
                    </figure>
                  </a>
                </div>
                <div className="best-seller-item-body">
                  <div className="best-seller-item-content">
                    <h3><a href="#">Living Room Interiors | 120+ Styles</a></h3>
                    <p>Starting from <span>Free Consultation</span></p>
                  </div>
                  <div className="best-seller-item-btn">
                    <a href="#"><img src="/assets/images/arrow-white.svg" alt /></a>
                  </div>
                </div>
              </div>
              {/* Best Seller Item End */}
              {/* Best Seller Item Start */}
              <div className="best-seller-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="best-seller-item-image">
                  <a href="#" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src="/assets/images/myproject (20).jpeg" alt />
                    </figure>
                  </a>
                </div>
                <div className="best-seller-item-body">
                  <div className="best-seller-item-content">
                    <h3><a href="#">False Ceiling | 80+ Designs</a></h3>
                    <p>Starting from <span>Free Consultation</span></p>
                  </div>
                  <div className="best-seller-item-btn">
                    <a href="#"><img src="/assets/images/arrow-white.svg" alt /></a>
                  </div>
                </div>
              </div>
              {/* Best Seller Item End */}
            </div>
            {/* Best Seller Item List End */}
            {/* Luxury Seller Item Start */}
          
            {/* Luxury Seller Item End */}
          </div>
          {/* Best Seller Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Our Best Selleter Section End */}
  {/* Our Flat Discount Section Start */}

  {/* Our Flat Discount Section End */}
  {/* Our Stories Section Start */}
  <div className="our-stories">
    <div className="container">
      <div className="row section-row">
        <div className="col-lg-12">
          {/* Section Title Start */}
          <div className="section-title section-title-center">
            <span className="section-sub-title wow fadeInUp">Design Stories</span>
            <h2 className="text-anime-style-3" data-cursor="-opaque">Interior Inspirations From Our Studio</h2>
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
                <a href="https://demo.awaikenthemes.com/assets/videos/livora-our-story-1-video.mp4" className="popup-video" data-cursor-text="View">
                  {/* Selfhosted Video Start */}
                  {/* <video autoplay muted loop id="storyvideo1"><source src="/assets/images/livora-our-story-1-video.mp4" type="video/mp4"></video> */}
                  <video autoPlay muted playsInline loop id="storyvideo1"><source src="https://demo.awaikenthemes.com/assets/videos/livora-our-story-1-video.mp4" type="video/mp4" /></video>
                  {/* Selfhosted Video End */}
                  {/* Youtube Video Start */}
                  {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                  {/* Youtube Video End */}
                </a>
              </div>
              {/* Story Item Video End */}
              <div className="icon-box">
                <a href="#"><i className="fa-brands fa-instagram" /></a>
              </div>
            </div>
            {/* Story Item End */}
            {/* Story Item Start */}
            <div className="story-item">
              {/* Story Item Video Start */}
              <div className="story-item-video">
                <a href="https://demo.awaikenthemes.com/assets/videos/livora-our-story-2-video.mp4" className="popup-video" data-cursor-text="View">
                  {/* Selfhosted Video Start */}
                  {/* <video autoplay muted loop id="storyvideo2"><source src="/assets/images/livora-our-story-2-video.mp4" type="video/mp4"></video> */}
                  <video autoPlay muted playsInline loop id="storyvideo2"><source src="https://demo.awaikenthemes.com/assets/videos/livora-our-story-2-video.mp4" type="video/mp4" /></video>
                  {/* Selfhosted Video End */}
                  {/* Youtube Video Start */}
                  {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                  {/* Youtube Video End */}
                </a>
              </div>
              {/* Story Item Video End */}
              <div className="icon-box">
                <a href="#"><i className="fa-brands fa-facebook-f" /></a>
              </div>
            </div>
            {/* Story Item End */}
            {/* Story Item Start */}
            <div className="story-item">
              {/* Story Item Video Start */}
              <div className="story-item-video">
                <a href="https://demo.awaikenthemes.com/assets/videos/livora-our-story-3-video.mp4" className="popup-video" data-cursor-text="View">
                  {/* Selfhosted Video Start */}
                  {/* <video autoplay muted loop id="storyvideo3"><source src="/assets/images/livora-our-story-3-video.mp4" type="video/mp4"></video> */}
                  <video autoPlay muted playsInline loop id="storyvideo3"><source src="https://demo.awaikenthemes.com/assets/videos/livora-our-story-3-video.mp4" type="video/mp4" /></video>
                  {/* Selfhosted Video End */}
                  {/* Youtube Video Start */}
                  {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                  {/* Youtube Video End */}
                </a>
              </div>
              {/* Story Item Video End */}
              <div className="icon-box">
                <a href="#"><i className="fa-brands fa-pinterest-p" /></a>
              </div>
            </div>
            {/* Story Item End */}
            {/* Story Item Start */}
            <div className="story-item">
              {/* Story Item Video Start */}
              <div className="story-item-video">
                <a href="https://demo.awaikenthemes.com/assets/videos/livora-our-story-4-video.mp4" className="popup-video" data-cursor-text="View">
                  {/* Selfhosted Video Start */}
                  {/* <video autoplay muted loop id="storyvideo4"><source src="/assets/images/livora-our-story-4-video.mp4" type="video/mp4"></video> */}
                  <video autoPlay muted playsInline loop id="storyvideo4"><source src="https://demo.awaikenthemes.com/assets/videos/livora-our-story-4-video.mp4" type="video/mp4" /></video>
                  {/* Selfhosted Video End */}
                  {/* Youtube Video Start */}
                  {/* <div id="youtubevideo" class="player" data-property="{videoURL:'OjTRVpgtcG4',containment:'.intro-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"></div> */}
                  {/* Youtube Video End */}
                </a>
              </div>
              {/* Story Item Video End */}
              <div className="icon-box">
                <a href="#"><i className="fa-brands fa-x-twitter" /></a>
              </div>
            </div>
            {/* Story Item End */}
          </div>
          {/* Story Item List End */}
        </div>
        <div className="col-lg-12">
          {/* Section Footer Text Start */}
          <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
            <p><span>Free</span>Let's design something great together. <a href="contact.html">Get Free Quote.</a></p>
          </div>
          {/* Section Footer Text End */}
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
              <img src="/assets/images/myproject (5).jpeg" alt />
            </figure>
          </div>
          {/* Testimonials Image End */}
        </div>
        <div className="col-xl-6">
          {/* Testimonials Content Start */}
          <div className="testimonials-content">
            {/* Section Title Start */}
            <div className="section-title">
              <span className="section-sub-title wow fadeInUp">Happy Client</span>
              <h2 className="text-anime-style-3" data-cursor="-opaque">Interiors Trusted By Homes &amp; Businesses</h2>
            </div>
            {/* Section Title End */}
            {/* Testimonial Slider Start */}
            <div className="testimonial-slider">
              <div className="swiper">
                <div className="swiper-wrapper" data-cursor-text="Drag">
                  {/* Testimonial Slider Start */}
                  <div className="swiper-slide">
                    {/* Testimonial Item Start */}
                    <div className="testimonial-item">
                      <div className="testimonial-item-rating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                      <div className="testimonial-item-content">
                        <p>“From the first consultation to the final handover, Aktik Designs understood exactly what we wanted and delivered a home interior that felt truly ours.”</p>
                      </div>
                      <div className="testimonial-item-author-box">
                        <div className="testimonial-item-author">
                          <div className="testimonial-item-author-image">
                            <figure className="image-anime">
                              <img src="/assets/images/author-1.jpg" alt />
                            </figure>
                          </div>
                          <div className="testimonial-item-author-content">
                            <h2>Olivia Bennett</h2>
                            <p>Homeowner</p>
                          </div>
                        </div>
                        <div className="testimonial-item-quotes">
                          <img src="/assets/images/icon-testimonials-quotes.svg" alt />
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item End */}
                  </div>
                  {/* Testimonial Slider End */}
                  {/* Testimonial Slider Start */}
                  <div className="swiper-slide">
                    {/* Testimonial Item Start */}
                    <div className="testimonial-item">
                      <div className="testimonial-item-rating">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                      <div className="testimonial-item-content">
                        <p>“Professional, punctual and detail-oriented — our office fit-out was completed on schedule and looks better than we imagined.”</p>
                      </div>
                      <div className="testimonial-item-author-box">
                        <div className="testimonial-item-author">
                          <div className="testimonial-item-author-image">
                            <figure className="image-anime">
                              <img src="/assets/images/author-1.jpg" alt />
                            </figure>
                          </div>
                          <div className="testimonial-item-author-content">
                            <h2>Rahul Shetty</h2>
                            <p>Business Owner</p>
                          </div>
                        </div>
                        <div className="testimonial-item-quotes">
                          <img src="/assets/images/icon-testimonials-quotes.svg" alt />
                        </div>
                      </div>
                    </div>
                    {/* Testimonial Item End */}
                  </div>
                  {/* Testimonial Slider End */}
                </div>
              </div>
            </div>
            {/* Testimonial Slider End */}
          </div>
          {/* Testimonials Content End */}
        </div>
      </div>
    </div>
  </div>


</div>

    </div>
  )
}