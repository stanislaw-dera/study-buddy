import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';

const UsersList = ({ deleteUser, users }) => {
  return (
    <>
      <Title>Users List</Title>
      {users.map((userData) => (
        <UsersListItem
          deleteUser={deleteUser}
          key={userData.name}
          userData={userData}
        />
      ))}
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;
