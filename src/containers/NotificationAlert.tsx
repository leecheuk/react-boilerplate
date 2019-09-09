import { connect } from 'react-redux';
import NotificationAlert from '../components/NotificationAlert';
import { StoreState } from '../constants/actionTypes';

const mapStateToProps = (state: StoreState) => ({
    notification: state.notification
});

export default connect(
    mapStateToProps,
)(NotificationAlert);