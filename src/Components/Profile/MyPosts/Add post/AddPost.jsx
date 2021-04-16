import React from 'react';
import addpostCSS from './AddPost.module.css';



// const AddPost = () => {
//     return <div className={addpostCSS.addpost}>
//     <h5>My posts</h5>
//     <textarea className="form-control" rows="4" placeholder="your news..." id='textArea'></textarea>
//     <button type="button" class="btn btn-success">Send</button>
//     </div>
// }

function AddPost(props)
{
    function showAlert()
    {
        //let text = document.getElementById('textArea').value;
        let text = newPostElement.current.value;
        alert(text);
    }

    let showAlert2 = () => {
        showAlert()
        alert('Test2');
    }


    let newPostElement = React.createRef();

    return <div className={addpostCSS.addpost}>
    <h5>My posts</h5>
    <textarea className="form-control" rows="4" placeholder="your news..." id='textArea' ref={newPostElement }></textarea>
    <button type="button" class="btn btn-success" onClick={showAlert2}>Send</button>
    {/* <button type="button" class="btn btn-success" onClick={showAlert} onClick={showAlert2}>Send</button> */}
    {/* !!!ВНИМАНИЕ!!!При отдаче функции атрибуту onClick, () не ставить, иначе функция будет вызвана сразу */}
    {/* Атрибут onClick= нельзя добавлять 2 раза. Все кроме последнего будут игнорироваться */}
    </div>
}

export default AddPost;