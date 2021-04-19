import Banner from './Banner/Banner';
import Info from './Info/Info';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {

    return <div>
    <Banner />
    <Info />
    <MyPosts postData={props.postData} props_addnewpost={props.props_addnewpost}/>
  </div>
}


export default Profile;