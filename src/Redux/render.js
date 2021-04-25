import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';


export let rerenderEntireTree = (state, addNewPost, changeNEW_POST_TEXT) =>
{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} props_addnewpost={addNewPost} props_changeNewPostText={changeNEW_POST_TEXT}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}