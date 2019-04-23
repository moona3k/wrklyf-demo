import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from "react-redux";
import { signin } from "../../actions/session_actions";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            mobile: ''
        }
    }

    handleChange = type => e => {
        this.setState({ [type]: e.target.value })
    }

    login() {
        const user = { username: this.state.mobile }
        this.props.signin(user);
    };

    render() {
        return (
            <div className="session-modal-container">
                <div>
                    <h1 className="session-modal-header">Employer Login</h1>
                </div>
                <hr />
                <form className="session-modal-form">
                    <TextField
                        label="Mobile Number"
                        value={this.state.mobile}
                        onChange={this.handleChange('mobile')}
                        margin="dense"
                    />
                    <button onClick={this.login.bind(this)} className="btn-purple">Login</button>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    signin: user => dispatch(signin(user))
});

export default connect(null, mapDispatchToProps)(LoginForm);