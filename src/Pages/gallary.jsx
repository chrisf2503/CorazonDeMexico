import Navbar from "./Components/nav";
import gallaryStyle from './CSS/gallary.module.css'
function Gallary(){
    return (
        <div className={gallaryStyle.gallary}>
            <div className="hero">
                <Navbar/>
                <div className="title_container">
                    <div className="title">Galería</div>
                    <div className="discription">Cada imagen en esta galería guarda más que un instante: refleja el alma de Corazón de México en cada nota, cada sonrisa y cada emoción compartida. Nos llena de orgullo llevar nuestra música a momentos tan especiales, donde la tradición se encuentra con historias únicas que viven en quienes nos escuchan. Aquí verás no solo lo que hacemos, sino lo que sentimos—porque para nosotros, cada presentación es un honor, y cada recuerdo, una extensión viva del corazón de México.</div>
                </div>
            </div>
            <div className="featuredIn">
                <div className="title">Momentos de Honor</div>
                <div className="discription">Es un verdadero honor para Corazón de México ser parte y colaborar con grandes artistas que confían en nuestro trabajo y en la esencia que llevamos a cada presentación. Hemos tenido el privilegio de compartir momentos especiales junto a figuras como [persona1], [persona2] y muchos más, creando experiencias únicas que celebran la música y la cultura. Cada colaboración representa no solo un logro, sino también un compromiso continuo con la excelencia y la pasión que define nuestro mariachi.</div>;
                <div className="slideshow">

                </div>
            </div>
            <div className="slideshow">
                <div className="title"></div>
                <div className="discription">Cada presentación que realizamos nace desde el alma y se entrega con auténtica pasión. En Corazón de México, no solo interpretamos música, sino que creamos momentos que conectan, emocionan y permanecen en la memoria. Nuestro compromiso es brindar calidad, elegancia y sentimiento en cada detalle. Así es como transformamos cada evento en una experiencia verdaderamente especial.</div>
                <div className="slideshow">

                </div>
            </div>
            <div className="whatDoYouThink">
                <div className="title">¿Qué te parece?</div>
                <div className="img"><img src="" alt="" /></div>
                <div className="discription">Si lo que ves conecta contigo, imagina la experiencia en vivo. En Corazón de México, cada presentación se adapta a tu evento para hacerlo único y memorable. Estamos listos para llevar esa misma emoción a tu celebración. Solo falta dar el siguiente paso: contáctanos.</div>
            </div>
        </div>
    )

}

export default Gallary;