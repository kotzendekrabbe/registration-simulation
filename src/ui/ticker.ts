export interface Ticker {
  setInterval(cb: () => unknown, ms: number): unknown;
  setTimeout(cb: () => unknown, ms: number): unknown;

  clearTimeout(x: unknown): void;
  clearInterval(x: unknown): void;
}
