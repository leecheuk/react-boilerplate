import React, {Component} from "react";
import {Link} from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <>
                <p>About Page</p>
                <Link to="/">Back</Link>
            </>
        )
    }
}

export default About