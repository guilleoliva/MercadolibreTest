define("modules/clean/profile_services/auth_callback_handler",["require","exports","modules/core/browser","modules/core/notify","modules/core/uri","modules/clean/ajax","modules/core/i18n"],function(e,r,t,i,o,s,n){"use strict";function c(e,r,t){e.success&&e.user_id?_(r.loginCont||"/"):e.success?u({emailSig:e.email_sig,refreshToken:e.refresh_token,profile:e.profile},r,t):p({errMsg:e.err_msg,rememberMe:e.remember_me,pairUser:e.pair_user,profile:e.profile,emailSig:e.email_sig,refreshToken:e.refresh_token},r.loginCont||"/",t)}function a(e,r){if(e.success)i.Notify.success(n._("Log in successful!")),s.SilentBackgroundRequest({url:"/profile_services/log",data:{event_name:"login_callback_success",value:"success"}}),r.onSuccess(),r.redirectOnSuccess&&t.redirect(r.cont);else if(s.SilentBackgroundRequest({url:"/profile_services/log",data:{event_name:"login_callback_error",value:e.err_msg}}),"access_denied"===e.err_msg)i.Notify.error(n._("You need to accept Google’s request in order to log in."));else if("emails_do_not_match"===e.err_msg)i.Notify.error(n._("We couldn’t find a Dropbox account matching that email."));else if("google_login_not_allowed"===e.err_msg)i.Notify.error(n._("Google sign in is disabled. Sign in with your Dropbox password or ask your                      Dropbox admin for help."));else if("sso_required"===e.err_msg)i.Notify.error(n._("Your team has single sign-on. Sign in with your Dropbox password or ask your                      Dropbox admin for help."));else if("tfa_required"===e.err_msg){var c=new o.URI({path:"/verify_code",query:{cont:r.cont,remember_me:String(e.remember_me),pair_user:String(e.pair_user)}}).toString();t.redirect(c)}else if("disabled_account"===e.err_msg)i.Notify.error(n._("This account is disabled."));else if("invalid_pair_target"===e.err_msg)i.Notify.error(n._("That account can’t be paired. Paired account must be a personal account."));else if("already_paired"===e.err_msg)i.Notify.error(n._("That account is already paired to another account."));else if("error_pairing"===e.err_msg)i.Notify.error(n._("There was an error pairing."));else if("not_verified"===e.err_msg){var c=new o.URI({path:"/show_password_form",query:{cont:r.cont,remember_me:String(e.remember_me),pair_user:String(e.pair_user)}}).toString();t.redirect(c)}else i.Notify.error(n._("We couldn’t log you in with Google.  Try again?"))}function _(e){t.redirect(e)}function u(e,r,i){var s={fname:e.profile.given_name,lname:e.profile.family_name,email:e.profile.email,picture_url:e.profile.picture_url,email_sig:e.emailSig,refresh_token:e.refreshToken,cont:r.registerCont,signup_tag:r.signupTag};null!=r.k&&(s.k=r.k),null!=r.eh&&(s.eh=r.eh),null!=r.signupEndpoint&&(s.signup_endpoint=r.signupEndpoint),i&&d(i.form,i.newAccount,s),r.canRedirect&&t.redirect(new o.URI({path:"/third_party_signup",query:s}).toString())}function l(e,r){e.success?(i.Notify.success(n._("Successfully connected your Google Calendar")),r.onSuccess()):i.Notify.error(n._("Couldn’t connect your Google Calendar"))}function d(e,r,t){e.trigger(r,t)}function p(e,r,s){if("tfa_required"===e.errMsg){var c={cont:r};null!=e.pairUser&&(c.pair_user=e.pairUser.toString()),null!=e.rememberMe&&(c.remember_me=e.rememberMe.toString()),t.redirect(new o.URI({path:"/verify_code",query:c}).toString())}else if("sso_required"===e.errMsg){var c={email:e.profile.email,cont:r};t.redirect(new o.URI({path:"/login",query:c}).toString())}else"user_exists"===e.errMsg?(s&&d(s.form,s.userExists,{focus:"input[name=login_password]",prefill:{".login-email":e.profile.email,"input[type='hidden'][name=refresh_token]":e.refreshToken,"input[type='hidden'][name=email_sig]":e.emailSig}}),i.Notify.error(n._("This email address is already taken. Please sign in."))):i.Notify.error(n._("Unable to link to Google. Please refresh the page to try again."))}Object.defineProperty(r,"__esModule",{value:!0}),r.handleRegisterResponse=c,r.handleLoginResponse=a,r.handleCalendarLinkResponse=l}),define("modules/clean/profile_services/popup_handler",["require","exports","external/lodash"],function(e,r,t){"use strict";function i(e){var r=t.uniqueId(),i=function(r){var t;try{t=JSON.parse(r.data)}catch(e){return}t&&"db:profile_service:auth_complete"===t.type&&e(t.payload)};return window.addEventListener("message",i),s[r]=i,r}function o(e){var r=s[e];r&&(delete s[e],window.removeEventListener("message",r))}Object.defineProperty(r,"__esModule",{value:!0});var s={};r.addAuthCompleteListener=i,r.removeAuthCompleteListener=o}),define("modules/clean/profile_services/profile_services_constants",["require","exports","modules/core/exception","modules/core/i18n"],function(e,r,t,i){"use strict";return{GOOGLE:"1",YAHOO:"2",FACEBOOK:"3",TWITTER:"4",YAHOO_LEGACY:"5",MOBILE:"6",OUTLOOK:"7",SLACK:"8",NEVER_CONNECTED:0,WAS_CONNECTED:1,IS_CONNECTED:2,VARIOUS:"-1",NONE:"-2",services:function(){return[this.GOOGLE,this.YAHOO,this.FACEBOOK,this.TWITTER,this.YAHOO_LEGACY,this.OUTLOOK,this.SLACK]},importable_contact_services:function(){return[this.GOOGLE,this.YAHOO]},to_img:function(e){switch(e){case this.GOOGLE:return["/static/images/contacts/import_icon_gmail-vflFQwVYO.png","/static/images/contacts/import_icon_gmail@2x-vflO2fTFE.png"];case this.YAHOO:case this.YAHOO_LEGACY:return["/static/images/contacts/import_icon_yahoo-vfl5E728M.png","/static/images/contacts/import_icon_yahoo@2x-vflnVdi5R.png"];case this.FACEBOOK:return["/static/images/contacts/import_icon_facebook-vfluFbt1j.png","/static/images/contacts/import_icon_facebook@2x-vfl7Zk5rR.png"];case this.OUTLOOK:return["/static/images/contacts/import_icon_outlook-vflF1_UKs.png","/static/images/contacts/import_icon_outlook@2x-vflVjRgD3.png"];default:return t.assert(!1,"Should never get ProfileServicesConstants.to_img with service: "+e)}},to_name:function(e){switch(e){case this.GOOGLE:return i._("Gmail");case this.YAHOO:return i._("Yahoo! Mail");case this.FACEBOOK:return i._("Facebook");case this.VARIOUS:return i._("Email");case this.YAHOO_LEGACY:return i._("Yahoo! Mail");case this.OUTLOOK:return i._("Outlook");case this.SLACK:return i._("Slack");default:return t.assert(!1,"Should never get ProfileServicesConstants.to_name with service: "+e)}},logging_identifiers:function(e){switch(e){case this.GOOGLE:return"google";case this.YAHOO:return"yahoo";case this.FACEBOOK:return"facebook";case this.VARIOUS:return"email";case this.YAHOO_LEGACY:return"yahoo_legacy";case this.OUTLOOK:return i._("outlook");case this.SLACK:return i._("slack");default:return t.assert(!1,"Should never get ProfileServicesConstants.logging_identifiers with service: "+e)}}}}),define("modules/clean/profile_services/profile_services_link",["require","exports","jquery","modules/core/browser","modules/core/exception","modules/core/i18n","modules/core/notify","modules/core/uri","modules/clean/ajax","modules/clean/analytics","modules/clean/profile_services/popup_handler","modules/clean/profile_services/profile_services_constants","modules/clean/viewer","modules/constants/login_and_register"],function(e,r,t,i,o,s,n,c,a,_,u,l,d,p){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var f=(function(){function e(e,r){void 0===r&&(r=null);var i=this;this._update_on_auth_event=function(e){if(e.user_id===i.user_id){i.is_updated=!1,i.get_or_update_connected_state(!0);for(var r in i.serviceChangeCallbacks)i.serviceChangeCallbacks.hasOwnProperty(r)&&i.serviceChangeCallbacks[r](i)}},o.assert(null!==e,"No user id provided"),this.user_id=e,this.connectedServices={},this.is_updated=!1,this.get_or_update_connected_state(!0,r),this.serviceChangeCallbacks={},u.addAuthCompleteListener(this._update_on_auth_event),t(document).on("db:profile_service:deauth_complete",this._update_on_auth_event)}return e.get_linked_profile_services_for_user=function(r,t){void 0===t&&(t=null),o.assert(null!==r,"No user_id: LinkedProfileServices.get_linked_profile_services_for_user()");var i=this._LINKED_PROFILE_SERVICES[r];return void 0!==i?i.get_or_update_connected_state(!1,t):(i=new e(r,t),this._LINKED_PROFILE_SERVICES[r]=i),i},e.prototype.get_or_update_connected_state=function(e,r){var t=this;void 0===e&&(e=!1),void 0===r&&(r=null),this.is_updated&&!e?null!==r&&r(this):a.BackgroundRequest({url:"/profile_services/connected_services",subject_user:this.user_id,dataType:"json",success:function(e,i,o){t.connectedServices=e,t.is_updated=!0,null!==r&&r(t)}})},e.prototype.connected_accounts_for_service=function(e){return this.connectedServices[e]?t.map(this.connectedServices[e],function(e){return e.source_id}):[]},e.prototype.has_connected_services=function(){for(var e=0,r=l.services();e<r.length;e++){var t=r[e];if(this.service_is_connected(t))return!0}return!1},e.prototype.has_unconnected_services=function(e){void 0===e&&(e=!1);for(var r=e?l.importable_contact_services():l.services(),t=0,i=r;t<i.length;t++){var o=i[t];if(o!==l.YAHOO_LEGACY&&!this.service_is_connected(o))return!0}return!1},e.prototype.service_is_connected=function(e){if(o.assert(l.services().indexOf(e)!==-1,"Not a valid profile service"),null==this.connectedServices[e])return!1;for(var r=0,t=this.connectedServices[e];r<t.length;r++){if(t[r].connection_state===l.IS_CONNECTED)return!0}return!1},e.prototype.service_was_connected=function(e){if(o.assert(l.services().indexOf(e)!==-1,"Not a valid profile service"),null==this.connectedServices[e])return!1;for(var r=0,t=this.connectedServices[e];r<t.length;r++){if(t[r].connection_state===l.WAS_CONNECTED)return!0}return!1},e.prototype.register_for_service_changes=function(e,r){return this.serviceChangeCallbacks[e]=r},e._LINKED_PROFILE_SERVICES={},e})();r.LinkedProfileServices=f;var h=(function(){function e(){this._redirect_to_identity_provider=this._redirect_to_identity_provider.bind(this),this.deauth_service=this.deauth_service.bind(this),this._popup_window=null}return e.show_import_notifications=function(e){if(e.success)switch(_.TeamsWebActionsLogger.log("import_contacts_complete",{provider:l.logging_identifiers(e.provider),path:i.get_uri().getPath()}),e.provider){case l.GOOGLE:n.Notify.success(s._("Imported Gmail Contacts."));break;case l.YAHOO:n.Notify.success(s._("Imported Yahoo! Mail contacts."));break;case l.OUTLOOK:n.Notify.success(s._("Imported Outlook Mail contacts."));break;case l.FACEBOOK:n.Notify.success(s._("Successfully connected to Facebook."))}else null!==e.err_msg?n.Notify.error(e.err_msg):n.Notify.error(s._("There was a problem completing this request."))},e.show_verify_link_result=function(e){return e.success?n.Notify.success(s._("Verified account and imported contacts")):null!==e.err_msg&&void 0!==e.err_msg?n.Notify.error(e.err_msg):n.Notify.error(s._("Couldn’t link account. Please try again."))},e.prototype._attach_popup_handlers=function(e){var r=this,t=null,i=function(i){u.removeAuthCompleteListener(t),null!=r._popup_window&&r._popup_window.close(),r._popup_window=null,null!=e&&e(i)};t=u.addAuthCompleteListener(i)},e.prototype._post_redirect_to_url=function(e,r,t,o){void 0===o&&(o=null);var s=new c.URI({path:"/profile_services/redirect_to_identity_provider",query:r}).toString();if(t){this._attach_popup_handlers(o);var n=l.to_name(e);this._popup_window=window.open(s,n,"width=600,height=600,resizable=1,scrollbars=1")}else i.redirect(s)},e.prototype._redirect_to_identity_provider=function(e,r,t,i,o,s,n){void 0===i&&(i=null),void 0===o&&(o=null),void 0===s&&(s=!0),void 0===n&&(n=null);var c={service:e,is_popup:s.toString(),action:r,prompt_select:"true",token:p.REDIRECT_WINDOW_TOKEN};return null!==t&&(c.user_id=t.toString()),null!==o&&(c.referrer=o),null==n?c.is_desktop="false":"desktop"===n.kind?(c.is_desktop="true",c.host_nonce=n.host_nonce,null!==n.login_hint&&(c.login_hint=n.login_hint)):(c.is_desktop="false",c.remember_me=n.remember_me.toString(),c.cont=n.cont,c.pair_user=n.pair_user.toString()),this._post_redirect_to_url(e,c,s,i)},e.prototype.auth_service_with_user=function(e,r,t,i){void 0===t&&(t=null),void 0===i&&(i=null),o.assert(null!==e,"No service provided to auth_service_with_user"),o.assert(null!==r,"No user_id provided to auth_service_with_user");var s=d.Viewer.get_viewer().get_user_by_id(r);return o.assert(null!==s,"No user for user_id "+r),this._redirect_to_identity_provider(e,"link_contacts",r,t,i)},e.prototype.auth_service_with_user_promise=function(e,r){var t=this;return new Promise(function(i){t.auth_service_with_user(e,r,i)})},e.prototype.auth_service_with_specified_user=function(e,r,t,i){o.assert(null!==e,"No service provided"),o.assert(null!==r,"No user_id provided");var s=d.Viewer.get_viewer().get_user_by_id(r);return o.assert(null!==s,"No user for user_id "+r),this._redirect_to_identity_provider(e,"link_target_user",r,t,i)},e.prototype.auth_service_create_user_if_needed=function(e,r,t,i){return void 0===r&&(r=null),void 0===t&&(t=null),void 0===i&&(i=!0),o.assert(null!==e,"No service provided to create user"),this._redirect_to_identity_provider(e,"create_user",null,r,t,i)},e.prototype.auth_service_login_desktop=function(e,r,t,i){void 0===i&&(i=null),o.assert(null!==e,"No service provided to login desktop");var s={kind:"desktop",host_nonce:t,login_hint:i};this._redirect_to_identity_provider(e,"login_user",null,r,null,!0,s)},e.prototype.auth_service_login_web=function(e,r,t,i,s,n,c){o.assert(null!==e,"No service provided to login web");var a={kind:"web",remember_me:s,cont:n,pair_user:c};this._redirect_to_identity_provider(e,"login_user",null,r,t,i,a)},e.prototype.auth_service_link_calendar=function(e,r,t,i){o.assert(null!==e,"No service provided"),o.assert(null!==r,"No user_id provided");var s=d.Viewer.get_viewer().get_user_by_id(r);return o.assert(null!==s,"No user for user_id "+r),this._redirect_to_identity_provider(e,"link_calendar",r,t,i,!0)},e.prototype.deauth_service=function(e,r,i,s){void 0===i&&(i=null),void 0===s&&(s=null);var n=parseInt(r,10),c=function(r){if(!r.service_is_connected(e)&&null!==s)return void s(!0);null!==i&&o.assert(r.connected_accounts_for_service(e).indexOf(i)!==-1,"Service is not currently connected"),a.WebRequest({url:"/profile_services/unlink",subject_user:n,data:{service:e,source_id:i},success:function(e,r,i){return t(document).trigger(t.Event("db:profile_service:deauth_complete",{user_id:n})),"function"==typeof s?s(!0):void 0},error:function(e,r,t){return"function"==typeof s?s(!1):void 0}})};o.assert(l.services().indexOf(e)!==-1,"Not a valid profile service"),o.assert(null!==n,"No user_id provided"),f.get_linked_profile_services_for_user(n,c)},e})();r.ProfileServicesLinkingHandler=h});
//# sourceMappingURL=pkg-profile_services.min.js-vflycX8N9.map