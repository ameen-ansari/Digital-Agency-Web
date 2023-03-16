import Image from 'next/image'
import style from '/styles/LandingPage/Contact.module.css'
import img1 from '/Images/Header/Group 162526.svg'
import img2 from '/Images/Header/Icon.svg'

function Contact() {
  return (
    <div className={style.parent}>
        <p>Contact us for the service you want to use</p>
        <div>
        <button>Contact us</button>
        </div>
        <Image className={style.img1} src={img1} alt='Floter' />
        <Image className={style.img2} src={img2} alt='Floter' />
    </div>
  )
}

export default Contact