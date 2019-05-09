import React from 'react';
import { connect } from 'react-redux';
import { fetchResults } from '../../actions/search_actions';
import SearchBar from './searchbar';

const mapStateToProps = (state) => {
    return ({
        results: Object.values(state.entities.search)
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchResults: (query) => (dispatch(fetchResults(query)))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);