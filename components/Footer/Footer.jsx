import Image from "next/image";
import style from "/styles/LandingPage/Footer.module.css";
import logo from "/Images/Navbar/logo (2).svg";

function Footer() {
  return (
    <div className={style.parent}>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div>
        <p>Support</p>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
      </div>
      <div className="flex justify-center align-middle">
        <p>© 2020 Enver, All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
