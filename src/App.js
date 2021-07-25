import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import {GlobalStyle} from './GlobalStyles';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
                <GlobalStyle />
            </div>
        </Router>
    );
}

export default App;
