import React from 'react';
import s from './Positsion.module.css'


const Positsion = (props) => {

  return (
    <div className={s.positsion}>
      {props.id}
      <div className={s.photo}> {props.photo} </div>
      <div className={s.description}> {props.description}</div>
      <div className={s.price}>  {props.price} </div>
    </div>
  )
}
export default Positsion;