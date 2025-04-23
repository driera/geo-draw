import { Listener, MapOptions, Subscription } from "maplibre-gl";

class Evented {
  private handlers: Record<string, Listener[]> = {};

  on(event: string, handler: Listener): Subscription {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event].push(handler);
    return {
      unsubscribe: () => this.off(event, handler)
    };
  }

  off(event: string, handler: Listener): void {
    if (!this.handlers[event]) return;
    const idx = this.handlers[event].indexOf(handler);
    if (idx >= 0) {
      this.handlers[event].splice(idx, 1);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fire(event: string, data?: any): void {
    if (!this.handlers[event]) return;
    const eventObj = { type: event, ...data };
    this.handlers[event].forEach(handler => handler(eventObj));
  }
}

export class MockMap extends Evented {
  options: MapOptions;
  zoom?: number;
  center?: [number, number];

  constructor(options: MapOptions) {
    super();
    this.options = options;
  }

  on(event: string, handler: Listener): Subscription {
    return super.on(event, handler);
  }

  setZoom(zoom: number): MockMap {
    this.zoom = zoom;
    return this;
  }

  setCenter(center: [number, number]): MockMap {
    this.center = center;
    return this;
  }
}
