//Core
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';

//Styles
import styles from './styles.module.css';

//Others
import {book} from '../../navigation/book';
import {userLogin} from '../../redux/actions';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password }
        dispatch(userLogin(userData));
        history.push(book.home);
    }


    return (
        <div className={styles.container}>
            <h2> LOGIN </h2>
            <form onSubmit={handleSubmit} className={styles.wrap}>
                <div className={styles.form}>
                    <input type="email"
                           className={styles.input}
                           id="emailInput"
                           placeholder="Email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                    />
                    <input type="password"
                           className={styles.input}
                           id="passwordInput"
                           placeholder="Password"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className={styles.submit} type="submit">LOGIN</button>
            </form>
        </div>
    );
};
