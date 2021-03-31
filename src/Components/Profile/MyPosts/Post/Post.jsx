import postCSS from './Post.module.css';


const Post = (props) => {

// console.log(props.message); //Это строка из js функции, а не из jsx, потому фигурные скобки не нужны
// debugger; - включение режима отладки

return <div className={postCSS.post}>
    <img src='https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Icon.png'></img>
    <p>{props.message}</p>
</div>
}


export default Post;