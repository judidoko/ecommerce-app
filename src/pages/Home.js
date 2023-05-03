import React from "react";
import { Link } from "react-router-dom";
import { TbSettingsAutomation, TbTruckDelivery } from "react-icons/tb";
import { BsCreditCard, BsGift, BsHeadset } from "react-icons/bs";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner1.jpg"
                  alt="Main Banner"
                  className="img-fluid rounded-3 w-100"
                />
                <div className="main-banner-content position-absolute">
                  <h5>SUPERCHARGED FOR PROS</h5>
                  <h4>ipad S14+ pro.</h4>
                  <p>
                    From <span>&#8358;</span>50,000 or <span>&#8358;</span>
                    100,000/month
                  </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/laptop-banner.jpg"
                    alt="Laptop Banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>BEST SALE</h5>
                    <h4>Laptops max</h4>
                    <p>
                      From <span>&#8358;</span>150,000 or <br />
                      <span>&#8358;</span>
                      1,000,000/month
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/smartwatch-banner.jpg"
                    alt="Laptop Banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>15% OFF</h5>
                    <h4>Smartwatch 7</h4>
                    <p>
                      Shop the latest brand <br />
                      styles and colours.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/ipad-banner.jpg"
                    alt="Laptop Banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>New ARRIVAL</h5>
                    <h4>Buy Ipad Air</h4>
                    <p>
                      From <span>&#8358;</span>120,000 or <br />
                      <span>&#8358;</span>
                      800,000/month
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/airpod-banner.jpg"
                    alt="Laptop Banner"
                    className="img-fluid rounded-3"
                  />
                  <div className="small-banner-content position-absolute">
                    <h5>FREE ENGAVING</h5>
                    <h4>Airpods Max</h4>
                    <p>
                      High-fidelity playback & <br />
                      ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <TbTruckDelivery className="icons fs-2" />
                  <div>
                    <h5>Free Shipping</h5>
                    <p className="mb-0">
                      From all orders over <span>&#8358;</span>100,000
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <BsGift className="icons fs-2" />
                  <div>
                    <h5>Daily Surprise Offers</h5>
                    <p className="mb-0">Save up to 20% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <BsHeadset className="icons fs-2" />
                  <div>
                    <h5 className="mb-0">Support 24/7</h5>
                    <p>Shop with an experts</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <TbSettingsAutomation className="icons fs-2" />
                  <div>
                    <h5>Affordable Prices</h5>
                    <p className="mb-0">Get factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <BsCreditCard className="icons fs-2" />
                  <div>
                    <h5 className="mb-0">Secure Payments</h5>
                    <p>100% protected payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-3 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="categories-item d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="categories-item d-flex align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>21 Items</p>
                  </div>
                  <img src="images/smart-watch2.jpg" alt="Camera" />
                </div>
                <div className="categories-item d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>15 Items</p>
                  </div>
                  <img src="images/smart-tv.jpg" alt="Camera" />
                </div>
                <div className="categories-item d-flex align-items-center">
                  <div>
                    <h6>Laptop</h6>
                    <p>19 Items</p>
                  </div>
                  <img src="images/laptop.jpg" alt="Camera" />
                </div>
                <div className="catergories-item d-flex align-items-center">
                  <div>
                    <h6>Music Box</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/jam-box.jpg" alt="Camera" />
                </div>
                <div className="catergories-item d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className="catergories-item d-flex align-items-center">
                  <div>
                    <h6>Smart Watch</h6>
                    <p>21 Items</p>
                  </div>
                  <img src="images/smart-watch2.jpg" alt="Camera" />
                </div>
                <div className="categories-item d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>15 Items</p>
                  </div>
                  <img src="images/smart-tv.jpg" alt="Camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5"></section>
    </>
  );
}

export default Home;
