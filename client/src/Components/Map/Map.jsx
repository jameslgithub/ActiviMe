import React from 'react';
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

const Map = ({ coordinates, setCoordinates }) => {
  return (
  <Box width = {'100vw'} height = {'100vh'} right={'100px'}>
    <GoogleMapReact 
        bootstrapURLKeys={{ key: "AIzaSyDT96oGVCan6TEKn94L9Zs2CyANrDCGWhE" }} 
        defaultCenter={coordinates} 
        center={coordinates}
        defaultZoom={10}
        margin = {[50,50,50,50]}
        options= {""}
        onChange={() => {}}
        onChildClick={() => {}}
    >
    </GoogleMapReact>
  </Box> 
  )
}

export default Map