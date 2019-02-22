import { Human, Roles } from './human';
import { Humans } from './humans';
import { observable, action } from 'mobx';

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
    this.securities = new Humans({ humans: props.securities, roles: [Roles.Security] });
    this.badgeSearcher = new Humans({ humans: props.badgeSearcher, roles: [Roles.BadgeSearcher] });
    this.welcomers = new Humans({ humans: props.badgeSearcher, roles: [Roles.BadgeSearcher] });
    this.preBouncer = new Humans({ humans: props.preBouncer, roles: [Roles.PreBouncer] });
    this.attendees = new Humans({ humans: props.attendees, roles: [Roles.Attendee] });
  }
}
