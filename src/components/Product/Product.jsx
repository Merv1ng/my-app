import Positsions from './Positions/Positsions';
import s from './Product.module.css'


const Product = (props) => {

  return (
    
    <div className={s.product}>
      <Positsions positsions={props.positsions} />
    </div>
  )
}

export default Product;