import React = require('react');
import { Human } from './human';
import { Humans } from './humans';

export interface ListHumansProps {
  readonly humans: Humans;
  readonly factory: (human: Human) => JSX.Element;
}

export function ListHumans(props: ListHumansProps): JSX.Element {
  return (
      <>
        { props.humans.map(props.factory) }
      </>
    );
}
