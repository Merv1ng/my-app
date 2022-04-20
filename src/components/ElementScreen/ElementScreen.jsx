import React from "react";
import { NavLink } from "react-router-dom";
import { addReviewActionCreator, updateNewReviwsTextActionCreator } from "../../redux/reviewsReducer";
import s from "./ElementScreen.module.css"
import Reviews from "../Review/Reviews";


const ElementScreen = (props) => {

  let reviewsElement = props.review.map(r => <Reviews id={r.id} message={r.message} />);

  let newReviewsElement = React.createRef();

  let onAddReview = () => props.addReview();

  let onReviewsChange = () => {
    let text = newReviewsElement.current.value;
    props.updateNewReviewsElement(text)
  }

  return (
    <div className={s.elementScreen}>
      <div>
        <div> <NavLink className={s.item} to="/product">Назад к покупкам</NavLink></div>

        <div className={s.elementImg}> <img src="https://images.wbstatic.net/big/new/4790000/4791765-1.jpg" alt="" />  </div>
      </div>

      <div className={s.reviews}>
        <textarea onChange={onReviewsChange}
          className={s.reviewsTextarea} ref={newReviewsElement}
          value={props.newReviewsText} />

        <div><button className={s.send} onClick={onAddReview}> отправить</button></div>

        <div className={s.reviewsElement}> {reviewsElement}</div>
      </div>

    </div>
  )
}


export default ElementScreen;