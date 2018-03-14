define(["require","exports","external/react","modules/clean/react/file_viewer/comments_demo_actions","modules/clean/react/pass/empty_seen_state_facepile","modules/clean/react/file_viewer/mounted_file_actions","modules/clean/react/pass/seen_state_facepile_controller","modules/clean/react/file_viewer/utils","modules/clean/react/file_viewer/shared_file_actions","modules/clean/react/file_viewer/version_history_file_actions","modules/core/browser"],function(e,s,i,n,t,o,r,a,l,c,u){"use strict";function d(e){var s=e.file,n=e.isSeenStatesEnabled,o=e.isVersionHistoryMode,a=e.isViewMetadataDisabled,l=e.sharedLinkInfo,c=e.sizeClass,u=e.user;return!n||o||null===s.ns_id?i.createElement(t.EmptySeenStateFacepile,null):i.createElement(r.SeenStateFacepileController,{file:s,fromBrowse:!1,isViewMetadataDisabled:a,sharedLinkInfo:l,sizeClass:c,user:u})}function f(e){var s=e.canRestoreRevision,t=e.file,r=e.isDemoMode,d=e.isSharedFile,f=e.isVersionHistoryMode,m=e.onRestoreRevision,p=e.sharedLinkInfo,h=e.sharePermissions,v=e.shareToken,y=e.shouldDisplayActionButtons,A=e.sizeClass,w=e.user;if(r)return i.createElement(n.CommentsDemoActions,{file:t,sizeClass:A});if(d){var S=!(!t.open_in_app_data||!t.preview_type);return u.is_tablet()&&(S=S&&!a.renderOpenInAppAsBanner()),i.createElement(l.SharedFileActions,{file:t,sharedLinkInfo:p,sharePermissions:h,shareToken:v,shouldDisplayActionButtons:y,showOpenInAppButton:S,sizeClass:A,user:w})}return f?i.createElement(c.VersionHistoryFileActions,{canRestoreRevision:!!s,file:t,onRestoreRevision:m||_,shouldDisplayActionButtons:y,user:w}):i.createElement(o.MountedFileActions,{file:t,sizeClass:A,shouldDisplayActionButtons:y,user:w})}Object.defineProperty(s,"__esModule",{value:!0}),s.SeenStates=d;var _=function(){};s.FileActions=f});
//# sourceMappingURL=controls.min.js-vflj75NXE.map