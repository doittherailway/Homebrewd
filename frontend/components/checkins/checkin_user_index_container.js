import { connect } from 'react-redux';
import CheckinIndex from './checkin_index';
import { fetchResourceCheckins } from '../../actions/checkin_actions';

const mapStateToProps = (state) => ({
    checkins: Object.values(state.entities.checkins),
    users: state.entities.users,
    beers: state.entities.beers,
    currentUserId: state.session.currentUserId,
    breweries: state.entities.breweries
});

const mapDispatchToProps = (dispatch, ownProps) => {
    let userId = ownProps.userId;
    return ({
        fetchRelevantCheckins: () => (dispatch(fetchResourceCheckins('User', userId))),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckinIndex);
