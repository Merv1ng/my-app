import React from "react";
import { addReviewActionCreator, updateNewReviwsTextActionCreator } from "../../redux/reviewsReducer";
import ElementScreen from "./ElementScreen"


const ElementScreenContainer = (props) => {

  debugger;
  let state = props.store.getState();

  let addReview = () => props.store.dispatch(addReviewActionCreator());

  let onReviewsChange = (text) => {
    let action = updateNewReviwsTextActionCreator(text);
    props.store.dispatch(action);
  }

  return (
    <div >
      <ElementScreen updateNewReviewsElement={onReviewsChange} addReview={addReview}
        review={state.reviewsElement.review} newReviewsText={state.reviewsElement.newReviewsText} />
    </div>
  )
}


export default ElementScreenContainer;