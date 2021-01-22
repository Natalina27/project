//Core
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";

//Styles
import styles from './App.module.css';
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div className={styles.App}>
        <Router>
            <Switch>
                <Route exact path='/'>
                    < Login />
                </Route>
                <Route exact path='/home'>
                    < Home />
                </Route>
                {/*<Route exact path={book.root}>*/}
                {/*    <Redirect to={book.login} />*/}
                {/*</Route>*/}
            </Switch>
        </Router>
    </div>
  );
}

export default App;
