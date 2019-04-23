import React from 'react';
import classNames from "classnames";
import { withRouter } from "react-router-dom";
// import axios from 'axios';
import { TextField, Button, Divider, Select, MenuItem } from "@material-ui/core/";
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import { FormControl, InputLabel } from '@material-ui/core/';
import { withStyles } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import DateFnsUtils from '@date-io/date-fns';

class ScheduleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      store_name: "",
      employee: "",
      start_date: new Date(),
      end_date: new Date(),
      start_time: new Date(),
      end_time: new Date(),
      role_description: ""
    };
  }

  handleDateChange = input => dateTime => {
    this.setState({ [input]: dateTime });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  createSchedule = () => {
    const schedule = this.state;

    this.props.createSchedule(schedule);
    this.props.history.push('/');

    // axios.post('https://api.wrklyf.com/api/tasks/create', schedule)
    //   .then(res => {
    //       console.log(res);
    //   })
    //   .catch(err => {
    //       console.log(err);
    //   })
  };

  render() {
    const { classes } = this.props;

    const employeeMenuItem = this.props.employees.map(employee => {
      let fullName = employee.first_name.concat(" ", employee.last_name)
      return (
        <MenuItem value={fullName}>{fullName}</MenuItem>
      )
    });

    const businessMenuItem = this.props.businesses.map(business => {
      return (
        <MenuItem value={business}>{business}</MenuItem>
      )
    });

    return (
      <React.Fragment>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className="form-container">
            <h1 className="form-header">Create New Schedule</h1>
            <div>
              <Divider />
              <h3 className="form-title">Select Business & Employee</h3>
              <Divider />
              <div className="sub-form-container">
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="store_name">Business</InputLabel>
                  <Select
                    value={this.state.store_name}
                    onChange={this.handleChange("store_name")}
                    inputProps={{ id: "store_name" }}
                  >
                    {employeeMenuItem}
                  </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="employee">Employee</InputLabel>
                  <Select
                    value={this.state.employee}
                    onChange={this.handleChange("employee")}
                    inputProps={{ id: "employee" }}
                  >
                    {businessMenuItem}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <Divider />
              <h3 className="form-title">Select Shift Dates</h3>
              <Divider />
              <div className="sub-form-container">
                <DatePicker
                  value={this.state.start_date}
                  onChange={this.handleDateChange("start_date")}
                  label="Start Date"
                  margin="normal"
                />
                <div />
                <DatePicker
                  value={this.state.end_date}
                  onChange={this.handleDateChange("end_date")}
                  label="End Date"
                  margin="normal"
                />
              </div>
            </div>
            <div>
              <Divider />
              <h3 className="form-title">Select Shift Time</h3>
              <Divider />
              <div className="sub-form-container">
                <TimePicker
                  value={this.state.start_time}
                  onChange={this.handleDateChange("start_time")}
                  label="Start Time"
                  margin="normal"
                />
                <div />
                <TimePicker
                  value={this.state.end_time}
                  onChange={this.handleDateChange("end_time")}
                  label="End Time"
                  margin="normal"
                />
              </div>
            </div>
            <div>
              <Divider />
              <h3 className="form-title">Describe Role</h3>
              <Divider />
              <TextField
                label="Role Description"
                value={this.state.role_description}
                onChange={this.handleChange("role_description")}
                margin="normal"
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              className={classNames(classes.style, classes.cssRoot)}
              onClick={this.createSchedule.bind(this)}
            >
              Create Schedule
            </Button>
          </div>
        </MuiPickersUtilsProvider>
      </React.Fragment>
    );
  }
};

const customStyles = {
    formControl: {
        margin: '5px',
        minWidth: 170,
    },
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

export default withRouter(withStyles(customStyles)(ScheduleForm));