import { connect } from 'react-redux';
import BeerIndex from './beer_index';
import { fetchBeers } from '../../../actions/beer_actions';

const mapStateToProps = (state) => {
    return({
        beers: Object.values(state.entities.beers),
        breweries: state.entities.breweries
    });
};

const mapDispatchToProps = (dispatch) => ({
    fetchBeers: () => (dispatch(fetchBeers()))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);