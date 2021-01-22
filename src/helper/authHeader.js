import {connect} from "react-redux";

function authHeader(props) {
    // return authorization header with jwt token

    if (props.token) {
        return {
            Authorization: props.token || '',
            'Content-Type': 'application/json'
        };
    } else {
        return {};
    }
}
const mapStateToProps = (state) => ({
    token: state.token
})
const mapDispatchToProps = (dispatch) => ({
    //userLogin:(user)=>dispatch(userLogin(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(authHeader);
