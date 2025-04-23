import { render } from '@testing-library/react';
import { MainMap } from './MainMap';
import maplibregl from 'maplibre-gl';


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

    expect(maplibregl.Map).toHaveBeenCalledTimes(1);
    expect(window.map).toBeDefined();
  });
});
