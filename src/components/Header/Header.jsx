//src/components/Header/Header.jsx
import { NavLink } from "react-router-dom";
import s from './Header.module.css'


const Header = () => {
    return (
        <div className={s.header}>
            <NavLink to='/' className={s.logo}>Travel<span className={s.spanLogo}>Trucks</span></NavLink>

            <div>
                <NavLink to="/" className={s.LinkBtn}>Home</NavLink>
                <NavLink to="/catalog" className={s.LinkBtn}>Catalog</NavLink>
            </div>



        </div>
    )
}

export default Header
