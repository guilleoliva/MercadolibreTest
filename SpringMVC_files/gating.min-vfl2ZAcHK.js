define(["require","exports","tslib","modules/clean/ajax"],function(e,t,r,i){"use strict";function n(e,t,n){return void 0===n&&(n={}),r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(o){return[2,i.SilentBackgroundRequest(r.__assign({url:"/growth/gating_check",subject_user:e.id,data:{experiment:t}},n)).then(function(e){return JSON.parse(e)})]})})}function o(e,t,i){return void 0===i&&(i={}),r.__awaiter(this,void 0,void 0,function(){return r.__generator(this,function(r){return"personal"!==e.role||e.paid?[2,Promise.resolve(a)]:[2,n(e,t,i)]})})}Object.defineProperty(t,"__esModule",{value:!0});var a={is_active:!1,variant:"OFF"};t.growthCheckGating=n,t.growthCheckBasicUserGating=o});
//# sourceMappingURL=gating.min.js-vflSHxS_T.map