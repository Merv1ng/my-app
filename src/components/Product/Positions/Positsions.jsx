import { NavLink } from 'react-router-dom';
import Positsion from './Position/Position';
import s from './Positsions.module.css'


const Positsions = (props) => {

  let positsionsElements = props.positsions.map(p => <Positsion photo={p.photo} description={p.description} price={p.price} />);

  return (
    <div className={s.positsions}>
      <NavLink to="/elementScreen">
        <div className={s.element}>{positsionsElements} </div>
      </NavLink>
    </div>
  )
}

export default Positsions;