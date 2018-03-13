let storyNumber = 0;

export const vote = (card) => {
    return {
        type: 'VOTE',
        card
    }
};

export const setStoryName = storyName => {
    return {
        type: 'SET_STORY_NAME',
        storyName
    }
};

export const createNewStory = () => {
    return {
        type: 'CREATE_NEW_STORY',
        id: storyNumber++
    }
};
