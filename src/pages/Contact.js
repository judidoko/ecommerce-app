import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

function Contact() {
  return (
    <>
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63041.018199141785!2d7.448471012439104!3d9.057960160068307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5808f8b2d%3A0xa7190191916f082b!2sCentral%20Business%20District%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1683904467248!5m2!1sen!2sng"
                width="600"
                height="450"
                title=" Google Map"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Write to us..."
                      />
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in Touch Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-4 d-flex align-items-center gap-15">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Plot 267, Independence Avenue, Central Business
                          District, Abuja, Nigeria
                        </address>
                      </li>
                      <li className="mb-4 d-flex align-items-center gap-15">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+234 8041333346">+234 8041333346</a>
                      </li>
                      <li className="mb-4 d-flex align-items-center gap-15">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:jpstore@gmail.com">jpstore@gmail.com</a>
                      </li>
                      <li className="mb-4 d-flex align-items-center gap-15">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday : 9AM - 7PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
