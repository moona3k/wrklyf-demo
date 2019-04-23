import React from 'react';
import { TextField, Button } from '@material-ui/core/';
import purple from '@material-ui/core/colors/purple';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const FormDetailOne = (props) => { 
    const { classes } = props;

    return (
        <div className="form-container">
            <h1 className="form-header">Business Location</h1>
            <h3 className="business-form-subheader"><em>Please fill out location details</em></h3>
            <form className="business-form">
                <TextField 
                    required
                    label="Business Name"
                    value={props.values.name}
                    onChange={props.handleChange('name')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Description"
                    value={props.values.description}
                    onChange={props.handleChange('description')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Address Line 1"
                    value={props.values.line1}
                    onChange={props.handleChange('line1')}
                    margin="normal"
                />

                <TextField
                    label="Address Line 2"
                    value={props.values.line2}
                    onChange={props.handleChange('line2')}
                    margin="normal"
                />

                <TextField
                    required
                    label="City"
                    value={props.values.city}
                    onChange={props.handleChange('city')}
                    margin="normal"
                />

                <TextField
                    required
                    label="State"
                    value={props.values.state}
                    onChange={props.handleChange('state')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Zip Code"
                    value={props.values.zipcode}
                    onChange={props.handleChange('zipcode')}
                    margin="normal"
                />

                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classNames(classes.button)}
                        onClick={props.nextStep}
                    >
                        Continue
                    </Button>
                </div>
            </form>
        </div>
    )
};

const buttonStyle = {
    button: {
        backgroundColor: purple[500],
        "&:hover": {
            backgroundColor: purple[700]
        },
        marginTop: '25px',
        width: '40%'
    }
};

export default withStyles(buttonStyle)(FormDetailOne);