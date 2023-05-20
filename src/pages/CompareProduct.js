import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { RxCross2 } from "react-icons/rx";

function CompareProduct() {
  return (
    <>
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <RxCross2 className="cross position-absolute fs-3" />
                <div className="product-card-image">
                  <img src="images/ipad-222.jpg" alt="Watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honour T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">
                    <span>&#8358;</span> 400,000
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5> <p className="mb-0">havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5> <p className="mb-0">Ipad</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5> <p className="mb-0">In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Colour:</h5> <p className="mb-0">havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <RxCross2 className="cross position-absolute fs-3" />
                <div className="product-card-image">
                  <img src="images/smart-watch.jpg" alt="Watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honour T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">
                    <span>&#8358;</span> 400,000
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5> <p className="mb-0">havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5> <p className="mb-0">Ipad</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5> <p className="mb-0">In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Colour:</h5> <p className="mb-0">havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <RxCross2 className="cross position-absolute fs-3" />
                <div className="product-card-image">
                  <img src="images/headpod.jpg" alt="Headset" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Honour T1 7.0 1GB RAM 8GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">
                    <span>&#8358;</span> 400,000
                    <div>
                      <div className="product-detail">
                        <h5>Brand:</h5> <p className="mb-0">havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Type:</h5> <p className="mb-0">Ipad</p>
                      </div>
                      <div className="product-detail">
                        <h5>Availability:</h5> <p className="mb-0">In Stock</p>
                      </div>
                      <div className="product-detail">
                        <h5>Colour:</h5> <p className="mb-0">havels</p>
                      </div>
                      <div className="product-detail">
                        <h5>Size:</h5>
                        <div className="d-flex gap-10">
                          <p>S</p>
                          <p>M</p>
                        </div>
                      </div>
                    </div>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;
