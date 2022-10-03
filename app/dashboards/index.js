"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;

// App
// Dashboards: Table, processes and graph loaders that are generally used in dashboard settings.
var _app_dashboards_activityFeed = _interopRequireDefault(require("./app/dashboards/Activity Feed-2.json"));
var _app_dashboards_assignedToMe = _interopRequireDefault(require("./app/dashboards/Assigned to Me.json"));
var _app_dashboards_assignment = _interopRequireDefault(require("./app/dashboards/assignment.json"));
var _app_dashboards_bookmarkSection = _interopRequireDefault(require("./app/dashboards/Bookmark Section-2.json"));
var _app_dashboards_engagement = _interopRequireDefault(require("./app/dashboards/engagement.json"));
var _app_dashboards_expertise = _interopRequireDefault(require("./app/dashboards/Expertise-2.json"));
var _app_dashboards_feed = _interopRequireDefault(require("./app/dashboards/feed.json"));
var _app_dashboards_gridView = _interopRequireDefault(require("./app/dashboards/Grid View Stacked.json"));
var _app_dashboards_listView = _interopRequireDefault(require("./app/dashboards/List View Section.json"));
var _app_dashboards_loadingMobile = _interopRequireDefault(require("./app/dashboards/loading_browse_mobile.json"));
var _app_dashboards_loadingRecipe = _interopRequireDefault(require("./app/dashboards/loading_recipe_detail.json"));
var _app_dashboards_myProcesses = _interopRequireDefault(require("./app/dashboards/My Processes.json"));
var _app_dashboards_myWorkflows = _interopRequireDefault(require("./app/dashboards/My Workflows.json"));
var _app_dashboards_processManagerList = _interopRequireDefault(require("./app/dashboards/Process Manager List-2.json"));
var _app_dashboards_recipeBrowseLoader = _interopRequireDefault(require("./app/dashboards/recipePage_Browse_loader.json"));
var _app_dashboards_recipeHomeLoader = _interopRequireDefault(require("./app/dashboards/recipePage_home_loader.json"));
var _app_dashboards_toDo = _interopRequireDefault(require("./app/dashboards/To-do List.json"));
var _app_dashboards_top5 = _interopRequireDefault(require("./app/dashboards/top5.json"));
var _app_dashboards_workflowStandalone = _interopRequireDefault(require("./app/dashboards/Workflow Standalone.json"));
var _app_dashboards_workflowWhole = _interopRequireDefault(require("./app/dashboards/Workflow Whole.json"));
var _app_dashboards_workflows = _interopRequireDefault(require("./app/dashboards/Workflows-4.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  dashboards_activityFeed: _app_dashboards_activityFeed.default,
  dashboards_assignedToMe: _app_dashboards_assignedToMe.default,
  dashboards_assignment: _app_dashboards_assignment.default,
  dashboards_bookmarkSection: _app_dashboards_bookmarkSection.default,
  dashboards_engagement: _app_dashboards_engagement.default,
  dashboards_expertise: _app_dashboards_expertise.default,
  dashboards_feed: _app_dashboards_feed.default,
  dashboards_gridView: _app_dashboards_gridView.default,
  dashboards_listView: _app_dashboards_listView.default,
  dashboards_loadingMobile: _app_dashboards_loadingMobile.default,
  dashboards_loadingRecipe: _app_dashboards_loadingRecipe.default,
  dashboards_myProcesses: _app_dashboards_myProcesses.default,
  dashboards_myWorkflows: _app_dashboards_myWorkflows.default,
  dashboards_processManagerList: _app_dashboards_processManagerList.default,
  dashboards_recipeBrowseLoader: _app_dashboards_recipeBrowseLoader.default,
  dashboards_recipeHomeLoader: _app_dashboards_recipeHomeLoader.default,
  dashboards_toDo: _app_dashboards_toDo.default,
  dashboards_top5: _app_dashboards_top5.default,
  dashboards_workflowStandalone: _app_dashboards_workflowStandalone.default,
  dashboards_workflowWhole: _app_dashboards_workflowWhole.default,
  dashboards_workflows: _app_dashboards_workflows.default,
};
exports.default = _default;
