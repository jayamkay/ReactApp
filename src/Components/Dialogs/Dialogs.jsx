import dialogsCSS from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';



const Dialogs = (props) => {

    let usersComponents = props.messageData.users.map(el => {
        return <DialogItem name={el.name} id={el.id} />;
    })
    
    let messagesConponents = props.messageData.messages.map( el =>{
        return <MessageItem message={el.message} />;
    })
    
    
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