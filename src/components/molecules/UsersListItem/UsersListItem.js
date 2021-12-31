import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import {
  StyledAverage,
  StyledInformation,
  Wrapper,
} from './UsersListItem.styles';

const UsersListItem = ({
  deleteUser,
  userData: { average, name, attendance = '0%' },
}) => (
  <Wrapper>
    <StyledAverage value={average} />
    <StyledInformation>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledInformation>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
