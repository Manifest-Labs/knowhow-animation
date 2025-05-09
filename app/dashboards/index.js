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
var _documentAnalyzer = _interopRequireDefault(
  require("./document_analyzer.json")
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
var _processManagerRow = _interopRequireDefault(
  require("./process_manager_row.json")
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
var _templateLibraryRow = _interopRequireDefault(
  require("./template-library-row.json")
);
var _badgeWidget = _interopRequireDefault(require("./badges-widget.json"));
var _badgeViewAll = _interopRequireDefault(require("./badges-viewall.json"));
var _magicSearchLoaderLarge = _interopRequireDefault(
  require("./magic_search_desktop_box_primary.json")
);
var _magicSearchLoaderSmall = _interopRequireDefault(
  require("./magic_search_desktop_box_secondary.json")
);
var _magicSearchMobilePrimary = _interopRequireDefault(
  require("./magic_search_mobile_box_primary.json")
);
var _magicSearchMobileSecondary = _interopRequireDefault(
  require("./magic_search_mobile_box_secondary.json")
);
var _magicSearchTabletPrimary = _interopRequireDefault(
  require("./magic_search_tablet_box_primary.json")
);
var _magicSearchTabletSecondary = _interopRequireDefault(
  require("./magic_search_tablet_box_secondary.json")
);
var _magicSearchMobileBoxV2 = _interopRequireDefault(
  require("./magic_search_mobile_box_v2.json")
);
var _magicSearchDesktopBoxV2 = _interopRequireDefault(
  require("./magic_search_desktop_box_v2.json")
);
var _magicSearchMobileProcess = _interopRequireDefault(
  require("./magic_search_mobile_process.json")
);
var _magicSearchDesktopProcess = _interopRequireDefault(
  require("./magic_search_desktop_process.json")
);
var _magicSearchIpadTop = _interopRequireDefault(
  require("./magic_search_ipad_top.json")
);
var _magicSearchIpadBottom = _interopRequireDefault(
  require("./magic_search_ipad_bottom.json")
);
var _magicSearchDashboardMagnifyingGlass = _interopRequireDefault(
  require("./magic_search_dashboard_magnifying_glass.json")
);
var _franchiseBuildingConstruction = _interopRequireDefault(
  require("./franchise_building_construction.json")
);
var _autogenerateAssessmentQuestionsDesktop = _interopRequireDefault(
  require("./autogenerate_assessment_questions_desktop.json")
);
var _adminNameList = _interopRequireDefault(require("./admin_name_list.json"));
var _memberLoginChart = _interopRequireDefault(
  require("./member_login_chart.json")
);
var _memberNameList = _interopRequireDefault(
  require("./member_name_list.json")
);
var _workflowsDashboardTeamMembersLoading = _interopRequireDefault(
  require("./workflows_dashboard_team_members_loading.json")
);
var _workflowsDashboardTemplatesLoading = _interopRequireDefault(
  require("./workflows_dashboard_templates_loading.json")
);
var _workflowsDashboardActiveTableLoading = _interopRequireDefault(
  require("./workflows_dashboard_active_table_loading.json")
);
var _dashboardActiveTableLoading = _interopRequireDefault(
  require("./dashboard_active_table_loading.json")
);
var _workflowsDesktopStepList = _interopRequireDefault(
  require("./workflows_desktop_step_list.json")
);
var _workflowsTabletStepList = _interopRequireDefault(
  require("./workflows_tablet_step_list.json")
);
var _workflowsMobileStepList = _interopRequireDefault(
  require("./workflows_mobile_step_list.json")
);
var _insightsDashboardActivity = _interopRequireDefault(
  require("./insights_activity.json")
);
var _insightsDashboardCharts = _interopRequireDefault(
  require("./insights_charts.json")
);
var _insightsDashboardMainChart = _interopRequireDefault(
  require("./insights_main_chart.json")
);
var _insightsDashboardMemberList = _interopRequireDefault(
  require("./insights_member_list.json")
);
var _insightsDashboardTopMembers = _interopRequireDefault(
  require("./insights_top_members.json")
);
var _insightsDashboardViewAssignments = _interopRequireDefault(
  require("./insights_view_assignments.json")
);
var _insightsDashboardViewAssignmentsDetail = _interopRequireDefault(
  require("./insights_view_assignments_detail.json")
);
var _insightsMemberInfoSidePeekChart = _interopRequireDefault(
  require("./insights_member_info_sidepeek_chart.json")
);
var _insightsMemberInfoSidePeekOverdue = _interopRequireDefault(
  require("./insights_member_info_sidepeek_overdue.json")
);
var _insightsMemberInfoSidePeekSearches = _interopRequireDefault(
  require("./insights_member_info_sidepeek_searches.json")
);
var _insightsMemberInfoSidePeekTags = _interopRequireDefault(
  require("./insights_member_info_sidepeek_tags.json")
);
var _userDashboardBadgeSectionDesktop = _interopRequireDefault(
  require("./user_dashboard_badge_section_desktop.json")
);
var _userDashboardBadgeSectionMobile = _interopRequireDefault(
  require("./user_dashboard_badge_section_mobile.json")
);
var _userDashboardBadgeSectionTablet = _interopRequireDefault(
  require("./user_dashboard_badge_section_tablet.json")
);
var _userDashboardNumberDesktop = _interopRequireDefault(
  require("./user_dashboard_number_desktop.json")
);
var _userDashboardNumberMobile = _interopRequireDefault(
  require("./user_dashboard_number_mobile.json")
);
var _userDashboardNumberTablet = _interopRequireDefault(
  require("./user_dashboard_number_tablet.json")
);
var _userDashboardProcessCardDesktop = _interopRequireDefault(
  require("./user_dashboard_process_card_desktop.json")
);
var _userDashboardProcessCardMobile = _interopRequireDefault(
  require("./user_dashboard_process_card_mobile.json")
);
var _userDashboardProcessCardTablet = _interopRequireDefault(
  require("./user_dashboard_process_card_tablet.json")
);
var _userDashboardProcessRecommendDesktop = _interopRequireDefault(
  require("./user_dashboard_process_recommend_desktop.json")
);
var _userDashboardProcessRecommendMobile = _interopRequireDefault(
  require("./user_dashboard_process_recommend_mobile.json")
);
var _userDashboardProcessRecommendTablet = _interopRequireDefault(
  require("./user_dashboard_process_recommend_tablet.json")
);
var _userDashboardProgressBarDesktop = _interopRequireDefault(
  require("./user_dashboard_progress_bar_desktop.json")
);
var _userDashboardProgressBarMobile = _interopRequireDefault(
  require("./user_dashboard_progress_bar_mobile.json")
);
var _userDashboardProgressBarTablet = _interopRequireDefault(
  require("./user_dashboard_progress_bar_tablet.json")
);
var _userDashboardProgressRingDesktop = _interopRequireDefault(
  require("./user_dashboard_progress_ring_desktop.json")
);
var _userDashboardProgressRingMobile = _interopRequireDefault(
  require("./user_dashboard_progress_ring_mobile.json")
);
var _userDashboardProgressRingTablet = _interopRequireDefault(
  require("./user_dashboard_progress_ring_tablet.json")
);
var _userDashboardWorkflowCardDesktop = _interopRequireDefault(
  require("./user_dashboard_workflow_card_desktop.json")
);
var _userDashboardWorkflowCardMobile = _interopRequireDefault(
  require("./user_dashboard_workflow_card_mobile.json")
);
var _userDashboardWorkflowCardTablet = _interopRequireDefault(
  require("./user_dashboard_workflow_card_tablet.json")
);
var _userDashboardWorkflowRecommendDesktop = _interopRequireDefault(
  require("./user_dashboard_workflow_recommend_desktop.json")
);
var _userDashboardWorkflowRecommendMobile = _interopRequireDefault(
  require("./user_dashboard_workflow_recommend_mobile.json")
);
var _userDashboardWorkflowRecommendTablet = _interopRequireDefault(
  require("./user_dashboard_workflow_recommend_tablet.json")
);
var _userDashboardCompleteProfileDesktop = _interopRequireDefault(
  require("./user_dashboard_complete_profile_desktop.json")
);
var _userDashboardCompleteProfileMobile = _interopRequireDefault(
  require("./user_dashboard_complete_profile_mobile.json")
);
var _userDashboardCompleteProfileTablet = _interopRequireDefault(
  require("./user_dashboard_complete_profile_tablet.json")
);
var _userDashboardViewAllDesktop = _interopRequireDefault(
  require("./user_dashboard_view_all_desktop.json")
);
var _userDashboardViewAllMobile = _interopRequireDefault(
  require("./user_dashboard_view_all_mobile.json")
);
var _userDashboardViewAllTablet = _interopRequireDefault(
  require("./user_dashboard_view_all_tablet.json")
);
var _featuredTemplate = _interopRequireDefault(
  require("./featured_template.json")
);
var _workforceListItem = _interopRequireDefault(
  require("./workforce_list_item.json")
);
var _workforceMemberCard = _interopRequireDefault(
  require("./workforce_member_card.json")
);
var _workforceTags = _interopRequireDefault(require("./workforce_tags.json"));
var _workforceDescription = _interopRequireDefault(
  require("./workforce_description.json")
);

var templateLibraryWorkflowSidepeekTopInformation = _interopRequireDefault(
  require("./template_library_workflow_sidepeek_top_information.json")
);

var templateLibraryWorkflowSidepeekRow = _interopRequireDefault(
  require("./template_library_workflow_sidepeek_row.json")
);
var requestContentProcessesRow = _interopRequireDefault(
  require("./request_content_processes_request.json")
);
var requestContentSearchRow = _interopRequireDefault(
  require("./request_content_searches_request.json")
);
var externalImpactTopMetric = _interopRequireDefault(
  require("./external_impact_top_metric.json")
);
var tableFullRow = _interopRequireDefault(require("./table_full_row.json"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// ADD import (like above) and export (like below) everytime a new animation is created
var _default = {
  activityFeed: _activityFeed.default,
  assignedToMe: _assignedToMe.default,
  assignment: _assignment.default,
  bookmarkSection: _bookmarkSection.default,
  documentAnalyzer: _documentAnalyzer.default,
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
  processManagerRow: _processManagerRow.default,
  recipeBrowseLoader: _recipeBrowseLoader.default,
  recipeHomeLoader: _recipeHomeLoader.default,
  toDo: _toDo.default,
  top5: _top5.default,
  workflowStandalone: _workflowStandalone.default,
  workflowWhole: _workflowWhole.default,
  workflows: _workflows.default,
  templateManager: _templateManager.default,
  templateLibraryRow: _templateLibraryRow.default,
  badgeWidget: _badgeWidget.default,
  badgeViewAll: _badgeViewAll.default,
  magicSearchLoaderLarge: _magicSearchLoaderLarge.default,
  magicSearchLoaderSmall: _magicSearchLoaderSmall.default,
  magicSearchMobilePrimary: _magicSearchMobilePrimary.default,
  magicSearchMobileSecondary: _magicSearchMobileSecondary.default,
  magicSearchTabletPrimary: _magicSearchTabletPrimary.default,
  magicSearchTabletSecondary: _magicSearchTabletSecondary.default,
  magicSearchMobileBoxV2: _magicSearchMobileBoxV2.default,
  magicSearchDesktopBoxV2: _magicSearchDesktopBoxV2.default,
  magicSearchMobileProcess: _magicSearchMobileProcess.default,
  magicSearchDesktopProcess: _magicSearchDesktopProcess.default,
  magicSearchIpadTop: _magicSearchIpadTop.default,
  magicSearchIpadBottom: _magicSearchIpadBottom.default,
  magicSearchDashboardMagnifyingGlass:
    _magicSearchDashboardMagnifyingGlass.default,
  franchiseBuildingConstruction: _franchiseBuildingConstruction.default,
  autogenerateAssessmentQuestionsDesktop:
    _autogenerateAssessmentQuestionsDesktop.default,
  adminNameList: _adminNameList.default,
  memberLoginChart: _memberLoginChart.default,
  memberNameList: _memberNameList.default,
  workflowsDashboardTeamMembersLoading:
    _workflowsDashboardTeamMembersLoading.default,
  workflowsDashboardTemplatesLoading:
    _workflowsDashboardTemplatesLoading.default,
  workflowsDashboardActiveTableLoading:
    _workflowsDashboardActiveTableLoading.default,
  dashboardActiveTableLoading: _dashboardActiveTableLoading.default,
  workflowsDesktopStepList: _workflowsDesktopStepList.default,
  workflowsTabletStepList: _workflowsTabletStepList.default,
  workflowsMobileStepList: _workflowsMobileStepList.default,
  insightsDashboardActivity: _insightsDashboardActivity.default,
  insightsDashboardCharts: _insightsDashboardCharts.default,
  insightsDashboardMainChart: _insightsDashboardMainChart.default,
  insightsDashboardMemberList: _insightsDashboardMemberList.default,
  insightsDashboardTopMembers: _insightsDashboardTopMembers.default,
  insightsDashboardViewAssignments: _insightsDashboardViewAssignments.default,
  insightsDashboardViewAssignmentsDetail:
    _insightsDashboardViewAssignmentsDetail.default,
  insightsMemberInfoSidePeekChart: _insightsMemberInfoSidePeekChart.default,
  insightsMemberInfoSidePeekOverdue: _insightsMemberInfoSidePeekOverdue.default,
  insightsMemberInfoSidePeekSearches:
    _insightsMemberInfoSidePeekSearches.default,
  insightsMemberInfoSidePeekTags: _insightsMemberInfoSidePeekTags.default,
  userDashboardBadgeSectionDesktop: _userDashboardBadgeSectionDesktop.default,
  userDashboardBadgeSectionMobile: _userDashboardBadgeSectionMobile.default,
  userDashboardBadgeSectionTablet: _userDashboardBadgeSectionTablet.default,
  userDashboardNumberDesktop: _userDashboardNumberDesktop.default,
  userDashboardNumberMobile: _userDashboardNumberMobile.default,
  userDashboardNumberTablet: _userDashboardNumberTablet.default,
  userDashboardProcessCardDesktop: _userDashboardProcessCardDesktop.default,
  userDashboardProcessCardMobile: _userDashboardProcessCardMobile.default,
  userDashboardProcessCardTablet: _userDashboardProcessCardTablet.default,
  userDashboardProcessRecommendDesktop:
    _userDashboardProcessRecommendDesktop.default,
  userDashboardProcessRecommendMobile:
    _userDashboardProcessRecommendMobile.default,
  userDashboardProcessRecommendTablet:
    _userDashboardProcessRecommendTablet.default,
  userDashboardProgressBarDesktop: _userDashboardProgressBarDesktop.default,
  userDashboardProgressBarMobile: _userDashboardProgressBarMobile.default,
  userDashboardProgressBarTablet: _userDashboardProgressBarTablet.default,
  userDashboardProgressRingDesktop: _userDashboardProgressRingDesktop.default,
  userDashboardProgressRingMobile: _userDashboardProgressRingMobile.default,
  userDashboardProgressRingTablet: _userDashboardProgressRingTablet.default,
  userDashboardWorkflowCardDesktop: _userDashboardWorkflowCardDesktop.default,
  userDashboardWorkflowCardMobile: _userDashboardWorkflowCardMobile.default,
  userDashboardWorkflowCardTablet: _userDashboardWorkflowCardTablet.default,
  userDashboardWorkflowRecommendDesktop:
    _userDashboardWorkflowRecommendDesktop.default,
  userDashboardWorkflowRecommendMobile:
    _userDashboardWorkflowRecommendMobile.default,
  userDashboardWorkflowRecommendTablet:
    _userDashboardWorkflowRecommendTablet.default,
  userDashboardCompleteProfileDesktop:
    _userDashboardCompleteProfileDesktop.default,
  userDashboardCompleteProfileMobile:
    _userDashboardCompleteProfileMobile.default,
  userDashboardCompleteProfileTablet:
    _userDashboardCompleteProfileTablet.default,
  userDashboardViewAllDesktop: _userDashboardViewAllDesktop.default,
  userDashboardViewAllMobile: _userDashboardViewAllMobile.default,
  userDashboardViewAllTablet: _userDashboardViewAllTablet.default,
  featuredTemplate: _featuredTemplate.default,
  templateLibraryWorkflowSidepeekTopInformation:
    templateLibraryWorkflowSidepeekTopInformation.default,
  templateLibraryWorkflowSidepeekRow:
    templateLibraryWorkflowSidepeekRow.default,
  requestContentProcessesRow: requestContentProcessesRow.default,
  requestContentSearchRow: requestContentSearchRow.default,
  externalImpactTopMetric: externalImpactTopMetric.default,
  tableFullRow: tableFullRow.default,
  workforceListItem: _workforceListItem.default,
  workforceMemberCard: _workforceMemberCard.default,
  workforceTags: _workforceTags.default,
  workforceDescription: _workforceDescription.default,
};
exports.default = _default;
