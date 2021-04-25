import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './Redux/render.js';
import state from './Redux/state.js'
import {addNewPost} from './Redux/state.js'
import {changeNEW_POST_TEXT} from './Redux/state.js'

rerenderEntireTree(state, addNewPost, changeNEW_POST_TEXT);
reportWebVitals();
