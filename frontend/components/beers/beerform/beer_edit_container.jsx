import BeerForm from './beer_form';
import { connect } from 'react-redux';
import { receiveBeerErrors, updateBeer, fetchBeer } from '../../../actions/beer_actions';
import React from 'react';

class EditBeerForm extends React.Component {

  componentDidMount() {
    this.props.fetchBeer(this.props.beerId);
  }

  render () {
    if (this.props.beer !== undefined && this.props.brewery !== undefined){
      const { beer, formType, beerFormAction, errors, brewery} = this.props;
      return (
        <BeerForm
          beer={beer}
          formType={formType}
          beerFormAction={beerFormAction}
          receiveBeerErrors={receiveBeerErrors}
          errors={errors}
          selectedStyle={beer.beerType}
          brewery={brewery} />
      );
    } else {
      return (null);
    }
  }
}



const mapStateToProps = (state, ownProps) => {
  
    let beerId = ownProps.match.params.beerId;
    let beer = state.entities.beers[beerId];
    let brewery
    if (beer !== undefined)
    {brewery = state.entities.breweries[beer.breweryId].name}
    return({
        beer: beer,
        beerId: beerId,
        formType: 'Edit',
        errors: state.errors,
        brewery: brewery
    });
};

const mapDispatchToProps = (dispatch) => ({
    beerFormAction: (beer, id) => (dispatch(updateBeer(beer, id))),
    fetchBeer: (beerId) => (dispatch(fetchBeer(beerId))),
    receiveBeerErrors: (errors) => (dispatch(receiveBeerErrors(errors)))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBeerForm);