import React, { FC } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

type props = {
  children: React.ReactNode;
};

const AppLayout: FC<props> = ({ children }) => {
  return (
    <div id="page-top" className="index">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
