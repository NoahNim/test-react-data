import 'bootstrap/dist/css/bootstrap.min.css';
/*eslint-disable */
import $ from 'jquery';
import Popper from 'popper.js';
/*eslint-enable */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import HashRouter from 'react-router-dom'

const render = (Component) => {
  ReactDOM.render(
    <HashRouter>
      <Component/>
    </HashRouter>,
    document.getElementById('react-app-root')
  );
};

render(App);

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
