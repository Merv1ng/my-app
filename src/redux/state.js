const ADD_REVIEWS = 'ADD-REVIEWS';
const UPDATE_NEW_REVIEWS_TEXT = 'UPDATE-NEW-REVIEWS-TEXT';


let store = {
    _state: {
        positsionsPage: {
            positsions: [
                {
                    photo: <img src="https://sochi.mirplatev.ru/wa-data/public/shop/products/91/20/2091/images/2510/2510.280x400.jpg" alt="" />,
                    description: 'The dress 1',
                    price: 'Price 1',
                },
                {
                    photo: <img src="https://images.wbstatic.net/big/new/4790000/4791765-1.jpg" alt="" />,
                    description: 'The dress 2',
                    price: 'Price 2',
                },

                {

                    photo: <img src="https://imgcdn.zarina.ru/upload/images/03274/thumb/450_9999/0327423523_101.jpg?t=1632468227" alt="" />,
                    description: 'The dress 3',
                    price: 'Price 3',
                },

                {

                    photo: <img src="https://www.vitoricci.ru/images/130851382122051421-0.jpg" alt="" />,
                    description: 'The dress 4',
                    price: 'Price 4',
                },

                {

                    photo: <img src="https://kupit-platye.ru/wp-content/uploads/2017/10/korotkoye-platye-vishnyovogo-tsvyeta-s-rasklyeshyonnoy-yubkoy-i-rukavom-fonarik-ds00290ch-2.jpg" alt="" />,
                    description: 'The dress 5',
                    price: 'Price 5',
                },

                {

                    photo: <img src="https://princessdress.ru/upload/shop/140950_(2).jpg" alt="" />,
                    description: 'The dress 6',
                    price: 'Price 6',
                },


            ]
        },

        baskePadge: {
            baskets: [
                {
                    id: 1,
                    photo: <img src="https://sochi.mirplatev.ru/wa-data/public/shop/products/91/20/2091/images/2510/2510.280x400.jpg" alt="Anj" />,
                    description: 'The dress 1',
                    price: 'Price 1',
                },
                {
                    id: 2,
                    photo: <img src="https://images.wbstatic.net/big/new/4790000/4791765-1.jpg" alt="Anj" />,
                    description: 'The dress 2',
                    price: 'Price 2',
                },
            ]
        },

        reviewsElement: {
            review: [
                { id: 1, message: 'bla bla ' },
                { id: 2, message: 'lal' },
            ],
            newReviewsText: [
                'Напишите свой отзыв'
            ]
        },
    },
    _callSubscriber() {
        console.log('');
    },

    getState() {
        return this._state;

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_REVIEWS) {
            let newReviews = {
                id: 5,
                message: this._state.reviewsElement.newReviewsText
            }
            this._state.reviewsElement.review.push(newReviews);
            this._state.reviewsElement.newReviewsText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_REVIEWS_TEXT) {
            this._state.reviewsElement.newReviewsText = action.newTex
            this._callSubscriber(this._state);
        }
    },

}

export const addReviewActionCreator = () => ({ type: 'ADD-REVIEWS' })

export const updateNewReviwsTextActionCreator = (text) => ({ type: 'UPDATE-NEW-REVIEWS-TEXT', newTex: text })

export default store;
window.store = store;