import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addReviews ,updateNewReviewsText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = (state) => {

  ReactDOM.render(

    <React.StrictMode>
      <BrowserRouter>
        <App baskets={state.baskePadge.baskets}
          positsions={state.positsionsPage.positsions}
          review={state.reviewsElement.review}
          newReviewsText={state.reviewsElement.newReviewsText}
          addReviews= {addReviews}
          updateNewReviewsText= {updateNewReviewsText}
          />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
