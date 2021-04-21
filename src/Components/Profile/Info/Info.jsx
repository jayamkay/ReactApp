import infoCSS from './Info.module.css';
import avatar_img from './../../../Images/Avatar_img.png';

const Info = () => {
    return (
        <div className={infoCSS.info}>
            <img src={avatar_img}></img>
            <div>
            <h3>Jayamkay</h3>
            <p>Date of Birth: 4 June</p>
            <p>City: Zaporizhzhia</p>
            <p>Education: NU"ZP"'13</p>
            <p>Web Site: https://github.com/jayamkay</p>
            </div>
        </div>
    )
}


export default Info;