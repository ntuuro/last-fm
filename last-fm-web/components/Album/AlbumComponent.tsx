/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { routes } from "../lib/route-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AlbumComponent = () => {
  const [album, setAlbum] = useState([] as any);
  const [similarArtists, setSimilarArtists] = useState([] as any);
  const [topAlbums, setTopAlbums] = useState([] as any);
  const [isFetched, setIsFetched] = useState(false);

  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (Object.keys(query).length === 0 || !query.QUERYNAME) {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_URL}/api/album/${query?.album_name}/${query?.artist}`
          )
          .then((response) => {
            setIsFetched(true);
            const AlbumResponse = response.data;
            setAlbum(AlbumResponse?.payload[0]?.album);
            setSimilarArtists(AlbumResponse?.payload[1]?.similarartists);
            setTopAlbums(AlbumResponse?.payload[2]?.topalbums);
            console.log(AlbumResponse);
          })
          .catch((error) => {
            return error;
          });
      }
    }
  }, [router.isReady, query, router, query.QUERYNAME]);

  var toHHMMSS = (secs: string) => {
    var sec_num = parseInt(secs, 10);
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor(sec_num / 60) % 60;
    var seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

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

  if (!isFetched) return null;
  return (
    <>
      <ToastContainer />
      <div
        className="container-fluid d-flex"
        id="section_landing_3"
        style={{
          backgroundImage:
            "linear-gradient(to left,rgba(255, 153, 153, 0) 0%,rgba(255, 153, 153, 0) 0%,#694738 50%),url(../images/bg-drake.png)",
        }}
      >
        <div className="container align-self-center">
          <div className="row mato64 mabo32">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
              <p className="txt_normal txt_white">{album?.artist}</p>
              <p className="txt_head_2 txt_white">{album?.name}</p>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
              <button
                type="submit"
                onClick={() =>
                  addToFavorite(album?.name, album?.artist, album?.url)
                }
                className="btn btn_small_white mato12 mr-4"
              >
                <i className="fa-regular fa-bookmark"></i>
              </button>
              <div className="mr-4 mato12">
                <span className="txt_white txt_small">Listeners</span>
                <br />
                <span className="txt_white txt_normal fnt_black">
                  {" "}
                  {album?.listeners &&
                    album?.listeners
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
              <div className="mr-4 mato12">
                <span className="txt_white txt_small">Playcount</span>
                <br />
                <span className="txt_white txt_normal fnt_black">
                  {album?.playcount &&
                    album?.playcount
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" id="section_breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-md-5 pad0">
              <div className="col-md-12 txt_normal txt_grey_hard">
                {album?.wiki?.summary}
              </div>
              <div className="col-md-12 mato16">
                {album?.tags?.tag?.slice(0, 4)?.map((tag: any) => (
                  <Link
                    href={tag?.url}
                    className="formats txt_info txt_grey mr-2 mabo8"
                  >
                    {" "}
                    {tag?.name}{" "}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-md-3">
              <p className="">
                <span className="txt_normal fnt_black txt_grey_hard mr-5">
                  Length &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="txt_normal txt_grey_hard">
                  {album?.tracks?.track?.length} tracks
                </span>
              </p>
              <p className="">
                <span className="txt_normal fnt_black txt_grey_hard mr-5">
                  Published
                </span>
                <span className="txt_normal txt_grey_hard">
                  {" "}
                  {album?.wiki?.published}
                </span>
              </p>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div
                  className="col-12 col-lg-8 col-md-8 col-sm-12"
                  id="txt-center"
                >
                  <p className="txt_subtitle txt_black mabo32">Similar To</p>
                </div>
                <div
                  className="col-12 col-lg-4 col-md-4 col-sm-12 text-right"
                  id="txt-center"
                >
                  <a
                    href={routes.artists.url}
                    className="btn txt_content"
                  >{`View all Artists >>`}</a>
                </div>
              </div>

              <div className="row mabo16">
                {similarArtists?.artist
                  ?.slice(0, 6)
                  ?.map((artist: any, index: number) => (
                    <div
                      className="col-12 col-lg-4 col-md-4 col-sm-12 mabo8"
                      key={index}
                    >
                      <Link
                        href={`${routes.artist.url}?artist=${artist?.mbid}`}
                      >
                        <img
                          className="rounded-circle mabo16 object-fit"
                          alt="avatar1"
                          src={`${
                            index % 2 == 0
                              ? " ../images/12mag-sza-mobileMasterAt3x.jpg"
                              : " ../images/bts.jpeg"
                          }`}
                          height="100"
                          width="100"
                        />
                        <p className="txt_normal txt_grey_hard mabo8 text-center">
                          {artist?.name}
                        </p>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mato16 mabo64">
        <div className="container">
          <div className="row pad0 mato64">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="pad0">
                <p className="txt_title txt_black">Tracklist</p>
              </div>

              {album?.tracks?.track?.length > 1 ? (
                album?.tracks?.track?.map((track: any, index: number) => (
                  <div className="outer_card" key={index}>
                    <div className="row pad16">
                      <div className="col-md-8">
                        <div className="row">
                          <div className="mr-4">
                            <div className="mato32">
                              <span className="txt_normal txt_grey">
                                {" "}
                                {++index}
                              </span>
                            </div>
                          </div>
                          <div className="mr-4">
                            <img
                              src={`${
                                index % 2 == 0
                                  ? " ../images/12mag-sza-mobileMasterAt3x.jpg"
                                  : " ../images/bts.jpeg"
                              }`}
                              width="60"
                              height="60"
                              alt=""
                              className="rounded mato8"
                            />
                          </div>
                          <div className="mr-4 mato16">
                            <div className="mato16 ml-3">
                              <span className="txt_normal fnt_black txt_black">
                                {track?.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="row">
                          <div
                            className="mato16 ml-3 listeners"
                            style={{ width: "100%" }}
                          >
                            <span className="txt_normal fnt_light txt_black">
                              {toHHMMSS(track?.duration)} minutes
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="outer_card">
                  <div className="row pad16">
                    <div className="col-md-8">
                      <div className="row">
                        <div className="mr-4">
                          <div className="mato32">
                            <span className="txt_normal txt_grey">1</span>
                          </div>
                        </div>
                        <div className="mr-4">
                          <img
                            src="../images/12mag-sza-mobileMasterAt3x.jpg"
                            width="60"
                            height="60"
                            alt=""
                            className="rounded mato8"
                          />
                        </div>
                        <div className="mr-4 mato16">
                          <div className="mato16 ml-3">
                            <span className="txt_normal fnt_black txt_black">
                              {album?.tracks?.track?.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="row">
                        <div
                          className="mato16 ml-3 listeners"
                          style={{ width: "100%" }}
                        >
                          <span className="txt_normal fnt_light txt_black">
                            {toHHMMSS(album?.tracks?.track?.duration)} minutes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="col-lg-4">
              <div className="pad0">
                <p className="txt_title txt_black">Albums</p>
              </div>

              <div className="row mabo16 mato32">
                {topAlbums?.album?.map((album: any, index: number) => (
                  <div
                    className="col-12 col-lg-6 col-md-12 col-sm-12 mabo24"
                    key={index}
                  >
                    <Link
                      href={`${routes.album.url}?album_name=${album?.name}&artist=${album?.artist?.name}`}
                    >
                      <img
                        className="rounded mabo16 object-fit"
                        alt="avatar1"
                        src=" ../images/12mag-sza-mobileMasterAt3x.jpg"
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
                            {album?.playcount &&
                              album?.playcount
                                ?.toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                            Playcount
                          </span>
                          {/* <br />
                          <span className="txt_small txt_grey mabo8">
                            23 Apr 2022 . 3 Tracks
                          </span> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlbumComponent;
