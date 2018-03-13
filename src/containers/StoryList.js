import { connect } from "react-redux";
import {vote} from "../actions";
import VoteCardContainer from "../components/VoteCardList/VoteCardList";


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
)(VoteCardContainer);

export default StoryList;