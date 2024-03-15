import { Flex, Image, Text} from '@chakra-ui/react'
import React from 'react'
import { IoLocation } from "react-icons/io5";


const SinglePlace = ({place}) => {
  return (
    <Flex 
    bg={"whiteAlpha.900"}
      px={4}
      py={2}
      mb={2}
      shadow="lg"
      direction={"column"}
      alignItems={"left"}
      width={'80%'}
      justifyContent="space-between"
      >

        <Flex 
        justifyContent={"space-between"} 
        width="full">

          <Flex
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"start"}
          width="full"
          px={2}>
            <Flex
            alignItems={"center"}
            width={"full"}
            justifyContent={"space-between"}>
              
              <Text 
              textTransform={"capitalize"}
              width={"20"}
              fontSize={"lg"}
              fontWeight={"500"}
              maxWidth={'200'}
              isTruncated>
                {place.name}
              </Text>

        {place?.address && (
        <Flex justifyContent={"space-between"} alignItems={"center"} width={"full"} px={1} my={2}>
          <IoLocation fontSize={20} color="gray" />
          <Text
            isTruncated
            fontSize={"small"}
            fontWeight={500}
            color={"gray.700"}
            ml={1}
            maxWidth={'200'}
          >
            {place.address}
          </Text>
        </Flex>
      )}

          <Image objectFit={"cover"}
          position={'space-between'}
          width={"120px"}
          height={"120px"}
          rounded="lg"
          src = {`https://places.googleapis.com/v1/${place.photoName}/media?maxWidthPx=${place.maxWidth}&key=AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE`}
          />
        </Flex>
          </Flex>
          </Flex>
    </Flex>
    
  )
}

export default SinglePlace  