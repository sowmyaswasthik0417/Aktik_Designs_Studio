// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Blog() {
//   return (
//     <div><div>
//   {/* Page Header Start */}
//   <div className="page-header dark-section parallaxie">
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-12">
//           {/* Page Header Box Start */}
//           <div className="page-header-box">
//             <h1 className="text-anime-style-3" data-cursor="-opaque">Our Blog</h1>
//             <nav className="wow fadeInUp">
//               <ol className="breadcrumb">
//                 <li className="breadcrumb-item"><Link to="/">Home</Link></li>
//                 <li className="breadcrumb-item active" aria-current="page">Our blog</li>
//               </ol>
//             </nav>
//           </div>
//           {/* Page Header Box End */}
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Page Header End */}
//   {/* Page Blog Start */}
//   <div className="page-blog">
//     <div className="container">
//       <div className="row">
//         <div className="col-xl-12">
//           {/* Posts Item List Start */}
//           <div className="posts-item-list">
//             {/* Post Item Start */}
//             <div className="post-item wow fadeInUp">
//               {/* Post Featured Image Start*/}
//               <div className="post-featured-image">
//                 <Link  to="/BlogSingleview" data-cursor-text="View">
//                   <figure className="image-anime">
//                     <img src="/assets/images/myproject (1).jpeg" alt />
//                   </figure>
//                 </Link >
//               </div>
//               {/* Post Featured Image End */}
//               {/* Post Item Body Start */}
//               <div className="post-item-body">
//                 {/* Post Item Content Start */}
//                 <div className="post-item-content">
//                   <h2><Link to="/BlogSingleview">Modern Interior Trends</Link ></h2>
//                   <p>Discover stylish furniture and décor trends designed for contemporary homes.</p>
//                 </div>
//                 {/* Post Item Content End */}
//                 {/* Post Readmore Button Start*/}
//                 <div className="post-item-btn">
//                   <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
//                 </div>
//                 {/* Post Readmore Button End*/}
//               </div>
//               {/* Post Item Body End */}
//             </div>
//             {/* Post Item End */}
//             {/* Post Item Start */}
//             <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
//               {/* Post Featured Image Start*/}
//               <div className="post-featured-image">
//                 <Link  to="/BlogSingleview" data-cursor-text="View">
//                   <figure className="image-anime">
//                     <img src="/assets/images/myproject (2).jpeg" alt />
//                   </figure>
//                 </Link >
//               </div>
//               {/* Post Featured Image End */}
//               {/* Post Item Body Start */}
//               <div className="post-item-body">
//                 {/* Post Item Content Start */}
//                 <div className="post-item-content">
//                   <h2><Link to="/BlogSingleview">Home Styling Tips</Link ></h2>
//                   <p>Learn creative ways to organize and decorate every room with elegance.</p>
//                 </div>
//                 {/* Post Item Content End */}
//                 {/* Post Readmore Button Start*/}
//                 <div className="post-item-btn">
//                   <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
//                 </div>
//                 {/* Post Readmore Button End*/}
//               </div>
//               {/* Post Item Body End */}
//             </div>
//             {/* Post Item End */}
//             {/* Post Item Start */}
//             <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
//               {/* Post Featured Image Start*/}
//               <div className="post-featured-image">
//                 <Link  to="/BlogSingleview" data-cursor-text="View">
//                   <figure className="image-anime">
//                     <img src="/assets/images/myproject (3).jpeg" alt />
//                   </figure>
//                 </Link >
//               </div>
//               {/* Post Featured Image End */}
//               {/* Post Item Body Start */}
//               <div className="post-item-body">
//                 {/* Post Item Content Start */}
//                 <div className="post-item-content">
//                   <h2><Link to="/BlogSingleview">Furniture Care Guides</Link ></h2>
//                   <p>Simple tips to maintain the beauty and durability of your furniture for years.</p>
//                 </div>
//                 {/* Post Item Content End */}
//                 {/* Post Readmore Button Start*/}
//                 <div className="post-item-btn">
//                   <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
//                 </div>
//                 {/* Post Readmore Button End*/}
//               </div>
//               {/* Post Item Body End */}
//             </div>
//             {/* Post Item End */}
//             {/* Post Item Start */}
//             <div className="post-item wow fadeInUp" data-wow-delay="0.6s">
//               {/* Post Featured Image Start*/}
//               <div className="post-featured-image">
//                 <Link  to="/BlogSingleview" data-cursor-text="View">
//                   <figure className="image-anime">
//                     <img src="/assets/images/myproject (4).jpeg" alt />
//                   </figure>
//                 </Link >
//               </div>
//               {/* Post Featured Image End */}
//               {/* Post Item Body Start */}
//               <div className="post-item-body">
//                 {/* Post Item Content Start */}
//                 <div className="post-item-content">
//                   <h2><Link to="/BlogSingleview">Space-Saving Ideas</Link ></h2>
//                   <p>Smart furniture solutions designed for compact and modern living spaces.</p>
//                 </div>
//                 {/* Post Item Content End */}
//                 {/* Post Readmore Button Start*/}
//                 <div className="post-item-btn">
//                   <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
//                 </div>
//                 {/* Post Readmore Button End*/}
//               </div>
//               {/* Post Item Body End */}
//             </div>
//             {/* Post Item End */}
//             {/* Post Item Start */}
//             <div className="post-item wow fadeInUp" data-wow-delay="0.8s">
//               {/* Post Featured Image Start*/}
//               <div className="post-featured-image">
//                 <Link  to="/BlogSingleview" data-cursor-text="View">
//                   <figure className="image-anime">
//                     <img src="/assets/images/myproject (5).jpeg" alt />
//                   </figure>
//                 </Link >
//               </div>
//               {/* Post Featured Image End */}
//               {/* Post Item Body Start */}
//               <div className="post-item-body">
//                 {/* Post Item Content Start */}
//                 <div className="post-item-content">
//                   <h2><Link to="/BlogSingleview">Comfort &amp; Lifestyle</Link ></h2>
//                   <p>Find inspiration for creating cozy, functional, and inviting interiors.</p>
//                 </div>
//                 {/* Post Item Content End */}
//                 {/* Post Readmore Button Start*/}
//                 <div className="post-item-btn">
//                   <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
//                 </div>
//                 {/* Post Readmore Button End*/}
//               </div>
//               {/* Post Item Body End */}
//             </div>
//             {/* Post Item End */}
//             {/* Post Item Start */}
//             <div className="post-item wow fadeInUp" data-wow-delay="1s">
//               {/* Post Featured Image Start*/}
//               <div className="post-featured-image">
//                 <Link  to="/BlogSingleview" data-cursor-text="View">
//                   <figure className="image-anime">
//                     <img src="/assets/images/myproject (6).jpeg" alt />
//                   </figure>
//                 </Link >
//               </div>
//               {/* Post Featured Image End */}
//               {/* Post Item Body Start */}
//               <div className="post-item-body">
//                 {/* Post Item Content Start */}
//                 <div className="post-item-content">
//                   <h2><Link to="/BlogSingleview">Design Inspiration</Link ></h2>
//                   <p>Explore timeless furniture styles and ideas for every home aesthetic.</p>
//                 </div>
//                 {/* Post Item Content End */}
//                 {/* Post Readmore Button Start*/}
//                 <div className="post-item-btn">
//                   <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
//                 </div>
//                 {/* Post Readmore Button End*/}
//               </div>
//               {/* Post Item Body End */}
//             </div>
//             {/* Post Item End */}
//           </div>
//           {/* Posts Item List End */}
//         </div>
//         <div className="col-lg-12">
//           {/* Page Pagination Start */}
//           <div className="page-pagination wow fadeInUp" data-wow-delay="0.4s">
//             <ul className="pagination">
//               <li><Link  href="#"><i className="fa-solid fa-angle-left" /></Link ></li>
//               <li className="active"><Link  href="#">1</Link ></li>
//               <li><Link  href="#">2</Link ></li>
//               <li><Link  href="#">3</Link ></li>
//               <li><Link  href="#"><i className="fa-solid fa-angle-right" /></Link ></li>
//             </ul>
//           </div>
//           {/* Page Pagination End */}
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Page Blog End */}
// </div>
// </div>
//   )
// }


