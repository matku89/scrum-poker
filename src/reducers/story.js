const initialState = {};

const story = (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE':
            return {
                ...state,
                youVote: action.card
            };
    }
};

export default story;