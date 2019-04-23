import { RECEIVE_NEW_SCHEDULE } from '../actions/schedule_actions';

const scheduleReducer = (state = [], action) => {

    switch (action.type) {
        case RECEIVE_NEW_SCHEDULE:
        
            let schedules = state;
            schedules.push(action.schedule);
            return schedules;
            
        default:
            return state;

    }
};

export default scheduleReducer;