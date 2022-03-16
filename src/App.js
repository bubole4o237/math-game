import { Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import HomeOperation from './Components/HomeOperation/HomeOperation';
import Footer from './Components/Footer/Footer';
import Counter from './Components/Counter/Counter';

function App() {
	return (
		<div className="App">
			<div className="main">
				<Header />
				
				<Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/level/sum' render={props => (<HomeOperation {...props} operation='sum' />)} />
                    <Route path='/level/subtraction' render={props => (<HomeOperation {...props} operation='subtraction' />)} />
                    <Route path='/level/multiply' render={props => (<HomeOperation {...props} operation='multiply' />)} />
                    <Route path='/level/divide' render={props => (<HomeOperation {...props} operation='divide' />)} />
                    <Route path='/level/mixed' render={props => (<HomeOperation {...props} operation='mixed' />)} />
                    <Route path='/level/compare' render={props => (<HomeOperation {...props} operation='compare' />)} />
                    <Route path='/level/counter' component={Counter} />

                </Switch>

				<Footer />
			</div>
		</div>
	);
}

export default App;
