import Chip, { ChipProps } from '@material-ui/core/Chip';
import React = require('react');

export function Attendee(props: ChipProps): JSX.Element {
  return (
    <Chip {...props} label={`attendee(${props.label})`} />
  );
}
