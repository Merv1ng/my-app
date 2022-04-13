
import s from './Basket.module.css'
import BasketPos from './BasketPos/BasketPos';
import { NavLink } from 'react-router-dom';

const Basket = (props) => {

    


    return (
        <div className={s.basket}>
            <div className={s.basketContents}> <h4> Содержимое корзины </h4></div>
            <a href='' className={s.basketItem}>
                <div className={s.element}>{props.baskets}</div>
            </a>
            <button className={s.order}>Оформить заказ</button>
            <div>
                <NavLink className={navData => navData.isActive ? s.active : s.item} to="/product">Назад к покупкам</NavLink>
            </div>
        </div>
    )
}


export default Basket;
