import maplibregl, { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { FunctionComponent, useEffect, useRef } from 'react';
import './MainMap.css';

export const MainMap: FunctionComponent = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  
  useEffect(() => {
    if (map.current || !mapContainer.current) return; 
    
    const apiKey = import.meta.env.VITE_MAP_TILER_API_KEY;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${apiKey}`,
      center: [0, 0],
      zoom: 1
    });
  },[]);

  return (

    <div ref={mapContainer} className="map-container" />
  )
}
