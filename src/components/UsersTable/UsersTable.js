import React from "react";
import {Table} from "semantic-ui-react";

const UsersTable = ({usersList}) => {
    const usersRows = usersList.map((user) =>
        <Table.Row key={user.userName}>
            <Table.Cell>{user.userName}</Table.Cell>
            <Table.Cell>Points number</Table.Cell>
        </Table.Row>
    );
    return(
        <Table basic="very" celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>User</Table.HeaderCell>
                    <Table.HeaderCell>Points</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body className="users-table">
                {usersRows}
            </Table.Body>
        </Table>
    )
};

export default UsersTable;
