import React from "react";
import VoteCardContainer from "../VoteCardContainer/VoteCardContainer";
import UsersTable from "../UsersTable/UsersTable";
import StoryTitle from "../StoryTitle/StoryTitle";

class ScrumBoard extends React.Component {
   constructor() {
       super();
       this.state = {
           users: []
       };
   }

    componentDidMount() {
        fetch('http://localhost:3000/users')
            .then(results => results.json())
            .then(data => this.setState({users: data}))
            .catch(e => console.log('exception: ',e));
    }

    render() {
        return (
            <div>
                <StoryTitle />
                <VoteCardContainer/>
                <UsersTable users={this.state.users}/>
            </div>

        )
    }
}

export default ScrumBoard;