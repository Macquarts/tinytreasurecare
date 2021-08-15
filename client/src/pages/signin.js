import { useMutation } from '@apollo/client';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';

export default function SimpleCard() {
  const [loginUser] = useMutation(LOGIN_USER);
  const [userInfo, setUserInfo] = useState({});
  const history = useHistory();
  const handleChange = (name, value) => {
    setUserInfo({ ...userInfo, [name]: value });
  };
  const { email, password } = userInfo || {};

  const login = async () => {
    try {
      const { data } = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });
      if (data) {
        localStorage.setItem('authToken', data.loginUser.token);
        localStorage.setItem('userType', data.loginUser.user.type);
        localStorage.setItem('firstName', data.loginUser.user.firstName);

        if (localStorage.getItem('authToken')) {
          data.loginUser.user.type == 'PARENT'
            ? history.push('/dashboard/carers')
            : history.push('/dashboard/my-jobs');
        }
      }
      // usethis data to login User and store token in local storage
    } catch (error) {
      console.log('ERROR OCCURRED SHOW ALERT FOR ERROR', error);
    }
  };
  return (
    <Flex
      minH={'90vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={e => {
                  handleChange(e.target.name, e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={e => {
                  handleChange(e.target.name, e.target.value);
                }}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={() => login()}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}