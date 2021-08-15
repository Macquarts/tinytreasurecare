import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Grid,
  Container,
  Spinner,
} from '@chakra-ui/react';
import SidebarWithHeader from '../../components/sidebar-with-header';
import { GET_CARERS, GET_RECEIVED_REQUESTS } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import { SEND_JOB_REQUEST, UPDATE_JOB_REQUEST } from '../../utils/mutations';

function Card(props) {
  const {
    firstName,
    lastName,
    ageType,
    careType,
    timeType,
    experienceYears,
    _id,
  } = props.data.parentId || {};
  const jobId = props.data._id
  const jobStatus = props.data.jobStatus
  const [updateJobRequest] = useMutation(UPDATE_JOB_REQUEST);

  const handleSubmit = async (status) => {
    try {
      const { data } = await updateJobRequest({
        variables: {
        jobId:jobId,
        jobStatus: status 
        },
      });
      console.log(data);
      // usethis data to login User and store token in local storage
    } catch (error) {
      console.log('ERROR OCCURRED SHOW ALERT FOR ERROR', error);
    }
  };
  return (
    <Center py={2}>
      <Box
        maxW={'320px'}
        height={'440px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}
      >
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {firstName}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          {lastName} 
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          I am looking for <strong>{careType}</strong> {timeType} with
          experience of <strong>{experienceYears}</strong>
          years would be able to take care of <strong>{ageType}</strong>
        </Text>
        <Stack mt={8} direction={'row'} spacing={4}>
         {jobStatus != "CANCELLED" && jobStatus != "REJECTED" && jobStatus != "APPROVED" ? <> <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            onClick={()=> handleSubmit("APPROVED")}
          >
            Approve
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            onClick={()=>handleSubmit("REJECTED")}
          >
            Not Interested
          </Button></>: <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'green.400'}
            color={'white'}
          disabled 
            
            onClick={handleSubmit}
          >
           {jobStatus}  
          </Button>} 
         
        </Stack>
      </Box>
    </Center>
  );
}
export default function SearchJobs() {
  const { loading, error, data } = useQuery(GET_RECEIVED_REQUESTS);
  const { getRecievedRequests } = data || [];
  console.log('data 123', data);
  if (loading)
    return (
      <Center h="90vh">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  if (error) return `Error! ${error.message}`;
  if (data) {
    console.log('data 1234', data);
  }

  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {getRecievedRequests.length>0? getRecievedRequests.map(data => (
          <Card data={data} />
        )): <Text>No requests right now. check back later</Text>}
      </Grid>
    </Container>
  );
}