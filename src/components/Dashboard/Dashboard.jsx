import React from 'react';
import { Divider } from "@material-ui/core/";
import { withRouter } from "react-router-dom";

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        };
    };

    handleClick() {
        this.props.history.push('/');
    }

    render() {

        const allBusiness = this.props.businesses.map( (business, idx) => {
            return (
                <div key={`business-${idx}`} className="dashboard-item">
                    <h3>{business.name}</h3>
                    <Divider />
                    <br />
                    <p>Address: <b>{business.address.line1}</b></p>
                    <p>City: <b>{business.address.city}</b></p>
                    <p>State: <b>{business.address.state}</b></p>
                    <p>Description: <b>{business.description}</b></p>
                </div>
            )
        })

        const allEmployee = this.props.employees.map( (employee, idx) => {
            return (
                <div key={`employee-${idx}`} className="dashboard-item">
                    <h3>{employee.business}</h3>
                    <Divider />
                    <br />
                    <p>First Name: <b>{employee.first_name}</b></p>
                    <p>Last Name: <b>{employee.last_name}</b></p>
                    <p>Status: <b>{employee.is_manager ? "Manager" : "Not a manager"}</b></p>
                </div>
            )
        })

        const allSchedule = this.props.schedules.map( (schedule, idx) => {
            let start = schedule.start_time;
            let end = schedule.end_time;
            return (
                <div key={`schedule-${idx}`} className="dashboard-item">
                    <h3>{schedule.store_name}</h3>
                    <Divider />
                    <br />
                    <p>Employee: <b>{schedule.employee}</b></p>
                    <p>Start Date & Time: <b>{`${start.getMonth()}/${start.getDate()} ${start.getHours()}:${start.getMinutes()}`}</b></p>
                    <p>End Date & Time: <b>{`${end.getMonth()}/${end.getDate()} ${end.getHours()}:${end.getMinutes()}`}</b></p>
                    <p>Role: <b>{schedule.role_description}</b></p>
                </div>
            )
        })

        


        return (
            <div className="dashboard-container">
                <h1>All Businesses</h1>
                <div className="schedule-container">{allBusiness}</div>
                
                <h1>All Employees</h1>
                <div className="schedule-container">{allEmployee}</div>

                <h1>All Schedules</h1>
                <div className="schedule-container">{allSchedule}</div>

                <button onClick={this.handleClick.bind(this)}>Back</button>
            </div>
        )
    }
};

export default withRouter(Dashboard);