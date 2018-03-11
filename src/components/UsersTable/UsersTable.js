import React from "react";
import {Table} from "semantic-ui-react";

const UsersTable = (props) => {
    const users = props.users.map((user) =>
        <Table.Row key={user.userName}>
            <Table.Cell>{user.userName}</Table.Cell>
        </Table.Row>
    );
    return(
        <Table basic="very" celled collapsing>
            <Table.Header></Table.Header>
            <Table.Body className="users-table">
                {users}
            </Table.Body>
        </Table>
    )
};

export default UsersTable;
