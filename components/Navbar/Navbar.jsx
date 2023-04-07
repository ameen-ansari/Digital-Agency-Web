import style from "/styles/LandingPage/Navbar.module.css";
import logo from "/Images/Navbar/logo (2).svg";
import union from "/Images/Navbar/Sort.svg";
import Image from "next/image";

function Navbar() {
  let showOffC = () => {
    let offC = document.getElementById("offC");
    offC.style.top = "0vh";
    offC.style.display = "flex";
    offC.style.transition = "0.2s";
  };
  let removeOffC = () => {
    let offC = document.getElementById("offC");
    console.log('jkhfjds');
    offC.style.top = "-100vh";
    offC.style.transition = "0.2s";
  };
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
        <Image style={{cursor:'pointer',position:'relative' ,zIndex:'1231231'}} onClick={showOffC} src={union} alt="union" />
      </div>
      <div id="offC" className={style.offcanvas}>
        <div>
          <p className={style.cencel} onClick={removeOffC} >
            X
          </p>
          <p
            style={{ cursor: "pointer" }}
          >
            Home
          </p>
          <p
            style={{ cursor: "pointer" }}
          >
            Services
          </p>
          <p>Our Projects</p>
          <p>About Us</p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
