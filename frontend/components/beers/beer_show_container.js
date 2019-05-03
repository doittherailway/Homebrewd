import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { fetchBeer, updateBeer, deleteBeer } from '../../../actions/beer_actions';

const mapStateToProps = (state, ownProps) => {
    let beerId = ownProps.match.params.beerId;
    let beer = state.entities.beers[beerId]; 
    return({
        beerId: beerId,
        beer: beer
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBeer: (beerId) => (dispatch(fetchBeer(beerId))),
        deleteBeer: (beerId) => (dispatch(deleteBeer(beerId)))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerShow);