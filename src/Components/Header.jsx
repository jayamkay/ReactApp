import headerCSS from './Header.module.css';

// let headerCSS = {                             Представление CSS-модуля объектом JS
//     'header': 'Header_header__1GDG3'
//     'img': 'Header_img__34ceX'
// }

// console.log(headerCSS)                        Выводит объект в консоль


const Header = () => {

     /* 1й вариант - привенены стили ко всем изображениям в классе header */
    // return <header className={headerCSS.header}>
    //     <img src='https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png'></img>
    // </header>

    /* 2й вариант - создан отдельный класс в модуле, изменяющий конкретное, относящееся
    к данному классу изображение*/
    return <header className={headerCSS.header}>
        <img className={headerCSS.img} src='https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png'></img>
    </header>
}

export default Header;