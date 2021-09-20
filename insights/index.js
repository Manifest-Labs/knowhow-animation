"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

var _assignment = _interopRequireDefault(require("./assignment.json"));

var _engagement = _interopRequireDefault(require("./engagement.json"));

var _feed = _interopRequireDefault(require("./feed.json"));

var _top5 = _interopRequireDefault(require("./top5.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  assignment: _assignment.default,
  engagement: _engagement.default,
  feed: _feed.default,
  top5: _top5.default,
};
exports.default = _default;
