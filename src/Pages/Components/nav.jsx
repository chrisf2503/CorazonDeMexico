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
                    <Link to='/Nosotros' className="title">Nosotros</Link>
                </div>
                <div className={navStyle.gallaria}>
                    <div className="title">Gallaria</div>
                </div>
                <div className={navStyle.contacto}>
                    <div className="title">Contacto</div>
                </div>
            </div>
        </div>
    )

}

export default Navbar;
