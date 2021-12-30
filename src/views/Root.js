import { GlobalStyle } from 'assets/styles/globalStyle';
import UsersList from 'components/organisms/UsersList/UsersList';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Wrapper>
      <UsersList title="Users list" />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
