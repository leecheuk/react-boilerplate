import {
    NotificationState, 
    NotificationActionTypes, 
    SET_NOTIFICATION, 
    CLEAR_NOTIFICATION
} from '../constants/actionTypes';

const initialState: NotificationState = {
    text: null,
    isError: false
}

const notifications = (state = initialState, action: NotificationActionTypes) : NotificationState => {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                text: action.notification.text,
                isError: action.notification.isError
            }
        case CLEAR_NOTIFICATION:
            return {
                text: null,
                isError: false
            }
        default:
            return state
    }
}

export default notifications;