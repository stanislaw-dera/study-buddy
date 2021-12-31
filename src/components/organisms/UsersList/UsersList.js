import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledTitle, Wrapper } from './UsersList.styles';

const UsersList = ({ deleteUser, users }) => {
  return (
    <Wrapper>
      <StyledTitle>Users List</StyledTitle>
      {users.map((userData) => (
        <UsersListItem
          deleteUser={deleteUser}
          key={userData.name}
          userData={userData}
        />
      ))}
    </Wrapper>
  );
};

export default UsersList;
