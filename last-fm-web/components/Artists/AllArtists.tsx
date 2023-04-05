/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import axios from "axios";
import { routes } from "../lib/route-config";

const AllArtists = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allArtistsArray, setAllArtistsArray] = useState([]);
  const [searchsArray, setSearchsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/artist`)
      .then((response) => {
        const AllArtistResponse = response.data;
        setAllArtistsArray(AllArtistResponse?.payload[0]?.artists?.artist);
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_URL + `/api/artist/search/${searchQuery}`)
      .then((response) => {
        setSearchsArray(
          response?.data?.payload?.results?.artistmatches?.artist
        );
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, [searchQuery]);

  return (
    <>
      <div className="container-fluid d-flex" id="section_landing">
        <div className="container align-self-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-6 col-sm-12 col-12">
              <p className="txt_head_3 txt_white text-center">
                Find your favourite artists
              </p>

              <p className="txt_content txt_white text-center mabo16">
                Explore your favourite artists around the world
              </p>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control input_big txt_content txt_black"
                  placeholder="What are you looking for?"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={(event) => setSearchQuery(event.target.value)}
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
              <p className="txt_title txt_red mabo32 text-center">
                All Artists
              </p>
            </div>
          </div>

          <div className="col-12 pad0">
            <div className="row mabo16">
              {isLoading ? (
                "loading"
              ) : (
                <>
                  {searchQuery ? (
                    <>
                      {searchsArray?.length === 0 ? (
                        <div>No data found for {searchQuery}</div>
                      ) : (
                        <>
                          {searchsArray?.map((item: any) => (
                            <div
                              key={item?.mbid}
                              className="col-12 col-lg-3 col-md-4 col-sm-12 mabo8"
                            >
                              <a
                                href={`${routes.artist.url}?artist=${item?.mbid}`}
                              >
                                <img
                                  className="rounded-circle mabo16"
                                  alt="avatar1"
                                  src="../images/noImage.webp"
                                  style={{
                                    objectFit: "cover",
                                    objectPosition: "center",
                                  }}
                                  width="255"
                                  height="255"
                                />
                                <p className="txt_normal_2 txt_black mabo8">
                                  {item?.name}
                                </p>
                                <p className="txt_small txt_grey">
                                  {item?.listeners &&
                                    item?.listeners
                                      ?.toString()
                                      .replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ","
                                      )}{" "}
                                  listeners .{" "}
                                  {item?.playcount &&
                                    item?.playcount
                                      ?.toString()
                                      .replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ","
                                      )}{" "}
                                  plays
                                </p>
                              </a>
                            </div>
                          ))}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {allArtistsArray?.map((item: any) => (
                        <div
                          key={item?.mbid}
                          className="col-12 col-lg-3 col-md-4 col-sm-12 mabo8"
                        >
                          <a href={`${routes.artist.url}?artist=${item?.mbid}`}>
                            <img
                              className="rounded-circle mabo16"
                              alt="avatar1"
                              src="../images/noImage.webp"
                              style={{
                                objectFit: "cover",
                                objectPosition: "center",
                              }}
                              width="255"
                              height="255"
                            />
                            <p className="txt_normal_2 txt_black mabo8">
                              {item?.name}
                            </p>
                            <p className="txt_small txt_grey">
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
                          </a>
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllArtists;
