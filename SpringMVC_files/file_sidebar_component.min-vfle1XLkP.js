define(["require","exports","tslib","external/react","modules/core/i18n","modules/clean/react/css","modules/clean/react/file_sidebar/file_sidebar_base","modules/clean/file_activity/clients/file_activity_data_source","modules/clean/react/file_sidebar/store/app/actions","modules/clean/react/file_sidebar/store/sidebar/helpers","modules/clean/react/file_sidebar/store/sidebar/actions","modules/clean/react/file_sidebar/store/sidebar/selectors","modules/clean/react/file_sidebar/store/file_activity/actions","modules/clean/react/file_sidebar/store/file_activity/selectors","modules/clean/react/file_sidebar/file_sidebar_connect","modules/clean/react/file_sidebar/comments_wrapper_component","modules/clean/react/file_activity_stream/file_activity_stream","modules/clean/react/file_sidebar/file_sidebar_logger","modules/clean/video_annotations_prototype/video_annotation_wrapper_component","modules/clean/video_annotations_prototype/video_annotation_prototype_helper"],function(e,t,i,o,n,s,r,a,c,l,d,m,p,u,h,_,f,y,b,v){"use strict";function C(e){return{activityContext:e.activityContext,hideComments:e.hideComments,shouldInitiallyFocusInput:e.shouldInitiallyFocusInput,currentFile:e.currentFile,sharedLinkInfo:e.sharedLinkInfo,user:e.user}}function F(e){return i.__assign({},m.getSidebarState(e),{fileActivityCount:u.getVisibleActivityCount(e),tabs:m.getTabsState(e),isVideoAnnotationPermissionDenied:m.getIsVideoAnnotationPermissionDenied(e),isVideoAnnotationPermissionFetchComplete:m.getIsVideoAnnotationsPermissionFetchComplete(e)})}Object.defineProperty(t,"__esModule",{value:!0});var S=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.notifyStore=function(e){t.props.dispatch(d.openFile({file:e.currentFile,isVersionHistoryMode:e.isVersionHistoryMode,user:e.user})),e.user&&t.props.dispatch(p.getActivityStream(e.user.id,e.currentFile))},t.onSelectTab=function(e){var i=t.props,o=i.dispatch,n=i.fileActivityCount,s=i.tabs.comments,r=i.user;o(d.selectTab(e)),y.logSidebarTabSelected({selected_tab:e,num_comments:s.extra.commentCount,num_events:n,viewing_user_id:r?r.id:null})},t}return i.__extends(t,e),t.prototype.componentWillMount=function(){a.initInstance();var e=this.props,t=e.dispatch,i=e.hideComments,o=e.hidePageChrome;t(c.setState({hideComments:i,hidePageChrome:o}))},t.prototype.componentDidMount=function(){this.notifyStore(this.props)},t.prototype.componentWillReceiveProps=function(e){var t={file:this.props.currentFile,isVersionHistoryMode:this.props.isVersionHistoryMode,user:this.props.user},i={file:e.currentFile,isVersionHistoryMode:e.isVersionHistoryMode,user:e.user};l.isContextChanged(t,i)&&this.notifyStore(e)},t.prototype.componentWillUnmount=function(){this.props.dispatch(p.reset()),this.props.dispatch(d.reset())},t.prototype.renderCommentsTab=function(){var e=this.props,t=e.isVideoAnnotationPermissionDenied,s=e.isVideoAnnotationPermissionFetchComplete,a=e.currentFile,c=e.activityContext,l=e.sharedLinkInfo,d=e.user;if(v.VideoAnnotationPrototypeHelper.shouldTryToShowVideoPrototype(a)&&!t)return o.createElement(r.FileSidebarBase.Tab,{key:"comments",name:n._("Comments"),count:0},o.createElement(b.VideoAnnotationWrapperComponent,{activityContext:c,currentFile:a,sharedLinkInfo:l,user:d,shouldShowComments:s}));var m=C(i.__assign({},this.props,{hideComments:!1,hideCommentsOverride:!1}));return o.createElement(r.FileSidebarBase.Tab,{key:"comments",name:n._("Comments"),count:this.props.tabs.comments.count},o.createElement(_.CommentsWrapperComponent,i.__assign({},m)))},t.prototype.renderFileActivityTab=function(){var e=this.props,t=e.currentFile,i=e.user;return o.createElement(r.FileSidebarBase.Tab,{key:"activity",name:n._("Activity")},o.createElement(f.FileActivityStream,{file:t,user:i}))},t.prototype.render=function(){var e=this.props,t=e.activeTab,i=e.open,n=e.ready,s=e.tabs,a=s.comments,c=s.activity,l=[a.show?this.renderCommentsTab():null,c.show?this.renderFileActivityTab():null].filter(function(e){return e});return 0===l.length?o.createElement("div",{className:"file-sidebar"}):o.createElement(r.FileSidebarBase,{activeTabKey:t,isOpen:n&&i,onSelectTab:this.onSelectTab,headerComponent:this.props.headerComponent},l)},t})(o.Component);t.FileSidebar=s(h.fileSidebarConnect(F)(S),["/static/css/file-sidebar-vflLgvyP1.css"])});
//# sourceMappingURL=file_sidebar_component.min.js-vfllZKS-t.map