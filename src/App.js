import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs_js_object from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';


const App = () => {
  return <div className='app-wrapper'>
    <Header />
    <Navbar />
    <BrowserRouter>
      <div className='app-wrapper-content'>
        <Route path='/profile' component={Profile} />
        <Route path='/dialogs' component={Dialogs_js_object} />
        <Route path='/music' component={Music} />
        <Route path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
    </BrowserRouter>
  </div>
}

export default App;
