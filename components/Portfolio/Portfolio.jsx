import Image from 'next/image'
import style from '/styles/LandingPage/Portfolio.module.css'
import img1 from '/Images/Portfolio/Group 162508.svg'
import img2 from '/Images/Portfolio/Group 162509.svg'
import img3 from '/Images/Portfolio/Group 162510.svg'
import img4 from '/Images/Portfolio/Group 162512.svg'

function Portfolio() {
  return (
    <div className={style.parent}>
        <p>Our Awesome Portofolio</p>
        <div className={style.cardsParent}>
            <Image src={img1} alt='portfolio1' />
            <Image src={img2} alt='portfolio2' />
            <Image src={img3} alt='portfolio3' />
        </div>
            <Image src={img4} alt='ooo' />
    </div>
  )
}

export default Portfolio