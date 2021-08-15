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
        const { experienceYears, ageType, skillsandqualifications} = props.value;
      
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
                 Please Indicate the years of experience you'd prefer your carer to have:
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
{/* CHOOSE THE AGE GROUP OF THE CHILD/CHILDREN THAT NEEDS CARING  */}
        <Heading size="lg" marginBottom="10">
        Please indicate the age of children you need to be cared for:
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
           Please indicate the skills and qualifications you require the carer to have:
        </Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          {[
            { value: 'Drivers Licence', label: 'Drivers Licence' },
            { value: 'Police Check', label: 'Police Check' },
            { value: 'First Aid Certfication', label: 'First Aid Certification' },
            { value: 'Working With Children Check', label: 'Working With Children Check' },
            {value: 'Child Care Certificate/Diploma', label: 'Child Care Certificate/Diploma'},
            {value:'Working with Children with Special Needs', label:'Working with Children with Speical Needs'},
            {value:'All the Above Certificates'},
          ].map(item => {
            console.log(skillsandqualifications)

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