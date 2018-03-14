define("modules/clean/api_v2/client",["require","exports","tslib","jquery","modules/clean/api_v2/client_base","modules/clean/api_v2/error","modules/clean/devtools/perf_hub_actions","modules/constants/debug","modules/constants/request","modules/core/cookies","modules/core/uri"],function(e,r,t,n,s,o,i,u,c,a,p){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var l=(function(e){function r(r,t){var n=e.call(this)||this;if(void 0===r&&(r="async"),"async"===r){if(void 0!==t)throw new Error("syncMode is 'async'; do not specify a syncTimeout")}else{if("syncOrServiceWorker"===r)throw new Error("syncOrServiceWorker mode not yet supported");if(void 0===t)throw new Error("syncMode is "+r+", but syncTimeout was not specified");if(t<=0)throw new Error("syncMode is "+r+", and you passed syncTimeout="+t+". syncTimeout must be a positive number")}return n.syncMode=r,n.syncTimeout=t,n}return t.__extends(r,e),r.prototype.upload=function(e,n,s,o,i){var u=r.getHeaders(e,t.__assign({"Dropbox-API-Arg":JSON.stringify(s)},i)),c=r.getRpcUriStringAndPath(n);return this.executeRpc(c.uriString,c.path,u,o,"application/octet-stream")},r.prototype._rpc=function(e,t,n){null==t&&(t=null);var s=r.getHeaders(n.subjectUserId,n.headers),o=r.getRpcUriStringAndPath(e),i=JSON.stringify(t);return this.executeRpc(o.uriString,o.path,s,i)},r.getHeaders=function(e,r){var n=a.Cookies.read("__Host-js_csrf")||"";return t.__assign({"X-Dropbox-Uid":null!=e?e:c.LOGGED_OUT_X_DROPBOX_UID,"X-CSRF-Token":n},r)},r.getRpcUriStringAndPath=function(e){var r=new p.URI({scheme:"https",authority:"www.dropbox.com",path:"/2/"+e});return u.CPROFILE_ENABLED&&r.setQuery({cProfile:u.CPROFILE_PARAMETER,parent_request_id:c.REQUEST_ID}),{uriString:r.toString(),path:r.getPath()}},r.prototype.executeRpc=function(e,r,t,n,s){switch(void 0===n&&(n=""),void 0===s&&(s="application/json"),this.syncMode){case"async":return this.executeAsyncRpc(e,r,t,n,s);case"sync":return this.executeSyncRpc(e,r,t,n,s);case"syncOrServiceWorker":throw new Error("syncOrServiceWorker mode not yet supported")}},r.prototype.executeAsyncRpc=function(e,t,s,o,i){return new Promise(function(u,c){return n.ajax({type:"POST",url:e,contentType:i,headers:s,data:o}).done(function(e,n,s){return u(r.processXHRSuccess(t,e,n,s))}).fail(function(e){return c(r.processXHRError(e))})})},r.prototype.executeSyncRpc=function(e,t,s,o,i){var u=Promise.resolve(null),c=function(e,n,s){u=Promise.resolve(r.processXHRSuccess(t,e,n,s))},a=function(e){u=Promise.reject(r.processXHRError(e))};return n.ajax({type:"POST",url:e,contentType:i,headers:s,data:o,async:!1,timeout:this.syncTimeout,success:c,error:a}),u},r.processXHRSuccess=function(e,r,t,n){return u.CPROFILE_ENABLED&&i.PerfHubActions.add_ajax_profile(n,e),null!=n.responseText?JSON.parse(n.responseText):null},r.processXHRError=function(e){return o.ApiError.parseResponse(e.status,e.getAllResponseHeaders(),e.responseText)},r})(s.ApiV2ClientBase);r.ApiV2Client=l}),define("modules/clean/api_v2/client_base",["require","exports"],function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=(function(){function e(e,r){this.ns=e,this.client=r}return e.prototype.rpc=function(e,r,t){return this.client._rpc(this.ns+"/"+e,r,t)},e})(),n=(function(){function e(){}return e})();r.ApiV2ClientBase=n,n.prototype.ns=function(e){return new t(e,this)}}),define("modules/clean/api_v2/error",["require","exports","tslib","modules/core/html","modules/core/i18n","external/lodash"],function(e,r,t,n,s,o){"use strict";function i(e){return function(r){if(r instanceof u)return e(r);throw r}}Object.defineProperty(r,"__esModule",{value:!0});var u=(function(){function e(e){this.message=e}return e.parseResponse=function(r,t,i,u){void 0===u&&(u=null);var c="";null==u&&(u=r in f?f[r]:r>=500?l:e);var a={};if(t){var p=t.split("\n").map(function(e){return e.split(": ")});a=o.zipObject(o.map(p,o.first),o.map(p,function(e){return null!=e&&e[1]}))}var d={raw:{status:r,headerString:t,responseBody:i},summary:null,error:{},headers:a};try{var y=JSON.parse(i)||{};d.error=y.error,d.summary=y.error_summary,c=null!=y.user_message?y.user_message.text:""}catch(e){}429!==r||c||(c=s._('Folder updates in progress — please try again later.\n<a href="/help/9259" target="_blank" rel="noopener">Learn more</a>'));var h=void 0;return c&&(h=new n.HTML(c)),o.assignIn(new u(h),d)},e})();r.ApiError=u;var c=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(u);r.BadRequestError=c;var a=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(u);r.AuthError=a;var p=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(u);r.AppError=p;var l=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(u);r.ServerError=l;var d=(function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(r,e),r})(u);r.RateLimitError=d,r.catchApiError=i;var f={400:c,401:a,409:p,429:d}});
//# sourceMappingURL=pkg-api_v2.min.js-vfls76LFL.map