// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { TextEncoder } from "node:util";

jest.mock('maplibre-gl', () => {
  const { MockMap } = jest.requireActual("./__mocks__/maplibre-gl");
  const Map = jest.fn().mockImplementation(options => new MockMap(options));

  return {
    __esModule: true,
    default: {
      Map
    },
    Map
  };
});
  
declare global {
  interface Window {
    language: string;
  }
}

if (!globalThis.TextEncoder) {
  globalThis.TextEncoder = TextEncoder;
}
