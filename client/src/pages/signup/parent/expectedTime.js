import {
    Container,
    SimpleGrid,
    Box,
    Button,
    Grid,
    Heading,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
  import Card from '../../../components/card';
  export default function ExpectedTime(props) {
    return (
      <>
        <Container>
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              onClick={() => props.onChangeStep('careType')}
              colorScheme="blue"
              size="sm"
              marginRight="9"
            >
              Back
            </Button>
            <Heading size="lg" marginBottom="10">
            Please indicate the desired days and times of care needed 
            </Heading>
          </Stack>
  
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {[
              { value: 'Available Immediately', label: 'Available Immediately' },
              { value: 'WEEK', label: 'In a Week' },
              { value: 'MONTH', label: 'In a Month' },
              
            ].map(item => {
              return (
                <Card
                  bg={props.value === item.value ? 'red' : '#fff'}
                  borderWidth={props.value === item.value ? 0 : 1}
                  borderColor={props.value ===item.value ? '#fff' : 'red'}
                  textColor={props.value === item.value ? '#fff' : '#000'}
                  name={item.label}
                  onClick={() => props.onTimeTypeSelect(item.value)}
                />
              );
            })}
             </Grid>
        </Container>
      </>
    );
  }