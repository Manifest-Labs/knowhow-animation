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
var _bookmarkSection = _interopRequireDefault(require("./Bookmark Section-2.json"));
var _engagement = _interopRequireDefault(require("./engagement.json"));
var _expertise = _interopRequireDefault(require("./Expertise-2.json"));
var _feed = _interopRequireDefault(require("./feed.json"));
var _gridView = _interopRequireDefault(require("./Grid View Stacked.json"));
var _listView = _interopRequireDefault(require("./List View Section.json"));
var _loadingMobile = _interopRequireDefault(require("./loading_browse_mobile.json"));
var _loadingRecipe = _interopRequireDefault(require("./loading_recipe_detail.json"));
var _myProcesses = _interopRequireDefault(require("./My Processes.json"));
var _myWorkflows = _interopRequireDefault(require("./My Workflows.json"));
var _processManagerList = _interopRequireDefault(require("./Process Manager List-2.json"));
var _recipeBrowseLoader = _interopRequireDefault(require("./recipePage_Browse_loader.json"));
var _recipeHomeLoader = _interopRequireDefault(require("./recipePage_home_loader.json"));
var _toDo = _interopRequireDefault(require("./To-do List.json"));
var _top5 = _interopRequireDefault(require("./top5.json"));
var _workflowStandalone = _interopRequireDefault(require("./Workflow Standalone.json"));
var _workflowWhole = _interopRequireDefault(require("./Workflow Whole.json"));
var _workflows = _interopRequireDefault(require("./Workflows-4.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  dashboards_activityFeed: _activityFeed.default,
  dashboards_assignedToMe: _assignedToMe.default,
  dashboards_assignment: _assignment.default,
  dashboards_bookmarkSection: _bookmarkSection.default,
  dashboards_engagement: _engagement.default,
  dashboards_expertise: _expertise.default,
  dashboards_feed: _feed.default,
  dashboards_gridView: _gridView.default,
  dashboards_listView: _listView.default,
  dashboards_loadingMobile: _loadingMobile.default,
  dashboards_loadingRecipe: _loadingRecipe.default,
  dashboards_myProcesses: _myProcesses.default,
  dashboards_myWorkflows: _myWorkflows.default,
  dashboards_processManagerList: _processManagerList.default,
  dashboards_recipeBrowseLoader: _recipeBrowseLoader.default,
  dashboards_recipeHomeLoader: _recipeHomeLoader.default,
  dashboards_toDo: _toDo.default,
  dashboards_top5: _top5.default,
  dashboards_workflowStandalone: _workflowStandalone.default,
  dashboards_workflowWhole: _workflowWhole.default,
  dashboards_workflows: _workflows.default,
};
exports.default = _default;
