import React, {useEffect} from 'react';
// import {getUser} from "../../redux/actions";
import {useSelector} from "react-redux";

export const Home = (props) => {
    const {user} = useSelector((state) => state);
    const getUser = user;
    console.log('getUser', getUser);
    console.log('props', props);

    useEffect(
        () => {
            // props.getUser(token);
            // token

        }, []
    );

    return (
        <div>
            Home: {getUser}
        </div>
    );
};
// const mapStateToProps = (state) => ({
//     token: state.token
// })
// const mapDispatchToProps = (dispatch) => ({
//     getUser:(token)=>dispatch(getUser(token)),
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

