import navStyle from '../CSS/nav.module.css'
import logo from '../../assets/logo.png'
function Navbar(){
    return(
        <div className={navStyle.nav}>
            <img className={navStyle.logo} src={logo} alt="" />
            <div className={navStyle.links}>
                <div className={navStyle.nosortos}>
                    <div className="title">Nosortos</div>
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