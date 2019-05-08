import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { fetchCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state, ownProps) => {
    return({
    checkins: Object.values(state.entities.checkins),
    users: state.entities.users,
    beers: state.entities.beers,
    currentUserId: state.session.currentUserId,
    breweries: state.entities.breweries
});
};

const mapDispatchToProps = (dispatch) => ({
    fetchRelevantCheckins: () => (dispatch(fetchCheckins())),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);

//    fetchResourceCheckins: (resourceType, resourceId) => (dispatch(fetchResourceCheckins(resourceType, resourceId)))