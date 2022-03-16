import { Link } from 'react-router-dom';

import './Home.css';


const Home = () => {
    return (
        <div>

            <h2>Select type of problem to solve.</h2>

            <Link to='/level/sum'>
                <p className='titleParagraph buttonP'>+<br />numbers</p>
            </Link>

            <Link to='/level/subtraction'>
                <p className='titleParagraph buttonP'>-<br />numbers
                </p>
            </Link>

            <Link to='/level/multiply'>
                <p className='titleParagraph buttonP'>*<br />numbers</p>
            </Link>

            <Link to='/level/divide'>
                <p className='titleParagraph buttonP'>/<br />numbers</p>
            </Link>

            <Link to='/level/mixed'>
                <p className='titleParagraph buttonP'>Mixed<br />operations
                </p>
            </Link>

            <Link to='/level/compare'>
                <p className='titleParagraph buttonP'>Compare<br />numbers
                </p>
            </Link>

            <Link to='/level/counter'>
                <p className='titleParagraph buttonP'>Counter<br />- 0 +
                </p>
            </Link>

        </div>
    );
}

export default Home;
