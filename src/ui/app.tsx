import * as React from 'react';
import { observable, configure, action, IObservableValue } from 'mobx';
import { observer } from 'mobx-react';

// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

import {
  Typography,
  Chip,
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
// import AddIcon from '@material-ui/icons/Add';
// import { CacheProvider } from '@emotion/core';

configure({
  enforceActions: 'always'
});

const registrationSimulation = new RegistrationSimulation({
  attendees: [{name: 'Feli'}],
  securities: [{name: 'Hans'}],
  welcomers: [{name: 'Hans'}],
  badgeSearcher: [{name: 'Hans'}],
  preBouncer: [{name: 'Hans'}]
});

enum TabsEnum {
  KeyChainList = 'KeyChainList',
  CardStatusList = 'CardStatusList',
  Assistent = 'Assistent'
}

interface TabsEnumProps extends React.Props<{}> {
  readonly selectedTab: TabsEnum;
  readonly my: TabsEnum;
}

// const TabPanel: React.SFC<TabsEnumProps> = observer((props: TabsEnumProps) => {
//   if (props.my !== props.selectedTab) {
//     return <></>;
//   }
//   return (
//     <Typography component="div" style={{ padding: 8 * 3 }}>
//       {props.children}
//     </Typography>
//   );
// });

interface MyAppProps {}

@observer
class MyApp extends React.Component<MyAppProps, {}> {
  public readonly createKeyDialog: IObservableValue<boolean> = observable.box(
    false
  );

  public readonly selectedTab: IObservableValue<TabsEnum> = observable.box(
    TabsEnum.KeyChainList
  );

  public constructor(props: MyAppProps) {
    super(props);
  }

  public render(): JSX.Element {
    // <MuiThemeProvider theme={this.appState.appTheme}>
    return (
      <>
        <form noValidate autoComplete="off">
          <TextField
            id="filled-name"
            label="Attendee amount"
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
            label="Prebouncer amount"
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
            label="Welcomers amount"
            value={registrationSimulation.preBouncer.length}
            onChange={(e) => {
              registrationSimulation.welcomers.scale(parseInt(e.target.value, 10) || 0);
              console.log('onchange', registrationSimulation.welcomers.length, e.target.value);
            }}
            margin="normal"
            variant="filled"
          />
        </form>

        <ListHumans humans={registrationSimulation.attendees} 
          factory={(attendee) =>  <Attendee
            key={attendee.name}
            avatar={<Avatar>?</Avatar>}
            label={attendee.name}
            variant="outlined"
            />
          }
        />

        <ListHumans humans={registrationSimulation.preBouncer} 
          factory={(preBouncer) =>  <PreBouncer
            key={preBouncer.name}
            avatar={<Avatar>?</Avatar>}
            label={preBouncer.name}
            variant="outlined"
            />
          }
        />

        <ListHumans humans={registrationSimulation.welcomers} 
          factory={(welcomers) =>  <Welcomers
            key={welcomers.name}
            avatar={<Avatar>?</Avatar>}
            label={welcomers.name}
            variant="outlined"
            />
          }
        />

        <ListHumans humans={registrationSimulation.badgeSearcher} 
          factory={(badgeSearcher) =>  <BadgeSearcher
            key={badgeSearcher.name}
            avatar={<Avatar>?</Avatar>}
            label={badgeSearcher.name}
            variant="outlined"
            />
          }
        />

        <ListHumans humans={registrationSimulation.securities} 
          factory={(securities) =>  <Securities
            key={securities.name}
            avatar={<Avatar>?</Avatar>}
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
