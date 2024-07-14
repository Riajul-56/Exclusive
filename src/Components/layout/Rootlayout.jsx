import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "../Footer";

const Rootlayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Rootlayout;
