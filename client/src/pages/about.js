import { useMutation } from '@apollo/client';
import {Button} from '@chakra-ui/react'
import { ADD_USER, LOGIN_USER } from '../utils/mutations';


export default function AboutPage() {

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
           <Button onClick={registerUser}>Register</Button> 
           <Button onClick={signinUser}>Signin</Button> 
        </>
    );

}