import { connect } from 'react-redux';
import { createSchedule } from '../../actions/schedule_actions';
import Dashboard from './Dashboard';

const mapStateToProps = state => ({
  businesses: state.businesses,  
  employees: state.employees,
  schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({
  createSchedule: schedule => dispatch(createSchedule(schedule))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);