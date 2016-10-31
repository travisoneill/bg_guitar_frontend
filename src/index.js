import React, { component } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';

//React Entrypoint
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App/>, document.getElementById('react-entry'));
});
