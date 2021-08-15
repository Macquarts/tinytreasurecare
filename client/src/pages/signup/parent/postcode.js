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

export default function PostCode(props) {
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
            onClick={() => props.onChangeStep('careCriteria')}
            colorScheme="blue"
            size="sm"
            marginRight="9"
          >
            Back
          </Button>

          <Heading size="lg" marginBottom="10">
            Ok, let's confirm where you need care.
            <br />
          </Heading>
        </Stack>
        Enter your postcode:
        <Box w="100%" p={4} color="black">
          <Input
            maxLength={6}
            type="number"
            placeholder="Enter your postcode"
            onChange={e => {
              props.onChangePostCode(e.target.value);
            }}
            value={props.postCode}
          />
        </Box>
        <Box w="100%" p={4} color="black">
          <Button onClick={() => props.onSubmit()} colorScheme="blue">
            Next
          </Button>
        </Box>
      </Container>
    </>
  );
}