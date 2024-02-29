import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Map from './Components/Map/Map'
import { useState } from 'react'

const App = () => {
  const [coordinates, setCoordinates] = useState({ lat : 0, lng: 0 });
  return (
    <div>
      <Navbar/>
      <Map setCoordinates={setCoordinates} coordinates={coordinates}/>
    </div>
  )
}

export default App
