export const RECEIVE_NEW_BUSINESS = 'RECEIVE_NEW_BUSINESS'

export const createBusiness = business => ({
    type: RECEIVE_NEW_BUSINESS,
    business
});