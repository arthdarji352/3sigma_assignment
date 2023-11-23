import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <>
      <div className="container d-flex justify-content-between align-items-center mt-3">
        <p className="title">Magnabox Private limited</p>
        <img src={logo} alt="logo" className="logo" />
      </div>
    </>
  );
};

export default Header;
