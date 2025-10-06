import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Navbar> </Navbar>
      <Outlet> </Outlet>
      <Footer> </Footer>
    </div>
  );
};

export default Root;
