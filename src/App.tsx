import { LngLat, Point } from 'maplibre-gl';
import './App.css'
import { MainMap } from './components/MainMap'
import { useGeoLocation } from './useGeoLocation';
import { useState } from 'react';

type Pointer = {lngLat: LngLat, point: Point};

const App = () => {
  const coordinates = useGeoLocation();
  const [pointer, setPointer] = useState<Pointer>()

  const exposePointer = (mousePointer: Pointer) => {
    setPointer(mousePointer)
    console.log("Pointer:", mousePointer);
    
  };
  
  return (
    <div style={{position: "relative", width: "100vw", height: "100vh"}}>
      <h1>Geodraw</h1>
      {pointer && (
        <div style={{position: "absolute", bottom: 40, left: 0, zIndex: 1}}>{pointer.lngLat.lng} {pointer.lngLat.lat}</div>
      )}
      <MainMap userLocationCoordinates={coordinates} onMouseMove={exposePointer}/>
    </div>
  )
}




export default App
