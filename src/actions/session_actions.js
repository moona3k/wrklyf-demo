export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const signin = user => {
    return (
        {
            type: RECEIVE_CURRENT_USER,
            user
        }
    )
};
