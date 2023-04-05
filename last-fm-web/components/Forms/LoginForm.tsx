/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { routes } from "../lib/route-config";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginURL, setLoginURL] = useState("");

  function handleLoginWithGoogle() {
    setIsLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/api/auth`)
      .then((response) => {
        const data = response.data;
        setLoginURL(data?.url);
        setIsLoading(false);
        window.open(data?.url);
      })
      .catch((error) => {
        return error;
      });
  }

  return (
    <div className="container align-self-center">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
          <div className="login_card">
            <div className="row pad16">
              <div className="col-md-12">
                <p className="txt_small fnt_black txt_black">
                  Username or Email
                </p>
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control input_normal txt_content txt_black"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="row pad16">
              <div className="col-md-12">
                <p className="txt_small fnt_black txt_black">Password</p>
              </div>
              <div className="col-md-12">
                <input
                  type="password"
                  className="form-control input_normal txt_content txt_black"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
            <div className="row pad16">
              <div className="col-md-12 mabo24">
                <button className="btn btn_red mr-4">LET ME IN</button>
                <Link href={routes.forgot.url} className="txt_content">
                  Forgot Username or Password?
                </Link>
              </div>

              <div onClick={handleLoginWithGoogle} className="col-md-12 mabo24">
                <button disabled={isLoading} className="btn btn_outline">
                  <img
                    className="google-icon mr-2"
                    src="images/Google__G__Logo.svg"
                    width="20"
                    height="20"
                  />
                  <span className="mato16">
                    {isLoading ? "HANG ON..." : "LOGIN IN WITH GOOGLE"}
                  </span>
                </button>
              </div>

              <div className="col-md-12">
                <span className="txt_content">Don't have profile</span>
                <Link href={routes.signup.url} className="txt_content">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
