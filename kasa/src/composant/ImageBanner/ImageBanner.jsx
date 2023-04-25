import React from "react";
import "./ImageBanner.css";
function ImageBanner(props) {
  return (
    <div>
      <img src={props.imageURL} alt="" className="image" />
    </div>
  );
}
export default ImageBanner;
