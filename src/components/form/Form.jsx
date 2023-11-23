import React from "react";
import "./form.css";
import Cancel from "../cancel/Cancel";
import Input from "../input/Input";

const Form = () => {
  return (
    <>
      <div className="container">
        <div className="formTop">
          <p className="formTitle">Add new lead form </p>
          <Cancel />
        </div>
        <Input />
      </div>
    </>
  );
};

export default Form;
