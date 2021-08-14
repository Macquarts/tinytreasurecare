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

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

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
let authorized = true;

function App() {
  const SecuredRoute = ({ render: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        authorized ? <Component {...props} /> : <Redirect to="/signup" />
      }
    />
  );
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
        <Route path={['/', '/about', '/signup', '/parent-signup', 'carer-signup']} exact component={NavBar} />

          <Switch>
            <Route path="/about">
              <AboutPage></AboutPage>
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
            <Route path="/dashboard">
                <Dashboard />
            </Route>
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
