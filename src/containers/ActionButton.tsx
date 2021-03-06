import ActionButton from '../components/ActionButton';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StoreState, Notification, NotificationActionTypes } from '../constants/actionTypes';
import { setNotification, clearNotification } from '../actions';


const mapStateToProps = (state: StoreState) => ({
    notification: state.notification
});

const mapDispatchToProps = (dispatch: Dispatch<NotificationActionTypes>) => {
    return {
        setNotification: (notification: Notification) => {dispatch(setNotification(notification))},
        clearNotification: () => {dispatch(clearNotification())},
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ActionButton);