import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <>
      <div className="col-3">
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-img.jpg" alt="Blog" className="img-fluid" />
          </div>
          <div className="blog-content">
            <p className="date"> 15 June, 2023 </p>
            <h5 className="title">A beautiful sunday morning renaissance</h5>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nihil accusamus provident placeat at, rem voluptatem iusto ducimus
              ipsam vitae.
            </p>
            <Link className="button mb-2" to="/">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
