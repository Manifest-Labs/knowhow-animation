"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// Landing
var _attachDocs = _interopRequireDefault(require("./LP_attachDocs.json"));
var _centralHub = _interopRequireDefault(require("./LP_centralHub.json"));
var _editing = _interopRequireDefault(require("./LP_editing.json"));
var _insights = _interopRequireDefault(require("./LP_insights.json"));
var _millenny = _interopRequireDefault(require("./millenny.json"));
var _simplifyWork = _interopRequireDefault(require("./simplifyWork.json"));
var _supervisorsSupport = _interopRequireDefault(require("./supervisorsSupport.json"));
var _desktopAndMobile = _interopRequireDefault(require("./desktop-and-mobile.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  attachDocs: _attachDocs.default,
  centralHub: _centralHub.default,
  editing: _editing.default,
  insights: _insights.default,
  millenny: _millenny.default,
  simplifyWork: _simplifyWork.default,
  supervisorsSupport: _supervisorsSupport.default,
  desktopAndMobile: _desktopAndMobile.default,
};
exports.default = _default;
