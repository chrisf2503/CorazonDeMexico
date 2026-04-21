import Navbar from './Components/nav.jsx';

import homepageStyle from './CSS/home.module.css'

function Home(){
    return (
        <div className={homepageStyle.homepage}>
            <div className={homepageStyle.starter}>
                <Navbar/>     
            </div>
        </div>
    )
}
export default Home;