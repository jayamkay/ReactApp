import React from 'react';
import addpostCSS from './AddPost.module.css';


function AddPost(props)
{
    let newPostElement = React.createRef();
    

    let onPostChange = () => {
        let text_new = newPostElement.current.value;
        props.props_changeNewPostText(text_new);
    }

    function addnewpost()
    {
        if (newPostElement.current.value == '') {
            alert('There is nothing written in your post');
        }
        else {
            props.props_addnewpost();
        }
    }

    
    return <div className={addpostCSS.addpost}>
    <h5>My posts</h5>
    <textarea className="form-control" rows="4" id='textArea' ref={newPostElement}
    onChange={onPostChange} value={props.newPostText} placeholder='add your post...'/>
    <button type="button" class="btn btn-success" onClick={addnewpost}>Send</button>
    </div>
}

export default AddPost;