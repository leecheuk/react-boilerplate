import React, {Component} from "react";
import {Link} from 'react-router-dom';
import ActionButton from '../containers/ActionButton';

class Home extends Component {
    render() {
        return (
            <>
                <p>Home Page</p>
                <ActionButton/>
                <br/>
                <Link to="/about">About Us</Link>
            </>
        )
    }
}

export default Home