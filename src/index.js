import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData_ = [
  { id: 1, postMessage: 'This is the First post' },
  { id: 2, postMessage: 'It\'s the Second post' }
];

let messageData_ = 
{ 
    users : 
    [
        {
            id : 1,
            name : 'Name 1'
        },
        {
            id : 2,
            name : 'Name 2'
        },
        {
            id : 3,
            name : 'Name 3'
        }
    ],
    messages :
    [
        {
            id : 1,
            message : 'Message 1'
        },
        {
            id : 2,
            message : 'Message 2'
        },
        {
            id : 3,
            message : 'Message 3'
        }
    ]
}

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData_} messageData={messageData_}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
