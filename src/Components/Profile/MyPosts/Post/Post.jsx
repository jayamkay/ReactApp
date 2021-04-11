import postCSS from './Post.module.css';


const Post = (props) => {

return <div className={postCSS.post}>
    <img src='https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png'></img>
    <p>{props.message}</p>
</div>

}


export default Post;