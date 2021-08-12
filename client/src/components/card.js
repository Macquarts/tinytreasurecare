import {
    Box,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  
  export default function Card({
    name,
    onClick,
    boxStyle,
    textStyle,
    bg,
    borderWidth,
    borderColor,
    textColor,
  }) {
    return (
      <Center py={6}>
        <Box
          maxW={'330px'}
          w={'full'}
          bg={bg ?? '#fff'}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          onClick={onClick}
          borderWidth={borderWidth ?? 0}
          borderColor={borderColor ?? '#fff'}
          boxStyle
        >
          <Stack
            textAlign={'center'}
            p={6}
            color={useColorModeValue('gray.800', 'white')}
            align={'center'}
            alignItems="center"
            justifyContent="center"
            height="120"
          >
            <Text
              fontSize={'sm'}
              fontWeight={500}
              textAlign="center"
              // p={2}
              // px="3"
              color={textColor ?? '#000'}
              background="transparent"
              //   rounded={'full'}
            >
              {name}
            </Text>
          </Stack>
        </Box>
      </Center>
    );
  }