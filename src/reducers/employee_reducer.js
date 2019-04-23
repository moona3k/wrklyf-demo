import { RECEIVE_NEW_EMPLOYEE } from '../actions/employee_actions';

const employeeReducer = (state = [], action) => {

    switch (action.type) {
        case RECEIVE_NEW_EMPLOYEE:
        
            let employees = state;
            employees.push(action.employee);
            return employees;
            
        default:
            return state;

    }
};

export default employeeReducer;