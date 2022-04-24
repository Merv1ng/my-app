const ADD_TO_CART = 'ADD-TO-CART ';
const REMOVE_FROM_CART = 'REMOVE-FROM-CART';
const SET_ELEMENTS = 'SET-ELEMENTS';

let initialState = {
    elements: [
        {
            id: 1, inTheCart: true, photo: "https://sochi.mirplatev.ru/wa-data/public/shop/products/91/20/2091/images/2510/2510.280x400.jpg" ,
            description: 'The dress 1', price: 'Price 1'
        },

        {
            id: 2, inTheCart: false, photo: "https://images.wbstatic.net/big/new/4790000/4791765-1.jpg" ,
            description: 'The dress 2', price: 'Price 2',
        },
    ]
};

const searchModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                elements: state.elements.map(e => {
                    if (e.id === action.elementsId) {
                        return { ...e, inTheCart: true };
                    }
                    return e;
                })
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                elements: state.elements.map(e => {
                    if (e.id === action.elementsId) {
                        return { ...e, inTheCart: false };
                    }
                    return e;
                })
            }
        case SET_ELEMENTS:
            return {
                ...state, elements: [...state.elements, ...action.elements]
            }
        default:
            return state;
    }
};

export const addToCartAC = (elementsId) => ({ type: ADD_TO_CART, elementsId })
export const removeFromCartAC = (elementsId) => ({ type: REMOVE_FROM_CART, elementsId })
export const setElementsAC = (elements) => ({ type: SET_ELEMENTS, elements })


export default searchModuleReducer;