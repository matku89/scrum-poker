import React from "react";
import './VoteCard.css';

const VoteCard = ({onClick, voteValue, voteSelected}) => {
    return (
        <div onClick={onClick} className={'vote-card '+ (voteSelected === voteValue ? 'selected' : '') }>{voteValue}</div>
    );
};

export default VoteCard;