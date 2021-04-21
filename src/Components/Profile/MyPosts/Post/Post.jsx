import postCSS from './Post.module.css';
import avatar_img from './../../../../Images/Avatar_img.png';

const Post = (props) => {
return <div className={postCSS.post}>
    <img src={avatar_img}></img>
    <p>{props.message}</p>
</div>

}

export default Post;