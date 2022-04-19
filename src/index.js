import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App baskets={store.getState().basketPadge.baskets}
                    positsions={store.getState().positsionsPage.positsions}
                    review={store.getState().reviewsElement.review}
                    newReviewsText={store.getState().newReviewsText}
                    dispatch={store.dispatch.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

reportWebVitals();

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);

});
