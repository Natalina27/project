import React, {useEffect} from 'react';
import {getUser} from "../../redux/actions";
import {connect} from "react-redux";

const Home = (props) => {
    useEffect(
        () => {
            props.getUser(props.token);

        }, []
    );

    return (
        <div>
            Home
            <div>Name: {props.user.name} </div>
            <div>Email: {props.user.email} </div>
            <div>Age: {props.user.age} </div>

        </div>
    );
};
const mapStateToProps = (state) => ({
    token: state.token,
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    getUser:(token)=>dispatch(getUser(token)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

