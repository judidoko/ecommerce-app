import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function SpecialProduct() {
  return (
    <>
      <div className="col-4">
        <div className="special-product-card mb-4">
          <div className="d-flex justify-content-between">
            <img
              src="images/ipad-33.jpg"
              alt="Ipad Air"
              className="img-fluid"
            />
            <div className="special-product-content">
              <h5 className="brand">Hevals</h5>
              <h6 className="title">
                Samsung Galaxy Note10+ Mobile Phone; Sim...
              </h6>
              <ReactStars
                count={5}
                size={24}
                value={3}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">
                  <span>&#8358;</span>800,000
                </span>
                &nbsp; &nbsp;
                <strike>
                  <span>&#8358;</span>1,000,000
                </strike>
              </p>
              <div className="discount-till d-flex align-items-center">
                <p className="mb-0">
                  <strong>
                    <b>5</b>
                  </strong>
                  days
                </p>{" "}
                &nbsp; &nbsp;
                <div className="d-flex gap-10">
                  <span className="badge rounded-circle p-2 bg-danger">1</span>:
                  <span className="badge rounded-circle p-2 bg-danger">10</span>
                  :
                  <span className="badge rounded-circle p-2 bg-danger">40</span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p className="mb-0">Products: 5</p>

                <div className="progress">
                  <div
                    className="progress-bar w-25"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialProduct;
