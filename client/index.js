import React from 'react';
import { render } from 'react-dom';
import styles from './css/homepage.scss'
import Homepage from './components/homepage';
import Switch from './switch';

// uncomment so that webpack can bundle styles

render(
    <Switch />,
  document.getElementById('root')
);
