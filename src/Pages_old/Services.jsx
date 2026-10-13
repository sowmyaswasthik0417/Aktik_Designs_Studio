// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Services() {
// const blogPosts = [ 
//     { image: "/assets/images/myproject (1).jpeg", title: "Residential Interior Design", description: "We design homes that feel like you — comfortable, personal, and thoughtfully put together. Every space is shaped around how you live, not just how it looks.", delay: "0s", },
//      { image: "/assets/images/myproject (2).jpeg", title: "Commercial Interior Design", description: "We create interiors that support your business while leaving a lasting impression. From layout to finishes, every detail is designed to work hard and look right.", delay: "0.2s", }, 
//      { image: "/assets/images/myproject (3).jpeg", title: "Renovation and Remodeling", description: "We transform existing spaces with smart design decisions and careful planning. Whether it’s a refresh or a full overhaul, we’ll help you reimagine.", delay: "0.4s", }, 
//      { image: "/assets/images/myproject (4).jpeg", title: "Custom Design Solutions", description: "No templates, no shortcuts — every design is built around you. We listen closely and create solutions that fit your vision, space, and lifestyle.", delay: "0.6s", },
//       { image: "/assets/images/myproject (5).jpeg", title: "Furniture & Decor Consultation", description: "Not sure what works together? We’ll help you make confident choices. We bring clarity, balance, and cohesion to your space.", delay: "0.8s", }, 
//       { image: "/assets/images/myproject (6).jpeg", title: "Space Planning & 3D Visualization", description: "We map out layouts and bring them to life with realistic 3D visuals, so you can see, feel confident, and move forward with clarity.", delay: "1s", }, 
//     ]
// // const blogPosts = [ 
// //     { image: "/assets/images/myproject (1).jpeg", title: "Modern Interior Trends", description: "Discover stylish furniture and décor trends designed for contemporary homes.", delay: "0s", },
// //      { image: "/assets/images/myproject (2).jpeg", title: "Home Styling Tips", description: "Learn creative ways to organize and decorate every room with elegance.", delay: "0.2s", }, 
// //      { image: "/assets/images/myproject (3).jpeg", title: "Furniture Care Guides", description: "Simple tips to maintain the beauty and durability of your furniture for years.", delay: "0.4s", }, 
// //      { image: "/assets/images/myproject (4).jpeg", title: "Space-Saving Ideas", description: "Smart furniture solutions designed for compact and modern living spaces.", delay: "0.6s", },
// //       { image: "/assets/images/myproject (5).jpeg", title: "Comfort & Lifestyle", description: "Find inspiration for creating cozy, functional, and inviting interiors.", delay: "0.8s", }, 
// //       { image: "/assets/images/myproject (6).jpeg", title: "Design Inspiration", description: "Explore timeless furniture styles and ideas for every home aesthetic.", delay: "1s", }, ]
 
