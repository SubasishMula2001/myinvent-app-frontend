import React from 'react';
import loaderImg from "../../assets/loader.gif";
import  ReactDOM  from 'react-dom';
import "./Loader.scss";

// Main page full screen loader
const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};
// Dashboard small screen loader
export const SpinnerImg = () => {
  return (
    <div className="--center-all">
      <img src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;