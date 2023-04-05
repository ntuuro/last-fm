/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import axios from "axios";

const SingleArtistTopBanner = () => {
  const [artistArray, setArtistArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const params = new URLSearchParams(window.location.search);
  const artistQuery = params.get("artist");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/artist/${artistQuery}`)
      .then((response) => {
        const data = response.data;
        setArtistArray(data);
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <div
      className="container-fluid d-flex"
      id="section_landing_3"
      style={{
        backgroundImage:
          "linear-gradient(to left,rgba(255, 153, 153, 0) 0%,rgba(255, 153, 153, 0) 0%,#694738 50%), url(../images/bg-drake.png)",
      }}
    >
      <div className="container align-self-center">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mato32">
            <span className="txt_head_2 txt_white">Drake</span>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
            <span className="txt_head_4 mato8 txt_white mr-4">#2</span>
            <button className="btn btn_small_white mato12 mr-4">
              <i className="fa-regular fa-bookmark"></i>
            </button>
            <div className="mr-4 mato12">
              <span className="txt_white txt_small">Listeners</span>
              <br />
              <span className="txt_white txt_normal fnt_black">123K</span>
            </div>
            <div className="mr-4 mato12">
              <span className="txt_white txt_small">Scrobbles</span>
              <br />
              <span className="txt_white txt_normal fnt_black">123K</span>
            </div>
          </div>

          <div className="col-12">
            <div className="row pad16 mabo16">
              <div className="mr-4">
                <img
                  src="../images/12mag-sza-mobileMasterAt3x.jpg"
                  width="100"
                  height="100"
                  alt=""
                  className="mato8 object-fit"
                />
              </div>
              <div className="mato16">
                <span className="txt_small txt_grey_white">LATEST RELEASE</span>
                <br />
                <span className="txt_white txt_normal fnt_black">123K</span>
                <br />
                <span className="txt_small txt_white">22 Mar 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArtistTopBanner;
