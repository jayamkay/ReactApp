import addpostCSS from './AddPost.module.css';


const AddPost = () => {
    return <div className={addpostCSS.addpost}>
    <h5>My posts</h5>
    <textarea className="form-control" rows="4" placeholder="your news..."></textarea>
    <button type="button" class="btn btn-success">Send</button>
    </div>
}


export default AddPost;