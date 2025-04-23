import maplibregl, { LngLat, Map, MapMouseEvent, Point } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { FunctionComponent, useEffect, useRef } from 'react';
import { Coordinates } from '../useGeoLocation';
import styles from './MainMap.module.css';

type MainMapProps = { userLocationCoordinates: Coordinates, onMouseMove: ({ lngLat, point }: { lngLat: LngLat, point: Point }) => void };

export const MainMap: FunctionComponent<MainMapProps> = ({ userLocationCoordinates, onMouseMove }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<Map | null>(null);
  const lastPointerPosition = useRef<Point>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    const apiKey = import.meta.env.VITE_MAP_TILER_API_KEY;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${apiKey}`,
      center: [0, 0],
      zoom: 1
    });

    window.map = map.current;
  }, []);

  useEffect(() => {
    if (userLocationCoordinates && map.current) {
      map.current.setZoom(10);
      map.current.setCenter(userLocationCoordinates);
    }
  }, [userLocationCoordinates]);

  useEffect(() => {
    if (map.current) {
      map.current.on("mousemove", (e: MapMouseEvent) => {
        if (hasMovedEnough(e.point, lastPointerPosition.current)) {
          lastPointerPosition.current = e.point;
          onMouseMove({ lngLat: e.lngLat, point: e.point });
        }
      });
    }
  }, [onMouseMove])

  return (
    <div ref={mapContainer} className={styles.mapContainer} />
  )
}


const hasMovedEnough = (point: Point, lastPoint: Point | null) => {
  if (!lastPoint) return true;
  const distance = Math.sqrt(Math.pow(point.x - lastPoint.x, 2) + Math.pow(point.y - lastPoint.y, 2));
  return distance > 10;
}
