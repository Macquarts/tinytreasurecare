import {
    Container,
    SimpleGrid,
    Box,
    Button,
    Grid,
    Heading,
    Stack,
  } from '@chakra-ui/react';
  import Card from '../../../components/card';
  
  export default function CareCriteria(props) {
    const { experienceYears, ageType } = props.value;
  
    return (
      <>
        <Container maxW="container.xl">
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              onClick={() => props.onChangeStep('expectedTime')}
              colorScheme="blue"
              size="sm"
              marginRight="9"
            >
              Back
            </Button>
  
            <Heading size="lg" marginBottom="10">
              Your experience in years?
            </Heading>
          </Stack>
          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            {[
              { value: 'ANY', label: 'Any' },
              { value: '3+', label: '3+' },
              { value: '5+', label: '5+' },
              { value: '7+', label: '7+' },
            ].map(item => {
              return (
                <Card
                  bg={experienceYears ===item.value ? 'red' : '#fff'}
                  borderWidth={experienceYears === item.value ? 0 : 1}
                  borderColor={experienceYears === item.value ? '#fff' : 'red'}
                  textColor={experienceYears === item.value ? '#fff' : '#000'}
                  name={item.label}
                  onClick={() => props.onExperienceSelect(item.value)}
                />
              );
            })}
  
            {/* <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onExperienceSelect('ANY')}
            >
              Any
            </Box>
            <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onExperienceSelect('3')}
            >
              3+
            </Box>
            <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onExperienceSelect('5')}
            >
              5+
            </Box>
            <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onExperienceSelect('7')}
            >
              7+
            </Box> */}
          </Grid>
          <Heading size="lg" marginBottom="10">
            Able to care for?
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {[
              { value: 'INFANTS', label: 'Infants' },
              { value: 'Toddlers', label: 'TODDLERS' },
              { value: 'Early school age', label: 'Early school age' },
              { value: 'School Age', label: 'School Age' },
            ].map(item => {
              return (
                <Card
                  bg={ageType === item.value ? 'red' : '#fff'}
                  borderWidth={ageType === item.value ? 0 : 1}
                  borderColor={ageType === item.value ? '#fff' : 'red'}
                  textColor={ageType === item.value ? '#fff' : '#000'}
                  name={item.label}
                  onClick={() => props.onAgeSelect(item.value)}
                />
              );
            })}
  
            {/* <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onAgeSelect('INFANTS')}
            >
              Infants
            </Box>
            <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onAgeSelect('TODDLERS')}
            >
              Toddlers
            </Box>
            <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onAgeSelect('PRESCHOOLAGE')}
            >
              Early school age
            </Box>
            <Box
              w="100%"
              h="20"
              bg="blue.500"
              onClick={() => props.onAgeSelect('SCHOOLAGE')}
            >
              School age
            </Box> */}
          </Grid>
          <Button onClick={() => props.onSubmit()} colorScheme="blue">
            Next
          </Button>
        </Container>
      </>
    );
  }