import { connect } from "react-redux";
import SearchModule from "./SearchModule";
import {addToCartAC, removeFromCartAC ,setElementsAC} from "../../redux/searchModuleReducer"



let mapStateToProps = (state) => {
    return {
        elements: state.seayrchModulePage.elements
    }
}
let mapDispatchToPorps = (dispatch) => {
    return {
        inTheCart: (elementId) => {
            dispatch(addToCartAC(elementId))
        },

        removeFromCart: (elementId) => {
            dispatch(removeFromCartAC(elementId))
        },

        setElements: (elements) => {
            dispatch(setElementsAC(elements))
        }

    }
}

    export default connect(mapStateToProps, mapDispatchToPorps)(SearchModule);