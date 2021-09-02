import React from "react";
import { Carousel } from "antd";

import imgSlider1 from "assets/images/star1.jpg";
import imgSlider2 from "assets/images/img2.jpg";
import imgSlider3 from "assets/images/img3.jpg";
import "./movie-slider.scss";

export default () => {
  return (
    <Carousel autoplay className="movie-slider">
      <div className="movie-slider__poster">
        <img src={imgSlider1} alt="star-wars1" />
      </div>
      <div className="movie-slider__poster">
        <img src={imgSlider2} alt="star-wars2" />
      </div>
      <div className="movie-slider__poster">
        <img src={imgSlider3} alt="star-wars1" />
      </div>
    </Carousel>
  );
};
