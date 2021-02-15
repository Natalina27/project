import React, {useEffect} from 'react';
import {getUser} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

export const  Home = () => {
    const user = useSelector(state => state.user);
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    useEffect(() => dispatch(getUser(token)), []);

    return (
        <div>
            Home
            <div>Name: {user.name} </div>
            <div>Email: {user.email} </div>
            <div>Age: {user.age} </div>

        </div>
    );
}

