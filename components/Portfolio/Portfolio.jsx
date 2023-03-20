import Image from "next/image";
import style from "/styles/LandingPage/Portfolio.module.css";
import img1 from "/Images/Portfolio/Group 162508.svg";
import img2 from "/Images/Portfolio/Group 162509.svg";
import img3 from "/Images/Portfolio/Group 162510.svg";
import img4 from "/Images/Portfolio/Group 162512.svg";
import Slider from "./Slider/Slider";
import img5 from '../../Images/Header/Vector 13.svg'
import img6 from '../../Images/Header/Group 162526.svg'
import SliderForDEsktop from "./Slider/SliderForDesktop";

function Portfolio() {
    let images = [
        img1 ,
        img2 ,
        img3 ,
    ]
  return (
    <div className={style.parent}>
      <p>Our Awesome Portofolio</p>
      <SliderForDEsktop />
      <Image style={{display:'none'}} src={img4} alt="ooo" />
      <Slider images={images} />
      <Image className={style.img1} src={img5} alt="ooo" />
      <Image className={style.img2} src={img6} alt="ooo" />
    </div>
  );
}

export default Portfolio;
