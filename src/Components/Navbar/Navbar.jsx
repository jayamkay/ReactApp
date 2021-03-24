import navbarCSS from './Navbar.module.css';

/* 1й вариант - применен цвет текста ко всему модулю */
// const Navbar = () => {
//     return <nav className={navbarCSS.nav}> {/* nav - тэг, определяющий набор навизационных ссылок */}
//     <div><a>Profile</a></div>
//     <div><a>Messages</a></div>
//     <div><a>News</a></div>
//     <div><a>Music</a></div><br></br>
//     <div><a>Settings</a></div>
//   </nav>
// }


/* 2й вариант - применен цвет текста к отдельным тэгам */
const Navbar = () => {
  return <nav className={navbarCSS.nav}> {/* nav - тэг, определяющий набор навизационных ссылок */}
  <div className={navbarCSS.item}><a>Profile</a></div>
  <div className={navbarCSS.item}><a>Messages</a></div>
  <div className={navbarCSS.item}><a>News</a></div>
  <div className={navbarCSS.item}><a>Music</a></div><br></br>
  <div className={navbarCSS.item}><a>Settings</a></div>
</nav>
}


export default Navbar;