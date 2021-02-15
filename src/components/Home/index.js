import React, {useEffect} from 'react';
import {getUser} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

export const  Home = () => {
    const user = useSelector(state => state.user);
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => dispatch(getUser(token)), []);

    const {name, email, age} = user;

    return (
        <div>
            Home
            <div>Name: { name } </div>
            <div>Email: { email } </div>
            <div>Age: { age } </div>
        </div>
    );
}

