import AddPost from './Add post/AddPost';
import Post from './Post/Post';



const MyPosts = (props) => {
  
  let postList = props.postData.map( post => {
    return <Post message={post.postMessage} />
  })


  return <div className='posts'>
    <AddPost />
    <div>
      {postList}
    </div>
  </div>
}


export default MyPosts;