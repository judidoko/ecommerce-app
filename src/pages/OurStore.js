import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import { MdOutlineDensityMedium } from "react-icons/md";
import ProductCard from "../components/ProductCard";
import {
  TfiLayoutColumn4Alt,
  TfiLayoutColumn3Alt,
  TfiLayoutColumn2Alt,
} from "react-icons/tfi";

function OurStore() {
  const [grid, setGrid] = useState(4);
  // alert(grid);

  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        In Stock (3)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <span>&#8358;</span>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <span>&#8358;</span>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      HeadPhone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Room Speaker
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-100">
                      <img
                        src="images/airpod.jpg"
                        alt="Airpod"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-100">
                      <h5>
                        Airpod bulk 15 pack multi coloured for student/working
                        Class
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>
                        <span>&#8358;</span> 150,000
                      </b>
                    </div>
                  </div>
                  <div className="random-products d-flex">
                    <div className="w-100">
                      <img
                        src="images/camera.jpg"
                        alt="Airpod"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-100">
                      <h5>
                        Camera bulk 15 pack multi coloured for student/working
                        Class
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>
                        <span>&#8358;</span> 150,000
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div div className="d-flex align-items-center gap-10">
                    <div>
                      <p className="mb-0" style={{ width: "100px" }}>
                        Sort By:
                      </p>
                    </div>
                    <select name="" id="" className="form-control form-select">
                      <option value="manual" selected="selected">
                        Select
                      </option>
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">
                        Alphabetically, A-Z
                      </option>
                      <option value="title-decending">
                        Alphabetically, Z-A
                      </option>
                      <option value="price-ascending">
                        Price, Low to High
                      </option>
                      <option value="price-decending">
                        Price, High to Low
                      </option>
                      <option value="created-ascending">
                        Date, old to new
                      </option>
                      <option value="created-descending">
                        Date, new to old
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 products</p>
                    <div className="d-flex align-items-center gap-10">
                      <TfiLayoutColumn4Alt
                        className="filter-icon"
                        onClick={() => {
                          setGrid(3);
                        }}
                      />
                      <TfiLayoutColumn3Alt
                        className="filter-icon"
                        onClick={() => {
                          setGrid(4);
                        }}
                      />
                      <TfiLayoutColumn2Alt
                        className="filter-icon"
                        onClick={() => {
                          setGrid(6);
                        }}
                      />
                      <MdOutlineDensityMedium
                        className="filter-icon"
                        onClick={() => {
                          setGrid(12);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
