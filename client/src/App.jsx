import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Map from './Components/Map/Map'
import { useState } from 'react'

const App = () => {
  const [coordinates, setCoordinates] = useState({  });

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(({coords : {latitude, longitude}}) => {
      console.log({latitude, longitude})
      setCoordinates({lat: latitude, lng: longitude});
    });
  }, []);
  return (
    <div>
      <Navbar/>
      <Map setCoordinates={setCoordinates} coordinates={coordinates}/>
    </div>
  )
}

export default App
