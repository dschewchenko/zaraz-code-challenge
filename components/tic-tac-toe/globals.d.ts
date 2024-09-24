declare global {
  interface Window {
    webcm: {
      track: (eventType: string, payload: unknown) => unknown;
    };
  }
}
