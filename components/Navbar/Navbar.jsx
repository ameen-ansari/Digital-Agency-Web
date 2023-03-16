import style from "/styles/LandingPage/Navbar.module.css";
import logo from "/Images/Navbar/logo (2).svg";
import union from "/Images/Navbar/Sort.svg";
import Image from "next/image";

function Navbar() {
  return (
    <div className={style.parent}>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div>
        <p>Home</p>
        <p>Services</p>
        <p>Our Projects</p>
        <p>About Us</p>
      </div>
      <div>
        <div className={`${style.dropdown} ${style.dropdown}`}>
          <p>More</p>
          <ul className={`${style.dropdownC}`}>
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>Services</p>
            </li>
            <li>
              <p>Our Projects</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
          </ul>
        </div>
        <button>Contact us</button>
        <Image src={union} alt="union" />
      </div>
    </div>
  );
}

export default Navbar;
