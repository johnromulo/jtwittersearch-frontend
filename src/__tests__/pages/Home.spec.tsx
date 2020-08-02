import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent } from '@testing-library/react';
import Home from '@pages/Home';

import primary from '@styles/themes/primary';

const mockedSelectTheme = jest.fn();

jest.mock('@contexts/theme', () => {
  return {
    useThemeRD: () => ({
      selectTheme: mockedSelectTheme,
    }),
  };
});

describe('Home Page', () => {
  it('should be able card desktop action', () => {
    const { getByTestId, queryByTestId } = render(
      <ThemeProvider theme={primary}>
        <Home />
      </ThemeProvider>
    );
    const buttonCardDeskctop = getByTestId('card-button-desktop');

    fireEvent.click(buttonCardDeskctop);

    const spanDesktopInfo = queryByTestId('desktop-info');

    expect(spanDesktopInfo).toBeTruthy();
  });

  it('should be able card tablet action', () => {
    const { getByTestId, queryByTestId } = render(
      <ThemeProvider theme={primary}>
        <Home />
      </ThemeProvider>
    );
    const buttonCardDeskctop = getByTestId('card-button-tablet');

    fireEvent.click(buttonCardDeskctop);

    const spanDesktopInfo = queryByTestId('modal-tablet-info');

    expect(spanDesktopInfo).toBeTruthy();
  });

  it('should be able card change theme', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={primary}>
        <Home />
      </ThemeProvider>
    );
    const buttonCardDeskctop = getByTestId('card-button-mobile');

    fireEvent.click(buttonCardDeskctop);

    expect(mockedSelectTheme).toBeCalled();
  });
});
