import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';


export let rerenderEntireTree = (state, addNewPost) =>
{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} props_addnewpost={addNewPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}