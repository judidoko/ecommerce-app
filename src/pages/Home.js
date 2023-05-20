import React from "react";
import { Link } from "react-router-dom";
import { TbSettingsAutomation, TbTruckDelivery } from "react-icons/tb";
import { BsCreditCard, BsGift, BsHeadset } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

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
      <section className="home-wrapper-2 py-5">
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
      {/* Featured Collection Section */}
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img
                  src="images/smart-banner.jpg"
                  alt="Smart Watches Series Banner"
                  className="img-fluid w-100"
                />
                <div className="famous-content position-absolute">
                  <h5>Small Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>
                    From <span>&#8358;</span>85,000/mo. 24 mo.*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img
                  src="images/laptop-banner3.jpg"
                  alt="Smart Watches Series Banner"
                  className="img-fluid w-100"
                />
                <div className="famous-content position-absolute">
                  <h5 className="">Studio Display</h5>
                  <h6 className="">600 nits of brightness</h6>
                  <p className="">55-inch 5k Retina display</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img
                  src="images/iphone-banner.jpg"
                  alt="Smart Watches Series Banner"
                  className="img-fluid w-100"
                />
                <div className="famous-content position-absolute">
                  <h5 className="">Smart Phones</h5>
                  <h6 className="">Smartphone 13 pro</h6>
                  <p className="">
                    Now in Gold. From <span>&#8358;</span>700,00 or{" "}
                    <span>&#8358;</span>1,000,0000 for 24 mo Footnote*
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative ">
                <img
                  src="images/jambox-banner1.jpg"
                  alt="Smart Watches Series Banner"
                  className="img-fluid w-100"
                />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room filling sound.</h6>
                  <p className="text-dark">
                    From <span>&#8358;</span>150,00 or
                    <span>&#8358;</span>500,0000/mo. for 12 mo.*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Specail Collections */}
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      {/* Popular Products section */}
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <section className="marquee-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wapper bg-white p-2 card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25 h-20">
                    <img src="images/brand-1.jpg" alt="brands Logo" />
                  </div>
                  <div className="mx-4 w-25 h-20">
                    <img src="images/brand-2.jpg" alt="brands Logo" />
                  </div>
                  <div className="mx-4 w-25 h-20">
                    <img src="images/brand-3.jpg" alt="brands Logo" />
                  </div>
                  <div className="mx-4 w-25 h-20">
                    <img src="images/brand-4.jpg" alt="brands Logo" />
                  </div>
                  <div className="mx-4 w-25 h-20">
                    <img src="images/brand-5.jpg" alt="brands Logo" />
                  </div>
                  <div className="mx-4 w-25 h-20">
                    <img src="images/brand-6.jpg" alt="brands Logo" />
                  </div>
                  <div className="mx-4 w-25 h-20">
                    <img src="images/brand-7.jpg" alt="brands Logo" />
                  </div>
                  <div className="mx-4 w-25 h-20">
                    <img src="images/brand-8.jpg" alt="brands Logo" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
