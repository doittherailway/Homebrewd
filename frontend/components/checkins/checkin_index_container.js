import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { fetchCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state) => ({
    checkins: Object.values(state.entities.checkins)
});

const mapDispatchToProps = (dispatch) => ({
    fetchRelevantCheckins: () => (dispatch(fetchCheckins())),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);

//    fetchResourceCheckins: (resourceType, resourceId) => (dispatch(fetchResourceCheckins(resourceType, resourceId)))