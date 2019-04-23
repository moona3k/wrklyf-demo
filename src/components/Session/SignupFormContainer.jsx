import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import SignupForm from './SignupForm';

const mapDispatchToProps = dispatch => ({
    signin: user => dispatch(signin(user))
})

export default connect(null, mapDispatchToProps)(SignupForm);