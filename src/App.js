import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return(
            <Router>
                <div className="ui container">
                    <Header />
                </div>
                <div>
                    
                    <Switch>
                        <Route path='/' exact component={About} />
                        <Route path='/projects' exact component={Projects} />
                        <Route path='/contact' exact component={Contact} />
                    </Switch>
                </div>
           </Router>
    );
};

export default App;