import { Human } from "./human";
import { computed, action, observable, reaction, IObservableValue } from "mobx";

export class LivingHuman implements Human {
  // tslint:disable-next-line:typedef
  private _heartbeat: IObservableValue<number> = observable.box(0);

  public get name(): string {
    return this.human.name;
  }

  @computed public get heartbeat(): number {
    return this._heartbeat.get();
  }

  private human: Human;
  constructor(human: Human) {
    this.human = human;
    setInterval(action(() => {
      this._heartbeat.set(this.heartbeat + 1);
    })
    , 1000);
  }
}
