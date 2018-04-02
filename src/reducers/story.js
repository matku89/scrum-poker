import * as types from '../actions/actionTypes';
const initialState = {};

const story = (state = initialState, action) => {
    switch (action.type) {
        case types.VOTE:
            return {
                ...state,
                youVote: action.card
            };
        case types.GET_USERS_DONE: {
            return {
                ...state,
                users: action.payload
            }
        }
        default:
            return state
    }
};

export default story;