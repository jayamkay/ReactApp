import {rerenderEntireTree} from './render.js'

let state = 
  { 
      dialogsPage : {
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
      },
      profilePage : {
        postData :
        [
          { 
              id: 1,
              postMessage: 'This is the First post'
          },
          { 
              id: 2,
              postMessage: 'It\'s the Second post'
          }
        ],
        newPostText: ''
      }
  }

export let changeNEW_POST_TEXT = (PROPS_newText) => {
    state.profilePage.newPostText = PROPS_newText;
    rerenderEntireTree(state, addNewPost, changeNEW_POST_TEXT);
}


export const addNewPost = (PROPS_postmessage) =>
{
    let tempId = Object.keys(state.profilePage.postData).length++;
    state.profilePage.postData.push({id: tempId, postMessage: PROPS_postmessage});
    changeNEW_POST_TEXT('');
}



export default state;