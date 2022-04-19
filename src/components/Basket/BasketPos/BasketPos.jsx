import s from './BasketPos.module.css'


const BasketPos = (props) => {


    return (
        <div className={s.BasketPos}>
            <div>{props.photo}</div>
            <div className={s.description}>{props.description} </div>
            <div className={s.price}>{props.price}</div>
        </div>
    )
}

export default BasketPos;