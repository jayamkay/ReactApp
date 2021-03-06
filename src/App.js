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
  //console.log(props);
  return <div className='app-wrapper'>
    <Header />
    <BrowserRouter>
    <Navbar />
      <div className='app-wrapper-content'>
        <Route exact path='/' render={ () => <Profile profilePage={props.state.profilePage}
        addNewPost={props.addNewPost} updatePostText={props.updatePostText}/>} />
        <Route exact path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
        addNewPost={props.addNewPost} updatePostText={props.updatePostText}/>} />
        <Route exact path='/dialogs' render={ () => <Dialogs messageData={props.state.dialogsPage}/>} />
        <Route exact path='/music' render={ () => <Music />} />
        <Route exact path='/news' render={ () => <News />} />
        <Route exact path='/settings' render={ () => <Settings />} />
      </div>
    </BrowserRouter>
  </div>
}

export default App;
