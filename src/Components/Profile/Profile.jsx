import Banner from './Banner/Banner';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';
import profileCSS from './Profile.module.css'


const Profile = (props) => {

    return <div className={profileCSS.profile}>
    <Banner />
    <Info />
    <MyPosts profilePage={props.profilePage} addNewPost={props.addNewPost} 
    updatePostText={props.updatePostText}/>
  </div>
}


export default Profile;