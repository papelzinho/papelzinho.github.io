(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,r){"use strict";var n,o=r("q1tI"),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},Nhdc:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return f})),r.d(t,"d",(function(){return m})),r.d(t,"e",(function(){return y})),r.d(t,"f",(function(){return g}));var n=r("q1tI"),o=function(e){var t=e.article;return n.createElement(n.Fragment,null,n.createElement("div",{className:"col"},n.createElement("a",{href:"faq"+t.slug},n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body"},n.createElement("p",{className:"card-text mb-0"},t.title))))))},a=function(e){return n.createElement(n.Fragment,null,n.createElement("svg",{fill:e.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e.width,height:e.height},n.createElement("path",{d:"M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"})))},i=function(e){return n.createElement(n.Fragment,null,n.createElement("svg",{fill:e.color,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.width,height:e.height},n.createElement("path",{d:"M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z"})))},c=r("pV01"),u=r.n(c),l=function(){return n.createElement(n.Fragment,null,n.createElement("footer",{className:"footer"},n.createElement("img",{src:u.a,alt:"Papelzinho",width:50,height:50}),n.createElement("p",{className:"mt-3 text-muted"},"Baixe o Papelzinho"),n.createElement("div",{className:"d-flex flex-row"},n.createElement(g,{text:"App Store",href:"https://itunes.apple.com/br/app/papelzinho/id1133660909?mt=8",className:"mr-2"}),n.createElement(g,{text:"Google Play",href:"https://play.google.com/store/apps/details?id=kaiquedamato.com.papelzinho"})),n.createElement("div",{className:"d-flex flex-row mt-4"},n.createElement(f,{href:"https://www.instagram.com/papelzinhoapp/",className:"mr-2"},n.createElement(a,{width:30,height:30,color:"#ffffff"})),n.createElement(f,{href:"https://www.facebook.com/papelzinhoapp/"},n.createElement(i,{width:30,height:30,color:"#ffffff"})))))},s={width:"50px",height:"50px",backgroundColor:"rgb(252, 45, 63)",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none"},f=function(e){return n.createElement(n.Fragment,null,n.createElement("a",{href:e.href,style:s,className:e.className+" rounded-circle"},e.children))},p=r("qhky"),d=r("ZK2t"),h=r.n(d),m=function(e){return n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement(p.a,null,n.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",integrity:"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2",crossOrigin:"anonymous"})),!e.noHeader&&n.createElement("header",{className:"gradient-bg px-5 py-4"},n.createElement("img",{src:h.a,alt:"Papelzinho logo",height:30})),n.createElement("main",{className:"pb-5"},e.children),n.createElement(l,null)))},y=function(e){var t=e.title,r=e.body;return n.createElement("div",{style:{backgroundColor:"#f6f6f6"},className:"rounded-lg p-4 mb-4"},n.createElement("h5",{className:"text-dark"},t),n.createElement("div",null,n.createElement("span",{className:"rating"},"★★★★★")),n.createElement("p",null,r))},b={width:"150px",height:"60px",border:"1px solid #ccc",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",textDecoration:"none",color:"#fd2f3f",fontWeight:500},g=function(e){var t=e.text,r=e.href,o=e.className;return n.createElement("a",{href:r,style:b,className:o},t)}},ZK2t:function(e,t,r){e.exports=r.p+"static/papelzinho-logo-white-da2e1f73715bb481c25291c4b212bcc5.png"},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(!e(t[u],i[u]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],i.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!i.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(u=c;0!=u--;)if(t[u]!==i[u])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(i,l[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],i[l[u]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},pV01:function(e,t){e.exports="data:image/png;base64,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"},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return me}));r("E9XD");var n,o,a,i,c=r("17x9"),u=r.n(c),l=r("8+s/"),s=r.n(l),f=r("bmMU"),p=r.n(f),d=r("q1tI"),h=r.n(d),m=r("YVoz"),y=r.n(m),b="bodyAttributes",g="htmlAttributes",T="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",C="href",O="http-equiv",E="innerHTML",z="itemprop",j="name",S="property",x="rel",N="src",k="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},U="defaultTitle",I="defer",R="encodeSpecialCharacters",H="onChangeClientState",K="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),P=[v.NOSCRIPT,v.SCRIPT,v.STYLE],M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},X=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=_(e,v.TITLE),r=_(e,K);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=_(e,U);return t||n||void 0},G=function(e){return _(e,H)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return B({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+M(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],u=c.toLowerCase();-1===t.indexOf(u)||r===x&&"canonical"===e[r].toLowerCase()||u===x&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==E&&c!==w&&c!==z||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],u=y()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},_=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(v.BODY,n),ue(v.HTML,o),ce(f,p);var d={baseTag:le(v.BASE,r),linkTags:le(v.LINK,a),metaTags:le(v.META,i),noscriptTags:le(v.NOSCRIPT,c),scriptTags:le(v.SCRIPT,l),styleTags:le(v.STYLE,s)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(v.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===E)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,o=fe(r,n),[h.a.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+V(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===E||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===E||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+V(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(g,o,n),link:pe(v.LINK,a,n),meta:pe(v.META,i,n),noscript:pe(v.NOSCRIPT,c,n),script:pe(v.SCRIPT,u,n),style:pe(v.STYLE,l,n),title:pe(v.TITLE,{title:f,titleAttributes:p},n)}},he=s()((function(e){return{baseTag:J([C,k],e),bodyAttributes:Z(b,e),defer:_(e,I),encode:_(e,R),htmlAttributes:Z(g,e),linkTags:Q(v.LINK,[x,C],e),metaTags:Q(v.META,[j,A,O,S,z],e),noscriptTags:Q(v.NOSCRIPT,[E],e),onChangeClientState:G(e),scriptTags:Q(v.SCRIPT,[N,E],e),styleTags:Q(v.STYLE,[w],e),title:F(e),titleAttributes:Z(T,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),de)((function(){return null})),me=(o=he,i=a=function(e){function t(){return X(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return B({},n,((t={})[r.type]=[].concat(n[r.type]||[],[B({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return B({},o,((t={})[n.type]=i,t.titleAttributes=B({},a),t));case v.BODY:return B({},o,{bodyAttributes:B({},a)});case v.HTML:return B({},o,{htmlAttributes:B({},a)})}return B({},o,((r={})[n.type]=B({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=B({},t);return Object.keys(e).forEach((function(t){var n;r=B({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(q(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=B({},r);return t&&(n=this.mapChildrenToProps(t,n)),h.a.createElement(o,n)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),a.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,r("yLpj"))}}]);
//# sourceMappingURL=commons-ee73f17f8bb54a8a40f9.js.map