define("modules/clean/flux/store_mixin",["require","exports"],function(e,t){"use strict";return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return{getInitialState:function(){return this._get_state_from_stores(this.props)},componentDidMount:function(){for(var t=0,o=Array.from(e);t<o.length;t++){o[t].add_change_listener(this._handle_store_changed)}return this.setState(this._get_state_from_stores(this.props))},componentWillUnmount:function(){var t=this;return Array.from(e).map(function(e){return e.remove_change_listener(t._handle_store_changed)})},_handle_store_changed:function(){if(this.isMounted()){var e=this._get_state_from_stores(this.props);if(null!=e)return this.setState(e)}}}}}),define("modules/clean/loggers/growth_features_events_logger",["require","exports","modules/clean/ajax"],function(e,t,o){"use strict";function n(e,t){a({feature:"ransomware_recovery",event:e,extra:t})}function r(e,t){a({feature:"project_magnet",event:e,extra:t})}function s(e,t){a({feature:"project_lasso",event:e,extra:t})}function i(e,t){a({feature:"uj_bin_routing",event:e,extra:t})}function a(e){o.SilentBackgroundRequest({url:"/log/growth_feature",data:{event_params:JSON.stringify(e)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.logRansomwareEvent=n,t.logMagnetEvent=r,t.logLassoEvent=s,t.logBinRoutingEvent=i}),define("modules/clean/react/bubble_dropdown",["require","exports","tslib","external/classnames","external/keymaster","external/react","external/react-dom","external/react-dom-factories","external/prop-types","external/lodash","jquery","modules/clean/keycode","modules/core/dom"],function(e,t,o,n,r,s,i,a,l,d,u,p,c){"use strict";function b(e,t){return void 0!==e&&null!==e?t(e):void 0}var h="react-bubble-dropdown-root",f=function(){var e=u("#"+h);return e.length||(e=u('<div tabindex="-1"/>').attr({id:h}).prependTo("body")),e[0]},g=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={dropdown_style:{}},t._arrow_direction=function(){var e;return"top"===t.props.arrow_position.substring(0,3)?e="top":"bottom"===t.props.arrow_position.substring(0,6)?e="bottom":"left"===t.props.arrow_position.substring(0,4)?e="left":"right"===t.props.arrow_position.substring(0,5)&&(e="right"),e},t}return o.__extends(t,e),t.prototype.componentDidMount=function(){var e,t;if(null!=this.refs.dropdown){var o=this._arrow_direction();this.target_position={top:"bottom",left:"right",bottom:"top",right:"left"}[o];var n=u(this.props.target_node),r=u(i.findDOMNode(this.refs.dropdown)),s=u(i.findDOMNode(this.refs.arrow)),a=this.props.horizontal_displacement||0,l=this.props.vertical_displacement||0;switch(this._arrow_direction()){case"left":e=n.outerWidth()+s.outerWidth(),t=n.outerHeight()/2-s.position().top;break;case"right":e=-1*(r.outerWidth()+s.outerWidth()),t=n.outerHeight()/2-s.position().top;break;case"top":e=n.outerWidth()/2-s.position().left-a,t=n.outerHeight()+s.outerHeight()-l;break;case"bottom":e=n.outerWidth()/2-s.position().left-a,t=-1*(r.outerHeight()+s.outerHeight())+l}c.clone_position(r,n,{setHeight:!1,setWidth:!1,offsetLeft:e,offsetTop:t});var d=r.position();if(this.props.anchor_bottom){var p=void 0;p=this.props.targetFixed?document.documentElement.clientHeight-n[0].getBoundingClientRect().top-l:document.documentElement.clientHeight-n.offset().top-l,this.setState({dropdown_style:{bottom:p,left:d.left}})}else this.setState({dropdown_style:{top:d.top,left:d.left}});return u("#"+h).attr("aria-labelledby",this.props.label_id),this.props.show_arrow?void 0:(s.css("visibility","hidden"),u(".bubble-arrow-border").css("visibility","hidden"))}},t.prototype.render=function(){return a.div({className:n("bubble-dropdown",this.props.extra_css_class,this.props.className,this.props.arrow_position,{justify:this.props.justify}),style:this.state.dropdown_style,ref:"dropdown"},this.props.children,a.div({className:"bubble-arrow-border"}),a.div({className:"bubble-arrow",ref:"arrow"}))},t.displayName="BubbleDropdownContents",t.propTypes={target_node:l.instanceOf(HTMLElement).isRequired,targetFixed:l.bool.isRequired,label_id:l.string,arrow_position:l.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","right","right-top","right-bottom","left","left-top","left-bottom"]).isRequired,vertical_displacement:l.number,horizontal_displacement:l.number,anchor_bottom:l.bool,show_arrow:l.bool,className:l.string,extra_css_class:l.string,justify:l.bool},t})(s.Component);return(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.render_tooltip=function(){var e=f();if(t.shown){u("#"+h).css("position",t.props.position),t.props.anchor_bottom?(u("#"+h).css("bottom","0"),u("#"+h).css("top","auto")):(u("#"+h).css("top","0"),u("#"+h).css("bottom","auto"));var o=s.createElement(g,{target_node:t.getTargetButton(),targetFixed:t.props.targetFixed,label_id:t.containerId,arrow_position:t.props.arrow_position,vertical_displacement:t.props.vertical_displacement,horizontal_displacement:t.props.horizontal_displacement,anchor_bottom:t.props.anchor_bottom,show_arrow:t.props.show_arrow,extra_css_class:t.props.extra_css_class,className:t.props.className,justify:t.props.justify},t.props.children);return i.render(o,e)}return i.unmountComponentAtNode(e)},t.preventSelection=function(e){return e.preventDefault()},t.targetKeyUp=function(e){return e.preventDefault()},t.bindDocHandlers=function(){if(!t.hasBindedDocHandlers)return r("esc",t.hideIfShown),t.props.bubbleDropdownScrollable?u("*").not("#"+h+" *").on("scroll."+t.eventId,t.hideIfShown):u("*").on("scroll."+t.eventId,t.hideIfShown),t.props.closeBubbleDropdownOnWindowScroll&&u(window).on("scroll."+t.eventId,t.hideIfShown),t.props.shouldDisableBubbleDropdownHideOnResize||u(window).on("resize."+t.eventId,t.hideIfShown),u("#"+h).on("keydown",t.dropdownKeyDown),t.hasBindedDocHandlers=!0},t.unbindDocHandlers=function(){if(t.hasBindedDocHandlers)return u("body").off("mouseup."+t.eventId),u("*").off("scroll."+t.eventId),u(window).off("scroll."+t.eventId),t.props.shouldDisableBubbleDropdownHideOnResize||u(window).off("resize."+t.eventId),u("#"+h).off("keydown",t.dropdownKeyDown),t.hideIfShown()},t.targetKeyDown=function(e){[p.KeyCode.ENTER,p.KeyCode.SPACE].includes(e.keyCode)&&(t.toggle(),e.preventDefault()),e.keyCode===p.KeyCode.TAB&&(e.shiftKey?t.hide():t.shown&&(t.focusInDropdown(),e.preventDefault()))},t.dropdownKeyDown=function(e){if(e.keyCode===p.KeyCode.TAB){var o=u("#"+h)[0],n=t.getFocusableDropdownElements();if(e.shiftKey){if([o,n[0]].includes(e.target))return t.getTargetButton().focus(),e.preventDefault()}else if(e.target===n[n.length-1]||e.target===o&&0===n.length)return t.hide(),t.getTargetButton().focus()}else if(e.keyCode===p.KeyCode.ESC)return t.hide(),t.getTargetButton().focus(),e.stopPropagation()},t.focusInDropdown=function(){var e;return t.props.autofocus&&(e=t.getFocusableDropdownElements()[0]),e||(e=u("#"+h)[0]),e.focus()},t.getTargetButton=function(){return b(i.findDOMNode(t.refs.target),function(e){return e.firstChild})},t.getFocusableDropdownElements=function(){return c.getFocusableElementsIn("#"+h+" .bubble-dropdown")},t.hideIfShown=function(){if(t.shown)return t.hide()},t.toggle=function(){t.shown?t.hide():t.show()},t.show=function(){if(!t.props.disabled)return t.shown=!0,u(t.getTargetButton()).addClass("bubble-dropdown-target--active").attr("aria-expanded",!0),t.render_tooltip(),t.focusInDropdown(),"function"==typeof t.props.bubbleDropdownShown&&t.props.bubbleDropdownShown(),t.bindDocHandlers()},t.hide=function(){return t.shown=!1,u(t.getTargetButton()).removeClass("bubble-dropdown-target--active").attr("aria-expanded",!1),t.render_tooltip(),"function"==typeof t.props.bubbleDropdownHidden?t.props.bubbleDropdownHidden():void 0},t.isShown=function(){return t.shown},t}return o.__extends(t,e),t.prototype.render=function(){return a.div({className:n("bubble-dropdown-container",this.props.container_css_class),onMouseDown:this.preventSelection,onMouseUp:this.toggle,onKeyDown:this.targetKeyDown,ref:"target",id:this.containerId},this.props.targetButton)},t.prototype.componentWillMount=function(){return this.eventId=d.uniqueId(),this.containerId="bubbleDropdownTarget"+this.eventId},t.prototype.componentDidMount=function(){var e=this;return this.shown=!1,this.$target=u(i.findDOMNode(this.refs.target)),u(this.getTargetButton()).addClass("bubble-dropdown-target").attr("aria-expanded",this.shown),this.props.disabled&&(u(this.getTargetButton()).addClass("disabled"),this.$target.addClass("disabled")),this.bodyClickHandler=function(t){if(e.shown){var o=u(t.target);if(o.is("select"))return!0;return o.closest(e.$target).length||o.closest(u("#"+h)).length||e.hide(),!0}},u("body").on("mouseup."+this.eventId,this.bodyClickHandler)},t.prototype.componentDidUpdate=function(){if(u(this.getTargetButton()).addClass("bubble-dropdown-target").attr("aria-expanded",this.shown),this.shown)return this.render_tooltip()},t.prototype.componentWillUnmount=function(){return this.unbindDocHandlers(),u("body").off("mouseup."+this.eventId,this.bodyClickHandler)},t.displayName="BubbleDropdown",t.DROPDOWN_ROOT_ID=h,t.propTypes={targetButton:function(e,t,o){if(null==e.targetButton||"button"!==e.targetButton.type)return new Error("BubbleDropdown's targetButton must be a `<button>`")},targetFixed:l.bool,arrow_position:l.oneOf(["top","top-left","top-right","bottom","bottom-left","bottom-right","right","right-top","right-bottom","left","left-top","left-bottom"]).isRequired,vertical_displacement:l.number,horizontal_displacement:l.number,show_arrow:l.bool,anchor_bottom:l.bool,className:l.string,extra_css_class:l.string,container_css_class:l.string,bubbleDropdownShown:l.func,bubbleDropdownHidden:l.func,autofocus:l.bool,position:l.oneOf(["static","relative","fixed","absolute"]),bubbleDropdownScrollable:l.bool,closeBubbleDropdownOnWindowScroll:l.bool,shouldDisableBubbleDropdownHideOnResize:l.bool,justify:l.bool,disabled:l.bool},t.defaultProps={vertical_displacement:0,horizontal_displacement:0,anchor_bottom:!1,show_arrow:!0,className:null,extra_css_class:"",container_css_class:"",position:"fixed",autofocus:!1,targetFixed:!1,bubbleDropdownScrollable:!1,closeBubbleDropdownOnWindowScroll:!0,justify:!1,disabled:!1},t})(s.Component)}),define("modules/clean/react/tabs/tab_bar",["require","exports","tslib","external/classnames","external/react","external/react-dom","external/prop-types","jquery","modules/clean/keycode","modules/clean/react/tabs/tab_util","modules/clean/css"],function(e,t,o,n,r,s,i,a,l,d){"use strict";var u;return u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._cleanUpTabWidth=function(){return a("a",s.findDOMNode(t)).css("width","")},t._fixTabWidth=function(){return t._cleanUpTabWidth(),a("a",s.findDOMNode(t)).width(function(){return a(this).width()})},t._normalizedTabs=function(){return t.props.tabs.map(function(e){return"string"!=typeof e&&"number"!=typeof e||(e={value:e,label:e}),e})},t._onKeydown=function(e){var o=t._normalizedTabs(),n=null;if([l.KeyCode.LEFT,l.KeyCode.UP].includes(e.keyCode)?n=0===t.props.selectedIndex?o.length-1:t.props.selectedIndex-1:[l.KeyCode.RIGHT,l.KeyCode.DOWN].includes(e.keyCode)&&(n=t.props.selectedIndex===o.length-1?0:t.props.selectedIndex+1),null!=n)return e.preventDefault(),t._selectTab(n,{focusOnTab:!0})},t._selectTab=function(e,o){void 0===o&&(o={});var n=t._normalizedTabs()[e];if(t.props.onChange(n.value,e),o.focusOnTab===!0)return s.findDOMNode(t.refs[e]).focus()},t._onClick=function(e,o){if(o.preventDefault(),e!==t.props.selectedIndex)return t._selectTab(e,{focusOnTab:!0})},t._renderTab=function(e,o,s){var i,a=n({"c-tabs__tab":!0,"c-tabs__tab--selected":o===t.props.selectedIndex,"c-tabs__tab--fr":e.rightAlign,"c-tabs__tab--rightmost":s}),l=o===t.props.selectedIndex;i=e.contentId?e.contentId:l?d.getTabContentId(t.props.idPrefix):"";var u=l?0:-1,p=r.createElement("a",{href:"#",ref:o,id:d.getTabId(t.props.idPrefix,o),onClick:t._onClick.bind(t,o),onKeyDown:t._onKeydown,role:"tab","aria-selected":l,"aria-controls":i,tabIndex:u,className:"c-tabs__label"},e.label);return r.createElement("li",{key:o,className:a,role:"presentation","data-value":e.value},p)},t}return o.__extends(t,e),t.prototype.componentDidMount=function(){return this._fixTabWidth()},t.prototype.componentDidUpdate=function(){return this._fixTabWidth()},t.prototype.render=function(){var e=this,t=this._normalizedTabs(),o=Array.from(t).map(function(o,n){return e._renderTab(o,n,n===t.length-1)});return r.createElement("ul",{className:"c-tabs__bar",role:"tablist",ref:"tablist"},o)},t})(r.Component),u.displayName="TabBar",u.propTypes={tabs:i.arrayOf(i.oneOfType([i.string,i.number,i.shape({value:i.oneOfType([i.string,i.number]),label:i.string,rightAlign:i.bool})])).isRequired,selectedIndex:i.number,onChange:i.func,idPrefix:i.string},u.defaultProps={selectedIndex:0,onChange:function(){}},u}),define("modules/clean/react/tabs/tab_util",["require","exports"],function(e,t){"use strict";function o(e,t){return e+"_tab"+(null!=t?t:"")}function n(e,t){return e+"_tabcontent"+(null!=t?t:"")}Object.defineProperty(t,"__esModule",{value:!0});(function(e){e.DEFAULT="c-tabs",e.CENTER="c-tabs c-tabs--center",e.MINIMAL="c-tabs c-tabs--minimal",e.UNDERLINE="c-tabs--underline",e.OVERLINE="c-tabs--overline"})(t.TabVariant||(t.TabVariant={})),t.getTabId=o,t.getTabContentId=n}),define("modules/clean/react/tabs/tabs",["require","exports","tslib","external/classnames","external/react","external/react-dom-factories","external/prop-types","external/lodash","jquery","modules/clean/react/tabs/tab_bar","modules/clean/react/tabs/tab_util","modules/core/browser"],function(e,t,o,n,r,s,i,a,l,d,u,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=(function(e){function t(t){var o=e.call(this,t)||this;o._onChange=function(e,t){o.setState({selectedIndex:t});var n=o.state.tabs[t];return n.hashURL&&p.set_hash(n.hashURL),o.props.onChange(e,t)},o._selectTabFromHash=function(){var e=p.get_hash();if(null!=e){var t=o.state.tabs;return(function(){for(var n=[],r=0;r<t.length;r++){var s=t[r],i=s.hashPrefix,a=s.hashURL;if(null!=i&&0===(null!=e?e.indexOf(i):void 0)||e===a){o.setState({selectedIndex:r});break}n.push(void 0)}return n})()}};var n=t.idPrefix?t.idPrefix:"tabset"+a.uniqueId();return o.state={selectedIndex:0,idPrefix:n},o}return o.__extends(t,e),t.prototype.componentWillMount=function(){var e=[],t=this.state.selectedIndex,o=this.state.idPrefix;return r.Children.forEach(this.props.children,function(n,r){var s=u.getTabContentId(o,r);if(e.push({label:n.props.title,contentId:s,hashPrefix:n.props.hashPrefix,hashURL:n.props.hashURL,rightAlign:n.props.rightAlign}),n.props.isSelected)return t=r}),this.setState({tabs:e,selectedIndex:t}),l(window).on("hashchange",this._selectTabFromHash)},t.prototype.componentWillReceiveProps=function(e){if(void 0!==e.selectedIndex&&e.selectedIndex!==this.state.selectedIndex)return this.setState({selectedIndex:e.selectedIndex})},t.prototype.componentWillUnmount=function(){return l(window).off("hashchange",this._selectTabFromHash)},t.prototype.componentDidMount=function(){return this._selectTabFromHash()},t.prototype.render=function(){var e=this,t=this.props.renderTabBar(r.createElement(d,{tabs:this.state.tabs,onChange:this._onChange,idPrefix:this.state.idPrefix,selectedIndex:this.state.selectedIndex}));return s.div({className:n(this.props.variant,this.props.className)},t,r.Children.map(this.props.children,function(t,o){return r.cloneElement(t,{isSelected:o===e.state.selectedIndex,id:u.getTabContentId(e.state.idPrefix,o),tabId:u.getTabId(e.state.idPrefix,o)})}))},t.displayName="Tabs",t.propTypes={idPrefix:i.string,variant:i.string,selectedIndex:i.number,onChange:i.func,className:i.string,renderTabBar:i.func},t.defaultProps={variant:u.TabVariant.DEFAULT,renderTabBar:function(e){return e},onChange:function(){}},t})(r.Component);t.Tabs=c;var b=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){var e={"c-tabs__content":!0,"c-tabs__content--selected":this.props.isSelected};return s.div({id:this.props.id,className:n(e),role:"tabpanel","aria-labelledby":this.props.tabId},this.props.children)},t.displayName="TabContent",t.propTypes={id:i.string,isSelected:i.bool,tabId:i.string,hashPrefix:i.string,hashURL:i.string,title:i.string},t})(r.Component);t.TabContent=b});
//# sourceMappingURL=pkg-coreui-with-i18n-for-sharing.min.js-vfl7MizAD.map