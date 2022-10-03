"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Gradients: Contains gradients used around the project.
var _gradient = _interopRequireDefault(require("./gradient.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  gradient: _gradient.default,
};
exports.default = _default;
