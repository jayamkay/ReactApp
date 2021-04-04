import { NavLink } from 'react-router-dom';
import dialogsCSS from './Dialogs.module.css';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={dialogsCSS.dialog}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}


const MessageItem = (props) => {
    return <div className={dialogsCSS.message}>
    {props.message}
</div>
}


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


const Dialogs = (props) => {
    return (
        <div className={dialogsCSS.dialogs}>
            <div className={dialogsCSS.dialogs_items}>
                <DialogItem name={data.users[0].name} id={data.users[0].id}/>
                <DialogItem name={data.users[1].name} id={data.users[1].id}/>
                <DialogItem name={data.users[2].name} id={data.users[2].id}/>
            </div>
            <div className={dialogsCSS.messages}>
                <MessageItem message={data.messages[0].message} />
                <MessageItem message={data.messages[1].message} />
                <MessageItem message={data.messages[2].message} />
            </div>
        </div>
    )
}


export default Dialogs;