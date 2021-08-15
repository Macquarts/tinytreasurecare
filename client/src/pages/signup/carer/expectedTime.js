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
              How soon you are available?
            </Heading>
          </Stack>
  
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {[
              { value: 'Now', label: 'Now' },
              { value: 'WEEK', label: 'In a Week' },
              { value: 'MONTH', label: 'In a Month' },
            ].map(item => {
              return (
                <Card
                  bg={props.value === item.value ? 'red' : '#fff'}
                  borderWidth={props.value === item.value ? 0 : 1}
                  borderColor={props.value === item.value ? '#fff' : 'red'}
                  textColor={props.value === item.value ? '#fff' : '#000'}
                  name={item.label}
                  onClick={() => props.onTimeTypeSelect(item.value)}
                />
              );
            })}
  
            {/* <Box w="100%" h="20" bg="blue.500" onClick={()=>props.onTimeTypeSelect('NOW')}>
                          Now
                      </Box>
                      <Box w="100%" h="20" bg="blue.500" onClick={()=>props.onTimeTypeSelect('WEEK')}>
                          In A week
                      </Box>
                        <Box w="100%" h="20" bg="blue.500" onClick={()=>props.onTimeTypeSelect('MONTH')}>
                          In a month
                      </Box> */}
          </Grid>
        </Container>
      </>
    );
  }