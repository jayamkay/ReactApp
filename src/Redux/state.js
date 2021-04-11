
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
        ]
      }
  }

  export default state;