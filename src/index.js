import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './Redux/state'
import {addNewPost} from './Redux/state'


export let rerenderEntireTree = () =>
{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} props_addnewpost={addNewPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree();
reportWebVitals();
