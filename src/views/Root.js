import { GlobalStyle } from 'assets/styles/globalStyle';
import UsersList from 'components/organisms/UsersList/UsersList';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { users as usersData } from 'data/users';
import Form from 'components/organisms/Form/Form';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = async (e) => {
    console.log('handle change');
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Wrapper>
          <nav>
            <Link to="/add-user">Add user</Link>
            <Link to="/">Users list</Link>
          </nav>

          <Routes>
            <Route
              path="/"
              exact
              element={<UsersList deleteUser={deleteUser} users={users} />}
            ></Route>
            <Route
              path="/add-user"
              exact
              element={
                <Form
                  formValues={formValues}
                  handleAddUser={handleAddUser}
                  handleInputChange={handleInputChange}
                />
              }
            ></Route>
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
