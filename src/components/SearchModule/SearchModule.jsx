import s from "./SearchModule.module.css"

let SearchModule = (props) => {
    return (
        <div>
            {props.elements.map(e => <div key={e.id}>
                <div >
                    <img src={e.photo} alt={'Фото'} className={s.elementPhoto} />
                </div>

                <div>
                    {e.inTheCart
                        ? <button onClick={() => { props.removeFromCart(e.id) }}>Добавить в корзину</button>
                        : <button onClick={() => { props.inTheCart(e.id) }}>Удалить из корзины</button>}
                </div>

                <div>
                    <div>Описание</div>
                    <div>Цена</div>
                </div>

            </div>)}
        </div>

    )
}


export default SearchModule;