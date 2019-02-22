import Chip, { ChipProps } from '@material-ui/core/Chip';
import React = require('react');

export function Securities(props: ChipProps): JSX.Element {
  return (
    <Chip {...props} label={`securities(${props.label})`} />
  );
}
