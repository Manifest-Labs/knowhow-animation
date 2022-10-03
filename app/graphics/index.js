"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Graphics: Contains graphics such as animated people.
var _graphics_computerSearch = _interopRequireDefault(require("./computer_search.json"));
var _graphics_confused = _interopRequireDefault(require("./confused.json"));
var _graphics_gears = _interopRequireDefault(require("./gears.json"));
var _graphics_highfive = _interopRequireDefault(require("./highfive.json"));
var _graphics_magnifyingGlass = _interopRequireDefault(require("./magnifying-glass-paper.json"));
var _graphics_mountaineering = _interopRequireDefault(require("./mountaineering.json"));
var _graphics_office = _interopRequireDefault(require("./office.json"));
var _graphics_sittingPadlock = _interopRequireDefault(require("./sittingpadlock.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  graphics_computerSearch: _graphics_computerSearch.default,
  graphics_confused: _graphics_confused.default,
  graphics_gears: _graphics_gears.default,
  graphics_highfive: _graphics_highfive.default,
  graphics_magnifyingGlass: _graphics_magnifyingGlass.default,
  graphics_mountaineering: _graphics_mountaineering.default,
  graphics_office: _graphics_office.default,
  graphics_sittingPadlock: _graphics_sittingPadlock.default,
};
exports.default = _default;
