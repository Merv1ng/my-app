import React from "react"
import s from "./SearchModule.module.css"
import elementPhoto from "../../assets/images/elementPhoto.jpg"
import { NavLink } from "react-router-dom";

let SearchModule = (props) => {
    let pagesCount = Math.ceil(props.totalElementsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) { pages.push(i) }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <button className={props.currentPage === p && s.selectPage} onClick={(e) => props.onPageChanged(p)}>{p}</button>
                })}
            </div>
            {
                props.elements.map(e => <div key={e.id}>
                    <div >
                        <NavLink to={'/elementScreen'}>
                            <img src={elementPhoto} alt={'Фото'} className={s.elementPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {e.inTheCart ? <button onClick={() => { props.removeFromCart(e.id) }}>Добавить в корзину</button>
                            : <button onClick={() => { props.inTheCart(e.id) }}>Удалить из корзины</button>}
                    </div>
                    <div>
                        <div>{e.name}</div>
                        <div>{e.status}</div>
                    </div>
                </div>)
            } </div>)
}

export default SearchModule;