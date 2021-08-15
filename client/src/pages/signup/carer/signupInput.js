import {
    Container,
    SimpleGrid,
    Box,
    Button,
    Grid,
    Input,
    Heading,
    Stack,
  } from '@chakra-ui/react';
  
  export default function CarerSignupInput(props) {
    const { handleChange, userInfo } = props;
    const { firstName, lastName, email, password } = userInfo || {};
  
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
              onClick={() => props.onChangeStep('zipcode')}
              colorScheme="blue"
              size="sm"
              marginRight="9"
            >
              Back
            </Button>
  
            <Heading size="lg" marginBottom="10">
              Create a free account to start accepting jobs?
            </Heading>
          </Stack>
          ALL registration inputs here:
          <Box paddingY={4}>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <Input
                placeholder="First name"
                size="md"
                name="firstName"
                onChange={e => {
                  handleChange(e.target.name, e.target.value);
                }}
                value={firstName}
              />
              <Input
                placeholder="Last name"
                name="lastName"
                size="md"
                onChange={e => {
                  handleChange(e.target.name, e.target.value);
                }}
                value={lastName}
              />
              <Input
                placeholder="email"
                size="md"
                name="email"
                onChange={e => {
                  handleChange(e.target.name, e.target.value);
                }}
                value={email}
                type="email"
              />
              <Input
                placeholder="password"
                size="md"
                name="password"
                onChange={e => {
                  handleChange(e.target.name, e.target.value);
                }}
                value={password}
                type="password"
              />
            </Grid>
          </Box>
          <Box paddingY={4}>
            <Button onClick={() => props.onSubmit()} colorScheme="blue">
              SUBMIT
            </Button>
          </Box>
        </Container>
      </>
    );
  }