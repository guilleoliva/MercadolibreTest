define(["require","exports","modules/clean/comments/models/comment","modules/clean/comments/store"],function(e,t,n,i){"use strict";function o(e,t){if(e.stickerId||t){var o=t?i.state.activity.latest_revision:null,a=t?t.toMetadataDict():null;return new n.CommentMetadata({revision:o,annotation:a,sticker_id:e.stickerId})}return null}Object.defineProperty(t,"__esModule",{value:!0}),t.buildCommentMetadata=o});
//# sourceMappingURL=action_creators_helpers.min.js-vflpn6BTe.map