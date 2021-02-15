import axios from 'axios';
import { types } from './types';

export function getUser(token){
    return () => {
        const auth = {
            Authorization: token || '',
        };
        axios({
            method: 'GET',
            url: `https://api-nodejs-todolist.herokuapp.com/user/me`,
            headers: auth
        })
            .then(
                (res) => {
                    console.log('user', res)
                }
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}
export function userLogin(user){
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `https://api-nodejs-todolist.herokuapp.com/user/login`,
            data: user
        })
            .then(
                (res) => {
                    const { SAVE_TOKEN, SAVE_USER } = types;
                    const { token, user } = res.data;

                    if(res.data.token){
                        dispatch({type: SAVE_TOKEN, payload: token});
                        dispatch({type: SAVE_USER, payload: user});
                    }
                }
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}