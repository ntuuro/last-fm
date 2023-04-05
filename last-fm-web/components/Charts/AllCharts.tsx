/* eslint-disable @next/next/no-img-element */
import React from "react";
import { routes } from "../lib/route-config";
import ChartTopTracks from "@/components/Charts/ChartTopTracks";
import ChartTopArtists from "@/components/Charts/ChartTopArtists";

const AllCharts = () => {
  return (
    <>
      <div className="container-fluid bg_white" id="section_updates">
        <div className="container pad0 main-content">
          <div className="row pad16">
            <div className="col-12 col-lg-8 col-md-8 col-sm-12" id="txt-center">
              <p className="txt_title txt_red mabo16">Charts</p>
            </div>
          </div>
        </div>

        <div className="container pad0">
          <div className="col-12">
            <div className="row">
              <div
                className="col-lg-8"
                style={{ borderRight: "1px rgba(128, 128, 128, 0.585) solid" }}
              >
                <div className="row">
                  <ChartTopTracks />
                  <ChartTopArtists />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="col-12 mabo16">
                  <p className="txt_subtitle">Out Now</p>
                  <p className="txt_content txt_red">17 March - 23 March</p>

                  <div className="row mabo16">
                    <div className="col-md-2">
                      <img
                        src="../images/bts.jpeg"
                        width="80"
                        height="80"
                        alt=""
                        className="mato8 object-fit"
                      />
                    </div>
                    <div className="col-md-8 ml-5">
                      <div className="mato16">
                        <span className="txt_subtitle txt_black">
                          In my dreams
                        </span>
                        <br />
                        <span className="txt_small txt_grey">BTS</span> <br />
                        <span className="txt_small txt_grey">22 Mar 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="row mabo16">
                    <div className="col-md-2">
                      <img
                        src="../images/12mag-sza-mobileMasterAt3x.jpg"
                        width="80"
                        height="80"
                        alt=""
                        className="mato8 object-fit"
                      />
                    </div>
                    <div className="col-md-8 ml-5">
                      <div className="mato16">
                        <span className="txt_subtitle txt_black">
                          Ups and downs
                        </span>
                        <br />
                        <span className="txt_small txt_grey">SZA</span> <br />
                        <span className="txt_small txt_grey">22 Mar 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="row mabo16">
                    <div className="col-md-2">
                      <img
                        src="../images/drake.jpg.webp"
                        width="80"
                        height="80"
                        alt=""
                        className="mato8 object-fit"
                      />
                    </div>
                    <div className="col-md-8 ml-5">
                      <div className="mato16">
                        <span className="txt_subtitle txt_black">KeKe</span>
                        <br />
                        <span className="txt_small txt_grey">Drake</span> <br />
                        <span className="txt_small txt_grey">22 Mar 2023</span>
                      </div>
                    </div>
                  </div>

                  <div className="row mato32 float-right">
                    <div className="col-12 col-lg-12 col-md-4 col-sm-12">
                      <a
                        href={routes.tracks.url}
                        className="txt_content txt_red"
                      >{`View all out >>`}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCharts;
