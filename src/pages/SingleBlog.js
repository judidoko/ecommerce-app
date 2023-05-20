import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function SingleBlog() {
  return (
    <>
      <BreadCrumb title="Dynamic Blog Name " />
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <BsArrowLeft className="fs-4" /> GO Back To Blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Rnaissance</h3>
              <img
                src="images/blog-img.jpg"
                alt="Blog pic"
                className="w-100 img-fluid"
              />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                doloremque dignissimos modi enim a doloribus ea, inventore,
                recusandae, cupiditate facere possimus eligendi ipsum culpa
                beatae ad sint officiis quisquam soluta. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Libero adipisci, quaerat non
                debitis molestiae temporibus eum itaque exercitationem vitae
                modi vero perspiciatis aspernatur error, nulla voluptas.
                Reprehenderit eum sit tempora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
