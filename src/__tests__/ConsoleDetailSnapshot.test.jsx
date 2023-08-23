import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { describe, test, expect } from 'vitest'; // Importing from vitest
import ConsoleDetail from '../components/details/ConsoleDetail';

const mockStore = configureStore([]);

describe('ConsoleDetail', () => {
  test('matches snapshot', () => {
    const consoleData = {
      id: 1,
      name: 'SEGA',
      purchase_price: 10,
      rental_price: 4,
      description: 'A good one',
      photo: 'linktoImage.png',
    };

    const initialState = {
      consoles: {
        consoles: [consoleData],
      },
    };

    const store = mockStore(initialState);

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/console/1']}>
          <Routes>
            <Route path="/console/:id" element={<ConsoleDetail />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
