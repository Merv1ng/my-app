const ADD_REVIEWS = 'ADD-REVIEWS';
const UPDATE_NEW_REVIEWS_TEXT = 'UPDATE-NEW-REVIEWS-TEXT';

let initialState = {
    review: [
        { id: 1, message: '' },
    ],
    newReviewsText: [
        'Напишите свой отзыв'
    ]
}

const reviewsReducer = (state = initialState, action) => {

    switch (action.type) {
        case
            ADD_REVIEWS:
            let newReviews = { id: 5, message: state.newReviewsText };
            state.review.push(newReviews);
            state.newReviewsText = '';
            return state;
        case
            UPDATE_NEW_REVIEWS_TEXT:
            state.newReviewsText = action.newText
            return state;
        default:
            return state;
    }
}

export const addReviewActionCreator = () => ({ type: 'ADD-REVIEWS' })
export const updateNewReviwsTextActionCreator = (text) => ({ type: 'UPDATE-NEW-REVIEWS-TEXT', newText: text })


export default reviewsReducer;