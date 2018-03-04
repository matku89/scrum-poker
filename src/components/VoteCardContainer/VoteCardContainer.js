import React from "react";
import {List} from "semantic-ui-react";

import VoteCard from "../VoteCard/VoteCard";
import './VoteCardContainer.css';


class VoteCardContainer extends React.Component {

    vote() {
        console.log('vote');
    }

    render() {
        const voteOptions = [0, 1, 2, 3, 5, 8, 13, 20, 40, 100, '?'];

        const voteCardList = voteOptions.map((voteOption) =>
            <List.Item key={voteOption}><VoteCard vote={this.vote} voteValue={voteOption}/></List.Item>
        );
        return (
            <List horizontal size='big'>{voteCardList}</List>
        )
    }

}

export default VoteCardContainer;