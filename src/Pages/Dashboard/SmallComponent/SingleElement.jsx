import React from "react";
import "../All-Dashboard-css/singleElement.css";

const SingleElement = ({ images, name, number }) => {
  return (
    <>
      <div className="singleElement">
        <div>
          <h1>{number}</h1>
          <h2>{name}</h2>
        </div>
        <img src={images} alt="imgone" className="singleimg" />
      </div>
    </>
  );
};

export default SingleElement;
