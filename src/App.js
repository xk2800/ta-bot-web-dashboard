import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

//components
import Navbar from './components/Navbar/Navbar';
import Home from './Home';

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
            </div>
        </Router>
    );
}

export default App;
