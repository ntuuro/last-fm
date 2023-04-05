/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { routes } from "../lib/route-config";
import axios from "axios";
import Router from "next/router";

const Nav = () => {
  const items = JSON.parse(localStorage.getItem("data"));

  function handleLogout() {
    axios
      .get(process.env.NEXT_PUBLIC_URL + "/api/logout")
      .then(() => {
        localStorage.removeItem("data");
        Router.push("/login");
      })
      .catch((error) => {
        return error;
      });
  }
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light gov_navbar">
      <div className="container-fluid gov_container">
        <a className="navbar-brand" href="#">
          <img src="images/lastfm_logo.png" height="30px" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link main_option" href={routes.home.url}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item">
              {/* <Link
                className={`nav-link main_option ${
                  routes.tracks.url === "/tracks" ? "active" : ""
                }`}
                href={routes.tracks.url}
              >
                Music
              </Link> */}
              <Link className="nav-link main_option" href={routes.tracks.url}>
                Music
              </Link>
            </li>

            <li className="nav-item">
              {/* <Link
                className={`nav-link main_option ${
                  routes.tracks.url === "/tracks" ? "active" : ""
                }`}
                href={routes.tracks.url}
              >
                Music
              </Link> */}
              <Link className="nav-link main_option" href={routes.artists.url}>
                Artists
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link main_option" href={routes.albums.url}>
                Albums
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link main_option" href={routes.charts.url}>
                Charts
              </Link>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link main_option" href="#/">
                About
              </a>
            </li> */}
          </ul>

          {items && !items.error ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/profile">
                  <div className="row pad0">
                    <img
                      className="rounded-circle"
                      alt="avatar1"
                      src="../images/bts.jpeg"
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      width="50"
                      height="50"
                    />
                    <span className="nav-link gov_link mato8">
                      {items?.user?.name}
                    </span>
                  </div>
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link txt_black mato8">|</a>
              </li>

              <li className="nav-item dropdown">
                <div className="col-12 text-center">
                  <a onClick={handleLogout} className="btn btn_red">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link gov_link" href="https://last.fm">
                  Last.fm(OG)
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link gov_link" href="/profile">
                  Profile(WIP)
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link txt_black">|</a>
              </li>

              <li className="nav-item dropdown">
                <div className="col-12 text-center">
                  <Link href={routes.login.url} className="btn btn_red">
                    Login
                  </Link>
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
