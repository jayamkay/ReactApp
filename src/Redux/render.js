import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import {addNewPost} from './state.js'
import {changeNEW_POST_TEXT} from './state.js'
import state from './state.js'

export let rerenderEntireTree = () =>
{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} props_addnewpost={addNewPost} props_changeNewPostText={changeNEW_POST_TEXT}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}