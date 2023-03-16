import Image from "next/image";
import React, { useState } from "react";
import img from "../../../Images/Portfolio/Icon (7).svg";
import style from "./Slider.module.css";

const Slider = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? props.images.length - 1 : currentImageIndex - 1
    );
    console.log(currentImageIndex);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === props.images.length - 1 ? 0 : currentImageIndex + 1
    );
    console.log(currentImageIndex);
  };

  return (
    <div className={style.parent}>
      <Image src={props.images[currentImageIndex]} alt="slider" />
      <div>
        <span onClick={handlePreviousImage}>
          <Image src={img} alt="slider" />
        </span>
        <span onClick={handleNextImage}>
          <Image src={img} alt="slider" />
        </span>
      </div>
    </div>
  );
};

export default Slider;
