import sessionReducer from './session_reducer';
import employeeReducer from './employee_reducer';
import businessReducer from './business_reducer';
import scheduleReducer from './schedule_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    session: sessionReducer,
    employees: employeeReducer,
    businesses: businessReducer,
    schedules: scheduleReducer
});

export default rootReducer;