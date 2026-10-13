import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div><div>
  {/* Page Header Start */}
  <div className="page-header dark-section parallaxie">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* Page Header Box Start */}
          <div className="page-header-box">
            <h1 className="text-anime-style-3" data-cursor="-opaque">Our Blog</h1>
            <nav className="wow fadeInUp">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Our blog</li>
              </ol>
            </nav>
          </div>
          {/* Page Header Box End */}
        </div>
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Page Blog Start */}
  <div className="page-blog">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          {/* Posts Item List Start */}
          <div className="posts-item-list">
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <Link  to="/BlogSingleview" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (1).jpeg" alt />
                  </figure>
                </Link >
              </div>
              {/* Post Featured Image End */}
              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h2><Link to="/BlogSingleview">Modern Interior Trends</Link ></h2>
                  <p>Discover stylish furniture and décor trends designed for contemporary homes.</p>
                </div>
                {/* Post Item Content End */}
                {/* Post Readmore Button Start*/}
                <div className="post-item-btn">
                  <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
                </div>
                {/* Post Readmore Button End*/}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp" data-wow-delay="0.2s">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <Link  to="/BlogSingleview" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (2).jpeg" alt />
                  </figure>
                </Link >
              </div>
              {/* Post Featured Image End */}
              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h2><Link to="/BlogSingleview">Home Styling Tips</Link ></h2>
                  <p>Learn creative ways to organize and decorate every room with elegance.</p>
                </div>
                {/* Post Item Content End */}
                {/* Post Readmore Button Start*/}
                <div className="post-item-btn">
                  <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
                </div>
                {/* Post Readmore Button End*/}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp" data-wow-delay="0.4s">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <Link  to="/BlogSingleview" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (3).jpeg" alt />
                  </figure>
                </Link >
              </div>
              {/* Post Featured Image End */}
              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h2><Link to="/BlogSingleview">Furniture Care Guides</Link ></h2>
                  <p>Simple tips to maintain the beauty and durability of your furniture for years.</p>
                </div>
                {/* Post Item Content End */}
                {/* Post Readmore Button Start*/}
                <div className="post-item-btn">
                  <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
                </div>
                {/* Post Readmore Button End*/}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp" data-wow-delay="0.6s">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <Link  to="/BlogSingleview" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (4).jpeg" alt />
                  </figure>
                </Link >
              </div>
              {/* Post Featured Image End */}
              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h2><Link to="/BlogSingleview">Space-Saving Ideas</Link ></h2>
                  <p>Smart furniture solutions designed for compact and modern living spaces.</p>
                </div>
                {/* Post Item Content End */}
                {/* Post Readmore Button Start*/}
                <div className="post-item-btn">
                  <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
                </div>
                {/* Post Readmore Button End*/}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp" data-wow-delay="0.8s">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <Link  to="/BlogSingleview" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (5).jpeg" alt />
                  </figure>
                </Link >
              </div>
              {/* Post Featured Image End */}
              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h2><Link to="/BlogSingleview">Comfort &amp; Lifestyle</Link ></h2>
                  <p>Find inspiration for creating cozy, functional, and inviting interiors.</p>
                </div>
                {/* Post Item Content End */}
                {/* Post Readmore Button Start*/}
                <div className="post-item-btn">
                  <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
                </div>
                {/* Post Readmore Button End*/}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
            {/* Post Item Start */}
            <div className="post-item wow fadeInUp" data-wow-delay="1s">
              {/* Post Featured Image Start*/}
              <div className="post-featured-image">
                <Link  to="/BlogSingleview" data-cursor-text="View">
                  <figure className="image-anime">
                    <img src="/assets/images/myproject (6).jpeg" alt />
                  </figure>
                </Link >
              </div>
              {/* Post Featured Image End */}
              {/* Post Item Body Start */}
              <div className="post-item-body">
                {/* Post Item Content Start */}
                <div className="post-item-content">
                  <h2><Link to="/BlogSingleview">Design Inspiration</Link ></h2>
                  <p>Explore timeless furniture styles and ideas for every home aesthetic.</p>
                </div>
                {/* Post Item Content End */}
                {/* Post Readmore Button Start*/}
                <div className="post-item-btn">
                  <Link  to="/BlogSingleview" className="readmore-btn">read more</Link >
                </div>
                {/* Post Readmore Button End*/}
              </div>
              {/* Post Item Body End */}
            </div>
            {/* Post Item End */}
          </div>
          {/* Posts Item List End */}
        </div>
        <div className="col-lg-12">
          {/* Page Pagination Start */}
          <div className="page-pagination wow fadeInUp" data-wow-delay="0.4s">
            <ul className="pagination">
              <li><Link  href="#"><i className="fa-solid fa-angle-left" /></Link ></li>
              <li className="active"><Link  href="#">1</Link ></li>
              <li><Link  href="#">2</Link ></li>
              <li><Link  href="#">3</Link ></li>
              <li><Link  href="#"><i className="fa-solid fa-angle-right" /></Link ></li>
            </ul>
          </div>
          {/* Page Pagination End */}
        </div>
      </div>
    </div>
  </div>
  {/* Page Blog End */}
</div>
</div>
  )
}
