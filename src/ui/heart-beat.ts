import { computed, action, observable, IObservableValue } from 'mobx';

export class HeartBeat {
  private _pulse: IObservableValue<number> = observable.box(0);
  private interval: any;

  @computed
  public get tick(): number {
    return this._pulse.get();
  }

  @action
  public pulse(): void {
    this._pulse.set(this.tick + 1);
  }

  constructor() {
    this.interval = setInterval(() => this.pulse(), 1000);
  }

  public kill(): void {
    clearInterval(this.interval);
  }

}
