"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Graphics: Contains graphics such as animated people.
var _computerSearch = _interopRequireDefault(require("./computer_search.json"));
var _confused = _interopRequireDefault(require("./confused.json"));
var _gears = _interopRequireDefault(require("./gears.json"));
var _highfive = _interopRequireDefault(require("./highfive.json"));
var _magnifyingGlass = _interopRequireDefault(require("./magnifying-glass-paper.json"));
var _mountaineering = _interopRequireDefault(require("./mountaineering.json"));
var _office = _interopRequireDefault(require("./office.json"));
var _sittingPadlock = _interopRequireDefault(require("./sittingpadlock.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  graphics_computerSearch: _computerSearch.default,
  graphics_confused: _confused.default,
  graphics_gears: _gears.default,
  graphics_highfive: _highfive.default,
  graphics_magnifyingGlass: _magnifyingGlass.default,
  graphics_mountaineering: _mountaineering.default,
  graphics_office: _office.default,
  graphics_sittingPadlock: _sittingPadlock.default,
};
exports.default = _default;
