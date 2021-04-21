import bannerCSS from './Banner.module.css';
import banner_img from './../../../Images/Banner_img.png';

const Banner = () => {
    return <div className={bannerCSS.banner}>
        <img src={banner_img}></img>
    </div>
}


export default Banner;