import React from 'react';
import { useSelector } from 'react-redux';
import { StyledUsersDisplay } from './StyledUsersDisplay';
import { selectUsersList, selectUserSearchTerm } from '../../redux_slices/usersSlice';

function UsersDisplay() {
    const users = useSelector(selectUsersList);
    const searchTerm = useSelector(selectUserSearchTerm);
    const filteredUsersList = users
        .filter((user) => user.login.username.includes(searchTerm));
    return (
        <StyledUsersDisplay>
            UsersDisplay
            {filteredUsersList.map((user, i) => (
                <p key={user.login.sha1}>User {i} : {user.login.username}</p>
            ))}
        </StyledUsersDisplay>
    );
}

export default UsersDisplay;