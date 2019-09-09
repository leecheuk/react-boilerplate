import React, {Component} from 'react';
import {Notification} from '../constants/actionTypes'; 

interface MyProps {
    setNotification(notification: Notification): void
    clearNotification(): void
}

interface MyState {
    isClicked: boolean
}

class ActionButton extends Component<MyProps, MyState> {
    constructor(props: MyProps) {
        super(props)
        this.state = {
            isClicked: false
        }
    }

    onClick() {
        if (this.state.isClicked) {
            console.log('clicked')
            this.props.clearNotification();
        } else {
            const n: Notification = {
                text: "hello",
                isError: false
            }
            this.props.setNotification(n);
        }
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={this.onClick.bind(this)}>
                {this.state.isClicked ? 'Clear' : 'Say "hello"'}
            </button>
        )
    }
}

export default ActionButton;