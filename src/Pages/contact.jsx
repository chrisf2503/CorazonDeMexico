import Navbar from "./Components/nav";
import contactStyle from './CSS/contact.module.css';
import Form from './Components/form.jsx'
function Contact(){

    return (
        <div className={contactStyle.Contact}>
            <div className={contactStyle.hero}>
                <Navbar/>
                <div className={contactStyle.contact_hero}>
                    <div className={contactStyle.title}>Contáctanos</div>
                    <div>some img</div>
                    <div className={contactStyle.discripton}>
                        En Corazón de México, cada mensaje es el inicio de algo especial. Queremos conocer tu visión, entender cada detalle y acompañarte en la creación de un momento que realmente deje huella. Nuestro equipo está listo para brindarte atención cercana, claridad en cada paso y un servicio a la altura de tu evento. Escríbenos y comencemos a dar vida a una experiencia llena de emoción, elegancia y auténtico sentimiento mexicano.
                    </div>
                </div>
            </div>
            <div className="form">
                <Form/>
            </div>   
        </div>
    )
}

export default Contact;