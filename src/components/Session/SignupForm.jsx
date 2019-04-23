import React from 'react';
import { TextField, Divider } from '@material-ui/core/';

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFirstForm : true,
            first_name: '',
            last_name: '',
            email: '',
            mobile: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleChange = type => e => {
        this.setState({ [type]: e.target.value })
    }

    nextForm() {
        this.setState({ isFirstForm: false })
    }

    previousForm() {
        this.setState({ isFirstForm: true })
    }

    signup() {
        const user = {
          username: this.state.mobile.toString(),
          email: this.state.email,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          address: {
            line1: this.state.line1,
            line2: this.state.line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zipcode
          },
          mobile: this.state.mobile.toString()
        };

        this.props.signup(user);
    };

    renderFirstForm() {
        return (
            <form className="session-modal-form">
                <TextField
                    required
                    label="First Name"
                    value={this.state.first_name}
                    onChange={this.handleChange('first_name')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Last Name"
                    value={this.state.last_name}
                    onChange={this.handleChange('last_name')}
                    margin="normal"
                />

                <TextField
                    label="Email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Mobile Number"
                    value={this.state.mobile}
                    onChange={this.handleChange('mobile')}
                    margin="normal"
                />

                <button onClick={this.nextForm.bind(this)} className="btn-purple">Continue</button>
            </form>
        )
    }

    renderSecondForm() {
        return (
            <form className="session-modal-form">
                <TextField
                    required
                    label="Address Line 1"
                    value={this.state.line1}
                    onChange={this.handleChange('line1')}
                    margin="normal"
                />

                <TextField
                    label="Address Line 2"
                    value={this.state.line2}
                    onChange={this.handleChange('line2')}
                    margin="normal"
                />

                <TextField
                    required
                    label="City"
                    value={this.state.city}
                    onChange={this.handleChange('city')}
                    margin="normal"
                />

                <TextField
                    required
                    label="State"
                    value={this.state.state}
                    onChange={this.handleChange('state')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Zip Code"
                    value={this.state.zipcode}
                    onChange={this.handleChange('zipcode')}
                    margin="normal"
                />

                <button onClick={this.previousForm.bind(this)} className="btn-purple">Back</button>
                <button onClick={this.signup.bind(this)} className="btn-purple">Sign Up</button>
            </form>
        )
    };

    render() {

        let signupForm;
        if (this.state.isFirstForm) {
            signupForm = this.renderFirstForm();
        } else {
            signupForm = this.renderSecondForm();
        }

        return (
            <div className="session-modal-container">
                <div>
                    <h1 className="session-modal-header">Employer Sign Up</h1>
                </div>
                <Divider variant="middle"/>
                { signupForm }
            </div>
        )
    }
};

export default SignupForm;