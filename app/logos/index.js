"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Logos: Different animations that are done using the knowhow logo.
var _khDark = _interopRequireDefault(require("./kh_logo_loader_DARK.json"));
var _khWhite = _interopRequireDefault(require("./kh_logo_loader_WHITE.json"));
var _khLoader = _interopRequireDefault(require("./kh_logo_loader.json"));
var _loader = _interopRequireDefault(require("./loader.json"));
var _logoLoader = _interopRequireDefault(require("./logoLoader.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  logos_khDark: _khDark.default,
  logos_khWhite: _khWhite.default,
  logos_khLoader: _khLoader.default,
  logos_loader: _loader.default,
  logos_logoLoader: _logoLoader.default,
};
exports.default = _default;
