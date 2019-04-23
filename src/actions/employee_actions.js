export const RECEIVE_NEW_EMPLOYEE = 'RECEIVE_NEW_EMPLOYEE';

export const createEmployee = employee => ({
    type: RECEIVE_NEW_EMPLOYEE,
    employee
});