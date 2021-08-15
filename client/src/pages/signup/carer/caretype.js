import {
    Container,
    SimpleGrid,
    Box,
    Button,
    Grid,
    Heading,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import Card from '../../../components/card';
  
  export default function CareType(props) {
    return (
      <>
        <Container>
          <Heading size="lg" marginBottom="10">
            What kind of care you are offering?
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {/* <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onCareTypeSelect('NANNIES')}
            >
              Nannies & Baby Sitters
            </Box>
            <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onCareTypeSelect('TUTORING')}
            >
              Tutoring and lessons
            </Box>
            <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onCareTypeSelect('DAYCARE')}
            >
              Daycare Centers
            </Box> */}
            {[
              {
                value: 'Nannies & Baby Sitters',
                label: 'Nannies & Baby Sitters',
              },
              { value: 'Tutoring and lessons', label: 'Tutoring and lessons' },
              { value: 'Daycare Centers', label: 'Daycare Centers' },
            ].map(item => {
              return (
                <Card
                  bg={props.value == item.value ? 'red' : '#fff'}
                  borderWidth={props.value == item.value ? 0 : 1}
                  borderColor={props.value == item.value ? '#fff' : 'red'}
                  textColor={props.value == item.value ? '#fff' : '#000'}
                  name={item.label}
                  onClick={() => props.onCareTypeSelect(item.value)}
                />
              );
            })}
            {/* <Card
              name=" Nannies & Baby Sitters"
              onClick={() => props.onCareTypeSelect('NANNIES')}
            />
            <Card
              name=" Tutoring and lessons"
              onClick={() => props.onCareTypeSelect('NANNIES')}
            />
            <Card
              name="Daycare Centers"
              onClick={() => props.onCareTypeSelect('NANNIES')}
            /> */}
          </Grid>
        </Container>
      </>
    );
  }