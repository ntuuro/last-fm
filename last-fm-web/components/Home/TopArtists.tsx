/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import axios from "axios";
import { routes } from "../lib/route-config";
import Link from "next/link";

const TopArtists = () => {
  const [topArtistsArray, setTopArtistsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // console.log("topArtistsArray", topArtistsArray);
  // console.log(process.env.NEXT_PUBLIC_URL);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_URL + "/api/artist")
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
    <div className="container-fluid" id="section_services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <p className="txt_title txt_red mabo32 text-center">Top Artists</p>
          </div>
        </div>
        <div className="col-12 pad0">
          {isLoading ? (
            <div>
              <span>Loading...</span>
            </div>
          ) : (
            <div className="row mabo16">
              {topArtistsArray?.slice(0, 8)?.map((item: any) => (
                <div
                  key={item?.mbid}
                  className="col-12 col-lg-3 col-md-4 col-sm-12 mabo8"
                >
                  <Link href={`${routes.artist.url}?artist=${item?.mbid}`}>
                    <img
                      className="rounded-circle mabo16"
                      alt="avatar1"
                      src="images/noImage.webp"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      width="255"
                      height="255"
                    />
                    <p className="txt_normal_2 txt_black mabo8">{item?.name}</p>
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
                      playcount
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="row pad16 float-right">
            <div className="col-12 col-lg-12 col-md-4 col-sm-12">
              <Link href={routes.artists.url} className="txt_content txt_red">
                {` View all Artists >>`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
