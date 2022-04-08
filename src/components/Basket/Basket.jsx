import { NavLink } from 'react-router-dom';
import s from './Basket.module.css'

const Basket = () => {

    return (
        <div className={s.basket}>
            
            <div><NavLink className = { navData => navData.isActive ? s.active : s.item } to="/product">Назад к покупкам</NavLink></div>
        </div>
    )
}


export default Basket;