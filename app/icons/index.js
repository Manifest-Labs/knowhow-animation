"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Icons: Contains icons such as loaders, carrots, typing and ellipsis. 
var _icons_carrotClose = _interopRequireDefault(require("./app/icons/carrotClose.json"));
var _icons_carrotOpen = _interopRequireDefault(require("./app/icons/carrotOpen.json"));
var _icons_ellipsisToX = _interopRequireDefault(require("./app/icons/ellipsisToX.json"));
var _icons_halfSecLoader = _interopRequireDefault(require("./app/icons/half-sec_loader.json"));
var _icons_typing = _interopRequireDefault(require("./app/icons/typing.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  icons_carrotClose: _icons_carrotClose.default,
  icons_carrotOpen: _icons_carrotOpen.default,
  icons_ellipsisToX: _icons_ellipsisToX.default,
  icons_halfSecLoader: _icons_halfSecLoader.default,
  icons_typing: _icons_typing.default,
};
exports.default = _default;
