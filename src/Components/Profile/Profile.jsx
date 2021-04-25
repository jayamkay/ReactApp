import Banner from './Banner/Banner';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import profileCSS from './Profile.module.css'


const Profile = (props) => {

    return <div className={profileCSS.profile}>
    <Banner />
    <Info />
    <MyPosts profilePage={props.profilePage} props_addnewpost={props.props_addnewpost} 
    props_changeNewPostText={props.props_changeNewPostText}/>
  </div>
}


export default Profile;