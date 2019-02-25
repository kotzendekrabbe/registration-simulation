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
import { Attendee, Welcomer, PreBouncer, Security, BadgeSearcher  } from './human';
import { ListHumans } from './list-humans';
import { HeartBeat } from './heart-beat';

configure({
  enforceActions: 'always'
});

const registrationSimulation = new RegistrationSimulation({
  attendees: [Attendee.create('Feli')],
  securities: [Security.create('Sicher Ist')],
  welcomers: [],
  badgeSearcher: [],
  preBouncer: []
});

interface MyAppProps {}

@observer
class MyApp extends React.Component<MyAppProps, {}> {

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
            onChange={e => {
              registrationSimulation.attendees.scale(parseInt(e.target.value, 10) || 0);
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

        <ListHumans humans={registrationSimulation.attendees} />

        <ListHumans humans={registrationSimulation.preBouncer} />

        <ListHumans humans={registrationSimulation.welcomers} />

        <ListHumans humans={registrationSimulation.badgeSearcher} />

        <ListHumans humans={registrationSimulation.securities} />
      </>
    );
  }
}

export const App = MyApp;
