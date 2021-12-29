import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import {
  StyledAverage,
  StyledInformation,
  Wrapper,
} from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledAverage value={average} />
    <StyledInformation>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledInformation>
    <Button />
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
