import { renderWithProviders } from 'helpers/renderWithProviders';
import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Add user', () => {
  it('Handles adding user correctly', () => {
    renderWithProviders(
      <>
        <Dashboard />
        <AddUser />
      </>
    );

    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Stachu' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.3' },
    });

    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Stachu');
  });
});
