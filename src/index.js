import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App baskets={store.getState().baskePadge.baskets}
                    positsions={store.getState().positsionsPage.positsions}
                    review={store.getState().reviewsElement.review}
                    newReviewsText={store.getState().newReviewsText}
                    addReviews={store.addReviews.bind(store)}
                    updateNewReviewsText={store.updateNewReviewsText.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

reportWebVitals();

store.subscribe(rerenderEntireTree);
