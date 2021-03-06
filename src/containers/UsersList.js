import { connect } from "react-redux";
import UsersTable from "../components/UsersTable/UsersTable";


const mapStateToProps = state => {
    return {
        usersList: state.story.users
    }
};

const UsersList = connect(
    mapStateToProps
)(UsersTable);

export default UsersList;