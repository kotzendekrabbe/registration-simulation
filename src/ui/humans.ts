import { Human, Roles, createRole } from './human';
import { action, computed, observable, IObservableArray } from 'mobx';
import { HeartBeat } from './heart-beat';

export interface HumansProps {
  readonly humans?: Human[];
  readonly roles: Roles[];
}

export class Humans {
  private readonly humans: IObservableArray<Human>;
  private readonly roles: Roles[];

  constructor(props: HumansProps) {
    this.humans = observable.array(props.humans || []);
    this.roles = [...props.roles];
    // this.map = computed(this.map.bind(this));
  }

  @computed public get length(): number {
    // console.log('Humans.Length:', this.humans.length);
    return this.humans.length;
  }

  public map<T>(cb: (human: Human, idx?: number) => T): T[] {
    return this.humans.map(cb);
  }

  @action public scale(scale: number): void {
    // console.log('scale', scale);

    if (scale === 0) {
      this.humans.splice(0, this.humans.length).forEach(i => i.kill());
      return;
    }
    if (this.humans.length > scale) {
      this.humans.splice(scale, this.humans.length).forEach(i => i.kill());
    }
    if (this.humans.length < scale) {
      for (let i = this.humans.length; i < scale; ++i) {
        this.humans.push(createRole(`John D${i} ${this.roles[0]}`, this.roles[0]));
      }
    }
  }
}
