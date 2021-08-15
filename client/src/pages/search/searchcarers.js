import React, { useState } from 'react';
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
import { GET_CARERS } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import { SEND_JOB_REQUEST } from '../../utils/mutations';

function Card(props) {
  const {
    carer,
    submitLoading,
    setSubmitLoading,
    setSubmitId,
    submitId,
  } = props;
  const {
    firstName,
    lastName,
    ageType,
    careType,
    timeType,
    experienceYears,
    _id,
  } = carer;
  const [sendJobRequest] = useMutation(SEND_JOB_REQUEST);

  const handleSubmit = async id => {
    try {
      setSubmitId(id);
      setSubmitLoading(true);
      const { data } = await sendJobRequest({
        variables: {
          carerId: id,
        },
      });
      if (data) {
        setSubmitLoading(false);
      }
      // usethis data to login User and store token in local storage
    } catch (error) {
      setSubmitLoading(false);

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
        <Stack height={120}>
 <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}
        >
          I would like to do <strong>{careType}</strong> Job. I am available{' '}
          <strong>{timeType}</strong>.
          {experienceYears != 'ANY' &&
            `I have ${experienceYears}
          years of experience and `}
          I can care for <strong>{ageType}</strong>.
        </Text>
        </Stack>
       
        <Stack mt={8} direction={'row'} spacing={4}>
          {submitLoading && submitId == _id ? (
            <Center width="full">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          ) : (
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
              onClick={() => handleSubmit(_id)}
            >
              Request
            </Button>
          )}
        </Stack>
      </Box>
    </Center>
  );
}
export default function SearchCarers() {
  const { loading, error, data } = useQuery(GET_CARERS);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitId, setSubmitId] = useState(false);

  const { getCarers } = data || [];
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

  return (
    <Container maxW="container.xl">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {getCarers.map(carer => (
          <Card
            carer={carer}
            submitLoading={submitLoading}
            setSubmitLoading={setSubmitLoading}
            submitId={submitId}
            setSubmitId={setSubmitId}
          />
        ))}
      </Grid>
    </Container>
  );
}