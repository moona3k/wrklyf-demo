import React from 'react';
import classNames from 'classnames';

import { TextField, Button, Select, MenuItem, Checkbox } from '@material-ui/core/';
import { FormControl, InputLabel } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';



const FormDetailTwo = (props) => {
    const { classes } = props;
    
    return (
        <div className="form-container">
            <h1 className="form-header">Business Operations</h1>
            <h3 className="business-form-subheader"><em>Please fill out operations details</em></h3>
            <form className="business-form">  
                <TextField
                    required
                    label="Clock-in Instructions"
                    value={props.values.clockin_instructions}
                    onChange={props.handleChange('clockin_instructions')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Clock-out Instructions"
                    value={props.values.clockout_instructions}
                    onChange={props.handleChange('clockout_instructions')}
                    margin="normal"
                />

                <TextField
                    label="Website"
                    value={props.values.website}
                    onChange={props.handleChange('website')}
                    margin="normal"
                />

                <TextField
                    label="Facebook"
                    value={props.values.facebook}
                    onChange={props.handleChange('facebook')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Adv. Pay Hold Percentage"
                    value={props.values.advpay_hold_percentage}
                    onChange={props.handleChange('advpay_hold_percentage')}
                    margin="normal"
                />

                <TextField
                    required
                    label="Tax Percentage"
                    value={props.values.tax_percentage}
                    onChange={props.handleChange('tax_percentage')}
                    margin="normal"
                />

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="work-period">Work Period</InputLabel>
                    <Select
                        value={props.values.work_period}
                        onChange={props.handleChange('work_period')}
                        inputProps={{ id: 'work-period' }}
                    >
                        <MenuItem value="Weekly">Weekly</MenuItem>
                        <MenuItem value="Bi-weekly">Bi-Weekly</MenuItem>
                        <MenuItem value="Monthly">Monthly</MenuItem>
                    </Select>
                </FormControl>

                <fieldset className="business-form-opening-hours">
                    <TextField
                        required
                        label="Open Time"
                        type="time"
                        inputProps={{ step: 300 }}
                        value={props.values.open_time}
                        onChange={props.handleChange('open_time')}
                        margin="normal"
                    />

                    <TextField
                        required
                        label="Close Time"
                        type="time"
                        inputProps={{ step: 300 }}
                        value={props.values.close_time}
                        onChange={props.handleChange('close_time')}
                        margin="normal"
                    />

                    <Checkbox
                        checked={props.values.checked}
                        onChange={props.handleCheck}
                        color="primary"
                    />
                    <h3>Open 24hrs</h3>
                </fieldset>

                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classNames(classes.style, classes.cssRoot)}
                        onClick={props.prevStep}
                    >
                        Back
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classNames(classes.style, classes.cssRoot)}
                        onClick={props.nextStep}
                    >
                        Continue
                    </Button>
                </div>

            </form>
        </div>
    )
};

const customStyles = {
    formControl: {
        margin: '5px',
        minWidth: 120,
    },
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

export default withStyles(customStyles)(FormDetailTwo);