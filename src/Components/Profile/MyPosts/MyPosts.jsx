import AddPost from './Add post/AddPost';
import Post from './Post/Post';


let postData = [
  {id: 1, postMessage : 'This is the First post'},
  {id: 2, postMessage : 'It\'s the Second post'}
]


let postList = postData.map( post => {
  return <Post message={post.postMessage} />
})


const MyPosts = () => {
  return <div className='posts'>
    <AddPost />
    <div>
      {postList}
    </div>
  </div>
}


export default MyPosts;