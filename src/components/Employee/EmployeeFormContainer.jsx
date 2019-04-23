import { connect } from 'react-redux';
import { createEmployee } from '../../actions/employee_actions';
import EmployeeForm from './EmployeeForm';

const mapStateToProps = state => ({
    businesses: state.businesses
});

const mapDispatchToProps = dispatch => ({
    createEmployee: employee => dispatch(createEmployee(employee))
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);