import Image from "next/image";
import img from "/Images/Header/BG (3).svg";
import style from "@/styles/LandingPage/MovieSec.module.css";

function MovieSec() {

  let src = "https://youtu.be/vClv4Q2hSgo"
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
      <iframe
          src="https://www.youtube-nocookie.com/embed/ToZSFHUJdHM"
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default MovieSec;
