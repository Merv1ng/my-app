import { NavLink } from 'react-router-dom';
import s from './Info.module.css'



const Info = () => {
    return (
        <div className={s.info}>
            <a className={s.menu}>
                <a className={s.search}>
                </a>
                <NavLink className={s.basket} to="/basket"><img src="https://baden-shop.ru/images/basket.png" alt="" /></NavLink>
            </a>
        </div>
    )
}

export default Info;