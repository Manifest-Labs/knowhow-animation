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
// Gradients: Contains gradients used around the project.
var _app_gradients_gradient = _interopRequireDefault(require("./app/gradients/gradient.json"));
// Graphics: Contains graphics such as animated people.
var _app_graphics_computerSearch = _interopRequireDefault(require("./app/graphics/computer_search.json"));
var _app_graphics_confused = _interopRequireDefault(require("./app/graphics/confused.json"));
var _app_graphics_gears = _interopRequireDefault(require("./app/graphics/gears.json"));
var _app_graphics_highfive = _interopRequireDefault(require("./app/graphics/highfive.json"));
var _app_graphics_magnifyingGlass = _interopRequireDefault(require("./app/graphics/magnifying-glass-paper.json"));
var _app_graphics_mountaineering = _interopRequireDefault(require("./app/graphics/mountaineering.json"));
var _app_graphics_office = _interopRequireDefault(require("./app/graphics/office.json"));
var _app_graphics_sittingPadlock = _interopRequireDefault(require("./app/graphics/sittingpadlock.json"));
// Icons: Contains icons such as loaders, carrots, typing and ellipsis. 
var _app_icons_carrotClose = _interopRequireDefault(require("./app/icons/carrotClose.json"));
var _app_icons_carrotOpen = _interopRequireDefault(require("./app/icons/carrotOpen.json"));
var _app_icons_ellipsisToX = _interopRequireDefault(require("./app/icons/ellipsisToX.json"));
var _app_icons_halfSecLoader = _interopRequireDefault(require("./app/icons/half-sec_loader.json"));
var _app_icons_typing = _interopRequireDefault(require("./app/icons/typing.json"));
// Logos: Different animations that are done using the knowhow logo.
var _app_logos_khDark = _interopRequireDefault(require("./app/logos/kh_logo_loader_DARK.json"));
var _app_logos_khWhite = _interopRequireDefault(require("./app/logos/kh_logo_loader_WHITE.json"));
var _app_logos_khLoader = _interopRequireDefault(require("./app/logos/kh_logo_loader.json"));
var _app_logos_loader = _interopRequireDefault(require("./app/logos/loader.json"));
var _app_logos_logoLoader = _interopRequireDefault(require("./app/logos/logoLoader.json"));

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
  // Dashboards: Table, processes and graph loaders that are generally used in dashboard settings.
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
  // Gradients: Contains gradients used around the project.
  gradients_gradient: _app_gradients_gradient.default,
  // Graphics: Contains graphics such as animated people.
  graphics_computerSearch: _app_graphics_computerSearch.default,
  graphics_confused: _app_graphics_confused.default,
  graphics_gears: _app_graphics_gears.default,
  graphics_highfive: _app_graphics_highfive.default,
  graphics_magnifyingGlass: _app_graphics_magnifyingGlass.default,
  graphics_mountaineering: _app_graphics_mountaineering.default,
  graphics_office: _app_graphics_office.default,
  graphics_sittingPadlock: _app_graphics_sittingPadlock.default,
  // Icons: Contains icons such as loaders, carrots, typing and ellipsis. 
  icons_carrotClose: _app_icons_carrotClose.default,
  icons_carrotOpen: _app_icons_carrotOpen.default,
  icons_ellipsisToX: _app_icons_ellipsisToX.default,
  icons_halfSecLoader: _app_icons_halfSecLoader.default,
  icons_typing: _app_icons_typing.default,
  // Logos: Different animations that are done using the knowhow logo.
  logos_khDark: _app_logos_khDark.default,
  logos_khWhite: _app_logos_khWhite.default,
  logos_khLoader: _app_logos_khLoader.default,
  logos_loader: _app_logos_loader.default,
  logos_logoLoader: _app_logos_logoLoader.default,
};
exports.default = _default;
