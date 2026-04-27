import { Link } from 'react-router-dom';
import navStyle from '../CSS/nav.module.css'
import logo from '../../assets/logo.png'

function Navbar(){
    return(
        <div className={navStyle.nav}>
            <Link to='/' className={navStyle.logo_link}>
                <img className={navStyle.logo} src={logo} alt="Corazon De Mexico logo" />
            </Link>
            <div className={navStyle.links}>
                <div className={navStyle.nosortos}>
                    <Link to='/Nosotros' className={navStyle.nav_link}>Nosotros</Link>
                </div>
                <div className={navStyle.gallaria}>
                    <Link to='/Galería' className={navStyle.nav_link}>Galería</Link>
                </div>
                <div className={navStyle.contacto}>
                    <Link to='/Contacto' className={navStyle.nav_link}>Contacto</Link>
                </div>
            </div>
        </div>
    )

}

export default Navbar;
