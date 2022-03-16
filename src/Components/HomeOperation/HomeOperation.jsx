import { useState } from 'react';
import { Link } from 'react-router-dom';

import Operation from '../Operation/Operation';
// import addItemSource from '../../img/add_item.png';
import addItemSource from '../../img/add-filled.svg';


import './HomeOperation.css';



const HomeOperation = ({ operation }) => {

    const [problemKey, setKeyProblem] = useState(1);
    const [problems, setProblems] = useState([1]);


    const addNewProblem = () => {
        setKeyProblem(problemKey + 1);

        problems.push(problemKey + 1);
        setProblems(problems);
    }


    const removeProblem = (e) => {

        let index = problems.indexOf(Number(e.target.id));
        if (index === -1) {
            return;
        }

        let newArray = problems.slice();
        newArray.splice(index, 1);

        setProblems(newArray);

    }

    // const addItem = <img src={addItemSource} className='titleParagraph buttonP iconAdd' onClick={addNewProblem} alt='add' width='30' />;

    return (
        <div className='homeDiv'>
            <div className='backButton'>
                <Link to='/'>
                    <p className='titleParagraph buttonP'>Home page
                    </p>
                </Link>
            </div>
            {(operation === 'sum')
                ? <h4>SUM</h4>
                : (operation === 'subtraction')
                    ? <div><h4>SUBTRACTION</h4></div>
                    : (operation === 'multiply')
                        ? <div><h4>MULTIPLY</h4></div>
                        : (operation === 'divide')
                            ? <div><h4>DIVIDE</h4></div>
                            : (operation === 'mixed')
                                ? <div><h4>MIXED</h4></div>
                                : (operation === 'compare')
                                    ? <div><h4>COMPARE</h4></div>
                                    : ''}

            <div>
                {/* <input type='button' className='titleParagraph buttonP' onClick={addNewProblem} value={addItem} /> */}
                {/* <input type='image' src={addItemSource} className='titleParagraph buttonP iconAdd' onClick={addNewProblem} width="30" alt="add" /> */}
                <img src={addItemSource} className='iconAdd' onClick={addNewProblem} width="45" alt="add" />
                {/* {addItem} */}
            </div>
            {problems.map(i => <Operation key={i} keyProp={i} operation={operation} removeProblem={removeProblem} />)}
        </div>
    );
}

export default HomeOperation;