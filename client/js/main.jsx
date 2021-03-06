var React = require('react');
var ReactDOM = require('react-dom');

/**
 * Libraries
 */

global.jQuery = require('jquery');
global.$ = jQuery;
// require('./libraries/pixi.min');
// global.p2 = require('./libraries/p2.min');
// global.Phaser = require('./libraries/phaser.js');

/**
 * Components
 */

var MainComponent = require('./components/MainComponent.jsx');

/**
 * Add the components
 */

ReactDOM.render(
  <MainComponent />,
  document.getElementById('main-component')
);

require('./main');
