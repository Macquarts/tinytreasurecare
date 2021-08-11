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
  Link as RouteLink
} from "react-router-dom";


import {ColorModeSwitcher} from './ColorModeSwitch';
import { Logo } from './Logo';
import AboutPage from './pages/about';
import HomePage from './pages/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import SignUpPage from './pages/signup/signup';
import ParentSignup from './pages/signup/parent/parentSignup';
import CarerSignup from './pages/signup/carer/carerSignup';





function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
        
          <Route path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/signup">
            <SignUpPage></SignUpPage>
          </Route>
          <Route path="/parent-signup">
            <ParentSignup />
            <Route path="/carer-signup">
            <CarerSignup />
          </Route>
          <Route path="/"></Route>
          </Route>
          
        </Switch>
      </Router>

    </ChakraProvider>
  );
}


export default App;