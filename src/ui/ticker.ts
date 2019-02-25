export interface Ticker {
  setInterval(cb: () => unknown, ms: number): unknown;
  setTimeout(cb: () => unknown, ms: number): unknown;

  clearTimeout(x: unknown): void;
  clearInterval(x: unknown): void;
}

export class RegistrationTicker implements Ticker {
  public setInterval(cb: () => unknown, ms: number): unknown {
    return setInterval(cb, ms / 100);
  }
  public setTimeout(cb: () => unknown, ms: number): unknown {
    cb();
    return 4;
  }
  public clearTimeout(x: unknown): void { /**/ }
  public clearInterval(x: unknown): void {
    clearInterval(x as any);
  }
}
