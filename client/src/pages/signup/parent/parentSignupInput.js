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

export default function ParentSignupInput(props) {
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
            Create a free account to see caregivers who match your needs?
          </Heading>
        </Stack>
        ALL registration inputs here:
        <Box paddingY={4}>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Input placeholder="First name" size="md" />
            <Input placeholder="Last name" size="md" />
            <Input placeholder="email" size="md" />
            <Input placeholder="password" size="md" />
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