import dialogsCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';


let data = 
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


let usersComponents = data.users.map(el => {
    return <DialogItem name={el.name} id={el.id} />;
})

let messagesConponents = data.messages.map( el =>{
    return <MessageItem message={el.message} />;
})


const Dialogs = (props) => {
    console.log(Dialogs.props);
    return (
        <div className={dialogsCSS.dialogs}>
            <div className={dialogsCSS.dialogs_items}>
                {usersComponents} 
            </div>
            <div className={dialogsCSS.messages}>
                {messagesConponents}
            </div>
        </div>
    )
}


export default Dialogs;