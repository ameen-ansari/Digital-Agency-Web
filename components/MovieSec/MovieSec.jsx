import Image from "next/image";
import img from "/Images/Header/BG (3).svg";
import style from "@/styles/LandingPage/MovieSec.module.css";

function MovieSec() {
  return (
    <div className={style.parent}>
      <div>
        <p>Why Enver Is The Best Choice?</p>
        <p>
          Watch this one minute video so you understand why you should use our
          services!
        </p>
      </div>
      <div>
        <Image src={img} alt="video" />
      </div>
    </div>
  );
}

export default MovieSec;
