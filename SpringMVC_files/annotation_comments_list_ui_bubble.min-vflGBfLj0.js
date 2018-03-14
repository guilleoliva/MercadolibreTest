define(["require","exports","external/classnames","external/create-react-class","external/react","external/react-dom","external/react-dom-factories","external/prop-types","external/react-addons-pure-render-mixin","jquery","modules/clean/comments/components/ui_constants","modules/clean/comments/lib/click_outside","modules/clean/datetime","modules/clean/react/file_comments/conversation_or_input_card","modules/clean/activity/activity_user","modules/clean/keycode"],function(t,e,n,o,i,s,r,a,u,c,l,p,d,m){"use strict";function h(t,e){return void 0!==t&&null!==t?e(t):void 0}return o({displayName:"AnnotationCommentsListUIBubble",mixins:[u],propTypes:{user:a.object,activity:a.object,x:a.number.isRequired,y:a.number.isRequired,annotation:a.object,commentActivity:a.object,position:a.string,maxHeight:a.number,replyText:a.string,onMouseEnter:a.func,onMouseLeave:a.func,onConversationExpand:a.func,actionCreators:a.object.isRequired,isDemoMode:a.bool},getDefaultProps:function(){return{maxHeight:l.DEFAULT_ANNOTATION_COMMENT_INPUT_MAX_HEIGHT,isDemoMode:!1}},getInitialState:function(){return{button_disabled:!0,show_post_button:!1,initial_text:""}},onConversationExpand:function(){return this._scrollToBottom(),"function"==typeof this.props.onConversationExpand?this.props.onConversationExpand():void 0},onReplyInputBlur:function(){return this.props.actionCreators.updateAnnotationReplyFocused(!1)},onReplyInputFocus:function(){return this.props.actionCreators.updateAnnotationReplyFocused(!0)},_handleOutsideClick:function(t){return this.props.actionCreators.hideAnnotationConversation()},onCancelComment:function(){return this.props.actionCreators.cancelAnnotationComment()},onAddReply:function(t,e){return this.props.actionCreators.addReply({targetActivityKey:e.activity_key,body:{text:t}})},_getReplyCommentInput:function(){return h(null!=this.refs.conversationCard?this.refs.conversationCard.refs.threadedCommentActivityUI:void 0,function(t){return t.refs.commentInput})},_getRawReplyInput:function(){return h(this._getReplyCommentInput(),function(t){return t.getRawCommentInput()})||""},_saveReplyDraft:function(){var t,e=this._getRawReplyInput();return t=e.length>0&&e!==h(this._getReplyCommentInput(),function(t){return t.getPlaceholderText()})?e:null,this.props.actionCreators.updateAnnotationReplyText({activityKey:this.props.commentActivity.activity_key,text:t})},_getRevisionDateTime:function(){var t=this._getRevision();if(null!=t.when&&!isNaN(new Date(null!=t.when)))return""+d.ago(new Date(1e3*t.when))},_getRevision:function(){return this.props.commentActivity.comment.comment_metadata.revision},_isOnOldRevision:function(){return!1},_scrollToBottom:function(){var t=s.findDOMNode(this.refs.annotationBubbleField);return c(t).animate({scrollTop:t.scrollHeight},{duration:300})},_renderConversation:function(){var t={ref:"threadedCommentActivityUI",key:"annotation_bubble_threaded_"+this.props.commentActivity.activity_key,activity:this.props.activity,commentActivity:this.props.commentActivity,user:this.props.user,shouldUseSimpleModals:!1,shouldHidePhotoAvatars:!1,shouldAutoLinkify:!0,shouldShowPostText:!0,onReplyInputFocus:this.onReplyInputFocus,onReplyInputBlur:this.onReplyInputBlur,replyText:this.props.replyText,onCommentExpanded:this.onConversationExpand,isInAnnotationBubble:!0,onCancelComment:this.onCancelComment,onInputChange:this._saveReplyDraft,onAddComment:this.onAddReply};return i.createElement(m.ConversationCard,{ref:"conversationCard",shouldInitiallyShowNotifyHint:!1,initialUsersToNotify:null!=this.props.commentActivity?this.props.commentActivity.users_to_notify:void 0,commentProps:t,actionCreators:this.props.actionCreators,isDemoMode:this.props.isDemoMode})},_renderComments:function(){var t={"comments-holder":!0},e={maxHeight:this.props.maxHeight};return r.div({className:"annotation-bubble__field",ref:"annotationBubbleField",style:e},this._isOnOldRevision()?r.div({className:"annotation-bubble__field__old-revision"},"On older revision, updated "+this._getRevisionDateTime()):void 0,r.div({className:n(t)},r.div({className:"comment-list"},this._renderConversation())))},render:function(){var t={"annotation-bubble-container":!0,"annotation-bubble-invisible-border":!0},e={left:this.props.x-25};return this.props.position.indexOf("bottom")>=0?e.bottom=this.props.y-25:e.top=this.props.y-25,i.createElement(p.ClickOutside,{onClickOutside:this._handleOutsideClick},r.div({onMouseOver:this.onMouseOver,onMouseLeave:this.props.onMouseLeave,onMouseEnter:this.props.onMouseEnter,className:n(t),style:e},r.div({className:"annotation-bubble bubble-dropdown "+this.props.position},this._renderComments(),r.div({className:"bubble-arrow-border"}),r.div({className:"bubble-arrow"}))))}})});
//# sourceMappingURL=annotation_comments_list_ui_bubble.min.js-vflQdaFK7.map