import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReservationList from '../components/reservations/ReservationList';
import ReservationItem from '../components/reservations/ReservationItem';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import { describe, it, expect } from 'vitest';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('ReservationList', () => {
  it('renders reservations', () => {
    const reservations = [
      {
        id: 1,
        console: { name: 'Playstation 5', photo: 'console-photo-url' },
        reserve_date: '2023-12-12T00:00:00.000Z',
        city: 'New York',
      },
      {
        id: 2,
        console: { name: 'Xbox Series X', photo: 'console-photo-url' },
        reserve_date: '2023-12-12T00:00:00.000Z',
        city: 'New York',
      },
    ];

    const store = mockStore({
      reservations: {
        reservations,
        isLoading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <ReservationList
          storedData={reservations}
          Component={ReservationItem}
        />
      </Provider>
    );

    expect(screen.getByText('Reservations')).toBeInTheDocument();

    expect(screen.getByText('2')).toBeInTheDocument();

    expect(screen.getByText('Playstation 5')).toBeInTheDocument();
    expect(screen.getByText('Xbox Series X')).toBeInTheDocument();
  });
});

describe('ReservationItem', () => {
  it('renders reservation details', () => {
    const reservation = {
      id: 1,
      console: { name: 'Playstation 5', photo: 'console-photo-url' },
      reserve_date: '2023-12-12T00:00:00.000Z',
      city: 'New York',
    };

    const store = mockStore({});

    render(
      <Provider store={store}>
        <ReservationItem data={reservation} />
      </Provider>
    );

    expect(screen.getByText('Playstation 5')).toBeInTheDocument();
    expect(screen.getByText('2023-12-12')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
  });
});
