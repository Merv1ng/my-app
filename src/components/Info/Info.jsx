import { NavLink } from 'react-router-dom';
import s from './Info.module.css'


const Info = () => {
    return (

        <div className={s.info}>
            <NavLink className={s.basket} to="/basket"><img src="https://baden-shop.ru/images/basket.png" alt="" /></NavLink>
        </div>
    )
}

export default Info;