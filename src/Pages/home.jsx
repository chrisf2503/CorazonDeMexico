import { useEffect, useState } from 'react';
import Navbar from './Components/nav.jsx';
import heart from '../assets/inifityheart.png';
import homepageStyle from './CSS/home.module.css'
import {serviceList} from './Components/serviceList.jsx'
import img1 from '../img/img1.jpg'
import img3 from '../img/img3.jpg'
import logo from '../img/logo.mp4'
function Home(){
    const [openServiceId, setOpenServiceId] = useState(null);
    const [visibleSections, setVisibleSections] = useState({});

    const handleServiceClick = (serviceId) => {
        setOpenServiceId(currentId => currentId === serviceId ? null : serviceId);
    };

    useEffect(() => {
        const sections = document.querySelectorAll('[data-fade-section]');

        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleSections((currentSections) => {
                    const nextSections = { ...currentSections };

                    entries.forEach((entry) => {
                        nextSections[entry.target.dataset.fadeSection] = entry.isIntersecting;
                    });

                    return nextSections;
                });
            },
            {
                threshold: 0.25,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);

    const getSectionClassName = (sectionName, baseClassName) => {
        const visibilityClassName = visibleSections[sectionName]
            ? homepageStyle.fade_section_visible
            : homepageStyle.fade_section_hidden;

        return `${baseClassName} ${homepageStyle.fade_section} ${visibilityClassName}`;
    };

    return (
        <div className={homepageStyle.homepage}>
            <div
                data-fade-section="starter"
                className={getSectionClassName('starter', homepageStyle.starter)}
            >
                <Navbar/>
                <div className={homepageStyle.video_container}>
                    <video autoPlay muted loop playsInline>
                        <source src={logo} type="video/mp4"></source>
                    </video>
                </div>  
            </div>

            <div
                data-fade-section="aboutus"
                className={getSectionClassName('aboutus', homepageStyle.aboutus)}
            >
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

            <div
                data-fade-section="gallarie"
                className={getSectionClassName('gallarie', homepageStyle.gallarie_widget)}
            >
                <div className={homepageStyle.title}>
                    <div className={homepageStyle.nuestro_trabajo}>Nuestro Trabajo</div>
                </div>
                <div className={homepageStyle.gallarie_text}>
                    <div className={homepageStyle.text2}>Nuestro trabajo refleja la pasión y dedicación que entregamos en cada presentación, capturada en momentos llenos de emoción y autenticidad. A través de estas imágenes, podrás apreciar la energía, la elegancia y la conexión que llevamos a cada evento. Cada fotografía cuenta una historia única donde la música y el corazón de México se hacen presentes.</div>
                </div>
                <div className={homepageStyle.slide_show_contianer}>
                    {/* Here it'll be a list of images and itll pan through */}
                    <div className="slide-show-right">Próximamente: galería de imágenes</div>
                </div>
            </div>

            <div
                data-fade-section="service"
                className={getSectionClassName('service', homepageStyle.service)}
            >
                <div className={homepageStyle.title2}>
                    <div className={homepageStyle.servicio}>Servicios</div>
                </div>
                <div className={homepageStyle.service_container}>
                    <div className={homepageStyle.service_showcase}>
                        <div className={homepageStyle.service_photo}>
                            <div className={homepageStyle.service_photo_glow}></div>
                            <img
                                className={homepageStyle.img5}
                                src={img3}
                                alt="Mariachi Corazón de México durante una presentación."
                            />
                        </div>
                        
                    </div>
                    <ul className={homepageStyle.service_list}>
                       {
                        serviceList.map(service=>(
                            <li
                                key={service.id}
                                className={`${homepageStyle.service_item} ${openServiceId === service.id ? homepageStyle.service_item_open : ''}`}
                            >
                                <button
                                    type="button"
                                    className={homepageStyle.service_button}
                                    onClick={() => handleServiceClick(service.id)}
                                    aria-expanded={openServiceId === service.id}
                                >
                                    <img className={homepageStyle.service_bullet} src={heart} alt="" />
                                    <span className={homepageStyle.service_button_title}>{service.title}</span>
                                    <span className={homepageStyle.service_plus}>{openServiceId === service.id ? '−' : '+'}</span>
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
