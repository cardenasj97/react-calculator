import React from 'react';
import PropTypes from 'prop-types';

const NumericKeyboard = ({ clearScreen, screenInput }) => {
    const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className="numeric-container">
            <div className="clear" onClick={clearScreen}>clear</div>
            {buttons.reverse().map((el, i) => 
                <div
                    onClick={screenInput}
                    className="number"
                    key={i} 
                    data-value={el}
                >{el}</div>
            )}
        </div>
    );
};

NumericKeyboard.propTypes = {
    clearScreen: PropTypes.func,
    screenInput: PropTypes.func,
    onKeyDown: PropTypes.func
};

export default NumericKeyboard;