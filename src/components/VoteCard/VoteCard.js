import React from "react";
import './VoteCard.css';

const VoteCard = (props) => {
    return (
        <div onClick={props.vote} className="vote-card">{props.voteValue}</div>
    );
};

export default VoteCard;