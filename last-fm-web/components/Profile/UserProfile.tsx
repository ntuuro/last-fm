/* eslint-disable @next/next/no-img-element */
import { routes } from "../lib/route-config";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  // const [user, setUser] = useState(null);
  const location = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [artistsArray, setArtistsArray] = useState([]);
  const [albumsArray, setAlbumsArray] = useState([]);

  // On page load, we take "search" parameters
  // and proxy them to /api/auth/callback on our Laravel API
  // useEffect(() => {
  //   const queryString = qs.stringify(location.query);
  //   fetch(`${process.env.NEXT_PUBLIC_URL}/api/auth/callback?${queryString}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setLoading(false);
  //       setData(data);
  //       localStorage.setItem("access_token", data.access_token);
  //       localStorage.setItem("data", JSON.stringify(data));
  //     });
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_URL + `/api/savedArtists/`)
      .then((response) => {
        // console.log(response?.data);

        setArtistsArray(response?.data?.payload);
        // setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_URL + `/api/savedAlbums/`)
      .then((response) => {
        // console.log(response?.data);
        setAlbumsArray(response?.data?.payload);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  const removeFromFavorite = (mbid: any) => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/artist/${mbid}/delete`)
      .then((response) => {
        // console.log(response);
        toast.success(`Success ${response.data.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
        location.reload();
      })
      .catch((error) => {
        toast.error(`${error}`, {
          position: toast.POSITION.TOP_CENTER,
        });
        return error;
      });
  };

  const removeAlbumFromFavorite = (album_name: any, artist_name: any) => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_URL}/api/album/${album_name}/${artist_name}/delete`
      )
      .then((response) => {
        // console.log(response);
        toast.success(`Success ${response.data.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
        location.reload();
      })
      .catch((error) => {
        toast.error(`${error}`, {
          position: toast.POSITION.TOP_CENTER,
        });
        return error;
      });
  };

  return (
    <>
      {/* {JSON.stringify(data, null, 2)} */}
      <ToastContainer />
      <div className="container-fluid" id="section_services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="txt_title txt_red mabo32 text-center">
                Liked Artists
              </p>
            </div>
          </div>
          <div className="col-12 pad0">
            <div className="row mabo16">
              {artistsArray
                .filter(function (artist) {
                  if (artist?.error) {
                    return false; // skip
                  }
                  return true;
                })
                .map((item: any, index) => (
                  <div className="col-12 col-lg-3 col-md-4 col-sm-12 mabo8">
                    <Link
                      href={`${routes.artist.url}?artist=${item?.artist?.mbid}`}
                    >
                      <img
                        className="rounded-circle mabo16"
                        alt="avatar1"
                        src={`${
                          index % 2 == 0
                            ? " ../images/12mag-sza-mobileMasterAt3x.jpg"
                            : " ../images/bts.jpeg"
                        }`}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        width="255"
                        height="255"
                      />
                    </Link>
                    <div className="row pad0">
                      <div className="col-md-8">
                        <p className="txt_normal_2 txt_black mabo8">
                          {item?.artist?.name}
                        </p>
                        <p className="txt_small txt_grey">
                          {item?.artist?.tags?.tag
                            ?.slice(0, 4)
                            ?.map((tag: any) => (
                              <span className="ml-1">{tag?.name} .</span>
                            ))}
                        </p>
                      </div>
                      <div className="col-md-2">
                        <p className="txt_normal txt_grey_hard mato8 mabo8 float-right">
                          <button
                            className="btn"
                            type="submit"
                            onClick={() =>
                              removeFromFavorite(item?.artist?.mbid)
                            }
                          >
                            <i className="fa-sharp fa-solid fa-heart"></i>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid"
        id="section_services"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <p className="txt_title txt_red mabo32 text-center">
                Liked Albums
              </p>
            </div>
          </div>
          <div className="col-12 pad0">
            <div className="row mabo16">
              {albumsArray?.slice(0, 20).map((album: any, index) => (
                <div
                  className="col-12 col-lg-3 col-md-3 col-sm-12 mabo24"
                  key={index}
                >
                  <Link
                    href={`${routes.album.url}?album_name=${album?.album?.name}&artist=${album?.album?.artist}`}
                  >
                    <img
                      className="rounded mabo16 object-fit"
                      alt="avatar1"
                      src={`${
                        index % 2 == 0
                          ? "../images/drake.jpg.webp"
                          : " ../images/ts.webp"
                      }`}
                      height="150"
                      width="100%"
                    />
                  </Link>
                  <div className="row pad0">
                    <div className="col-md-10">
                      <span className="txt_normal fnt_black txt_black mabo8">
                        {album?.album?.name}
                      </span>
                      <br />
                      <span className="txt_small txt_grey_hard mabo8">
                        {album?.album?.listeners &&
                          album?.album?.listeners
                            ?.toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        Listeners
                      </span>
                      <br />
                      <span className="txt_small txt_grey mabo8">
                        {album?.album?.tracks?.track.length > 0 &&
                          `${album?.album?.tracks?.track.length} Tracks`}
                      </span>
                    </div>
                    <div className="col-md-2">
                      <p className="txt_normal txt_grey_hard mabo8 float-right">
                        <button
                          type="submit"
                          onClick={() =>
                            removeAlbumFromFavorite(
                              album?.album?.name,
                              album?.album?.artist
                            )
                          }
                          className="btn"
                        >
                          <i className="fa-sharp fa-solid fa-heart"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
