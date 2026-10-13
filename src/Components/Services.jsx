import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Services() {
    const services = [
        {
            image: "/assets/images/myproject (1).jpeg",
            title: "Residential Interior Design",
            description:
                "We design homes that feel like you — comfortable, personal, and thoughtfully put together. Every space is shaped around how you live, not just how it looks.",
            highlights: ["Living & bedrooms", "Kitchen & dining", "Personalized styling"],
        },
        {
            image: "/assets/images/myproject (2).jpeg",
            title: "Commercial Interior Design",
            description:
                "We create interiors that support your business while leaving a lasting impression. From layout to finishes, every detail is designed to work hard and look right.",
            highlights: ["Offices & retail", "Brand-led spaces", "Functional layouts"],
        },
        {
            image: "/assets/images/myproject (3).jpeg",
            title: "Renovation and Remodeling",
            description:
                "We transform existing spaces with smart design decisions and careful planning. Whether it's a refresh or a full overhaul, we'll help you reimagine.",
            highlights: ["Structural planning", "Material upgrades", "Minimal downtime"],
        },
        {
            image: "/assets/images/myproject (4).jpeg",
            title: "Custom Design Solutions",
            description:
                "No templates, no shortcuts — every design is built around you. We listen closely and create solutions that fit your vision, space, and lifestyle.",
            highlights: ["Bespoke concepts", "1-on-1 consultation", "Flexible budgets"],
        },
        {
            image: "/assets/images/myproject (5).jpeg",
            title: "Furniture & Decor Consultation",
            description:
                "Not sure what works together? We'll help you make confident choices. We bring clarity, balance, and cohesion to your space.",
            highlights: ["Furniture selection", "Color & texture", "Styling advice"],
        },
        {
            image: "/assets/images/myproject (6).jpeg",
            title: "Space Planning & 3D Visualization",
            description:
                "We map out layouts and bring them to life with realistic 3D visuals, so you can see, feel confident, and move forward with clarity.",
            highlights: ["Floor plans", "3D walkthroughs", "Layout optimization"],
        },
    ];

    const sectionRef = useRef(null);
    const carouselRef = useRef(null);
    const carouselTimeoutRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileActiveIndex, setMobileActiveIndex] = useState(0);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 992);
        };

        checkScreen();

        window.addEventListener("resize", checkScreen);

        return () => {
            window.removeEventListener("resize", checkScreen);

            if (carouselTimeoutRef.current) {
                clearTimeout(carouselTimeoutRef.current);
            }
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

    /*
     * Peek carousel: a hidden clone of the last service sits
     * before the first real card, and a hidden clone of the
     * first service sits after the last real card. That way
     * there is always a sliver of a "previous" and "next" card
     * peeking in at the sides, and swiping past either end
     * loops around instead of hitting empty space. Once the
     * user settles on a clone, we silently jump to the matching
     * real card so the loop can continue indefinitely.
     */
    const scrollToDomIndex = (domIndex, behavior) => {
        const el = carouselRef.current;
        if (!el || !el.children[domIndex]) return;

        const card = el.children[domIndex];

        el.scrollTo({
            left:
                card.offsetLeft -
                (el.offsetWidth - card.offsetWidth) / 2,
            behavior,
        });
    };

    const handleCarouselScroll = () => {
        const el = carouselRef.current;
        if (!el) return;

        const referenceCard = el.children[1] || el.firstChild;
        const cardWidth = referenceCard
            ? referenceCard.offsetWidth + 16
            : el.offsetWidth;

        const rawDomIndex = Math.round(el.scrollLeft / cardWidth);
        const domIndex = Math.max(
            0,
            Math.min(services.length + 1, rawDomIndex)
        );

        const realIndex =
            ((domIndex - 1) % services.length + services.length) %
            services.length;

        setMobileActiveIndex(realIndex);

        if (carouselTimeoutRef.current) {
            clearTimeout(carouselTimeoutRef.current);
        }

        carouselTimeoutRef.current = setTimeout(() => {
            if (domIndex === 0) {
                scrollToDomIndex(services.length, "auto");
            } else if (domIndex === services.length + 1) {
                scrollToDomIndex(1, "auto");
            }
        }, 150);
    };

    const scrollToMobileCard = (index) => {
        scrollToDomIndex(index + 1, "smooth");
        setMobileActiveIndex(index);
    };

    /*
     * Land on the real first card (not the prepended clone)
     * as soon as the carousel becomes visible on mobile.
     */
    useEffect(() => {
        if (!isMobile) return;

        const frame = requestAnimationFrame(() => {
            scrollToDomIndex(1, "auto");
        });

        return () => cancelAnimationFrame(frame);
    }, [isMobile]);

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
                className="aktik-services-scroll mt-5"
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

                        {/* Highlights / tags related to the active service */}
                        <div className="aktik-services-highlights">

                            {services[activeIndex].highlights.map((tag, i) => (
                                <span key={i} className="aktik-highlight-tag">
                                    {tag}
                                </span>
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


                    <div
                        className="aktik-mobile-service-list"
                        ref={carouselRef}
                        onScroll={handleCarouselScroll}
                    >

                        {/* Hidden clone of the last card, so a peek
                            of a "previous" card sits before the
                            first real one and swiping backward loops */}
                        <div
                            className="aktik-mobile-service-card"
                            aria-hidden="true"
                        >

                            <div className="aktik-mobile-service-image">

                                <img
                                    src={services[services.length - 1].image}
                                    alt=""
                                />

                                <span className="aktik-mobile-service-count">
                                    0{services.length}
                                </span>

                            </div>


                            <div className="aktik-mobile-service-content">

                                <h3>
                                    {services[services.length - 1].title}
                                </h3>

                                <p>
                                    {services[services.length - 1].description}
                                </p>

                                <div className="aktik-mobile-service-tags">
                                    {services[services.length - 1].highlights.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>

                                <Link to="/Contact" tabIndex={-1}>
                                    Discuss Your Project
                                </Link>

                            </div>

                        </div>

                        {services.map((service, index) => (

                            <div
                                className={`aktik-mobile-service-card ${
                                    mobileActiveIndex === index
                                        ? "is-active"
                                        : ""
                                }`}
                                key={index}
                            >

                                <div className="aktik-mobile-service-image">

                                    <img
                                        src={service.image}
                                        alt={service.title}
                                    />

                                    <span className="aktik-mobile-service-count">
                                        0{index + 1}
                                    </span>

                                </div>


                                <div className="aktik-mobile-service-content">

                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>

                                    <div className="aktik-mobile-service-tags">
                                        {service.highlights.map((tag, i) => (
                                            <span key={i}>{tag}</span>
                                        ))}
                                    </div>

                                    <Link to="/Contact">
                                        Discuss Your Project
                                    </Link>

                                </div>

                            </div>

                        ))}

                        {/* Hidden clone of the first card, so swiping
                            past the last service loops into it instead
                            of showing blank space */}
                        <div
                            className="aktik-mobile-service-card"
                            aria-hidden="true"
                        >

                            <div className="aktik-mobile-service-image">

                                <img
                                    src={services[0].image}
                                    alt=""
                                />

                                <span className="aktik-mobile-service-count">
                                    01
                                </span>

                            </div>


                            <div className="aktik-mobile-service-content">

                                <h3>
                                    {services[0].title}
                                </h3>

                                <p>
                                    {services[0].description}
                                </p>

                                <div className="aktik-mobile-service-tags">
                                    {services[0].highlights.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>

                                <Link to="/Contact" tabIndex={-1}>
                                    Discuss Your Project
                                </Link>

                            </div>

                        </div>

                    </div>
                    <div className="aktik-mobile-service-dots">

                        {services.map((_, index) => (

                            <button
                                key={index}
                                type="button"
                                aria-label={`Go to ${services[index].title}`}
                                className={
                                    mobileActiveIndex === index
                                        ? "active"
                                        : ""
                                }
                                onClick={() => scrollToMobileCard(index)}
                            />

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
                    background: #ffffff;
                    color: #1c1c1c;
                }


                .aktik-services-sticky {
                    position: sticky;
                    top: 0;
                    height: 100vh;
                    min-height: 650px;
                    overflow: hidden;

                    display: flex;
                    align-items: center;

                    background: #ffffff;
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
                        28,
                        28,
                        28,
                        0.15
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
                        22px,
                        2.4vw,
                        48px
                    );

                    line-height: 1.1;

                    color: rgba(
                        28,
                        28,
                        28,
                        0.35
                    );

                    cursor: default;

                    transition:
                        color 0.6s ease,
                        transform 0.6s ease;
                }


                .aktik-service-title.active {
                    color: #1c1c1c;

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
                        28,
                        28,
                        28,
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
                   HIGHLIGHT TAGS (desktop)
                ================================================= */

                .aktik-services-highlights {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;

                    margin-top: 28px;
                }


                .aktik-highlight-tag {
                    font-size: 12px;
                    font-weight: 500;
                    letter-spacing: 0.5px;

                    padding: 7px 14px;

                    border: 1px solid rgba(28, 28, 28, 0.15);
                    border-radius: 30px;

                    color: rgba(28, 28, 28, 0.8);
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
                    .aktik-mobile-services {
                        display: block;
                        padding: 60px 0;
                        background: #f7f5f2;
                    }
                }


                .aktik-mobile-service-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;

                    margin: 10px 0 18px;
                }


                .aktik-mobile-service-tags span {
                    font-size: 11px;
                    font-weight: 500;

                    padding: 5px 11px;

                    border: 1px solid rgba(0, 0, 0, 0.15);
                    border-radius: 30px;
                }


                /* ================================================
                   MOBILE CAROUSEL
                ================================================= */

                .aktik-mobile-service-list {
                    display: flex;

                    gap: 16px;

                    overflow-x: auto;
                    scroll-snap-type: x mandatory;

                    -webkit-overflow-scrolling: touch;
                    scrollbar-width: none;

                    padding: 4px 20px 10px;
                    margin: 0 -20px;
                }


                .aktik-mobile-service-list::-webkit-scrollbar {
                    display: none;
                }


                .aktik-mobile-service-card {
                    flex: 0 0 78%;

                    scroll-snap-align: center;

                    background: #ffffff;
                    border-radius: 14px;
                    overflow: hidden;

                    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);

                    opacity: 0.45;
                    transform: scale(0.92);

                    transition:
                        opacity 0.35s ease,
                        transform 0.35s ease;
                }


                .aktik-mobile-service-card.is-active {
                    opacity: 1;
                    transform: scale(1);
                }


                .aktik-mobile-service-image {
                    position: relative;

                    width: 100%;
                    aspect-ratio: 4 / 3;

                    overflow: hidden;
                }


                .aktik-mobile-service-image img {
                    width: 100%;
                    height: 100%;

                    object-fit: cover;

                    display: block;
                }


                .aktik-mobile-service-count {
                    position: absolute;

                    top: 14px;
                    left: 14px;

                    font-size: 12px;
                    font-weight: 700;

                    color: #1c1c1c;
                    background: #ffffff;

                    padding: 4px 10px;
                    border-radius: 30px;
                }


                .aktik-mobile-service-content {
                    padding: 20px;
                }


                .aktik-mobile-service-content h3 {
                    font-size: 19px;
                    line-height: 1.25;

                    margin: 0 0 10px;
                }


                .aktik-mobile-service-content p {
                    font-size: 14px;
                    line-height: 1.7;

                    color: rgba(0, 0, 0, 0.65);

                    margin: 0;
                }


                .aktik-mobile-service-dots {
                    display: flex;
                    justify-content: center;

                    gap: 8px;

                    margin-top: 18px;
                }


                .aktik-mobile-service-dots button {
                    width: 8px;
                    height: 8px;

                    padding: 0;
                    border: none;
                    border-radius: 50%;

                    background: rgba(0, 0, 0, 0.2);

                    transition: all 0.3s ease;
                }


                .aktik-mobile-service-dots button.active {
                    background: #c8a46a;
                    transform: scale(1.3);
                }


                @media (max-width: 991px) {

                    /* Desktop "web view" scroll section is fully
                       replaced by the mobile carousel below, so
                       hide it entirely on mobile/tablet widths. */
                    .aktik-services-scroll {
                        display: none;
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
                        font-size: 20px;
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


                    .aktik-services-highlights {
                        margin-top: 18px;
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
                        font-size: 16px;
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