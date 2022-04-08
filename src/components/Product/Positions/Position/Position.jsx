import s from './Positsion.module.css'

const Positsion = (props) => {
  return (

    <div className={s.positsion}>
      <a className={s.descriptionPrice} href="">
        {props.photo}
        <div className={s.description}>
          {props.description}
        </div>
        <div className={s.price}>
          {props.price}
        </div>
      </a>
    </div>
  )
}
export default Positsion;