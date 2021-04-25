import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';



const App = (props) => {
  return <div className='app-wrapper'>
    <Header />
    <BrowserRouter>
    <Navbar />
      <div className='app-wrapper-content'>
        <Route exact path='/' render={ () => <Profile postData={props.state.profilePage}
        props_addnewpost={props.props_addnewpost}/>} />
        <Route exact path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
        props_addnewpost={props.props_addnewpost} props_changeNewPostText={props.props_changeNewPostText}/>} />
        <Route exact path='/dialogs' render={ () => <Dialogs messageData={props.state.dialogsPage}/>} />
        <Route exact path='/music' render={ () => <Music />} />
        <Route exact path='/news' render={ () => <News />} />
        <Route exact path='/settings' render={ () => <Settings />} />
      </div>
    </BrowserRouter>
  </div>
}

export default App;
