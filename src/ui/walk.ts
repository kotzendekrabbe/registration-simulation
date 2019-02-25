import { observable } from "mobx";

export interface WalkerProps {
  readonly distanceM: number;
  readonly meterPerSec: number; // 7.45, 6.98, 8.19 per 9m
}

export class Walker<T> {
  @observable public readonly walked: T[] = [];
  public readonly distanceM: number;
  public readonly meterPerSec: number;

  constructor(props: WalkerProps) {
    this.distanceM = props.distanceM;
    this.meterPerSec = props.meterPerSec;
  }

  public start(x: T): void {
    setTimeout(() => {
      this.walked.push(x);
    }, (this.distanceM / this.meterPerSec * 1000));
  }
}
