//Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

//Routes
import {book} from './book';
import { Login } from "../components/Login";
import { Home } from "../components/Home";


//Components
export const Routes = () => {
    return (
        <Switch>
            <Route exact path={book.login}>
                < Login />
            </Route>
            <Route exact path={book.home}>
                < Home />
            </Route>
            <Route exact path={book.root}>
                <Redirect to={book.login} />
            </Route>
        </Switch>
    )
}