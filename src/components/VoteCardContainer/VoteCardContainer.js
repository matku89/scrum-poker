import React from "react";
import VoteCard from "../VoteCard/VoteCard";

class VoteCardContainer extends React.Component {


    render() {
        const voteOptions = [0, 1, 2, 3, 5, 8, 13, 20, 40, 100, '?'];

        const voteCardList = voteOptions.map((voteOption) =>
            <li><VoteCard/></li>
        );
        return (
            <ul>{voteCardList}</ul>
        )
    }

}

export default VoteCardContainer;