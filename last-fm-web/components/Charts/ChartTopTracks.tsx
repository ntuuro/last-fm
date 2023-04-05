import React, { useEffect, useState } from "react";
import { routes } from "../lib/route-config";
import axios from "axios";

const ChartTopTracks = () => {
  const [topTracksArray, setTopTracksArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    <div className="col-12 col-lg-6 col-md-6 col-sm-12 mabo32">
      {isLoading ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <>
          <p className="txt_subtitle">Top Tracks</p>

          {topTracksArray?.slice(0, 5)?.map((item: any, index) => (
            <>
              {index == 0 ? (
                <a
                  href={`${routes.track.url}?name=${item?.name}&artist=${item?.artist?.name}`}
                >
                  <div
                    className="card_track mato32"
                    style={{
                      background:
                        "url(../images/12mag-sza-mobileMasterAt3x.jpg)",
                    }}
                  >
                    <div className="inner_card_big pad0"></div>
                    <div className="inner_card_small">
                      <div className="row pad16">
                        <div className="col-md-1">
                          <div className="mato32">
                            <span className="txt_subtitle txt_white">
                              {" "}
                              {++index}{" "}
                            </span>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <img
                            src="../images/bts.jpeg"
                            width="60"
                            height="60"
                            alt=""
                            className="mato8"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="mato16 ml-3">
                            <span className="txt_subtitle txt_white">
                              {item?.artist?.name}
                            </span>
                            <br />
                            <span className="txt_normal_2 txt_white">
                              {" "}
                              {item?.name}
                            </span>
                            <span className="txt_small txt_white ml-2">
                              {item?.listeners &&
                                item?.listeners
                                  ?.toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                              listeners .{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <a
                  href={`${routes.track.url}?name=${item?.name}&artist=${item?.artist?.name}`}
                >
                  <div className="outer_card">
                    <div className="row pad16">
                      <div className="col-md-1">
                        <div className="mato32">
                          <span className="txt_normal txt_grey">
                            {" "}
                            {++index}{" "}
                          </span>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <img
                          src="../images/bts.jpeg"
                          width="60"
                          height="60"
                          alt=""
                          className="mato8"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="mato16 ml-3">
                          <span className="txt_normal txt_black">
                            {item?.artist?.name}
                          </span>
                          <br />
                          <span className="txt_small txt_grey">
                            {item?.name}
                          </span>
                          <br />
                          <span className="txt_small txt_grey ">
                            {item?.listeners &&
                              item?.listeners
                                ?.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                            listeners .{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ChartTopTracks;
