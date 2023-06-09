import React from "react";
import BreadCrumb from "../components/BreadCrumb";

function TermsAndConditions() {
  return (
    <>
      <BreadCrumb title="Terms & Conditions" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TermsAndConditions;
