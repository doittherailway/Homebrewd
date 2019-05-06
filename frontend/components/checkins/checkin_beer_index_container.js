import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { fetchResourceCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state) => ({
    checkins: Object.values(state.entities.checkins),
    users: state.entities.users,
    beers: state.entities.beers
});

const mapDispatchToProps = (dispatch, ownProps) => {
    let beerId = ownProps.beerId;
    return({
    fetchRelevantCheckins: () => (dispatch(fetchResourceCheckins('Beer', beerId))),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);

//    fetchResourceCheckins: (resourceType, resourceId) => (dispatch(fetchResourceCheckins(resourceType, resourceId)))