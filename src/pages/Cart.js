import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import SmartWatch from "../images/smart-watch.jpeg";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <BreadCrumb title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header d-flex justify-content-between align-items-center py-3">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data mb-2 d-flex justify-content-between align-items-center py-3">
                <div className="cart-col-1 d-flex align-items-center gap-15">
                  <div className="w-25">
                    <img src={SmartWatch} alt="product" className="img-fluid" />
                  </div>
                  <div className="w-75">
                    <p>waniocno</p>
                    <p>Size: wvnwpvwnri</p>
                    <p>Colour: wocnwivn</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">
                    <span>&#8358;</span>50,000
                  </h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      min={1}
                      max={10}
                      name=""
                      id=""
                    />
                  </div>
                  <AiTwotoneDelete className="fs-2 text-danger" />
                </div>
                <div className="cart-col-4">
                  <h5 className="price">
                    <span>&#8358;</span>50,000
                  </h5>
                </div>
              </div>
              <div className="col-12 py-2 mt-4">
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/product" className="button">
                    Continue Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4>
                      SubTotal: <span>&#8358;</span>50,000
                    </h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to="/checkout" className="button">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
