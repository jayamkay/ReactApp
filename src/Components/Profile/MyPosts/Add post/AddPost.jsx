import React from 'react';
import state from '../../../../Redux/state';
import addpostCSS from './AddPost.module.css';


function AddPost(props)
{
    let newPostElement = React.createRef();
    function addnewpost()
    { 
        debugger;
        let text = newPostElement.current.value;
        //alert(Object.keys(state.profilePage.postData).length);
        props.props_addnewpost(text);
        //alert(Object.keys(state.profilePage.postData).length);
    }
    return <div className={addpostCSS.addpost}>
    <h5>My posts</h5>
    <textarea className="form-control" rows="4" placeholder="your news..." id='textArea' ref={newPostElement }></textarea>
    <button type="button" class="btn btn-success" onClick={addnewpost}>Send</button>
    </div>
}

export default AddPost;