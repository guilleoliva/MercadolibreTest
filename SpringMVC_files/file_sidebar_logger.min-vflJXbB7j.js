define(["require","exports","modules/clean/ajax","modules/clean/viewer","modules/clean/api_v2/client","modules/clean/react/file_viewer/models"],function(e,i,n,t,s,r){"use strict";function l(e,i){var t=r.FileViewerSession.currentSession,s=r.FilePreviewSession.currentSession;if(s&&t){var l={event_name:e,file_viewer_session_id:t.id,file_preview_session_id:s.id,file_ns_id:s.file.ns_id,file_sjid:s.file.sjid,extra:JSON.stringify(i)};n.SilentBackgroundRequest({url:"/log/file_sidebar",data:l})}}function a(e){l("sidebar_tab_selected",e)}function d(e){l("sidebar_opened",e)}function _(e){l("sidebar_closed",e)}function o(e){l("file_view_activity_expanded",e)}function c(e,i){var n=t.Viewer.get_viewer().get_user_ids()[0];(new s.ApiV2Client).ns("file_activity_stream").rpc("log_event",{event:"get_stream_timing",int_value:e,bool_value:i},{subjectUserId:n})}function u(e){var i=t.Viewer.get_viewer().get_user_ids()[0];(new s.ApiV2Client).ns("file_activity_stream").rpc("log_event",{event:"load_sidebar_timing",int_value:e},{subjectUserId:i})}Object.defineProperty(i,"__esModule",{value:!0}),i.logSidebarTabSelected=a,i.logSidebarOpened=d,i.logSidebarClosed=_,i.logFileViewActivityCardExpanded=o,i.logGetActivityStreamTiming=c,i.logLoadSidebarTiming=u});
//# sourceMappingURL=file_sidebar_logger.min.js-vflJpvWPm.map