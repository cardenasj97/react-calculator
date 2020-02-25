import React, { useState } from 'react';
import Screen from './Screen';
import NumericKeyboard from './NumericKeyboard';
import ActionKeyboard from './ActionKeyboard';

const Calculator = () => {
    const [screenContent, setScreenContent] = useState('');
    const [contentArray, setContentArray] = useState([]);

    const clear = () => {
        setContentArray([]);
        setScreenContent('');
    };

    const updateLastArrayValue = (lastInput, inputContent) => {
        // Position of last element in the array
        const lastArrayPosition = contentArray.length - 1;

        // New concatenated value
        const newAmount = lastInput + inputContent;

        // Update the last element in the array
        contentArray[lastArrayPosition] = newAmount;

        // Update the screen content
        const value = `${screenContent}${inputContent}`;

        return value;
    };

    const type = event => {
        const inputContent = event.target.dataset.value;
        const operators = ['÷', '-', '+', '='];
        const lastInput = contentArray.slice(-1).toString();

        // If screen is empty then don't let type zero
        if (!screenContent.length && inputContent === '0') {
            return;
        }

        // If result is undefined, clean the states
        if (screenContent === 'undefined') {
            setContentArray([]);
            setScreenContent('');
            return;
        }

        // Operations only between 2 amounts
        if (contentArray.length < 3 || inputContent === '=') {
            // Operate the algebraic expression
            if (inputContent === '=') {
                if (contentArray.length !== 3) {
                    return;
                }
                if(!operators.includes(lastInput)) {
                    const firstNumber = parseInt(contentArray[contentArray.length - 3]);
                    const secondNumber = parseInt(contentArray[contentArray.length - 1]);
                    const operator = contentArray[contentArray.length - 2];
                    let result = '';

                    switch(operator) {
                        case '÷':
                            if (!secondNumber) {
                                result = 'undefined';
                            } else {
                                result = (firstNumber / secondNumber);                          
                            }
                            break;
                        case '-':
                            result = (firstNumber - secondNumber);
                            break;
                        case '+':
                            result = (firstNumber + secondNumber);
                            break;
                        default:
                            break;
                    }

                    result = result.toString();
                    setScreenContent(result);  
                    setContentArray([result]);
                    return;
                }
            }

            // Check if the last element and the element typed are operators
            const isOperatorRepeated = operators.includes(lastInput) ? operators.includes(inputContent) : false;
            
            if (!isOperatorRepeated) {
                // Check if the user tries to use an operator when the screen is empty
                if (screenContent.length === 0 && operators.includes(inputContent)) {
                    return;
                }

                // If last input is a number, new input is a number,
                // and also the screen content is not empty...
                if (!isNaN(lastInput) && !operators.includes(inputContent) && screenContent.length) {
                    const value = updateLastArrayValue(lastInput, inputContent);
                    setScreenContent(value);
                    return;                   
                }

                // Update the screen content
                const value = `${screenContent}${inputContent}`;
                setScreenContent(value);

                // Push the value to the contentArray and update the state                
                contentArray.push(inputContent);
                return;
            }
        } else if (!isNaN(lastInput) && !isNaN(inputContent)) {
            const value = updateLastArrayValue(lastInput, inputContent);
            setScreenContent(value);
        }
    };

    return (
        <React.Fragment>
            <Screen 
                screenContent={screenContent} 
            />
            <NumericKeyboard 
                clearScreen={clear}
                screenInput={type}
            />
            <ActionKeyboard 
                screenInput={type}
            />
        </React.Fragment>
          
    );
};

export default Calculator;