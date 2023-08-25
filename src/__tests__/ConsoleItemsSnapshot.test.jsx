import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { describe, test, expect } from 'vitest';
import ConsoleItems from '../components/consoles/ConsoleItems';

describe('Consoles', () => {
  test('should render consoles', () => {
    const consoles = render(
      <Provider store={store}>
        <BrowserRouter>
          <ConsoleItems />
        </BrowserRouter>
      </Provider>
    );

    expect(consoles).toMatchSnapshot();
  });
});
