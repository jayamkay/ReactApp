import dialogsCSS from '../Dialogs.module.css';

const MessageItem = (props) => {
    return <div className={dialogsCSS.message}>
    {props.message}
</div>
}


export default MessageItem;