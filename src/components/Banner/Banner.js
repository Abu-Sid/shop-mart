import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideOne from "../../assets/Images/1.jpg";
import slideTwo from "../../assets/Images/2.jpg";
import slideThree from "../../assets/Images/3.jpg";
import "./Banner.css";


const carouselImages = [slideOne, slideTwo, slideThree];
const Banner = () => {
    return (
        <Carousel
        className="home__carousel"
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        interval={5000}
        transitionTime={200}
      >
        {carouselImages.map((carouselImage) => (
          <div>
            <img src={carouselImage} alt="carousel" />
          </div>
        ))}
      </Carousel>
    );
};

export default Banner;