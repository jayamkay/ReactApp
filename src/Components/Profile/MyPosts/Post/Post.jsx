import postCSS from './Post.module.css';


const Post = () => {
return <div className={postCSS.post}>
    <img src='https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png'></img>
    <p>Post 1</p>
</div>
}


export default Post;