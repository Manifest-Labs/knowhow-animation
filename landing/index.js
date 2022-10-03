"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// Landing
var _landing_attachDocs = _interopRequireDefault(require("./landing/LP_attachDocs.json"));
var _landing_centralHub = _interopRequireDefault(require("./landing/LP_centralHub.json"));
var _landing_editing = _interopRequireDefault(require("./landing/LP_editing.json"));
var _landing_insights = _interopRequireDefault(require("./landing/LP_insights.json"));
var _landing_millenny = _interopRequireDefault(require("./landing/millenny.json"));
var _landing_simplifyWork = _interopRequireDefault(require("./landing/simplifyWork.json"));
var _landing_supervisorsSupport = _interopRequireDefault(require("./landing/supervisorsSupport.json"));
var _landing_desktopAndMobile = _interopRequireDefault(require("./landing/desktop-and-mobile.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  landing_attachDocs: _landing_attachDocs.default,
  landing_centralHub: _landing_centralHub.default,
  landing_editing: _landing_editing.default,
  landing_insights: _landing_insights.default,
  landing_millenny: _landing_millenny.default,
  landing_simplifyWork: _landing_simplifyWork.default,
  landing_supervisorsSupport: _landing_supervisorsSupport.default,
  landing_desktopAndMobile: _landing_desktopAndMobile.default,
};
exports.default = _default;
