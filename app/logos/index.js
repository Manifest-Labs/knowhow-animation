"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Logos: Different animations that are done using the knowhow logo.
var _logos_khDark = _interopRequireDefault(require("./app/logos/kh_logo_loader_DARK.json"));
var _logos_khWhite = _interopRequireDefault(require("./app/logos/kh_logo_loader_WHITE.json"));
var _logos_khLoader = _interopRequireDefault(require("./app/logos/kh_logo_loader.json"));
var _logos_loader = _interopRequireDefault(require("./app/logos/loader.json"));
var _logos_logoLoader = _interopRequireDefault(require("./app/logos/logoLoader.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  logos_khDark: _logos_khDark.default,
  logos_khWhite: _logos_khWhite.default,
  logos_khLoader: _logos_khLoader.default,
  logos_loader: _logos_loader.default,
  logos_logoLoader: _logos_logoLoader.default,
};
exports.default = _default;
