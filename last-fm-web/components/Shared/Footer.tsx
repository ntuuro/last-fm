import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg_black" id="section_footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9 col-md-9 col-sm-12">
            <span className="txt_content txt_red fnt_black text-uppercase mabo32">
              Navigation:
            </span>
            <span className="txt_footer txt_white ml-5">
              <i className="fas fa-envelope mr-2"></i>
              team@last.fm
            </span>
            <span className="txt_footer txt_white ml-5">
              <i className="fas fa-phone mr-2"></i>
              +250 767 888 323
            </span>
          </div>
          <div className="col-12 col-lg-3 col-md-3 col-sm-12 text-right">
            <span className="txt_footer txt_white ml-5"> Follow us: </span>
            <a href="#">
              <i className="fab fa-facebook-f gov_social"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube gov_social"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter gov_social"></i>
            </a>
          </div>
        </div>
        <hr />
        <div className="row gov_subfooter mato32">
          <div className="col-12 col-lg-9 col-md-9 col-sm-12">
            <div className="col-auto mr-auto pad0">
              <img src="images/lastfm_flat.png" width="48px" />
              <span className="gov_subfooter_copy ml-4">
                © 2023 Last.fm Corporate
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-9 col-sm-12">
            <div className="col-auto">
              <p className="gov_subfooter_copy">
                <a href="#" className="txt_white">
                  Privacy Statement
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
