import Chip, { ChipProps } from '@material-ui/core/Chip';
import React = require('react');
import { observer } from 'mobx-react';
import { Human } from './human';
import { HeartbeatAvatar } from './heartbeat-avatar';

export interface HumanComponentProps extends ChipProps {
  readonly human: Human;
}

export const HumanComponent = observer((props: HumanComponentProps): JSX.Element => {
  return (
    <Chip
      key={props.human.name}
      avatar={<HeartbeatAvatar heartbeat={props.human.heartbeat} />}
      {...props} label={`${props.human.roles[0]}(${props.human.name})`} />
  );
});
