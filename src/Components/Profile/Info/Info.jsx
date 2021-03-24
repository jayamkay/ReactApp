import infoCSS from './Info.module.css'


const Info = () => {
    return (
        <div className={infoCSS.info}>
            <img src='https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png'></img>
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