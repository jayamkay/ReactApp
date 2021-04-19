import AddPost from './Add post/AddPost';
import Post from './Post/Post';



const MyPosts = (props) => {
  
  let postList = props.postData.postData.map( post => {
    return <Post message={post.postMessage} />
  })


  return <div className='posts'>
    <AddPost props_addnewpost={props.props_addnewpost} />
    <div>
      {postList}
    </div>
  </div>
}


export default MyPosts;