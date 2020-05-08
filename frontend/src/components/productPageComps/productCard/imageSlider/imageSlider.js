import React from "react";
import { Fade } from "react-slideshow-image";

const fadeImages = [];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
  },
};

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}


const Slideshow = (props) => {
  let images = []
  let updatedImages = []
  if (props.images) {
    images = props.images.split("jpg")
    for (let i in images) {
      images[i] = images[i] + 'jpg'
      if (images[i].includes("https://images-na.ssl-images-amazon.com")) {
        // prepare the images array
        images[i] = replaceAll(images[i], '"', "")
        images[i] = replaceAll(images[i], ',', "")
        images[i] = replaceAll(images[i], "'", "")
        images[i] = replaceAll(images[i], " ", "")
        images[i] = replaceAll(images[i], "[", "")
        images[i] = replaceAll(images[i], "]", "")
        updatedImages.push(images[i])
      }
    }
  }
  console.log(updatedImages)
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={images[0]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={images[1]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={images[2]} />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={images[3]} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
