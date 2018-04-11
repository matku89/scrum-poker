import React from "react";
import {getUsersRequested} from '../../actions';
import StoryTitle from "../StoryTitle/StoryTitle";
import StoryList from "../../containers/StoryList";
import {connect} from "react-redux";
import UsersList from "../../containers/UsersList";


class ScrumBoard extends React.Component {
   constructor() {
       super();
       this.state = {
           users: []
       };
   }

    componentDidMount() {
       this.props.dispatch(getUsersRequested());
        // fetch('http://localhost:3000/users')
        //     .then(results => results.json())
        //     .then(data => this.setState({users: data}))
        //     .catch(e => console.log('exception: ',e));
    }

    render() {
        return (
            <div>
                <StoryTitle />
                <StoryList />
                <UsersList />
            </div>

        )
    }
}

export default connect()(ScrumBoard);