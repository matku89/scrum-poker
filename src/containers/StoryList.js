import { connect } from "react-redux";
import {vote} from "../actions";
import VoteCardList from "../components/VoteCardList/VoteCardList";


const mapStateToProps = state => {
    return {
        story: state.story
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCardClick: card => {
            dispatch(vote(card))
        }
    }
};

const StoryList = connect(
    mapStateToProps,
    mapDispatchToProps
)(VoteCardList);

export default StoryList;