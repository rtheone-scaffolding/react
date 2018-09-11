import 'normalize.css';

import React from 'react';
import { render } from 'react-dom';
import { createRenderer } from 'fela';
import { createComponent, Provider } from 'react-fela';
const renderer = createRenderer();

import sum from './sum';

const Button = createComponent(
  (props: any) => css`
    background: ${props.color};
    color: white;
  `,
  'button'
);

const AlternateButton = createComponent(
  (props: any) => css`
    background: orangered;
  `,
  Button
);

const App = () => (
  <div>
    <h1>Here's a text element.</h1>
    <Button color="steelblue">1 + 2 =</Button>
    <AlternateButton>{sum(1, 2)}</AlternateButton>
  </div>
);

render(
  <Provider renderer={renderer}>
    <App />
  </Provider>,
  document.getElementById('app')
);
