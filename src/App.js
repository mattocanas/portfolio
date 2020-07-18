import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import FinishedProjects from './components/FinishedProjects';
import CurrentProjects from './components/CurrentProjects';
import Contact from './components/Contact';

const App = () => {
    return(
        <div className="ui container">
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' exact component={About} />
                        <Route path='/finishedprojects' exact component={FinishedProjects} />
                        <Route path='/currentprojects' exact component={CurrentProjects} />
                        <Route path='/contact' exact component={Contact} />
                    </Switch>
                </div>
           </Router>
        </div>
    );
};

export default App;