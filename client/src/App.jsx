import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Map from './Components/Map/Map'
import { useState, useEffect } from 'react'
import Places from './Components/Places/Places'
import { Flex } from '@chakra-ui/react'

const places = [
  {name: "p1"},
  {name: "p1"},
  {name: "p1"}
]
const App = () => {
  const [places, setPlaces] = useState([])
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // get the users current location on intial login

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        // console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, [])
  

  return (
    <Flex 
    justifyContent={'center'}
    alignItems={'center'}
    position={'relative'}
    width={"99vw"}
    height={"100vh"}
    maxWidth={"100vw"}
    maxHeight={"100vh"}
    padding={0}>
      <Navbar/>
      <Places places = { places } isLoading={isLoading}/>
      <Map setCoordinates={setCoordinates} coordinates={coordinates} />;
    </Flex>
  )
}

export default App
