import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
  Redirect,
} from 'react-router-dom';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import NavBar from './components/navbar';
import Footer from './components/footer';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import SignUpPage from './pages/signup/signup';
import ParentSignup from './pages/signup/parent/parentSignup';
import CarerSignup from './pages/signup/carer/carerSignup';
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import SearchCarers from './pages/search/searchcarers';
import SidebarWithHeader from './components/sidebar-with-header';
import SearchJobs from './pages/search/searchjobs';
import Dashboard from './components/dashboard';
import SignIn from './pages/signin';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
  // uri:'http://localhost:3001/graphql',
 
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const SecuredRoute = ({ render: Component, ...rest }) => {
    const token = localStorage.getItem('authToken');
    return (
      <Route
        {...rest}
        render={props =>
          token ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  };
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <Route
            path={[
              '/',
              '/about',
              '/signup',
              '/parent-signup',
              '/carer-signup',
              '/signin',
            ]}
            exact
            component={NavBar}
          />

          <Switch>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <Route path="/signin">
              <SignIn></SignIn>
            </Route>

            <Route path="/signup">
              <SignUpPage></SignUpPage>
            </Route>
            <Route path="/parent-signup">
              <ParentSignup />
            </Route>
            <Route path="/carer-signup">
              <CarerSignup />
            </Route>

            <SecuredRoute
              path="/dashboard"
              name="dashboard"
              render={props => <Dashboard {...props} />}
            />
            <SecuredRoute
              path="/searchcarers"
              name="SearchCarers"
              render={props => <SearchCarers />}
            />
            <SecuredRoute
              path="/searchjobs"
              name="SearchJobs"
              render={props => <SearchJobs />}
            />
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
          </Switch>
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;