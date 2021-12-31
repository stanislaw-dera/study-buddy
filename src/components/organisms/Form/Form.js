import React from 'react';
import {
  StyledTitle,
  Wrapper,
} from 'components/organisms/UsersList/UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';

const Form = ({ handleAddUser, handleInputChange, formValues }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new user</StyledTitle>
        <FormField
          label="Name"
          id="name"
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
        />
        <FormField
          label="Attendance"
          id="attendance"
          name="attendance"
          onChange={handleInputChange}
          value={formValues.attendance}
        />
        <FormField
          label="Average"
          id="average"
          name="average"
          onChange={handleInputChange}
          value={formValues.average}
        />
        <Button>Save</Button>
      </Wrapper>
    </>
  );
};

export default Form;
