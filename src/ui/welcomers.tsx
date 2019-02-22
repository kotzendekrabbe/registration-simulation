import Chip, { ChipProps } from '@material-ui/core/Chip';
import React = require('react');

export function Welcomers(props: ChipProps): JSX.Element {
  return (
    <Chip {...props} label={`welcomers(${props.label})`} />
  );
}
