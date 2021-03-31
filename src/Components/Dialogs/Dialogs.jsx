import { NavLink } from 'react-router-dom';
import dialogsCSS from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={dialogsCSS.dialogs}>
            <div className={dialogsCSS.dialogs_items}>
                <div className={dialogsCSS.dialog + ' ' + dialogsCSS.active}> {/*2 класса для тэга*/}
                    <NavLink to='/dialogs/01'>Name 1</NavLink>
                </div>
                <div className={dialogsCSS.dialog}>
                    <NavLink to='/dialogs/02'>Name 2</NavLink>
                </div>
                <div className={dialogsCSS.dialog}>
                    <NavLink to='/dialogs/03'>Name 3</NavLink>
                </div>
                <div className={dialogsCSS.dialog}>
                    <NavLink to='/dialogs/04'>Name 4</NavLink>
                </div>
                <div className={dialogsCSS.dialog}>
                    <NavLink to='/dialogs/05'>Name 5</NavLink>
                </div>
                <div className={dialogsCSS.dialog}>
                    <NavLink to='/dialogs/06'>Name 6</NavLink>
                </div>
            </div>
            <div className={dialogsCSS.messages}>
                <div className={dialogsCSS.message}>
                    Message 1
                </div>
                <div className={dialogsCSS.message}>
                    Message 2
                </div>
                <div className={dialogsCSS.message}>
                    Message 3
                </div>
                <div className={dialogsCSS.message}>
                    Message 4
                </div>
                <div className={dialogsCSS.message}>
                    Message 5
                </div>
                <div className={dialogsCSS.message}>
                    Message 6
                </div>
            </div>
        </div>
    )
}


export default Dialogs;