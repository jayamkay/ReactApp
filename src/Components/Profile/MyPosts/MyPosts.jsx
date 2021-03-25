import AddPost from './Add post/AddPost';
import mypostsCSS from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return <div className='posts'>
    <AddPost />
    <div>
      <Post message='This is the First post' />
      <Post message="It's the Second post" />
    </div>
  </div>
}


export default MyPosts;