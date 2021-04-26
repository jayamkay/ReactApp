import AddPost from './Add post/AddPost';
import Post from './Post/Post';
import mypostsCSS from './MyPosts.module.css'



const MyPosts = (props) => {
  let postList = props.profilePage.postData.map( post => {
    return <Post message={post.postMessage} />
  })


  return <div className={mypostsCSS.myposts}>
    <AddPost newPostText={props.profilePage.newPostText} addNewPost={props.addNewPost}
    updatePostText={props.updatePostText}/>
    <div>
      {postList}
    </div>
  </div>
}


export default MyPosts;