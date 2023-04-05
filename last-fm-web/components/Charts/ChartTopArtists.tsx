import React, { useEffect, useState } from "react";
import { routes } from "../lib/route-config";
import axios from "axios";

const ChartTopArtists = () => {
  const [topArtistsArray, setTopArtistsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // console.log(topArtistsArray);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/artist`)
      .then((response) => {
        const TopArtistResponse = response.data;
        setTopArtistsArray(TopArtistResponse?.payload[0]?.artists?.artist);
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
          <p className="txt_subtitle">Top Artists</p>

          {topArtistsArray?.slice(0, 5)?.map((item: any, index) => (
            <>
              {index == 0 ? (
                <a href={`${routes.artist.url}?artist=${item?.mbid}`}>
                  <div
                    className="card_track mato32"
                    style={{ background: "url(../images/bts.jpeg)" }}
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
                            src="../images/ts.webp"
                            width="60"
                            height="60"
                            alt=""
                            className="rounded-circle mato8"
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="mato16 ml-3">
                            <span className="txt_subtitle txt_white">
                              {item?.name}
                            </span>
                            <br />
                            <span className="txt_normal_2 txt_white">
                              {item?.artist?.name}
                            </span>
                            <br />
                            <span className="txt_small txt_white ">
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
                <a href={`${routes.artist.url}?artist=${item?.mbid}`}>
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
                          className="rounded-circle mato8"
                        />
                      </div>
                      <div className="col-md-8 mato16">
                        <div className="mato16 ml-3">
                          <span className="txt_normal txt_black">
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

export default ChartTopArtists;
