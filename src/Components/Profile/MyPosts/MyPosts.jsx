import AddPost from './Add post/AddPost';
import Post from './Post/Post';
import mypostsCSS from './MyPosts.module.css'



const MyPosts = (props) => {
  
  let postList = props.postData.postData.map( post => {
    return <Post message={post.postMessage} />
  })


  return <div className={mypostsCSS.myposts}>
    <AddPost props_addnewpost={props.props_addnewpost} />
    <div>
      {postList}
    </div>
  </div>
}


export default MyPosts;