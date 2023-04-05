import React, { useEffect, useState } from "react";
import { routes } from "../lib/route-config";
import axios from "axios";

const InterestingStats = () => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/artist`)
      .then((response) => {
        const TopTracksResponse = response.data;
        setStats(TopTracksResponse?.payload[1]?.tracks["@attr"]["total"]);
        setIsLoading(false);
      })
      .catch((error) => {
        return error;
      });
  }, []);
  return (
    <div className="container-fluid bg_red_hard" id="section_updates">
      <div className="container pad0 main-content">
        <div className="row pad16 centering">
          <div className="col-12 col-lg-6 col-md-6 col-sm-12">
            <p className="txt_title txt_white">Interesting Stats</p>
            <p className="txt_small txt_white mabo32">
              A live global counter showing the total number of tracks listened
              to by Last.fm users since 2003
            </p>
          </div>
          <div className="col-12 col-lg-6 col-md-6 col-sm-12 text-right centering">
            <div className="row pad0">
              {/* <div className="col-lg-4 txt_white">
                <p className="txt_head_2">4,324</p>
                <p className="txt_normal">Artists</p>
              </div> */}

              <div className="col-lg-4 txt_white">
                <p className="txt_head_2">
                  {stats &&
                    stats?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
                <p className="txt_normal">Tracks</p>
              </div>

              {/* <div className="col-lg-4 txt_white">
                <p className="txt_head_2">43</p>
                <p className="txt_normal">Albums</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestingStats;
