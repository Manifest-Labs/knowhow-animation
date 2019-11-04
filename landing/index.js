"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LP_attachDocs = _interopRequireDefault(require("./LP_attachDocs.json"));

var _LP_centralHub = _interopRequireDefault(require("./LP_centralHub.json"));

var _LP_editing = _interopRequireDefault(require("./LP_editing.json"));

var _LP_insights = _interopRequireDefault(require("./LP_insights.json"));

var _millenny = _interopRequireDefault(require("./millenny.json"));

var _simplifyWork = _interopRequireDefault(require("./simplifyWork.json"));

var _supervisorsSupport = _interopRequireDefault(require("./supervisorsSupport.json"));

var _desktopAndMobile = _interopRequireDefault(require("./desktop-and-mobile.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  attachDocs: _LP_attachDocs.default,
  centralHub: _LP_centralHub.default,
  editing: _LP_editing.default,
  insights: _LP_insights.default,
  mellenny: _millenny.default,
  simplifyWork: _simplifyWork.default,
  supervisorsSupport: _supervisorsSupport.default,
  desktopMobile: _desktopAndMobile.default
};
exports.default = _default;