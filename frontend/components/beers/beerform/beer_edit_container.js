import BeerForm from './beer_form';
import { connect } from 'react-redux';
import { receiveBeerErrors, updateBeer, fetchBeer } from '../../../actions/beer_actions';

const mapStateToProps = (state, ownProps) => {
    let beerId = ownProps.match.params.beerId;
    let beer = state.entities.beers[beerId];
    return({
        beer: beer,
        beerId: beerId,
        formType: 'Edit',
        errors: state.errors
    });
};

const mapDispatchToProps = (dispatch) => ({
    updateBeer: (beer) => (dispatch(updateBeer(beer))),
    fetchBeer: (beerId) => (dispatch(fetchBeer(beerId))),
    receiveBeerErrors: (errors) => (dispatch(receiveBeerErrors(errors)))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerForm);