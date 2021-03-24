import AddPost from './Add post/AddPost';
import mypostsCSS from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return <div className='posts'>
      
    <AddPost />
    <div>
      <Post />
      <Post />
      <Post />
    </div>
    </div>
}


export default MyPosts;