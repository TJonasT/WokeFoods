import React from 'react';
import { render } from 'react-dom';
import styles from './css/homepage.scss'
import Homepage from './components/homepage';

// uncomment so that webpack can bundle styles

render(
  <Homepage />,
  document.getElementById('root')
);
