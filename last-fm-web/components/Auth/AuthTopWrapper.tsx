import React, { FC } from "react";

type props = {
  title: string;
  children: React.ReactNode;
};

const AuthTopWrapper: FC<props> = ({ title, children }) => {
  return (
    <div className="container-fluid" id="section_services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <p className="txt_title txt_red mabo32 text-center">{title}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthTopWrapper;
