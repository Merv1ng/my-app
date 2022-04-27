let store = {
    _state: {
        positsionsPage: {}, basketPadge: {}, reviewsElement: {},
    },
    _callSubscriber() { console.log(''); },
    getState() { return this._state; },
    subscribe(observer) { this._callSubscriber = observer; },

    dispatch(action) {
        this._state.positsionsPage = positsionsReducer(this._state.positsionsPage, action);
        this._state.basketPadge = basketReducer(this._state.basketPadge, action);
        this._state.reviewsElement = reviewsReducer(this._state.reviewsElement, action);
        this._callSubscriber(this._state);
    },
}
