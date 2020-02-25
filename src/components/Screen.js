import React from 'react';
import PropTypes from 'prop-types';

const Screen = (props) => {
    return (
        <div className="screen-container">
            <input type="text" value={props.screenContent} readOnly/>
        </div>
    );
};

Screen.propTypes = {
    screenContent: PropTypes.string
};

export default Screen;