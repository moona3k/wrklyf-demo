import React from 'react';
import FormDetailOne from './FormDetailOne';
import FormDetailTwo from './FormDetailTwo';
import FormConfirm from './FormConfirm';

class BusinessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            name: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zipcode: '',
            description: '',
            open_time: '09:00',
            close_time: '21:00',
            website: '',
            facebook: '',
            clockin_instructions: '',
            clockout_instructions: '',
            work_period: '',
            advpay_hold_percentage: '',
            tax_percentage: '',
            checked: false
        };
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    handleCheck = () => {
        let checked = this.state.checked;

        if (checked) {
            this.setState({
                checked: !checked,
                open_time: '09:00',
                close_time: '21:00'
            })
        } else {
            this.setState({
                checked: !checked,
                open_time: '00:00',
                close_time: '23:59'
            })
        }
    }

    render() {
        const { step } = this.state;
        const values = this.state;
        
        switch (step) {
            case 1:
                return (
                    <FormDetailOne
                        values={values}
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                    />
                )
            case 2:
                return (
                    <FormDetailTwo
                        values={values}
                        handleChange={this.handleChange}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleCheck={this.handleCheck}
                    />
                )
            case 3:
                return (
                    <FormConfirm
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        createBusiness={this.props.createBusiness}
                    />
                )
            default:
                return (
                    <div>default</div>
                )
        }
    }
}

export default BusinessForm;