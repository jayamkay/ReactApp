import AddPost from './Add post/AddPost';
import Post from './Post/Post';


let postData = [
  {id: 1, postMessage : 'This is the First post'},
  {id: 2, postMessage : 'It\'s the Second post'}
]


const MyPosts = () => {
  return <div className='posts'>
    <AddPost />
    <div>
      <Post message={postData[0].postMessage} />
      <Post message={postData[1].postMessage} />
    </div>
  </div>
}


export default MyPosts;