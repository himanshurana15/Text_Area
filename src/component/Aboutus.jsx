/* eslint-disable react/prop-types */
// import React from "react";

// import { useState } from "react";

export default function Aboutus(props) {
  let MyStyle = {
    color: props.mode === " dark" ? "white" : "#042743",
    backgroundColor: props.mode === " dark" ? "rgb(36 74 104)" : "white",
    // borderColor: props.mode === " dark" ? "rgb(36 74 104)" : "#042743",
  };


  return (
    <>
      <div
        className="accordion accordion-flush"
        id="accordionFlushExample"
        style={{ color: props.mode === " dark" ? "white" : "#042743" }}
      >
        <h1 className="my-3">About us</h1>
        <div className="accordion-item" style={MyStyle}>
          <h2 className="accordion-header">
            <button
              style={MyStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <strong>Anaylys your text</strong>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={MyStyle}>
              this is my new webiste which is used to covert uppercase to
              lowercase
            </div>
          </div>
        </div>
        <div className="accordion-item" style={MyStyle}>
          <h2 className="accordion-header" style={MyStyle}>
            <button
              style={MyStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            style={MyStyle}
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={MyStyle}>
              this is my new webiste which is used to covert uppercase to
              lowercase
            </div>
          </div>
        </div>
        <div className="accordion-item" style={MyStyle}>
          <h2 className="accordion-header">
            <button
              style={MyStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              this is my new webiste which is used to covert uppercase to
              lowercase
            </div>
          </div>
        </div>
        {/* <button
          type="button"
          onClick={ToggleStyle}
          className="btn btn-primary mx-2"
        >
          {btnText}
        </button> */}
      </div>
    </>
  );
}
