import React from "react";
import { NavLink } from "react-router-dom";
import s from "./ElementScreen.module.css"
import Reviews from "./Reviews";




const ElementScreen = (props) => {

  let reviewsElement =
    props.review.map(r => <Reviews id={r.id} message={r.message} />);

  let newReviewsElement = React.createRef();

  let addReview = () => {
    debugger;
    let text = newReviewsElement.current.value;
    props.addReviews(text);
    newReviewsElement.current.value = '';
  }

  return (
    <div className={s.elementScreen}>
      <div>
        <div> <NavLink className={s.item} to="/product">Назад к покупкам</NavLink></div>
        <div className={s.elementImg}> <img src="https://images.wbstatic.net/big/new/4790000/4791765-1.jpg" alt="" />  </div>
      </div>

      <div className={s.reviews}>
        <textarea className={s.reviewsTextarea} ref={newReviewsElement}></textarea>
        <div><button className={s.send} onClick={addReview}> отправить</button></div>
        <div className={s.reviewsElement}> {reviewsElement}</div>
      </div>

    </div>
  )
}



export default ElementScreen;