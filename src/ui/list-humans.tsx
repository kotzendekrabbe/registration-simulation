import React = require('react');
import { Human } from './human';
import { Humans } from './humans';
import { observer } from 'mobx-react';

export interface ListHumansProps {
  readonly humans: Humans;
  readonly factory: (human: Human) => JSX.Element;
}

export const ListHumans = observer((props: ListHumansProps): JSX.Element => {
  return (
      <>
        { props.humans.map(props.factory) }
      </>
    );
});
