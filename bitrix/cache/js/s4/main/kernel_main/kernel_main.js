; /* /bitrix/js/main/core/core.min.js?147255878373480*/
; /* /bitrix/js/main/core/core_ajax.min.js?147255878321031*/
; /* /bitrix/js/main/json/json2.min.js?14725587833467*/
; /* /bitrix/js/main/core/core_ls.min.js?14725587837365*/
; /* /bitrix/js/main/core/core_fx.js?147255878416538*/

; /* Start:"a:4:{s:4:"full";s:48:"/bitrix/js/main/core/core.min.js?147255878373480";s:6:"source";s:28:"/bitrix/js/main/core/core.js";s:3:"min";s:32:"/bitrix/js/main/core/core.min.js";s:3:"map";s:32:"/bitrix/js/main/core/core.map.js";}"*/
(function(window){if(!!window.BX&&!!window.BX.extend)return;var _bxtmp;if(!!window.BX){_bxtmp=window.BX}window.BX=function(e,t){if(BX.type.isNotEmptyString(e)){var n;if(!!t&&null!=NODECACHE[e])n=NODECACHE[e];n=n||document.getElementById(e);if(!!t)NODECACHE[e]=n;return n}else if(BX.type.isDomNode(e))return e;else if(BX.type.isFunction(e))return BX.ready(e);return null};BX.debugEnableFlag=true;BX.message=function(e){if(BX.type.isString(e)){if(typeof BX.message[e]=="undefined"){BX.onCustomEvent("onBXMessageNotFound",[e]);if(typeof BX.message[e]=="undefined"){BX.debug("message undefined: "+e);BX.message[e]=""}}return BX.message[e]}else{for(var t in e){if(e.hasOwnProperty(t)){BX.message[t]=e[t]}}return true}};if(!!_bxtmp){for(var i in _bxtmp){if(_bxtmp.hasOwnProperty(i)){if(!BX[i]){BX[i]=_bxtmp[i]}else if(i=="message"){for(var j in _bxtmp[i]){if(_bxtmp[i].hasOwnProperty(j)){BX.message[j]=_bxtmp[i][j]}}}}}_bxtmp=null}var __readyHandler=null,readyBound=false,readyList=[],proxySalt=Math.random(),proxyId=1,proxyList=[],NODECACHE={},deniedEvents=[],eventsList=[],customEvents={},garbageCollectors=[],cssList=[],cssInit=false,jsList=[],jsInit=false,bSafari=navigator.userAgent.toLowerCase().indexOf("webkit")!=-1,bOpera=navigator.userAgent.toLowerCase().indexOf("opera")!=-1,bFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")!=-1,bChrome=navigator.userAgent.toLowerCase().indexOf("chrome")!=-1,bIE=document.attachEvent&&!bOpera,r={script:/<script([^>]*)>/gi,script_end:/<\/script>/gi,script_src:/src=["\']([^"\']+)["\']/i,script_type:/type=["\']([^"\']+)["\']/i,space:/\s+/,ltrim:/^[\s\r\n]+/g,rtrim:/[\s\r\n]+$/g,style:/<link.*?(rel="stylesheet"|type="text\/css")[^>]*>/i,style_href:/href=["\']([^"\']+)["\']/i},eventTypes={click:"MouseEvent",dblclick:"MouseEvent",mousedown:"MouseEvent",mousemove:"MouseEvent",mouseout:"MouseEvent",mouseover:"MouseEvent",mouseup:"MouseEvent",focus:"MouseEvent",blur:"MouseEvent"},lastWait=[],CHECK_FORM_ELEMENTS={tagName:/^INPUT|SELECT|TEXTAREA|BUTTON$/i},PRELOADING=1,PRELOADED=2,LOADING=3,LOADED=4,assets={},isAsync=null;BX.MSLEFT=1;BX.MSMIDDLE=2;BX.MSRIGHT=4;BX.ext=function(e){for(var t in e){if(e.hasOwnProperty(t)){this[t]=e[t]}}};BX.extend=function(e,t){var n=function(){};n.prototype=t.prototype;e.prototype=new n;e.prototype.constructor=e;e.superclass=t.prototype;if(t.prototype.constructor==Object.prototype.constructor){t.prototype.constructor=t}};BX.namespace=function(e){var t=e.split(".");var n=BX;if(t[0]==="BX"){t=t.slice(1)}for(var i=0;i<t.length;i++){if(typeof n[t[i]]==="undefined"){n[t[i]]={}}n=n[t[i]]}return n};BX.debug=function(){if(BX.debugStatus()){if(window.console&&window.console.log)window.console.log("BX.debug: ",arguments.length>0?arguments:arguments[0]);if(window.console&&window.console.trace)console.trace()}};BX.debugEnable=function(e){e=typeof e=="boolean"?e:true;BX.debugEnableFlag=e};BX.debugStatus=function(){return BX.debugEnableFlag||true};BX.is_subclass_of=function(e,t){if(e instanceof t)return true;if(t.superclass)return BX.is_subclass_of(e,t.superclass);return false};BX.clearNodeCache=function(){NODECACHE={};return false};BX.bitrix_sessid=function(){return BX.message("bitrix_sessid")};BX.create=function(e,t,n){n=n||document;if(null==t&&typeof e=="object"&&e.constructor!==String){t=e;e=e.tag}var i;if(BX.browser.IsIE()&&!BX.browser.IsIE9()&&null!=t&&null!=t.props&&(t.props.name||t.props.id)){i=n.createElement("<"+e+(t.props.name?' name="'+t.props.name+'"':"")+(t.props.id?' id="'+t.props.id+'"':"")+">")}else{i=n.createElement(e)}return t?BX.adjust(i,t):i};BX.adjust=function(e,t){var n,i;if(!e.nodeType)return null;if(e.nodeType==9)e=e.body;if(t.attrs){for(n in t.attrs){if(t.attrs.hasOwnProperty(n)){if(n=="class"||n=="className")e.className=t.attrs[n];else if(n=="for")e.htmlFor=t.attrs[n];else if(t.attrs[n]=="")e.removeAttribute(n);else e.setAttribute(n,t.attrs[n])}}}if(t.style){for(n in t.style){if(t.style.hasOwnProperty(n)){e.style[n]=t.style[n]}}}if(t.props){for(n in t.props){if(t.props.hasOwnProperty(n)){e[n]=t.props[n]}}}if(t.events){for(n in t.events){if(t.events.hasOwnProperty(n)){BX.bind(e,n,t.events[n])}}}if(t.children&&t.children.length>0){for(n=0,i=t.children.length;n<i;n++){if(BX.type.isNotEmptyString(t.children[n]))e.innerHTML+=t.children[n];else if(BX.type.isElementNode(t.children[n]))e.appendChild(t.children[n])}}else if(t.text){BX.cleanNode(e);e.appendChild((e.ownerDocument||document).createTextNode(t.text))}else if(t.html){e.innerHTML=t.html}return e};BX.remove=function(e){if(e&&null!=e.parentNode)e.parentNode.removeChild(e);e=null;return null};BX.cleanNode=function(e,t){e=BX(e);t=!!t;if(e&&e.childNodes){while(e.childNodes.length>0)e.removeChild(e.firstChild)}if(e&&t){e=BX.remove(e)}return e};BX.html=function(e,t,n){if(typeof t=="undefined")return e.innerHTML;if(typeof n=="undefined")n={};t=BX.processHTML(t.toString());var i=[];var r=[];if(typeof t.STYLE!="undefined"&&t.STYLE.length>0){for(var o in t.STYLE)i.push(t.STYLE[o])}if(typeof t.SCRIPT!="undefined"&&t.SCRIPT.length>0){for(var o in t.SCRIPT){if(t.SCRIPT[o].isInternal)r.push(t.SCRIPT[o].JS);else i.push(t.SCRIPT[o].JS)}}if(n.htmlFirst&&typeof t.HTML!="undefined"&&e){e.innerHTML=t.HTML}var s=new BX.Promise;var a=function(){if(!n.htmlFirst&&typeof t.HTML!="undefined"&&e){e.innerHTML=t.HTML}for(var i in r){BX.evalGlobal(r[i])}if(BX.type.isFunction(n.callback)){n.callback()}s.fulfill()};if(i.length>0){BX.load(i,a)}else{a()}return s};BX.insertAfter=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)};BX.prepend=function(e,t){t.insertBefore(e,t.firstChild)};BX.append=function(e,t){t.appendChild(e)};BX.addClass=function(e,t){var n;e=BX(e);t=BX.util.trim(t);if(t=="")return e;if(e){if(!e.className){e.className=t}else if(!!e.classList&&t.indexOf(" ")<0){e.classList.add(t)}else{n=(t||"").split(r.space);var i=" "+e.className+" ";for(var o=0,s=n.length;o<s;o++){if(i.indexOf(" "+n[o]+" ")<0){e.className+=" "+n[o]}}}}return e};BX.removeClass=function(e,t){e=BX(e);if(e){if(e.className&&!!t){if(BX.type.isString(t)){if(!!e.classList&&t.indexOf(" ")<0){e.classList.remove(t)}else{var n=t.split(r.space),i=" "+e.className+" ";for(var o=0,s=n.length;o<s;o++){i=i.replace(" "+n[o]+" "," ")}e.className=BX.util.trim(i)}}else{e.className=""}}}return e};BX.toggleClass=function(e,t){var n;e=BX(e);if(BX.type.isArray(t)){n=" "+e.className+" ";for(var i=0,r=t.length;i<r;i++){if(BX.hasClass(e,t[i])){n=(" "+n+" ").replace(" "+t[i]+" "," ");n+=" "+t[i>=r-1?0:i+1];i--;break}}if(i==r)e.className+=" "+t[0];else e.className=n;e.className=BX.util.trim(e.className)}else if(BX.type.isNotEmptyString(t)){if(!!e.classList){e.classList.toggle(t)}else{n=e.className;if(BX.hasClass(e,t)){n=(" "+n+" ").replace(" "+t+" "," ")}else{n+=" "+t}e.className=BX.util.trim(n)}}return e};BX.hasClass=function(e,t){e=BX(e);if(!e||!BX.type.isDomNode(e)){BX.debug(e);return false}if(!e.className||!t){return false}if(!!e.classList&&!!t&&t.indexOf(" ")<0){return e.classList.contains(BX.util.trim(t))}else return(" "+e.className+" ").indexOf(" "+t+" ")>=0};BX.setOpacity=function(e,t){if(e.style.filter!=null){e.style.zoom="100%";if(t==100){e.style.filter=""}else{e.style.filter="alpha(opacity="+t.toString()+")"}}else if(e.style.opacity!=null){e.style.opacity=(t/100).toString()}else if(e.style.MozOpacity!=null){e.style.MozOpacity=(t/100).toString()}};BX.hoverEvents=function(e){if(e)return BX.adjust(e,{events:BX.hoverEvents()});else return{mouseover:BX.hoverEventsHover,mouseout:BX.hoverEventsHout}};BX.hoverEventsHover=function(){BX.addClass(this,"bx-hover");this.BXHOVER=true};BX.hoverEventsHout=function(){BX.removeClass(this,"bx-hover");this.BXHOVER=false};BX.focusEvents=function(e){if(e)return BX.adjust(e,{events:BX.focusEvents()});else return{mouseover:BX.focusEventsFocus,mouseout:BX.focusEventsBlur}};BX.focusEventsFocus=function(){BX.addClass(this,"bx-focus");this.BXFOCUS=true};BX.focusEventsBlur=function(){BX.removeClass(this,"bx-focus");this.BXFOCUS=false};BX.setUnselectable=function(e){e.style.userSelect=e.style.MozUserSelect=e.style.WebkitUserSelect=e.style.KhtmlUserSelect=e.style="none";e.setAttribute("unSelectable","on")};BX.setSelectable=function(e){e.style.userSelect=e.style.MozUserSelect=e.style.WebkitUserSelect=e.style.KhtmlUserSelect=e.style="";e.removeAttribute("unSelectable")};BX.styleIEPropertyName=function(e){if(e=="float")e=BX.browser.IsIE()?"styleFloat":"cssFloat";else{var t=BX.browser.isPropertySupported(e);if(t){e=t}else{var n=/(\-([a-z]){1})/g;if(n.test(e)){e=e.replace(n,function(){return arguments[2].toUpperCase()})}}}return e};BX.style=function(e,t,n){if(!BX.type.isElementNode(e))return null;if(n==null){var i;if(e.currentStyle)i=e.currentStyle[BX.styleIEPropertyName(t)];else if(window.getComputedStyle){var r=BX.browser.isPropertySupported(t,true);if(!!r)t=r;i=BX.GetContext(e).getComputedStyle(e,null).getPropertyValue(t)}if(!i)i="";return i}else{e.style[BX.styleIEPropertyName(t)]=n;return e}};BX.focus=function(e){try{e.focus();return true}catch(t){return false}};BX.firstChild=function(e){var t=e.firstChild;while(t&&!BX.type.isElementNode(t)){t=t.nextSibling}return t};BX.lastChild=function(e){var t=e.lastChild;while(t&&!BX.type.isElementNode(t)){t=t.previousSibling}return t};BX.previousSibling=function(e){var t=e.previousSibling;while(t&&!BX.type.isElementNode(t)){t=t.previousSibling}return t};BX.nextSibling=function(e){var t=e.nextSibling;while(t&&!BX.type.isElementNode(t)){t=t.nextSibling}return t};BX.findChildrenByClassName=function(e,t,n){if(!e||!e.childNodes)return null;var r=[];if(typeof e.getElementsByClassName=="undefined"){n=n!==false;r=BX.findChildren(e,{className:t},n)}else{var o=e.getElementsByClassName(t);for(i=0,l=o.length;i<l;i++){r[i]=o[i]}}return r};BX.findChildByClassName=function(e,t,n){if(!e||!e.childNodes)return null;var i=null;if(typeof e.getElementsByClassName=="undefined"){n=n!==false;i=BX.findChild(e,{className:t},n)}else{var r=e.getElementsByClassName(t);if(r&&typeof r[0]!="undefined"){i=r[0]}else{i=null}}return i};BX.findChildren=function(e,t,n){return BX.findChild(e,t,n,true)};BX.findChild=function(e,t,n,i){if(!e||!e.childNodes)return null;n=!!n;i=!!i;var r=e.childNodes.length,o=[];for(var s=0;s<r;s++){var a=e.childNodes[s];if(_checkNode(a,t)){if(i)o.push(a);else return a}if(n==true){var l=BX.findChild(a,t,n,i);if(l){if(i)o=BX.util.array_merge(o,l);else return l}}}if(i||o.length>0)return o;else return null};BX.findParent=function(e,t,n){if(!e)return null;var i=e;while(i.parentNode){var r=i.parentNode;if(_checkNode(r,t))return r;i=r;if(!!n&&(BX.type.isFunction(n)||typeof n=="object")){if(BX.type.isElementNode(n)){if(i==n)break}else{if(_checkNode(i,n))break}}}return null};BX.findNextSibling=function(e,t){if(!e)return null;var n=e;while(n.nextSibling){var i=n.nextSibling;if(_checkNode(i,t))return i;n=i}return null};BX.findPreviousSibling=function(e,t){if(!e)return null;var n=e;while(n.previousSibling){var i=n.previousSibling;if(_checkNode(i,t))return i;n=i}return null};BX.checkNode=function(e,t){return _checkNode(e,t)};BX.findFormElements=function(e){if(BX.type.isString(e))e=document.forms[e]||BX(e);var t=[];if(BX.type.isElementNode(e)){if(e.tagName.toUpperCase()=="FORM"){t=e.elements}else{t=BX.findChildren(e,CHECK_FORM_ELEMENTS,true)}}return t};BX.isParentForNode=function(e,t){if(!BX.type.isDomNode(e)||!BX.type.isDomNode(t))return false;while(true){if(e==t)return true;if(t&&t.parentNode)t=t.parentNode;else break}return false};BX.clone=function(e,t){var n,i,r;if(t!==false)t=true;if(e===null)return null;if(BX.type.isDomNode(e)){n=e.cloneNode(t)}else if(typeof e=="object"){if(BX.type.isArray(e)){n=[];for(i=0,r=e.length;i<r;i++){if(typeof e[i]=="object"&&t)n[i]=BX.clone(e[i],t);else n[i]=e[i]}}else{n={};if(e.constructor){if(BX.type.isDate(e))n=new Date(e);else n=new e.constructor}for(i in e){if(typeof e[i]=="object"&&t)n[i]=BX.clone(e[i],t);else n[i]=e[i]}}}else{n=e}return n};BX.merge=function(){var e=Array.prototype.slice.call(arguments);if(e.length<2)return{};var t=e.shift();for(var n=0;n<e.length;n++){for(var i in e[n]){if(typeof e[n]=="undefined"||e[n]==null)continue;if(e[n].hasOwnProperty(i)){if(typeof e[n][i]=="undefined"||e[n][i]==null)continue;if(typeof e[n][i]=="object"&&!BX.type.isDomNode(e[n][i])&&typeof e[n][i]["isUIWidget"]=="undefined"){var r="length"in e[n][i];if(typeof t[i]!="object")t[i]=r?[]:{};if(r)BX.util.array_merge(t[i],e[n][i]);else BX.merge(t[i],e[n][i])}else t[i]=e[n][i]}}}return t};BX.mergeEx=function(){var e=Array.prototype.slice.call(arguments);if(e.length<2){return{}}var t=e.shift();for(var n=0;n<e.length;n++){for(var i in e[n]){if(typeof e[n]=="undefined"||e[n]==null||!e[n].hasOwnProperty(i)){continue}if(BX.type.isPlainObject(e[n][i])&&BX.type.isPlainObject(t[i])){BX.mergeEx(t[i],e[n][i])}else{t[i]=BX.type.isPlainObject(e[n][i])?BX.clone(e[n][i]):e[n][i]}}}return t};BX.bind=function(e,t,n){if(!e){return}if(t==="mousewheel"){BX.bind(e,"DOMMouseScroll",n)}else if(t==="transitionend"){BX.bind(e,"webkitTransitionEnd",n);BX.bind(e,"msTransitionEnd",n);BX.bind(e,"oTransitionEnd",n)}else if(t==="bxchange"){BX.bind(e,"change",n);BX.bind(e,"cut",n);BX.bind(e,"paste",n);BX.bind(e,"drop",n);BX.bind(e,"keyup",n);return}if(e.addEventListener){e.addEventListener(t,n,false)}else if(e.attachEvent){e.attachEvent("on"+t,BX.proxy(n,e))}else{try{e["on"+t]=n}catch(i){BX.debug(i)}}eventsList[eventsList.length]={element:e,event:t,fn:n}};BX.unbind=function(e,t,n){if(!e){return}if(t==="mousewheel"){BX.unbind(e,"DOMMouseScroll",n)}else if(t==="transitionend"){BX.unbind(e,"webkitTransitionEnd",n);BX.unbind(e,"msTransitionEnd",n);BX.unbind(e,"oTransitionEnd",n)}else if(t==="bxchange"){BX.unbind(e,"change",n);BX.unbind(e,"cut",n);BX.unbind(e,"paste",n);BX.unbind(e,"drop",n);BX.unbind(e,"keyup",n);return}if(e.removeEventListener){e.removeEventListener(t,n,false)}else if(e.detachEvent){e.detachEvent("on"+t,BX.proxy(n,e))}else{e["on"+t]=null}};BX.getEventButton=function(e){e=e||window.event;var t=0;if(typeof e.which!="undefined"){switch(e.which){case 1:t=t|BX.MSLEFT;break;case 2:t=t|BX.MSMIDDLE;break;case 3:t=t|BX.MSRIGHT;break}}else if(typeof e.button!="undefined"){t=event.button}return t||BX.MSLEFT};BX.unbindAll=function(e){if(!e)return;for(var t=0,n=eventsList.length;t<n;t++){try{if(eventsList[t]&&(null==e||e==eventsList[t].element)){BX.unbind(eventsList[t].element,eventsList[t].event,eventsList[t].fn);eventsList[t]=null}}catch(i){}}if(null==e){eventsList=[]}};var captured_events=null,_bind=null;BX.CaptureEvents=function(e,t){if(_bind)return;_bind=BX.bind;captured_events=[];BX.bind=function(n,i,r){if(n===e&&i===t)captured_events.push(r);_bind.apply(this,arguments)}};BX.CaptureEventsGet=function(){if(_bind){BX.bind=_bind;var e=captured_events;_bind=null;captured_events=null;return e}return null};BX.fireEvent=function(e,t){var n=false,i=null;if(BX.type.isDomNode(e)){n=true;if(document.createEventObject){if(eventTypes[t]!="MouseEvent"){i=document.createEventObject();i.type=t;n=e.fireEvent("on"+t,i)}if(e[t]){e[t]()}}else{i=null;switch(eventTypes[t]){case"MouseEvent":i=document.createEvent("MouseEvent");i.initMouseEvent(t,true,true,top,1,0,0,0,0,0,0,0,0,0,null);break;default:i=document.createEvent("Event");i.initEvent(t,true,true)}n=e.dispatchEvent(i)}}return n};BX.getWheelData=function(e){e=e||window.event;e.wheelData=e.detail?e.detail*-1:e.wheelDelta/40;return e.wheelData};BX.proxy_context=null;BX.delegate=function(e,t){if(!e||!t)return e;return function(){var n=BX.proxy_context;BX.proxy_context=this;var i=e.apply(t,arguments);BX.proxy_context=n;return i}};BX.delegateLater=function(e,t,n){return function(){if(t[e]){var i=BX.proxy_context;BX.proxy_context=this;var r=t[e].apply(n||t,arguments);BX.proxy_context=i;return r}return null}};BX._initObjectProxy=function(e){if(typeof e["__proxy_id_"+proxySalt]=="undefined"){e["__proxy_id_"+proxySalt]=proxyList.length;proxyList[e["__proxy_id_"+proxySalt]]={}}};BX.proxy=function(e,t){if(!e||!t)return e;BX._initObjectProxy(t);if(typeof e["__proxy_id_"+proxySalt]=="undefined")e["__proxy_id_"+proxySalt]=proxyId++;if(!proxyList[t["__proxy_id_"+proxySalt]][e["__proxy_id_"+proxySalt]])proxyList[t["__proxy_id_"+proxySalt]][e["__proxy_id_"+proxySalt]]=BX.delegate(e,t);return proxyList[t["__proxy_id_"+proxySalt]][e["__proxy_id_"+proxySalt]]};BX.defer=function(e,t){if(!!t)return BX.defer_proxy(e,t);else return function(){var t=arguments;setTimeout(function(){e.apply(this,t)},10)}};BX.defer_proxy=function(e,t){if(!e||!t)return e;BX.proxy(e,t);this._initObjectProxy(t);if(typeof e["__defer_id_"+proxySalt]=="undefined")e["__defer_id_"+proxySalt]=proxyId++;if(!proxyList[t["__proxy_id_"+proxySalt]][e["__defer_id_"+proxySalt]]){proxyList[t["__proxy_id_"+proxySalt]][e["__defer_id_"+proxySalt]]=BX.defer(BX.delegate(e,t))}return proxyList[t["__proxy_id_"+proxySalt]][e["__defer_id_"+proxySalt]]};BX.once=function(e,t,n){if(typeof n["__once_id_"+t+"_"+proxySalt]=="undefined"){n["__once_id_"+t+"_"+proxySalt]=proxyId++}this._initObjectProxy(e);if(!proxyList[e["__proxy_id_"+proxySalt]][n["__once_id_"+t+"_"+proxySalt]]){var i=function(){BX.unbind(e,t,i);n.apply(this,arguments)};proxyList[e["__proxy_id_"+proxySalt]][n["__once_id_"+t+"_"+proxySalt]]=i}return proxyList[e["__proxy_id_"+proxySalt]][n["__once_id_"+t+"_"+proxySalt]]};BX.bindDelegate=function(e,t,n,i){var r=BX.delegateEvent(n,i);BX.bind(e,t,r);return r};BX.delegateEvent=function(e,t){return function(n){n=n||window.event;var i=n.target||n.srcElement;while(i!=this){if(_checkNode(i,e)){return t.call(i,n)}if(i&&i.parentNode)i=i.parentNode;else break}return null}};BX.False=function(){return false};BX.DoNothing=function(){};BX.denyEvent=function(e,t){deniedEvents.push([e,t,e["on"+t]]);e["on"+t]=BX.DoNothing};BX.allowEvent=function(e,t){for(var n=0,i=deniedEvents.length;n<i;n++){if(deniedEvents[n][0]==e&&deniedEvents[n][1]==t){e["on"+t]=deniedEvents[n][2];BX.util.deleteFromArray(deniedEvents,n);return}}};BX.fixEventPageXY=function(e){BX.fixEventPageX(e);BX.fixEventPageY(e);return e};BX.fixEventPageX=function(e){if(e.pageX==null&&e.clientX!=null){e.pageX=e.clientX+(document.documentElement&&document.documentElement.scrollLeft||document.body&&document.body.scrollLeft||0)-(document.documentElement.clientLeft||0)}return e};BX.fixEventPageY=function(e){if(e.pageY==null&&e.clientY!=null){e.pageY=e.clientY+(document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0)-(document.documentElement.clientTop||0)}return e};BX.PreventDefault=function(e){if(!e)e=window.event;if(e.stopPropagation){e.preventDefault();e.stopPropagation()}else{e.cancelBubble=true;e.returnValue=false}return false};BX.eventReturnFalse=function(e){e=e||window.event;if(e&&e.preventDefault)e.preventDefault();else e.returnValue=false;return false};BX.eventCancelBubble=function(e){e=e||window.event;if(e&&e.stopPropagation)e.stopPropagation();else e.cancelBubble=true};BX.addCustomEvent=function(e,t,n){if(BX.type.isString(e)){n=t;t=e;e=window}t=t.toUpperCase();if(!customEvents[t])customEvents[t]=[];customEvents[t].push({handler:n,obj:e})};BX.removeCustomEvent=function(e,t,n){if(BX.type.isString(e)){n=t;t=e;e=window}t=t.toUpperCase();if(!customEvents[t])return;for(var i=0,r=customEvents[t].length;i<r;i++){if(!customEvents[t][i])continue;if(customEvents[t][i].handler==n&&customEvents[t][i].obj==e){delete customEvents[t][i];return}}};BX.onCustomEvent=function(e,t,n,i){if(BX.type.isString(e)){i=n;n=t;t=e;e=window}t=t.toUpperCase();if(!customEvents[t])return;if(!n)n=[];var r;for(var o=0,s=customEvents[t].length;o<s;o++){r=customEvents[t][o];if(!r||!r.handler)continue;if(r.obj==window||r.obj==e){r.handler.apply(e,!!i?BX.clone(n):n)}}};BX.bindDebouncedChange=function(e,t,n,i,r){r=r||window;i=i||300;var o="bx-dc-previous-value";BX.data(e,o,e.value);var s=function(t,n){var i=BX.data(e,o);if(typeof i=="undefined"||i!=n){if(typeof r!="object")t(n);else t.apply(r,[n])}};var a=BX.debounce(function(){var n=e.value;s(t,n);BX.data(e,o,n)},i);BX.bind(e,"keyup",a);BX.bind(e,"change",a);BX.bind(e,"input",a);if(BX.type.isFunction(n)){var l=function(){s(n,e.value)};BX.bind(e,"keyup",l);BX.bind(e,"change",l);BX.bind(e,"input",l)}};BX.parseJSON=function(data,context){var result=null;if(BX.type.isString(data)){try{if(data.indexOf("\n")>=0)eval("result = "+data);else result=new Function("return "+data)()}catch(e){BX.onCustomEvent(context,"onParseJSONFailure",[data,context])}}else if(BX.type.isPlainObject(data)){return data}return result};BX.isReady=false;BX.ready=function(e){bindReady();if(!BX.type.isFunction(e)){BX.debug("READY: not a function! ",e)}else{if(BX.isReady)e.call(document);else if(readyList)readyList.push(e)}};BX.submit=function(e,t,n,i){t=t||"save";if(!e["BXFormSubmit_"+t]){e["BXFormSubmit_"+t]=e.appendChild(BX.create("INPUT",{props:{type:"submit",name:t,value:n||"Y"},style:{display:"none"}}))}if(e.sessid)e.sessid.value=BX.bitrix_sessid();setTimeout(BX.delegate(function(){BX.fireEvent(this,"click");if(i)i()},e["BXFormSubmit_"+t]),10)};BX.debounce=function(e,t,n){var i=0;return function(){n=n||this;var r=arguments;clearTimeout(i);i=setTimeout(function(){e.apply(n,r)},t)}};BX.throttle=function(e,t,n){var i=0,r=null,o;return function(){n=n||this;r=arguments;o=true;if(!i){var s=function(){if(o){e.apply(n,r);o=false;i=setTimeout(s,t)}else{i=null}};s()}}};BX.browser={IsIE:function(){return bIE},IsIE6:function(){return/MSIE 6/i.test(navigator.userAgent)},IsIE7:function(){return/MSIE 7/i.test(navigator.userAgent)},IsIE8:function(){return/MSIE 8/i.test(navigator.userAgent)},IsIE9:function(){return!!document.documentMode&&document.documentMode>=9},IsIE10:function(){return!!document.documentMode&&document.documentMode>=10},IsIE11:function(){return BX.browser.DetectIeVersion()>=11},IsOpera:function(){return bOpera},IsSafari:function(){return bSafari},IsFirefox:function(){return bFirefox},IsChrome:function(){return bChrome},IsMac:function(){return/Macintosh/i.test(navigator.userAgent)},IsAndroid:function(){return/Android/i.test(navigator.userAgent)},IsIOS:function(){return/(iPad;)|(iPhone;)/i.test(navigator.userAgent)},IsMobile:function(){return/(ipad|iphone|android|mobile|touch)/i.test(navigator.userAgent)},DetectIeVersion:function(){if(BX.browser.IsOpera()||BX.browser.IsSafari()||BX.browser.IsFirefox()||BX.browser.IsChrome()){return-1}var e=-1;if(!!window.MSStream&&!window.ActiveXObject&&"ActiveXObject"in window){e=11}else if(BX.browser.IsIE10()){e=10}else if(BX.browser.IsIE9()){e=9}else if(BX.browser.IsIE()){e=8}if(e==-1||e==8){var t;if(navigator.appName=="Microsoft Internet Explorer"){t=new RegExp("MSIE ([0-9]+[.0-9]*)");if(t.exec(navigator.userAgent)!=null)e=parseFloat(RegExp.$1)}else if(navigator.appName=="Netscape"){e=11;t=new RegExp("Trident/.*rv:([0-9]+[.0-9]*)");if(t.exec(navigator.userAgent)!=null)e=parseFloat(RegExp.$1)}}return e},IsDoctype:function(e){e=e||document;if(e.compatMode)return e.compatMode=="CSS1Compat";return e.documentElement&&e.documentElement.clientHeight},SupportLocalStorage:function(){return!!BX.localStorage&&!!BX.localStorage.checkBrowser()},addGlobalClass:function(){var e="bx-core";if(BX.hasClass(document.documentElement,e)){return}if(BX.browser.IsIOS()){e+=" bx-ios"}else if(BX.browser.IsMac()){e+=" bx-mac"}else if(BX.browser.IsAndroid()){e+=" bx-android"}e+=BX.browser.IsMobile()?" bx-touch":" bx-no-touch";e+=BX.browser.isRetina()?" bx-retina":" bx-no-retina";var t=-1;if(/AppleWebKit/.test(navigator.userAgent)){e+=" bx-chrome"}else if((t=BX.browser.DetectIeVersion())>0){e+=" bx-ie bx-ie"+t;if(t>7&&t<10&&!BX.browser.IsDoctype()){e+=" bx-quirks"}}else if(/Opera/.test(navigator.userAgent)){e+=" bx-opera"}else if(/Gecko/.test(navigator.userAgent)){e+=" bx-firefox"}BX.addClass(document.documentElement,e)},isPropertySupported:function(e,t){if(!BX.type.isNotEmptyString(e))return false;var n=e.indexOf("-")>-1?f(e):e;t=!!t;var i=n.charAt(0).toUpperCase()+n.slice(1);var r=(n+" "+["Webkit","Moz","O","ms"].join(i+" ")+i).split(" ");var o=document.body||document.documentElement;for(var s=0;s<r.length;s++){var a=r[s];if(o.style[a]!==undefined){var l=a==n?"":"-"+a.substr(0,a.length-n.length).toLowerCase()+"-";return t?l+u(n):a}}function u(e){return e.replace(/([A-Z])/g,function(){return"-"+arguments[1].toLowerCase()})}function f(e){var t=/(\-([a-z]){1})/g;if(t.test(e))return e.replace(t,function(){return arguments[2].toUpperCase()});else return e}return false},addGlobalFeatures:function(e,t){if(!BX.type.isArray(e))return;var n=[];for(var i=0;i<e.length;i++){var r=!!BX.browser.isPropertySupported(e[i]);n.push("bx-"+(r?"":"no-")+e[i].toLowerCase())}BX.addClass(document.documentElement,n.join(" "))},isRetina:function(){return window.devicePixelRatio&&window.devicePixelRatio>=2}};BX.show=function(e,t){if(e.BXDISPLAY||!_checkDisplay(e,t)){e.style.display=e.BXDISPLAY}};BX.hide=function(e,t){if(!e.BXDISPLAY)_checkDisplay(e,t);e.style.display="none"};BX.toggle=function(e,t){if(!t&&BX.type.isElementNode(e)){var n=true;if(e.BXDISPLAY)n=!_checkDisplay(e);else n=e.style.display=="none";if(n)BX.show(e);else BX.hide(e)}else if(BX.type.isArray(t)){for(var i=0,r=t.length;i<r;i++){if(e==t[i]){e=t[i==r-1?0:i+1];break}}if(i==r)e=t[0]}return e};BX.util={array_values:function(e){if(!BX.type.isArray(e))return BX.util._array_values_ob(e);var t=[];for(var n=0,i=e.length;n<i;n++)if(e[n]!==null&&typeof e[n]!="undefined")t.push(e[n]);return t},_array_values_ob:function(e){var t=[];for(var n in e)if(e[n]!==null&&typeof e[n]!="undefined")t.push(e[n]);return t},array_keys:function(e){if(!BX.type.isArray(e))return BX.util._array_keys_ob(e);var t=[];for(var n=0,i=e.length;n<i;n++)if(e[n]!==null&&typeof e[n]!="undefined")t.push(n);return t},_array_keys_ob:function(e){var t=[];for(var n in e)if(e[n]!==null&&typeof e[n]!="undefined")t.push(n);return t},object_keys:function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t},array_merge:function(e,t){if(!BX.type.isArray(e))e=[];if(!BX.type.isArray(t))t=[];var n=e.length,i=0;if(typeof t.length==="number"){for(var r=t.length;i<r;i++){e[n++]=t[i]}}else{while(t[i]!==undefined){e[n++]=t[i++]}}e.length=n;return e},array_unique:function(e){var t=0,n,i=e.length;if(i<2)return e;for(;t<i-1;t++){for(n=t+1;n<i;n++){if(e[t]==e[n]){e.splice(n--,1);i--}}}return e},in_array:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return true}return false},array_search:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return n}return-1},object_search_key:function(e,t){if(typeof t[e]!="undefined")return t[e];for(var n in t){if(typeof t[n]=="object"){var i=BX.util.object_search_key(e,t[n]);if(i!==false)return i}}return false},trim:function(e){if(BX.type.isString(e))return e.replace(r.ltrim,"").replace(r.rtrim,"");else return e},urlencode:function(e){return encodeURIComponent(e)},deleteFromArray:function(e,t){return e.slice(0,t).concat(e.slice(t+1))},insertIntoArray:function(e,t,n){return e.slice(0,t).concat([n]).concat(e.slice(t))},htmlspecialchars:function(e){if(!e.replace)return e;return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},htmlspecialcharsback:function(e){if(!e.replace)return e;return e.replace(/\&quot;/g,'"').replace(/&#39;/g,"'").replace(/\&lt;/g,"<").replace(/\&gt;/g,">").replace(/\&amp;/g,"&")},preg_quote:function(e,t){if(!e.replace)return e;return e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\"+(t||"")+"-]","g"),"\\$&")},jsencode:function(e){if(!e||!e.replace)return e;var t=[{c:"\\\\",r:"\\\\"},{c:"\\t",r:"\\t"},{c:"\\n",r:"\\n"},{c:"\\r",r:"\\r"},{c:'"',r:'\\"'},{c:"'",r:"\\'"},{c:"<",r:"\\x3C"},{c:">",r:"\\x3E"},{c:"\\u2028",r:"\\u2028"},{c:"\\u2029",r:"\\u2029"}];for(var n=0;n<t.length;n++)e=e.replace(new RegExp(t[n].c,"g"),t[n].r);return e},nl2br:function(e){if(!e||!e.replace)return e;return e.replace(/([^>])\n/g,"$1<br/>")},str_pad:function(e,t,n,i){n=n||" ";i=i||"right";e=e.toString();if(i=="left")return BX.util.str_pad_left(e,t,n);else return BX.util.str_pad_right(e,t,n)},str_pad_left:function(e,t,n){var i=e.length,r=n.length;if(i>=t)return e;for(;i<t;i+=r)e=n+e;return e},str_pad_right:function(e,t,n){var i=e.length,r=n.length;if(i>=t)return e;for(;i<t;i+=r)e+=n;return e},strip_tags:function(e){return e.split(/<[^>]+>/g).join("")},strip_php_tags:function(e){return e.replace(/<\?(.|[\r\n])*?\?>/g,"")},popup:function(e,t,n){var i,r;if(BX.browser.IsOpera()){i=document.body.offsetWidth;r=document.body.offsetHeight}else{i=screen.width;r=screen.height}return window.open(e,"","status=no,scrollbars=yes,resizable=yes,width="+t+",height="+n+",top="+Math.floor((r-n)/2-14)+",left="+Math.floor((i-t)/2-5))},objectSort:function(e,t,n){n=n=="asc"?"asc":"desc";var i=[],r;for(r in e){if(e.hasOwnProperty(r)&&e[r][t]){i.push([r,e[r][t]])}}if(n=="asc"){i.sort(function(e,t){var n,i;if(!isNaN(e[1])&&!isNaN(t[1])){n=parseInt(e[1]);i=parseInt(t[1])}else{n=e[1].toString().toLowerCase();i=t[1].toString().toLowerCase()}if(n>i)return 1;else if(n<i)return-1;else return 0})}else{i.sort(function(e,t){var n,i;if(!isNaN(e[1])&&!isNaN(t[1])){n=parseInt(e[1]);i=parseInt(t[1])}else{n=e[1].toString().toLowerCase();i=t[1].toString().toLowerCase()}if(n<i)return 1;else if(n>i)return-1;else return 0})}var o=Array();for(r=0;r<i.length;r++){o.push(e[i[r][0]])}return o},hex2rgb:function(e){var t=e.replace(/[# ]/g,"").replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3").match(/.{2}/g);for(var n=0;n<3;n++){t[n]=parseInt(t[n],16)}return{r:t[0],g:t[1],b:t[2]}},remove_url_param:function(e,t){if(BX.type.isArray(t)){for(var n=0;n<t.length;n++){e=BX.util.remove_url_param(e,t[n])}}else{var i,r;if((i=e.indexOf("?"))>=0&&i!=e.length-1){r=e.substr(i+1);e=e.substr(0,i+1);r=r.replace(new RegExp("(^|&)"+t+"=[^&#]*","i"),"");r=r.replace(/^&/,"");if(BX.type.isNotEmptyString(r)){e=e+r}else{e=e.substr(0,e.length-1)}}}return e},add_url_param:function(e,t){var n;var i="";var r="";var o;for(n in t){e=this.remove_url_param(e,n);i+=(i!=""?"&":"")+n+"="+t[n]}if((o=e.indexOf("#"))>=0){r=e.substr(o);e=e.substr(0,o)}if((o=e.indexOf("?"))>=0){e=e+(o!=e.length-1?"&":"")+i+r}else{e=e+"?"+i+r}return e},even:function(e){return parseInt(e)%2==0},hashCode:function(e){if(!BX.type.isNotEmptyString(e)){return 0}var t=0;for(var n=0;n<e.length;n++){var i=e.charCodeAt(n);t=(t<<5)-t+i;t=t&t}return t},getRandomString:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";var n=t.length;e=parseInt(e);if(isNaN(e)||e<=0){e=8}var i="";for(var r=0;r<e;r++){i+=t.charAt(Math.floor(Math.random()*n))}return i},number_format:function(e,t,n,i){var r,o,s,a,l,u="";t=Math.abs(t);if(isNaN(t)||t<0){t=2}n=n||",";if(typeof i==="undefined")i=".";e=(+e||0).toFixed(t);if(e<0){u="-";e=-e}r=parseInt(e,10)+"";o=r.length>3?r.length%3:0;l=o?r.substr(0,o)+i:"";s=r.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+i);a=t?n+Math.abs(e-r).toFixed(t).replace(/-/,"0").slice(2):"";return u+l+s+a},getExtension:function(e){e=e||"";var t=e.split("?")[0].split(".");return t[t.length-1].toLowerCase()},addObjectToForm:function(e,t,n){if(!BX.type.isString(n)){n=""}for(var i in e){if(!e.hasOwnProperty(i)){continue}var r=e[i];var o=n!==""?n+"["+i+"]":i;if(BX.type.isArray(r)){for(var s=0;s<r.length;s++){BX.util.addObjectToForm(r[s],t,o+"["+s.toString()+"]")}}else if(BX.type.isPlainObject(r)){BX.util.addObjectToForm(r,t,o)}else{r=BX.type.isFunction(r.toString)?r.toString():"";if(r!==""){t.appendChild(BX.create("INPUT",{attrs:{type:"hidden",name:o,value:r}}))}}}},observe:function(e,t){if(!BX.browser.IsChrome()||typeof e!="object")return false;t=t!==false;var n=function(e){e.forEach(function(e){var t=e.name+" changed";console.groupCollapsed(t);console.log("Old value: ",e.oldValue);console.log("New value: ",e.object[e.name]);console.groupEnd(t)})};if(t){Object.observe(e,n)}else{Object.unobserve(e,n)}return t}};BX.type={isString:function(e){return e===""?true:e?typeof e=="string"||e instanceof String:false},isNotEmptyString:function(e){return BX.type.isString(e)?e.length>0:false},isBoolean:function(e){return e===true||e===false},isNumber:function(e){return e===0?true:e?typeof e=="number"||e instanceof Number:false;

},isFunction:function(e){return e===null?false:typeof e=="function"||e instanceof Function},isElementNode:function(e){return e&&typeof e=="object"&&"nodeType"in e&&e.nodeType==1&&e.tagName&&e.tagName.toUpperCase()!="SCRIPT"&&e.tagName.toUpperCase()!="STYLE"&&e.tagName.toUpperCase()!="LINK"},isDomNode:function(e){return e&&typeof e=="object"&&"nodeType"in e},isArray:function(e){return e&&Object.prototype.toString.call(e)=="[object Array]"},isDate:function(e){return e&&Object.prototype.toString.call(e)=="[object Date]"},isPlainObject:function(e){if(!e||typeof e!=="object"||e.nodeType){return false}var t=Object.prototype.hasOwnProperty;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(n){return false}var i;for(i in e){}return typeof i==="undefined"||t.call(e,i)}};BX.isNodeInDom=function(e,t){return e===(t||document)?true:e.parentNode?BX.isNodeInDom(e.parentNode):false};BX.isNodeHidden=function(e){if(e===document)return false;else if(BX.style(e,"display")=="none")return true;else return e.parentNode?BX.isNodeHidden(e.parentNode):true};BX.evalPack=function(e){while(e.length>0){var t=e.shift();if(t.TYPE=="SCRIPT_EXT"||t.TYPE=="SCRIPT_SRC"){BX.loadScript(t.DATA,function(){BX.evalPack(e)});return}else if(t.TYPE=="SCRIPT"){BX.evalGlobal(t.DATA)}}};BX.evalGlobal=function(e){if(e){var t=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script");n.type="text/javascript";if(!BX.browser.IsIE()){n.appendChild(document.createTextNode(e))}else{n.text=e}t.insertBefore(n,t.firstChild);t.removeChild(n)}};BX.processHTML=function(e,t){var n,i,o,s,a,l=[],u=[];var f=[];var c=r.script.lastIndex=r.script_end.lastIndex=0;while((n=r.script.exec(e))!==null){r.script_end.lastIndex=r.script.lastIndex;var d=r.script_end.exec(e);if(d===null){break}var p=false;if((a=n[1].match(r.script_type))!==null){if(a[1]=="text/html"||a[1]=="text/template")p=true}if(p){f.push([c,r.script_end.lastIndex-c])}else{f.push([c,n.index-c]);var h=t||n[1].indexOf("bxrunfirst")!="-1";if((o=n[1].match(r.script_src))!==null){l.push({bRunFirst:h,isInternal:false,JS:o[1]})}else{var m=n.index+n[0].length;var y=e.substr(m,d.index-m);l.push({bRunFirst:h,isInternal:true,JS:y})}}c=d.index+9;r.script.lastIndex=c}f.push([c,c===0?e.length:e.length-c]);var B="";for(var X=0,g=f.length;X<g;X++){B+=e.substr(f[X][0],f[X][1])}while((i=B.match(r.style))!==null){if((s=i[0].match(r.style_href))!==null&&i[0].indexOf('media="')<0){u.push(s[1])}B=B.replace(i[0],"")}return{HTML:B,SCRIPT:l,STYLE:u}};BX.garbage=function(e,t){garbageCollectors.push({callback:e,context:t})};BX.GetDocElement=function(e){e=e||document;return BX.browser.IsDoctype(e)?e.documentElement:e.body};BX.GetContext=function(e){if(BX.type.isElementNode(e))return e.ownerDocument.parentWindow||e.ownerDocument.defaultView||window;else if(BX.type.isDomNode(e))return e.parentWindow||e.defaultView||window;else return window};BX.GetWindowInnerSize=function(e){var t,n;e=e||document;if(window.innerHeight){t=BX.GetContext(e).innerWidth;n=BX.GetContext(e).innerHeight}else if(e.documentElement&&(e.documentElement.clientHeight||e.documentElement.clientWidth)){t=e.documentElement.clientWidth;n=e.documentElement.clientHeight}else if(e.body){t=e.body.clientWidth;n=e.body.clientHeight}return{innerWidth:t,innerHeight:n}};BX.GetWindowScrollPos=function(e){var t,n;e=e||document;if(window.pageYOffset){t=BX.GetContext(e).pageXOffset;n=BX.GetContext(e).pageYOffset}else if(e.documentElement&&(e.documentElement.scrollTop||e.documentElement.scrollLeft)){t=e.documentElement.scrollLeft;n=e.documentElement.scrollTop}else if(e.body){t=e.body.scrollLeft;n=e.body.scrollTop}return{scrollLeft:t,scrollTop:n}};BX.GetWindowScrollSize=function(e){var t,n;if(!e)e=document;if(e.compatMode&&e.compatMode=="CSS1Compat"){t=e.documentElement.scrollWidth;n=e.documentElement.scrollHeight}else{if(e.body.scrollHeight>e.body.offsetHeight)n=e.body.scrollHeight;else n=e.body.offsetHeight;if(e.body.scrollWidth>e.body.offsetWidth||e.compatMode&&e.compatMode=="BackCompat"||e.documentElement&&!e.documentElement.clientWidth)t=e.body.scrollWidth;else t=e.body.offsetWidth}return{scrollWidth:t,scrollHeight:n}};BX.GetWindowSize=function(e){var t=this.GetWindowInnerSize(e);var n=this.GetWindowScrollPos(e);var i=this.GetWindowScrollSize(e);return{innerWidth:t.innerWidth,innerHeight:t.innerHeight,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollWidth:i.scrollWidth,scrollHeight:i.scrollHeight}};BX.scrollTop=function(e,t){if(typeof t!="undefined"){if(e==window){throw new Error("scrollTop() for window is not implemented")}else e.scrollTop=parseInt(t)}else{if(e==window)return BX.GetWindowScrollPos().scrollTop;return e.scrollTop}};BX.scrollLeft=function(e,t){if(typeof t!="undefined"){if(e==window){throw new Error("scrollLeft() for window is not implemented")}else e.scrollLeft=parseInt(t)}else{if(e==window)return BX.GetWindowScrollPos().scrollLeft;return e.scrollLeft}};BX.hide_object=function(e){e=BX(e);e.style.position="absolute";e.style.top="-1000px";e.style.left="-1000px";e.style.height="10px";e.style.width="10px"};BX.is_relative=function(e){var t=BX.style(e,"position");return t=="relative"||t=="absolute"};BX.is_float=function(e){var t=BX.style(e,"float");return t=="right"||t=="left"};BX.is_fixed=function(e){var t=BX.style(e,"position");return t=="fixed"};BX.pos=function(e,t){var n={top:0,right:0,bottom:0,left:0,width:0,height:0};t=!!t;if(!e)return n;if(typeof e.getBoundingClientRect!="undefined"&&e.ownerDocument==document&&!t){var i={};try{i=e.getBoundingClientRect()}catch(r){i={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight,right:e.offsetLeft+e.offsetWidth,bottom:e.offsetTop+e.offsetHeight}}var o=document.documentElement;var s=document.body;n.top=i.top+(o.scrollTop||s.scrollTop);n.left=i.left+(o.scrollLeft||s.scrollLeft);n.width=i.right-i.left;n.height=i.bottom-i.top;n.right=i.right+(o.scrollLeft||s.scrollLeft);n.bottom=i.bottom+(o.scrollTop||s.scrollTop)}else{var a=0,l=0,u=e.offsetWidth,f=e.offsetHeight;var c=true;for(;e!=null;e=e.offsetParent){if(!c&&t&&BX.is_relative(e))break;a+=e.offsetLeft;l+=e.offsetTop;if(c){c=false;continue}var d=parseInt(BX.style(e,"border-left-width")),p=parseInt(BX.style(e,"border-top-width"));if(!isNaN(d)&&d>0)a+=d;if(!isNaN(p)&&p>0)l+=p}n.top=l;n.left=a;n.width=u;n.height=f;n.right=n.left+u;n.bottom=n.top+f}for(var h in n){if(n.hasOwnProperty(h)){n[h]=Math.round(n[h])}}return n};BX.width=function(e,t){if(typeof t!="undefined")BX.style(e,"width",parseInt(t)+"px");else{if(e==window)return window.innerWidth;return BX.pos(e).width}};BX.height=function(e,t){if(typeof t!="undefined")BX.style(e,"height",parseInt(t)+"px");else{if(e==window)return window.innerHeight;return BX.pos(e).height}};BX.align=function(e,t,n,i){if(i)i=i.toLowerCase();else i="";var r=document;if(BX.type.isElementNode(e)){r=e.ownerDocument;e=BX.pos(e)}var o=e["left"],s=e["bottom"];var a=BX.GetWindowScrollPos(r);var l=BX.GetWindowInnerSize(r);if(l.innerWidth+a.scrollLeft-(e["left"]+t)<0){if(e["right"]-t>=0)o=e["right"]-t;else o=a.scrollLeft}if(l.innerHeight+a.scrollTop-(e["bottom"]+n)<0||~i.indexOf("top")){if(e["top"]-n>=0||~i.indexOf("top"))s=e["top"]-n;else s=a.scrollTop}return{left:o,top:s}};BX.scrollToNode=function(e){var t=BX(e);if(t.scrollIntoView)t.scrollIntoView(true);else{var n=BX.pos(t);window.scrollTo(n.left,n.top)}};BX.showWait=function(e,t){e=BX(e)||document.body||document.documentElement;t=t||BX.message("JS_CORE_LOADING");var n=e.id||Math.random();var i=e.bxmsg=document.body.appendChild(BX.create("DIV",{props:{id:"wait_"+n},style:{background:'url("/bitrix/js/main/core/images/wait.gif") no-repeat scroll 10px center #fcf7d1',border:"1px solid #E1B52D",color:"black",fontFamily:"Verdana,Arial,sans-serif",fontSize:"11px",padding:"10px 30px 10px 37px",position:"absolute",zIndex:"10000",textAlign:"center"},text:t}));setTimeout(BX.delegate(_adjustWait,e),10);lastWait[lastWait.length]=i;return i};BX.closeWait=function(e,t){if(e&&!t)t=e.bxmsg;if(e&&!t&&BX.hasClass(e,"bx-core-waitwindow"))t=e;if(e&&!t)t=BX("wait_"+e.id);if(!t)t=lastWait.pop();if(t&&t.parentNode){for(var n=0,i=lastWait.length;n<i;n++){if(t==lastWait[n]){lastWait=BX.util.deleteFromArray(lastWait,n);break}}t.parentNode.removeChild(t);if(e)e.bxmsg=null;BX.cleanNode(t,true)}};BX.setJSList=function(e){if(BX.type.isArray(e)){jsList=e}};BX.getJSList=function(){initJsList();return jsList};BX.setCSSList=function(e){if(BX.type.isArray(e)){cssList=e}};BX.getCSSList=function(){initCssList();return cssList};BX.getJSPath=function(e){return e.replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCSSPath=function(e){return e.replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCDNPath=function(e){return e};BX.loadScript=function(e,t,n){if(!BX.isReady){var i=arguments;BX.ready(function(){BX.loadScript.apply(this,i)});return}n=n||document;if(BX.type.isString(e))e=[e];var r=function(){return t&&BX.type.isFunction(t)?t():null};var o=function(t){if(t>=e.length)return r();if(!!e[t]){var i=BX.getJSPath(e[t]);if(isScriptLoaded(i)){o(++t)}else{var s=n.getElementsByTagName("head")[0]||n.documentElement;var a=n.createElement("script");a.src=e[t];var l=false;a.onload=a.onreadystatechange=function(){if(!l&&(!a.readyState||a.readyState=="loaded"||a.readyState=="complete")){l=true;setTimeout(function(){o(++t)},50);a.onload=a.onreadystatechange=null;if(s&&a.parentNode){s.removeChild(a)}}};jsList.push(i);return s.insertBefore(a,s.firstChild)}}else{o(++t)}return null};o(0)};BX.loadCSS=function(e,t,n){if(!BX.isReady){var i=arguments;BX.ready(function(){BX.loadCSS.apply(this,i)});return null}var r=false;if(BX.type.isString(e)){r=true;e=[e]}var o,s=e.length,a=null,l=[];if(s==0)return null;t=t||document;n=n||window;if(!n.bxhead){var u=t.getElementsByTagName("HEAD");n.bxhead=u[0];if(!n.bxhead){return null}}for(o=0;o<s;o++){var f=BX.getCSSPath(e[o]);if(isCssLoaded(f)){continue}a=document.createElement("LINK");a.href=e[o];a.rel="stylesheet";a.type="text/css";var c=getTemplateLink(n.bxhead);if(c!==null){c.parentNode.insertBefore(a,c)}else{n.bxhead.appendChild(a)}l.push(a);cssList.push(f)}if(r)return a;return l};BX.load=function(e,t,n){if(!BX.isReady){var i=arguments;BX.ready(function(){BX.load.apply(this,i)});return null}n=n||document;if(isAsync===null){isAsync="async"in n.createElement("script")||"MozAppearance"in n.documentElement.style||window.opera}return isAsync?loadAsync(e,t,n):loadAsyncEmulation(e,t,n)};BX.convert={nodeListToArray:function(e){try{return Array.prototype.slice.call(e,0)}catch(t){var n=[];for(var i=0,r=e.length;i<r;i++){n.push(e[i])}return n}}};function loadAsync(e,t,n){if(!BX.type.isArray(e)){return}function i(e){e=e||assets;for(var t in e){if(e.hasOwnProperty(t)&&e[t].state!==LOADED){return false}}return true}function r(e){e=e||BX.DoNothing;if(e._done){return}e();e._done=1}if(!BX.type.isFunction(t)){t=null}var o={},s,a;for(a=0;a<e.length;a++){s=e[a];s=getAsset(s);o[s.name]=s}for(a=0;a<e.length;a++){s=e[a];s=getAsset(s);load(s,function(){if(i(o)){r(t)}},n)}}function loadAsyncEmulation(e,t,n){function i(e){e.state=PRELOADED;if(BX.type.isArray(e.onpreload)&&e.onpreload){for(var t=0;t<e.onpreload.length;t++){e.onpreload[t].call()}}}function r(e){if(e.state===undefined){e.state=PRELOADING;e.onpreload=[];loadAsset({url:e.url,type:"cache",ext:e.ext},function(){i(e)},n)}}if(!BX.type.isArray(e)){return}if(!BX.type.isFunction(t)){t=null}var o=[].slice.call(e,1);for(var s=0;s<o.length;s++){r(getAsset(o[s]))}load(getAsset(e[0]),e.length===1?t:function(){loadAsyncEmulation.apply(null,[o,t,n])},n)}function load(e,t,n){t=t||BX.DoNothing;if(e.state===LOADED){t();return}if(e.state===PRELOADING){e.onpreload.push(function(){load(e,t,n)});return}e.state=LOADING;loadAsset(e,function(){e.state=LOADED;t()},n)}function loadAsset(e,t,n){t=t||BX.DoNothing;function i(e){s.onload=s.onreadystatechange=s.onerror=null;t()}function r(i){i=i||window.event;if(i.type==="load"||/loaded|complete/.test(s.readyState)&&(!n.documentMode||n.documentMode<9)){window.clearTimeout(e.errorTimeout);window.clearTimeout(e.cssTimeout);s.onload=s.onreadystatechange=s.onerror=null;t()}}function o(){if(e.state!==LOADED&&e.cssRetries<=20){for(var t=0,i=n.styleSheets.length;t<i;t++){if(n.styleSheets[t].href===s.href){r({type:"load"});return}}e.cssRetries++;e.cssTimeout=window.setTimeout(o,250)}}var s;var a=BX.type.isNotEmptyString(e.ext)?e.ext:BX.util.getExtension(e.url);if(a==="css"){s=n.createElement("link");s.type="text/"+(e.type||"css");s.rel="stylesheet";s.href=e.url;e.cssRetries=0;e.cssTimeout=window.setTimeout(o,500)}else{s=n.createElement("script");s.type="text/"+(e.type||"javascript");s.src=e.url}s.onload=s.onreadystatechange=r;s.onerror=i;s.async=false;s.defer=false;e.errorTimeout=window.setTimeout(function(){i({type:"timeout"})},7e3);if(a==="css"){cssList.push(BX.getCSSPath(e.url))}else{jsList.push(BX.getJSPath(e.url))}var l=null;var u=n.head||n.getElementsByTagName("head")[0];if(a==="css"&&(l=getTemplateLink(u))!==null){l.parentNode.insertBefore(s,l)}else{u.insertBefore(s,u.lastChild)}}function getAsset(e){var t={};if(typeof e==="object"){t=e;t.name=t.name?t.name:BX.util.hashCode(e.url)}else{t={name:BX.util.hashCode(e),url:e}}var n=BX.type.isNotEmptyString(t.ext)?t.ext:BX.util.getExtension(t.url);if(n==="css"&&isCssLoaded(t.url)||isScriptLoaded(t.url)){t.state=LOADED}var i=assets[t.name];if(i&&i.url===t.url){return i}assets[t.name]=t;return t}function isCssLoaded(e){initCssList();return BX.util.in_array(BX.getCSSPath(e),cssList)}function initCssList(){if(!cssInit){var e=document.getElementsByTagName("link");if(!!e&&e.length>0){for(var t=0;t<e.length;t++){var n=e[t].getAttribute("href");if(BX.type.isNotEmptyString(n)){cssList.push(BX.getCSSPath(n))}}}cssInit=true}}function getTemplateLink(e){var t=function(t){var n=e.getElementsByTagName(t);for(var i=0,r=n.length;i<r;i++){var o=n[i].getAttribute("data-template-style");if(BX.type.isNotEmptyString(o)&&o=="true"){return n[i]}}return null};var n=t("link");if(n===null){n=t("style")}return n}function isScriptLoaded(e){initJsList();return BX.util.in_array(BX.getJSPath(e),jsList)}function initJsList(){if(!jsInit){var e=document.getElementsByTagName("script");if(!!e&&e.length>0){for(var t=0;t<e.length;t++){var n=e[t].getAttribute("src");if(BX.type.isNotEmptyString(n)){jsList.push(BX.getJSPath(n))}}}jsInit=true}}BX.reload=function(e,t){if(e===true){t=true;e=null}var n=e||top.location.href;var i=n.indexOf("#"),r="";if(i!=-1){r=n.substr(i);n=n.substr(0,i)}if(t&&n.indexOf("clear_cache=Y")<0)n+=(n.indexOf("?")==-1?"?":"&")+"clear_cache=Y";if(r){if(t&&(r.substr(0,5)=="view/"||r.substr(0,6)=="#view/")&&r.indexOf("clear_cache%3DY")<0)r+=(r.indexOf("%3F")==-1?"%3F":"%26")+"clear_cache%3DY";n=n.replace(/(\?|\&)_r=[\d]*/,"");n+=(n.indexOf("?")==-1?"?":"&")+"_r="+Math.round(Math.random()*1e4)+r}top.location.href=n};BX.clearCache=function(){BX.showWait();BX.reload(true)};BX.template=function(e,t,n){BX.ready(function(){_processTpl(BX(e),t,n)})};BX.isAmPmMode=function(){return BX.message("FORMAT_DATETIME").match("T")!=null};BX.formatDate=function(e,t){e=e||new Date;var n=e.getHours()||e.getMinutes()||e.getSeconds(),i=!!t?t:n?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE");return i.replace(/YYYY/gi,e.getFullYear()).replace(/MMMM/gi,BX.util.str_pad_left((e.getMonth()+1).toString(),2,"0")).replace(/MM/gi,BX.util.str_pad_left((e.getMonth()+1).toString(),2,"0")).replace(/DD/gi,BX.util.str_pad_left(e.getDate().toString(),2,"0")).replace(/HH/gi,BX.util.str_pad_left(e.getHours().toString(),2,"0")).replace(/MI/gi,BX.util.str_pad_left(e.getMinutes().toString(),2,"0")).replace(/SS/gi,BX.util.str_pad_left(e.getSeconds().toString(),2,"0"))};BX.formatName=function(e,t,n){e=e||{};t=t||"";var i={TITLE:e["TITLE"]||"",NAME:e["NAME"]||"",LAST_NAME:e["LAST_NAME"]||"",SECOND_NAME:e["SECOND_NAME"]||"",LOGIN:e["LOGIN"]||"",NAME_SHORT:e["NAME"]?e["NAME"].substr(0,1)+".":"",LAST_NAME_SHORT:e["LAST_NAME"]?e["LAST_NAME"].substr(0,1)+".":"",SECOND_NAME_SHORT:e["SECOND_NAME"]?e["SECOND_NAME"].substr(0,1)+".":"",EMAIL:e["EMAIL"]||"",ID:e["ID"]||"",NOBR:"","/NOBR":""},r=t;for(var o in i){if(i.hasOwnProperty(o)){r=r.replace("#"+o+"#",i[o])}}r=r.replace(/([\s]+)/gi," ").trim();if(r==""){r=n=="Y"?i["LOGIN"]:"";r=r==""?"Noname":r}return r};BX.getNumMonth=function(e){var t=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];var n=["january","february","march","april","may","june","july","august","september","october","november","december"];var r=e.toUpperCase();for(i=1;i<=12;i++){if(r==BX.message("MON_"+i).toUpperCase()||r==BX.message("MONTH_"+i).toUpperCase()||r==t[i-1].toUpperCase()||r==n[i-1].toUpperCase()){return i}}return e};BX.parseDate=function(e,t,n,i){if(BX.type.isNotEmptyString(e)){if(!n)n=BX.message("FORMAT_DATE");if(!i)i=BX.message("FORMAT_DATETIME");var r="";for(l=1;l<=12;l++){r=r+"|"+BX.message("MON_"+l)}var o=new RegExp("([0-9]+|[a-z]+"+r+")","ig");var s=e.match(o),a=n.match(/(DD|MI|MMMM|MM|M|YYYY)/gi),l,u,f=[],c=[],d={};if(!s)return null;if(s.length>a.length){a=i.match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/gi)}for(l=0,u=s.length;l<u;l++){if(BX.util.trim(s[l])!=""){f[f.length]=s[l]}}for(l=0,u=a.length;l<u;l++){if(BX.util.trim(a[l])!=""){c[c.length]=a[l]}}var p=BX.util.array_search("MMMM",c);if(p>0){f[p]=BX.getNumMonth(f[p]);c[p]="MM"}else{p=BX.util.array_search("M",c);if(p>0){f[p]=BX.getNumMonth(f[p]);c[p]="MM"}}for(l=0,u=c.length;l<u;l++){var h=c[l].toUpperCase();d[h]=h=="T"||h=="TT"?f[l]:parseInt(f[l],10)}if(d["DD"]>0&&d["MM"]>0&&d["YYYY"]>0){var m=new Date;if(t){m.setUTCDate(1);m.setUTCFullYear(d["YYYY"]);m.setUTCMonth(d["MM"]-1);m.setUTCDate(d["DD"]);m.setUTCHours(0,0,0)}else{m.setDate(1);m.setFullYear(d["YYYY"]);m.setMonth(d["MM"]-1);m.setDate(d["DD"]);m.setHours(0,0,0)}if((!isNaN(d["HH"])||!isNaN(d["GG"])||!isNaN(d["H"])||!isNaN(d["G"]))&&!isNaN(d["MI"])){if(!isNaN(d["H"])||!isNaN(d["G"])){var y=(d["T"]||d["TT"]||"am").toUpperCase()=="PM";var B=parseInt(d["H"]||d["G"]||0,10);if(y){d["HH"]=B+(B==12?0:12)}else{d["HH"]=B<12?B:0}}else{d["HH"]=parseInt(d["HH"]||d["GG"]||0,10)}if(isNaN(d["SS"]))d["SS"]=0;if(t){m.setUTCHours(d["HH"],d["MI"],d["SS"])}else{m.setHours(d["HH"],d["MI"],d["SS"])}}return m}}return null};BX.selectUtils={addNewOption:function(e,t,n,i,r){e=BX(e);if(e){var o=e.length;if(r!==false){for(var s=0;s<o;s++){if(e[s].value==t){return}}}e.options[o]=new Option(n,t,false,false)}if(i===true){this.sortSelect(e)}},deleteOption:function(e,t){e=BX(e);if(e){for(var n=0;n<e.length;n++){if(e[n].value==t){e.remove(n);break}}}},deleteSelectedOptions:function(e){e=BX(e);if(e){var t=0;while(t<e.length){if(e[t].selected){e[t].selected=false;e.remove(t)}else{t++}}}},deleteAllOptions:function(e){e=BX(e);if(e){for(var t=e.length-1;t>=0;t--){e.remove(t)}}},optionCompare:function(e,t){var n=e.optText.toLowerCase();var i=t.optText.toLowerCase();if(n>i)return 1;if(n<i)return-1;return 0},sortSelect:function(e){e=BX(e);if(e){var t=[];var n=e.options.length;var i;for(i=0;i<n;i++){t[i]={optText:e[i].text,optValue:e[i].value}}t.sort(this.optionCompare);e.length=0;n=t.length;for(i=0;i<n;i++){e[i]=new Option(t[i].optText,t[i].optValue,false,false)}}},selectAllOptions:function(e){e=BX(e);if(e){var t=e.length;for(var n=0;n<t;n++){e[n].selected=true}}},selectOption:function(e,t){e=BX(e);if(e){var n=e.length;for(var i=0;i<n;i++){e[i].selected=e[i].value==t}}},addSelectedOptions:function(e,t,n,i){e=BX(e);if(!e)return;var r=e.length;for(var o=0;o<r;o++)if(e[o].selected)this.addNewOption(t,e[o].value,e[o].text,i,n)},moveOptionsUp:function(e){e=BX(e);if(!e)return;var t=e.length;for(var n=0;n<t;n++){if(e[n].selected&&n>0&&e[n-1].selected==false){var i=new Option(e[n].text,e[n].value);e[n]=new Option(e[n-1].text,e[n-1].value);e[n].selected=false;e[n-1]=i;e[n-1].selected=true}}},moveOptionsDown:function(e){e=BX(e);if(!e)return;var t=e.length;for(var n=t-1;n>=0;n--){if(e[n].selected&&n<t-1&&e[n+1].selected==false){var i=new Option(e[n].text,e[n].value);e[n]=new Option(e[n+1].text,e[n+1].value);e[n].selected=false;e[n+1]=i;e[n+1].selected=true}}}};BX.getEventTarget=function(e){if(e.target){return e.target}else if(e.srcElement){return e.srcElement}return null};BX.hint=function(e,t,n,i){if(null==n){n=t;t=""}if(null==e.BXHINT){e.BXHINT=new BX.CHint({parent:e,hint:n,title:t,id:i});e.BXHINT.Show()}};BX.hint_replace=function(e,t,n){if(null==n){n=t;t=""}if(!e||!e.parentNode||!n)return null;var i=new BX.CHint({hint:n,title:t});i.CreateParent();e.parentNode.insertBefore(i.PARENT,e);e.parentNode.removeChild(e);i.PARENT.style.marginLeft="5px";return e};BX.CHint=function(e){this.PARENT=BX(e.parent);this.HINT=e.hint;this.HINT_TITLE=e.title;this.PARAMS={};for(var t in this.defaultSettings){if(null==e[t])this.PARAMS[t]=this.defaultSettings[t];else this.PARAMS[t]=e[t]}if(null!=e.id)this.ID=e.id;this.timer=null;this.bInited=false;this.msover=true;if(this.PARAMS.showOnce){this.__show();this.msover=false;this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)}else if(this.PARENT){BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}BX.addCustomEvent("onMenuOpen",BX.delegate(this.disable,this));BX.addCustomEvent("onMenuClose",BX.delegate(this.enable,this))};BX.CHint.prototype.defaultSettings={show_timeout:1e3,hide_timeout:500,dx:2,showOnce:false,preventHide:true,min_width:250};BX.CHint.prototype.CreateParent=function(e,t){if(this.PARENT){BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}if(!t)t={};var n="icon";if(t.type&&(t.type=="link"||t.type=="icon"))n=t.type;if(e)n="element";if(n=="icon"){e=BX.create("IMG",{props:{src:t.iconSrc?t.iconSrc:"/bitrix/js/main/core/images/hint.gif"}})}else if(n=="link"){e=BX.create("A",{props:{href:"javascript:void(0)"},html:"[?]"})}this.PARENT=e;BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this));return this.PARENT};BX.CHint.prototype.Show=function(){this.msover=true;if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Hide=function(){this.msover=false;if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)};BX.CHint.prototype.__show=function(){if(!this.msover||this.disabled)return;if(!this.bInited)this.Init();if(this.prepareAdjustPos()){this.DIV.style.display="block";this.adjustPos();BX.bind(window,"scroll",BX.proxy(this.__onscroll,this));if(this.PARAMS.showOnce){this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)}}};BX.CHint.prototype.__onscroll=function(){if(!BX.admin||!BX.admin.panel||!BX.admin.panel.isFixed())return;if(this.scrollTimer)clearTimeout(this.scrollTimer);this.DIV.style.display="none";this.scrollTimer=setTimeout(BX.proxy(this.Reopen,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Reopen=function(){if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),50)};BX.CHint.prototype.__hide=function(){if(this.msover)return;if(!this.bInited)return;BX.unbind(window,"scroll",BX.proxy(this.Reopen,this));if(this.PARAMS.showOnce){this.Destroy()}else{this.DIV.style.display="none"}};BX.CHint.prototype.__hide_immediately=function(){this.msover=false;this.__hide()};BX.CHint.prototype.Init=function(){this.DIV=document.body.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip"},style:{display:"none"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-top-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'}),this.CONTENT=BX.create("DIV",{props:{className:"bx-panel-tooltip-content"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay-bg"}})]})]}),BX.create("DIV",{props:{className:"bx-panel-tooltip-bottom-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'})]}));if(this.ID){this.CONTENT.insertBefore(BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-panel-tooltip-close"},events:{click:BX.delegate(this.Close,this)}}),this.CONTENT.firstChild)}if(this.HINT_TITLE){this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-title"},text:this.HINT_TITLE}))}if(this.HINT){this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))}if(this.PARAMS.preventHide){BX.bind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.bind(this.DIV,"mouseover",BX.proxy(this.Show,this))}this.bInited=true};BX.CHint.prototype.setContent=function(e){this.HINT=e;if(this.CONTENT_TEXT)this.CONTENT_TEXT.innerHTML=this.HINT;else this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))};BX.CHint.prototype.prepareAdjustPos=function(){this._wnd={scrollPos:BX.GetWindowScrollPos(),scrollSize:BX.GetWindowScrollSize()};return BX.style(this.PARENT,"display")!="none"};BX.CHint.prototype.getAdjustPos=function(){var e={},t=BX.pos(this.PARENT),n=0;e.top=t.bottom+this.PARAMS.dx;if(BX.admin&&BX.admin.panel.DIV){n=BX.admin.panel.DIV.offsetHeight+this.PARAMS.dx;if(BX.admin.panel.isFixed()){n+=this._wnd.scrollPos.scrollTop}}if(e.top<n)e.top=n;else{if(e.top+this.DIV.offsetHeight>this._wnd.scrollSize.scrollHeight)e.top=t.top-this.PARAMS.dx-this.DIV.offsetHeight}e.left=t.left;if(t.left<this.PARAMS.dx)t.left=this.PARAMS.dx;else{var i=this.DIV.offsetWidth;var r=this._wnd.scrollSize.scrollWidth-i-this.PARAMS.dx;if(e.left>r)e.left=r}return e};BX.CHint.prototype.adjustWidth=function(){if(this.bWidthAdjusted)return;var e=this.DIV.offsetWidth,t=this.DIV.offsetHeight;if(e>this.PARAMS.min_width)e=Math.round(Math.sqrt(1.618*e*t));if(e<this.PARAMS.min_width)e=this.PARAMS.min_width;this.DIV.style.width=e+"px";if(this._adjustWidthInt)clearInterval(this._adjustWidthInt);this._adjustWidthInt=setInterval(BX.delegate(this._adjustWidthInterval,this),5);this.bWidthAdjusted=true};BX.CHint.prototype._adjustWidthInterval=function(){if(!this.DIV||this.DIV.style.display=="none")clearInterval(this._adjustWidthInt);var e=20,t=1500,n=this.DIV.offsetWidth,i=this.CONTENT_TEXT.offsetWidth;if(n>0&&i>0&&n-i<e&&n<t){this.DIV.style.width=n+e+"px";return}clearInterval(this._adjustWidthInt)};BX.CHint.prototype.adjustPos=function(){this.adjustWidth();var e=this.getAdjustPos();this.DIV.style.top=e.top+"px";this.DIV.style.left=e.left+"px"};BX.CHint.prototype.Close=function(){if(this.ID&&BX.WindowManager)BX.WindowManager.saveWindowOptions(this.ID,{display:"off"});this.__hide_immediately();this.Destroy()};BX.CHint.prototype.Destroy=function(){if(this.PARENT){BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}if(this.DIV){BX.unbind(this.DIV,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.cleanNode(this.DIV,true)}};BX.CHint.prototype.enable=function(){this.disabled=false};BX.CHint.prototype.disable=function(){this.__hide_immediately();this.disabled=true};if(document.addEventListener){__readyHandler=function(){document.removeEventListener("DOMContentLoaded",__readyHandler,false);runReady()}}else if(document.attachEvent){__readyHandler=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",__readyHandler);runReady()}}}function bindReady(){if(!readyBound){readyBound=true;if(document.readyState==="complete"){return runReady()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",__readyHandler,false);window.addEventListener("load",runReady,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",__readyHandler);window.attachEvent("onload",runReady);var e=false;try{e=window.frameElement==null}catch(t){}if(document.documentElement.doScroll&&e)doScrollCheck()}}return null}function runReady(){if(!BX.isReady){if(!document.body)return setTimeout(runReady,15);BX.isReady=true;if(readyList&&readyList.length>0){var e,t=0;while(readyList&&(e=readyList[t++])){try{e.call(document)}catch(n){BX.debug("BX.ready error: ",n)}}readyList=null}}return null}function doScrollCheck(){if(BX.isReady)return;try{document.documentElement.doScroll("left")}catch(e){setTimeout(doScrollCheck,1);return}runReady()}function _adjustWait(){if(!this.bxmsg)return;var e=BX.pos(this),t=e.top;if(t<BX.GetDocElement().scrollTop)t=BX.GetDocElement().scrollTop+5;this.bxmsg.style.top=t+5+"px";if(this==BX.GetDocElement()){this.bxmsg.style.right="5px"}else{this.bxmsg.style.left=e.right-this.bxmsg.offsetWidth-5+"px"}}function _checkDisplay(e,t){if(typeof t!="undefined")e.BXDISPLAY=t;var n=e.style.display||BX.style(e,"display");if(n!="none"){e.BXDISPLAY=e.BXDISPLAY||n;return true}else{e.BXDISPLAY=e.BXDISPLAY||"block";return false}}function _processTpl(e,t,n){if(e){if(n)e.parentNode.removeChild(e);var i={},r=BX.findChildren(e,{attribute:"data-role"},true);for(var o=0,s=r.length;o<s;o++){i[r[o].getAttribute("data-role")]=r[o]}t.apply(e,[i])}}function _checkNode(e,t){t=t||{};if(BX.type.isFunction(t))return t.call(window,e);if(!t.allowTextNodes&&!BX.type.isElementNode(e))return false;var n,i,r;for(n in t){if(t.hasOwnProperty(n)){switch(n){case"tag":case"tagName":if(BX.type.isString(t[n])){if(e.tagName.toUpperCase()!=t[n].toUpperCase())return false}else if(t[n]instanceof RegExp){if(!t[n].test(e.tagName))return false}break;case"class":case"className":if(BX.type.isString(t[n])){if(!BX.hasClass(e,t[n]))return false}else if(t[n]instanceof RegExp){if(!BX.type.isString(e.className)||!t[n].test(e.className))return false}break;case"attr":case"attribute":if(BX.type.isString(t[n])){if(!e.getAttribute(t[n]))return false}else if(BX.type.isArray(t[n])){for(i=0,r=t[n].length;i<r;i++){if(t[n]&&!e.getAttribute(t[n]))return false}}else{for(i in t[n]){if(t[n].hasOwnProperty(i)){var o=e.getAttribute(i);if(t[n][i]instanceof RegExp){if(!BX.type.isString(o)||!t[n][i].test(o)){return false}}else{if(o!=""+t[n][i]){return false}}}}}break;case"property":if(BX.type.isString(t[n])){if(!e[t[n]])return false}else if(BX.type.isArray(t[n])){for(i=0,r=t[n].length;i<r;i++){if(t[n]&&!e[t[n]])return false}}else{for(i in t[n]){if(BX.type.isString(t[n][i])){if(e[i]!=t[n][i])return false}else if(t[n][i]instanceof RegExp){if(!BX.type.isString(e[i])||!t[n][i].test(e[i]))return false}}}break;case"callback":return t[n](e)}}}return true}function Trash(){var e,t;for(e=0,t=garbageCollectors.length;e<t;e++){try{garbageCollectors[e].callback.apply(garbageCollectors[e].context||window);delete garbageCollectors[e];garbageCollectors[e]=null}catch(n){}}try{BX.unbindAll()}catch(n){}}if(window.attachEvent)window.attachEvent("onunload",Trash);else if(window.addEventListener)window.addEventListener("unload",Trash,false);else window.onunload=Trash;BX(BX.DoNothing);window.BX=BX;BX.browser.addGlobalClass();BX.data=function(e,t,n){if(typeof e=="undefined")return undefined;if(typeof t=="undefined")return undefined;if(typeof n!="undefined"){dataStorage.set(e,t,n)}else{var i;if((i=dataStorage.get(e,t))!=undefined){return i}else{if("getAttribute"in e){i=e.getAttribute("data-"+t.toString());if(i===null){return undefined}return i}}return undefined}};BX.DataStorage=function(){this.keyOffset=1;this.data={};this.uniqueTag="BX-"+Math.random();this.resolve=function(e,t){if(typeof e[this.uniqueTag]=="undefined")if(t){try{Object.defineProperty(e,this.uniqueTag,{value:this.keyOffset++})}catch(n){e[this.uniqueTag]=this.keyOffset++}}else return undefined;return e[this.uniqueTag]};this.get=function(e,t){if(e!=document&&!BX.type.isElementNode(e)||typeof t=="undefined")return undefined;

e=this.resolve(e,false);if(typeof e=="undefined"||typeof this.data[e]=="undefined")return undefined;return this.data[e][t]};this.set=function(e,t,n){if(e!=document&&!BX.type.isElementNode(e)||typeof n=="undefined")return;var i=this.resolve(e,true);if(typeof this.data[i]=="undefined")this.data[i]={};this.data[i][t]=n}};var dataStorage=new BX.DataStorage;BX.LazyLoad={images:[],imageStatus:{hidden:-2,error:-1,undefined:0,inited:1,loaded:2},imageTypes:{image:1,background:2},registerImage:function(e,t){if(BX.type.isNotEmptyString(e)){this.images.push({id:e,node:null,src:null,type:null,func:BX.type.isFunction(t)?t:null,status:this.imageStatus.undefined})}},registerImages:function(e,t){if(BX.type.isArray(e)){for(var n=0,i=e.length;n<i;n++){this.registerImage(e[n],t)}}},showImages:function(e){var t=null;var n=false;e=e===false?false:true;for(var i=0,r=this.images.length;i<r;i++){t=this.images[i];if(t.status==this.imageStatus.undefined){this.initImage(t)}if(t.status!==this.imageStatus.inited){continue}if(!t.node||!t.node.parentNode){t.node=null;t.status=this.imageStatus.error;continue}n=true;if(e&&t.func){n=t.func(t)}if(n===true&&this.isElementVisibleOnScreen(t.node)){if(t.type==this.imageTypes.image){t.node.src=t.src}else{t.node.style.backgroundImage="url('"+t.src+"')"}t.node.setAttribute("data-src","");t.status=this.imageStatus.loaded}}},initImage:function(e){e.status=this.imageStatus.error;var t=BX(e.id);if(t){var n=t.getAttribute("data-src");if(BX.type.isNotEmptyString(n)){e.node=t;e.src=n;e.status=this.imageStatus.inited;e.type=e.node.tagName.toLowerCase()=="img"?this.imageTypes.image:this.imageTypes.background}}},isElementVisibleOnScreen:function(e){var t=this.getElementCoords(e);var n=window.pageYOffset||document.documentElement.scrollTop;var i=n+document.documentElement.clientHeight;t.bottom=t.top+e.offsetHeight;var r=t.top>n&&t.top<i;var o=t.bottom<i&&t.bottom>n;return r||o},isElementVisibleOn2Screens:function(e){var t=this.getElementCoords(e);var n=document.documentElement.clientHeight;var i=window.pageYOffset||document.documentElement.scrollTop;var r=i+n;t.bottom=t.top+e.offsetHeight;i-=n;r+=n;var o=t.top>i&&t.top<r;var s=t.bottom<r&&t.bottom>i;return o||s},getElementCoords:function(e){var t=e.getBoundingClientRect();return{originTop:t.top,originLeft:t.left,top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},onScroll:function(){BX.LazyLoad.showImages()},clearImages:function(){this.images=[]}};BX.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):undefined};BX.setCookie=function(e,t,n){n=n||{};var i=n.expires;if(typeof i=="number"&&i){var r=new Date;r.setTime(r.getTime()+i*1e3);i=n.expires=r}if(i&&i.toUTCString){n.expires=i.toUTCString()}t=encodeURIComponent(t);var o=e+"="+t;for(var s in n){if(!n.hasOwnProperty(s)){continue}o+="; "+s;var a=n[s];if(a!==true){o+="="+a}}document.cookie=o;return true};BX.FixFontSize=function(e){var t,n,i;this.node=null;this.prevWindowSize=0;this.prevWrapperSize=0;this.mainWrapper=null;this.textWrapper=null;this.objList=e.objList;this.minFontSizeList=[];this.minFontSize=0;if(e.onresize){this.prevWindowSize=window.innerWidth||document.documentElement.clientWidth;BX.bind(window,"resize",BX.proxy(BX.throttle(this.onResize,350),this))}if(e.onAdaptiveResize){t=this.objList[0].scaleBy||this.objList[0].node;n=getComputedStyle(t);this.prevWrapperSize=parseInt(n["width"])-parseInt(n["paddingLeft"])-parseInt(n["paddingRight"]);BX.bind(window,"resize",BX.proxy(BX.throttle(this.onAdaptiveResize,350),this))}this.createTestNodes();this.decrease()};BX.FixFontSize.prototype={createTestNodes:function(){this.textWrapper=BX.create("div",{style:{display:"inline-block",whiteSpace:"nowrap"}});this.mainWrapper=BX.create("div",{style:{height:0,overflow:"hidden"},children:[this.textWrapper]})},insertTestNodes:function(){document.body.appendChild(this.mainWrapper)},removeTestNodes:function(){document.body.removeChild(this.mainWrapper)},decrease:function(){var e,t,n,i;this.insertTestNodes();for(var r=this.objList.length-1;r>=0;r--){n=this.objList[r].scaleBy||this.objList[r].node;i=getComputedStyle(n);e=parseInt(i["width"])-parseInt(i["paddingLeft"])-parseInt(i["paddingRight"]);t=parseInt(getComputedStyle(this.objList[r].node)["font-size"]);this.textWrapperSetStyle(this.objList[r].node);if(this.textWrapperInsertText(this.objList[r].node)){while(this.textWrapper.offsetWidth>e&&t>0){this.textWrapper.style.fontSize=--t+"px"}if(this.objList[r].smallestValue){this.minFontSize=this.minFontSize?Math.min(this.minFontSize,t):t;this.minFontSizeList.push(this.objList[r].node)}else{this.objList[r].node.style.fontSize=t+"px"}}}if(this.minFontSizeList.length>0)this.setMinFont();this.removeTestNodes()},increase:function(){this.insertTestNodes();var e,t,n,i;this.insertTestNodes();for(var r=this.objList.length-1;r>=0;r--){n=this.objList[r].scaleBy||this.objList[r].node;i=getComputedStyle(n);e=parseInt(i["width"])-parseInt(i["paddingLeft"])-parseInt(i["paddingRight"]);t=parseInt(getComputedStyle(this.objList[r].node)["font-size"]);this.textWrapperSetStyle(this.objList[r].node);if(this.textWrapperInsertText(this.objList[r].node)){while(this.textWrapper.offsetWidth<e&&t<this.objList[r].maxFontSize){this.textWrapper.style.fontSize=++t+"px"}t--;if(this.objList[r].smallestValue){this.minFontSize=this.minFontSize?Math.min(this.minFontSize,t):t;this.minFontSizeList.push(this.objList[r].node)}else{this.objList[r].node.style.fontSize=t+"px"}}}if(this.minFontSizeList.length>0)this.setMinFont();this.removeTestNodes()},setMinFont:function(){for(var e=this.minFontSizeList.length-1;e>=0;e--){this.minFontSizeList[e].style.fontSize=this.minFontSize+"px"}this.minFontSize=0},onResize:function(){var e=window.innerWidth||document.documentElement.clientWidth;if(this.prevWindowSize>e)this.decrease();else if(this.prevWindowSize<e)this.increase();this.prevWindowSize=e},onAdaptiveResize:function(){var e=this.objList[0].scaleBy||this.objList[0].node,t=getComputedStyle(e),n=parseInt(t["width"])-parseInt(t["paddingLeft"])-parseInt(t["paddingRight"]);if(this.prevWrapperSize>n)this.decrease();else if(this.prevWrapperSize<n)this.increase();this.prevWrapperSize=n},textWrapperInsertText:function(e){if(e.textContent){this.textWrapper.textContent=e.textContent;return true}else if(e.innerText){this.textWrapper.innerText=e.innerText;return true}else{return false}},textWrapperSetStyle:function(e){this.textWrapper.style.fontFamily=getComputedStyle(e)["font-family"];this.textWrapper.style.fontSize=getComputedStyle(e)["font-size"];this.textWrapper.style.fontStyle=getComputedStyle(e)["font-style"];this.textWrapper.style.fontWeight=getComputedStyle(e)["font-weight"];this.textWrapper.style.lineHeight=getComputedStyle(e)["line-height"]}};BX.FixFontSize.init=function(e){return new BX.FixFontSize(e)};if(typeof BX.ParamBag==="undefined"){BX.ParamBag=function(){this._params={}};BX.ParamBag.prototype={initialize:function(e){this._params=e?e:{}},getParam:function(e,t){var n=this._params;return typeof n[e]!="undefined"?n[e]:t},setParam:function(e,t){this._params[e]=t},clear:function(){this._params={}}};BX.ParamBag.create=function(e){var t=new BX.ParamBag;t.initialize(e);return t}}if(typeof BX.Promise==="undefined"){BX.Promise=function(e,t){this.state=null;this.value=null;this.reason=null;this.next=null;this.ctx=t||this;this.onFulfilled=[];this.onRejected=[]};BX.Promise.prototype.fulfill=function(e){this.checkState();this.value=e;this.state=true;this.execute()};BX.Promise.prototype.reject=function(e){this.checkState();this.reason=e;this.state=false;this.execute()};BX.Promise.prototype.then=function(e,t){if(BX.type.isFunction(e)){this.onFulfilled.push(e)}if(BX.type.isFunction(t)){this.onRejected.push(t)}if(this.next===null){this.next=new BX.Promise(null,this.ctx)}if(this.state!==null){this.execute()}return this.next};BX.Promise.prototype.setAutoResolve=function(e,t){this.timer=setTimeout(BX.delegate(function(){if(this.state===null){this[e?"fulfill":"reject"]()}},this),t||15)};BX.Promise.prototype.cancelAutoResolve=function(){clearTimeout(this.timer)};BX.Promise.prototype.resolve=function(e){var t=this;if(this===e){this.reject(new TypeError("Promise cannot fulfill or reject itself"))}else if(e instanceof BX.Promise){e.then(function(e){t.fulfill(e)},function(e){t.reject(e)})}else{this.fulfill(e)}};BX.Promise.prototype.execute=function(){if(this.state===null){return}var e=undefined;var t=undefined;var n=undefined;var i;if(this.state===true){if(this.onFulfilled.length){try{for(i=0;i<this.onFulfilled.length;i++){n=this.onFulfilled[i].apply(this.ctx,[this.value]);if(typeof n!="undefined"){e=n}}}catch(r){if("console"in window){console.dir(r)}BX.debug(r);t=r}}else{e=this.value}}else if(this.state===false){if(this.onRejected.length){try{for(i=0;i<this.onRejected.length;i++){n=this.onRejected[i].apply(this.ctx,[this.reason]);if(typeof n!="undefined"){e=n}}}catch(r){if("console"in window){console.dir(r)}BX.debug(r);t=r}}else{t=this.reason}}if(this.next!==null){if(typeof t!="undefined"){this.next.reject(t)}else if(typeof e!="undefined"){this.next.resolve(e)}}};BX.Promise.prototype.checkState=function(){if(this.state!==null){throw new Error("You can not do fulfill() or reject() multiple times")}}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/bitrix/js/main/core/core_ajax.min.js?147255878321031";s:6:"source";s:33:"/bitrix/js/main/core/core_ajax.js";s:3:"min";s:37:"/bitrix/js/main/core/core_ajax.min.js";s:3:"map";s:37:"/bitrix/js/main/core/core_ajax.map.js";}"*/
(function(e){if(e.BX.ajax)return;var a=e.BX,t={},r={method:"GET",dataType:"html",timeout:0,async:true,processData:true,scriptsRunFirst:false,emulateOnload:true,skipAuthCheck:false,start:true,cache:true,preparePost:true,headers:false,lsTimeout:30,lsForce:false},o=null,s={},i=[],n={url_utf:/[^\034-\254]+/g,script_self:/\/bitrix\/js\/main\/core\/core(_ajax)*.js$/i,script_self_window:/\/bitrix\/js\/main\/core\/core_window.js$/i,script_self_admin:/\/bitrix\/js\/main\/core\/core_admin.js$/i,script_onload:/window.onload/g};a.ajax=function(e){var o,s;if(!e||!e.url||!a.type.isString(e.url)){return false}for(var i in t)if(typeof e[i]=="undefined")e[i]=t[i];t={};for(i in r)if(typeof e[i]=="undefined")e[i]=r[i];e.method=e.method.toUpperCase();if(!a.localStorage)e.lsId=null;if(a.browser.IsIE()){var u=n.url_utf.exec(e.url);if(u){do{e.url=e.url.replace(u,a.util.urlencode(u));u=n.url_utf.exec(e.url)}while(u)}}if(e.dataType=="json")e.emulateOnload=false;if(!e.cache&&e.method=="GET")e.url=a.ajax._uncache(e.url);if(e.method=="POST"&&e.preparePost){e.data=a.ajax.prepareData(e.data)}var l=true;if(e.lsId&&!e.lsForce){var c=a.localStorage.get("ajax-"+e.lsId);if(c!==null){l=false;var f=function(t){if(t.key=="ajax-"+e.lsId&&t.value!="BXAJAXWAIT"){var r=t.value,o=!!t.oldValue&&r==null;if(!o)a.ajax.__run(e,r);else if(e.onfailure)e.onfailure("timeout");a.removeCustomEvent("onLocalStorageChange",f)}};if(c=="BXAJAXWAIT"){a.addCustomEvent("onLocalStorageChange",f)}else{setTimeout(function(){f({key:"ajax-"+e.lsId,value:c})},10)}}}if(l){e.xhr=a.ajax.xhr();if(!e.xhr)return;if(e.lsId){a.localStorage.set("ajax-"+e.lsId,"BXAJAXWAIT",e.lsTimeout)}e.xhr.open(e.method,e.url,e.async);if(!e.skipBxHeader&&!a.ajax.isCrossDomain(e.url)){e.xhr.setRequestHeader("Bx-ajax","true")}if(e.method=="POST"&&e.preparePost){e.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}if(typeof e.headers=="object"){for(i=0;i<e.headers.length;i++)e.xhr.setRequestHeader(e.headers[i].name,e.headers[i].value)}if(!!e.onprogress){a.bind(e.xhr,"progress",e.onprogress)}var h=false;var p=e.xhr.onreadystatechange=function(t){if(h)return;if(t==="timeout"){if(e.onfailure){e.onfailure("timeout")}a.onCustomEvent(e.xhr,"onAjaxFailure",["timeout","",e]);e.xhr.onreadystatechange=a.DoNothing;e.xhr.abort();if(e.async){e.xhr=null}}else{if(e.xhr.readyState==4||t=="run"){o=a.ajax.xhrSuccess(e.xhr)?"success":"error";h=true;e.xhr.onreadystatechange=a.DoNothing;if(o=="success"){var r=!!e.skipAuthCheck||a.ajax.isCrossDomain(e.url)?false:e.xhr.getResponseHeader("X-Bitrix-Ajax-Status");if(!!r&&r=="Authorize"){if(e.onfailure){e.onfailure("auth",e.xhr.status)}a.onCustomEvent(e.xhr,"onAjaxFailure",["auth",e.xhr.status,e])}else{var s=e.xhr.responseText;if(e.lsId){a.localStorage.set("ajax-"+e.lsId,s,e.lsTimeout)}a.ajax.__run(e,s)}}else{if(e.onfailure){e.onfailure("status",e.xhr.status)}a.onCustomEvent(e.xhr,"onAjaxFailure",["status",e.xhr.status,e])}if(e.async){e.xhr=null}}}};if(e.async&&e.timeout>0){setTimeout(function(){if(e.xhr&&!h){p("timeout")}},e.timeout*1e3)}if(e.start){e.xhr.send(e.data);if(!e.async){p("run")}}return e.xhr}};a.ajax.xhr=function(){if(e.XMLHttpRequest){try{return new XMLHttpRequest}catch(a){}}else if(e.ActiveXObject){try{return new e.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new e.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(a){}try{return new e.ActiveXObject("Msxml2.XMLHTTP")}catch(a){}try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}throw new Error("This browser does not support XMLHttpRequest.")}return null};a.ajax.isCrossDomain=function(t,r){r=r||e.location;if(t.indexOf("//")===0){t=r.protocol+t}if(t.indexOf("http")!==0){return false}var o=e.document.createElement("a");o.href=t;return o.protocol!==r.protocol||o.hostname!==r.hostname||a.ajax.getHostPort(o.protocol,o.host)!==a.ajax.getHostPort(r.protocol,r.host)};a.ajax.getHostPort=function(e,a){var t=/:(\d+)$/.exec(a);if(t){return t[1]}else{if(e==="http:"){return"80"}else if(e==="https:"){return"443"}}return""};a.ajax.__prepareOnload=function(t){if(t.length>0){a.ajax["onload_"+o]=null;for(var r=0,s=t.length;r<s;r++){if(t[r].isInternal){t[r].JS=t[r].JS.replace(n.script_onload,"BX.ajax.onload_"+o)}}}a.CaptureEventsGet();a.CaptureEvents(e,"load")};a.ajax.__runOnload=function(){if(null!=a.ajax["onload_"+o]){a.ajax["onload_"+o].apply(e);a.ajax["onload_"+o]=null}var t=a.CaptureEventsGet();if(t){for(var r=0;r<t.length;r++)t[r].apply(e)}};a.ajax.__run=function(e,t){if(!e.processData){if(e.onsuccess){e.onsuccess(t)}a.onCustomEvent(e.xhr,"onAjaxSuccess",[t,e])}else{t=a.ajax.processRequestData(t,e)}};a.ajax._onParseJSONFailure=function(e){this.jsonFailure=true;this.jsonResponse=e;this.jsonProactive=/^\[WAF\]/.test(e)};a.ajax.processRequestData=function(e,t){var r,s=[],i=[];switch(t.dataType.toUpperCase()){case"JSON":a.addCustomEvent(t.xhr,"onParseJSONFailure",a.proxy(a.ajax._onParseJSONFailure,t));r=a.parseJSON(e,t.xhr);a.removeCustomEvent(t.xhr,"onParseJSONFailure",a.proxy(a.ajax._onParseJSONFailure,t));if(!!r&&a.type.isArray(r["bxjs"])){for(var n=0;n<r["bxjs"].length;n++){if(a.type.isNotEmptyString(r["bxjs"][n])){s.push({isInternal:false,JS:r["bxjs"][n],bRunFirst:t.scriptsRunFirst})}else{s.push(r["bxjs"][n])}}}if(!!r&&a.type.isArray(r["bxcss"])){i=r["bxcss"]}break;case"SCRIPT":s.push({isInternal:true,JS:e,bRunFirst:t.scriptsRunFirst});r=e;break;default:var u=a.processHTML(e,t.scriptsRunFirst);r=u.HTML;s=u.SCRIPT;i=u.STYLE;break}var l=false;if(null==o){o=parseInt(Math.random()*1e6);l=true}if(i.length>0)a.loadCSS(i);if(t.emulateOnload)a.ajax.__prepareOnload(s);var c=a.DoNothing;if(t.emulateOnload||l){c=a.defer(function(){if(t.emulateOnload)a.ajax.__runOnload();if(l)o=null;a.onCustomEvent(t.xhr,"onAjaxSuccessFinish",[t])})}try{if(!!t.jsonFailure){throw{type:"json_failure",data:t.jsonResponse,bProactive:t.jsonProactive}}t.scripts=s;a.ajax.processScripts(t.scripts,true);if(t.onsuccess){t.onsuccess(r)}a.onCustomEvent(t.xhr,"onAjaxSuccess",[r,t]);a.ajax.processScripts(t.scripts,false,c)}catch(f){if(t.onfailure)t.onfailure("processing",f);a.onCustomEvent(t.xhr,"onAjaxFailure",["processing",f,t])}};a.ajax.processScripts=function(e,t,r){var o=[],s="";r=r||a.DoNothing;for(var i=0,n=e.length;i<n;i++){if(typeof t!="undefined"&&t!=!!e[i].bRunFirst)continue;if(e[i].isInternal)s+=";"+e[i].JS;else o.push(e[i].JS)}o=a.util.array_unique(o);var u=s.length>0?function(){a.evalGlobal(s)}:a.DoNothing;if(o.length>0){a.load(o,function(){u();r()})}else{u();r()}};a.ajax.prepareData=function(e,t){var r="";if(a.type.isString(e))r=e;else if(null!=e){for(var o in e){if(e.hasOwnProperty(o)){if(r.length>0)r+="&";var s=a.util.urlencode(o);if(t)s=t+"["+s+"]";if(typeof e[o]=="object")r+=a.ajax.prepareData(e[o],s);else r+=s+"="+a.util.urlencode(e[o])}}}return r};a.ajax.xhrSuccess=function(e){return e.status>=200&&e.status<300||e.status===304||e.status===1223||e.status===0};a.ajax.Setup=function(e,a){a=!!a;for(var o in e){if(a)t[o]=e[o];else r[o]=e[o]}};a.ajax.replaceLocalStorageValue=function(e,t,r){if(!!a.localStorage)a.localStorage.set("ajax-"+e,t,r)};a.ajax._uncache=function(e){return e+((e.indexOf("?")!==-1?"&":"?")+"_="+(new Date).getTime())};a.ajax.get=function(e,t,r){if(a.type.isFunction(t)){r=t;t=""}t=a.ajax.prepareData(t);if(t){e+=(e.indexOf("?")!==-1?"&":"?")+t;t=""}return a.ajax({method:"GET",dataType:"html",url:e,data:"",onsuccess:r})};a.ajax.getCaptcha=function(e){return a.ajax.loadJSON("/bitrix/tools/ajax_captcha.php",e)};a.ajax.insertToNode=function(e,r){r=a(r);if(!!r){var o={cancel:false};a.onCustomEvent("onAjaxInsertToNode",[{url:e,node:r,eventArgs:o}]);if(o.cancel===true){return}var s=null;if(!t.denyShowWait){s=a.showWait(r);delete t.denyShowWait}return a.ajax.get(e,function(e){r.innerHTML=e;a.closeWait(r,s)})}};a.ajax.post=function(e,t,r){t=a.ajax.prepareData(t);return a.ajax({method:"POST",dataType:"html",url:e,data:t,onsuccess:r})};a.ajax.loadScriptAjax=function(e,t,r){if(a.type.isArray(e)){for(var o=0,i=e.length;o<i;o++){a.ajax.loadScriptAjax(e[o],t,r)}}else{var u=e.replace(/\.js\?.*/,".js");if(n.script_self.test(u))return;if(n.script_self_window.test(u)&&a.CWindow)return;if(n.script_self_admin.test(u)&&a.admin)return;if(typeof s[u]=="undefined"){if(!!r){s[u]="";return a.loadScript(e)}else{return a.ajax({url:e,method:"GET",dataType:"script",processData:true,emulateOnload:false,scriptsRunFirst:true,async:false,start:true,onsuccess:function(e){s[u]=e;if(t)t(e)}})}}else if(t){t(s[u])}}};a.ajax.loadJSON=function(e,t,r,o){if(a.type.isFunction(t)){o=r;r=t;t=""}t=a.ajax.prepareData(t);if(t){e+=(e.indexOf("?")!==-1?"&":"?")+t;t=""}return a.ajax({method:"GET",dataType:"json",url:e,onsuccess:r,onfailure:o})};a.ajax.load=function(e,t){if(!a.type.isArray(e))e=[e];var r=0;if(!a.type.isFunction(t))t=a.DoNothing;var o=function(e){if(a.type.isFunction(this.callback))this.callback(e);if(++r>=i)t()};for(var s=0,i=e.length;s<i;s++){switch(e[s].type.toUpperCase()){case"SCRIPT":a.loadScript([e[s].url],a.proxy(o,e[s]));break;case"CSS":a.loadCSS([e[s].url]);if(++r>=i)t();break;case"JSON":a.ajax.loadJSON(e[s].url,a.proxy(o,e[s]));break;default:a.ajax.get(e[s].url,"",a.proxy(o,e[s]));break}}};a.ajax.submit=function(e,t){if(!e.target){if(null==e.BXFormTarget){var r="formTarget_"+Math.random();e.BXFormTarget=document.body.appendChild(a.create("IFRAME",{props:{name:r,id:r,src:"javascript:void(0)"},style:{display:"none"}}))}e.target=e.BXFormTarget.name}e.BXFormCallback=t;a.bind(e.BXFormTarget,"load",a.proxy(a.ajax._submit_callback,e));a.submit(e);return false};a.ajax.submitComponentForm=function(t,r,o){if(!t.target){if(null==t.BXFormTarget){var s="formTarget_"+Math.random();t.BXFormTarget=document.body.appendChild(a.create("IFRAME",{props:{name:s,id:s,src:"javascript:void(0)"},style:{display:"none"}}))}t.target=t.BXFormTarget.name}if(!!o)var i=a.showWait(r);t.BXFormCallback=function(t){if(!!o)a.closeWait(i);var s=function(){if(!!e.bxcompajaxframeonload){setTimeout(function(){e.bxcompajaxframeonload();e.bxcompajaxframeonload=null},10)}};a(r).innerHTML=t;a.onCustomEvent("onAjaxSuccess",[null,null,s])};a.bind(t.BXFormTarget,"load",a.proxy(a.ajax._submit_callback,t));return true};a.ajax._submit_callback=function(){try{if(this.BXFormTarget.contentWindow.location.href.indexOf("http")!=0)return}catch(e){return}if(this.BXFormCallback)this.BXFormCallback.apply(this,[this.BXFormTarget.contentWindow.document.body.innerHTML]);a.unbindAll(this.BXFormTarget)};a.ajax.prepareForm=function(e,a){a=!!a?a:{};var t,r,o,s=[],i=e.elements.length,n=0,u=0;if(!!e){for(t=0;t<i;t++){o=e.elements[t];if(o.disabled)continue;if(!o.type)continue;switch(o.type.toLowerCase()){case"text":case"textarea":case"password":case"number":case"hidden":case"select-one":s.push({name:o.name,value:o.value});u+=o.name.length+o.value.length;break;case"file":if(!!o.files){for(r=0;r<o.files.length;r++){n++;s.push({name:o.name,value:o.files[r],file:true});u+=o.files[r].size}}break;case"radio":case"checkbox":if(o.checked){s.push({name:o.name,value:o.value});u+=o.name.length+o.value.length}break;case"select-multiple":for(var l=0;l<o.options.length;l++){if(o.options[l].selected){s.push({name:o.name,value:o.options[l].value});u+=o.name.length+o.options[l].length}}break;default:break}}t=0;u=0;var c=a,f,h,p;while(t<s.length){var d=s[t].name.indexOf("[");if(d==-1){c[s[t].name]=s[t].value;c=a;t++}else{f=s[t].name.substring(0,d);h=s[t].name.substring(d+1);p=h.indexOf("]");if(p==-1){if(!c[f])c[f]=[];c=a;t++}else if(p==0){if(!c[f])c[f]=[];c=c[f];s[t].name=""+c.length}else{if(!c[f])c[f]={};c=c[f];s[t].name=h.substring(0,p)+h.substring(p+1)}}}}return{data:a,filesCount:n,roughSize:u}};a.ajax.submitAjax=function(t,r){r=r!==null&&typeof r=="object"?r:{};r.url=r["url"]||t.getAttribute("action");r.data=a.ajax.prepareForm(t).data;if(!e["FormData"]){a.ajax(r)}else{var o=function(e){var a=Object.prototype.toString.call(e);return a=="[object File]"||a=="[object Blob]"},s=function(e,a,t){if(!!t&&typeof t=="object"&&!o(t)){for(var r in t){if(t.hasOwnProperty(r)){s(e,a==""?r:a+"["+r+"]",t[r])}}}else e.append(a,!!t?t:"")},i=function(e){var t={};if(null!=e){if(typeof e=="object"){for(var r in e){if(e.hasOwnProperty(r)){var o=a.util.urlencode(r);if(typeof e[r]=="object"&&e[r]["file"]!==true)t[o]=i(e[r]);else if(e[r]["file"]===true)t[o]=e[r]["value"];else t[o]=a.util.urlencode(e[r])}}}else t=a.util.urlencode(e)}return t},n=new e.FormData;if(r.method!=="POST"){r.data=a.ajax.prepareData(r.data);if(r.data){r.url+=(r.url.indexOf("?")!==-1?"&":"?")+r.data;r.data=""}}else{if(r.preparePost===true)r.data=i(r.data);s(n,"",r.data);r.data=n}r.preparePost=false;r.start=false;var u=a.ajax(r);if(!!r["onprogress"])u.upload.addEventListener("progress",function(e){var a=null;if(e.lengthComputable&&(e.total||e["totalSize"])){a=e.loaded*100/(e.total||e["totalSize"])}r["onprogress"](e,a)});u.send(n)}};a.ajax.UpdatePageData=function(e){if(e.TITLE)a.ajax.UpdatePageTitle(e.TITLE);if(e.WINDOW_TITLE||e.TITLE)a.ajax.UpdateWindowTitle(e.WINDOW_TITLE||e.TITLE);if(e.NAV_CHAIN)a.ajax.UpdatePageNavChain(e.NAV_CHAIN);if(e.CSS&&e.CSS.length>0)a.loadCSS(e.CSS);if(e.SCRIPTS&&e.SCRIPTS.length>0){var t=function(r,o,s){if(!!o&&a.type.isArray(o.scripts)){for(var i=0,n=e.SCRIPTS.length;i<n;i++){o.scripts.push({isInternal:false,JS:e.SCRIPTS[i]})}}else{a.loadScript(e.SCRIPTS,s)}a.removeCustomEvent("onAjaxSuccess",t)};a.addCustomEvent("onAjaxSuccess",t)}else{var r=function(e,t,o){if(a.type.isFunction(o)){o()}a.removeCustomEvent("onAjaxSuccess",r)};a.addCustomEvent("onAjaxSuccess",r)}};a.ajax.UpdatePageTitle=function(e){var t=a("pagetitle");if(t){t.removeChild(t.firstChild);if(!t.firstChild)t.appendChild(document.createTextNode(e));else t.insertBefore(document.createTextNode(e),t.firstChild)}};a.ajax.UpdateWindowTitle=function(e){document.title=e};a.ajax.UpdatePageNavChain=function(e){var t=a("navigation");if(t){t.innerHTML=e}};a.userOptions={options:null,bSend:false,delay:5e3,path:"/bitrix/admin/user_options.php?"};a.userOptions.setAjaxPath=function(e){a.userOptions.path=e.indexOf("?")==-1?e+"?":e+"&"};a.userOptions.save=function(e,t,r,o,s){if(null==a.userOptions.options)a.userOptions.options={};s=!!s;a.userOptions.options[e+"."+t+"."+r]=[e,t,r,o,s];var i=a.userOptions.__get();if(i!="")document.cookie=a.message("COOKIE_PREFIX")+"_LAST_SETTINGS="+i+"&sessid="+a.bitrix_sessid()+"; expires=Thu, 31 Dec 2020 23:59:59 GMT; path=/;";if(!a.userOptions.bSend){a.userOptions.bSend=true;setTimeout(function(){a.userOptions.send(null)},a.userOptions.delay)}};a.userOptions.send=function(e){var t=a.userOptions.__get();a.userOptions.options=null;a.userOptions.bSend=false;if(t!=""){document.cookie=a.message("COOKIE_PREFIX")+"_LAST_SETTINGS=; path=/;";a.ajax({method:"GET",dataType:"html",processData:false,cache:false,url:a.userOptions.path+t+"&sessid="+a.bitrix_sessid(),onsuccess:e})}};a.userOptions.del=function(e,t,r,o){a.ajax.get(a.userOptions.path+"action=delete&c="+e+"&n="+t+(r==true?"&common=Y":"")+"&sessid="+a.bitrix_sessid(),o)};a.userOptions.__get=function(){if(!a.userOptions.options)return"";var e="",t=-1,r="",o,s;for(s in a.userOptions.options){if(a.userOptions.options.hasOwnProperty(s)){o=a.userOptions.options[s];if(r!=o[0]+"."+o[1]){t++;e+="&p["+t+"][c]="+a.util.urlencode(o[0]);e+="&p["+t+"][n]="+a.util.urlencode(o[1]);if(o[4]==true)e+="&p["+t+"][d]=Y";r=o[0]+"."+o[1]}e+="&p["+t+"][v]["+a.util.urlencode(o[2])+"]="+a.util.urlencode(o[3])}}return e.substr(1)};a.ajax.history={expected_hash:"",obParams:null,obFrame:null,obImage:null,obTimer:null,bInited:false,bHashCollision:false,bPushState:!!(history.pushState&&a.type.isFunction(history.pushState)),startState:null,init:function(t){if(a.ajax.history.bInited)return;this.obParams=t;var r=this.obParams.getState();if(a.ajax.history.bPushState){a.ajax.history.expected_hash=e.location.pathname;if(e.location.search)a.ajax.history.expected_hash+=e.location.search;a.ajax.history.put(r,a.ajax.history.expected_hash,"",true);setTimeout(function(){a.bind(e,"popstate",a.ajax.history.__hashListener)},500)}else{a.ajax.history.expected_hash=e.location.hash;if(!a.ajax.history.expected_hash||a.ajax.history.expected_hash=="#")a.ajax.history.expected_hash="__bx_no_hash__";u.put(a.ajax.history.expected_hash,r);a.ajax.history.obTimer=setTimeout(a.ajax.history.__hashListener,500);if(a.browser.IsIE()){a.ajax.history.obFrame=document.createElement("IFRAME");a.hide_object(a.ajax.history.obFrame);document.body.appendChild(a.ajax.history.obFrame);a.ajax.history.obFrame.contentWindow.document.open();a.ajax.history.obFrame.contentWindow.document.write(a.ajax.history.expected_hash);a.ajax.history.obFrame.contentWindow.document.close()}else if(a.browser.IsOpera()){a.ajax.history.obImage=document.createElement("IMG");a.hide_object(a.ajax.history.obImage);document.body.appendChild(a.ajax.history.obImage);a.ajax.history.obImage.setAttribute("src","javascript:location.href = 'javascript:BX.ajax.history.__hashListener();';")}}a.ajax.history.bInited=true},__hashListener:function(t){t=t||e.event||{state:false};if(a.ajax.history.bPushState){a.ajax.history.obParams.setState(t.state||a.ajax.history.startState)}else{if(a.ajax.history.obTimer){e.clearTimeout(a.ajax.history.obTimer);a.ajax.history.obTimer=null}var r;if(null!=a.ajax.history.obFrame)r=a.ajax.history.obFrame.contentWindow.document.body.innerText;else r=e.location.hash;if(!r||r=="#")r="__bx_no_hash__";if(r.indexOf("#")==0)r=r.substring(1);if(r!=a.ajax.history.expected_hash){var o=u.get(r);if(o){a.ajax.history.obParams.setState(o);a.ajax.history.expected_hash=r;if(null!=a.ajax.history.obFrame){var s=r=="__bx_no_hash__"?"":r;if(e.location.hash!=s&&e.location.hash!="#"+s)e.location.hash=s}}}a.ajax.history.obTimer=setTimeout(a.ajax.history.__hashListener,500)}},put:function(t,r,o,s){if(this.bPushState){if(!s){history.pushState(t,"",r)}else{a.ajax.history.startState=t}}else{if(typeof o!="undefined")r=o;else r="view"+r;u.put(r,t);a.ajax.history.expected_hash=r;e.location.hash=a.util.urlencode(r);if(null!=a.ajax.history.obFrame){a.ajax.history.obFrame.contentWindow.document.open();a.ajax.history.obFrame.contentWindow.document.write(r);a.ajax.history.obFrame.contentWindow.document.close()}}},checkRedirectStart:function(t,r){var o=e.location.hash;if(o.substring(0,1)=="#")o=o.substring(1);var s=o.substring(0,5);if(s=="view/"||s=="view%"){a.ajax.history.bHashCollision=true;document.write("<"+'div id="__ajax_hash_collision_'+r+'" style="display: none;">')}},checkRedirectFinish:function(t,r){document.write("</div>");var o=e.location.hash;if(o.substring(0,1)=="#")o=o.substring(1);a.ready(function(){var e=o.substring(0,5);if(e=="view/"||e=="view%"){var s=a("__ajax_hash_collision_"+r);var i=s.firstChild;a.cleanNode(i);s.style.display="block";if(e!="view%")o=a.util.urlencode(o);o+=(o.indexOf("%3F")==-1?"%3F":"%26")+t+"="+r;var n="/bitrix/tools/ajax_redirector.php?hash="+o;a.ajax.insertToNode(n,i)}})}};a.ajax.component=function(e){this.node=e};a.ajax.component.prototype.getState=function(){var t={node:this.node,title:e.document.title,data:a(this.node).innerHTML};var r=a("navigation");if(null!=r)t.nav_chain=r.innerHTML;a.onCustomEvent(a(t.node),"onComponentAjaxHistoryGetState",[t]);return t};a.ajax.component.prototype.setState=function(e){a(e.node).innerHTML=e.data;a.ajax.UpdatePageTitle(e.title);if(e.nav_chain){a.ajax.UpdatePageNavChain(e.nav_chain)}a.onCustomEvent(a(e.node),"onComponentAjaxHistorySetState",[e])};var u={arHistory:{},put:function(e,a){this.arHistory[e]=a},get:function(e){return this.arHistory[e]}};a.ajax.FormData=function(){this.elements=[];this.files=[];this.features={};this.isSupported();this.log("BX FormData init")};a.ajax.FormData.isSupported=function(){var e=new a.ajax.FormData;var t=e.features.supported;e=null;return t};a.ajax.FormData.prototype.log=function(e){if(false){try{if(a.browser.IsIE())e=JSON.stringify(e);console.log(e)}catch(t){}}};a.ajax.FormData.prototype.isSupported=function(){var a={};a.fileReader=e.FileReader&&e.FileReader.prototype.readAsBinaryString;a.readFormData=a.sendFormData=!!e.FormData;a.supported=!!(a.readFormData&&a.sendFormData);this.features=a;this.log("features:");this.log(a);return a.supported};a.ajax.FormData.prototype.append=function(e,a){if(typeof a==="object"){this.files.push({name:e,value:a})}else{this.elements.push({name:e,value:a})}};a.ajax.FormData.prototype.send=function(e,t,r,o){this.log("FD send");this.xhr=a.ajax({method:"POST",dataType:"html",url:e,onsuccess:t,onfailure:o,start:false,preparePost:false});if(r){this.xhr.upload.addEventListener("progress",function(e){if(e.lengthComputable)r(e.loaded/(e.total||e.totalSize))},false)}if(this.features.readFormData&&this.features.sendFormData){var s=new FormData;this.log("use browser formdata");for(var i in this.elements){if(this.elements.hasOwnProperty(i))s.append(this.elements[i].name,this.elements[i].value)}for(i in this.files){if(this.files.hasOwnProperty(i))s.append(this.files[i].name,this.files[i].value)}this.xhr.send(s)}return this.xhr};a.addCustomEvent("onAjaxFailure",a.debug)})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/bitrix/js/main/json/json2.min.js?14725587833467";s:6:"source";s:33:"/bitrix/js/main/json/json2.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

var JSON;if(!JSON){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/bitrix/js/main/core/core_ls.min.js?14725587837365";s:6:"source";s:31:"/bitrix/js/main/core/core_ls.js";s:3:"min";s:35:"/bitrix/js/main/core/core_ls.min.js";s:3:"map";s:35:"/bitrix/js/main/core/core_ls.map.js";}"*/
(function(e){if(e.BX.localStorage)return;var t=e.BX,r=null,o=null,a="_bxCurrentKey",i=false;t.localStorage=function(){this.keyChanges={};t.bind(t.browser.IsIE()&&!t.browser.IsIE9()?document:e,"storage",t.proxy(this._onchange,this));setInterval(t.delegate(this._clear,this),5e3)};t.localStorage.checkBrowser=function(){return i};t.localStorage.set=function(e,r,o){return t.localStorage.instance().set(e,r,o)};t.localStorage.get=function(e){return t.localStorage.instance().get(e)};t.localStorage.remove=function(e){return t.localStorage.instance().remove(e)};t.localStorage.instance=function(){if(!r){var e=t.localStorage.checkBrowser();if(e=="native")r=new t.localStorage;else if(e=="ie8")r=new t.localStorageIE8;else if(e=="ie7")r=new t.localStorageIE7;else{r={set:t.DoNothing,get:function(){return null},remove:t.DoNothing}}}return r};t.localStorage.prototype.prefix=function(){if(!o){o="bx"+t.message("USER_ID")+"-"+(t.message.SITE_ID?t.message("SITE_ID"):"admin")+"-"}return o};t.localStorage.prototype._onchange=function(r){r=r||e.event;if(!r.key)return;if(t.browser.DetectIeVersion()>0&&this.keyChanges[r.key]){this.keyChanges[r.key]=false;return}if(!!r.key&&r.key.substring(0,this.prefix().length)==this.prefix()){var o={key:r.key.substring(this.prefix().length,r.key.length),value:!!r.newValue?this._decode(r.newValue.substring(11,r.newValue.length)):null,oldValue:!!r.oldValue?this._decode(r.oldValue.substring(11,r.oldValue.length)):null};switch(o.key){case"BXGCE":if(o.value){t.onCustomEvent(o.value.e,o.value.p)}break;default:if(r.newValue)t.onCustomEvent(e,"onLocalStorageSet",[o]);if(r.oldValue&&!r.newValue)t.onCustomEvent(e,"onLocalStorageRemove",[o]);t.onCustomEvent(e,"onLocalStorageChange",[o]);break}}};t.localStorage.prototype._clear=function(){var e=+new Date,t,r;for(r=0;r<localStorage.length;r++){t=localStorage.key(r);if(t.substring(0,2)=="bx"){var o=localStorage.getItem(t).split(":",1)*1e3;if(e>=o)localStorage.removeItem(t)}}};t.localStorage.prototype._encode=function(e){if(typeof e=="object")e=JSON.stringify(e);else e=e.toString();return e};t.localStorage.prototype._decode=function(e){var t=null;if(!!e){try{t=JSON.parse(e)}catch(r){t=e}}return t};t.localStorage.prototype._trigger_error=function(e,r,o,a){t.onCustomEvent(this,"onLocalStorageError",[e,{key:r,value:o,ttl:a}])};t.localStorage.prototype.set=function(e,t,r){if(!r||r<=0)r=60;if(e==undefined||e==null||t==undefined)return false;this.keyChanges[this.prefix()+e]=true;try{localStorage.setItem(this.prefix()+e,Math.round(+new Date/1e3)+r+":"+this._encode(t))}catch(o){this._trigger_error(o,e,t,r)}};t.localStorage.prototype.get=function(e){var t=localStorage.getItem(this.prefix()+e);if(t){var r=t.split(":",1)*1e3;if(+new Date<=r){t=t.substring(11,t.length);return this._decode(t)}}return null};t.localStorage.prototype.remove=function(e){this.keyChanges[this.prefix()+e]=true;localStorage.removeItem(this.prefix()+e)};t.localStorageIE7=function(){this.NS="BXLocalStorage";this.__current_state={};this.keyChanges={};t.ready(t.delegate(this._Init,this))};t.extend(t.localStorageIE7,t.localStorage);t.localStorageIE7.prototype._Init=function(){this.storage_element=document.body.appendChild(t.create("DIV"));this.storage_element.addBehavior("#default#userData");this.storage_element.load(this.NS);var e=this.storage_element.xmlDocument,r=e.firstChild.attributes.length;for(var o=0;o<r;o++){if(!!e.firstChild.attributes[o]){var a=e.firstChild.attributes[o].nodeName;if(a.substring(0,this.prefix().length)==this.prefix()){this.__current_state[a]=e.firstChild.attributes[o].nodeValue}}}setInterval(t.delegate(this._Listener,this),500);setInterval(t.delegate(this._clear,this),5e3)};t.localStorageIE7.prototype._Listener=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument,r=t.firstChild.attributes.length,o,a,i;var l={},s=[];for(o=0;o<r;o++){if(!!t.firstChild.attributes[o]){a=t.firstChild.attributes[o].nodeName;if(a.substring(0,this.prefix().length)==this.prefix()){i=t.firstChild.attributes[o].nodeValue;if(this.__current_state[a]!=i){s.push({key:a,newValue:i,oldValue:this.__current_state[a]})}l[a]=i;delete this.__current_state[a]}}}for(o in this.__current_state){if(this.__current_state.hasOwnProperty(o)){s.push({key:o,newValue:undefined,oldValue:this.__current_state[o]})}}this.__current_state=l;for(o=0;o<s.length;o++){this._onchange(s[o])}};t.localStorageIE7.prototype._clear=function(){this.storage_element.load(this.NS);var e=this.storage_element.xmlDocument,t=e.firstChild.attributes.length,r=+new Date,o,a,i,l;for(o=0;o<t;o++){if(!!e.firstChild.attributes[o]){a=e.firstChild.attributes[o].nodeName;if(a.substring(0,2)=="bx"){i=e.firstChild.attributes[o].nodeValue;l=i.split(":",1)*1e3;if(r>=l){e.firstChild.removeAttribute(a)}}}}this.storage_element.save(this.NS)};t.localStorageIE7.prototype.set=function(e,t,r){if(!r||r<=0)r=60;try{this.storage_element.load(this.NS);var o=this.storage_element.xmlDocument;this.keyChanges[this.prefix()+e]=true;o.firstChild.setAttribute(this.prefix()+e,Math.round(+new Date/1e3)+r+":"+this._encode(t));this.storage_element.save(this.NS)}catch(a){this._trigger_error(a,e,t,r)}};t.localStorageIE7.prototype.get=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument;var r=t.firstChild.getAttribute(this.prefix()+e);if(r){var o=r.split(":",1)*1e3;if(+new Date<=o){r=r.substring(11,r.length);return this._decode(r)}}return null};t.localStorageIE7.prototype.remove=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument;t.firstChild.removeAttribute(this.prefix()+e);this.keyChanges[this.prefix()+e]=true;this.storage_element.save(this.NS)};t.localStorageIE8=function(){this.key=a;this.currentKey=null;this.currentValue=null;t.localStorageIE8.superclass.constructor.apply(this)};t.extend(t.localStorageIE8,t.localStorage);t.localStorageIE8.prototype._onchange=function(e){if(null==this.currentKey){this.currentKey=localStorage.getItem(this.key);if(this.currentKey){this.currentValue=localStorage.getItem(this.prefix()+this.currentKey)}}else{e={key:this.prefix()+this.currentKey,newValue:localStorage.getItem(this.prefix()+this.currentKey),oldValue:this.currentValue};this.currentKey=null;this.currentValue=null;if(this.keyChanges[e.key]){this.keyChanges[e.key]=false;return}t.localStorageIE8.superclass._onchange.apply(this,[e])}};t.localStorageIE8.prototype.set=function(e,r,o){this.currentKey=null;this.keyChanges[this.prefix()+e]=true;try{localStorage.setItem(this.key,e);t.localStorageIE8.superclass.set.apply(this,arguments)}catch(a){this._trigger_error(a,e,r,o)}};t.localStorageIE8.prototype.remove=function(e){this.currentKey=null;this.keyChanges[this.prefix()+e]=true;localStorage.setItem(this.key,e);t.localStorageIE8.superclass.remove.apply(this,arguments)};t.onGlobalCustomEvent=function(e,r,o){if(!!t.localStorage.checkBrowser())t.localStorage.set("BXGCE",{e:e,p:r},1);if(!o)t.onCustomEvent(e,r)};try{i=!!localStorage.setItem}catch(l){}if(i){i="native";var s=t.browser.IsIE()&&!t.browser.IsIE9()?document:e,n=function(r){if(typeof(r||e.event).key=="undefined")i="ie8";t.unbind(s,"storage",n);t.localStorage.instance()};t.bind(s,"storage",n);try{localStorage.setItem(a,null)}catch(l){i=false;t.localStorage.instance()}}else if(t.browser.IsIE7()){i="ie7";t.localStorage.instance()}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:47:"/bitrix/js/main/core/core_fx.js?147255878416538";s:6:"source";s:31:"/bitrix/js/main/core/core_fx.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function(window){

var defaultOptions = {
	time: 1.0,
	step: 0.05,
	type: 'linear',

	allowFloat: false
}

/*
options: {
	start: start value or {param: value, param: value}
	finish: finish value or {param: value, param: value}
	time: time to transform in seconds
	type: linear|accelerated|decelerated|custom func name
	callback,
	callback_start,
	callback_complete,

	step: time between steps in seconds
	allowFloat: false|true
}
*/
BX.fx = function(options)
{
	this.options = options;

	if (null != this.options.time)
		this.options.originalTime = this.options.time;
	if (null != this.options.step)
		this.options.originalStep = this.options.step;

	if (!this.__checkOptions())
		return false;

	this.__go = BX.delegate(this.go, this);

	this.PARAMS = {};
}

BX.fx.prototype.__checkOptions = function()
{
	if (typeof this.options.start != typeof this.options.finish)
		return false;

	if (null == this.options.time) this.options.time = defaultOptions.time;
	if (null == this.options.step) this.options.step = defaultOptions.step;
	if (null == this.options.type) this.options.type = defaultOptions.type;
	if (null == this.options.allowFloat) this.options.allowFloat = defaultOptions.allowFloat;

	this.options.time *= 1000;
	this.options.step *= 1000;

	if (typeof this.options.start != 'object')
	{
		this.options.start = {_param: this.options.start};
		this.options.finish = {_param: this.options.finish};
	}

	var i;
	for (i in this.options.start)
	{
		if (null == this.options.finish[i])
		{
			this.options.start[i] = null;
			delete this.options.start[i];
		}
	}

	if (!BX.type.isFunction(this.options.type))
	{
		if (BX.type.isFunction(window[this.options.type]))
			this.options.type = window[this.options.type];
		else if (BX.type.isFunction(BX.fx.RULES[this.options.type]))
			this.options.type = BX.fx.RULES[this.options.type];
		else
			this.options.type = BX.fx.RULES[defaultOptions.type];
	}

	return true;
}

BX.fx.prototype.go = function()
{
	var timeCurrent = new Date().valueOf();
	if (timeCurrent < this.PARAMS.timeFinish)
	{
		for (var i in this.PARAMS.current)
		{
			this.PARAMS.current[i][0] = this.options.type.apply(this, [{
				start_value: this.PARAMS.start[i][0],
				finish_value: this.PARAMS.finish[i][0],
				current_value: this.PARAMS.current[i][0],
				current_time: timeCurrent - this.PARAMS.timeStart,
				total_time: this.options.time
			}]);
		}

		this._callback(this.options.callback);

		if (!this.paused)
			this.PARAMS.timer = setTimeout(this.__go, this.options.step);
	}
	else
	{
		this.stop();
	}
}

BX.fx.prototype._callback = function(cb)
{
	var tmp = {};

	cb = cb || this.options.callback;

	for (var i in this.PARAMS.current)
	{
		tmp[i] = (this.options.allowFloat ? this.PARAMS.current[i][0] : Math.round(this.PARAMS.current[i][0])) + this.PARAMS.current[i][1];
	}

	return cb.apply(this, [null != tmp['_param'] ? tmp._param : tmp]);
}

BX.fx.prototype.start = function()
{
	var i,value, unit;

	this.PARAMS.start = {};
	this.PARAMS.current = {};
	this.PARAMS.finish = {};

	for (i in this.options.start)
	{
		value = +this.options.start[i];
		unit = (this.options.start[i]+'').substring((value+'').length);
		this.PARAMS.start[i] = [value, unit];
		this.PARAMS.current[i] = [value, unit];
		this.PARAMS.finish[i] = [+this.options.finish[i], unit];
	}

	this._callback(this.options.callback_start);
	this._callback(this.options.callback);

	this.PARAMS.timeStart = new Date().valueOf();
	this.PARAMS.timeFinish = this.PARAMS.timeStart + this.options.time;
	this.PARAMS.timer = setTimeout(BX.delegate(this.go, this), this.options.step);

	return this;
}

BX.fx.prototype.pause = function()
{
	if (this.paused)
	{
		this.PARAMS.timer = setTimeout(this.__go, this.options.step);
		this.paused = false;
	}
	else
	{
		clearTimeout(this.PARAMS.timer);
		this.paused = true;
	}
}

BX.fx.prototype.stop = function(silent)
{
	silent = !!silent;
	if (this.PARAMS.timer)
		clearTimeout(this.PARAMS.timer);

	if (null != this.options.originalTime)
		this.options.time = this.options.originalTime;
	if (null != this.options.originalStep)
		this.options.step = this.options.originalStep;

	this.PARAMS.current = this.PARAMS.finish;
	if (!silent) {
		this._callback(this.options.callback);
		this._callback(this.options.callback_complete);
	}
}

/*
type rules of animation
 - linear - simple linear animation
 - accelerated
 - decelerated
*/

/*
	params: {
		start_value, finish_value, current_time, total_time
	}
*/
BX.fx.RULES =
{
	linear: function(params)
	{
		return params.start_value + (params.current_time/params.total_time) * (params.finish_value - params.start_value);
	},

	decelerated: function(params)
	{
		return params.start_value + Math.sqrt(params.current_time/params.total_time) * (params.finish_value - params.start_value);
	},

	accelerated: function(params)
	{
		var q = params.current_time/params.total_time;
		return params.start_value + q * q * (params.finish_value - params.start_value);
	}
}

/****************** effects realizaion ************************/

/*
	type = 'fade' || 'scroll' || 'scale' || 'fold'
*/

BX.fx.hide = function(el, type, opts)
{
	el = BX(el);

	if (typeof type == 'object' && null == opts)
	{
		opts = type;
		type = opts.type
	}

	if (!BX.type.isNotEmptyString(type))
	{
		el.style.display = 'none';
		return;
	}

	var fxOptions = BX.fx.EFFECTS[type](el, opts, 0);
	fxOptions.callback_complete = function () {
		if (opts.hide !== false)
			el.style.display = 'none';

		if (opts.callback_complete)
			opts.callback_complete.apply(this, arguments);
	}

	return (new BX.fx(fxOptions)).start();
}

BX.fx.show = function(el, type, opts)
{
	el = BX(el);

	if (typeof type == 'object' && null == opts)
	{
		opts = type;
		type = opts.type
	}

	if (!opts) opts = {};

	if (!BX.type.isNotEmptyString(type))
	{
		el.style.display = 'block';
		return;
	}

	var fxOptions = BX.fx.EFFECTS[type](el, opts, 1);

	fxOptions.callback_complete = function () {
		if (opts.show !== false)
			el.style.display = 'block';

		if (opts.callback_complete)
			opts.callback_complete.apply(this, arguments);
	}

	return (new BX.fx(fxOptions)).start();
}

BX.fx.EFFECTS = {
	scroll: function(el, opts, action)
	{
		if (!opts.direction) opts.direction = 'vertical';

		var param = opts.direction == 'horizontal' ? 'width' : 'height';

		var val = parseInt(BX.style(el, param));
		if (isNaN(val))
		{
			val = BX.pos(el)[param];
		}

		if (action == 0)
			var start = val, finish = opts.min_height ? parseInt(opts.min_height) : 0;
		else
			var finish = val, start = opts.min_height ? parseInt(opts.min_height) : 0;

		return {
			'start': start,
			'finish': finish,
			'time': opts.time || defaultOptions.time,
			'type': 'linear',
			callback_start: function () {
				if (BX.style(el, 'position') == 'static')
					el.style.position = 'relative';

				el.style.overflow = 'hidden';
				el.style[param] = start + 'px';
				el.style.display = 'block';
			},
			callback: function (val) {el.style[param] = val + 'px';}
		}
	},

	fade: function(el, opts, action)
	{
		var fadeOpts = {
			'time': opts.time || defaultOptions.time,
			'type': action == 0 ? 'decelerated' : 'linear',
			'start': action == 0 ? 1 : 0,
			'finish': action == 0 ? 0 : 1,
			'allowFloat': true
		};

		if (BX.browser.IsIE() && !BX.browser.IsIE9())
		{
			fadeOpts.start *= 100; fadeOpts.finish *= 100; fadeOpts.allowFloat = false;

			fadeOpts.callback_start = function() {
				el.style.display = 'block';
				el.style.filter += "progid:DXImageTransform.Microsoft.Alpha(opacity=" + fadeOpts.start + ")";
			};

			fadeOpts.callback = function (val) {
				(el.filters['DXImageTransform.Microsoft.alpha']||el.filters.alpha).opacity = val;
			}
		}
		else
		{
			fadeOpts.callback_start = function () {
				el.style.display = 'block';
			}

			fadeOpts.callback = function (val) {
				el.style.opacity = el.style.KhtmlOpacity = el.style.MozOpacity = val;
			};
		}

		return fadeOpts;
	},

	fold: function (el, opts, action) // 'fold' is a combination of two consequential 'scroll' hidings.
	{
		if (action != 0) return;

		var pos = BX.pos(el);
		var coef = pos.height / (pos.width + pos.height);
		var old_opts = {time: opts.time || defaultOptions.time, callback_complete: opts.callback_complete, hide: opts.hide};

		opts.type = 'scroll';
		opts.direction = 'vertical';
		opts.min_height = opts.min_height || 10;
		opts.hide = false;
		opts.time = coef * old_opts.time;
		opts.callback_complete = function()
		{
			el.style.whiteSpace = 'nowrap';

			opts.direction = 'horizontal';
			opts.min_height = null;

			opts.time = old_opts.time - opts.time;
			opts.hide = old_opts.hide;
			opts.callback_complete = old_opts.callback_complete;

			BX.fx.hide(el, opts);
		}

		return BX.fx.EFFECTS.scroll(el, opts, action);
	},

	scale: function (el, opts, action)
	{
		var val = {width: parseInt(BX.style(el, 'width')), height: parseInt(BX.style(el, 'height'))};
		if (isNaN(val.width) || isNaN(val.height))
		{
			var pos = BX.pos(el)
			val = {width: pos.width, height: pos.height};
		}

		if (action == 0)
			var start = val, finish = {width: 0, height: 0};
		else
			var finish = val, start = {width: 0, height: 0};

		return {
			'start': start,
			'finish': finish,
			'time': opts.time || defaultOptions.time,
			'type': 'linear',
			callback_start: function () {
				el.style.position = 'relative';
				el.style.overflow = 'hidden';
				el.style.display = 'block';
				el.style.height = start.height + 'px';
				el.style.width = start.width + 'px';
			},
			callback: function (val) {
				el.style.height = val.height + 'px';
				el.style.width = val.width + 'px';
			}
		}
	}
}

// Color animation
//
// Set animation rule
// BX.fx.colorAnimate.addRule('animationRule1',"#FFF","#faeeb4", "background-color", 100, 1, true);
// BX.fx.colorAnimate.addRule('animationRule2',"#fc8282","#ff0000", "color", 100, 1, true);
// Params: 1 - animation name, 2 - start color, 3 - end color, 4 - count step, 5 - delay each step, 6 - return color on end animation
//
// Animate color for element
// BX.fx.colorAnimate(BX('element'), 'animationRule1,animationRule2');

var defaultOptionsColorAnimation = {
	arStack: {},
	arRules: {},
	globalAnimationId: 0
}

BX.fx.colorAnimate = function(element, rule, back)
{
	if (element == null)
		return;

	animationId = element.getAttribute('data-animation-id');
	if (animationId == null)
	{
		animationId = defaultOptionsColorAnimation.globalAnimationId;
		element.setAttribute('data-animation-id', defaultOptionsColorAnimation.globalAnimationId++);
	}
	var aRuleList = rule.split(/\s*,\s*/);

	for (var j	= 0; j < aRuleList.length; j++)
	{
		rule = aRuleList[j];

		if (!defaultOptionsColorAnimation.arRules[rule]) continue;

		var i=0;

		if (!defaultOptionsColorAnimation.arStack[animationId])
		{
			defaultOptionsColorAnimation.arStack[animationId] = {};
		}
		else if (defaultOptionsColorAnimation.arStack[animationId][rule])
		{
			i = defaultOptionsColorAnimation.arStack[animationId][rule].i;
			clearInterval(defaultOptionsColorAnimation.arStack[animationId][rule].tId);
		}

		if ((i==0 && back) || (i==defaultOptionsColorAnimation.arRules[rule][3] && !back)) continue;

		defaultOptionsColorAnimation.arStack[animationId][rule] = {'i':i, 'element': element, 'tId':setInterval('BX.fx.colorAnimate.run("'+animationId+'","'+rule+'")', defaultOptionsColorAnimation.arRules[rule][4]),'back':Boolean(back)};
	}
}

BX.fx.colorAnimate.addRule = function (rule, startColor, finishColor, cssProp, step, delay, back)
{
	defaultOptionsColorAnimation.arRules[rule] = [
		BX.util.hex2rgb(startColor),
		BX.util.hex2rgb(finishColor),
		cssProp.replace(/\-(.)/g,function(){return arguments[1].toUpperCase();}),
		step,
		delay || 1,
		back || false
	];
};

BX.fx.colorAnimate.run = function(animationId, rule)
{
	element = defaultOptionsColorAnimation.arStack[animationId][rule].element;

    defaultOptionsColorAnimation.arStack[animationId][rule].i += defaultOptionsColorAnimation.arStack[animationId][rule].back?-1:1;
 	var finishPercent = defaultOptionsColorAnimation.arStack[animationId][rule].i/defaultOptionsColorAnimation.arRules[rule][3];
	var startPercent = 1 - finishPercent;

	var aRGBStart = defaultOptionsColorAnimation.arRules[rule][0];
	var aRGBFinish = defaultOptionsColorAnimation.arRules[rule][1];

	element.style[defaultOptionsColorAnimation.arRules[rule][2]] = 'rgb('+
	Math.floor( aRGBStart['r'] * startPercent + aRGBFinish['r'] * finishPercent ) + ','+
	Math.floor( aRGBStart['g'] * startPercent + aRGBFinish['g'] * finishPercent ) + ','+
	Math.floor( aRGBStart['b'] * startPercent + aRGBFinish['b'] * finishPercent ) +')';

	if ( defaultOptionsColorAnimation.arStack[animationId][rule].i == defaultOptionsColorAnimation.arRules[rule][3] || defaultOptionsColorAnimation.arStack[animationId][rule].i ==0)
	{
		clearInterval(defaultOptionsColorAnimation.arStack[animationId][rule].tId);
		if (defaultOptionsColorAnimation.arRules[rule][5])
			BX.fx.colorAnimate(defaultOptionsColorAnimation.arStack[animationId][rule].element, rule, true);
	}
}


/*
options = {
	delay: 100,
	duration : 3000,
	start : { scroll : document.body.scrollTop, left : 0, opacity :  100 },
	finish : { scroll : document.body.scrollHeight, left : 500, opacity : 10 },
	transition : BitrixAnimation.makeEaseOut(BitrixAnimation.transitions.quart),

	step : function(state)
	{
		document.body.scrollTop = state.scroll;
		button.style.left =  state.left + "px";
		button.style.opacity =  state.opacity / 100;
	},
	complete : function()
	{
		button.style.background = "green";
	}
}

options =
{
	delay : 20,
	duration : 4000,
	transition : BXAnimation.makeEaseOut(BXAnimation.transitions.quart),
	progress : function(progress)
	{
		document.body.scrollTop = Math.round(topMax * progress);
		button.style.left =  Math.round(leftMax * progress) + "px";
		button.style.opacity =  (100 + Math.round((opacityMin - 100) * progress)) / 100;

	},
	complete : function()
	{
		button.style.background = "green";
	}
}
*/

BX.easing = function(options)
{
	this.options = options;
	this.timer = null;
};

BX.easing.prototype.animate = function()
{
	if (!this.options || !this.options.start || !this.options.finish ||
		typeof(this.options.start) != "object" || typeof(this.options.finish) != "object"
		)
		return null;

	for (var propName in this.options.start)
	{
		if (typeof(this.options.finish[propName]) == "undefined")
		{
			delete this.options.start[propName];
		}
	}

	this.options.progress = function(progress) {
		var state = {};
		for (var propName in this.start)
			state[propName] = Math.round(this.start[propName] + (this.finish[propName] - this.start[propName]) * progress);

		if (this.step)
			this.step(state);
	};

	this.animateProgress();
};

BX.easing.prototype.stop = function(completed)
{
	if (this.timer)
	{
		clearInterval(this.timer);
		this.timer = null;

		if (completed)
			this.options.complete && this.options.complete();
	}
};

BX.easing.prototype.animateProgress = function()
{
	var start = new Date();
	var delta = this.options.transition || BX.easing.transitions.linear;
	var duration = this.options.duration || 1000;

	this.timer = setInterval(BX.proxy(function() {

		var progress = (new Date() - start) / duration;
		if (progress > 1)
			progress = 1;

		this.options.progress(delta(progress));

		if (progress == 1)
			this.stop(true);

	}, this), this.options.delay || 13);

};

BX.easing.makeEaseInOut = function(delta)
{
	return function(progress) {
		if (progress < 0.5)
			return delta( 2 * progress ) / 2;
		else
			return (2 - delta( 2 * (1-progress) ) ) / 2;
	}
};

BX.easing.makeEaseOut = function(delta)
{
	return function(progress) {
		return 1 - delta(1 - progress);
	};
};

BX.easing.transitions = {

	linear : function(progress)
	{
		return progress;
	},

	quad : function(progress)
	{
		return Math.pow(progress, 2);
	},

	cubic : function(progress) {
		return Math.pow(progress, 3);
	},

	quart : function(progress)
	{
		return Math.pow(progress, 4);
	},

	quint : function(progress)
	{
		return Math.pow(progress, 5);
	},

	circ : function(progress)
	{
		return 1 - Math.sin(Math.acos(progress));
	},

	back : function(progress)
	{
		return Math.pow(progress, 2) * ((1.5 + 1) * progress - 1.5);
	},

	elastic: function(progress)
	{
		return Math.pow(2, 10 * (progress-1)) * Math.cos(20 * Math.PI * 1.5/3 * progress);
	},

	bounce : function(progress)
	{
		for(var a = 0, b = 1; 1; a += b, b /= 2) {
			if (progress >= (7 - 4 * a) / 11) {
				return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
			}
		}
	}};


})(window);


/* End */
;
//# sourceMappingURL=kernel_main.map.js