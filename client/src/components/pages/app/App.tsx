import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from '../create/Create';
import Details from '../detail/Details';
import Home from '../home/Home';
import Update from '../update/Update';
import './App.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/create">
                    <Create />
                </Route>
                <Route path="/details/:wilderId" component={Details} />
                <Route
                    path="/update/:wilderId"
                    render={(props) => <Update {...props} />}
                ></Route>
            </Switch>
        </Router>
    );
};

export default App;
