import React from "react";
import "./input.css";
import star from "../../assets/star.svg";
import person from "../../assets/personsvg.svg";
import email from "../../assets/email.svg";
import phone from "../../assets/phone.svg";
import address from "../../assets/address.svg";
import sale from "../../assets/sale.svg";
import date from "../../assets/date.svg";
import time from "../../assets/time.svg";
import menu from "../../assets/menu.svg";

import map from "../../assets/Rectangle.png";

const Input = () => {
  return (
    <div className="container">
      <label htmlFor="leadname" className="input-lable">
        Lead name
        <img src={star} alt="iconrequire" className="star" />
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={person} alt="Person Icon" />
        <input
          className="form-control "
          type="text"
          name="username"
          placeholder="Enter lead name"
          required
        />
      </div>
      <label htmlFor="email" className="input-lable mt-3">
        Email ID
        <img src={star} alt="iconrequire" className="star" />
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={email} alt="Person Icon" />
        <input
          className="form-control "
          type="email"
          name="emai"
          placeholder="Example@anyemail.com"
          required
        />
      </div>
      <label htmlFor="phone" className="input-lable mt-3">
        Phone number
        <img src={star} alt="iconrequire" className="star" />
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={phone} alt="Person Icon" />
        <input
          className="form-control "
          type="text"
          name="phone"
          placeholder="+91 8800688763"
          required
        />
      </div>
      <label htmlFor="address" className="input-lable mt-3">
        Address
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={address} alt="Person Icon" />
        <input
          className="form-control "
          type="text"
          name="address"
          placeholder="Gugurgram ,India"
          required
        />
      </div>
      <div className="mt-2">
        <img src={map} alt="map" className="map" />
      </div>
      <label htmlFor="salevalue" className="input-lable mt-3">
        Sale value
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={sale} alt="Person Icon" />
        <input
          className="form-control "
          type="text"
          name="salevalue"
          placeholder="50,00,000"
          required
        />
      </div>
      <label htmlFor="date" className="input-lable mt-3">
        Date
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={date} alt="Person Icon" />
        <input
          className="form-control "
          type="date"
          name="date"
          placeholder="29 August 2023"
          required
        />
      </div>
      <label htmlFor="time" className="input-lable mt-3">
        Time
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={time} alt="Person Icon" />
        <input
          className="form-control "
          type="time"
          name="time"
          placeholder="20:21 pm"
          required
        />
      </div>
      <label htmlFor="options" className="input-lable mt-3">
        Options
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={menu} alt="Person Icon" />
        <select
          class="form-select form-control"
          aria-label="Default select example"
        >
          <option selected>Select option</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <label htmlFor="options" className="input-lable mt-3">
        Products
      </label>
      <div className="input-container mt-2">
        <img className="logoInput" src={menu} alt="Person Icon" />
        <select
          class="form-select form-control"
          aria-label="Default select example"
        >
          <option selected>Select option</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <label htmlFor="note" className="input-lable mt-3">
        Note
      </label>
      <div className="input-container mt-2 textarea">
        <textarea
          className="textarea-height"
          name="address"
          placeholder="Gugurgram ,India"
          required
        />
      </div>
      <div className="d-grid gap-2 submitbtn mt-5 mb-5">
        <button className="btn text-white" type="button">
          Button
        </button>
      </div>
    </div>
  );
};

export default Input;
