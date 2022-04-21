import { connect } from "react-redux";
import { addReviewActionCreator, updateNewReviwsTextActionCreator } from "../../redux/reviewsReducer";
import ElementScreen from "./ElementScreen"


let mapStateToProps = (state) => {
  return {
    review: state.reviewsElement.review,
    newReviewsText: state.reviewsElement.newReviewsText
  }
}


let mapDispatchToPorps = (dispatch) => {
  return {
    updateNewReviewsElement: () => {
      dispatch(addReviewActionCreator())
    },
    addReview: (text) => {
      dispatch(updateNewReviwsTextActionCreator(text));
    },
  }
}

const ElementScreenContainer = connect(mapStateToProps, mapDispatchToPorps)(ElementScreen);


export default ElementScreenContainer;