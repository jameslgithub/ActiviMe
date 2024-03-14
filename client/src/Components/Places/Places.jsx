import { Flex } from '@chakra-ui/react'
import React from 'react'
import SinglePlace from './SinglePlace';
const arr = []

const Places = ( {places, isLoading}) => {
  if (isLoading) return ( //before data
    <Flex
    position={'absolute'}
    direction={'column'}
    width={'37vw'}
    height={'87vh'}
    left={0}
    top={130}
   
    px={2}
    zIndex={1}>

    </Flex>
  );
  else{
  return (  //after data
    <Flex
    position={'absolute'}
    direction={'column'}
    width={'37vw'}
    height={'87vh'}
    
    left={0}
    top={130}
    px={2}
    zIndex={1}> 

      { <Flex justifyItems={'stretch'} position={'relative'}flex={1} bg={'white'}overflowY={"scroll"} mt={'auto'} direction={"column"} width={'36vw'} zIndex={0}>
        {      
          places.map((place,i) => <SinglePlace place={place} key={i}/>)
          
          }
      </Flex> }
    </Flex>
  );
  }
};

export default Places