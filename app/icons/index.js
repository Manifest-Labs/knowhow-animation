"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Icons: Contains icons such as loaders, carrots, typing and ellipsis. 
var _carrotClose = _interopRequireDefault(require("./carrotClose.json"));
var _carrotOpen = _interopRequireDefault(require("./carrotOpen.json"));
var _ellipsisToX = _interopRequireDefault(require("./ellipsisToX.json"));
var _halfSecLoader = _interopRequireDefault(require("./half-sec_loader.json"));
var _typing = _interopRequireDefault(require("./typing.json"));
var _qrCode = _interopRequireDefault(require("./qrCode.json"));
var _loadingWhite = _interopRequireDefault(require("./loadingWhite.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  carrotClose: _carrotClose.default,
  carrotOpen: _carrotOpen.default,
  ellipsisToX: _ellipsisToX.default,
  halfSecLoader: _halfSecLoader.default,
  typing: _typing.default,
  qrCode: _qrCode.default,
  loadingWhite: _loadingWhite.default,
};
exports.default = _default;
