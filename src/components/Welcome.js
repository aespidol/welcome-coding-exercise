import React from 'react';
import PropTypes from 'prop-types';

const Welcome = props => {
    return (
        <div className="white-text magenta-bg vertical-fill">
            <h1>Welcome to T-Mobile</h1>
            <h2>We're excited to meet you</h2>
            <div className="img-container">
                <img src={props.imgLink} className="img-responsive" alt="Welcome Image" />
            </div>
        </div>
    );
};

Welcome.propTypes = {
    imgLink: PropTypes.string.isRequired,
};

Welcome.defaultProps = {
    imgLink: "http://via.placeholder.com/400x200"
}

export default Welcome;