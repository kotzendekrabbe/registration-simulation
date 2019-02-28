import Chip, { ChipProps } from '@material-ui/core/Chip';
import React = require('react');
import { observer } from 'mobx-react';
import { Human, Roles } from './human';
import { HeartbeatAvatar } from './heartbeat-avatar';
import styled from '@emotion/styled';

export interface HumanComponentProps extends ChipProps {
  readonly human: Human;
  readonly idx: number;
}

function roleColorMap(role: Roles[]): string {
  switch (role[0]) {
    case Roles.Attendee: return 'red';
    case Roles.BadgeSearcher: return 'blue';
    case Roles.PreBouncer: return 'orange';
    case Roles.Security: return 'yellow';
    case Roles.Welcomer: return 'black';
    default: return 'pink';
  }
}

export const SearcherStyle = styled(Chip as React.SFC<HumanComponentProps>)`
  background: ${props => roleColorMap(props.human.roles)};
`;

export const HumanComponent = observer((props: HumanComponentProps): JSX.Element => {
  return (
    <g fill="grey"
     transform={`translate(
       ${6 + (7.5 * props.idx) % 600}
       ${props.human.heartbeat.tick * 3 + 6 + 10 * ((7.5 * props.idx) / 600)})`}>
    <circle
      key={props.human.name}
      r="3"
      stroke="black"
      stroke-width="1"
      fill={roleColorMap(props.human.roles)} />
    </g>
    // <SearcherStyle
    //   key={props.human.name}
    //   avatar={<HeartbeatAvatar heartbeat={props.human.heartbeat} />}
    //   {...props} label={`${props.human.roles[0]}(${props.human.name})`} />
  );
});
