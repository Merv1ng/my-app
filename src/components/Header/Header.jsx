import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = () => {
    return (
        
        <header className={s.header}>
            <div className={s.headerInfo}>
                
                <NavLink  className = { navData => navData.isActive ? s.active : s.item }to="/delivery">Доставка и оплата</NavLink>
                <NavLink  className = { navData => navData.isActive ? s.active : s.item } to="URL">Контакты</NavLink>
                <NavLink  className = { navData => navData.isActive ? s.active : s.item } to="/product">Каталог</NavLink>
            </div>
        </header >
    )
}


export default Header;