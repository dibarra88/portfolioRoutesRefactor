import React from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.css';
import './styles/bootstrap-grid.css';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import References from './components/References';

ReactDOM.render(
    <Router>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/Home" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Portfolio" component={Portfolio} />
                <Route path="/Contact" component={Contact} />
                <Route path="/References" component={References} />
            </Switch>
        </BaseLayout>
    </Router>

    , document.getElementById('root'));
registerServiceWorker();
