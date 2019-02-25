import { Humans } from './humans';
import { Ticker } from './ticker';

export interface QAttendeeFactoryProps {
  readonly humans: Humans;
  readonly ticker: Ticker;
  readonly frequencyMSec: number;
  readonly amountHumans: number;
  readonly peakMSec: number;
  readonly totalMSec: number;
}

export class QAttendeeFactory {
  public readonly humans: Humans;
  public readonly ticker: Ticker;
  public readonly frequencyMSec: number;
  public readonly amountHumans: number;
  public readonly peakMSec: number;
  public readonly totalMSec: number;

  // tslint:disable-next-line:typedef
  public currentMSecs = 0;
  public frequencyInterval: unknown;
  public readonly onDones: (() => unknown)[] = [];

  constructor(props: QAttendeeFactoryProps) {
    this.humans = props.humans;
    this.ticker = props.ticker;
    this.frequencyMSec = props.frequencyMSec;
    this.amountHumans = props.amountHumans;
    this.peakMSec = props.peakMSec;
    this.totalMSec = props.totalMSec;
  }

  public start(): void {
    this.frequencyInterval = this.ticker.setInterval(() => {
      this.currentMSecs += this.frequencyMSec;
      if (this.currentMSecs >= this.totalMSec) {
        this.ticker.clearInterval(this.frequencyInterval);
        this.frequencyInterval = undefined;
        this.done();
      }
    }, this.frequencyMSec);
  }

  public done(): void {
    this.onDones.forEach(cb => cb());
  }
}
