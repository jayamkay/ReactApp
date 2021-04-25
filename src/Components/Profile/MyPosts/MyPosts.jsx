import AddPost from './Add post/AddPost';
import Post from './Post/Post';
import mypostsCSS from './MyPosts.module.css'



const MyPosts = (props) => {
  let postList = props.profilePage.postData.map( post => {
    return <Post message={post.postMessage} />
  })


  return <div className={mypostsCSS.myposts}>
    <AddPost newPostText={props.profilePage.newPostText} props_addnewpost={props.props_addnewpost}
    props_changeNewPostText={props.props_changeNewPostText}/>
    <div>
      {postList}
    </div>
  </div>
}


export default MyPosts;