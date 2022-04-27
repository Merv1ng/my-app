import { combineReducers, createStore } from "redux";
import reviewsReducer from './reviewsReducer'
import positsionsReducer from './positsionsReducer'
import basketReducer from './basketReducer'
import searchModuleReducer from './searchModuleReducer'

let reducers = combineReducers({
    positsionsPage: positsionsReducer,
    basketPadge: basketReducer,
    reviewsPadge: reviewsReducer,
    searchModulePage: searchModuleReducer
});

let store = createStore(reducers);


export default store;