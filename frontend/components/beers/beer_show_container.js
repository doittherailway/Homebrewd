import { connect } from 'react-redux';
import BeerShow from './beer_show';
import { fetchBeer, updateBeer, deleteBeer } from '../../actions/beer_actions';

const mapStateToProps = (state, ownProps) => {
    let beerId = ownProps.match.params.beerId;
    let beer = state.entities.beers[beerId]; 
    let userId = state.session.currentUserId;
    let brewery; 
    if (beer !== undefined) {
        brewery = state.entities.breweries[beer.breweryId];
    }
    return({
        beerId: beerId,
        beer: beer,
        userId: userId,
        brewery: brewery
    });
};

const mapDispatchToProps = (dispatch) => {
    return({
        fetchBeer: (beerId) => (dispatch(fetchBeer(beerId))),

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerShow);

//         deleteBeer: (beerId) => (dispatch(deleteBeer(beerId)))