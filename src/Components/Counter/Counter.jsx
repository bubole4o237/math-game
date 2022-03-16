import { useState } from 'react';
import { Link } from 'react-router-dom';
// import AutoNumeric from 'autonumeric';

import './Counter.css';

const Counter = () => {

    const [counter, setCounter] = useState(0);


    const onClickChangeCounterHandler = (e, additionalNumber) => {
        let actualCounter = 0;

        if (additionalNumber) {
            actualCounter = counter + Number(additionalNumber);
        } else if (isNaN(e.target.value) === true) {
            console.log('I am stopping :)');
            return;
        } else {
            actualCounter = counter + Number(e.target.value);
        }

        setCounter(actualCounter);
    }



    const onChangeInputCounterHandler = (e) => {
        if (isNaN(e.target.value) === true) {
            return;
        }

        setCounter(Number(e.target.value));
    }

    const onClickResetButtonHandler = () => {
        setCounter(0);
    }

    const onClickReadUserInputHandler = (e) => {

        const userInput = document.querySelector('#user_input');
        if (userInput.value === '' || Number(userInput.value) === 0 || isNaN(userInput.value) === true) {
            return;
        }

        let additionalNumber = userInput.value;
        if (e.target.value === '-') {
            additionalNumber = -Number(userInput.value);
        }

        onClickChangeCounterHandler(e, additionalNumber);

    }

    const onClickClearButtonUserInputHandler = () => {
        const userInput = document.querySelector('#user_input');
        console.log(userInput);
        userInput.value = '';
    }

    return (
        <div className='homeDiv'>
            <div className='backButton'>
                <Link to='/'>
                    <p className='titleParagraph buttonP'>Home page
                    </p>
                </Link>
            </div>
            <div>
                <input type='button' className='counterChange subtraction' onClick={onClickChangeCounterHandler} id='minus_1000' name='minus_1000' value='-1000' />
                <input type='button' className='counterChange subtraction' onClick={onClickChangeCounterHandler} id='minus_100' name='minus_100' value='-100' />
                <input type='button' className='counterChange subtraction' onClick={onClickChangeCounterHandler} id='minus_10' name='minus_10' value='-10' />
                <input type='button' className='counterChange subtraction' onClick={onClickChangeCounterHandler} id='minus_1' name='minus_1' value='-1' />

                <input type="text" className="inputs" onChange={onChangeInputCounterHandler} id="counter" name="inputCounter" value={counter} />

                <input type='button' className='counterChange addition' onClick={onClickChangeCounterHandler} id='plus_1' name='plus_1' value='+1' />
                <input type='button' className='counterChange addition' onClick={onClickChangeCounterHandler} id='plus_10' name='plus_10' value='+10' />
                <input type='button' className='counterChange addition' onClick={onClickChangeCounterHandler} id='plus_100' name='plus_100' value='+100' />
                <input type='button' className='counterChange addition' onClick={onClickChangeCounterHandler} id='plus_1000' name='plus_1000' value='+1000' />
            </div>
            <div>
                <input type='button' className='titleParagraph buttonP' onClick={onClickResetButtonHandler} id='reset' name='reset' value='RESET counter' />
            </div>
            <div>
                <p>
                    <input type='button' className='subtraction' onClick={onClickReadUserInputHandler} id='subtract' name='subtract' value='-' />
                    <input type='text' className='inputs' id='user_input' name='check' placeholder='0' />
                    <input type='button' className='addition' onClick={onClickReadUserInputHandler} id='add' name='add' value='+' />
                </p>
                <p>
                    <input type='button' className='titleParagraph buttonP' onClick={onClickClearButtonUserInputHandler} id='clear_input' name='clear_input' value='CLEAR input' />
                </p>
            </div>
        </div>
    );
}

export default Counter;
