import React from "react";
import Header from "../../../components/Admin/Header/Header";
import Footer from "../../../components/Admin/Footer/Footer";
import { Outlet } from "react-router-dom";

const AdminRoot = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminRoot;
