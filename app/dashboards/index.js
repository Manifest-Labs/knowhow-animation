"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Dashboards: Table, processes and graph loaders that are generally used in dashboard settings.
var _activityFeed = _interopRequireDefault(require("./Activity Feed-2.json"));
var _assignedToMe = _interopRequireDefault(require("./Assigned to Me.json"));
var _assignment = _interopRequireDefault(require("./assignment.json"));
var _bookmarkSection = _interopRequireDefault(
  require("./Bookmark Section-2.json")
);
var _engagement = _interopRequireDefault(require("./engagement.json"));
var _expertise = _interopRequireDefault(require("./Expertise-2.json"));
var _feed = _interopRequireDefault(require("./feed.json"));
var _gridView = _interopRequireDefault(require("./Grid View Stacked.json"));
var _listView = _interopRequireDefault(require("./List View Section.json"));
var _loadingMobile = _interopRequireDefault(
  require("./loading_browse_mobile.json")
);
var _loadingRecipe = _interopRequireDefault(
  require("./loading_recipe_detail.json")
);
var _myProcesses = _interopRequireDefault(require("./My Processes.json"));
var _myWorkflows = _interopRequireDefault(require("./My Workflows.json"));
var _processManagerList = _interopRequireDefault(
  require("./Process Manager Table.json")
);
var _recipeBrowseLoader = _interopRequireDefault(
  require("./recipePage_Browse_loader.json")
);
var _recipeHomeLoader = _interopRequireDefault(
  require("./recipePage_home_loader.json")
);
var _toDo = _interopRequireDefault(require("./To-do List.json"));
var _top5 = _interopRequireDefault(require("./top5.json"));
var _workflowStandalone = _interopRequireDefault(
  require("./Workflow Standalone.json")
);
var _workflowWhole = _interopRequireDefault(require("./Workflow Whole.json"));
var _workflows = _interopRequireDefault(require("./Workflows-4.json"));
var _templateManager = _interopRequireDefault(
  require("./templateManager.json")
);
var _badgeWidget = _interopRequireDefault(require("./badges-widget.json"));
var _badgeViewAll = _interopRequireDefault(require("./badges-viewall.json"));
var _magicSearchLoaderLarge = _interopRequireDefault(require("./magic_search_desktop_box_primary.json"));
var _magicSearchLoaderSmall = _interopRequireDefault(require("./magic_search_desktop_box_secondary.json"));
var _magicSearchMobilePrimary = _interopRequireDefault(require("./magic_search_mobile_box_primary.json"));
var _magicSearchMobileSecondary = _interopRequireDefault(require("./magic_search_mobile_box_secondary.json"));
var _magicSearchTabletPrimary = _interopRequireDefault(require("./magic_search_tablet_box_primary.json"));
var _magicSearchTabletSecondary = _interopRequireDefault(require("./magic_search_tablet_box_secondary.json"));
var _magicSearchMobileBoxV2 = _interopRequireDefault(require("./magic_search_mobile_box_v2.json"));
var _magicSearchDesktopBoxV2 = _interopRequireDefault(require("./magic_search_desktop_box_v2.json"));
var _magicSearchMobileProcess = _interopRequireDefault(require("./magic_search_mobile_process.json"));
var _magicSearchDesktopProcess = _interopRequireDefault(require("./magic_search_desktop_process.json"));
var _franchiseBuildingConstruction = _interopRequireDefault(
  require("./franchise_building_construction.json")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  activityFeed: _activityFeed.default,
  assignedToMe: _assignedToMe.default,
  assignment: _assignment.default,
  bookmarkSection: _bookmarkSection.default,
  engagement: _engagement.default,
  expertise: _expertise.default,
  feed: _feed.default,
  gridView: _gridView.default,
  listView: _listView.default,
  loadingMobile: _loadingMobile.default,
  loadingRecipe: _loadingRecipe.default,
  myProcesses: _myProcesses.default,
  myWorkflows: _myWorkflows.default,
  processManagerList: _processManagerList.default,
  recipeBrowseLoader: _recipeBrowseLoader.default,
  recipeHomeLoader: _recipeHomeLoader.default,
  toDo: _toDo.default,
  top5: _top5.default,
  workflowStandalone: _workflowStandalone.default,
  workflowWhole: _workflowWhole.default,
  workflows: _workflows.default,
  templateManager: _templateManager.default,
  badgeWidget: _badgeWidget.default,
  badgeViewAll: _badgeViewAll.default,
  magicSearchLoaderLarge: _magicSearchLoaderLarge.default,
  magicSearchLoaderSmall: _magicSearchLoaderSmall.default,
  magicSearchMobilePrimary: _magicSearchMobilePrimary.default,
  magicSearchMobileSecondary: _magicSearchMobileSecondary.default,
  magicSearchTabletPrimary: _magicSearchTabletPrimary.default,
  magicSearchTabletSecondary: _magicSearchTabletSecondary.default,
  magicSearchMobileBoxV2: _magicSearchMobileBoxV2.default,
  magicSearchDesktopBoxV2: _magicSearchMobileBoxV2.default,
  magicSearchMobileProcess: _magicSearchMobileBoxV2.default,
  magicSearchDesktopProcess: _magicSearchMobileBoxV2.default,
  franchiseBuildingConstruction: _franchiseBuildingConstruction.default,
};
exports.default = _default;
