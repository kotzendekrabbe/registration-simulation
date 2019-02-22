import React = require('react');
import Chip, { ChipProps } from '@material-ui/core/Chip';
import styled from '@emotion/styled';

export const BadgeSearcherStyles = styled(Chip as React.SFC<ChipProps>)`
  background: pink;
`;

export function BadgeSearcher(props: ChipProps): JSX.Element {
  return (
    <BadgeSearcherStyles {...props}
          label={`badgesearcher(${props.label})`}
    />
  );
}
