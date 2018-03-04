import React from "react";
import data from "../../testData";
import VoteCardContainer from "../VoteCardContainer/VoteCardContainer";
import UsersTable from "../UsersTable/UsersTable";

class ScrumBoard extends React.Component {
    render() {
        return (
            <div>
                <div className="ui massive input">
                    <input type="text" placeholder="Story name..."/>
                </div>
                <VoteCardContainer/>
                <UsersTable users={data}/>
            </div>

        )
    }
}

export default ScrumBoard;