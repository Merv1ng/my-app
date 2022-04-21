import React from "react";
import { addReviewActionCreator, updateNewReviwsTextActionCreator } from "../../redux/reviewsReducer";
import StoreContext from "../../StoreContext";
import ElementScreen from "./ElementScreen"


const ElementScreenContainer = (props) => {

  return (
    <StoreContext.Consumer  >
      {(store) => {
        let state = store.getState();

        let addReview = () => store.dispatch(addReviewActionCreator());

        let onReviewsChange = (text) => {
          let action = updateNewReviwsTextActionCreator(text);
          store.dispatch(action);
        }

        return <ElementScreen updateNewReviewsElement={onReviewsChange} addReview={addReview}
          review={store.getState().reviewsElement.review} newReviewsText={store.getState().reviewsElement.newReviewsText} />

      }
      }
    </StoreContext.Consumer>
  )
}


export default ElementScreenContainer;