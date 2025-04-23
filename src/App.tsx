import { LngLat, Point } from 'maplibre-gl';
import { MainMap } from './components/MainMap'
import { useGeoLocation } from './useGeoLocation';
import { useState } from 'react';
import styles from './App.module.css';

type Pointer = {lngLat: LngLat, point: Point};

const App = () => {
  const coordinates = useGeoLocation();
  const [pointer, setPointer] = useState<Pointer>()

  const exposePointer = (mousePointer: Pointer) => {
    setPointer(mousePointer)
    console.log("Pointer:", mousePointer);
    
  };
  
  return (
    <div className = {styles.container}>
      {pointer && (
        <div className={styles.coordinates}>{pointer.lngLat.lng} {pointer.lngLat.lat}</div>
      )}
      <MainMap userLocationCoordinates={coordinates} onMouseMove={exposePointer}/>
    </div>
  )
}




export default App
