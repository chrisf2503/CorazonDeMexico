import socialStyle from '../CSS/social.module.css'
import facebookIcon from '../../assets/facebook.png'
import instaIcon from '../../assets/instagram.png'
import youtubeIcon from '../../assets/youtube.png'
import phoneIcon from '../../assets/phone.png'
const socialList = [
    {id: "Facebook", img: facebookIcon, link:"https://www.facebook.com/mariachicorazondemexicoo/"},
    {id: "Instagram", img: instaIcon, link:"https://www.instagram.com/mariachi_corazon_de_mexicoo/"},
    {id: "Youtube", img: youtubeIcon, link:"https://www.youtube.com/@mariachicorazondemexico3437"},
    {id: "Phone-number", img: phoneIcon, link:"tel:+13478709491"}
]

function Social(){

    return (
        <section className={socialStyle.social} aria-label="Redes sociales y contacto de Mariachi Corazón de México">
            {socialList.map(list =>(
                <div key={list.id} className={socialStyle.container}>
                    <a
                        href={list.link}
                        className={socialStyle.link}
                        target={list.link.startsWith('http') ? '_blank' : undefined}
                        rel={list.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={`${list.id} de Mariachi Corazón de México`}
                    >
                        <img
                        src={list.img}
                        alt={`${list.id} de Mariachi Corazón de México`}
                        className={socialStyle.icon}
                        loading="lazy"
                        />  
                       <p>
                            {list.id}
                       </p>
                    </a>
                    
                </div>
            ))}
        </section>
    )
}

export default Social;