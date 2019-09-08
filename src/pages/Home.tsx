import React, {Component} from "react";
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <>
                <p>Home Page</p>
                <Link to="/about">About Us</Link>
            </>
        )
    }
}

export default Home