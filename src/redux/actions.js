import axios from 'axios';
// import authHeader from "../helper/authHeader";

export function userLogin(user){
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `https://api-nodejs-todolist.herokuapp.com/user/login`,
            data: user
        })
            .then(
               // (res) => dispatch({type:'GET_MEMBERS', payload:res.data})
                (res) => {
                    console.log('response', res)
                    if(res.data.token){
                        dispatch({type: 'SAVE_TOKEN', payload: res.data.token})
                        // console.log(history);
                        // history.push('/home');
                    }
                }
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}
export function getUser(token){
    return (dispatch) => {
        const auth = {
            Authorization: token || '',
            // 'Content-Type': 'application/json'
        };
        console.log(auth);
        axios({
            method: 'GET',
            url: `https://api-nodejs-todolist.herokuapp.com/user/me`,
            headers: auth
        })
            .then(
                (res) => {
                    console.log('response', res)
                }
            )
            .catch(
                (err) => console.log(err, 'error')
            )
    }
}