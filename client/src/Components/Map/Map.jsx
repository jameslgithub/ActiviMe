import React from 'react';
import { Box } from "@chakra-ui/react";
import GoogleMapReact from "google-map-react";

const Map = ({ coordinates, setCoordinates }) => {
  return (
  <Box width = {'full'} height = {'full'}>
    <GoogleMapReact 
        bootstrapURLKeys={{ key: "AIzaSyCQsrkKVU83XeXLG72hTzcT-OgFFocqp_s" }} 
        defaultCenter={coordinates} 
        center={coordinates}
        defaultZoom={10}
        margin = {[50,50,50,50]}
        options= {""}
        onChange={() => {}}
        onChildClick={() => {}}
    >
    </GoogleMapReact>;
  </Box> 
  );
} ;

export default Map