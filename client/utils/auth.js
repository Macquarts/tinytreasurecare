import {
    Container,
    SimpleGrid,
    Box,
    Button,
    Center,
    background,
    Heading,
    Text,
  } from '@chakra-ui/react';
  import { useHistory } from 'react-router-dom';
  
  export default function SignUpPage() {
    const history = useHistory();
  
    const handleClick = type => {
      if (type === 'parent') {
        history.push('/parent-signup');
      } else {
        history.push('/carer-signup');
      }
    };
  
    return (
      <>
        <Container>
          <div
            style={{
              height: '80vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Heading as="h3">Let's get started. Choose an option.</Heading>
            <SimpleGrid columns={2} spacing={10}>
              <Box w="100%" py={4} color="black">
                {/* <Text fontSize="2xl" fontWeight="bold" marginBottom="3">
                  I need a Carer{' '}
                </Text> */}
                <Button onClick={() => handleClick('parent')} colorScheme="blue">
                  Find Carer
                </Button>
              </Box>
              <Box w="100%" py={4} color="black">
                {/* <Text fontSize="2xl" fontWeight="bold" marginBottom="3">
                  I need a Job
                </Text> */}
                <Button onClick={() => handleClick('carer')} colorScheme="blue">
                  Find Jobs
                </Button>
              </Box>
            </SimpleGrid>
          </div>
        </Container>
      </>
    );
  }