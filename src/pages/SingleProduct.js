import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { Link } from "react-router-dom";
import SmartWatch from "../images/smart-watch.jpeg";
import { TbGitCompare } from "react-icons/tb";
import { AiTwotoneHeart } from "react-icons/ai";

function SingleProduct() {
  // image Zoom
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: SmartWatch,
  };
  // CopyLink to clip
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [orderedProduct, setOrderedProduct] = useState(true);

  return (
    <>
      <BreadCrumb title="Products" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src={SmartWatch} alt="" />
                </div>
                <div>
                  <img src={SmartWatch} alt="" />
                </div>
                <div>
                  <img src={SmartWatch} alt="" />
                </div>
                <div>
                  <img src={SmartWatch} alt="" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Headphones Bulk 10 Pack Multi Coloured For Students and
                    Adults
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">
                    <span>&#8358;</span> 35,000
                  </p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="reviews-num mb-0">(2 Reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-data-heading">Type:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-data-heading">Brand:</h3>
                    <p className="product-data">Havels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-data-heading">Category:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-data-heading">Tags:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-data-heading">Availability:</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-data-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-10 mt-2 mb-3">
                    <h3 className="product-data-heading">Colour:</h3>
                    <p className="product-data">Colours</p>
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-data-heading">Quantity:</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        id=""
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        className="form-control"
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button signin">Buy it Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <Link to="#">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </Link>
                    </div>
                    <div>
                      <Link to="#">
                        <AiTwotoneHeart className="fs-5 me-2" />
                        Add to wishlist
                      </Link>
                    </div>
                  </div>
                  <div className=" gap-10 flex-column my-3">
                    <h3 className="product-data-heading">Shipping & Returns</h3>
                    <p className="product-data">
                      Free shipping and returns available on all order! We ship
                      all Abuja domestic orders <br /> within
                      <b> 3-7 business days! </b>
                    </p>
                  </div>
                  <div className=" d-flex gap-10 align-items-center my-3">
                    <h3 className="product-data-heading">Product Link</h3>
                    <a
                      href="javaScript:void(0)"
                      onClick={() => {
                        copyToClipboard("https://smartWatch.com");
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti amet nulla, quisquam quod odit natus facilis quidem
                architecto autem perspiciatis qui saepe vitae, alias laborum
                accusantium doloremque pariatur enim eaque. Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Eaque, velit hic, quas
                asperiores eum in repudiandae nulla, voluptates iste blanditiis
                optio nesciunt. Placeat atque inventore aliquid maiores facilis
                cumque ut.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div id="review" className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">(10 Reviews)</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <Link
                        to="#"
                        className="text-dark text-decoration-underline"
                      >
                        Write a Review
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <span>Rating</span>
                      <ReactStars
                        count={5}
                        size={24}
                        value={0}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Write your comments here..."
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">James Paul</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nihil adipisci iusto excepturi accusantium consectetur
                      architecto possimus corporis reiciendis laboriosam non,
                      ipsam laudantium inventore nostrum nulla ab voluptate?
                      Assumenda, voluptate libero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleProduct;