import React from 'react';
import { Link } from 'react-router-dom';

const instagramReels = [
  {
    id: 'DKR2k83v4NS',
    title: 'Interior Design Project',
    description: 'Explore our interior design work and project details.',
  },
  {
    id: 'DY9AWLxs9im',
    title: 'Modern Interior Inspiration',
    description: 'Discover elegant interiors and thoughtful design ideas.',
  },
  {
    id: 'DeMcCwzNOIw',
    title: 'Our Design Stories',
    description: 'Get inspired by our interior design projects.',
  },
];

const blogPosts = [
  {
    image: '/assets/images/myproject (1).jpeg',
    title: 'Modern Interior Trends',
    description:
      'Discover stylish furniture and décor trends designed for contemporary homes.',
  },
  {
    image: '/assets/images/myproject (2).jpeg',
    title: 'Home Styling Tips',
    description:
      'Learn creative ways to organize and decorate every room with elegance.',
  },
  {
    image: '/assets/images/myproject (3).jpeg',
    title: 'Furniture Care Guides',
    description:
      'Simple tips to maintain the beauty and durability of your furniture for years.',
  },
  {
    image: '/assets/images/myproject (4).jpeg',
    title: 'Space-Saving Ideas',
    description:
      'Smart furniture solutions designed for compact and modern living spaces.',
  },
  {
    image: '/assets/images/myproject (5).jpeg',
    title: 'Comfort & Lifestyle',
    description:
      'Find inspiration for creating cozy, functional, and inviting interiors.',
  },
  {
    image: '/assets/images/myproject (6).jpeg',
    title: 'Design Inspiration',
    description:
      'Explore timeless furniture styles and ideas for every home aesthetic.',
  },
];

const InstagramIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const styles = `
  .aktik-ig-section {
    --ak-bg: #f8f6f2;
    --ak-card: #ffffff;
    --ak-ink: #2b2623;
    --ak-muted: #6f675f;
    --ak-accent: #b08d57;
    --ak-accent-dark: #8f7142;
    --ak-line: #e9e3d9;

    position: relative;
    padding: 100px 0;
    background:
      radial-gradient(circle at 10% 0%, rgba(176, 141, 87, 0.10), transparent 40%),
      radial-gradient(circle at 90% 100%, rgba(176, 141, 87, 0.08), transparent 40%),
      var(--ak-bg);
    overflow: hidden;
  }

  .aktik-ig-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 56px;
  }

  .aktik-ig-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 16px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: var(--ak-accent);
  }

  .aktik-ig-eyebrow::before,
  .aktik-ig-eyebrow::after {
    content: '';
    width: 34px;
    height: 1px;
    background: var(--ak-accent);
    opacity: 0.6;
  }

  .aktik-ig-title {
    font-size: clamp(30px, 4.2vw, 46px);
    line-height: 1.15;
    font-weight: 600;
    color: var(--ak-ink);
    margin: 0 0 16px;
  }

  .aktik-ig-title span {
    color: var(--ak-accent);
  }

  .aktik-ig-lead {
    font-size: 16px;
    line-height: 1.75;
    color: var(--ak-muted);
    margin: 0 0 30px;
  }

  .aktik-ig-follow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 30px;
    border-radius: 999px;
    background: var(--ak-ink);
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 10px 24px rgba(43, 38, 35, 0.18);
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  }

  .aktik-ig-follow:hover {
    background: var(--ak-accent);
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(176, 141, 87, 0.35);
  }

  .aktik-ig-card {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--ak-card);
    border: 1px solid var(--ak-line);
    border-radius: 20px;
    padding: 14px;
    box-shadow: 0 10px 34px rgba(43, 38, 35, 0.06);
    transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  }

  .aktik-ig-card:hover {
    transform: translateY(-8px);
    border-color: rgba(176, 141, 87, 0.5);
    box-shadow: 0 22px 50px rgba(43, 38, 35, 0.12);
  }

  .aktik-ig-badge {
    position: absolute;
    top: 26px;
    left: 26px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 999px;
    background: rgba(43, 38, 35, 0.82);
    backdrop-filter: blur(6px);
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    pointer-events: none;
  }

  .aktik-ig-frame {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 14px;
    overflow: hidden;
    background: #f1ede6;
  }

  .aktik-ig-frame iframe {
    width: 100%;
    height: 520px;
    border: 0;
    display: block;
    background: #f1ede6;
  }

  .aktik-ig-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 22px 10px 12px;
  }

  .aktik-ig-card-title {
    font-size: 21px;
    font-weight: 600;
    line-height: 1.3;
    color: var(--ak-ink);
    margin: 0 0 8px;
  }

  .aktik-ig-card-text {
    font-size: 15px;
    line-height: 1.7;
    color: var(--ak-muted);
    margin: 0 0 20px;
    flex: 1;
  }

  .aktik-ig-link {
    display: inline-flex;
    align-items: center;
    align-self: flex-start;
    gap: 8px;
    padding-bottom: 4px;
    border-bottom: 1.5px solid var(--ak-accent);
    color: var(--ak-ink);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.3s ease, gap 0.3s ease;
  }

  .aktik-ig-link:hover {
    color: var(--ak-accent-dark);
    gap: 14px;
  }

  @media (max-width: 767px) {
    .aktik-ig-section { padding: 70px 0; }
    .aktik-ig-header { margin-bottom: 40px; }
    .aktik-ig-frame iframe { height: 480px; }
  }
`;

export default function Blog() {
  return (
    <>
      <style>{styles}</style>

      {/* Instagram Reels Section */}
      <section className="aktik-instagram-section aktik-ig-section">
        <div className="container">
          <div className="aktik-ig-header">
            <span className="aktik-ig-eyebrow">Follow Our Journey</span>

            <h2 className="aktik-ig-title">
              Aktik Designs on <span>Instagram</span>
            </h2>

            <p className="aktik-ig-lead">
              Explore our interior design projects, creative ideas,
              and beautiful spaces through our latest Reels.
            </p>

            <a
              href="https://www.instagram.com/aktik_designs/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="aktik-ig-follow"
            >
              <InstagramIcon />
              Follow @aktik_designs
            </a>
          </div>

          <div className="row">
            {instagramReels.map((reel) => (
              <div
                className="col-lg-4 col-md-6 col-12 mb-4"
                key={reel.id}
              >
                <div className="aktik-ig-card">
                  <span className="aktik-ig-badge">
                    <PlayIcon />
                    Reel
                  </span>

                  <div className="aktik-ig-frame">
                    <iframe
                      src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                      title={reel.title}
                      loading="lazy"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>

                  <div className="aktik-ig-body">
                    <h3 className="aktik-ig-card-title">{reel.title}</h3>

                    <p className="aktik-ig-card-text">{reel.description}</p>

                    <a
                      href={`https://www.instagram.com/aktik_designs/reel/${reel.id}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aktik-ig-link"
                    >
                      Watch on Instagram
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}