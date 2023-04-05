/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { routes } from "../lib/route-config";
import axios from "axios";

const AllTracks = () => {
  const [allTrack, setAllTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchsArray, setSearchsArray] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/artist`)
      .then((response) => {
        const TopTracksResponse = response.data;
        setAllTracks(TopTracksResponse?.payload[1]?.tracks?.track);
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get(process.env.NEXT_PUBLIC_URL + `/api/track/search/${searchQuery}`)
  //     .then((response) => {
  //       setSearchsArray(response?.data?.payload);
  //       console.log(searchsArray);

  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       return error;
  //     });
  // }, [searchQuery]);

  return (
    <>
      <div className="container-fluid d-flex" id="section_landing">
        <div className="container align-self-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-6 col-sm-12 col-12">
              <p className="txt_head_3 txt_white text-center">
                Find your favourite tracks
              </p>

              <p className="txt_content txt_white text-center mabo16">
                Explore your favourite tracks around the world
              </p>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control input_big txt_content txt_black"
                  placeholder="What are you looking for?"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  // onChange={(event) => setSearchQuery(event.target.value)}
                />
                <div className="input-group-append">
                  <button className="btn btn_section_landing" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="section_services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="txt_title txt_red mabo32 text-center">All Tracks</p>
            </div>
          </div>
          <div className="col-12 pad0">
            <div className="row mabo16">
              {isLoading ? (
                <div>
                  <span>Loading...</span>
                </div>
              ) : (
                <>
                  {/* {searchQuery ? (
                    <>
                      {searchsArray[0]?.error === 6 ? (
                        <div>No data found for {searchQuery}</div>
                      ) : (
                        <>
                          {searchsArray?.length > 1 &&
                            searchsArray?.map((item: any, index: any) => (
                          <div
                            className="col-12 col-lg-4 col-md-4 col-sm-12 mabo24"
                            // key={index}
                          >
                            <Link
                              href={`${routes.track.url}?name=${searchsArray?.name}&artist=${searchsArray?.artist?.name}`}
                            >
                              <div
                                className="card_track"
                                style={{
                                  background:
                                    " ../images/12mag-sza-mobileMasterAt3x.jpg",
                                }}
                              >
                                <div className="inner_card_big pad0"></div>
                                <div className="inner_card_small">
                                  <div className="row pad16">
                                    <div className="col-md-2 mr-3">
                                      <img
                                        src="../images/ts.webp"
                                        width="60"
                                        height="60"
                                        alt=""
                                        className="mato8"
                                      />
                                    </div>
                                    <div className="col-md-8">
                                      <div className="mato16">
                                        <span className="txt_subtitle txt_white">
                                          {searchsArray?.name}
                                        </span>
                                        <br />
                                        <span className="txt_normal_2 txt_white">
                                          {searchsArray?.artist?.name}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                          ))}
                        </>
                      )}
                    </>
                  ) : ( */}
                  <>
                    {allTrack?.slice(0, 16)?.map((item: any, index) => (
                      <div
                        className="col-12 col-lg-4 col-md-4 col-sm-12 mabo24"
                        key={index}
                      >
                        <Link
                          href={`${routes.track.url}?name=${item?.name}&artist=${item?.artist?.name}`}
                        >
                          <div
                            className="card_track"
                            style={{
                              background: `url(${
                                index % 2 == 0
                                  ? " ../images/12mag-sza-mobileMasterAt3x.jpg"
                                  : " ../images/bts.jpeg"
                              })`,
                            }}
                          >
                            <div className="inner_card_big pad0"></div>
                            <div className="inner_card_small">
                              <div className="row pad16">
                                <div className="col-md-2 mr-3">
                                  <img
                                    src={`${
                                      index % 2 == 0
                                        ? "../images/ts.webp"
                                        : "../images/bg-drake.png"
                                    }`}
                                    width="60"
                                    height="60"
                                    alt=""
                                    className="mato8"
                                  />
                                </div>
                                <div className="col-md-8">
                                  <div className="mato16">
                                    <span className="txt_subtitle txt_white">
                                      {item?.name}
                                    </span>
                                    <br />
                                    <span className="txt_normal_2 txt_white">
                                      {item?.artist?.name}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </>
                  {/* )} */}
                </>
              )}
            </div>
          </div>
          <div className="row pad16 justify-content-center mato32">
            <div className="col-12 col-lg-3 col-md-3 col-sm-12">
              <nav aria-label="...">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link className="page-link" href="#" tab-index="-1">
                      Previous
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" href="#">
                      2 <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#">
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTracks;
