import BeerForm from './beer_form';
import { connect } from 'react-redux';
import { receiveBeerErrors, createBeer } from '../../../actions/beer_actions';

const mapStateToProps = (state) => ({
    formType: 'Add',
    beer: { name: "", 
            brewery_id: 1,
            beer_type: "",
            description: "",
            abv: ""
        },
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    createBeer: (beer) => (dispatch(createBeer(beer))),
    receiveBeerErrors: (errors) => (dispatch(receiveBeerErrors(errors)))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerForm);