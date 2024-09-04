"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.default = void 0;

// Chrome Extension
var _processDetailLoading = _interopRequireDefault(require("./process_detail_loading.json"));
var _processRecommended = _interopRequireDefault(require("./process_recommended.json"));
var _transcriptionLoading = _interopRequireDefault(require("./transcription_loading.json"));


function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  processDetailLoading: _processDetailLoading.default,
  processRecommended: _processRecommended.default,
  transcriptionLoading: _transcriptionLoading.default,
};

exports.default = _default;
