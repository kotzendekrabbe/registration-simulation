import { observer } from 'mobx-react';
import { HeartBeat } from './heart-beat';
import { Avatar } from '@material-ui/core';
import React = require('react');

export interface HeartbeatAvatarProps {
    readonly heartbeat: HeartBeat;
}

export const HeartbeatAvatar = observer(
    (props: HeartbeatAvatarProps): JSX.Element =>
        <Avatar>{props.heartbeat.tick}</Avatar>
);
