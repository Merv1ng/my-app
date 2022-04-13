import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import s from './Positsions.module.css'


const Positsions = (props) => {
  
  return (
    <div className={s.positsions}>
      <NavLink to='product/1'>
    <div className={s.element}>{props.positsions} </div>
      </NavLink>
    </div>
  )
}

export default Positsions;