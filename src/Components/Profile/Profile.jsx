import Banner from './Banner/Banner';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import profileCSS from './Profile.module.css'


const Profile = (props) => {

    return <div className={profileCSS.profile}>
    <Banner />
    <Info />
    <MyPosts postData={props.postData} props_addnewpost={props.props_addnewpost}/>
  </div>
}


export default Profile;