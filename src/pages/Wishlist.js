import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { RxCross2 } from "react-icons/rx";

function Wishlist() {
  return (
    <>
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <RxCross2 className="cross position-absolute fs-3" />
                <div className="wishlist-card-image">
                  <img
                    src="images/smart-watch.jpg"
                    alt="Smart Watch"
                    className="img-fluid"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honour T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <p className="price">
                    <span>&#8358;</span> 400,000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <RxCross2 className="cross position-absolute fs-3" />
                <div className="wishlist-card-image">
                  <img
                    src="images/smart-watch.jpg"
                    alt="Smart Watch"
                    className="img-fluid"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honour T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <p className="price">
                    <span>&#8358;</span> 400,000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <RxCross2 className="cross position-absolute fs-3" />
                <div className="wishlist-card-image">
                  <img
                    src="images/smart-watch.jpg"
                    alt="Smart Watch"
                    className="img-fluid"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honour T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <p className="price">
                    <span>&#8358;</span> 400,000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <RxCross2 className="cross position-absolute fs-3" />
                <div className="wishlist-card-image">
                  <img
                    src="images/smart-watch.jpg"
                    alt="Smart Watch"
                    className="img-fluid"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="title">
                    Honour T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <p className="price">
                    <span>&#8358;</span> 400,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
