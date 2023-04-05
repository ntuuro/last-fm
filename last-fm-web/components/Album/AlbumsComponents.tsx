/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import axios from "axios";
import { routes } from "../lib/route-config";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlbumsComponents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allAlbumsArray, setAllAlbumsArray] = useState([]);
  const [searchsArray, setSearchsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/albums`)
      .then((response) => {
        const AllAlbumResponse = response.data;
        setAllAlbumsArray(AllAlbumResponse?.payload?.topalbums?.album);
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_URL + `/api/album/search/${searchQuery}`)
      .then((response) => {
        setSearchsArray(response?.data?.payload?.results?.albummatches?.album);
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, [searchQuery]);

  const addToFavorite = (album_name: any, artist_name: any, album_url: any) => {
    axios
      .post(process.env.NEXT_PUBLIC_URL + `/api/album/create`, null, {
        params: {
          album_name,
          artist_name,
          album_url,
        },
      })
      .then((response) => {
        // console.log(response);
        toast.success(`${response.data.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        toast.error(`Success ${error}`, {
          position: toast.POSITION.TOP_CENTER,
        });
        return error;
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="container-fluid d-flex" id="section_landing">
        <div className="container align-self-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-6 col-sm-12 col-12">
              <p className="txt_head_3 txt_white text-center">
                Find your favourite albums
              </p>

              <p className="txt_content txt_white text-center mabo16">
                Explore your favourite albums around the world
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
              <p className="txt_title txt_red mabo32 text-center">All Albums</p>
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
                          {searchsArray?.map((album: any, index) => (
                            <div className="col-12 col-lg-3 col-md-3 col-sm-12 mabo24">
                              <Link href="album.html">
                                <img
                                  className="rounded mabo16 object-fit"
                                  alt="avatar1"
                                  src={`${
                                    index % 2 == 0
                                      ? " ../images/12mag-sza-mobileMasterAt3x.jpg"
                                      : " ../images/drake.jpg.webp"
                                  }`}
                                  height="150"
                                  width="100%"
                                />
                                <div className="row pad0">
                                  <div className="col-md-10">
                                    <span className="txt_normal fnt_black txt_black mabo8">
                                      {album?.name}
                                    </span>
                                    <br />
                                    <span className="txt_small txt_grey_hard mabo8">
                                      by {album?.artist}
                                    </span>
                                    <br />
                                    <span className="txt_small txt_grey mabo8">
                                      {album?.playcount} playcount
                                    </span>
                                  </div>
                                  <div className="col-md-2">
                                    <p className="txt_normal txt_grey_hard mabo8 float-right">
                                      <span>
                                        <i className="fa-regular fa-heart"></i>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {allAlbumsArray?.slice(0, 20).map((album: any, index) => (
                        <div
                          className="col-12 col-lg-3 col-md-3 col-sm-12 mabo24"
                          key={index}
                        >
                          <Link
                            href={`${routes.album.url}?album_name=${album?.name}&artist=${album?.artist?.name}`}
                          >
                            <img
                              className="rounded mabo16 object-fit"
                              alt="avatar1"
                              src={`${
                                index % 2 == 0
                                  ? " ../images/12mag-sza-mobileMasterAt3x.jpg"
                                  : " ../images/drake.jpg.webp"
                              }`}
                              height="150"
                              width="100%"
                            />
                          </Link>
                          <div className="row pad0">
                            <div className="col-md-10">
                              <span className="txt_normal fnt_black txt_black mabo8">
                                {album?.name}
                              </span>
                              <br />
                              <span className="txt_small txt_grey_hard mabo8">
                                by {album?.artist?.name}
                              </span>
                              <br />
                              <span className="txt_small txt_grey mabo8">
                                {album?.playcount} user count (ntuuro)
                              </span>
                            </div>
                            <div className="col-md-2">
                              <p className="txt_normal txt_grey_hard mabo8 float-right">
                                <span>
                                  <button
                                    type="submit"
                                    onClick={() =>
                                      addToFavorite(
                                        album?.name,
                                        album?.artist?.name,
                                        album?.url
                                      )
                                    }
                                    className="btn fa-regular fa-heart"
                                  ></button>
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>

            <div className="row pad16 justify-content-center mato32">
              <div className="col-12 col-lg-3 col-md-3 col-sm-12">
                <nav aria-label="...">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tab-index="-1">
                        Previous
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumsComponents;
