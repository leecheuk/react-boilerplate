import React, {Component} from 'react';
import {Notification} from '../constants/actionTypes'; 

interface MyProps {
    notification: Notification
    setNotification(notification: Notification): void
    clearNotification(): void
}

class ActionButton extends Component<MyProps> {
    onClick() {
        if (this.props.notification.text) {
            this.props.clearNotification();
        } else {
            const n: Notification = {
                text: "hello",
                isError: false
            }
            this.props.setNotification(n);
        }
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={this.onClick.bind(this)}>
                {this.props.notification.text ? 'Clear' : 'Say "hello"'}
            </button>
        )
    }
}

export default ActionButton;