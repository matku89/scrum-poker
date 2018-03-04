import React from "react";
import './VoteCard.css';

function VoteCard(props) {
    return (
        <div onClick={props.vote} className="vote-card">{props.voteValue}</div>
    );
}

export default VoteCard;