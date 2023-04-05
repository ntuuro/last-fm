/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { routes } from "../lib/route-config";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleArtist = () => {
  const [artist, setArtist] = useState([] as any);

  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (Object.keys(query).length === 0 || !query.QUERYNAME) {
        axios
          .get(`${process.env.NEXT_PUBLIC_URL}/api/artist/${query?.artist}`)
          .then((response) => {
            const ArtistResponse = response.data;
            setArtist(ArtistResponse.payload?.artist);
            // console.log(ArtistResponse);
          })
          .catch((error) => {
            return error;
          });
      }
    }
  }, [router.isReady, query, router, query.QUERYNAME]);

  const addToFavorite = (mbid: any) => {
    axios
      .post(process.env.NEXT_PUBLIC_URL + `/api/artist/create`, null, {
        params: {
          mbid,
        },
      })
      .then((response) => {
        // console.log(response);
        toast.success(`Success ${response.data.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
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
      <ToastContainer />
      <div
        className="container-fluid d-flex"
        id="section_landing_3"
        style={{
          backgroundImage:
            "linear-gradient(to left,rgba(255, 153, 153, 0) 0%,rgba(255, 153, 153, 0) 0%,#694738 50%), url(../images/bg-drake.png)",
        }}
      >
        <div className="container align-self-center">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mato32">
              <span className="txt_head_2 txt_white">{artist?.name}</span>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex">
              <span className="txt_head_4 mato8 txt_white mr-4">
                #{artist?.streamable}
              </span>
              <button
                type="submit"
                onClick={() => addToFavorite(artist?.mbid)}
                className="btn btn_small_white mato12 mr-4"
              >
                <i className="fa-regular fa-bookmark"></i>
              </button>
              <div className="mr-4 mato12">
                <span className="txt_white txt_small">Listeners</span>
                <br />
                <span className="txt_white txt_normal fnt_black">
                  {artist?.stats?.listeners &&
                    artist?.stats?.listeners
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
              <div className="mr-4 mato12">
                <span className="txt_white txt_small">Playcount</span>
                <br />
                <span className="txt_white txt_normal fnt_black">
                  {" "}
                  {artist?.stats?.playcount &&
                    artist?.stats?.playcount
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
            </div>

            {/* <div className="col-12">
              <div className="row pad16 mabo16">
                <div className="mr-4">
                  <img
                    src="../images/12mag-sza-mobileMasterAt3x.jpg"
                    width="100"
                    height="100"
                    alt=""
                    className="mato8 object-fit"
                  />
                </div>
                <div className="mato16">
                  <span className="txt_small txt_grey_white">
                    LATEST RELEASE
                  </span>
                  <br />
                  <span className="txt_white txt_normal fnt_black">123K</span>
                  <br />
                  <span className="txt_small txt_white">22 Mar 2023</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container-fluid" id="section_breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col-md-5 pad0">
              <div className="col-md-12 txt_normal txt_grey_hard">
                {artist?.bio?.summary}
              </div>
              <div className="col-md-12 mato16">
                {artist?.tags?.tag?.slice(0, 4)?.map((tag: any) => (
                  <Link
                    href={tag.url}
                    className="formats txt_info txt_grey mr-2"
                  >
                    {tag?.name}
                  </Link>
                ))}
                {/* <span className="formats txt_info txt_grey mr-2"> k-pop </span>
                <span className="formats txt_info txt_grey mr-2"> bts </span>
                <span className="formats txt_info txt_grey mr-2"> korean </span>
                <span className="formats txt_info txt_grey mr-2"> jimin </span> */}
              </div>
            </div>
            <div className="col-md-3">
              <p className="">
                <span className="txt_normal fnt_black txt_grey_hard mr-5">
                  Published &nbsp;&nbsp;&nbsp;
                </span>
                <span className="txt_normal txt_grey_hard">
                  {" "}
                  {artist?.bio?.published}
                </span>
              </p>
              {/* <p className="">
                <span className="txt_normal fnt_black txt_grey_hard mr-5">
                  Born In
                </span>
                <span className="txt_normal txt_grey_hard">Rwanda</span>
              </p> */}
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
                  <Link
                    href={routes.artists.url}
                    className="btn txt_content"
                  >{`View all Artists >>`}</Link>
                </div>
              </div>

              <div className="row mabo16">
                {artist?.similar?.artist?.slice(0, 3)?.map((artist: any) => (
                  <div className="col-12 col-lg-4 col-md-4 col-sm-12 mabo8">
                    <Link href={artist?.url}>
                      <img
                        className="rounded-circle mabo16 object-fit"
                        alt="avatar1"
                        src="../images/bts.jpeg"
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
            {/* <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="pad0">
                <p className="txt_title txt_black">Top Tracks</p>
              </div>
              <div className="outer_card">
                <div className="row pad16">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="mr-4">
                        <div className="mato32">
                          <span className="txt_normal txt_grey"> 1</span>
                        </div>
                      </div>
                      <div className="mr-4">
                        <img
                          src="../images/bts.jpeg"
                          width="60"
                          height="60"
                          alt=""
                          className="rounded mato8"
                        />
                      </div>
                      <div className="mr-4 mato16">
                        <div className="mato16 ml-3">
                          <span className="txt_normal fnt_black txt_black">
                            Set me free
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
                          320,909,909 Listeners
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="outer_card">
                <div className="row pad16">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="mr-4">
                        <div className="mato32">
                          <span className="txt_normal txt_grey"> 2</span>
                        </div>
                      </div>
                      <div className="mr-4">
                        <img
                          src="../images/bts.jpeg"
                          width="60"
                          height="60"
                          alt=""
                          className="rounded mato8"
                        />
                      </div>
                      <div className="mr-4 mato16">
                        <div className="mato16 ml-3">
                          <span className="txt_normal fnt_black txt_black">
                            Set me free
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div
                        className="mato16 ml-3 listeners"
                        style={{ width: "75%" }}
                      >
                        <span className="txt_normal fnt_light txt_black">
                          320,909
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="outer_card">
                <div className="row pad16">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="mr-4">
                        <div className="mato32">
                          <span className="txt_normal txt_grey"> 3</span>
                        </div>
                      </div>
                      <div className="mr-4">
                        <img
                          src="../images/bts.jpeg"
                          width="60"
                          height="60"
                          alt=""
                          className="rounded mato8"
                        />
                      </div>
                      <div className="mr-4 mato16">
                        <div className="mato16 ml-3">
                          <span className="txt_normal fnt_black txt_black">
                            Set me free
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="row">
                      <div
                        className="mato16 ml-3 listeners"
                        style={{ width: "50%" }}
                      >
                        <span className="txt_normal fnt_light txt_black">
                          320{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-12">
              <div className="pad0">
                <p className="txt_title txt_black">Albums</p>
              </div>

              <div className="row mabo16 mato32">
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 mabo24">
                  <a href={routes.album.url}>
                    <img
                      className="rounded mabo16 object-fit"
                      alt="avatar1"
                      src="../images/bts.jpeg"
                      height="150"
                      width="100%"
                    />
                    <div className="row pad0">
                      <div className="col-md-10">
                        <span className="txt_normal fnt_black txt_black mabo8">
                          Set me free pt 2{" "}
                        </span>
                        <br />
                        <span className="txt_small txt_grey_hard mabo8">
                          111,232 Listeners{" "}
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
                  </a>
                </div>
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 mabo24">
                  <a href={routes.album.url}>
                    <img
                      className="rounded mabo16 object-fit"
                      alt="avatar1"
                      src="../images/drake.jpg.webp"
                      height="150"
                      width="100%"
                    />
                    <div className="row pad0">
                      <div className="col-md-10">
                        <span className="txt_normal fnt_black txt_black mabo8">
                          Set me free pt 2{" "}
                        </span>
                        <br />
                        <span className="txt_small txt_grey_hard mabo8">
                          111,232 Listeners{" "}
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
                  </a>
                </div>
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 mabo24">
                  <img
                    className="rounded mabo16 object-fit"
                    alt="avatar1"
                    src="../images/ts.webp"
                    height="150"
                    width="100%"
                  />
                  <div className="row pad0">
                    <div className="col-md-10">
                      <span className="txt_normal fnt_black txt_black mabo8">
                        Set me free pt 2{" "}
                      </span>
                      <br />
                      <span className="txt_small txt_grey_hard mabo8">
                        111,232 Listeners{" "}
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
                </div>
                <div className="col-12 col-lg-6 col-md-12 col-sm-12 mabo24">
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
                        Set me free pt 2{" "}
                      </span>
                      <br />
                      <span className="txt_small txt_grey_hard mabo8">
                        111,232 Listeners{" "}
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
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArtist;
