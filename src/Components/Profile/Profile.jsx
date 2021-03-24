import Banner from './Banner/Banner';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import profileCSS from './Profile.module.css'

const Profile = () => {
    return <div className={profileCSS.profile}>
    <Banner/>
    <Info/>
    <MyPosts/>
  </div>
}


export default Profile;