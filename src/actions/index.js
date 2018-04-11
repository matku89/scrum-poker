import * as types from './actionTypes';
let storyNumber = 0;

export const vote = (card) => {
    return {
        type: types.VOTE,
        card
    }
};

export const getUsersRequested = () => {
    return {
        type: types.GET_USERS_REQUESTED
    }
};

export const getUsersDone= (data) => {
    return {
        type: types.GET_USERS_DONE,
        payload: data
    }
};

export const getUsersFailure = (error) => {
    return {
        type: types.GET_USERS_FAILED,
        payload: error
    }
};

export const setStoryName = storyName => {
    return {
        type: types.SET_STORY_NAME,
        storyName
    }
};

export const createNewStory = () => {
    return {
        type: types.CREATE_NEW_STORY,
        id: storyNumber++
    }
};


