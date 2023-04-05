/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { routes } from "../lib/route-config";
import axios from "axios";
import Link from "next/link";

const TopTracks = () => {
  const [topTracksArray, setTopTracksArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // console.log("topTracksArray", topTracksArray);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/artist`)
      .then((response) => {
        const TopTracksResponse = response.data;
        setTopTracksArray(TopTracksResponse?.payload[1]?.tracks?.track);
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <div className="container-fluid bg_white" id="section_updates">
      <div className="container pad0 main-content">
        <div className="row pad16">
          <div className="col-12 col-lg-8 col-md-8 col-sm-12" id="txt-center">
            <p className="txt_title txt_red mabo32">Top Tracks</p>
          </div>
          <div
            className="col-12 col-lg-4 col-md-4 col-sm-12 text-right"
            id="txt-center"
          >
            <a href={routes.tracks.url} className="btn btn_red txt_content">
              {`View all Tracks >>`}{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="container pad0">
        <div className="col-12">
          {isLoading ? (
            <div>
              <span>Loading...</span>
            </div>
          ) : (
            <div className="row">
              {topTracksArray?.slice(0, 4)?.map((item: any, index) => (
                <div
                  className="col-12 col-lg-6 col-md-6 col-sm-12 mabo32"
                  key={index}
                >
                  <Link
                    href={`${routes.track.url}?name=${item?.name}&artist=${item?.artist?.name}`}
                  >
                    <div
                      className="card_track"
                      style={{
                        background:
                          "url(../images/12mag-sza-mobileMasterAt3x.jpg)",
                      }}
                    >
                      <div className="inner_card_big pad0"></div>
                      <div className="inner_card_small">
                        <div className="row pad16">
                          <div className="col-md-1"></div>
                          <div className="col-md-2">
                            <img
                              src="../images/noImage.webp"
                              width="60"
                              height="60"
                              alt=""
                              className="mato8"
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="mato16">
                              <span className="txt_subtitle txt_white">
                                {item?.artist?.name}
                              </span>
                              <br />
                              <span className="txt_normal_2 txt_white">
                                {item?.name}
                              </span>
                              <p className="txt_small txt_white">
                                {item?.listeners &&
                                  item?.listeners
                                    ?.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                                listeners .{" "}
                                {item?.playcount &&
                                  item?.playcount
                                    ?.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                                plays
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopTracks;
