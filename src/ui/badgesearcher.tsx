import Chip, { ChipProps } from '@material-ui/core/Chip';
import React = require('react');

export function BadgeSearcher(props: ChipProps): JSX.Element {
  return (
    <Chip {...props} label={`badgesearcher(${props.label})`} />
  );
}
