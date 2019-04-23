import React from 'react';
import { withRouter } from "react-router-dom";

class SplashPage extends React.Component {
    
    changeRoute(path) {
        let url = `/${path}`;
        this.props.history.push(url);
    }

    render() {
        return (
            <div id="splash-page-container">
                <div className="splash-page-box">
                    <h2>Employee scheduling.</h2>
                    <h2>Accurate time tracking.</h2>
                    <h2>From your phone.</h2>
                    <p>Create schedules, send automated shift reminders, get overtime alerts, and accurately track clock-in & clock-out.</p>            
                    <button onClick={() => this.changeRoute('new-store')}>Create New Business</button>
                    <button onClick={() => this.changeRoute('new-employee')}>Create New Employee</button>
                    <button onClick={() => this.changeRoute('new-schedule')}>Create New Schedule</button>
                    <button onClick={() => this.changeRoute('dashboard')}>See Dashboard</button>
                </div>
            </div>
        )
    }
};
    
export default withRouter(SplashPage);