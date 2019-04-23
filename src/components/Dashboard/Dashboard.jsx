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
        const allSchedule = this.props.schedules.map( (schedule, idx) => {
            let start = schedule.start_time;
            let end = schedule.end_time;
            return (
                <div key={`schedule-${idx}`} className="schedule-item">
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
            <div>
                <h1 className="schedule-header">All Schedules</h1>
                <div className="schedule-container">
                    {allSchedule}
                </div>
                <button onClick={this.handleClick.bind(this)}>Back</button>
            </div>
        )
    }
};

export default withRouter(Dashboard);