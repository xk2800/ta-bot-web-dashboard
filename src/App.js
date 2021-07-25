import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './Home';
import NotFound from './components/NotFound/NotFound';
import { GlobalStyle } from './GlobalStyles';


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        <Navbar />
                        <Home />
                    </Route>

                    <Route path='/all'>
                        <Navbar />
                        <Home />
                    </Route>

                    <Route path='/general'>
                        <Navbar />

                    </Route>

                    <Route path='/live_stats'>
                        <Navbar />
                    </Route>

                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
                <GlobalStyle />
            </div>
        </Router>
    );
}

export default App;
