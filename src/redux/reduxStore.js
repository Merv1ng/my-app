import { combineReducers, createStore } from "redux";
import reviewsReducer from './reviewsReducer'
import positsionsReducer from './positsionsReducer'
import basketReducer from './basketReducer'

let reducers = combineReducers ({
    positsionsPage:positsionsReducer ,
    basketPadge:basketReducer ,
    reviewsElement:reviewsReducer
});

let store = createStore(reducers);  



export default store;