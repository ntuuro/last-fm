/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useState } from "react";
import { routes } from "../lib/route-config";

/* eslint-disable react/no-unescaped-entities */
const SignupForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log(`Name: ${userName}, Email: ${email}`);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="container align-self-center">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="login_card">
              <div className="row pad16">
                <div className="col-md-12">
                  <p className="txt_small fnt_black txt_black">Username</p>
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control input_normal txt_content txt_black"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="username"
                    onChange={(event) => setUserName(event.target.value)}
                  />
                </div>
              </div>
              <div className="row pad16">
                <div className="col-md-12">
                  <p className="txt_small fnt_black txt_black">Email</p>
                </div>
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control input_normal txt_content txt_black"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
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
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>
              <div className="row pad16">
                <div className="col-md-12">
                  <p className="txt_small fnt_black txt_black">
                    Confirm Password
                  </p>
                </div>
                <div className="col-md-12">
                  <input
                    type="password"
                    className="form-control input_normal txt_content txt_black"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    name="cPassword"
                    onChange={(event) => setCPassword(event.target.value)}
                  />
                </div>
              </div>
              <div className="row pad16">
                <div className="col-md-12 mabo24">
                  <button className="btn btn_red mr-4 text-uppercase">
                    Sign up
                  </button>
                  <Link href={routes.login.url} className="txt_content">
                    Have an account? Login
                  </Link>
                </div>

                <div className="col-md-12 mabo24">
                  <button className="btn btn_outline">
                    <img
                      className="google-icon mr-2"
                      src="images/Google__G__Logo.svg"
                      width="20"
                      height="20"
                    />
                    <span className="mato16"> SIGN UP WITH GOOGLE</span>
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
    </form>
  );
};

export default SignupForm;
