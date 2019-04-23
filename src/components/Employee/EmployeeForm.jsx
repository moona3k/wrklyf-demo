import React from 'react';
import { withRouter } from "react-router-dom";
import classNames from "classnames";
// import axios from 'axios';
import { TextField, Checkbox, Select, MenuItem, Divider, Button } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";


class EmployeeForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // username: '',
            first_name: '',
            last_name: '',
            email: '',
            is_manager: false,
            business: '',
            pay_per_hour: '',
            pay_period: '',
            // currency_code: ''
        }
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    handleClick = () => {
        this.setState({ is_manager: !this.state.is_manager })
    };

    createEmployee = () => {
        const employee = this.state;
        this.props.createEmployee(employee);
        this.props.history.push("/dashboard");

        // axios.post('https://api.wrklyf.com/api/users/add-employees', employee)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    };

    render() {
        const businessMenuItem = this.props.businesses.map( business => {
            return (
                <MenuItem value={business.name}>{business.name}</MenuItem>
            )
        })

        return (
            <div className="form-container">
                <h1 className="form-header">Create New Employee</h1>
                <Divider />
                <div>
                    <TextField 
                        required
                        value={this.state.first_name}
                        onChange={this.handleChange('first_name').bind(this)}
                        label='First Name'
                        margin='normal'
                    />
                    <br />
                    <TextField 
                        required
                        value={this.state.last_name}
                        onChange={this.handleChange('last_name').bind(this)}
                        label='Last Name'
                        margin='normal'
                    />
                    <br />
                    <TextField 
                        required
                        value={this.state.email}
                        onChange={this.handleChange('email').bind(this)}
                        label='Email'
                        margin='normal'
                    />
                    <br />
                    <br />
                    <span className="inner-text"> Select business &nbsp;</span>
                    <Select 
                        onChange={this.handleChange('business').bind(this)}
                        value={this.state.business}
                    >
                        {businessMenuItem}
                    </Select>
                    <br />
                    <span className="inner-text">Is this employee a manager?</span>
                    <Checkbox 
                    color='primary'
                    onChange={this.handleClick.bind(this)}
                    />
                    <br />
                    <span className="inner-text">Select Payment Cycle &nbsp;</span>
                    <Select 
                        onChange={this.handleChange('pay_period').bind(this)}
                        value={this.state.pay_period}
                    >
                        <MenuItem value="Weekly">Weekly</MenuItem>
                        <MenuItem value="Bi-weekly">Bi-weekly</MenuItem>
                        <MenuItem value="Monthly">Monthly</MenuItem>
                    </Select>
                    <br />
                    <TextField 
                        required
                        value={this.state.pay_per_hour}
                        onChange={this.handleChange('pay_per_hour')}
                        label='Pay per Hour'
                        margin='normal'
                    />
                    <br />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classNames(this.props.classes.style, this.props.classes.cssRoot)}
                        onClick={this.createEmployee.bind(this)}
                    >
                    Create New Employee
                    </Button>

                </div>
                
            </div>
        )
    }
};

const customStyles = {
    style: {
        width: "60%",
        padding: '10px 0px',
        margin: '30px 15px 30px 15px'
    },
    cssRoot: {
        backgroundColor: purple[500],
        "&:hover": {
            backgroundColor: purple[700]
        }
    }
};

export default withRouter(withStyles(customStyles)(EmployeeForm));