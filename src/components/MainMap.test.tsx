import { render } from '@testing-library/react';
import { getMapReference } from '../__mocks__/maplibre-ref';
import { MainMap } from './MainMap';


describe('MainMap', () => {
  it('loads the map on render', () => {
    const mockOnMouseMove = jest.fn();
    const mockUserLocationCoordinates = { lat: 0, lon: 0 };

    render(
      <MainMap
        userLocationCoordinates={mockUserLocationCoordinates}
        onMouseMove={mockOnMouseMove}
      />
    );

    const map = getMapReference();
    expect(map).not.toBeNull();
    expect(window.map).toBeDefined();
  });

  it('returns callback on mousemove', () => {
    const mockOnMouseMove = jest.fn();
    const mockUserLocationCoordinates = { lat: 0, lon: 0 };

    render(
      <MainMap
        userLocationCoordinates={mockUserLocationCoordinates}
        onMouseMove={mockOnMouseMove}
      />
    );

    const map = getMapReference();
    map?.fire("mousemove", {
      type: "mousemove",
      target: map,
      lngLat: { lat: 0, lng: 0 },
      point: { x: 0, y: 0 }
    });

    expect(map).not.toBeNull();
    expect(mockOnMouseMove).toHaveBeenCalledWith({ "lngLat": { "lat": 0, "lng": 0 }, "point": { "x": 0, "y": 0 } });
  });

  it("does not return the callback if mouse moves less or equal than 10px", () => {
    const mockOnMouseMove = jest.fn();
    const mockUserLocationCoordinates = { lat: 0, lon: 0 };

    render(
      <MainMap
        userLocationCoordinates={mockUserLocationCoordinates}
        onMouseMove={mockOnMouseMove}
      />
    );

    const map = getMapReference();
    map?.fire("mousemove", {
      type: "mousemove",
      target: map,
      lngLat: { lat: 0, lng: 0 },
      point: { x: 0, y: 0 }
    });
    map?.fire("mousemove", {
      type: "mousemove",
      target: map,
      lngLat: { lat: 0, lng: 0 },
      point: { x: 10, y: 0 }
    });

    expect(mockOnMouseMove).toHaveBeenCalledWith({ "lngLat": { "lat": 0, "lng": 0 }, "point": { "x": 0, "y": 0 } });
    expect(mockOnMouseMove).not.toHaveBeenCalledWith({ "lngLat": { "lat": 0, "lng": 0 }, "point": { "x": 10, "y": 0 } });
  });

  it("does return the callback if mouse moves more than 10px", () => {
    const mockOnMouseMove = jest.fn();
    const mockUserLocationCoordinates = { lat: 0, lon: 0 };

    render(
      <MainMap
        userLocationCoordinates={mockUserLocationCoordinates}
        onMouseMove={mockOnMouseMove}
      />
    );

    const map = getMapReference();
    map?.fire("mousemove", {
      type: "mousemove",
      target: map,
      lngLat: { lat: 0, lng: 0 },
      point: { x: 0, y: 0 }
    });
    map?.fire("mousemove", {
      type: "mousemove",
      target: map,
      lngLat: { lat: 0, lng: 0 },
      point: { x: 11, y: 0 }
    });

    expect(mockOnMouseMove).toHaveBeenCalledWith({ "lngLat": { "lat": 0, "lng": 0 }, "point": { "x": 0, "y": 0 } });
    expect(mockOnMouseMove).toHaveBeenCalledWith({ "lngLat": { "lat": 0, "lng": 0 }, "point": { "x": 11, "y": 0 } });
  });
});
