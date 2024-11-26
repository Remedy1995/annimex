import React from "react";

export const Blogs = () => {
    let blogsArray = new Array(9);
    console.log('my blogs A', blogsArray)
    return (
        <div className="blog-slider-3items gp15 arwOut5 hov-arrow">

            {
                blogsArray.fill(0).map((data) => {
                    return <div className="blog-item">
                        <div className="blog-article zoomscal-hov">
                            <div className="blog-img">
                                <a className="featured-image zoom-scal" href="blog-details.html">
                                    <img className="blur-up lazyload" data-src="./assets/images/blog/post-img1.jpg" src="./assets/images/blog/post-img1.jpg" alt="New shop collection our shop" width="740" height="410" />
                                </a>
                                <div className="date">
                                    <span className="dt">25</span>
                                    <span className="mt">
                                        Apr<br />
                                        <b>2023</b>
                                    </span>
                                </div>
                            </div>
                            <div className="blog-content">
                                <h2 className="h3 mb-3">
                                    <a href="blog-details.html">New shop collection our shop</a>
                                </h2>
                                <p className="content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
                                <a href="blog-details.html" className="btn btn-secondary btn-sm">Read more</a>
                            </div>
                        </div>
                    </div>
                })


            }
        </div>
    )
}