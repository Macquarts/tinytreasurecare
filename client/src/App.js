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


import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import HomePage from './pages/home';
import NavBar from './components/navbar';
import Footer from './components/footer';



export default App;

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
          
        </Switch>
      </Router>

    </ChakraProvider>
  );
}