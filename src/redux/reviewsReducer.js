const ADD_REVIEWS = 'ADD-REVIEWS';
const UPDATE_NEW_REVIEWS_TEXT = 'UPDATE-NEW-REVIEWS-TEXT';


let initialState = {
    review: [
        { id: 1, message: 'cool' },
        { id: 2, message: 'Nice' },],
    newReviewsText: 'Напишите свой отзыв'
};

const reviewsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_REVIEWS:
            let newReviews = {
                id: 5,
                message: state.newReviewsText
            };
            return {
                ...state,
                review: [...state.review, newReviews],
                newReviewsText: '',
            };
        case UPDATE_NEW_REVIEWS_TEXT:
            return {
                ...state,
                newReviewsText: action.newText,
            };
        default:
            return state;
    }
}

export const addReviewActionCreator = () => ({ type: 'ADD-REVIEWS' })
export const updateNewReviwsTextActionCreator = (text) => ({ type: 'UPDATE-NEW-REVIEWS-TEXT', newText: text })


export default reviewsReducer;