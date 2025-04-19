import {Map} from 'maplibre-gl';

declare global {
  interface Window {
    map?: Map;
  }
}
