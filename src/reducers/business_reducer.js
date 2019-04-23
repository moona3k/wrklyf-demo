import { RECEIVE_NEW_BUSINESS } from '../actions/business_actions';

const businessReducer = (state = [], action) => {

    switch (action.type) {
        case RECEIVE_NEW_BUSINESS:
            
            let businesses = state;
            businesses.push(action.business);
            return businesses;

        default:
            return state;
    }
};

export default businessReducer;