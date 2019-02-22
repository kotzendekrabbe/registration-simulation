import { Human } from './human';
import { Humans } from './humans';

export interface RegistrationSimulationInit {
  readonly securities?: Human[];
  readonly badgeSearcher?: Human[];
  readonly welcomers?: Human[];
  readonly preBouncer?: Human[];
  readonly attendees?: Human[];
}

export class RegistrationSimulation {
  public readonly securities: Humans;
  public readonly badgeSearcher: Humans;
  public readonly welcomers: Humans;
  public readonly preBouncer: Humans;
  public readonly attendees: Humans;

  constructor(props: RegistrationSimulationInit) {
    this.securities = new Humans({ humans: props.securities });
    this.badgeSearcher = new Humans({ humans: props.badgeSearcher });
    this.welcomers = new Humans({ humans: props.badgeSearcher });
    this.preBouncer = new Humans({ humans: props.preBouncer });
    this.attendees = new Humans({ humans: props.attendees });
  }
}
