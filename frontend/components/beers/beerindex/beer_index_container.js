import { connect } from 'react-redux';
import BeerIndex from './beer_index';
import { fetchBeers } from '../../../actions/beer_actions';

const mapStateToProps = (state) => ({
    beers: Object.values(state.entities.beers)
});

const mapDispatchToProps = (dispatch) => ({
    fetchBeers: () => (dispatch(fetchBeers()))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerIndex);