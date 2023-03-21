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
        <iframe src="https://youtu.be/embed/vClv4Q2hSgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen >
        </iframe>
      </div>
    </div>
  );
}

export default MovieSec;
