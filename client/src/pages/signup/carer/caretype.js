import {
    Container,
    SimpleGrid,
    Box,
    Button,
    Grid,
    Heading,
    Center,
    Text,
    Stack,
    List,
    ListItem,
    ListIcon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { CheckIcon } from '@chakra-ui/icons';
  import Card from '../../../components/card';
  
  export default function CareType(props) {
    return (
      <>
        <Container>
          <Heading size="lg" marginBottom="10">
            Please indicate the type of care
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            
            {[
              {
                value: ' Baby Sitting',
                label: 'Baby Sitting',
              },
              { value: 'Nanny', label: 'Nanny' },
              { value: 'Au-Pair', label: 'Au-Pair' },
              { value: 'All', label: 'All'},
            ].map(item => {
              return (
                <Card
                  bg={props.value === item.value ? 'red' : '#fff'}
                  borderWidth={props.value === item.value ? 0 : 1}
                  borderColor={props.value === item.value ? '#fff' : 'red'}
                  textColor={props.value === item.value ? '#fff' : '#000'}
                  name={item.label}
                  onClick={() => props.onCareTypeSelect(item.value)}
                />
              );
            })}
            
          </Grid>
        </Container>
      </>
    );
  }