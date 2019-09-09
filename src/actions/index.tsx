import { 
    SET_NOTIFICATION, 
    CLEAR_NOTIFICATION,
    ADD_RESOURCE,
    DELETE_RESOURCE,
    NotificationActionTypes, 
    Notification,
    ResourceActionTypes, 
    Resource 
} from '../constants/actionTypes';

export const setNotification = (notification: Notification): NotificationActionTypes => ({
    type: SET_NOTIFICATION,
    notification
});

export const clearNotification = (): NotificationActionTypes => ({
    type: CLEAR_NOTIFICATION
});

export const addResource = (payload: Resource): ResourceActionTypes => ({
    type: ADD_RESOURCE,
    payload
});

export const deleteResource = (payload: Resource): ResourceActionTypes => ({
    type: DELETE_RESOURCE,
    payload
})