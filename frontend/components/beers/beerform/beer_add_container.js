import BeerForm from './beer_form';
import { connect } from 'react-redux';
import { receiveBeerErrors, createBeer } from '../../../actions/beer_actions';

const mapStateToProps = (state) => ({
    formType: 'Add',
    beer: { name: "", 
            brewery_id: 1,
            beerType: "Belgian",
            description: "",
            abv: "",
            brewery: ""
        },
    errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
    beerFormAction: (beer) => (dispatch(createBeer(beer))),
    receiveBeerErrors: (errors) => (dispatch(receiveBeerErrors(errors)))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerForm);