import { useState, useEffect } from 'react';
import Navbar from "./Components/nav";
import gallaryStyle from './CSS/gallary.module.css';
import { imgList } from './Components/imgList';
import natalia from '../img/nataliaJimenez.png';
import maribel from '../img/maribelGuardia.png';
import violenImg from '../img/violen.jpg';

function Gallary(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [visibleSections, setVisibleSections] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % imgList.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('[data-gallery-section]');

        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleSections((currentSections) => {
                    const nextSections = { ...currentSections };
                    entries.forEach((entry) => {
                        nextSections[entry.target.dataset.gallerySection] = entry.isIntersecting;
                    });
                    return nextSections;
                });
            },
            {
                threshold: 0.25,
                rootMargin: '-5% 0px -5% 0px',
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);

    const getSectionClassName = (sectionId, baseClassName) => {
        const visibilityClassName = visibleSections[sectionId]
            ? gallaryStyle.section_visible
            : gallaryStyle.section_hidden;

        return `${baseClassName} ${gallaryStyle.section_reveal} ${visibilityClassName}`;
    };

    return (
        <main className={gallaryStyle.page}>
            <div className={gallaryStyle.background_glow_top}></div>
            <div className={gallaryStyle.background_glow_bottom}></div>

            <header className={gallaryStyle.hero}>
                <Navbar/>
                <div className={gallaryStyle.hero_inner}>
                    <p className={gallaryStyle.hero_badge}>Galería • Momentos • Pasión</p>
                    <h1 className={gallaryStyle.hero_title}>Galería de Corazón</h1>
                    <p className={gallaryStyle.hero_text}>
                        Explora la galería oficial de Mariachi Corazón de México y descubre presentaciones, colaboraciones y momentos inolvidables en eventos y celebraciones en Nueva York.
                    </p>
                </div>
            </header>

            <section 
                data-gallery-section="featured" 
                className={getSectionClassName('featured', gallaryStyle.featured_section)}
            >
                <div className={gallaryStyle.section_content}>
                    <p className={gallaryStyle.section_eyebrow}>Colaboraciones</p>
                    <h2 className={gallaryStyle.section_title}>Momentos de Honor</h2>
                    <p className={gallaryStyle.section_text}>
                        Es un verdadero honor para Corazón de México ser parte y colaborar con grandes artistas que confían en nuestro trabajo y en la esencia que llevamos a cada presentación. Hemos tenido el privilegio de compartir momentos especiales junto a figuras como <a href="https://youtu.be/17_xZbL-yTo?si=F4iHU7OCNEwZv_KT">Natalia Jimenez</a>, <a href="https://youtu.be/BgsEVuKFsVs?si=JAHKhWUPd1jprW42">Maribel Guardia</a> y muchos más, creando experiencias únicas que celebran la música y la cultura.
                    </p>
                </div>
                <div className={gallaryStyle.artistList}>
                    <div className={gallaryStyle.artistCard}>
                        <div className={gallaryStyle.artist_ring}></div>
                        <img
                            src={natalia}
                            alt="Natalia Jiménez colaborando con Mariachi Corazón de México"
                            loading="lazy"
                        />
                    </div>
                    <div className={gallaryStyle.artistCard}>
                        <div className={gallaryStyle.artist_ring}></div>
                        <img
                            src={maribel}
                            alt="Maribel Guardia junto a Mariachi Corazón de México"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            <section 
                data-gallery-section="slideshow" 
                className={getSectionClassName('slideshow', gallaryStyle.slideshow_section)}
            >
                <div className={gallaryStyle.section_content}>
                    <p className={gallaryStyle.section_eyebrow}>Nuestro Trabajo</p>
                    <h2 className={gallaryStyle.section_title}>Lo Que Hacemos con el Corazón</h2>
                    <p className={gallaryStyle.section_text}>
                        Cada presentación que realizamos nace desde el alma y se entrega con auténtica pasión. En Corazón de México, no solo interpretamos música, sino que creamos momentos que conectan, emocionan y permanecen en la memoria. Nuestro compromiso es brindar calidad, elegancia y sentimiento en cada detalle.
                    </p>
                </div>
                <div className={gallaryStyle.slideshow}>
                    {imgList.map((image, index) => 
                        <img
                            key={image.id}
                            src={image.img}
                            alt={`Mariachi Corazón de México presentación ${image.id}`}
                            loading="lazy"
                            className={`${gallaryStyle.slideImage} ${index === currentImageIndex ? gallaryStyle.active : ''}`}
                        />
                    )}
                </div>
            </section>

            <section 
                data-gallery-section="cta" 
                className={getSectionClassName('cta', gallaryStyle.cta_section)}
            >
                <div className={gallaryStyle.cta_media}>
                    <div className={gallaryStyle.cta_ring}></div>
                    <img
                        src={violenImg}
                        alt="Mariachi Corazón de México durante una presentación musical elegante"
                        className={gallaryStyle.cta_image}
                        loading="lazy"
                    />
                </div>
                <div className={gallaryStyle.cta_copy}>
                    <p className={gallaryStyle.section_eyebrow}>Tu Momento</p>
                    <h2 className={gallaryStyle.section_title}>¿Qué te parece?</h2>
                    <p className={gallaryStyle.section_text}>
                        Si lo que ves conecta contigo, imagina la experiencia en vivo. En Corazón de México, cada presentación se adapta a tu evento para hacerlo único y memorable. Estamos listos para llevar esa misma emoción a tu celebración. Solo falta dar el siguiente paso: contáctanos.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Gallary;
