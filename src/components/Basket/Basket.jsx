import s from './Basket.module.css'
import { NavLink } from 'react-router-dom';
import BasketPos from './BasketPos/BasketPos';
import React from 'react';


const Basket = (props) => {
    
    let basketElements = props.baskets.map (b => <BasketPos photo={b.photo} description={b.description} price={b.price} />);

    return (
        <div className={s.basket}>
            <h4 className={s.basketContents}> Содержимое корзины </h4>
            <div className={s.element}>  {basketElements}</div>
            
            <button className={s.order} >Оформить заказ</button>
            <div> <NavLink className={navData => navData.isActive ? s.active : s.item} to="/product">Назад к покупкам</NavLink></div>
        </div>
    )
}


export default Basket;
