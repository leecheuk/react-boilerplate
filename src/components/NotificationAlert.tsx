import React, {Component} from 'react';
import {Notification} from '../constants/actionTypes';

interface MyProps {
    notification: Notification
}

class NotificationAlert extends Component<MyProps, {}> {
    render() {
        return (
            <>
            {this.props.notification.text ? <div className="alert alert-success">
                {this.props.notification.text}
            </div> : null}
            </>
        )
    }
}

export default NotificationAlert;