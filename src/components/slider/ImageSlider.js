import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css";
import sprite from "./sprite.svg";


// const images = [
//   "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
//   "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652366604/demo_image5.jpg",
//   "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
// ];

import image1 from "../../assets/xpay/Screenshot (13).png";
import image2 from "../../assets/xpay/Screenshot (14).png";
import image3 from "../../assets/xpay/Screenshot (13).png";
import image4 from "../../assets/xpay/Screenshot (16).png";
import image5 from "../../assets/xpay/Screenshot (13).png";
import image6 from "../../assets/xpay/Screenshot (18).png";
import image7 from "../../assets/xpay/Screenshot (19).png";
import image8 from "../../assets/xpay/Screenshot (13).png";
import image9 from "../../assets/xpay/Screenshot (14).png";
import image10 from "../../assets/xpay/Screenshot (22).png";
import image11 from "../../assets/xpay/Screenshot (14).png";
import image12 from "../../assets/xpay/Screenshot (13).png";
import image13 from "../../assets/xpay/Screenshot (14).png";
import image14 from "../../assets/xpay/Screenshot (26).png";
import image15 from "../../assets/xpay/Screenshot (27).png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15];

function ImageSlider() {
  const rotateAnimationHandler = (props, state) => {
    const transitionTime = props.transitionTime + "ms";
    const transitionTimingFunction = "ease-in-out";
    let slideStyle = {
      display: "block",
      minHeight: "100%",
      transitionTimingFunction: transitionTimingFunction,
      msTransitionTimingFunction: transitionTimingFunction,
      MozTransitionTimingFunction: transitionTimingFunction,
      WebkitTransitionTimingFunction: transitionTimingFunction,
      OTransitionTimingFunction: transitionTimingFunction,
      transform: `rotate(0)`,
      position:
        state.previousItem === state.selectedItem ? "relative" : "absolute",
      inset: "0 0 0 0",
      zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
      opacity: state.previousItem === state.selectedItem ? "1" : "0",
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        opacity: 1,
        position: "relative",
        zIndex: 2,
        filter: `blur(0)`,
      },
      prevStyle: {
        ...slideStyle,
        transformOrigin: " 0 100%",
        transform: `rotate(${
          state.previousItem > state.selectedItem ? "-45deg" : "45deg"
        })`,
        opacity: "0",
        filter: `blur( ${
          state.previousItem === state.selectedItem ? "0px" : "5px"
        })`,
      },
    };
  };
  return (
    <div className="box">
      <Carousel
        showIndicators
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button className="nav_btn nav_btn_right" onClick={clickHandler}>
                <svg>
                  <use xlinkHref={sprite + "#right"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderArrowPrev={(clickHandler, hasNext) => {
          return (
            hasNext && (
              <button onClick={clickHandler} className="nav_btn nav_btn_left">
                <svg>
                  <use xlinkHref={sprite + "#left"}></use>
                </svg>
              </button>
            )
          );
        }}
        renderIndicator={(clickHandler, isSelected, index) => {
          return (
            <li
              onClick={clickHandler}
              className={`ind ${isSelected ? "active" : ""}`}
              key={index}
              role="button"
            />
          );
        }}
        statusFormatter={(currentItem, total) => {
          return (
            <p>
              image {currentItem} of {total}
            </p>
          );
        }}
        transitionTime={310}
        animationHandler={rotateAnimationHandler}
        swipeable={false}
      >
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default ImageSlider;
