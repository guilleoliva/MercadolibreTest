define(["require","exports","tslib","external/react","modules/clean/react/previews/pdf_viewer/text/bidi","modules/clean/react/previews/pdf_viewer/text/unicode","modules/clean/referrer_cleansing_redirect","modules/clean/react/previews/constants","modules/clean/react/previews/pdf_viewer/utils"],function(e,t,r,i,n,o,s,a,c){"use strict";function l(e,t){t.length>0&&e.push(t)}Object.defineProperty(t,"__esModule",{value:!0});var h=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.createAnchor=function(e){var t=s.get_redirect_uri(c.normalizeUrl(e)).toString();return i.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},e)},t.prototype.render=function(){if("string"==typeof this.props.children){for(var e=new RegExp("\\b"+a.HYPERLINK_REGEX_STRING,"gi"),t=this.props.children,r=[],n=void 0,o=0;n=e.exec(t);){var s=n[0];l(r,t.slice(o,e.lastIndex-s.length)),r.push(this.createAnchor(s)),o=e.lastIndex}return l(r,t.slice(o)),i.createElement.apply(i,["span",{}].concat(r))}return null},t})(i.PureComponent);t.LinkedText=h;var p=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={xScale:1,yScale:1},t.ref=function(e){t.textElement=e},t}return r.__extends(t,e),t.prototype.componentDidMount=function(){if(this.textElement){var e=this.props,t=e.text,r=e.width,i=e.height,n=e.fontSize;this.setState(this.scaleText(t,r,i,n),this.props.onRender)}},t.prototype.measureText=function(e,t){return e!==this.cachedText&&(this.cachedText=e,this.cachedTextWidth=t.clientWidth,this.cachedTextHeight=t.clientHeight),{textWidth:this.cachedTextWidth,textHeight:this.cachedTextHeight}},t.prototype.scaleText=function(e,t,r,i){var n=!0;if(e.length<=1)n=!1;else if(2===e.length){var o=e.charCodeAt(0),s=e.charCodeAt(1);o>=55296&&o<=56319&&s>=56320&&s<=57343&&(n=!1)}if(n){var a=this.measureText(e,this.textElement),c=a.textWidth,l=a.textHeight;return{xScale:t/c,yScale:i?1:r/l}}return{xScale:1,yScale:1}},t.prototype.componentWillReceiveProps=function(e){var t=e.text,r=e.width,i=e.height,n=e.fontSize;this.setState(this.scaleText(t,r,i,n))},t.prototype.render=function(){var e=this.props,t=e.text,r=e.x,s=e.y,a=e.rotation,c={left:r,bottom:s,transform:"rotate("+-a+"rad) scale("+this.state.xScale+", "+this.state.yScale+")"};this.props.font&&(c.fontFamily=this.props.font.fontFamily,this.props.font.isBold&&(c.fontWeight="bold"),this.props.font.isItalic&&(c.fontStyle="italic")),this.props.fontSize&&(c.fontSize=this.props.fontSize+"px");for(var l=o.getNormalizedUnicodes(),p="",d=0;d<t.length;d++){var f=t.charAt(d);void 0!==l[f]&&(f=l[f]),f=o.reverseIfRtl(f),"\t"===f&&(f=" "),p+=f}var u=n.bidi(p,-1,!1),x=u.str,v=u.dir;return i.createElement("p",{className:"textbox",style:c,ref:this.ref,dir:v},i.createElement(h,null,x))},t})(i.PureComponent);t.TextBox=p});
//# sourceMappingURL=text_box.min.js-vflPBA87l.map