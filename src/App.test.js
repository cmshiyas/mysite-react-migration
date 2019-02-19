import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './App';
import Experience from './App';
import Technologies from './App';
import Footer from './App';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Check for Header', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Check for Experience', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Experience />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Check for Technologies', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Technologies />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Check for Footer', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
