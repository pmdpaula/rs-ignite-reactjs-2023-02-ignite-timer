import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { CyclesContextProvider } from './contexts/CycleContext';

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
};
