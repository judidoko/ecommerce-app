import React from "react";
import ReactStars from "react-rating-stars-component";
import { BsEyeFill, BsMinecart, BsHeart } from "react-icons/bs";
import { IoShuffleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=":id" className="product-card position-relative mb-3">
          <div className="wishlist-icon position-absolute">
            <Link>
              <BsHeart />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/smart-watch.jpg" alt="Smart Watch" />
            <img src="images/smart-watch33.jpg" alt="Smart Watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 multi coloured for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              facere error vitae perferendis fugit distinctio quae ad
              repudiandae similique pariatur, itaque iure rerum quia repellat
              eligendi aperiam excepturi numquam suscipit.
            </p>
            <p className="price">
              <span>&#8358;</span>150,000
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <IoShuffleOutline />
              </Link>
              <Link>
                <BsEyeFill />
              </Link>
              <Link>
                <BsMinecart />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative mb-3">
          <div className="wishlist-icon position-absolute">
            <Link>
              <BsHeart />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/smart-watch.jpg" alt="Smart Watch" />
            <img src="images/smart-watch33.jpg" alt="Smart Watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 multi coloured for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              facere error vitae perferendis fugit distinctio quae ad
              repudiandae similique pariatur, itaque iure rerum quia repellat
              eligendi aperiam excepturi numquam suscipit.
            </p>
            <p className="price">
              <span>&#8358;</span>150,000
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <IoShuffleOutline />
              </Link>
              <Link>
                <BsEyeFill />
              </Link>
              <Link>
                <BsMinecart />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative mb-3">
          <div className="wishlist-icon position-absolute">
            <Link>
              <BsHeart />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/smart-watch.jpg" alt="Smart Watch" />
            <img src="images/smart-watch33.jpg" alt="Smart Watch" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 multi coloured for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              facere error vitae perferendis fugit distinctio quae ad
              repudiandae similique pariatur, itaque iure rerum quia repellat
              eligendi aperiam excepturi numquam suscipit.
            </p>
            <p className="price">
              <span>&#8358;</span>150,000
            </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <IoShuffleOutline />
              </Link>
              <Link>
                <BsEyeFill />
              </Link>
              <Link>
                <BsMinecart />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
