import { GlobalStyle } from 'assets/styles/globalStyle';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { users as usersData } from 'data/users';
import MainTemplate from 'components/templates/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                path="/"
                exact
                element={<Dashboard users={users} deleteUser={deleteUser} />}
              ></Route>
              <Route
                path="/add-user"
                exact
                element={
                  <AddUser
                    handleAddUser={handleAddUser}
                    formValues={formValues}
                    handleInputChange={handleInputChange}
                  />
                }
              ></Route>
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
