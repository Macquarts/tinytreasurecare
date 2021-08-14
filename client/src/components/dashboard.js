import { useMutation } from '@apollo/client';
import {Button} from '@chakra-ui/react'
import { Route, Router, Switch, useRouteMatch } from 'react-router';
import SearchCarers from '../pages/search/searchcarers';
import { ADD_USER, LOGIN_USER } from '../utils/mutations';
import SideBar from './sidebar';


export default function DashBoard() {
  let { path, url } = useRouteMatch();
    const [addUser] = useMutation(ADD_USER);
    const [loginUser] = useMutation(LOGIN_USER);

    const registerUser = async () => {
        try {
        const { data } = await addUser({
        variables: {
            username: "test121",
            email: "testmail4u2@gmail.co",
            password: "12334455",
            type: "PARENT",
            // add remaining data from form
        }
        });
        console.log(data); 
        // usethis data to login User and store token in local storage
        } catch (error) {
        console.log("ERROR OCCURRED SHOW ALERT FOR ERROR",error); 
        }
    
   };

    const signinUser = async () => {
        try {
        const { data } = await loginUser({
        variables: {
            email: "testmail4u@gmail.co",
            password: "12334455",
            // add remaining data from form
        }
        });
        console.log(data); 
        // usethis data to login User and store token in local storage
        } catch (error) {
        console.log("ERROR OCCURRED SHOW ALERT FOR ERROR",error); 
        }
    
  };

  const sendRequest = async () => {
    console.log("sendRequest");
  }



    
    return (
        <>
        <SideBar>
          <Switch>
          <Route exact path={`${path}/carers`}>
           <SearchCarers /> 
          </Route>
          <Route path="/my-request">
            my requests
            list of requests given by parent
          </Route>
          <Route path="/myjobs">
            my jobs
          </Route>
        </Switch>
        
        </SideBar> 
        </>
    );

}