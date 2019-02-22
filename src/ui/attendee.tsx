import Chip, { ChipProps } from '@material-ui/core/Chip';
import React = require('react');
import { observer } from 'mobx-react';

export const Attendee = observer((props: ChipProps): JSX.Element => {
  return (
    <Chip {...props} label={`attendee(${props.label})`} />
  );
});
