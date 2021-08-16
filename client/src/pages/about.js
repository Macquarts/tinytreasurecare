import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('gray.50', 'gray.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}>
      <Text
        fontSize={{ base: 'xl', md: '1xl' }}
        textAlign={'center'}
        maxW={'3xl'}>
Parents: We understand the need to be able to find experienced, reliable, caring certified individuals to look after your child/children when you are away from them.
<br></br><br></br><br></br>
Tiny Treasure care is a platform that lets you find carers for your children and carers to find you. Once you sign up with us, you will be able to immediately view a pool of active carers who are willing to help you care for your precious little ones.Searching and viewing a caregivers profile is free. 
<br></br> <br></br>

For Parents: In order to begin your search, sign up and create a profile and choose from the pool of carers. Send a request to the chosen carer. If carer accepts your request a notification as well as their contact details will be displayed. Contact them directly! 
<br></br><br></br><br></br>
For Carers: Carers can apply for jobs by simply creating a profile in our application. Once you are signed in, you can apply for advertised jobs easily on our homepage. When you send a message to the parent, they will be notified of your message. If they wish to reply, they will contact you through the email you have provided them.

<br></br><br></br>
We are adding a lot more features on our applications, in the meantime, let us build the village that can help parents raise their children. Sign Up with us and help us grow.

      </Text>
    </Stack>
  );
}