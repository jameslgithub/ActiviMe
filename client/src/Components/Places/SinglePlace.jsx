import { Flex, Image, Text} from '@chakra-ui/react'
import { Rating } from "@material-ui/lab";
import React from 'react'
import { IoLocation } from "react-icons/io5";


const SinglePlace = ({place}) => {
  return (
    <Flex 
    bg={"whiteAlpha.900"}
      px={4}
      py={20}
      mb={2}
      shadow="lg"
      direction={"column"}
      alignItems={"stretch"}
      width={'80%'}
      justifyContent="space-evenly"
      >
        <Flex justifyContent={"space-between"} width="full">

          <Flex
          direction={"column"}
          justifyContent={"start"}
          alignItems={"start"}
          width={'full'}
          px={2}
          >
            <Flex
            alignItems={"start"}
            width={"full"}
            justifyContent={"space-evenly"}>
              
              <Text 
              textTransform={"capitalize"}
              width={"40"}
              fontSize={"lg"}
              fontWeight={"500"}
              isTruncated>
                {place.name}
              </Text>
              <Flex alignItems={"start"} width={"full"}>
            <Rating size="small" value={place.rating} readOnly />
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
            ></Text>
            <Text
              fontSize={"sm"}
              fontWeight={"500"}
              color={"gray.500"}
              ml={"auto"}
            >
              {`(${place.userRatingCount})`}
            </Text>
          </Flex>
              <Text fontSize={"sm"} fontWeight={"500"} color={"gray.500"} >
              {place.summary}
            </Text>
            </Flex>
            
            

          </Flex>
          <Image objectFit={"cover"}
          position={'space-between'}
          width={"120px"}
          height={"120px"}
          rounded="lg"
          src = {`https://places.googleapis.com/v1/${place.photoName}/media?maxWidthPx=${place.maxWidth}&key=AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE`}
          />
          </Flex>
          
    </Flex>
    
  )
}

export default SinglePlace  


// {place?.address && (
//   <Flex  alignItems={"center"} width={"full"} px={1} my={2}>
//     <IoLocation fontSize={20} color="gray" />
//     <Text
//       isTruncated
//       fontSize={"small"}
//       fontWeight={500}
//       color={"gray.700"}
//       ml={1}
//       maxWidth={'200'}
//     >
//       {place.address}
//     </Text>
//   </Flex>
// )}

// <Image objectFit={"cover"}
//           position={'space-between'}
//           width={"120px"}
//           height={"120px"}
//           rounded="lg"
//           src = {`https://places.googleapis.com/v1/${place.photoName}/media?maxWidthPx=${place.maxWidth}&key=AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE`}
//           />