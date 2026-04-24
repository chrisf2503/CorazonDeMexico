import { useState } from 'react';
import Navbar from './Components/nav.jsx';
import heart from '../assets/inifityheart.png';
import homepageStyle from './CSS/home.module.css'
import {serviceList} from './Components/serviceList.jsx'
import img1 from '../img/img1.png'
import img3 from '../img/img3.png'
function Home(){
    const [openServiceId, setOpenServiceId] = useState(null);

    const handleServiceClick = (serviceId) => {
        setOpenServiceId(currentId => currentId === serviceId ? null : serviceId);
    };

    return (
        <div className={homepageStyle.homepage}>
            <div className={homepageStyle.starter}>
                <Navbar/>
                <div className={homepageStyle.video_container}>
                    {/* Add some video here, go through PC */}
                </div>  
            </div>

            <div className={homepageStyle.aboutus}>
                <div className={homepageStyle.title}>
                    <div className={homepageStyle.quines_somos}>¿Quiénes somos?</div>
                </div>
                <div className={homepageStyle.text_photo_container}>
                    <div className={homepageStyle.photo}>
                        <img className={homepageStyle.image1} src = {img1} alt="" />
                    </div>
                    <div className={homepageStyle.text_area}>
                        <div className={homepageStyle.text}>Mariachi Corazón de México es una agrupación que lleva en cada nota el alma, la tradición y el orgullo de la música mexicana. Con base en Nueva York, transforman cada evento en una experiencia llena de emoción, elegancia y autenticidad. Su compromiso va más allá de interpretar canciones: crean momentos que conectan profundamente con cada persona presente. Con un repertorio versátil y una presencia impecable, honran sus raíces mientras elevan cada celebración. Más que música, son una expresión viva del corazón de México.</div>
                    </div>
                </div>
            </div>

            <div className={homepageStyle.gallarie_widget}>
                <div className={homepageStyle.title}>
                    <div className={homepageStyle.nuestro_trabajo}>Nuestro Trabajo</div>
                </div>
                <div className={homepageStyle.gallarie_text}>
                    <div className={homepageStyle.text2}>Nuestro Trabajo refleja la pasión y dedicación que entregamos en cada presentación, capturada en momentos llenos de emoción y autenticidad. A través de estas imágenes, podrás apreciar la energía, elegancia y conexión que llevamos a cada evento. Cada fotografía cuenta una historia única donde la música y el corazón de México se hacen presentes.</div>
                </div>
                <div className={homepageStyle.slide_show_contianer}>
                    {/* Here it'll be a list of images and itll pan through */}
                    <div className="slide-show-right">Slide show right here</div>
                </div>
            </div>

            <div className={homepageStyle.service}>
                <div className={homepageStyle.title2}>
                    <div className="servicio">Servicio</div>
                </div>
                <div className={homepageStyle.service_container}>
                    <div className={homepageStyle.service_photo }>
                        <img className={homepageStyle.img5
                        } src = {img3} alt="" />
                    </div>
                    <ul className={homepageStyle.service_list}>
                       {
                        serviceList.map(service=>(
                            <li key={service.id} className={homepageStyle.service_item}>
                                <button
                                    type="button"
                                    className={homepageStyle.service_button}
                                    onClick={() => handleServiceClick(service.id)}
                                    aria-expanded={openServiceId === service.id}
                                >
                                    <img className={homepageStyle.service_bullet} src={heart} alt="" />
                                    <span>{service.title}</span>
                                </button>
                                {openServiceId === service.id && (
                                    <div className={homepageStyle.service_text}>{service.text}</div>
                                )}
                            </li>
                        ))
                       }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home;
