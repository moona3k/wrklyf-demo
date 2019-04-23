export const RECEIVE_NEW_SCHEDULE = 'RECEIVE_NEW_SCHEDULE';

export const createSchedule = schedule => ({
    type: RECEIVE_NEW_SCHEDULE,
    schedule
});