import {connect} from "react-redux";

function authHeader({token}) {


    if (token) {
        return {
            Authorization: token || '',
        };
    } else {
        return {};
    }
}
const mapStateToProps = (state) => ({
    token: state.token
})
const mapDispatchToProps = () => ({
    //userLogin:(user)=>dispatch(userLogin(user)),
})
export default connect(mapStateToProps, mapDispatchToProps)(authHeader);
