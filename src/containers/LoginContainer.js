import { connect } from 'react-redux';
import LoginScreen from '../components/LoginScreen';

//Actions
import { login, loginFormChange } from '../actions';

const mapStateToProps = (state) => {        
    return {        
        user_name: state.auth.user_name,
		password: state.auth.password,
		user: state.auth.user,
		logining: state.auth.logining,
		user_name_error_message: state.auth.user_name_error_message,
		password_error_message: state.auth.password_error_message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (step) => {                        
            dispatch(login(step));
        },
        onLoginChange: (step) => {                        
            dispatch(loginFormChange(step));
        }
    };
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
export default LoginScreen;