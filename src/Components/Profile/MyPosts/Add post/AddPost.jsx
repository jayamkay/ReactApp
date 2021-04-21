import React from 'react';
import addpostCSS from './AddPost.module.css';


function AddPost(props)
{
    let newPostElement = React.createRef();
    function addnewpost()
    {
        let text = newPostElement.current.value;
        if (text == '') {
            alert('There is nothing written in your post');
        }
        else {
            props.props_addnewpost(text);
            newPostElement.current.value = '';
        }
    }
    return <div className={addpostCSS.addpost}>
    <h5>My posts</h5>
    <textarea className="form-control" rows="4" placeholder="your news..." id='textArea' ref={newPostElement }></textarea>
    <button type="button" class="btn btn-success" onClick={addnewpost}>Send</button>
    </div>
}

export default AddPost;