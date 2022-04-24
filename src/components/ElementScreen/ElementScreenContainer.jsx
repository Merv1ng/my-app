import { connect } from "react-redux";
import { addReviewActionCreator, updateNewReviwsTextActionCreator } from "../../redux/reviewsReducer";
import ElementScreen from "./ElementScreen"


let mapStateToProps = (state) => {
  return {
    review: state.reviewsPadge.review,
    newReviewsText: state.reviewsPadge.newReviewsText
  }
}


let mapDispatchToPorps = (dispatch) => {
  return {
    updateNewReviewsElement: (text) => {
      dispatch(updateNewReviwsTextActionCreator(text))
    },

    addReview: () => {
      dispatch(addReviewActionCreator());
    },
  }
}

const ElementScreenContainer = connect(mapStateToProps, mapDispatchToPorps)(ElementScreen);


export default ElementScreenContainer;