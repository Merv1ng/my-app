import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerInfo}>
                <NavLink className={s.nav} to="/searchModule">Поиск</NavLink>
                <NavLink className={s.nav} to="URL">Контакты</NavLink>
                <NavLink className={s.nav} to="/product">Каталог</NavLink>
            </div>
        </header >
    )
}


export default Header;