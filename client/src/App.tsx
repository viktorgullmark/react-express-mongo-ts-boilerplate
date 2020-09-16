import { CssBaseline } from '@material-ui/core';
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import mainTheme from './assets/themes/mainTheme';
import ContentWrapper from './components/content-wrapper';
import GlobalStyles from './components/global-styles';
import ProtectedRoute from './components/protected-route';
import { useStores } from './store';
import Home from './views/home';
import Login from './views/login';
import Register from './views/register';

const history = createBrowserHistory();

const theme = responsiveFontSizes(mainTheme());

function App() {
  const { routerStore } = useStores();
  routerStore.setHistory(history);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Router history={history}>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <ContentWrapper>
              <ProtectedRoute path='/' component={Home} />
            </ContentWrapper>
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
