import React from "react";

const ForgotForm = () => {
  return (
    <div className="container align-self-center">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
          <div className="login_card">
            <div className="row pad16">
              <div className="col-md-12">
                <p className="txt_small fnt_black txt_black">Email</p>
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control input_normal txt_content txt_black"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="row pad16">
              <div className="col-md-12 mabo24">
                <button className="btn btn_red mr-4 text-uppercase">
                  Recover account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotForm;
