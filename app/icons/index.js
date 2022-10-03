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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  icons_carrotClose: _carrotClose.default,
  icons_carrotOpen: _carrotOpen.default,
  icons_ellipsisToX: _ellipsisToX.default,
  icons_halfSecLoader: _halfSecLoader.default,
  icons_typing: _typing.default,
};
exports.default = _default;
