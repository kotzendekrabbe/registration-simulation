import Chip, { ChipProps } from '@material-ui/core/Chip';
import React = require('react');

export function PreBouncer(props: ChipProps): JSX.Element {
  return (
    <Chip {...props} label={`prebouncer(${props.label})`} />
  );
}
