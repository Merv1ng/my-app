const ADD_TO_CART = 'ADD-TO-CART ';
const REMOVE_FROM_CART = 'REMOVE-FROM-CART';
const SET_ELEMENTS = 'SET-ELEMENTS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_ELEMENTS_COUNT = 'SET-TOTAL-ELEMENTS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';



let initialState = {
    elements: [],
    pageSize: 100,
    totalElementsCount: 0,
    currentPage: [],
    isFetching: true,
};

const searchModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                elements: state.elements.map(e => {
                    if (e.id === action.elementsId) {
                        return { ...e, inTheCart: true };
                    } return e;
                })
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                elements: state.elements.map(e => {
                    if (e.id === action.elementsId) {
                        return { ...e, inTheCart: false };
                    } return e;
                })
            };
        case SET_ELEMENTS:
            return { ...state, elements: action.elements }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_ELEMENTS_COUNT:
            return { ...state, totalElementsCount: action.count }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default: return state;
    }
};

export const inTheCart = (elementsId) => ({ type: ADD_TO_CART, elementsId })
export const removeFromCart = (elementsId) => ({ type: REMOVE_FROM_CART, elementsId })
export const setElements = (elements) => ({ type: SET_ELEMENTS, elements })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalElementsCount = (totalElementsCount) => ({ type: SET_TOTAL_ELEMENTS_COUNT, count: totalElementsCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })


export default searchModuleReducer;