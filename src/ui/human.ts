import { HeartBeat } from './heart-beat';
import { Badge } from '@material-ui/core';
export enum Roles {
  Attendee = 'Attendee',
  BadgeSearcher = 'BadgeSearcher',
  PreBouncer = 'PreBouncer',
  Security = 'Security',
  Welcomer = 'Welcomer'
}

export interface Human {
  readonly name: string;
  readonly heartbeat: HeartBeat;
  readonly roles: Roles[];
  kill(): void;
}

export class HumanBase implements Human {
  public readonly name: string;
  public readonly roles: Roles[];
  public readonly heartbeat: HeartBeat;
  constructor(name: string, roles: Roles[]) {
    this.name = name;
    this.roles = [...roles];
    this.heartbeat = new HeartBeat();
  }
  public kill(): void {
    this.heartbeat.kill();
  }
}

export namespace Attendee {
  export class Role extends HumanBase {
    constructor(name: string) {
      super(name, [Roles.Attendee]);
    }
  }
  export function create(name: string): Role {
    return new Role(name);
  }
}

export namespace BadgeSearcher {
  export class Role extends HumanBase {
    constructor(name: string) {
      super(name, [Roles.BadgeSearcher]);
    }
  }
  export function create(name: string): Role {
    return new Role(name);
  }
}

export namespace PreBouncer {
  export class Role extends HumanBase {
    constructor(name: string) {
      super(name, [Roles.PreBouncer]);
    }
  }
  export function create(name: string): Role {
    return new Role(name);
  }
}
export namespace Security {
  export class Role extends HumanBase {
    constructor(name: string) {
      super(name, [Roles.Security]);
    }
  }
  export function create(name: string): Role {
    return new Role(name);
  }
}

export namespace Welcomer {
  export class Role extends HumanBase {
    constructor(name: string) {
      super(name, [Roles.Welcomer]);
    }
  }
  export function create(name: string): Role {
    return new Role(name);
  }
}

export function createRole(name: string, role: Roles): HumanBase {
  switch (role) {
    case Roles.Attendee:
      return Attendee.create(name);
    case Roles.Welcomer:
      return Welcomer.create(name);
    case Roles.Security:
      return Security.create(name);
    case Roles.PreBouncer:
      return PreBouncer.create(name);
    case Roles.BadgeSearcher:
      return BadgeSearcher.create(name);
  }
  throw new Error(`Unkown Role:${role}`);
}
