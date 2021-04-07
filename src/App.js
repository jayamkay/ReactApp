import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import profile from './Components/Profile/Profile';
import Dialogs_js_object from "./Components/Dialogs/Dialogs";
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';


const App = () => {
  return <div className='app-wrapper'>
    <Header />
    <BrowserRouter>
    <Navbar />
      <div className='app-wrapper-content'>
        <Route exact path='/profile' component={profile} />
        <Route exact path='/dialogs' component={Dialogs_js_object} />
        <Route exact path='/music' component={Music} />
        <Route exact path='/news' component={News} />
        <Route path='/settings' component={Settings} />
      </div>
    </BrowserRouter>
  </div>
}

export default App;
