
import './Keyboard.css';

const Keyboard = () => {

    const lessThen = '<';
    const greaterThen = '>';


    return (
        <div id="keyboard">
            <p className="letter">{lessThen}</p>
            <p className="letter">=</p>
            <p className="letter">{greaterThen}</p>
            
        </div>

    );
}

export default Keyboard;
