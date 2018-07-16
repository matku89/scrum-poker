import React from 'react';
import {setStoryName} from "../../actions";

const StoryTitle = () => {
    return (
        <div className="ui massive input">
            <input type="text" placeholder="Story name..."/>
            <button className="ui primary button" role="button" onClick={setStoryName}>Set story name</button>
        </div>
    )
};

export default StoryTitle;
