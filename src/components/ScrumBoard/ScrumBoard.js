import React from "react";
import data from "../../testData";
import VoteCardContainer from "../VoteCardContainer/VoteCardContainer";
import UsersTable from "../UsersTable/UsersTable";

class ScrumBoard extends React.Component {
    render() {
        return (
            <div>
                <div class="ui massive input">
                    <input type="text" placeholder="Story name..."/>
                </div>
                <UsersTable/>
                <VoteCardContainer/>
            </div>

        )
    }
}

export default ScrumBoard;