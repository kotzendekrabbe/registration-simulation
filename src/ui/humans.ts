import { Human } from './human';
import { action, computed, observable, IObservableArray } from 'mobx';

export interface HumansProps {
  readonly humans?: Human[];
}

export class Humans {
  private readonly humans: IObservableArray<Human>;

  constructor(props: HumansProps) {
    this.humans = observable.array(props.humans || []);
  }

  @computed public get length(): number {
    console.log('length', this.humans.length);
    return this.humans.length;
  }

  @action public map<T>(cb: (human: Human, idx?: number) => T): T[] {
    return this.humans.map(cb);
  }

  @action public scale(scale: number): void {
    console.log('scale', scale);

    if (scale === 0) {
      this.humans.splice(0, this.humans.length);
      return;
    }
    if (this.humans.length > scale) {
      this.humans.splice(scale, this.humans.length);
    }
    if (this.humans.length < scale) {
      for (let i = this.humans.length; i < scale; ++i) {
        this.humans.push({
          name: `a${i}`
        });
      }
    }
    console.log('this humand length', this.humans.length);
  }
}
