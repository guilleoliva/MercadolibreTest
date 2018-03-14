define("modules/clean/legacy_pyxl_controllers/tooltip",["require","exports","tslib","external/lodash","modules/core/controller_helpers","modules/clean/analytics","jquery"],function(t,e,o,i,s,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=[],u=(function(){function t(t,e,o,n,r){this.$wrapper=t,this.prompt=this.$wrapper.find(".tooltip-prompt"),this.tooltip=this.$wrapper.find(".tooltip-tooltip"),this.hover_target=this.find_hover_target(),this.hover_log_event_name=r,this.position_global=e,this.tooltip_location=o,this.listen();var u=s.clone_element(this.tooltip).appendTo("body");u.css({position:"static",display:"inline-block"});var a=n||500,l=u.width()+1;if(l>a&&(l=a),this.tooltip.css({width:l,position:"absolute",display:"none"}),u.remove(),this.position_global&&this.tooltip.remove().appendTo("body"),this.is_focusable()){var c=i.uniqueId("tooltip-tooltip-");this.tooltip.attr({role:"tooltip",id:c}),this.hover_target.attr({tabindex:0,"aria-describedby":c})}}return t.initClass=function(){this.prototype.tooltip_shown=!1,this.prototype.position_global=!1},t.prototype.listen=function(){var t=this;return(function(){for(var e=[],o=0,i=[t.hover_target,t.tooltip];o<i.length;o++){var s=i[o];s.mouseenter(function(){return clearTimeout(t.tooltip.data("timeout_id")),t.show_tooltip()}),s.mouseleave(function(){var e=setTimeout(function(){return t.hide_tooltip()},200);return t.tooltip.data("timeout_id",e)}),t.is_focusable()?(s.focusin(function(){return clearTimeout(t.tooltip.data("timeout_id")),t.show_tooltip()}),e.push(s.focusout(function(){var e=setTimeout(function(){return t.hide_tooltip()},200);return t.tooltip.data("timeout_id",e)}))):e.push(void 0)}return e})()},t.prototype.find_hover_target=function(){return this.prompt},t.prototype.is_focusable=function(){return!1},t.prototype.show_tooltip=function(t){var e,o,i,s;if(!this.tooltip_shown){i=this.position_global?this.hover_target.offset():this.hover_target.position();for(var u=0,a=Array.from(r);u<a.length;u++){a[u].hide_tooltip()}return r.push(this),"top"===this.tooltip_location?(s=i.top-this.tooltip.outerHeight()-this.hover_target.height()/2,o=i.left-this.tooltip.outerWidth()/2,e={top:"-=7"}):"left"===this.tooltip_location?(s=i.top-this.tooltip.outerHeight()/2+this.hover_target.outerHeight()/2,o=i.left-this.tooltip.outerWidth()-2,e={left:"-=7"}):"bottom"===this.tooltip_location?(s=i.top+this.hover_target.outerHeight(),o=i.left-this.tooltip.outerWidth()/2+this.hover_target.outerWidth()/2,e={top:"+=7"}):(s=i.top-this.tooltip.outerHeight()/2+this.hover_target.outerHeight()/2,o=i.left+this.hover_target.width()+2,e={left:"+=7"}),this.tooltip.css({top:s,left:o}).show().animate(e,50),this.hover_log_event_name&&n.TeamsWebActionsLogger.log(this.hover_log_event_name),this.tooltip_shown=!0}},t.prototype.hide_tooltip=function(){if(this.tooltip_shown){clearTimeout(this.tooltip.data("timeout_id")),this.tooltip.hide(),this.tooltip_shown=!1;var t=r.indexOf(this);return t!==-1?r.splice(t,1):void 0}},t})();e.DBTooltip=u,u.initClass();var a=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o.__extends(e,t),e.prototype.find_hover_target=function(){return this.prompt.find(".sprite")},e.prototype.is_focusable=function(){return!0},e})(u);e.InfoTooltip=a}),define("modules/clean/legacy_ui_button",["require","exports","jquery"],function(t,e,o){"use strict";return function(){var t=o(document);return o(document).on("mouseover.ui-button",".ui-button",function(){return o(this).addClass("over")}).on("mouseout.ui-button",".ui-button",function(){return o(this).removeClass("over")}).on("mousedown.ui-button",".ui-button",function(){return o(this).addClass("down")}).on("click.ui-button",".ui-button",function(){var e=o(this);return e.hasClass("ui-button-dropdown")&&(e.hasClass("active")?t.trigger("dropdownClosed",[1]):t.trigger("dropdownOpened",[1])),e.toggleClass("active")}),t.on("click.ui-button",function(e){var i=o(e.target),s=i.closest(".ui-button.active"),n=0;o(".ui-button.active").not(s).each(function(){var t=o(this);t.hasClass("active")&&t.hasClass("ui-button-dropdown")&&(n+=1),t.removeClass("active")}),t.trigger("dropdownClosed",[n])}).on("mouseup.ui-button",function(){return o(".ui-button.down").removeClass("down")})}}),define("modules/clean/marketing_tracker",["require","exports","modules/core/exception"],function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(function(){function t(){var e=this;this.push=function(i){var s=i.dataLayer;return e.src=i.src,o.assert(!!e.src,"MarketingTracker.push requires src"),t.el||(t.el=e.load(e.src)),!t.ready&&t.el?t.el.addEventListener("load",function(){if(t.ready=!0,t&&t.el)return t.el.contentWindow.postMessage(s,"https://marketing.dropbox.com")}):t.el.contentWindow.postMessage(s,"https://marketing.dropbox.com"),e},this.load=function(t){var e=document.createElement("iframe");return e.style.display="none",e.hidden=!0,e.src=t,e.setAttribute("sandbox","allow-scripts allow-same-origin"),document.body.appendChild(e),e},t.el=null,t.ready=!1}return t.ready=!1,t})();e.MarketingTracker=new i}),define("modules/clean/photos/legacy_thumb_loader",["require","exports","jquery","modules/clean/photos/batch_thumb_loader","modules/clean/sprite"],function(t,e,o,i,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LegacyBatchThumbLoader={MAX_THUMB_BATCH_REQUESTS:24,batch_load_thumbs:function(t,e,n,r){for(var u=o.grep(t,function(t){return o(t).data("src")}),a={},l=0,c=u;l<c.length;l++){var h=c[l],_=String(o(h).data("src"));a[_]||(a[_]=[]),a[_].push(h)}this.instance?this.instance.reset({batch_size:e,batch_logger:r}):this.instance=new i.BatchThumbLoader({batch_size:e,max_parallel_requests:this.MAX_THUMB_BATCH_REQUESTS,on_batch:function(t){for(var e=0,i=t;e<i.length;e++){var s=i[e],n=[],r=o(a[s]);r.data("src",null),n.push(r.data("loading-src",s))}},batch_logger:r});for(var p=0,d=u;p<d.length;p++){var f=d[p],g=o(f),v=g.data("src");this.instance.queue_thumb(v,function(t,e,o,i){if(i||e.data("loading-src")){if(e.data("loading-src",null),0===o.indexOf("data:image"))return e.attr("src",o),"function"==typeof n?n(e[0]):void 0;e.error(function(){return e.attr("src",e.data("fail-src")||s.SPACER)}),e.load(function(){return"function"==typeof n?n(e[0]):void 0}),e.attr("src",o)}}.bind(this,v,g))}return this.instance.flush(),u.length},clear_all_pending_batches:function(){this.instance&&this.instance.clear()}}}),define("modules/clean/shared_link_error",["require","exports","jquery","modules/clean/ajax"],function(t,e,o,i){"use strict";var s;return s=(function(){var t=void 0;return s=(function(){function e(){o("#broken-share-article").on("click",function(){return i.WebRequest({url:"/shared_link_error_log",data:{evt:t}})})}return e.initClass=function(){t="click-sharing-article"},e})(),s.initClass(),s})()}),define("modules/clean/sso_login_checks",["require","exports","modules/clean/ajax"],function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(function(){function t(t,e,o,i){void 0===i&&(i=!0),this._trigger_check_sso_state=this._trigger_check_sso_state.bind(this),this.check_sso_state=this.check_sso_state.bind(this),this.$email_input=t,this.show_sso_fn=e,this.hide_sso_fn=o,this.should_trigger_check=i,this.should_trigger_check&&(this._trigger_check_sso_state(),this.$email_input.on("input keyup change",this._trigger_check_sso_state))}return t.initClass=function(){this._sso_check_in_flight={},this._sso_check_cache={}},t.prototype._trigger_check_sso_state=function(){var t=this.$email_input.val();return this.check_sso_state(t)},t.prototype.check_sso_state=function(e){var i=this,s=e.trim();if(!s.match(/^[^@\s]+@[^@\s]+\.[A-Za-z]{2,}$/))return this.hide_sso_fn();var n=s.toLowerCase();return n in t._sso_check_cache?this._handle_sso_state(t._sso_check_cache[n]):t._sso_check_in_flight[n]?void 0:(t._sso_check_in_flight[n]=!0,o.WebRequest({url:"/sso_state",data:{email:s},success:function(o){return o=JSON.parse(o),delete t._sso_check_in_flight[n],t._sso_check_cache[n]=o.user_sso_state,i.should_trigger_check&&i.$email_input.val()!==e?i._trigger_check_sso_state():i._handle_sso_state(o.user_sso_state)},error:function(){return delete t._sso_check_in_flight[n],i.hide_sso_fn()}}))},t.prototype._handle_sso_state=function(t){return"required"===t?this.show_sso_fn(!1):"optional"===t?this.show_sso_fn(!0):this.hide_sso_fn()},t})();e.SsoLoginChecks=i,i.initClass()}),define("modules/clean/upsell/header_bubble_or_link",["require","exports","tslib","modules/clean/header_bubble","modules/clean/upsell/exception","modules/clean/upsell/upsell_controller"],function(t,e,o,i,s,n){"use strict";return(function(t){function e(e,o){var i=this;try{new n(e.find(".confirm-button"),e.find(".dismiss-button"),o).log_impression(),i=t.call(this,e,o)||this}catch(t){s.reportJsControllerException({err:t,js_controller_options:o})}return i.$el=e,i}return o.__extends(e,t),e})(i)}),define("modules/core/ordered_dictionary",["require","exports"],function(t,e){"use strict";var o=(function(){function t(t,e){this.list=t,this.dict=e}return t.initClass=function(){this.list=[],this.dict={}},t.prototype.push=function(t,e){this.list.push(t),this.dict[t]=e},t.prototype.remove=function(t){this.list.removeItem(t),delete this.dict[t]},t.prototype.indexOfKey=function(t){return this.list.indexOf(t)},t.prototype.keyAtIndex=function(t){return this.list[t]},t.prototype.valueFromKey=function(t){return this.dict[t]},t.prototype.valueAtIndex=function(t){return this.dict[this.list[t]]},t.prototype.getValues=function(){var t=this;return Array.from(this.list).map(function(e){return t.dict[e]})},t.prototype.length=function(){return this.list.length},t.prototype.insertAtIndex=function(t,e,o){return this.list.splice(t,0,e),this.dict[e]=o},t})();return o.initClass(),o});
//# sourceMappingURL=pkg-legacy-ab.min.js-vflktcbS4.map