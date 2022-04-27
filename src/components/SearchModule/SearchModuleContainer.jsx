import React from "react"
import axios from "axios"
import SearchModule from "./SearchModule";
import { connect } from "react-redux";
import { inTheCart, removeFromCart, setElements, setCurrentPage, setTotalElementsCount, toggleIsFetching } from "../../redux/searchModuleReducer"
import Preloader from "../common/preloader/Ppreloader";


class SearchModuleContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?
        page=${this.props.currentPage}
        &count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setElements(response.data.items)
            this.props.setTotalElementsCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=
        ${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setElements(response.data.items)
        });
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader />
                : null}
            <SearchModule
                totalElementsCount={this.props.totalElementsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                elements={this.props.elements}
                removeFromCart={this.props.removeFromCart}
                inTheCart={this.props.inTheCart}
            />
        </>

    }

}

let mapStateToProps = (state) => {
    return {
        elements: state.searchModulePage.elements,
        pageSize: state.searchModulePage.pageSize,
        totalElementsCount: state.searchModulePage.totalElementsCount,
        currentPage: state.searchModulePage.currentPage,
        isFetching: state.searchModulePage.isFetching
    }
}



export default connect(mapStateToProps,
    {inTheCart,removeFromCart,setElements,setCurrentPage,setTotalElementsCount,toggleIsFetching,})(SearchModuleContainer);