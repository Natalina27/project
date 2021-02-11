//Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

//Routes
import {book} from './book';

//Components
import Login from '../components/Login';
import Home from '../components/Home';

//Components
export const Routes = () => {
    const token = useSelector(state => state.token);
    console.log('Routes token', token);

    return (
        <Switch>
            <Route exact path={book.home}>
                {token ? < Home /> : <Redirect to={book.login} /> }
            </Route>
            <Route exact path={book.login}>
                < Login />
            </Route>
            <Route exact path={book.root}>
                <Redirect to={book.login} />
            </Route>
        </Switch>
    )
}