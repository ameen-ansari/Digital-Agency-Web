import React, { useState } from "react";
import Slider from "react-slick";
import style from "./SliderForDesktop.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../Images/Portfolio/Group 162508.svg";
import img2 from "../../../Images/Portfolio/Group 162509.svg";
import img3 from "../../../Images/Portfolio/Group 162510.svg";
import Image from "next/image";

// export default class SimpleSlider extends Component {

//   render() {
//     const settings = {
//       dots: true,
//       appendDots: (dots) => (
//         <div style={{ margin: "0px" }}>
//           <ul className={style.dots} style={{ display: "block" }}> {dots} </ul>
//         </div>
//       ),
//       customPaging: (i) => (
//         <div className="dot">{i + 1}</div>
//       ),
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       arrows:false
//     };
//     return (
//       <div style={{width:'100vw'}} className={style.cardsParent12}>
//         <Slider {...settings}   afterChange={(index) => setActiveSlide(index)}
//       appendDots={(dots) => (
//         <div style={{ marginTop: 10 }}>
//           <ul style={{ margin: 0 }}>{dots}</ul>
//         </div>
//       )}>
//             <Image className={style.img1} src={img1} alt={"portfolio1"} />
//             <Image className={style.img2} src={img2} alt={"portfolio1"} />
//             <Image className={style.img3} src={img3} alt={"portfolio1"} />
//             <Image className={style.img4} src={img1} alt={"portfolio1"} />
//         </Slider>
//       </div>
//     );
//   }
// }

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const settings = {
//   dots: true,
//   customPaging: (i) => (
//     <div className="dot">{i + 1}</div>
//   ),
// };

function MySlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (i , s) {
      return (
        <p className={`${currentSlide == i ? style.active : style.dot}`} onClick={() => setCurrentSlide(i)}/>
      );
    },
    appendDots: function (dots) {
      return (
        <ul className={style.dotsContainer}>
          {dots}
        </ul>
      );
    },
    afterChange: (current) => {
      setCurrentSlide(current);
    }
  };

  return (
    <div style={{ width: "100vw" }} className={style.cardsParent12}>
      <Slider {...settings} >
        <Image className={style.img1} src={img1} alt={"portfolio1"} />
        <Image className={style.img2} src={img2} alt={"portfolio1"} />
        <Image className={style.img3} src={img3} alt={"portfolio1"} />
        <Image className={style.img4} src={img1} alt={"portfolio1"} />
      </Slider>
    </div>
  );
}

export default MySlider;
