import React from "react";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsLinkedin, BsYoutube, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-15 align-items-center text-white">
                <BsSend className="fs-2" />
                <h3 className="mb-0">Sign Up For Newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="text-white">
                <h5>JP Store</h5>
                <address className="fs-6">
                  Address: Plot 224 Independence Avenue, <br /> Central Business
                  District, <br /> Abuja.
                </address>

                <a
                  href="+234 8041333380"
                  className="mt-3 d-block mb-0 text-white"
                >
                  +234 8041333380
                </a>
                <a
                  href="mailto:jpstore3380@gmail.com"
                  className="mt-1 d-block mb-2 text-white"
                >
                  jpstore3380@gmail.com
                </a>
                <div className="sociao-icons d-flex align-items-center gap-30 mt-3">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsTwitter className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact Us</Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">HeadPhones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by JP Store
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
