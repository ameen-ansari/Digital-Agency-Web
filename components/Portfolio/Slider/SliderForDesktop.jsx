import React, { Component } from "react";
import Slider from "react-slick";
import style from "./SliderForDesktop.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Images/Portfolio/Group 162508.svg";
import img2 from "../../../Images/Portfolio/Group 162509.svg";
import img3 from "../../../Images/Portfolio/Group 162510.svg";
import Image from "next/image";

export default class SimpleSlider extends Component {
  render() {
    const settings = {

      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:false
    };
    return (
      <div style={{width:'100vw'}} className={style.cardsParent12}> 
        <Slider {...settings}>
          <div className={style.div1}>
            <Image src={img1} alt={"portfolio1"} />
          </div>

          <div>
            <Image src={img2} alt={"portfolio1"} />
          </div>
          <div className={style.div3}>
            <Image src={img3} alt={"portfolio1"} />
          </div>
          <div className={style.div4}>
            <Image src={img1} alt={"portfolio1"} />
          </div>
        </Slider>
      </div>
    );
  }
}
