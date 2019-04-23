import { connect } from 'react-redux';
import { createSchedule } from '../../actions/schedule_actions';
import ScheduleForm from './ScheduleForm';

const mapStateToProps = state => ({
  businesses: state.businesses,  
  employees: state.employees
});

const mapDispatchToProps = dispatch => ({
  createSchedule: schedule => dispatch(createSchedule(schedule))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleForm);