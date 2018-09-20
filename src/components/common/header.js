import React from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingBar from 'react-redux-loading-bar';

const Header = () => {
    return (
        <div>
            
            <nav>
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="/courses" activeClassName="active">Courses</Link>
                {" | "}
                <Link to="/about" activeClassName="active">About</Link>
            </nav>
            <LoadingBar />
            <p>test</p>
        </div>
    );
};

export default Header;