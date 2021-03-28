import navbarCSS from './Navbar.module.css';


const Navbar = () => {
  return <nav className={navbarCSS.nav}>
  <div className={navbarCSS.item}><a href='/profile'>Profile</a></div>
  <div className={navbarCSS.item}><a href='/dialogs'>Messages</a></div>
  <div className={navbarCSS.item}><a href='/news'>News</a></div>
  <div className={navbarCSS.item}><a href='/music'>Music</a></div><br></br>
  <div className={navbarCSS.item}><a href='/settings'>Settings</a></div>
</nav>
}


export default Navbar;