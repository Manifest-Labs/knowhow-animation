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
var _magnifyingGlass = _interopRequireDefault(
  require("./magnifying-glass-paper.json")
);
var _mountaineering = _interopRequireDefault(require("./mountaineering.json"));
var _office = _interopRequireDefault(require("./office.json"));
var _sittingPadlock = _interopRequireDefault(require("./sittingpadlock.json"));
var _constructionPeople = _interopRequireDefault(
  require("./construction-people.json")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  computerSearch: _computerSearch.default,
  confused: _confused.default,
  gears: _gears.default,
  highfive: _highfive.default,
  magnifyingGlass: _magnifyingGlass.default,
  mountaineering: _mountaineering.default,
  office: _office.default,
  sittingPadlock: _sittingPadlock.default,
  constructionPeople: _constructionPeople.default,
};
exports.default = _default;
