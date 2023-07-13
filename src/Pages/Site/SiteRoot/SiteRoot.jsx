import React from "react";
import Header from "../../../components/Site/Header/Header";
import Footer from "../../../components/Site/Footer/Footer";
import { Outlet } from "react-router-dom";

const SiteRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SiteRoot;
