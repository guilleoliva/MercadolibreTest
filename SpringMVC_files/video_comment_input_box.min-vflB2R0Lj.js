define(["require","exports","tslib","external/react","external/classnames","external/spectrum/checkbox","modules/clean/react/css","modules/clean/video_annotations_prototype/video_annotation_prototype_helper","modules/clean/video_annotations_prototype/video_preview_event_emitter","modules/clean/video_annotations_prototype/constants","modules/clean/video_annotations_prototype/components/notify_hint","modules/clean/video_annotations_prototype/components/base_comment_input","modules/clean/react/file_viewer/coach_mark","modules/clean/react/title_bubble"],function(e,t,o,n,i,a,c,s,r,d,m,l,p,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var h=s.VideoAnnotationPrototypeHelper.unitConvertSecondsToDomainObjectTime,v=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={text:"",frameTime:0,includeTimecode:!0},t.handleVideoToggled=function(e,o){t.setState({frameTime:e,videoLength:o})},t.handleVideoTimeUpdated=function(e,o){t.setState({frameTime:e,videoLength:o})},t.handlePostClick=function(){var e=t.state,o=e.text,n=e.frameTime,i=e.includeTimecode,a=t.props,c=a.user,s=a.addComment;if(c&&null!=n&&s){s({comment_text:o,comment_metadata:{frame_time:i?h(n):-1}})}},t.onCheckboxToggle=function(e){t.setState({includeTimecode:"checked"===e})},t.handleChange=function(e){r.videoPreviewEventEmitter.emit(d.EventTypes.PAUSE),t.setState({text:e})},t.onInputBoxClicked=function(){r.videoPreviewEventEmitter.emit(d.EventTypes.PAUSE)},t.onCoachmarkClose=function(){var e=t.props.onCoachmarkClose;e&&e()},t}return o.__extends(t,e),t.prototype.componentDidMount=function(){r.videoPreviewEventEmitter.addListener(d.EventTypes.VIDEO_TOGGLED,this.handleVideoToggled),r.videoPreviewEventEmitter.addListener(d.EventTypes.VIDEO_TIME_UPDATED,this.handleVideoTimeUpdated)},t.prototype.componentWillUnmount=function(){r.videoPreviewEventEmitter.removeListener(d.EventTypes.VIDEO_TOGGLED,this.handleVideoToggled),r.videoPreviewEventEmitter.removeListener(d.EventTypes.VIDEO_TIME_UPDATED,this.handleVideoTimeUpdated)},t.prototype.render=function(){var e=this.state,t=e.text,o=e.frameTime,c=e.videoLength,r=e.includeTimecode,d=this.props,h=d.ownersToNotify,v=void 0===h?[]:h,T=d.renderCoachmark,E=d.user,_=r?"checked":"unchecked",C=i("time-button-wrapper",{disabled:!r}),f=!(!t.length||!v.length);return n.createElement("div",{className:"comment-card-container"},n.createElement("div",{className:"comment-card"},n.createElement(l.BaseCommentInput,{placeholderText:"Write a comment",text:t,user:E,onChange:this.handleChange,onClick:this.onInputBoxClicked,onSubmit:this.handlePostClick},n.createElement("div",{className:C},n.createElement("div",{className:"c-coach-mark__container"},T&&n.createElement(p.CoachMark,{title:"Target your feedback",buttonText:"Got it",arrowPosition:"top",showClose:!0,onButtonClick:this.onCoachmarkClose,onCloseButtonClick:this.onCoachmarkClose},"Adding time codes to comments keeps feedback simple, organized, and all in one place."),n.createElement(u.TitleBubble,{content:r?"Remove Time Code":"Add Time Code",position:u.TitleBubble.POSITIONS.TOP,isTargetPositionFixed:!0},n.createElement(a.Checkbox,{className:"time-checkbox",checked:_,onChange:this.onCheckboxToggle}))),n.createElement("span",{className:"time"},s.VideoAnnotationPrototypeHelper.secondsToTimeString(o,c))))),f&&n.createElement(m.NotifyHint,{usersToNotify:v}))},t})(n.Component),T=c(v,["/static/css/video_annotation_prototype-vflTNW3Fa.css","/static/css/coach_mark.css"]);t.VideoCommentInputBox=T});
//# sourceMappingURL=video_comment_input_box.min.js-vflnmT3fG.map