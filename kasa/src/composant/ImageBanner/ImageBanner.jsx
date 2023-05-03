import React, { useState } from "react";
import "./ImageBanner.css";
function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    if (i === currentPicture) return "image-show";
    return "image";
  };
  {
    /*modulo*/
  }
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
    } else {
      setCurrentPicture(
        (currentPicture + pictures.length - 1) % pictures.length
      );
    }
  };

  return (
    <div className="image-banner">
      <div className="container">
        {pictures.map((pic, i) => (
          <img src={pic} key={pic} alt="" className={getClassName(i)} />
        ))}
        <div>
          <button onClick={moveToNext} className="next">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button onClick={moveToPrevious} className="previous">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageBanner;
