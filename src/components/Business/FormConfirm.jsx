import React from 'react';
import { withRouter } from "react-router-dom";
import { ListItemText, Divider, Button } from '@material-ui/core/';
import purple from '@material-ui/core/colors/purple';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';


class FormConfirm extends React.Component {

    handleConfirm() {
        const { values } = this.props
        const business = {
            name: values.name,
            email: values.email,
            address: { 
                line1: values.line1,
                line2: values.line2,
                city: values.city,
                state: values.state,
                zip: values.zipcode
            }
        }

        this.props.createBusiness(business);
        this.props.history.push('/dashboard');
    }
    

    render() {
        const { values } = this.props
        const { classes } = this.props;

        return (
            <div className="form-container">
                { values.name === '' ? <div className="error-message">(Business name cannot be blank)</div>: <h1 className="form-header">{values.name}</h1>}
                <h3 className="business-form-subheader"><em>Please confirm below details</em></h3>
                <form className="business-form">
                    <fieldset>
                        <Divider />
                        <h2 className="form-title">Business Location</h2>
                        <Divider />
                        <br />
                        <ListItemText primary="Line 1" secondary={values.line1}/>
                        { values.line2 !== '' ? <ListItemText primary="Line 2" secondary={values.line2} /> : null}
                        <ListItemText primary="City" secondary={values.city}/>
                        <ListItemText primary="State" secondary={values.state}/>
                        <ListItemText primary="Zipcode" secondary={values.zipcode}/>
                        <ListItemText primary="Description" secondary={values.description} />
                    </fieldset>
                    <br />
                    <fieldset>
                        <Divider />
                        <h2 className="form-title">Business Operations</h2>
                        <Divider />
                        <br />
                        <ListItemText primary="Clock-in Instructions" secondary={values.clockin_instructions}/>
                        <ListItemText primary="Clock-out Instructions" secondary={values.clockout_instructions}/>
                        { values.website !== '' ? <ListItemText primary="Website" secondary={values.website} /> : null}
                        { values.facebook !== '' ? <ListItemText primary="Facebook" secondary={values.facebook}/> : null }
                        <ListItemText primary="Adv. Pay Hold %" secondary={values.advpay_hold_percentage} />
                        <ListItemText primary="Tax %" secondary={values.tax_percentage} />
                        {values.work_period !== '' ? <ListItemText primary="Work Period" secondary={values.work_period} /> : null}
                        <ListItemText primary="Open Time" secondary={values.open_time} />
                        <ListItemText primary="Close Time" secondary={values.close_time} />
                    </fieldset>
                    
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            className={classNames(classes.style, classes.cssRoot)}
                            onClick={this.props.prevStep}
                        >
                            Back
                        </Button>

                        <Button
                            variant="contained"
                            color="primary"
                            className={classNames(classes.style, classes.cssRoot)}
                            onClick={this.handleConfirm.bind(this)}
                        >
                            Confirm
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
};

const buttonStyle = {
    style: {
        width: "35%",
        margin: '30px 15px 10px 15px'
    },
    cssRoot: {
        backgroundColor: purple[500],
        "&:hover": {
            backgroundColor: purple[700]
        }
    }
};

export default withRouter(withStyles(buttonStyle)(FormConfirm));