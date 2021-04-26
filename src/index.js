import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addNewPost, updatePostText} from './Redux/state.js'
import state, {subscribe} from './Redux/state'

let rerenderEntireTree = () =>
{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost} updatePostText={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree();
reportWebVitals();
subscribe(rerenderEntireTree);
