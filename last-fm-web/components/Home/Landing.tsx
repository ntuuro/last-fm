/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Landing = () => {
  return (
    <div className="container-fluid d-flex" id="section_landing">
      <div className="container align-self-center">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-6 col-sm-12 col-12">
            <p className="txt_head_3 txt_white text-center">
              Explore Top Music Powered by your Scrobbles
            </p>

            <p className="txt_content txt_white text-center mabo16">
              We bring together your favourite music services and join up
              listening, watching and sharing to connect your musical world.
              Below you can visualise, in real-time, the listening habits &
              trends of Last.fm's global community. Go Explore.
            </p>

            {/* <div className="input-group mb-3">
              <input
                type="text"
                className="form-control input_big txt_content txt_black"
                placeholder="What are you looking for?"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn_section_landing" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
