import React from "react";
import { Container, Carousel } from "react-bootstrap";
import Photo1 from "../../Assets/SchoolProject1.png"
import Photo2 from "../../Assets/SchoolProject2.jpeg"
import Photo3 from "../../Assets/SchoolProject3.jpeg"

import "./AcademicCarousel.css";

function AcademicCarousel() {

  return (
    <div id="academiccarousel-parent">
      <div className="my__carousel_main">
        <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Photo1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Photo2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Photo3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
      </div>
    </div>
  );
};

export default AcademicCarousel;
