import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';


let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}  >
                    <App baskets={store.getState().basketPadge.baskets} positsions={store.getState().positsionsPage.positsions} />
                </Provider>
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


