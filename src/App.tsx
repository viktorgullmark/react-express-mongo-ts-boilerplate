import React, { Suspense } from 'react';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import mainTheme from './assets/themes/mainTheme';

const theme = responsiveFontSizes(mainTheme());

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...</div>}>
        <ResponsiveDrawer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
