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
                  Minimum years of experience?
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
                      bg={experienceYears === item.value ? 'red' : '#fff'}
                      borderWidth={experienceYears === item.value ? 0 : 1}
                      borderColor={experienceYears === item.value ? '#fff' : 'red'}
                      textColor={experienceYears === item.value ? '#fff' : '#000'}
                      name={item.label}
                      onClick={() => props.onExperienceSelect(item.value)}
                    />
                  );
                })}

</Grid>
        <Heading size="lg" marginBottom="10">
          Able to care for?
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {[
            { value: 'INFANTS', label: 'Infants' },
            { value: 'TODDLERS', label: 'Toddlers' },
            { value: 'PRESCHOOL', label: 'Pre School' },
            { value: 'School Age', label: 'School Age' },
          ].map(item => {
            return (
              <Card
                bg={ageType == item.value ? 'red' : '#fff'}
                borderWidth={ageType === item.value ? 0 : 1}
                borderColor={ageType === item.value ? '#fff' : 'red'}
                textColor={ageType === item.value ? '#fff' : '#000'}
                name={item.label}
                onClick={() => props.onAgeSelect(item.value)}
              />
            );
          })}
      </Grid>
        <Button onClick={() => props.onSubmit()} colorScheme="blue">
          Next
        </Button>
      </Container>
    </>
  );
}