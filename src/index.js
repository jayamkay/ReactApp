import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './Redux/render.js';
import state from './Redux/state.js'
import {addNewPost} from './Redux/state.js'

rerenderEntireTree(state, addNewPost);
reportWebVitals();