// return (
// <div>
//     <div>
//         {/* Page Header Start */}
//         <div className="page-header dark-section parallaxie">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-12">
//                         {/* Page Header Box Start */}
//                         <div className="page-header-box">
//                             <h1 className="text-anime-style-3" data-cursor="-opaque">Our Services</h1>
//                             <nav className="wow fadeInUp">
//                                 <ol className="breadcrumb">
//                                     <li className="breadcrumb-item">
//                                         <Link to="/">Home</Link>
//                                     </li>
//                                     <li className="breadcrumb-item active" aria-current="page">Our Services</li>
//                                 </ol>
//                             </nav>
//                         </div>
//                         {/* Page Header Box End */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//         {/* Page Header End */}
//         {/* Page Blog Start */}
//         <div className="page-blog">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xl-12"> {/* Posts Item List Start */} <div className="posts-item-list">
//                             {blogPosts.map((post, index) => ( <div className="post-item wow fadeInUp"
//                                 data-wow-delay={post.delay} key={index}> {/* Post Featured Image Start */} <div
//                                     className="post-featured-image">
//                                     <Link to="/BlogSingleview" data-cursor-text="View">
//                                     <figure className="image-anime"> <img src={post.image} alt={post.title} /> </figure>
//                                     </Link>
//                                 </div> {/* Post Featured Image End */} {/* Post Item Body Start */} <div
//                                     className="post-item-body"> {/* Post Item Content Start */} <div
//                                         className="post-item-content">
//                                         <h2>
//                                             <Link to="/BlogSingleview"> {post.title} </Link>
//                                         </h2>
//                                         <p style={{textAlign:'justify'}}> {post.description} </p>
//                                     </div> {/* Post Item Content End */} {/* Post Readmore Button Start */} <div
//                                         className="post-item-btn">
//                                         <Link to="/BlogSingleview" className="readmore-btn"> read more </Link>
//                                     </div> {/* Post Readmore Button End */} </div> {/* Post Item Body End */} </div> ))}
//                         </div> {/* Posts Item List End */} </div> {/* Pagination Start */} <div className="col-lg-12">
//                         {/* <div className="page-pagination wow fadeInUp" data-wow-delay="0.4s">
//                             <ul className="pagination">
//                                 <li> <a href="#"> <i className="fa-solid fa-angle-left" /> </a> </li>
//                                 <li className="active"> <a href="#">1</a> </li>
//                                 <li> <a href="#">2</a> </li>
//                                 <li> <a href="#">3</a> </li>
//                                 <li> <a href="#"> <i className="fa-solid fa-angle-right" /> </a> </li>
//                             </ul>
//                         </div> */}
//                     </div> {/* Pagination End */}
//                 </div>
//             </div>
//         </div>
//         {/* Page Blog End */}
//     </div>
// </div>
// )
// }

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
    const services = [
        {
            image: "/assets/images/myproject (1).jpeg",
            title: "Residential Interior Design",
            description:
                "We design homes that feel like you — comfortable, personal, and thoughtfully put together. Every space is shaped around how you live, not just how it looks.",
        },
        {
            image: "/assets/images/myproject (2).jpeg",
            title: "Commercial Interior Design",
            description:
                "We create interiors that support your business while leaving a lasting impression. From layout to finishes, every detail is designed to work hard and look right.",
        },
        {
            image: "/assets/images/myproject (3).jpeg",
            title: "Renovation and Remodeling",
            description:
                "We transform existing spaces with smart design decisions and careful planning. Whether it’s a refresh or a full overhaul, we’ll help you reimagine.",
        },
        {
            image: "/assets/images/myproject (4).jpeg",
            title: "Custom Design Solutions",
            description:
                "No templates, no shortcuts — every design is built around you. We listen closely and create solutions that fit your vision, space, and lifestyle.",
        },
        {
            image: "/assets/images/myproject (5).jpeg",
            title: "Furniture & Decor Consultation",
            description:
                "Not sure what works together? We’ll help you make confident choices. We bring clarity, balance, and cohesion to your space.",
        },
        {
            image: "/assets/images/myproject (6).jpeg",
            title: "Space Planning & 3D Visualization",
            description:
                "We map out layouts and bring them to life with realistic 3D visuals, so you can see, feel confident, and move forward with clarity.",
        },
    ];

    const sectionRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 992);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const rect = section.getBoundingClientRect();

            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;

            const scrollableDistance = sectionHeight - viewportHeight;

            if (scrollableDistance <= 0) return;

            let currentProgress = -rect.top / scrollableDistance;

            currentProgress = Math.max(
                0,
                Math.min(1, currentProgress)
            );

            setProgress(currentProgress);

            const serviceProgress =
                currentProgress * (services.length - 1);

            const index = Math.min(
                services.length - 1,
                Math.floor(serviceProgress + 0.5)
            );

            setActiveIndex(index);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [services.length]);

    /*
     * Calculate movement for the two images.
     *
     * Large image moves upward.
     * Small image moves downward.
     */
    const largeImageMovement = progress * -180;
    const smallImageMovement = progress * 220;

    return (
        <div className="services-page">

            {/* =====================================================
                PAGE HEADER
            ====================================================== */}
            <div className="page-header dark-section parallaxie">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="page-header-box">

                                <h1
                                    className="text-anime-style-3"
                                    data-cursor="-opaque"
                                >
                                    Our Services
                                </h1>

                                <nav className="wow fadeInUp">
                                    <ol className="breadcrumb">

                                        <li className="breadcrumb-item">
                                            <Link to="/">
                                                Home
                                            </Link>
                                        </li>

                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Our Services
                                        </li>

                                    </ol>
                                </nav>

                            </div>

                        </div>
                    </div>
                </div>
            </div>


            {/* =====================================================
                SERVICES SCROLL SECTION
            ====================================================== */}

            <section
                ref={sectionRef}
                className="aktik-services-scroll"
            >

                <div className="aktik-services-sticky">

                    {/* =================================================
                        LEFT CONTENT
                    ================================================== */}

                    <div className="aktik-services-content">

                        <div className="aktik-services-label">
                            OUR EXPERTISE
                        </div>

                        <div className="aktik-services-title-area">

                            {/* Vertical indicator */}
                            <div className="aktik-services-indicator">

                                <span
                                    style={{
                                        transform: `translateY(${activeIndex * 48}px)`,
                                    }}
                                />

                            </div>


                            {/* Service titles */}
                            <div className="aktik-services-titles">

                                {services.map((service, index) => (

                                    <div
                                        key={index}
                                        className={`aktik-service-title ${
                                            activeIndex === index
                                                ? "active"
                                                : ""
                                        }`}
                                    >
                                        {service.title}
                                    </div>

                                ))}

                            </div>

                        </div>


                        {/* Description */}
                        <div className="aktik-services-description">

                            {services.map((service, index) => (

                                <p
                                    key={index}
                                    className={
                                        activeIndex === index
                                            ? "active"
                                            : ""
                                    }
                                >
                                    {service.description}
                                </p>

                            ))}

                        </div>

                    </div>


                    {/* =================================================
                        RIGHT IMAGE AREA
                    ================================================== */}

                    <div className="aktik-services-images">

                        {/* Large background image */}

                        <div
                            className="aktik-large-image"
                            style={{
                                transform: isMobile
                                    ? "translateY(0)"
                                    : `translateY(${largeImageMovement}px)`,
                            }}
                        >

                            <img
                                src={services[activeIndex].image}
                                alt={services[activeIndex].title}
                            />

                            <div className="aktik-image-overlay" />

                        </div>


                        {/* Small foreground image */}

                        <div
                            className="aktik-small-image"
                            style={{
                                transform: isMobile
                                    ? "translate(-50%, -50%)"
                                    : `translateY(calc(-50% + ${smallImageMovement}px))`,
                            }}
                        >

                            <img
                                src={services[activeIndex].image}
                                alt={services[activeIndex].title}
                            />

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                MOBILE SERVICE CARDS
            ====================================================== */}

            <section className="aktik-mobile-services">

                <div className="container">

                    <div className="aktik-mobile-services-heading">
                        <span>OUR EXPERTISE</span>

                        <h2>
                            Spaces designed around
                            <br />
                            the way you live.
                        </h2>
                    </div>


                    <div className="aktik-mobile-service-list">

                        {services.map((service, index) => (

                            <div
                                className="aktik-mobile-service-card"
                                key={index}
                            >

                                <div className="aktik-mobile-service-image">

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                    />

                                </div>


                                <div className="aktik-mobile-service-content">

                                    <span>
                                        0{index + 1}
                                    </span>

                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>

                                    <Link to="/Contact">
                                        Discuss Your Project
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                CUSTOM CSS
            ====================================================== */}

            <style>{`

                /* ================================================
                   MAIN SCROLL SECTION
                ================================================= */

                .aktik-services-scroll {
                    position: relative;
                    height: ${services.length * 100}vh;
                    background: #1c1c1c;
                    color: #ffffff;
                }


                .aktik-services-sticky {
                    position: sticky;
                    top: 0;
                    height: 100vh;
                    min-height: 650px;
                    overflow: hidden;

                    display: flex;
                    align-items: center;

                    background: #1c1c1c;
                }


                /* ================================================
                   LEFT CONTENT
                ================================================= */

                .aktik-services-content {
                    position: relative;
                    z-index: 20;

                    width: 48%;
                    max-width: 650px;

                    padding-left: clamp(
                        35px,
                        7vw,
                        120px
                    );

                    padding-right: 40px;
                }


                .aktik-services-label {
                    font-size: 12px;
                    font-weight: 700;

                    letter-spacing: 3px;

                    text-transform: uppercase;

                    margin-bottom: 35px;

                    opacity: 0.75;
                }


                .aktik-services-title-area {
                    display: flex;
                    align-items: stretch;

                    gap: 30px;
                }


                /* ================================================
                   VERTICAL LINE
                ================================================= */

                .aktik-services-indicator {
                    position: relative;

                    width: 2px;
                    min-width: 2px;

                    background: rgba(
                        255,
                        255,
                        255,
                        0.18
                    );
                }


                .aktik-services-indicator span {
                    position: absolute;

                    left: 0;
                    top: 0;

                    width: 2px;
                    height: 42px;

                    background: #c8a46a;

                    transition:
                        transform 0.6s
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        );
                }


                /* ================================================
                   SERVICE TITLES
                ================================================= */

                .aktik-services-titles {
                    display: flex;

                    flex-direction: column;

                    gap: 12px;
                }


                .aktik-service-title {
                    position: relative;

                    font-family:
                        Georgia,
                        "Times New Roman",
                        serif;

                    font-size: clamp(
                        26px,
                        3vw,
                        48px
                    );

                    line-height: 1.1;

                    color: rgba(
                        255,
                        255,
                        255,
                        0.35
                    );

                    cursor: default;

                    transition:
                        color 0.6s ease,
                        transform 0.6s ease;
                }


                .aktik-service-title.active {
                    color: #ffffff;

                    transform:
                        translateX(8px);
                }


                /* ================================================
                   DESCRIPTION
                ================================================= */

                .aktik-services-description {
                    position: relative;

                    max-width: 520px;

                    margin-top: 45px;

                    min-height: 115px;
                }


                .aktik-services-description p {
                    position: absolute;

                    top: 0;
                    left: 0;

                    margin: 0;

                    max-width: 510px;

                    font-size: 16px;

                    line-height: 1.8;

                    font-weight: 300;

                    color: rgba(
                        255,
                        255,
                        255,
                        0.7
                    );

                    opacity: 0;

                    transform:
                        translateY(20px);

                    transition:
                        opacity 0.6s ease,
                        transform 0.6s ease;
                }


                .aktik-services-description p.active {
                    opacity: 1;

                    transform:
                        translateY(0);
                }


                /* ================================================
                   RIGHT IMAGE AREA
                ================================================= */

                .aktik-services-images {
                    position: absolute;

                    right: 0;
                    top: 0;

                    width: 62%;
                    height: 100%;

                    overflow: hidden;
                }


                /* ================================================
                   LARGE IMAGE
                ================================================= */

                .aktik-large-image {
                    position: absolute;

                    right: 0;
                    top: 0;

                    width: 82%;
                    height: 115%;

                    overflow: hidden;

                    transition:
                        transform 0.9s
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        );
                }


                .aktik-large-image img {
                    width: 100%;
                    height: 100%;

                    display: block;

                    object-fit: cover;

                    transition:
                        transform 1.2s ease;
                }


                .aktik-image-overlay {
                    position: absolute;

                    inset: 0;

                    background:
                        linear-gradient(
                            90deg,
                            rgba(28, 28, 28, 0.85),
                            rgba(28, 28, 28, 0.05)
                        );
                }


                /* ================================================
                   SMALL FOREGROUND IMAGE
                ================================================= */

                .aktik-small-image {
                    position: absolute;

                    left: 7%;

                    top: 50%;

                    width: 36%;

                    aspect-ratio: 3 / 4;

                    overflow: hidden;

                    z-index: 10;

                    box-shadow:
                        0 30px 70px
                        rgba(0, 0, 0, 0.35);

                    transition:
                        transform 1s
                        cubic-bezier(
                            0.22,
                            1,
                            0.36,
                            1
                        );
                }


                .aktik-small-image img {
                    width: 100%;
                    height: 100%;

                    display: block;

                    object-fit: cover;

                    transition:
                        transform 0.9s ease;
                }


                /* Decorative blurred area */

                .aktik-small-image::after {
                    content: "";

                    position: absolute;

                    right: -35px;
                    bottom: -35px;

                    width: 65%;
                    height: 50%;

                    background:
                        rgba(
                            255,
                            255,
                            255,
                            0.08
                        );

                    backdrop-filter:
                        blur(20px);

                    z-index: -1;
                }


                /* ================================================
                   MOBILE
                ================================================= */

                .aktik-mobile-services {
                    display: none;
                }


                @media (max-width: 991px) {

                    .aktik-services-scroll {
                        height: auto;

                        background: #1c1c1c;
                    }


                    .aktik-services-sticky {
                        position: relative;

                        height: auto;

                        min-height: auto;

                        display: block;

                        padding:
                            70px 20px 80px;
                    }


                    .aktik-services-content {
                        width: 100%;

                        max-width: none;

                        padding: 0;

                        margin-bottom: 45px;
                    }


                    .aktik-services-label {
                        margin-bottom: 25px;
                    }


                    .aktik-services-title-area {
                        gap: 20px;
                    }


                    .aktik-service-title {
                        font-size: 27px;
                    }


                    .aktik-services-description {
                        margin-top: 30px;

                        min-height: auto;
                    }


                    .aktik-services-description p {
                        position: relative;

                        display: none;

                        max-width: none;

                        font-size: 15px;
                    }


                    .aktik-services-description p.active {
                        display: block;
                    }


                    .aktik-services-images {
                        position: relative;

                        right: auto;
                        top: auto;

                        width: 100%;

                        height: 70vh;

                        min-height: 450px;

                        overflow: visible;
                    }


                    .aktik-large-image {
                        width: 82%;
                        height: 100%;

                        right: 0;
                        top: 0;

                        transform: none !important;
                    }


                    .aktik-small-image {
                        left: 0;

                        top: 50%;

                        width: 48%;

                        max-width: 250px;

                        transform:
                            translateY(-50%) !important;
                    }


                    .aktik-mobile-services {
                        display: none;
                    }

                }


                /* ================================================
                   SMALL MOBILE
                ================================================= */

                @media (max-width: 575px) {

                    .aktik-services-sticky {
                        padding:
                            55px 18px 65px;
                    }


                    .aktik-services-title-area {
                        gap: 15px;
                    }


                    .aktik-service-title {
                        font-size: 22px;
                    }


                    .aktik-services-description p {
                        font-size: 14px;

                        line-height: 1.7;
                    }


                    .aktik-services-images {
                        height: 55vh;

                        min-height: 380px;
                    }


                    .aktik-large-image {
                        width: 86%;
                    }


                    .aktik-small-image {
                        width: 50%;
                    }

                }

            `}</style>

        </div>
    );
}

