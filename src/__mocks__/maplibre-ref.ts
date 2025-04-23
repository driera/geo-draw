import { MockMap } from "./maplibre-gl";

let maplibreRef: MockMap | null = null;

export const setMapReference = (reference: MockMap) => {
  maplibreRef = reference;
}

export const getMapReference = () => {
  return maplibreRef;
}

export const clearMapReference = () => {
  maplibreRef = null;
}
