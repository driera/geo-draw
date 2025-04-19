import './App.css'
import { MainMap } from './components/MainMap'
import { useGeoLocation } from './useGeoLocation';

const App = () => {
  const coordinates = useGeoLocation();  
  
  return (
    <>
      <h1>Geodraw</h1>
      <MainMap coordinates={coordinates} />
    </>
  )
}




export default App
