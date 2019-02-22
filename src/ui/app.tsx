import * as React from 'react';
import { observable, configure, action, IObservableValue, observe } from 'mobx';
import { observer } from 'mobx-react';

// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import {
  Avatar,
  TextField
} from '@material-ui/core';

import { RegistrationSimulation } from './registration-simulation';
import { Attendee } from './attendee';
import { ListHumans } from './list-humans';
import { PreBouncer } from './prebouncer';
import { Welcomers } from './welcomers';
import { BadgeSearcher } from './badgesearcher';
import { Securities } from './securities';
import { LivingHuman } from './livingHuman';

configure({
  enforceActions: 'always'
});

const registrationSimulation = new RegistrationSimulation({
  attendees: [new LivingHuman({name: 'Feli'})],
  securities: [new LivingHuman({name: 'Hans'})],
  welcomers: [new LivingHuman({name: 'Hans'})],
  badgeSearcher: [new LivingHuman({name: 'Hans'})],
  preBouncer: [new LivingHuman({name: 'Hans'})]
});

interface MyAppProps {}

@observer
class MyApp extends React.Component<MyAppProps, {}> {
  public readonly createKeyDialog: IObservableValue<boolean> = observable.box(
    false
  );

  public constructor(props: MyAppProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <>
        <form noValidate autoComplete="off">
          <TextField
            id="filled-name"
            label="Attendee"
            value={registrationSimulation.attendees.length}
            onChange={(e) => {
              registrationSimulation.attendees.scale(parseInt(e.target.value, 10) || 0);
              console.log('onchange', registrationSimulation.attendees.length, e.target.value);
            }}
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-name"
            label="Prebouncer"
            value={registrationSimulation.preBouncer.length}
            onChange={(e) => {
              registrationSimulation.preBouncer.scale(parseInt(e.target.value, 10) || 0);
              console.log('onchange', registrationSimulation.preBouncer.length, e.target.value);
            }}
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-name"
            label="Welcomers"
            value={registrationSimulation.welcomers.length}
            onChange={(e) => {
              registrationSimulation.welcomers.scale(parseInt(e.target.value, 10) || 0);
              console.log('onchange', registrationSimulation.welcomers.length, e.target.value);
            }}
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-name"
            label="BadgeSearcher"
            value={registrationSimulation.badgeSearcher.length}
            onChange={(e) => {
              registrationSimulation.badgeSearcher.scale(parseInt(e.target.value, 10) || 0);
              console.log('onchange', registrationSimulation.badgeSearcher.length, e.target.value);
            }}
            margin="normal"
            variant="filled"
          />

        <TextField
            id="filled-name"
            label="Securities"
            value={registrationSimulation.securities.length}
            onChange={(e) => {
              registrationSimulation.securities.scale(parseInt(e.target.value, 10) || 0);
              console.log('onchange', registrationSimulation.securities.length, e.target.value);
            }}
            margin="normal"
            variant="filled"
          />
        </form>

        <ListHumans humans={registrationSimulation.attendees} 
          factory={(attendee) => <Attendee
            key={attendee.name}
            avatar={<Avatar>{attendee.heartbeat}</Avatar>}
            label={attendee.name}
            variant="outlined"
            />
          }
        />

        <ListHumans humans={registrationSimulation.preBouncer} 
          factory={(preBouncer) =>  <PreBouncer
            key={preBouncer.name}
            avatar={<Avatar>{preBouncer.heartbeat}</Avatar>}
            label={preBouncer.name}
            variant="outlined"
            />
          }
        />

        <ListHumans humans={registrationSimulation.welcomers} 
          factory={(welcomers) =>  <Welcomers
            key={welcomers.name}
            avatar={<Avatar>{welcomers.heartbeat}</Avatar>}
            label={welcomers.name}
            variant="outlined"
            />
          }
        />

        <ListHumans humans={registrationSimulation.badgeSearcher} 
          factory={(badgeSearcher) =>  <BadgeSearcher
            key={badgeSearcher.name}
            avatar={<Avatar>{badgeSearcher.heartbeat}</Avatar>}
            label={badgeSearcher.name}
            variant="outlined"
            />
          }
        />

        <ListHumans humans={registrationSimulation.securities} 
          factory={(securities) =>  <Securities
            key={securities.name}
            avatar={<Avatar>{securities.heartbeat}</Avatar>}
            label={securities.name}
            variant="outlined"
            />
          }
        />
      </>
    );
  }
}

export const App = MyApp;
