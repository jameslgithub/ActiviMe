import { Flex } from '@chakra-ui/react'
import React from 'react'
import SinglePlace from './SinglePlace';
const arr = []

const Places = ( {places, isLoading}) => {
  if (isLoading) return (
    <Flex
    direction={'column'}
    width={'37vw'}
    height={'50vh'}
    left={0}
    top={0}
    zIndex={1}>

    </Flex>
  );
  return (
    <Flex
    position={'absolute'}
    direction={'column'}
    width={'37vw'}
    height={'87vh'}
    left={0}
    top={130}
    px={2}
    zIndex={1}> 

      {/* <Flex flex={1} overflowY={"scroll"} mt={'auto'} direction={"column"} width={'36vw'} zIndex={0}>
        { Array.isArray(places) &&
        
          places.map((place, i) => 
          <SinglePlace place={place} key={i}/>)
          }
      </Flex> */}
    </Flex>
  );
};

export default Places