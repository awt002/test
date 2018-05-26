import React from 'react';
import ReactDOM from 'react-dom';
import PetersComponent from './PetersComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PetersComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
