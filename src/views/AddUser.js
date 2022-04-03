import React, { useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import Button from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'input change':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'reset':
      return initialFormState;
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);

  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({
      type: 'input change',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    dispatch({ type: 'reset' });
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new student</Title>
      <FormField
        label="Name"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Attendance"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Average"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
