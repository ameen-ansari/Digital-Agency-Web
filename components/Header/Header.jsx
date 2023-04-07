import Image from "next/image";
import style from "/styles/LandingPage/Header.module.css";
import arow from "/Images/Header/arrow-right-up.svg";
import img from "/Images/Header/Group 162534.svg";
import img1 from "/Images/Header/Icon.svg";
import img2 from "/Images/Header/Vector 13.svg";
import img3 from "/Images/Header/Group 162526.svg";
import img4 from "/Images/Header/Group 162527.svg";
import shade1 from "/Images/Header/Rectangle 9521.svg";
import shade2 from "/Images/Header/Rectangle 9522.svg";

function Header() {
  return (
    <div className="relative">
      <div className={style.parent}>
        <div>
          <p>Build Your Awesome Platform</p>
          <p>
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <button>
            Our Services <Image src={arow} alt="arrow" />
          </button>
        </div>
        <div>
          <Image className={style.img1} src={img1} alt="star" />
          <Image className={style.img2} src={img2} alt="triangle" />
          <Image className={style.img3} src={img3} alt="circles" />
          <Image className={style.img4} src={img4} alt="trade" />
          <Image src={img} alt="Men" />
      <Image className={style.shade3} src={shade2} alt="shade1" />
        </div>
      </div>
      <Image className={style.shade1} src={shade1} alt="shade1" />
      <Image className={style.shade2} src={shade2} alt="shade1" />
    </div>
  );
}

export default Header;
