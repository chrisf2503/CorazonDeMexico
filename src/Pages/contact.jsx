import Navbar from "./Components/nav";
import contactStyle from './CSS/contact.module.css';
import Form from './Components/form.jsx'
import Social from "./Components/social.jsx";
import contactImg from '../img/img7.jpg';
function Contact(){

    return (
        <main className={contactStyle.Contact}>
            <div className={contactStyle.hero}>
                <Navbar/>
                <div className={contactStyle.contact_hero}>
                    <h1 className={contactStyle.title}>Contáctanos</h1>
                    <img
                        src={contactImg}
                        alt="Mariachi Corazón de México durante una presentación en vivo en Nueva York"
                        className={contactStyle.hero_image}
                        loading="lazy"
                    />
                    <p className={contactStyle.descripcion}>
                        Ponte en contacto con Mariachi Corazón de México para bodas, serenatas, cumpleaños, eventos privados y celebraciones especiales en Nueva York y áreas cercanas. Nuestro equipo está listo para ayudarte a crear una experiencia auténtica, elegante e inolvidable.
                    </p>
                </div>
            </div>
            <section className={contactStyle.from_social_container}>
                <Form/>
                <Social/>
            </section>   
        </main>
    )
}

export default Contact;