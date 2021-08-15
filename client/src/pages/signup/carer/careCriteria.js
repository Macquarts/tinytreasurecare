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
      const {experienceYears,ageType,skillsandqualifications}= props.value;
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
    {/* CHOOSE CARERS EXPERIENCE IN CHILD CARE */}
              <Heading size="lg" marginBottom="10">
               Please Indicate the years of experience you have:
              </Heading>
            </Stack>
            <Grid templateColumns="repeat(3, 1fr)" gap={3}>
              {[
                { value: '0-2 years', label: '0-2 years' },
                { value: '3+ years', label: '3+ years' },
                { value: '5+ years', label: '5+ years' },
                { value: '7+ years', label: '7+ years' },
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
{/* CHOOSE THE AGE GROUP OF THE CHILD/CHILDREN THAT CARER CAN CARE FOR */}
      <Heading size="lg" marginBottom="10">
      Please indicate the age of children you can care for :
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {[
          { value: 'INFANTS', label: '0-1 years' },
          { value: 'TODDLERS', label: '1-3 years' },
          { value: 'PRESCHOOL', label: '3-5 years' },
          { value: 'SCHOOL AGE', label: '5-10 years' },
          {value: 'All', label:' All'}
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

{/* Child carers skills and qualification set */}
    <Heading size="lg" marginBottom="10">
         Please indicate the skills and qualifications you possess:
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        {[
          { value: 'Drivers Licence', label: 'Drivers Licence' },
          { value: 'Police Check', label: 'Police Check' },
          { value: 'First Aid Certfication', label: 'First Aid Certification' },
          { value: 'Working With Children Check', label: 'Working With Children Check' },
          {value: 'Child Care Certificate/Diploma', label: 'Child Care Certificate/Diploma'},
          {value:'Working with Children with Special Needs', label:'Working with Children with Speical Needs'}
        ].map(item => {
          return (
            <Card
              bg={skillsandqualifications === item.value ? 'red' : '#fff'}
              borderWidth={skillsandqualifications ===item.value ? 0 : 1}
              borderColor={skillsandqualifications === item.value ? '#fff' : 'red'}
              textColor={skillsandqualifications ===item.value ? '#fff' : '#000'}
              name={item.label}
              onClick={() => props.onskillsandqualificationsSelect(item.value)}
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
            