import { connect } from 'react-redux';
import CheckinBeerIndex from './checkin_beer_index';
import { fetchResourceCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state) => ({
    checkins: Object.values(state.entities.checkins),
    users: state.entities.users,
    beers: state.entities.beers, 
    currentUserId: state.session.currentUserId,
    breweries: state.entities.breweries,
    indexType: "Beer"
});

const mapDispatchToProps = (dispatch, ownProps) => {
    let beerId = ownProps.beerId;
    return({
    fetchRelevantCheckins: () => (dispatch(fetchResourceCheckins('Beer', beerId))),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinBeerIndex);

//    fetchResourceCheckins: (resourceType, resourceId) => (dispatch(fetchResourceCheckins(resourceType, resourceId)))