import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import SidebarWithHeader from './sidebar-with-header';

  import heroimage from '../images/heropic.jpg'
  export default function HeroSection() {
    return (
     
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
             
              <br />{' '}
              <Text color={'black.400'} as={'span'}>
                Tiny Treasure Care
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
              A platform that lets parents meet carers and carers find families. 
            </Text>
          </Stack>
        </Flex>

        <Flex flex={1}> 
        <Image
              alt={'Login Image'}
              objectFit={'cover'}
              src={
                heroimage
              }
            />
</Flex>

      </Stack>
    
    );
  }
