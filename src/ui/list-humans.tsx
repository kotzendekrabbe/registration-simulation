import React = require('react');
import { Human } from './human';
import { Humans } from './humans';
import { observer } from 'mobx-react';
import { HumanComponent } from './human-component';

export interface ListHumansProps {
  readonly humans: Humans;
}

export const ListHumans = observer((props: ListHumansProps): JSX.Element => {
  return (
      <>
        { props.humans.map((human, idx) => <HumanComponent key={idx} human={human} />) }
      </>
    );
});
