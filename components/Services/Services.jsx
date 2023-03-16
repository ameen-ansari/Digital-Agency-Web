import style from "/styles/LandingPage/Services.module.css";
import Image from "next/image";
import img1 from "/Images/Services/Icon (1).svg";
import img2 from "/Images/Services/Icon (2).svg";
import img3 from "/Images/Services/Icon (3).svg";
import img4 from "/Images/Services/Icon (4).svg";
import img5 from "/Images/Services/Icon (5).svg";
import img6 from "/Images/Services/Icon (6).svg";
import plus from '/Images/Header/Icon.svg'
import tri from '/Images/Header/Group 162527.svg'

function Services() {
  return (
    <div className={style.parent}>
      <p>The Service We Provide For You</p>
          <Image className={style.tri} src={tri} alt="Image" />
      <div className={style.cardsParent}>
          <Image className={style.plus2} src={plus} alt="Image" />
          <Image className={style.plus1} src={plus} alt="Image" />
        <div className={style.card}>
          <Image src={img1} alt="Image" />
          <p>Development</p>
          <p>Create a platform with the best and coolest quality from us.</p>
        </div>
        <div className={style.card}>
          <Image src={img2} alt="Image" />
          <p>Development</p>
          <p>Create a platform with the best and coolest quality from us.</p>
        </div>
        <div className={style.card}>
          <Image src={img3} alt="Image" />
          <p>Development</p>
          <p>Create a platform with the best and coolest quality from us.</p>
        </div>
        <div className={style.card}>
          <Image src={img4} alt="Image" />
          <p>Development</p>
          <p>Create a platform with the best and coolest quality from us.</p>
        </div>
        <div className={style.card}>
          <Image src={img5} alt="Image" />
          <p>Development</p>
          <p>Create a platform with the best and coolest quality from us.</p>
        </div>
        <div className={style.card}>
          <Image src={img6} alt="Image" />
          <p>Development</p>
          <p>Create a platform with the best and coolest quality from us.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
