import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { describe, test, expect } from 'vitest';
import DeleteConsoles from '../pages/DeleteConsoles';

describe('Consoles', () => {
  test('should render consoles table', () => {
    const consoles = render(
      <Provider store={store}>
        <BrowserRouter>
        <DeleteConsoles />
        </BrowserRouter>
      </Provider>
    );

    expect(consoles).toMatchSnapshot();
  });
});
