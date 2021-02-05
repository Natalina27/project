//Core
import React, {useState} from 'react';
//Styles
import styles from './styles.module.css';
import {connect} from "react-redux";
import {userLogin} from "../../redux/actions";
import {history} from '../../navigation/history';

const Login = (props) => {
    console.log('props', props)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {email: email, password: password}
        props.userLogin(userData);
        history.push('/home');
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
const mapStateToProps = (state) => ({
// data from redux
})
const mapDispatchToProps = (dispatch) => ({
    userLogin:(user)=>dispatch(userLogin(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);


