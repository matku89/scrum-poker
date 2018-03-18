import * as types from '../actions/actionTypes';
const initialState = {};

const story = (state = initialState, action) => {
    switch (action.type) {
        case types.VOTE:
            return {
                ...state,
                youVote: action.card
            };
        default:
            return state
    }
};

export default story;