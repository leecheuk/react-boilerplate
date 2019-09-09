import { combineReducers } from 'redux';
import resource from './resource';
import notification from './notification';

export default combineReducers({
    resource,
    notification
});