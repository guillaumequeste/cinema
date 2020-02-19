import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ListeFilms from './components/ListeFilms'
import FilmDetail from './components/FilmDetail'
import ListeSeries from './components/ListeSeries'
import SerieDetail from './components/SerieDetail'
import QuoteMachine from './components/QuoteMachine'
import Realisateurs from './components/Realisateurs'
import Contact from './components/Contact'
import ErrorNotFound from './components/ErrorNotFound'


const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/liste_films' component={ListeFilms}/>
            <Route path='/film/:id' component={FilmDetail}/>
            <Route path='/liste_series' component={ListeSeries}/>
            <Route path='/serie/:id' component={SerieDetail}/>
            <Route path='/repliques' component={QuoteMachine}/>
            <Route path='/realisateurs' component={Realisateurs}/>
            <Route path='/contact' component={Contact}/>
            <Route path="/notfound" component={ErrorNotFound}/>
            <Redirect to='/notfound'/>
        </Switch>
    </Router>
)



ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();