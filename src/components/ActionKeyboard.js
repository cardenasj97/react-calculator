import React from 'react';
import PropTypes from 'prop-types';

const ActionKeyboard = ({ screenInput }) => {
    const operators = ['÷', '-', '+', '='];

    return (
        <div className="action-container">
            {operators.map((el, i) =>
                <div
                    onClick={screenInput}
                    className="action" 
                    key={i}
                    data-value={el}                
                    >{el}</div>
            )}
        </div>
    );
};

ActionKeyboard.propTypes = {
    screenInput: PropTypes.func
};

export default ActionKeyboard;