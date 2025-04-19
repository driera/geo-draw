import { useEffect, useState } from "react";

const INITIAL_COORDINATES = { lat: 39.4671399, lon: -0.3557275 };

export const useGeoLocation = () => {
  const [coordinates, setCoordinates] = useState<{
    lat: number;
    lon: number;
  }>(INITIAL_COORDINATES);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  return coordinates;
};
