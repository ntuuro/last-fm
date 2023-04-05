/* eslint-disable @next/next/no-img-element */
import { routes } from "../lib/route-config";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const SingleTrack = () => {
  const [track, setTrack] = useState([] as any);
  const [isFetched, setIsFetched] = useState(false);

  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (Object.keys(query).length === 0 || !query.QUERYNAME) {
        axios
          .get(
            `${process.env.NEXT_PUBLIC_URL}/api/track/${query?.name}/${query?.artist}`
          )
          .then((response) => {
            setIsFetched(true);
            const TrackResponse = response.data;
            setTrack(TrackResponse);
            console.log(TrackResponse);
          })
          .catch((error) => {
            return error;
          });
      }
    }
  }, [router.isReady, query, router, query.QUERYNAME]);

  if (!isFetched) return null;
  return (
    <>
      <div
        className="container-fluid d-flex"
        id="section_landing_3"
        style={{
          backgroundImage:
            "linear-gradient(to left,rgba(255, 153, 153, 0) 0%,rgba(255, 153, 153, 0) 0%,#694738 50%),url(../images/bg-drake.png)",
        }}
      >
        <div className="container align-self-center">
          <div className="row mato64">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 ">
              <p className="txt_normal txt_white">
                {track?.payload[0]?.track?.artist?.name}
              </p>
              <p className="txt_head_2 txt_white">
                {track?.payload[0]?.track?.name}
              </p>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex mabo32">
              {/* <span className="txt_head_4 mato6 txt_white mr-4">#2</span> */}
              <button className="btn btn_small_white mato12 mr-4">
                <i className="fa-regular fa-heart"></i>
              </button>
              <div className="mr-4 mato12">
                <span className="txt_white txt_small">Listeners</span>
                <br />
                <span className="txt_white txt_normal fnt_black">
                  {track?.payload[0]?.track?.listeners &&
                    track?.payload[0]?.track?.listeners
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
              <div className="mr-4 mato12">
                <span className="txt_white txt_small">Playcount</span>
                <br />
                <span className="txt_white txt_normal fnt_black">
                  {track?.payload[0]?.track?.playcount &&
                    track?.payload[0]?.track?.playcount
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
                {track?.payload[0]?.track?.wiki?.summary}
              </div>
              <div className="col-md-12 mato16">
                {track?.payload[0]?.track?.toptags?.tag
                  ?.slice(0, 4)
                  ?.map((tag: any) => (
                    <Link
                      href={tag?.url}
                      className="formats txt_info txt_grey mr-2 mabo8"
                    >
                      {tag?.name}
                    </Link>
                  ))}
                {/* <span className="formats txt_info txt_grey mr-2"> bts </span>
                <span className="formats txt_info txt_grey mr-2"> korean </span>
                <span className="formats txt_info txt_grey mr-2"> jimin </span> */}
              </div>
            </div>
            <div className="col-md-3">
              <p className="">
                <span className="txt_normal fnt_black txt_grey_hard mr-5">
                  Published
                </span>
                <span className="txt_normal txt_grey_hard">
                  {" "}
                  {track?.payload[0]?.track?.wiki?.published}
                </span>
              </p>
              <p className="">
                <span className="txt_normal fnt_black txt_grey_hard mr-5">
                  Link&nbsp;&nbsp;
                </span>
                <Link
                  href={track?.payload[0]?.track?.url}
                  className="txt_normal txt_grey_hard"
                >
                  🥁
                </Link>
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
                    href={routes.tracks.url}
                    className="btn txt_content"
                  >{`View all Tracks >>`}</a>
                </div>
              </div>

              <div className="row mabo16">
                {track?.payload[1]?.similarartists?.artist
                  ?.slice(0, 3)
                  ?.map((artist: any, index: number) => (
                    <div className="col-12 col-lg-4 col-md-4 col-sm-12 mabo8">
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
                <p className="txt_title txt_black">Similar Tracks</p>
              </div>
              {track?.payload[2]?.similartracks?.track
                ?.slice(0, 10)
                ?.map((track: any, index: number) => (
                  <Link
                    href={`${routes.track.url}?name=${track?.name}&artist=${track?.artist?.name}`}
                  >
                    <div className="outer_card">
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
                                <p className="txt_normal txt_black">
                                  by {track?.artist?.name}
                                </p>
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
                                {track?.playcount &&
                                  track?.playcount
                                    ?.toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                                Playcount
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div
                  className="col-12 col-lg-8 col-md-8 col-sm-12"
                  id="txt-center"
                >
                  <p className="txt_subtitle txt_black mabo32">Albums</p>
                </div>
                <div
                  className="col-12 col-lg-4 col-md-4 col-sm-12 text-right"
                  id="txt-center"
                >
                  <a href={routes.albums.url} className="btn txt_content">
                    {`View all Albums >>`}{" "}
                  </a>
                </div>
              </div>

              <div className="row mabo16 mato32">
                {track?.payload[3]?.topalbums?.album
                  ?.slice(0, 4)
                  ?.map((album: any, index: any) => (
                    <div className="col-12 col-lg-6 col-md-12 col-sm-12 mabo24">
                      <Link
                        href={`${routes.album.url}?album_name=${album?.name}&artist=${album?.artist?.name}`}
                      >
                        <img
                          className="rounded mabo16 object-fit"
                          alt="avatar1"
                          src="../images/12mag-sza-mobileMasterAt3x.jpg"
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
                            <br />
                            <span className="txt_small txt_grey mabo8">
                              23 Apr 2022 . 3 Tracks
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTrack;
