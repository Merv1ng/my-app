import Positsions from './Positions/Positsions';
import s from './Product.module.css'


const Product = (props) => {

  return (
    <div className={s.product}>
      {/* <div>Слайдер с рекламой</div>  */}
      <Positsions positsions={props.positsions}/>
    </div>
  )
}

export default Product;