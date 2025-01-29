// src/components/HeroSection/HeroSection.jsx
import s from './HeroSection.module.css'
import heroImage from '../../../assets/images/heroImage.jpg'
import { NavLink } from "react-router-dom"

const HeroSection = () => {
    return (
        <section className={s.heroSection} style={{ backgroundImage: `url(${heroImage})` }}>

            <div className={s.textBox}>
                <h1 className={s.h1}>Campers of your dreams</h1>
                <p className={s.text}>You can find everything you want in our catalog</p>

                <NavLink to='/catalog' className={s.btn}>View Now</NavLink>
            </div>



        </section>
    )
}

export default HeroSection
