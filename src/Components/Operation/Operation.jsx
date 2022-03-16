import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import correct from '../../sounds/correct-answer.wav';
import wrong from '../../sounds/wrong-answer.wav';

import Keyboard from '../Keyboard/Keyboard';
// import apple from '../../img/apple_logo_thumb1200_4-3.png';
import apple from '../../img/apple3.png';

import './Operation.css';


const Operation = ({ keyProp, operation, removeProblem }) => {

    const [isTrue, setIsTrue] = useState('problem');
    let [action, setAction] = useState(operation);

    const [firstNum, setFirstNum] = useState(0);
    const [secondNum, setSecondNum] = useState(0);

    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    let sign = '';

    useEffect(() => {
        setFirstNum(Math.floor(Math.random() * 100));
        setSecondNum(Math.floor(Math.random() * 100));

        let randomChoice = Math.ceil(Math.random() * 4);
        if (operation === 'mixed') {

            if (randomChoice === 1) {
                setAction('sum');
            } else if (randomChoice === 2) {
                setAction('subtraction');
            } else if (randomChoice === 3) {
                setAction('multiply');
            } else if (randomChoice === 4) {
                setAction('divide');
            }

            console.log(action);
        }
    }, [operation, action]);


    if (action === 'sum') {
        sign = '+';
    }

    if (action === 'subtraction') {
        sign = '-';
    }

    if (action === 'multiply') {
        sign = '*';
    }

    if (action === 'divide') {
        sign = '/';
    }

    if (action === 'compare') {
        // sign = <input type="text" />;
        sign = " ";
    }


    const checkProblem = (e) => {

        const inputs = e.target.parentNode.getElementsByClassName('inputs');

        if (action === "compare") {
            if ((inputs[1].value.length === 0)) {
                return;
            }
        } else {

            for (let i = 0; i < inputs.length; i++) {
                if ((inputs[i].value.length === 0) || (isNaN(Number(inputs[i].value)))) {
                    return;
                }
            }

        }


        let leftSide;
        if (action === 'sum') {
            leftSide = Number(inputs[0].value) + Number(inputs[1].value);
        }

        if (action === 'subtraction') {
            leftSide = Number(inputs[0].value) - Number(inputs[1].value);
        }

        if (action === 'multiply') {
            leftSide = Number(inputs[0].value) * Number(inputs[1].value);
        }

        if (action === 'divide') {
            leftSide = Number(inputs[0].value) / Number(inputs[1].value);
        }

        if (action === 'compare') {
            leftSide = Number(inputs[0].value);
        }

        let rightSide = Number(inputs[2].value);

        if (action === 'compare') {
            if (((leftSide > rightSide) && (inputs[1].value === '>')) ||
                ((leftSide < rightSide) && (inputs[1].value === '<')) ||
                ((leftSide === rightSide) && (inputs[1].value === '='))) {
                setIsTrue(true);
                correctAnswer();
            } else {
                setIsTrue(false);
                wrongAnswer();
            }
        } else if (leftSide === rightSide) {
            setIsTrue(true);
            correctAnswer();
        } else {
            setIsTrue(false);
            wrongAnswer();
        }
    }

    const onChangeInputHandler1 = (e) => {

        let spanEl1 = e.target.parentNode.getElementsByClassName('input1Span');
        let indexSpan;

        console.log(spanEl1);
        if (e.target.id === 'input1') {
            indexSpan = 0;
        } else if (e.target.id === 'input2') {
            indexSpan = 1;
        } else if (e.target.id === 'input3') {
            indexSpan = 2;
        }


        if (indexSpan || indexSpan === 0) {

            spanEl1[indexSpan].innerHTML = '';
            for (let i = 0; i < Number(e.target.value); i++) {

                spanEl1[indexSpan].innerHTML += `<img src=${apple} alt="red X" title="Show and edit" height="16" />`;
            }
        }
    }


    const onClickLetterHandler = (e) => {
        // console.log(e.target.tagName);
        if (e.target.tagName === 'DIV') {
            return;
        }

        const equalInput = e.target.parentNode.parentNode.parentNode.querySelector('input[name="input2"]');
        equalInput.value = e.target.textContent;

        const keyboardKeys = e.target.parentNode.getElementsByClassName('letter');
        for (let i = 0; i < keyboardKeys.length; i++) {
            keyboardKeys[i].className = "letter";
        }

        e.target.className = "letter selected";
        /*
        let inputField = document.getElementById("inputOnFocus");

        let imageLetter = images[index].startLetter.toUpperCase();
        console.log("START LETTER " + imageLetter);
        let selectedLetter = e.target.textContent.toUpperCase();
        console.log(selectedLetter);
        if (selectedLetter === imageLetter) {
            inputField.value = selectedLetter;
            inputField.className = "input green";

            correctAnswer();
            document.getElementsByClassName("next")[0].focus();

            // onClickNextHandler();  ///// Automatically change the next image and clear the input field!
        } else {
            inputField.value = selectedLetter;
            inputField.className = "input red";

            wrongAnswer();
            getFocus();
        }
*/
    }

    // console.log(firstNum);
    // console.log(secondNum);

    return (

        <div className={isTrue === 'problem' ? 'problem' : isTrue ? 'problem correct' : 'problem wrong'}>

            {(action === 'compare')
                ? <>
                    <span className="problem-number">{keyProp}.</span>
                    <input type="text" onChange={onChangeInputHandler1} className="inputs" id="input1" name="input1" value={action === 'compare' ? firstNum : ""} disabled />
                    <span className='plus sign'>{sign}</span>
                    <input type="text" onChange={onChangeInputHandler1} className="inputs compare" id="input2" name="input2" disabled />
                    <span className='equal sign'> </span>
                    <input type="text" onChange={onChangeInputHandler1} className="inputs" id="input3" name="input3" value={action === 'compare' ? secondNum : ""} disabled />
                    <input type='button' className='titleParagraph buttonP' onClick={checkProblem} id='check' name='check' value='check' />
                    <input type='button' className='titleParagraph buttonP' onClick={removeProblem} id={keyProp} name='remove' value='remove' />
                    <div className='divSpan'>
                        <span className='input1Span'></span>
                        <span className='input1Span'></span>
                        <span className='input1Span'></span>
                    </div>

                    <div className="alphabet" onClick={onClickLetterHandler}>
                        {<Keyboard />}
                    </div>
                </>
                : <>
                    <span className="problem-number">{keyProp}.</span>
                    <input type="text" onChange={onChangeInputHandler1} className="inputs" id="input1" name="input1" />
                    <span className='plus sign'>{sign}</span>
                    <input type="text" onChange={onChangeInputHandler1} className="inputs" id="input2" name="input2" />
                    <span className='equal sign'>=</span>
                    <input type="text" onChange={onChangeInputHandler1} className="inputs" id="input3" name="input3" />
                    <input type='button' className='titleParagraph buttonP' onClick={checkProblem} id='check' name='check' value='check' />
                    <input type='button' className='titleParagraph buttonP' onClick={removeProblem} id={keyProp} name='remove' value='remove' />
                    <div className='divSpan'>
                        <span className='input1Span'></span>
                        <span className='input1Span'></span>
                        <span className='input1Span'></span>
                    </div>

                </>
            }

        </div>

    );
}

export default Operation;
