import Contact from "@/components/contact/Contact"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import MovieSec from "@/components/MovieSec/MovieSec"
import Navbar from "@/components/Navbar/Navbar"
import Portfolio from "@/components/Portfolio/Portfolio"
import Services from "@/components/Services/Services"
import style from '@/styles/Home.module.css'

function Home() {
  return (
    <div className={style.parent}>
      <Navbar />
      <Header />
      <MovieSec />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home