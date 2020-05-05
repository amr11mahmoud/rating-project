import React from "react";
import { Fade } from "react-slideshow-image";

const fadeImages = [
  "https://m.media-amazon.com/images/I/71Eh6YWqqyL._AC_UY218_.jpg",
  "https://m.media-amazon.com/images/I/71Eh6YWqqyL._AC_UY218_.jpg",
  "https://m.media-amazon.com/images/I/71Eh6YWqqyL._AC_UY218_.jpg",
  "https://m.media-amazon.com/images/I/71Eh6YWqqyL._AC_UY218_.jpg",
  "https://m.media-amazon.com/images/I/71Eh6YWqqyL._AC_UY218_.jpg",
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
  },
};

const Slideshow = (props) => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={props.images} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
