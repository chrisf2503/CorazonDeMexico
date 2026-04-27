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
        <div className={socialStyle.social}>
            {socialList.map(list =>(
                <div key={list.id} className={socialStyle.container}>
                    <img src={list.img} alt={list.id} className={socialStyle.icon}/>
                    <a href={list.link} className={socialStyle.link}>{list.id}</a>
                </div>
            ))}
        </div>
    )
}

export default Social;