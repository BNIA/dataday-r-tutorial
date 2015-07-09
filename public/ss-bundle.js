(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
// For more information about browser field, check out the browser field at https://github.com/substack/browserify-handbook#browser-field.

module.exports = {
    // Create a <link> tag with optional data attributes
    createLink: function(href, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0];
        var link = document.createElement('link');

        link.href = href;
        link.rel = 'stylesheet';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            link.setAttribute('data-' + key, value);
        }

        head.appendChild(link);
    },
    // Create a <style> tag with optional data attributes
    createStyle: function(cssText, attributes) {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

        style.type = 'text/css';

        for (var key in attributes) {
            if ( ! attributes.hasOwnProperty(key)) {
                continue;
            }
            var value = attributes[key];
            style.setAttribute('data-' + key, value);
        }
        
        if (style.sheet) { // for jsdom and IE9+
            style.innerHTML = cssText;
            style.sheet.cssText = cssText;
            head.appendChild(style);
        } else if (style.styleSheet) { // for IE8 and below
            head.appendChild(style);
            style.styleSheet.cssText = cssText;
        } else { // for Chrome, Firefox, and Safari
            style.appendChild(document.createTextNode(cssText));
            head.appendChild(style);
        }
    }
};

},{}],2:[function(require,module,exports){
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

},{}],3:[function(require,module,exports){
/* http://prismjs.com/download.html?themes=prism-coy&languages=r&plugins=line-highlight+line-numbers+show-invisibles+autolinker+wpd+file-highlight+show-language+highlight-keywords */
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);return i}var s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);s[o]=i[o]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=s)}),r[e]=s},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var l,s,o=a;o&&!e.test(o.className);)o=o.parentNode;if(o&&(l=(o.className.match(e)||[,""])[1],s=t.languages[l]),a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l),s){var u=a.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var g={element:a,language:l,grammar:s,code:u};if(t.hooks.run("before-highlight",g),r&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),l),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},c.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",g)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var l in i)n[l]=i[l];delete n.rest}e:for(var l in n)if(n.hasOwnProperty(l)&&n[l]){var s=n[l];s="Array"===t.util.type(s)?s:[s];for(var o=0;o<s.length;++o){var u=s[o],g=u.inside,c=!!u.lookbehind,f=0,h=u.alias;u=u.pattern||u;for(var p=0;p<r.length;p++){var d=r[p];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,k=y+v,b=d.slice(0,y+1),w=d.slice(k+1),N=[p,1];b&&N.push(b);var O=new a(l,g?t.tokenize(m,g):m,h);N.push(O),w&&N.push(w),Array.prototype.splice.apply(r,N)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var l="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,l)}t.hooks.run("wrap",i);var s="";for(var o in i.attributes)s+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+s+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism);;
Prism.languages.r={comment:/#.+/,string:/(['"])(?:\\?.)*?\1/,"percent-operator":{pattern:/%[^%]*?%/,alias:"operator"},"boolean":/\b(?:TRUE|FALSE)\b/,ellipsis:/\.\.(?:\.|\d+)/,number:[/\b(?:NaN|Inf)\b/,/\b(?:0x[\dA-Fa-f]+(?:\.\d*)?|\d*\.?\d+)(?:[EePp][+-]??\d+)?[iL]?\b/],keyword:/\b(?:if|else|repeat|while|function|for|in|next|break|NULL|NA|NA_integer_|NA_real_|NA_complex_|NA_character_)\b/,operator:/->>?|<?<-|[<>!=]=?|::?|&&?|\|\|?|[+\-*\/^$@~]/,punctuation:/[(){}\[\],;]/};;
!function(){function e(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function t(e,t){return t=" "+t+" ",(" "+e.className+" ").replace(/[\n\t]/g," ").indexOf(t)>-1}function n(e,n,i){for(var r,a=n.replace(/\s+/g,"").split(","),l=+e.getAttribute("data-line-offset")||0,o=parseFloat(getComputedStyle(e).lineHeight),d=0;r=a[d++];){r=r.split("-");var c=+r[0],h=+r[1]||c,s=document.createElement("div");s.textContent=Array(h-c+2).join(" \n"),s.className=(i||"")+" line-highlight",t(e,"line-numbers")||(s.setAttribute("data-start",c),h>c&&s.setAttribute("data-end",h)),s.style.top=(c-l-1)*o+"px",t(e,"line-numbers")?e.appendChild(s):(e.querySelector("code")||e).appendChild(s)}}function i(){var t=location.hash.slice(1);e(".temporary.line-highlight").forEach(function(e){e.parentNode.removeChild(e)});var i=(t.match(/\.([\d,-]+)$/)||[,""])[1];if(i&&!document.getElementById(t)){var r=t.slice(0,t.lastIndexOf(".")),a=document.getElementById(r);a&&(a.hasAttribute("data-line")||a.setAttribute("data-line",""),n(a,i,"temporary "),document.querySelector(".temporary.line-highlight").scrollIntoView())}}if(window.Prism){var r=(crlf=/\r?\n|\r/g,0);Prism.hooks.add("after-highlight",function(t){var a=t.element.parentNode,l=a&&a.getAttribute("data-line");a&&l&&/pre/i.test(a.nodeName)&&(clearTimeout(r),e(".line-highlight",a).forEach(function(e){e.parentNode.removeChild(e)}),n(a,l),r=setTimeout(i,1))}),addEventListener("hashchange",i)}}();;
Prism.hooks.add("after-highlight",function(e){var t=e.element.parentNode,s=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(s.test(t.className)||s.test(e.element.className))){s.test(e.element.className)&&(e.element.className=e.element.className.replace(s,"")),s.test(t.className)||(t.className+=" line-numbers");var a,n=1+e.code.split("\n").length,l=new Array(n);l=l.join("<span></span>"),a=document.createElement("span"),a.className="line-numbers-rows",a.innerHTML=l,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(a)}});;
!function(){if(window.Prism)for(var r in Prism.languages){var g=Prism.languages[r];g.tab=/\t/g,g.crlf=/\r\n/g,g.lf=/\n/g,g.cr=/\r/g}}();;
!function(){if(self.Prism){var i=/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:#=?&amp;]+/,n=/\b\S+@[\w.]+[a-z]{2}/,t=/\[([^\]]+)]\(([^)]+)\)/,e=["comment","url","attr-value","string"];for(var a in Prism.languages){var r=Prism.languages[a];Prism.languages.DFS(r,function(a,r,l){e.indexOf(l)>-1&&"Array"!==Prism.util.type(r)&&(r.pattern||(r=this[a]={pattern:r}),r.inside=r.inside||{},"comment"==l&&(r.inside["md-link"]=t),"attr-value"==l?Prism.languages.insertBefore("inside","punctuation",{"url-link":i},r):r.inside["url-link"]=i,r.inside["email-link"]=n)}),r["url-link"]=i,r["email-link"]=n}Prism.hooks.add("wrap",function(i){if(/-link$/.test(i.type)){i.tag="a";var n=i.content;if("email-link"==i.type&&0!=n.indexOf("mailto:"))n="mailto:"+n;else if("md-link"==i.type){var e=i.content.match(t);n=e[2],i.content=e[1]}i.attributes.href=n}})}}();;
!function(){function e(e){var a=e.toLowerCase();if(t.HTML[a])return"html";if(t.SVG[e])return"svg";if(t.MathML[e])return"mathml";if(0!==t.HTML[a]){var n=(document.createElement(e).toString().match(/\[object HTML(.+)Element\]/)||[])[1];if(n&&"Unknown"!=n)return t.HTML[a]=1,"html"}if(t.HTML[a]=0,0!==t.SVG[e]){var r=(document.createElementNS("http://www.w3.org/2000/svg",e).toString().match(/\[object SVG(.+)Element\]/)||[])[1];if(r&&"Unknown"!=r)return t.SVG[e]=1,"svg"}return t.SVG[e]=0,0!==t.MathML[e]&&0===e.indexOf("m")?(t.MathML[e]=1,"mathml"):(t.MathML[e]=0,null)}if(self.Prism){if(Prism.languages.css&&(Prism.languages.css.atrule.inside["atrule-id"]=/^@[\w-]+/,Prism.languages.css.selector.pattern?(Prism.languages.css.selector.inside["pseudo-class"]=/:[\w-]+/,Prism.languages.css.selector.inside["pseudo-element"]=/::[\w-]+/):Prism.languages.css.selector={pattern:Prism.languages.css.selector,inside:{"pseudo-class":/:[\w-]+/,"pseudo-element":/::[\w-]+/}}),Prism.languages.markup){Prism.languages.markup.tag.inside.tag.inside["tag-id"]=/[\w-]+/;var t={HTML:{a:1,abbr:1,acronym:1,b:1,basefont:1,bdo:1,big:1,blink:1,cite:1,code:1,dfn:1,em:1,kbd:1,i:1,rp:1,rt:1,ruby:1,s:1,samp:1,small:1,spacer:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,"var":1,wbr:1,noframes:1,summary:1,command:1,dt:1,dd:1,figure:1,figcaption:1,center:1,section:1,nav:1,article:1,aside:1,hgroup:1,header:1,footer:1,address:1,noscript:1,isIndex:1,main:1,mark:1,marquee:1,meter:1,menu:1},SVG:{animateColor:1,animateMotion:1,animateTransform:1,glyph:1,feBlend:1,feColorMatrix:1,feComponentTransfer:1,feFuncR:1,feFuncG:1,feFuncB:1,feFuncA:1,feComposite:1,feConvolveMatrix:1,feDiffuseLighting:1,feDisplacementMap:1,feFlood:1,feGaussianBlur:1,feImage:1,feMerge:1,feMergeNode:1,feMorphology:1,feOffset:1,feSpecularLighting:1,feTile:1,feTurbulence:1,feDistantLight:1,fePointLight:1,feSpotLight:1,linearGradient:1,radialGradient:1,altGlyph:1,textPath:1,tref:1,altglyph:1,textpath:1,tref:1,altglyphdef:1,altglyphitem:1,clipPath:1,"color-profile":1,cursor:1,"font-face":1,"font-face-format":1,"font-face-name":1,"font-face-src":1,"font-face-uri":1,foreignObject:1,glyph:1,glyphRef:1,hkern:1,vkern:1},MathML:{}}}var a;Prism.hooks.add("wrap",function(t){if((["tag-id"].indexOf(t.type)>-1||"property"==t.type&&0!=t.content.indexOf("-")||"atrule-id"==t.type&&0!=t.content.indexOf("@-")||"pseudo-class"==t.type&&0!=t.content.indexOf(":-")||"pseudo-element"==t.type&&0!=t.content.indexOf("::-")||"attr-name"==t.type&&0!=t.content.indexOf("data-"))&&-1===t.content.indexOf("<")){var n="w/index.php?fulltext&search=";t.tag="a";var r="http://docs.webplatform.org/";"css"==t.language?(r+="wiki/css/","property"==t.type?r+="properties/":"atrule-id"==t.type?r+="atrules/":"pseudo-class"==t.type?r+="selectors/pseudo-classes/":"pseudo-element"==t.type&&(r+="selectors/pseudo-elements/")):"markup"==t.language&&("tag-id"==t.type?(a=e(t.content)||a,r+=a?"wiki/"+a+"/elements/":n):"attr-name"==t.type&&(r+=a?"wiki/"+a+"/attributes/":n)),r+=t.content,t.attributes.href=r,t.attributes.target="_blank"}})}}();;
!function(){self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var r,s=t.getAttribute("data-src"),a=t,n=/\blang(?:uage)?-(?!\*)(\w+)\b/i;a&&!n.test(a.className);)a=a.parentNode;if(a&&(r=(t.className.match(n)||[,""])[1]),!r){var l=(s.match(/\.(\w+)$/)||[,""])[1];r=e[l]||l}var o=document.createElement("code");o.className="language-"+r,t.textContent="",o.textContent="Loading…",t.appendChild(o);var i=new XMLHttpRequest;i.open("GET",s,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(o.textContent=i.responseText,Prism.highlightElement(o)):o.textContent=i.status>=400?"✖ Error "+i.status+" while fetching file: "+i.statusText:"✖ Error: File does not exist or is empty")},i.send(null)})},self.Prism.fileHighlight())}();;
!function(){if(self.Prism){var e={csharp:"C#",cpp:"C++"};Prism.hooks.add("before-highlight",function(a){var t=a.element.parentNode;if(t&&/pre/i.test(t.nodeName)){var i=e[a.language]||a.language;t.setAttribute("data-language",i)}})}}();;
!function(){self.Prism&&Prism.hooks.add("wrap",function(s){"keyword"===s.type&&s.classes.push("keyword-"+s.content)})}();;

},{}],4:[function(require,module,exports){
/*!
 * reveal.js
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2015 Hakim El Hattab, http://hakim.se
 */
(function( root, factory ) {
	if( typeof define === 'function' && define.amd ) {
		// AMD. Register as an anonymous module.
		define( function() {
			root.Reveal = factory();
			return root.Reveal;
		} );
	} else if( typeof exports === 'object' ) {
		// Node. Does not work with strict CommonJS.
		module.exports = factory();
	} else {
		// Browser globals.
		root.Reveal = factory();
	}
}( this, function() {

	'use strict';

	var Reveal;

	var SLIDES_SELECTOR = '.slides section',
		HORIZONTAL_SLIDES_SELECTOR = '.slides>section',
		VERTICAL_SLIDES_SELECTOR = '.slides>section.present>section',
		HOME_SLIDE_SELECTOR = '.slides>section:first-of-type',

		// Configuration defaults, can be overridden at initialization time
		config = {

			// The "normal" size of the presentation, aspect ratio will be preserved
			// when the presentation is scaled to fit different resolutions
			width: 960,
			height: 700,

			// Factor of the display size that should remain empty around the content
			margin: 0.1,

			// Bounds for smallest/largest possible scale to apply to content
			minScale: 0.2,
			maxScale: 1.5,

			// Display controls in the bottom right corner
			controls: true,

			// Display a presentation progress bar
			progress: true,

			// Display the page number of the current slide
			slideNumber: false,

			// Push each slide change to the browser history
			history: false,

			// Enable keyboard shortcuts for navigation
			keyboard: true,

			// Optional function that blocks keyboard events when retuning false
			keyboardCondition: null,

			// Enable the slide overview mode
			overview: true,

			// Vertical centering of slides
			center: true,

			// Enables touch navigation on devices with touch input
			touch: true,

			// Loop the presentation
			loop: false,

			// Change the presentation direction to be RTL
			rtl: false,

			// Turns fragments on and off globally
			fragments: true,

			// Flags if the presentation is running in an embedded mode,
			// i.e. contained within a limited portion of the screen
			embedded: false,

			// Flags if we should show a help overlay when the questionmark
			// key is pressed
			help: true,

			// Flags if it should be possible to pause the presentation (blackout)
			pause: true,

			// Number of milliseconds between automatically proceeding to the
			// next slide, disabled when set to 0, this value can be overwritten
			// by using a data-autoslide attribute on your slides
			autoSlide: 0,

			// Stop auto-sliding after user input
			autoSlideStoppable: true,

			// Enable slide navigation via mouse wheel
			mouseWheel: false,

			// Apply a 3D roll to links on hover
			rollingLinks: false,

			// Hides the address bar on mobile devices
			hideAddressBar: true,

			// Opens links in an iframe preview overlay
			previewLinks: false,

			// Exposes the reveal.js API through window.postMessage
			postMessage: true,

			// Dispatches all reveal.js events to the parent window through postMessage
			postMessageEvents: false,

			// Focuses body when page changes visiblity to ensure keyboard shortcuts work
			focusBodyOnPageVisibilityChange: true,

			// Transition style
			transition: 'slide', // none/fade/slide/convex/concave/zoom

			// Transition speed
			transitionSpeed: 'default', // default/fast/slow

			// Transition style for full page slide backgrounds
			backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom

			// Parallax background image
			parallaxBackgroundImage: '', // CSS syntax, e.g. "a.jpg"

			// Parallax background size
			parallaxBackgroundSize: '', // CSS syntax, e.g. "3000px 2000px"

			// Amount of pixels to move the parallax background per slide step
			parallaxBackgroundHorizontal: null,
			parallaxBackgroundVertical: null,

			// Number of slides away from the current that are visible
			viewDistance: 3,

			// Script dependencies to load
			dependencies: []

		},

		// Flags if reveal.js is loaded (has dispatched the 'ready' event)
		loaded = false,

		// Flags if the overview mode is currently active
		overview = false,

		// The horizontal and vertical index of the currently active slide
		indexh,
		indexv,

		// The previous and current slide HTML elements
		previousSlide,
		currentSlide,

		previousBackground,

		// Slides may hold a data-state attribute which we pick up and apply
		// as a class to the body. This list contains the combined state of
		// all current slides.
		state = [],

		// The current scale of the presentation (see width/height config)
		scale = 1,

		// CSS transform that is currently applied to the slides container,
		// split into two groups
		slidesTransform = { layout: '', overview: '' },

		// Cached references to DOM elements
		dom = {},

		// Features supported by the browser, see #checkCapabilities()
		features = {},

		// Client is a mobile device, see #checkCapabilities()
		isMobileDevice,

		// Throttles mouse wheel navigation
		lastMouseWheelStep = 0,

		// Delays updates to the URL due to a Chrome thumbnailer bug
		writeURLTimeout = 0,

		// Flags if the interaction event listeners are bound
		eventsAreBound = false,

		// The current auto-slide duration
		autoSlide = 0,

		// Auto slide properties
		autoSlidePlayer,
		autoSlideTimeout = 0,
		autoSlideStartTime = -1,
		autoSlidePaused = false,

		// Holds information about the currently ongoing touch input
		touch = {
			startX: 0,
			startY: 0,
			startSpan: 0,
			startCount: 0,
			captured: false,
			threshold: 40
		},

		// Holds information about the keyboard shortcuts
		keyboardShortcuts = {
			'N  ,  SPACE':			'Next slide',
			'P':					'Previous slide',
			'&#8592;  ,  H':		'Navigate left',
			'&#8594;  ,  L':		'Navigate right',
			'&#8593;  ,  K':		'Navigate up',
			'&#8595;  ,  J':		'Navigate down',
			'Home':					'First slide',
			'End':					'Last slide',
			'B  ,  .':				'Pause',
			'F':					'Fullscreen',
			'ESC, O':				'Slide overview'
		};

	/**
	 * Starts up the presentation if the client is capable.
	 */
	function initialize( options ) {

		checkCapabilities();

		if( !features.transforms2d && !features.transforms3d ) {
			document.body.setAttribute( 'class', 'no-transforms' );

			// Since JS won't be running any further, we load all lazy
			// loading elements upfront
			var images = toArray( document.getElementsByTagName( 'img' ) ),
				iframes = toArray( document.getElementsByTagName( 'iframe' ) );

			var lazyLoadable = images.concat( iframes );

			for( var i = 0, len = lazyLoadable.length; i < len; i++ ) {
				var element = lazyLoadable[i];
				if( element.getAttribute( 'data-src' ) ) {
					element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
					element.removeAttribute( 'data-src' );
				}
			}

			// If the browser doesn't support core features we won't be
			// using JavaScript to control the presentation
			return;
		}

		// Cache references to key DOM elements
		dom.wrapper = document.querySelector( '.reveal' );
		dom.slides = document.querySelector( '.reveal .slides' );

		// Force a layout when the whole page, incl fonts, has loaded
		window.addEventListener( 'load', layout, false );

		var query = Reveal.getQueryHash();

		// Do not accept new dependencies via query config to avoid
		// the potential of malicious script injection
		if( typeof query['dependencies'] !== 'undefined' ) delete query['dependencies'];

		// Copy options over to our config object
		extend( config, options );
		extend( config, query );

		// Hide the address bar in mobile browsers
		hideAddressBar();

		// Loads the dependencies and continues to #start() once done
		load();

	}

	/**
	 * Inspect the client to see what it's capable of, this
	 * should only happens once per runtime.
	 */
	function checkCapabilities() {

		features.transforms3d = 'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

		features.transforms2d = 'WebkitTransform' in document.body.style ||
								'MozTransform' in document.body.style ||
								'msTransform' in document.body.style ||
								'OTransform' in document.body.style ||
								'transform' in document.body.style;

		features.requestAnimationFrameMethod = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
		features.requestAnimationFrame = typeof features.requestAnimationFrameMethod === 'function';

		features.canvas = !!document.createElement( 'canvas' ).getContext;

		features.touch = !!( 'ontouchstart' in window );

		// Transitions in the overview are disabled in desktop and
		// mobile Safari due to lag
		features.overviewTransitions = !/Version\/[\d\.]+.*Safari/.test( navigator.userAgent );

		isMobileDevice = /(iphone|ipod|ipad|android)/gi.test( navigator.userAgent );

	}

    /**
     * Loads the dependencies of reveal.js. Dependencies are
     * defined via the configuration option 'dependencies'
     * and will be loaded prior to starting/binding reveal.js.
     * Some dependencies may have an 'async' flag, if so they
     * will load after reveal.js has been started up.
     */
	function load() {

		var scripts = [],
			scriptsAsync = [],
			scriptsToPreload = 0;

		// Called once synchronous scripts finish loading
		function proceed() {
			if( scriptsAsync.length ) {
				// Load asynchronous scripts
				head.js.apply( null, scriptsAsync );
			}

			start();
		}

		function loadScript( s ) {
			head.ready( s.src.match( /([\w\d_\-]*)\.?js$|[^\\\/]*$/i )[0], function() {
				// Extension may contain callback functions
				if( typeof s.callback === 'function' ) {
					s.callback.apply( this );
				}

				if( --scriptsToPreload === 0 ) {
					proceed();
				}
			});
		}

		for( var i = 0, len = config.dependencies.length; i < len; i++ ) {
			var s = config.dependencies[i];

			// Load if there's no condition or the condition is truthy
			if( !s.condition || s.condition() ) {
				if( s.async ) {
					scriptsAsync.push( s.src );
				}
				else {
					scripts.push( s.src );
				}

				loadScript( s );
			}
		}

		if( scripts.length ) {
			scriptsToPreload = scripts.length;

			// Load synchronous scripts
			head.js.apply( null, scripts );
		}
		else {
			proceed();
		}

	}

	/**
	 * Starts up reveal.js by binding input events and navigating
	 * to the current URL deeplink if there is one.
	 */
	function start() {

		// Make sure we've got all the DOM elements we need
		setupDOM();

		// Listen to messages posted to this window
		setupPostMessage();

		// Prevent iframes from scrolling the slides out of view
		setupIframeScrollPrevention();

		// Resets all vertical slides so that only the first is visible
		resetVerticalSlides();

		// Updates the presentation to match the current configuration values
		configure();

		// Read the initial hash
		readURL();

		// Update all backgrounds
		updateBackground( true );

		// Notify listeners that the presentation is ready but use a 1ms
		// timeout to ensure it's not fired synchronously after #initialize()
		setTimeout( function() {
			// Enable transitions now that we're loaded
			dom.slides.classList.remove( 'no-transition' );

			loaded = true;

			dispatchEvent( 'ready', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );
		}, 1 );

		// Special setup and config is required when printing to PDF
		if( isPrintingPDF() ) {
			removeEventListeners();

			// The document needs to have loaded for the PDF layout
			// measurements to be accurate
			if( document.readyState === 'complete' ) {
				setupPDF();
			}
			else {
				window.addEventListener( 'load', setupPDF );
			}
		}

	}

	/**
	 * Finds and stores references to DOM elements which are
	 * required by the presentation. If a required element is
	 * not found, it is created.
	 */
	function setupDOM() {

		// Prevent transitions while we're loading
		dom.slides.classList.add( 'no-transition' );

		// Background element
		dom.background = createSingletonNode( dom.wrapper, 'div', 'backgrounds', null );

		// Progress bar
		dom.progress = createSingletonNode( dom.wrapper, 'div', 'progress', '<span></span>' );
		dom.progressbar = dom.progress.querySelector( 'span' );

		// Arrow controls
		createSingletonNode( dom.wrapper, 'aside', 'controls',
			'<div class="navigate-left"></div>' +
			'<div class="navigate-right"></div>' +
			'<div class="navigate-up"></div>' +
			'<div class="navigate-down"></div>' );

		// Slide number
		dom.slideNumber = createSingletonNode( dom.wrapper, 'div', 'slide-number', '' );

		// Overlay graphic which is displayed during the paused mode
		createSingletonNode( dom.wrapper, 'div', 'pause-overlay', null );

		// Cache references to elements
		dom.controls = document.querySelector( '.reveal .controls' );
		dom.theme = document.querySelector( '#theme' );

		dom.wrapper.setAttribute( 'role', 'application' );

		// There can be multiple instances of controls throughout the page
		dom.controlsLeft = toArray( document.querySelectorAll( '.navigate-left' ) );
		dom.controlsRight = toArray( document.querySelectorAll( '.navigate-right' ) );
		dom.controlsUp = toArray( document.querySelectorAll( '.navigate-up' ) );
		dom.controlsDown = toArray( document.querySelectorAll( '.navigate-down' ) );
		dom.controlsPrev = toArray( document.querySelectorAll( '.navigate-prev' ) );
		dom.controlsNext = toArray( document.querySelectorAll( '.navigate-next' ) );

		dom.statusDiv = createStatusDiv();
	}

	/**
	 * Creates a hidden div with role aria-live to announce the
	 * current slide content. Hide the div off-screen to make it
	 * available only to Assistive Technologies.
	 */
	function createStatusDiv() {

		var statusDiv = document.getElementById( 'aria-status-div' );
		if( !statusDiv ) {
			statusDiv = document.createElement( 'div' );
			statusDiv.style.position = 'absolute';
			statusDiv.style.height = '1px';
			statusDiv.style.width = '1px';
			statusDiv.style.overflow ='hidden';
			statusDiv.style.clip = 'rect( 1px, 1px, 1px, 1px )';
			statusDiv.setAttribute( 'id', 'aria-status-div' );
			statusDiv.setAttribute( 'aria-live', 'polite' );
			statusDiv.setAttribute( 'aria-atomic','true' );
			dom.wrapper.appendChild( statusDiv );
		}
		return statusDiv;

	}

	/**
	 * Configures the presentation for printing to a static
	 * PDF.
	 */
	function setupPDF() {

		var slideSize = getComputedSlideSize( window.innerWidth, window.innerHeight );

		// Dimensions of the PDF pages
		var pageWidth = Math.floor( slideSize.width * ( 1 + config.margin ) ),
			pageHeight = Math.floor( slideSize.height * ( 1 + config.margin  ) );

		// Dimensions of slides within the pages
		var slideWidth = slideSize.width,
			slideHeight = slideSize.height;

		// Let the browser know what page size we want to print
		injectStyleSheet( '@page{size:'+ pageWidth +'px '+ pageHeight +'px; margin: 0;}' );

		// Limit the size of certain elements to the dimensions of the slide
		injectStyleSheet( '.reveal section>img, .reveal section>video, .reveal section>iframe{max-width: '+ slideWidth +'px; max-height:'+ slideHeight +'px}' );

		document.body.classList.add( 'print-pdf' );
		document.body.style.width = pageWidth + 'px';
		document.body.style.height = pageHeight + 'px';

		// Slide and slide background layout
		toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {

			// Vertical stacks are not centred since their section
			// children will be
			if( slide.classList.contains( 'stack' ) === false ) {
				// Center the slide inside of the page, giving the slide some margin
				var left = ( pageWidth - slideWidth ) / 2,
					top = ( pageHeight - slideHeight ) / 2;

				var contentHeight = getAbsoluteHeight( slide );
				var numberOfPages = Math.max( Math.ceil( contentHeight / pageHeight ), 1 );

				// Center slides vertically
				if( numberOfPages === 1 && config.center || slide.classList.contains( 'center' ) ) {
					top = Math.max( ( pageHeight - contentHeight ) / 2, 0 );
				}

				// Position the slide inside of the page
				slide.style.left = left + 'px';
				slide.style.top = top + 'px';
				slide.style.width = slideWidth + 'px';

				// TODO Backgrounds need to be multiplied when the slide
				// stretches over multiple pages
				var background = slide.querySelector( '.slide-background' );
				if( background ) {
					background.style.width = pageWidth + 'px';
					background.style.height = ( pageHeight * numberOfPages ) + 'px';
					background.style.top = -top + 'px';
					background.style.left = -left + 'px';
				}
			}

		} );

		// Show all fragments
		toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' .fragment' ) ).forEach( function( fragment ) {
			fragment.classList.add( 'visible' );
		} );

	}

	/**
	 * This is an unfortunate necessity. Iframes can trigger the
	 * parent window to scroll, for example by focusing an input.
	 * This scrolling can not be prevented by hiding overflow in
	 * CSS so we have to resort to repeatedly checking if the
	 * browser has decided to offset our slides :(
	 */
	function setupIframeScrollPrevention() {

		if( dom.slides.querySelector( 'iframe' ) ) {
			setInterval( function() {
				if( dom.wrapper.scrollTop !== 0 || dom.wrapper.scrollLeft !== 0 ) {
					dom.wrapper.scrollTop = 0;
					dom.wrapper.scrollLeft = 0;
				}
			}, 500 );
		}

	}

	/**
	 * Creates an HTML element and returns a reference to it.
	 * If the element already exists the existing instance will
	 * be returned.
	 */
	function createSingletonNode( container, tagname, classname, innerHTML ) {

		// Find all nodes matching the description
		var nodes = container.querySelectorAll( '.' + classname );

		// Check all matches to find one which is a direct child of
		// the specified container
		for( var i = 0; i < nodes.length; i++ ) {
			var testNode = nodes[i];
			if( testNode.parentNode === container ) {
				return testNode;
			}
		}

		// If no node was found, create it now
		var node = document.createElement( tagname );
		node.classList.add( classname );
		if( typeof innerHTML === 'string' ) {
			node.innerHTML = innerHTML;
		}
		container.appendChild( node );

		return node;

	}

	/**
	 * Creates the slide background elements and appends them
	 * to the background container. One element is created per
	 * slide no matter if the given slide has visible background.
	 */
	function createBackgrounds() {

		var printMode = isPrintingPDF();

		// Clear prior backgrounds
		dom.background.innerHTML = '';
		dom.background.classList.add( 'no-transition' );

		// Iterate over all horizontal slides
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( slideh ) {

			var backgroundStack;

			if( printMode ) {
				backgroundStack = createBackground( slideh, slideh );
			}
			else {
				backgroundStack = createBackground( slideh, dom.background );
			}

			// Iterate over all vertical slides
			toArray( slideh.querySelectorAll( 'section' ) ).forEach( function( slidev ) {

				if( printMode ) {
					createBackground( slidev, slidev );
				}
				else {
					createBackground( slidev, backgroundStack );
				}

				backgroundStack.classList.add( 'stack' );

			} );

		} );

		// Add parallax background if specified
		if( config.parallaxBackgroundImage ) {

			dom.background.style.backgroundImage = 'url("' + config.parallaxBackgroundImage + '")';
			dom.background.style.backgroundSize = config.parallaxBackgroundSize;

			// Make sure the below properties are set on the element - these properties are
			// needed for proper transitions to be set on the element via CSS. To remove
			// annoying background slide-in effect when the presentation starts, apply
			// these properties after short time delay
			setTimeout( function() {
				dom.wrapper.classList.add( 'has-parallax-background' );
			}, 1 );

		}
		else {

			dom.background.style.backgroundImage = '';
			dom.wrapper.classList.remove( 'has-parallax-background' );

		}

	}

	/**
	 * Creates a background for the given slide.
	 *
	 * @param {HTMLElement} slide
	 * @param {HTMLElement} container The element that the background
	 * should be appended to
	 */
	function createBackground( slide, container ) {

		var data = {
			background: slide.getAttribute( 'data-background' ),
			backgroundSize: slide.getAttribute( 'data-background-size' ),
			backgroundImage: slide.getAttribute( 'data-background-image' ),
			backgroundVideo: slide.getAttribute( 'data-background-video' ),
			backgroundIframe: slide.getAttribute( 'data-background-iframe' ),
			backgroundColor: slide.getAttribute( 'data-background-color' ),
			backgroundRepeat: slide.getAttribute( 'data-background-repeat' ),
			backgroundPosition: slide.getAttribute( 'data-background-position' ),
			backgroundTransition: slide.getAttribute( 'data-background-transition' )
		};

		var element = document.createElement( 'div' );

		// Carry over custom classes from the slide to the background
		element.className = 'slide-background ' + slide.className.replace( /present|past|future/, '' );

		if( data.background ) {
			// Auto-wrap image urls in url(...)
			if( /^(http|file|\/\/)/gi.test( data.background ) || /\.(svg|png|jpg|jpeg|gif|bmp)$/gi.test( data.background ) ) {
				slide.setAttribute( 'data-background-image', data.background );
			}
			else {
				element.style.background = data.background;
			}
		}

		// Create a hash for this combination of background settings.
		// This is used to determine when two slide backgrounds are
		// the same.
		if( data.background || data.backgroundColor || data.backgroundImage || data.backgroundVideo || data.backgroundIframe ) {
			element.setAttribute( 'data-background-hash', data.background +
															data.backgroundSize +
															data.backgroundImage +
															data.backgroundVideo +
															data.backgroundIframe +
															data.backgroundColor +
															data.backgroundRepeat +
															data.backgroundPosition +
															data.backgroundTransition );
		}

		// Additional and optional background properties
		if( data.backgroundSize ) element.style.backgroundSize = data.backgroundSize;
		if( data.backgroundColor ) element.style.backgroundColor = data.backgroundColor;
		if( data.backgroundRepeat ) element.style.backgroundRepeat = data.backgroundRepeat;
		if( data.backgroundPosition ) element.style.backgroundPosition = data.backgroundPosition;
		if( data.backgroundTransition ) element.setAttribute( 'data-background-transition', data.backgroundTransition );

		container.appendChild( element );

		// If backgrounds are being recreated, clear old classes
		slide.classList.remove( 'has-dark-background' );
		slide.classList.remove( 'has-light-background' );

		// If this slide has a background color, add a class that
		// signals if it is light or dark. If the slide has no background
		// color, no class will be set
		var computedBackgroundColor = window.getComputedStyle( element ).backgroundColor;
		if( computedBackgroundColor ) {
			var rgb = colorToRgb( computedBackgroundColor );

			// Ignore fully transparent backgrounds. Some browsers return
			// rgba(0,0,0,0) when reading the computed background color of
			// an element with no background
			if( rgb && rgb.a !== 0 ) {
				if( colorBrightness( computedBackgroundColor ) < 128 ) {
					slide.classList.add( 'has-dark-background' );
				}
				else {
					slide.classList.add( 'has-light-background' );
				}
			}
		}

		return element;

	}

	/**
	 * Registers a listener to postMessage events, this makes it
	 * possible to call all reveal.js API methods from another
	 * window. For example:
	 *
	 * revealWindow.postMessage( JSON.stringify({
	 *   method: 'slide',
	 *   args: [ 2 ]
	 * }), '*' );
	 */
	function setupPostMessage() {

		if( config.postMessage ) {
			window.addEventListener( 'message', function ( event ) {
				var data = event.data;

				// Make sure we're dealing with JSON
				if( typeof data === 'string' && data.charAt( 0 ) === '{' && data.charAt( data.length - 1 ) === '}' ) {
					data = JSON.parse( data );

					// Check if the requested method can be found
					if( data.method && typeof Reveal[data.method] === 'function' ) {
						Reveal[data.method].apply( Reveal, data.args );
					}
				}
			}, false );
		}

	}

	/**
	 * Applies the configuration settings from the config
	 * object. May be called multiple times.
	 */
	function configure( options ) {

		var numberOfSlides = dom.wrapper.querySelectorAll( SLIDES_SELECTOR ).length;

		dom.wrapper.classList.remove( config.transition );

		// New config options may be passed when this method
		// is invoked through the API after initialization
		if( typeof options === 'object' ) extend( config, options );

		// Force linear transition based on browser capabilities
		if( features.transforms3d === false ) config.transition = 'linear';

		dom.wrapper.classList.add( config.transition );

		dom.wrapper.setAttribute( 'data-transition-speed', config.transitionSpeed );
		dom.wrapper.setAttribute( 'data-background-transition', config.backgroundTransition );

		dom.controls.style.display = config.controls ? 'block' : 'none';
		dom.progress.style.display = config.progress ? 'block' : 'none';

		if( config.rtl ) {
			dom.wrapper.classList.add( 'rtl' );
		}
		else {
			dom.wrapper.classList.remove( 'rtl' );
		}

		if( config.center ) {
			dom.wrapper.classList.add( 'center' );
		}
		else {
			dom.wrapper.classList.remove( 'center' );
		}

		// Exit the paused mode if it was configured off
		if( config.pause === false ) {
			resume();
		}

		if( config.mouseWheel ) {
			document.addEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.addEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}
		else {
			document.removeEventListener( 'DOMMouseScroll', onDocumentMouseScroll, false ); // FF
			document.removeEventListener( 'mousewheel', onDocumentMouseScroll, false );
		}

		// Rolling 3D links
		if( config.rollingLinks ) {
			enableRollingLinks();
		}
		else {
			disableRollingLinks();
		}

		// Iframe link previews
		if( config.previewLinks ) {
			enablePreviewLinks();
		}
		else {
			disablePreviewLinks();
			enablePreviewLinks( '[data-preview-link]' );
		}

		// Remove existing auto-slide controls
		if( autoSlidePlayer ) {
			autoSlidePlayer.destroy();
			autoSlidePlayer = null;
		}

		// Generate auto-slide controls if needed
		if( numberOfSlides > 1 && config.autoSlide && config.autoSlideStoppable && features.canvas && features.requestAnimationFrame ) {
			autoSlidePlayer = new Playback( dom.wrapper, function() {
				return Math.min( Math.max( ( Date.now() - autoSlideStartTime ) / autoSlide, 0 ), 1 );
			} );

			autoSlidePlayer.on( 'click', onAutoSlidePlayerClick );
			autoSlidePaused = false;
		}

		// When fragments are turned off they should be visible
		if( config.fragments === false ) {
			toArray( dom.slides.querySelectorAll( '.fragment' ) ).forEach( function( element ) {
				element.classList.add( 'visible' );
				element.classList.remove( 'current-fragment' );
			} );
		}

		sync();

	}

	/**
	 * Binds all event listeners.
	 */
	function addEventListeners() {

		eventsAreBound = true;

		window.addEventListener( 'hashchange', onWindowHashChange, false );
		window.addEventListener( 'resize', onWindowResize, false );

		if( config.touch ) {
			dom.wrapper.addEventListener( 'touchstart', onTouchStart, false );
			dom.wrapper.addEventListener( 'touchmove', onTouchMove, false );
			dom.wrapper.addEventListener( 'touchend', onTouchEnd, false );

			// Support pointer-style touch interaction as well
			if( window.navigator.pointerEnabled ) {
				// IE 11 uses un-prefixed version of pointer events
				dom.wrapper.addEventListener( 'pointerdown', onPointerDown, false );
				dom.wrapper.addEventListener( 'pointermove', onPointerMove, false );
				dom.wrapper.addEventListener( 'pointerup', onPointerUp, false );
			}
			else if( window.navigator.msPointerEnabled ) {
				// IE 10 uses prefixed version of pointer events
				dom.wrapper.addEventListener( 'MSPointerDown', onPointerDown, false );
				dom.wrapper.addEventListener( 'MSPointerMove', onPointerMove, false );
				dom.wrapper.addEventListener( 'MSPointerUp', onPointerUp, false );
			}
		}

		if( config.keyboard ) {
			document.addEventListener( 'keydown', onDocumentKeyDown, false );
			document.addEventListener( 'keypress', onDocumentKeyPress, false );
		}

		if( config.progress && dom.progress ) {
			dom.progress.addEventListener( 'click', onProgressClicked, false );
		}

		if( config.focusBodyOnPageVisibilityChange ) {
			var visibilityChange;

			if( 'hidden' in document ) {
				visibilityChange = 'visibilitychange';
			}
			else if( 'msHidden' in document ) {
				visibilityChange = 'msvisibilitychange';
			}
			else if( 'webkitHidden' in document ) {
				visibilityChange = 'webkitvisibilitychange';
			}

			if( visibilityChange ) {
				document.addEventListener( visibilityChange, onPageVisibilityChange, false );
			}
		}

		// Listen to both touch and click events, in case the device
		// supports both
		var pointerEvents = [ 'touchstart', 'click' ];

		// Only support touch for Android, fixes double navigations in
		// stock browser
		if( navigator.userAgent.match( /android/gi ) ) {
			pointerEvents = [ 'touchstart' ];
		}

		pointerEvents.forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.addEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.addEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.addEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.addEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.addEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.addEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Unbinds all event listeners.
	 */
	function removeEventListeners() {

		eventsAreBound = false;

		document.removeEventListener( 'keydown', onDocumentKeyDown, false );
		document.removeEventListener( 'keypress', onDocumentKeyPress, false );
		window.removeEventListener( 'hashchange', onWindowHashChange, false );
		window.removeEventListener( 'resize', onWindowResize, false );

		dom.wrapper.removeEventListener( 'touchstart', onTouchStart, false );
		dom.wrapper.removeEventListener( 'touchmove', onTouchMove, false );
		dom.wrapper.removeEventListener( 'touchend', onTouchEnd, false );

		// IE11
		if( window.navigator.pointerEnabled ) {
			dom.wrapper.removeEventListener( 'pointerdown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'pointermove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'pointerup', onPointerUp, false );
		}
		// IE10
		else if( window.navigator.msPointerEnabled ) {
			dom.wrapper.removeEventListener( 'MSPointerDown', onPointerDown, false );
			dom.wrapper.removeEventListener( 'MSPointerMove', onPointerMove, false );
			dom.wrapper.removeEventListener( 'MSPointerUp', onPointerUp, false );
		}

		if ( config.progress && dom.progress ) {
			dom.progress.removeEventListener( 'click', onProgressClicked, false );
		}

		[ 'touchstart', 'click' ].forEach( function( eventName ) {
			dom.controlsLeft.forEach( function( el ) { el.removeEventListener( eventName, onNavigateLeftClicked, false ); } );
			dom.controlsRight.forEach( function( el ) { el.removeEventListener( eventName, onNavigateRightClicked, false ); } );
			dom.controlsUp.forEach( function( el ) { el.removeEventListener( eventName, onNavigateUpClicked, false ); } );
			dom.controlsDown.forEach( function( el ) { el.removeEventListener( eventName, onNavigateDownClicked, false ); } );
			dom.controlsPrev.forEach( function( el ) { el.removeEventListener( eventName, onNavigatePrevClicked, false ); } );
			dom.controlsNext.forEach( function( el ) { el.removeEventListener( eventName, onNavigateNextClicked, false ); } );
		} );

	}

	/**
	 * Extend object a with the properties of object b.
	 * If there's a conflict, object b takes precedence.
	 */
	function extend( a, b ) {

		for( var i in b ) {
			a[ i ] = b[ i ];
		}

	}

	/**
	 * Converts the target object to an array.
	 */
	function toArray( o ) {

		return Array.prototype.slice.call( o );

	}

	/**
	 * Utility for deserializing a value.
	 */
	function deserialize( value ) {

		if( typeof value === 'string' ) {
			if( value === 'null' ) return null;
			else if( value === 'true' ) return true;
			else if( value === 'false' ) return false;
			else if( value.match( /^\d+$/ ) ) return parseFloat( value );
		}

		return value;

	}

	/**
	 * Measures the distance in pixels between point a
	 * and point b.
	 *
	 * @param {Object} a point with x/y properties
	 * @param {Object} b point with x/y properties
	 */
	function distanceBetween( a, b ) {

		var dx = a.x - b.x,
			dy = a.y - b.y;

		return Math.sqrt( dx*dx + dy*dy );

	}

	/**
	 * Applies a CSS transform to the target element.
	 */
	function transformElement( element, transform ) {

		element.style.WebkitTransform = transform;
		element.style.MozTransform = transform;
		element.style.msTransform = transform;
		element.style.transform = transform;

	}

	/**
	 * Applies CSS transforms to the slides container. The container
	 * is transformed from two separate sources: layout and the overview
	 * mode.
	 */
	function transformSlides( transforms ) {

		// Pick up new transforms from arguments
		if( typeof transforms.layout === 'string' ) slidesTransform.layout = transforms.layout;
		if( typeof transforms.overview === 'string' ) slidesTransform.overview = transforms.overview;

		// Apply the transforms to the slides container
		if( slidesTransform.layout ) {
			transformElement( dom.slides, slidesTransform.layout + ' ' + slidesTransform.overview );
		}
		else {
			transformElement( dom.slides, slidesTransform.overview );
		}

	}

	/**
	 * Injects the given CSS styles into the DOM.
	 */
	function injectStyleSheet( value ) {

		var tag = document.createElement( 'style' );
		tag.type = 'text/css';
		if( tag.styleSheet ) {
			tag.styleSheet.cssText = value;
		}
		else {
			tag.appendChild( document.createTextNode( value ) );
		}
		document.getElementsByTagName( 'head' )[0].appendChild( tag );

	}

	/**
	 * Converts various color input formats to an {r:0,g:0,b:0} object.
	 *
	 * @param {String} color The string representation of a color,
	 * the following formats are supported:
	 * - #000
	 * - #000000
	 * - rgb(0,0,0)
	 */
	function colorToRgb( color ) {

		var hex3 = color.match( /^#([0-9a-f]{3})$/i );
		if( hex3 && hex3[1] ) {
			hex3 = hex3[1];
			return {
				r: parseInt( hex3.charAt( 0 ), 16 ) * 0x11,
				g: parseInt( hex3.charAt( 1 ), 16 ) * 0x11,
				b: parseInt( hex3.charAt( 2 ), 16 ) * 0x11
			};
		}

		var hex6 = color.match( /^#([0-9a-f]{6})$/i );
		if( hex6 && hex6[1] ) {
			hex6 = hex6[1];
			return {
				r: parseInt( hex6.substr( 0, 2 ), 16 ),
				g: parseInt( hex6.substr( 2, 2 ), 16 ),
				b: parseInt( hex6.substr( 4, 2 ), 16 )
			};
		}

		var rgb = color.match( /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i );
		if( rgb ) {
			return {
				r: parseInt( rgb[1], 10 ),
				g: parseInt( rgb[2], 10 ),
				b: parseInt( rgb[3], 10 )
			};
		}

		var rgba = color.match( /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i );
		if( rgba ) {
			return {
				r: parseInt( rgba[1], 10 ),
				g: parseInt( rgba[2], 10 ),
				b: parseInt( rgba[3], 10 ),
				a: parseFloat( rgba[4] )
			};
		}

		return null;

	}

	/**
	 * Calculates brightness on a scale of 0-255.
	 *
	 * @param color See colorStringToRgb for supported formats.
	 */
	function colorBrightness( color ) {

		if( typeof color === 'string' ) color = colorToRgb( color );

		if( color ) {
			return ( color.r * 299 + color.g * 587 + color.b * 114 ) / 1000;
		}

		return null;

	}

	/**
	 * Retrieves the height of the given element by looking
	 * at the position and height of its immediate children.
	 */
	function getAbsoluteHeight( element ) {

		var height = 0;

		if( element ) {
			var absoluteChildren = 0;

			toArray( element.childNodes ).forEach( function( child ) {

				if( typeof child.offsetTop === 'number' && child.style ) {
					// Count # of abs children
					if( window.getComputedStyle( child ).position === 'absolute' ) {
						absoluteChildren += 1;
					}

					height = Math.max( height, child.offsetTop + child.offsetHeight );
				}

			} );

			// If there are no absolute children, use offsetHeight
			if( absoluteChildren === 0 ) {
				height = element.offsetHeight;
			}

		}

		return height;

	}

	/**
	 * Returns the remaining height within the parent of the
	 * target element.
	 *
	 * remaining height = [ configured parent height ] - [ current parent height ]
	 */
	function getRemainingHeight( element, height ) {

		height = height || 0;

		if( element ) {
			var newHeight, oldHeight = element.style.height;

			// Change the .stretch element height to 0 in order find the height of all
			// the other elements
			element.style.height = '0px';
			newHeight = height - element.parentNode.offsetHeight;

			// Restore the old height, just in case
			element.style.height = oldHeight + 'px';

			return newHeight;
		}

		return height;

	}

	/**
	 * Checks if this instance is being used to print a PDF.
	 */
	function isPrintingPDF() {

		return ( /print-pdf/gi ).test( window.location.search );

	}

	/**
	 * Hides the address bar if we're on a mobile device.
	 */
	function hideAddressBar() {

		if( config.hideAddressBar && isMobileDevice ) {
			// Events that should trigger the address bar to hide
			window.addEventListener( 'load', removeAddressBar, false );
			window.addEventListener( 'orientationchange', removeAddressBar, false );
		}

	}

	/**
	 * Causes the address bar to hide on mobile devices,
	 * more vertical space ftw.
	 */
	function removeAddressBar() {

		setTimeout( function() {
			window.scrollTo( 0, 1 );
		}, 10 );

	}

	/**
	 * Dispatches an event of the specified type from the
	 * reveal DOM element.
	 */
	function dispatchEvent( type, args ) {

		var event = document.createEvent( 'HTMLEvents', 1, 2 );
		event.initEvent( type, true, true );
		extend( event, args );
		dom.wrapper.dispatchEvent( event );

		// If we're in an iframe, post each reveal.js event to the
		// parent window. Used by the notes plugin
		if( config.postMessageEvents && window.parent !== window.self ) {
			window.parent.postMessage( JSON.stringify({ namespace: 'reveal', eventName: type, state: getState() }), '*' );
		}

	}

	/**
	 * Wrap all links in 3D goodness.
	 */
	function enableRollingLinks() {

		if( features.transforms3d && !( 'msPerspective' in document.body.style ) ) {
			var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a' );

			for( var i = 0, len = anchors.length; i < len; i++ ) {
				var anchor = anchors[i];

				if( anchor.textContent && !anchor.querySelector( '*' ) && ( !anchor.className || !anchor.classList.contains( anchor, 'roll' ) ) ) {
					var span = document.createElement('span');
					span.setAttribute('data-title', anchor.text);
					span.innerHTML = anchor.innerHTML;

					anchor.classList.add( 'roll' );
					anchor.innerHTML = '';
					anchor.appendChild(span);
				}
			}
		}

	}

	/**
	 * Unwrap all 3D links.
	 */
	function disableRollingLinks() {

		var anchors = dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ' a.roll' );

		for( var i = 0, len = anchors.length; i < len; i++ ) {
			var anchor = anchors[i];
			var span = anchor.querySelector( 'span' );

			if( span ) {
				anchor.classList.remove( 'roll' );
				anchor.innerHTML = span.innerHTML;
			}
		}

	}

	/**
	 * Bind preview frame links.
	 */
	function enablePreviewLinks( selector ) {

		var anchors = toArray( document.querySelectorAll( selector ? selector : 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.addEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Unbind preview frame links.
	 */
	function disablePreviewLinks() {

		var anchors = toArray( document.querySelectorAll( 'a' ) );

		anchors.forEach( function( element ) {
			if( /^(http|www)/gi.test( element.getAttribute( 'href' ) ) ) {
				element.removeEventListener( 'click', onPreviewLinkClicked, false );
			}
		} );

	}

	/**
	 * Opens a preview window for the target URL.
	 */
	function showPreview( url ) {

		closeOverlay();

		dom.overlay = document.createElement( 'div' );
		dom.overlay.classList.add( 'overlay' );
		dom.overlay.classList.add( 'overlay-preview' );
		dom.wrapper.appendChild( dom.overlay );

		dom.overlay.innerHTML = [
			'<header>',
				'<a class="close" href="#"><span class="icon"></span></a>',
				'<a class="external" href="'+ url +'" target="_blank"><span class="icon"></span></a>',
			'</header>',
			'<div class="spinner"></div>',
			'<div class="viewport">',
				'<iframe src="'+ url +'"></iframe>',
			'</div>'
		].join('');

		dom.overlay.querySelector( 'iframe' ).addEventListener( 'load', function( event ) {
			dom.overlay.classList.add( 'loaded' );
		}, false );

		dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
			closeOverlay();
			event.preventDefault();
		}, false );

		dom.overlay.querySelector( '.external' ).addEventListener( 'click', function( event ) {
			closeOverlay();
		}, false );

		setTimeout( function() {
			dom.overlay.classList.add( 'visible' );
		}, 1 );

	}

	/**
	 * Opens a overlay window with help material.
	 */
	function showHelp() {

		if( config.help ) {

			closeOverlay();

			dom.overlay = document.createElement( 'div' );
			dom.overlay.classList.add( 'overlay' );
			dom.overlay.classList.add( 'overlay-help' );
			dom.wrapper.appendChild( dom.overlay );

			var html = '<p class="title">Keyboard Shortcuts</p><br/>';

			html += '<table><th>KEY</th><th>ACTION</th>';
			for( var key in keyboardShortcuts ) {
				html += '<tr><td>' + key + '</td><td>' + keyboardShortcuts[ key ] + '</td></tr>';
			}

			html += '</table>';

			dom.overlay.innerHTML = [
				'<header>',
					'<a class="close" href="#"><span class="icon"></span></a>',
				'</header>',
				'<div class="viewport">',
					'<div class="viewport-inner">'+ html +'</div>',
				'</div>'
			].join('');

			dom.overlay.querySelector( '.close' ).addEventListener( 'click', function( event ) {
				closeOverlay();
				event.preventDefault();
			}, false );

			setTimeout( function() {
				dom.overlay.classList.add( 'visible' );
			}, 1 );

		}

	}

	/**
	 * Closes any currently open overlay.
	 */
	function closeOverlay() {

		if( dom.overlay ) {
			dom.overlay.parentNode.removeChild( dom.overlay );
			dom.overlay = null;
		}

	}

	/**
	 * Applies JavaScript-controlled layout rules to the
	 * presentation.
	 */
	function layout() {

		if( dom.wrapper && !isPrintingPDF() ) {

			var size = getComputedSlideSize();

			var slidePadding = 20; // TODO Dig this out of DOM

			// Layout the contents of the slides
			layoutSlideContents( config.width, config.height, slidePadding );

			dom.slides.style.width = size.width + 'px';
			dom.slides.style.height = size.height + 'px';

			// Determine scale of content to fit within available space
			scale = Math.min( size.presentationWidth / size.width, size.presentationHeight / size.height );

			// Respect max/min scale settings
			scale = Math.max( scale, config.minScale );
			scale = Math.min( scale, config.maxScale );

			// Don't apply any scaling styles if scale is 1
			if( scale === 1 ) {
				dom.slides.style.zoom = '';
				dom.slides.style.left = '';
				dom.slides.style.top = '';
				dom.slides.style.bottom = '';
				dom.slides.style.right = '';
				transformSlides( { layout: '' } );
			}
			else {
				// Prefer zooming in desktop Chrome so that content remains crisp
				if( !isMobileDevice && /chrome/i.test( navigator.userAgent ) && typeof dom.slides.style.zoom !== 'undefined' ) {
					dom.slides.style.zoom = scale;
					transformSlides( { layout: '' } );
				}
				// Apply scale transform as a fallback
				else {
					dom.slides.style.left = '50%';
					dom.slides.style.top = '50%';
					dom.slides.style.bottom = 'auto';
					dom.slides.style.right = 'auto';
					transformSlides( { layout: 'translate(-50%, -50%) scale('+ scale +')' } );
				}
			}

			// Select all slides, vertical and horizontal
			var slides = toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) );

			for( var i = 0, len = slides.length; i < len; i++ ) {
				var slide = slides[ i ];

				// Don't bother updating invisible slides
				if( slide.style.display === 'none' ) {
					continue;
				}

				if( config.center || slide.classList.contains( 'center' ) ) {
					// Vertical stacks are not centred since their section
					// children will be
					if( slide.classList.contains( 'stack' ) ) {
						slide.style.top = 0;
					}
					else {
						slide.style.top = Math.max( ( ( size.height - getAbsoluteHeight( slide ) ) / 2 ) - slidePadding, 0 ) + 'px';
					}
				}
				else {
					slide.style.top = '';
				}

			}

			updateProgress();
			updateParallax();

		}

	}

	/**
	 * Applies layout logic to the contents of all slides in
	 * the presentation.
	 */
	function layoutSlideContents( width, height, padding ) {

		// Handle sizing of elements with the 'stretch' class
		toArray( dom.slides.querySelectorAll( 'section > .stretch' ) ).forEach( function( element ) {

			// Determine how much vertical space we can use
			var remainingHeight = getRemainingHeight( element, height );

			// Consider the aspect ratio of media elements
			if( /(img|video)/gi.test( element.nodeName ) ) {
				var nw = element.naturalWidth || element.videoWidth,
					nh = element.naturalHeight || element.videoHeight;

				var es = Math.min( width / nw, remainingHeight / nh );

				element.style.width = ( nw * es ) + 'px';
				element.style.height = ( nh * es ) + 'px';

			}
			else {
				element.style.width = width + 'px';
				element.style.height = remainingHeight + 'px';
			}

		} );

	}

	/**
	 * Calculates the computed pixel size of our slides. These
	 * values are based on the width and height configuration
	 * options.
	 */
	function getComputedSlideSize( presentationWidth, presentationHeight ) {

		var size = {
			// Slide size
			width: config.width,
			height: config.height,

			// Presentation size
			presentationWidth: presentationWidth || dom.wrapper.offsetWidth,
			presentationHeight: presentationHeight || dom.wrapper.offsetHeight
		};

		// Reduce available space by margin
		size.presentationWidth -= ( size.presentationWidth * config.margin );
		size.presentationHeight -= ( size.presentationHeight * config.margin );

		// Slide width may be a percentage of available width
		if( typeof size.width === 'string' && /%$/.test( size.width ) ) {
			size.width = parseInt( size.width, 10 ) / 100 * size.presentationWidth;
		}

		// Slide height may be a percentage of available height
		if( typeof size.height === 'string' && /%$/.test( size.height ) ) {
			size.height = parseInt( size.height, 10 ) / 100 * size.presentationHeight;
		}

		return size;

	}

	/**
	 * Stores the vertical index of a stack so that the same
	 * vertical slide can be selected when navigating to and
	 * from the stack.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 * @param {int} v Index to memorize
	 */
	function setPreviousVerticalIndex( stack, v ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' ) {
			stack.setAttribute( 'data-previous-indexv', v || 0 );
		}

	}

	/**
	 * Retrieves the vertical index which was stored using
	 * #setPreviousVerticalIndex() or 0 if no previous index
	 * exists.
	 *
	 * @param {HTMLElement} stack The vertical stack element
	 */
	function getPreviousVerticalIndex( stack ) {

		if( typeof stack === 'object' && typeof stack.setAttribute === 'function' && stack.classList.contains( 'stack' ) ) {
			// Prefer manually defined start-indexv
			var attributeName = stack.hasAttribute( 'data-start-indexv' ) ? 'data-start-indexv' : 'data-previous-indexv';

			return parseInt( stack.getAttribute( attributeName ) || 0, 10 );
		}

		return 0;

	}

	/**
	 * Displays the overview of slides (quick nav) by scaling
	 * down and arranging all slide elements.
	 */
	function activateOverview() {

		// Only proceed if enabled in config
		if( config.overview && !isOverview() ) {

			overview = true;

			dom.wrapper.classList.add( 'overview' );
			dom.wrapper.classList.remove( 'overview-deactivating' );

			if( features.overviewTransitions ) {
				setTimeout( function() {
					dom.wrapper.classList.add( 'overview-animated' );
				}, 1 );
			}

			// Don't auto-slide while in overview mode
			cancelAutoSlide();

			// Move the backgrounds element into the slide container to
			// that the same scaling is applied
			dom.slides.appendChild( dom.background );

			// Clicking on an overview slide navigates to it
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				if( !slide.classList.contains( 'stack' ) ) {
					slide.addEventListener( 'click', onOverviewSlideClicked, true );
				}
			} );

			updateSlidesVisibility();
			layoutOverview();
			updateOverview();

			layout();

			// Notify observers of the overview showing
			dispatchEvent( 'overviewshown', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}

	}

	/**
	 * Uses CSS transforms to position all slides in a grid for
	 * display inside of the overview mode.
	 */
	function layoutOverview() {

		var margin = 70;
		var slideWidth = config.width + margin,
			slideHeight = config.height + margin;

		// Reverse in RTL mode
		if( config.rtl ) {
			slideWidth = -slideWidth;
		}

		// Layout slides
		toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).forEach( function( hslide, h ) {
			hslide.setAttribute( 'data-index-h', h );
			transformElement( hslide, 'translate3d(' + ( h * slideWidth ) + 'px, 0, 0)' );

			if( hslide.classList.contains( 'stack' ) ) {

				toArray( hslide.querySelectorAll( 'section' ) ).forEach( function( vslide, v ) {
					vslide.setAttribute( 'data-index-h', h );
					vslide.setAttribute( 'data-index-v', v );

					transformElement( vslide, 'translate3d(0, ' + ( v * slideHeight ) + 'px, 0)' );
				} );

			}
		} );

		// Layout slide backgrounds
		toArray( dom.background.childNodes ).forEach( function( hbackground, h ) {
			transformElement( hbackground, 'translate3d(' + ( h * slideWidth ) + 'px, 0, 0)' );

			toArray( hbackground.querySelectorAll( '.slide-background' ) ).forEach( function( vbackground, v ) {
				transformElement( vbackground, 'translate3d(0, ' + ( v * slideHeight ) + 'px, 0)' );
			} );
		} );

	}

	/**
	 * Moves the overview viewport to the current slides.
	 * Called each time the current slide changes.
	 */
	function updateOverview() {

		var margin = 70;
		var slideWidth = config.width + margin,
			slideHeight = config.height + margin;

		// Reverse in RTL mode
		if( config.rtl ) {
			slideWidth = -slideWidth;
		}

		transformSlides( {
			overview: [
				'translateX('+ ( -indexh * slideWidth ) +'px)',
				'translateY('+ ( -indexv * slideHeight ) +'px)',
				'translateZ('+ ( window.innerWidth < 400 ? -1000 : -2500 ) +'px)'
			].join( ' ' )
		} );

	}

	/**
	 * Exits the slide overview and enters the currently
	 * active slide.
	 */
	function deactivateOverview() {

		// Only proceed if enabled in config
		if( config.overview ) {

			overview = false;

			dom.wrapper.classList.remove( 'overview' );
			dom.wrapper.classList.remove( 'overview-animated' );

			// Temporarily add a class so that transitions can do different things
			// depending on whether they are exiting/entering overview, or just
			// moving from slide to slide
			dom.wrapper.classList.add( 'overview-deactivating' );

			setTimeout( function () {
				dom.wrapper.classList.remove( 'overview-deactivating' );
			}, 1 );

			// Move the background element back out
			dom.wrapper.appendChild( dom.background );

			// Clean up changes made to slides
			toArray( dom.wrapper.querySelectorAll( SLIDES_SELECTOR ) ).forEach( function( slide ) {
				transformElement( slide, '' );

				slide.removeEventListener( 'click', onOverviewSlideClicked, true );
			} );

			// Clean up changes made to backgrounds
			toArray( dom.background.querySelectorAll( '.slide-background' ) ).forEach( function( background ) {
				transformElement( background, '' );
			} );

			transformSlides( { overview: '' } );

			slide( indexh, indexv );

			layout();

			cueAutoSlide();

			// Notify observers of the overview hiding
			dispatchEvent( 'overviewhidden', {
				'indexh': indexh,
				'indexv': indexv,
				'currentSlide': currentSlide
			} );

		}
	}

	/**
	 * Toggles the slide overview mode on and off.
	 *
	 * @param {Boolean} override Optional flag which overrides the
	 * toggle logic and forcibly sets the desired state. True means
	 * overview is open, false means it's closed.
	 */
	function toggleOverview( override ) {

		if( typeof override === 'boolean' ) {
			override ? activateOverview() : deactivateOverview();
		}
		else {
			isOverview() ? deactivateOverview() : activateOverview();
		}

	}

	/**
	 * Checks if the overview is currently active.
	 *
	 * @return {Boolean} true if the overview is active,
	 * false otherwise
	 */
	function isOverview() {

		return overview;

	}

	/**
	 * Checks if the current or specified slide is vertical
	 * (nested within another slide).
	 *
	 * @param {HTMLElement} slide [optional] The slide to check
	 * orientation of
	 */
	function isVerticalSlide( slide ) {

		// Prefer slide argument, otherwise use current slide
		slide = slide ? slide : currentSlide;

		return slide && slide.parentNode && !!slide.parentNode.nodeName.match( /section/i );

	}

	/**
	 * Handling the fullscreen functionality via the fullscreen API
	 *
	 * @see http://fullscreen.spec.whatwg.org/
	 * @see https://developer.mozilla.org/en-US/docs/DOM/Using_fullscreen_mode
	 */
	function enterFullscreen() {

		var element = document.body;

		// Check which implementation is available
		var requestMethod = element.requestFullScreen ||
							element.webkitRequestFullscreen ||
							element.webkitRequestFullScreen ||
							element.mozRequestFullScreen ||
							element.msRequestFullscreen;

		if( requestMethod ) {
			requestMethod.apply( element );
		}

	}

	/**
	 * Enters the paused mode which fades everything on screen to
	 * black.
	 */
	function pause() {

		if( config.pause ) {
			var wasPaused = dom.wrapper.classList.contains( 'paused' );

			cancelAutoSlide();
			dom.wrapper.classList.add( 'paused' );

			if( wasPaused === false ) {
				dispatchEvent( 'paused' );
			}
		}

	}

	/**
	 * Exits from the paused mode.
	 */
	function resume() {

		var wasPaused = dom.wrapper.classList.contains( 'paused' );
		dom.wrapper.classList.remove( 'paused' );

		cueAutoSlide();

		if( wasPaused ) {
			dispatchEvent( 'resumed' );
		}

	}

	/**
	 * Toggles the paused mode on and off.
	 */
	function togglePause( override ) {

		if( typeof override === 'boolean' ) {
			override ? pause() : resume();
		}
		else {
			isPaused() ? resume() : pause();
		}

	}

	/**
	 * Checks if we are currently in the paused mode.
	 */
	function isPaused() {

		return dom.wrapper.classList.contains( 'paused' );

	}

	/**
	 * Toggles the auto slide mode on and off.
	 *
	 * @param {Boolean} override Optional flag which sets the desired state.
	 * True means autoplay starts, false means it stops.
	 */

	function toggleAutoSlide( override ) {

		if( typeof override === 'boolean' ) {
			override ? resumeAutoSlide() : pauseAutoSlide();
		}

		else {
			autoSlidePaused ? resumeAutoSlide() : pauseAutoSlide();
		}

	}

	/**
	 * Checks if the auto slide mode is currently on.
	 */
	function isAutoSliding() {

		return !!( autoSlide && !autoSlidePaused );

	}

	/**
	 * Steps from the current point in the presentation to the
	 * slide which matches the specified horizontal and vertical
	 * indices.
	 *
	 * @param {int} h Horizontal index of the target slide
	 * @param {int} v Vertical index of the target slide
	 * @param {int} f Optional index of a fragment within the
	 * target slide to activate
	 * @param {int} o Optional origin for use in multimaster environments
	 */
	function slide( h, v, f, o ) {

		// Remember where we were at before
		previousSlide = currentSlide;

		// Query all horizontal slides in the deck
		var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR );

		// If no vertical index is specified and the upcoming slide is a
		// stack, resume at its previous vertical index
		if( v === undefined && !isOverview() ) {
			v = getPreviousVerticalIndex( horizontalSlides[ h ] );
		}

		// If we were on a vertical stack, remember what vertical index
		// it was on so we can resume at the same position when returning
		if( previousSlide && previousSlide.parentNode && previousSlide.parentNode.classList.contains( 'stack' ) ) {
			setPreviousVerticalIndex( previousSlide.parentNode, indexv );
		}

		// Remember the state before this slide
		var stateBefore = state.concat();

		// Reset the state array
		state.length = 0;

		var indexhBefore = indexh || 0,
			indexvBefore = indexv || 0;

		// Activate and transition to the new slide
		indexh = updateSlides( HORIZONTAL_SLIDES_SELECTOR, h === undefined ? indexh : h );
		indexv = updateSlides( VERTICAL_SLIDES_SELECTOR, v === undefined ? indexv : v );

		// Update the visibility of slides now that the indices have changed
		updateSlidesVisibility();

		layout();

		// Apply the new state
		stateLoop: for( var i = 0, len = state.length; i < len; i++ ) {
			// Check if this state existed on the previous slide. If it
			// did, we will avoid adding it repeatedly
			for( var j = 0; j < stateBefore.length; j++ ) {
				if( stateBefore[j] === state[i] ) {
					stateBefore.splice( j, 1 );
					continue stateLoop;
				}
			}

			document.documentElement.classList.add( state[i] );

			// Dispatch custom event matching the state's name
			dispatchEvent( state[i] );
		}

		// Clean up the remains of the previous state
		while( stateBefore.length ) {
			document.documentElement.classList.remove( stateBefore.pop() );
		}

		// Update the overview if it's currently active
		if( isOverview() ) {
			updateOverview();
		}

		// Find the current horizontal slide and any possible vertical slides
		// within it
		var currentHorizontalSlide = horizontalSlides[ indexh ],
			currentVerticalSlides = currentHorizontalSlide.querySelectorAll( 'section' );

		// Store references to the previous and current slides
		currentSlide = currentVerticalSlides[ indexv ] || currentHorizontalSlide;

		// Show fragment, if specified
		if( typeof f !== 'undefined' ) {
			navigateFragment( f );
		}

		// Dispatch an event if the slide changed
		var slideChanged = ( indexh !== indexhBefore || indexv !== indexvBefore );
		if( slideChanged ) {
			dispatchEvent( 'slidechanged', {
				'indexh': indexh,
				'indexv': indexv,
				'previousSlide': previousSlide,
				'currentSlide': currentSlide,
				'origin': o
			} );
		}
		else {
			// Ensure that the previous slide is never the same as the current
			previousSlide = null;
		}

		// Solves an edge case where the previous slide maintains the
		// 'present' class when navigating between adjacent vertical
		// stacks
		if( previousSlide ) {
			previousSlide.classList.remove( 'present' );
			previousSlide.setAttribute( 'aria-hidden', 'true' );

			// Reset all slides upon navigate to home
			// Issue: #285
			if ( dom.wrapper.querySelector( HOME_SLIDE_SELECTOR ).classList.contains( 'present' ) ) {
				// Launch async task
				setTimeout( function () {
					var slides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.stack') ), i;
					for( i in slides ) {
						if( slides[i] ) {
							// Reset stack
							setPreviousVerticalIndex( slides[i], 0 );
						}
					}
				}, 0 );
			}
		}

		// Handle embedded content
		if( slideChanged || !previousSlide ) {
			stopEmbeddedContent( previousSlide );
			startEmbeddedContent( currentSlide );
		}

		// Announce the current slide contents, for screen readers
		dom.statusDiv.textContent = currentSlide.textContent;

		updateControls();
		updateProgress();
		updateBackground();
		updateParallax();
		updateSlideNumber();

		// Update the URL hash
		writeURL();

		cueAutoSlide();

	}

	/**
	 * Syncs the presentation with the current DOM. Useful
	 * when new slides or control elements are added or when
	 * the configuration has changed.
	 */
	function sync() {

		// Subscribe to input
		removeEventListeners();
		addEventListeners();

		// Force a layout to make sure the current config is accounted for
		layout();

		// Reflect the current autoSlide value
		autoSlide = config.autoSlide;

		// Start auto-sliding if it's enabled
		cueAutoSlide();

		// Re-create the slide backgrounds
		createBackgrounds();

		// Write the current hash to the URL
		writeURL();

		sortAllFragments();

		updateControls();
		updateProgress();
		updateBackground( true );
		updateSlideNumber();
		updateSlidesVisibility();

		formatEmbeddedContent();
		startEmbeddedContent( currentSlide );

		if( isOverview() ) {
			layoutOverview();
		}

	}

	/**
	 * Resets all vertical slides so that only the first
	 * is visible.
	 */
	function resetVerticalSlides() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				if( y > 0 ) {
					verticalSlide.classList.remove( 'present' );
					verticalSlide.classList.remove( 'past' );
					verticalSlide.classList.add( 'future' );
					verticalSlide.setAttribute( 'aria-hidden', 'true' );
				}

			} );

		} );

	}

	/**
	 * Sorts and formats all of fragments in the
	 * presentation.
	 */
	function sortAllFragments() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );
		horizontalSlides.forEach( function( horizontalSlide ) {

			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );
			verticalSlides.forEach( function( verticalSlide, y ) {

				sortFragments( verticalSlide.querySelectorAll( '.fragment' ) );

			} );

			if( verticalSlides.length === 0 ) sortFragments( horizontalSlide.querySelectorAll( '.fragment' ) );

		} );

	}

	/**
	 * Updates one dimension of slides by showing the slide
	 * with the specified index.
	 *
	 * @param {String} selector A CSS selector that will fetch
	 * the group of slides we are working with
	 * @param {Number} index The index of the slide that should be
	 * shown
	 *
	 * @return {Number} The index of the slide that is now shown,
	 * might differ from the passed in index if it was out of
	 * bounds.
	 */
	function updateSlides( selector, index ) {

		// Select all slides and convert the NodeList result to
		// an array
		var slides = toArray( dom.wrapper.querySelectorAll( selector ) ),
			slidesLength = slides.length;

		var printMode = isPrintingPDF();

		if( slidesLength ) {

			// Should the index loop?
			if( config.loop ) {
				index %= slidesLength;

				if( index < 0 ) {
					index = slidesLength + index;
				}
			}

			// Enforce max and minimum index bounds
			index = Math.max( Math.min( index, slidesLength - 1 ), 0 );

			for( var i = 0; i < slidesLength; i++ ) {
				var element = slides[i];

				var reverse = config.rtl && !isVerticalSlide( element );

				element.classList.remove( 'past' );
				element.classList.remove( 'present' );
				element.classList.remove( 'future' );

				// http://www.w3.org/html/wg/drafts/html/master/editing.html#the-hidden-attribute
				element.setAttribute( 'hidden', '' );
				element.setAttribute( 'aria-hidden', 'true' );

				// If this element contains vertical slides
				if( element.querySelector( 'section' ) ) {
					element.classList.add( 'stack' );
				}

				// If we're printing static slides, all slides are "present"
				if( printMode ) {
					element.classList.add( 'present' );
					continue;
				}

				if( i < index ) {
					// Any element previous to index is given the 'past' class
					element.classList.add( reverse ? 'future' : 'past' );

					if( config.fragments ) {
						var pastFragments = toArray( element.querySelectorAll( '.fragment' ) );

						// Show all fragments on prior slides
						while( pastFragments.length ) {
							var pastFragment = pastFragments.pop();
							pastFragment.classList.add( 'visible' );
							pastFragment.classList.remove( 'current-fragment' );
						}
					}
				}
				else if( i > index ) {
					// Any element subsequent to index is given the 'future' class
					element.classList.add( reverse ? 'past' : 'future' );

					if( config.fragments ) {
						var futureFragments = toArray( element.querySelectorAll( '.fragment.visible' ) );

						// No fragments in future slides should be visible ahead of time
						while( futureFragments.length ) {
							var futureFragment = futureFragments.pop();
							futureFragment.classList.remove( 'visible' );
							futureFragment.classList.remove( 'current-fragment' );
						}
					}
				}
			}

			// Mark the current slide as present
			slides[index].classList.add( 'present' );
			slides[index].removeAttribute( 'hidden' );
			slides[index].removeAttribute( 'aria-hidden' );

			// If this slide has a state associated with it, add it
			// onto the current state of the deck
			var slideState = slides[index].getAttribute( 'data-state' );
			if( slideState ) {
				state = state.concat( slideState.split( ' ' ) );
			}

		}
		else {
			// Since there are no slides we can't be anywhere beyond the
			// zeroth index
			index = 0;
		}

		return index;

	}

	/**
	 * Optimization method; hide all slides that are far away
	 * from the present slide.
	 */
	function updateSlidesVisibility() {

		// Select all slides and convert the NodeList result to
		// an array
		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ),
			horizontalSlidesLength = horizontalSlides.length,
			distanceX,
			distanceY;

		if( horizontalSlidesLength && typeof indexh !== 'undefined' ) {

			// The number of steps away from the present slide that will
			// be visible
			var viewDistance = isOverview() ? 10 : config.viewDistance;

			// Limit view distance on weaker devices
			if( isMobileDevice ) {
				viewDistance = isOverview() ? 6 : 2;
			}

			// All slides need to be visible when exporting to PDF
			if( isPrintingPDF() ) {
				viewDistance = Number.MAX_VALUE;
			}

			for( var x = 0; x < horizontalSlidesLength; x++ ) {
				var horizontalSlide = horizontalSlides[x];

				var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) ),
					verticalSlidesLength = verticalSlides.length;

				// Determine how far away this slide is from the present
				distanceX = Math.abs( ( indexh || 0 ) - x ) || 0;

				// If the presentation is looped, distance should measure
				// 1 between the first and last slides
				if( config.loop ) {
					distanceX = Math.abs( ( ( indexh || 0 ) - x ) % ( horizontalSlidesLength - viewDistance ) ) || 0;
				}

				// Show the horizontal slide if it's within the view distance
				if( distanceX < viewDistance ) {
					showSlide( horizontalSlide );
				}
				else {
					hideSlide( horizontalSlide );
				}

				if( verticalSlidesLength ) {

					var oy = getPreviousVerticalIndex( horizontalSlide );

					for( var y = 0; y < verticalSlidesLength; y++ ) {
						var verticalSlide = verticalSlides[y];

						distanceY = x === ( indexh || 0 ) ? Math.abs( ( indexv || 0 ) - y ) : Math.abs( y - oy );

						if( distanceX + distanceY < viewDistance ) {
							showSlide( verticalSlide );
						}
						else {
							hideSlide( verticalSlide );
						}
					}

				}
			}

		}

	}

	/**
	 * Updates the progress bar to reflect the current slide.
	 */
	function updateProgress() {

		// Update progress if enabled
		if( config.progress && dom.progressbar ) {

			dom.progressbar.style.width = getProgress() * dom.wrapper.offsetWidth + 'px';

		}

	}

	/**
	 * Updates the slide number div to reflect the current slide.
	 *
	 * Slide number format can be defined as a string using the
	 * following variables:
	 *  h: current slide's horizontal index
	 *  v: current slide's vertical index
	 *  c: current slide index (flattened)
	 *  t: total number of slides (flattened)
	 */
	function updateSlideNumber() {

		// Update slide number if enabled
		if( config.slideNumber && dom.slideNumber) {

			// Default to only showing the current slide number
			var format = 'c';

			// Check if a custom slide number format is available
			if( typeof config.slideNumber === 'string' ) {
				format = config.slideNumber;
			}

			dom.slideNumber.innerHTML = format.replace( /h/g, indexh )
												.replace( /v/g, indexv )
												.replace( /c/g, getSlidePastCount() + 1 )
												.replace( /t/g, getTotalSlides() );
		}

	}

	/**
	 * Updates the state of all control/navigation arrows.
	 */
	function updateControls() {

		var routes = availableRoutes();
		var fragments = availableFragments();

		// Remove the 'enabled' class from all directions
		dom.controlsLeft.concat( dom.controlsRight )
						.concat( dom.controlsUp )
						.concat( dom.controlsDown )
						.concat( dom.controlsPrev )
						.concat( dom.controlsNext ).forEach( function( node ) {
			node.classList.remove( 'enabled' );
			node.classList.remove( 'fragmented' );
		} );

		// Add the 'enabled' class to the available routes
		if( routes.left ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.right ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.up ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'enabled' );	} );
		if( routes.down ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Prev/next buttons
		if( routes.left || routes.up ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'enabled' ); } );
		if( routes.right || routes.down ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'enabled' ); } );

		// Highlight fragment directions
		if( currentSlide ) {

			// Always apply fragment decorator to prev/next buttons
			if( fragments.prev ) dom.controlsPrev.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			if( fragments.next ) dom.controlsNext.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );

			// Apply fragment decorators to directional buttons based on
			// what slide axis they are in
			if( isVerticalSlide( currentSlide ) ) {
				if( fragments.prev ) dom.controlsUp.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsDown.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}
			else {
				if( fragments.prev ) dom.controlsLeft.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
				if( fragments.next ) dom.controlsRight.forEach( function( el ) { el.classList.add( 'fragmented', 'enabled' ); } );
			}

		}

	}

	/**
	 * Updates the background elements to reflect the current
	 * slide.
	 *
	 * @param {Boolean} includeAll If true, the backgrounds of
	 * all vertical slides (not just the present) will be updated.
	 */
	function updateBackground( includeAll ) {

		var currentBackground = null;

		// Reverse past/future classes when in RTL mode
		var horizontalPast = config.rtl ? 'future' : 'past',
			horizontalFuture = config.rtl ? 'past' : 'future';

		// Update the classes of all backgrounds to match the
		// states of their slides (past/present/future)
		toArray( dom.background.childNodes ).forEach( function( backgroundh, h ) {

			backgroundh.classList.remove( 'past' );
			backgroundh.classList.remove( 'present' );
			backgroundh.classList.remove( 'future' );

			if( h < indexh ) {
				backgroundh.classList.add( horizontalPast );
			}
			else if ( h > indexh ) {
				backgroundh.classList.add( horizontalFuture );
			}
			else {
				backgroundh.classList.add( 'present' );

				// Store a reference to the current background element
				currentBackground = backgroundh;
			}

			if( includeAll || h === indexh ) {
				toArray( backgroundh.querySelectorAll( '.slide-background' ) ).forEach( function( backgroundv, v ) {

					backgroundv.classList.remove( 'past' );
					backgroundv.classList.remove( 'present' );
					backgroundv.classList.remove( 'future' );

					if( v < indexv ) {
						backgroundv.classList.add( 'past' );
					}
					else if ( v > indexv ) {
						backgroundv.classList.add( 'future' );
					}
					else {
						backgroundv.classList.add( 'present' );

						// Only if this is the present horizontal and vertical slide
						if( h === indexh ) currentBackground = backgroundv;
					}

				} );
			}

		} );

		// Stop any currently playing video background
		if( previousBackground ) {

			var previousVideo = previousBackground.querySelector( 'video' );
			if( previousVideo ) previousVideo.pause();

		}

		if( currentBackground ) {

			// Start video playback
			var currentVideo = currentBackground.querySelector( 'video' );
			if( currentVideo ) {
				currentVideo.currentTime = 0;
				currentVideo.play();
			}

			var backgroundImageURL = currentBackground.style.backgroundImage || '';

			// Restart GIFs (doesn't work in Firefox)
			if( /\.gif/i.test( backgroundImageURL ) ) {
				currentBackground.style.backgroundImage = '';
				window.getComputedStyle( currentBackground ).opacity;
				currentBackground.style.backgroundImage = backgroundImageURL;
			}

			// Don't transition between identical backgrounds. This
			// prevents unwanted flicker.
			var previousBackgroundHash = previousBackground ? previousBackground.getAttribute( 'data-background-hash' ) : null;
			var currentBackgroundHash = currentBackground.getAttribute( 'data-background-hash' );
			if( currentBackgroundHash && currentBackgroundHash === previousBackgroundHash && currentBackground !== previousBackground ) {
				dom.background.classList.add( 'no-transition' );
			}

			previousBackground = currentBackground;

		}

		// If there's a background brightness flag for this slide,
		// bubble it to the .reveal container
		if( currentSlide ) {
			[ 'has-light-background', 'has-dark-background' ].forEach( function( classToBubble ) {
				if( currentSlide.classList.contains( classToBubble ) ) {
					dom.wrapper.classList.add( classToBubble );
				}
				else {
					dom.wrapper.classList.remove( classToBubble );
				}
			} );
		}

		// Allow the first background to apply without transition
		setTimeout( function() {
			dom.background.classList.remove( 'no-transition' );
		}, 1 );

	}

	/**
	 * Updates the position of the parallax background based
	 * on the current slide index.
	 */
	function updateParallax() {

		if( config.parallaxBackgroundImage ) {

			var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
				verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

			var backgroundSize = dom.background.style.backgroundSize.split( ' ' ),
				backgroundWidth, backgroundHeight;

			if( backgroundSize.length === 1 ) {
				backgroundWidth = backgroundHeight = parseInt( backgroundSize[0], 10 );
			}
			else {
				backgroundWidth = parseInt( backgroundSize[0], 10 );
				backgroundHeight = parseInt( backgroundSize[1], 10 );
			}

			var slideWidth = dom.background.offsetWidth,
				horizontalSlideCount = horizontalSlides.length,
				horizontalOffsetMultiplier,
				horizontalOffset;

			if( typeof config.parallaxBackgroundHorizontal === 'number' ) {
				horizontalOffsetMultiplier = config.parallaxBackgroundHorizontal;
			}
			else {
				horizontalOffsetMultiplier = ( backgroundWidth - slideWidth ) / ( horizontalSlideCount-1 );
			}

			horizontalOffset = horizontalOffsetMultiplier * indexh * -1;

			var slideHeight = dom.background.offsetHeight,
				verticalSlideCount = verticalSlides.length,
				verticalOffsetMultiplier,
				verticalOffset;

			if( typeof config.parallaxBackgroundVertical === 'number' ) {
				verticalOffsetMultiplier = config.parallaxBackgroundVertical;
			}
			else {
				verticalOffsetMultiplier = ( backgroundHeight - slideHeight ) / ( verticalSlideCount-1 );
			}

			verticalOffset = verticalSlideCount > 0 ?  verticalOffsetMultiplier * indexv * 1 : 0;

			dom.background.style.backgroundPosition = horizontalOffset + 'px ' + -verticalOffset + 'px';

		}

	}

	/**
	 * Called when the given slide is within the configured view
	 * distance. Shows the slide element and loads any content
	 * that is set to load lazily (data-src).
	 */
	function showSlide( slide ) {

		// Show the slide element
		slide.style.display = 'block';

		// Media elements with data-src attributes
		toArray( slide.querySelectorAll( 'img[data-src], video[data-src], audio[data-src]' ) ).forEach( function( element ) {
			element.setAttribute( 'src', element.getAttribute( 'data-src' ) );
			element.removeAttribute( 'data-src' );
		} );

		// Media elements with <source> children
		toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( media ) {
			var sources = 0;

			toArray( media.querySelectorAll( 'source[data-src]' ) ).forEach( function( source ) {
				source.setAttribute( 'src', source.getAttribute( 'data-src' ) );
				source.removeAttribute( 'data-src' );
				sources += 1;
			} );

			// If we rewrote sources for this video/audio element, we need
			// to manually tell it to load from its new origin
			if( sources > 0 ) {
				media.load();
			}
		} );


		// Show the corresponding background element
		var indices = getIndices( slide );
		var background = getSlideBackground( indices.h, indices.v );
		if( background ) {
			background.style.display = 'block';

			// If the background contains media, load it
			if( background.hasAttribute( 'data-loaded' ) === false ) {
				background.setAttribute( 'data-loaded', 'true' );

				var backgroundImage = slide.getAttribute( 'data-background-image' ),
					backgroundVideo = slide.getAttribute( 'data-background-video' ),
					backgroundVideoLoop = slide.hasAttribute( 'data-background-video-loop' ),
					backgroundIframe = slide.getAttribute( 'data-background-iframe' );

				// Images
				if( backgroundImage ) {
					background.style.backgroundImage = 'url('+ backgroundImage +')';
				}
				// Videos
				else if ( backgroundVideo && !isSpeakerNotes() ) {
					var video = document.createElement( 'video' );

					if( backgroundVideoLoop ) {
						video.setAttribute( 'loop', '' );
					}

					// Support comma separated lists of video sources
					backgroundVideo.split( ',' ).forEach( function( source ) {
						video.innerHTML += '<source src="'+ source +'">';
					} );

					background.appendChild( video );
				}
				// Iframes
				else if( backgroundIframe ) {
					var iframe = document.createElement( 'iframe' );
						iframe.setAttribute( 'src', backgroundIframe );
						iframe.style.width  = '100%';
						iframe.style.height = '100%';
						iframe.style.maxHeight = '100%';
						iframe.style.maxWidth = '100%';

					background.appendChild( iframe );
				}
			}
		}

	}

	/**
	 * Called when the given slide is moved outside of the
	 * configured view distance.
	 */
	function hideSlide( slide ) {

		// Hide the slide element
		slide.style.display = 'none';

		// Hide the corresponding background element
		var indices = getIndices( slide );
		var background = getSlideBackground( indices.h, indices.v );
		if( background ) {
			background.style.display = 'none';
		}

	}

	/**
	 * Determine what available routes there are for navigation.
	 *
	 * @return {Object} containing four booleans: left/right/up/down
	 */
	function availableRoutes() {

		var horizontalSlides = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ),
			verticalSlides = dom.wrapper.querySelectorAll( VERTICAL_SLIDES_SELECTOR );

		var routes = {
			left: indexh > 0 || config.loop,
			right: indexh < horizontalSlides.length - 1 || config.loop,
			up: indexv > 0,
			down: indexv < verticalSlides.length - 1
		};

		// reverse horizontal controls for rtl
		if( config.rtl ) {
			var left = routes.left;
			routes.left = routes.right;
			routes.right = left;
		}

		return routes;

	}

	/**
	 * Returns an object describing the available fragment
	 * directions.
	 *
	 * @return {Object} two boolean properties: prev/next
	 */
	function availableFragments() {

		if( currentSlide && config.fragments ) {
			var fragments = currentSlide.querySelectorAll( '.fragment' );
			var hiddenFragments = currentSlide.querySelectorAll( '.fragment:not(.visible)' );

			return {
				prev: fragments.length - hiddenFragments.length > 0,
				next: !!hiddenFragments.length
			};
		}
		else {
			return { prev: false, next: false };
		}

	}

	/**
	 * Enforces origin-specific format rules for embedded media.
	 */
	function formatEmbeddedContent() {

		var _appendParamToIframeSource = function( sourceAttribute, sourceURL, param ) {
			toArray( dom.slides.querySelectorAll( 'iframe['+ sourceAttribute +'*="'+ sourceURL +'"]' ) ).forEach( function( el ) {
				var src = el.getAttribute( sourceAttribute );
				if( src && src.indexOf( param ) === -1 ) {
					el.setAttribute( sourceAttribute, src + ( !/\?/.test( src ) ? '?' : '&' ) + param );
				}
			});
		};

		// YouTube frames must include "?enablejsapi=1"
		_appendParamToIframeSource( 'src', 'youtube.com/embed/', 'enablejsapi=1' );
		_appendParamToIframeSource( 'data-src', 'youtube.com/embed/', 'enablejsapi=1' );

		// Vimeo frames must include "?api=1"
		_appendParamToIframeSource( 'src', 'player.vimeo.com/', 'api=1' );
		_appendParamToIframeSource( 'data-src', 'player.vimeo.com/', 'api=1' );

	}

	/**
	 * Start playback of any embedded content inside of
	 * the targeted slide.
	 */
	function startEmbeddedContent( slide ) {

		if( slide && !isSpeakerNotes() ) {
			// Restart GIFs
			toArray( slide.querySelectorAll( 'img[src$=".gif"]' ) ).forEach( function( el ) {
				// Setting the same unchanged source like this was confirmed
				// to work in Chrome, FF & Safari
				el.setAttribute( 'src', el.getAttribute( 'src' ) );
			} );

			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( el.hasAttribute( 'data-autoplay' ) && typeof el.play === 'function' ) {
					el.play();
				}
			} );

			// Normal iframes
			toArray( slide.querySelectorAll( 'iframe[src]' ) ).forEach( function( el ) {
				startEmbeddedIframe( { target: el } );
			} );

			// Lazy loading iframes
			toArray( slide.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
				if( el.getAttribute( 'src' ) !== el.getAttribute( 'data-src' ) ) {
					el.removeEventListener( 'load', startEmbeddedIframe ); // remove first to avoid dupes
					el.addEventListener( 'load', startEmbeddedIframe );
					el.setAttribute( 'src', el.getAttribute( 'data-src' ) );
				}
			} );
		}

	}

	/**
	 * "Starts" the content of an embedded iframe using the
	 * postmessage API.
	 */
	function startEmbeddedIframe( event ) {

		var iframe = event.target;

		// YouTube postMessage API
		if( /youtube\.com\/embed\//.test( iframe.getAttribute( 'src' ) ) && iframe.hasAttribute( 'data-autoplay' ) ) {
			iframe.contentWindow.postMessage( '{"event":"command","func":"playVideo","args":""}', '*' );
		}
		// Vimeo postMessage API
		else if( /player\.vimeo\.com\//.test( iframe.getAttribute( 'src' ) ) && iframe.hasAttribute( 'data-autoplay' ) ) {
			iframe.contentWindow.postMessage( '{"method":"play"}', '*' );
		}
		// Generic postMessage API
		else {
			iframe.contentWindow.postMessage( 'slide:start', '*' );
		}

	}

	/**
	 * Stop playback of any embedded content inside of
	 * the targeted slide.
	 */
	function stopEmbeddedContent( slide ) {

		if( slide && slide.parentNode ) {
			// HTML5 media elements
			toArray( slide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.pause === 'function' ) {
					el.pause();
				}
			} );

			// Generic postMessage API for non-lazy loaded iframes
			toArray( slide.querySelectorAll( 'iframe' ) ).forEach( function( el ) {
				el.contentWindow.postMessage( 'slide:stop', '*' );
				el.removeEventListener( 'load', startEmbeddedIframe );
			});

			// YouTube postMessage API
			toArray( slide.querySelectorAll( 'iframe[src*="youtube.com/embed/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"event":"command","func":"pauseVideo","args":""}', '*' );
				}
			});

			// Vimeo postMessage API
			toArray( slide.querySelectorAll( 'iframe[src*="player.vimeo.com/"]' ) ).forEach( function( el ) {
				if( !el.hasAttribute( 'data-ignore' ) && typeof el.contentWindow.postMessage === 'function' ) {
					el.contentWindow.postMessage( '{"method":"pause"}', '*' );
				}
			});

			// Lazy loading iframes
			toArray( slide.querySelectorAll( 'iframe[data-src]' ) ).forEach( function( el ) {
				// Only removing the src doesn't actually unload the frame
				// in all browsers (Firefox) so we set it to blank first
				el.setAttribute( 'src', 'about:blank' );
				el.removeAttribute( 'src' );
			} );
		}

	}

	/**
	 * Returns the number of past slides. This can be used as a global
	 * flattened index for slides.
	 */
	function getSlidePastCount() {

		var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

		// The number of past slides
		var pastCount = 0;

		// Step through all slides and count the past ones
		mainLoop: for( var i = 0; i < horizontalSlides.length; i++ ) {

			var horizontalSlide = horizontalSlides[i];
			var verticalSlides = toArray( horizontalSlide.querySelectorAll( 'section' ) );

			for( var j = 0; j < verticalSlides.length; j++ ) {

				// Stop as soon as we arrive at the present
				if( verticalSlides[j].classList.contains( 'present' ) ) {
					break mainLoop;
				}

				pastCount++;

			}

			// Stop as soon as we arrive at the present
			if( horizontalSlide.classList.contains( 'present' ) ) {
				break;
			}

			// Don't count the wrapping section for vertical slides
			if( horizontalSlide.classList.contains( 'stack' ) === false ) {
				pastCount++;
			}

		}

		return pastCount;

	}

	/**
	 * Returns a value ranging from 0-1 that represents
	 * how far into the presentation we have navigated.
	 */
	function getProgress() {

		// The number of past and total slides
		var totalCount = getTotalSlides();
		var pastCount = getSlidePastCount();

		if( currentSlide ) {

			var allFragments = currentSlide.querySelectorAll( '.fragment' );

			// If there are fragments in the current slide those should be
			// accounted for in the progress.
			if( allFragments.length > 0 ) {
				var visibleFragments = currentSlide.querySelectorAll( '.fragment.visible' );

				// This value represents how big a portion of the slide progress
				// that is made up by its fragments (0-1)
				var fragmentWeight = 0.9;

				// Add fragment progress to the past slide count
				pastCount += ( visibleFragments.length / allFragments.length ) * fragmentWeight;
			}

		}

		return pastCount / ( totalCount - 1 );

	}

	/**
	 * Checks if this presentation is running inside of the
	 * speaker notes window.
	 */
	function isSpeakerNotes() {

		return !!window.location.search.match( /receiver/gi );

	}

	/**
	 * Reads the current URL (hash) and navigates accordingly.
	 */
	function readURL() {

		var hash = window.location.hash;

		// Attempt to parse the hash as either an index or name
		var bits = hash.slice( 2 ).split( '/' ),
			name = hash.replace( /#|\//gi, '' );

		// If the first bit is invalid and there is a name we can
		// assume that this is a named link
		if( isNaN( parseInt( bits[0], 10 ) ) && name.length ) {
			var element;

			// Ensure the named link is a valid HTML ID attribute
			if( /^[a-zA-Z][\w:.-]*$/.test( name ) ) {
				// Find the slide with the specified ID
				element = document.getElementById( name );
			}

			if( element ) {
				// Find the position of the named slide and navigate to it
				var indices = Reveal.getIndices( element );
				slide( indices.h, indices.v );
			}
			// If the slide doesn't exist, navigate to the current slide
			else {
				slide( indexh || 0, indexv || 0 );
			}
		}
		else {
			// Read the index components of the hash
			var h = parseInt( bits[0], 10 ) || 0,
				v = parseInt( bits[1], 10 ) || 0;

			if( h !== indexh || v !== indexv ) {
				slide( h, v );
			}
		}

	}

	/**
	 * Updates the page URL (hash) to reflect the current
	 * state.
	 *
	 * @param {Number} delay The time in ms to wait before
	 * writing the hash
	 */
	function writeURL( delay ) {

		if( config.history ) {

			// Make sure there's never more than one timeout running
			clearTimeout( writeURLTimeout );

			// If a delay is specified, timeout this call
			if( typeof delay === 'number' ) {
				writeURLTimeout = setTimeout( writeURL, delay );
			}
			else if( currentSlide ) {
				var url = '/';

				// Attempt to create a named link based on the slide's ID
				var id = currentSlide.getAttribute( 'id' );
				if( id ) {
					id = id.toLowerCase();
					id = id.replace( /[^a-zA-Z0-9\-\_\:\.]/g, '' );
				}

				// If the current slide has an ID, use that as a named link
				if( typeof id === 'string' && id.length ) {
					url = '/' + id;
				}
				// Otherwise use the /h/v index
				else {
					if( indexh > 0 || indexv > 0 ) url += indexh;
					if( indexv > 0 ) url += '/' + indexv;
				}

				window.location.hash = url;
			}
		}

	}

	/**
	 * Retrieves the h/v location of the current, or specified,
	 * slide.
	 *
	 * @param {HTMLElement} slide If specified, the returned
	 * index will be for this slide rather than the currently
	 * active one
	 *
	 * @return {Object} { h: <int>, v: <int>, f: <int> }
	 */
	function getIndices( slide ) {

		// By default, return the current indices
		var h = indexh,
			v = indexv,
			f;

		// If a slide is specified, return the indices of that slide
		if( slide ) {
			var isVertical = isVerticalSlide( slide );
			var slideh = isVertical ? slide.parentNode : slide;

			// Select all horizontal slides
			var horizontalSlides = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) );

			// Now that we know which the horizontal slide is, get its index
			h = Math.max( horizontalSlides.indexOf( slideh ), 0 );

			// Assume we're not vertical
			v = undefined;

			// If this is a vertical slide, grab the vertical index
			if( isVertical ) {
				v = Math.max( toArray( slide.parentNode.querySelectorAll( 'section' ) ).indexOf( slide ), 0 );
			}
		}

		if( !slide && currentSlide ) {
			var hasFragments = currentSlide.querySelectorAll( '.fragment' ).length > 0;
			if( hasFragments ) {
				var currentFragment = currentSlide.querySelector( '.current-fragment' );
				if( currentFragment && currentFragment.hasAttribute( 'data-fragment-index' ) ) {
					f = parseInt( currentFragment.getAttribute( 'data-fragment-index' ), 10 );
				}
				else {
					f = currentSlide.querySelectorAll( '.fragment.visible' ).length - 1;
				}
			}
		}

		return { h: h, v: v, f: f };

	}

	/**
	 * Retrieves the total number of slides in this presentation.
	 */
	function getTotalSlides() {

		return dom.wrapper.querySelectorAll( SLIDES_SELECTOR + ':not(.stack)' ).length;

	}

	/**
	 * Returns the slide element matching the specified index.
	 */
	function getSlide( x, y ) {

		var horizontalSlide = dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR )[ x ];
		var verticalSlides = horizontalSlide && horizontalSlide.querySelectorAll( 'section' );

		if( verticalSlides && verticalSlides.length && typeof y === 'number' ) {
			return verticalSlides ? verticalSlides[ y ] : undefined;
		}

		return horizontalSlide;

	}

	/**
	 * Returns the background element for the given slide.
	 * All slides, even the ones with no background properties
	 * defined, have a background element so as long as the
	 * index is valid an element will be returned.
	 */
	function getSlideBackground( x, y ) {

		// When printing to PDF the slide backgrounds are nested
		// inside of the slides
		if( isPrintingPDF() ) {
			var slide = getSlide( x, y );
			if( slide ) {
				var background = slide.querySelector( '.slide-background' );
				if( background && background.parentNode === slide ) {
					return background;
				}
			}

			return undefined;
		}

		var horizontalBackground = dom.wrapper.querySelectorAll( '.backgrounds>.slide-background' )[ x ];
		var verticalBackgrounds = horizontalBackground && horizontalBackground.querySelectorAll( '.slide-background' );

		if( verticalBackgrounds && verticalBackgrounds.length && typeof y === 'number' ) {
			return verticalBackgrounds ? verticalBackgrounds[ y ] : undefined;
		}

		return horizontalBackground;

	}

	/**
	 * Retrieves the current state of the presentation as
	 * an object. This state can then be restored at any
	 * time.
	 */
	function getState() {

		var indices = getIndices();

		return {
			indexh: indices.h,
			indexv: indices.v,
			indexf: indices.f,
			paused: isPaused(),
			overview: isOverview()
		};

	}

	/**
	 * Restores the presentation to the given state.
	 *
	 * @param {Object} state As generated by getState()
	 */
	function setState( state ) {

		if( typeof state === 'object' ) {
			slide( deserialize( state.indexh ), deserialize( state.indexv ), deserialize( state.indexf ) );

			var pausedFlag = deserialize( state.paused ),
				overviewFlag = deserialize( state.overview );

			if( typeof pausedFlag === 'boolean' && pausedFlag !== isPaused() ) {
				togglePause( pausedFlag );
			}

			if( typeof overviewFlag === 'boolean' && overviewFlag !== isOverview() ) {
				toggleOverview( overviewFlag );
			}
		}

	}

	/**
	 * Return a sorted fragments list, ordered by an increasing
	 * "data-fragment-index" attribute.
	 *
	 * Fragments will be revealed in the order that they are returned by
	 * this function, so you can use the index attributes to control the
	 * order of fragment appearance.
	 *
	 * To maintain a sensible default fragment order, fragments are presumed
	 * to be passed in document order. This function adds a "fragment-index"
	 * attribute to each node if such an attribute is not already present,
	 * and sets that attribute to an integer value which is the position of
	 * the fragment within the fragments list.
	 */
	function sortFragments( fragments ) {

		fragments = toArray( fragments );

		var ordered = [],
			unordered = [],
			sorted = [];

		// Group ordered and unordered elements
		fragments.forEach( function( fragment, i ) {
			if( fragment.hasAttribute( 'data-fragment-index' ) ) {
				var index = parseInt( fragment.getAttribute( 'data-fragment-index' ), 10 );

				if( !ordered[index] ) {
					ordered[index] = [];
				}

				ordered[index].push( fragment );
			}
			else {
				unordered.push( [ fragment ] );
			}
		} );

		// Append fragments without explicit indices in their
		// DOM order
		ordered = ordered.concat( unordered );

		// Manually count the index up per group to ensure there
		// are no gaps
		var index = 0;

		// Push all fragments in their sorted order to an array,
		// this flattens the groups
		ordered.forEach( function( group ) {
			group.forEach( function( fragment ) {
				sorted.push( fragment );
				fragment.setAttribute( 'data-fragment-index', index );
			} );

			index ++;
		} );

		return sorted;

	}

	/**
	 * Navigate to the specified slide fragment.
	 *
	 * @param {Number} index The index of the fragment that
	 * should be shown, -1 means all are invisible
	 * @param {Number} offset Integer offset to apply to the
	 * fragment index
	 *
	 * @return {Boolean} true if a change was made in any
	 * fragments visibility as part of this call
	 */
	function navigateFragment( index, offset ) {

		if( currentSlide && config.fragments ) {

			var fragments = sortFragments( currentSlide.querySelectorAll( '.fragment' ) );
			if( fragments.length ) {

				// If no index is specified, find the current
				if( typeof index !== 'number' ) {
					var lastVisibleFragment = sortFragments( currentSlide.querySelectorAll( '.fragment.visible' ) ).pop();

					if( lastVisibleFragment ) {
						index = parseInt( lastVisibleFragment.getAttribute( 'data-fragment-index' ) || 0, 10 );
					}
					else {
						index = -1;
					}
				}

				// If an offset is specified, apply it to the index
				if( typeof offset === 'number' ) {
					index += offset;
				}

				var fragmentsShown = [],
					fragmentsHidden = [];

				toArray( fragments ).forEach( function( element, i ) {

					if( element.hasAttribute( 'data-fragment-index' ) ) {
						i = parseInt( element.getAttribute( 'data-fragment-index' ), 10 );
					}

					// Visible fragments
					if( i <= index ) {
						if( !element.classList.contains( 'visible' ) ) fragmentsShown.push( element );
						element.classList.add( 'visible' );
						element.classList.remove( 'current-fragment' );

						// Announce the fragments one by one to the Screen Reader
						dom.statusDiv.textContent = element.textContent;

						if( i === index ) {
							element.classList.add( 'current-fragment' );
						}
					}
					// Hidden fragments
					else {
						if( element.classList.contains( 'visible' ) ) fragmentsHidden.push( element );
						element.classList.remove( 'visible' );
						element.classList.remove( 'current-fragment' );
					}


				} );

				if( fragmentsHidden.length ) {
					dispatchEvent( 'fragmenthidden', { fragment: fragmentsHidden[0], fragments: fragmentsHidden } );
				}

				if( fragmentsShown.length ) {
					dispatchEvent( 'fragmentshown', { fragment: fragmentsShown[0], fragments: fragmentsShown } );
				}

				updateControls();
				updateProgress();

				return !!( fragmentsShown.length || fragmentsHidden.length );

			}

		}

		return false;

	}

	/**
	 * Navigate to the next slide fragment.
	 *
	 * @return {Boolean} true if there was a next fragment,
	 * false otherwise
	 */
	function nextFragment() {

		return navigateFragment( null, 1 );

	}

	/**
	 * Navigate to the previous slide fragment.
	 *
	 * @return {Boolean} true if there was a previous fragment,
	 * false otherwise
	 */
	function previousFragment() {

		return navigateFragment( null, -1 );

	}

	/**
	 * Cues a new automated slide if enabled in the config.
	 */
	function cueAutoSlide() {

		cancelAutoSlide();

		if( currentSlide ) {

			var currentFragment = currentSlide.querySelector( '.current-fragment' );

			var fragmentAutoSlide = currentFragment ? currentFragment.getAttribute( 'data-autoslide' ) : null;
			var parentAutoSlide = currentSlide.parentNode ? currentSlide.parentNode.getAttribute( 'data-autoslide' ) : null;
			var slideAutoSlide = currentSlide.getAttribute( 'data-autoslide' );

			// Pick value in the following priority order:
			// 1. Current fragment's data-autoslide
			// 2. Current slide's data-autoslide
			// 3. Parent slide's data-autoslide
			// 4. Global autoSlide setting
			if( fragmentAutoSlide ) {
				autoSlide = parseInt( fragmentAutoSlide, 10 );
			}
			else if( slideAutoSlide ) {
				autoSlide = parseInt( slideAutoSlide, 10 );
			}
			else if( parentAutoSlide ) {
				autoSlide = parseInt( parentAutoSlide, 10 );
			}
			else {
				autoSlide = config.autoSlide;
			}

			// If there are media elements with data-autoplay,
			// automatically set the autoSlide duration to the
			// length of that media. Not applicable if the slide
			// is divided up into fragments.
			if( currentSlide.querySelectorAll( '.fragment' ).length === 0 ) {
				toArray( currentSlide.querySelectorAll( 'video, audio' ) ).forEach( function( el ) {
					if( el.hasAttribute( 'data-autoplay' ) ) {
						if( autoSlide && el.duration * 1000 > autoSlide ) {
							autoSlide = ( el.duration * 1000 ) + 1000;
						}
					}
				} );
			}

			// Cue the next auto-slide if:
			// - There is an autoSlide value
			// - Auto-sliding isn't paused by the user
			// - The presentation isn't paused
			// - The overview isn't active
			// - The presentation isn't over
			if( autoSlide && !autoSlidePaused && !isPaused() && !isOverview() && ( !Reveal.isLastSlide() || availableFragments().next || config.loop === true ) ) {
				autoSlideTimeout = setTimeout( navigateNext, autoSlide );
				autoSlideStartTime = Date.now();
			}

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( autoSlideTimeout !== -1 );
			}

		}

	}

	/**
	 * Cancels any ongoing request to auto-slide.
	 */
	function cancelAutoSlide() {

		clearTimeout( autoSlideTimeout );
		autoSlideTimeout = -1;

	}

	function pauseAutoSlide() {

		if( autoSlide && !autoSlidePaused ) {
			autoSlidePaused = true;
			dispatchEvent( 'autoslidepaused' );
			clearTimeout( autoSlideTimeout );

			if( autoSlidePlayer ) {
				autoSlidePlayer.setPlaying( false );
			}
		}

	}

	function resumeAutoSlide() {

		if( autoSlide && autoSlidePaused ) {
			autoSlidePaused = false;
			dispatchEvent( 'autoslideresumed' );
			cueAutoSlide();
		}

	}

	function navigateLeft() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || nextFragment() === false ) && availableRoutes().left ) {
				slide( indexh + 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || previousFragment() === false ) && availableRoutes().left ) {
			slide( indexh - 1 );
		}

	}

	function navigateRight() {

		// Reverse for RTL
		if( config.rtl ) {
			if( ( isOverview() || previousFragment() === false ) && availableRoutes().right ) {
				slide( indexh - 1 );
			}
		}
		// Normal navigation
		else if( ( isOverview() || nextFragment() === false ) && availableRoutes().right ) {
			slide( indexh + 1 );
		}

	}

	function navigateUp() {

		// Prioritize hiding fragments
		if( ( isOverview() || previousFragment() === false ) && availableRoutes().up ) {
			slide( indexh, indexv - 1 );
		}

	}

	function navigateDown() {

		// Prioritize revealing fragments
		if( ( isOverview() || nextFragment() === false ) && availableRoutes().down ) {
			slide( indexh, indexv + 1 );
		}

	}

	/**
	 * Navigates backwards, prioritized in the following order:
	 * 1) Previous fragment
	 * 2) Previous vertical slide
	 * 3) Previous horizontal slide
	 */
	function navigatePrev() {

		// Prioritize revealing fragments
		if( previousFragment() === false ) {
			if( availableRoutes().up ) {
				navigateUp();
			}
			else {
				// Fetch the previous horizontal slide, if there is one
				var previousSlide;

				if( config.rtl ) {
					previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.future' ) ).pop();
				}
				else {
					previousSlide = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR + '.past' ) ).pop();
				}

				if( previousSlide ) {
					var v = ( previousSlide.querySelectorAll( 'section' ).length - 1 ) || undefined;
					var h = indexh - 1;
					slide( h, v );
				}
			}
		}

	}

	/**
	 * The reverse of #navigatePrev().
	 */
	function navigateNext() {

		// Prioritize revealing fragments
		if( nextFragment() === false ) {
			if( availableRoutes().down ) {
				navigateDown();
			}
			else if( config.rtl ) {
				navigateLeft();
			}
			else {
				navigateRight();
			}
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}


	// --------------------------------------------------------------------//
	// ----------------------------- EVENTS -------------------------------//
	// --------------------------------------------------------------------//

	/**
	 * Called by all event handlers that are based on user
	 * input.
	 */
	function onUserInput( event ) {

		if( config.autoSlideStoppable ) {
			pauseAutoSlide();
		}

	}

	/**
	 * Handler for the document level 'keypress' event.
	 */
	function onDocumentKeyPress( event ) {

		// Check if the pressed key is question mark
		if( event.shiftKey && event.charCode === 63 ) {
			if( dom.overlay ) {
				closeOverlay();
			}
			else {
				showHelp( true );
			}
		}

	}

	/**
	 * Handler for the document level 'keydown' event.
	 */
	function onDocumentKeyDown( event ) {

		// If there's a condition specified and it returns false,
		// ignore this event
		if( typeof config.keyboardCondition === 'function' && config.keyboardCondition() === false ) {
			return true;
		}

		// Remember if auto-sliding was paused so we can toggle it
		var autoSlideWasPaused = autoSlidePaused;

		onUserInput( event );

		// Check if there's a focused element that could be using
		// the keyboard
		var activeElementIsCE = document.activeElement && document.activeElement.contentEditable !== 'inherit';
		var activeElementIsInput = document.activeElement && document.activeElement.tagName && /input|textarea/i.test( document.activeElement.tagName );

		// Disregard the event if there's a focused element or a
		// keyboard modifier key is present
		if( activeElementIsCE || activeElementIsInput || (event.shiftKey && event.keyCode !== 32) || event.altKey || event.ctrlKey || event.metaKey ) return;

		// While paused only allow "unpausing" keyboard events (b and .)
		if( isPaused() && [66,190,191].indexOf( event.keyCode ) === -1 ) {
			return false;
		}

		var triggered = false;

		// 1. User defined key bindings
		if( typeof config.keyboard === 'object' ) {

			for( var key in config.keyboard ) {

				// Check if this binding matches the pressed key
				if( parseInt( key, 10 ) === event.keyCode ) {

					var value = config.keyboard[ key ];

					// Callback function
					if( typeof value === 'function' ) {
						value.apply( null, [ event ] );
					}
					// String shortcuts to reveal.js API
					else if( typeof value === 'string' && typeof Reveal[ value ] === 'function' ) {
						Reveal[ value ].call();
					}

					triggered = true;

				}

			}

		}

		// 2. System defined key bindings
		if( triggered === false ) {

			// Assume true and try to prove false
			triggered = true;

			switch( event.keyCode ) {
				// p, page up
				case 80: case 33: navigatePrev(); break;
				// n, page down
				case 78: case 34: navigateNext(); break;
				// h, left
				case 72: case 37: navigateLeft(); break;
				// l, right
				case 76: case 39: navigateRight(); break;
				// k, up
				case 75: case 38: navigateUp(); break;
				// j, down
				case 74: case 40: navigateDown(); break;
				// home
				case 36: slide( 0 ); break;
				// end
				case 35: slide( Number.MAX_VALUE ); break;
				// space
				case 32: isOverview() ? deactivateOverview() : event.shiftKey ? navigatePrev() : navigateNext(); break;
				// return
				case 13: isOverview() ? deactivateOverview() : triggered = false; break;
				// two-spot, semicolon, b, period, Logitech presenter tools "black screen" button
				case 58: case 59: case 66: case 190: case 191: togglePause(); break;
				// f
				case 70: enterFullscreen(); break;
				// a
				case 65: if ( config.autoSlideStoppable ) toggleAutoSlide( autoSlideWasPaused ); break;
				default:
					triggered = false;
			}

		}

		// If the input resulted in a triggered action we should prevent
		// the browsers default behavior
		if( triggered ) {
			event.preventDefault && event.preventDefault();
		}
		// ESC or O key
		else if ( ( event.keyCode === 27 || event.keyCode === 79 ) && features.transforms3d ) {
			if( dom.overlay ) {
				closeOverlay();
			}
			else {
				toggleOverview();
			}

			event.preventDefault && event.preventDefault();
		}

		// If auto-sliding is enabled we need to cue up
		// another timeout
		cueAutoSlide();

	}

	/**
	 * Handler for the 'touchstart' event, enables support for
	 * swipe and pinch gestures.
	 */
	function onTouchStart( event ) {

		touch.startX = event.touches[0].clientX;
		touch.startY = event.touches[0].clientY;
		touch.startCount = event.touches.length;

		// If there's two touches we need to memorize the distance
		// between those two points to detect pinching
		if( event.touches.length === 2 && config.overview ) {
			touch.startSpan = distanceBetween( {
				x: event.touches[1].clientX,
				y: event.touches[1].clientY
			}, {
				x: touch.startX,
				y: touch.startY
			} );
		}

	}

	/**
	 * Handler for the 'touchmove' event.
	 */
	function onTouchMove( event ) {

		// Each touch should only trigger one action
		if( !touch.captured ) {
			onUserInput( event );

			var currentX = event.touches[0].clientX;
			var currentY = event.touches[0].clientY;

			// If the touch started with two points and still has
			// two active touches; test for the pinch gesture
			if( event.touches.length === 2 && touch.startCount === 2 && config.overview ) {

				// The current distance in pixels between the two touch points
				var currentSpan = distanceBetween( {
					x: event.touches[1].clientX,
					y: event.touches[1].clientY
				}, {
					x: touch.startX,
					y: touch.startY
				} );

				// If the span is larger than the desire amount we've got
				// ourselves a pinch
				if( Math.abs( touch.startSpan - currentSpan ) > touch.threshold ) {
					touch.captured = true;

					if( currentSpan < touch.startSpan ) {
						activateOverview();
					}
					else {
						deactivateOverview();
					}
				}

				event.preventDefault();

			}
			// There was only one touch point, look for a swipe
			else if( event.touches.length === 1 && touch.startCount !== 2 ) {

				var deltaX = currentX - touch.startX,
					deltaY = currentY - touch.startY;

				if( deltaX > touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateLeft();
				}
				else if( deltaX < -touch.threshold && Math.abs( deltaX ) > Math.abs( deltaY ) ) {
					touch.captured = true;
					navigateRight();
				}
				else if( deltaY > touch.threshold ) {
					touch.captured = true;
					navigateUp();
				}
				else if( deltaY < -touch.threshold ) {
					touch.captured = true;
					navigateDown();
				}

				// If we're embedded, only block touch events if they have
				// triggered an action
				if( config.embedded ) {
					if( touch.captured || isVerticalSlide( currentSlide ) ) {
						event.preventDefault();
					}
				}
				// Not embedded? Block them all to avoid needless tossing
				// around of the viewport in iOS
				else {
					event.preventDefault();
				}

			}
		}
		// There's a bug with swiping on some Android devices unless
		// the default action is always prevented
		else if( navigator.userAgent.match( /android/gi ) ) {
			event.preventDefault();
		}

	}

	/**
	 * Handler for the 'touchend' event.
	 */
	function onTouchEnd( event ) {

		touch.captured = false;

	}

	/**
	 * Convert pointer down to touch start.
	 */
	function onPointerDown( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" ) {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchStart( event );
		}

	}

	/**
	 * Convert pointer move to touch move.
	 */
	function onPointerMove( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchMove( event );
		}

	}

	/**
	 * Convert pointer up to touch end.
	 */
	function onPointerUp( event ) {

		if( event.pointerType === event.MSPOINTER_TYPE_TOUCH || event.pointerType === "touch" )  {
			event.touches = [{ clientX: event.clientX, clientY: event.clientY }];
			onTouchEnd( event );
		}

	}

	/**
	 * Handles mouse wheel scrolling, throttled to avoid skipping
	 * multiple slides.
	 */
	function onDocumentMouseScroll( event ) {

		if( Date.now() - lastMouseWheelStep > 600 ) {

			lastMouseWheelStep = Date.now();

			var delta = event.detail || -event.wheelDelta;
			if( delta > 0 ) {
				navigateNext();
			}
			else {
				navigatePrev();
			}

		}

	}

	/**
	 * Clicking on the progress bar results in a navigation to the
	 * closest approximate horizontal slide using this equation:
	 *
	 * ( clickX / presentationWidth ) * numberOfSlides
	 */
	function onProgressClicked( event ) {

		onUserInput( event );

		event.preventDefault();

		var slidesTotal = toArray( dom.wrapper.querySelectorAll( HORIZONTAL_SLIDES_SELECTOR ) ).length;
		var slideIndex = Math.floor( ( event.clientX / dom.wrapper.offsetWidth ) * slidesTotal );

		if( config.rtl ) {
			slideIndex = slidesTotal - slideIndex;
		}

		slide( slideIndex );

	}

	/**
	 * Event handler for navigation control buttons.
	 */
	function onNavigateLeftClicked( event ) { event.preventDefault(); onUserInput(); navigateLeft(); }
	function onNavigateRightClicked( event ) { event.preventDefault(); onUserInput(); navigateRight(); }
	function onNavigateUpClicked( event ) { event.preventDefault(); onUserInput(); navigateUp(); }
	function onNavigateDownClicked( event ) { event.preventDefault(); onUserInput(); navigateDown(); }
	function onNavigatePrevClicked( event ) { event.preventDefault(); onUserInput(); navigatePrev(); }
	function onNavigateNextClicked( event ) { event.preventDefault(); onUserInput(); navigateNext(); }

	/**
	 * Handler for the window level 'hashchange' event.
	 */
	function onWindowHashChange( event ) {

		readURL();

	}

	/**
	 * Handler for the window level 'resize' event.
	 */
	function onWindowResize( event ) {

		layout();

	}

	/**
	 * Handle for the window level 'visibilitychange' event.
	 */
	function onPageVisibilityChange( event ) {

		var isHidden =  document.webkitHidden ||
						document.msHidden ||
						document.hidden;

		// If, after clicking a link or similar and we're coming back,
		// focus the document.body to ensure we can use keyboard shortcuts
		if( isHidden === false && document.activeElement !== document.body ) {
			// Not all elements support .blur() - SVGs among them.
			if( typeof document.activeElement.blur === 'function' ) {
				document.activeElement.blur();
			}
			document.body.focus();
		}

	}

	/**
	 * Invoked when a slide is and we're in the overview.
	 */
	function onOverviewSlideClicked( event ) {

		// TODO There's a bug here where the event listeners are not
		// removed after deactivating the overview.
		if( eventsAreBound && isOverview() ) {
			event.preventDefault();

			var element = event.target;

			while( element && !element.nodeName.match( /section/gi ) ) {
				element = element.parentNode;
			}

			if( element && !element.classList.contains( 'disabled' ) ) {

				deactivateOverview();

				if( element.nodeName.match( /section/gi ) ) {
					var h = parseInt( element.getAttribute( 'data-index-h' ), 10 ),
						v = parseInt( element.getAttribute( 'data-index-v' ), 10 );

					slide( h, v );
				}

			}
		}

	}

	/**
	 * Handles clicks on links that are set to preview in the
	 * iframe overlay.
	 */
	function onPreviewLinkClicked( event ) {

		if( event.currentTarget && event.currentTarget.hasAttribute( 'href' ) ) {
			var url = event.currentTarget.getAttribute( 'href' );
			if( url ) {
				showPreview( url );
				event.preventDefault();
			}
		}

	}

	/**
	 * Handles click on the auto-sliding controls element.
	 */
	function onAutoSlidePlayerClick( event ) {

		// Replay
		if( Reveal.isLastSlide() && config.loop === false ) {
			slide( 0, 0 );
			resumeAutoSlide();
		}
		// Resume
		else if( autoSlidePaused ) {
			resumeAutoSlide();
		}
		// Pause
		else {
			pauseAutoSlide();
		}

	}


	// --------------------------------------------------------------------//
	// ------------------------ PLAYBACK COMPONENT ------------------------//
	// --------------------------------------------------------------------//


	/**
	 * Constructor for the playback component, which displays
	 * play/pause/progress controls.
	 *
	 * @param {HTMLElement} container The component will append
	 * itself to this
	 * @param {Function} progressCheck A method which will be
	 * called frequently to get the current progress on a range
	 * of 0-1
	 */
	function Playback( container, progressCheck ) {

		// Cosmetics
		this.diameter = 50;
		this.thickness = 3;

		// Flags if we are currently playing
		this.playing = false;

		// Current progress on a 0-1 range
		this.progress = 0;

		// Used to loop the animation smoothly
		this.progressOffset = 1;

		this.container = container;
		this.progressCheck = progressCheck;

		this.canvas = document.createElement( 'canvas' );
		this.canvas.className = 'playback';
		this.canvas.width = this.diameter;
		this.canvas.height = this.diameter;
		this.context = this.canvas.getContext( '2d' );

		this.container.appendChild( this.canvas );

		this.render();

	}

	Playback.prototype.setPlaying = function( value ) {

		var wasPlaying = this.playing;

		this.playing = value;

		// Start repainting if we weren't already
		if( !wasPlaying && this.playing ) {
			this.animate();
		}
		else {
			this.render();
		}

	};

	Playback.prototype.animate = function() {

		var progressBefore = this.progress;

		this.progress = this.progressCheck();

		// When we loop, offset the progress so that it eases
		// smoothly rather than immediately resetting
		if( progressBefore > 0.8 && this.progress < 0.2 ) {
			this.progressOffset = this.progress;
		}

		this.render();

		if( this.playing ) {
			features.requestAnimationFrameMethod.call( window, this.animate.bind( this ) );
		}

	};

	/**
	 * Renders the current progress and playback state.
	 */
	Playback.prototype.render = function() {

		var progress = this.playing ? this.progress : 0,
			radius = ( this.diameter / 2 ) - this.thickness,
			x = this.diameter / 2,
			y = this.diameter / 2,
			iconSize = 14;

		// Ease towards 1
		this.progressOffset += ( 1 - this.progressOffset ) * 0.1;

		var endAngle = ( - Math.PI / 2 ) + ( progress * ( Math.PI * 2 ) );
		var startAngle = ( - Math.PI / 2 ) + ( this.progressOffset * ( Math.PI * 2 ) );

		this.context.save();
		this.context.clearRect( 0, 0, this.diameter, this.diameter );

		// Solid background color
		this.context.beginPath();
		this.context.arc( x, y, radius + 2, 0, Math.PI * 2, false );
		this.context.fillStyle = 'rgba( 0, 0, 0, 0.4 )';
		this.context.fill();

		// Draw progress track
		this.context.beginPath();
		this.context.arc( x, y, radius, 0, Math.PI * 2, false );
		this.context.lineWidth = this.thickness;
		this.context.strokeStyle = '#666';
		this.context.stroke();

		if( this.playing ) {
			// Draw progress on top of track
			this.context.beginPath();
			this.context.arc( x, y, radius, startAngle, endAngle, false );
			this.context.lineWidth = this.thickness;
			this.context.strokeStyle = '#fff';
			this.context.stroke();
		}

		this.context.translate( x - ( iconSize / 2 ), y - ( iconSize / 2 ) );

		// Draw play/pause icons
		if( this.playing ) {
			this.context.fillStyle = '#fff';
			this.context.fillRect( 0, 0, iconSize / 2 - 2, iconSize );
			this.context.fillRect( iconSize / 2 + 2, 0, iconSize / 2 - 2, iconSize );
		}
		else {
			this.context.beginPath();
			this.context.translate( 2, 0 );
			this.context.moveTo( 0, 0 );
			this.context.lineTo( iconSize - 2, iconSize / 2 );
			this.context.lineTo( 0, iconSize );
			this.context.fillStyle = '#fff';
			this.context.fill();
		}

		this.context.restore();

	};

	Playback.prototype.on = function( type, listener ) {
		this.canvas.addEventListener( type, listener, false );
	};

	Playback.prototype.off = function( type, listener ) {
		this.canvas.removeEventListener( type, listener, false );
	};

	Playback.prototype.destroy = function() {

		this.playing = false;

		if( this.canvas.parentNode ) {
			this.container.removeChild( this.canvas );
		}

	};


	// --------------------------------------------------------------------//
	// ------------------------------- API --------------------------------//
	// --------------------------------------------------------------------//


	Reveal = {
		initialize: initialize,
		configure: configure,
		sync: sync,

		// Navigation methods
		slide: slide,
		left: navigateLeft,
		right: navigateRight,
		up: navigateUp,
		down: navigateDown,
		prev: navigatePrev,
		next: navigateNext,

		// Fragment methods
		navigateFragment: navigateFragment,
		prevFragment: previousFragment,
		nextFragment: nextFragment,

		// Deprecated aliases
		navigateTo: slide,
		navigateLeft: navigateLeft,
		navigateRight: navigateRight,
		navigateUp: navigateUp,
		navigateDown: navigateDown,
		navigatePrev: navigatePrev,
		navigateNext: navigateNext,

		// Forces an update in slide layout
		layout: layout,

		// Returns an object with the available routes as booleans (left/right/top/bottom)
		availableRoutes: availableRoutes,

		// Returns an object with the available fragments as booleans (prev/next)
		availableFragments: availableFragments,

		// Toggles the overview mode on/off
		toggleOverview: toggleOverview,

		// Toggles the "black screen" mode on/off
		togglePause: togglePause,

		// Toggles the auto slide mode on/off
		toggleAutoSlide: toggleAutoSlide,

		// State checks
		isOverview: isOverview,
		isPaused: isPaused,
		isAutoSliding: isAutoSliding,

		// Adds or removes all internal event listeners (such as keyboard)
		addEventListeners: addEventListeners,
		removeEventListeners: removeEventListeners,

		// Facility for persisting and restoring the presentation state
		getState: getState,
		setState: setState,

		// Presentation progress on range of 0-1
		getProgress: getProgress,

		// Returns the indices of the current, or specified, slide
		getIndices: getIndices,

		getTotalSlides: getTotalSlides,

		// Returns the slide element at the specified index
		getSlide: getSlide,

		// Returns the slide background element at the specified index
		getSlideBackground: getSlideBackground,

		// Returns the previous slide element, may be null
		getPreviousSlide: function() {
			return previousSlide;
		},

		// Returns the current slide element
		getCurrentSlide: function() {
			return currentSlide;
		},

		// Returns the current scale of the presentation content
		getScale: function() {
			return scale;
		},

		// Returns the current configuration object
		getConfig: function() {
			return config;
		},

		// Helper method, retrieves query string as a key/value hash
		getQueryHash: function() {
			var query = {};

			location.search.replace( /[A-Z0-9]+?=([\w\.%-]*)/gi, function(a) {
				query[ a.split( '=' ).shift() ] = a.split( '=' ).pop();
			} );

			// Basic deserialization
			for( var i in query ) {
				var value = query[ i ];

				query[ i ] = deserialize( unescape( value ) );
			}

			return query;
		},

		// Returns true if we're currently on the first slide
		isFirstSlide: function() {
			return ( indexh === 0 && indexv === 0 );
		},

		// Returns true if we're currently on the last slide
		isLastSlide: function() {
			if( currentSlide ) {
				// Does this slide has next a sibling?
				if( currentSlide.nextElementSibling ) return false;

				// If it's vertical, does its parent have a next sibling?
				if( isVerticalSlide( currentSlide ) && currentSlide.parentNode.nextElementSibling ) return false;

				return true;
			}

			return false;
		},

		// Checks if reveal.js has been loaded and is ready for use
		isReady: function() {
			return loaded;
		},

		// Forward event binding to the reveal DOM element
		addEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).addEventListener( type, listener, useCapture );
			}
		},
		removeEventListener: function( type, listener, useCapture ) {
			if( 'addEventListener' in window ) {
				( dom.wrapper || document.querySelector( '.reveal' ) ).removeEventListener( type, listener, useCapture );
			}
		},

		// Programatically triggers a keyboard event
		triggerKey: function( keyCode ) {
			onDocumentKeyDown( { keyCode: keyCode } );
		}
	};

	return Reveal;

}));

},{}],5:[function(require,module,exports){
function renderPage(){$.fn.inlineStyle=function(e){return this.prop("style")[$.camelCase(e)]};$("pre.rfiddle").each(function(){var e="http://r-fiddle.org/#/query/preview?code=";var t=document.createElement("iframe");var n=$(this).text();var r=$(this).inlineStyle("height");t.src=e+encodeURIComponent(n);t.width="100%";if(!r)t.height=38+19*getNumberOfLines(n)+"px";else t.height=r;t.frameBorder="0";t.allowFullScreen="allowfullscreen";$(this).replaceWith(t)});$("pre.rfiddle-interactive").each(function(){var e="http://r-fiddle.org/#/query/embed?code=";var t=document.createElement("iframe");var n=$(this).text();var r=$(this).inlineStyle("height");t.src=e+encodeURIComponent(n);t.width="100%";if(!r)t.height=85+38+19*getNumberOfLines(n)+"px";else t.height=r;t.frameBorder="0";t.allowFullScreen="allowfullscreen";$(this).replaceWith(t)})}function getNumberOfLines(e){var t=e.split(/\r\n|\r|\n/);return t.length}$("document").ready(function(){renderPage()})
},{}],6:[function(require,module,exports){
(function (global){
var css = require('./../styles/ss.css');
global.$ = require('./../components/jquery/dist/jquery.min.js');
var _rFiddleHelper = require('./../components/rfiddleHelper/rfiddleHelper.min.js');
var Reveal = require('./../components/reveal.js/js/reveal.js');
var _prism = require('./../components/prism/prism.js');
//var _hljs = require('./../components/highlight.js/highlight.pack.js');

Reveal.initialize({

    // Display controls in the bottom right corner
    controls: true,

    // Display a presentation progress bar
    progress: true,

    // Display the page number of the current slide
    slideNumber: true,

    // Push each slide change to the browser history
    history: false,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: true,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: false,

    // Change the presentation direction to be RTL
    rtl: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,

    // Flags if we should show a help overlay when the questionmark
    // key is pressed
    help: true,

    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 0,

    // Stop auto-sliding after user input
    autoSlideStoppable: true,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Hides the address bar on mobile devices
    hideAddressBar: true,

    // Opens links in an iframe preview overlay
    previewLinks: false,

    // Transition style
    transition: 'default', // none/fade/slide/convex/concave/zoom

    // Transition speed
    transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'default', // none/fade/slide/convex/concave/zoom

    // Number of slides away from the current that are visible
    viewDistance: 3,

    // Parallax background image
    parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'"

    // Parallax background size
    parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px"

    // Amount to move parallax background (horizontal and vertical) on slide change
    // Number, e.g. 100
    parallaxBackgroundHorizontal: '',
    parallaxBackgroundVertical: ''

});
//window.hljs.initHighlightingOnLoad();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../components/jquery/dist/jquery.min.js":2,"./../components/prism/prism.js":3,"./../components/reveal.js/js/reveal.js":4,"./../components/rfiddleHelper/rfiddleHelper.min.js":5,"./../styles/ss.css":7}],7:[function(require,module,exports){
var css = "@import url(\"https://fonts.googleapis.com/css?family=News+Cycle:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic\");\nbody {\n  font-size: 14px;\n  line-height: 22px;\n  font-family: Helvetica Neue, Helvetica, Arial;\n  background: #f4f4f4 url(src/components/_processed/docs/images/background.png);\n}\n.interface {\n  font-family: \"Lucida Grande\", \"Lucida Sans Unicode\", Helvetica, Arial, sans-serif !important;\n}\ndiv#sidebar {\n  background: #fff;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  padding: 15px 0 30px 30px;\n  border-right: 1px solid #bbb;\n  box-shadow: 0 0 20px #ccc;\n  -webkit-box-shadow: 0 0 20px #ccc;\n  -moz-box-shadow: 0 0 20px #ccc;\n}\na.toc_title,\na.toc_title:visited {\n  display: block;\n  color: black;\n  font-weight: bold;\n  margin-top: 15px;\n}\na.toc_title:hover {\n  text-decoration: underline;\n}\n#sidebar .version {\n  font-size: 10px;\n  font-weight: normal;\n}\nul.toc_section {\n  font-size: 11px;\n  line-height: 14px;\n  margin: 5px 0 0 0;\n  padding-left: 0px;\n  list-style-type: none;\n  font-family: Lucida Grande;\n}\n.toc_section li {\n  cursor: pointer;\n  margin: 0 0 3px 0;\n}\n.toc_section li a {\n  text-decoration: none;\n  color: black;\n}\n.toc_section li a:hover {\n  text-decoration: underline;\n}\ndiv.container {\n  position: relative;\n  width: 550px;\n  margin: 40px 0 50px 260px;\n}\nimg#logo {\n  width: 450px;\n  height: 80px;\n}\ndiv.run {\n  position: absolute;\n  right: 15px;\n  width: 26px;\n  height: 18px;\n  background: url('src/components/_processed/docs/images/arrows.png') no-repeat -26px 0;\n}\ndiv.run:active {\n  background-position: -51px 0;\n}\np,\ndiv.container ul {\n  margin: 25px 0;\n  width: 550px;\n}\np.warning {\n  font-size: 12px;\n  line-height: 18px;\n  font-style: italic;\n}\ndiv.container ul {\n  list-style: circle;\n  padding-left: 15px;\n  font-size: 13px;\n  line-height: 18px;\n}\ndiv.container ul li {\n  margin-bottom: 10px;\n}\ndiv.container ul.small {\n  font-size: 12px;\n}\na,\na:visited {\n  color: #444;\n}\na:active,\na:hover {\n  color: #000;\n}\na.punch {\n  display: inline-block;\n  background: #4162a8;\n  border-top: 1px solid #38538c;\n  border-right: 1px solid #1f2d4d;\n  border-bottom: 1px solid #151e33;\n  border-left: 1px solid #1f2d4d;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -moz-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -ms-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -o-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  color: #fff;\n  font: bold 14px \"helvetica neue\", helvetica, arial, sans-serif;\n  line-height: 1;\n  margin-bottom: 15px;\n  padding: 8px 0 10px 0;\n  text-align: center;\n  text-shadow: 0px -1px 1px #1e2d4d;\n  text-decoration: none;\n  width: 225px;\n  -webkit-background-clip: padding-box;\n}\na.punch:hover {\n  -webkit-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -moz-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -ms-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -o-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  cursor: pointer;\n}\na.punch:active {\n  -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  -moz-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  -ms-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  -o-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\na img {\n  border: 0;\n}\na.travis-badge {\n  display: block;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  padding-top: 20px;\n}\nh2 {\n  font-size: 22px;\n}\nb.header {\n  font-size: 18px;\n  line-height: 35px;\n}\nspan.alias {\n  font-size: 14px;\n  font-style: italic;\n  margin-left: 20px;\n}\ntable {\n  margin: 15px 0 0;\n  padding: 0;\n}\ntr,\ntd {\n  margin: 0;\n  padding: 0;\n}\ntd {\n  padding: 0px 15px 5px 0;\n}\ntable .rule {\n  height: 1px;\n  background: #ccc;\n  margin: 5px 0;\n}\ncode,\npre,\ntt {\n  font-family: Monaco, Consolas, \"Lucida Console\", monospace;\n  font-size: 12px;\n  line-height: 18px;\n  font-style: normal;\n}\ntt {\n  padding: 0px 3px;\n  background: #fff;\n  border: 1px solid #ddd;\n  zoom: 1;\n}\ncode {\n  margin-left: 20px;\n}\npre {\n  font-size: 12px;\n  padding: 2px 0 2px 15px;\n  border: 4px solid #bbb;\n  border-top: 0;\n  border-bottom: 0;\n  margin: 0px 0 25px;\n}\nimg.example_image {\n  margin: 0px auto;\n}\nimg.example_retina {\n  margin: 20px;\n  box-shadow: 0 8px 15px rgba(0,0,0,0.4);\n}\n@media only screen and (-webkit-max-device-pixel-ratio: 1) and (max-width: 600px),\n           only screen and (max--moz-device-pixel-ratio: 1) and (max-width: 600px) {\n  div#sidebar {\n    display: none;\n  }\n\n  img#logo {\n    max-width: 450px;\n    width: 100%;\n    height: auto;\n  }\n\n  div.container {\n    width: auto;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n\n  p,\n  div.container ul {\n    width: auto;\n  }\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 1.5) and (max-width: 640px),\n          only screen and (-o-min-device-pixel-ratio: 3/2) and (max-width: 640px),\n          only screen and (min-device-pixel-ratio: 1.5) and (max-width: 640px) {\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  div#sidebar {\n    -webkit-overflow-scrolling: initial;\n    position: relative;\n    width: 90%;\n    height: 120px;\n    left: 0;\n    top: -7px;\n    padding: 10px 0 10px 30px;\n    border: 0;\n  }\n\n  img#logo {\n    width: auto;\n    height: auto;\n  }\n\n  div.container {\n    margin: 0;\n    width: 100%;\n  }\n\n  p,\n  div.container ul {\n    max-width: 98%;\n    overflow-x: scroll;\n  }\n\n  table {\n    position: relative;\n  }\n\n  tr:first-child td {\n    padding-bottom: 25px;\n  }\n\n  td.text {\n    line-height: 12px;\n    padding: 0;\n    position: absolute;\n    left: 0;\n    top: 48px;\n  }\n\n  tr:last-child td.text {\n    top: 122px;\n  }\n\n  pre {\n    overflow: scroll;\n  }\n}\nimg.figure {\n  width: 100%;\n}\ndiv.columns {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\ndiv.columns ul {\n  margin: 10px 0;\n}\ndiv.col-50 {\n  display: table-cell;\n  width: 50%;\n}\n/*!\n * reveal.js\n * http://lab.hakim.se/reveal-js\n * MIT licensed\n *\n * Copyright (C) 2015 Hakim El Hattab, http://hakim.se\n */\n/*********************************************\n * RESET STYLES\n *********************************************/\nhtml,\nbody,\n.reveal div,\n.reveal span,\n.reveal applet,\n.reveal object,\n.reveal iframe,\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6,\n.reveal p,\n.reveal blockquote,\n.reveal pre,\n.reveal a,\n.reveal abbr,\n.reveal acronym,\n.reveal address,\n.reveal big,\n.reveal cite,\n.reveal code,\n.reveal del,\n.reveal dfn,\n.reveal em,\n.reveal img,\n.reveal ins,\n.reveal kbd,\n.reveal q,\n.reveal s,\n.reveal samp,\n.reveal small,\n.reveal strike,\n.reveal strong,\n.reveal sub,\n.reveal sup,\n.reveal tt,\n.reveal var,\n.reveal b,\n.reveal u,\n.reveal center,\n.reveal dl,\n.reveal dt,\n.reveal dd,\n.reveal ol,\n.reveal ul,\n.reveal li,\n.reveal fieldset,\n.reveal form,\n.reveal label,\n.reveal legend,\n.reveal table,\n.reveal caption,\n.reveal tbody,\n.reveal tfoot,\n.reveal thead,\n.reveal tr,\n.reveal th,\n.reveal td,\n.reveal article,\n.reveal aside,\n.reveal canvas,\n.reveal details,\n.reveal embed,\n.reveal figure,\n.reveal figcaption,\n.reveal footer,\n.reveal header,\n.reveal hgroup,\n.reveal menu,\n.reveal nav,\n.reveal output,\n.reveal ruby,\n.reveal section,\n.reveal summary,\n.reveal time,\n.reveal mark,\n.reveal audio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n.reveal article,\n.reveal aside,\n.reveal details,\n.reveal figcaption,\n.reveal figure,\n.reveal footer,\n.reveal header,\n.reveal hgroup,\n.reveal menu,\n.reveal nav,\n.reveal section {\n  display: block;\n}\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  position: relative;\n  line-height: 1;\n  background-color: #fff;\n  color: #000;\n}\n/*********************************************\n * VIEW FRAGMENTS\n *********************************************/\n.reveal .slides section .fragment {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.reveal .slides section .fragment.visible {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.grow {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.grow.visible {\n  -webkit-transform: scale(1.3);\n  -ms-transform: scale(1.3);\n  transform: scale(1.3);\n}\n.reveal .slides section .fragment.shrink {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.shrink.visible {\n  -webkit-transform: scale(0.7);\n  -ms-transform: scale(0.7);\n  transform: scale(0.7);\n}\n.reveal .slides section .fragment.zoom-in {\n  -webkit-transform: scale(0.1);\n  -ms-transform: scale(0.1);\n  transform: scale(0.1);\n}\n.reveal .slides section .fragment.zoom-in.visible {\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n}\n.reveal .slides section .fragment.fade-out {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.fade-out.visible {\n  opacity: 0;\n  visibility: hidden;\n}\n.reveal .slides section .fragment.semi-fade-out {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.semi-fade-out.visible {\n  opacity: 0.5;\n  visibility: visible;\n}\n.reveal .slides section .fragment.strike {\n  opacity: 1;\n}\n.reveal .slides section .fragment.strike.visible {\n  text-decoration: line-through;\n}\n.reveal .slides section .fragment.current-visible {\n  opacity: 0;\n  visibility: hidden;\n}\n.reveal .slides section .fragment.current-visible.current-fragment {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.highlight-red,\n.reveal .slides section .fragment.highlight-current-red,\n.reveal .slides section .fragment.highlight-green,\n.reveal .slides section .fragment.highlight-current-green,\n.reveal .slides section .fragment.highlight-blue,\n.reveal .slides section .fragment.highlight-current-blue {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.highlight-red.visible {\n  color: #ff2c2d;\n}\n.reveal .slides section .fragment.highlight-green.visible {\n  color: #17ff2e;\n}\n.reveal .slides section .fragment.highlight-blue.visible {\n  color: #1b91ff;\n}\n.reveal .slides section .fragment.highlight-current-red.current-fragment {\n  color: #ff2c2d;\n}\n.reveal .slides section .fragment.highlight-current-green.current-fragment {\n  color: #17ff2e;\n}\n.reveal .slides section .fragment.highlight-current-blue.current-fragment {\n  color: #1b91ff;\n}\n/*********************************************\n * DEFAULT ELEMENT STYLES\n *********************************************/\n/* Fixes issue in Chrome where italic fonts did not appear when printing to PDF */\n.reveal:after {\n  content: '';\n  font-style: italic;\n}\n.reveal iframe {\n  z-index: 1;\n}\n/** Prevents layering issues in certain browser/transition combinations */\n.reveal a {\n  position: relative;\n}\n.reveal .stretch {\n  max-width: none;\n  max-height: none;\n}\n.reveal pre.stretch code {\n  height: 100%;\n  max-height: 100%;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n/*********************************************\n * CONTROLS\n *********************************************/\n.reveal .controls {\n  display: none;\n  position: fixed;\n  width: 110px;\n  height: 110px;\n  z-index: 30;\n  right: 10px;\n  bottom: 10px;\n  -webkit-user-select: none;\n}\n.reveal .controls div {\n  position: absolute;\n  opacity: 0.05;\n  width: 0;\n  height: 0;\n  border: 12px solid transparent;\n  -webkit-transform: scale(0.9999);\n  -ms-transform: scale(0.9999);\n  transform: scale(0.9999);\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.reveal .controls div.enabled {\n  opacity: 0.7;\n  cursor: pointer;\n}\n.reveal .controls div.enabled:active {\n  margin-top: 1px;\n}\n.reveal .controls div.navigate-left {\n  top: 42px;\n  border-right-width: 22px;\n  border-right-color: #000;\n}\n.reveal .controls div.navigate-left.fragmented {\n  opacity: 0.3;\n}\n.reveal .controls div.navigate-right {\n  left: 74px;\n  top: 42px;\n  border-left-width: 22px;\n  border-left-color: #000;\n}\n.reveal .controls div.navigate-right.fragmented {\n  opacity: 0.3;\n}\n.reveal .controls div.navigate-up {\n  left: 42px;\n  border-bottom-width: 22px;\n  border-bottom-color: #000;\n}\n.reveal .controls div.navigate-up.fragmented {\n  opacity: 0.3;\n}\n.reveal .controls div.navigate-down {\n  left: 42px;\n  top: 74px;\n  border-top-width: 22px;\n  border-top-color: #000;\n}\n.reveal .controls div.navigate-down.fragmented {\n  opacity: 0.3;\n}\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  position: fixed;\n  display: none;\n  height: 3px;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.reveal .progress:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 20px;\n  width: 100%;\n  top: -20px;\n}\n.reveal .progress span {\n  display: block;\n  height: 100%;\n  width: 0px;\n  background-color: #000;\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n/*********************************************\n * SLIDE NUMBER\n *********************************************/\n.reveal .slide-number {\n  position: fixed;\n  display: block;\n  right: 15px;\n  bottom: 15px;\n  opacity: 0.5;\n  z-index: 31;\n  font-size: 12px;\n}\n/*********************************************\n * SLIDES\n *********************************************/\n.reveal {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n.reveal .slides {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  overflow: visible;\n  z-index: 1;\n  text-align: center;\n  -webkit-perspective: 600px;\n  perspective: 600px;\n  -webkit-perspective-origin: 50% 40%;\n  perspective-origin: 50% 40%;\n}\n.reveal .slides > section {\n  -ms-perspective: 600px;\n}\n.reveal .slides > section,\n.reveal .slides > section > section {\n  display: none;\n  position: absolute;\n  width: 100%;\n  padding: 20px 0px;\n  z-index: 10;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: -webkit-transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), -webkit-transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: -ms-transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] .slides section {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.reveal[data-transition-speed=\"slow\"] .slides section {\n  -webkit-transition-duration: 1200ms;\n  transition-duration: 1200ms;\n}\n/* Slide-specific transition speed overrides */\n.reveal .slides section[data-transition-speed=\"fast\"] {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.reveal .slides section[data-transition-speed=\"slow\"] {\n  -webkit-transition-duration: 1200ms;\n  transition-duration: 1200ms;\n}\n.reveal .slides > section.stack {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.reveal .slides > section.present,\n.reveal .slides > section > section.present {\n  display: block;\n  z-index: 11;\n  opacity: 1;\n}\n.reveal.center,\n.reveal.center .slides,\n.reveal.center .slides section {\n  min-height: 0 !important;\n}\n/* Don't allow interaction with invisible slides */\n.reveal .slides > section.future,\n.reveal .slides > section > section.future,\n.reveal .slides > section.past,\n.reveal .slides > section > section.past {\n  pointer-events: none;\n}\n.reveal.overview .slides > section,\n.reveal.overview .slides > section > section {\n  pointer-events: auto;\n}\n.reveal .slides > section.past,\n.reveal .slides > section.future,\n.reveal .slides > section > section.past,\n.reveal .slides > section > section.future {\n  opacity: 0;\n}\n/*********************************************\n * Mixins for readability of transitions\n *********************************************/\n/*********************************************\n * SLIDE TRANSITION\n * Aliased 'linear' for backwards compatibility\n *********************************************/\n.reveal.slide section {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.reveal .slides > section[data-transition=slide].past,\n.reveal .slides > section[data-transition~=slide-out].past,\n.reveal.slide .slides > section:not([data-transition]).past {\n  -webkit-transform: translate(-150%, 0);\n  -ms-transform: translate(-150%, 0);\n  transform: translate(-150%, 0);\n}\n.reveal .slides > section[data-transition=slide].future,\n.reveal .slides > section[data-transition~=slide-in].future,\n.reveal.slide .slides > section:not([data-transition]).future {\n  -webkit-transform: translate(150%, 0);\n  -ms-transform: translate(150%, 0);\n  transform: translate(150%, 0);\n}\n.reveal .slides > section > section[data-transition=slide].past,\n.reveal .slides > section > section[data-transition~=slide-out].past,\n.reveal.slide .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n  -ms-transform: translate(0, -150%);\n  transform: translate(0, -150%);\n}\n.reveal .slides > section > section[data-transition=slide].future,\n.reveal .slides > section > section[data-transition~=slide-in].future,\n.reveal.slide .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n  -ms-transform: translate(0, 150%);\n  transform: translate(0, 150%);\n}\n.reveal.linear section {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.reveal .slides > section[data-transition=linear].past,\n.reveal .slides > section[data-transition~=linear-out].past,\n.reveal.linear .slides > section:not([data-transition]).past {\n  -webkit-transform: translate(-150%, 0);\n  -ms-transform: translate(-150%, 0);\n  transform: translate(-150%, 0);\n}\n.reveal .slides > section[data-transition=linear].future,\n.reveal .slides > section[data-transition~=linear-in].future,\n.reveal.linear .slides > section:not([data-transition]).future {\n  -webkit-transform: translate(150%, 0);\n  -ms-transform: translate(150%, 0);\n  transform: translate(150%, 0);\n}\n.reveal .slides > section > section[data-transition=linear].past,\n.reveal .slides > section > section[data-transition~=linear-out].past,\n.reveal.linear .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n  -ms-transform: translate(0, -150%);\n  transform: translate(0, -150%);\n}\n.reveal .slides > section > section[data-transition=linear].future,\n.reveal .slides > section > section[data-transition~=linear-in].future,\n.reveal.linear .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n  -ms-transform: translate(0, 150%);\n  transform: translate(0, 150%);\n}\n/*********************************************\n * CONVEX TRANSITION\n * Aliased 'default' for backwards compatibility\n *********************************************/\n.reveal .slides > section[data-transition=default].past,\n.reveal .slides > section[data-transition~=default-out].past,\n.reveal.default .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n}\n.reveal .slides > section[data-transition=default].future,\n.reveal .slides > section[data-transition~=default-in].future,\n.reveal.default .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n}\n.reveal .slides > section > section[data-transition=default].past,\n.reveal .slides > section > section[data-transition~=default-out].past,\n.reveal.default .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n}\n.reveal .slides > section > section[data-transition=default].future,\n.reveal .slides > section > section[data-transition~=default-in].future,\n.reveal.default .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n  transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n}\n.reveal .slides > section[data-transition=convex].past,\n.reveal .slides > section[data-transition~=convex-out].past,\n.reveal.convex .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n}\n.reveal .slides > section[data-transition=convex].future,\n.reveal .slides > section[data-transition~=convex-in].future,\n.reveal.convex .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n}\n.reveal .slides > section > section[data-transition=convex].past,\n.reveal .slides > section > section[data-transition~=convex-out].past,\n.reveal.convex .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n}\n.reveal .slides > section > section[data-transition=convex].future,\n.reveal .slides > section > section[data-transition~=convex-in].future,\n.reveal.convex .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n  transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n}\n/*********************************************\n * CONCAVE TRANSITION\n *********************************************/\n.reveal .slides > section[data-transition=concave].past,\n.reveal .slides > section[data-transition~=concave-out].past,\n.reveal.concave .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n}\n.reveal .slides > section[data-transition=concave].future,\n.reveal .slides > section[data-transition~=concave-in].future,\n.reveal.concave .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n}\n.reveal .slides > section > section[data-transition=concave].past,\n.reveal .slides > section > section[data-transition~=concave-out].past,\n.reveal.concave .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n  transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n}\n.reveal .slides > section > section[data-transition=concave].future,\n.reveal .slides > section > section[data-transition~=concave-in].future,\n.reveal.concave .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n  transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n}\n/*********************************************\n * ZOOM TRANSITION\n *********************************************/\n.reveal .slides > section[data-transition=zoom],\n.reveal.zoom .slides > section:not([data-transition]) {\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.reveal .slides > section[data-transition=zoom].past,\n.reveal .slides > section[data-transition~=zoom-out].past,\n.reveal.zoom .slides > section:not([data-transition]).past {\n  visibility: hidden;\n  -webkit-transform: scale(16);\n  -ms-transform: scale(16);\n  transform: scale(16);\n}\n.reveal .slides > section[data-transition=zoom].future,\n.reveal .slides > section[data-transition~=zoom-in].future,\n.reveal.zoom .slides > section:not([data-transition]).future {\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n}\n.reveal .slides > section > section[data-transition=zoom].past,\n.reveal .slides > section > section[data-transition~=zoom-out].past,\n.reveal.zoom .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n  -ms-transform: translate(0, -150%);\n  transform: translate(0, -150%);\n}\n.reveal .slides > section > section[data-transition=zoom].future,\n.reveal .slides > section > section[data-transition~=zoom-in].future,\n.reveal.zoom .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n  -ms-transform: translate(0, 150%);\n  transform: translate(0, 150%);\n}\n/*********************************************\n * CUBE TRANSITION\n *********************************************/\n.reveal.cube .slides {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.reveal.cube .slides section {\n  padding: 30px;\n  min-height: 700px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.reveal.center.cube .slides section {\n  min-height: 0;\n}\n.reveal.cube .slides section:not(.stack):before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  -webkit-transform: translateZ(-20px);\n  transform: translateZ(-20px);\n}\n.reveal.cube .slides section:not(.stack):after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 90%;\n  height: 30px;\n  left: 5%;\n  bottom: 0;\n  background: none;\n  z-index: 1;\n  border-radius: 4px;\n  box-shadow: 0px 95px 25px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateZ(-90px) rotateX(65deg);\n  transform: translateZ(-90px) rotateX(65deg);\n}\n.reveal.cube .slides > section.stack {\n  padding: 0;\n  background: none;\n}\n.reveal.cube .slides > section.past {\n  -webkit-transform-origin: 100% 0%;\n  -ms-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n  transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n}\n.reveal.cube .slides > section.future {\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg);\n  transform: translate3d(100%, 0, 0) rotateY(90deg);\n}\n.reveal.cube .slides > section > section.past {\n  -webkit-transform-origin: 0% 100%;\n  -ms-transform-origin: 0% 100%;\n  transform-origin: 0% 100%;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(90deg);\n  transform: translate3d(0, -100%, 0) rotateX(90deg);\n}\n.reveal.cube .slides > section > section.future {\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg);\n  transform: translate3d(0, 100%, 0) rotateX(-90deg);\n}\n/*********************************************\n * PAGE TRANSITION\n *********************************************/\n.reveal.page .slides {\n  -webkit-perspective-origin: 0% 50%;\n  perspective-origin: 0% 50%;\n  -webkit-perspective: 3000px;\n  perspective: 3000px;\n}\n.reveal.page .slides section {\n  padding: 30px;\n  min-height: 700px;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.reveal.page .slides section.past {\n  z-index: 12;\n}\n.reveal.page .slides section:not(.stack):before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateZ(-20px);\n  transform: translateZ(-20px);\n}\n.reveal.page .slides section:not(.stack):after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 90%;\n  height: 30px;\n  left: 5%;\n  bottom: 0;\n  background: none;\n  z-index: 1;\n  border-radius: 4px;\n  box-shadow: 0px 95px 25px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateZ(-90px) rotateX(65deg);\n}\n.reveal.page .slides > section.stack {\n  padding: 0;\n  background: none;\n}\n.reveal.page .slides > section.past {\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n  transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n}\n.reveal.page .slides > section.future {\n  -webkit-transform-origin: 100% 0%;\n  -ms-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.reveal.page .slides > section > section.past {\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transform: translate3d(0, -40%, 0) rotateX(80deg);\n  transform: translate3d(0, -40%, 0) rotateX(80deg);\n}\n.reveal.page .slides > section > section.future {\n  -webkit-transform-origin: 0% 100%;\n  -ms-transform-origin: 0% 100%;\n  transform-origin: 0% 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n/*********************************************\n * FADE TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=fade],\n.reveal.fade .slides section:not([data-transition]),\n.reveal.fade .slides > section > section:not([data-transition]) {\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.reveal.fade.overview .slides section,\n.reveal.fade.overview .slides > section > section {\n  -webkit-transition: none;\n  transition: none;\n}\n/*********************************************\n * NO TRANSITION\n *********************************************/\n.reveal .slides > section[data-transition=none],\n.reveal.none .slides > section:not([data-transition]) {\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n  -webkit-transition: none;\n  transition: none;\n}\n/*********************************************\n * PAUSED MODE\n *********************************************/\n.reveal .pause-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  visibility: hidden;\n  opacity: 0;\n  z-index: 100;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.reveal.paused .pause-overlay {\n  visibility: visible;\n  opacity: 1;\n}\n/*********************************************\n * FALLBACK\n *********************************************/\n.no-transforms {\n  overflow-y: auto;\n}\n.no-transforms .reveal .slides {\n  position: relative;\n  width: 80%;\n  height: auto !important;\n  top: 0;\n  left: 50%;\n  margin: 0;\n  text-align: center;\n}\n.no-transforms .reveal .controls,\n.no-transforms .reveal .progress {\n  display: none !important;\n}\n.no-transforms .reveal .slides section {\n  display: block !important;\n  opacity: 1 !important;\n  position: relative !important;\n  height: auto;\n  min-height: 0;\n  top: 0;\n  left: -50%;\n  margin: 70px 0;\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n}\n.no-transforms .reveal .slides section section {\n  left: 0;\n}\n.reveal .no-transition,\n.reveal .no-transition * {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n/*********************************************\n * PER-SLIDE BACKGROUNDS\n *********************************************/\n.reveal .backgrounds {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-perspective: 600px;\n  perspective: 600px;\n}\n.reveal .slide-background {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  visibility: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  -webkit-transition: all 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: all 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n.reveal .slide-background.stack {\n  display: block;\n}\n.reveal .slide-background.present {\n  opacity: 1;\n  visibility: visible;\n}\n.print-pdf .reveal .slide-background {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n/* Video backgrounds */\n.reveal .slide-background video {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  max-height: none;\n  top: 0;\n  left: 0;\n}\n/* Immediate transition style */\n.reveal[data-background-transition=none] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=none] {\n  -webkit-transition: none;\n  transition: none;\n}\n/* Slide */\n.reveal[data-background-transition=slide] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=slide] {\n  opacity: 1;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.reveal[data-background-transition=slide] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=slide] {\n  -webkit-transform: translate(-100%, 0);\n  -ms-transform: translate(-100%, 0);\n  transform: translate(-100%, 0);\n}\n.reveal[data-background-transition=slide] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=slide] {\n  -webkit-transform: translate(100%, 0);\n  -ms-transform: translate(100%, 0);\n  transform: translate(100%, 0);\n}\n.reveal[data-background-transition=slide] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=slide] {\n  -webkit-transform: translate(0, -100%);\n  -ms-transform: translate(0, -100%);\n  transform: translate(0, -100%);\n}\n.reveal[data-background-transition=slide] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=slide] {\n  -webkit-transform: translate(0, 100%);\n  -ms-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n}\n/* Convex */\n.reveal[data-background-transition=convex] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n}\n.reveal[data-background-transition=convex] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n}\n.reveal[data-background-transition=convex] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n}\n.reveal[data-background-transition=convex] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n}\n/* Concave */\n.reveal[data-background-transition=concave] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n}\n.reveal[data-background-transition=concave] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n}\n.reveal[data-background-transition=concave] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n}\n.reveal[data-background-transition=concave] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n}\n/* Zoom */\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=zoom] {\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(16);\n  -ms-transform: scale(16);\n  transform: scale(16);\n}\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n}\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(16);\n  -ms-transform: scale(16);\n  transform: scale(16);\n}\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n}\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] > .backgrounds .slide-background {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.reveal[data-transition-speed=\"slow\"] > .backgrounds .slide-background {\n  -webkit-transition-duration: 1200ms;\n  transition-duration: 1200ms;\n}\n/*********************************************\n * OVERVIEW\n *********************************************/\n.reveal.overview {\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  -webkit-perspective: 700px;\n  perspective: 700px;\n}\n.reveal.overview .slides section {\n  height: 700px;\n  opacity: 1 !important;\n  overflow: hidden;\n  visibility: visible !important;\n  cursor: pointer;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.reveal.overview .slides section:hover,\n.reveal.overview .slides section.present {\n  outline: 10px solid rgba(150, 150, 150, 0.4);\n  outline-offset: 10px;\n}\n.reveal.overview .slides section .fragment {\n  opacity: 1;\n  -webkit-transition: none;\n  transition: none;\n}\n.reveal.overview .slides section:after,\n.reveal.overview .slides section:before {\n  display: none !important;\n}\n.reveal.overview .slides > section.stack {\n  padding: 0;\n  top: 0 !important;\n  background: none;\n  outline: none;\n  overflow: visible;\n}\n.reveal.overview .backgrounds {\n  -webkit-perspective: inherit;\n  perspective: inherit;\n}\n.reveal.overview .backgrounds .slide-background {\n  opacity: 1;\n  visibility: visible;\n  outline: 10px solid rgba(150, 150, 150, 0.1);\n  outline-offset: 10px;\n}\n.reveal.overview .slides section,\n.reveal.overview-deactivating .slides section {\n  -webkit-transition: none;\n  transition: none;\n}\n.reveal.overview .backgrounds .slide-background,\n.reveal.overview-deactivating .backgrounds .slide-background {\n  -webkit-transition: none;\n  transition: none;\n}\n.reveal.overview-animated .slides {\n  -webkit-transition: -webkit-transform 0.4s ease;\n  transition: transform 0.4s ease;\n}\n/*********************************************\n * RTL SUPPORT\n *********************************************/\n.reveal.rtl .slides,\n.reveal.rtl .slides h1,\n.reveal.rtl .slides h2,\n.reveal.rtl .slides h3,\n.reveal.rtl .slides h4,\n.reveal.rtl .slides h5,\n.reveal.rtl .slides h6 {\n  direction: rtl;\n  font-family: sans-serif;\n}\n.reveal.rtl pre,\n.reveal.rtl code {\n  direction: ltr;\n}\n.reveal.rtl ol,\n.reveal.rtl ul {\n  text-align: right;\n}\n.reveal.rtl .progress span {\n  float: right;\n}\n/*********************************************\n * PARALLAX BACKGROUND\n *********************************************/\n.reveal.has-parallax-background .backgrounds {\n  -webkit-transition: all 0.8s ease;\n  transition: all 0.8s ease;\n}\n/* Global transition speed settings */\n.reveal.has-parallax-background[data-transition-speed=\"fast\"] .backgrounds {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.reveal.has-parallax-background[data-transition-speed=\"slow\"] .backgrounds {\n  -webkit-transition-duration: 1200ms;\n  transition-duration: 1200ms;\n}\n/*********************************************\n * LINK PREVIEW OVERLAY\n *********************************************/\n.reveal .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.9);\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.reveal .overlay.visible {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .overlay .spinner {\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  width: 32px;\n  height: 32px;\n  margin: -16px 0 0 -16px;\n  z-index: 10;\n  background-image: url(data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D);\n  visibility: visible;\n  opacity: 0.6;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.reveal .overlay header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  z-index: 2;\n  border-bottom: 1px solid #222;\n}\n.reveal .overlay header a {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  padding: 0 10px;\n  float: right;\n  opacity: 0.6;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.reveal .overlay header a:hover {\n  opacity: 1;\n}\n.reveal .overlay header a .icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-position: 50% 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.reveal .overlay header a.close .icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkklEQVRYR8WX4VHDMAxG6wnoJrABZQPYBCaBTWAD2g1gE5gg6OOsXuxIlr40d81dfrSJ9V4c2VLK7spHuTJ/5wpM07QXuXc5X0opX2tEJcadjHuV80li/FgxTIEK/5QBCICBD6xEhSMGHgQPgBgLiYVAB1dpSqKDawxTohFw4JSEA3clzgIBPCURwE2JucBR7rhPJJv5OpJwDX+SfDjgx1wACQeJG1aChP9K/IMmdZ8DtESV1WyP3Bt4MwM6sj4NMxMYiqUWHQu4KYA/SYkIjOsm3BXYWMKFDwU2khjCQ4ELJUJ4SmClRArOCmSXGuKma0fYD5CbzHxFpCSGAhfAVSSUGDUk2BWZaff2g6GE15BsBQ9nwmpIGDiyHQddwNTMKkbZaf9fajXQca1EX44puJZUsnY0ObGmITE3GVLCbEhQUjGVt146j6oasWN+49Vph2w1pZ5EansNZqKBm1txbU57iRRcZ86RWMDdWtBJUHBHwoQPi1GV+JCbntmvok7iTX4/Up9mgyTc/FJYDTcndgH/AA5A/CHsyEkVAAAAAElFTkSuQmCC);\n}\n.reveal .overlay header a.external .icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcElEQVRYR+2WSQoAIQwEzf8f7XiOMkUQxUPlGkM3hVmiQfQR9GYnH1SsAQlI4DiBqkCMoNb9y2e90IAEJPAcgdznU9+engMaeJ7Azh5Y1U67gAho4DqBqmB1buAf0MB1AlVBek83ZPkmJMGc1wAR+AAqod/B97TRpQAAAABJRU5ErkJggg==);\n}\n.reveal .overlay .viewport {\n  position: absolute;\n  top: 40px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.reveal .overlay.overlay-preview .viewport iframe {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.reveal .overlay.overlay-preview.loaded .viewport iframe {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .overlay.overlay-preview.loaded .spinner {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n}\n.reveal .overlay.overlay-help .viewport {\n  overflow: auto;\n  color: #fff;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner {\n  width: 600px;\n  margin: 0 auto;\n  padding: 60px;\n  text-align: center;\n  letter-spacing: normal;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner .title {\n  font-size: 20px;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner table {\n  border: 1px solid #fff;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner table th,\n.reveal .overlay.overlay-help .viewport .viewport-inner table td {\n  width: 200px;\n  padding: 10px;\n  border: 1px solid #fff;\n  vertical-align: middle;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner table th {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/*********************************************\n * PLAYBACK COMPONENT\n *********************************************/\n.reveal .playback {\n  position: fixed;\n  left: 15px;\n  bottom: 15px;\n  z-index: 30;\n  cursor: pointer;\n  -webkit-transition: all 400ms ease;\n  transition: all 400ms ease;\n}\n.reveal.overview .playback {\n  opacity: 0;\n  visibility: hidden;\n}\n/*********************************************\n * ROLLING LINKS\n *********************************************/\n.reveal .roll {\n  display: inline-block;\n  line-height: 1.2;\n  overflow: hidden;\n  vertical-align: top;\n  -webkit-perspective: 400px;\n  perspective: 400px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n}\n.reveal .roll:hover {\n  background: none;\n  text-shadow: none;\n}\n.reveal .roll span {\n  display: block;\n  position: relative;\n  padding: 0 2px;\n  pointer-events: none;\n  -webkit-transition: all 400ms ease;\n  transition: all 400ms ease;\n  -webkit-transform-origin: 50% 0%;\n  -ms-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.reveal .roll:hover span {\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-transform: translate3d(0px, 0px, -45px) rotateX(90deg);\n  transform: translate3d(0px, 0px, -45px) rotateX(90deg);\n}\n.reveal .roll span:after {\n  content: attr(data-title);\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0 2px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 50% 0%;\n  -ms-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform: translate3d(0px, 110%, 0px) rotateX(-90deg);\n  transform: translate3d(0px, 110%, 0px) rotateX(-90deg);\n}\n/*********************************************\n * SPEAKER NOTES\n *********************************************/\n.reveal aside.notes {\n  display: none;\n}\n/*********************************************\n * ZOOM PLUGIN\n *********************************************/\n.zoomed .reveal *,\n.zoomed .reveal *:before,\n.zoomed .reveal *:after {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n.zoomed .reveal .progress,\n.zoomed .reveal .controls {\n  opacity: 0;\n}\n.zoomed .reveal .roll span {\n  background: none;\n}\n.zoomed .reveal .roll span:after {\n  visibility: hidden;\n}\n/**\n * A simple theme for reveal.js presentations, similar\n * to the default theme. The accent color is darkblue.\n *\n * This theme is Copyright (C) 2012 Owen Versteeg, https://github.com/StereotypicalApps. It is MIT licensed.\n * reveal.js is Copyright (C) 2011-2012 Hakim El Hattab, http://hakim.se\n */\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nbody {\n  background: #fff;\n  background-color: #fff;\n}\n.reveal {\n  font-family: 'Lato', sans-serif;\n  font-size: 36px;\n  font-weight: normal;\n  color: #000;\n}\n::selection {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.99);\n  text-shadow: none;\n}\n.reveal .slides > section,\n.reveal .slides > section > section {\n  line-height: 1.3;\n  font-weight: inherit;\n}\n/*********************************************\n * HEADERS\n *********************************************/\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6 {\n  margin: 0 0 20px 0;\n  color: #000;\n  font-family: 'News Cycle', Impact, sans-serif;\n  font-weight: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-transform: none;\n  text-shadow: none;\n  word-wrap: break-word;\n}\n.reveal h1 {\n  font-size: 3.77em;\n}\n.reveal h2 {\n  font-size: 2.11em;\n}\n.reveal h3 {\n  font-size: 1.55em;\n}\n.reveal h4 {\n  font-size: 1em;\n}\n.reveal h1 {\n  text-shadow: none;\n}\n/*********************************************\n * OTHER\n *********************************************/\n.reveal p {\n  margin: 20px 0;\n  line-height: 1.3;\n}\n/* Ensure certain elements are never larger than the slide itself */\n.reveal img,\n.reveal video,\n.reveal iframe {\n  max-width: 95%;\n  max-height: 95%;\n}\n.reveal strong,\n.reveal b {\n  font-weight: bold;\n}\n.reveal em {\n  font-style: italic;\n}\n.reveal ol,\n.reveal dl,\n.reveal ul {\n  display: inline-block;\n  text-align: left;\n  margin: 0 0 0 1em;\n}\n.reveal ol {\n  list-style-type: decimal;\n}\n.reveal ul {\n  list-style-type: disc;\n}\n.reveal ul ul {\n  list-style-type: square;\n}\n.reveal ul ul ul {\n  list-style-type: circle;\n}\n.reveal ul ul,\n.reveal ul ol,\n.reveal ol ol,\n.reveal ol ul {\n  display: block;\n  margin-left: 40px;\n}\n.reveal dt {\n  font-weight: bold;\n}\n.reveal dd {\n  margin-left: 40px;\n}\n.reveal q,\n.reveal blockquote {\n  quotes: none;\n}\n.reveal blockquote {\n  display: block;\n  position: relative;\n  width: 70%;\n  margin: 20px auto;\n  padding: 5px;\n  font-style: italic;\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n}\n.reveal blockquote p:first-child,\n.reveal blockquote p:last-child {\n  display: inline-block;\n}\n.reveal q {\n  font-style: italic;\n}\n.reveal pre {\n  display: block;\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n  text-align: left;\n  font-size: 0.55em;\n  font-family: monospace;\n  line-height: 1.2em;\n  word-wrap: break-word;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);\n}\n.reveal code {\n  font-family: monospace;\n}\n.reveal pre code {\n  display: block;\n  padding: 5px;\n  overflow: auto;\n  max-height: 400px;\n  word-wrap: normal;\n  background: #3F3F3F;\n  color: #DCDCDC;\n}\n.reveal table {\n  margin: auto;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.reveal table th {\n  font-weight: bold;\n}\n.reveal table th,\n.reveal table td {\n  text-align: left;\n  padding: 0.2em 0.5em 0.2em 0.5em;\n  border-bottom: 1px solid;\n}\n.reveal table th[align=\"center\"],\n.reveal table td[align=\"center\"] {\n  text-align: center;\n}\n.reveal table th[align=\"right\"],\n.reveal table td[align=\"right\"] {\n  text-align: right;\n}\n.reveal table tr:last-child td {\n  border-bottom: none;\n}\n.reveal sup {\n  vertical-align: super;\n}\n.reveal sub {\n  vertical-align: sub;\n}\n.reveal small {\n  display: inline-block;\n  font-size: 0.6em;\n  line-height: 1.2em;\n  vertical-align: top;\n}\n.reveal small * {\n  vertical-align: top;\n}\n/*********************************************\n * LINKS\n *********************************************/\n.reveal a {\n  color: #00008B;\n  text-decoration: none;\n  -webkit-transition: color 0.15s ease;\n  -moz-transition: color 0.15s ease;\n  transition: color 0.15s ease;\n}\n.reveal a:hover {\n  color: #0000f1;\n  text-shadow: none;\n  border: none;\n}\n.reveal .roll span:after {\n  color: #fff;\n  background: #00003f;\n}\n/*********************************************\n * IMAGES\n *********************************************/\n.reveal section img {\n  margin: 15px 0px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 4px solid #000;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.reveal a img {\n  -webkit-transition: all 0.15s linear;\n  -moz-transition: all 0.15s linear;\n  transition: all 0.15s linear;\n}\n.reveal a:hover img {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: #00008B;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);\n}\n/*********************************************\n * NAVIGATION CONTROLS\n *********************************************/\n.reveal .controls div.navigate-left,\n.reveal .controls div.navigate-left.enabled {\n  border-right-color: #00008B;\n}\n.reveal .controls div.navigate-right,\n.reveal .controls div.navigate-right.enabled {\n  border-left-color: #00008B;\n}\n.reveal .controls div.navigate-up,\n.reveal .controls div.navigate-up.enabled {\n  border-bottom-color: #00008B;\n}\n.reveal .controls div.navigate-down,\n.reveal .controls div.navigate-down.enabled {\n  border-top-color: #00008B;\n}\n.reveal .controls div.navigate-left.enabled:hover {\n  border-right-color: #0000f1;\n}\n.reveal .controls div.navigate-right.enabled:hover {\n  border-left-color: #0000f1;\n}\n.reveal .controls div.navigate-up.enabled:hover {\n  border-bottom-color: #0000f1;\n}\n.reveal .controls div.navigate-down.enabled:hover {\n  border-top-color: #0000f1;\n}\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  background: rgba(0, 0, 0, 0.2);\n}\n.reveal .progress span {\n  background: #00008B;\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n/*********************************************\n * SLIDE NUMBER\n *********************************************/\n.reveal .slide-number {\n  color: #00008B;\n}\n/* http://prismjs.com/download.html?themes=prism-coy&languages=r&plugins=line-highlight+line-numbers+show-invisibles+autolinker+wpd+file-highlight+show-language+highlight-keywords */\n/**\n * prism.js Coy theme for JavaScript, CoffeeScript, CSS and HTML\n * Based on https://github.com/tshedor/workshop-wp-theme (Example: http://workshop.kansan.com/category/sessions/basics or http://workshop.timshedor.com/category/sessions/basics);\n * @author Tim  Shedor\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: black;\n  font-family: Consolas, Monaco, 'Andale Mono', monospace;\n  direction: ltr;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -moz-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none;\n}\n/* Code blocks */\npre[class*=\"language-\"] {\n  position: relative;\n  margin: .5em 0;\n  -webkit-box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  -moz-box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  box-shadow: -1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;\n  border-left: 10px solid #358ccb;\n  background-color: #fdfdfd;\n  background-image: -webkit-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -moz-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -ms-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: -o-linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-image: linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%);\n  background-size: 3em 3em;\n  background-origin: content-box;\n  overflow: visible;\n  max-height: 30em;\n}\ncode[class*=\"language\"] {\n  max-height: inherit;\n  height: 100%;\n  padding: 0 1em;\n  display: block;\n  overflow: auto;\n}\n/* Margin bottom to accomodate shadow */\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background-color: #fdfdfd;\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  margin-bottom: 1em;\n}\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  position: relative;\n  padding: .2em;\n  -webkit-border-radius: 0.3em;\n  -moz-border-radius: 0.3em;\n  -ms-border-radius: 0.3em;\n  -o-border-radius: 0.3em;\n  border-radius: 0.3em;\n  color: #c92c2c;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\npre[class*=\"language-\"]:before,\npre[class*=\"language-\"]:after {\n  content: '';\n  z-index: -2;\n  display: block;\n  position: absolute;\n  bottom: 0.75em;\n  left: 0.18em;\n  width: 40%;\n  height: 20%;\n  -webkit-box-shadow: 0px 13px 8px #979797;\n  -moz-box-shadow: 0px 13px 8px #979797;\n  box-shadow: 0px 13px 8px #979797;\n  -webkit-transform: rotate(-2deg);\n  -moz-transform: rotate(-2deg);\n  -ms-transform: rotate(-2deg);\n  -o-transform: rotate(-2deg);\n  transform: rotate(-2deg);\n}\n:not(pre) > code[class*=\"language-\"]:after,\npre[class*=\"language-\"]:after {\n  right: 0.75em;\n  left: auto;\n  -webkit-transform: rotate(2deg);\n  -moz-transform: rotate(2deg);\n  -ms-transform: rotate(2deg);\n  -o-transform: rotate(2deg);\n  transform: rotate(2deg);\n}\n.token.comment,\n.token.block-comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: #7D8B99;\n}\n.token.punctuation {\n  color: #5F6364;\n}\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.function-name,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #c92c2c;\n}\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.function,\n.token.builtin,\n.token.inserted {\n  color: #2f9c0a;\n}\n.token.operator,\n.token.entity,\n.token.url,\n.token.variable {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n.token.atrule,\n.token.attr-value,\n.token.keyword,\n.token.class-name {\n  color: #1990b8;\n}\n.token.regex,\n.token.important {\n  color: #e90;\n}\n.language-css .token.string,\n.style .token.string {\n  color: #a67f59;\n  background: rgba(255, 255, 255, 0.5);\n}\n.token.important {\n  font-weight: normal;\n}\n.token.bold {\n  font-weight: bold;\n}\n.token.italic {\n  font-style: italic;\n}\n.token.entity {\n  cursor: help;\n}\n.namespace {\n  opacity: .7;\n}\n@media screen and (max-width: 767px) {\n  pre[class*=\"language-\"]:before,\n  pre[class*=\"language-\"]:after {\n    bottom: 14px;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n  }\n}\n/* Plugin styles */\n.token.tab:not(:empty):before,\n.token.cr:before,\n.token.lf:before {\n  color: #e0d7d1;\n}\n/* Plugin styles: Line Numbers */\npre[class*=\"language-\"].line-numbers {\n  padding-left: 0;\n}\npre[class*=\"language-\"].line-numbers code {\n  padding-left: 3.8em;\n}\npre[class*=\"language-\"].line-numbers .line-numbers-rows {\n  left: 0;\n}\n/* Plugin styles: Line Highlight */\npre[class*=\"language-\"][data-line] {\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-left: 0;\n}\npre[data-line] code {\n  position: relative;\n  padding-left: 4em;\n}\npre .line-highlight {\n  margin-top: 0;\n}\npre[data-line] {\n  position: relative;\n  padding: 1em 0 1em 3em;\n}\n.line-highlight {\n  position: absolute;\n  left: 0;\n  right: 0;\n  padding: inherit 0;\n  margin-top: 1em;\n  /* Same as .prism’s padding-top */\n  background: hsla(24, 20%, 50%,.08);\n  background: -moz-linear-gradient(left, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n  background: -webkit-linear-gradient(left, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n  background: -o-linear-gradient(left, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n  background: linear-gradient(left, hsla(24, 20%, 50%,.1) 70%, hsla(24, 20%, 50%,0));\n  pointer-events: none;\n  line-height: inherit;\n  white-space: pre;\n}\n.line-highlight:before,\n.line-highlight[data-end]:after {\n  content: attr(data-start);\n  position: absolute;\n  top: .4em;\n  left: .6em;\n  min-width: 1em;\n  padding: 0 .5em;\n  background-color: hsla(24, 20%, 50%,.4);\n  color: hsl(24, 20%, 95%);\n  font: bold 65%/1.5 sans-serif;\n  text-align: center;\n  vertical-align: .3em;\n  border-radius: 999px;\n  text-shadow: none;\n  box-shadow: 0 1px white;\n}\n.line-highlight[data-end]:after {\n  content: attr(data-end);\n  top: auto;\n  bottom: .4em;\n}\npre.line-numbers {\n  position: relative;\n  padding-left: 3.8em;\n  counter-reset: linenumber;\n}\npre.line-numbers > code {\n  position: relative;\n}\n.line-numbers .line-numbers-rows {\n  position: absolute;\n  pointer-events: none;\n  top: 0;\n  font-size: 100%;\n  left: -3.8em;\n  width: 3em;\n  /* works for line-numbers below 1000 lines */\n  letter-spacing: -1px;\n  border-right: 1px solid #999;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.line-numbers-rows > span {\n  pointer-events: none;\n  display: block;\n  counter-increment: linenumber;\n}\n.line-numbers-rows > span:before {\n  content: counter(linenumber);\n  color: #999;\n  display: block;\n  padding-right: 0.8em;\n  text-align: right;\n}\n.token.tab:not(:empty):before,\n.token.cr:before,\n.token.lf:before {\n  color: hsl(24, 20%, 85%);\n}\n.token.tab:not(:empty):before {\n  content: '\\21E5';\n}\n.token.cr:before {\n  content: '\\240D';\n}\n.token.crlf:before {\n  content: '\\240D\\240A';\n}\n.token.lf:before {\n  content: '\\240A';\n}\n.token a {\n  color: inherit;\n}\ncode[class*=\"language-\"] a[href],\npre[class*=\"language-\"] a[href] {\n  cursor: help;\n  text-decoration: none;\n}\ncode[class*=\"language-\"] a[href]:hover,\npre[class*=\"language-\"] a[href]:hover {\n  cursor: help;\n  text-decoration: underline;\n}\npre[class*='language-'] {\n  position: relative;\n}\npre[class*='language-'][data-language]::before {\n  content: attr(data-language);\n  color: black;\n  background-color: #CFCFCF;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-size: 0.9em;\n  border-radius: 0 0 0 5px;\n  padding: 0 0.5em;\n  text-shadow: none;\n}\n"; (require("browserify-css").createStyle(css, { "href": "src/styles/ss.css"})); module.exports = css;
},{"browserify-css":1}]},{},[6])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1jc3MvYnJvd3Nlci5qcyIsInNyYy9jb21wb25lbnRzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanMiLCJzcmMvY29tcG9uZW50cy9wcmlzbS9wcmlzbS5qcyIsInNyYy9jb21wb25lbnRzL3JldmVhbC5qcy9qcy9yZXZlYWwuanMiLCJzcmMvY29tcG9uZW50cy9yZmlkZGxlSGVscGVyL3JmaWRkbGVIZWxwZXIubWluLmpzIiwic3JjL3NjcmlwdHMvc3MuanMiLCJzcmMvc3R5bGVzL3NzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzU1SUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzVGQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBicm93c2VyIGZpZWxkLCBjaGVjayBvdXQgdGhlIGJyb3dzZXIgZmllbGQgYXQgaHR0cHM6Ly9naXRodWIuY29tL3N1YnN0YWNrL2Jyb3dzZXJpZnktaGFuZGJvb2sjYnJvd3Nlci1maWVsZC5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgLy8gQ3JlYXRlIGEgPGxpbms+IHRhZyB3aXRoIG9wdGlvbmFsIGRhdGEgYXR0cmlidXRlc1xuICAgIGNyZWF0ZUxpbms6IGZ1bmN0aW9uKGhyZWYsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAoICEgYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0sXG4gICAgLy8gQ3JlYXRlIGEgPHN0eWxlPiB0YWcgd2l0aCBvcHRpb25hbCBkYXRhIGF0dHJpYnV0ZXNcbiAgICBjcmVhdGVTdHlsZTogZnVuY3Rpb24oY3NzVGV4dCwgYXR0cmlidXRlcykge1xuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSxcbiAgICAgICAgICAgIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCAhIGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgc3R5bGUuc2V0QXR0cmlidXRlKCdkYXRhLScgKyBrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHN0eWxlLnNoZWV0KSB7IC8vIGZvciBqc2RvbSBhbmQgSUU5K1xuICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzVGV4dDtcbiAgICAgICAgICAgIHN0eWxlLnNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3R5bGUuc3R5bGVTaGVldCkgeyAvLyBmb3IgSUU4IGFuZCBiZWxvd1xuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICAgICAgICB9IGVsc2UgeyAvLyBmb3IgQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpXG4gICAgICAgICAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3NUZXh0KSk7XG4gICAgICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCIvKiEgalF1ZXJ5IHYyLjEuNCB8IChjKSAyMDA1LCAyMDE1IGpRdWVyeSBGb3VuZGF0aW9uLCBJbmMuIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWMuc2xpY2UsZT1jLmNvbmNhdCxmPWMucHVzaCxnPWMuaW5kZXhPZixoPXt9LGk9aC50b1N0cmluZyxqPWguaGFzT3duUHJvcGVydHksaz17fSxsPWEuZG9jdW1lbnQsbT1cIjIuMS40XCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZC5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTpkLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZWFjaCh0aGlzLGEsYil9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhkLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcihudWxsKX0scHVzaDpmLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sbi5leHRlbmQ9bi5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxuLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2k+aDtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYobi5pc1BsYWluT2JqZWN0KGQpfHwoZT1uLmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJm4uaXNBcnJheShjKT9jOltdKTpmPWMmJm4uaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09bi5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LG4uZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKG0rTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09bi50eXBlKGEpfSxpc0FycmF5OkFycmF5LmlzQXJyYXksaXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3JldHVybiFuLmlzQXJyYXkoYSkmJmEtcGFyc2VGbG9hdChhKSsxPj0wfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCIhPT1uLnR5cGUoYSl8fGEubm9kZVR5cGV8fG4uaXNXaW5kb3coYSk/ITE6YS5jb25zdHJ1Y3RvciYmIWouY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIik/ITE6ITB9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aFtpLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGM9ZXZhbDthPW4udHJpbShhKSxhJiYoMT09PWEuaW5kZXhPZihcInVzZSBzdHJpY3RcIik/KGI9bC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIudGV4dD1hLGwuaGVhZC5hcHBlbmRDaGlsZChiKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpKTpjKGEpKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UocCxcIm1zLVwiKS5yZXBsYWNlKHEscil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT0wLGY9YS5sZW5ndGgsZz1zKGEpO2lmKGMpe2lmKGcpe2Zvcig7Zj5lO2UrKylpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGlmKGcpe2Zvcig7Zj5lO2UrKylpZihkPWIuY2FsbChhW2VdLGUsYVtlXSksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuY2FsbChhW2VdLGUsYVtlXSksZD09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShvLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHMoT2JqZWN0KGEpKT9uLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmYuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTpnLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZj0wLGc9YS5sZW5ndGgsaD1zKGEpLGk9W107aWYoaClmb3IoO2c+ZjtmKyspZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7ZWxzZSBmb3IoZiBpbiBhKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO3JldHVybiBlLmFwcGx5KFtdLGkpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksbi5pc0Z1bmN0aW9uKGEpPyhlPWQuY2FsbChhcmd1bWVudHMsMiksZj1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZS5jb25jYXQoZC5jYWxsKGFyZ3VtZW50cykpKX0sZi5ndWlkPWEuZ3VpZD1hLmd1aWR8fG4uZ3VpZCsrLGYpOnZvaWQgMH0sbm93OkRhdGUubm93LHN1cHBvcnQ6a30pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtoW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPVwibGVuZ3RoXCJpbiBhJiZhLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOjE9PT1hLm5vZGVUeXBlJiZiPyEwOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1PVwic2l6emxlXCIrMSpuZXcgRGF0ZSx2PWEuZG9jdW1lbnQsdz0wLHg9MCx5PWhhKCksej1oYSgpLEE9aGEoKSxCPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9PT1iJiYobD0hMCksMH0sQz0xPDwzMSxEPXt9Lmhhc093blByb3BlcnR5LEU9W10sRj1FLnBvcCxHPUUucHVzaCxIPUUucHVzaCxJPUUuc2xpY2UsSj1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylpZihhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0sSz1cImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsTD1cIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsTT1cIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLE49TS5yZXBsYWNlKFwid1wiLFwidyNcIiksTz1cIlxcXFxbXCIrTCtcIiooXCIrTStcIikoPzpcIitMK1wiKihbKl4kfCF+XT89KVwiK0wrXCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIitOK1wiKSl8KVwiK0wrXCIqXFxcXF1cIixQPVwiOihcIitNK1wiKSg/OlxcXFwoKCgnKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfCgoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIitPK1wiKSopfC4qKVxcXFwpfClcIixRPW5ldyBSZWdFeHAoTCtcIitcIixcImdcIiksUj1uZXcgUmVnRXhwKFwiXlwiK0wrXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiK0wrXCIrJFwiLFwiZ1wiKSxTPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiosXCIrTCtcIipcIiksVD1uZXcgUmVnRXhwKFwiXlwiK0wrXCIqKFs+K35dfFwiK0wrXCIpXCIrTCtcIipcIiksVT1uZXcgUmVnRXhwKFwiPVwiK0wrXCIqKFteXFxcXF0nXFxcIl0qPylcIitMK1wiKlxcXFxdXCIsXCJnXCIpLFY9bmV3IFJlZ0V4cChQKSxXPW5ldyBSZWdFeHAoXCJeXCIrTitcIiRcIiksWD17SUQ6bmV3IFJlZ0V4cChcIl4jKFwiK00rXCIpXCIpLENMQVNTOm5ldyBSZWdFeHAoXCJeXFxcXC4oXCIrTStcIilcIiksVEFHOm5ldyBSZWdFeHAoXCJeKFwiK00ucmVwbGFjZShcIndcIixcIncqXCIpK1wiKVwiKSxBVFRSOm5ldyBSZWdFeHAoXCJeXCIrTyksUFNFVURPOm5ldyBSZWdFeHAoXCJeXCIrUCksQ0hJTEQ6bmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIrTCtcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiK0wrXCIqKD86KFsrLV18KVwiK0wrXCIqKFxcXFxkKyl8KSlcIitMK1wiKlxcXFwpfClcIixcImlcIiksYm9vbDpuZXcgUmVnRXhwKFwiXig/OlwiK0srXCIpJFwiLFwiaVwiKSxuZWVkc0NvbnRleHQ6bmV3IFJlZ0V4cChcIl5cIitMK1wiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIitMK1wiKigoPzotXFxcXGQpP1xcXFxkKilcIitMK1wiKlxcXFwpfCkoPz1bXi1dfCQpXCIsXCJpXCIpfSxZPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksWj0vXmhcXGQkL2ksJD0vXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLF89L14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sYWE9L1srfl0vLGJhPS8nfFxcXFwvZyxjYT1uZXcgUmVnRXhwKFwiXFxcXFxcXFwoW1xcXFxkYS1mXXsxLDZ9XCIrTCtcIj98KFwiK0wrXCIpfC4pXCIsXCJpZ1wiKSxkYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9XCIweFwiK2ItNjU1MzY7cmV0dXJuIGQhPT1kfHxjP2I6MD5kP1N0cmluZy5mcm9tQ2hhckNvZGUoZCs2NTUzNik6U3RyaW5nLmZyb21DaGFyQ29kZShkPj4xMHw1NTI5NiwxMDIzJmR8NTYzMjApfSxlYT1mdW5jdGlvbigpe20oKX07dHJ5e0guYXBwbHkoRT1JLmNhbGwodi5jaGlsZE5vZGVzKSx2LmNoaWxkTm9kZXMpLEVbdi5jaGlsZE5vZGVzLmxlbmd0aF0ubm9kZVR5cGV9Y2F0Y2goZmEpe0g9e2FwcGx5OkUubGVuZ3RoP2Z1bmN0aW9uKGEsYil7Ry5hcHBseShhLEkuY2FsbChiKSl9OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5sZW5ndGgsZD0wO3doaWxlKGFbYysrXT1iW2QrK10pO2EubGVuZ3RoPWMtMX19fWZ1bmN0aW9uIGdhKGEsYixkLGUpe3ZhciBmLGgsaixrLGwsbyxyLHMsdyx4O2lmKChiP2Iub3duZXJEb2N1bWVudHx8Yjp2KSE9PW4mJm0oYiksYj1ifHxuLGQ9ZHx8W10saz1iLm5vZGVUeXBlLFwic3RyaW5nXCIhPXR5cGVvZiBhfHwhYXx8MSE9PWsmJjkhPT1rJiYxMSE9PWspcmV0dXJuIGQ7aWYoIWUmJnApe2lmKDExIT09ayYmKGY9Xy5leGVjKGEpKSlpZihqPWZbMV0pe2lmKDk9PT1rKXtpZihoPWIuZ2V0RWxlbWVudEJ5SWQoaiksIWh8fCFoLnBhcmVudE5vZGUpcmV0dXJuIGQ7aWYoaC5pZD09PWopcmV0dXJuIGQucHVzaChoKSxkfWVsc2UgaWYoYi5vd25lckRvY3VtZW50JiYoaD1iLm93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaikpJiZ0KGIsaCkmJmguaWQ9PT1qKXJldHVybiBkLnB1c2goaCksZH1lbHNle2lmKGZbMl0pcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpKSxkO2lmKChqPWZbM10pJiZjLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpcmV0dXJuIEguYXBwbHkoZCxiLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaikpLGR9aWYoYy5xc2EmJighcXx8IXEudGVzdChhKSkpe2lmKHM9cj11LHc9Yix4PTEhPT1rJiZhLDE9PT1rJiZcIm9iamVjdFwiIT09Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKXtvPWcoYSksKHI9Yi5nZXRBdHRyaWJ1dGUoXCJpZFwiKSk/cz1yLnJlcGxhY2UoYmEsXCJcXFxcJCZcIik6Yi5zZXRBdHRyaWJ1dGUoXCJpZFwiLHMpLHM9XCJbaWQ9J1wiK3MrXCInXSBcIixsPW8ubGVuZ3RoO3doaWxlKGwtLSlvW2xdPXMrcmEob1tsXSk7dz1hYS50ZXN0KGEpJiZwYShiLnBhcmVudE5vZGUpfHxiLHg9by5qb2luKFwiLFwiKX1pZih4KXRyeXtyZXR1cm4gSC5hcHBseShkLHcucXVlcnlTZWxlY3RvckFsbCh4KSksZH1jYXRjaCh5KXt9ZmluYWxseXtyfHxiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFIsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gaGEoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBpYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGphKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBrYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9YS5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGxhKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmKH5iLnNvdXJjZUluZGV4fHxDKS0ofmEuc291cmNlSW5kZXh8fEMpO2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBtYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG5hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGlhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGlhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gcGEoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9Z2Euc3VwcG9ydD17fSxmPWdhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYj9cIkhUTUxcIiE9PWIubm9kZU5hbWU6ITF9LG09Z2Euc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPWcuZG9jdW1lbnRFbGVtZW50LGU9Zy5kZWZhdWx0VmlldyxlJiZlIT09ZS50b3AmJihlLmFkZEV2ZW50TGlzdGVuZXI/ZS5hZGRFdmVudExpc3RlbmVyKFwidW5sb2FkXCIsZWEsITEpOmUuYXR0YWNoRXZlbnQmJmUuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGVhKSkscD0hZihnKSxjLmF0dHJpYnV0ZXM9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9amEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQoZy5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPSQudGVzdChnLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFnLmdldEVsZW1lbnRzQnlOYW1lfHwhZy5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjJiZjLnBhcmVudE5vZGU/W2NdOltdfX0sZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGNhLGRhKTtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKFwiaWRcIik9PT1ifX0pOihkZWxldGUgZC5maW5kLklELGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShjYSxkYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3ZhciBjPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZU5vZGUmJmEuZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO3JldHVybiBjJiZjLnZhbHVlPT09Yn19KSxkLmZpbmQuVEFHPWMuZ2V0RWxlbWVudHNCeVRhZ05hbWU/ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2YgYi5nZXRFbGVtZW50c0J5VGFnTmFtZT9iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpOmMucXNhP2IucXVlcnlTZWxlY3RvckFsbChhKTp2b2lkIDB9OmZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPTAsZj1iLmdldEVsZW1lbnRzQnlUYWdOYW1lKGEpO2lmKFwiKlwiPT09YSl7d2hpbGUoYz1mW2UrK10pMT09PWMubm9kZVR5cGUmJmQucHVzaChjKTtyZXR1cm4gZH1yZXR1cm4gZn0sZC5maW5kLkNMQVNTPWMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmZnVuY3Rpb24oYSxiKXtyZXR1cm4gcD9iLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSk6dm9pZCAwfSxyPVtdLHE9W10sKGMucXNhPSQudGVzdChnLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGphKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcZl0nIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitMK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitMK1wiKig/OnZhbHVlfFwiK0srXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksamEoZnVuY3Rpb24oYSl7dmFyIGI9Zy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0wrXCIqWypeJHwhfl0/PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGh8fHEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj0kLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmphKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCJkaXZcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixQKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPSQudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fCQudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PWd8fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09Z3x8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9KKGssYSktSihrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGg9W2FdLGk9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PWc/LTE6Yj09PWc/MTplPy0xOmY/MTprP0ooayxhKS1KKGssYik6MDtpZihlPT09ZilyZXR1cm4gbGEoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpaC51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSlpLnVuc2hpZnQoYyk7d2hpbGUoaFtkXT09PWlbZF0pZCsrO3JldHVybiBkP2xhKGhbZF0saVtkXSk6aFtkXT09PXY/LTE6aVtkXT09PXY/MTowfSxnKTpufSxnYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGdhKGEsbnVsbCxudWxsLGIpfSxnYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoVSxcIj0nJDEnXVwiKSwhKCFjLm1hdGNoZXNTZWxlY3Rvcnx8IXB8fHImJnIudGVzdChiKXx8cSYmcS50ZXN0KGIpKSl0cnl7dmFyIGQ9cy5jYWxsKGEsYik7aWYoZHx8Yy5kaXNjb25uZWN0ZWRNYXRjaHx8YS5kb2N1bWVudCYmMTEhPT1hLmRvY3VtZW50Lm5vZGVUeXBlKXJldHVybiBkfWNhdGNoKGUpe31yZXR1cm4gZ2EoYixuLG51bGwsW2FdKS5sZW5ndGg+MH0sZ2EuY29udGFpbnM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4oYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksdChhLGIpfSxnYS5hdHRyPWZ1bmN0aW9uKGEsYil7KGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpO3ZhciBlPWQuYXR0ckhhbmRsZVtiLnRvTG93ZXJDYXNlKCldLGY9ZSYmRC5jYWxsKGQuYXR0ckhhbmRsZSxiLnRvTG93ZXJDYXNlKCkpP2UoYSxiLCFwKTp2b2lkIDA7cmV0dXJuIHZvaWQgMCE9PWY/ZjpjLmF0dHJpYnV0ZXN8fCFwP2EuZ2V0QXR0cmlidXRlKGIpOihmPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJmYuc3BlY2lmaWVkP2YudmFsdWU6bnVsbH0sZ2EuZXJyb3I9ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIrYSl9LGdhLnVuaXF1ZVNvcnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZD1bXSxlPTAsZj0wO2lmKGw9IWMuZGV0ZWN0RHVwbGljYXRlcyxrPSFjLnNvcnRTdGFibGUmJmEuc2xpY2UoMCksYS5zb3J0KEIpLGwpe3doaWxlKGI9YVtmKytdKWI9PT1hW2ZdJiYoZT1kLnB1c2goZikpO3doaWxlKGUtLSlhLnNwbGljZShkW2VdLDEpfXJldHVybiBrPW51bGwsYX0sZT1nYS5nZXRUZXh0PWZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZj1hLm5vZGVUeXBlO2lmKGYpe2lmKDE9PT1mfHw5PT09Znx8MTE9PT1mKXtpZihcInN0cmluZ1wiPT10eXBlb2YgYS50ZXh0Q29udGVudClyZXR1cm4gYS50ZXh0Q29udGVudDtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpYys9ZShhKX1lbHNlIGlmKDM9PT1mfHw0PT09ZilyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1lKGIpO3JldHVybiBjfSxkPWdhLnNlbGVjdG9ycz17Y2FjaGVMZW5ndGg6NTAsY3JlYXRlUHNldWRvOmlhLG1hdGNoOlgsYXR0ckhhbmRsZTp7fSxmaW5kOnt9LHJlbGF0aXZlOntcIj5cIjp7ZGlyOlwicGFyZW50Tm9kZVwiLGZpcnN0OiEwfSxcIiBcIjp7ZGlyOlwicGFyZW50Tm9kZVwifSxcIitcIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCIsZmlyc3Q6ITB9LFwiflwiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIn19LHByZUZpbHRlcjp7QVRUUjpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnJlcGxhY2UoY2EsZGEpLGFbM109KGFbM118fGFbNF18fGFbNV18fFwiXCIpLnJlcGxhY2UoY2EsZGEpLFwifj1cIj09PWFbMl0mJihhWzNdPVwiIFwiK2FbM10rXCIgXCIpLGEuc2xpY2UoMCw0KX0sQ0hJTEQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS50b0xvd2VyQ2FzZSgpLFwibnRoXCI9PT1hWzFdLnNsaWNlKDAsMyk/KGFbM118fGdhLmVycm9yKGFbMF0pLGFbNF09KyhhWzRdP2FbNV0rKGFbNl18fDEpOjIqKFwiZXZlblwiPT09YVszXXx8XCJvZGRcIj09PWFbM10pKSxhWzVdPSsoYVs3XSthWzhdfHxcIm9kZFwiPT09YVszXSkpOmFbM10mJmdhLmVycm9yKGFbMF0pLGF9LFBTRVVETzpmdW5jdGlvbihhKXt2YXIgYixjPSFhWzZdJiZhWzJdO3JldHVybiBYLkNISUxELnRlc3QoYVswXSk/bnVsbDooYVszXT9hWzJdPWFbNF18fGFbNV18fFwiXCI6YyYmVi50ZXN0KGMpJiYoYj1nKGMsITApKSYmKGI9Yy5pbmRleE9mKFwiKVwiLGMubGVuZ3RoLWIpLWMubGVuZ3RoKSYmKGFbMF09YVswXS5zbGljZSgwLGIpLGFbMl09Yy5zbGljZSgwLGIpKSxhLnNsaWNlKDAsMykpfX0sZmlsdGVyOntUQUc6ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGNhLGRhKS50b0xvd2VyQ2FzZSgpO3JldHVyblwiKlwiPT09YT9mdW5jdGlvbigpe3JldHVybiEwfTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yn19LENMQVNTOmZ1bmN0aW9uKGEpe3ZhciBiPXlbYStcIiBcIl07cmV0dXJuIGJ8fChiPW5ldyBSZWdFeHAoXCIoXnxcIitMK1wiKVwiK2ErXCIoXCIrTCtcInwkKVwiKSkmJnkoYSxmdW5jdGlvbihhKXtyZXR1cm4gYi50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhLmNsYXNzTmFtZSYmYS5jbGFzc05hbWV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIil9KX0sQVRUUjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe3ZhciBlPWdhLmF0dHIoZCxhKTtyZXR1cm4gbnVsbD09ZT9cIiE9XCI9PT1iOmI/KGUrPVwiXCIsXCI9XCI9PT1iP2U9PT1jOlwiIT1cIj09PWI/ZSE9PWM6XCJePVwiPT09Yj9jJiYwPT09ZS5pbmRleE9mKGMpOlwiKj1cIj09PWI/YyYmZS5pbmRleE9mKGMpPi0xOlwiJD1cIj09PWI/YyYmZS5zbGljZSgtYy5sZW5ndGgpPT09YzpcIn49XCI9PT1iPyhcIiBcIitlLnJlcGxhY2UoUSxcIiBcIikrXCIgXCIpLmluZGV4T2YoYyk+LTE6XCJ8PVwiPT09Yj9lPT09Y3x8ZS5zbGljZSgwLGMubGVuZ3RoKzEpPT09YytcIi1cIjohMSk6ITB9fSxDSElMRDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPVwibnRoXCIhPT1hLnNsaWNlKDAsMyksZz1cImxhc3RcIiE9PWEuc2xpY2UoLTQpLGg9XCJvZi10eXBlXCI9PT1iO3JldHVybiAxPT09ZCYmMD09PWU/ZnVuY3Rpb24oYSl7cmV0dXJuISFhLnBhcmVudE5vZGV9OmZ1bmN0aW9uKGIsYyxpKXt2YXIgaixrLGwsbSxuLG8scD1mIT09Zz9cIm5leHRTaWJsaW5nXCI6XCJwcmV2aW91c1NpYmxpbmdcIixxPWIucGFyZW50Tm9kZSxyPWgmJmIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxzPSFpJiYhaDtpZihxKXtpZihmKXt3aGlsZShwKXtsPWI7d2hpbGUobD1sW3BdKWlmKGg/bC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bC5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXtrPXFbdV18fChxW3VdPXt9KSxqPWtbYV18fFtdLG49alswXT09PXcmJmpbMV0sbT1qWzBdPT09dyYmalsyXSxsPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShsPSsrbiYmbCYmbFtwXXx8KG09bj0wKXx8by5wb3AoKSlpZigxPT09bC5ub2RlVHlwZSYmKyttJiZsPT09Yil7a1thXT1bdyxuLG1dO2JyZWFrfX1lbHNlIGlmKHMmJihqPShiW3VdfHwoYlt1XT17fSkpW2FdKSYmalswXT09PXcpbT1qWzFdO2Vsc2Ugd2hpbGUobD0rK24mJmwmJmxbcF18fChtPW49MCl8fG8ucG9wKCkpaWYoKGg/bC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bC5ub2RlVHlwZSkmJisrbSYmKHMmJigobFt1XXx8KGxbdV09e30pKVthXT1bdyxtXSksbD09PWIpKWJyZWFrO3JldHVybiBtLT1lLG09PT1kfHxtJWQ9PT0wJiZtL2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxnYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9pYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SihhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDppYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUixcIiQxXCIpKTtyZXR1cm4gZFt1XT9pYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZ2EoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczppYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoY2EsZGEpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBXLnRlc3QoYXx8XCJcIil8fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoY2EsZGEpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMX0sZGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMH0sY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWi50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gWS50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0Om9hKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpvYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6b2EoZnVuY3Rpb24oYSxiLGMpe3JldHVyblswPmM/YytiOmNdfSksZXZlbjpvYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpvYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0Om9hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6b2EoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW5hKGIpO2Z1bmN0aW9uIHFhKCl7fXFhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcWEsZz1nYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpeyghY3x8KGU9Uy5leGVjKGgpKSkmJihlJiYoaD1oLnNsaWNlKGVbMF0ubGVuZ3RoKXx8aCksaS5wdXNoKGY9W10pKSxjPSExLChlPVQuZXhlYyhoKSkmJihjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTplWzBdLnJlcGxhY2UoUixcIiBcIil9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtmb3IoZyBpbiBkLmZpbHRlcikhKGU9WFtnXS5leGVjKGgpKXx8altnXSYmIShlPWpbZ10oZSkpfHwoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZyxtYXRjaGVzOmV9KSxoPWguc2xpY2UoYy5sZW5ndGgpKTtpZighYylicmVha31yZXR1cm4gYj9oLmxlbmd0aDpoP2dhLmVycm9yKGEpOnooYSxpKS5zbGljZSgwKX07ZnVuY3Rpb24gcmEoYSl7Zm9yKHZhciBiPTAsYz1hLmxlbmd0aCxkPVwiXCI7Yz5iO2IrKylkKz1hW2JdLnZhbHVlO3JldHVybiBkfWZ1bmN0aW9uIHNhKGEsYixjKXt2YXIgZD1iLmRpcixlPWMmJlwicGFyZW50Tm9kZVwiPT09ZCxmPXgrKztyZXR1cm4gYi5maXJzdD9mdW5jdGlvbihiLGMsZil7d2hpbGUoYj1iW2RdKWlmKDE9PT1iLm5vZGVUeXBlfHxlKXJldHVybiBhKGIsYyxmKX06ZnVuY3Rpb24oYixjLGcpe3ZhciBoLGksaj1bdyxmXTtpZihnKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxlKSYmYShiLGMsZykpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpe2lmKGk9Ylt1XXx8KGJbdV09e30pLChoPWlbZF0pJiZoWzBdPT09dyYmaFsxXT09PWYpcmV0dXJuIGpbMl09aFsyXTtpZihpW2RdPWosalsyXT1hKGIsYyxnKSlyZXR1cm4hMH19fWZ1bmN0aW9uIHRhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHVhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspZ2EoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHZhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2k+aDtoKyspKGY9YVtoXSkmJighY3x8YyhmLGQsZSkpJiYoZy5wdXNoKGYpLGomJmIucHVzaChoKSk7cmV0dXJuIGd9ZnVuY3Rpb24gd2EoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9d2EoZCkpLGUmJiFlW3VdJiYoZT13YShlLGYpKSxpYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx1YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOnZhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj12YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SihmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9dmEocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkguYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHhhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz1zYShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9c2EoZnVuY3Rpb24oYSl7cmV0dXJuIEooYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2Y+aTtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bc2EodGEobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7Zj5lO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHdhKGk+MSYmdGEobSksaT4xJiZyYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFIsXCIkMVwiKSxjLGU+aSYmeGEoYS5zbGljZShpLGUpKSxmPmUmJnhhKGE9YS5zbGljZShlKSksZj5lJiZyYShhKSl9bS5wdXNoKGMpfXJldHVybiB0YShtKX1mdW5jdGlvbiB5YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxtLG8scD0wLHE9XCIwXCIscj1mJiZbXSxzPVtdLHQ9aix1PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsayksdj13Kz1udWxsPT10PzE6TWF0aC5yYW5kb20oKXx8LjEseD11Lmxlbmd0aDtmb3IoayYmKGo9ZyE9PW4mJmcpO3EhPT14JiZudWxsIT0obD11W3FdKTtxKyspe2lmKGUmJmwpe209MDt3aGlsZShvPWFbbSsrXSlpZihvKGwsZyxoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXYpfWMmJigobD0hbyYmbCkmJnAtLSxmJiZyLnB1c2gobCkpfWlmKHArPXEsYyYmcSE9PXApe209MDt3aGlsZShvPWJbbSsrXSlvKHIscyxnLGgpO2lmKGYpe2lmKHA+MCl3aGlsZShxLS0pcltxXXx8c1txXXx8KHNbcV09Ri5jYWxsKGkpKTtzPXZhKHMpfUguYXBwbHkoaSxzKSxrJiYhZiYmcy5sZW5ndGg+MCYmcCtiLmxlbmd0aD4xJiZnYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz12LGo9dCkscn07cmV0dXJuIGM/aWEoZik6Zn1yZXR1cm4gaD1nYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj14YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEseWEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWdhLnNlbGVjdD1mdW5jdGlvbihhLGIsZSxmKXt2YXIgaSxqLGssbCxtLG49XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxvPSFmJiZnKGE9bi5zZWxlY3Rvcnx8YSk7aWYoZT1lfHxbXSwxPT09by5sZW5ndGgpe2lmKGo9b1swXT1vWzBdLnNsaWNlKDApLGoubGVuZ3RoPjImJlwiSURcIj09PShrPWpbMF0pLnR5cGUmJmMuZ2V0QnlJZCYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbalsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGsubWF0Y2hlc1swXS5yZXBsYWNlKGNhLGRhKSxiKXx8W10pWzBdLCFiKXJldHVybiBlO24mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGouc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9WC5uZWVkc0NvbnRleHQudGVzdChhKT8wOmoubGVuZ3RoO3doaWxlKGktLSl7aWYoaz1qW2ldLGQucmVsYXRpdmVbbD1rLnR5cGVdKWJyZWFrO2lmKChtPWQuZmluZFtsXSkmJihmPW0oay5tYXRjaGVzWzBdLnJlcGxhY2UoY2EsZGEpLGFhLnRlc3QoalswXS50eXBlKSYmcGEoYi5wYXJlbnROb2RlKXx8YikpKXtpZihqLnNwbGljZShpLDEpLGE9Zi5sZW5ndGgmJnJhKGopLCFhKXJldHVybiBILmFwcGx5KGUsZiksZTticmVha319fXJldHVybihufHxoKGEsbykpKGYsYiwhcCxlLGFhLnRlc3QoYSkmJnBhKGIucGFyZW50Tm9kZSl8fGIpLGV9LGMuc29ydFN0YWJsZT11LnNwbGl0KFwiXCIpLnNvcnQoQikuam9pbihcIlwiKT09PXUsYy5kZXRlY3REdXBsaWNhdGVzPSEhbCxtKCksYy5zb3J0RGV0YWNoZWQ9amEoZnVuY3Rpb24oYSl7cmV0dXJuIDEmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGEgaHJlZj0nIyc+PC9hPlwiLFwiI1wiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIil9KXx8a2EoXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphLmdldEF0dHJpYnV0ZShiLFwidHlwZVwiPT09Yi50b0xvd2VyQ2FzZSgpPzE6Mil9KSxjLmF0dHJpYnV0ZXMmJmphKGZ1bmN0aW9uKGEpe3JldHVybiBhLmlubmVySFRNTD1cIjxpbnB1dC8+XCIsYS5maXJzdENoaWxkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsXCJcIiksXCJcIj09PWEuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKX0pfHxrYShcInZhbHVlXCIsZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjfHxcImlucHV0XCIhPT1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/dm9pZCAwOmEuZGVmYXVsdFZhbHVlfSksamEoZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWEuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIil9KXx8a2EoSyxmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOmFbYl09PT0hMD9iLnRvTG93ZXJDYXNlKCk6KGQ9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZC5zcGVjaWZpZWQ/ZC52YWx1ZTpudWxsfSksZ2F9KGEpO24uZmluZD10LG4uZXhwcj10LnNlbGVjdG9ycyxuLmV4cHJbXCI6XCJdPW4uZXhwci5wc2V1ZG9zLG4udW5pcXVlPXQudW5pcXVlU29ydCxuLnRleHQ9dC5nZXRUZXh0LG4uaXNYTUxEb2M9dC5pc1hNTCxuLmNvbnRhaW5zPXQuY29udGFpbnM7dmFyIHU9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx2PS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx3PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiB4KGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYody50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gZy5jYWxsKGIsYSk+PTAhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5sZW5ndGgsZD1bXSxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtjPmI7YisrKWlmKG4uY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2M+YjtiKyspbi5maW5kKGEsZVtiXSxkKTtyZXR1cm4gZD10aGlzLnB1c2hTdGFjayhjPjE/bi51bmlxdWUoZCk6ZCksZC5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGR9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeCh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soeCh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEheCh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ1LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciB5LHo9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sQT1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkO2lmKCFhKXJldHVybiB0aGlzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihjPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOnouZXhlYyhhKSwhY3x8IWNbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHx5KS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihjWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoY1sxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpsLCEwKSksdi50ZXN0KGNbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGMgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tjXSk/dGhpc1tjXShiW2NdKTp0aGlzLmF0dHIoYyxiW2NdKTtyZXR1cm4gdGhpc31yZXR1cm4gZD1sLmdldEVsZW1lbnRCeUlkKGNbMl0pLGQmJmQucGFyZW50Tm9kZSYmKHRoaXMubGVuZ3RoPTEsdGhpc1swXT1kKSx0aGlzLmNvbnRleHQ9bCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgeS5yZWFkeT95LnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0EucHJvdG90eXBlPW4uZm4seT1uKGwpO3ZhciBCPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEM9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5leHRlbmQoe2RpcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHNpYmxpbmc6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9fSksbi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1uKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDtjPmE7YSsrKWlmKG4uY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz11LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZShmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/Zy5jYWxsKG4oYSksdGhpc1swXSk6Zy5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZShuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBEKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBEKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRChhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoQ1thXXx8bi51bmlxdWUoZSksQi50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEU9L1xcUysvZyxGPXt9O2Z1bmN0aW9uIEcoYSl7dmFyIGI9RlthXT17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goRSl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9GW2FdfHxHKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGYsZyxoPVtdLGk9IWEub25jZSYmW10saj1mdW5jdGlvbihsKXtmb3IoYj1hLm1lbW9yeSYmbCxjPSEwLGc9ZXx8MCxlPTAsZj1oLmxlbmd0aCxkPSEwO2gmJmY+ZztnKyspaWYoaFtnXS5hcHBseShsWzBdLGxbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2Upe2I9ITE7YnJlYWt9ZD0hMSxoJiYoaT9pLmxlbmd0aCYmaihpLnNoaWZ0KCkpOmI/aD1bXTprLmRpc2FibGUoKSl9LGs9e2FkZDpmdW5jdGlvbigpe2lmKGgpe3ZhciBjPWgubGVuZ3RoOyFmdW5jdGlvbiBnKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi50eXBlKGMpO1wiZnVuY3Rpb25cIj09PWQ/YS51bmlxdWUmJmsuaGFzKGMpfHxoLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1kJiZnKGMpfSl9KGFyZ3VtZW50cyksZD9mPWgubGVuZ3RoOmImJihlPWMsaihiKSl9cmV0dXJuIHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBoJiZuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsaCxjKSk+LTEpaC5zcGxpY2UoYywxKSxkJiYoZj49YyYmZi0tLGc+PWMmJmctLSl9KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsaCk+LTE6ISghaHx8IWgubGVuZ3RoKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gaD1bXSxmPTAsdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBoPWk9Yj12b2lkIDAsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haH0sbG9jazpmdW5jdGlvbigpe3JldHVybiBpPXZvaWQgMCxifHxrLmRpc2FibGUoKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxiKXtyZXR1cm4haHx8YyYmIWl8fChiPWJ8fFtdLGI9W2EsYi5zbGljZT9iLnNsaWNlKCk6Yl0sZD9pLnB1c2goYik6aihiKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBrLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhY319O3JldHVybiBrfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCkucHJvZ3Jlc3MoYy5ub3RpZnkpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1kLmNhbGwoYXJndW1lbnRzKSxlPWMubGVuZ3RoLGY9MSE9PWV8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2U6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihlKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZC5jYWxsKGFyZ3VtZW50cyk6ZSxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGU+MSlmb3IoaT1uZXcgQXJyYXkoZSksaj1uZXcgQXJyYXkoZSksaz1uZXcgQXJyYXkoZSk7ZT5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KS5wcm9ncmVzcyhoKGIsaixpKSk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEg7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEgucmVzb2x2ZVdpdGgobCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGwpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihsKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBJKCl7bC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEksITEpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixJLCExKSxuLnJlYWR5KCl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe3JldHVybiBIfHwoSD1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09bC5yZWFkeVN0YXRlP3NldFRpbWVvdXQobi5yZWFkeSk6KGwuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixJLCExKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSSwhMSkpKSxILnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBKPW4uYWNjZXNzPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKW4uYWNjZXNzKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9O24uYWNjZXB0RGF0YT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIEsoKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jYWNoZT17fSwwLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57fX19KSx0aGlzLmV4cGFuZG89bi5leHBhbmRvK0sudWlkKyt9Sy51aWQ9MSxLLmFjY2VwdHM9bi5hY2NlcHREYXRhLEsucHJvdG90eXBlPXtrZXk6ZnVuY3Rpb24oYSl7aWYoIUsuYWNjZXB0cyhhKSlyZXR1cm4gMDt2YXIgYj17fSxjPWFbdGhpcy5leHBhbmRvXTtpZighYyl7Yz1LLnVpZCsrO3RyeXtiW3RoaXMuZXhwYW5kb109e3ZhbHVlOmN9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEsYil9Y2F0Y2goZCl7Ylt0aGlzLmV4cGFuZG9dPWMsbi5leHRlbmQoYSxiKX19cmV0dXJuIHRoaXMuY2FjaGVbY118fCh0aGlzLmNhY2hlW2NdPXt9KSxjfSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5rZXkoYSksZj10aGlzLmNhY2hlW2VdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWZbYl09YztlbHNlIGlmKG4uaXNFbXB0eU9iamVjdChmKSluLmV4dGVuZCh0aGlzLmNhY2hlW2VdLGIpO2Vsc2UgZm9yKGQgaW4gYilmW2RdPWJbZF07cmV0dXJuIGZ9LGdldDpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY2FjaGVbdGhpcy5rZXkoYSldO3JldHVybiB2b2lkIDA9PT1iP2M6Y1tiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzLmtleShhKSxnPXRoaXMuY2FjaGVbZl07aWYodm9pZCAwPT09Yil0aGlzLmNhY2hlW2ZdPXt9O2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGc/ZD1bYixlXTooZD1lLGQ9ZCBpbiBnP1tkXTpkLm1hdGNoKEUpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBnW2RbY11dfX0saGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0VtcHR5T2JqZWN0KHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXXx8e30pfSxkaXNjYXJkOmZ1bmN0aW9uKGEpe2FbdGhpcy5leHBhbmRvXSYmZGVsZXRlIHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXX19O3ZhciBMPW5ldyBLLE09bmV3IEssTj0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sTz0vKFtBLVpdKS9nO2Z1bmN0aW9uIFAoYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShPLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6Ti50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmN9Y2F0Y2goZSl7fU0uc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfW4uZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBNLmhhc0RhdGEoYSl8fEwuaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7XG5yZXR1cm4gTS5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7TS5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBMLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7TC5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPU0uZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTC5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFAoZixkLGVbZF0pKSk7TC5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtNLnNldCh0aGlzLGEpfSk6Sih0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ9bi5jYW1lbENhc2UoYSk7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1NLmdldChmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1NLmdldChmLGQpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1QKGYsZCx2b2lkIDApLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1NLmdldCh0aGlzLGQpO00uc2V0KHRoaXMsZCxiKSwtMSE9PWEuaW5kZXhPZihcIi1cIikmJnZvaWQgMCE9PWMmJk0uc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtNLnJlbW92ZSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1MLmdldChhLGIpLGMmJighZHx8bi5pc0FycmF5KGMpP2Q9TC5hY2Nlc3MoYSxiLG4ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1uLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW4uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7bi5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gTC5nZXQoYSxjKXx8TC5hY2Nlc3MoYSxjLHtlbXB0eTpuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe0wucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksbi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9uLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW4ucXVldWUodGhpcyxhLGIpO24uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW4uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPUwuZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFE9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFI9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09bi5jc3MoYSxcImRpc3BsYXlcIil8fCFuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX0sVD0vXig/OmNoZWNrYm94fHJhZGlvKSQvaTshZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLGsuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixrLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIFU9XCJ1bmRlZmluZWRcIjtrLmZvY3VzaW5CdWJibGVzPVwib25mb2N1c2luXCJpbiBhO3ZhciBWPS9ea2V5LyxXPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLFg9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFk9L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gWigpe3JldHVybiEwfWZ1bmN0aW9uICQoKXtyZXR1cm4hMX1mdW5jdGlvbiBfKCl7dHJ5e3JldHVybiBsLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPUwuZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm4gdHlwZW9mIG4hPT1VJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChFKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9WS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcsITEpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPUwuaGFzRGF0YShhKSYmTC5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChFKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9WS5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJihkZWxldGUgci5oYW5kbGUsTC5yZW1vdmUoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmLGcsaCxpLGssbSxvLHA9W2R8fGxdLHE9ai5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ai5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGc9aD1kPWR8fGwsMyE9PWQubm9kZVR5cGUmJjghPT1kLm5vZGVUeXBlJiYhWC50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT49MCYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGs9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWU/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5uYW1lc3BhY2VfcmU9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZCksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGV8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShkLGMpIT09ITEpKXtpZighZSYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGQpKXtmb3IoaT1vLmRlbGVnYXRlVHlwZXx8cSxYLnRlc3QoaStxKXx8KGc9Zy5wYXJlbnROb2RlKTtnO2c9Zy5wYXJlbnROb2RlKXAucHVzaChnKSxoPWc7aD09PShkLm93bmVyRG9jdW1lbnR8fGwpJiZwLnB1c2goaC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3d8fGEpfWY9MDt3aGlsZSgoZz1wW2YrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1mPjE/aTpvLmJpbmRUeXBlfHxxLG09KEwuZ2V0KGcsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZMLmdldChnLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoZyxjKSxtPWsmJmdba10sbSYmbS5hcHBseSYmbi5hY2NlcHREYXRhKGcpJiYoYi5yZXN1bHQ9bS5hcHBseShnLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGV8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhbi5hY2NlcHREYXRhKGQpfHxrJiZuLmlzRnVuY3Rpb24oZFtxXSkmJiFuLmlzV2luZG93KGQpJiYoaD1kW2tdLGgmJihkW2tdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZFtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxoJiYoZFtrXT1oKSksYi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZSxmLGcsaD1bXSxpPWQuY2FsbChhcmd1bWVudHMpLGo9KEwuZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLm5hbWVzcGFjZV9yZXx8YS5uYW1lc3BhY2VfcmUudGVzdChnLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGU9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihhLnJlc3VsdD1lKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJighYS5idXR0b258fFwiY2xpY2tcIiE9PWEudHlwZSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+PTA6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxsLGQ9Yy5kb2N1bWVudEVsZW1lbnQsZT1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGQmJmQuc2Nyb2xsTGVmdHx8ZSYmZS5zY3JvbGxMZWZ0fHwwKS0oZCYmZC5jbGllbnRMZWZ0fHxlJiZlLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhkJiZkLnNjcm9sbFRvcHx8ZSYmZS5zY3JvbGxUb3B8fDApLShkJiZkLmNsaWVudFRvcHx8ZSYmZS5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1mfHwoYS53aGljaD0xJmY/MToyJmY/Mzo0JmY/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGQsZT1hLnR5cGUsZj1hLGc9dGhpcy5maXhIb29rc1tlXTtnfHwodGhpcy5maXhIb29rc1tlXT1nPVcudGVzdChlKT90aGlzLm1vdXNlSG9va3M6Vi50ZXN0KGUpP3RoaXMua2V5SG9va3M6e30pLGQ9Zy5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChnLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZiksYj1kLmxlbmd0aDt3aGlsZShiLS0pYz1kW2JdLGFbY109ZltjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1sKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxnLmZpbHRlcj9nLmZpbHRlcihhLGYpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09XygpJiZ0aGlzLmZvY3VzPyh0aGlzLmZvY3VzKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1fKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtkP24uZXZlbnQudHJpZ2dlcihlLG51bGwsYik6bi5ldmVudC5kaXNwYXRjaC5jYWxsKGIsZSksZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0sbi5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/WjokKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDokLGlzUHJvcGFnYXRpb25TdG9wcGVkOiQsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6JCxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1aLGEmJmEucHJldmVudERlZmF1bHQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9WixhJiZhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9WixhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4oIWV8fGUhPT1kJiYhbi5jb250YWlucyhkLGUpKSYmKGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksay5mb2N1c2luQnViYmxlc3x8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSksITApfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9TC5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxMLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPUwuYWNjZXNzKGQsYiktMTtlP0wuYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTC5yZW1vdmUoZCxiKSl9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGc7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1jfHxiLGI9dm9pZCAwKTtmb3IoZyBpbiBhKXRoaXMub24oZyxiLGMsYVtnXSxlKTtyZXR1cm4gdGhpc31pZihudWxsPT1jJiZudWxsPT1kPyhkPWIsYz1iPXZvaWQgMCk6bnVsbD09ZCYmKFwic3RyaW5nXCI9PXR5cGVvZiBiPyhkPWMsYz12b2lkIDApOihkPWMsYz1iLGI9dm9pZCAwKSksZD09PSExKWQ9JDtlbHNlIGlmKCFkKXJldHVybiB0aGlzO3JldHVybiAxPT09ZSYmKGY9ZCxkPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGYuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxkLmd1aWQ9Zi5ndWlkfHwoZi5ndWlkPW4uZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxhLGQsYyxiKX0pfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGI9PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYikmJihjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9JCksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9uLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KTt2YXIgYWE9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGJhPS88KFtcXHc6XSspLyxjYT0vPHwmIz9cXHcrOy8sZGE9LzwoPzpzY3JpcHR8c3R5bGV8bGluaykvaSxlYT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLGZhPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksZ2E9L150cnVlXFwvKC4qKS8saGE9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLGlhPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07aWEub3B0Z3JvdXA9aWEub3B0aW9uLGlhLnRib2R5PWlhLnRmb290PWlhLmNvbGdyb3VwPWlhLmNhcHRpb249aWEudGhlYWQsaWEudGg9aWEudGQ7ZnVuY3Rpb24gamEoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24ga2EoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gbGEoYSl7dmFyIGI9Z2EuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIG1hKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKUwuc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fEwuZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBuYShhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKEwuaGFzRGF0YShhKSYmKGY9TC5hY2Nlc3MoYSksZz1MLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9TS5oYXNEYXRhKGEpJiYoaD1NLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLE0uc2V0KGIsaSkpfX1mdW5jdGlvbiBvYShhLGIpe3ZhciBjPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6YS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIHBhKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJlQudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6KFwiaW5wdXRcIj09PWN8fFwidGV4dGFyZWFcIj09PWMpJiYoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfW4uZXh0ZW5kKHtjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKGsubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihnPW9hKGgpLGY9b2EoYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylwYShmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxvYShhKSxnPWd8fG9hKGgpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspbmEoZltkXSxnW2RdKTtlbHNlIG5hKGEsaCk7cmV0dXJuIGc9b2EoaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZtYShnLCFpJiZvYShhLFwic2NyaXB0XCIpKSxofSxidWlsZEZyYWdtZW50OmZ1bmN0aW9uKGEsYixjLGQpe2Zvcih2YXIgZSxmLGcsaCxpLGosaz1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxsPVtdLG09MCxvPWEubGVuZ3RoO28+bTttKyspaWYoZT1hW21dLGV8fDA9PT1lKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZSkpbi5tZXJnZShsLGUubm9kZVR5cGU/W2VdOmUpO2Vsc2UgaWYoY2EudGVzdChlKSl7Zj1mfHxrLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksZz0oYmEuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaD1pYVtnXXx8aWEuX2RlZmF1bHQsZi5pbm5lckhUTUw9aFsxXStlLnJlcGxhY2UoYWEsXCI8JDE+PC8kMj5cIikraFsyXSxqPWhbMF07d2hpbGUoai0tKWY9Zi5sYXN0Q2hpbGQ7bi5tZXJnZShsLGYuY2hpbGROb2RlcyksZj1rLmZpcnN0Q2hpbGQsZi50ZXh0Q29udGVudD1cIlwifWVsc2UgbC5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZSkpO2sudGV4dENvbnRlbnQ9XCJcIixtPTA7d2hpbGUoZT1sW20rK10paWYoKCFkfHwtMT09PW4uaW5BcnJheShlLGQpKSYmKGk9bi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSksZj1vYShrLmFwcGVuZENoaWxkKGUpLFwic2NyaXB0XCIpLGkmJm1hKGYpLGMpKXtqPTA7d2hpbGUoZT1mW2orK10pZmEudGVzdChlLnR5cGV8fFwiXCIpJiZjLnB1c2goZSl9cmV0dXJuIGt9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGUsZj1uLmV2ZW50LnNwZWNpYWwsZz0wO3ZvaWQgMCE9PShjPWFbZ10pO2crKyl7aWYobi5hY2NlcHREYXRhKGMpJiYoZT1jW0wuZXhwYW5kb10sZSYmKGI9TC5jYWNoZVtlXSkpKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cylmW2RdP24uZXZlbnQucmVtb3ZlKGMsZCk6bi5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO0wuY2FjaGVbZV0mJmRlbGV0ZSBMLmNhY2hlW2VdfWRlbGV0ZSBNLmNhY2hlW2NbTS5leHBhbmRvXV19fX0pLG4uZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmKHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWphKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9amEodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD1hP24uZmlsdGVyKGEsdGhpcyk6dGhpcyxlPTA7bnVsbCE9KGM9ZFtlXSk7ZSsrKWJ8fDEhPT1jLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShvYShjKSksYy5wYXJlbnROb2RlJiYoYiYmbi5jb250YWlucyhjLm93bmVyRG9jdW1lbnQsYykmJm1hKG9hKGMsXCJzY3JpcHRcIikpLGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShvYShhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhZGEudGVzdChhKSYmIWlhWyhiYS5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9YS5yZXBsYWNlKGFhLFwiPCQxPjwvJDI+XCIpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKG9hKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdO3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthPXRoaXMucGFyZW50Tm9kZSxuLmNsZWFuRGF0YShvYSh0aGlzKSksYSYmYS5yZXBsYWNlQ2hpbGQoYix0aGlzKX0pLGEmJihhLmxlbmd0aHx8YS5ub2RlVHlwZSk/dGhpczp0aGlzLnJlbW92ZSgpfSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucmVtb3ZlKGEsITApfSxkb21NYW5pcDpmdW5jdGlvbihhLGIpe2E9ZS5hcHBseShbXSxhKTt2YXIgYyxkLGYsZyxoLGksaj0wLGw9dGhpcy5sZW5ndGgsbT10aGlzLG89bC0xLHA9YVswXSxxPW4uaXNGdW5jdGlvbihwKTtpZihxfHxsPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBwJiYhay5jaGVja0Nsb25lJiZlYS50ZXN0KHApKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9bS5lcShjKTtxJiYoYVswXT1wLmNhbGwodGhpcyxjLGQuaHRtbCgpKSksZC5kb21NYW5pcChhLGIpfSk7aWYobCYmKGM9bi5idWlsZEZyYWdtZW50KGEsdGhpc1swXS5vd25lckRvY3VtZW50LCExLHRoaXMpLGQ9Yy5maXJzdENoaWxkLDE9PT1jLmNoaWxkTm9kZXMubGVuZ3RoJiYoYz1kKSxkKSl7Zm9yKGY9bi5tYXAob2EoYyxcInNjcmlwdFwiKSxrYSksZz1mLmxlbmd0aDtsPmo7aisrKWg9YyxqIT09byYmKGg9bi5jbG9uZShoLCEwLCEwKSxnJiZuLm1lcmdlKGYsb2EoaCxcInNjcmlwdFwiKSkpLGIuY2FsbCh0aGlzW2pdLGgsaik7aWYoZylmb3IoaT1mW2YubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbi5tYXAoZixsYSksaj0wO2c+ajtqKyspaD1mW2pdLGZhLnRlc3QoaC50eXBlfHxcIlwiKSYmIUwuYWNjZXNzKGgsXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGksaCkmJihoLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGguc3JjKTpuLmdsb2JhbEV2YWwoaC50ZXh0Q29udGVudC5yZXBsYWNlKGhhLFwiXCIpKSl9cmV0dXJuIHRoaXN9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW4oYSksZz1lLmxlbmd0aC0xLGg9MDtnPj1oO2grKyljPWg9PT1nP3RoaXM6dGhpcy5jbG9uZSghMCksbihlW2hdKVtiXShjKSxmLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pO3ZhciBxYSxyYT17fTtmdW5jdGlvbiBzYShiLGMpe3ZhciBkLGU9bihjLmNyZWF0ZUVsZW1lbnQoYikpLmFwcGVuZFRvKGMuYm9keSksZj1hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlJiYoZD1hLmdldERlZmF1bHRDb21wdXRlZFN0eWxlKGVbMF0pKT9kLmRpc3BsYXk6bi5jc3MoZVswXSxcImRpc3BsYXlcIik7cmV0dXJuIGUuZGV0YWNoKCksZn1mdW5jdGlvbiB0YShhKXt2YXIgYj1sLGM9cmFbYV07cmV0dXJuIGN8fChjPXNhKGEsYiksXCJub25lXCIhPT1jJiZjfHwocWE9KHFhfHxuKFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiKSkuYXBwZW5kVG8oYi5kb2N1bWVudEVsZW1lbnQpLGI9cWFbMF0uY29udGVudERvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz1zYShhLGIpLHFhLmRldGFjaCgpKSxyYVthXT1jKSxjfXZhciB1YT0vXm1hcmdpbi8sdmE9bmV3IFJlZ0V4cChcIl4oXCIrUStcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSx3YT1mdW5jdGlvbihiKXtyZXR1cm4gYi5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3Lm9wZW5lcj9iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShiLG51bGwpOmEuZ2V0Q29tcHV0ZWRTdHlsZShiLG51bGwpfTtmdW5jdGlvbiB4YShhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fHdhKGEpLGMmJihnPWMuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXSksYyYmKFwiXCIhPT1nfHxuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKXx8KGc9bi5zdHlsZShhLGIpKSx2YS50ZXN0KGcpJiZ1YS50ZXN0KGIpJiYoZD1oLndpZHRoLGU9aC5taW5XaWR0aCxmPWgubWF4V2lkdGgsaC5taW5XaWR0aD1oLm1heFdpZHRoPWgud2lkdGg9ZyxnPWMud2lkdGgsaC53aWR0aD1kLGgubWluV2lkdGg9ZSxoLm1heFdpZHRoPWYpKSx2b2lkIDAhPT1nP2crXCJcIjpnfWZ1bmN0aW9uIHlhKGEsYil7cmV0dXJue2dldDpmdW5jdGlvbigpe3JldHVybiBhKCk/dm9pZCBkZWxldGUgdGhpcy5nZXQ6KHRoaXMuZ2V0PWIpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fSFmdW5jdGlvbigpe3ZhciBiLGMsZD1sLmRvY3VtZW50RWxlbWVudCxlPWwuY3JlYXRlRWxlbWVudChcImRpdlwiKSxmPWwuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZihmLnN0eWxlKXtmLnN0eWxlLmJhY2tncm91bmRDbGlwPVwiY29udGVudC1ib3hcIixmLmNsb25lTm9kZSghMCkuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJcIixrLmNsZWFyQ2xvbmVTdHlsZT1cImNvbnRlbnQtYm94XCI9PT1mLnN0eWxlLmJhY2tncm91bmRDbGlwLGUuc3R5bGUuY3NzVGV4dD1cImJvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4O21hcmdpbi10b3A6MXB4O3Bvc2l0aW9uOmFic29sdXRlXCIsZS5hcHBlbmRDaGlsZChmKTtmdW5jdGlvbiBnKCl7Zi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxJTt0b3A6MSU7Ym9yZGVyOjFweDtwYWRkaW5nOjFweDt3aWR0aDo0cHg7cG9zaXRpb246YWJzb2x1dGVcIixmLmlubmVySFRNTD1cIlwiLGQuYXBwZW5kQ2hpbGQoZSk7dmFyIGc9YS5nZXRDb21wdXRlZFN0eWxlKGYsbnVsbCk7Yj1cIjElXCIhPT1nLnRvcCxjPVwiNHB4XCI9PT1nLndpZHRoLGQucmVtb3ZlQ2hpbGQoZSl9YS5nZXRDb21wdXRlZFN0eWxlJiZuLmV4dGVuZChrLHtwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGcoKSxifSxib3hTaXppbmdSZWxpYWJsZTpmdW5jdGlvbigpe3JldHVybiBudWxsPT1jJiZnKCksY30scmVsaWFibGVNYXJnaW5SaWdodDpmdW5jdGlvbigpe3ZhciBiLGM9Zi5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO3JldHVybiBjLnN0eWxlLmNzc1RleHQ9Zi5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCIsYy5zdHlsZS5tYXJnaW5SaWdodD1jLnN0eWxlLndpZHRoPVwiMFwiLGYuc3R5bGUud2lkdGg9XCIxcHhcIixkLmFwcGVuZENoaWxkKGUpLGI9IXBhcnNlRmxvYXQoYS5nZXRDb21wdXRlZFN0eWxlKGMsbnVsbCkubWFyZ2luUmlnaHQpLGQucmVtb3ZlQ2hpbGQoZSksZi5yZW1vdmVDaGlsZChjKSxifX0pfX0oKSxuLnN3YXA9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPXt9O2ZvcihmIGluIGIpZ1tmXT1hLnN0eWxlW2ZdLGEuc3R5bGVbZl09YltmXTtlPWMuYXBwbHkoYSxkfHxbXSk7Zm9yKGYgaW4gYilhLnN0eWxlW2ZdPWdbZl07cmV0dXJuIGV9O3ZhciB6YT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sQWE9bmV3IFJlZ0V4cChcIl4oXCIrUStcIikoLiopJFwiLFwiaVwiKSxCYT1uZXcgUmVnRXhwKFwiXihbKy1dKT0oXCIrUStcIilcIixcImlcIiksQ2E9e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIix2aXNpYmlsaXR5OlwiaGlkZGVuXCIsZGlzcGxheTpcImJsb2NrXCJ9LERhPXtsZXR0ZXJTcGFjaW5nOlwiMFwiLGZvbnRXZWlnaHQ6XCI0MDBcIn0sRWE9W1wiV2Via2l0XCIsXCJPXCIsXCJNb3pcIixcIm1zXCJdO2Z1bmN0aW9uIEZhKGEsYil7aWYoYiBpbiBhKXJldHVybiBiO3ZhciBjPWJbMF0udG9VcHBlckNhc2UoKStiLnNsaWNlKDEpLGQ9YixlPUVhLmxlbmd0aDt3aGlsZShlLS0paWYoYj1FYVtlXStjLGIgaW4gYSlyZXR1cm4gYjtyZXR1cm4gZH1mdW5jdGlvbiBHYShhLGIsYyl7dmFyIGQ9QWEuZXhlYyhiKTtyZXR1cm4gZD9NYXRoLm1heCgwLGRbMV0tKGN8fDApKSsoZFsyXXx8XCJweFwiKTpifWZ1bmN0aW9uIEhhKGEsYixjLGQsZSl7Zm9yKHZhciBmPWM9PT0oZD9cImJvcmRlclwiOlwiY29udGVudFwiKT80Olwid2lkdGhcIj09PWI/MTowLGc9MDs0PmY7Zis9MilcIm1hcmdpblwiPT09YyYmKGcrPW4uY3NzKGEsYytSW2ZdLCEwLGUpKSxkPyhcImNvbnRlbnRcIj09PWMmJihnLT1uLmNzcyhhLFwicGFkZGluZ1wiK1JbZl0sITAsZSkpLFwibWFyZ2luXCIhPT1jJiYoZy09bi5jc3MoYSxcImJvcmRlclwiK1JbZl0rXCJXaWR0aFwiLCEwLGUpKSk6KGcrPW4uY3NzKGEsXCJwYWRkaW5nXCIrUltmXSwhMCxlKSxcInBhZGRpbmdcIiE9PWMmJihnKz1uLmNzcyhhLFwiYm9yZGVyXCIrUltmXStcIldpZHRoXCIsITAsZSkpKTtyZXR1cm4gZ31mdW5jdGlvbiBJYShhLGIsYyl7dmFyIGQ9ITAsZT1cIndpZHRoXCI9PT1iP2Eub2Zmc2V0V2lkdGg6YS5vZmZzZXRIZWlnaHQsZj13YShhKSxnPVwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGYpO2lmKDA+PWV8fG51bGw9PWUpe2lmKGU9eGEoYSxiLGYpLCgwPmV8fG51bGw9PWUpJiYoZT1hLnN0eWxlW2JdKSx2YS50ZXN0KGUpKXJldHVybiBlO2Q9ZyYmKGsuYm94U2l6aW5nUmVsaWFibGUoKXx8ZT09PWEuc3R5bGVbYl0pLGU9cGFyc2VGbG9hdChlKXx8MH1yZXR1cm4gZStIYShhLGIsY3x8KGc/XCJib3JkZXJcIjpcImNvbnRlbnRcIiksZCxmKStcInB4XCJ9ZnVuY3Rpb24gSmEoYSxiKXtmb3IodmFyIGMsZCxlLGY9W10sZz0wLGg9YS5sZW5ndGg7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGZbZ109TC5nZXQoZCxcIm9sZGRpc3BsYXlcIiksYz1kLnN0eWxlLmRpc3BsYXksYj8oZltnXXx8XCJub25lXCIhPT1jfHwoZC5zdHlsZS5kaXNwbGF5PVwiXCIpLFwiXCI9PT1kLnN0eWxlLmRpc3BsYXkmJlMoZCkmJihmW2ddPUwuYWNjZXNzKGQsXCJvbGRkaXNwbGF5XCIsdGEoZC5ub2RlTmFtZSkpKSk6KGU9UyhkKSxcIm5vbmVcIj09PWMmJmV8fEwuc2V0KGQsXCJvbGRkaXNwbGF5XCIsZT9jOm4uY3NzKGQsXCJkaXNwbGF5XCIpKSkpO2ZvcihnPTA7aD5nO2crKylkPWFbZ10sZC5zdHlsZSYmKGImJlwibm9uZVwiIT09ZC5zdHlsZS5kaXNwbGF5JiZcIlwiIT09ZC5zdHlsZS5kaXNwbGF5fHwoZC5zdHlsZS5kaXNwbGF5PWI/ZltnXXx8XCJcIjpcIm5vbmVcIikpO3JldHVybiBhfW4uZXh0ZW5kKHtjc3NIb29rczp7b3BhY2l0eTp7Z2V0OmZ1bmN0aW9uKGEsYil7aWYoYil7dmFyIGM9eGEoYSxcIm9wYWNpdHlcIik7cmV0dXJuXCJcIj09PWM/XCIxXCI6Y319fX0sY3NzTnVtYmVyOntjb2x1bW5Db3VudDohMCxmaWxsT3BhY2l0eTohMCxmbGV4R3JvdzohMCxmbGV4U2hyaW5rOiEwLGZvbnRXZWlnaHQ6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsd2lkb3dzOiEwLHpJbmRleDohMCx6b29tOiEwfSxjc3NQcm9wczp7XCJmbG9hdFwiOlwiY3NzRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09RmEoaSxoKSksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLHZvaWQgMD09PWM/ZyYmXCJnZXRcImluIGcmJnZvaWQgMCE9PShlPWcuZ2V0KGEsITEsZCkpP2U6aVtiXTooZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9QmEuZXhlYyhjKSkmJihjPShlWzFdKzEpKmVbMl0rcGFyc2VGbG9hdChuLmNzcyhhLGIpKSxmPVwibnVtYmVyXCIpLG51bGwhPWMmJmM9PT1jJiYoXCJudW1iZXJcIiE9PWZ8fG4uY3NzTnVtYmVyW2hdfHwoYys9XCJweFwiKSxrLmNsZWFyQ2xvbmVTdHlsZXx8XCJcIiE9PWN8fDAhPT1iLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpfHwoaVtiXT1cImluaGVyaXRcIiksZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSl8fChpW2JdPWMpKSx2b2lkIDApfX0sY3NzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpO3JldHVybiBiPW4uY3NzUHJvcHNbaF18fChuLmNzc1Byb3BzW2hdPUZhKGEuc3R5bGUsaCkpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGU9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZSYmKGU9eGEoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZSYmYiBpbiBEYSYmKGU9RGFbYl0pLFwiXCI9PT1jfHxjPyhmPXBhcnNlRmxvYXQoZSksYz09PSEwfHxuLmlzTnVtZXJpYyhmKT9mfHwwOmUpOmV9fSksbi5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBjP3phLnRlc3Qobi5jc3MoYSxcImRpc3BsYXlcIikpJiYwPT09YS5vZmZzZXRXaWR0aD9uLnN3YXAoYSxDYSxmdW5jdGlvbigpe3JldHVybiBJYShhLGIsZCl9KTpJYShhLGIsZCk6dm9pZCAwfSxzZXQ6ZnVuY3Rpb24oYSxjLGQpe3ZhciBlPWQmJndhKGEpO3JldHVybiBHYShhLGMsZD9IYShhLGIsZCxcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxlKSxlKTowKX19fSksbi5jc3NIb29rcy5tYXJnaW5SaWdodD15YShrLnJlbGlhYmxlTWFyZ2luUmlnaHQsZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9uLnN3YXAoYSx7ZGlzcGxheTpcImlubGluZS1ibG9ja1wifSx4YSxbYSxcIm1hcmdpblJpZ2h0XCJdKTp2b2lkIDB9KSxuLmVhY2goe21hcmdpbjpcIlwiLHBhZGRpbmc6XCJcIixib3JkZXI6XCJXaWR0aFwifSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYStiXT17ZXhwYW5kOmZ1bmN0aW9uKGMpe2Zvcih2YXIgZD0wLGU9e30sZj1cInN0cmluZ1wiPT10eXBlb2YgYz9jLnNwbGl0KFwiIFwiKTpbY107ND5kO2QrKyllW2ErUltkXStiXT1mW2RdfHxmW2QtMl18fGZbMF07cmV0dXJuIGV9fSx1YS50ZXN0KGEpfHwobi5jc3NIb29rc1thK2JdLnNldD1HYSl9KSxuLmZuLmV4dGVuZCh7Y3NzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPXt9LGc9MDtpZihuLmlzQXJyYXkoYikpe2ZvcihkPXdhKGEpLGU9Yi5sZW5ndGg7ZT5nO2crKylmW2JbZ11dPW4uY3NzKGEsYltnXSwhMSxkKTtyZXR1cm4gZn1yZXR1cm4gdm9pZCAwIT09Yz9uLnN0eWxlKGEsYixjKTpuLmNzcyhhLGIpfSxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0sc2hvdzpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzLCEwKX0saGlkZTpmdW5jdGlvbigpe3JldHVybiBKYSh0aGlzKX0sdG9nZ2xlOmZ1bmN0aW9uKGEpe3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYT9hP3RoaXMuc2hvdygpOnRoaXMuaGlkZSgpOnRoaXMuZWFjaChmdW5jdGlvbigpe1ModGhpcyk/bih0aGlzKS5zaG93KCk6bih0aGlzKS5oaWRlKCl9KX19KTtmdW5jdGlvbiBLYShhLGIsYyxkLGUpe3JldHVybiBuZXcgS2EucHJvdG90eXBlLmluaXQoYSxiLGMsZCxlKX1uLlR3ZWVuPUthLEthLnByb3RvdHlwZT17Y29uc3RydWN0b3I6S2EsaW5pdDpmdW5jdGlvbihhLGIsYyxkLGUsZil7dGhpcy5lbGVtPWEsdGhpcy5wcm9wPWMsdGhpcy5lYXNpbmc9ZXx8XCJzd2luZ1wiLHRoaXMub3B0aW9ucz1iLHRoaXMuc3RhcnQ9dGhpcy5ub3c9dGhpcy5jdXIoKSx0aGlzLmVuZD1kLHRoaXMudW5pdD1mfHwobi5jc3NOdW1iZXJbY10/XCJcIjpcInB4XCIpfSxjdXI6ZnVuY3Rpb24oKXt2YXIgYT1LYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gYSYmYS5nZXQ/YS5nZXQodGhpcyk6S2EucHJvcEhvb2tzLl9kZWZhdWx0LmdldCh0aGlzKX0scnVuOmZ1bmN0aW9uKGEpe3ZhciBiLGM9S2EucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIHRoaXMub3B0aW9ucy5kdXJhdGlvbj90aGlzLnBvcz1iPW4uZWFzaW5nW3RoaXMuZWFzaW5nXShhLHRoaXMub3B0aW9ucy5kdXJhdGlvbiphLDAsMSx0aGlzLm9wdGlvbnMuZHVyYXRpb24pOnRoaXMucG9zPWI9YSx0aGlzLm5vdz0odGhpcy5lbmQtdGhpcy5zdGFydCkqYit0aGlzLnN0YXJ0LHRoaXMub3B0aW9ucy5zdGVwJiZ0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKHRoaXMuZWxlbSx0aGlzLm5vdyx0aGlzKSxjJiZjLnNldD9jLnNldCh0aGlzKTpLYS5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KHRoaXMpLHRoaXN9fSxLYS5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGU9S2EucHJvdG90eXBlLEthLnByb3BIb29rcz17X2RlZmF1bHQ6e2dldDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbnVsbD09YS5lbGVtW2EucHJvcF18fGEuZWxlbS5zdHlsZSYmbnVsbCE9YS5lbGVtLnN0eWxlW2EucHJvcF0/KGI9bi5jc3MoYS5lbGVtLGEucHJvcCxcIlwiKSxiJiZcImF1dG9cIiE9PWI/YjowKTphLmVsZW1bYS5wcm9wXX0sc2V0OmZ1bmN0aW9uKGEpe24uZnguc3RlcFthLnByb3BdP24uZnguc3RlcFthLnByb3BdKGEpOmEuZWxlbS5zdHlsZSYmKG51bGwhPWEuZWxlbS5zdHlsZVtuLmNzc1Byb3BzW2EucHJvcF1dfHxuLmNzc0hvb2tzW2EucHJvcF0pP24uc3R5bGUoYS5lbGVtLGEucHJvcCxhLm5vdythLnVuaXQpOmEuZWxlbVthLnByb3BdPWEubm93fX19LEthLnByb3BIb29rcy5zY3JvbGxUb3A9S2EucHJvcEhvb2tzLnNjcm9sbExlZnQ9e3NldDpmdW5jdGlvbihhKXthLmVsZW0ubm9kZVR5cGUmJmEuZWxlbS5wYXJlbnROb2RlJiYoYS5lbGVtW2EucHJvcF09YS5ub3cpfX0sbi5lYXNpbmc9e2xpbmVhcjpmdW5jdGlvbihhKXtyZXR1cm4gYX0sc3dpbmc6ZnVuY3Rpb24oYSl7cmV0dXJuLjUtTWF0aC5jb3MoYSpNYXRoLlBJKS8yfX0sbi5meD1LYS5wcm90b3R5cGUuaW5pdCxuLmZ4LnN0ZXA9e307dmFyIExhLE1hLE5hPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxPYT1uZXcgUmVnRXhwKFwiXig/OihbKy1dKT18KShcIitRK1wiKShbYS16JV0qKSRcIixcImlcIiksUGE9L3F1ZXVlSG9va3MkLyxRYT1bVmFdLFJhPXtcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYiksZD1jLmN1cigpLGU9T2EuZXhlYyhiKSxmPWUmJmVbM118fChuLmNzc051bWJlclthXT9cIlwiOlwicHhcIiksZz0obi5jc3NOdW1iZXJbYV18fFwicHhcIiE9PWYmJitkKSYmT2EuZXhlYyhuLmNzcyhjLmVsZW0sYSkpLGg9MSxpPTIwO2lmKGcmJmdbM10hPT1mKXtmPWZ8fGdbM10sZT1lfHxbXSxnPStkfHwxO2RvIGg9aHx8XCIuNVwiLGcvPWgsbi5zdHlsZShjLmVsZW0sYSxnK2YpO3doaWxlKGghPT0oaD1jLmN1cigpL2QpJiYxIT09aCYmLS1pKX1yZXR1cm4gZSYmKGc9Yy5zdGFydD0rZ3x8K2R8fDAsYy51bml0PWYsYy5lbmQ9ZVsxXT9nKyhlWzFdKzEpKmVbMl06K2VbMl0pLGN9XX07ZnVuY3Rpb24gU2EoKXtyZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpe0xhPXZvaWQgMH0pLExhPW4ubm93KCl9ZnVuY3Rpb24gVGEoYSxiKXt2YXIgYyxkPTAsZT17aGVpZ2h0OmF9O2ZvcihiPWI/MTowOzQ+ZDtkKz0yLWIpYz1SW2RdLGVbXCJtYXJnaW5cIitjXT1lW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihlLm9wYWNpdHk9ZS53aWR0aD1hKSxlfWZ1bmN0aW9uIFVhKGEsYixjKXtmb3IodmFyIGQsZT0oUmFbYl18fFtdKS5jb25jYXQoUmFbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBWYShhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxsPXRoaXMsbT17fSxvPWEuc3R5bGUscD1hLm5vZGVUeXBlJiZTKGEpLHE9TC5nZXQoYSxcImZ4c2hvd1wiKTtjLnF1ZXVlfHwoaD1uLl9xdWV1ZUhvb2tzKGEsXCJmeFwiKSxudWxsPT1oLnVucXVldWVkJiYoaC51bnF1ZXVlZD0wLGk9aC5lbXB0eS5maXJlLGguZW1wdHkuZmlyZT1mdW5jdGlvbigpe2gudW5xdWV1ZWR8fGkoKX0pLGgudW5xdWV1ZWQrKyxsLmFsd2F5cyhmdW5jdGlvbigpe2wuYWx3YXlzKGZ1bmN0aW9uKCl7aC51bnF1ZXVlZC0tLG4ucXVldWUoYSxcImZ4XCIpLmxlbmd0aHx8aC5lbXB0eS5maXJlKCl9KX0pKSwxPT09YS5ub2RlVHlwZSYmKFwiaGVpZ2h0XCJpbiBifHxcIndpZHRoXCJpbiBiKSYmKGMub3ZlcmZsb3c9W28ub3ZlcmZsb3csby5vdmVyZmxvd1gsby5vdmVyZmxvd1ldLGo9bi5jc3MoYSxcImRpc3BsYXlcIiksaz1cIm5vbmVcIj09PWo/TC5nZXQoYSxcIm9sZGRpc3BsYXlcIil8fHRhKGEubm9kZU5hbWUpOmosXCJpbmxpbmVcIj09PWsmJlwibm9uZVwiPT09bi5jc3MoYSxcImZsb2F0XCIpJiYoby5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpKSxjLm92ZXJmbG93JiYoby5vdmVyZmxvdz1cImhpZGRlblwiLGwuYWx3YXlzKGZ1bmN0aW9uKCl7by5vdmVyZmxvdz1jLm92ZXJmbG93WzBdLG8ub3ZlcmZsb3dYPWMub3ZlcmZsb3dbMV0sby5vdmVyZmxvd1k9Yy5vdmVyZmxvd1syXX0pKTtmb3IoZCBpbiBiKWlmKGU9YltkXSxOYS5leGVjKGUpKXtpZihkZWxldGUgYltkXSxmPWZ8fFwidG9nZ2xlXCI9PT1lLGU9PT0ocD9cImhpZGVcIjpcInNob3dcIikpe2lmKFwic2hvd1wiIT09ZXx8IXF8fHZvaWQgMD09PXFbZF0pY29udGludWU7cD0hMH1tW2RdPXEmJnFbZF18fG4uc3R5bGUoYSxkKX1lbHNlIGo9dm9pZCAwO2lmKG4uaXNFbXB0eU9iamVjdChtKSlcImlubGluZVwiPT09KFwibm9uZVwiPT09aj90YShhLm5vZGVOYW1lKTpqKSYmKG8uZGlzcGxheT1qKTtlbHNle3E/XCJoaWRkZW5cImluIHEmJihwPXEuaGlkZGVuKTpxPUwuYWNjZXNzKGEsXCJmeHNob3dcIix7fSksZiYmKHEuaGlkZGVuPSFwKSxwP24oYSkuc2hvdygpOmwuZG9uZShmdW5jdGlvbigpe24oYSkuaGlkZSgpfSksbC5kb25lKGZ1bmN0aW9uKCl7dmFyIGI7TC5yZW1vdmUoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBtKW4uc3R5bGUoYSxiLG1bYl0pfSk7Zm9yKGQgaW4gbSlnPVVhKHA/cVtkXTowLGQsbCksZCBpbiBxfHwocVtkXT1nLnN0YXJ0LHAmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uIFdhKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bi5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxuLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW4uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBYYShhLGIsYyl7dmFyIGQsZSxmPTAsZz1RYS5sZW5ndGgsaD1uLkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uKCl7ZGVsZXRlIGkuZWxlbX0pLGk9ZnVuY3Rpb24oKXtpZihlKXJldHVybiExO2Zvcih2YXIgYj1MYXx8U2EoKSxjPU1hdGgubWF4KDAsai5zdGFydFRpbWUrai5kdXJhdGlvbi1iKSxkPWMvai5kdXJhdGlvbnx8MCxmPTEtZCxnPTAsaT1qLnR3ZWVucy5sZW5ndGg7aT5nO2crKylqLnR3ZWVuc1tnXS5ydW4oZik7cmV0dXJuIGgubm90aWZ5V2l0aChhLFtqLGYsY10pLDE+ZiYmaT9jOihoLnJlc29sdmVXaXRoKGEsW2pdKSwhMSl9LGo9aC5wcm9taXNlKHtlbGVtOmEscHJvcHM6bi5leHRlbmQoe30sYiksb3B0czpuLmV4dGVuZCghMCx7c3BlY2lhbEVhc2luZzp7fX0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOkxhfHxTYSgpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj9oLnJlc29sdmVXaXRoKGEsW2osYl0pOmgucmVqZWN0V2l0aChhLFtqLGJdKSx0aGlzfX0pLGs9ai5wcm9wcztmb3IoV2EoayxqLm9wdHMuc3BlY2lhbEVhc2luZyk7Zz5mO2YrKylpZihkPVFhW2ZdLmNhbGwoaixhLGssai5vcHRzKSlyZXR1cm4gZDtyZXR1cm4gbi5tYXAoayxVYSxqKSxuLmlzRnVuY3Rpb24oai5vcHRzLnN0YXJ0KSYmai5vcHRzLnN0YXJ0LmNhbGwoYSxqKSxuLmZ4LnRpbWVyKG4uZXh0ZW5kKGkse2VsZW06YSxhbmltOmoscXVldWU6ai5vcHRzLnF1ZXVlfSkpLGoucHJvZ3Jlc3Moai5vcHRzLnByb2dyZXNzKS5kb25lKGoub3B0cy5kb25lLGoub3B0cy5jb21wbGV0ZSkuZmFpbChqLm9wdHMuZmFpbCkuYWx3YXlzKGoub3B0cy5hbHdheXMpfW4uQW5pbWF0aW9uPW4uZXh0ZW5kKFhhLHt0d2VlbmVyOmZ1bmN0aW9uKGEsYil7bi5pc0Z1bmN0aW9uKGEpPyhiPWEsYT1bXCIqXCJdKTphPWEuc3BsaXQoXCIgXCIpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxSYVtjXT1SYVtjXXx8W10sUmFbY10udW5zaGlmdChiKX0scHJlZmlsdGVyOmZ1bmN0aW9uKGEsYil7Yj9RYS51bnNoaWZ0KGEpOlFhLnB1c2goYSl9fSksbi5zcGVlZD1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YSYmXCJvYmplY3RcIj09dHlwZW9mIGE/bi5leHRlbmQoe30sYSk6e2NvbXBsZXRlOmN8fCFjJiZifHxuLmlzRnVuY3Rpb24oYSkmJmEsZHVyYXRpb246YSxlYXNpbmc6YyYmYnx8YiYmIW4uaXNGdW5jdGlvbihiKSYmYn07cmV0dXJuIGQuZHVyYXRpb249bi5meC5vZmY/MDpcIm51bWJlclwiPT10eXBlb2YgZC5kdXJhdGlvbj9kLmR1cmF0aW9uOmQuZHVyYXRpb24gaW4gbi5meC5zcGVlZHM/bi5meC5zcGVlZHNbZC5kdXJhdGlvbl06bi5meC5zcGVlZHMuX2RlZmF1bHQsKG51bGw9PWQucXVldWV8fGQucXVldWU9PT0hMCkmJihkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bi5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZuLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sbi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoUykuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmlzRW1wdHlPYmplY3QoYSksZj1uLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9WGEodGhpcyxuLmV4dGVuZCh7fSxhKSxmKTsoZXx8TC5nZXQodGhpcyxcImZpbmlzaFwiKSkmJmIuc3RvcCghMCl9O3JldHVybiBnLmZpbmlzaD1nLGV8fGYucXVldWU9PT0hMT90aGlzLmVhY2goZyk6dGhpcy5xdWV1ZShmLnF1ZXVlLGcpfSxzdG9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1mdW5jdGlvbihhKXt2YXIgYj1hLnN0b3A7ZGVsZXRlIGEuc3RvcCxiKGMpfTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGM9YixiPWEsYT12b2lkIDApLGImJmEhPT0hMSYmdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiPSEwLGU9bnVsbCE9YSYmYStcInF1ZXVlSG9va3NcIixmPW4udGltZXJzLGc9TC5nZXQodGhpcyk7aWYoZSlnW2VdJiZnW2VdLnN0b3AmJmQoZ1tlXSk7ZWxzZSBmb3IoZSBpbiBnKWdbZV0mJmdbZV0uc3RvcCYmUGEudGVzdChlKSYmZChnW2VdKTtmb3IoZT1mLmxlbmd0aDtlLS07KWZbZV0uZWxlbSE9PXRoaXN8fG51bGwhPWEmJmZbZV0ucXVldWUhPT1hfHwoZltlXS5hbmltLnN0b3AoYyksYj0hMSxmLnNwbGljZShlLDEpKTsoYnx8IWMpJiZuLmRlcXVldWUodGhpcyxhKX0pfSxmaW5pc2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGEhPT0hMSYmKGE9YXx8XCJmeFwiKSx0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixjPUwuZ2V0KHRoaXMpLGQ9Y1thK1wicXVldWVcIl0sZT1jW2ErXCJxdWV1ZUhvb2tzXCJdLGY9bi50aW1lcnMsZz1kP2QubGVuZ3RoOjA7Zm9yKGMuZmluaXNoPSEwLG4ucXVldWUodGhpcyxhLFtdKSxlJiZlLnN0b3AmJmUuc3RvcC5jYWxsKHRoaXMsITApLGI9Zi5sZW5ndGg7Yi0tOylmW2JdLmVsZW09PT10aGlzJiZmW2JdLnF1ZXVlPT09YSYmKGZbYl0uYW5pbS5zdG9wKCEwKSxmLnNwbGljZShiLDEpKTtmb3IoYj0wO2c+YjtiKyspZFtiXSYmZFtiXS5maW5pc2gmJmRbYl0uZmluaXNoLmNhbGwodGhpcyk7ZGVsZXRlIGMuZmluaXNofSl9fSksbi5lYWNoKFtcInRvZ2dsZVwiLFwic2hvd1wiLFwiaGlkZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjPW4uZm5bYl07bi5mbltiXT1mdW5jdGlvbihhLGQsZSl7cmV0dXJuIG51bGw9PWF8fFwiYm9vbGVhblwiPT10eXBlb2YgYT9jLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp0aGlzLmFuaW1hdGUoVGEoYiwhMCksYSxkLGUpfX0pLG4uZWFjaCh7c2xpZGVEb3duOlRhKFwic2hvd1wiKSxzbGlkZVVwOlRhKFwiaGlkZVwiKSxzbGlkZVRvZ2dsZTpUYShcInRvZ2dsZVwiKSxmYWRlSW46e29wYWNpdHk6XCJzaG93XCJ9LGZhZGVPdXQ6e29wYWNpdHk6XCJoaWRlXCJ9LGZhZGVUb2dnbGU6e29wYWNpdHk6XCJ0b2dnbGVcIn19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhLGMsZCl7cmV0dXJuIHRoaXMuYW5pbWF0ZShiLGEsYyxkKX19KSxuLnRpbWVycz1bXSxuLmZ4LnRpY2s9ZnVuY3Rpb24oKXt2YXIgYSxiPTAsYz1uLnRpbWVycztmb3IoTGE9bi5ub3coKTtiPGMubGVuZ3RoO2IrKylhPWNbYl0sYSgpfHxjW2JdIT09YXx8Yy5zcGxpY2UoYi0tLDEpO2MubGVuZ3RofHxuLmZ4LnN0b3AoKSxMYT12b2lkIDB9LG4uZngudGltZXI9ZnVuY3Rpb24oYSl7bi50aW1lcnMucHVzaChhKSxhKCk/bi5meC5zdGFydCgpOm4udGltZXJzLnBvcCgpfSxuLmZ4LmludGVydmFsPTEzLG4uZnguc3RhcnQ9ZnVuY3Rpb24oKXtNYXx8KE1hPXNldEludGVydmFsKG4uZngudGljayxuLmZ4LmludGVydmFsKSl9LG4uZnguc3RvcD1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwoTWEpLE1hPW51bGx9LG4uZnguc3BlZWRzPXtzbG93OjYwMCxmYXN0OjIwMCxfZGVmYXVsdDo0MDB9LG4uZm4uZGVsYXk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1uLmZ4P24uZnguc3BlZWRzW2FdfHxhOmEsYj1ifHxcImZ4XCIsdGhpcy5xdWV1ZShiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9c2V0VGltZW91dChiLGEpO2Muc3RvcD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChkKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWwuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLGsuY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxrLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYi5kaXNhYmxlZD0hMCxrLm9wdERpc2FibGVkPSFjLmRpc2FibGVkLGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLGsucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIFlhLFphLCRhPW4uZXhwci5hdHRySGFuZGxlO24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIEoodGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKGEmJjMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIHR5cGVvZiBhLmdldEF0dHJpYnV0ZT09PVU/bi5wcm9wKGEsYixjKTooMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxkPW4uYXR0ckhvb2tzW2JdfHwobi5leHByLm1hdGNoLmJvb2wudGVzdChiKT9aYTpZYSkpLFxudm9pZCAwPT09Yz9kJiZcImdldFwiaW4gZCYmbnVsbCE9PShlPWQuZ2V0KGEsYikpP2U6KGU9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1lP3ZvaWQgMDplKTpudWxsIT09Yz9kJiZcInNldFwiaW4gZCYmdm9pZCAwIT09KGU9ZC5zZXQoYSxjLGIpKT9lOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6dm9pZCBuLnJlbW92ZUF0dHIoYSxiKSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goRSk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFrLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fX0pLFphPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPSRhW2JdfHxuLmZpbmQuYXR0cjskYVtiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9JGFbYl0sJGFbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLCRhW2JdPWYpLGV9fSk7dmFyIF9hPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2k7bi5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLG4ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbbi5wcm9wRml4W2FdfHxhXX0pfX0pLG4uZXh0ZW5kKHtwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifSxwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz1hLm5vZGVUeXBlO2lmKGEmJjMhPT1nJiY4IT09ZyYmMiE9PWcpcmV0dXJuIGY9MSE9PWd8fCFuLmlzWE1MRG9jKGEpLGYmJihiPW4ucHJvcEZpeFtiXXx8YixlPW4ucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaGFzQXR0cmlidXRlKFwidGFiaW5kZXhcIil8fF9hLnRlc3QoYS5ub2RlTmFtZSl8fGEuaHJlZj9hLnRhYkluZGV4Oi0xfX19fSksay5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTt2YXIgYWI9L1tcXHRcXHJcXG5cXGZdL2c7bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPVwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goRSl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWIsXCIgXCIpOlwiIFwiKSl7Zj0wO3doaWxlKGU9YltmKytdKWQuaW5kZXhPZihcIiBcIitlK1wiIFwiKTwwJiYoZCs9ZStcIiBcIik7Zz1uLnRyaW0oZCksYy5jbGFzc05hbWUhPT1nJiYoYy5jbGFzc05hbWU9Zyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPTA9PT1hcmd1bWVudHMubGVuZ3RofHxcInN0cmluZ1wiPT10eXBlb2YgYSYmYSxpPTAsaj10aGlzLmxlbmd0aDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsdGhpcy5jbGFzc05hbWUpKX0pO2lmKGgpZm9yKGI9KGF8fFwiXCIpLm1hdGNoKEUpfHxbXTtqPmk7aSsrKWlmKGM9dGhpc1tpXSxkPTE9PT1jLm5vZGVUeXBlJiYoYy5jbGFzc05hbWU/KFwiIFwiK2MuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKGFiLFwiIFwiKTpcIlwiKSl7Zj0wO3doaWxlKGU9YltmKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitlK1wiIFwiKT49MClkPWQucmVwbGFjZShcIiBcIitlK1wiIFwiLFwiIFwiKTtnPWE/bi50cmltKGQpOlwiXCIsYy5jbGFzc05hbWUhPT1nJiYoYy5jbGFzc05hbWU9Zyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTp0aGlzLmVhY2gobi5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyx0aGlzLmNsYXNzTmFtZSxiKSxiKX06ZnVuY3Rpb24oKXtpZihcInN0cmluZ1wiPT09Yyl7dmFyIGIsZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goRSl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2UoYz09PVV8fFwiYm9vbGVhblwiPT09YykmJih0aGlzLmNsYXNzTmFtZSYmTC5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0aGlzLmNsYXNzTmFtZSksdGhpcy5jbGFzc05hbWU9dGhpcy5jbGFzc05hbWV8fGE9PT0hMT9cIlwiOkwuZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXtmb3IodmFyIGI9XCIgXCIrYStcIiBcIixjPTAsZD10aGlzLmxlbmd0aDtkPmM7YysrKWlmKDE9PT10aGlzW2NdLm5vZGVUeXBlJiYoXCIgXCIrdGhpc1tjXS5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWIsXCIgXCIpLmluZGV4T2YoYik+PTApcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIGJiPS9cXHIvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZShiYixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bi50cmltKG4udGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLCEoIWMuc2VsZWN0ZWQmJmkhPT1lfHwoay5vcHREaXNhYmxlZD9jLmRpc2FibGVkOm51bGwhPT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKXx8Yy5wYXJlbnROb2RlLmRpc2FibGVkJiZuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW4uaW5BcnJheShkLnZhbHVlLGYpPj0wKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksbi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe24udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmlzQXJyYXkoYik/YS5jaGVja2VkPW4uaW5BcnJheShuKGEpLnZhbCgpLGIpPj0wOnZvaWQgMH19LGsuY2hlY2tPbnx8KG4udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX0sYmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pO3ZhciBjYj1uLm5vdygpLGRiPS9cXD8vO24ucGFyc2VKU09OPWZ1bmN0aW9uKGEpe3JldHVybiBKU09OLnBhcnNlKGErXCJcIil9LG4ucGFyc2VYTUw9ZnVuY3Rpb24oYSl7dmFyIGIsYztpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e2M9bmV3IERPTVBhcnNlcixiPWMucGFyc2VGcm9tU3RyaW5nKGEsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtiPXZvaWQgMH1yZXR1cm4oIWJ8fGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpJiZuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2EpLGJ9O3ZhciBlYj0vIy4qJC8sZmI9LyhbPyZdKV89W14mXSovLGdiPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20saGI9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8saWI9L14oPzpHRVR8SEVBRCkkLyxqYj0vXlxcL1xcLy8sa2I9L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oPzpbXlxcLz8jXSpAfCkoW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sbGI9e30sbWI9e30sbmI9XCIqL1wiLmNvbmNhdChcIipcIiksb2I9YS5sb2NhdGlvbi5ocmVmLHBiPWtiLmV4ZWMob2IudG9Mb3dlckNhc2UoKSl8fFtdO2Z1bmN0aW9uIHFiKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChFKXx8W107aWYobi5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIHJiKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PW1iO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsbi5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gc2IoYSxiKXt2YXIgYyxkLGU9bi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmbi5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIHRiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9cmV0dXJuIGY/KGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXSk6dm9pZCAwfWZ1bmN0aW9uIHViKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19bi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOm9iLHR5cGU6XCJHRVRcIixpc0xvY2FsOmhiLnRlc3QocGJbMV0pLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOm5iLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L3htbC8saHRtbDovaHRtbC8sanNvbjovanNvbi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpuLnBhcnNlSlNPTixcInRleHQgeG1sXCI6bi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/c2Ioc2IoYSxuLmFqYXhTZXR0aW5ncyksYik6c2Iobi5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6cWIobGIpLGFqYXhUcmFuc3BvcnQ6cWIobWIpLGFqYXg6ZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYj1ifHx7fTt2YXIgYyxkLGUsZixnLGgsaSxqLGs9bi5hamF4U2V0dXAoe30sYiksbD1rLmNvbnRleHR8fGssbT1rLmNvbnRleHQmJihsLm5vZGVUeXBlfHxsLmpxdWVyeSk/bihsKTpuLmV2ZW50LG89bi5EZWZlcnJlZCgpLHA9bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxxPWsuc3RhdHVzQ29kZXx8e30scj17fSxzPXt9LHQ9MCx1PVwiY2FuY2VsZWRcIix2PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoMj09PXQpe2lmKCFmKXtmPXt9O3doaWxlKGI9Z2IuZXhlYyhlKSlmW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWZbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09dD9lOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHR8fChhPXNbY109c1tjXXx8YSxyW2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHR8fChrLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZigyPnQpZm9yKGIgaW4gYSlxW2JdPVtxW2JdLGFbYl1dO2Vsc2Ugdi5hbHdheXMoYVt2LnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx1O3JldHVybiBjJiZjLmFib3J0KGIpLHgoMCxiKSx0aGlzfX07aWYoby5wcm9taXNlKHYpLmNvbXBsZXRlPXAuYWRkLHYuc3VjY2Vzcz12LmRvbmUsdi5lcnJvcj12LmZhaWwsay51cmw9KChhfHxrLnVybHx8b2IpK1wiXCIpLnJlcGxhY2UoZWIsXCJcIikucmVwbGFjZShqYixwYlsxXStcIi8vXCIpLGsudHlwZT1iLm1ldGhvZHx8Yi50eXBlfHxrLm1ldGhvZHx8ay50eXBlLGsuZGF0YVR5cGVzPW4udHJpbShrLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChFKXx8W1wiXCJdLG51bGw9PWsuY3Jvc3NEb21haW4mJihoPWtiLmV4ZWMoay51cmwudG9Mb3dlckNhc2UoKSksay5jcm9zc0RvbWFpbj0hKCFofHxoWzFdPT09cGJbMV0mJmhbMl09PT1wYlsyXSYmKGhbM118fChcImh0dHA6XCI9PT1oWzFdP1wiODBcIjpcIjQ0M1wiKSk9PT0ocGJbM118fChcImh0dHA6XCI9PT1wYlsxXT9cIjgwXCI6XCI0NDNcIikpKSksay5kYXRhJiZrLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygay5kYXRhJiYoay5kYXRhPW4ucGFyYW0oay5kYXRhLGsudHJhZGl0aW9uYWwpKSxyYihsYixrLGIsdiksMj09PXQpcmV0dXJuIHY7aT1uLmV2ZW50JiZrLmdsb2JhbCxpJiYwPT09bi5hY3RpdmUrKyYmbi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLGsudHlwZT1rLnR5cGUudG9VcHBlckNhc2UoKSxrLmhhc0NvbnRlbnQ9IWliLnRlc3Qoay50eXBlKSxkPWsudXJsLGsuaGFzQ29udGVudHx8KGsuZGF0YSYmKGQ9ay51cmwrPShkYi50ZXN0KGQpP1wiJlwiOlwiP1wiKStrLmRhdGEsZGVsZXRlIGsuZGF0YSksay5jYWNoZT09PSExJiYoay51cmw9ZmIudGVzdChkKT9kLnJlcGxhY2UoZmIsXCIkMV89XCIrY2IrKyk6ZCsoZGIudGVzdChkKT9cIiZcIjpcIj9cIikrXCJfPVwiK2NiKyspKSxrLmlmTW9kaWZpZWQmJihuLmxhc3RNb2RpZmllZFtkXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixuLmxhc3RNb2RpZmllZFtkXSksbi5ldGFnW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsbi5ldGFnW2RdKSksKGsuZGF0YSYmay5oYXNDb250ZW50JiZrLmNvbnRlbnRUeXBlIT09ITF8fGIuY29udGVudFR5cGUpJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixrLmNvbnRlbnRUeXBlKSx2LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixrLmRhdGFUeXBlc1swXSYmay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXT9rLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PWsuZGF0YVR5cGVzWzBdP1wiLCBcIituYitcIjsgcT0wLjAxXCI6XCJcIik6ay5hY2NlcHRzW1wiKlwiXSk7Zm9yKGogaW4gay5oZWFkZXJzKXYuc2V0UmVxdWVzdEhlYWRlcihqLGsuaGVhZGVyc1tqXSk7aWYoay5iZWZvcmVTZW5kJiYoay5iZWZvcmVTZW5kLmNhbGwobCx2LGspPT09ITF8fDI9PT10KSlyZXR1cm4gdi5hYm9ydCgpO3U9XCJhYm9ydFwiO2ZvcihqIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KXZbal0oa1tqXSk7aWYoYz1yYihtYixrLGIsdikpe3YucmVhZHlTdGF0ZT0xLGkmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW3Ysa10pLGsuYXN5bmMmJmsudGltZW91dD4wJiYoZz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7di5hYm9ydChcInRpbWVvdXRcIil9LGsudGltZW91dCkpO3RyeXt0PTEsYy5zZW5kKHIseCl9Y2F0Y2godyl7aWYoISgyPnQpKXRocm93IHc7eCgtMSx3KX19ZWxzZSB4KC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIHgoYSxiLGYsaCl7dmFyIGoscixzLHUsdyx4PWI7MiE9PXQmJih0PTIsZyYmY2xlYXJUaW1lb3V0KGcpLGM9dm9pZCAwLGU9aHx8XCJcIix2LnJlYWR5U3RhdGU9YT4wPzQ6MCxqPWE+PTIwMCYmMzAwPmF8fDMwND09PWEsZiYmKHU9dGIoayx2LGYpKSx1PXViKGssdSx2LGopLGo/KGsuaWZNb2RpZmllZCYmKHc9di5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKG4ubGFzdE1vZGlmaWVkW2RdPXcpLHc9di5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKG4uZXRhZ1tkXT13KSksMjA0PT09YXx8XCJIRUFEXCI9PT1rLnR5cGU/eD1cIm5vY29udGVudFwiOjMwND09PWE/eD1cIm5vdG1vZGlmaWVkXCI6KHg9dS5zdGF0ZSxyPXUuZGF0YSxzPXUuZXJyb3Isaj0hcykpOihzPXgsKGF8fCF4KSYmKHg9XCJlcnJvclwiLDA+YSYmKGE9MCkpKSx2LnN0YXR1cz1hLHYuc3RhdHVzVGV4dD0oYnx8eCkrXCJcIixqP28ucmVzb2x2ZVdpdGgobCxbcix4LHZdKTpvLnJlamVjdFdpdGgobCxbdix4LHNdKSx2LnN0YXR1c0NvZGUocSkscT12b2lkIDAsaSYmbS50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3YsayxqP3I6c10pLHAuZmlyZVdpdGgobCxbdix4XSksaSYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt2LGtdKSwtLW4uYWN0aXZlfHxuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB2fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxuLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7bltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksbi5hamF4KHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSl9fSksbi5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gbi5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfSxuLmZuLmV4dGVuZCh7d3JhcEFsbDpmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gbi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLndyYXBBbGwoYS5jYWxsKHRoaXMsYikpfSk6KHRoaXNbMF0mJihiPW4oYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQpLmVxKDApLmNsb25lKCEwKSx0aGlzWzBdLnBhcmVudE5vZGUmJmIuaW5zZXJ0QmVmb3JlKHRoaXNbMF0pLGIubWFwKGZ1bmN0aW9uKCl7dmFyIGE9dGhpczt3aGlsZShhLmZpcnN0RWxlbWVudENoaWxkKWE9YS5maXJzdEVsZW1lbnRDaGlsZDtyZXR1cm4gYX0pLmFwcGVuZCh0aGlzKSksdGhpcyl9LHdyYXBJbm5lcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKG4uaXNGdW5jdGlvbihhKT9mdW5jdGlvbihiKXtuKHRoaXMpLndyYXBJbm5lcihhLmNhbGwodGhpcyxiKSl9OmZ1bmN0aW9uKCl7dmFyIGI9bih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1uLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7bi5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8bih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9fSksbi5leHByLmZpbHRlcnMuaGlkZGVuPWZ1bmN0aW9uKGEpe3JldHVybiBhLm9mZnNldFdpZHRoPD0wJiZhLm9mZnNldEhlaWdodDw9MH0sbi5leHByLmZpbHRlcnMudmlzaWJsZT1mdW5jdGlvbihhKXtyZXR1cm4hbi5leHByLmZpbHRlcnMuaGlkZGVuKGEpfTt2YXIgdmI9LyUyMC9nLHdiPS9cXFtcXF0kLyx4Yj0vXFxyP1xcbi9nLHliPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSx6Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gQWIoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8d2IudGVzdChhKT9kKGEsZSk6QWIoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilBYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpQWIoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZSh2YixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmemIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIXliLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFULnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoeGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZSh4YixcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdH1jYXRjaChhKXt9fTt2YXIgQmI9MCxDYj17fSxEYj17MDoyMDAsMTIyMzoyMDR9LEViPW4uYWpheFNldHRpbmdzLnhocigpO2EuYXR0YWNoRXZlbnQmJmEuYXR0YWNoRXZlbnQoXCJvbnVubG9hZFwiLGZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIENiKUNiW2FdKCl9KSxrLmNvcnM9ISFFYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluIEViLGsuYWpheD1FYj0hIUViLG4uYWpheFRyYW5zcG9ydChmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gay5jb3JzfHxFYiYmIWEuY3Jvc3NEb21haW4/e3NlbmQ6ZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEueGhyKCksZz0rK0JiO2lmKGYub3BlbihhLnR5cGUsYS51cmwsYS5hc3luYyxhLnVzZXJuYW1lLGEucGFzc3dvcmQpLGEueGhyRmllbGRzKWZvcihlIGluIGEueGhyRmllbGRzKWZbZV09YS54aHJGaWVsZHNbZV07YS5taW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUoYS5taW1lVHlwZSksYS5jcm9zc0RvbWFpbnx8Y1tcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihlIGluIGMpZi5zZXRSZXF1ZXN0SGVhZGVyKGUsY1tlXSk7Yj1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtiJiYoZGVsZXRlIENiW2ddLGI9Zi5vbmxvYWQ9Zi5vbmVycm9yPW51bGwsXCJhYm9ydFwiPT09YT9mLmFib3J0KCk6XCJlcnJvclwiPT09YT9kKGYuc3RhdHVzLGYuc3RhdHVzVGV4dCk6ZChEYltmLnN0YXR1c118fGYuc3RhdHVzLGYuc3RhdHVzVGV4dCxcInN0cmluZ1wiPT10eXBlb2YgZi5yZXNwb25zZVRleHQ/e3RleHQ6Zi5yZXNwb25zZVRleHR9OnZvaWQgMCxmLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxmLm9ubG9hZD1iKCksZi5vbmVycm9yPWIoXCJlcnJvclwiKSxiPUNiW2ddPWIoXCJhYm9ydFwiKTt0cnl7Zi5zZW5kKGEuaGFzQ29udGVudCYmYS5kYXRhfHxudWxsKX1jYXRjaChoKXtpZihiKXRocm93IGh9fSxhYm9ydDpmdW5jdGlvbigpe2ImJmIoKX19OnZvaWQgMH0pLG4uYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi8oPzpqYXZhfGVjbWEpc2NyaXB0L30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiBuLmdsb2JhbEV2YWwoYSksYX19fSksbi5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIil9KSxuLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjO3JldHVybntzZW5kOmZ1bmN0aW9uKGQsZSl7Yj1uKFwiPHNjcmlwdD5cIikucHJvcCh7YXN5bmM6ITAsY2hhcnNldDphLnNjcmlwdENoYXJzZXQsc3JjOmEudXJsfSkub24oXCJsb2FkIGVycm9yXCIsYz1mdW5jdGlvbihhKXtiLnJlbW92ZSgpLGM9bnVsbCxhJiZlKFwiZXJyb3JcIj09PWEudHlwZT80MDQ6MjAwLGEudHlwZSl9KSxsLmhlYWQuYXBwZW5kQ2hpbGQoYlswXSl9LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19fSk7dmFyIEZiPVtdLEdiPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87bi5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9RmIucG9wKCl8fG4uZXhwYW5kbytcIl9cIitjYisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksbi5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihHYi50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJiEoYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmR2IudGVzdChiLmRhdGEpJiZcImRhdGFcIik7cmV0dXJuIGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdPyhlPWIuanNvbnBDYWxsYmFjaz1uLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShHYixcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPShkYi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxuLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXthW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssRmIucHVzaChlKSksZyYmbi5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwiKTp2b2lkIDB9KSxuLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKSxiPWJ8fGw7dmFyIGQ9di5leGVjKGEpLGU9IWMmJltdO3JldHVybiBkP1tiLmNyZWF0ZUVsZW1lbnQoZFsxXSldOihkPW4uYnVpbGRGcmFnbWVudChbYV0sYixlKSxlJiZlLmxlbmd0aCYmbihlKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGQuY2hpbGROb2RlcykpfTt2YXIgSGI9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJkhiKXJldHVybiBIYi5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+PTAmJihkPW4udHJpbShhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmUsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuY29tcGxldGUoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goYyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KSx0aGlzfSxuLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxuLmV4cHIuZmlsdGVycy5hbmltYXRlZD1mdW5jdGlvbihhKXtyZXR1cm4gbi5ncmVwKG4udGltZXJzLGZ1bmN0aW9uKGIpe3JldHVybiBhPT09Yi5lbGVtfSkubGVuZ3RofTt2YXIgSWI9YS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7ZnVuY3Rpb24gSmIoYSl7cmV0dXJuIG4uaXNXaW5kb3coYSk/YTo5PT09YS5ub2RlVHlwZSYmYS5kZWZhdWx0Vmlld31uLm9mZnNldD17c2V0T2Zmc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrPW4uY3NzKGEsXCJwb3NpdGlvblwiKSxsPW4oYSksbT17fTtcInN0YXRpY1wiPT09ayYmKGEuc3R5bGUucG9zaXRpb249XCJyZWxhdGl2ZVwiKSxoPWwub2Zmc2V0KCksZj1uLmNzcyhhLFwidG9wXCIpLGk9bi5jc3MoYSxcImxlZnRcIiksaj0oXCJhYnNvbHV0ZVwiPT09a3x8XCJmaXhlZFwiPT09aykmJihmK2kpLmluZGV4T2YoXCJhdXRvXCIpPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxuLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsaCkpLG51bGwhPWIudG9wJiYobS50b3A9Yi50b3AtaC50b3ArZyksbnVsbCE9Yi5sZWZ0JiYobS5sZWZ0PWIubGVmdC1oLmxlZnQrZSksXCJ1c2luZ1wiaW4gYj9iLnVzaW5nLmNhbGwoYSxtKTpsLmNzcyhtKX19LG4uZm4uZXh0ZW5kKHtvZmZzZXQ6ZnVuY3Rpb24oYSl7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdm9pZCAwPT09YT90aGlzOnRoaXMuZWFjaChmdW5jdGlvbihiKXtuLm9mZnNldC5zZXRPZmZzZXQodGhpcyxhLGIpfSk7dmFyIGIsYyxkPXRoaXNbMF0sZT17dG9wOjAsbGVmdDowfSxmPWQmJmQub3duZXJEb2N1bWVudDtpZihmKXJldHVybiBiPWYuZG9jdW1lbnRFbGVtZW50LG4uY29udGFpbnMoYixkKT8odHlwZW9mIGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0IT09VSYmKGU9ZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksYz1KYihmKSx7dG9wOmUudG9wK2MucGFnZVlPZmZzZXQtYi5jbGllbnRUb3AsbGVmdDplLmxlZnQrYy5wYWdlWE9mZnNldC1iLmNsaWVudExlZnR9KTplfSxwb3NpdGlvbjpmdW5jdGlvbigpe2lmKHRoaXNbMF0pe3ZhciBhLGIsYz10aGlzWzBdLGQ9e3RvcDowLGxlZnQ6MH07cmV0dXJuXCJmaXhlZFwiPT09bi5jc3MoYyxcInBvc2l0aW9uXCIpP2I9Yy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTooYT10aGlzLm9mZnNldFBhcmVudCgpLGI9dGhpcy5vZmZzZXQoKSxuLm5vZGVOYW1lKGFbMF0sXCJodG1sXCIpfHwoZD1hLm9mZnNldCgpKSxkLnRvcCs9bi5jc3MoYVswXSxcImJvcmRlclRvcFdpZHRoXCIsITApLGQubGVmdCs9bi5jc3MoYVswXSxcImJvcmRlckxlZnRXaWR0aFwiLCEwKSkse3RvcDpiLnRvcC1kLnRvcC1uLmNzcyhjLFwibWFyZ2luVG9wXCIsITApLGxlZnQ6Yi5sZWZ0LWQubGVmdC1uLmNzcyhjLFwibWFyZ2luTGVmdFwiLCEwKX19fSxvZmZzZXRQYXJlbnQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9mZnNldFBhcmVudHx8SWI7d2hpbGUoYSYmIW4ubm9kZU5hbWUoYSxcImh0bWxcIikmJlwic3RhdGljXCI9PT1uLmNzcyhhLFwicG9zaXRpb25cIikpYT1hLm9mZnNldFBhcmVudDtyZXR1cm4gYXx8SWJ9KX19KSxuLmVhY2goe3Njcm9sbExlZnQ6XCJwYWdlWE9mZnNldFwiLHNjcm9sbFRvcDpcInBhZ2VZT2Zmc2V0XCJ9LGZ1bmN0aW9uKGIsYyl7dmFyIGQ9XCJwYWdlWU9mZnNldFwiPT09YztuLmZuW2JdPWZ1bmN0aW9uKGUpe3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYixlLGYpe3ZhciBnPUpiKGIpO3JldHVybiB2b2lkIDA9PT1mP2c/Z1tjXTpiW2VdOnZvaWQoZz9nLnNjcm9sbFRvKGQ/YS5wYWdlWE9mZnNldDpmLGQ/ZjphLnBhZ2VZT2Zmc2V0KTpiW2VdPWYpfSxiLGUsYXJndW1lbnRzLmxlbmd0aCxudWxsKX19KSxuLmVhY2goW1widG9wXCIsXCJsZWZ0XCJdLGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1tiXT15YShrLnBpeGVsUG9zaXRpb24sZnVuY3Rpb24oYSxjKXtyZXR1cm4gYz8oYz14YShhLGIpLHZhLnRlc3QoYyk/bihhKS5wb3NpdGlvbigpW2JdK1wicHhcIjpjKTp2b2lkIDB9KX0pLG4uZWFjaCh7SGVpZ2h0OlwiaGVpZ2h0XCIsV2lkdGg6XCJ3aWR0aFwifSxmdW5jdGlvbihhLGIpe24uZWFjaCh7cGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtuLmZuW2RdPWZ1bmN0aW9uKGQsZSl7dmFyIGY9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZCksZz1jfHwoZD09PSEwfHxlPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZTtyZXR1cm4gbi5pc1dpbmRvdyhiKT9iLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhlPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGVbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxlW1wib2Zmc2V0XCIrYV0sZVtcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZD9uLmNzcyhiLGMsZyk6bi5zdHlsZShiLGMsZCxnKX0sYixmP2Q6dm9pZCAwLGYsbnVsbCl9fSl9KSxuLmZuLnNpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5sZW5ndGh9LG4uZm4uYW5kU2VsZj1uLmZuLmFkZEJhY2ssXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBufSk7dmFyIEtiPWEualF1ZXJ5LExiPWEuJDtyZXR1cm4gbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1uJiYoYS4kPUxiKSxiJiZhLmpRdWVyeT09PW4mJihhLmpRdWVyeT1LYiksbn0sdHlwZW9mIGI9PT1VJiYoYS5qUXVlcnk9YS4kPW4pLG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWpxdWVyeS5taW4ubWFwIiwiLyogaHR0cDovL3ByaXNtanMuY29tL2Rvd25sb2FkLmh0bWw/dGhlbWVzPXByaXNtLWNveSZsYW5ndWFnZXM9ciZwbHVnaW5zPWxpbmUtaGlnaGxpZ2h0K2xpbmUtbnVtYmVycytzaG93LWludmlzaWJsZXMrYXV0b2xpbmtlcit3cGQrZmlsZS1oaWdobGlnaHQrc2hvdy1sYW5ndWFnZStoaWdobGlnaHQta2V5d29yZHMgKi9cbnNlbGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlJiZzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGU/c2VsZjp7fTt2YXIgUHJpc209ZnVuY3Rpb24oKXt2YXIgZT0vXFxibGFuZyg/OnVhZ2UpPy0oPyFcXCopKFxcdyspXFxiL2ksdD1zZWxmLlByaXNtPXt1dGlsOntlbmNvZGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBuP25ldyBuKGUudHlwZSx0LnV0aWwuZW5jb2RlKGUuY29udGVudCksZS5hbGlhcyk6XCJBcnJheVwiPT09dC51dGlsLnR5cGUoZSk/ZS5tYXAodC51dGlsLmVuY29kZSk6ZS5yZXBsYWNlKC8mL2csXCImYW1wO1wiKS5yZXBsYWNlKC88L2csXCImbHQ7XCIpLnJlcGxhY2UoL1xcdTAwYTAvZyxcIiBcIil9LHR5cGU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5tYXRjaCgvXFxbb2JqZWN0IChcXHcrKVxcXS8pWzFdfSxjbG9uZTpmdW5jdGlvbihlKXt2YXIgbj10LnV0aWwudHlwZShlKTtzd2l0Y2gobil7Y2FzZVwiT2JqZWN0XCI6dmFyIGE9e307Zm9yKHZhciByIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShyKSYmKGFbcl09dC51dGlsLmNsb25lKGVbcl0pKTtyZXR1cm4gYTtjYXNlXCJBcnJheVwiOnJldHVybiBlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gdC51dGlsLmNsb25lKGUpfSl9cmV0dXJuIGV9fSxsYW5ndWFnZXM6e2V4dGVuZDpmdW5jdGlvbihlLG4pe3ZhciBhPXQudXRpbC5jbG9uZSh0Lmxhbmd1YWdlc1tlXSk7Zm9yKHZhciByIGluIG4pYVtyXT1uW3JdO3JldHVybiBhfSxpbnNlcnRCZWZvcmU6ZnVuY3Rpb24oZSxuLGEscil7cj1yfHx0Lmxhbmd1YWdlczt2YXIgaT1yW2VdO2lmKDI9PWFyZ3VtZW50cy5sZW5ndGgpe2E9YXJndW1lbnRzWzFdO2Zvcih2YXIgbCBpbiBhKWEuaGFzT3duUHJvcGVydHkobCkmJihpW2xdPWFbbF0pO3JldHVybiBpfXZhciBzPXt9O2Zvcih2YXIgbyBpbiBpKWlmKGkuaGFzT3duUHJvcGVydHkobykpe2lmKG89PW4pZm9yKHZhciBsIGluIGEpYS5oYXNPd25Qcm9wZXJ0eShsKSYmKHNbbF09YVtsXSk7c1tvXT1pW29dfXJldHVybiB0Lmxhbmd1YWdlcy5ERlModC5sYW5ndWFnZXMsZnVuY3Rpb24odCxuKXtuPT09cltlXSYmdCE9ZSYmKHRoaXNbdF09cyl9KSxyW2VdPXN9LERGUzpmdW5jdGlvbihlLG4sYSl7Zm9yKHZhciByIGluIGUpZS5oYXNPd25Qcm9wZXJ0eShyKSYmKG4uY2FsbChlLHIsZVtyXSxhfHxyKSxcIk9iamVjdFwiPT09dC51dGlsLnR5cGUoZVtyXSk/dC5sYW5ndWFnZXMuREZTKGVbcl0sbik6XCJBcnJheVwiPT09dC51dGlsLnR5cGUoZVtyXSkmJnQubGFuZ3VhZ2VzLkRGUyhlW3JdLG4scikpfX0saGlnaGxpZ2h0QWxsOmZ1bmN0aW9uKGUsbil7Zm9yKHZhciBhLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sIFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gY29kZSwgY29kZVtjbGFzcyo9XCJsYW5nLVwiXSwgW2NsYXNzKj1cImxhbmctXCJdIGNvZGUnKSxpPTA7YT1yW2krK107KXQuaGlnaGxpZ2h0RWxlbWVudChhLGU9PT0hMCxuKX0saGlnaGxpZ2h0RWxlbWVudDpmdW5jdGlvbihhLHIsaSl7Zm9yKHZhciBsLHMsbz1hO28mJiFlLnRlc3Qoby5jbGFzc05hbWUpOylvPW8ucGFyZW50Tm9kZTtpZihvJiYobD0oby5jbGFzc05hbWUubWF0Y2goZSl8fFssXCJcIl0pWzFdLHM9dC5sYW5ndWFnZXNbbF0pLGEuY2xhc3NOYW1lPWEuY2xhc3NOYW1lLnJlcGxhY2UoZSxcIlwiKS5yZXBsYWNlKC9cXHMrL2csXCIgXCIpK1wiIGxhbmd1YWdlLVwiK2wsbz1hLnBhcmVudE5vZGUsL3ByZS9pLnRlc3Qoby5ub2RlTmFtZSkmJihvLmNsYXNzTmFtZT1vLmNsYXNzTmFtZS5yZXBsYWNlKGUsXCJcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKStcIiBsYW5ndWFnZS1cIitsKSxzKXt2YXIgdT1hLnRleHRDb250ZW50O2lmKHUpe3U9dS5yZXBsYWNlKC9eKD86XFxyP1xcbnxcXHIpLyxcIlwiKTt2YXIgZz17ZWxlbWVudDphLGxhbmd1YWdlOmwsZ3JhbW1hcjpzLGNvZGU6dX07aWYodC5ob29rcy5ydW4oXCJiZWZvcmUtaGlnaGxpZ2h0XCIsZyksciYmc2VsZi5Xb3JrZXIpe3ZhciBjPW5ldyBXb3JrZXIodC5maWxlbmFtZSk7Yy5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7Zy5oaWdobGlnaHRlZENvZGU9bi5zdHJpbmdpZnkoSlNPTi5wYXJzZShlLmRhdGEpLGwpLHQuaG9va3MucnVuKFwiYmVmb3JlLWluc2VydFwiLGcpLGcuZWxlbWVudC5pbm5lckhUTUw9Zy5oaWdobGlnaHRlZENvZGUsaSYmaS5jYWxsKGcuZWxlbWVudCksdC5ob29rcy5ydW4oXCJhZnRlci1oaWdobGlnaHRcIixnKX0sYy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7bGFuZ3VhZ2U6Zy5sYW5ndWFnZSxjb2RlOmcuY29kZX0pKX1lbHNlIGcuaGlnaGxpZ2h0ZWRDb2RlPXQuaGlnaGxpZ2h0KGcuY29kZSxnLmdyYW1tYXIsZy5sYW5ndWFnZSksdC5ob29rcy5ydW4oXCJiZWZvcmUtaW5zZXJ0XCIsZyksZy5lbGVtZW50LmlubmVySFRNTD1nLmhpZ2hsaWdodGVkQ29kZSxpJiZpLmNhbGwoYSksdC5ob29rcy5ydW4oXCJhZnRlci1oaWdobGlnaHRcIixnKX19fSxoaWdobGlnaHQ6ZnVuY3Rpb24oZSxhLHIpe3ZhciBpPXQudG9rZW5pemUoZSxhKTtyZXR1cm4gbi5zdHJpbmdpZnkodC51dGlsLmVuY29kZShpKSxyKX0sdG9rZW5pemU6ZnVuY3Rpb24oZSxuKXt2YXIgYT10LlRva2VuLHI9W2VdLGk9bi5yZXN0O2lmKGkpe2Zvcih2YXIgbCBpbiBpKW5bbF09aVtsXTtkZWxldGUgbi5yZXN0fWU6Zm9yKHZhciBsIGluIG4paWYobi5oYXNPd25Qcm9wZXJ0eShsKSYmbltsXSl7dmFyIHM9bltsXTtzPVwiQXJyYXlcIj09PXQudXRpbC50eXBlKHMpP3M6W3NdO2Zvcih2YXIgbz0wO288cy5sZW5ndGg7KytvKXt2YXIgdT1zW29dLGc9dS5pbnNpZGUsYz0hIXUubG9va2JlaGluZCxmPTAsaD11LmFsaWFzO3U9dS5wYXR0ZXJufHx1O2Zvcih2YXIgcD0wO3A8ci5sZW5ndGg7cCsrKXt2YXIgZD1yW3BdO2lmKHIubGVuZ3RoPmUubGVuZ3RoKWJyZWFrIGU7aWYoIShkIGluc3RhbmNlb2YgYSkpe3UubGFzdEluZGV4PTA7dmFyIG09dS5leGVjKGQpO2lmKG0pe2MmJihmPW1bMV0ubGVuZ3RoKTt2YXIgeT1tLmluZGV4LTErZixtPW1bMF0uc2xpY2UoZiksdj1tLmxlbmd0aCxrPXkrdixiPWQuc2xpY2UoMCx5KzEpLHc9ZC5zbGljZShrKzEpLE49W3AsMV07YiYmTi5wdXNoKGIpO3ZhciBPPW5ldyBhKGwsZz90LnRva2VuaXplKG0sZyk6bSxoKTtOLnB1c2goTyksdyYmTi5wdXNoKHcpLEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkocixOKX19fX19cmV0dXJuIHJ9LGhvb2tzOnthbGw6e30sYWRkOmZ1bmN0aW9uKGUsbil7dmFyIGE9dC5ob29rcy5hbGw7YVtlXT1hW2VdfHxbXSxhW2VdLnB1c2gobil9LHJ1bjpmdW5jdGlvbihlLG4pe3ZhciBhPXQuaG9va3MuYWxsW2VdO2lmKGEmJmEubGVuZ3RoKWZvcih2YXIgcixpPTA7cj1hW2krK107KXIobil9fX0sbj10LlRva2VuPWZ1bmN0aW9uKGUsdCxuKXt0aGlzLnR5cGU9ZSx0aGlzLmNvbnRlbnQ9dCx0aGlzLmFsaWFzPW59O2lmKG4uc3RyaW5naWZ5PWZ1bmN0aW9uKGUsYSxyKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihcIkFycmF5XCI9PT10LnV0aWwudHlwZShlKSlyZXR1cm4gZS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIG4uc3RyaW5naWZ5KHQsYSxlKX0pLmpvaW4oXCJcIik7dmFyIGk9e3R5cGU6ZS50eXBlLGNvbnRlbnQ6bi5zdHJpbmdpZnkoZS5jb250ZW50LGEsciksdGFnOlwic3BhblwiLGNsYXNzZXM6W1widG9rZW5cIixlLnR5cGVdLGF0dHJpYnV0ZXM6e30sbGFuZ3VhZ2U6YSxwYXJlbnQ6cn07aWYoXCJjb21tZW50XCI9PWkudHlwZSYmKGkuYXR0cmlidXRlcy5zcGVsbGNoZWNrPVwidHJ1ZVwiKSxlLmFsaWFzKXt2YXIgbD1cIkFycmF5XCI9PT10LnV0aWwudHlwZShlLmFsaWFzKT9lLmFsaWFzOltlLmFsaWFzXTtBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShpLmNsYXNzZXMsbCl9dC5ob29rcy5ydW4oXCJ3cmFwXCIsaSk7dmFyIHM9XCJcIjtmb3IodmFyIG8gaW4gaS5hdHRyaWJ1dGVzKXMrPW8rJz1cIicrKGkuYXR0cmlidXRlc1tvXXx8XCJcIikrJ1wiJztyZXR1cm5cIjxcIitpLnRhZysnIGNsYXNzPVwiJytpLmNsYXNzZXMuam9pbihcIiBcIikrJ1wiICcrcytcIj5cIitpLmNvbnRlbnQrXCI8L1wiK2kudGFnK1wiPlwifSwhc2VsZi5kb2N1bWVudClyZXR1cm4gc2VsZi5hZGRFdmVudExpc3RlbmVyPyhzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsZnVuY3Rpb24oZSl7dmFyIG49SlNPTi5wYXJzZShlLmRhdGEpLGE9bi5sYW5ndWFnZSxyPW4uY29kZTtzZWxmLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHQudXRpbC5lbmNvZGUodC50b2tlbml6ZShyLHQubGFuZ3VhZ2VzW2FdKSkpKSxzZWxmLmNsb3NlKCl9LCExKSxzZWxmLlByaXNtKTpzZWxmLlByaXNtO3ZhciBhPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO3JldHVybiBhPWFbYS5sZW5ndGgtMV0sYSYmKHQuZmlsZW5hbWU9YS5zcmMsZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciYmIWEuaGFzQXR0cmlidXRlKFwiZGF0YS1tYW51YWxcIikmJmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsdC5oaWdobGlnaHRBbGwpKSxzZWxmLlByaXNtfSgpO1widW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzJiYobW9kdWxlLmV4cG9ydHM9UHJpc20pOztcblByaXNtLmxhbmd1YWdlcy5yPXtjb21tZW50Oi8jLisvLHN0cmluZzovKFsnXCJdKSg/OlxcXFw/LikqP1xcMS8sXCJwZXJjZW50LW9wZXJhdG9yXCI6e3BhdHRlcm46LyVbXiVdKj8lLyxhbGlhczpcIm9wZXJhdG9yXCJ9LFwiYm9vbGVhblwiOi9cXGIoPzpUUlVFfEZBTFNFKVxcYi8sZWxsaXBzaXM6L1xcLlxcLig/OlxcLnxcXGQrKS8sbnVtYmVyOlsvXFxiKD86TmFOfEluZilcXGIvLC9cXGIoPzoweFtcXGRBLUZhLWZdKyg/OlxcLlxcZCopP3xcXGQqXFwuP1xcZCspKD86W0VlUHBdWystXT8/XFxkKyk/W2lMXT9cXGIvXSxrZXl3b3JkOi9cXGIoPzppZnxlbHNlfHJlcGVhdHx3aGlsZXxmdW5jdGlvbnxmb3J8aW58bmV4dHxicmVha3xOVUxMfE5BfE5BX2ludGVnZXJffE5BX3JlYWxffE5BX2NvbXBsZXhffE5BX2NoYXJhY3Rlcl8pXFxiLyxvcGVyYXRvcjovLT4+P3w8PzwtfFs8PiE9XT0/fDo6P3wmJj98XFx8XFx8P3xbK1xcLSpcXC9eJEB+XS8scHVuY3R1YXRpb246L1soKXt9XFxbXFxdLDtdL307O1xuIWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3JldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgodHx8ZG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoZSkpfWZ1bmN0aW9uIHQoZSx0KXtyZXR1cm4gdD1cIiBcIit0K1wiIFwiLChcIiBcIitlLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSgvW1xcblxcdF0vZyxcIiBcIikuaW5kZXhPZih0KT4tMX1mdW5jdGlvbiBuKGUsbixpKXtmb3IodmFyIHIsYT1uLnJlcGxhY2UoL1xccysvZyxcIlwiKS5zcGxpdChcIixcIiksbD0rZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmUtb2Zmc2V0XCIpfHwwLG89cGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGUpLmxpbmVIZWlnaHQpLGQ9MDtyPWFbZCsrXTspe3I9ci5zcGxpdChcIi1cIik7dmFyIGM9K3JbMF0saD0rclsxXXx8YyxzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cy50ZXh0Q29udGVudD1BcnJheShoLWMrMikuam9pbihcIiBcXG5cIikscy5jbGFzc05hbWU9KGl8fFwiXCIpK1wiIGxpbmUtaGlnaGxpZ2h0XCIsdChlLFwibGluZS1udW1iZXJzXCIpfHwocy5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXJ0XCIsYyksaD5jJiZzLnNldEF0dHJpYnV0ZShcImRhdGEtZW5kXCIsaCkpLHMuc3R5bGUudG9wPShjLWwtMSkqbytcInB4XCIsdChlLFwibGluZS1udW1iZXJzXCIpP2UuYXBwZW5kQ2hpbGQocyk6KGUucXVlcnlTZWxlY3RvcihcImNvZGVcIil8fGUpLmFwcGVuZENoaWxkKHMpfX1mdW5jdGlvbiBpKCl7dmFyIHQ9bG9jYXRpb24uaGFzaC5zbGljZSgxKTtlKFwiLnRlbXBvcmFyeS5saW5lLWhpZ2hsaWdodFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlKX0pO3ZhciBpPSh0Lm1hdGNoKC9cXC4oW1xcZCwtXSspJC8pfHxbLFwiXCJdKVsxXTtpZihpJiYhZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodCkpe3ZhciByPXQuc2xpY2UoMCx0Lmxhc3RJbmRleE9mKFwiLlwiKSksYT1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChyKTthJiYoYS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWxpbmVcIil8fGEuc2V0QXR0cmlidXRlKFwiZGF0YS1saW5lXCIsXCJcIiksbihhLGksXCJ0ZW1wb3JhcnkgXCIpLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcG9yYXJ5LmxpbmUtaGlnaGxpZ2h0XCIpLnNjcm9sbEludG9WaWV3KCkpfX1pZih3aW5kb3cuUHJpc20pe3ZhciByPShjcmxmPS9cXHI/XFxufFxcci9nLDApO1ByaXNtLmhvb2tzLmFkZChcImFmdGVyLWhpZ2hsaWdodFwiLGZ1bmN0aW9uKHQpe3ZhciBhPXQuZWxlbWVudC5wYXJlbnROb2RlLGw9YSYmYS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmVcIik7YSYmbCYmL3ByZS9pLnRlc3QoYS5ub2RlTmFtZSkmJihjbGVhclRpbWVvdXQociksZShcIi5saW5lLWhpZ2hsaWdodFwiLGEpLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpfSksbihhLGwpLHI9c2V0VGltZW91dChpLDEpKX0pLGFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsaSl9fSgpOztcblByaXNtLmhvb2tzLmFkZChcImFmdGVyLWhpZ2hsaWdodFwiLGZ1bmN0aW9uKGUpe3ZhciB0PWUuZWxlbWVudC5wYXJlbnROb2RlLHM9L1xccypcXGJsaW5lLW51bWJlcnNcXGJcXHMqLztpZih0JiYvcHJlL2kudGVzdCh0Lm5vZGVOYW1lKSYmKHMudGVzdCh0LmNsYXNzTmFtZSl8fHMudGVzdChlLmVsZW1lbnQuY2xhc3NOYW1lKSkpe3MudGVzdChlLmVsZW1lbnQuY2xhc3NOYW1lKSYmKGUuZWxlbWVudC5jbGFzc05hbWU9ZS5lbGVtZW50LmNsYXNzTmFtZS5yZXBsYWNlKHMsXCJcIikpLHMudGVzdCh0LmNsYXNzTmFtZSl8fCh0LmNsYXNzTmFtZSs9XCIgbGluZS1udW1iZXJzXCIpO3ZhciBhLG49MStlLmNvZGUuc3BsaXQoXCJcXG5cIikubGVuZ3RoLGw9bmV3IEFycmF5KG4pO2w9bC5qb2luKFwiPHNwYW4+PC9zcGFuPlwiKSxhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpLGEuY2xhc3NOYW1lPVwibGluZS1udW1iZXJzLXJvd3NcIixhLmlubmVySFRNTD1sLHQuaGFzQXR0cmlidXRlKFwiZGF0YS1zdGFydFwiKSYmKHQuc3R5bGUuY291bnRlclJlc2V0PVwibGluZW51bWJlciBcIisocGFyc2VJbnQodC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXJ0XCIpLDEwKS0xKSksZS5lbGVtZW50LmFwcGVuZENoaWxkKGEpfX0pOztcbiFmdW5jdGlvbigpe2lmKHdpbmRvdy5QcmlzbSlmb3IodmFyIHIgaW4gUHJpc20ubGFuZ3VhZ2VzKXt2YXIgZz1QcmlzbS5sYW5ndWFnZXNbcl07Zy50YWI9L1xcdC9nLGcuY3JsZj0vXFxyXFxuL2csZy5sZj0vXFxuL2csZy5jcj0vXFxyL2d9fSgpOztcbiFmdW5jdGlvbigpe2lmKHNlbGYuUHJpc20pe3ZhciBpPS9cXGIoW2Etel17Myw3fTpcXC9cXC98dGVsOilbXFx3XFwtKyV+Ly46Iz0/JmFtcDtdKy8sbj0vXFxiXFxTK0BbXFx3Ll0rW2Etel17Mn0vLHQ9L1xcWyhbXlxcXV0rKV1cXCgoW14pXSspXFwpLyxlPVtcImNvbW1lbnRcIixcInVybFwiLFwiYXR0ci12YWx1ZVwiLFwic3RyaW5nXCJdO2Zvcih2YXIgYSBpbiBQcmlzbS5sYW5ndWFnZXMpe3ZhciByPVByaXNtLmxhbmd1YWdlc1thXTtQcmlzbS5sYW5ndWFnZXMuREZTKHIsZnVuY3Rpb24oYSxyLGwpe2UuaW5kZXhPZihsKT4tMSYmXCJBcnJheVwiIT09UHJpc20udXRpbC50eXBlKHIpJiYoci5wYXR0ZXJufHwocj10aGlzW2FdPXtwYXR0ZXJuOnJ9KSxyLmluc2lkZT1yLmluc2lkZXx8e30sXCJjb21tZW50XCI9PWwmJihyLmluc2lkZVtcIm1kLWxpbmtcIl09dCksXCJhdHRyLXZhbHVlXCI9PWw/UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcImluc2lkZVwiLFwicHVuY3R1YXRpb25cIix7XCJ1cmwtbGlua1wiOml9LHIpOnIuaW5zaWRlW1widXJsLWxpbmtcIl09aSxyLmluc2lkZVtcImVtYWlsLWxpbmtcIl09bil9KSxyW1widXJsLWxpbmtcIl09aSxyW1wiZW1haWwtbGlua1wiXT1ufVByaXNtLmhvb2tzLmFkZChcIndyYXBcIixmdW5jdGlvbihpKXtpZigvLWxpbmskLy50ZXN0KGkudHlwZSkpe2kudGFnPVwiYVwiO3ZhciBuPWkuY29udGVudDtpZihcImVtYWlsLWxpbmtcIj09aS50eXBlJiYwIT1uLmluZGV4T2YoXCJtYWlsdG86XCIpKW49XCJtYWlsdG86XCIrbjtlbHNlIGlmKFwibWQtbGlua1wiPT1pLnR5cGUpe3ZhciBlPWkuY29udGVudC5tYXRjaCh0KTtuPWVbMl0saS5jb250ZW50PWVbMV19aS5hdHRyaWJ1dGVzLmhyZWY9bn19KX19KCk7O1xuIWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgYT1lLnRvTG93ZXJDYXNlKCk7aWYodC5IVE1MW2FdKXJldHVyblwiaHRtbFwiO2lmKHQuU1ZHW2VdKXJldHVyblwic3ZnXCI7aWYodC5NYXRoTUxbZV0pcmV0dXJuXCJtYXRobWxcIjtpZigwIT09dC5IVE1MW2FdKXt2YXIgbj0oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlKS50b1N0cmluZygpLm1hdGNoKC9cXFtvYmplY3QgSFRNTCguKylFbGVtZW50XFxdLyl8fFtdKVsxXTtpZihuJiZcIlVua25vd25cIiE9bilyZXR1cm4gdC5IVE1MW2FdPTEsXCJodG1sXCJ9aWYodC5IVE1MW2FdPTAsMCE9PXQuU1ZHW2VdKXt2YXIgcj0oZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixlKS50b1N0cmluZygpLm1hdGNoKC9cXFtvYmplY3QgU1ZHKC4rKUVsZW1lbnRcXF0vKXx8W10pWzFdO2lmKHImJlwiVW5rbm93blwiIT1yKXJldHVybiB0LlNWR1tlXT0xLFwic3ZnXCJ9cmV0dXJuIHQuU1ZHW2VdPTAsMCE9PXQuTWF0aE1MW2VdJiYwPT09ZS5pbmRleE9mKFwibVwiKT8odC5NYXRoTUxbZV09MSxcIm1hdGhtbFwiKToodC5NYXRoTUxbZV09MCxudWxsKX1pZihzZWxmLlByaXNtKXtpZihQcmlzbS5sYW5ndWFnZXMuY3NzJiYoUHJpc20ubGFuZ3VhZ2VzLmNzcy5hdHJ1bGUuaW5zaWRlW1wiYXRydWxlLWlkXCJdPS9eQFtcXHctXSsvLFByaXNtLmxhbmd1YWdlcy5jc3Muc2VsZWN0b3IucGF0dGVybj8oUHJpc20ubGFuZ3VhZ2VzLmNzcy5zZWxlY3Rvci5pbnNpZGVbXCJwc2V1ZG8tY2xhc3NcIl09LzpbXFx3LV0rLyxQcmlzbS5sYW5ndWFnZXMuY3NzLnNlbGVjdG9yLmluc2lkZVtcInBzZXVkby1lbGVtZW50XCJdPS86OltcXHctXSsvKTpQcmlzbS5sYW5ndWFnZXMuY3NzLnNlbGVjdG9yPXtwYXR0ZXJuOlByaXNtLmxhbmd1YWdlcy5jc3Muc2VsZWN0b3IsaW5zaWRlOntcInBzZXVkby1jbGFzc1wiOi86W1xcdy1dKy8sXCJwc2V1ZG8tZWxlbWVudFwiOi86OltcXHctXSsvfX0pLFByaXNtLmxhbmd1YWdlcy5tYXJrdXApe1ByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmluc2lkZS50YWcuaW5zaWRlW1widGFnLWlkXCJdPS9bXFx3LV0rLzt2YXIgdD17SFRNTDp7YToxLGFiYnI6MSxhY3JvbnltOjEsYjoxLGJhc2Vmb250OjEsYmRvOjEsYmlnOjEsYmxpbms6MSxjaXRlOjEsY29kZToxLGRmbjoxLGVtOjEsa2JkOjEsaToxLHJwOjEscnQ6MSxydWJ5OjEsczoxLHNhbXA6MSxzbWFsbDoxLHNwYWNlcjoxLHN0cmlrZToxLHN0cm9uZzoxLHN1YjoxLHN1cDoxLHRpbWU6MSx0dDoxLHU6MSxcInZhclwiOjEsd2JyOjEsbm9mcmFtZXM6MSxzdW1tYXJ5OjEsY29tbWFuZDoxLGR0OjEsZGQ6MSxmaWd1cmU6MSxmaWdjYXB0aW9uOjEsY2VudGVyOjEsc2VjdGlvbjoxLG5hdjoxLGFydGljbGU6MSxhc2lkZToxLGhncm91cDoxLGhlYWRlcjoxLGZvb3RlcjoxLGFkZHJlc3M6MSxub3NjcmlwdDoxLGlzSW5kZXg6MSxtYWluOjEsbWFyazoxLG1hcnF1ZWU6MSxtZXRlcjoxLG1lbnU6MX0sU1ZHOnthbmltYXRlQ29sb3I6MSxhbmltYXRlTW90aW9uOjEsYW5pbWF0ZVRyYW5zZm9ybToxLGdseXBoOjEsZmVCbGVuZDoxLGZlQ29sb3JNYXRyaXg6MSxmZUNvbXBvbmVudFRyYW5zZmVyOjEsZmVGdW5jUjoxLGZlRnVuY0c6MSxmZUZ1bmNCOjEsZmVGdW5jQToxLGZlQ29tcG9zaXRlOjEsZmVDb252b2x2ZU1hdHJpeDoxLGZlRGlmZnVzZUxpZ2h0aW5nOjEsZmVEaXNwbGFjZW1lbnRNYXA6MSxmZUZsb29kOjEsZmVHYXVzc2lhbkJsdXI6MSxmZUltYWdlOjEsZmVNZXJnZToxLGZlTWVyZ2VOb2RlOjEsZmVNb3JwaG9sb2d5OjEsZmVPZmZzZXQ6MSxmZVNwZWN1bGFyTGlnaHRpbmc6MSxmZVRpbGU6MSxmZVR1cmJ1bGVuY2U6MSxmZURpc3RhbnRMaWdodDoxLGZlUG9pbnRMaWdodDoxLGZlU3BvdExpZ2h0OjEsbGluZWFyR3JhZGllbnQ6MSxyYWRpYWxHcmFkaWVudDoxLGFsdEdseXBoOjEsdGV4dFBhdGg6MSx0cmVmOjEsYWx0Z2x5cGg6MSx0ZXh0cGF0aDoxLHRyZWY6MSxhbHRnbHlwaGRlZjoxLGFsdGdseXBoaXRlbToxLGNsaXBQYXRoOjEsXCJjb2xvci1wcm9maWxlXCI6MSxjdXJzb3I6MSxcImZvbnQtZmFjZVwiOjEsXCJmb250LWZhY2UtZm9ybWF0XCI6MSxcImZvbnQtZmFjZS1uYW1lXCI6MSxcImZvbnQtZmFjZS1zcmNcIjoxLFwiZm9udC1mYWNlLXVyaVwiOjEsZm9yZWlnbk9iamVjdDoxLGdseXBoOjEsZ2x5cGhSZWY6MSxoa2VybjoxLHZrZXJuOjF9LE1hdGhNTDp7fX19dmFyIGE7UHJpc20uaG9va3MuYWRkKFwid3JhcFwiLGZ1bmN0aW9uKHQpe2lmKChbXCJ0YWctaWRcIl0uaW5kZXhPZih0LnR5cGUpPi0xfHxcInByb3BlcnR5XCI9PXQudHlwZSYmMCE9dC5jb250ZW50LmluZGV4T2YoXCItXCIpfHxcImF0cnVsZS1pZFwiPT10LnR5cGUmJjAhPXQuY29udGVudC5pbmRleE9mKFwiQC1cIil8fFwicHNldWRvLWNsYXNzXCI9PXQudHlwZSYmMCE9dC5jb250ZW50LmluZGV4T2YoXCI6LVwiKXx8XCJwc2V1ZG8tZWxlbWVudFwiPT10LnR5cGUmJjAhPXQuY29udGVudC5pbmRleE9mKFwiOjotXCIpfHxcImF0dHItbmFtZVwiPT10LnR5cGUmJjAhPXQuY29udGVudC5pbmRleE9mKFwiZGF0YS1cIikpJiYtMT09PXQuY29udGVudC5pbmRleE9mKFwiPFwiKSl7dmFyIG49XCJ3L2luZGV4LnBocD9mdWxsdGV4dCZzZWFyY2g9XCI7dC50YWc9XCJhXCI7dmFyIHI9XCJodHRwOi8vZG9jcy53ZWJwbGF0Zm9ybS5vcmcvXCI7XCJjc3NcIj09dC5sYW5ndWFnZT8ocis9XCJ3aWtpL2Nzcy9cIixcInByb3BlcnR5XCI9PXQudHlwZT9yKz1cInByb3BlcnRpZXMvXCI6XCJhdHJ1bGUtaWRcIj09dC50eXBlP3IrPVwiYXRydWxlcy9cIjpcInBzZXVkby1jbGFzc1wiPT10LnR5cGU/cis9XCJzZWxlY3RvcnMvcHNldWRvLWNsYXNzZXMvXCI6XCJwc2V1ZG8tZWxlbWVudFwiPT10LnR5cGUmJihyKz1cInNlbGVjdG9ycy9wc2V1ZG8tZWxlbWVudHMvXCIpKTpcIm1hcmt1cFwiPT10Lmxhbmd1YWdlJiYoXCJ0YWctaWRcIj09dC50eXBlPyhhPWUodC5jb250ZW50KXx8YSxyKz1hP1wid2lraS9cIithK1wiL2VsZW1lbnRzL1wiOm4pOlwiYXR0ci1uYW1lXCI9PXQudHlwZSYmKHIrPWE/XCJ3aWtpL1wiK2ErXCIvYXR0cmlidXRlcy9cIjpuKSkscis9dC5jb250ZW50LHQuYXR0cmlidXRlcy5ocmVmPXIsdC5hdHRyaWJ1dGVzLnRhcmdldD1cIl9ibGFua1wifX0pfX0oKTs7XG4hZnVuY3Rpb24oKXtzZWxmLlByaXNtJiZzZWxmLmRvY3VtZW50JiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yJiYoc2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0PWZ1bmN0aW9uKCl7dmFyIGU9e2pzOlwiamF2YXNjcmlwdFwiLGh0bWw6XCJtYXJrdXBcIixzdmc6XCJtYXJrdXBcIix4bWw6XCJtYXJrdXBcIixweTpcInB5dGhvblwiLHJiOlwicnVieVwiLHBzMTpcInBvd2Vyc2hlbGxcIixwc20xOlwicG93ZXJzaGVsbFwifTtBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlW2RhdGEtc3JjXVwiKSkuZm9yRWFjaChmdW5jdGlvbih0KXtmb3IodmFyIHIscz10LmdldEF0dHJpYnV0ZShcImRhdGEtc3JjXCIpLGE9dCxuPS9cXGJsYW5nKD86dWFnZSk/LSg/IVxcKikoXFx3KylcXGIvaTthJiYhbi50ZXN0KGEuY2xhc3NOYW1lKTspYT1hLnBhcmVudE5vZGU7aWYoYSYmKHI9KHQuY2xhc3NOYW1lLm1hdGNoKG4pfHxbLFwiXCJdKVsxXSksIXIpe3ZhciBsPShzLm1hdGNoKC9cXC4oXFx3KykkLyl8fFssXCJcIl0pWzFdO3I9ZVtsXXx8bH12YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtvLmNsYXNzTmFtZT1cImxhbmd1YWdlLVwiK3IsdC50ZXh0Q29udGVudD1cIlwiLG8udGV4dENvbnRlbnQ9XCJMb2FkaW5n4oCmXCIsdC5hcHBlbmRDaGlsZChvKTt2YXIgaT1uZXcgWE1MSHR0cFJlcXVlc3Q7aS5vcGVuKFwiR0VUXCIscywhMCksaS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXs0PT1pLnJlYWR5U3RhdGUmJihpLnN0YXR1czw0MDAmJmkucmVzcG9uc2VUZXh0PyhvLnRleHRDb250ZW50PWkucmVzcG9uc2VUZXh0LFByaXNtLmhpZ2hsaWdodEVsZW1lbnQobykpOm8udGV4dENvbnRlbnQ9aS5zdGF0dXM+PTQwMD9cIuKcliBFcnJvciBcIitpLnN0YXR1cytcIiB3aGlsZSBmZXRjaGluZyBmaWxlOiBcIitpLnN0YXR1c1RleHQ6XCLinJYgRXJyb3I6IEZpbGUgZG9lcyBub3QgZXhpc3Qgb3IgaXMgZW1wdHlcIil9LGkuc2VuZChudWxsKX0pfSxzZWxmLlByaXNtLmZpbGVIaWdobGlnaHQoKSl9KCk7O1xuIWZ1bmN0aW9uKCl7aWYoc2VsZi5QcmlzbSl7dmFyIGU9e2NzaGFycDpcIkMjXCIsY3BwOlwiQysrXCJ9O1ByaXNtLmhvb2tzLmFkZChcImJlZm9yZS1oaWdobGlnaHRcIixmdW5jdGlvbihhKXt2YXIgdD1hLmVsZW1lbnQucGFyZW50Tm9kZTtpZih0JiYvcHJlL2kudGVzdCh0Lm5vZGVOYW1lKSl7dmFyIGk9ZVthLmxhbmd1YWdlXXx8YS5sYW5ndWFnZTt0LnNldEF0dHJpYnV0ZShcImRhdGEtbGFuZ3VhZ2VcIixpKX19KX19KCk7O1xuIWZ1bmN0aW9uKCl7c2VsZi5QcmlzbSYmUHJpc20uaG9va3MuYWRkKFwid3JhcFwiLGZ1bmN0aW9uKHMpe1wia2V5d29yZFwiPT09cy50eXBlJiZzLmNsYXNzZXMucHVzaChcImtleXdvcmQtXCIrcy5jb250ZW50KX0pfSgpOztcbiIsIi8qIVxuICogcmV2ZWFsLmpzXG4gKiBodHRwOi8vbGFiLmhha2ltLnNlL3JldmVhbC1qc1xuICogTUlUIGxpY2Vuc2VkXG4gKlxuICogQ29weXJpZ2h0IChDKSAyMDE1IEhha2ltIEVsIEhhdHRhYiwgaHR0cDovL2hha2ltLnNlXG4gKi9cbihmdW5jdGlvbiggcm9vdCwgZmFjdG9yeSApIHtcblx0aWYoIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG5cdFx0ZGVmaW5lKCBmdW5jdGlvbigpIHtcblx0XHRcdHJvb3QuUmV2ZWFsID0gZmFjdG9yeSgpO1xuXHRcdFx0cmV0dXJuIHJvb3QuUmV2ZWFsO1xuXHRcdH0gKTtcblx0fSBlbHNlIGlmKCB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgKSB7XG5cdFx0Ly8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUy5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0fSBlbHNlIHtcblx0XHQvLyBCcm93c2VyIGdsb2JhbHMuXG5cdFx0cm9vdC5SZXZlYWwgPSBmYWN0b3J5KCk7XG5cdH1cbn0oIHRoaXMsIGZ1bmN0aW9uKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgUmV2ZWFsO1xuXG5cdHZhciBTTElERVNfU0VMRUNUT1IgPSAnLnNsaWRlcyBzZWN0aW9uJyxcblx0XHRIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiA9ICcuc2xpZGVzPnNlY3Rpb24nLFxuXHRcdFZFUlRJQ0FMX1NMSURFU19TRUxFQ1RPUiA9ICcuc2xpZGVzPnNlY3Rpb24ucHJlc2VudD5zZWN0aW9uJyxcblx0XHRIT01FX1NMSURFX1NFTEVDVE9SID0gJy5zbGlkZXM+c2VjdGlvbjpmaXJzdC1vZi10eXBlJyxcblxuXHRcdC8vIENvbmZpZ3VyYXRpb24gZGVmYXVsdHMsIGNhbiBiZSBvdmVycmlkZGVuIGF0IGluaXRpYWxpemF0aW9uIHRpbWVcblx0XHRjb25maWcgPSB7XG5cblx0XHRcdC8vIFRoZSBcIm5vcm1hbFwiIHNpemUgb2YgdGhlIHByZXNlbnRhdGlvbiwgYXNwZWN0IHJhdGlvIHdpbGwgYmUgcHJlc2VydmVkXG5cdFx0XHQvLyB3aGVuIHRoZSBwcmVzZW50YXRpb24gaXMgc2NhbGVkIHRvIGZpdCBkaWZmZXJlbnQgcmVzb2x1dGlvbnNcblx0XHRcdHdpZHRoOiA5NjAsXG5cdFx0XHRoZWlnaHQ6IDcwMCxcblxuXHRcdFx0Ly8gRmFjdG9yIG9mIHRoZSBkaXNwbGF5IHNpemUgdGhhdCBzaG91bGQgcmVtYWluIGVtcHR5IGFyb3VuZCB0aGUgY29udGVudFxuXHRcdFx0bWFyZ2luOiAwLjEsXG5cblx0XHRcdC8vIEJvdW5kcyBmb3Igc21hbGxlc3QvbGFyZ2VzdCBwb3NzaWJsZSBzY2FsZSB0byBhcHBseSB0byBjb250ZW50XG5cdFx0XHRtaW5TY2FsZTogMC4yLFxuXHRcdFx0bWF4U2NhbGU6IDEuNSxcblxuXHRcdFx0Ly8gRGlzcGxheSBjb250cm9scyBpbiB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lclxuXHRcdFx0Y29udHJvbHM6IHRydWUsXG5cblx0XHRcdC8vIERpc3BsYXkgYSBwcmVzZW50YXRpb24gcHJvZ3Jlc3MgYmFyXG5cdFx0XHRwcm9ncmVzczogdHJ1ZSxcblxuXHRcdFx0Ly8gRGlzcGxheSB0aGUgcGFnZSBudW1iZXIgb2YgdGhlIGN1cnJlbnQgc2xpZGVcblx0XHRcdHNsaWRlTnVtYmVyOiBmYWxzZSxcblxuXHRcdFx0Ly8gUHVzaCBlYWNoIHNsaWRlIGNoYW5nZSB0byB0aGUgYnJvd3NlciBoaXN0b3J5XG5cdFx0XHRoaXN0b3J5OiBmYWxzZSxcblxuXHRcdFx0Ly8gRW5hYmxlIGtleWJvYXJkIHNob3J0Y3V0cyBmb3IgbmF2aWdhdGlvblxuXHRcdFx0a2V5Ym9hcmQ6IHRydWUsXG5cblx0XHRcdC8vIE9wdGlvbmFsIGZ1bmN0aW9uIHRoYXQgYmxvY2tzIGtleWJvYXJkIGV2ZW50cyB3aGVuIHJldHVuaW5nIGZhbHNlXG5cdFx0XHRrZXlib2FyZENvbmRpdGlvbjogbnVsbCxcblxuXHRcdFx0Ly8gRW5hYmxlIHRoZSBzbGlkZSBvdmVydmlldyBtb2RlXG5cdFx0XHRvdmVydmlldzogdHJ1ZSxcblxuXHRcdFx0Ly8gVmVydGljYWwgY2VudGVyaW5nIG9mIHNsaWRlc1xuXHRcdFx0Y2VudGVyOiB0cnVlLFxuXG5cdFx0XHQvLyBFbmFibGVzIHRvdWNoIG5hdmlnYXRpb24gb24gZGV2aWNlcyB3aXRoIHRvdWNoIGlucHV0XG5cdFx0XHR0b3VjaDogdHJ1ZSxcblxuXHRcdFx0Ly8gTG9vcCB0aGUgcHJlc2VudGF0aW9uXG5cdFx0XHRsb29wOiBmYWxzZSxcblxuXHRcdFx0Ly8gQ2hhbmdlIHRoZSBwcmVzZW50YXRpb24gZGlyZWN0aW9uIHRvIGJlIFJUTFxuXHRcdFx0cnRsOiBmYWxzZSxcblxuXHRcdFx0Ly8gVHVybnMgZnJhZ21lbnRzIG9uIGFuZCBvZmYgZ2xvYmFsbHlcblx0XHRcdGZyYWdtZW50czogdHJ1ZSxcblxuXHRcdFx0Ly8gRmxhZ3MgaWYgdGhlIHByZXNlbnRhdGlvbiBpcyBydW5uaW5nIGluIGFuIGVtYmVkZGVkIG1vZGUsXG5cdFx0XHQvLyBpLmUuIGNvbnRhaW5lZCB3aXRoaW4gYSBsaW1pdGVkIHBvcnRpb24gb2YgdGhlIHNjcmVlblxuXHRcdFx0ZW1iZWRkZWQ6IGZhbHNlLFxuXG5cdFx0XHQvLyBGbGFncyBpZiB3ZSBzaG91bGQgc2hvdyBhIGhlbHAgb3ZlcmxheSB3aGVuIHRoZSBxdWVzdGlvbm1hcmtcblx0XHRcdC8vIGtleSBpcyBwcmVzc2VkXG5cdFx0XHRoZWxwOiB0cnVlLFxuXG5cdFx0XHQvLyBGbGFncyBpZiBpdCBzaG91bGQgYmUgcG9zc2libGUgdG8gcGF1c2UgdGhlIHByZXNlbnRhdGlvbiAoYmxhY2tvdXQpXG5cdFx0XHRwYXVzZTogdHJ1ZSxcblxuXHRcdFx0Ly8gTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIGF1dG9tYXRpY2FsbHkgcHJvY2VlZGluZyB0byB0aGVcblx0XHRcdC8vIG5leHQgc2xpZGUsIGRpc2FibGVkIHdoZW4gc2V0IHRvIDAsIHRoaXMgdmFsdWUgY2FuIGJlIG92ZXJ3cml0dGVuXG5cdFx0XHQvLyBieSB1c2luZyBhIGRhdGEtYXV0b3NsaWRlIGF0dHJpYnV0ZSBvbiB5b3VyIHNsaWRlc1xuXHRcdFx0YXV0b1NsaWRlOiAwLFxuXG5cdFx0XHQvLyBTdG9wIGF1dG8tc2xpZGluZyBhZnRlciB1c2VyIGlucHV0XG5cdFx0XHRhdXRvU2xpZGVTdG9wcGFibGU6IHRydWUsXG5cblx0XHRcdC8vIEVuYWJsZSBzbGlkZSBuYXZpZ2F0aW9uIHZpYSBtb3VzZSB3aGVlbFxuXHRcdFx0bW91c2VXaGVlbDogZmFsc2UsXG5cblx0XHRcdC8vIEFwcGx5IGEgM0Qgcm9sbCB0byBsaW5rcyBvbiBob3ZlclxuXHRcdFx0cm9sbGluZ0xpbmtzOiBmYWxzZSxcblxuXHRcdFx0Ly8gSGlkZXMgdGhlIGFkZHJlc3MgYmFyIG9uIG1vYmlsZSBkZXZpY2VzXG5cdFx0XHRoaWRlQWRkcmVzc0JhcjogdHJ1ZSxcblxuXHRcdFx0Ly8gT3BlbnMgbGlua3MgaW4gYW4gaWZyYW1lIHByZXZpZXcgb3ZlcmxheVxuXHRcdFx0cHJldmlld0xpbmtzOiBmYWxzZSxcblxuXHRcdFx0Ly8gRXhwb3NlcyB0aGUgcmV2ZWFsLmpzIEFQSSB0aHJvdWdoIHdpbmRvdy5wb3N0TWVzc2FnZVxuXHRcdFx0cG9zdE1lc3NhZ2U6IHRydWUsXG5cblx0XHRcdC8vIERpc3BhdGNoZXMgYWxsIHJldmVhbC5qcyBldmVudHMgdG8gdGhlIHBhcmVudCB3aW5kb3cgdGhyb3VnaCBwb3N0TWVzc2FnZVxuXHRcdFx0cG9zdE1lc3NhZ2VFdmVudHM6IGZhbHNlLFxuXG5cdFx0XHQvLyBGb2N1c2VzIGJvZHkgd2hlbiBwYWdlIGNoYW5nZXMgdmlzaWJsaXR5IHRvIGVuc3VyZSBrZXlib2FyZCBzaG9ydGN1dHMgd29ya1xuXHRcdFx0Zm9jdXNCb2R5T25QYWdlVmlzaWJpbGl0eUNoYW5nZTogdHJ1ZSxcblxuXHRcdFx0Ly8gVHJhbnNpdGlvbiBzdHlsZVxuXHRcdFx0dHJhbnNpdGlvbjogJ3NsaWRlJywgLy8gbm9uZS9mYWRlL3NsaWRlL2NvbnZleC9jb25jYXZlL3pvb21cblxuXHRcdFx0Ly8gVHJhbnNpdGlvbiBzcGVlZFxuXHRcdFx0dHJhbnNpdGlvblNwZWVkOiAnZGVmYXVsdCcsIC8vIGRlZmF1bHQvZmFzdC9zbG93XG5cblx0XHRcdC8vIFRyYW5zaXRpb24gc3R5bGUgZm9yIGZ1bGwgcGFnZSBzbGlkZSBiYWNrZ3JvdW5kc1xuXHRcdFx0YmFja2dyb3VuZFRyYW5zaXRpb246ICdmYWRlJywgLy8gbm9uZS9mYWRlL3NsaWRlL2NvbnZleC9jb25jYXZlL3pvb21cblxuXHRcdFx0Ly8gUGFyYWxsYXggYmFja2dyb3VuZCBpbWFnZVxuXHRcdFx0cGFyYWxsYXhCYWNrZ3JvdW5kSW1hZ2U6ICcnLCAvLyBDU1Mgc3ludGF4LCBlLmcuIFwiYS5qcGdcIlxuXG5cdFx0XHQvLyBQYXJhbGxheCBiYWNrZ3JvdW5kIHNpemVcblx0XHRcdHBhcmFsbGF4QmFja2dyb3VuZFNpemU6ICcnLCAvLyBDU1Mgc3ludGF4LCBlLmcuIFwiMzAwMHB4IDIwMDBweFwiXG5cblx0XHRcdC8vIEFtb3VudCBvZiBwaXhlbHMgdG8gbW92ZSB0aGUgcGFyYWxsYXggYmFja2dyb3VuZCBwZXIgc2xpZGUgc3RlcFxuXHRcdFx0cGFyYWxsYXhCYWNrZ3JvdW5kSG9yaXpvbnRhbDogbnVsbCxcblx0XHRcdHBhcmFsbGF4QmFja2dyb3VuZFZlcnRpY2FsOiBudWxsLFxuXG5cdFx0XHQvLyBOdW1iZXIgb2Ygc2xpZGVzIGF3YXkgZnJvbSB0aGUgY3VycmVudCB0aGF0IGFyZSB2aXNpYmxlXG5cdFx0XHR2aWV3RGlzdGFuY2U6IDMsXG5cblx0XHRcdC8vIFNjcmlwdCBkZXBlbmRlbmNpZXMgdG8gbG9hZFxuXHRcdFx0ZGVwZW5kZW5jaWVzOiBbXVxuXG5cdFx0fSxcblxuXHRcdC8vIEZsYWdzIGlmIHJldmVhbC5qcyBpcyBsb2FkZWQgKGhhcyBkaXNwYXRjaGVkIHRoZSAncmVhZHknIGV2ZW50KVxuXHRcdGxvYWRlZCA9IGZhbHNlLFxuXG5cdFx0Ly8gRmxhZ3MgaWYgdGhlIG92ZXJ2aWV3IG1vZGUgaXMgY3VycmVudGx5IGFjdGl2ZVxuXHRcdG92ZXJ2aWV3ID0gZmFsc2UsXG5cblx0XHQvLyBUaGUgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgaW5kZXggb2YgdGhlIGN1cnJlbnRseSBhY3RpdmUgc2xpZGVcblx0XHRpbmRleGgsXG5cdFx0aW5kZXh2LFxuXG5cdFx0Ly8gVGhlIHByZXZpb3VzIGFuZCBjdXJyZW50IHNsaWRlIEhUTUwgZWxlbWVudHNcblx0XHRwcmV2aW91c1NsaWRlLFxuXHRcdGN1cnJlbnRTbGlkZSxcblxuXHRcdHByZXZpb3VzQmFja2dyb3VuZCxcblxuXHRcdC8vIFNsaWRlcyBtYXkgaG9sZCBhIGRhdGEtc3RhdGUgYXR0cmlidXRlIHdoaWNoIHdlIHBpY2sgdXAgYW5kIGFwcGx5XG5cdFx0Ly8gYXMgYSBjbGFzcyB0byB0aGUgYm9keS4gVGhpcyBsaXN0IGNvbnRhaW5zIHRoZSBjb21iaW5lZCBzdGF0ZSBvZlxuXHRcdC8vIGFsbCBjdXJyZW50IHNsaWRlcy5cblx0XHRzdGF0ZSA9IFtdLFxuXG5cdFx0Ly8gVGhlIGN1cnJlbnQgc2NhbGUgb2YgdGhlIHByZXNlbnRhdGlvbiAoc2VlIHdpZHRoL2hlaWdodCBjb25maWcpXG5cdFx0c2NhbGUgPSAxLFxuXG5cdFx0Ly8gQ1NTIHRyYW5zZm9ybSB0aGF0IGlzIGN1cnJlbnRseSBhcHBsaWVkIHRvIHRoZSBzbGlkZXMgY29udGFpbmVyLFxuXHRcdC8vIHNwbGl0IGludG8gdHdvIGdyb3Vwc1xuXHRcdHNsaWRlc1RyYW5zZm9ybSA9IHsgbGF5b3V0OiAnJywgb3ZlcnZpZXc6ICcnIH0sXG5cblx0XHQvLyBDYWNoZWQgcmVmZXJlbmNlcyB0byBET00gZWxlbWVudHNcblx0XHRkb20gPSB7fSxcblxuXHRcdC8vIEZlYXR1cmVzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlciwgc2VlICNjaGVja0NhcGFiaWxpdGllcygpXG5cdFx0ZmVhdHVyZXMgPSB7fSxcblxuXHRcdC8vIENsaWVudCBpcyBhIG1vYmlsZSBkZXZpY2UsIHNlZSAjY2hlY2tDYXBhYmlsaXRpZXMoKVxuXHRcdGlzTW9iaWxlRGV2aWNlLFxuXG5cdFx0Ly8gVGhyb3R0bGVzIG1vdXNlIHdoZWVsIG5hdmlnYXRpb25cblx0XHRsYXN0TW91c2VXaGVlbFN0ZXAgPSAwLFxuXG5cdFx0Ly8gRGVsYXlzIHVwZGF0ZXMgdG8gdGhlIFVSTCBkdWUgdG8gYSBDaHJvbWUgdGh1bWJuYWlsZXIgYnVnXG5cdFx0d3JpdGVVUkxUaW1lb3V0ID0gMCxcblxuXHRcdC8vIEZsYWdzIGlmIHRoZSBpbnRlcmFjdGlvbiBldmVudCBsaXN0ZW5lcnMgYXJlIGJvdW5kXG5cdFx0ZXZlbnRzQXJlQm91bmQgPSBmYWxzZSxcblxuXHRcdC8vIFRoZSBjdXJyZW50IGF1dG8tc2xpZGUgZHVyYXRpb25cblx0XHRhdXRvU2xpZGUgPSAwLFxuXG5cdFx0Ly8gQXV0byBzbGlkZSBwcm9wZXJ0aWVzXG5cdFx0YXV0b1NsaWRlUGxheWVyLFxuXHRcdGF1dG9TbGlkZVRpbWVvdXQgPSAwLFxuXHRcdGF1dG9TbGlkZVN0YXJ0VGltZSA9IC0xLFxuXHRcdGF1dG9TbGlkZVBhdXNlZCA9IGZhbHNlLFxuXG5cdFx0Ly8gSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnRseSBvbmdvaW5nIHRvdWNoIGlucHV0XG5cdFx0dG91Y2ggPSB7XG5cdFx0XHRzdGFydFg6IDAsXG5cdFx0XHRzdGFydFk6IDAsXG5cdFx0XHRzdGFydFNwYW46IDAsXG5cdFx0XHRzdGFydENvdW50OiAwLFxuXHRcdFx0Y2FwdHVyZWQ6IGZhbHNlLFxuXHRcdFx0dGhyZXNob2xkOiA0MFxuXHRcdH0sXG5cblx0XHQvLyBIb2xkcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUga2V5Ym9hcmQgc2hvcnRjdXRzXG5cdFx0a2V5Ym9hcmRTaG9ydGN1dHMgPSB7XG5cdFx0XHQnTiAgLCAgU1BBQ0UnOlx0XHRcdCdOZXh0IHNsaWRlJyxcblx0XHRcdCdQJzpcdFx0XHRcdFx0J1ByZXZpb3VzIHNsaWRlJyxcblx0XHRcdCcmIzg1OTI7ICAsICBIJzpcdFx0J05hdmlnYXRlIGxlZnQnLFxuXHRcdFx0JyYjODU5NDsgICwgIEwnOlx0XHQnTmF2aWdhdGUgcmlnaHQnLFxuXHRcdFx0JyYjODU5MzsgICwgIEsnOlx0XHQnTmF2aWdhdGUgdXAnLFxuXHRcdFx0JyYjODU5NTsgICwgIEonOlx0XHQnTmF2aWdhdGUgZG93bicsXG5cdFx0XHQnSG9tZSc6XHRcdFx0XHRcdCdGaXJzdCBzbGlkZScsXG5cdFx0XHQnRW5kJzpcdFx0XHRcdFx0J0xhc3Qgc2xpZGUnLFxuXHRcdFx0J0IgICwgIC4nOlx0XHRcdFx0J1BhdXNlJyxcblx0XHRcdCdGJzpcdFx0XHRcdFx0J0Z1bGxzY3JlZW4nLFxuXHRcdFx0J0VTQywgTyc6XHRcdFx0XHQnU2xpZGUgb3ZlcnZpZXcnXG5cdFx0fTtcblxuXHQvKipcblx0ICogU3RhcnRzIHVwIHRoZSBwcmVzZW50YXRpb24gaWYgdGhlIGNsaWVudCBpcyBjYXBhYmxlLlxuXHQgKi9cblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSggb3B0aW9ucyApIHtcblxuXHRcdGNoZWNrQ2FwYWJpbGl0aWVzKCk7XG5cblx0XHRpZiggIWZlYXR1cmVzLnRyYW5zZm9ybXMyZCAmJiAhZmVhdHVyZXMudHJhbnNmb3JtczNkICkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoICdjbGFzcycsICduby10cmFuc2Zvcm1zJyApO1xuXG5cdFx0XHQvLyBTaW5jZSBKUyB3b24ndCBiZSBydW5uaW5nIGFueSBmdXJ0aGVyLCB3ZSBsb2FkIGFsbCBsYXp5XG5cdFx0XHQvLyBsb2FkaW5nIGVsZW1lbnRzIHVwZnJvbnRcblx0XHRcdHZhciBpbWFnZXMgPSB0b0FycmF5KCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggJ2ltZycgKSApLFxuXHRcdFx0XHRpZnJhbWVzID0gdG9BcnJheSggZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdpZnJhbWUnICkgKTtcblxuXHRcdFx0dmFyIGxhenlMb2FkYWJsZSA9IGltYWdlcy5jb25jYXQoIGlmcmFtZXMgKTtcblxuXHRcdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGxhenlMb2FkYWJsZS5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBsYXp5TG9hZGFibGVbaV07XG5cdFx0XHRcdGlmKCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICkge1xuXHRcdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnc3JjJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApO1xuXHRcdFx0XHRcdGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCAnZGF0YS1zcmMnICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNvcmUgZmVhdHVyZXMgd2Ugd29uJ3QgYmVcblx0XHRcdC8vIHVzaW5nIEphdmFTY3JpcHQgdG8gY29udHJvbCB0aGUgcHJlc2VudGF0aW9uXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQ2FjaGUgcmVmZXJlbmNlcyB0byBrZXkgRE9NIGVsZW1lbnRzXG5cdFx0ZG9tLndyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnJldmVhbCcgKTtcblx0XHRkb20uc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yZXZlYWwgLnNsaWRlcycgKTtcblxuXHRcdC8vIEZvcmNlIGEgbGF5b3V0IHdoZW4gdGhlIHdob2xlIHBhZ2UsIGluY2wgZm9udHMsIGhhcyBsb2FkZWRcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBsYXlvdXQsIGZhbHNlICk7XG5cblx0XHR2YXIgcXVlcnkgPSBSZXZlYWwuZ2V0UXVlcnlIYXNoKCk7XG5cblx0XHQvLyBEbyBub3QgYWNjZXB0IG5ldyBkZXBlbmRlbmNpZXMgdmlhIHF1ZXJ5IGNvbmZpZyB0byBhdm9pZFxuXHRcdC8vIHRoZSBwb3RlbnRpYWwgb2YgbWFsaWNpb3VzIHNjcmlwdCBpbmplY3Rpb25cblx0XHRpZiggdHlwZW9mIHF1ZXJ5WydkZXBlbmRlbmNpZXMnXSAhPT0gJ3VuZGVmaW5lZCcgKSBkZWxldGUgcXVlcnlbJ2RlcGVuZGVuY2llcyddO1xuXG5cdFx0Ly8gQ29weSBvcHRpb25zIG92ZXIgdG8gb3VyIGNvbmZpZyBvYmplY3Rcblx0XHRleHRlbmQoIGNvbmZpZywgb3B0aW9ucyApO1xuXHRcdGV4dGVuZCggY29uZmlnLCBxdWVyeSApO1xuXG5cdFx0Ly8gSGlkZSB0aGUgYWRkcmVzcyBiYXIgaW4gbW9iaWxlIGJyb3dzZXJzXG5cdFx0aGlkZUFkZHJlc3NCYXIoKTtcblxuXHRcdC8vIExvYWRzIHRoZSBkZXBlbmRlbmNpZXMgYW5kIGNvbnRpbnVlcyB0byAjc3RhcnQoKSBvbmNlIGRvbmVcblx0XHRsb2FkKCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBJbnNwZWN0IHRoZSBjbGllbnQgdG8gc2VlIHdoYXQgaXQncyBjYXBhYmxlIG9mLCB0aGlzXG5cdCAqIHNob3VsZCBvbmx5IGhhcHBlbnMgb25jZSBwZXIgcnVudGltZS5cblx0ICovXG5cdGZ1bmN0aW9uIGNoZWNrQ2FwYWJpbGl0aWVzKCkge1xuXG5cdFx0ZmVhdHVyZXMudHJhbnNmb3JtczNkID0gJ1dlYmtpdFBlcnNwZWN0aXZlJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8XG5cdFx0XHRcdFx0XHRcdFx0J01velBlcnNwZWN0aXZlJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8XG5cdFx0XHRcdFx0XHRcdFx0J21zUGVyc3BlY3RpdmUnIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgfHxcblx0XHRcdFx0XHRcdFx0XHQnT1BlcnNwZWN0aXZlJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8XG5cdFx0XHRcdFx0XHRcdFx0J3BlcnNwZWN0aXZlJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG5cdFx0ZmVhdHVyZXMudHJhbnNmb3JtczJkID0gJ1dlYmtpdFRyYW5zZm9ybScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdCdNb3pUcmFuc2Zvcm0nIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgfHxcblx0XHRcdFx0XHRcdFx0XHQnbXNUcmFuc2Zvcm0nIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgfHxcblx0XHRcdFx0XHRcdFx0XHQnT1RyYW5zZm9ybScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdCd0cmFuc2Zvcm0nIGluIGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cblx0XHRmZWF0dXJlcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVNZXRob2QgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZTtcblx0XHRmZWF0dXJlcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0eXBlb2YgZmVhdHVyZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lTWV0aG9kID09PSAnZnVuY3Rpb24nO1xuXG5cdFx0ZmVhdHVyZXMuY2FudmFzID0gISFkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApLmdldENvbnRleHQ7XG5cblx0XHRmZWF0dXJlcy50b3VjaCA9ICEhKCAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgKTtcblxuXHRcdC8vIFRyYW5zaXRpb25zIGluIHRoZSBvdmVydmlldyBhcmUgZGlzYWJsZWQgaW4gZGVza3RvcCBhbmRcblx0XHQvLyBtb2JpbGUgU2FmYXJpIGR1ZSB0byBsYWdcblx0XHRmZWF0dXJlcy5vdmVydmlld1RyYW5zaXRpb25zID0gIS9WZXJzaW9uXFwvW1xcZFxcLl0rLipTYWZhcmkvLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKTtcblxuXHRcdGlzTW9iaWxlRGV2aWNlID0gLyhpcGhvbmV8aXBvZHxpcGFkfGFuZHJvaWQpL2dpLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKTtcblxuXHR9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgZGVwZW5kZW5jaWVzIG9mIHJldmVhbC5qcy4gRGVwZW5kZW5jaWVzIGFyZVxuICAgICAqIGRlZmluZWQgdmlhIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbiAnZGVwZW5kZW5jaWVzJ1xuICAgICAqIGFuZCB3aWxsIGJlIGxvYWRlZCBwcmlvciB0byBzdGFydGluZy9iaW5kaW5nIHJldmVhbC5qcy5cbiAgICAgKiBTb21lIGRlcGVuZGVuY2llcyBtYXkgaGF2ZSBhbiAnYXN5bmMnIGZsYWcsIGlmIHNvIHRoZXlcbiAgICAgKiB3aWxsIGxvYWQgYWZ0ZXIgcmV2ZWFsLmpzIGhhcyBiZWVuIHN0YXJ0ZWQgdXAuXG4gICAgICovXG5cdGZ1bmN0aW9uIGxvYWQoKSB7XG5cblx0XHR2YXIgc2NyaXB0cyA9IFtdLFxuXHRcdFx0c2NyaXB0c0FzeW5jID0gW10sXG5cdFx0XHRzY3JpcHRzVG9QcmVsb2FkID0gMDtcblxuXHRcdC8vIENhbGxlZCBvbmNlIHN5bmNocm9ub3VzIHNjcmlwdHMgZmluaXNoIGxvYWRpbmdcblx0XHRmdW5jdGlvbiBwcm9jZWVkKCkge1xuXHRcdFx0aWYoIHNjcmlwdHNBc3luYy5sZW5ndGggKSB7XG5cdFx0XHRcdC8vIExvYWQgYXN5bmNocm9ub3VzIHNjcmlwdHNcblx0XHRcdFx0aGVhZC5qcy5hcHBseSggbnVsbCwgc2NyaXB0c0FzeW5jICk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YXJ0KCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gbG9hZFNjcmlwdCggcyApIHtcblx0XHRcdGhlYWQucmVhZHkoIHMuc3JjLm1hdGNoKCAvKFtcXHdcXGRfXFwtXSopXFwuP2pzJHxbXlxcXFxcXC9dKiQvaSApWzBdLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gRXh0ZW5zaW9uIG1heSBjb250YWluIGNhbGxiYWNrIGZ1bmN0aW9uc1xuXHRcdFx0XHRpZiggdHlwZW9mIHMuY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0cy5jYWxsYmFjay5hcHBseSggdGhpcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIC0tc2NyaXB0c1RvUHJlbG9hZCA9PT0gMCApIHtcblx0XHRcdFx0XHRwcm9jZWVkKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBjb25maWcuZGVwZW5kZW5jaWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0dmFyIHMgPSBjb25maWcuZGVwZW5kZW5jaWVzW2ldO1xuXG5cdFx0XHQvLyBMb2FkIGlmIHRoZXJlJ3Mgbm8gY29uZGl0aW9uIG9yIHRoZSBjb25kaXRpb24gaXMgdHJ1dGh5XG5cdFx0XHRpZiggIXMuY29uZGl0aW9uIHx8IHMuY29uZGl0aW9uKCkgKSB7XG5cdFx0XHRcdGlmKCBzLmFzeW5jICkge1xuXHRcdFx0XHRcdHNjcmlwdHNBc3luYy5wdXNoKCBzLnNyYyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHNjcmlwdHMucHVzaCggcy5zcmMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxvYWRTY3JpcHQoIHMgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggc2NyaXB0cy5sZW5ndGggKSB7XG5cdFx0XHRzY3JpcHRzVG9QcmVsb2FkID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdC8vIExvYWQgc3luY2hyb25vdXMgc2NyaXB0c1xuXHRcdFx0aGVhZC5qcy5hcHBseSggbnVsbCwgc2NyaXB0cyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHByb2NlZWQoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydHMgdXAgcmV2ZWFsLmpzIGJ5IGJpbmRpbmcgaW5wdXQgZXZlbnRzIGFuZCBuYXZpZ2F0aW5nXG5cdCAqIHRvIHRoZSBjdXJyZW50IFVSTCBkZWVwbGluayBpZiB0aGVyZSBpcyBvbmUuXG5cdCAqL1xuXHRmdW5jdGlvbiBzdGFydCgpIHtcblxuXHRcdC8vIE1ha2Ugc3VyZSB3ZSd2ZSBnb3QgYWxsIHRoZSBET00gZWxlbWVudHMgd2UgbmVlZFxuXHRcdHNldHVwRE9NKCk7XG5cblx0XHQvLyBMaXN0ZW4gdG8gbWVzc2FnZXMgcG9zdGVkIHRvIHRoaXMgd2luZG93XG5cdFx0c2V0dXBQb3N0TWVzc2FnZSgpO1xuXG5cdFx0Ly8gUHJldmVudCBpZnJhbWVzIGZyb20gc2Nyb2xsaW5nIHRoZSBzbGlkZXMgb3V0IG9mIHZpZXdcblx0XHRzZXR1cElmcmFtZVNjcm9sbFByZXZlbnRpb24oKTtcblxuXHRcdC8vIFJlc2V0cyBhbGwgdmVydGljYWwgc2xpZGVzIHNvIHRoYXQgb25seSB0aGUgZmlyc3QgaXMgdmlzaWJsZVxuXHRcdHJlc2V0VmVydGljYWxTbGlkZXMoKTtcblxuXHRcdC8vIFVwZGF0ZXMgdGhlIHByZXNlbnRhdGlvbiB0byBtYXRjaCB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIHZhbHVlc1xuXHRcdGNvbmZpZ3VyZSgpO1xuXG5cdFx0Ly8gUmVhZCB0aGUgaW5pdGlhbCBoYXNoXG5cdFx0cmVhZFVSTCgpO1xuXG5cdFx0Ly8gVXBkYXRlIGFsbCBiYWNrZ3JvdW5kc1xuXHRcdHVwZGF0ZUJhY2tncm91bmQoIHRydWUgKTtcblxuXHRcdC8vIE5vdGlmeSBsaXN0ZW5lcnMgdGhhdCB0aGUgcHJlc2VudGF0aW9uIGlzIHJlYWR5IGJ1dCB1c2UgYSAxbXNcblx0XHQvLyB0aW1lb3V0IHRvIGVuc3VyZSBpdCdzIG5vdCBmaXJlZCBzeW5jaHJvbm91c2x5IGFmdGVyICNpbml0aWFsaXplKClcblx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEVuYWJsZSB0cmFuc2l0aW9ucyBub3cgdGhhdCB3ZSdyZSBsb2FkZWRcblx0XHRcdGRvbS5zbGlkZXMuY2xhc3NMaXN0LnJlbW92ZSggJ25vLXRyYW5zaXRpb24nICk7XG5cblx0XHRcdGxvYWRlZCA9IHRydWU7XG5cblx0XHRcdGRpc3BhdGNoRXZlbnQoICdyZWFkeScsIHtcblx0XHRcdFx0J2luZGV4aCc6IGluZGV4aCxcblx0XHRcdFx0J2luZGV4dic6IGluZGV4dixcblx0XHRcdFx0J2N1cnJlbnRTbGlkZSc6IGN1cnJlbnRTbGlkZVxuXHRcdFx0fSApO1xuXHRcdH0sIDEgKTtcblxuXHRcdC8vIFNwZWNpYWwgc2V0dXAgYW5kIGNvbmZpZyBpcyByZXF1aXJlZCB3aGVuIHByaW50aW5nIHRvIFBERlxuXHRcdGlmKCBpc1ByaW50aW5nUERGKCkgKSB7XG5cdFx0XHRyZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG5cdFx0XHQvLyBUaGUgZG9jdW1lbnQgbmVlZHMgdG8gaGF2ZSBsb2FkZWQgZm9yIHRoZSBQREYgbGF5b3V0XG5cdFx0XHQvLyBtZWFzdXJlbWVudHMgdG8gYmUgYWNjdXJhdGVcblx0XHRcdGlmKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnICkge1xuXHRcdFx0XHRzZXR1cFBERigpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHNldHVwUERGICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogRmluZHMgYW5kIHN0b3JlcyByZWZlcmVuY2VzIHRvIERPTSBlbGVtZW50cyB3aGljaCBhcmVcblx0ICogcmVxdWlyZWQgYnkgdGhlIHByZXNlbnRhdGlvbi4gSWYgYSByZXF1aXJlZCBlbGVtZW50IGlzXG5cdCAqIG5vdCBmb3VuZCwgaXQgaXMgY3JlYXRlZC5cblx0ICovXG5cdGZ1bmN0aW9uIHNldHVwRE9NKCkge1xuXG5cdFx0Ly8gUHJldmVudCB0cmFuc2l0aW9ucyB3aGlsZSB3ZSdyZSBsb2FkaW5nXG5cdFx0ZG9tLnNsaWRlcy5jbGFzc0xpc3QuYWRkKCAnbm8tdHJhbnNpdGlvbicgKTtcblxuXHRcdC8vIEJhY2tncm91bmQgZWxlbWVudFxuXHRcdGRvbS5iYWNrZ3JvdW5kID0gY3JlYXRlU2luZ2xldG9uTm9kZSggZG9tLndyYXBwZXIsICdkaXYnLCAnYmFja2dyb3VuZHMnLCBudWxsICk7XG5cblx0XHQvLyBQcm9ncmVzcyBiYXJcblx0XHRkb20ucHJvZ3Jlc3MgPSBjcmVhdGVTaW5nbGV0b25Ob2RlKCBkb20ud3JhcHBlciwgJ2RpdicsICdwcm9ncmVzcycsICc8c3Bhbj48L3NwYW4+JyApO1xuXHRcdGRvbS5wcm9ncmVzc2JhciA9IGRvbS5wcm9ncmVzcy5xdWVyeVNlbGVjdG9yKCAnc3BhbicgKTtcblxuXHRcdC8vIEFycm93IGNvbnRyb2xzXG5cdFx0Y3JlYXRlU2luZ2xldG9uTm9kZSggZG9tLndyYXBwZXIsICdhc2lkZScsICdjb250cm9scycsXG5cdFx0XHQnPGRpdiBjbGFzcz1cIm5hdmlnYXRlLWxlZnRcIj48L2Rpdj4nICtcblx0XHRcdCc8ZGl2IGNsYXNzPVwibmF2aWdhdGUtcmlnaHRcIj48L2Rpdj4nICtcblx0XHRcdCc8ZGl2IGNsYXNzPVwibmF2aWdhdGUtdXBcIj48L2Rpdj4nICtcblx0XHRcdCc8ZGl2IGNsYXNzPVwibmF2aWdhdGUtZG93blwiPjwvZGl2PicgKTtcblxuXHRcdC8vIFNsaWRlIG51bWJlclxuXHRcdGRvbS5zbGlkZU51bWJlciA9IGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGRvbS53cmFwcGVyLCAnZGl2JywgJ3NsaWRlLW51bWJlcicsICcnICk7XG5cblx0XHQvLyBPdmVybGF5IGdyYXBoaWMgd2hpY2ggaXMgZGlzcGxheWVkIGR1cmluZyB0aGUgcGF1c2VkIG1vZGVcblx0XHRjcmVhdGVTaW5nbGV0b25Ob2RlKCBkb20ud3JhcHBlciwgJ2RpdicsICdwYXVzZS1vdmVybGF5JywgbnVsbCApO1xuXG5cdFx0Ly8gQ2FjaGUgcmVmZXJlbmNlcyB0byBlbGVtZW50c1xuXHRcdGRvbS5jb250cm9scyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucmV2ZWFsIC5jb250cm9scycgKTtcblx0XHRkb20udGhlbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnI3RoZW1lJyApO1xuXG5cdFx0ZG9tLndyYXBwZXIuc2V0QXR0cmlidXRlKCAncm9sZScsICdhcHBsaWNhdGlvbicgKTtcblxuXHRcdC8vIFRoZXJlIGNhbiBiZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgY29udHJvbHMgdGhyb3VnaG91dCB0aGUgcGFnZVxuXHRcdGRvbS5jb250cm9sc0xlZnQgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm5hdmlnYXRlLWxlZnQnICkgKTtcblx0XHRkb20uY29udHJvbHNSaWdodCA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubmF2aWdhdGUtcmlnaHQnICkgKTtcblx0XHRkb20uY29udHJvbHNVcCA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubmF2aWdhdGUtdXAnICkgKTtcblx0XHRkb20uY29udHJvbHNEb3duID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS1kb3duJyApICk7XG5cdFx0ZG9tLmNvbnRyb2xzUHJldiA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubmF2aWdhdGUtcHJldicgKSApO1xuXHRcdGRvbS5jb250cm9sc05leHQgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm5hdmlnYXRlLW5leHQnICkgKTtcblxuXHRcdGRvbS5zdGF0dXNEaXYgPSBjcmVhdGVTdGF0dXNEaXYoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgaGlkZGVuIGRpdiB3aXRoIHJvbGUgYXJpYS1saXZlIHRvIGFubm91bmNlIHRoZVxuXHQgKiBjdXJyZW50IHNsaWRlIGNvbnRlbnQuIEhpZGUgdGhlIGRpdiBvZmYtc2NyZWVuIHRvIG1ha2UgaXRcblx0ICogYXZhaWxhYmxlIG9ubHkgdG8gQXNzaXN0aXZlIFRlY2hub2xvZ2llcy5cblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZVN0YXR1c0RpdigpIHtcblxuXHRcdHZhciBzdGF0dXNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2FyaWEtc3RhdHVzLWRpdicgKTtcblx0XHRpZiggIXN0YXR1c0RpdiApIHtcblx0XHRcdHN0YXR1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0XHRzdGF0dXNEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0c3RhdHVzRGl2LnN0eWxlLmhlaWdodCA9ICcxcHgnO1xuXHRcdFx0c3RhdHVzRGl2LnN0eWxlLndpZHRoID0gJzFweCc7XG5cdFx0XHRzdGF0dXNEaXYuc3R5bGUub3ZlcmZsb3cgPSdoaWRkZW4nO1xuXHRcdFx0c3RhdHVzRGl2LnN0eWxlLmNsaXAgPSAncmVjdCggMXB4LCAxcHgsIDFweCwgMXB4ICknO1xuXHRcdFx0c3RhdHVzRGl2LnNldEF0dHJpYnV0ZSggJ2lkJywgJ2FyaWEtc3RhdHVzLWRpdicgKTtcblx0XHRcdHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWxpdmUnLCAncG9saXRlJyApO1xuXHRcdFx0c3RhdHVzRGl2LnNldEF0dHJpYnV0ZSggJ2FyaWEtYXRvbWljJywndHJ1ZScgKTtcblx0XHRcdGRvbS53cmFwcGVyLmFwcGVuZENoaWxkKCBzdGF0dXNEaXYgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHN0YXR1c0RpdjtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENvbmZpZ3VyZXMgdGhlIHByZXNlbnRhdGlvbiBmb3IgcHJpbnRpbmcgdG8gYSBzdGF0aWNcblx0ICogUERGLlxuXHQgKi9cblx0ZnVuY3Rpb24gc2V0dXBQREYoKSB7XG5cblx0XHR2YXIgc2xpZGVTaXplID0gZ2V0Q29tcHV0ZWRTbGlkZVNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcblxuXHRcdC8vIERpbWVuc2lvbnMgb2YgdGhlIFBERiBwYWdlc1xuXHRcdHZhciBwYWdlV2lkdGggPSBNYXRoLmZsb29yKCBzbGlkZVNpemUud2lkdGggKiAoIDEgKyBjb25maWcubWFyZ2luICkgKSxcblx0XHRcdHBhZ2VIZWlnaHQgPSBNYXRoLmZsb29yKCBzbGlkZVNpemUuaGVpZ2h0ICogKCAxICsgY29uZmlnLm1hcmdpbiAgKSApO1xuXG5cdFx0Ly8gRGltZW5zaW9ucyBvZiBzbGlkZXMgd2l0aGluIHRoZSBwYWdlc1xuXHRcdHZhciBzbGlkZVdpZHRoID0gc2xpZGVTaXplLndpZHRoLFxuXHRcdFx0c2xpZGVIZWlnaHQgPSBzbGlkZVNpemUuaGVpZ2h0O1xuXG5cdFx0Ly8gTGV0IHRoZSBicm93c2VyIGtub3cgd2hhdCBwYWdlIHNpemUgd2Ugd2FudCB0byBwcmludFxuXHRcdGluamVjdFN0eWxlU2hlZXQoICdAcGFnZXtzaXplOicrIHBhZ2VXaWR0aCArJ3B4ICcrIHBhZ2VIZWlnaHQgKydweDsgbWFyZ2luOiAwO30nICk7XG5cblx0XHQvLyBMaW1pdCB0aGUgc2l6ZSBvZiBjZXJ0YWluIGVsZW1lbnRzIHRvIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBzbGlkZVxuXHRcdGluamVjdFN0eWxlU2hlZXQoICcucmV2ZWFsIHNlY3Rpb24+aW1nLCAucmV2ZWFsIHNlY3Rpb24+dmlkZW8sIC5yZXZlYWwgc2VjdGlvbj5pZnJhbWV7bWF4LXdpZHRoOiAnKyBzbGlkZVdpZHRoICsncHg7IG1heC1oZWlnaHQ6Jysgc2xpZGVIZWlnaHQgKydweH0nICk7XG5cblx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoICdwcmludC1wZGYnICk7XG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS53aWR0aCA9IHBhZ2VXaWR0aCArICdweCc7XG5cdFx0ZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBwYWdlSGVpZ2h0ICsgJ3B4JztcblxuXHRcdC8vIFNsaWRlIGFuZCBzbGlkZSBiYWNrZ3JvdW5kIGxheW91dFxuXHRcdHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiApICkuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlICkge1xuXG5cdFx0XHQvLyBWZXJ0aWNhbCBzdGFja3MgYXJlIG5vdCBjZW50cmVkIHNpbmNlIHRoZWlyIHNlY3Rpb25cblx0XHRcdC8vIGNoaWxkcmVuIHdpbGwgYmVcblx0XHRcdGlmKCBzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdC8vIENlbnRlciB0aGUgc2xpZGUgaW5zaWRlIG9mIHRoZSBwYWdlLCBnaXZpbmcgdGhlIHNsaWRlIHNvbWUgbWFyZ2luXG5cdFx0XHRcdHZhciBsZWZ0ID0gKCBwYWdlV2lkdGggLSBzbGlkZVdpZHRoICkgLyAyLFxuXHRcdFx0XHRcdHRvcCA9ICggcGFnZUhlaWdodCAtIHNsaWRlSGVpZ2h0ICkgLyAyO1xuXG5cdFx0XHRcdHZhciBjb250ZW50SGVpZ2h0ID0gZ2V0QWJzb2x1dGVIZWlnaHQoIHNsaWRlICk7XG5cdFx0XHRcdHZhciBudW1iZXJPZlBhZ2VzID0gTWF0aC5tYXgoIE1hdGguY2VpbCggY29udGVudEhlaWdodCAvIHBhZ2VIZWlnaHQgKSwgMSApO1xuXG5cdFx0XHRcdC8vIENlbnRlciBzbGlkZXMgdmVydGljYWxseVxuXHRcdFx0XHRpZiggbnVtYmVyT2ZQYWdlcyA9PT0gMSAmJiBjb25maWcuY2VudGVyIHx8IHNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ2NlbnRlcicgKSApIHtcblx0XHRcdFx0XHR0b3AgPSBNYXRoLm1heCggKCBwYWdlSGVpZ2h0IC0gY29udGVudEhlaWdodCApIC8gMiwgMCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUG9zaXRpb24gdGhlIHNsaWRlIGluc2lkZSBvZiB0aGUgcGFnZVxuXHRcdFx0XHRzbGlkZS5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG5cdFx0XHRcdHNsaWRlLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG5cdFx0XHRcdHNsaWRlLnN0eWxlLndpZHRoID0gc2xpZGVXaWR0aCArICdweCc7XG5cblx0XHRcdFx0Ly8gVE9ETyBCYWNrZ3JvdW5kcyBuZWVkIHRvIGJlIG11bHRpcGxpZWQgd2hlbiB0aGUgc2xpZGVcblx0XHRcdFx0Ly8gc3RyZXRjaGVzIG92ZXIgbXVsdGlwbGUgcGFnZXNcblx0XHRcdFx0dmFyIGJhY2tncm91bmQgPSBzbGlkZS5xdWVyeVNlbGVjdG9yKCAnLnNsaWRlLWJhY2tncm91bmQnICk7XG5cdFx0XHRcdGlmKCBiYWNrZ3JvdW5kICkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQuc3R5bGUud2lkdGggPSBwYWdlV2lkdGggKyAncHgnO1xuXHRcdFx0XHRcdGJhY2tncm91bmQuc3R5bGUuaGVpZ2h0ID0gKCBwYWdlSGVpZ2h0ICogbnVtYmVyT2ZQYWdlcyApICsgJ3B4Jztcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLnN0eWxlLnRvcCA9IC10b3AgKyAncHgnO1xuXHRcdFx0XHRcdGJhY2tncm91bmQuc3R5bGUubGVmdCA9IC1sZWZ0ICsgJ3B4Jztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSApO1xuXG5cdFx0Ly8gU2hvdyBhbGwgZnJhZ21lbnRzXG5cdFx0dG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICsgJyAuZnJhZ21lbnQnICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZnJhZ21lbnQgKSB7XG5cdFx0XHRmcmFnbWVudC5jbGFzc0xpc3QuYWRkKCAndmlzaWJsZScgKTtcblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIGlzIGFuIHVuZm9ydHVuYXRlIG5lY2Vzc2l0eS4gSWZyYW1lcyBjYW4gdHJpZ2dlciB0aGVcblx0ICogcGFyZW50IHdpbmRvdyB0byBzY3JvbGwsIGZvciBleGFtcGxlIGJ5IGZvY3VzaW5nIGFuIGlucHV0LlxuXHQgKiBUaGlzIHNjcm9sbGluZyBjYW4gbm90IGJlIHByZXZlbnRlZCBieSBoaWRpbmcgb3ZlcmZsb3cgaW5cblx0ICogQ1NTIHNvIHdlIGhhdmUgdG8gcmVzb3J0IHRvIHJlcGVhdGVkbHkgY2hlY2tpbmcgaWYgdGhlXG5cdCAqIGJyb3dzZXIgaGFzIGRlY2lkZWQgdG8gb2Zmc2V0IG91ciBzbGlkZXMgOihcblx0ICovXG5cdGZ1bmN0aW9uIHNldHVwSWZyYW1lU2Nyb2xsUHJldmVudGlvbigpIHtcblxuXHRcdGlmKCBkb20uc2xpZGVzLnF1ZXJ5U2VsZWN0b3IoICdpZnJhbWUnICkgKSB7XG5cdFx0XHRzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKCBkb20ud3JhcHBlci5zY3JvbGxUb3AgIT09IDAgfHwgZG9tLndyYXBwZXIuc2Nyb2xsTGVmdCAhPT0gMCApIHtcblx0XHRcdFx0XHRkb20ud3JhcHBlci5zY3JvbGxUb3AgPSAwO1xuXHRcdFx0XHRcdGRvbS53cmFwcGVyLnNjcm9sbExlZnQgPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCA1MDAgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGFuIEhUTUwgZWxlbWVudCBhbmQgcmV0dXJucyBhIHJlZmVyZW5jZSB0byBpdC5cblx0ICogSWYgdGhlIGVsZW1lbnQgYWxyZWFkeSBleGlzdHMgdGhlIGV4aXN0aW5nIGluc3RhbmNlIHdpbGxcblx0ICogYmUgcmV0dXJuZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVTaW5nbGV0b25Ob2RlKCBjb250YWluZXIsIHRhZ25hbWUsIGNsYXNzbmFtZSwgaW5uZXJIVE1MICkge1xuXG5cdFx0Ly8gRmluZCBhbGwgbm9kZXMgbWF0Y2hpbmcgdGhlIGRlc2NyaXB0aW9uXG5cdFx0dmFyIG5vZGVzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoICcuJyArIGNsYXNzbmFtZSApO1xuXG5cdFx0Ly8gQ2hlY2sgYWxsIG1hdGNoZXMgdG8gZmluZCBvbmUgd2hpY2ggaXMgYSBkaXJlY3QgY2hpbGQgb2Zcblx0XHQvLyB0aGUgc3BlY2lmaWVkIGNvbnRhaW5lclxuXHRcdGZvciggdmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHR2YXIgdGVzdE5vZGUgPSBub2Rlc1tpXTtcblx0XHRcdGlmKCB0ZXN0Tm9kZS5wYXJlbnROb2RlID09PSBjb250YWluZXIgKSB7XG5cdFx0XHRcdHJldHVybiB0ZXN0Tm9kZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiBubyBub2RlIHdhcyBmb3VuZCwgY3JlYXRlIGl0IG5vd1xuXHRcdHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggdGFnbmFtZSApO1xuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZCggY2xhc3NuYW1lICk7XG5cdFx0aWYoIHR5cGVvZiBpbm5lckhUTUwgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0bm9kZS5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG5cdFx0fVxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggbm9kZSApO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBzbGlkZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIGFuZCBhcHBlbmRzIHRoZW1cblx0ICogdG8gdGhlIGJhY2tncm91bmQgY29udGFpbmVyLiBPbmUgZWxlbWVudCBpcyBjcmVhdGVkIHBlclxuXHQgKiBzbGlkZSBubyBtYXR0ZXIgaWYgdGhlIGdpdmVuIHNsaWRlIGhhcyB2aXNpYmxlIGJhY2tncm91bmQuXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVCYWNrZ3JvdW5kcygpIHtcblxuXHRcdHZhciBwcmludE1vZGUgPSBpc1ByaW50aW5nUERGKCk7XG5cblx0XHQvLyBDbGVhciBwcmlvciBiYWNrZ3JvdW5kc1xuXHRcdGRvbS5iYWNrZ3JvdW5kLmlubmVySFRNTCA9ICcnO1xuXHRcdGRvbS5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5hZGQoICduby10cmFuc2l0aW9uJyApO1xuXG5cdFx0Ly8gSXRlcmF0ZSBvdmVyIGFsbCBob3Jpem9udGFsIHNsaWRlc1xuXHRcdHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc2xpZGVoICkge1xuXG5cdFx0XHR2YXIgYmFja2dyb3VuZFN0YWNrO1xuXG5cdFx0XHRpZiggcHJpbnRNb2RlICkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kU3RhY2sgPSBjcmVhdGVCYWNrZ3JvdW5kKCBzbGlkZWgsIHNsaWRlaCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGJhY2tncm91bmRTdGFjayA9IGNyZWF0ZUJhY2tncm91bmQoIHNsaWRlaCwgZG9tLmJhY2tncm91bmQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSXRlcmF0ZSBvdmVyIGFsbCB2ZXJ0aWNhbCBzbGlkZXNcblx0XHRcdHRvQXJyYXkoIHNsaWRlaC5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZXYgKSB7XG5cblx0XHRcdFx0aWYoIHByaW50TW9kZSApIHtcblx0XHRcdFx0XHRjcmVhdGVCYWNrZ3JvdW5kKCBzbGlkZXYsIHNsaWRldiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGNyZWF0ZUJhY2tncm91bmQoIHNsaWRldiwgYmFja2dyb3VuZFN0YWNrICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYWNrZ3JvdW5kU3RhY2suY2xhc3NMaXN0LmFkZCggJ3N0YWNrJyApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0XHQvLyBBZGQgcGFyYWxsYXggYmFja2dyb3VuZCBpZiBzcGVjaWZpZWRcblx0XHRpZiggY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZEltYWdlICkge1xuXG5cdFx0XHRkb20uYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKFwiJyArIGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRJbWFnZSArICdcIiknO1xuXHRcdFx0ZG9tLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kU2l6ZTtcblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoZSBiZWxvdyBwcm9wZXJ0aWVzIGFyZSBzZXQgb24gdGhlIGVsZW1lbnQgLSB0aGVzZSBwcm9wZXJ0aWVzIGFyZVxuXHRcdFx0Ly8gbmVlZGVkIGZvciBwcm9wZXIgdHJhbnNpdGlvbnMgdG8gYmUgc2V0IG9uIHRoZSBlbGVtZW50IHZpYSBDU1MuIFRvIHJlbW92ZVxuXHRcdFx0Ly8gYW5ub3lpbmcgYmFja2dyb3VuZCBzbGlkZS1pbiBlZmZlY3Qgd2hlbiB0aGUgcHJlc2VudGF0aW9uIHN0YXJ0cywgYXBwbHlcblx0XHRcdC8vIHRoZXNlIHByb3BlcnRpZXMgYWZ0ZXIgc2hvcnQgdGltZSBkZWxheVxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdoYXMtcGFyYWxsYXgtYmFja2dyb3VuZCcgKTtcblx0XHRcdH0sIDEgKTtcblxuXHRcdH1cblx0XHRlbHNlIHtcblxuXHRcdFx0ZG9tLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnaGFzLXBhcmFsbGF4LWJhY2tncm91bmQnICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEgYmFja2dyb3VuZCBmb3IgdGhlIGdpdmVuIHNsaWRlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzbGlkZVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgVGhlIGVsZW1lbnQgdGhhdCB0aGUgYmFja2dyb3VuZFxuXHQgKiBzaG91bGQgYmUgYXBwZW5kZWQgdG9cblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZUJhY2tncm91bmQoIHNsaWRlLCBjb250YWluZXIgKSB7XG5cblx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdGJhY2tncm91bmQ6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZCcgKSxcblx0XHRcdGJhY2tncm91bmRTaXplOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtc2l6ZScgKSxcblx0XHRcdGJhY2tncm91bmRJbWFnZTogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWltYWdlJyApLFxuXHRcdFx0YmFja2dyb3VuZFZpZGVvOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtdmlkZW8nICksXG5cdFx0XHRiYWNrZ3JvdW5kSWZyYW1lOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaWZyYW1lJyApLFxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtY29sb3InICksXG5cdFx0XHRiYWNrZ3JvdW5kUmVwZWF0OiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtcmVwZWF0JyApLFxuXHRcdFx0YmFja2dyb3VuZFBvc2l0aW9uOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtcG9zaXRpb24nICksXG5cdFx0XHRiYWNrZ3JvdW5kVHJhbnNpdGlvbjogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb24nIClcblx0XHR9O1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXG5cdFx0Ly8gQ2Fycnkgb3ZlciBjdXN0b20gY2xhc3NlcyBmcm9tIHRoZSBzbGlkZSB0byB0aGUgYmFja2dyb3VuZFxuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gJ3NsaWRlLWJhY2tncm91bmQgJyArIHNsaWRlLmNsYXNzTmFtZS5yZXBsYWNlKCAvcHJlc2VudHxwYXN0fGZ1dHVyZS8sICcnICk7XG5cblx0XHRpZiggZGF0YS5iYWNrZ3JvdW5kICkge1xuXHRcdFx0Ly8gQXV0by13cmFwIGltYWdlIHVybHMgaW4gdXJsKC4uLilcblx0XHRcdGlmKCAvXihodHRwfGZpbGV8XFwvXFwvKS9naS50ZXN0KCBkYXRhLmJhY2tncm91bmQgKSB8fCAvXFwuKHN2Z3xwbmd8anBnfGpwZWd8Z2lmfGJtcCkkL2dpLnRlc3QoIGRhdGEuYmFja2dyb3VuZCApICkge1xuXHRcdFx0XHRzbGlkZS5zZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaW1hZ2UnLCBkYXRhLmJhY2tncm91bmQgKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBkYXRhLmJhY2tncm91bmQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIGEgaGFzaCBmb3IgdGhpcyBjb21iaW5hdGlvbiBvZiBiYWNrZ3JvdW5kIHNldHRpbmdzLlxuXHRcdC8vIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiB0d28gc2xpZGUgYmFja2dyb3VuZHMgYXJlXG5cdFx0Ly8gdGhlIHNhbWUuXG5cdFx0aWYoIGRhdGEuYmFja2dyb3VuZCB8fCBkYXRhLmJhY2tncm91bmRDb2xvciB8fCBkYXRhLmJhY2tncm91bmRJbWFnZSB8fCBkYXRhLmJhY2tncm91bmRWaWRlbyB8fCBkYXRhLmJhY2tncm91bmRJZnJhbWUgKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1oYXNoJywgZGF0YS5iYWNrZ3JvdW5kICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuYmFja2dyb3VuZFNpemUgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5iYWNrZ3JvdW5kSW1hZ2UgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5iYWNrZ3JvdW5kVmlkZW8gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5iYWNrZ3JvdW5kSWZyYW1lICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuYmFja2dyb3VuZENvbG9yICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuYmFja2dyb3VuZFJlcGVhdCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmJhY2tncm91bmRQb3NpdGlvbiArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmJhY2tncm91bmRUcmFuc2l0aW9uICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkaXRpb25hbCBhbmQgb3B0aW9uYWwgYmFja2dyb3VuZCBwcm9wZXJ0aWVzXG5cdFx0aWYoIGRhdGEuYmFja2dyb3VuZFNpemUgKSBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRTaXplID0gZGF0YS5iYWNrZ3JvdW5kU2l6ZTtcblx0XHRpZiggZGF0YS5iYWNrZ3JvdW5kQ29sb3IgKSBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGRhdGEuYmFja2dyb3VuZENvbG9yO1xuXHRcdGlmKCBkYXRhLmJhY2tncm91bmRSZXBlYXQgKSBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBkYXRhLmJhY2tncm91bmRSZXBlYXQ7XG5cdFx0aWYoIGRhdGEuYmFja2dyb3VuZFBvc2l0aW9uICkgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBkYXRhLmJhY2tncm91bmRQb3NpdGlvbjtcblx0XHRpZiggZGF0YS5iYWNrZ3JvdW5kVHJhbnNpdGlvbiApIGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb24nLCBkYXRhLmJhY2tncm91bmRUcmFuc2l0aW9uICk7XG5cblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIGVsZW1lbnQgKTtcblxuXHRcdC8vIElmIGJhY2tncm91bmRzIGFyZSBiZWluZyByZWNyZWF0ZWQsIGNsZWFyIG9sZCBjbGFzc2VzXG5cdFx0c2xpZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2hhcy1kYXJrLWJhY2tncm91bmQnICk7XG5cdFx0c2xpZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2hhcy1saWdodC1iYWNrZ3JvdW5kJyApO1xuXG5cdFx0Ly8gSWYgdGhpcyBzbGlkZSBoYXMgYSBiYWNrZ3JvdW5kIGNvbG9yLCBhZGQgYSBjbGFzcyB0aGF0XG5cdFx0Ly8gc2lnbmFscyBpZiBpdCBpcyBsaWdodCBvciBkYXJrLiBJZiB0aGUgc2xpZGUgaGFzIG5vIGJhY2tncm91bmRcblx0XHQvLyBjb2xvciwgbm8gY2xhc3Mgd2lsbCBiZSBzZXRcblx0XHR2YXIgY29tcHV0ZWRCYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbWVudCApLmJhY2tncm91bmRDb2xvcjtcblx0XHRpZiggY29tcHV0ZWRCYWNrZ3JvdW5kQ29sb3IgKSB7XG5cdFx0XHR2YXIgcmdiID0gY29sb3JUb1JnYiggY29tcHV0ZWRCYWNrZ3JvdW5kQ29sb3IgKTtcblxuXHRcdFx0Ly8gSWdub3JlIGZ1bGx5IHRyYW5zcGFyZW50IGJhY2tncm91bmRzLiBTb21lIGJyb3dzZXJzIHJldHVyblxuXHRcdFx0Ly8gcmdiYSgwLDAsMCwwKSB3aGVuIHJlYWRpbmcgdGhlIGNvbXB1dGVkIGJhY2tncm91bmQgY29sb3Igb2Zcblx0XHRcdC8vIGFuIGVsZW1lbnQgd2l0aCBubyBiYWNrZ3JvdW5kXG5cdFx0XHRpZiggcmdiICYmIHJnYi5hICE9PSAwICkge1xuXHRcdFx0XHRpZiggY29sb3JCcmlnaHRuZXNzKCBjb21wdXRlZEJhY2tncm91bmRDb2xvciApIDwgMTI4ICkge1xuXHRcdFx0XHRcdHNsaWRlLmNsYXNzTGlzdC5hZGQoICdoYXMtZGFyay1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHNsaWRlLmNsYXNzTGlzdC5hZGQoICdoYXMtbGlnaHQtYmFja2dyb3VuZCcgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEgbGlzdGVuZXIgdG8gcG9zdE1lc3NhZ2UgZXZlbnRzLCB0aGlzIG1ha2VzIGl0XG5cdCAqIHBvc3NpYmxlIHRvIGNhbGwgYWxsIHJldmVhbC5qcyBBUEkgbWV0aG9kcyBmcm9tIGFub3RoZXJcblx0ICogd2luZG93LiBGb3IgZXhhbXBsZTpcblx0ICpcblx0ICogcmV2ZWFsV2luZG93LnBvc3RNZXNzYWdlKCBKU09OLnN0cmluZ2lmeSh7XG5cdCAqICAgbWV0aG9kOiAnc2xpZGUnLFxuXHQgKiAgIGFyZ3M6IFsgMiBdXG5cdCAqIH0pLCAnKicgKTtcblx0ICovXG5cdGZ1bmN0aW9uIHNldHVwUG9zdE1lc3NhZ2UoKSB7XG5cblx0XHRpZiggY29uZmlnLnBvc3RNZXNzYWdlICkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdtZXNzYWdlJywgZnVuY3Rpb24gKCBldmVudCApIHtcblx0XHRcdFx0dmFyIGRhdGEgPSBldmVudC5kYXRhO1xuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSdyZSBkZWFsaW5nIHdpdGggSlNPTlxuXHRcdFx0XHRpZiggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICYmIGRhdGEuY2hhckF0KCAwICkgPT09ICd7JyAmJiBkYXRhLmNoYXJBdCggZGF0YS5sZW5ndGggLSAxICkgPT09ICd9JyApIHtcblx0XHRcdFx0XHRkYXRhID0gSlNPTi5wYXJzZSggZGF0YSApO1xuXG5cdFx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHJlcXVlc3RlZCBtZXRob2QgY2FuIGJlIGZvdW5kXG5cdFx0XHRcdFx0aWYoIGRhdGEubWV0aG9kICYmIHR5cGVvZiBSZXZlYWxbZGF0YS5tZXRob2RdID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdFx0UmV2ZWFsW2RhdGEubWV0aG9kXS5hcHBseSggUmV2ZWFsLCBkYXRhLmFyZ3MgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIGZhbHNlICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQXBwbGllcyB0aGUgY29uZmlndXJhdGlvbiBzZXR0aW5ncyBmcm9tIHRoZSBjb25maWdcblx0ICogb2JqZWN0LiBNYXkgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlxuXHQgKi9cblx0ZnVuY3Rpb24gY29uZmlndXJlKCBvcHRpb25zICkge1xuXG5cdFx0dmFyIG51bWJlck9mU2xpZGVzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICkubGVuZ3RoO1xuXG5cdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggY29uZmlnLnRyYW5zaXRpb24gKTtcblxuXHRcdC8vIE5ldyBjb25maWcgb3B0aW9ucyBtYXkgYmUgcGFzc2VkIHdoZW4gdGhpcyBtZXRob2Rcblx0XHQvLyBpcyBpbnZva2VkIHRocm91Z2ggdGhlIEFQSSBhZnRlciBpbml0aWFsaXphdGlvblxuXHRcdGlmKCB0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgKSBleHRlbmQoIGNvbmZpZywgb3B0aW9ucyApO1xuXG5cdFx0Ly8gRm9yY2UgbGluZWFyIHRyYW5zaXRpb24gYmFzZWQgb24gYnJvd3NlciBjYXBhYmlsaXRpZXNcblx0XHRpZiggZmVhdHVyZXMudHJhbnNmb3JtczNkID09PSBmYWxzZSApIGNvbmZpZy50cmFuc2l0aW9uID0gJ2xpbmVhcic7XG5cblx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCBjb25maWcudHJhbnNpdGlvbiApO1xuXG5cdFx0ZG9tLndyYXBwZXIuc2V0QXR0cmlidXRlKCAnZGF0YS10cmFuc2l0aW9uLXNwZWVkJywgY29uZmlnLnRyYW5zaXRpb25TcGVlZCApO1xuXHRcdGRvbS53cmFwcGVyLnNldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uJywgY29uZmlnLmJhY2tncm91bmRUcmFuc2l0aW9uICk7XG5cblx0XHRkb20uY29udHJvbHMuc3R5bGUuZGlzcGxheSA9IGNvbmZpZy5jb250cm9scyA/ICdibG9jaycgOiAnbm9uZSc7XG5cdFx0ZG9tLnByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBjb25maWcucHJvZ3Jlc3MgPyAnYmxvY2snIDogJ25vbmUnO1xuXG5cdFx0aWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAncnRsJyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdydGwnICk7XG5cdFx0fVxuXG5cdFx0aWYoIGNvbmZpZy5jZW50ZXIgKSB7XG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnY2VudGVyJyApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdjZW50ZXInICk7XG5cdFx0fVxuXG5cdFx0Ly8gRXhpdCB0aGUgcGF1c2VkIG1vZGUgaWYgaXQgd2FzIGNvbmZpZ3VyZWQgb2ZmXG5cdFx0aWYoIGNvbmZpZy5wYXVzZSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXN1bWUoKTtcblx0XHR9XG5cblx0XHRpZiggY29uZmlnLm1vdXNlV2hlZWwgKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvbkRvY3VtZW50TW91c2VTY3JvbGwsIGZhbHNlICk7IC8vIEZGXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uRG9jdW1lbnRNb3VzZVNjcm9sbCwgZmFsc2UgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnRE9NTW91c2VTY3JvbGwnLCBvbkRvY3VtZW50TW91c2VTY3JvbGwsIGZhbHNlICk7IC8vIEZGXG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG9uRG9jdW1lbnRNb3VzZVNjcm9sbCwgZmFsc2UgKTtcblx0XHR9XG5cblx0XHQvLyBSb2xsaW5nIDNEIGxpbmtzXG5cdFx0aWYoIGNvbmZpZy5yb2xsaW5nTGlua3MgKSB7XG5cdFx0XHRlbmFibGVSb2xsaW5nTGlua3MoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRkaXNhYmxlUm9sbGluZ0xpbmtzKCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWZyYW1lIGxpbmsgcHJldmlld3Ncblx0XHRpZiggY29uZmlnLnByZXZpZXdMaW5rcyApIHtcblx0XHRcdGVuYWJsZVByZXZpZXdMaW5rcygpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGRpc2FibGVQcmV2aWV3TGlua3MoKTtcblx0XHRcdGVuYWJsZVByZXZpZXdMaW5rcyggJ1tkYXRhLXByZXZpZXctbGlua10nICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIGV4aXN0aW5nIGF1dG8tc2xpZGUgY29udHJvbHNcblx0XHRpZiggYXV0b1NsaWRlUGxheWVyICkge1xuXHRcdFx0YXV0b1NsaWRlUGxheWVyLmRlc3Ryb3koKTtcblx0XHRcdGF1dG9TbGlkZVBsYXllciA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gR2VuZXJhdGUgYXV0by1zbGlkZSBjb250cm9scyBpZiBuZWVkZWRcblx0XHRpZiggbnVtYmVyT2ZTbGlkZXMgPiAxICYmIGNvbmZpZy5hdXRvU2xpZGUgJiYgY29uZmlnLmF1dG9TbGlkZVN0b3BwYWJsZSAmJiBmZWF0dXJlcy5jYW52YXMgJiYgZmVhdHVyZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lICkge1xuXHRcdFx0YXV0b1NsaWRlUGxheWVyID0gbmV3IFBsYXliYWNrKCBkb20ud3JhcHBlciwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBNYXRoLm1pbiggTWF0aC5tYXgoICggRGF0ZS5ub3coKSAtIGF1dG9TbGlkZVN0YXJ0VGltZSApIC8gYXV0b1NsaWRlLCAwICksIDEgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0YXV0b1NsaWRlUGxheWVyLm9uKCAnY2xpY2snLCBvbkF1dG9TbGlkZVBsYXllckNsaWNrICk7XG5cdFx0XHRhdXRvU2xpZGVQYXVzZWQgPSBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBXaGVuIGZyYWdtZW50cyBhcmUgdHVybmVkIG9mZiB0aGV5IHNob3VsZCBiZSB2aXNpYmxlXG5cdFx0aWYoIGNvbmZpZy5mcmFnbWVudHMgPT09IGZhbHNlICkge1xuXHRcdFx0dG9BcnJheSggZG9tLnNsaWRlcy5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG5cdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2N1cnJlbnQtZnJhZ21lbnQnICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0c3luYygpO1xuXG5cdH1cblxuXHQvKipcblx0ICogQmluZHMgYWxsIGV2ZW50IGxpc3RlbmVycy5cblx0ICovXG5cdGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuXG5cdFx0ZXZlbnRzQXJlQm91bmQgPSB0cnVlO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgb25XaW5kb3dIYXNoQ2hhbmdlLCBmYWxzZSApO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAncmVzaXplJywgb25XaW5kb3dSZXNpemUsIGZhbHNlICk7XG5cblx0XHRpZiggY29uZmlnLnRvdWNoICkge1xuXHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXG5cdFx0XHQvLyBTdXBwb3J0IHBvaW50ZXItc3R5bGUgdG91Y2ggaW50ZXJhY3Rpb24gYXMgd2VsbFxuXHRcdFx0aWYoIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgKSB7XG5cdFx0XHRcdC8vIElFIDExIHVzZXMgdW4tcHJlZml4ZWQgdmVyc2lvbiBvZiBwb2ludGVyIGV2ZW50c1xuXHRcdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCBmYWxzZSApO1xuXHRcdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcm1vdmUnLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSApO1xuXHRcdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgb25Qb2ludGVyVXAsIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgKSB7XG5cdFx0XHRcdC8vIElFIDEwIHVzZXMgcHJlZml4ZWQgdmVyc2lvbiBvZiBwb2ludGVyIGV2ZW50c1xuXHRcdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyRG93bicsIG9uUG9pbnRlckRvd24sIGZhbHNlICk7XG5cdFx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJNb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UgKTtcblx0XHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlclVwJywgb25Qb2ludGVyVXAsIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoIGNvbmZpZy5rZXlib2FyZCApIHtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25Eb2N1bWVudEtleURvd24sIGZhbHNlICk7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5cHJlc3MnLCBvbkRvY3VtZW50S2V5UHJlc3MsIGZhbHNlICk7XG5cdFx0fVxuXG5cdFx0aWYoIGNvbmZpZy5wcm9ncmVzcyAmJiBkb20ucHJvZ3Jlc3MgKSB7XG5cdFx0XHRkb20ucHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb25Qcm9ncmVzc0NsaWNrZWQsIGZhbHNlICk7XG5cdFx0fVxuXG5cdFx0aWYoIGNvbmZpZy5mb2N1c0JvZHlPblBhZ2VWaXNpYmlsaXR5Q2hhbmdlICkge1xuXHRcdFx0dmFyIHZpc2liaWxpdHlDaGFuZ2U7XG5cblx0XHRcdGlmKCAnaGlkZGVuJyBpbiBkb2N1bWVudCApIHtcblx0XHRcdFx0dmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoICdtc0hpZGRlbicgaW4gZG9jdW1lbnQgKSB7XG5cdFx0XHRcdHZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoICd3ZWJraXRIaWRkZW4nIGluIGRvY3VtZW50ICkge1xuXHRcdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdmlzaWJpbGl0eUNoYW5nZSApIHtcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdmlzaWJpbGl0eUNoYW5nZSwgb25QYWdlVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBMaXN0ZW4gdG8gYm90aCB0b3VjaCBhbmQgY2xpY2sgZXZlbnRzLCBpbiBjYXNlIHRoZSBkZXZpY2Vcblx0XHQvLyBzdXBwb3J0cyBib3RoXG5cdFx0dmFyIHBvaW50ZXJFdmVudHMgPSBbICd0b3VjaHN0YXJ0JywgJ2NsaWNrJyBdO1xuXG5cdFx0Ly8gT25seSBzdXBwb3J0IHRvdWNoIGZvciBBbmRyb2lkLCBmaXhlcyBkb3VibGUgbmF2aWdhdGlvbnMgaW5cblx0XHQvLyBzdG9jayBicm93c2VyXG5cdFx0aWYoIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goIC9hbmRyb2lkL2dpICkgKSB7XG5cdFx0XHRwb2ludGVyRXZlbnRzID0gWyAndG91Y2hzdGFydCcgXTtcblx0XHR9XG5cblx0XHRwb2ludGVyRXZlbnRzLmZvckVhY2goIGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG5cdFx0XHRkb20uY29udHJvbHNMZWZ0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlTGVmdENsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc1JpZ2h0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlUmlnaHRDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNVcC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZVVwQ2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzRG93bi5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZURvd25DbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNQcmV2LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlUHJldkNsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc05leHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVOZXh0Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFVuYmluZHMgYWxsIGV2ZW50IGxpc3RlbmVycy5cblx0ICovXG5cdGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuXG5cdFx0ZXZlbnRzQXJlQm91bmQgPSBmYWxzZTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlkb3duJywgb25Eb2N1bWVudEtleURvd24sIGZhbHNlICk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2tleXByZXNzJywgb25Eb2N1bWVudEtleVByZXNzLCBmYWxzZSApO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIG9uV2luZG93SGFzaENoYW5nZSwgZmFsc2UgKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSApO1xuXG5cdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlICk7XG5cdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlICk7XG5cblx0XHQvLyBJRTExXG5cdFx0aWYoIHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQgKSB7XG5cdFx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcmRvd24nLCBvblBvaW50ZXJEb3duLCBmYWxzZSApO1xuXHRcdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVydXAnLCBvblBvaW50ZXJVcCwgZmFsc2UgKTtcblx0XHR9XG5cdFx0Ly8gSUUxMFxuXHRcdGVsc2UgaWYoIHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCApIHtcblx0XHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJEb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcblx0XHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJNb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UgKTtcblx0XHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJVcCcsIG9uUG9pbnRlclVwLCBmYWxzZSApO1xuXHRcdH1cblxuXHRcdGlmICggY29uZmlnLnByb2dyZXNzICYmIGRvbS5wcm9ncmVzcyApIHtcblx0XHRcdGRvbS5wcm9ncmVzcy5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvblByb2dyZXNzQ2xpY2tlZCwgZmFsc2UgKTtcblx0XHR9XG5cblx0XHRbICd0b3VjaHN0YXJ0JywgJ2NsaWNrJyBdLmZvckVhY2goIGZ1bmN0aW9uKCBldmVudE5hbWUgKSB7XG5cdFx0XHRkb20uY29udHJvbHNMZWZ0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlTGVmdENsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc1JpZ2h0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlUmlnaHRDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNVcC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZVVwQ2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzRG93bi5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZURvd25DbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNQcmV2LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlUHJldkNsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc05leHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVOZXh0Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEV4dGVuZCBvYmplY3QgYSB3aXRoIHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuXHQgKiBJZiB0aGVyZSdzIGEgY29uZmxpY3QsIG9iamVjdCBiIHRha2VzIHByZWNlZGVuY2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBleHRlbmQoIGEsIGIgKSB7XG5cblx0XHRmb3IoIHZhciBpIGluIGIgKSB7XG5cdFx0XHRhWyBpIF0gPSBiWyBpIF07XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgdGhlIHRhcmdldCBvYmplY3QgdG8gYW4gYXJyYXkuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b0FycmF5KCBvICkge1xuXG5cdFx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKCBvICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVdGlsaXR5IGZvciBkZXNlcmlhbGl6aW5nIGEgdmFsdWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBkZXNlcmlhbGl6ZSggdmFsdWUgKSB7XG5cblx0XHRpZiggdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyApIHtcblx0XHRcdGlmKCB2YWx1ZSA9PT0gJ251bGwnICkgcmV0dXJuIG51bGw7XG5cdFx0XHRlbHNlIGlmKCB2YWx1ZSA9PT0gJ3RydWUnICkgcmV0dXJuIHRydWU7XG5cdFx0XHRlbHNlIGlmKCB2YWx1ZSA9PT0gJ2ZhbHNlJyApIHJldHVybiBmYWxzZTtcblx0XHRcdGVsc2UgaWYoIHZhbHVlLm1hdGNoKCAvXlxcZCskLyApICkgcmV0dXJuIHBhcnNlRmxvYXQoIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXG5cdH1cblxuXHQvKipcblx0ICogTWVhc3VyZXMgdGhlIGRpc3RhbmNlIGluIHBpeGVscyBiZXR3ZWVuIHBvaW50IGFcblx0ICogYW5kIHBvaW50IGIuXG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBhIHBvaW50IHdpdGggeC95IHByb3BlcnRpZXNcblx0ICogQHBhcmFtIHtPYmplY3R9IGIgcG9pbnQgd2l0aCB4L3kgcHJvcGVydGllc1xuXHQgKi9cblx0ZnVuY3Rpb24gZGlzdGFuY2VCZXR3ZWVuKCBhLCBiICkge1xuXG5cdFx0dmFyIGR4ID0gYS54IC0gYi54LFxuXHRcdFx0ZHkgPSBhLnkgLSBiLnk7XG5cblx0XHRyZXR1cm4gTWF0aC5zcXJ0KCBkeCpkeCArIGR5KmR5ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIGEgQ1NTIHRyYW5zZm9ybSB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiB0cmFuc2Zvcm1FbGVtZW50KCBlbGVtZW50LCB0cmFuc2Zvcm0gKSB7XG5cblx0XHRlbGVtZW50LnN0eWxlLldlYmtpdFRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblx0XHRlbGVtZW50LnN0eWxlLk1velRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblx0XHRlbGVtZW50LnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXHRcdGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuXG5cdH1cblxuXHQvKipcblx0ICogQXBwbGllcyBDU1MgdHJhbnNmb3JtcyB0byB0aGUgc2xpZGVzIGNvbnRhaW5lci4gVGhlIGNvbnRhaW5lclxuXHQgKiBpcyB0cmFuc2Zvcm1lZCBmcm9tIHR3byBzZXBhcmF0ZSBzb3VyY2VzOiBsYXlvdXQgYW5kIHRoZSBvdmVydmlld1xuXHQgKiBtb2RlLlxuXHQgKi9cblx0ZnVuY3Rpb24gdHJhbnNmb3JtU2xpZGVzKCB0cmFuc2Zvcm1zICkge1xuXG5cdFx0Ly8gUGljayB1cCBuZXcgdHJhbnNmb3JtcyBmcm9tIGFyZ3VtZW50c1xuXHRcdGlmKCB0eXBlb2YgdHJhbnNmb3Jtcy5sYXlvdXQgPT09ICdzdHJpbmcnICkgc2xpZGVzVHJhbnNmb3JtLmxheW91dCA9IHRyYW5zZm9ybXMubGF5b3V0O1xuXHRcdGlmKCB0eXBlb2YgdHJhbnNmb3Jtcy5vdmVydmlldyA9PT0gJ3N0cmluZycgKSBzbGlkZXNUcmFuc2Zvcm0ub3ZlcnZpZXcgPSB0cmFuc2Zvcm1zLm92ZXJ2aWV3O1xuXG5cdFx0Ly8gQXBwbHkgdGhlIHRyYW5zZm9ybXMgdG8gdGhlIHNsaWRlcyBjb250YWluZXJcblx0XHRpZiggc2xpZGVzVHJhbnNmb3JtLmxheW91dCApIHtcblx0XHRcdHRyYW5zZm9ybUVsZW1lbnQoIGRvbS5zbGlkZXMsIHNsaWRlc1RyYW5zZm9ybS5sYXlvdXQgKyAnICcgKyBzbGlkZXNUcmFuc2Zvcm0ub3ZlcnZpZXcgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0cmFuc2Zvcm1FbGVtZW50KCBkb20uc2xpZGVzLCBzbGlkZXNUcmFuc2Zvcm0ub3ZlcnZpZXcgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBJbmplY3RzIHRoZSBnaXZlbiBDU1Mgc3R5bGVzIGludG8gdGhlIERPTS5cblx0ICovXG5cdGZ1bmN0aW9uIGluamVjdFN0eWxlU2hlZXQoIHZhbHVlICkge1xuXG5cdFx0dmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdzdHlsZScgKTtcblx0XHR0YWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cdFx0aWYoIHRhZy5zdHlsZVNoZWV0ICkge1xuXHRcdFx0dGFnLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHZhbHVlO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRhZy5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIHZhbHVlICkgKTtcblx0XHR9XG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdoZWFkJyApWzBdLmFwcGVuZENoaWxkKCB0YWcgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIHZhcmlvdXMgY29sb3IgaW5wdXQgZm9ybWF0cyB0byBhbiB7cjowLGc6MCxiOjB9IG9iamVjdC5cblx0ICpcblx0ICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvcixcblx0ICogdGhlIGZvbGxvd2luZyBmb3JtYXRzIGFyZSBzdXBwb3J0ZWQ6XG5cdCAqIC0gIzAwMFxuXHQgKiAtICMwMDAwMDBcblx0ICogLSByZ2IoMCwwLDApXG5cdCAqL1xuXHRmdW5jdGlvbiBjb2xvclRvUmdiKCBjb2xvciApIHtcblxuXHRcdHZhciBoZXgzID0gY29sb3IubWF0Y2goIC9eIyhbMC05YS1mXXszfSkkL2kgKTtcblx0XHRpZiggaGV4MyAmJiBoZXgzWzFdICkge1xuXHRcdFx0aGV4MyA9IGhleDNbMV07XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyOiBwYXJzZUludCggaGV4My5jaGFyQXQoIDAgKSwgMTYgKSAqIDB4MTEsXG5cdFx0XHRcdGc6IHBhcnNlSW50KCBoZXgzLmNoYXJBdCggMSApLCAxNiApICogMHgxMSxcblx0XHRcdFx0YjogcGFyc2VJbnQoIGhleDMuY2hhckF0KCAyICksIDE2ICkgKiAweDExXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHZhciBoZXg2ID0gY29sb3IubWF0Y2goIC9eIyhbMC05YS1mXXs2fSkkL2kgKTtcblx0XHRpZiggaGV4NiAmJiBoZXg2WzFdICkge1xuXHRcdFx0aGV4NiA9IGhleDZbMV07XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyOiBwYXJzZUludCggaGV4Ni5zdWJzdHIoIDAsIDIgKSwgMTYgKSxcblx0XHRcdFx0ZzogcGFyc2VJbnQoIGhleDYuc3Vic3RyKCAyLCAyICksIDE2ICksXG5cdFx0XHRcdGI6IHBhcnNlSW50KCBoZXg2LnN1YnN0ciggNCwgMiApLCAxNiApXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHZhciByZ2IgPSBjb2xvci5tYXRjaCggL15yZ2JcXHMqXFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccypcXCkkL2kgKTtcblx0XHRpZiggcmdiICkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cjogcGFyc2VJbnQoIHJnYlsxXSwgMTAgKSxcblx0XHRcdFx0ZzogcGFyc2VJbnQoIHJnYlsyXSwgMTAgKSxcblx0XHRcdFx0YjogcGFyc2VJbnQoIHJnYlszXSwgMTAgKVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR2YXIgcmdiYSA9IGNvbG9yLm1hdGNoKCAvXnJnYmFcXHMqXFwoXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccyosXFxzKihcXGQrKVxccypcXCxcXHMqKFtcXGRdK3xbXFxkXSouW1xcZF0rKVxccypcXCkkL2kgKTtcblx0XHRpZiggcmdiYSApIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHI6IHBhcnNlSW50KCByZ2JhWzFdLCAxMCApLFxuXHRcdFx0XHRnOiBwYXJzZUludCggcmdiYVsyXSwgMTAgKSxcblx0XHRcdFx0YjogcGFyc2VJbnQoIHJnYmFbM10sIDEwICksXG5cdFx0XHRcdGE6IHBhcnNlRmxvYXQoIHJnYmFbNF0gKVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZXMgYnJpZ2h0bmVzcyBvbiBhIHNjYWxlIG9mIDAtMjU1LlxuXHQgKlxuXHQgKiBAcGFyYW0gY29sb3IgU2VlIGNvbG9yU3RyaW5nVG9SZ2IgZm9yIHN1cHBvcnRlZCBmb3JtYXRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gY29sb3JCcmlnaHRuZXNzKCBjb2xvciApIHtcblxuXHRcdGlmKCB0eXBlb2YgY29sb3IgPT09ICdzdHJpbmcnICkgY29sb3IgPSBjb2xvclRvUmdiKCBjb2xvciApO1xuXG5cdFx0aWYoIGNvbG9yICkge1xuXHRcdFx0cmV0dXJuICggY29sb3IuciAqIDI5OSArIGNvbG9yLmcgKiA1ODcgKyBjb2xvci5iICogMTE0ICkgLyAxMDAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSBoZWlnaHQgb2YgdGhlIGdpdmVuIGVsZW1lbnQgYnkgbG9va2luZ1xuXHQgKiBhdCB0aGUgcG9zaXRpb24gYW5kIGhlaWdodCBvZiBpdHMgaW1tZWRpYXRlIGNoaWxkcmVuLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0QWJzb2x1dGVIZWlnaHQoIGVsZW1lbnQgKSB7XG5cblx0XHR2YXIgaGVpZ2h0ID0gMDtcblxuXHRcdGlmKCBlbGVtZW50ICkge1xuXHRcdFx0dmFyIGFic29sdXRlQ2hpbGRyZW4gPSAwO1xuXG5cdFx0XHR0b0FycmF5KCBlbGVtZW50LmNoaWxkTm9kZXMgKS5mb3JFYWNoKCBmdW5jdGlvbiggY2hpbGQgKSB7XG5cblx0XHRcdFx0aWYoIHR5cGVvZiBjaGlsZC5vZmZzZXRUb3AgPT09ICdudW1iZXInICYmIGNoaWxkLnN0eWxlICkge1xuXHRcdFx0XHRcdC8vIENvdW50ICMgb2YgYWJzIGNoaWxkcmVuXG5cdFx0XHRcdFx0aWYoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBjaGlsZCApLnBvc2l0aW9uID09PSAnYWJzb2x1dGUnICkge1xuXHRcdFx0XHRcdFx0YWJzb2x1dGVDaGlsZHJlbiArPSAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhlaWdodCA9IE1hdGgubWF4KCBoZWlnaHQsIGNoaWxkLm9mZnNldFRvcCArIGNoaWxkLm9mZnNldEhlaWdodCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG5vIGFic29sdXRlIGNoaWxkcmVuLCB1c2Ugb2Zmc2V0SGVpZ2h0XG5cdFx0XHRpZiggYWJzb2x1dGVDaGlsZHJlbiA9PT0gMCApIHtcblx0XHRcdFx0aGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gaGVpZ2h0O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgcmVtYWluaW5nIGhlaWdodCB3aXRoaW4gdGhlIHBhcmVudCBvZiB0aGVcblx0ICogdGFyZ2V0IGVsZW1lbnQuXG5cdCAqXG5cdCAqIHJlbWFpbmluZyBoZWlnaHQgPSBbIGNvbmZpZ3VyZWQgcGFyZW50IGhlaWdodCBdIC0gWyBjdXJyZW50IHBhcmVudCBoZWlnaHQgXVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UmVtYWluaW5nSGVpZ2h0KCBlbGVtZW50LCBoZWlnaHQgKSB7XG5cblx0XHRoZWlnaHQgPSBoZWlnaHQgfHwgMDtcblxuXHRcdGlmKCBlbGVtZW50ICkge1xuXHRcdFx0dmFyIG5ld0hlaWdodCwgb2xkSGVpZ2h0ID0gZWxlbWVudC5zdHlsZS5oZWlnaHQ7XG5cblx0XHRcdC8vIENoYW5nZSB0aGUgLnN0cmV0Y2ggZWxlbWVudCBoZWlnaHQgdG8gMCBpbiBvcmRlciBmaW5kIHRoZSBoZWlnaHQgb2YgYWxsXG5cdFx0XHQvLyB0aGUgb3RoZXIgZWxlbWVudHNcblx0XHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG5cdFx0XHRuZXdIZWlnaHQgPSBoZWlnaHQgLSBlbGVtZW50LnBhcmVudE5vZGUub2Zmc2V0SGVpZ2h0O1xuXG5cdFx0XHQvLyBSZXN0b3JlIHRoZSBvbGQgaGVpZ2h0LCBqdXN0IGluIGNhc2Vcblx0XHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gb2xkSGVpZ2h0ICsgJ3B4JztcblxuXHRcdFx0cmV0dXJuIG5ld0hlaWdodDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaGVpZ2h0O1xuXG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHRoaXMgaW5zdGFuY2UgaXMgYmVpbmcgdXNlZCB0byBwcmludCBhIFBERi5cblx0ICovXG5cdGZ1bmN0aW9uIGlzUHJpbnRpbmdQREYoKSB7XG5cblx0XHRyZXR1cm4gKCAvcHJpbnQtcGRmL2dpICkudGVzdCggd2luZG93LmxvY2F0aW9uLnNlYXJjaCApO1xuXG5cdH1cblxuXHQvKipcblx0ICogSGlkZXMgdGhlIGFkZHJlc3MgYmFyIGlmIHdlJ3JlIG9uIGEgbW9iaWxlIGRldmljZS5cblx0ICovXG5cdGZ1bmN0aW9uIGhpZGVBZGRyZXNzQmFyKCkge1xuXG5cdFx0aWYoIGNvbmZpZy5oaWRlQWRkcmVzc0JhciAmJiBpc01vYmlsZURldmljZSApIHtcblx0XHRcdC8vIEV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyIHRoZSBhZGRyZXNzIGJhciB0byBoaWRlXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCByZW1vdmVBZGRyZXNzQmFyLCBmYWxzZSApO1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdvcmllbnRhdGlvbmNoYW5nZScsIHJlbW92ZUFkZHJlc3NCYXIsIGZhbHNlICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2F1c2VzIHRoZSBhZGRyZXNzIGJhciB0byBoaWRlIG9uIG1vYmlsZSBkZXZpY2VzLFxuXHQgKiBtb3JlIHZlcnRpY2FsIHNwYWNlIGZ0dy5cblx0ICovXG5cdGZ1bmN0aW9uIHJlbW92ZUFkZHJlc3NCYXIoKSB7XG5cblx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdHdpbmRvdy5zY3JvbGxUbyggMCwgMSApO1xuXHRcdH0sIDEwICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNwYXRjaGVzIGFuIGV2ZW50IG9mIHRoZSBzcGVjaWZpZWQgdHlwZSBmcm9tIHRoZVxuXHQgKiByZXZlYWwgRE9NIGVsZW1lbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KCB0eXBlLCBhcmdzICkge1xuXG5cdFx0dmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdIVE1MRXZlbnRzJywgMSwgMiApO1xuXHRcdGV2ZW50LmluaXRFdmVudCggdHlwZSwgdHJ1ZSwgdHJ1ZSApO1xuXHRcdGV4dGVuZCggZXZlbnQsIGFyZ3MgKTtcblx0XHRkb20ud3JhcHBlci5kaXNwYXRjaEV2ZW50KCBldmVudCApO1xuXG5cdFx0Ly8gSWYgd2UncmUgaW4gYW4gaWZyYW1lLCBwb3N0IGVhY2ggcmV2ZWFsLmpzIGV2ZW50IHRvIHRoZVxuXHRcdC8vIHBhcmVudCB3aW5kb3cuIFVzZWQgYnkgdGhlIG5vdGVzIHBsdWdpblxuXHRcdGlmKCBjb25maWcucG9zdE1lc3NhZ2VFdmVudHMgJiYgd2luZG93LnBhcmVudCAhPT0gd2luZG93LnNlbGYgKSB7XG5cdFx0XHR3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKCBKU09OLnN0cmluZ2lmeSh7IG5hbWVzcGFjZTogJ3JldmVhbCcsIGV2ZW50TmFtZTogdHlwZSwgc3RhdGU6IGdldFN0YXRlKCkgfSksICcqJyApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFdyYXAgYWxsIGxpbmtzIGluIDNEIGdvb2RuZXNzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZW5hYmxlUm9sbGluZ0xpbmtzKCkge1xuXG5cdFx0aWYoIGZlYXR1cmVzLnRyYW5zZm9ybXMzZCAmJiAhKCAnbXNQZXJzcGVjdGl2ZScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSApICkge1xuXHRcdFx0dmFyIGFuY2hvcnMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKyAnIGEnICk7XG5cblx0XHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBhbmNob3JzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHR2YXIgYW5jaG9yID0gYW5jaG9yc1tpXTtcblxuXHRcdFx0XHRpZiggYW5jaG9yLnRleHRDb250ZW50ICYmICFhbmNob3IucXVlcnlTZWxlY3RvciggJyonICkgJiYgKCAhYW5jaG9yLmNsYXNzTmFtZSB8fCAhYW5jaG9yLmNsYXNzTGlzdC5jb250YWlucyggYW5jaG9yLCAncm9sbCcgKSApICkge1xuXHRcdFx0XHRcdHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRcdHNwYW4uc2V0QXR0cmlidXRlKCdkYXRhLXRpdGxlJywgYW5jaG9yLnRleHQpO1xuXHRcdFx0XHRcdHNwYW4uaW5uZXJIVE1MID0gYW5jaG9yLmlubmVySFRNTDtcblxuXHRcdFx0XHRcdGFuY2hvci5jbGFzc0xpc3QuYWRkKCAncm9sbCcgKTtcblx0XHRcdFx0XHRhbmNob3IuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdFx0YW5jaG9yLmFwcGVuZENoaWxkKHNwYW4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVW53cmFwIGFsbCAzRCBsaW5rcy5cblx0ICovXG5cdGZ1bmN0aW9uIGRpc2FibGVSb2xsaW5nTGlua3MoKSB7XG5cblx0XHR2YXIgYW5jaG9ycyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiArICcgYS5yb2xsJyApO1xuXG5cdFx0Zm9yKCB2YXIgaSA9IDAsIGxlbiA9IGFuY2hvcnMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHR2YXIgYW5jaG9yID0gYW5jaG9yc1tpXTtcblx0XHRcdHZhciBzcGFuID0gYW5jaG9yLnF1ZXJ5U2VsZWN0b3IoICdzcGFuJyApO1xuXG5cdFx0XHRpZiggc3BhbiApIHtcblx0XHRcdFx0YW5jaG9yLmNsYXNzTGlzdC5yZW1vdmUoICdyb2xsJyApO1xuXHRcdFx0XHRhbmNob3IuaW5uZXJIVE1MID0gc3Bhbi5pbm5lckhUTUw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQmluZCBwcmV2aWV3IGZyYW1lIGxpbmtzLlxuXHQgKi9cblx0ZnVuY3Rpb24gZW5hYmxlUHJldmlld0xpbmtzKCBzZWxlY3RvciApIHtcblxuXHRcdHZhciBhbmNob3JzID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggc2VsZWN0b3IgPyBzZWxlY3RvciA6ICdhJyApICk7XG5cblx0XHRhbmNob3JzLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0aWYoIC9eKGh0dHB8d3d3KS9naS50ZXN0KCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2hyZWYnICkgKSApIHtcblx0XHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvblByZXZpZXdMaW5rQ2xpY2tlZCwgZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVbmJpbmQgcHJldmlldyBmcmFtZSBsaW5rcy5cblx0ICovXG5cdGZ1bmN0aW9uIGRpc2FibGVQcmV2aWV3TGlua3MoKSB7XG5cblx0XHR2YXIgYW5jaG9ycyA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdhJyApICk7XG5cblx0XHRhbmNob3JzLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0aWYoIC9eKGh0dHB8d3d3KS9naS50ZXN0KCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2hyZWYnICkgKSApIHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvblByZXZpZXdMaW5rQ2xpY2tlZCwgZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBPcGVucyBhIHByZXZpZXcgd2luZG93IGZvciB0aGUgdGFyZ2V0IFVSTC5cblx0ICovXG5cdGZ1bmN0aW9uIHNob3dQcmV2aWV3KCB1cmwgKSB7XG5cblx0XHRjbG9zZU92ZXJsYXkoKTtcblxuXHRcdGRvbS5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRkb20ub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCAnb3ZlcmxheScgKTtcblx0XHRkb20ub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCAnb3ZlcmxheS1wcmV2aWV3JyApO1xuXHRcdGRvbS53cmFwcGVyLmFwcGVuZENoaWxkKCBkb20ub3ZlcmxheSApO1xuXG5cdFx0ZG9tLm92ZXJsYXkuaW5uZXJIVE1MID0gW1xuXHRcdFx0JzxoZWFkZXI+Jyxcblx0XHRcdFx0JzxhIGNsYXNzPVwiY2xvc2VcIiBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiaWNvblwiPjwvc3Bhbj48L2E+Jyxcblx0XHRcdFx0JzxhIGNsYXNzPVwiZXh0ZXJuYWxcIiBocmVmPVwiJysgdXJsICsnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHNwYW4gY2xhc3M9XCJpY29uXCI+PC9zcGFuPjwvYT4nLFxuXHRcdFx0JzwvaGVhZGVyPicsXG5cdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48L2Rpdj4nLFxuXHRcdFx0JzxkaXYgY2xhc3M9XCJ2aWV3cG9ydFwiPicsXG5cdFx0XHRcdCc8aWZyYW1lIHNyYz1cIicrIHVybCArJ1wiPjwvaWZyYW1lPicsXG5cdFx0XHQnPC9kaXY+J1xuXHRcdF0uam9pbignJyk7XG5cblx0XHRkb20ub3ZlcmxheS5xdWVyeVNlbGVjdG9yKCAnaWZyYW1lJyApLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0ZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ2xvYWRlZCcgKTtcblx0XHR9LCBmYWxzZSApO1xuXG5cdFx0ZG9tLm92ZXJsYXkucXVlcnlTZWxlY3RvciggJy5jbG9zZScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRjbG9zZU92ZXJsYXkoKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fSwgZmFsc2UgKTtcblxuXHRcdGRvbS5vdmVybGF5LnF1ZXJ5U2VsZWN0b3IoICcuZXh0ZXJuYWwnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0Y2xvc2VPdmVybGF5KCk7XG5cdFx0fSwgZmFsc2UgKTtcblxuXHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG5cdFx0fSwgMSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogT3BlbnMgYSBvdmVybGF5IHdpbmRvdyB3aXRoIGhlbHAgbWF0ZXJpYWwuXG5cdCAqL1xuXHRmdW5jdGlvbiBzaG93SGVscCgpIHtcblxuXHRcdGlmKCBjb25maWcuaGVscCApIHtcblxuXHRcdFx0Y2xvc2VPdmVybGF5KCk7XG5cblx0XHRcdGRvbS5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblx0XHRcdGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdvdmVybGF5JyApO1xuXHRcdFx0ZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ292ZXJsYXktaGVscCcgKTtcblx0XHRcdGRvbS53cmFwcGVyLmFwcGVuZENoaWxkKCBkb20ub3ZlcmxheSApO1xuXG5cdFx0XHR2YXIgaHRtbCA9ICc8cCBjbGFzcz1cInRpdGxlXCI+S2V5Ym9hcmQgU2hvcnRjdXRzPC9wPjxici8+JztcblxuXHRcdFx0aHRtbCArPSAnPHRhYmxlPjx0aD5LRVk8L3RoPjx0aD5BQ1RJT048L3RoPic7XG5cdFx0XHRmb3IoIHZhciBrZXkgaW4ga2V5Ym9hcmRTaG9ydGN1dHMgKSB7XG5cdFx0XHRcdGh0bWwgKz0gJzx0cj48dGQ+JyArIGtleSArICc8L3RkPjx0ZD4nICsga2V5Ym9hcmRTaG9ydGN1dHNbIGtleSBdICsgJzwvdGQ+PC90cj4nO1xuXHRcdFx0fVxuXG5cdFx0XHRodG1sICs9ICc8L3RhYmxlPic7XG5cblx0XHRcdGRvbS5vdmVybGF5LmlubmVySFRNTCA9IFtcblx0XHRcdFx0JzxoZWFkZXI+Jyxcblx0XHRcdFx0XHQnPGEgY2xhc3M9XCJjbG9zZVwiIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJpY29uXCI+PC9zcGFuPjwvYT4nLFxuXHRcdFx0XHQnPC9oZWFkZXI+Jyxcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJ2aWV3cG9ydFwiPicsXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJ2aWV3cG9ydC1pbm5lclwiPicrIGh0bWwgKyc8L2Rpdj4nLFxuXHRcdFx0XHQnPC9kaXY+J1xuXHRcdFx0XS5qb2luKCcnKTtcblxuXHRcdFx0ZG9tLm92ZXJsYXkucXVlcnlTZWxlY3RvciggJy5jbG9zZScgKS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdGNsb3NlT3ZlcmxheSgpO1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0fSwgZmFsc2UgKTtcblxuXHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJyApO1xuXHRcdFx0fSwgMSApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2xvc2VzIGFueSBjdXJyZW50bHkgb3BlbiBvdmVybGF5LlxuXHQgKi9cblx0ZnVuY3Rpb24gY2xvc2VPdmVybGF5KCkge1xuXG5cdFx0aWYoIGRvbS5vdmVybGF5ICkge1xuXHRcdFx0ZG9tLm92ZXJsYXkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggZG9tLm92ZXJsYXkgKTtcblx0XHRcdGRvbS5vdmVybGF5ID0gbnVsbDtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIEphdmFTY3JpcHQtY29udHJvbGxlZCBsYXlvdXQgcnVsZXMgdG8gdGhlXG5cdCAqIHByZXNlbnRhdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIGxheW91dCgpIHtcblxuXHRcdGlmKCBkb20ud3JhcHBlciAmJiAhaXNQcmludGluZ1BERigpICkge1xuXG5cdFx0XHR2YXIgc2l6ZSA9IGdldENvbXB1dGVkU2xpZGVTaXplKCk7XG5cblx0XHRcdHZhciBzbGlkZVBhZGRpbmcgPSAyMDsgLy8gVE9ETyBEaWcgdGhpcyBvdXQgb2YgRE9NXG5cblx0XHRcdC8vIExheW91dCB0aGUgY29udGVudHMgb2YgdGhlIHNsaWRlc1xuXHRcdFx0bGF5b3V0U2xpZGVDb250ZW50cyggY29uZmlnLndpZHRoLCBjb25maWcuaGVpZ2h0LCBzbGlkZVBhZGRpbmcgKTtcblxuXHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyAncHgnO1xuXHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodCArICdweCc7XG5cblx0XHRcdC8vIERldGVybWluZSBzY2FsZSBvZiBjb250ZW50IHRvIGZpdCB3aXRoaW4gYXZhaWxhYmxlIHNwYWNlXG5cdFx0XHRzY2FsZSA9IE1hdGgubWluKCBzaXplLnByZXNlbnRhdGlvbldpZHRoIC8gc2l6ZS53aWR0aCwgc2l6ZS5wcmVzZW50YXRpb25IZWlnaHQgLyBzaXplLmhlaWdodCApO1xuXG5cdFx0XHQvLyBSZXNwZWN0IG1heC9taW4gc2NhbGUgc2V0dGluZ3Ncblx0XHRcdHNjYWxlID0gTWF0aC5tYXgoIHNjYWxlLCBjb25maWcubWluU2NhbGUgKTtcblx0XHRcdHNjYWxlID0gTWF0aC5taW4oIHNjYWxlLCBjb25maWcubWF4U2NhbGUgKTtcblxuXHRcdFx0Ly8gRG9uJ3QgYXBwbHkgYW55IHNjYWxpbmcgc3R5bGVzIGlmIHNjYWxlIGlzIDFcblx0XHRcdGlmKCBzY2FsZSA9PT0gMSApIHtcblx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS56b29tID0gJyc7XG5cdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUubGVmdCA9ICcnO1xuXHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLnRvcCA9ICcnO1xuXHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLmJvdHRvbSA9ICcnO1xuXHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLnJpZ2h0ID0gJyc7XG5cdFx0XHRcdHRyYW5zZm9ybVNsaWRlcyggeyBsYXlvdXQ6ICcnIH0gKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvLyBQcmVmZXIgem9vbWluZyBpbiBkZXNrdG9wIENocm9tZSBzbyB0aGF0IGNvbnRlbnQgcmVtYWlucyBjcmlzcFxuXHRcdFx0XHRpZiggIWlzTW9iaWxlRGV2aWNlICYmIC9jaHJvbWUvaS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICkgJiYgdHlwZW9mIGRvbS5zbGlkZXMuc3R5bGUuem9vbSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS56b29tID0gc2NhbGU7XG5cdFx0XHRcdFx0dHJhbnNmb3JtU2xpZGVzKCB7IGxheW91dDogJycgfSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFwcGx5IHNjYWxlIHRyYW5zZm9ybSBhcyBhIGZhbGxiYWNrXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUubGVmdCA9ICc1MCUnO1xuXHRcdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUudG9wID0gJzUwJSc7XG5cdFx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG5cdFx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS5yaWdodCA9ICdhdXRvJztcblx0XHRcdFx0XHR0cmFuc2Zvcm1TbGlkZXMoIHsgbGF5b3V0OiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKCcrIHNjYWxlICsnKScgfSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlbGVjdCBhbGwgc2xpZGVzLCB2ZXJ0aWNhbCBhbmQgaG9yaXpvbnRhbFxuXHRcdFx0dmFyIHNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiApICk7XG5cblx0XHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBzbGlkZXMubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdHZhciBzbGlkZSA9IHNsaWRlc1sgaSBdO1xuXG5cdFx0XHRcdC8vIERvbid0IGJvdGhlciB1cGRhdGluZyBpbnZpc2libGUgc2xpZGVzXG5cdFx0XHRcdGlmKCBzbGlkZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggY29uZmlnLmNlbnRlciB8fCBzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdjZW50ZXInICkgKSB7XG5cdFx0XHRcdFx0Ly8gVmVydGljYWwgc3RhY2tzIGFyZSBub3QgY2VudHJlZCBzaW5jZSB0aGVpciBzZWN0aW9uXG5cdFx0XHRcdFx0Ly8gY2hpbGRyZW4gd2lsbCBiZVxuXHRcdFx0XHRcdGlmKCBzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSApIHtcblx0XHRcdFx0XHRcdHNsaWRlLnN0eWxlLnRvcCA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0c2xpZGUuc3R5bGUudG9wID0gTWF0aC5tYXgoICggKCBzaXplLmhlaWdodCAtIGdldEFic29sdXRlSGVpZ2h0KCBzbGlkZSApICkgLyAyICkgLSBzbGlkZVBhZGRpbmcsIDAgKSArICdweCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHNsaWRlLnN0eWxlLnRvcCA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlUHJvZ3Jlc3MoKTtcblx0XHRcdHVwZGF0ZVBhcmFsbGF4KCk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBBcHBsaWVzIGxheW91dCBsb2dpYyB0byB0aGUgY29udGVudHMgb2YgYWxsIHNsaWRlcyBpblxuXHQgKiB0aGUgcHJlc2VudGF0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbGF5b3V0U2xpZGVDb250ZW50cyggd2lkdGgsIGhlaWdodCwgcGFkZGluZyApIHtcblxuXHRcdC8vIEhhbmRsZSBzaXppbmcgb2YgZWxlbWVudHMgd2l0aCB0aGUgJ3N0cmV0Y2gnIGNsYXNzXG5cdFx0dG9BcnJheSggZG9tLnNsaWRlcy5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbiA+IC5zdHJldGNoJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsZW1lbnQgKSB7XG5cblx0XHRcdC8vIERldGVybWluZSBob3cgbXVjaCB2ZXJ0aWNhbCBzcGFjZSB3ZSBjYW4gdXNlXG5cdFx0XHR2YXIgcmVtYWluaW5nSGVpZ2h0ID0gZ2V0UmVtYWluaW5nSGVpZ2h0KCBlbGVtZW50LCBoZWlnaHQgKTtcblxuXHRcdFx0Ly8gQ29uc2lkZXIgdGhlIGFzcGVjdCByYXRpbyBvZiBtZWRpYSBlbGVtZW50c1xuXHRcdFx0aWYoIC8oaW1nfHZpZGVvKS9naS50ZXN0KCBlbGVtZW50Lm5vZGVOYW1lICkgKSB7XG5cdFx0XHRcdHZhciBudyA9IGVsZW1lbnQubmF0dXJhbFdpZHRoIHx8IGVsZW1lbnQudmlkZW9XaWR0aCxcblx0XHRcdFx0XHRuaCA9IGVsZW1lbnQubmF0dXJhbEhlaWdodCB8fCBlbGVtZW50LnZpZGVvSGVpZ2h0O1xuXG5cdFx0XHRcdHZhciBlcyA9IE1hdGgubWluKCB3aWR0aCAvIG53LCByZW1haW5pbmdIZWlnaHQgLyBuaCApO1xuXG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUud2lkdGggPSAoIG53ICogZXMgKSArICdweCc7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKCBuaCAqIGVzICkgKyAncHgnO1xuXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4Jztcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5oZWlnaHQgPSByZW1haW5pbmdIZWlnaHQgKyAncHgnO1xuXHRcdFx0fVxuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlcyB0aGUgY29tcHV0ZWQgcGl4ZWwgc2l6ZSBvZiBvdXIgc2xpZGVzLiBUaGVzZVxuXHQgKiB2YWx1ZXMgYXJlIGJhc2VkIG9uIHRoZSB3aWR0aCBhbmQgaGVpZ2h0IGNvbmZpZ3VyYXRpb25cblx0ICogb3B0aW9ucy5cblx0ICovXG5cdGZ1bmN0aW9uIGdldENvbXB1dGVkU2xpZGVTaXplKCBwcmVzZW50YXRpb25XaWR0aCwgcHJlc2VudGF0aW9uSGVpZ2h0ICkge1xuXG5cdFx0dmFyIHNpemUgPSB7XG5cdFx0XHQvLyBTbGlkZSBzaXplXG5cdFx0XHR3aWR0aDogY29uZmlnLndpZHRoLFxuXHRcdFx0aGVpZ2h0OiBjb25maWcuaGVpZ2h0LFxuXG5cdFx0XHQvLyBQcmVzZW50YXRpb24gc2l6ZVxuXHRcdFx0cHJlc2VudGF0aW9uV2lkdGg6IHByZXNlbnRhdGlvbldpZHRoIHx8IGRvbS53cmFwcGVyLm9mZnNldFdpZHRoLFxuXHRcdFx0cHJlc2VudGF0aW9uSGVpZ2h0OiBwcmVzZW50YXRpb25IZWlnaHQgfHwgZG9tLndyYXBwZXIub2Zmc2V0SGVpZ2h0XG5cdFx0fTtcblxuXHRcdC8vIFJlZHVjZSBhdmFpbGFibGUgc3BhY2UgYnkgbWFyZ2luXG5cdFx0c2l6ZS5wcmVzZW50YXRpb25XaWR0aCAtPSAoIHNpemUucHJlc2VudGF0aW9uV2lkdGggKiBjb25maWcubWFyZ2luICk7XG5cdFx0c2l6ZS5wcmVzZW50YXRpb25IZWlnaHQgLT0gKCBzaXplLnByZXNlbnRhdGlvbkhlaWdodCAqIGNvbmZpZy5tYXJnaW4gKTtcblxuXHRcdC8vIFNsaWRlIHdpZHRoIG1heSBiZSBhIHBlcmNlbnRhZ2Ugb2YgYXZhaWxhYmxlIHdpZHRoXG5cdFx0aWYoIHR5cGVvZiBzaXplLndpZHRoID09PSAnc3RyaW5nJyAmJiAvJSQvLnRlc3QoIHNpemUud2lkdGggKSApIHtcblx0XHRcdHNpemUud2lkdGggPSBwYXJzZUludCggc2l6ZS53aWR0aCwgMTAgKSAvIDEwMCAqIHNpemUucHJlc2VudGF0aW9uV2lkdGg7XG5cdFx0fVxuXG5cdFx0Ly8gU2xpZGUgaGVpZ2h0IG1heSBiZSBhIHBlcmNlbnRhZ2Ugb2YgYXZhaWxhYmxlIGhlaWdodFxuXHRcdGlmKCB0eXBlb2Ygc2l6ZS5oZWlnaHQgPT09ICdzdHJpbmcnICYmIC8lJC8udGVzdCggc2l6ZS5oZWlnaHQgKSApIHtcblx0XHRcdHNpemUuaGVpZ2h0ID0gcGFyc2VJbnQoIHNpemUuaGVpZ2h0LCAxMCApIC8gMTAwICogc2l6ZS5wcmVzZW50YXRpb25IZWlnaHQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHNpemU7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9yZXMgdGhlIHZlcnRpY2FsIGluZGV4IG9mIGEgc3RhY2sgc28gdGhhdCB0aGUgc2FtZVxuXHQgKiB2ZXJ0aWNhbCBzbGlkZSBjYW4gYmUgc2VsZWN0ZWQgd2hlbiBuYXZpZ2F0aW5nIHRvIGFuZFxuXHQgKiBmcm9tIHRoZSBzdGFjay5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc3RhY2sgVGhlIHZlcnRpY2FsIHN0YWNrIGVsZW1lbnRcblx0ICogQHBhcmFtIHtpbnR9IHYgSW5kZXggdG8gbWVtb3JpemVcblx0ICovXG5cdGZ1bmN0aW9uIHNldFByZXZpb3VzVmVydGljYWxJbmRleCggc3RhY2ssIHYgKSB7XG5cblx0XHRpZiggdHlwZW9mIHN0YWNrID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygc3RhY2suc2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0c3RhY2suc2V0QXR0cmlidXRlKCAnZGF0YS1wcmV2aW91cy1pbmRleHYnLCB2IHx8IDAgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIHZlcnRpY2FsIGluZGV4IHdoaWNoIHdhcyBzdG9yZWQgdXNpbmdcblx0ICogI3NldFByZXZpb3VzVmVydGljYWxJbmRleCgpIG9yIDAgaWYgbm8gcHJldmlvdXMgaW5kZXhcblx0ICogZXhpc3RzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzdGFjayBUaGUgdmVydGljYWwgc3RhY2sgZWxlbWVudFxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UHJldmlvdXNWZXJ0aWNhbEluZGV4KCBzdGFjayApIHtcblxuXHRcdGlmKCB0eXBlb2Ygc3RhY2sgPT09ICdvYmplY3QnICYmIHR5cGVvZiBzdGFjay5zZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicgJiYgc3RhY2suY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3RhY2snICkgKSB7XG5cdFx0XHQvLyBQcmVmZXIgbWFudWFsbHkgZGVmaW5lZCBzdGFydC1pbmRleHZcblx0XHRcdHZhciBhdHRyaWJ1dGVOYW1lID0gc3RhY2suaGFzQXR0cmlidXRlKCAnZGF0YS1zdGFydC1pbmRleHYnICkgPyAnZGF0YS1zdGFydC1pbmRleHYnIDogJ2RhdGEtcHJldmlvdXMtaW5kZXh2JztcblxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KCBzdGFjay5nZXRBdHRyaWJ1dGUoIGF0dHJpYnV0ZU5hbWUgKSB8fCAwLCAxMCApO1xuXHRcdH1cblxuXHRcdHJldHVybiAwO1xuXG5cdH1cblxuXHQvKipcblx0ICogRGlzcGxheXMgdGhlIG92ZXJ2aWV3IG9mIHNsaWRlcyAocXVpY2sgbmF2KSBieSBzY2FsaW5nXG5cdCAqIGRvd24gYW5kIGFycmFuZ2luZyBhbGwgc2xpZGUgZWxlbWVudHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBhY3RpdmF0ZU92ZXJ2aWV3KCkge1xuXG5cdFx0Ly8gT25seSBwcm9jZWVkIGlmIGVuYWJsZWQgaW4gY29uZmlnXG5cdFx0aWYoIGNvbmZpZy5vdmVydmlldyAmJiAhaXNPdmVydmlldygpICkge1xuXG5cdFx0XHRvdmVydmlldyA9IHRydWU7XG5cblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdvdmVydmlldycgKTtcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdvdmVydmlldy1kZWFjdGl2YXRpbmcnICk7XG5cblx0XHRcdGlmKCBmZWF0dXJlcy5vdmVydmlld1RyYW5zaXRpb25zICkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnb3ZlcnZpZXctYW5pbWF0ZWQnICk7XG5cdFx0XHRcdH0sIDEgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRG9uJ3QgYXV0by1zbGlkZSB3aGlsZSBpbiBvdmVydmlldyBtb2RlXG5cdFx0XHRjYW5jZWxBdXRvU2xpZGUoKTtcblxuXHRcdFx0Ly8gTW92ZSB0aGUgYmFja2dyb3VuZHMgZWxlbWVudCBpbnRvIHRoZSBzbGlkZSBjb250YWluZXIgdG9cblx0XHRcdC8vIHRoYXQgdGhlIHNhbWUgc2NhbGluZyBpcyBhcHBsaWVkXG5cdFx0XHRkb20uc2xpZGVzLmFwcGVuZENoaWxkKCBkb20uYmFja2dyb3VuZCApO1xuXG5cdFx0XHQvLyBDbGlja2luZyBvbiBhbiBvdmVydmlldyBzbGlkZSBuYXZpZ2F0ZXMgdG8gaXRcblx0XHRcdHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiApICkuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlICkge1xuXHRcdFx0XHRpZiggIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApICkge1xuXHRcdFx0XHRcdHNsaWRlLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uT3ZlcnZpZXdTbGlkZUNsaWNrZWQsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHR1cGRhdGVTbGlkZXNWaXNpYmlsaXR5KCk7XG5cdFx0XHRsYXlvdXRPdmVydmlldygpO1xuXHRcdFx0dXBkYXRlT3ZlcnZpZXcoKTtcblxuXHRcdFx0bGF5b3V0KCk7XG5cblx0XHRcdC8vIE5vdGlmeSBvYnNlcnZlcnMgb2YgdGhlIG92ZXJ2aWV3IHNob3dpbmdcblx0XHRcdGRpc3BhdGNoRXZlbnQoICdvdmVydmlld3Nob3duJywge1xuXHRcdFx0XHQnaW5kZXhoJzogaW5kZXhoLFxuXHRcdFx0XHQnaW5kZXh2JzogaW5kZXh2LFxuXHRcdFx0XHQnY3VycmVudFNsaWRlJzogY3VycmVudFNsaWRlXG5cdFx0XHR9ICk7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVc2VzIENTUyB0cmFuc2Zvcm1zIHRvIHBvc2l0aW9uIGFsbCBzbGlkZXMgaW4gYSBncmlkIGZvclxuXHQgKiBkaXNwbGF5IGluc2lkZSBvZiB0aGUgb3ZlcnZpZXcgbW9kZS5cblx0ICovXG5cdGZ1bmN0aW9uIGxheW91dE92ZXJ2aWV3KCkge1xuXG5cdFx0dmFyIG1hcmdpbiA9IDcwO1xuXHRcdHZhciBzbGlkZVdpZHRoID0gY29uZmlnLndpZHRoICsgbWFyZ2luLFxuXHRcdFx0c2xpZGVIZWlnaHQgPSBjb25maWcuaGVpZ2h0ICsgbWFyZ2luO1xuXG5cdFx0Ly8gUmV2ZXJzZSBpbiBSVEwgbW9kZVxuXHRcdGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0c2xpZGVXaWR0aCA9IC1zbGlkZVdpZHRoO1xuXHRcdH1cblxuXHRcdC8vIExheW91dCBzbGlkZXNcblx0XHR0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICkuZm9yRWFjaCggZnVuY3Rpb24oIGhzbGlkZSwgaCApIHtcblx0XHRcdGhzbGlkZS5zZXRBdHRyaWJ1dGUoICdkYXRhLWluZGV4LWgnLCBoICk7XG5cdFx0XHR0cmFuc2Zvcm1FbGVtZW50KCBoc2xpZGUsICd0cmFuc2xhdGUzZCgnICsgKCBoICogc2xpZGVXaWR0aCApICsgJ3B4LCAwLCAwKScgKTtcblxuXHRcdFx0aWYoIGhzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSApIHtcblxuXHRcdFx0XHR0b0FycmF5KCBoc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggdnNsaWRlLCB2ICkge1xuXHRcdFx0XHRcdHZzbGlkZS5zZXRBdHRyaWJ1dGUoICdkYXRhLWluZGV4LWgnLCBoICk7XG5cdFx0XHRcdFx0dnNsaWRlLnNldEF0dHJpYnV0ZSggJ2RhdGEtaW5kZXgtdicsIHYgKTtcblxuXHRcdFx0XHRcdHRyYW5zZm9ybUVsZW1lbnQoIHZzbGlkZSwgJ3RyYW5zbGF0ZTNkKDAsICcgKyAoIHYgKiBzbGlkZUhlaWdodCApICsgJ3B4LCAwKScgKTtcblx0XHRcdFx0fSApO1xuXG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdFx0Ly8gTGF5b3V0IHNsaWRlIGJhY2tncm91bmRzXG5cdFx0dG9BcnJheSggZG9tLmJhY2tncm91bmQuY2hpbGROb2RlcyApLmZvckVhY2goIGZ1bmN0aW9uKCBoYmFja2dyb3VuZCwgaCApIHtcblx0XHRcdHRyYW5zZm9ybUVsZW1lbnQoIGhiYWNrZ3JvdW5kLCAndHJhbnNsYXRlM2QoJyArICggaCAqIHNsaWRlV2lkdGggKSArICdweCwgMCwgMCknICk7XG5cblx0XHRcdHRvQXJyYXkoIGhiYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3JBbGwoICcuc2xpZGUtYmFja2dyb3VuZCcgKSApLmZvckVhY2goIGZ1bmN0aW9uKCB2YmFja2dyb3VuZCwgdiApIHtcblx0XHRcdFx0dHJhbnNmb3JtRWxlbWVudCggdmJhY2tncm91bmQsICd0cmFuc2xhdGUzZCgwLCAnICsgKCB2ICogc2xpZGVIZWlnaHQgKSArICdweCwgMCknICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogTW92ZXMgdGhlIG92ZXJ2aWV3IHZpZXdwb3J0IHRvIHRoZSBjdXJyZW50IHNsaWRlcy5cblx0ICogQ2FsbGVkIGVhY2ggdGltZSB0aGUgY3VycmVudCBzbGlkZSBjaGFuZ2VzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlT3ZlcnZpZXcoKSB7XG5cblx0XHR2YXIgbWFyZ2luID0gNzA7XG5cdFx0dmFyIHNsaWRlV2lkdGggPSBjb25maWcud2lkdGggKyBtYXJnaW4sXG5cdFx0XHRzbGlkZUhlaWdodCA9IGNvbmZpZy5oZWlnaHQgKyBtYXJnaW47XG5cblx0XHQvLyBSZXZlcnNlIGluIFJUTCBtb2RlXG5cdFx0aWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHRzbGlkZVdpZHRoID0gLXNsaWRlV2lkdGg7XG5cdFx0fVxuXG5cdFx0dHJhbnNmb3JtU2xpZGVzKCB7XG5cdFx0XHRvdmVydmlldzogW1xuXHRcdFx0XHQndHJhbnNsYXRlWCgnKyAoIC1pbmRleGggKiBzbGlkZVdpZHRoICkgKydweCknLFxuXHRcdFx0XHQndHJhbnNsYXRlWSgnKyAoIC1pbmRleHYgKiBzbGlkZUhlaWdodCApICsncHgpJyxcblx0XHRcdFx0J3RyYW5zbGF0ZVooJysgKCB3aW5kb3cuaW5uZXJXaWR0aCA8IDQwMCA/IC0xMDAwIDogLTI1MDAgKSArJ3B4KSdcblx0XHRcdF0uam9pbiggJyAnIClcblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBFeGl0cyB0aGUgc2xpZGUgb3ZlcnZpZXcgYW5kIGVudGVycyB0aGUgY3VycmVudGx5XG5cdCAqIGFjdGl2ZSBzbGlkZS5cblx0ICovXG5cdGZ1bmN0aW9uIGRlYWN0aXZhdGVPdmVydmlldygpIHtcblxuXHRcdC8vIE9ubHkgcHJvY2VlZCBpZiBlbmFibGVkIGluIGNvbmZpZ1xuXHRcdGlmKCBjb25maWcub3ZlcnZpZXcgKSB7XG5cblx0XHRcdG92ZXJ2aWV3ID0gZmFsc2U7XG5cblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdvdmVydmlldycgKTtcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdvdmVydmlldy1hbmltYXRlZCcgKTtcblxuXHRcdFx0Ly8gVGVtcG9yYXJpbHkgYWRkIGEgY2xhc3Mgc28gdGhhdCB0cmFuc2l0aW9ucyBjYW4gZG8gZGlmZmVyZW50IHRoaW5nc1xuXHRcdFx0Ly8gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhleSBhcmUgZXhpdGluZy9lbnRlcmluZyBvdmVydmlldywgb3IganVzdFxuXHRcdFx0Ly8gbW92aW5nIGZyb20gc2xpZGUgdG8gc2xpZGVcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdvdmVydmlldy1kZWFjdGl2YXRpbmcnICk7XG5cblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ292ZXJ2aWV3LWRlYWN0aXZhdGluZycgKTtcblx0XHRcdH0sIDEgKTtcblxuXHRcdFx0Ly8gTW92ZSB0aGUgYmFja2dyb3VuZCBlbGVtZW50IGJhY2sgb3V0XG5cdFx0XHRkb20ud3JhcHBlci5hcHBlbmRDaGlsZCggZG9tLmJhY2tncm91bmQgKTtcblxuXHRcdFx0Ly8gQ2xlYW4gdXAgY2hhbmdlcyBtYWRlIHRvIHNsaWRlc1xuXHRcdFx0dG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc2xpZGUgKSB7XG5cdFx0XHRcdHRyYW5zZm9ybUVsZW1lbnQoIHNsaWRlLCAnJyApO1xuXG5cdFx0XHRcdHNsaWRlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uT3ZlcnZpZXdTbGlkZUNsaWNrZWQsIHRydWUgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gQ2xlYW4gdXAgY2hhbmdlcyBtYWRlIHRvIGJhY2tncm91bmRzXG5cdFx0XHR0b0FycmF5KCBkb20uYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yQWxsKCAnLnNsaWRlLWJhY2tncm91bmQnICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggYmFja2dyb3VuZCApIHtcblx0XHRcdFx0dHJhbnNmb3JtRWxlbWVudCggYmFja2dyb3VuZCwgJycgKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0dHJhbnNmb3JtU2xpZGVzKCB7IG92ZXJ2aWV3OiAnJyB9ICk7XG5cblx0XHRcdHNsaWRlKCBpbmRleGgsIGluZGV4diApO1xuXG5cdFx0XHRsYXlvdXQoKTtcblxuXHRcdFx0Y3VlQXV0b1NsaWRlKCk7XG5cblx0XHRcdC8vIE5vdGlmeSBvYnNlcnZlcnMgb2YgdGhlIG92ZXJ2aWV3IGhpZGluZ1xuXHRcdFx0ZGlzcGF0Y2hFdmVudCggJ292ZXJ2aWV3aGlkZGVuJywge1xuXHRcdFx0XHQnaW5kZXhoJzogaW5kZXhoLFxuXHRcdFx0XHQnaW5kZXh2JzogaW5kZXh2LFxuXHRcdFx0XHQnY3VycmVudFNsaWRlJzogY3VycmVudFNsaWRlXG5cdFx0XHR9ICk7XG5cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlcyB0aGUgc2xpZGUgb3ZlcnZpZXcgbW9kZSBvbiBhbmQgb2ZmLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IG92ZXJyaWRlIE9wdGlvbmFsIGZsYWcgd2hpY2ggb3ZlcnJpZGVzIHRoZVxuXHQgKiB0b2dnbGUgbG9naWMgYW5kIGZvcmNpYmx5IHNldHMgdGhlIGRlc2lyZWQgc3RhdGUuIFRydWUgbWVhbnNcblx0ICogb3ZlcnZpZXcgaXMgb3BlbiwgZmFsc2UgbWVhbnMgaXQncyBjbG9zZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiB0b2dnbGVPdmVydmlldyggb3ZlcnJpZGUgKSB7XG5cblx0XHRpZiggdHlwZW9mIG92ZXJyaWRlID09PSAnYm9vbGVhbicgKSB7XG5cdFx0XHRvdmVycmlkZSA/IGFjdGl2YXRlT3ZlcnZpZXcoKSA6IGRlYWN0aXZhdGVPdmVydmlldygpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlzT3ZlcnZpZXcoKSA/IGRlYWN0aXZhdGVPdmVydmlldygpIDogYWN0aXZhdGVPdmVydmlldygpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGUgb3ZlcnZpZXcgaXMgY3VycmVudGx5IGFjdGl2ZS5cblx0ICpcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGUgb3ZlcnZpZXcgaXMgYWN0aXZlLFxuXHQgKiBmYWxzZSBvdGhlcndpc2Vcblx0ICovXG5cdGZ1bmN0aW9uIGlzT3ZlcnZpZXcoKSB7XG5cblx0XHRyZXR1cm4gb3ZlcnZpZXc7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgb3Igc3BlY2lmaWVkIHNsaWRlIGlzIHZlcnRpY2FsXG5cdCAqIChuZXN0ZWQgd2l0aGluIGFub3RoZXIgc2xpZGUpLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzbGlkZSBbb3B0aW9uYWxdIFRoZSBzbGlkZSB0byBjaGVja1xuXHQgKiBvcmllbnRhdGlvbiBvZlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNWZXJ0aWNhbFNsaWRlKCBzbGlkZSApIHtcblxuXHRcdC8vIFByZWZlciBzbGlkZSBhcmd1bWVudCwgb3RoZXJ3aXNlIHVzZSBjdXJyZW50IHNsaWRlXG5cdFx0c2xpZGUgPSBzbGlkZSA/IHNsaWRlIDogY3VycmVudFNsaWRlO1xuXG5cdFx0cmV0dXJuIHNsaWRlICYmIHNsaWRlLnBhcmVudE5vZGUgJiYgISFzbGlkZS5wYXJlbnROb2RlLm5vZGVOYW1lLm1hdGNoKCAvc2VjdGlvbi9pICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGluZyB0aGUgZnVsbHNjcmVlbiBmdW5jdGlvbmFsaXR5IHZpYSB0aGUgZnVsbHNjcmVlbiBBUElcblx0ICpcblx0ICogQHNlZSBodHRwOi8vZnVsbHNjcmVlbi5zcGVjLndoYXR3Zy5vcmcvXG5cdCAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9ET00vVXNpbmdfZnVsbHNjcmVlbl9tb2RlXG5cdCAqL1xuXHRmdW5jdGlvbiBlbnRlckZ1bGxzY3JlZW4oKSB7XG5cblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG5cblx0XHQvLyBDaGVjayB3aGljaCBpbXBsZW1lbnRhdGlvbiBpcyBhdmFpbGFibGVcblx0XHR2YXIgcmVxdWVzdE1ldGhvZCA9IGVsZW1lbnQucmVxdWVzdEZ1bGxTY3JlZW4gfHxcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbHNjcmVlbiB8fFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LndlYmtpdFJlcXVlc3RGdWxsU2NyZWVuIHx8XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQubW96UmVxdWVzdEZ1bGxTY3JlZW4gfHxcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5tc1JlcXVlc3RGdWxsc2NyZWVuO1xuXG5cdFx0aWYoIHJlcXVlc3RNZXRob2QgKSB7XG5cdFx0XHRyZXF1ZXN0TWV0aG9kLmFwcGx5KCBlbGVtZW50ICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogRW50ZXJzIHRoZSBwYXVzZWQgbW9kZSB3aGljaCBmYWRlcyBldmVyeXRoaW5nIG9uIHNjcmVlbiB0b1xuXHQgKiBibGFjay5cblx0ICovXG5cdGZ1bmN0aW9uIHBhdXNlKCkge1xuXG5cdFx0aWYoIGNvbmZpZy5wYXVzZSApIHtcblx0XHRcdHZhciB3YXNQYXVzZWQgPSBkb20ud3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoICdwYXVzZWQnICk7XG5cblx0XHRcdGNhbmNlbEF1dG9TbGlkZSgpO1xuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ3BhdXNlZCcgKTtcblxuXHRcdFx0aWYoIHdhc1BhdXNlZCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdGRpc3BhdGNoRXZlbnQoICdwYXVzZWQnICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogRXhpdHMgZnJvbSB0aGUgcGF1c2VkIG1vZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiByZXN1bWUoKSB7XG5cblx0XHR2YXIgd2FzUGF1c2VkID0gZG9tLndyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGF1c2VkJyApO1xuXHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdwYXVzZWQnICk7XG5cblx0XHRjdWVBdXRvU2xpZGUoKTtcblxuXHRcdGlmKCB3YXNQYXVzZWQgKSB7XG5cdFx0XHRkaXNwYXRjaEV2ZW50KCAncmVzdW1lZCcgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIHRoZSBwYXVzZWQgbW9kZSBvbiBhbmQgb2ZmLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9nZ2xlUGF1c2UoIG92ZXJyaWRlICkge1xuXG5cdFx0aWYoIHR5cGVvZiBvdmVycmlkZSA9PT0gJ2Jvb2xlYW4nICkge1xuXHRcdFx0b3ZlcnJpZGUgPyBwYXVzZSgpIDogcmVzdW1lKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aXNQYXVzZWQoKSA/IHJlc3VtZSgpIDogcGF1c2UoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgd2UgYXJlIGN1cnJlbnRseSBpbiB0aGUgcGF1c2VkIG1vZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1BhdXNlZCgpIHtcblxuXHRcdHJldHVybiBkb20ud3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoICdwYXVzZWQnICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIHRoZSBhdXRvIHNsaWRlIG1vZGUgb24gYW5kIG9mZi5cblx0ICpcblx0ICogQHBhcmFtIHtCb29sZWFufSBvdmVycmlkZSBPcHRpb25hbCBmbGFnIHdoaWNoIHNldHMgdGhlIGRlc2lyZWQgc3RhdGUuXG5cdCAqIFRydWUgbWVhbnMgYXV0b3BsYXkgc3RhcnRzLCBmYWxzZSBtZWFucyBpdCBzdG9wcy5cblx0ICovXG5cblx0ZnVuY3Rpb24gdG9nZ2xlQXV0b1NsaWRlKCBvdmVycmlkZSApIHtcblxuXHRcdGlmKCB0eXBlb2Ygb3ZlcnJpZGUgPT09ICdib29sZWFuJyApIHtcblx0XHRcdG92ZXJyaWRlID8gcmVzdW1lQXV0b1NsaWRlKCkgOiBwYXVzZUF1dG9TbGlkZSgpO1xuXHRcdH1cblxuXHRcdGVsc2Uge1xuXHRcdFx0YXV0b1NsaWRlUGF1c2VkID8gcmVzdW1lQXV0b1NsaWRlKCkgOiBwYXVzZUF1dG9TbGlkZSgpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGUgYXV0byBzbGlkZSBtb2RlIGlzIGN1cnJlbnRseSBvbi5cblx0ICovXG5cdGZ1bmN0aW9uIGlzQXV0b1NsaWRpbmcoKSB7XG5cblx0XHRyZXR1cm4gISEoIGF1dG9TbGlkZSAmJiAhYXV0b1NsaWRlUGF1c2VkICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTdGVwcyBmcm9tIHRoZSBjdXJyZW50IHBvaW50IGluIHRoZSBwcmVzZW50YXRpb24gdG8gdGhlXG5cdCAqIHNsaWRlIHdoaWNoIG1hdGNoZXMgdGhlIHNwZWNpZmllZCBob3Jpem9udGFsIGFuZCB2ZXJ0aWNhbFxuXHQgKiBpbmRpY2VzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge2ludH0gaCBIb3Jpem9udGFsIGluZGV4IG9mIHRoZSB0YXJnZXQgc2xpZGVcblx0ICogQHBhcmFtIHtpbnR9IHYgVmVydGljYWwgaW5kZXggb2YgdGhlIHRhcmdldCBzbGlkZVxuXHQgKiBAcGFyYW0ge2ludH0gZiBPcHRpb25hbCBpbmRleCBvZiBhIGZyYWdtZW50IHdpdGhpbiB0aGVcblx0ICogdGFyZ2V0IHNsaWRlIHRvIGFjdGl2YXRlXG5cdCAqIEBwYXJhbSB7aW50fSBvIE9wdGlvbmFsIG9yaWdpbiBmb3IgdXNlIGluIG11bHRpbWFzdGVyIGVudmlyb25tZW50c1xuXHQgKi9cblx0ZnVuY3Rpb24gc2xpZGUoIGgsIHYsIGYsIG8gKSB7XG5cblx0XHQvLyBSZW1lbWJlciB3aGVyZSB3ZSB3ZXJlIGF0IGJlZm9yZVxuXHRcdHByZXZpb3VzU2xpZGUgPSBjdXJyZW50U2xpZGU7XG5cblx0XHQvLyBRdWVyeSBhbGwgaG9yaXpvbnRhbCBzbGlkZXMgaW4gdGhlIGRlY2tcblx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICk7XG5cblx0XHQvLyBJZiBubyB2ZXJ0aWNhbCBpbmRleCBpcyBzcGVjaWZpZWQgYW5kIHRoZSB1cGNvbWluZyBzbGlkZSBpcyBhXG5cdFx0Ly8gc3RhY2ssIHJlc3VtZSBhdCBpdHMgcHJldmlvdXMgdmVydGljYWwgaW5kZXhcblx0XHRpZiggdiA9PT0gdW5kZWZpbmVkICYmICFpc092ZXJ2aWV3KCkgKSB7XG5cdFx0XHR2ID0gZ2V0UHJldmlvdXNWZXJ0aWNhbEluZGV4KCBob3Jpem9udGFsU2xpZGVzWyBoIF0gKTtcblx0XHR9XG5cblx0XHQvLyBJZiB3ZSB3ZXJlIG9uIGEgdmVydGljYWwgc3RhY2ssIHJlbWVtYmVyIHdoYXQgdmVydGljYWwgaW5kZXhcblx0XHQvLyBpdCB3YXMgb24gc28gd2UgY2FuIHJlc3VtZSBhdCB0aGUgc2FtZSBwb3NpdGlvbiB3aGVuIHJldHVybmluZ1xuXHRcdGlmKCBwcmV2aW91c1NsaWRlICYmIHByZXZpb3VzU2xpZGUucGFyZW50Tm9kZSAmJiBwcmV2aW91c1NsaWRlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3RhY2snICkgKSB7XG5cdFx0XHRzZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoIHByZXZpb3VzU2xpZGUucGFyZW50Tm9kZSwgaW5kZXh2ICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtZW1iZXIgdGhlIHN0YXRlIGJlZm9yZSB0aGlzIHNsaWRlXG5cdFx0dmFyIHN0YXRlQmVmb3JlID0gc3RhdGUuY29uY2F0KCk7XG5cblx0XHQvLyBSZXNldCB0aGUgc3RhdGUgYXJyYXlcblx0XHRzdGF0ZS5sZW5ndGggPSAwO1xuXG5cdFx0dmFyIGluZGV4aEJlZm9yZSA9IGluZGV4aCB8fCAwLFxuXHRcdFx0aW5kZXh2QmVmb3JlID0gaW5kZXh2IHx8IDA7XG5cblx0XHQvLyBBY3RpdmF0ZSBhbmQgdHJhbnNpdGlvbiB0byB0aGUgbmV3IHNsaWRlXG5cdFx0aW5kZXhoID0gdXBkYXRlU2xpZGVzKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiwgaCA9PT0gdW5kZWZpbmVkID8gaW5kZXhoIDogaCApO1xuXHRcdGluZGV4diA9IHVwZGF0ZVNsaWRlcyggVkVSVElDQUxfU0xJREVTX1NFTEVDVE9SLCB2ID09PSB1bmRlZmluZWQgPyBpbmRleHYgOiB2ICk7XG5cblx0XHQvLyBVcGRhdGUgdGhlIHZpc2liaWxpdHkgb2Ygc2xpZGVzIG5vdyB0aGF0IHRoZSBpbmRpY2VzIGhhdmUgY2hhbmdlZFxuXHRcdHVwZGF0ZVNsaWRlc1Zpc2liaWxpdHkoKTtcblxuXHRcdGxheW91dCgpO1xuXG5cdFx0Ly8gQXBwbHkgdGhlIG5ldyBzdGF0ZVxuXHRcdHN0YXRlTG9vcDogZm9yKCB2YXIgaSA9IDAsIGxlbiA9IHN0YXRlLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhpcyBzdGF0ZSBleGlzdGVkIG9uIHRoZSBwcmV2aW91cyBzbGlkZS4gSWYgaXRcblx0XHRcdC8vIGRpZCwgd2Ugd2lsbCBhdm9pZCBhZGRpbmcgaXQgcmVwZWF0ZWRseVxuXHRcdFx0Zm9yKCB2YXIgaiA9IDA7IGogPCBzdGF0ZUJlZm9yZS5sZW5ndGg7IGorKyApIHtcblx0XHRcdFx0aWYoIHN0YXRlQmVmb3JlW2pdID09PSBzdGF0ZVtpXSApIHtcblx0XHRcdFx0XHRzdGF0ZUJlZm9yZS5zcGxpY2UoIGosIDEgKTtcblx0XHRcdFx0XHRjb250aW51ZSBzdGF0ZUxvb3A7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoIHN0YXRlW2ldICk7XG5cblx0XHRcdC8vIERpc3BhdGNoIGN1c3RvbSBldmVudCBtYXRjaGluZyB0aGUgc3RhdGUncyBuYW1lXG5cdFx0XHRkaXNwYXRjaEV2ZW50KCBzdGF0ZVtpXSApO1xuXHRcdH1cblxuXHRcdC8vIENsZWFuIHVwIHRoZSByZW1haW5zIG9mIHRoZSBwcmV2aW91cyBzdGF0ZVxuXHRcdHdoaWxlKCBzdGF0ZUJlZm9yZS5sZW5ndGggKSB7XG5cdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggc3RhdGVCZWZvcmUucG9wKCkgKTtcblx0XHR9XG5cblx0XHQvLyBVcGRhdGUgdGhlIG92ZXJ2aWV3IGlmIGl0J3MgY3VycmVudGx5IGFjdGl2ZVxuXHRcdGlmKCBpc092ZXJ2aWV3KCkgKSB7XG5cdFx0XHR1cGRhdGVPdmVydmlldygpO1xuXHRcdH1cblxuXHRcdC8vIEZpbmQgdGhlIGN1cnJlbnQgaG9yaXpvbnRhbCBzbGlkZSBhbmQgYW55IHBvc3NpYmxlIHZlcnRpY2FsIHNsaWRlc1xuXHRcdC8vIHdpdGhpbiBpdFxuXHRcdHZhciBjdXJyZW50SG9yaXpvbnRhbFNsaWRlID0gaG9yaXpvbnRhbFNsaWRlc1sgaW5kZXhoIF0sXG5cdFx0XHRjdXJyZW50VmVydGljYWxTbGlkZXMgPSBjdXJyZW50SG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApO1xuXG5cdFx0Ly8gU3RvcmUgcmVmZXJlbmNlcyB0byB0aGUgcHJldmlvdXMgYW5kIGN1cnJlbnQgc2xpZGVzXG5cdFx0Y3VycmVudFNsaWRlID0gY3VycmVudFZlcnRpY2FsU2xpZGVzWyBpbmRleHYgXSB8fCBjdXJyZW50SG9yaXpvbnRhbFNsaWRlO1xuXG5cdFx0Ly8gU2hvdyBmcmFnbWVudCwgaWYgc3BlY2lmaWVkXG5cdFx0aWYoIHR5cGVvZiBmICE9PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdG5hdmlnYXRlRnJhZ21lbnQoIGYgKTtcblx0XHR9XG5cblx0XHQvLyBEaXNwYXRjaCBhbiBldmVudCBpZiB0aGUgc2xpZGUgY2hhbmdlZFxuXHRcdHZhciBzbGlkZUNoYW5nZWQgPSAoIGluZGV4aCAhPT0gaW5kZXhoQmVmb3JlIHx8IGluZGV4diAhPT0gaW5kZXh2QmVmb3JlICk7XG5cdFx0aWYoIHNsaWRlQ2hhbmdlZCApIHtcblx0XHRcdGRpc3BhdGNoRXZlbnQoICdzbGlkZWNoYW5nZWQnLCB7XG5cdFx0XHRcdCdpbmRleGgnOiBpbmRleGgsXG5cdFx0XHRcdCdpbmRleHYnOiBpbmRleHYsXG5cdFx0XHRcdCdwcmV2aW91c1NsaWRlJzogcHJldmlvdXNTbGlkZSxcblx0XHRcdFx0J2N1cnJlbnRTbGlkZSc6IGN1cnJlbnRTbGlkZSxcblx0XHRcdFx0J29yaWdpbic6IG9cblx0XHRcdH0gKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBFbnN1cmUgdGhhdCB0aGUgcHJldmlvdXMgc2xpZGUgaXMgbmV2ZXIgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnRcblx0XHRcdHByZXZpb3VzU2xpZGUgPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIFNvbHZlcyBhbiBlZGdlIGNhc2Ugd2hlcmUgdGhlIHByZXZpb3VzIHNsaWRlIG1haW50YWlucyB0aGVcblx0XHQvLyAncHJlc2VudCcgY2xhc3Mgd2hlbiBuYXZpZ2F0aW5nIGJldHdlZW4gYWRqYWNlbnQgdmVydGljYWxcblx0XHQvLyBzdGFja3Ncblx0XHRpZiggcHJldmlvdXNTbGlkZSApIHtcblx0XHRcdHByZXZpb3VzU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSggJ3ByZXNlbnQnICk7XG5cdFx0XHRwcmV2aW91c1NsaWRlLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG5cblx0XHRcdC8vIFJlc2V0IGFsbCBzbGlkZXMgdXBvbiBuYXZpZ2F0ZSB0byBob21lXG5cdFx0XHQvLyBJc3N1ZTogIzI4NVxuXHRcdFx0aWYgKCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yKCBIT01FX1NMSURFX1NFTEVDVE9SICkuY2xhc3NMaXN0LmNvbnRhaW5zKCAncHJlc2VudCcgKSApIHtcblx0XHRcdFx0Ly8gTGF1bmNoIGFzeW5jIHRhc2tcblx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHZhciBzbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiArICcuc3RhY2snKSApLCBpO1xuXHRcdFx0XHRcdGZvciggaSBpbiBzbGlkZXMgKSB7XG5cdFx0XHRcdFx0XHRpZiggc2xpZGVzW2ldICkge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXNldCBzdGFja1xuXHRcdFx0XHRcdFx0XHRzZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoIHNsaWRlc1tpXSwgMCApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgMCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEhhbmRsZSBlbWJlZGRlZCBjb250ZW50XG5cdFx0aWYoIHNsaWRlQ2hhbmdlZCB8fCAhcHJldmlvdXNTbGlkZSApIHtcblx0XHRcdHN0b3BFbWJlZGRlZENvbnRlbnQoIHByZXZpb3VzU2xpZGUgKTtcblx0XHRcdHN0YXJ0RW1iZWRkZWRDb250ZW50KCBjdXJyZW50U2xpZGUgKTtcblx0XHR9XG5cblx0XHQvLyBBbm5vdW5jZSB0aGUgY3VycmVudCBzbGlkZSBjb250ZW50cywgZm9yIHNjcmVlbiByZWFkZXJzXG5cdFx0ZG9tLnN0YXR1c0Rpdi50ZXh0Q29udGVudCA9IGN1cnJlbnRTbGlkZS50ZXh0Q29udGVudDtcblxuXHRcdHVwZGF0ZUNvbnRyb2xzKCk7XG5cdFx0dXBkYXRlUHJvZ3Jlc3MoKTtcblx0XHR1cGRhdGVCYWNrZ3JvdW5kKCk7XG5cdFx0dXBkYXRlUGFyYWxsYXgoKTtcblx0XHR1cGRhdGVTbGlkZU51bWJlcigpO1xuXG5cdFx0Ly8gVXBkYXRlIHRoZSBVUkwgaGFzaFxuXHRcdHdyaXRlVVJMKCk7XG5cblx0XHRjdWVBdXRvU2xpZGUoKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFN5bmNzIHRoZSBwcmVzZW50YXRpb24gd2l0aCB0aGUgY3VycmVudCBET00uIFVzZWZ1bFxuXHQgKiB3aGVuIG5ldyBzbGlkZXMgb3IgY29udHJvbCBlbGVtZW50cyBhcmUgYWRkZWQgb3Igd2hlblxuXHQgKiB0aGUgY29uZmlndXJhdGlvbiBoYXMgY2hhbmdlZC5cblx0ICovXG5cdGZ1bmN0aW9uIHN5bmMoKSB7XG5cblx0XHQvLyBTdWJzY3JpYmUgdG8gaW5wdXRcblx0XHRyZW1vdmVFdmVudExpc3RlbmVycygpO1xuXHRcdGFkZEV2ZW50TGlzdGVuZXJzKCk7XG5cblx0XHQvLyBGb3JjZSBhIGxheW91dCB0byBtYWtlIHN1cmUgdGhlIGN1cnJlbnQgY29uZmlnIGlzIGFjY291bnRlZCBmb3Jcblx0XHRsYXlvdXQoKTtcblxuXHRcdC8vIFJlZmxlY3QgdGhlIGN1cnJlbnQgYXV0b1NsaWRlIHZhbHVlXG5cdFx0YXV0b1NsaWRlID0gY29uZmlnLmF1dG9TbGlkZTtcblxuXHRcdC8vIFN0YXJ0IGF1dG8tc2xpZGluZyBpZiBpdCdzIGVuYWJsZWRcblx0XHRjdWVBdXRvU2xpZGUoKTtcblxuXHRcdC8vIFJlLWNyZWF0ZSB0aGUgc2xpZGUgYmFja2dyb3VuZHNcblx0XHRjcmVhdGVCYWNrZ3JvdW5kcygpO1xuXG5cdFx0Ly8gV3JpdGUgdGhlIGN1cnJlbnQgaGFzaCB0byB0aGUgVVJMXG5cdFx0d3JpdGVVUkwoKTtcblxuXHRcdHNvcnRBbGxGcmFnbWVudHMoKTtcblxuXHRcdHVwZGF0ZUNvbnRyb2xzKCk7XG5cdFx0dXBkYXRlUHJvZ3Jlc3MoKTtcblx0XHR1cGRhdGVCYWNrZ3JvdW5kKCB0cnVlICk7XG5cdFx0dXBkYXRlU2xpZGVOdW1iZXIoKTtcblx0XHR1cGRhdGVTbGlkZXNWaXNpYmlsaXR5KCk7XG5cblx0XHRmb3JtYXRFbWJlZGRlZENvbnRlbnQoKTtcblx0XHRzdGFydEVtYmVkZGVkQ29udGVudCggY3VycmVudFNsaWRlICk7XG5cblx0XHRpZiggaXNPdmVydmlldygpICkge1xuXHRcdFx0bGF5b3V0T3ZlcnZpZXcoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXNldHMgYWxsIHZlcnRpY2FsIHNsaWRlcyBzbyB0aGF0IG9ubHkgdGhlIGZpcnN0XG5cdCAqIGlzIHZpc2libGUuXG5cdCAqL1xuXHRmdW5jdGlvbiByZXNldFZlcnRpY2FsU2xpZGVzKCkge1xuXG5cdFx0dmFyIGhvcml6b250YWxTbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICk7XG5cdFx0aG9yaXpvbnRhbFNsaWRlcy5mb3JFYWNoKCBmdW5jdGlvbiggaG9yaXpvbnRhbFNsaWRlICkge1xuXG5cdFx0XHR2YXIgdmVydGljYWxTbGlkZXMgPSB0b0FycmF5KCBob3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKTtcblx0XHRcdHZlcnRpY2FsU2xpZGVzLmZvckVhY2goIGZ1bmN0aW9uKCB2ZXJ0aWNhbFNsaWRlLCB5ICkge1xuXG5cdFx0XHRcdGlmKCB5ID4gMCApIHtcblx0XHRcdFx0XHR2ZXJ0aWNhbFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoICdwcmVzZW50JyApO1xuXHRcdFx0XHRcdHZlcnRpY2FsU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSggJ3Bhc3QnICk7XG5cdFx0XHRcdFx0dmVydGljYWxTbGlkZS5jbGFzc0xpc3QuYWRkKCAnZnV0dXJlJyApO1xuXHRcdFx0XHRcdHZlcnRpY2FsU2xpZGUuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9ICk7XG5cblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTb3J0cyBhbmQgZm9ybWF0cyBhbGwgb2YgZnJhZ21lbnRzIGluIHRoZVxuXHQgKiBwcmVzZW50YXRpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBzb3J0QWxsRnJhZ21lbnRzKCkge1xuXG5cdFx0dmFyIGhvcml6b250YWxTbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICk7XG5cdFx0aG9yaXpvbnRhbFNsaWRlcy5mb3JFYWNoKCBmdW5jdGlvbiggaG9yaXpvbnRhbFNsaWRlICkge1xuXG5cdFx0XHR2YXIgdmVydGljYWxTbGlkZXMgPSB0b0FycmF5KCBob3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKTtcblx0XHRcdHZlcnRpY2FsU2xpZGVzLmZvckVhY2goIGZ1bmN0aW9uKCB2ZXJ0aWNhbFNsaWRlLCB5ICkge1xuXG5cdFx0XHRcdHNvcnRGcmFnbWVudHMoIHZlcnRpY2FsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKSApO1xuXG5cdFx0XHR9ICk7XG5cblx0XHRcdGlmKCB2ZXJ0aWNhbFNsaWRlcy5sZW5ndGggPT09IDAgKSBzb3J0RnJhZ21lbnRzKCBob3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyBvbmUgZGltZW5zaW9uIG9mIHNsaWRlcyBieSBzaG93aW5nIHRoZSBzbGlkZVxuXHQgKiB3aXRoIHRoZSBzcGVjaWZpZWQgaW5kZXguXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvciBBIENTUyBzZWxlY3RvciB0aGF0IHdpbGwgZmV0Y2hcblx0ICogdGhlIGdyb3VwIG9mIHNsaWRlcyB3ZSBhcmUgd29ya2luZyB3aXRoXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHNsaWRlIHRoYXQgc2hvdWxkIGJlXG5cdCAqIHNob3duXG5cdCAqXG5cdCAqIEByZXR1cm4ge051bWJlcn0gVGhlIGluZGV4IG9mIHRoZSBzbGlkZSB0aGF0IGlzIG5vdyBzaG93bixcblx0ICogbWlnaHQgZGlmZmVyIGZyb20gdGhlIHBhc3NlZCBpbiBpbmRleCBpZiBpdCB3YXMgb3V0IG9mXG5cdCAqIGJvdW5kcy5cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZVNsaWRlcyggc2VsZWN0b3IsIGluZGV4ICkge1xuXG5cdFx0Ly8gU2VsZWN0IGFsbCBzbGlkZXMgYW5kIGNvbnZlcnQgdGhlIE5vZGVMaXN0IHJlc3VsdCB0b1xuXHRcdC8vIGFuIGFycmF5XG5cdFx0dmFyIHNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yICkgKSxcblx0XHRcdHNsaWRlc0xlbmd0aCA9IHNsaWRlcy5sZW5ndGg7XG5cblx0XHR2YXIgcHJpbnRNb2RlID0gaXNQcmludGluZ1BERigpO1xuXG5cdFx0aWYoIHNsaWRlc0xlbmd0aCApIHtcblxuXHRcdFx0Ly8gU2hvdWxkIHRoZSBpbmRleCBsb29wP1xuXHRcdFx0aWYoIGNvbmZpZy5sb29wICkge1xuXHRcdFx0XHRpbmRleCAlPSBzbGlkZXNMZW5ndGg7XG5cblx0XHRcdFx0aWYoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRpbmRleCA9IHNsaWRlc0xlbmd0aCArIGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVuZm9yY2UgbWF4IGFuZCBtaW5pbXVtIGluZGV4IGJvdW5kc1xuXHRcdFx0aW5kZXggPSBNYXRoLm1heCggTWF0aC5taW4oIGluZGV4LCBzbGlkZXNMZW5ndGggLSAxICksIDAgKTtcblxuXHRcdFx0Zm9yKCB2YXIgaSA9IDA7IGkgPCBzbGlkZXNMZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0dmFyIGVsZW1lbnQgPSBzbGlkZXNbaV07XG5cblx0XHRcdFx0dmFyIHJldmVyc2UgPSBjb25maWcucnRsICYmICFpc1ZlcnRpY2FsU2xpZGUoIGVsZW1lbnQgKTtcblxuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdwYXN0JyApO1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdwcmVzZW50JyApO1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdmdXR1cmUnICk7XG5cblx0XHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvaHRtbC93Zy9kcmFmdHMvaHRtbC9tYXN0ZXIvZWRpdGluZy5odG1sI3RoZS1oaWRkZW4tYXR0cmlidXRlXG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnaGlkZGVuJywgJycgKTtcblx0XHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuXG5cdFx0XHRcdC8vIElmIHRoaXMgZWxlbWVudCBjb250YWlucyB2ZXJ0aWNhbCBzbGlkZXNcblx0XHRcdFx0aWYoIGVsZW1lbnQucXVlcnlTZWxlY3RvciggJ3NlY3Rpb24nICkgKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnc3RhY2snICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB3ZSdyZSBwcmludGluZyBzdGF0aWMgc2xpZGVzLCBhbGwgc2xpZGVzIGFyZSBcInByZXNlbnRcIlxuXHRcdFx0XHRpZiggcHJpbnRNb2RlICkge1xuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3ByZXNlbnQnICk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggaSA8IGluZGV4ICkge1xuXHRcdFx0XHRcdC8vIEFueSBlbGVtZW50IHByZXZpb3VzIHRvIGluZGV4IGlzIGdpdmVuIHRoZSAncGFzdCcgY2xhc3Ncblx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoIHJldmVyc2UgPyAnZnV0dXJlJyA6ICdwYXN0JyApO1xuXG5cdFx0XHRcdFx0aWYoIGNvbmZpZy5mcmFnbWVudHMgKSB7XG5cdFx0XHRcdFx0XHR2YXIgcGFzdEZyYWdtZW50cyA9IHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKSApO1xuXG5cdFx0XHRcdFx0XHQvLyBTaG93IGFsbCBmcmFnbWVudHMgb24gcHJpb3Igc2xpZGVzXG5cdFx0XHRcdFx0XHR3aGlsZSggcGFzdEZyYWdtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBwYXN0RnJhZ21lbnQgPSBwYXN0RnJhZ21lbnRzLnBvcCgpO1xuXHRcdFx0XHRcdFx0XHRwYXN0RnJhZ21lbnQuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG5cdFx0XHRcdFx0XHRcdHBhc3RGcmFnbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiggaSA+IGluZGV4ICkge1xuXHRcdFx0XHRcdC8vIEFueSBlbGVtZW50IHN1YnNlcXVlbnQgdG8gaW5kZXggaXMgZ2l2ZW4gdGhlICdmdXR1cmUnIGNsYXNzXG5cdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCByZXZlcnNlID8gJ3Bhc3QnIDogJ2Z1dHVyZScgKTtcblxuXHRcdFx0XHRcdGlmKCBjb25maWcuZnJhZ21lbnRzICkge1xuXHRcdFx0XHRcdFx0dmFyIGZ1dHVyZUZyYWdtZW50cyA9IHRvQXJyYXkoIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudC52aXNpYmxlJyApICk7XG5cblx0XHRcdFx0XHRcdC8vIE5vIGZyYWdtZW50cyBpbiBmdXR1cmUgc2xpZGVzIHNob3VsZCBiZSB2aXNpYmxlIGFoZWFkIG9mIHRpbWVcblx0XHRcdFx0XHRcdHdoaWxlKCBmdXR1cmVGcmFnbWVudHMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0XHR2YXIgZnV0dXJlRnJhZ21lbnQgPSBmdXR1cmVGcmFnbWVudHMucG9wKCk7XG5cdFx0XHRcdFx0XHRcdGZ1dHVyZUZyYWdtZW50LmNsYXNzTGlzdC5yZW1vdmUoICd2aXNpYmxlJyApO1xuXHRcdFx0XHRcdFx0XHRmdXR1cmVGcmFnbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFyayB0aGUgY3VycmVudCBzbGlkZSBhcyBwcmVzZW50XG5cdFx0XHRzbGlkZXNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoICdwcmVzZW50JyApO1xuXHRcdFx0c2xpZGVzW2luZGV4XS5yZW1vdmVBdHRyaWJ1dGUoICdoaWRkZW4nICk7XG5cdFx0XHRzbGlkZXNbaW5kZXhdLnJlbW92ZUF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJyApO1xuXG5cdFx0XHQvLyBJZiB0aGlzIHNsaWRlIGhhcyBhIHN0YXRlIGFzc29jaWF0ZWQgd2l0aCBpdCwgYWRkIGl0XG5cdFx0XHQvLyBvbnRvIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBkZWNrXG5cdFx0XHR2YXIgc2xpZGVTdGF0ZSA9IHNsaWRlc1tpbmRleF0uZ2V0QXR0cmlidXRlKCAnZGF0YS1zdGF0ZScgKTtcblx0XHRcdGlmKCBzbGlkZVN0YXRlICkge1xuXHRcdFx0XHRzdGF0ZSA9IHN0YXRlLmNvbmNhdCggc2xpZGVTdGF0ZS5zcGxpdCggJyAnICkgKTtcblx0XHRcdH1cblxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIFNpbmNlIHRoZXJlIGFyZSBubyBzbGlkZXMgd2UgY2FuJ3QgYmUgYW55d2hlcmUgYmV5b25kIHRoZVxuXHRcdFx0Ly8gemVyb3RoIGluZGV4XG5cdFx0XHRpbmRleCA9IDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGluZGV4O1xuXG5cdH1cblxuXHQvKipcblx0ICogT3B0aW1pemF0aW9uIG1ldGhvZDsgaGlkZSBhbGwgc2xpZGVzIHRoYXQgYXJlIGZhciBhd2F5XG5cdCAqIGZyb20gdGhlIHByZXNlbnQgc2xpZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVTbGlkZXNWaXNpYmlsaXR5KCkge1xuXG5cdFx0Ly8gU2VsZWN0IGFsbCBzbGlkZXMgYW5kIGNvbnZlcnQgdGhlIE5vZGVMaXN0IHJlc3VsdCB0b1xuXHRcdC8vIGFuIGFycmF5XG5cdFx0dmFyIGhvcml6b250YWxTbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICksXG5cdFx0XHRob3Jpem9udGFsU2xpZGVzTGVuZ3RoID0gaG9yaXpvbnRhbFNsaWRlcy5sZW5ndGgsXG5cdFx0XHRkaXN0YW5jZVgsXG5cdFx0XHRkaXN0YW5jZVk7XG5cblx0XHRpZiggaG9yaXpvbnRhbFNsaWRlc0xlbmd0aCAmJiB0eXBlb2YgaW5kZXhoICE9PSAndW5kZWZpbmVkJyApIHtcblxuXHRcdFx0Ly8gVGhlIG51bWJlciBvZiBzdGVwcyBhd2F5IGZyb20gdGhlIHByZXNlbnQgc2xpZGUgdGhhdCB3aWxsXG5cdFx0XHQvLyBiZSB2aXNpYmxlXG5cdFx0XHR2YXIgdmlld0Rpc3RhbmNlID0gaXNPdmVydmlldygpID8gMTAgOiBjb25maWcudmlld0Rpc3RhbmNlO1xuXG5cdFx0XHQvLyBMaW1pdCB2aWV3IGRpc3RhbmNlIG9uIHdlYWtlciBkZXZpY2VzXG5cdFx0XHRpZiggaXNNb2JpbGVEZXZpY2UgKSB7XG5cdFx0XHRcdHZpZXdEaXN0YW5jZSA9IGlzT3ZlcnZpZXcoKSA/IDYgOiAyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBbGwgc2xpZGVzIG5lZWQgdG8gYmUgdmlzaWJsZSB3aGVuIGV4cG9ydGluZyB0byBQREZcblx0XHRcdGlmKCBpc1ByaW50aW5nUERGKCkgKSB7XG5cdFx0XHRcdHZpZXdEaXN0YW5jZSA9IE51bWJlci5NQVhfVkFMVUU7XG5cdFx0XHR9XG5cblx0XHRcdGZvciggdmFyIHggPSAwOyB4IDwgaG9yaXpvbnRhbFNsaWRlc0xlbmd0aDsgeCsrICkge1xuXHRcdFx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlID0gaG9yaXpvbnRhbFNsaWRlc1t4XTtcblxuXHRcdFx0XHR2YXIgdmVydGljYWxTbGlkZXMgPSB0b0FycmF5KCBob3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKSxcblx0XHRcdFx0XHR2ZXJ0aWNhbFNsaWRlc0xlbmd0aCA9IHZlcnRpY2FsU2xpZGVzLmxlbmd0aDtcblxuXHRcdFx0XHQvLyBEZXRlcm1pbmUgaG93IGZhciBhd2F5IHRoaXMgc2xpZGUgaXMgZnJvbSB0aGUgcHJlc2VudFxuXHRcdFx0XHRkaXN0YW5jZVggPSBNYXRoLmFicyggKCBpbmRleGggfHwgMCApIC0geCApIHx8IDA7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHByZXNlbnRhdGlvbiBpcyBsb29wZWQsIGRpc3RhbmNlIHNob3VsZCBtZWFzdXJlXG5cdFx0XHRcdC8vIDEgYmV0d2VlbiB0aGUgZmlyc3QgYW5kIGxhc3Qgc2xpZGVzXG5cdFx0XHRcdGlmKCBjb25maWcubG9vcCApIHtcblx0XHRcdFx0XHRkaXN0YW5jZVggPSBNYXRoLmFicyggKCAoIGluZGV4aCB8fCAwICkgLSB4ICkgJSAoIGhvcml6b250YWxTbGlkZXNMZW5ndGggLSB2aWV3RGlzdGFuY2UgKSApIHx8IDA7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTaG93IHRoZSBob3Jpem9udGFsIHNsaWRlIGlmIGl0J3Mgd2l0aGluIHRoZSB2aWV3IGRpc3RhbmNlXG5cdFx0XHRcdGlmKCBkaXN0YW5jZVggPCB2aWV3RGlzdGFuY2UgKSB7XG5cdFx0XHRcdFx0c2hvd1NsaWRlKCBob3Jpem9udGFsU2xpZGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRoaWRlU2xpZGUoIGhvcml6b250YWxTbGlkZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIHZlcnRpY2FsU2xpZGVzTGVuZ3RoICkge1xuXG5cdFx0XHRcdFx0dmFyIG95ID0gZ2V0UHJldmlvdXNWZXJ0aWNhbEluZGV4KCBob3Jpem9udGFsU2xpZGUgKTtcblxuXHRcdFx0XHRcdGZvciggdmFyIHkgPSAwOyB5IDwgdmVydGljYWxTbGlkZXNMZW5ndGg7IHkrKyApIHtcblx0XHRcdFx0XHRcdHZhciB2ZXJ0aWNhbFNsaWRlID0gdmVydGljYWxTbGlkZXNbeV07XG5cblx0XHRcdFx0XHRcdGRpc3RhbmNlWSA9IHggPT09ICggaW5kZXhoIHx8IDAgKSA/IE1hdGguYWJzKCAoIGluZGV4diB8fCAwICkgLSB5ICkgOiBNYXRoLmFicyggeSAtIG95ICk7XG5cblx0XHRcdFx0XHRcdGlmKCBkaXN0YW5jZVggKyBkaXN0YW5jZVkgPCB2aWV3RGlzdGFuY2UgKSB7XG5cdFx0XHRcdFx0XHRcdHNob3dTbGlkZSggdmVydGljYWxTbGlkZSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGhpZGVTbGlkZSggdmVydGljYWxTbGlkZSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBwcm9ncmVzcyBiYXIgdG8gcmVmbGVjdCB0aGUgY3VycmVudCBzbGlkZS5cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZVByb2dyZXNzKCkge1xuXG5cdFx0Ly8gVXBkYXRlIHByb2dyZXNzIGlmIGVuYWJsZWRcblx0XHRpZiggY29uZmlnLnByb2dyZXNzICYmIGRvbS5wcm9ncmVzc2JhciApIHtcblxuXHRcdFx0ZG9tLnByb2dyZXNzYmFyLnN0eWxlLndpZHRoID0gZ2V0UHJvZ3Jlc3MoKSAqIGRvbS53cmFwcGVyLm9mZnNldFdpZHRoICsgJ3B4JztcblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHNsaWRlIG51bWJlciBkaXYgdG8gcmVmbGVjdCB0aGUgY3VycmVudCBzbGlkZS5cblx0ICpcblx0ICogU2xpZGUgbnVtYmVyIGZvcm1hdCBjYW4gYmUgZGVmaW5lZCBhcyBhIHN0cmluZyB1c2luZyB0aGVcblx0ICogZm9sbG93aW5nIHZhcmlhYmxlczpcblx0ICogIGg6IGN1cnJlbnQgc2xpZGUncyBob3Jpem9udGFsIGluZGV4XG5cdCAqICB2OiBjdXJyZW50IHNsaWRlJ3MgdmVydGljYWwgaW5kZXhcblx0ICogIGM6IGN1cnJlbnQgc2xpZGUgaW5kZXggKGZsYXR0ZW5lZClcblx0ICogIHQ6IHRvdGFsIG51bWJlciBvZiBzbGlkZXMgKGZsYXR0ZW5lZClcblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZVNsaWRlTnVtYmVyKCkge1xuXG5cdFx0Ly8gVXBkYXRlIHNsaWRlIG51bWJlciBpZiBlbmFibGVkXG5cdFx0aWYoIGNvbmZpZy5zbGlkZU51bWJlciAmJiBkb20uc2xpZGVOdW1iZXIpIHtcblxuXHRcdFx0Ly8gRGVmYXVsdCB0byBvbmx5IHNob3dpbmcgdGhlIGN1cnJlbnQgc2xpZGUgbnVtYmVyXG5cdFx0XHR2YXIgZm9ybWF0ID0gJ2MnO1xuXG5cdFx0XHQvLyBDaGVjayBpZiBhIGN1c3RvbSBzbGlkZSBudW1iZXIgZm9ybWF0IGlzIGF2YWlsYWJsZVxuXHRcdFx0aWYoIHR5cGVvZiBjb25maWcuc2xpZGVOdW1iZXIgPT09ICdzdHJpbmcnICkge1xuXHRcdFx0XHRmb3JtYXQgPSBjb25maWcuc2xpZGVOdW1iZXI7XG5cdFx0XHR9XG5cblx0XHRcdGRvbS5zbGlkZU51bWJlci5pbm5lckhUTUwgPSBmb3JtYXQucmVwbGFjZSggL2gvZywgaW5kZXhoIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvdi9nLCBpbmRleHYgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnJlcGxhY2UoIC9jL2csIGdldFNsaWRlUGFzdENvdW50KCkgKyAxIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvdC9nLCBnZXRUb3RhbFNsaWRlcygpICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgc3RhdGUgb2YgYWxsIGNvbnRyb2wvbmF2aWdhdGlvbiBhcnJvd3MuXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVDb250cm9scygpIHtcblxuXHRcdHZhciByb3V0ZXMgPSBhdmFpbGFibGVSb3V0ZXMoKTtcblx0XHR2YXIgZnJhZ21lbnRzID0gYXZhaWxhYmxlRnJhZ21lbnRzKCk7XG5cblx0XHQvLyBSZW1vdmUgdGhlICdlbmFibGVkJyBjbGFzcyBmcm9tIGFsbCBkaXJlY3Rpb25zXG5cdFx0ZG9tLmNvbnRyb2xzTGVmdC5jb25jYXQoIGRvbS5jb250cm9sc1JpZ2h0IClcblx0XHRcdFx0XHRcdC5jb25jYXQoIGRvbS5jb250cm9sc1VwIClcblx0XHRcdFx0XHRcdC5jb25jYXQoIGRvbS5jb250cm9sc0Rvd24gKVxuXHRcdFx0XHRcdFx0LmNvbmNhdCggZG9tLmNvbnRyb2xzUHJldiApXG5cdFx0XHRcdFx0XHQuY29uY2F0KCBkb20uY29udHJvbHNOZXh0ICkuZm9yRWFjaCggZnVuY3Rpb24oIG5vZGUgKSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoICdlbmFibGVkJyApO1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnZnJhZ21lbnRlZCcgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBBZGQgdGhlICdlbmFibGVkJyBjbGFzcyB0byB0aGUgYXZhaWxhYmxlIHJvdXRlc1xuXHRcdGlmKCByb3V0ZXMubGVmdCApIGRvbS5jb250cm9sc0xlZnQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTtcdH0gKTtcblx0XHRpZiggcm91dGVzLnJpZ2h0ICkgZG9tLmNvbnRyb2xzUmlnaHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTsgfSApO1xuXHRcdGlmKCByb3V0ZXMudXAgKSBkb20uY29udHJvbHNVcC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdlbmFibGVkJyApO1x0fSApO1xuXHRcdGlmKCByb3V0ZXMuZG93biApIGRvbS5jb250cm9sc0Rvd24uZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTsgfSApO1xuXG5cdFx0Ly8gUHJldi9uZXh0IGJ1dHRvbnNcblx0XHRpZiggcm91dGVzLmxlZnQgfHwgcm91dGVzLnVwICkgZG9tLmNvbnRyb2xzUHJldi5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdlbmFibGVkJyApOyB9ICk7XG5cdFx0aWYoIHJvdXRlcy5yaWdodCB8fCByb3V0ZXMuZG93biApIGRvbS5jb250cm9sc05leHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTsgfSApO1xuXG5cdFx0Ly8gSGlnaGxpZ2h0IGZyYWdtZW50IGRpcmVjdGlvbnNcblx0XHRpZiggY3VycmVudFNsaWRlICkge1xuXG5cdFx0XHQvLyBBbHdheXMgYXBwbHkgZnJhZ21lbnQgZGVjb3JhdG9yIHRvIHByZXYvbmV4dCBidXR0b25zXG5cdFx0XHRpZiggZnJhZ21lbnRzLnByZXYgKSBkb20uY29udHJvbHNQcmV2LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgfSApO1xuXHRcdFx0aWYoIGZyYWdtZW50cy5uZXh0ICkgZG9tLmNvbnRyb2xzTmV4dC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdmcmFnbWVudGVkJywgJ2VuYWJsZWQnICk7IH0gKTtcblxuXHRcdFx0Ly8gQXBwbHkgZnJhZ21lbnQgZGVjb3JhdG9ycyB0byBkaXJlY3Rpb25hbCBidXR0b25zIGJhc2VkIG9uXG5cdFx0XHQvLyB3aGF0IHNsaWRlIGF4aXMgdGhleSBhcmUgaW5cblx0XHRcdGlmKCBpc1ZlcnRpY2FsU2xpZGUoIGN1cnJlbnRTbGlkZSApICkge1xuXHRcdFx0XHRpZiggZnJhZ21lbnRzLnByZXYgKSBkb20uY29udHJvbHNVcC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdmcmFnbWVudGVkJywgJ2VuYWJsZWQnICk7IH0gKTtcblx0XHRcdFx0aWYoIGZyYWdtZW50cy5uZXh0ICkgZG9tLmNvbnRyb2xzRG93bi5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdmcmFnbWVudGVkJywgJ2VuYWJsZWQnICk7IH0gKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiggZnJhZ21lbnRzLnByZXYgKSBkb20uY29udHJvbHNMZWZ0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2ZyYWdtZW50ZWQnLCAnZW5hYmxlZCcgKTsgfSApO1xuXHRcdFx0XHRpZiggZnJhZ21lbnRzLm5leHQgKSBkb20uY29udHJvbHNSaWdodC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdmcmFnbWVudGVkJywgJ2VuYWJsZWQnICk7IH0gKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIGJhY2tncm91bmQgZWxlbWVudHMgdG8gcmVmbGVjdCB0aGUgY3VycmVudFxuXHQgKiBzbGlkZS5cblx0ICpcblx0ICogQHBhcmFtIHtCb29sZWFufSBpbmNsdWRlQWxsIElmIHRydWUsIHRoZSBiYWNrZ3JvdW5kcyBvZlxuXHQgKiBhbGwgdmVydGljYWwgc2xpZGVzIChub3QganVzdCB0aGUgcHJlc2VudCkgd2lsbCBiZSB1cGRhdGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlQmFja2dyb3VuZCggaW5jbHVkZUFsbCApIHtcblxuXHRcdHZhciBjdXJyZW50QmFja2dyb3VuZCA9IG51bGw7XG5cblx0XHQvLyBSZXZlcnNlIHBhc3QvZnV0dXJlIGNsYXNzZXMgd2hlbiBpbiBSVEwgbW9kZVxuXHRcdHZhciBob3Jpem9udGFsUGFzdCA9IGNvbmZpZy5ydGwgPyAnZnV0dXJlJyA6ICdwYXN0Jyxcblx0XHRcdGhvcml6b250YWxGdXR1cmUgPSBjb25maWcucnRsID8gJ3Bhc3QnIDogJ2Z1dHVyZSc7XG5cblx0XHQvLyBVcGRhdGUgdGhlIGNsYXNzZXMgb2YgYWxsIGJhY2tncm91bmRzIHRvIG1hdGNoIHRoZVxuXHRcdC8vIHN0YXRlcyBvZiB0aGVpciBzbGlkZXMgKHBhc3QvcHJlc2VudC9mdXR1cmUpXG5cdFx0dG9BcnJheSggZG9tLmJhY2tncm91bmQuY2hpbGROb2RlcyApLmZvckVhY2goIGZ1bmN0aW9uKCBiYWNrZ3JvdW5kaCwgaCApIHtcblxuXHRcdFx0YmFja2dyb3VuZGguY2xhc3NMaXN0LnJlbW92ZSggJ3Bhc3QnICk7XG5cdFx0XHRiYWNrZ3JvdW5kaC5jbGFzc0xpc3QucmVtb3ZlKCAncHJlc2VudCcgKTtcblx0XHRcdGJhY2tncm91bmRoLmNsYXNzTGlzdC5yZW1vdmUoICdmdXR1cmUnICk7XG5cblx0XHRcdGlmKCBoIDwgaW5kZXhoICkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kaC5jbGFzc0xpc3QuYWRkKCBob3Jpem9udGFsUGFzdCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGggPiBpbmRleGggKSB7XG5cdFx0XHRcdGJhY2tncm91bmRoLmNsYXNzTGlzdC5hZGQoIGhvcml6b250YWxGdXR1cmUgKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRiYWNrZ3JvdW5kaC5jbGFzc0xpc3QuYWRkKCAncHJlc2VudCcgKTtcblxuXHRcdFx0XHQvLyBTdG9yZSBhIHJlZmVyZW5jZSB0byB0aGUgY3VycmVudCBiYWNrZ3JvdW5kIGVsZW1lbnRcblx0XHRcdFx0Y3VycmVudEJhY2tncm91bmQgPSBiYWNrZ3JvdW5kaDtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGluY2x1ZGVBbGwgfHwgaCA9PT0gaW5kZXhoICkge1xuXHRcdFx0XHR0b0FycmF5KCBiYWNrZ3JvdW5kaC5xdWVyeVNlbGVjdG9yQWxsKCAnLnNsaWRlLWJhY2tncm91bmQnICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggYmFja2dyb3VuZHYsIHYgKSB7XG5cblx0XHRcdFx0XHRiYWNrZ3JvdW5kdi5jbGFzc0xpc3QucmVtb3ZlKCAncGFzdCcgKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kdi5jbGFzc0xpc3QucmVtb3ZlKCAncHJlc2VudCcgKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kdi5jbGFzc0xpc3QucmVtb3ZlKCAnZnV0dXJlJyApO1xuXG5cdFx0XHRcdFx0aWYoIHYgPCBpbmRleHYgKSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kdi5jbGFzc0xpc3QuYWRkKCAncGFzdCcgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSBpZiAoIHYgPiBpbmRleHYgKSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kdi5jbGFzc0xpc3QuYWRkKCAnZnV0dXJlJyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmR2LmNsYXNzTGlzdC5hZGQoICdwcmVzZW50JyApO1xuXG5cdFx0XHRcdFx0XHQvLyBPbmx5IGlmIHRoaXMgaXMgdGhlIHByZXNlbnQgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgc2xpZGVcblx0XHRcdFx0XHRcdGlmKCBoID09PSBpbmRleGggKSBjdXJyZW50QmFja2dyb3VuZCA9IGJhY2tncm91bmR2O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHR9ICk7XG5cblx0XHQvLyBTdG9wIGFueSBjdXJyZW50bHkgcGxheWluZyB2aWRlbyBiYWNrZ3JvdW5kXG5cdFx0aWYoIHByZXZpb3VzQmFja2dyb3VuZCApIHtcblxuXHRcdFx0dmFyIHByZXZpb3VzVmlkZW8gPSBwcmV2aW91c0JhY2tncm91bmQucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApO1xuXHRcdFx0aWYoIHByZXZpb3VzVmlkZW8gKSBwcmV2aW91c1ZpZGVvLnBhdXNlKCk7XG5cblx0XHR9XG5cblx0XHRpZiggY3VycmVudEJhY2tncm91bmQgKSB7XG5cblx0XHRcdC8vIFN0YXJ0IHZpZGVvIHBsYXliYWNrXG5cdFx0XHR2YXIgY3VycmVudFZpZGVvID0gY3VycmVudEJhY2tncm91bmQucXVlcnlTZWxlY3RvciggJ3ZpZGVvJyApO1xuXHRcdFx0aWYoIGN1cnJlbnRWaWRlbyApIHtcblx0XHRcdFx0Y3VycmVudFZpZGVvLmN1cnJlbnRUaW1lID0gMDtcblx0XHRcdFx0Y3VycmVudFZpZGVvLnBsYXkoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGJhY2tncm91bmRJbWFnZVVSTCA9IGN1cnJlbnRCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSB8fCAnJztcblxuXHRcdFx0Ly8gUmVzdGFydCBHSUZzIChkb2Vzbid0IHdvcmsgaW4gRmlyZWZveClcblx0XHRcdGlmKCAvXFwuZ2lmL2kudGVzdCggYmFja2dyb3VuZEltYWdlVVJMICkgKSB7XG5cdFx0XHRcdGN1cnJlbnRCYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuXHRcdFx0XHR3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggY3VycmVudEJhY2tncm91bmQgKS5vcGFjaXR5O1xuXHRcdFx0XHRjdXJyZW50QmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBiYWNrZ3JvdW5kSW1hZ2VVUkw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERvbid0IHRyYW5zaXRpb24gYmV0d2VlbiBpZGVudGljYWwgYmFja2dyb3VuZHMuIFRoaXNcblx0XHRcdC8vIHByZXZlbnRzIHVud2FudGVkIGZsaWNrZXIuXG5cdFx0XHR2YXIgcHJldmlvdXNCYWNrZ3JvdW5kSGFzaCA9IHByZXZpb3VzQmFja2dyb3VuZCA/IHByZXZpb3VzQmFja2dyb3VuZC5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaGFzaCcgKSA6IG51bGw7XG5cdFx0XHR2YXIgY3VycmVudEJhY2tncm91bmRIYXNoID0gY3VycmVudEJhY2tncm91bmQuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWhhc2gnICk7XG5cdFx0XHRpZiggY3VycmVudEJhY2tncm91bmRIYXNoICYmIGN1cnJlbnRCYWNrZ3JvdW5kSGFzaCA9PT0gcHJldmlvdXNCYWNrZ3JvdW5kSGFzaCAmJiBjdXJyZW50QmFja2dyb3VuZCAhPT0gcHJldmlvdXNCYWNrZ3JvdW5kICkge1xuXHRcdFx0XHRkb20uYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCAnbm8tdHJhbnNpdGlvbicgKTtcblx0XHRcdH1cblxuXHRcdFx0cHJldmlvdXNCYWNrZ3JvdW5kID0gY3VycmVudEJhY2tncm91bmQ7XG5cblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgYmFja2dyb3VuZCBicmlnaHRuZXNzIGZsYWcgZm9yIHRoaXMgc2xpZGUsXG5cdFx0Ly8gYnViYmxlIGl0IHRvIHRoZSAucmV2ZWFsIGNvbnRhaW5lclxuXHRcdGlmKCBjdXJyZW50U2xpZGUgKSB7XG5cdFx0XHRbICdoYXMtbGlnaHQtYmFja2dyb3VuZCcsICdoYXMtZGFyay1iYWNrZ3JvdW5kJyBdLmZvckVhY2goIGZ1bmN0aW9uKCBjbGFzc1RvQnViYmxlICkge1xuXHRcdFx0XHRpZiggY3VycmVudFNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggY2xhc3NUb0J1YmJsZSApICkge1xuXHRcdFx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoIGNsYXNzVG9CdWJibGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCBjbGFzc1RvQnViYmxlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHQvLyBBbGxvdyB0aGUgZmlyc3QgYmFja2dyb3VuZCB0byBhcHBseSB3aXRob3V0IHRyYW5zaXRpb25cblx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdGRvbS5iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoICduby10cmFuc2l0aW9uJyApO1xuXHRcdH0sIDEgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwYXJhbGxheCBiYWNrZ3JvdW5kIGJhc2VkXG5cdCAqIG9uIHRoZSBjdXJyZW50IHNsaWRlIGluZGV4LlxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XG5cblx0XHRpZiggY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZEltYWdlICkge1xuXG5cdFx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICksXG5cdFx0XHRcdHZlcnRpY2FsU2xpZGVzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggVkVSVElDQUxfU0xJREVTX1NFTEVDVE9SICk7XG5cblx0XHRcdHZhciBiYWNrZ3JvdW5kU2l6ZSA9IGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRTaXplLnNwbGl0KCAnICcgKSxcblx0XHRcdFx0YmFja2dyb3VuZFdpZHRoLCBiYWNrZ3JvdW5kSGVpZ2h0O1xuXG5cdFx0XHRpZiggYmFja2dyb3VuZFNpemUubGVuZ3RoID09PSAxICkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kV2lkdGggPSBiYWNrZ3JvdW5kSGVpZ2h0ID0gcGFyc2VJbnQoIGJhY2tncm91bmRTaXplWzBdLCAxMCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGJhY2tncm91bmRXaWR0aCA9IHBhcnNlSW50KCBiYWNrZ3JvdW5kU2l6ZVswXSwgMTAgKTtcblx0XHRcdFx0YmFja2dyb3VuZEhlaWdodCA9IHBhcnNlSW50KCBiYWNrZ3JvdW5kU2l6ZVsxXSwgMTAgKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHNsaWRlV2lkdGggPSBkb20uYmFja2dyb3VuZC5vZmZzZXRXaWR0aCxcblx0XHRcdFx0aG9yaXpvbnRhbFNsaWRlQ291bnQgPSBob3Jpem9udGFsU2xpZGVzLmxlbmd0aCxcblx0XHRcdFx0aG9yaXpvbnRhbE9mZnNldE11bHRpcGxpZXIsXG5cdFx0XHRcdGhvcml6b250YWxPZmZzZXQ7XG5cblx0XHRcdGlmKCB0eXBlb2YgY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZEhvcml6b250YWwgPT09ICdudW1iZXInICkge1xuXHRcdFx0XHRob3Jpem9udGFsT2Zmc2V0TXVsdGlwbGllciA9IGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRIb3Jpem9udGFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGhvcml6b250YWxPZmZzZXRNdWx0aXBsaWVyID0gKCBiYWNrZ3JvdW5kV2lkdGggLSBzbGlkZVdpZHRoICkgLyAoIGhvcml6b250YWxTbGlkZUNvdW50LTEgKTtcblx0XHRcdH1cblxuXHRcdFx0aG9yaXpvbnRhbE9mZnNldCA9IGhvcml6b250YWxPZmZzZXRNdWx0aXBsaWVyICogaW5kZXhoICogLTE7XG5cblx0XHRcdHZhciBzbGlkZUhlaWdodCA9IGRvbS5iYWNrZ3JvdW5kLm9mZnNldEhlaWdodCxcblx0XHRcdFx0dmVydGljYWxTbGlkZUNvdW50ID0gdmVydGljYWxTbGlkZXMubGVuZ3RoLFxuXHRcdFx0XHR2ZXJ0aWNhbE9mZnNldE11bHRpcGxpZXIsXG5cdFx0XHRcdHZlcnRpY2FsT2Zmc2V0O1xuXG5cdFx0XHRpZiggdHlwZW9mIGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRWZXJ0aWNhbCA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdHZlcnRpY2FsT2Zmc2V0TXVsdGlwbGllciA9IGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRWZXJ0aWNhbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR2ZXJ0aWNhbE9mZnNldE11bHRpcGxpZXIgPSAoIGJhY2tncm91bmRIZWlnaHQgLSBzbGlkZUhlaWdodCApIC8gKCB2ZXJ0aWNhbFNsaWRlQ291bnQtMSApO1xuXHRcdFx0fVxuXG5cdFx0XHR2ZXJ0aWNhbE9mZnNldCA9IHZlcnRpY2FsU2xpZGVDb3VudCA+IDAgPyAgdmVydGljYWxPZmZzZXRNdWx0aXBsaWVyICogaW5kZXh2ICogMSA6IDA7XG5cblx0XHRcdGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGhvcml6b250YWxPZmZzZXQgKyAncHggJyArIC12ZXJ0aWNhbE9mZnNldCArICdweCc7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgZ2l2ZW4gc2xpZGUgaXMgd2l0aGluIHRoZSBjb25maWd1cmVkIHZpZXdcblx0ICogZGlzdGFuY2UuIFNob3dzIHRoZSBzbGlkZSBlbGVtZW50IGFuZCBsb2FkcyBhbnkgY29udGVudFxuXHQgKiB0aGF0IGlzIHNldCB0byBsb2FkIGxhemlseSAoZGF0YS1zcmMpLlxuXHQgKi9cblx0ZnVuY3Rpb24gc2hvd1NsaWRlKCBzbGlkZSApIHtcblxuXHRcdC8vIFNob3cgdGhlIHNsaWRlIGVsZW1lbnRcblx0XHRzbGlkZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuXHRcdC8vIE1lZGlhIGVsZW1lbnRzIHdpdGggZGF0YS1zcmMgYXR0cmlidXRlc1xuXHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbWdbZGF0YS1zcmNdLCB2aWRlb1tkYXRhLXNyY10sIGF1ZGlvW2RhdGEtc3JjXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdzcmMnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICk7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApO1xuXHRcdH0gKTtcblxuXHRcdC8vIE1lZGlhIGVsZW1lbnRzIHdpdGggPHNvdXJjZT4gY2hpbGRyZW5cblx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAndmlkZW8sIGF1ZGlvJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIG1lZGlhICkge1xuXHRcdFx0dmFyIHNvdXJjZXMgPSAwO1xuXG5cdFx0XHR0b0FycmF5KCBtZWRpYS5xdWVyeVNlbGVjdG9yQWxsKCAnc291cmNlW2RhdGEtc3JjXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBzb3VyY2UgKSB7XG5cdFx0XHRcdHNvdXJjZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBzb3VyY2UuZ2V0QXR0cmlidXRlKCAnZGF0YS1zcmMnICkgKTtcblx0XHRcdFx0c291cmNlLnJlbW92ZUF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApO1xuXHRcdFx0XHRzb3VyY2VzICs9IDE7XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIElmIHdlIHJld3JvdGUgc291cmNlcyBmb3IgdGhpcyB2aWRlby9hdWRpbyBlbGVtZW50LCB3ZSBuZWVkXG5cdFx0XHQvLyB0byBtYW51YWxseSB0ZWxsIGl0IHRvIGxvYWQgZnJvbSBpdHMgbmV3IG9yaWdpblxuXHRcdFx0aWYoIHNvdXJjZXMgPiAwICkge1xuXHRcdFx0XHRtZWRpYS5sb2FkKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cblx0XHQvLyBTaG93IHRoZSBjb3JyZXNwb25kaW5nIGJhY2tncm91bmQgZWxlbWVudFxuXHRcdHZhciBpbmRpY2VzID0gZ2V0SW5kaWNlcyggc2xpZGUgKTtcblx0XHR2YXIgYmFja2dyb3VuZCA9IGdldFNsaWRlQmFja2dyb3VuZCggaW5kaWNlcy5oLCBpbmRpY2VzLnYgKTtcblx0XHRpZiggYmFja2dyb3VuZCApIHtcblx0XHRcdGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHRcdC8vIElmIHRoZSBiYWNrZ3JvdW5kIGNvbnRhaW5zIG1lZGlhLCBsb2FkIGl0XG5cdFx0XHRpZiggYmFja2dyb3VuZC5oYXNBdHRyaWJ1dGUoICdkYXRhLWxvYWRlZCcgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdGJhY2tncm91bmQuc2V0QXR0cmlidXRlKCAnZGF0YS1sb2FkZWQnLCAndHJ1ZScgKTtcblxuXHRcdFx0XHR2YXIgYmFja2dyb3VuZEltYWdlID0gc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWltYWdlJyApLFxuXHRcdFx0XHRcdGJhY2tncm91bmRWaWRlbyA9IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC12aWRlbycgKSxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kVmlkZW9Mb29wID0gc2xpZGUuaGFzQXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXZpZGVvLWxvb3AnICksXG5cdFx0XHRcdFx0YmFja2dyb3VuZElmcmFtZSA9IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pZnJhbWUnICk7XG5cblx0XHRcdFx0Ly8gSW1hZ2VzXG5cdFx0XHRcdGlmKCBiYWNrZ3JvdW5kSW1hZ2UgKSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcrIGJhY2tncm91bmRJbWFnZSArJyknO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFZpZGVvc1xuXHRcdFx0XHRlbHNlIGlmICggYmFja2dyb3VuZFZpZGVvICYmICFpc1NwZWFrZXJOb3RlcygpICkge1xuXHRcdFx0XHRcdHZhciB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd2aWRlbycgKTtcblxuXHRcdFx0XHRcdGlmKCBiYWNrZ3JvdW5kVmlkZW9Mb29wICkge1xuXHRcdFx0XHRcdFx0dmlkZW8uc2V0QXR0cmlidXRlKCAnbG9vcCcsICcnICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydCBjb21tYSBzZXBhcmF0ZWQgbGlzdHMgb2YgdmlkZW8gc291cmNlc1xuXHRcdFx0XHRcdGJhY2tncm91bmRWaWRlby5zcGxpdCggJywnICkuZm9yRWFjaCggZnVuY3Rpb24oIHNvdXJjZSApIHtcblx0XHRcdFx0XHRcdHZpZGVvLmlubmVySFRNTCArPSAnPHNvdXJjZSBzcmM9XCInKyBzb3VyY2UgKydcIj4nO1xuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoIHZpZGVvICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWZyYW1lc1xuXHRcdFx0XHRlbHNlIGlmKCBiYWNrZ3JvdW5kSWZyYW1lICkge1xuXHRcdFx0XHRcdHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaWZyYW1lJyApO1xuXHRcdFx0XHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSggJ3NyYycsIGJhY2tncm91bmRJZnJhbWUgKTtcblx0XHRcdFx0XHRcdGlmcmFtZS5zdHlsZS53aWR0aCAgPSAnMTAwJSc7XG5cdFx0XHRcdFx0XHRpZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuXHRcdFx0XHRcdFx0aWZyYW1lLnN0eWxlLm1heEhlaWdodCA9ICcxMDAlJztcblx0XHRcdFx0XHRcdGlmcmFtZS5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJztcblxuXHRcdFx0XHRcdGJhY2tncm91bmQuYXBwZW5kQ2hpbGQoIGlmcmFtZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gdGhlIGdpdmVuIHNsaWRlIGlzIG1vdmVkIG91dHNpZGUgb2YgdGhlXG5cdCAqIGNvbmZpZ3VyZWQgdmlldyBkaXN0YW5jZS5cblx0ICovXG5cdGZ1bmN0aW9uIGhpZGVTbGlkZSggc2xpZGUgKSB7XG5cblx0XHQvLyBIaWRlIHRoZSBzbGlkZSBlbGVtZW50XG5cdFx0c2xpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuXHRcdC8vIEhpZGUgdGhlIGNvcnJlc3BvbmRpbmcgYmFja2dyb3VuZCBlbGVtZW50XG5cdFx0dmFyIGluZGljZXMgPSBnZXRJbmRpY2VzKCBzbGlkZSApO1xuXHRcdHZhciBiYWNrZ3JvdW5kID0gZ2V0U2xpZGVCYWNrZ3JvdW5kKCBpbmRpY2VzLmgsIGluZGljZXMudiApO1xuXHRcdGlmKCBiYWNrZ3JvdW5kICkge1xuXHRcdFx0YmFja2dyb3VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZSB3aGF0IGF2YWlsYWJsZSByb3V0ZXMgdGhlcmUgYXJlIGZvciBuYXZpZ2F0aW9uLlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IGNvbnRhaW5pbmcgZm91ciBib29sZWFuczogbGVmdC9yaWdodC91cC9kb3duXG5cdCAqL1xuXHRmdW5jdGlvbiBhdmFpbGFibGVSb3V0ZXMoKSB7XG5cblx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICksXG5cdFx0XHR2ZXJ0aWNhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFZFUlRJQ0FMX1NMSURFU19TRUxFQ1RPUiApO1xuXG5cdFx0dmFyIHJvdXRlcyA9IHtcblx0XHRcdGxlZnQ6IGluZGV4aCA+IDAgfHwgY29uZmlnLmxvb3AsXG5cdFx0XHRyaWdodDogaW5kZXhoIDwgaG9yaXpvbnRhbFNsaWRlcy5sZW5ndGggLSAxIHx8IGNvbmZpZy5sb29wLFxuXHRcdFx0dXA6IGluZGV4diA+IDAsXG5cdFx0XHRkb3duOiBpbmRleHYgPCB2ZXJ0aWNhbFNsaWRlcy5sZW5ndGggLSAxXG5cdFx0fTtcblxuXHRcdC8vIHJldmVyc2UgaG9yaXpvbnRhbCBjb250cm9scyBmb3IgcnRsXG5cdFx0aWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHR2YXIgbGVmdCA9IHJvdXRlcy5sZWZ0O1xuXHRcdFx0cm91dGVzLmxlZnQgPSByb3V0ZXMucmlnaHQ7XG5cdFx0XHRyb3V0ZXMucmlnaHQgPSBsZWZ0O1xuXHRcdH1cblxuXHRcdHJldHVybiByb3V0ZXM7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGFuIG9iamVjdCBkZXNjcmliaW5nIHRoZSBhdmFpbGFibGUgZnJhZ21lbnRcblx0ICogZGlyZWN0aW9ucy5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSB0d28gYm9vbGVhbiBwcm9wZXJ0aWVzOiBwcmV2L25leHRcblx0ICovXG5cdGZ1bmN0aW9uIGF2YWlsYWJsZUZyYWdtZW50cygpIHtcblxuXHRcdGlmKCBjdXJyZW50U2xpZGUgJiYgY29uZmlnLmZyYWdtZW50cyApIHtcblx0XHRcdHZhciBmcmFnbWVudHMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKTtcblx0XHRcdHZhciBoaWRkZW5GcmFnbWVudHMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudDpub3QoLnZpc2libGUpJyApO1xuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRwcmV2OiBmcmFnbWVudHMubGVuZ3RoIC0gaGlkZGVuRnJhZ21lbnRzLmxlbmd0aCA+IDAsXG5cdFx0XHRcdG5leHQ6ICEhaGlkZGVuRnJhZ21lbnRzLmxlbmd0aFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4geyBwcmV2OiBmYWxzZSwgbmV4dDogZmFsc2UgfTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBFbmZvcmNlcyBvcmlnaW4tc3BlY2lmaWMgZm9ybWF0IHJ1bGVzIGZvciBlbWJlZGRlZCBtZWRpYS5cblx0ICovXG5cdGZ1bmN0aW9uIGZvcm1hdEVtYmVkZGVkQ29udGVudCgpIHtcblxuXHRcdHZhciBfYXBwZW5kUGFyYW1Ub0lmcmFtZVNvdXJjZSA9IGZ1bmN0aW9uKCBzb3VyY2VBdHRyaWJ1dGUsIHNvdXJjZVVSTCwgcGFyYW0gKSB7XG5cdFx0XHR0b0FycmF5KCBkb20uc2xpZGVzLnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbJysgc291cmNlQXR0cmlidXRlICsnKj1cIicrIHNvdXJjZVVSTCArJ1wiXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0dmFyIHNyYyA9IGVsLmdldEF0dHJpYnV0ZSggc291cmNlQXR0cmlidXRlICk7XG5cdFx0XHRcdGlmKCBzcmMgJiYgc3JjLmluZGV4T2YoIHBhcmFtICkgPT09IC0xICkge1xuXHRcdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSggc291cmNlQXR0cmlidXRlLCBzcmMgKyAoICEvXFw/Ly50ZXN0KCBzcmMgKSA/ICc/JyA6ICcmJyApICsgcGFyYW0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIFlvdVR1YmUgZnJhbWVzIG11c3QgaW5jbHVkZSBcIj9lbmFibGVqc2FwaT0xXCJcblx0XHRfYXBwZW5kUGFyYW1Ub0lmcmFtZVNvdXJjZSggJ3NyYycsICd5b3V0dWJlLmNvbS9lbWJlZC8nLCAnZW5hYmxlanNhcGk9MScgKTtcblx0XHRfYXBwZW5kUGFyYW1Ub0lmcmFtZVNvdXJjZSggJ2RhdGEtc3JjJywgJ3lvdXR1YmUuY29tL2VtYmVkLycsICdlbmFibGVqc2FwaT0xJyApO1xuXG5cdFx0Ly8gVmltZW8gZnJhbWVzIG11c3QgaW5jbHVkZSBcIj9hcGk9MVwiXG5cdFx0X2FwcGVuZFBhcmFtVG9JZnJhbWVTb3VyY2UoICdzcmMnLCAncGxheWVyLnZpbWVvLmNvbS8nLCAnYXBpPTEnICk7XG5cdFx0X2FwcGVuZFBhcmFtVG9JZnJhbWVTb3VyY2UoICdkYXRhLXNyYycsICdwbGF5ZXIudmltZW8uY29tLycsICdhcGk9MScgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0IHBsYXliYWNrIG9mIGFueSBlbWJlZGRlZCBjb250ZW50IGluc2lkZSBvZlxuXHQgKiB0aGUgdGFyZ2V0ZWQgc2xpZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiBzdGFydEVtYmVkZGVkQ29udGVudCggc2xpZGUgKSB7XG5cblx0XHRpZiggc2xpZGUgJiYgIWlzU3BlYWtlck5vdGVzKCkgKSB7XG5cdFx0XHQvLyBSZXN0YXJ0IEdJRnNcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdpbWdbc3JjJD1cIi5naWZcIl0nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdC8vIFNldHRpbmcgdGhlIHNhbWUgdW5jaGFuZ2VkIHNvdXJjZSBsaWtlIHRoaXMgd2FzIGNvbmZpcm1lZFxuXHRcdFx0XHQvLyB0byB3b3JrIGluIENocm9tZSwgRkYgJiBTYWZhcmlcblx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCAnc3JjJywgZWwuZ2V0QXR0cmlidXRlKCAnc3JjJyApICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIEhUTUw1IG1lZGlhIGVsZW1lbnRzXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAndmlkZW8sIGF1ZGlvJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRpZiggZWwuaGFzQXR0cmlidXRlKCAnZGF0YS1hdXRvcGxheScgKSAmJiB0eXBlb2YgZWwucGxheSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRlbC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gTm9ybWFsIGlmcmFtZXNcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbc3JjXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0c3RhcnRFbWJlZGRlZElmcmFtZSggeyB0YXJnZXQ6IGVsIH0gKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gTGF6eSBsb2FkaW5nIGlmcmFtZXNcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbZGF0YS1zcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRpZiggZWwuZ2V0QXR0cmlidXRlKCAnc3JjJyApICE9PSBlbC5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApIHtcblx0XHRcdFx0XHRlbC5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHN0YXJ0RW1iZWRkZWRJZnJhbWUgKTsgLy8gcmVtb3ZlIGZpcnN0IHRvIGF2b2lkIGR1cGVzXG5cdFx0XHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBzdGFydEVtYmVkZGVkSWZyYW1lICk7XG5cdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCAnc3JjJywgZWwuZ2V0QXR0cmlidXRlKCAnZGF0YS1zcmMnICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFwiU3RhcnRzXCIgdGhlIGNvbnRlbnQgb2YgYW4gZW1iZWRkZWQgaWZyYW1lIHVzaW5nIHRoZVxuXHQgKiBwb3N0bWVzc2FnZSBBUEkuXG5cdCAqL1xuXHRmdW5jdGlvbiBzdGFydEVtYmVkZGVkSWZyYW1lKCBldmVudCApIHtcblxuXHRcdHZhciBpZnJhbWUgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBZb3VUdWJlIHBvc3RNZXNzYWdlIEFQSVxuXHRcdGlmKCAveW91dHViZVxcLmNvbVxcL2VtYmVkXFwvLy50ZXN0KCBpZnJhbWUuZ2V0QXR0cmlidXRlKCAnc3JjJyApICkgJiYgaWZyYW1lLmhhc0F0dHJpYnV0ZSggJ2RhdGEtYXV0b3BsYXknICkgKSB7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwbGF5VmlkZW9cIixcImFyZ3NcIjpcIlwifScsICcqJyApO1xuXHRcdH1cblx0XHQvLyBWaW1lbyBwb3N0TWVzc2FnZSBBUElcblx0XHRlbHNlIGlmKCAvcGxheWVyXFwudmltZW9cXC5jb21cXC8vLnRlc3QoIGlmcmFtZS5nZXRBdHRyaWJ1dGUoICdzcmMnICkgKSAmJiBpZnJhbWUuaGFzQXR0cmlidXRlKCAnZGF0YS1hdXRvcGxheScgKSApIHtcblx0XHRcdGlmcmFtZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCAne1wibWV0aG9kXCI6XCJwbGF5XCJ9JywgJyonICk7XG5cdFx0fVxuXHRcdC8vIEdlbmVyaWMgcG9zdE1lc3NhZ2UgQVBJXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3NsaWRlOnN0YXJ0JywgJyonICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBwbGF5YmFjayBvZiBhbnkgZW1iZWRkZWQgY29udGVudCBpbnNpZGUgb2Zcblx0ICogdGhlIHRhcmdldGVkIHNsaWRlLlxuXHQgKi9cblx0ZnVuY3Rpb24gc3RvcEVtYmVkZGVkQ29udGVudCggc2xpZGUgKSB7XG5cblx0XHRpZiggc2xpZGUgJiYgc2xpZGUucGFyZW50Tm9kZSApIHtcblx0XHRcdC8vIEhUTUw1IG1lZGlhIGVsZW1lbnRzXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAndmlkZW8sIGF1ZGlvJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHRpZiggIWVsLmhhc0F0dHJpYnV0ZSggJ2RhdGEtaWdub3JlJyApICYmIHR5cGVvZiBlbC5wYXVzZSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRlbC5wYXVzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIEdlbmVyaWMgcG9zdE1lc3NhZ2UgQVBJIGZvciBub24tbGF6eSBsb2FkZWQgaWZyYW1lc1xuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0ZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3NsaWRlOnN0b3AnLCAnKicgKTtcblx0XHRcdFx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBzdGFydEVtYmVkZGVkSWZyYW1lICk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gWW91VHViZSBwb3N0TWVzc2FnZSBBUElcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbc3JjKj1cInlvdXR1YmUuY29tL2VtYmVkL1wiXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0aWYoICFlbC5oYXNBdHRyaWJ1dGUoICdkYXRhLWlnbm9yZScgKSAmJiB0eXBlb2YgZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRlbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCAne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBhdXNlVmlkZW9cIixcImFyZ3NcIjpcIlwifScsICcqJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gVmltZW8gcG9zdE1lc3NhZ2UgQVBJXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnaWZyYW1lW3NyYyo9XCJwbGF5ZXIudmltZW8uY29tL1wiXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0aWYoICFlbC5oYXNBdHRyaWJ1dGUoICdkYXRhLWlnbm9yZScgKSAmJiB0eXBlb2YgZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRlbC5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCAne1wibWV0aG9kXCI6XCJwYXVzZVwifScsICcqJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gTGF6eSBsb2FkaW5nIGlmcmFtZXNcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWVbZGF0YS1zcmNdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHQvLyBPbmx5IHJlbW92aW5nIHRoZSBzcmMgZG9lc24ndCBhY3R1YWxseSB1bmxvYWQgdGhlIGZyYW1lXG5cdFx0XHRcdC8vIGluIGFsbCBicm93c2VycyAoRmlyZWZveCkgc28gd2Ugc2V0IGl0IHRvIGJsYW5rIGZpcnN0XG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSggJ3NyYycsICdhYm91dDpibGFuaycgKTtcblx0XHRcdFx0ZWwucmVtb3ZlQXR0cmlidXRlKCAnc3JjJyApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIG51bWJlciBvZiBwYXN0IHNsaWRlcy4gVGhpcyBjYW4gYmUgdXNlZCBhcyBhIGdsb2JhbFxuXHQgKiBmbGF0dGVuZWQgaW5kZXggZm9yIHNsaWRlcy5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFNsaWRlUGFzdENvdW50KCkge1xuXG5cdFx0dmFyIGhvcml6b250YWxTbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICk7XG5cblx0XHQvLyBUaGUgbnVtYmVyIG9mIHBhc3Qgc2xpZGVzXG5cdFx0dmFyIHBhc3RDb3VudCA9IDA7XG5cblx0XHQvLyBTdGVwIHRocm91Z2ggYWxsIHNsaWRlcyBhbmQgY291bnQgdGhlIHBhc3Qgb25lc1xuXHRcdG1haW5Mb29wOiBmb3IoIHZhciBpID0gMDsgaSA8IGhvcml6b250YWxTbGlkZXMubGVuZ3RoOyBpKysgKSB7XG5cblx0XHRcdHZhciBob3Jpem9udGFsU2xpZGUgPSBob3Jpem9udGFsU2xpZGVzW2ldO1xuXHRcdFx0dmFyIHZlcnRpY2FsU2xpZGVzID0gdG9BcnJheSggaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICk7XG5cblx0XHRcdGZvciggdmFyIGogPSAwOyBqIDwgdmVydGljYWxTbGlkZXMubGVuZ3RoOyBqKysgKSB7XG5cblx0XHRcdFx0Ly8gU3RvcCBhcyBzb29uIGFzIHdlIGFycml2ZSBhdCB0aGUgcHJlc2VudFxuXHRcdFx0XHRpZiggdmVydGljYWxTbGlkZXNbal0uY2xhc3NMaXN0LmNvbnRhaW5zKCAncHJlc2VudCcgKSApIHtcblx0XHRcdFx0XHRicmVhayBtYWluTG9vcDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHBhc3RDb3VudCsrO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0b3AgYXMgc29vbiBhcyB3ZSBhcnJpdmUgYXQgdGhlIHByZXNlbnRcblx0XHRcdGlmKCBob3Jpem9udGFsU2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAncHJlc2VudCcgKSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERvbid0IGNvdW50IHRoZSB3cmFwcGluZyBzZWN0aW9uIGZvciB2ZXJ0aWNhbCBzbGlkZXNcblx0XHRcdGlmKCBob3Jpem9udGFsU2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3RhY2snICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRwYXN0Q291bnQrKztcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBwYXN0Q291bnQ7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIGEgdmFsdWUgcmFuZ2luZyBmcm9tIDAtMSB0aGF0IHJlcHJlc2VudHNcblx0ICogaG93IGZhciBpbnRvIHRoZSBwcmVzZW50YXRpb24gd2UgaGF2ZSBuYXZpZ2F0ZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRQcm9ncmVzcygpIHtcblxuXHRcdC8vIFRoZSBudW1iZXIgb2YgcGFzdCBhbmQgdG90YWwgc2xpZGVzXG5cdFx0dmFyIHRvdGFsQ291bnQgPSBnZXRUb3RhbFNsaWRlcygpO1xuXHRcdHZhciBwYXN0Q291bnQgPSBnZXRTbGlkZVBhc3RDb3VudCgpO1xuXG5cdFx0aWYoIGN1cnJlbnRTbGlkZSApIHtcblxuXHRcdFx0dmFyIGFsbEZyYWdtZW50cyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApO1xuXG5cdFx0XHQvLyBJZiB0aGVyZSBhcmUgZnJhZ21lbnRzIGluIHRoZSBjdXJyZW50IHNsaWRlIHRob3NlIHNob3VsZCBiZVxuXHRcdFx0Ly8gYWNjb3VudGVkIGZvciBpbiB0aGUgcHJvZ3Jlc3MuXG5cdFx0XHRpZiggYWxsRnJhZ21lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdHZhciB2aXNpYmxlRnJhZ21lbnRzID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQudmlzaWJsZScgKTtcblxuXHRcdFx0XHQvLyBUaGlzIHZhbHVlIHJlcHJlc2VudHMgaG93IGJpZyBhIHBvcnRpb24gb2YgdGhlIHNsaWRlIHByb2dyZXNzXG5cdFx0XHRcdC8vIHRoYXQgaXMgbWFkZSB1cCBieSBpdHMgZnJhZ21lbnRzICgwLTEpXG5cdFx0XHRcdHZhciBmcmFnbWVudFdlaWdodCA9IDAuOTtcblxuXHRcdFx0XHQvLyBBZGQgZnJhZ21lbnQgcHJvZ3Jlc3MgdG8gdGhlIHBhc3Qgc2xpZGUgY291bnRcblx0XHRcdFx0cGFzdENvdW50ICs9ICggdmlzaWJsZUZyYWdtZW50cy5sZW5ndGggLyBhbGxGcmFnbWVudHMubGVuZ3RoICkgKiBmcmFnbWVudFdlaWdodDtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBwYXN0Q291bnQgLyAoIHRvdGFsQ291bnQgLSAxICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdGhpcyBwcmVzZW50YXRpb24gaXMgcnVubmluZyBpbnNpZGUgb2YgdGhlXG5cdCAqIHNwZWFrZXIgbm90ZXMgd2luZG93LlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNTcGVha2VyTm90ZXMoKSB7XG5cblx0XHRyZXR1cm4gISF3aW5kb3cubG9jYXRpb24uc2VhcmNoLm1hdGNoKCAvcmVjZWl2ZXIvZ2kgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlYWRzIHRoZSBjdXJyZW50IFVSTCAoaGFzaCkgYW5kIG5hdmlnYXRlcyBhY2NvcmRpbmdseS5cblx0ICovXG5cdGZ1bmN0aW9uIHJlYWRVUkwoKSB7XG5cblx0XHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG5cdFx0Ly8gQXR0ZW1wdCB0byBwYXJzZSB0aGUgaGFzaCBhcyBlaXRoZXIgYW4gaW5kZXggb3IgbmFtZVxuXHRcdHZhciBiaXRzID0gaGFzaC5zbGljZSggMiApLnNwbGl0KCAnLycgKSxcblx0XHRcdG5hbWUgPSBoYXNoLnJlcGxhY2UoIC8jfFxcLy9naSwgJycgKTtcblxuXHRcdC8vIElmIHRoZSBmaXJzdCBiaXQgaXMgaW52YWxpZCBhbmQgdGhlcmUgaXMgYSBuYW1lIHdlIGNhblxuXHRcdC8vIGFzc3VtZSB0aGF0IHRoaXMgaXMgYSBuYW1lZCBsaW5rXG5cdFx0aWYoIGlzTmFOKCBwYXJzZUludCggYml0c1swXSwgMTAgKSApICYmIG5hbWUubGVuZ3RoICkge1xuXHRcdFx0dmFyIGVsZW1lbnQ7XG5cblx0XHRcdC8vIEVuc3VyZSB0aGUgbmFtZWQgbGluayBpcyBhIHZhbGlkIEhUTUwgSUQgYXR0cmlidXRlXG5cdFx0XHRpZiggL15bYS16QS1aXVtcXHc6Li1dKiQvLnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdFx0Ly8gRmluZCB0aGUgc2xpZGUgd2l0aCB0aGUgc3BlY2lmaWVkIElEXG5cdFx0XHRcdGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbmFtZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggZWxlbWVudCApIHtcblx0XHRcdFx0Ly8gRmluZCB0aGUgcG9zaXRpb24gb2YgdGhlIG5hbWVkIHNsaWRlIGFuZCBuYXZpZ2F0ZSB0byBpdFxuXHRcdFx0XHR2YXIgaW5kaWNlcyA9IFJldmVhbC5nZXRJbmRpY2VzKCBlbGVtZW50ICk7XG5cdFx0XHRcdHNsaWRlKCBpbmRpY2VzLmgsIGluZGljZXMudiApO1xuXHRcdFx0fVxuXHRcdFx0Ly8gSWYgdGhlIHNsaWRlIGRvZXNuJ3QgZXhpc3QsIG5hdmlnYXRlIHRvIHRoZSBjdXJyZW50IHNsaWRlXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c2xpZGUoIGluZGV4aCB8fCAwLCBpbmRleHYgfHwgMCApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIFJlYWQgdGhlIGluZGV4IGNvbXBvbmVudHMgb2YgdGhlIGhhc2hcblx0XHRcdHZhciBoID0gcGFyc2VJbnQoIGJpdHNbMF0sIDEwICkgfHwgMCxcblx0XHRcdFx0diA9IHBhcnNlSW50KCBiaXRzWzFdLCAxMCApIHx8IDA7XG5cblx0XHRcdGlmKCBoICE9PSBpbmRleGggfHwgdiAhPT0gaW5kZXh2ICkge1xuXHRcdFx0XHRzbGlkZSggaCwgdiApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHBhZ2UgVVJMIChoYXNoKSB0byByZWZsZWN0IHRoZSBjdXJyZW50XG5cdCAqIHN0YXRlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGVsYXkgVGhlIHRpbWUgaW4gbXMgdG8gd2FpdCBiZWZvcmVcblx0ICogd3JpdGluZyB0aGUgaGFzaFxuXHQgKi9cblx0ZnVuY3Rpb24gd3JpdGVVUkwoIGRlbGF5ICkge1xuXG5cdFx0aWYoIGNvbmZpZy5oaXN0b3J5ICkge1xuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhlcmUncyBuZXZlciBtb3JlIHRoYW4gb25lIHRpbWVvdXQgcnVubmluZ1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCB3cml0ZVVSTFRpbWVvdXQgKTtcblxuXHRcdFx0Ly8gSWYgYSBkZWxheSBpcyBzcGVjaWZpZWQsIHRpbWVvdXQgdGhpcyBjYWxsXG5cdFx0XHRpZiggdHlwZW9mIGRlbGF5ID09PSAnbnVtYmVyJyApIHtcblx0XHRcdFx0d3JpdGVVUkxUaW1lb3V0ID0gc2V0VGltZW91dCggd3JpdGVVUkwsIGRlbGF5ICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKCBjdXJyZW50U2xpZGUgKSB7XG5cdFx0XHRcdHZhciB1cmwgPSAnLyc7XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBjcmVhdGUgYSBuYW1lZCBsaW5rIGJhc2VkIG9uIHRoZSBzbGlkZSdzIElEXG5cdFx0XHRcdHZhciBpZCA9IGN1cnJlbnRTbGlkZS5nZXRBdHRyaWJ1dGUoICdpZCcgKTtcblx0XHRcdFx0aWYoIGlkICkge1xuXHRcdFx0XHRcdGlkID0gaWQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRpZCA9IGlkLnJlcGxhY2UoIC9bXmEtekEtWjAtOVxcLVxcX1xcOlxcLl0vZywgJycgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBjdXJyZW50IHNsaWRlIGhhcyBhbiBJRCwgdXNlIHRoYXQgYXMgYSBuYW1lZCBsaW5rXG5cdFx0XHRcdGlmKCB0eXBlb2YgaWQgPT09ICdzdHJpbmcnICYmIGlkLmxlbmd0aCApIHtcblx0XHRcdFx0XHR1cmwgPSAnLycgKyBpZDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBPdGhlcndpc2UgdXNlIHRoZSAvaC92IGluZGV4XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGlmKCBpbmRleGggPiAwIHx8IGluZGV4diA+IDAgKSB1cmwgKz0gaW5kZXhoO1xuXHRcdFx0XHRcdGlmKCBpbmRleHYgPiAwICkgdXJsICs9ICcvJyArIGluZGV4djtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgaC92IGxvY2F0aW9uIG9mIHRoZSBjdXJyZW50LCBvciBzcGVjaWZpZWQsXG5cdCAqIHNsaWRlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBzbGlkZSBJZiBzcGVjaWZpZWQsIHRoZSByZXR1cm5lZFxuXHQgKiBpbmRleCB3aWxsIGJlIGZvciB0aGlzIHNsaWRlIHJhdGhlciB0aGFuIHRoZSBjdXJyZW50bHlcblx0ICogYWN0aXZlIG9uZVxuXHQgKlxuXHQgKiBAcmV0dXJuIHtPYmplY3R9IHsgaDogPGludD4sIHY6IDxpbnQ+LCBmOiA8aW50PiB9XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRJbmRpY2VzKCBzbGlkZSApIHtcblxuXHRcdC8vIEJ5IGRlZmF1bHQsIHJldHVybiB0aGUgY3VycmVudCBpbmRpY2VzXG5cdFx0dmFyIGggPSBpbmRleGgsXG5cdFx0XHR2ID0gaW5kZXh2LFxuXHRcdFx0ZjtcblxuXHRcdC8vIElmIGEgc2xpZGUgaXMgc3BlY2lmaWVkLCByZXR1cm4gdGhlIGluZGljZXMgb2YgdGhhdCBzbGlkZVxuXHRcdGlmKCBzbGlkZSApIHtcblx0XHRcdHZhciBpc1ZlcnRpY2FsID0gaXNWZXJ0aWNhbFNsaWRlKCBzbGlkZSApO1xuXHRcdFx0dmFyIHNsaWRlaCA9IGlzVmVydGljYWwgPyBzbGlkZS5wYXJlbnROb2RlIDogc2xpZGU7XG5cblx0XHRcdC8vIFNlbGVjdCBhbGwgaG9yaXpvbnRhbCBzbGlkZXNcblx0XHRcdHZhciBob3Jpem9udGFsU2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApO1xuXG5cdFx0XHQvLyBOb3cgdGhhdCB3ZSBrbm93IHdoaWNoIHRoZSBob3Jpem9udGFsIHNsaWRlIGlzLCBnZXQgaXRzIGluZGV4XG5cdFx0XHRoID0gTWF0aC5tYXgoIGhvcml6b250YWxTbGlkZXMuaW5kZXhPZiggc2xpZGVoICksIDAgKTtcblxuXHRcdFx0Ly8gQXNzdW1lIHdlJ3JlIG5vdCB2ZXJ0aWNhbFxuXHRcdFx0diA9IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHZlcnRpY2FsIHNsaWRlLCBncmFiIHRoZSB2ZXJ0aWNhbCBpbmRleFxuXHRcdFx0aWYoIGlzVmVydGljYWwgKSB7XG5cdFx0XHRcdHYgPSBNYXRoLm1heCggdG9BcnJheSggc2xpZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKSApLmluZGV4T2YoIHNsaWRlICksIDAgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiggIXNsaWRlICYmIGN1cnJlbnRTbGlkZSApIHtcblx0XHRcdHZhciBoYXNGcmFnbWVudHMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKS5sZW5ndGggPiAwO1xuXHRcdFx0aWYoIGhhc0ZyYWdtZW50cyApIHtcblx0XHRcdFx0dmFyIGN1cnJlbnRGcmFnbWVudCA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yKCAnLmN1cnJlbnQtZnJhZ21lbnQnICk7XG5cdFx0XHRcdGlmKCBjdXJyZW50RnJhZ21lbnQgJiYgY3VycmVudEZyYWdtZW50Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICkgKSB7XG5cdFx0XHRcdFx0ZiA9IHBhcnNlSW50KCBjdXJyZW50RnJhZ21lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSwgMTAgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRmID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQudmlzaWJsZScgKS5sZW5ndGggLSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHsgaDogaCwgdjogdiwgZjogZiB9O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygc2xpZGVzIGluIHRoaXMgcHJlc2VudGF0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0VG90YWxTbGlkZXMoKSB7XG5cblx0XHRyZXR1cm4gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICsgJzpub3QoLnN0YWNrKScgKS5sZW5ndGg7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBzbGlkZSBlbGVtZW50IG1hdGNoaW5nIHRoZSBzcGVjaWZpZWQgaW5kZXguXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRTbGlkZSggeCwgeSApIHtcblxuXHRcdHZhciBob3Jpem9udGFsU2xpZGUgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApWyB4IF07XG5cdFx0dmFyIHZlcnRpY2FsU2xpZGVzID0gaG9yaXpvbnRhbFNsaWRlICYmIGhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKTtcblxuXHRcdGlmKCB2ZXJ0aWNhbFNsaWRlcyAmJiB2ZXJ0aWNhbFNsaWRlcy5sZW5ndGggJiYgdHlwZW9mIHkgPT09ICdudW1iZXInICkge1xuXHRcdFx0cmV0dXJuIHZlcnRpY2FsU2xpZGVzID8gdmVydGljYWxTbGlkZXNbIHkgXSA6IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gaG9yaXpvbnRhbFNsaWRlO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYmFja2dyb3VuZCBlbGVtZW50IGZvciB0aGUgZ2l2ZW4gc2xpZGUuXG5cdCAqIEFsbCBzbGlkZXMsIGV2ZW4gdGhlIG9uZXMgd2l0aCBubyBiYWNrZ3JvdW5kIHByb3BlcnRpZXNcblx0ICogZGVmaW5lZCwgaGF2ZSBhIGJhY2tncm91bmQgZWxlbWVudCBzbyBhcyBsb25nIGFzIHRoZVxuXHQgKiBpbmRleCBpcyB2YWxpZCBhbiBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRTbGlkZUJhY2tncm91bmQoIHgsIHkgKSB7XG5cblx0XHQvLyBXaGVuIHByaW50aW5nIHRvIFBERiB0aGUgc2xpZGUgYmFja2dyb3VuZHMgYXJlIG5lc3RlZFxuXHRcdC8vIGluc2lkZSBvZiB0aGUgc2xpZGVzXG5cdFx0aWYoIGlzUHJpbnRpbmdQREYoKSApIHtcblx0XHRcdHZhciBzbGlkZSA9IGdldFNsaWRlKCB4LCB5ICk7XG5cdFx0XHRpZiggc2xpZGUgKSB7XG5cdFx0XHRcdHZhciBiYWNrZ3JvdW5kID0gc2xpZGUucXVlcnlTZWxlY3RvciggJy5zbGlkZS1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0XHRpZiggYmFja2dyb3VuZCAmJiBiYWNrZ3JvdW5kLnBhcmVudE5vZGUgPT09IHNsaWRlICkge1xuXHRcdFx0XHRcdHJldHVybiBiYWNrZ3JvdW5kO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0dmFyIGhvcml6b250YWxCYWNrZ3JvdW5kID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggJy5iYWNrZ3JvdW5kcz4uc2xpZGUtYmFja2dyb3VuZCcgKVsgeCBdO1xuXHRcdHZhciB2ZXJ0aWNhbEJhY2tncm91bmRzID0gaG9yaXpvbnRhbEJhY2tncm91bmQgJiYgaG9yaXpvbnRhbEJhY2tncm91bmQucXVlcnlTZWxlY3RvckFsbCggJy5zbGlkZS1iYWNrZ3JvdW5kJyApO1xuXG5cdFx0aWYoIHZlcnRpY2FsQmFja2dyb3VuZHMgJiYgdmVydGljYWxCYWNrZ3JvdW5kcy5sZW5ndGggJiYgdHlwZW9mIHkgPT09ICdudW1iZXInICkge1xuXHRcdFx0cmV0dXJuIHZlcnRpY2FsQmFja2dyb3VuZHMgPyB2ZXJ0aWNhbEJhY2tncm91bmRzWyB5IF0gOiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhvcml6b250YWxCYWNrZ3JvdW5kO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBwcmVzZW50YXRpb24gYXNcblx0ICogYW4gb2JqZWN0LiBUaGlzIHN0YXRlIGNhbiB0aGVuIGJlIHJlc3RvcmVkIGF0IGFueVxuXHQgKiB0aW1lLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG5cblx0XHR2YXIgaW5kaWNlcyA9IGdldEluZGljZXMoKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRpbmRleGg6IGluZGljZXMuaCxcblx0XHRcdGluZGV4djogaW5kaWNlcy52LFxuXHRcdFx0aW5kZXhmOiBpbmRpY2VzLmYsXG5cdFx0XHRwYXVzZWQ6IGlzUGF1c2VkKCksXG5cdFx0XHRvdmVydmlldzogaXNPdmVydmlldygpXG5cdFx0fTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlc3RvcmVzIHRoZSBwcmVzZW50YXRpb24gdG8gdGhlIGdpdmVuIHN0YXRlLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgQXMgZ2VuZXJhdGVkIGJ5IGdldFN0YXRlKClcblx0ICovXG5cdGZ1bmN0aW9uIHNldFN0YXRlKCBzdGF0ZSApIHtcblxuXHRcdGlmKCB0eXBlb2Ygc3RhdGUgPT09ICdvYmplY3QnICkge1xuXHRcdFx0c2xpZGUoIGRlc2VyaWFsaXplKCBzdGF0ZS5pbmRleGggKSwgZGVzZXJpYWxpemUoIHN0YXRlLmluZGV4diApLCBkZXNlcmlhbGl6ZSggc3RhdGUuaW5kZXhmICkgKTtcblxuXHRcdFx0dmFyIHBhdXNlZEZsYWcgPSBkZXNlcmlhbGl6ZSggc3RhdGUucGF1c2VkICksXG5cdFx0XHRcdG92ZXJ2aWV3RmxhZyA9IGRlc2VyaWFsaXplKCBzdGF0ZS5vdmVydmlldyApO1xuXG5cdFx0XHRpZiggdHlwZW9mIHBhdXNlZEZsYWcgPT09ICdib29sZWFuJyAmJiBwYXVzZWRGbGFnICE9PSBpc1BhdXNlZCgpICkge1xuXHRcdFx0XHR0b2dnbGVQYXVzZSggcGF1c2VkRmxhZyApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggdHlwZW9mIG92ZXJ2aWV3RmxhZyA9PT0gJ2Jvb2xlYW4nICYmIG92ZXJ2aWV3RmxhZyAhPT0gaXNPdmVydmlldygpICkge1xuXHRcdFx0XHR0b2dnbGVPdmVydmlldyggb3ZlcnZpZXdGbGFnICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgc29ydGVkIGZyYWdtZW50cyBsaXN0LCBvcmRlcmVkIGJ5IGFuIGluY3JlYXNpbmdcblx0ICogXCJkYXRhLWZyYWdtZW50LWluZGV4XCIgYXR0cmlidXRlLlxuXHQgKlxuXHQgKiBGcmFnbWVudHMgd2lsbCBiZSByZXZlYWxlZCBpbiB0aGUgb3JkZXIgdGhhdCB0aGV5IGFyZSByZXR1cm5lZCBieVxuXHQgKiB0aGlzIGZ1bmN0aW9uLCBzbyB5b3UgY2FuIHVzZSB0aGUgaW5kZXggYXR0cmlidXRlcyB0byBjb250cm9sIHRoZVxuXHQgKiBvcmRlciBvZiBmcmFnbWVudCBhcHBlYXJhbmNlLlxuXHQgKlxuXHQgKiBUbyBtYWludGFpbiBhIHNlbnNpYmxlIGRlZmF1bHQgZnJhZ21lbnQgb3JkZXIsIGZyYWdtZW50cyBhcmUgcHJlc3VtZWRcblx0ICogdG8gYmUgcGFzc2VkIGluIGRvY3VtZW50IG9yZGVyLiBUaGlzIGZ1bmN0aW9uIGFkZHMgYSBcImZyYWdtZW50LWluZGV4XCJcblx0ICogYXR0cmlidXRlIHRvIGVhY2ggbm9kZSBpZiBzdWNoIGFuIGF0dHJpYnV0ZSBpcyBub3QgYWxyZWFkeSBwcmVzZW50LFxuXHQgKiBhbmQgc2V0cyB0aGF0IGF0dHJpYnV0ZSB0byBhbiBpbnRlZ2VyIHZhbHVlIHdoaWNoIGlzIHRoZSBwb3NpdGlvbiBvZlxuXHQgKiB0aGUgZnJhZ21lbnQgd2l0aGluIHRoZSBmcmFnbWVudHMgbGlzdC5cblx0ICovXG5cdGZ1bmN0aW9uIHNvcnRGcmFnbWVudHMoIGZyYWdtZW50cyApIHtcblxuXHRcdGZyYWdtZW50cyA9IHRvQXJyYXkoIGZyYWdtZW50cyApO1xuXG5cdFx0dmFyIG9yZGVyZWQgPSBbXSxcblx0XHRcdHVub3JkZXJlZCA9IFtdLFxuXHRcdFx0c29ydGVkID0gW107XG5cblx0XHQvLyBHcm91cCBvcmRlcmVkIGFuZCB1bm9yZGVyZWQgZWxlbWVudHNcblx0XHRmcmFnbWVudHMuZm9yRWFjaCggZnVuY3Rpb24oIGZyYWdtZW50LCBpICkge1xuXHRcdFx0aWYoIGZyYWdtZW50Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICkgKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KCBmcmFnbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApLCAxMCApO1xuXG5cdFx0XHRcdGlmKCAhb3JkZXJlZFtpbmRleF0gKSB7XG5cdFx0XHRcdFx0b3JkZXJlZFtpbmRleF0gPSBbXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG9yZGVyZWRbaW5kZXhdLnB1c2goIGZyYWdtZW50ICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dW5vcmRlcmVkLnB1c2goIFsgZnJhZ21lbnQgXSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIEFwcGVuZCBmcmFnbWVudHMgd2l0aG91dCBleHBsaWNpdCBpbmRpY2VzIGluIHRoZWlyXG5cdFx0Ly8gRE9NIG9yZGVyXG5cdFx0b3JkZXJlZCA9IG9yZGVyZWQuY29uY2F0KCB1bm9yZGVyZWQgKTtcblxuXHRcdC8vIE1hbnVhbGx5IGNvdW50IHRoZSBpbmRleCB1cCBwZXIgZ3JvdXAgdG8gZW5zdXJlIHRoZXJlXG5cdFx0Ly8gYXJlIG5vIGdhcHNcblx0XHR2YXIgaW5kZXggPSAwO1xuXG5cdFx0Ly8gUHVzaCBhbGwgZnJhZ21lbnRzIGluIHRoZWlyIHNvcnRlZCBvcmRlciB0byBhbiBhcnJheSxcblx0XHQvLyB0aGlzIGZsYXR0ZW5zIHRoZSBncm91cHNcblx0XHRvcmRlcmVkLmZvckVhY2goIGZ1bmN0aW9uKCBncm91cCApIHtcblx0XHRcdGdyb3VwLmZvckVhY2goIGZ1bmN0aW9uKCBmcmFnbWVudCApIHtcblx0XHRcdFx0c29ydGVkLnB1c2goIGZyYWdtZW50ICk7XG5cdFx0XHRcdGZyYWdtZW50LnNldEF0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnLCBpbmRleCApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHRpbmRleCArKztcblx0XHR9ICk7XG5cblx0XHRyZXR1cm4gc29ydGVkO1xuXG5cdH1cblxuXHQvKipcblx0ICogTmF2aWdhdGUgdG8gdGhlIHNwZWNpZmllZCBzbGlkZSBmcmFnbWVudC5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgZnJhZ21lbnQgdGhhdFxuXHQgKiBzaG91bGQgYmUgc2hvd24sIC0xIG1lYW5zIGFsbCBhcmUgaW52aXNpYmxlXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgSW50ZWdlciBvZmZzZXQgdG8gYXBwbHkgdG8gdGhlXG5cdCAqIGZyYWdtZW50IGluZGV4XG5cdCAqXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgYSBjaGFuZ2Ugd2FzIG1hZGUgaW4gYW55XG5cdCAqIGZyYWdtZW50cyB2aXNpYmlsaXR5IGFzIHBhcnQgb2YgdGhpcyBjYWxsXG5cdCAqL1xuXHRmdW5jdGlvbiBuYXZpZ2F0ZUZyYWdtZW50KCBpbmRleCwgb2Zmc2V0ICkge1xuXG5cdFx0aWYoIGN1cnJlbnRTbGlkZSAmJiBjb25maWcuZnJhZ21lbnRzICkge1xuXG5cdFx0XHR2YXIgZnJhZ21lbnRzID0gc29ydEZyYWdtZW50cyggY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICkgKTtcblx0XHRcdGlmKCBmcmFnbWVudHMubGVuZ3RoICkge1xuXG5cdFx0XHRcdC8vIElmIG5vIGluZGV4IGlzIHNwZWNpZmllZCwgZmluZCB0aGUgY3VycmVudFxuXHRcdFx0XHRpZiggdHlwZW9mIGluZGV4ICE9PSAnbnVtYmVyJyApIHtcblx0XHRcdFx0XHR2YXIgbGFzdFZpc2libGVGcmFnbWVudCA9IHNvcnRGcmFnbWVudHMoIGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50LnZpc2libGUnICkgKS5wb3AoKTtcblxuXHRcdFx0XHRcdGlmKCBsYXN0VmlzaWJsZUZyYWdtZW50ICkge1xuXHRcdFx0XHRcdFx0aW5kZXggPSBwYXJzZUludCggbGFzdFZpc2libGVGcmFnbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApIHx8IDAsIDEwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0aW5kZXggPSAtMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiBhbiBvZmZzZXQgaXMgc3BlY2lmaWVkLCBhcHBseSBpdCB0byB0aGUgaW5kZXhcblx0XHRcdFx0aWYoIHR5cGVvZiBvZmZzZXQgPT09ICdudW1iZXInICkge1xuXHRcdFx0XHRcdGluZGV4ICs9IG9mZnNldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciBmcmFnbWVudHNTaG93biA9IFtdLFxuXHRcdFx0XHRcdGZyYWdtZW50c0hpZGRlbiA9IFtdO1xuXG5cdFx0XHRcdHRvQXJyYXkoIGZyYWdtZW50cyApLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtZW50LCBpICkge1xuXG5cdFx0XHRcdFx0aWYoIGVsZW1lbnQuaGFzQXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSApIHtcblx0XHRcdFx0XHRcdGkgPSBwYXJzZUludCggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApLCAxMCApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFZpc2libGUgZnJhZ21lbnRzXG5cdFx0XHRcdFx0aWYoIGkgPD0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRpZiggIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAndmlzaWJsZScgKSApIGZyYWdtZW50c1Nob3duLnB1c2goIGVsZW1lbnQgKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdjdXJyZW50LWZyYWdtZW50JyApO1xuXG5cdFx0XHRcdFx0XHQvLyBBbm5vdW5jZSB0aGUgZnJhZ21lbnRzIG9uZSBieSBvbmUgdG8gdGhlIFNjcmVlbiBSZWFkZXJcblx0XHRcdFx0XHRcdGRvbS5zdGF0dXNEaXYudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXG5cdFx0XHRcdFx0XHRpZiggaSA9PT0gaW5kZXggKSB7XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2N1cnJlbnQtZnJhZ21lbnQnICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIEhpZGRlbiBmcmFnbWVudHNcblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGlmKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3Zpc2libGUnICkgKSBmcmFnbWVudHNIaWRkZW4ucHVzaCggZWxlbWVudCApO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAndmlzaWJsZScgKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2N1cnJlbnQtZnJhZ21lbnQnICk7XG5cdFx0XHRcdFx0fVxuXG5cblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdGlmKCBmcmFnbWVudHNIaWRkZW4ubGVuZ3RoICkge1xuXHRcdFx0XHRcdGRpc3BhdGNoRXZlbnQoICdmcmFnbWVudGhpZGRlbicsIHsgZnJhZ21lbnQ6IGZyYWdtZW50c0hpZGRlblswXSwgZnJhZ21lbnRzOiBmcmFnbWVudHNIaWRkZW4gfSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIGZyYWdtZW50c1Nob3duLmxlbmd0aCApIHtcblx0XHRcdFx0XHRkaXNwYXRjaEV2ZW50KCAnZnJhZ21lbnRzaG93bicsIHsgZnJhZ21lbnQ6IGZyYWdtZW50c1Nob3duWzBdLCBmcmFnbWVudHM6IGZyYWdtZW50c1Nob3duIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHVwZGF0ZUNvbnRyb2xzKCk7XG5cdFx0XHRcdHVwZGF0ZVByb2dyZXNzKCk7XG5cblx0XHRcdFx0cmV0dXJuICEhKCBmcmFnbWVudHNTaG93bi5sZW5ndGggfHwgZnJhZ21lbnRzSGlkZGVuLmxlbmd0aCApO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBOYXZpZ2F0ZSB0byB0aGUgbmV4dCBzbGlkZSBmcmFnbWVudC5cblx0ICpcblx0ICogQHJldHVybiB7Qm9vbGVhbn0gdHJ1ZSBpZiB0aGVyZSB3YXMgYSBuZXh0IGZyYWdtZW50LFxuXHQgKiBmYWxzZSBvdGhlcndpc2Vcblx0ICovXG5cdGZ1bmN0aW9uIG5leHRGcmFnbWVudCgpIHtcblxuXHRcdHJldHVybiBuYXZpZ2F0ZUZyYWdtZW50KCBudWxsLCAxICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBOYXZpZ2F0ZSB0byB0aGUgcHJldmlvdXMgc2xpZGUgZnJhZ21lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlcmUgd2FzIGEgcHJldmlvdXMgZnJhZ21lbnQsXG5cdCAqIGZhbHNlIG90aGVyd2lzZVxuXHQgKi9cblx0ZnVuY3Rpb24gcHJldmlvdXNGcmFnbWVudCgpIHtcblxuXHRcdHJldHVybiBuYXZpZ2F0ZUZyYWdtZW50KCBudWxsLCAtMSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ3VlcyBhIG5ldyBhdXRvbWF0ZWQgc2xpZGUgaWYgZW5hYmxlZCBpbiB0aGUgY29uZmlnLlxuXHQgKi9cblx0ZnVuY3Rpb24gY3VlQXV0b1NsaWRlKCkge1xuXG5cdFx0Y2FuY2VsQXV0b1NsaWRlKCk7XG5cblx0XHRpZiggY3VycmVudFNsaWRlICkge1xuXG5cdFx0XHR2YXIgY3VycmVudEZyYWdtZW50ID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3IoICcuY3VycmVudC1mcmFnbWVudCcgKTtcblxuXHRcdFx0dmFyIGZyYWdtZW50QXV0b1NsaWRlID0gY3VycmVudEZyYWdtZW50ID8gY3VycmVudEZyYWdtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtYXV0b3NsaWRlJyApIDogbnVsbDtcblx0XHRcdHZhciBwYXJlbnRBdXRvU2xpZGUgPSBjdXJyZW50U2xpZGUucGFyZW50Tm9kZSA/IGN1cnJlbnRTbGlkZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYXV0b3NsaWRlJyApIDogbnVsbDtcblx0XHRcdHZhciBzbGlkZUF1dG9TbGlkZSA9IGN1cnJlbnRTbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWF1dG9zbGlkZScgKTtcblxuXHRcdFx0Ly8gUGljayB2YWx1ZSBpbiB0aGUgZm9sbG93aW5nIHByaW9yaXR5IG9yZGVyOlxuXHRcdFx0Ly8gMS4gQ3VycmVudCBmcmFnbWVudCdzIGRhdGEtYXV0b3NsaWRlXG5cdFx0XHQvLyAyLiBDdXJyZW50IHNsaWRlJ3MgZGF0YS1hdXRvc2xpZGVcblx0XHRcdC8vIDMuIFBhcmVudCBzbGlkZSdzIGRhdGEtYXV0b3NsaWRlXG5cdFx0XHQvLyA0LiBHbG9iYWwgYXV0b1NsaWRlIHNldHRpbmdcblx0XHRcdGlmKCBmcmFnbWVudEF1dG9TbGlkZSApIHtcblx0XHRcdFx0YXV0b1NsaWRlID0gcGFyc2VJbnQoIGZyYWdtZW50QXV0b1NsaWRlLCAxMCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggc2xpZGVBdXRvU2xpZGUgKSB7XG5cdFx0XHRcdGF1dG9TbGlkZSA9IHBhcnNlSW50KCBzbGlkZUF1dG9TbGlkZSwgMTAgKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoIHBhcmVudEF1dG9TbGlkZSApIHtcblx0XHRcdFx0YXV0b1NsaWRlID0gcGFyc2VJbnQoIHBhcmVudEF1dG9TbGlkZSwgMTAgKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRhdXRvU2xpZGUgPSBjb25maWcuYXV0b1NsaWRlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSBhcmUgbWVkaWEgZWxlbWVudHMgd2l0aCBkYXRhLWF1dG9wbGF5LFxuXHRcdFx0Ly8gYXV0b21hdGljYWxseSBzZXQgdGhlIGF1dG9TbGlkZSBkdXJhdGlvbiB0byB0aGVcblx0XHRcdC8vIGxlbmd0aCBvZiB0aGF0IG1lZGlhLiBOb3QgYXBwbGljYWJsZSBpZiB0aGUgc2xpZGVcblx0XHRcdC8vIGlzIGRpdmlkZWQgdXAgaW50byBmcmFnbWVudHMuXG5cdFx0XHRpZiggY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICkubGVuZ3RoID09PSAwICkge1xuXHRcdFx0XHR0b0FycmF5KCBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3ZpZGVvLCBhdWRpbycgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0XHRpZiggZWwuaGFzQXR0cmlidXRlKCAnZGF0YS1hdXRvcGxheScgKSApIHtcblx0XHRcdFx0XHRcdGlmKCBhdXRvU2xpZGUgJiYgZWwuZHVyYXRpb24gKiAxMDAwID4gYXV0b1NsaWRlICkge1xuXHRcdFx0XHRcdFx0XHRhdXRvU2xpZGUgPSAoIGVsLmR1cmF0aW9uICogMTAwMCApICsgMTAwMDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ3VlIHRoZSBuZXh0IGF1dG8tc2xpZGUgaWY6XG5cdFx0XHQvLyAtIFRoZXJlIGlzIGFuIGF1dG9TbGlkZSB2YWx1ZVxuXHRcdFx0Ly8gLSBBdXRvLXNsaWRpbmcgaXNuJ3QgcGF1c2VkIGJ5IHRoZSB1c2VyXG5cdFx0XHQvLyAtIFRoZSBwcmVzZW50YXRpb24gaXNuJ3QgcGF1c2VkXG5cdFx0XHQvLyAtIFRoZSBvdmVydmlldyBpc24ndCBhY3RpdmVcblx0XHRcdC8vIC0gVGhlIHByZXNlbnRhdGlvbiBpc24ndCBvdmVyXG5cdFx0XHRpZiggYXV0b1NsaWRlICYmICFhdXRvU2xpZGVQYXVzZWQgJiYgIWlzUGF1c2VkKCkgJiYgIWlzT3ZlcnZpZXcoKSAmJiAoICFSZXZlYWwuaXNMYXN0U2xpZGUoKSB8fCBhdmFpbGFibGVGcmFnbWVudHMoKS5uZXh0IHx8IGNvbmZpZy5sb29wID09PSB0cnVlICkgKSB7XG5cdFx0XHRcdGF1dG9TbGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCBuYXZpZ2F0ZU5leHQsIGF1dG9TbGlkZSApO1xuXHRcdFx0XHRhdXRvU2xpZGVTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiggYXV0b1NsaWRlUGxheWVyICkge1xuXHRcdFx0XHRhdXRvU2xpZGVQbGF5ZXIuc2V0UGxheWluZyggYXV0b1NsaWRlVGltZW91dCAhPT0gLTEgKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENhbmNlbHMgYW55IG9uZ29pbmcgcmVxdWVzdCB0byBhdXRvLXNsaWRlLlxuXHQgKi9cblx0ZnVuY3Rpb24gY2FuY2VsQXV0b1NsaWRlKCkge1xuXG5cdFx0Y2xlYXJUaW1lb3V0KCBhdXRvU2xpZGVUaW1lb3V0ICk7XG5cdFx0YXV0b1NsaWRlVGltZW91dCA9IC0xO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBwYXVzZUF1dG9TbGlkZSgpIHtcblxuXHRcdGlmKCBhdXRvU2xpZGUgJiYgIWF1dG9TbGlkZVBhdXNlZCApIHtcblx0XHRcdGF1dG9TbGlkZVBhdXNlZCA9IHRydWU7XG5cdFx0XHRkaXNwYXRjaEV2ZW50KCAnYXV0b3NsaWRlcGF1c2VkJyApO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KCBhdXRvU2xpZGVUaW1lb3V0ICk7XG5cblx0XHRcdGlmKCBhdXRvU2xpZGVQbGF5ZXIgKSB7XG5cdFx0XHRcdGF1dG9TbGlkZVBsYXllci5zZXRQbGF5aW5nKCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gcmVzdW1lQXV0b1NsaWRlKCkge1xuXG5cdFx0aWYoIGF1dG9TbGlkZSAmJiBhdXRvU2xpZGVQYXVzZWQgKSB7XG5cdFx0XHRhdXRvU2xpZGVQYXVzZWQgPSBmYWxzZTtcblx0XHRcdGRpc3BhdGNoRXZlbnQoICdhdXRvc2xpZGVyZXN1bWVkJyApO1xuXHRcdFx0Y3VlQXV0b1NsaWRlKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBuYXZpZ2F0ZUxlZnQoKSB7XG5cblx0XHQvLyBSZXZlcnNlIGZvciBSVExcblx0XHRpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdGlmKCAoIGlzT3ZlcnZpZXcoKSB8fCBuZXh0RnJhZ21lbnQoKSA9PT0gZmFsc2UgKSAmJiBhdmFpbGFibGVSb3V0ZXMoKS5sZWZ0ICkge1xuXHRcdFx0XHRzbGlkZSggaW5kZXhoICsgMSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOb3JtYWwgbmF2aWdhdGlvblxuXHRcdGVsc2UgaWYoICggaXNPdmVydmlldygpIHx8IHByZXZpb3VzRnJhZ21lbnQoKSA9PT0gZmFsc2UgKSAmJiBhdmFpbGFibGVSb3V0ZXMoKS5sZWZ0ICkge1xuXHRcdFx0c2xpZGUoIGluZGV4aCAtIDEgKTtcblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG5hdmlnYXRlUmlnaHQoKSB7XG5cblx0XHQvLyBSZXZlcnNlIGZvciBSVExcblx0XHRpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdGlmKCAoIGlzT3ZlcnZpZXcoKSB8fCBwcmV2aW91c0ZyYWdtZW50KCkgPT09IGZhbHNlICkgJiYgYXZhaWxhYmxlUm91dGVzKCkucmlnaHQgKSB7XG5cdFx0XHRcdHNsaWRlKCBpbmRleGggLSAxICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE5vcm1hbCBuYXZpZ2F0aW9uXG5cdFx0ZWxzZSBpZiggKCBpc092ZXJ2aWV3KCkgfHwgbmV4dEZyYWdtZW50KCkgPT09IGZhbHNlICkgJiYgYXZhaWxhYmxlUm91dGVzKCkucmlnaHQgKSB7XG5cdFx0XHRzbGlkZSggaW5kZXhoICsgMSApO1xuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gbmF2aWdhdGVVcCgpIHtcblxuXHRcdC8vIFByaW9yaXRpemUgaGlkaW5nIGZyYWdtZW50c1xuXHRcdGlmKCAoIGlzT3ZlcnZpZXcoKSB8fCBwcmV2aW91c0ZyYWdtZW50KCkgPT09IGZhbHNlICkgJiYgYXZhaWxhYmxlUm91dGVzKCkudXAgKSB7XG5cdFx0XHRzbGlkZSggaW5kZXhoLCBpbmRleHYgLSAxICk7XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBuYXZpZ2F0ZURvd24oKSB7XG5cblx0XHQvLyBQcmlvcml0aXplIHJldmVhbGluZyBmcmFnbWVudHNcblx0XHRpZiggKCBpc092ZXJ2aWV3KCkgfHwgbmV4dEZyYWdtZW50KCkgPT09IGZhbHNlICkgJiYgYXZhaWxhYmxlUm91dGVzKCkuZG93biApIHtcblx0XHRcdHNsaWRlKCBpbmRleGgsIGluZGV4diArIDEgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBOYXZpZ2F0ZXMgYmFja3dhcmRzLCBwcmlvcml0aXplZCBpbiB0aGUgZm9sbG93aW5nIG9yZGVyOlxuXHQgKiAxKSBQcmV2aW91cyBmcmFnbWVudFxuXHQgKiAyKSBQcmV2aW91cyB2ZXJ0aWNhbCBzbGlkZVxuXHQgKiAzKSBQcmV2aW91cyBob3Jpem9udGFsIHNsaWRlXG5cdCAqL1xuXHRmdW5jdGlvbiBuYXZpZ2F0ZVByZXYoKSB7XG5cblx0XHQvLyBQcmlvcml0aXplIHJldmVhbGluZyBmcmFnbWVudHNcblx0XHRpZiggcHJldmlvdXNGcmFnbWVudCgpID09PSBmYWxzZSApIHtcblx0XHRcdGlmKCBhdmFpbGFibGVSb3V0ZXMoKS51cCApIHtcblx0XHRcdFx0bmF2aWdhdGVVcCgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdC8vIEZldGNoIHRoZSBwcmV2aW91cyBob3Jpem9udGFsIHNsaWRlLCBpZiB0aGVyZSBpcyBvbmVcblx0XHRcdFx0dmFyIHByZXZpb3VzU2xpZGU7XG5cblx0XHRcdFx0aWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHRcdFx0cHJldmlvdXNTbGlkZSA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICsgJy5mdXR1cmUnICkgKS5wb3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRwcmV2aW91c1NsaWRlID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKyAnLnBhc3QnICkgKS5wb3AoKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCBwcmV2aW91c1NsaWRlICkge1xuXHRcdFx0XHRcdHZhciB2ID0gKCBwcmV2aW91c1NsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApLmxlbmd0aCAtIDEgKSB8fCB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0dmFyIGggPSBpbmRleGggLSAxO1xuXHRcdFx0XHRcdHNsaWRlKCBoLCB2ICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgcmV2ZXJzZSBvZiAjbmF2aWdhdGVQcmV2KCkuXG5cdCAqL1xuXHRmdW5jdGlvbiBuYXZpZ2F0ZU5leHQoKSB7XG5cblx0XHQvLyBQcmlvcml0aXplIHJldmVhbGluZyBmcmFnbWVudHNcblx0XHRpZiggbmV4dEZyYWdtZW50KCkgPT09IGZhbHNlICkge1xuXHRcdFx0aWYoIGF2YWlsYWJsZVJvdXRlcygpLmRvd24gKSB7XG5cdFx0XHRcdG5hdmlnYXRlRG93bigpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdFx0bmF2aWdhdGVMZWZ0KCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bmF2aWdhdGVSaWdodCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIGF1dG8tc2xpZGluZyBpcyBlbmFibGVkIHdlIG5lZWQgdG8gY3VlIHVwXG5cdFx0Ly8gYW5vdGhlciB0aW1lb3V0XG5cdFx0Y3VlQXV0b1NsaWRlKCk7XG5cblx0fVxuXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBFVkVOVFMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXHQvKipcblx0ICogQ2FsbGVkIGJ5IGFsbCBldmVudCBoYW5kbGVycyB0aGF0IGFyZSBiYXNlZCBvbiB1c2VyXG5cdCAqIGlucHV0LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Vc2VySW5wdXQoIGV2ZW50ICkge1xuXG5cdFx0aWYoIGNvbmZpZy5hdXRvU2xpZGVTdG9wcGFibGUgKSB7XG5cdFx0XHRwYXVzZUF1dG9TbGlkZSgpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSBkb2N1bWVudCBsZXZlbCAna2V5cHJlc3MnIGV2ZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Eb2N1bWVudEtleVByZXNzKCBldmVudCApIHtcblxuXHRcdC8vIENoZWNrIGlmIHRoZSBwcmVzc2VkIGtleSBpcyBxdWVzdGlvbiBtYXJrXG5cdFx0aWYoIGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmNoYXJDb2RlID09PSA2MyApIHtcblx0XHRcdGlmKCBkb20ub3ZlcmxheSApIHtcblx0XHRcdFx0Y2xvc2VPdmVybGF5KCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c2hvd0hlbHAoIHRydWUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgZG9jdW1lbnQgbGV2ZWwgJ2tleWRvd24nIGV2ZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Eb2N1bWVudEtleURvd24oIGV2ZW50ICkge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIGNvbmRpdGlvbiBzcGVjaWZpZWQgYW5kIGl0IHJldHVybnMgZmFsc2UsXG5cdFx0Ly8gaWdub3JlIHRoaXMgZXZlbnRcblx0XHRpZiggdHlwZW9mIGNvbmZpZy5rZXlib2FyZENvbmRpdGlvbiA9PT0gJ2Z1bmN0aW9uJyAmJiBjb25maWcua2V5Ym9hcmRDb25kaXRpb24oKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBSZW1lbWJlciBpZiBhdXRvLXNsaWRpbmcgd2FzIHBhdXNlZCBzbyB3ZSBjYW4gdG9nZ2xlIGl0XG5cdFx0dmFyIGF1dG9TbGlkZVdhc1BhdXNlZCA9IGF1dG9TbGlkZVBhdXNlZDtcblxuXHRcdG9uVXNlcklucHV0KCBldmVudCApO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlcmUncyBhIGZvY3VzZWQgZWxlbWVudCB0aGF0IGNvdWxkIGJlIHVzaW5nXG5cdFx0Ly8gdGhlIGtleWJvYXJkXG5cdFx0dmFyIGFjdGl2ZUVsZW1lbnRJc0NFID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSAhPT0gJ2luaGVyaXQnO1xuXHRcdHZhciBhY3RpdmVFbGVtZW50SXNJbnB1dCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50YWdOYW1lICYmIC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZSApO1xuXG5cdFx0Ly8gRGlzcmVnYXJkIHRoZSBldmVudCBpZiB0aGVyZSdzIGEgZm9jdXNlZCBlbGVtZW50IG9yIGFcblx0XHQvLyBrZXlib2FyZCBtb2RpZmllciBrZXkgaXMgcHJlc2VudFxuXHRcdGlmKCBhY3RpdmVFbGVtZW50SXNDRSB8fCBhY3RpdmVFbGVtZW50SXNJbnB1dCB8fCAoZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQua2V5Q29kZSAhPT0gMzIpIHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50Lm1ldGFLZXkgKSByZXR1cm47XG5cblx0XHQvLyBXaGlsZSBwYXVzZWQgb25seSBhbGxvdyBcInVucGF1c2luZ1wiIGtleWJvYXJkIGV2ZW50cyAoYiBhbmQgLilcblx0XHRpZiggaXNQYXVzZWQoKSAmJiBbNjYsMTkwLDE5MV0uaW5kZXhPZiggZXZlbnQua2V5Q29kZSApID09PSAtMSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHR2YXIgdHJpZ2dlcmVkID0gZmFsc2U7XG5cblx0XHQvLyAxLiBVc2VyIGRlZmluZWQga2V5IGJpbmRpbmdzXG5cdFx0aWYoIHR5cGVvZiBjb25maWcua2V5Ym9hcmQgPT09ICdvYmplY3QnICkge1xuXG5cdFx0XHRmb3IoIHZhciBrZXkgaW4gY29uZmlnLmtleWJvYXJkICkge1xuXG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoaXMgYmluZGluZyBtYXRjaGVzIHRoZSBwcmVzc2VkIGtleVxuXHRcdFx0XHRpZiggcGFyc2VJbnQoIGtleSwgMTAgKSA9PT0gZXZlbnQua2V5Q29kZSApIHtcblxuXHRcdFx0XHRcdHZhciB2YWx1ZSA9IGNvbmZpZy5rZXlib2FyZFsga2V5IF07XG5cblx0XHRcdFx0XHQvLyBDYWxsYmFjayBmdW5jdGlvblxuXHRcdFx0XHRcdGlmKCB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0XHR2YWx1ZS5hcHBseSggbnVsbCwgWyBldmVudCBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIFN0cmluZyBzaG9ydGN1dHMgdG8gcmV2ZWFsLmpzIEFQSVxuXHRcdFx0XHRcdGVsc2UgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIFJldmVhbFsgdmFsdWUgXSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRcdFJldmVhbFsgdmFsdWUgXS5jYWxsKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dHJpZ2dlcmVkID0gdHJ1ZTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIDIuIFN5c3RlbSBkZWZpbmVkIGtleSBiaW5kaW5nc1xuXHRcdGlmKCB0cmlnZ2VyZWQgPT09IGZhbHNlICkge1xuXG5cdFx0XHQvLyBBc3N1bWUgdHJ1ZSBhbmQgdHJ5IHRvIHByb3ZlIGZhbHNlXG5cdFx0XHR0cmlnZ2VyZWQgPSB0cnVlO1xuXG5cdFx0XHRzd2l0Y2goIGV2ZW50LmtleUNvZGUgKSB7XG5cdFx0XHRcdC8vIHAsIHBhZ2UgdXBcblx0XHRcdFx0Y2FzZSA4MDogY2FzZSAzMzogbmF2aWdhdGVQcmV2KCk7IGJyZWFrO1xuXHRcdFx0XHQvLyBuLCBwYWdlIGRvd25cblx0XHRcdFx0Y2FzZSA3ODogY2FzZSAzNDogbmF2aWdhdGVOZXh0KCk7IGJyZWFrO1xuXHRcdFx0XHQvLyBoLCBsZWZ0XG5cdFx0XHRcdGNhc2UgNzI6IGNhc2UgMzc6IG5hdmlnYXRlTGVmdCgpOyBicmVhaztcblx0XHRcdFx0Ly8gbCwgcmlnaHRcblx0XHRcdFx0Y2FzZSA3NjogY2FzZSAzOTogbmF2aWdhdGVSaWdodCgpOyBicmVhaztcblx0XHRcdFx0Ly8gaywgdXBcblx0XHRcdFx0Y2FzZSA3NTogY2FzZSAzODogbmF2aWdhdGVVcCgpOyBicmVhaztcblx0XHRcdFx0Ly8gaiwgZG93blxuXHRcdFx0XHRjYXNlIDc0OiBjYXNlIDQwOiBuYXZpZ2F0ZURvd24oKTsgYnJlYWs7XG5cdFx0XHRcdC8vIGhvbWVcblx0XHRcdFx0Y2FzZSAzNjogc2xpZGUoIDAgKTsgYnJlYWs7XG5cdFx0XHRcdC8vIGVuZFxuXHRcdFx0XHRjYXNlIDM1OiBzbGlkZSggTnVtYmVyLk1BWF9WQUxVRSApOyBicmVhaztcblx0XHRcdFx0Ly8gc3BhY2Vcblx0XHRcdFx0Y2FzZSAzMjogaXNPdmVydmlldygpID8gZGVhY3RpdmF0ZU92ZXJ2aWV3KCkgOiBldmVudC5zaGlmdEtleSA/IG5hdmlnYXRlUHJldigpIDogbmF2aWdhdGVOZXh0KCk7IGJyZWFrO1xuXHRcdFx0XHQvLyByZXR1cm5cblx0XHRcdFx0Y2FzZSAxMzogaXNPdmVydmlldygpID8gZGVhY3RpdmF0ZU92ZXJ2aWV3KCkgOiB0cmlnZ2VyZWQgPSBmYWxzZTsgYnJlYWs7XG5cdFx0XHRcdC8vIHR3by1zcG90LCBzZW1pY29sb24sIGIsIHBlcmlvZCwgTG9naXRlY2ggcHJlc2VudGVyIHRvb2xzIFwiYmxhY2sgc2NyZWVuXCIgYnV0dG9uXG5cdFx0XHRcdGNhc2UgNTg6IGNhc2UgNTk6IGNhc2UgNjY6IGNhc2UgMTkwOiBjYXNlIDE5MTogdG9nZ2xlUGF1c2UoKTsgYnJlYWs7XG5cdFx0XHRcdC8vIGZcblx0XHRcdFx0Y2FzZSA3MDogZW50ZXJGdWxsc2NyZWVuKCk7IGJyZWFrO1xuXHRcdFx0XHQvLyBhXG5cdFx0XHRcdGNhc2UgNjU6IGlmICggY29uZmlnLmF1dG9TbGlkZVN0b3BwYWJsZSApIHRvZ2dsZUF1dG9TbGlkZSggYXV0b1NsaWRlV2FzUGF1c2VkICk7IGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRyaWdnZXJlZCA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIGlucHV0IHJlc3VsdGVkIGluIGEgdHJpZ2dlcmVkIGFjdGlvbiB3ZSBzaG91bGQgcHJldmVudFxuXHRcdC8vIHRoZSBicm93c2VycyBkZWZhdWx0IGJlaGF2aW9yXG5cdFx0aWYoIHRyaWdnZXJlZCApIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHRcdC8vIEVTQyBvciBPIGtleVxuXHRcdGVsc2UgaWYgKCAoIGV2ZW50LmtleUNvZGUgPT09IDI3IHx8IGV2ZW50LmtleUNvZGUgPT09IDc5ICkgJiYgZmVhdHVyZXMudHJhbnNmb3JtczNkICkge1xuXHRcdFx0aWYoIGRvbS5vdmVybGF5ICkge1xuXHRcdFx0XHRjbG9zZU92ZXJsYXkoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0b2dnbGVPdmVydmlldygpO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdC8vIElmIGF1dG8tc2xpZGluZyBpcyBlbmFibGVkIHdlIG5lZWQgdG8gY3VlIHVwXG5cdFx0Ly8gYW5vdGhlciB0aW1lb3V0XG5cdFx0Y3VlQXV0b1NsaWRlKCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgJ3RvdWNoc3RhcnQnIGV2ZW50LCBlbmFibGVzIHN1cHBvcnQgZm9yXG5cdCAqIHN3aXBlIGFuZCBwaW5jaCBnZXN0dXJlcy5cblx0ICovXG5cdGZ1bmN0aW9uIG9uVG91Y2hTdGFydCggZXZlbnQgKSB7XG5cblx0XHR0b3VjaC5zdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG5cdFx0dG91Y2guc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuXHRcdHRvdWNoLnN0YXJ0Q291bnQgPSBldmVudC50b3VjaGVzLmxlbmd0aDtcblxuXHRcdC8vIElmIHRoZXJlJ3MgdHdvIHRvdWNoZXMgd2UgbmVlZCB0byBtZW1vcml6ZSB0aGUgZGlzdGFuY2Vcblx0XHQvLyBiZXR3ZWVuIHRob3NlIHR3byBwb2ludHMgdG8gZGV0ZWN0IHBpbmNoaW5nXG5cdFx0aWYoIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAyICYmIGNvbmZpZy5vdmVydmlldyApIHtcblx0XHRcdHRvdWNoLnN0YXJ0U3BhbiA9IGRpc3RhbmNlQmV0d2Vlbigge1xuXHRcdFx0XHR4OiBldmVudC50b3VjaGVzWzFdLmNsaWVudFgsXG5cdFx0XHRcdHk6IGV2ZW50LnRvdWNoZXNbMV0uY2xpZW50WVxuXHRcdFx0fSwge1xuXHRcdFx0XHR4OiB0b3VjaC5zdGFydFgsXG5cdFx0XHRcdHk6IHRvdWNoLnN0YXJ0WVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSAndG91Y2htb3ZlJyBldmVudC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKCBldmVudCApIHtcblxuXHRcdC8vIEVhY2ggdG91Y2ggc2hvdWxkIG9ubHkgdHJpZ2dlciBvbmUgYWN0aW9uXG5cdFx0aWYoICF0b3VjaC5jYXB0dXJlZCApIHtcblx0XHRcdG9uVXNlcklucHV0KCBldmVudCApO1xuXG5cdFx0XHR2YXIgY3VycmVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG5cdFx0XHR2YXIgY3VycmVudFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG5cblx0XHRcdC8vIElmIHRoZSB0b3VjaCBzdGFydGVkIHdpdGggdHdvIHBvaW50cyBhbmQgc3RpbGwgaGFzXG5cdFx0XHQvLyB0d28gYWN0aXZlIHRvdWNoZXM7IHRlc3QgZm9yIHRoZSBwaW5jaCBnZXN0dXJlXG5cdFx0XHRpZiggZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDIgJiYgdG91Y2guc3RhcnRDb3VudCA9PT0gMiAmJiBjb25maWcub3ZlcnZpZXcgKSB7XG5cblx0XHRcdFx0Ly8gVGhlIGN1cnJlbnQgZGlzdGFuY2UgaW4gcGl4ZWxzIGJldHdlZW4gdGhlIHR3byB0b3VjaCBwb2ludHNcblx0XHRcdFx0dmFyIGN1cnJlbnRTcGFuID0gZGlzdGFuY2VCZXR3ZWVuKCB7XG5cdFx0XHRcdFx0eDogZXZlbnQudG91Y2hlc1sxXS5jbGllbnRYLFxuXHRcdFx0XHRcdHk6IGV2ZW50LnRvdWNoZXNbMV0uY2xpZW50WVxuXHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0eDogdG91Y2guc3RhcnRYLFxuXHRcdFx0XHRcdHk6IHRvdWNoLnN0YXJ0WVxuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHNwYW4gaXMgbGFyZ2VyIHRoYW4gdGhlIGRlc2lyZSBhbW91bnQgd2UndmUgZ290XG5cdFx0XHRcdC8vIG91cnNlbHZlcyBhIHBpbmNoXG5cdFx0XHRcdGlmKCBNYXRoLmFicyggdG91Y2guc3RhcnRTcGFuIC0gY3VycmVudFNwYW4gKSA+IHRvdWNoLnRocmVzaG9sZCApIHtcblx0XHRcdFx0XHR0b3VjaC5jYXB0dXJlZCA9IHRydWU7XG5cblx0XHRcdFx0XHRpZiggY3VycmVudFNwYW4gPCB0b3VjaC5zdGFydFNwYW4gKSB7XG5cdFx0XHRcdFx0XHRhY3RpdmF0ZU92ZXJ2aWV3KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0ZGVhY3RpdmF0ZU92ZXJ2aWV3KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0fVxuXHRcdFx0Ly8gVGhlcmUgd2FzIG9ubHkgb25lIHRvdWNoIHBvaW50LCBsb29rIGZvciBhIHN3aXBlXG5cdFx0XHRlbHNlIGlmKCBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMSAmJiB0b3VjaC5zdGFydENvdW50ICE9PSAyICkge1xuXG5cdFx0XHRcdHZhciBkZWx0YVggPSBjdXJyZW50WCAtIHRvdWNoLnN0YXJ0WCxcblx0XHRcdFx0XHRkZWx0YVkgPSBjdXJyZW50WSAtIHRvdWNoLnN0YXJ0WTtcblxuXHRcdFx0XHRpZiggZGVsdGFYID4gdG91Y2gudGhyZXNob2xkICYmIE1hdGguYWJzKCBkZWx0YVggKSA+IE1hdGguYWJzKCBkZWx0YVkgKSApIHtcblx0XHRcdFx0XHR0b3VjaC5jYXB0dXJlZCA9IHRydWU7XG5cdFx0XHRcdFx0bmF2aWdhdGVMZWZ0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiggZGVsdGFYIDwgLXRvdWNoLnRocmVzaG9sZCAmJiBNYXRoLmFicyggZGVsdGFYICkgPiBNYXRoLmFicyggZGVsdGFZICkgKSB7XG5cdFx0XHRcdFx0dG91Y2guY2FwdHVyZWQgPSB0cnVlO1xuXHRcdFx0XHRcdG5hdmlnYXRlUmlnaHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKCBkZWx0YVkgPiB0b3VjaC50aHJlc2hvbGQgKSB7XG5cdFx0XHRcdFx0dG91Y2guY2FwdHVyZWQgPSB0cnVlO1xuXHRcdFx0XHRcdG5hdmlnYXRlVXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmKCBkZWx0YVkgPCAtdG91Y2gudGhyZXNob2xkICkge1xuXHRcdFx0XHRcdHRvdWNoLmNhcHR1cmVkID0gdHJ1ZTtcblx0XHRcdFx0XHRuYXZpZ2F0ZURvd24oKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHdlJ3JlIGVtYmVkZGVkLCBvbmx5IGJsb2NrIHRvdWNoIGV2ZW50cyBpZiB0aGV5IGhhdmVcblx0XHRcdFx0Ly8gdHJpZ2dlcmVkIGFuIGFjdGlvblxuXHRcdFx0XHRpZiggY29uZmlnLmVtYmVkZGVkICkge1xuXHRcdFx0XHRcdGlmKCB0b3VjaC5jYXB0dXJlZCB8fCBpc1ZlcnRpY2FsU2xpZGUoIGN1cnJlbnRTbGlkZSApICkge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gTm90IGVtYmVkZGVkPyBCbG9jayB0aGVtIGFsbCB0byBhdm9pZCBuZWVkbGVzcyB0b3NzaW5nXG5cdFx0XHRcdC8vIGFyb3VuZCBvZiB0aGUgdmlld3BvcnQgaW4gaU9TXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBUaGVyZSdzIGEgYnVnIHdpdGggc3dpcGluZyBvbiBzb21lIEFuZHJvaWQgZGV2aWNlcyB1bmxlc3Ncblx0XHQvLyB0aGUgZGVmYXVsdCBhY3Rpb24gaXMgYWx3YXlzIHByZXZlbnRlZFxuXHRcdGVsc2UgaWYoIG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goIC9hbmRyb2lkL2dpICkgKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXIgZm9yIHRoZSAndG91Y2hlbmQnIGV2ZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Ub3VjaEVuZCggZXZlbnQgKSB7XG5cblx0XHR0b3VjaC5jYXB0dXJlZCA9IGZhbHNlO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydCBwb2ludGVyIGRvd24gdG8gdG91Y2ggc3RhcnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblBvaW50ZXJEb3duKCBldmVudCApIHtcblxuXHRcdGlmKCBldmVudC5wb2ludGVyVHlwZSA9PT0gZXZlbnQuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIiApIHtcblx0XHRcdGV2ZW50LnRvdWNoZXMgPSBbeyBjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZIH1dO1xuXHRcdFx0b25Ub3VjaFN0YXJ0KCBldmVudCApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnQgcG9pbnRlciBtb3ZlIHRvIHRvdWNoIG1vdmUuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKCBldmVudCApIHtcblxuXHRcdGlmKCBldmVudC5wb2ludGVyVHlwZSA9PT0gZXZlbnQuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggfHwgZXZlbnQucG9pbnRlclR5cGUgPT09IFwidG91Y2hcIiApICB7XG5cdFx0XHRldmVudC50b3VjaGVzID0gW3sgY2xpZW50WDogZXZlbnQuY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2xpZW50WSB9XTtcblx0XHRcdG9uVG91Y2hNb3ZlKCBldmVudCApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnQgcG9pbnRlciB1cCB0byB0b3VjaCBlbmQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblBvaW50ZXJVcCggZXZlbnQgKSB7XG5cblx0XHRpZiggZXZlbnQucG9pbnRlclR5cGUgPT09IGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1RPVUNIIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIgKSAge1xuXHRcdFx0ZXZlbnQudG91Y2hlcyA9IFt7IGNsaWVudFg6IGV2ZW50LmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNsaWVudFkgfV07XG5cdFx0XHRvblRvdWNoRW5kKCBldmVudCApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgbW91c2Ugd2hlZWwgc2Nyb2xsaW5nLCB0aHJvdHRsZWQgdG8gYXZvaWQgc2tpcHBpbmdcblx0ICogbXVsdGlwbGUgc2xpZGVzLlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Eb2N1bWVudE1vdXNlU2Nyb2xsKCBldmVudCApIHtcblxuXHRcdGlmKCBEYXRlLm5vdygpIC0gbGFzdE1vdXNlV2hlZWxTdGVwID4gNjAwICkge1xuXG5cdFx0XHRsYXN0TW91c2VXaGVlbFN0ZXAgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHR2YXIgZGVsdGEgPSBldmVudC5kZXRhaWwgfHwgLWV2ZW50LndoZWVsRGVsdGE7XG5cdFx0XHRpZiggZGVsdGEgPiAwICkge1xuXHRcdFx0XHRuYXZpZ2F0ZU5leHQoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRuYXZpZ2F0ZVByZXYoKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENsaWNraW5nIG9uIHRoZSBwcm9ncmVzcyBiYXIgcmVzdWx0cyBpbiBhIG5hdmlnYXRpb24gdG8gdGhlXG5cdCAqIGNsb3Nlc3QgYXBwcm94aW1hdGUgaG9yaXpvbnRhbCBzbGlkZSB1c2luZyB0aGlzIGVxdWF0aW9uOlxuXHQgKlxuXHQgKiAoIGNsaWNrWCAvIHByZXNlbnRhdGlvbldpZHRoICkgKiBudW1iZXJPZlNsaWRlc1xuXHQgKi9cblx0ZnVuY3Rpb24gb25Qcm9ncmVzc0NsaWNrZWQoIGV2ZW50ICkge1xuXG5cdFx0b25Vc2VySW5wdXQoIGV2ZW50ICk7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dmFyIHNsaWRlc1RvdGFsID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApLmxlbmd0aDtcblx0XHR2YXIgc2xpZGVJbmRleCA9IE1hdGguZmxvb3IoICggZXZlbnQuY2xpZW50WCAvIGRvbS53cmFwcGVyLm9mZnNldFdpZHRoICkgKiBzbGlkZXNUb3RhbCApO1xuXG5cdFx0aWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHRzbGlkZUluZGV4ID0gc2xpZGVzVG90YWwgLSBzbGlkZUluZGV4O1xuXHRcdH1cblxuXHRcdHNsaWRlKCBzbGlkZUluZGV4ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBFdmVudCBoYW5kbGVyIGZvciBuYXZpZ2F0aW9uIGNvbnRyb2wgYnV0dG9ucy5cblx0ICovXG5cdGZ1bmN0aW9uIG9uTmF2aWdhdGVMZWZ0Q2xpY2tlZCggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IG9uVXNlcklucHV0KCk7IG5hdmlnYXRlTGVmdCgpOyB9XG5cdGZ1bmN0aW9uIG9uTmF2aWdhdGVSaWdodENsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBuYXZpZ2F0ZVJpZ2h0KCk7IH1cblx0ZnVuY3Rpb24gb25OYXZpZ2F0ZVVwQ2xpY2tlZCggZXZlbnQgKSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IG9uVXNlcklucHV0KCk7IG5hdmlnYXRlVXAoKTsgfVxuXHRmdW5jdGlvbiBvbk5hdmlnYXRlRG93bkNsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBuYXZpZ2F0ZURvd24oKTsgfVxuXHRmdW5jdGlvbiBvbk5hdmlnYXRlUHJldkNsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBuYXZpZ2F0ZVByZXYoKTsgfVxuXHRmdW5jdGlvbiBvbk5hdmlnYXRlTmV4dENsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBuYXZpZ2F0ZU5leHQoKTsgfVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgd2luZG93IGxldmVsICdoYXNoY2hhbmdlJyBldmVudC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uV2luZG93SGFzaENoYW5nZSggZXZlbnQgKSB7XG5cblx0XHRyZWFkVVJMKCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgd2luZG93IGxldmVsICdyZXNpemUnIGV2ZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoIGV2ZW50ICkge1xuXG5cdFx0bGF5b3V0KCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUgZm9yIHRoZSB3aW5kb3cgbGV2ZWwgJ3Zpc2liaWxpdHljaGFuZ2UnIGV2ZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25QYWdlVmlzaWJpbGl0eUNoYW5nZSggZXZlbnQgKSB7XG5cblx0XHR2YXIgaXNIaWRkZW4gPSAgZG9jdW1lbnQud2Via2l0SGlkZGVuIHx8XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5tc0hpZGRlbiB8fFxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQuaGlkZGVuO1xuXG5cdFx0Ly8gSWYsIGFmdGVyIGNsaWNraW5nIGEgbGluayBvciBzaW1pbGFyIGFuZCB3ZSdyZSBjb21pbmcgYmFjayxcblx0XHQvLyBmb2N1cyB0aGUgZG9jdW1lbnQuYm9keSB0byBlbnN1cmUgd2UgY2FuIHVzZSBrZXlib2FyZCBzaG9ydGN1dHNcblx0XHRpZiggaXNIaWRkZW4gPT09IGZhbHNlICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkgKSB7XG5cdFx0XHQvLyBOb3QgYWxsIGVsZW1lbnRzIHN1cHBvcnQgLmJsdXIoKSAtIFNWR3MgYW1vbmcgdGhlbS5cblx0XHRcdGlmKCB0eXBlb2YgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcblx0XHRcdH1cblx0XHRcdGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBJbnZva2VkIHdoZW4gYSBzbGlkZSBpcyBhbmQgd2UncmUgaW4gdGhlIG92ZXJ2aWV3LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25PdmVydmlld1NsaWRlQ2xpY2tlZCggZXZlbnQgKSB7XG5cblx0XHQvLyBUT0RPIFRoZXJlJ3MgYSBidWcgaGVyZSB3aGVyZSB0aGUgZXZlbnQgbGlzdGVuZXJzIGFyZSBub3Rcblx0XHQvLyByZW1vdmVkIGFmdGVyIGRlYWN0aXZhdGluZyB0aGUgb3ZlcnZpZXcuXG5cdFx0aWYoIGV2ZW50c0FyZUJvdW5kICYmIGlzT3ZlcnZpZXcoKSApIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0XHR3aGlsZSggZWxlbWVudCAmJiAhZWxlbWVudC5ub2RlTmFtZS5tYXRjaCggL3NlY3Rpb24vZ2kgKSApIHtcblx0XHRcdFx0ZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGVsZW1lbnQgJiYgIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnZGlzYWJsZWQnICkgKSB7XG5cblx0XHRcdFx0ZGVhY3RpdmF0ZU92ZXJ2aWV3KCk7XG5cblx0XHRcdFx0aWYoIGVsZW1lbnQubm9kZU5hbWUubWF0Y2goIC9zZWN0aW9uL2dpICkgKSB7XG5cdFx0XHRcdFx0dmFyIGggPSBwYXJzZUludCggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWluZGV4LWgnICksIDEwICksXG5cdFx0XHRcdFx0XHR2ID0gcGFyc2VJbnQoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC12JyApLCAxMCApO1xuXG5cdFx0XHRcdFx0c2xpZGUoIGgsIHYgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBjbGlja3Mgb24gbGlua3MgdGhhdCBhcmUgc2V0IHRvIHByZXZpZXcgaW4gdGhlXG5cdCAqIGlmcmFtZSBvdmVybGF5LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25QcmV2aWV3TGlua0NsaWNrZWQoIGV2ZW50ICkge1xuXG5cdFx0aWYoIGV2ZW50LmN1cnJlbnRUYXJnZXQgJiYgZXZlbnQuY3VycmVudFRhcmdldC5oYXNBdHRyaWJ1dGUoICdocmVmJyApICkge1xuXHRcdFx0dmFyIHVybCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCAnaHJlZicgKTtcblx0XHRcdGlmKCB1cmwgKSB7XG5cdFx0XHRcdHNob3dQcmV2aWV3KCB1cmwgKTtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGNsaWNrIG9uIHRoZSBhdXRvLXNsaWRpbmcgY29udHJvbHMgZWxlbWVudC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uQXV0b1NsaWRlUGxheWVyQ2xpY2soIGV2ZW50ICkge1xuXG5cdFx0Ly8gUmVwbGF5XG5cdFx0aWYoIFJldmVhbC5pc0xhc3RTbGlkZSgpICYmIGNvbmZpZy5sb29wID09PSBmYWxzZSApIHtcblx0XHRcdHNsaWRlKCAwLCAwICk7XG5cdFx0XHRyZXN1bWVBdXRvU2xpZGUoKTtcblx0XHR9XG5cdFx0Ly8gUmVzdW1lXG5cdFx0ZWxzZSBpZiggYXV0b1NsaWRlUGF1c2VkICkge1xuXHRcdFx0cmVzdW1lQXV0b1NsaWRlKCk7XG5cdFx0fVxuXHRcdC8vIFBhdXNlXG5cdFx0ZWxzZSB7XG5cdFx0XHRwYXVzZUF1dG9TbGlkZSgpO1xuXHRcdH1cblxuXHR9XG5cblxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQTEFZQkFDSyBDT01QT05FTlQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cblx0LyoqXG5cdCAqIENvbnN0cnVjdG9yIGZvciB0aGUgcGxheWJhY2sgY29tcG9uZW50LCB3aGljaCBkaXNwbGF5c1xuXHQgKiBwbGF5L3BhdXNlL3Byb2dyZXNzIGNvbnRyb2xzLlxuXHQgKlxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXIgVGhlIGNvbXBvbmVudCB3aWxsIGFwcGVuZFxuXHQgKiBpdHNlbGYgdG8gdGhpc1xuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9ncmVzc0NoZWNrIEEgbWV0aG9kIHdoaWNoIHdpbGwgYmVcblx0ICogY2FsbGVkIGZyZXF1ZW50bHkgdG8gZ2V0IHRoZSBjdXJyZW50IHByb2dyZXNzIG9uIGEgcmFuZ2Vcblx0ICogb2YgMC0xXG5cdCAqL1xuXHRmdW5jdGlvbiBQbGF5YmFjayggY29udGFpbmVyLCBwcm9ncmVzc0NoZWNrICkge1xuXG5cdFx0Ly8gQ29zbWV0aWNzXG5cdFx0dGhpcy5kaWFtZXRlciA9IDUwO1xuXHRcdHRoaXMudGhpY2tuZXNzID0gMztcblxuXHRcdC8vIEZsYWdzIGlmIHdlIGFyZSBjdXJyZW50bHkgcGxheWluZ1xuXHRcdHRoaXMucGxheWluZyA9IGZhbHNlO1xuXG5cdFx0Ly8gQ3VycmVudCBwcm9ncmVzcyBvbiBhIDAtMSByYW5nZVxuXHRcdHRoaXMucHJvZ3Jlc3MgPSAwO1xuXG5cdFx0Ly8gVXNlZCB0byBsb29wIHRoZSBhbmltYXRpb24gc21vb3RobHlcblx0XHR0aGlzLnByb2dyZXNzT2Zmc2V0ID0gMTtcblxuXHRcdHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMucHJvZ3Jlc3NDaGVjayA9IHByb2dyZXNzQ2hlY2s7XG5cblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XG5cdFx0dGhpcy5jYW52YXMuY2xhc3NOYW1lID0gJ3BsYXliYWNrJztcblx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuZGlhbWV0ZXI7XG5cdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5kaWFtZXRlcjtcblx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCAnMmQnICk7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCggdGhpcy5jYW52YXMgKTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cblx0fVxuXG5cdFBsYXliYWNrLnByb3RvdHlwZS5zZXRQbGF5aW5nID0gZnVuY3Rpb24oIHZhbHVlICkge1xuXG5cdFx0dmFyIHdhc1BsYXlpbmcgPSB0aGlzLnBsYXlpbmc7XG5cblx0XHR0aGlzLnBsYXlpbmcgPSB2YWx1ZTtcblxuXHRcdC8vIFN0YXJ0IHJlcGFpbnRpbmcgaWYgd2Ugd2VyZW4ndCBhbHJlYWR5XG5cdFx0aWYoICF3YXNQbGF5aW5nICYmIHRoaXMucGxheWluZyApIHtcblx0XHRcdHRoaXMuYW5pbWF0ZSgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyKCk7XG5cdFx0fVxuXG5cdH07XG5cblx0UGxheWJhY2sucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBwcm9ncmVzc0JlZm9yZSA9IHRoaXMucHJvZ3Jlc3M7XG5cblx0XHR0aGlzLnByb2dyZXNzID0gdGhpcy5wcm9ncmVzc0NoZWNrKCk7XG5cblx0XHQvLyBXaGVuIHdlIGxvb3AsIG9mZnNldCB0aGUgcHJvZ3Jlc3Mgc28gdGhhdCBpdCBlYXNlc1xuXHRcdC8vIHNtb290aGx5IHJhdGhlciB0aGFuIGltbWVkaWF0ZWx5IHJlc2V0dGluZ1xuXHRcdGlmKCBwcm9ncmVzc0JlZm9yZSA+IDAuOCAmJiB0aGlzLnByb2dyZXNzIDwgMC4yICkge1xuXHRcdFx0dGhpcy5wcm9ncmVzc09mZnNldCA9IHRoaXMucHJvZ3Jlc3M7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZW5kZXIoKTtcblxuXHRcdGlmKCB0aGlzLnBsYXlpbmcgKSB7XG5cdFx0XHRmZWF0dXJlcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVNZXRob2QuY2FsbCggd2luZG93LCB0aGlzLmFuaW1hdGUuYmluZCggdGhpcyApICk7XG5cdFx0fVxuXG5cdH07XG5cblx0LyoqXG5cdCAqIFJlbmRlcnMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3MgYW5kIHBsYXliYWNrIHN0YXRlLlxuXHQgKi9cblx0UGxheWJhY2sucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dmFyIHByb2dyZXNzID0gdGhpcy5wbGF5aW5nID8gdGhpcy5wcm9ncmVzcyA6IDAsXG5cdFx0XHRyYWRpdXMgPSAoIHRoaXMuZGlhbWV0ZXIgLyAyICkgLSB0aGlzLnRoaWNrbmVzcyxcblx0XHRcdHggPSB0aGlzLmRpYW1ldGVyIC8gMixcblx0XHRcdHkgPSB0aGlzLmRpYW1ldGVyIC8gMixcblx0XHRcdGljb25TaXplID0gMTQ7XG5cblx0XHQvLyBFYXNlIHRvd2FyZHMgMVxuXHRcdHRoaXMucHJvZ3Jlc3NPZmZzZXQgKz0gKCAxIC0gdGhpcy5wcm9ncmVzc09mZnNldCApICogMC4xO1xuXG5cdFx0dmFyIGVuZEFuZ2xlID0gKCAtIE1hdGguUEkgLyAyICkgKyAoIHByb2dyZXNzICogKCBNYXRoLlBJICogMiApICk7XG5cdFx0dmFyIHN0YXJ0QW5nbGUgPSAoIC0gTWF0aC5QSSAvIDIgKSArICggdGhpcy5wcm9ncmVzc09mZnNldCAqICggTWF0aC5QSSAqIDIgKSApO1xuXG5cdFx0dGhpcy5jb250ZXh0LnNhdmUoKTtcblx0XHR0aGlzLmNvbnRleHQuY2xlYXJSZWN0KCAwLCAwLCB0aGlzLmRpYW1ldGVyLCB0aGlzLmRpYW1ldGVyICk7XG5cblx0XHQvLyBTb2xpZCBiYWNrZ3JvdW5kIGNvbG9yXG5cdFx0dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuXHRcdHRoaXMuY29udGV4dC5hcmMoIHgsIHksIHJhZGl1cyArIDIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSApO1xuXHRcdHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSggMCwgMCwgMCwgMC40ICknO1xuXHRcdHRoaXMuY29udGV4dC5maWxsKCk7XG5cblx0XHQvLyBEcmF3IHByb2dyZXNzIHRyYWNrXG5cdFx0dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuXHRcdHRoaXMuY29udGV4dC5hcmMoIHgsIHksIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlICk7XG5cdFx0dGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMudGhpY2tuZXNzO1xuXHRcdHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9ICcjNjY2Jztcblx0XHR0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG5cblx0XHRpZiggdGhpcy5wbGF5aW5nICkge1xuXHRcdFx0Ly8gRHJhdyBwcm9ncmVzcyBvbiB0b3Agb2YgdHJhY2tcblx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcblx0XHRcdHRoaXMuY29udGV4dC5hcmMoIHgsIHksIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUsIGZhbHNlICk7XG5cdFx0XHR0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdGhpcy50aGlja25lc3M7XG5cdFx0XHR0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnI2ZmZic7XG5cdFx0XHR0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb250ZXh0LnRyYW5zbGF0ZSggeCAtICggaWNvblNpemUgLyAyICksIHkgLSAoIGljb25TaXplIC8gMiApICk7XG5cblx0XHQvLyBEcmF3IHBsYXkvcGF1c2UgaWNvbnNcblx0XHRpZiggdGhpcy5wbGF5aW5nICkge1xuXHRcdFx0dGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjZmZmJztcblx0XHRcdHRoaXMuY29udGV4dC5maWxsUmVjdCggMCwgMCwgaWNvblNpemUgLyAyIC0gMiwgaWNvblNpemUgKTtcblx0XHRcdHRoaXMuY29udGV4dC5maWxsUmVjdCggaWNvblNpemUgLyAyICsgMiwgMCwgaWNvblNpemUgLyAyIC0gMiwgaWNvblNpemUgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG5cdFx0XHR0aGlzLmNvbnRleHQudHJhbnNsYXRlKCAyLCAwICk7XG5cdFx0XHR0aGlzLmNvbnRleHQubW92ZVRvKCAwLCAwICk7XG5cdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKCBpY29uU2l6ZSAtIDIsIGljb25TaXplIC8gMiApO1xuXHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyggMCwgaWNvblNpemUgKTtcblx0XHRcdHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZic7XG5cdFx0XHR0aGlzLmNvbnRleHQuZmlsbCgpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XG5cblx0fTtcblxuXHRQbGF5YmFjay5wcm90b3R5cGUub24gPSBmdW5jdGlvbiggdHlwZSwgbGlzdGVuZXIgKSB7XG5cdFx0dGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgbGlzdGVuZXIsIGZhbHNlICk7XG5cdH07XG5cblx0UGxheWJhY2sucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKCB0eXBlLCBsaXN0ZW5lciApIHtcblx0XHR0aGlzLmNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBsaXN0ZW5lciwgZmFsc2UgKTtcblx0fTtcblxuXHRQbGF5YmFjay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dGhpcy5wbGF5aW5nID0gZmFsc2U7XG5cblx0XHRpZiggdGhpcy5jYW52YXMucGFyZW50Tm9kZSApIHtcblx0XHRcdHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKCB0aGlzLmNhbnZhcyApO1xuXHRcdH1cblxuXHR9O1xuXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEFQSSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG5cdFJldmVhbCA9IHtcblx0XHRpbml0aWFsaXplOiBpbml0aWFsaXplLFxuXHRcdGNvbmZpZ3VyZTogY29uZmlndXJlLFxuXHRcdHN5bmM6IHN5bmMsXG5cblx0XHQvLyBOYXZpZ2F0aW9uIG1ldGhvZHNcblx0XHRzbGlkZTogc2xpZGUsXG5cdFx0bGVmdDogbmF2aWdhdGVMZWZ0LFxuXHRcdHJpZ2h0OiBuYXZpZ2F0ZVJpZ2h0LFxuXHRcdHVwOiBuYXZpZ2F0ZVVwLFxuXHRcdGRvd246IG5hdmlnYXRlRG93bixcblx0XHRwcmV2OiBuYXZpZ2F0ZVByZXYsXG5cdFx0bmV4dDogbmF2aWdhdGVOZXh0LFxuXG5cdFx0Ly8gRnJhZ21lbnQgbWV0aG9kc1xuXHRcdG5hdmlnYXRlRnJhZ21lbnQ6IG5hdmlnYXRlRnJhZ21lbnQsXG5cdFx0cHJldkZyYWdtZW50OiBwcmV2aW91c0ZyYWdtZW50LFxuXHRcdG5leHRGcmFnbWVudDogbmV4dEZyYWdtZW50LFxuXG5cdFx0Ly8gRGVwcmVjYXRlZCBhbGlhc2VzXG5cdFx0bmF2aWdhdGVUbzogc2xpZGUsXG5cdFx0bmF2aWdhdGVMZWZ0OiBuYXZpZ2F0ZUxlZnQsXG5cdFx0bmF2aWdhdGVSaWdodDogbmF2aWdhdGVSaWdodCxcblx0XHRuYXZpZ2F0ZVVwOiBuYXZpZ2F0ZVVwLFxuXHRcdG5hdmlnYXRlRG93bjogbmF2aWdhdGVEb3duLFxuXHRcdG5hdmlnYXRlUHJldjogbmF2aWdhdGVQcmV2LFxuXHRcdG5hdmlnYXRlTmV4dDogbmF2aWdhdGVOZXh0LFxuXG5cdFx0Ly8gRm9yY2VzIGFuIHVwZGF0ZSBpbiBzbGlkZSBsYXlvdXRcblx0XHRsYXlvdXQ6IGxheW91dCxcblxuXHRcdC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGF2YWlsYWJsZSByb3V0ZXMgYXMgYm9vbGVhbnMgKGxlZnQvcmlnaHQvdG9wL2JvdHRvbSlcblx0XHRhdmFpbGFibGVSb3V0ZXM6IGF2YWlsYWJsZVJvdXRlcyxcblxuXHRcdC8vIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhlIGF2YWlsYWJsZSBmcmFnbWVudHMgYXMgYm9vbGVhbnMgKHByZXYvbmV4dClcblx0XHRhdmFpbGFibGVGcmFnbWVudHM6IGF2YWlsYWJsZUZyYWdtZW50cyxcblxuXHRcdC8vIFRvZ2dsZXMgdGhlIG92ZXJ2aWV3IG1vZGUgb24vb2ZmXG5cdFx0dG9nZ2xlT3ZlcnZpZXc6IHRvZ2dsZU92ZXJ2aWV3LFxuXG5cdFx0Ly8gVG9nZ2xlcyB0aGUgXCJibGFjayBzY3JlZW5cIiBtb2RlIG9uL29mZlxuXHRcdHRvZ2dsZVBhdXNlOiB0b2dnbGVQYXVzZSxcblxuXHRcdC8vIFRvZ2dsZXMgdGhlIGF1dG8gc2xpZGUgbW9kZSBvbi9vZmZcblx0XHR0b2dnbGVBdXRvU2xpZGU6IHRvZ2dsZUF1dG9TbGlkZSxcblxuXHRcdC8vIFN0YXRlIGNoZWNrc1xuXHRcdGlzT3ZlcnZpZXc6IGlzT3ZlcnZpZXcsXG5cdFx0aXNQYXVzZWQ6IGlzUGF1c2VkLFxuXHRcdGlzQXV0b1NsaWRpbmc6IGlzQXV0b1NsaWRpbmcsXG5cblx0XHQvLyBBZGRzIG9yIHJlbW92ZXMgYWxsIGludGVybmFsIGV2ZW50IGxpc3RlbmVycyAoc3VjaCBhcyBrZXlib2FyZClcblx0XHRhZGRFdmVudExpc3RlbmVyczogYWRkRXZlbnRMaXN0ZW5lcnMsXG5cdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lcnM6IHJlbW92ZUV2ZW50TGlzdGVuZXJzLFxuXG5cdFx0Ly8gRmFjaWxpdHkgZm9yIHBlcnNpc3RpbmcgYW5kIHJlc3RvcmluZyB0aGUgcHJlc2VudGF0aW9uIHN0YXRlXG5cdFx0Z2V0U3RhdGU6IGdldFN0YXRlLFxuXHRcdHNldFN0YXRlOiBzZXRTdGF0ZSxcblxuXHRcdC8vIFByZXNlbnRhdGlvbiBwcm9ncmVzcyBvbiByYW5nZSBvZiAwLTFcblx0XHRnZXRQcm9ncmVzczogZ2V0UHJvZ3Jlc3MsXG5cblx0XHQvLyBSZXR1cm5zIHRoZSBpbmRpY2VzIG9mIHRoZSBjdXJyZW50LCBvciBzcGVjaWZpZWQsIHNsaWRlXG5cdFx0Z2V0SW5kaWNlczogZ2V0SW5kaWNlcyxcblxuXHRcdGdldFRvdGFsU2xpZGVzOiBnZXRUb3RhbFNsaWRlcyxcblxuXHRcdC8vIFJldHVybnMgdGhlIHNsaWRlIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuXHRcdGdldFNsaWRlOiBnZXRTbGlkZSxcblxuXHRcdC8vIFJldHVybnMgdGhlIHNsaWRlIGJhY2tncm91bmQgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG5cdFx0Z2V0U2xpZGVCYWNrZ3JvdW5kOiBnZXRTbGlkZUJhY2tncm91bmQsXG5cblx0XHQvLyBSZXR1cm5zIHRoZSBwcmV2aW91cyBzbGlkZSBlbGVtZW50LCBtYXkgYmUgbnVsbFxuXHRcdGdldFByZXZpb3VzU2xpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHByZXZpb3VzU2xpZGU7XG5cdFx0fSxcblxuXHRcdC8vIFJldHVybnMgdGhlIGN1cnJlbnQgc2xpZGUgZWxlbWVudFxuXHRcdGdldEN1cnJlbnRTbGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gY3VycmVudFNsaWRlO1xuXHRcdH0sXG5cblx0XHQvLyBSZXR1cm5zIHRoZSBjdXJyZW50IHNjYWxlIG9mIHRoZSBwcmVzZW50YXRpb24gY29udGVudFxuXHRcdGdldFNjYWxlOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBzY2FsZTtcblx0XHR9LFxuXG5cdFx0Ly8gUmV0dXJucyB0aGUgY3VycmVudCBjb25maWd1cmF0aW9uIG9iamVjdFxuXHRcdGdldENvbmZpZzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gY29uZmlnO1xuXHRcdH0sXG5cblx0XHQvLyBIZWxwZXIgbWV0aG9kLCByZXRyaWV2ZXMgcXVlcnkgc3RyaW5nIGFzIGEga2V5L3ZhbHVlIGhhc2hcblx0XHRnZXRRdWVyeUhhc2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHF1ZXJ5ID0ge307XG5cblx0XHRcdGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCAvW0EtWjAtOV0rPz0oW1xcd1xcLiUtXSopL2dpLCBmdW5jdGlvbihhKSB7XG5cdFx0XHRcdHF1ZXJ5WyBhLnNwbGl0KCAnPScgKS5zaGlmdCgpIF0gPSBhLnNwbGl0KCAnPScgKS5wb3AoKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0Ly8gQmFzaWMgZGVzZXJpYWxpemF0aW9uXG5cdFx0XHRmb3IoIHZhciBpIGluIHF1ZXJ5ICkge1xuXHRcdFx0XHR2YXIgdmFsdWUgPSBxdWVyeVsgaSBdO1xuXG5cdFx0XHRcdHF1ZXJ5WyBpIF0gPSBkZXNlcmlhbGl6ZSggdW5lc2NhcGUoIHZhbHVlICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHF1ZXJ5O1xuXHRcdH0sXG5cblx0XHQvLyBSZXR1cm5zIHRydWUgaWYgd2UncmUgY3VycmVudGx5IG9uIHRoZSBmaXJzdCBzbGlkZVxuXHRcdGlzRmlyc3RTbGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gKCBpbmRleGggPT09IDAgJiYgaW5kZXh2ID09PSAwICk7XG5cdFx0fSxcblxuXHRcdC8vIFJldHVybnMgdHJ1ZSBpZiB3ZSdyZSBjdXJyZW50bHkgb24gdGhlIGxhc3Qgc2xpZGVcblx0XHRpc0xhc3RTbGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiggY3VycmVudFNsaWRlICkge1xuXHRcdFx0XHQvLyBEb2VzIHRoaXMgc2xpZGUgaGFzIG5leHQgYSBzaWJsaW5nP1xuXHRcdFx0XHRpZiggY3VycmVudFNsaWRlLm5leHRFbGVtZW50U2libGluZyApIHJldHVybiBmYWxzZTtcblxuXHRcdFx0XHQvLyBJZiBpdCdzIHZlcnRpY2FsLCBkb2VzIGl0cyBwYXJlbnQgaGF2ZSBhIG5leHQgc2libGluZz9cblx0XHRcdFx0aWYoIGlzVmVydGljYWxTbGlkZSggY3VycmVudFNsaWRlICkgJiYgY3VycmVudFNsaWRlLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblxuXHRcdC8vIENoZWNrcyBpZiByZXZlYWwuanMgaGFzIGJlZW4gbG9hZGVkIGFuZCBpcyByZWFkeSBmb3IgdXNlXG5cdFx0aXNSZWFkeTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gbG9hZGVkO1xuXHRcdH0sXG5cblx0XHQvLyBGb3J3YXJkIGV2ZW50IGJpbmRpbmcgdG8gdGhlIHJldmVhbCBET00gZWxlbWVudFxuXHRcdGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCB0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSApIHtcblx0XHRcdGlmKCAnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93ICkge1xuXHRcdFx0XHQoIGRvbS53cmFwcGVyIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucmV2ZWFsJyApICkuYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCB0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSApIHtcblx0XHRcdGlmKCAnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93ICkge1xuXHRcdFx0XHQoIGRvbS53cmFwcGVyIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucmV2ZWFsJyApICkucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gUHJvZ3JhbWF0aWNhbGx5IHRyaWdnZXJzIGEga2V5Ym9hcmQgZXZlbnRcblx0XHR0cmlnZ2VyS2V5OiBmdW5jdGlvbigga2V5Q29kZSApIHtcblx0XHRcdG9uRG9jdW1lbnRLZXlEb3duKCB7IGtleUNvZGU6IGtleUNvZGUgfSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gUmV2ZWFsO1xuXG59KSk7XG4iLCJmdW5jdGlvbiByZW5kZXJQYWdlKCl7JC5mbi5pbmxpbmVTdHlsZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5wcm9wKFwic3R5bGVcIilbJC5jYW1lbENhc2UoZSldfTskKFwicHJlLnJmaWRkbGVcIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPVwiaHR0cDovL3ItZmlkZGxlLm9yZy8jL3F1ZXJ5L3ByZXZpZXc/Y29kZT1cIjt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO3ZhciBuPSQodGhpcykudGV4dCgpO3ZhciByPSQodGhpcykuaW5saW5lU3R5bGUoXCJoZWlnaHRcIik7dC5zcmM9ZStlbmNvZGVVUklDb21wb25lbnQobik7dC53aWR0aD1cIjEwMCVcIjtpZighcil0LmhlaWdodD0zOCsxOSpnZXROdW1iZXJPZkxpbmVzKG4pK1wicHhcIjtlbHNlIHQuaGVpZ2h0PXI7dC5mcmFtZUJvcmRlcj1cIjBcIjt0LmFsbG93RnVsbFNjcmVlbj1cImFsbG93ZnVsbHNjcmVlblwiOyQodGhpcykucmVwbGFjZVdpdGgodCl9KTskKFwicHJlLnJmaWRkbGUtaW50ZXJhY3RpdmVcIikuZWFjaChmdW5jdGlvbigpe3ZhciBlPVwiaHR0cDovL3ItZmlkZGxlLm9yZy8jL3F1ZXJ5L2VtYmVkP2NvZGU9XCI7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTt2YXIgbj0kKHRoaXMpLnRleHQoKTt2YXIgcj0kKHRoaXMpLmlubGluZVN0eWxlKFwiaGVpZ2h0XCIpO3Quc3JjPWUrZW5jb2RlVVJJQ29tcG9uZW50KG4pO3Qud2lkdGg9XCIxMDAlXCI7aWYoIXIpdC5oZWlnaHQ9ODUrMzgrMTkqZ2V0TnVtYmVyT2ZMaW5lcyhuKStcInB4XCI7ZWxzZSB0LmhlaWdodD1yO3QuZnJhbWVCb3JkZXI9XCIwXCI7dC5hbGxvd0Z1bGxTY3JlZW49XCJhbGxvd2Z1bGxzY3JlZW5cIjskKHRoaXMpLnJlcGxhY2VXaXRoKHQpfSl9ZnVuY3Rpb24gZ2V0TnVtYmVyT2ZMaW5lcyhlKXt2YXIgdD1lLnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pO3JldHVybiB0Lmxlbmd0aH0kKFwiZG9jdW1lbnRcIikucmVhZHkoZnVuY3Rpb24oKXtyZW5kZXJQYWdlKCl9KSIsInZhciBjc3MgPSByZXF1aXJlKCcuLy4uL3N0eWxlcy9zcy5jc3MnKTtcbmdsb2JhbC4kID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanMnKTtcbnZhciBfckZpZGRsZUhlbHBlciA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy9yZmlkZGxlSGVscGVyL3JmaWRkbGVIZWxwZXIubWluLmpzJyk7XG52YXIgUmV2ZWFsID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL3JldmVhbC5qcy9qcy9yZXZlYWwuanMnKTtcbnZhciBfcHJpc20gPSByZXF1aXJlKCcuLy4uL2NvbXBvbmVudHMvcHJpc20vcHJpc20uanMnKTtcbi8vdmFyIF9obGpzID0gcmVxdWlyZSgnLi8uLi9jb21wb25lbnRzL2hpZ2hsaWdodC5qcy9oaWdobGlnaHQucGFjay5qcycpO1xuXG5SZXZlYWwuaW5pdGlhbGl6ZSh7XG5cbiAgICAvLyBEaXNwbGF5IGNvbnRyb2xzIGluIHRoZSBib3R0b20gcmlnaHQgY29ybmVyXG4gICAgY29udHJvbHM6IHRydWUsXG5cbiAgICAvLyBEaXNwbGF5IGEgcHJlc2VudGF0aW9uIHByb2dyZXNzIGJhclxuICAgIHByb2dyZXNzOiB0cnVlLFxuXG4gICAgLy8gRGlzcGxheSB0aGUgcGFnZSBudW1iZXIgb2YgdGhlIGN1cnJlbnQgc2xpZGVcbiAgICBzbGlkZU51bWJlcjogdHJ1ZSxcblxuICAgIC8vIFB1c2ggZWFjaCBzbGlkZSBjaGFuZ2UgdG8gdGhlIGJyb3dzZXIgaGlzdG9yeVxuICAgIGhpc3Rvcnk6IGZhbHNlLFxuXG4gICAgLy8gRW5hYmxlIGtleWJvYXJkIHNob3J0Y3V0cyBmb3IgbmF2aWdhdGlvblxuICAgIGtleWJvYXJkOiB0cnVlLFxuXG4gICAgLy8gRW5hYmxlIHRoZSBzbGlkZSBvdmVydmlldyBtb2RlXG4gICAgb3ZlcnZpZXc6IHRydWUsXG5cbiAgICAvLyBWZXJ0aWNhbCBjZW50ZXJpbmcgb2Ygc2xpZGVzXG4gICAgY2VudGVyOiB0cnVlLFxuXG4gICAgLy8gRW5hYmxlcyB0b3VjaCBuYXZpZ2F0aW9uIG9uIGRldmljZXMgd2l0aCB0b3VjaCBpbnB1dFxuICAgIHRvdWNoOiB0cnVlLFxuXG4gICAgLy8gTG9vcCB0aGUgcHJlc2VudGF0aW9uXG4gICAgbG9vcDogZmFsc2UsXG5cbiAgICAvLyBDaGFuZ2UgdGhlIHByZXNlbnRhdGlvbiBkaXJlY3Rpb24gdG8gYmUgUlRMXG4gICAgcnRsOiBmYWxzZSxcblxuICAgIC8vIFR1cm5zIGZyYWdtZW50cyBvbiBhbmQgb2ZmIGdsb2JhbGx5XG4gICAgZnJhZ21lbnRzOiB0cnVlLFxuXG4gICAgLy8gRmxhZ3MgaWYgdGhlIHByZXNlbnRhdGlvbiBpcyBydW5uaW5nIGluIGFuIGVtYmVkZGVkIG1vZGUsXG4gICAgLy8gaS5lLiBjb250YWluZWQgd2l0aGluIGEgbGltaXRlZCBwb3J0aW9uIG9mIHRoZSBzY3JlZW5cbiAgICBlbWJlZGRlZDogZmFsc2UsXG5cbiAgICAvLyBGbGFncyBpZiB3ZSBzaG91bGQgc2hvdyBhIGhlbHAgb3ZlcmxheSB3aGVuIHRoZSBxdWVzdGlvbm1hcmtcbiAgICAvLyBrZXkgaXMgcHJlc3NlZFxuICAgIGhlbHA6IHRydWUsXG5cbiAgICAvLyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gYXV0b21hdGljYWxseSBwcm9jZWVkaW5nIHRvIHRoZVxuICAgIC8vIG5leHQgc2xpZGUsIGRpc2FibGVkIHdoZW4gc2V0IHRvIDAsIHRoaXMgdmFsdWUgY2FuIGJlIG92ZXJ3cml0dGVuXG4gICAgLy8gYnkgdXNpbmcgYSBkYXRhLWF1dG9zbGlkZSBhdHRyaWJ1dGUgb24geW91ciBzbGlkZXNcbiAgICBhdXRvU2xpZGU6IDAsXG5cbiAgICAvLyBTdG9wIGF1dG8tc2xpZGluZyBhZnRlciB1c2VyIGlucHV0XG4gICAgYXV0b1NsaWRlU3RvcHBhYmxlOiB0cnVlLFxuXG4gICAgLy8gRW5hYmxlIHNsaWRlIG5hdmlnYXRpb24gdmlhIG1vdXNlIHdoZWVsXG4gICAgbW91c2VXaGVlbDogZmFsc2UsXG5cbiAgICAvLyBIaWRlcyB0aGUgYWRkcmVzcyBiYXIgb24gbW9iaWxlIGRldmljZXNcbiAgICBoaWRlQWRkcmVzc0JhcjogdHJ1ZSxcblxuICAgIC8vIE9wZW5zIGxpbmtzIGluIGFuIGlmcmFtZSBwcmV2aWV3IG92ZXJsYXlcbiAgICBwcmV2aWV3TGlua3M6IGZhbHNlLFxuXG4gICAgLy8gVHJhbnNpdGlvbiBzdHlsZVxuICAgIHRyYW5zaXRpb246ICdkZWZhdWx0JywgLy8gbm9uZS9mYWRlL3NsaWRlL2NvbnZleC9jb25jYXZlL3pvb21cblxuICAgIC8vIFRyYW5zaXRpb24gc3BlZWRcbiAgICB0cmFuc2l0aW9uU3BlZWQ6ICdkZWZhdWx0JywgLy8gZGVmYXVsdC9mYXN0L3Nsb3dcblxuICAgIC8vIFRyYW5zaXRpb24gc3R5bGUgZm9yIGZ1bGwgcGFnZSBzbGlkZSBiYWNrZ3JvdW5kc1xuICAgIGJhY2tncm91bmRUcmFuc2l0aW9uOiAnZGVmYXVsdCcsIC8vIG5vbmUvZmFkZS9zbGlkZS9jb252ZXgvY29uY2F2ZS96b29tXG5cbiAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIGF3YXkgZnJvbSB0aGUgY3VycmVudCB0aGF0IGFyZSB2aXNpYmxlXG4gICAgdmlld0Rpc3RhbmNlOiAzLFxuXG4gICAgLy8gUGFyYWxsYXggYmFja2dyb3VuZCBpbWFnZVxuICAgIHBhcmFsbGF4QmFja2dyb3VuZEltYWdlOiAnJywgLy8gZS5nLiBcIidodHRwczovL3MzLmFtYXpvbmF3cy5jb20vaGFraW0tc3RhdGljL3JldmVhbC1qcy9yZXZlYWwtcGFyYWxsYXgtMS5qcGcnXCJcblxuICAgIC8vIFBhcmFsbGF4IGJhY2tncm91bmQgc2l6ZVxuICAgIHBhcmFsbGF4QmFja2dyb3VuZFNpemU6ICcnLCAvLyBDU1Mgc3ludGF4LCBlLmcuIFwiMjEwMHB4IDkwMHB4XCJcblxuICAgIC8vIEFtb3VudCB0byBtb3ZlIHBhcmFsbGF4IGJhY2tncm91bmQgKGhvcml6b250YWwgYW5kIHZlcnRpY2FsKSBvbiBzbGlkZSBjaGFuZ2VcbiAgICAvLyBOdW1iZXIsIGUuZy4gMTAwXG4gICAgcGFyYWxsYXhCYWNrZ3JvdW5kSG9yaXpvbnRhbDogJycsXG4gICAgcGFyYWxsYXhCYWNrZ3JvdW5kVmVydGljYWw6ICcnXG5cbn0pO1xuLy93aW5kb3cuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XG4iLCJ2YXIgY3NzID0gXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ld3MrQ3ljbGU6NDAwLDcwMFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwLDQwMGl0YWxpYyw3MDBpdGFsaWNcXFwiKTtcXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsO1xcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNCB1cmwoc3JjL2NvbXBvbmVudHMvX3Byb2Nlc3NlZC9kb2NzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyk7XFxufVxcbi5pbnRlcmZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxufVxcbmRpdiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgcGFkZGluZzogMTVweCAwIDMwcHggMzBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmI7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xcbn1cXG5hLnRvY190aXRsZSxcXG5hLnRvY190aXRsZTp2aXNpdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5hLnRvY190aXRsZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI3NpZGViYXIgLnZlcnNpb24ge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxudWwudG9jX3NlY3Rpb24ge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBtYXJnaW46IDVweCAwIDAgMDtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IEx1Y2lkYSBHcmFuZGU7XFxufVxcbi50b2Nfc2VjdGlvbiBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMCAzcHggMDtcXG59XFxuLnRvY19zZWN0aW9uIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4udG9jX3NlY3Rpb24gbGkgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuZGl2LmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTUwcHg7XFxuICBtYXJnaW46IDQwcHggMCA1MHB4IDI2MHB4O1xcbn1cXG5pbWcjbG9nbyB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcbmRpdi5ydW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJhY2tncm91bmQ6IHVybCgnc3JjL2NvbXBvbmVudHMvX3Byb2Nlc3NlZC9kb2NzL2ltYWdlcy9hcnJvd3MucG5nJykgbm8tcmVwZWF0IC0yNnB4IDA7XFxufVxcbmRpdi5ydW46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01MXB4IDA7XFxufVxcbnAsXFxuZGl2LmNvbnRhaW5lciB1bCB7XFxuICBtYXJnaW46IDI1cHggMDtcXG4gIHdpZHRoOiA1NTBweDtcXG59XFxucC53YXJuaW5nIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5kaXYuY29udGFpbmVyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG5kaXYuY29udGFpbmVyIHVsIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbmRpdi5jb250YWluZXIgdWwuc21hbGwge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5hLFxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogIzQ0NDtcXG59XFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuYS5wdW5jaCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjNDE2MmE4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzODUzOGM7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWYyZDRkO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNTFlMzM7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxZjJkNGQ7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMTBweCAxcHggIzVjOGJlZSwgMHB4IDFweCAwICMxZDJjNGQsIDAgNnB4IDBweCAjMWYzMDUzLCAwIDhweCA0cHggMXB4ICMxMTExMTE7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDEwcHggMXB4ICM1YzhiZWUsIDBweCAxcHggMCAjMWQyYzRkLCAwIDZweCAwcHggIzFmMzA1MywgMCA4cHggNHB4IDFweCAjMTExMTExO1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDEwcHggMXB4ICM1YzhiZWUsIDBweCAxcHggMCAjMWQyYzRkLCAwIDZweCAwcHggIzFmMzA1MywgMCA4cHggNHB4IDFweCAjMTExMTExO1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMTBweCAxcHggIzVjOGJlZSwgMHB4IDFweCAwICMxZDJjNGQsIDAgNnB4IDBweCAjMWYzMDUzLCAwIDhweCA0cHggMXB4ICMxMTExMTE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxMHB4IDFweCAjNWM4YmVlLCAwcHggMXB4IDAgIzFkMmM0ZCwgMCA2cHggMHB4ICMxZjMwNTMsIDAgOHB4IDRweCAxcHggIzExMTExMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udDogYm9sZCAxNHB4IFxcXCJoZWx2ZXRpY2EgbmV1ZVxcXCIsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBwYWRkaW5nOiA4cHggMCAxMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC0xcHggMXB4ICMxZTJkNGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aWR0aDogMjI1cHg7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxufVxcbmEucHVuY2g6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDBweCAyMHB4IDFweCAjODdhZGZmLCAwcHggMXB4IDAgIzFkMmM0ZCwgMCA2cHggMHB4ICMxZjMwNTMsIDAgOHB4IDRweCAxcHggIzExMTExMTtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMjBweCAxcHggIzg3YWRmZiwgMHB4IDFweCAwICMxZDJjNGQsIDAgNnB4IDBweCAjMWYzMDUzLCAwIDhweCA0cHggMXB4ICMxMTExMTE7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMjBweCAxcHggIzg3YWRmZiwgMHB4IDFweCAwICMxZDJjNGQsIDAgNnB4IDBweCAjMWYzMDUzLCAwIDhweCA0cHggMXB4ICMxMTExMTE7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDBweCAyMHB4IDFweCAjODdhZGZmLCAwcHggMXB4IDAgIzFkMmM0ZCwgMCA2cHggMHB4ICMxZjMwNTMsIDAgOHB4IDRweCAxcHggIzExMTExMTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMHB4IDIwcHggMXB4ICM4N2FkZmYsIDBweCAxcHggMCAjMWQyYzRkLCAwIDZweCAwcHggIzFmMzA1MywgMCA4cHggNHB4IDFweCAjMTExMTExO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5hLnB1bmNoOmFjdGl2ZSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDEwcHggMXB4ICM1YzhiZWUsIDAgMXB4IDAgIzFkMmM0ZCwgMCAycHggMCAjMWYzMDUzLCAwIDRweCAzcHggMCAjMTExMTExO1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxMHB4IDFweCAjNWM4YmVlLCAwIDFweCAwICMxZDJjNGQsIDAgMnB4IDAgIzFmMzA1MywgMCA0cHggM3B4IDAgIzExMTExMTtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxMHB4IDFweCAjNWM4YmVlLCAwIDFweCAwICMxZDJjNGQsIDAgMnB4IDAgIzFmMzA1MywgMCA0cHggM3B4IDAgIzExMTExMTtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDEwcHggMXB4ICM1YzhiZWUsIDAgMXB4IDAgIzFkMmM0ZCwgMCAycHggMCAjMWYzMDUzLCAwIDRweCAzcHggMCAjMTExMTExO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMTBweCAxcHggIzVjOGJlZSwgMCAxcHggMCAjMWQyYzRkLCAwIDJweCAwICMxZjMwNTMsIDAgNHB4IDNweCAwICMxMTExMTE7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5hIGltZyB7XFxuICBib3JkZXI6IDA7XFxufVxcbmEudHJhdmlzLWJhZGdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5iLmhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG59XFxuc3Bhbi5hbGlhcyB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxudGFibGUge1xcbiAgbWFyZ2luOiAxNXB4IDAgMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbnRyLFxcbnRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbnRkIHtcXG4gIHBhZGRpbmc6IDBweCAxNXB4IDVweCAwO1xcbn1cXG50YWJsZSAucnVsZSB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5jb2RlLFxcbnByZSxcXG50dCB7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBDb25zb2xhcywgXFxcIkx1Y2lkYSBDb25zb2xlXFxcIiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbnR0IHtcXG4gIHBhZGRpbmc6IDBweCAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIHpvb206IDE7XFxufVxcbmNvZGUge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbnByZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiAycHggMCAycHggMTVweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNiYmI7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIG1hcmdpbjogMHB4IDAgMjVweDtcXG59XFxuaW1nLmV4YW1wbGVfaW1hZ2Uge1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG59XFxuaW1nLmV4YW1wbGVfcmV0aW5hIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1heC1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIGFuZCAobWF4LXdpZHRoOiA2MDBweCksXFxuICAgICAgICAgICBvbmx5IHNjcmVlbiBhbmQgKG1heC0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMSkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBkaXYjc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBpbWcjbG9nbyB7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICBkaXYuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICB9XFxuXFxuICBwLFxcbiAgZGl2LmNvbnRhaW5lciB1bCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSxcXG4gICAgICAgICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzLzIpIGFuZCAobWF4LXdpZHRoOiA2NDBweCksXFxuICAgICAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgZGl2I3NpZGViYXIge1xcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogaW5pdGlhbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDMwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gIH1cXG5cXG4gIGltZyNsb2dvIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIGRpdi5jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgcCxcXG4gIGRpdi5jb250YWluZXIgdWwge1xcbiAgICBtYXgtd2lkdGg6IDk4JTtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgfVxcblxcbiAgdGFibGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICB0cjpmaXJzdC1jaGlsZCB0ZCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgfVxcblxcbiAgdGQudGV4dCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNDhweDtcXG4gIH1cXG5cXG4gIHRyOmxhc3QtY2hpbGQgdGQudGV4dCB7XFxuICAgIHRvcDogMTIycHg7XFxuICB9XFxuXFxuICBwcmUge1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcbn1cXG5pbWcuZmlndXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5kaXYuY29sdW1ucyB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuZGl2LmNvbHVtbnMgdWwge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbmRpdi5jb2wtNTAge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbi8qIVxcbiAqIHJldmVhbC5qc1xcbiAqIGh0dHA6Ly9sYWIuaGFraW0uc2UvcmV2ZWFsLWpzXFxuICogTUlUIGxpY2Vuc2VkXFxuICpcXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgSGFraW0gRWwgSGF0dGFiLCBodHRwOi8vaGFraW0uc2VcXG4gKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUkVTRVQgU1RZTEVTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5odG1sLFxcbmJvZHksXFxuLnJldmVhbCBkaXYsXFxuLnJldmVhbCBzcGFuLFxcbi5yZXZlYWwgYXBwbGV0LFxcbi5yZXZlYWwgb2JqZWN0LFxcbi5yZXZlYWwgaWZyYW1lLFxcbi5yZXZlYWwgaDEsXFxuLnJldmVhbCBoMixcXG4ucmV2ZWFsIGgzLFxcbi5yZXZlYWwgaDQsXFxuLnJldmVhbCBoNSxcXG4ucmV2ZWFsIGg2LFxcbi5yZXZlYWwgcCxcXG4ucmV2ZWFsIGJsb2NrcXVvdGUsXFxuLnJldmVhbCBwcmUsXFxuLnJldmVhbCBhLFxcbi5yZXZlYWwgYWJicixcXG4ucmV2ZWFsIGFjcm9ueW0sXFxuLnJldmVhbCBhZGRyZXNzLFxcbi5yZXZlYWwgYmlnLFxcbi5yZXZlYWwgY2l0ZSxcXG4ucmV2ZWFsIGNvZGUsXFxuLnJldmVhbCBkZWwsXFxuLnJldmVhbCBkZm4sXFxuLnJldmVhbCBlbSxcXG4ucmV2ZWFsIGltZyxcXG4ucmV2ZWFsIGlucyxcXG4ucmV2ZWFsIGtiZCxcXG4ucmV2ZWFsIHEsXFxuLnJldmVhbCBzLFxcbi5yZXZlYWwgc2FtcCxcXG4ucmV2ZWFsIHNtYWxsLFxcbi5yZXZlYWwgc3RyaWtlLFxcbi5yZXZlYWwgc3Ryb25nLFxcbi5yZXZlYWwgc3ViLFxcbi5yZXZlYWwgc3VwLFxcbi5yZXZlYWwgdHQsXFxuLnJldmVhbCB2YXIsXFxuLnJldmVhbCBiLFxcbi5yZXZlYWwgdSxcXG4ucmV2ZWFsIGNlbnRlcixcXG4ucmV2ZWFsIGRsLFxcbi5yZXZlYWwgZHQsXFxuLnJldmVhbCBkZCxcXG4ucmV2ZWFsIG9sLFxcbi5yZXZlYWwgdWwsXFxuLnJldmVhbCBsaSxcXG4ucmV2ZWFsIGZpZWxkc2V0LFxcbi5yZXZlYWwgZm9ybSxcXG4ucmV2ZWFsIGxhYmVsLFxcbi5yZXZlYWwgbGVnZW5kLFxcbi5yZXZlYWwgdGFibGUsXFxuLnJldmVhbCBjYXB0aW9uLFxcbi5yZXZlYWwgdGJvZHksXFxuLnJldmVhbCB0Zm9vdCxcXG4ucmV2ZWFsIHRoZWFkLFxcbi5yZXZlYWwgdHIsXFxuLnJldmVhbCB0aCxcXG4ucmV2ZWFsIHRkLFxcbi5yZXZlYWwgYXJ0aWNsZSxcXG4ucmV2ZWFsIGFzaWRlLFxcbi5yZXZlYWwgY2FudmFzLFxcbi5yZXZlYWwgZGV0YWlscyxcXG4ucmV2ZWFsIGVtYmVkLFxcbi5yZXZlYWwgZmlndXJlLFxcbi5yZXZlYWwgZmlnY2FwdGlvbixcXG4ucmV2ZWFsIGZvb3RlcixcXG4ucmV2ZWFsIGhlYWRlcixcXG4ucmV2ZWFsIGhncm91cCxcXG4ucmV2ZWFsIG1lbnUsXFxuLnJldmVhbCBuYXYsXFxuLnJldmVhbCBvdXRwdXQsXFxuLnJldmVhbCBydWJ5LFxcbi5yZXZlYWwgc2VjdGlvbixcXG4ucmV2ZWFsIHN1bW1hcnksXFxuLnJldmVhbCB0aW1lLFxcbi5yZXZlYWwgbWFyayxcXG4ucmV2ZWFsIGF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4ucmV2ZWFsIGFydGljbGUsXFxuLnJldmVhbCBhc2lkZSxcXG4ucmV2ZWFsIGRldGFpbHMsXFxuLnJldmVhbCBmaWdjYXB0aW9uLFxcbi5yZXZlYWwgZmlndXJlLFxcbi5yZXZlYWwgZm9vdGVyLFxcbi5yZXZlYWwgaGVhZGVyLFxcbi5yZXZlYWwgaGdyb3VwLFxcbi5yZXZlYWwgbWVudSxcXG4ucmV2ZWFsIG5hdixcXG4ucmV2ZWFsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBHTE9CQUwgU1RZTEVTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogVklFVyBGUkFHTUVOVFNcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LnZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5ncm93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuZ3Jvdy52aXNpYmxlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LnNocmluayB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LnNocmluay52aXNpYmxlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50Lnpvb20taW4ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuem9vbS1pbi52aXNpYmxlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LmZhZGUtb3V0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuZmFkZS1vdXQudmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuc2VtaS1mYWRlLW91dCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LnNlbWktZmFkZS1vdXQudmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuc3RyaWtlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5zdHJpa2UudmlzaWJsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LmN1cnJlbnQtdmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuY3VycmVudC12aXNpYmxlLmN1cnJlbnQtZnJhZ21lbnQge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtcmVkLFxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtY3VycmVudC1yZWQsXFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LmhpZ2hsaWdodC1ncmVlbixcXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LWN1cnJlbnQtZ3JlZW4sXFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LmhpZ2hsaWdodC1ibHVlLFxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtY3VycmVudC1ibHVlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LXJlZC52aXNpYmxlIHtcXG4gIGNvbG9yOiAjZmYyYzJkO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LWdyZWVuLnZpc2libGUge1xcbiAgY29sb3I6ICMxN2ZmMmU7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtYmx1ZS52aXNpYmxlIHtcXG4gIGNvbG9yOiAjMWI5MWZmO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LWN1cnJlbnQtcmVkLmN1cnJlbnQtZnJhZ21lbnQge1xcbiAgY29sb3I6ICNmZjJjMmQ7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtY3VycmVudC1ncmVlbi5jdXJyZW50LWZyYWdtZW50IHtcXG4gIGNvbG9yOiAjMTdmZjJlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LWN1cnJlbnQtYmx1ZS5jdXJyZW50LWZyYWdtZW50IHtcXG4gIGNvbG9yOiAjMWI5MWZmO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogREVGQVVMVCBFTEVNRU5UIFNUWUxFU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogRml4ZXMgaXNzdWUgaW4gQ2hyb21lIHdoZXJlIGl0YWxpYyBmb250cyBkaWQgbm90IGFwcGVhciB3aGVuIHByaW50aW5nIHRvIFBERiAqL1xcbi5yZXZlYWw6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5yZXZlYWwgaWZyYW1lIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qKiBQcmV2ZW50cyBsYXllcmluZyBpc3N1ZXMgaW4gY2VydGFpbiBicm93c2VyL3RyYW5zaXRpb24gY29tYmluYXRpb25zICovXFxuLnJldmVhbCBhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnJldmVhbCAuc3RyZXRjaCB7XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxuICBtYXgtaGVpZ2h0OiBub25lO1xcbn1cXG4ucmV2ZWFsIHByZS5zdHJldGNoIGNvZGUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBDT05UUk9MU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAuY29udHJvbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogMTEwcHg7XFxuICB6LWluZGV4OiAzMDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlcjogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk5OTkpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OTk5KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OTk5KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5lbmFibGVkIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2LmVuYWJsZWQ6YWN0aXZlIHtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLWxlZnQge1xcbiAgdG9wOiA0MnB4O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAyMnB4O1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtbGVmdC5mcmFnbWVudGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLXJpZ2h0IHtcXG4gIGxlZnQ6IDc0cHg7XFxuICB0b3A6IDQycHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMjJweDtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtcmlnaHQuZnJhZ21lbnRlZCB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS11cCB7XFxuICBsZWZ0OiA0MnB4O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjJweDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS11cC5mcmFnbWVudGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLWRvd24ge1xcbiAgbGVmdDogNDJweDtcXG4gIHRvcDogNzRweDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDIycHg7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtZG93bi5mcmFnbWVudGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFBST0dSRVNTIEJBUlxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAucHJvZ3Jlc3Mge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5yZXZlYWwgLnByb2dyZXNzOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogLTIwcHg7XFxufVxcbi5yZXZlYWwgLnByb2dyZXNzIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBTTElERSBOVU1CRVJcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlLW51bWJlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgei1pbmRleDogMzE7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBTTElERVNcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XFxuICBwZXJzcGVjdGl2ZTogNjAwcHg7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDQwJTtcXG4gIHBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDQwJTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiB7XFxuICAtbXMtcGVyc3BlY3RpdmU6IDYwMHB4O1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbiAgei1pbmRleDogMTA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4gODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KSwgLXdlYmtpdC10cmFuc2Zvcm0gODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KSwgdmlzaWJpbGl0eSA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpLCBvcGFjaXR5IDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxuICB0cmFuc2l0aW9uOiAtbXMtdHJhbnNmb3JtLW9yaWdpbiA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpLCB0cmFuc2Zvcm0gODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KSwgdmlzaWJpbGl0eSA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpLCBvcGFjaXR5IDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0tb3JpZ2luIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSksIHRyYW5zZm9ybSA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpLCB2aXNpYmlsaXR5IDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSksIG9wYWNpdHkgODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KTtcXG59XFxuLyogR2xvYmFsIHRyYW5zaXRpb24gc3BlZWQgc2V0dGluZ3MgKi9cXG4ucmV2ZWFsW2RhdGEtdHJhbnNpdGlvbi1zcGVlZD1cXFwiZmFzdFxcXCJdIC5zbGlkZXMgc2VjdGlvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxufVxcbi5yZXZlYWxbZGF0YS10cmFuc2l0aW9uLXNwZWVkPVxcXCJzbG93XFxcIl0gLnNsaWRlcyBzZWN0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbn1cXG4vKiBTbGlkZS1zcGVjaWZpYyB0cmFuc2l0aW9uIHNwZWVkIG92ZXJyaWRlcyAqL1xcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbi1zcGVlZD1cXFwiZmFzdFxcXCJdIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uLXNwZWVkPVxcXCJzbG93XFxcIl0ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24uc3RhY2sge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbi5wcmVzZW50LFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uLnByZXNlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB6LWluZGV4OiAxMTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5yZXZlYWwuY2VudGVyLFxcbi5yZXZlYWwuY2VudGVyIC5zbGlkZXMsXFxuLnJldmVhbC5jZW50ZXIgLnNsaWRlcyBzZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG59XFxuLyogRG9uJ3QgYWxsb3cgaW50ZXJhY3Rpb24gd2l0aCBpbnZpc2libGUgc2xpZGVzICovXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbi5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb24uZnV0dXJlLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbi5wYXN0IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucmV2ZWFsLm92ZXJ2aWV3IC5zbGlkZXMgPiBzZWN0aW9uLFxcbi5yZXZlYWwub3ZlcnZpZXcgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbi5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb24ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbi5mdXR1cmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIE1peGlucyBmb3IgcmVhZGFiaWxpdHkgb2YgdHJhbnNpdGlvbnNcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBTTElERSBUUkFOU0lUSU9OXFxuICogQWxpYXNlZCAnbGluZWFyJyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwuc2xpZGUgc2VjdGlvbiB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249c2xpZGVdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXNsaWRlLW91dF0ucGFzdCxcXG4ucmV2ZWFsLnNsaWRlIC5zbGlkZXMgPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPXNsaWRlXS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXNsaWRlLWluXS5mdXR1cmUsXFxuLnJldmVhbC5zbGlkZSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MCUsIDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwJSwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1zbGlkZV0ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXNsaWRlLW91dF0ucGFzdCxcXG4ucmV2ZWFsLnNsaWRlIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLnBhc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE1MCUpO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249c2xpZGVdLmZ1dHVyZSxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXNsaWRlLWluXS5mdXR1cmUsXFxuLnJldmVhbC5zbGlkZSAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5mdXR1cmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1MCUpO1xcbn1cXG4ucmV2ZWFsLmxpbmVhciBzZWN0aW9uIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1saW5lYXJdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWxpbmVhci1vdXRdLnBhc3QsXFxuLnJldmVhbC5saW5lYXIgLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUsIDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249bGluZWFyXS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWxpbmVhci1pbl0uZnV0dXJlLFxcbi5yZXZlYWwubGluZWFyIC5zbGlkZXMgPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkuZnV0dXJlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwJSwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTAlLCAwKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWxpbmVhcl0ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWxpbmVhci1vdXRdLnBhc3QsXFxuLnJldmVhbC5saW5lYXIgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUwJSk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1saW5lYXJdLmZ1dHVyZSxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWxpbmVhci1pbl0uZnV0dXJlLFxcbi5yZXZlYWwubGluZWFyIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTUwJSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBDT05WRVggVFJBTlNJVElPTlxcbiAqIEFsaWFzZWQgJ2RlZmF1bHQnIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249ZGVmYXVsdF0ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49ZGVmYXVsdC1vdXRdLnBhc3QsXFxuLnJldmVhbC5kZWZhdWx0IC5zbGlkZXMgPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1kZWZhdWx0XS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWRlZmF1bHQtaW5dLmZ1dHVyZSxcXG4ucmV2ZWFsLmRlZmF1bHQgLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5mdXR1cmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWRlZmF1bHRdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9ufj1kZWZhdWx0LW91dF0ucGFzdCxcXG4ucmV2ZWFsLmRlZmF1bHQgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMHB4LCAwKSByb3RhdGVYKDcwZGVnKSB0cmFuc2xhdGUzZCgwLCAtMzAwcHgsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwcHgsIDApIHJvdGF0ZVgoNzBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0zMDBweCwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1kZWZhdWx0XS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9ufj1kZWZhdWx0LWluXS5mdXR1cmUsXFxuLnJldmVhbC5kZWZhdWx0IC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwcHgsIDApIHJvdGF0ZVgoLTcwZGVnKSB0cmFuc2xhdGUzZCgwLCAzMDBweCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMHB4LCAwKSByb3RhdGVYKC03MGRlZykgdHJhbnNsYXRlM2QoMCwgMzAwcHgsIDApO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1jb252ZXhdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWNvbnZleC1vdXRdLnBhc3QsXFxuLnJldmVhbC5jb252ZXggLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWNvbnZleF0uZnV0dXJlLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9ufj1jb252ZXgtaW5dLmZ1dHVyZSxcXG4ucmV2ZWFsLmNvbnZleCAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249Y29udmV4XS5wYXN0LFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29udmV4LW91dF0ucGFzdCxcXG4ucmV2ZWFsLmNvbnZleCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwcHgsIDApIHJvdGF0ZVgoNzBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0zMDBweCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDBweCwgMCkgcm90YXRlWCg3MGRlZykgdHJhbnNsYXRlM2QoMCwgLTMwMHB4LCAwKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWNvbnZleF0uZnV0dXJlLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29udmV4LWluXS5mdXR1cmUsXFxuLnJldmVhbC5jb252ZXggLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkuZnV0dXJlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDBweCwgMCkgcm90YXRlWCgtNzBkZWcpIHRyYW5zbGF0ZTNkKDAsIDMwMHB4LCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwcHgsIDApIHJvdGF0ZVgoLTcwZGVnKSB0cmFuc2xhdGUzZCgwLCAzMDBweCwgMCk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBDT05DQVZFIFRSQU5TSVRJT05cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWNvbmNhdmVdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWNvbmNhdmUtb3V0XS5wYXN0LFxcbi5yZXZlYWwuY29uY2F2ZSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLnBhc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWNvbmNhdmVdLmZ1dHVyZSxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29uY2F2ZS1pbl0uZnV0dXJlLFxcbi5yZXZlYWwuY29uY2F2ZSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1jb25jYXZlXS5wYXN0LFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29uY2F2ZS1vdXRdLnBhc3QsXFxuLnJldmVhbC5jb25jYXZlIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLnBhc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC04MCUsIDApIHJvdGF0ZVgoLTcwZGVnKSB0cmFuc2xhdGUzZCgwLCAtODAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTgwJSwgMCkgcm90YXRlWCgtNzBkZWcpIHRyYW5zbGF0ZTNkKDAsIC04MCUsIDApO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249Y29uY2F2ZV0uZnV0dXJlLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29uY2F2ZS1pbl0uZnV0dXJlLFxcbi5yZXZlYWwuY29uY2F2ZSAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5mdXR1cmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDgwJSwgMCkgcm90YXRlWCg3MGRlZykgdHJhbnNsYXRlM2QoMCwgODAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgODAlLCAwKSByb3RhdGVYKDcwZGVnKSB0cmFuc2xhdGUzZCgwLCA4MCUsIDApO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogWk9PTSBUUkFOU0lUSU9OXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj16b29tXSxcXG4ucmV2ZWFsLnpvb20gLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPXpvb21dLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXpvb20tb3V0XS5wYXN0LFxcbi5yZXZlYWwuem9vbSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLnBhc3Qge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDE2KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDE2KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj16b29tXS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXpvb20taW5dLmZ1dHVyZSxcXG4ucmV2ZWFsLnpvb20gLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5mdXR1cmUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249em9vbV0ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXpvb20tb3V0XS5wYXN0LFxcbi5yZXZlYWwuem9vbSAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE1MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xNTAlKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPXpvb21dLmZ1dHVyZSxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXpvb20taW5dLmZ1dHVyZSxcXG4ucmV2ZWFsLnpvb20gLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkuZnV0dXJlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNTAlKTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIENVQkUgVFJBTlNJVElPTlxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbC5jdWJlIC5zbGlkZXMge1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcXG59XFxuLnJldmVhbC5jdWJlIC5zbGlkZXMgc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWluLWhlaWdodDogNzAwcHg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5yZXZlYWwuY2VudGVyLmN1YmUgLnNsaWRlcyBzZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcbi5yZXZlYWwuY3ViZSAuc2xpZGVzIHNlY3Rpb246bm90KC5zdGFjayk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpO1xcbn1cXG4ucmV2ZWFsLmN1YmUgLnNsaWRlcyBzZWN0aW9uOm5vdCguc3RhY2spOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGVmdDogNSU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgei1pbmRleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDBweCA5NXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTkwcHgpIHJvdGF0ZVgoNjVkZWcpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC05MHB4KSByb3RhdGVYKDY1ZGVnKTtcXG59XFxuLnJldmVhbC5jdWJlIC5zbGlkZXMgPiBzZWN0aW9uLnN0YWNrIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4ucmV2ZWFsLmN1YmUgLnNsaWRlcyA+IHNlY3Rpb24ucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKTtcXG59XFxuLnJldmVhbC5jdWJlIC5zbGlkZXMgPiBzZWN0aW9uLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlWSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZVkoOTBkZWcpO1xcbn1cXG4ucmV2ZWFsLmN1YmUgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uLnBhc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKSByb3RhdGVYKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApIHJvdGF0ZVgoOTBkZWcpO1xcbn1cXG4ucmV2ZWFsLmN1YmUgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCkgcm90YXRlWCgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKSByb3RhdGVYKC05MGRlZyk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBQQUdFIFRSQU5TSVRJT05cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwucGFnZSAuc2xpZGVzIHtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiAwJSA1MCU7XFxuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDAlIDUwJTtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDMwMDBweDtcXG4gIHBlcnNwZWN0aXZlOiAzMDAwcHg7XFxufVxcbi5yZXZlYWwucGFnZSAuc2xpZGVzIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnJldmVhbC5wYWdlIC5zbGlkZXMgc2VjdGlvbi5wYXN0IHtcXG4gIHotaW5kZXg6IDEyO1xcbn1cXG4ucmV2ZWFsLnBhZ2UgLnNsaWRlcyBzZWN0aW9uOm5vdCguc3RhY2spOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KTtcXG59XFxuLnJldmVhbC5wYWdlIC5zbGlkZXMgc2VjdGlvbjpub3QoLnN0YWNrKTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxlZnQ6IDUlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwcHggOTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC05MHB4KSByb3RhdGVYKDY1ZGVnKTtcXG59XFxuLnJldmVhbC5wYWdlIC5zbGlkZXMgPiBzZWN0aW9uLnN0YWNrIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4ucmV2ZWFsLnBhZ2UgLnNsaWRlcyA+IHNlY3Rpb24ucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTQwJSwgMCwgMCkgcm90YXRlWSgtODBkZWcpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDAlLCAwLCAwKSByb3RhdGVZKC04MGRlZyk7XFxufVxcbi5yZXZlYWwucGFnZSAuc2xpZGVzID4gc2VjdGlvbi5mdXR1cmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLnJldmVhbC5wYWdlIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbi5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNDAlLCAwKSByb3RhdGVYKDgwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTQwJSwgMCkgcm90YXRlWCg4MGRlZyk7XFxufVxcbi5yZXZlYWwucGFnZSAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb24uZnV0dXJlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBGQURFIFRSQU5TSVRJT05cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1mYWRlXSxcXG4ucmV2ZWFsLmZhZGUgLnNsaWRlcyBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSksXFxuLnJldmVhbC5mYWRlIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG4ucmV2ZWFsLmZhZGUub3ZlcnZpZXcgLnNsaWRlcyBzZWN0aW9uLFxcbi5yZXZlYWwuZmFkZS5vdmVydmlldyAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIE5PIFRSQU5TSVRJT05cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPW5vbmVdLFxcbi5yZXZlYWwubm9uZSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBQQVVTRUQgTU9ERVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAucGF1c2Utb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcbi5yZXZlYWwucGF1c2VkIC5wYXVzZS1vdmVybGF5IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogRkFMTEJBQ0tcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5uby10cmFuc2Zvcm1zIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5uby10cmFuc2Zvcm1zIC5yZXZlYWwgLnNsaWRlcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5uby10cmFuc2Zvcm1zIC5yZXZlYWwgLmNvbnRyb2xzLFxcbi5uby10cmFuc2Zvcm1zIC5yZXZlYWwgLnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm5vLXRyYW5zZm9ybXMgLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC01MCU7XFxuICBtYXJnaW46IDcwcHggMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuLm5vLXRyYW5zZm9ybXMgLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gc2VjdGlvbiB7XFxuICBsZWZ0OiAwO1xcbn1cXG4ucmV2ZWFsIC5uby10cmFuc2l0aW9uLFxcbi5yZXZlYWwgLm5vLXRyYW5zaXRpb24gKiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFBFUi1TTElERSBCQUNLR1JPVU5EU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAuYmFja2dyb3VuZHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XFxuICBwZXJzcGVjdGl2ZTogNjAwcHg7XFxufVxcbi5yZXZlYWwgLnNsaWRlLWJhY2tncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxufVxcbi5yZXZlYWwgLnNsaWRlLWJhY2tncm91bmQuc3RhY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5yZXZlYWwgLnNsaWRlLWJhY2tncm91bmQucHJlc2VudCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnByaW50LXBkZiAucmV2ZWFsIC5zbGlkZS1iYWNrZ3JvdW5kIHtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuLyogVmlkZW8gYmFja2dyb3VuZHMgKi9cXG4ucmV2ZWFsIC5zbGlkZS1iYWNrZ3JvdW5kIHZpZGVvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbiAgbWF4LWhlaWdodDogbm9uZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi8qIEltbWVkaWF0ZSB0cmFuc2l0aW9uIHN0eWxlICovXFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1ub25lXSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZCxcXG4ucmV2ZWFsID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPW5vbmVdIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcbi8qIFNsaWRlICovXFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1zbGlkZV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1zbGlkZV0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXNsaWRlXSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQucGFzdFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1zbGlkZV0ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xcbn1cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXNsaWRlXSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmUsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249c2xpZGVdIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcXG59XFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1zbGlkZV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXNsaWRlXSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249c2xpZGVdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249c2xpZGVdIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcXG59XFxuLyogQ29udmV4ICovXFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb252ZXhdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kLnBhc3QsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPWNvbnZleF0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29udmV4XSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmUsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29udmV4XSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG59XFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb252ZXhdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQucGFzdCxcXG4ucmV2ZWFsID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQucGFzdFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb252ZXhdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApIHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApIHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG59XFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb252ZXhdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29udmV4XSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApIHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCkgcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbn1cXG4vKiBDb25jYXZlICovXFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb25jYXZlXSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQucGFzdFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb25jYXZlXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29uY2F2ZV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPWNvbmNhdmVdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29uY2F2ZV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPWNvbmNhdmVdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApIHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKSByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbn1cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPWNvbmNhdmVdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29uY2F2ZV0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKSByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCkgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxufVxcbi8qIFpvb20gKi9cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmRbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249em9vbV0ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbn1cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kLnBhc3QsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxNik7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249em9vbV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249em9vbV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxNik7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249em9vbV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmUsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZCA+IC5zbGlkZS1iYWNrZ3JvdW5kLmZ1dHVyZVtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj16b29tXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbn1cXG4vKiBHbG9iYWwgdHJhbnNpdGlvbiBzcGVlZCBzZXR0aW5ncyAqL1xcbi5yZXZlYWxbZGF0YS10cmFuc2l0aW9uLXNwZWVkPVxcXCJmYXN0XFxcIl0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcbn1cXG4ucmV2ZWFsW2RhdGEtdHJhbnNpdGlvbi1zcGVlZD1cXFwic2xvd1xcXCJdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogT1ZFUlZJRVdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwub3ZlcnZpZXcge1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA3MDBweDtcXG4gIHBlcnNwZWN0aXZlOiA3MDBweDtcXG59XFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzIHNlY3Rpb24ge1xcbiAgaGVpZ2h0OiA3MDBweDtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ucmV2ZWFsLm92ZXJ2aWV3IC5zbGlkZXMgc2VjdGlvbjpob3ZlcixcXG4ucmV2ZWFsLm92ZXJ2aWV3IC5zbGlkZXMgc2VjdGlvbi5wcmVzZW50IHtcXG4gIG91dGxpbmU6IDEwcHggc29saWQgcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjQpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IDEwcHg7XFxufVxcbi5yZXZlYWwub3ZlcnZpZXcgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzIHNlY3Rpb246YWZ0ZXIsXFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzIHNlY3Rpb246YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzID4gc2VjdGlvbi5zdGFjayB7XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsLm92ZXJ2aWV3IC5iYWNrZ3JvdW5kcyB7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xcbiAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxufVxcbi5yZXZlYWwub3ZlcnZpZXcgLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3V0bGluZTogMTBweCBzb2xpZCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMSk7XFxuICBvdXRsaW5lLW9mZnNldDogMTBweDtcXG59XFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzIHNlY3Rpb24sXFxuLnJldmVhbC5vdmVydmlldy1kZWFjdGl2YXRpbmcgLnNsaWRlcyBzZWN0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcbi5yZXZlYWwub3ZlcnZpZXcgLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kLFxcbi5yZXZlYWwub3ZlcnZpZXctZGVhY3RpdmF0aW5nIC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbn1cXG4ucmV2ZWFsLm92ZXJ2aWV3LWFuaW1hdGVkIC5zbGlkZXMge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUlRMIFNVUFBPUlRcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwucnRsIC5zbGlkZXMsXFxuLnJldmVhbC5ydGwgLnNsaWRlcyBoMSxcXG4ucmV2ZWFsLnJ0bCAuc2xpZGVzIGgyLFxcbi5yZXZlYWwucnRsIC5zbGlkZXMgaDMsXFxuLnJldmVhbC5ydGwgLnNsaWRlcyBoNCxcXG4ucmV2ZWFsLnJ0bCAuc2xpZGVzIGg1LFxcbi5yZXZlYWwucnRsIC5zbGlkZXMgaDYge1xcbiAgZGlyZWN0aW9uOiBydGw7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuLnJldmVhbC5ydGwgcHJlLFxcbi5yZXZlYWwucnRsIGNvZGUge1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxufVxcbi5yZXZlYWwucnRsIG9sLFxcbi5yZXZlYWwucnRsIHVsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ucmV2ZWFsLnJ0bCAucHJvZ3Jlc3Mgc3BhbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBQQVJBTExBWCBCQUNLR1JPVU5EXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsLmhhcy1wYXJhbGxheC1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kcyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xcbn1cXG4vKiBHbG9iYWwgdHJhbnNpdGlvbiBzcGVlZCBzZXR0aW5ncyAqL1xcbi5yZXZlYWwuaGFzLXBhcmFsbGF4LWJhY2tncm91bmRbZGF0YS10cmFuc2l0aW9uLXNwZWVkPVxcXCJmYXN0XFxcIl0gLmJhY2tncm91bmRzIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG59XFxuLnJldmVhbC5oYXMtcGFyYWxsYXgtYmFja2dyb3VuZFtkYXRhLXRyYW5zaXRpb24tc3BlZWQ9XFxcInNsb3dcXFwiXSAuYmFja2dyb3VuZHMge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMSU5LIFBSRVZJRVcgT1ZFUkxBWVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5yZXZlYWwgLm92ZXJsYXkudmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnJldmVhbCAub3ZlcmxheSAuc3Bpbm5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBtYXJnaW46IC0xNnB4IDAgMCAtMTZweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaElBQWdBUE1BQUptWm1mJTJGJTJGJTJGNiUyQnZyOG5KeWJXMXRjREF3T2pvNk52YjI2aW9xS09qbzdPenMlMkZMeTh2ejglMkZBQUFBQUFBQUFBQUFDSCUyRkMwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaCUyRmhwRGNtVmhkR1ZrSUhkcGRHZ2dZV3BoZUd4dllXUXVhVzVtYndBaCUyQlFRSkNnQUFBQ3dBQUFBQUlBQWdBQUFFNXhESVNXbGhwZXJONTJKTGhTU2RSZ3dWbzFJQ1FaUlVzaXdIcFRKVDRpb3dOUzh2eVcyaWNDRjZrOEhNTUJrQ0VEc2t4VEJEQVp3dUFra3FJZnhJUXloQlFCRnZBUVNESVRNNVZEVzZYTkU0S2FnTmg2Qmd3ZTYwc21RVUIzZDRSejFaQkFwbkZBU0RkMGhpaGgxMkJrRTlrakFKVmx5Y1hJZzdDUUlGQTZTbG5KODdwYXFiU0tpS29xdXNuYk1kbURDMnRYUWxrVWh6aVl0eVdUeElmeTZCRThXSnQ1WUp2cEppdnhOYUdtTEhUMFZuT2dTWWYwZFpYUzdBUGRwQjMwOVJuSE9HNWdEcVhHTERhQzQ1N0QxelolMkZWJTJGbm1PTTgyWGlIUkxZS2hLUDFvWm1BRGRFQUFBaCUyQlFRSkNnQUFBQ3dBQUFBQUlBQWdBQUFFNmhESVNXbFpwT3JOcDFsR05SU2RScERVb2xJR3c1UlVZaGhIdWtxRnU4RHNyRXlxbldUaEd2QW1oVmx0ZUJ2b2pwVEREQlVFSUZ3TUZCUkFtQmtTZ09yQkZab2dDQVN3QkRFWSUyRkNaU2c3R1NFMGdTQ2pRQk1WRzAyM3hXQmhrbEFub0VkaFFFZnlOcU1JY0tqaFJzakVkbmV6QiUyQkE0azhnVHdKaEZ1aVc0ZG9rWGlsb1VlcEJBcDVxYUtwcDYlMkJIbzdhV1c1NHdsN29idkVlMGtSdW9wbENHZXB3U3gyakp2cUhFbUd0NndoSnBHcGZKQ0htT29OSEthSHg2MVdpU1I5MkU0bGJGb3ElMkJCNlFEdHVldGNhQlBuVzYlMkJPN3dESHBJaUs5U2FWSzVHZ1Y1NDN0empnR2NnaEFnQWglMkJRUUpDZ0FBQUN3QUFBQUFJQUFnQUFBRTdoRElTU2t4cE9yTjV6RkhOV1JkaFNpVm9WTEhzcFJVTW95VWFreUVlOFBUUENBVFc5QTE0RTBVdnVBS01OQVpLWVVaQ2lCTXVCYWtTUUtHOEcyRnpVV294MkFVdEFRRmNCS2xWUW9MZ1FSZVpoUWxDSUplc1FYSTVCMENCblVNT3hNQ2Vub0NmVENFV0JzSkNvbFRNQU5sZHgxNUJHczhCNXdsQ1o5UG82T0prd21ScG5xa3FudVNyYXlxZkttcXBMYWpvaVc1SEpxN0ZMMUdyMm1NTWNLVU1JaUpnSWVteTd4WnRKc1Rtc000eEhpS3Y1S01DWHFmeVVDSkVvblhQTjJyQU9JQW1zZkIzdVBvQUslMkIlMkJHJTJCdzQ4ZWRaUEslMkJNNmhMSnBRZzQ4NGVuWElkUUZTUzF1NlVoa3NFTkVRQUFJZmtFQ1FvQUFBQXNBQUFBQUNBQUlBQUFCT2NReUVtcEdLTHF6V2NaUlZVUW5aWWcxYUJTaDJHVVZFSVEyYVFPRSUyQkclMkJjRDRudHBXa1pRajFKSWlaSW9nREZGeUhJMFV4UXdGdWdNU09GSVBKZnRmVkFFb1pMQmJjTEVGaGxRaXFHcDFWZDE0MEFVa2xVTjNlQ0E1MUMxRVdNek1DZXpDQkJta3hWSVZIQldkM0hIbDlKUU9JSlNkU25KMFRES0NoQ3dVSmpvV01QYUdxREthbm5hc01vNlduTTU2MlI1WWx1WlJ3dXIwd3BncVpFN05LVW0lMkJGTlJQSWhqQkp4S1p0ZVd1SUJNTjR6Uk1JVkloZmZjZ29qd0NGMTE3aTRubExuWTV6dFJMc25PayUyQmFWJTJCb0pZN1Y3bTc2UGRrUzR0cktjZGcwWmMwdFRjS2tSQUFBSWZrRUNRb0FBQUFzQUFBQUFDQUFJQUFBQk80UXlFa3BLcWpxelNjcFJhVmtYWldRRXhpbXcxQlNDVUVJbERvaHJmdDZjcEtDazV4aWQ1TU5KVGFBSWtla0tHUWtXeUtIa3ZoS3NSN0FSbWl0a0FZRFlSSWJVUVJRaldCd0pSekNoaTlDUmxCY1kxVU40ZzAlMkZWTkIwQWxjdmNBWUhSeVpQZEVRRllWOGNjd1I1SFd4RUowMlltUk1MbkoxeENZcDBZNWlkcFF1aG9wbW1DMktnb2pLYXNVUURrNUJOQXd3TU9oMlJ0UnE1dVF1UFpLR0lKUUlHd0F3R2Y2STBKWE1wQzhDN2tYV0RCSU5GTXhTNERLTUFXVldBR1lzQWROcVc1dWFSeGtTS0pPWkthVTN0UE9CWjREdUsyTEFUZ0poa1BKTWdUd0tDZEZqeVBIRW5LeEZDRGhFQUFDSDVCQWtLQUFBQUxBQUFBQUFnQUNBQUFBVHpFTWhKYVZLcDZzMm5Ja29sSUoyV2tCU2hwa1ZSV3FxUXJoTFNFdTlNWkpLSzl5MVpycVlLOVdpQ2xtdm9VYUY4Z0lRU05lRjFFcjRNTkZuNFNSU0RBUldyb0FJRVRnMWlWd3VIallCMWtZYzFtd3J1d1hLQzlnbXNKWGxpR3hjJTJCWGlVQ2J5OXlkaDFzT1NkTWtwTVRCcGFYQnpzZmhvYzVsNThHbTV5VG9BYVpoYU9VcWprRGdDV05IQVVMQ3dPTGFUbXpzd2FkRXFnZ1F3Z0h1UXNISW9aQ0hRTU1RZ1FHdWJWRWN4T1BGQWNNREFZVUE4NWVXQVJtZlNSUUNkY01lMHplUDFBQXlnd0xsSnRQTkFBTDE5REFSZFB6Qk9XU20xYnJKQmk0NXNvUkFXUUFBa3JRSXlrU2hROXdWaEhDd0NRQ0FDSDVCQWtLQUFBQUxBQUFBQUFnQUNBQUFBVHJFTWhKYVZLcDZzMm5Ja3FGWkYyVklCV2hVc0phVG9rcVVDb0JxJTJCRTcxU1JRZXlxVVRvTEE3VnhGMEpEeUlRaCUyRk1WVlBNdDFFQ1psZmNqWko5bUlLb2FUbDFNUklsNW80Q1VLWE93bXlyQ0luQ0txY1d0dmFkTDJTWWh5QVN5TkRKMHVJaVJNRGpJMEZkMzAlMkZpSTJVQTVHU1M1VURqMmw2Tm9xZ09nTjRna3NFQmdZRmYwRkRxS2dIbnlaOU9YOEhyZ1lIZEhwY0hRVUxYQVMycUtwRU5SZzdlQU1MQzdrVEJhaXhVWUZrS0F6V0FBbkxDN0ZMVnhMV0RCTEtDd2FLVFVMZ0V3YkxBNGhKdE9rU0JOcUlUVDN4RWdmTHBCdHpFJTJGaml1TDA0UkdFQmd3V2hTaFJnUUV4SEJBQWglMkJRUUpDZ0FBQUN3QUFBQUFJQUFnQUFBRTd4RElTV2xTcWVyTnB5SktoV1JkbFNBVm9WTENXazZKS2xBcUFhdmhPOVVrVUhzcWxFNkN3TzFjUmRDUThpRUlmekZWVHpMZFJBbVpYM0kyU2ZaaUNxR2s1ZFRFU0plYU9BbENsenNKc3F3aUp3aXFuRnJiMm5TOWttSWNnRXNqUXlkTGlJbEhlaGhwZWphSWp6aDllb21TalpSJTJCaXBzbFdJUkxBZ01ET1IyRE9xS29nVEI5cENVSkJhZ0RCWFI2WEIwRUJrSUlzYVJzR0dNTUF4b0RCZ1lIVEtKaVVZRUdEQXpIQzlFQUNjVUdrSWdGemd3WjBRc1NCY1hIaVF2T3dnRGRFd2ZGczBzRHp0NFM2Qks0eFlqa0RPem4wdW5GZUJ6T0JpakltMURnbWc1WUZRd3NDTWpwMW9KOEx5SUFBQ0g1QkFrS0FBQUFMQUFBQUFBZ0FDQUFBQVR3RU1oSmFWS3A2czJuSWtxRlpGMlZJQldoVXNKYVRva3FVQ29CcSUyQkU3MVNSUWV5cVVUb0xBN1Z4RjBKRHlJUWglMkZNVlZQTXQxRUNabGZjalpKOW1JS29hVGwxTVJJbDVvNENVS1hPd215ckNJbkNLcWNXdHZhZEwyU1loeUFTeU5ESjB1SWlVZDZHR2w2Tm9pUE9IMTZpWktObEg2S215V0ZPZ2dIaEVFdkF3d01BME45R0JzRUM2YW1oblZjRXdhdkRBYXpHd0lEYUgxaXBhWUxCVVRDR2dRREE4TmRIejBGcHFnVEJ3c0xxQWJXQUFuSUE0RldLZE1MR2RZR0VncmFpZ2JUME9JVEJjZzVRd1BUNHhMclJPWkw2QXVRQVBVUzdieExwb1dpZFkwSnR4TEhLaHd3TUpCVEhnUEtkRVFBQUNINUJBa0tBQUFBTEFBQUFBQWdBQ0FBQUFUckVNaEphVktwNnMybklrcUZaRjJWSUJXaFVzSmFUb2txVUNvQnElMkJFNzFTUlFleXFVVG9MQTdWeEYwSkR5SVFoJTJGTVZWUE10MUVDWmxmY2paSjltSUtvYVRsMU1SSWw1bzRDVUtYT3dteXJDSW5DS3FjV3R2YWRMMlNZaHlBU3lOREowdUlpVWQ2R0FVTERKQ1JpWG8xQ3BHWERKT1VqWSUyQllpcDlEaFRvSkE0UkJMd01MQ3dWRGZSZ2JCQWFxcW9aMVhCTUhzd3NIdHh0RmFIMWlxYW9HTmdBSXhScGJGQWdmUFFTcXBiZ0dCcVVEMXdCWGVDWXAxQVlaMTlKSk9ZZ0gxS3dBNFVCdlF3WFVCeFBxVkQ5TDNzYnAyQk5rMnh2dkZQSmQlMkJNRkNONkhBQUlLZ05nZ1kwS3RFQkFBaCUyQlFRSkNnQUFBQ3dBQUFBQUlBQWdBQUFFNkJESVNXbFNxZXJOcHlKS2hXUmRsU0FWb1ZMQ1drNkpLbEFxQWF2aE85VWtVSHNxbEU2Q3dPMWNSZENROGlFSWZ6RlZUekxkUkFtWlgzSTJTZllJRE1hQUZkVEVTSmVhRURBSU14WUZxck9VYU5XNEU0T2JZY0NYYWlCVkVnVUxlME5KYXh4dFlrc2poMk5Ma1pJU2dEZ0poSHRoa3BVNG1XNmJsUmlZbVpPbGg0SldrRHFJTHdVR0JuRTZUWUViQ2dldnIwTjFnSDRBdDdnSGlScEZhTE5ycnE4SE5nQUpBNzBBV3hRSUgxJTJCdnNZTURBelpRUEM5VkNOa0RXVWhHa3VFNVB4Sk53aVVLNFVmTHpPbEQ0V3Z6QUhhb0c5bnhQaTVkJTJCallVcWZBaGh5a09Gd0pXaUFBQUlma0VDUW9BQUFBc0FBQUFBQ0FBSUFBQUJQQVF5RWxwVXFucXphY2lTb1ZrWFZVTUZhRlN3bHBPQ2NNWWxFckFhdmhPTW5OTE5vOEtzWnNNWkl0SkVJRElGU2tMR1FvUVROaElzRmVoUnd3MkNRTEtGMHRZR0tZU2clMkJ5Z3NaSXVOcUprc0tnYmZnSUdlcE5vMmNJVUIzVjFCM0l2TmlCWU5RYURTVHRmaGh4MEN3VlBJMFVKZTAlMkJibTRnNVZnY0dvcU9jbmptanFEU2RuaGdFb2FtY3NadVhPMWFXUXk4S0F3T0F1VFlZR3dpN3c1aCUyQktyMFNKOE1GaWhwTmJ4JTJCNEVycTdCWUJ1enNkaUgxakNBem9TZmwwclZpck5iUlhsQkJsTFglMkJCUDBYSkxBUEd6VGtBdUFPcWIwV1Q1QUg3T2NkQ201QjhUZ1J3U1JLSUhRdGFMQ3dnMVJBQUFPd0FBQUFBQUFBQUFBQSUzRCUzRCk7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLnJldmVhbCAub3ZlcmxheSBoZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgei1pbmRleDogMjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5IGhlYWRlciBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgb3BhY2l0eTogMC42O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnJldmVhbCAub3ZlcmxheSBoZWFkZXIgYTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5IGhlYWRlciBhIC5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5yZXZlYWwgLm92ZXJsYXkgaGVhZGVyIGEuY2xvc2UgLmljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUJra2xFUVZSWVI4V1g0VkhETUF4RzZ3bm9KckFCWlFQWUJDYUJUV0FEMmcxZ0U1Z2c2T09zWHV4SWxyNDBkODFkZnJTSjlWNGMyVkxLN3NwSHVUSi81d3BNMDdRWHVYYzVYMG9wWDJ0RUpjYWRqSHVWODBsaS9GZ3hUSUVLLzVRQkNJQ0JENnhFaFNNR0hnUVBnQmdMaVlWQUIxZHBTcUtEYXd4VG9oRnc0SlNFQTNjbHpnSUJQQ1VSd0UySnVjQlI3cmhQSkp2NU9wSndEWCtTZkRqZ3gxd0FDUWVKRzFhQ2hQOUsvSU1tZFo4RHRFU1YxV3lQM0J0NE13TTZzajROTXhNWWlxVVdIUXU0S1lBL1NZa0lqT3NtM0JYWVdNS0ZEd1Uya2hqQ1E0RUxKVUo0U21DbFJBck9DbVNYR3VLbWEwZllENUNiekh4RnBDU0dBaGZBVlNTVUdEVWsyQldaYWZmMmc2R0UxNUJzQlE5bndtcElHRGl5SFFkZHdOVE1La2JaYWY5ZmFqWFFjYTFFWDQ0cHVKWlVzblkwT2JHbUlURTNHVkxDYkVoUVVqR1Z0MTQ2ajZvYXNXTis0OVZwaDJ3MXBaNUVhbnNOWnFLQm0xdHhiVTU3aVJSY1o4NlJXTURkV3RCSlVIQkh3b1FQaTFHVitKQ2JudG12b2s3aVRYNC9VcDltZ3lUYy9GSllEVGNuZGdIL0FBNUEvQ0hzeUVrVkFBQUFBRWxGVGtTdVFtQ0MpO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5IGhlYWRlciBhLmV4dGVybmFsIC5pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBY0VsRVFWUllSKzJXU1FvQUlRd0V6ZjhmN1hpT01rVVF4VVBsR2tNM2hWbWlRZlFSOUdZbkgxU3NBUWxJNERpQnFrQ01vTmI5eTJlOTBJQUVKUEFjZ2R6blU5K2VuZ01hZUo3QXpoNVkxVTY3Z0FobzREcUJxbUIxYnVBZjBNQjFBbFZCZWs4M1pQa21KTUdjMXdBUitBQXFvZC9COTdUUnBRQUFBQUJKUlU1RXJrSmdnZz09KTtcXG59XFxuLnJldmVhbCAub3ZlcmxheSAudmlld3BvcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5Lm92ZXJsYXktcHJldmlldyAudmlld3BvcnQgaWZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5Lm92ZXJsYXktcHJldmlldy5sb2FkZWQgLnZpZXdwb3J0IGlmcmFtZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnJldmVhbCAub3ZlcmxheS5vdmVybGF5LXByZXZpZXcubG9hZGVkIC5zcGlubmVyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxufVxcbi5yZXZlYWwgLm92ZXJsYXkub3ZlcmxheS1oZWxwIC52aWV3cG9ydCB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5Lm92ZXJsYXktaGVscCAudmlld3BvcnQgLnZpZXdwb3J0LWlubmVyIHtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxufVxcbi5yZXZlYWwgLm92ZXJsYXkub3ZlcmxheS1oZWxwIC52aWV3cG9ydCAudmlld3BvcnQtaW5uZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnJldmVhbCAub3ZlcmxheS5vdmVybGF5LWhlbHAgLnZpZXdwb3J0IC52aWV3cG9ydC1pbm5lciB0YWJsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnJldmVhbCAub3ZlcmxheS5vdmVybGF5LWhlbHAgLnZpZXdwb3J0IC52aWV3cG9ydC1pbm5lciB0YWJsZSB0aCxcXG4ucmV2ZWFsIC5vdmVybGF5Lm92ZXJsYXktaGVscCAudmlld3BvcnQgLnZpZXdwb3J0LWlubmVyIHRhYmxlIHRkIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnJldmVhbCAub3ZlcmxheS5vdmVybGF5LWhlbHAgLnZpZXdwb3J0IC52aWV3cG9ydC1pbm5lciB0YWJsZSB0aCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUExBWUJBQ0sgQ09NUE9ORU5UXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5wbGF5YmFjayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAxNXB4O1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgei1pbmRleDogMzA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XFxufVxcbi5yZXZlYWwub3ZlcnZpZXcgLnBsYXliYWNrIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBST0xMSU5HIExJTktTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5yb2xsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDQwMHB4O1xcbiAgcGVyc3BlY3RpdmU6IDQwMHB4O1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxufVxcbi5yZXZlYWwgLnJvbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG4ucmV2ZWFsIC5yb2xsIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwIDJweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsIC5yb2xsOmhvdmVyIHNwYW4ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtNDVweCkgcm90YXRlWCg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtNDVweCkgcm90YXRlWCg5MGRlZyk7XFxufVxcbi5yZXZlYWwgLnJvbGwgc3BhbjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMCAycHg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDExMCUsIDBweCkgcm90YXRlWCgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDExMCUsIDBweCkgcm90YXRlWCgtOTBkZWcpO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogU1BFQUtFUiBOT1RFU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCBhc2lkZS5ub3RlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogWk9PTSBQTFVHSU5cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi56b29tZWQgLnJldmVhbCAqLFxcbi56b29tZWQgLnJldmVhbCAqOmJlZm9yZSxcXG4uem9vbWVkIC5yZXZlYWwgKjphZnRlciB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuLnpvb21lZCAucmV2ZWFsIC5wcm9ncmVzcyxcXG4uem9vbWVkIC5yZXZlYWwgLmNvbnRyb2xzIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi56b29tZWQgLnJldmVhbCAucm9sbCBzcGFuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi56b29tZWQgLnJldmVhbCAucm9sbCBzcGFuOmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLyoqXFxuICogQSBzaW1wbGUgdGhlbWUgZm9yIHJldmVhbC5qcyBwcmVzZW50YXRpb25zLCBzaW1pbGFyXFxuICogdG8gdGhlIGRlZmF1bHQgdGhlbWUuIFRoZSBhY2NlbnQgY29sb3IgaXMgZGFya2JsdWUuXFxuICpcXG4gKiBUaGlzIHRoZW1lIGlzIENvcHlyaWdodCAoQykgMjAxMiBPd2VuIFZlcnN0ZWVnLCBodHRwczovL2dpdGh1Yi5jb20vU3RlcmVvdHlwaWNhbEFwcHMuIEl0IGlzIE1JVCBsaWNlbnNlZC5cXG4gKiByZXZlYWwuanMgaXMgQ29weXJpZ2h0IChDKSAyMDExLTIwMTIgSGFraW0gRWwgSGF0dGFiLCBodHRwOi8vaGFraW0uc2VcXG4gKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogR0xPQkFMIFNUWUxFU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLnJldmVhbCB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG46OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45OSk7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbixcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbiB7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBIRUFERVJTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIGgxLFxcbi5yZXZlYWwgaDIsXFxuLnJldmVhbCBoMyxcXG4ucmV2ZWFsIGg0LFxcbi5yZXZlYWwgaDUsXFxuLnJldmVhbCBoNiB7XFxuICBtYXJnaW46IDAgMCAyMHB4IDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiAnTmV3cyBDeWNsZScsIEltcGFjdCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5yZXZlYWwgaDEge1xcbiAgZm9udC1zaXplOiAzLjc3ZW07XFxufVxcbi5yZXZlYWwgaDIge1xcbiAgZm9udC1zaXplOiAyLjExZW07XFxufVxcbi5yZXZlYWwgaDMge1xcbiAgZm9udC1zaXplOiAxLjU1ZW07XFxufVxcbi5yZXZlYWwgaDQge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5yZXZlYWwgaDEge1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBPVEhFUlxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCBwIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuLyogRW5zdXJlIGNlcnRhaW4gZWxlbWVudHMgYXJlIG5ldmVyIGxhcmdlciB0aGFuIHRoZSBzbGlkZSBpdHNlbGYgKi9cXG4ucmV2ZWFsIGltZyxcXG4ucmV2ZWFsIHZpZGVvLFxcbi5yZXZlYWwgaWZyYW1lIHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWF4LWhlaWdodDogOTUlO1xcbn1cXG4ucmV2ZWFsIHN0cm9uZyxcXG4ucmV2ZWFsIGIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5yZXZlYWwgZW0ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4ucmV2ZWFsIG9sLFxcbi5yZXZlYWwgZGwsXFxuLnJldmVhbCB1bCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luOiAwIDAgMCAxZW07XFxufVxcbi5yZXZlYWwgb2wge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xcbn1cXG4ucmV2ZWFsIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG59XFxuLnJldmVhbCB1bCB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcXG59XFxuLnJldmVhbCB1bCB1bCB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXG59XFxuLnJldmVhbCB1bCB1bCxcXG4ucmV2ZWFsIHVsIG9sLFxcbi5yZXZlYWwgb2wgb2wsXFxuLnJldmVhbCBvbCB1bCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG4ucmV2ZWFsIGR0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucmV2ZWFsIGRkIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG4ucmV2ZWFsIHEsXFxuLnJldmVhbCBibG9ja3F1b3RlIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuLnJldmVhbCBibG9ja3F1b3RlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLnJldmVhbCBibG9ja3F1b3RlIHA6Zmlyc3QtY2hpbGQsXFxuLnJldmVhbCBibG9ja3F1b3RlIHA6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5yZXZlYWwgcSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5yZXZlYWwgcHJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMC41NWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLnJldmVhbCBjb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5yZXZlYWwgcHJlIGNvZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kOiAjM0YzRjNGO1xcbiAgY29sb3I6ICNEQ0RDREM7XFxufVxcbi5yZXZlYWwgdGFibGUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG4ucmV2ZWFsIHRhYmxlIHRoIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucmV2ZWFsIHRhYmxlIHRoLFxcbi5yZXZlYWwgdGFibGUgdGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtIDAuMmVtIDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbn1cXG4ucmV2ZWFsIHRhYmxlIHRoW2FsaWduPVxcXCJjZW50ZXJcXFwiXSxcXG4ucmV2ZWFsIHRhYmxlIHRkW2FsaWduPVxcXCJjZW50ZXJcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5yZXZlYWwgdGFibGUgdGhbYWxpZ249XFxcInJpZ2h0XFxcIl0sXFxuLnJldmVhbCB0YWJsZSB0ZFthbGlnbj1cXFwicmlnaHRcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnJldmVhbCB0YWJsZSB0cjpsYXN0LWNoaWxkIHRkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5yZXZlYWwgc3VwIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG59XFxuLnJldmVhbCBzdWIge1xcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcXG59XFxuLnJldmVhbCBzbWFsbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnJldmVhbCBzbWFsbCAqIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMSU5LU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCBhIHtcXG4gIGNvbG9yOiAjMDAwMDhCO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcXG59XFxuLnJldmVhbCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwMGYxO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5yZXZlYWwgLnJvbGwgc3BhbjphZnRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMwMDAwM2Y7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBJTUFHRVNcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgc2VjdGlvbiBpbWcge1xcbiAgbWFyZ2luOiAxNXB4IDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjMDAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLnJldmVhbCBhIGltZyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xcbn1cXG4ucmV2ZWFsIGE6aG92ZXIgaW1nIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDA4QjtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBOQVZJR0FUSU9OIENPTlRST0xTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtbGVmdCxcXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtbGVmdC5lbmFibGVkIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMDA4QjtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLXJpZ2h0LFxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS1yaWdodC5lbmFibGVkIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDhCO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtdXAsXFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLXVwLmVuYWJsZWQge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDA4QjtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLWRvd24sXFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLWRvd24uZW5hYmxlZCB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDhCO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtbGVmdC5lbmFibGVkOmhvdmVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMDBmMTtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLXJpZ2h0LmVuYWJsZWQ6aG92ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDAwZjE7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS11cC5lbmFibGVkOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDAwZjE7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS1kb3duLmVuYWJsZWQ6aG92ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDBmMTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFBST0dSRVNTIEJBUlxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAucHJvZ3Jlc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ucmV2ZWFsIC5wcm9ncmVzcyBzcGFuIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwOEI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxuICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogU0xJREUgTlVNQkVSXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5zbGlkZS1udW1iZXIge1xcbiAgY29sb3I6ICMwMDAwOEI7XFxufVxcbi8qIGh0dHA6Ly9wcmlzbWpzLmNvbS9kb3dubG9hZC5odG1sP3RoZW1lcz1wcmlzbS1jb3kmbGFuZ3VhZ2VzPXImcGx1Z2lucz1saW5lLWhpZ2hsaWdodCtsaW5lLW51bWJlcnMrc2hvdy1pbnZpc2libGVzK2F1dG9saW5rZXIrd3BkK2ZpbGUtaGlnaGxpZ2h0K3Nob3ctbGFuZ3VhZ2UraGlnaGxpZ2h0LWtleXdvcmRzICovXFxuLyoqXFxuICogcHJpc20uanMgQ295IHRoZW1lIGZvciBKYXZhU2NyaXB0LCBDb2ZmZWVTY3JpcHQsIENTUyBhbmQgSFRNTFxcbiAqIEJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS90c2hlZG9yL3dvcmtzaG9wLXdwLXRoZW1lIChFeGFtcGxlOiBodHRwOi8vd29ya3Nob3Aua2Fuc2FuLmNvbS9jYXRlZ29yeS9zZXNzaW9ucy9iYXNpY3Mgb3IgaHR0cDovL3dvcmtzaG9wLnRpbXNoZWRvci5jb20vY2F0ZWdvcnkvc2Vzc2lvbnMvYmFzaWNzKTtcXG4gKiBAYXV0aG9yIFRpbSAgU2hlZG9yXFxuICovXFxuY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCBtb25vc3BhY2U7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLW1vei10YWItc2l6ZTogNDtcXG4gIC1vLXRhYi1zaXplOiA0O1xcbiAgdGFiLXNpemU6IDQ7XFxuICAtd2Via2l0LWh5cGhlbnM6IG5vbmU7XFxuICAtbW96LWh5cGhlbnM6IG5vbmU7XFxuICAtbXMtaHlwaGVuczogbm9uZTtcXG4gIGh5cGhlbnM6IG5vbmU7XFxufVxcbi8qIENvZGUgYmxvY2tzICovXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAuNWVtIDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMHB4IDBweCAwcHggIzM1OGNjYiwgMHB4IDBweCAwcHggMXB4ICNkZmRmZGY7XFxuICAtbW96LWJveC1zaGFkb3c6IC0xcHggMHB4IDBweCAwcHggIzM1OGNjYiwgMHB4IDBweCAwcHggMXB4ICNkZmRmZGY7XFxuICBib3gtc2hhZG93OiAtMXB4IDBweCAwcHggMHB4ICMzNThjY2IsIDBweCAwcHggMHB4IDFweCAjZGZkZmRmO1xcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgIzM1OGNjYjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsIHJnYmEoNjksIDE0MiwgMjA5LCAwLjA0KSA1MCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCByZ2JhKDY5LCAxNDIsIDIwOSwgMC4wNCkgNTAlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgNTAlLCByZ2JhKDY5LCAxNDIsIDIwOSwgMC4wNCkgNTAlKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCA1MCUsIHJnYmEoNjksIDE0MiwgMjA5LCAwLjA0KSA1MCUpO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDUwJSwgcmdiYSg2OSwgMTQyLCAyMDksIDAuMDQpIDUwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDNlbSAzZW07XFxuICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIG1heC1oZWlnaHQ6IDMwZW07XFxufVxcbmNvZGVbY2xhc3MqPVxcXCJsYW5ndWFnZVxcXCJdIHtcXG4gIG1heC1oZWlnaHQ6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDFlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi8qIE1hcmdpbiBib3R0b20gdG8gYWNjb21vZGF0ZSBzaGFkb3cgKi9cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0sXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmZDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi8qIElubGluZSBjb2RlICovXFxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IC4yZW07XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwLjNlbTtcXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAwLjNlbTtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICBjb2xvcjogI2M5MmMyYztcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl06YmVmb3JlLFxcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgei1pbmRleDogLTI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMC43NWVtO1xcbiAgbGVmdDogMC4xOGVtO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogMjAlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTNweCA4cHggIzk3OTc5NztcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDEzcHggOHB4ICM5Nzk3OTc7XFxuICBib3gtc2hhZG93OiAwcHggMTNweCA4cHggIzk3OTc5NztcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTJkZWcpO1xcbn1cXG46bm90KHByZSkgPiBjb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl06YWZ0ZXIsXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl06YWZ0ZXIge1xcbiAgcmlnaHQ6IDAuNzVlbTtcXG4gIGxlZnQ6IGF1dG87XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XFxufVxcbi50b2tlbi5jb21tZW50LFxcbi50b2tlbi5ibG9jay1jb21tZW50LFxcbi50b2tlbi5wcm9sb2csXFxuLnRva2VuLmRvY3R5cGUsXFxuLnRva2VuLmNkYXRhIHtcXG4gIGNvbG9yOiAjN0Q4Qjk5O1xcbn1cXG4udG9rZW4ucHVuY3R1YXRpb24ge1xcbiAgY29sb3I6ICM1RjYzNjQ7XFxufVxcbi50b2tlbi5wcm9wZXJ0eSxcXG4udG9rZW4udGFnLFxcbi50b2tlbi5ib29sZWFuLFxcbi50b2tlbi5udW1iZXIsXFxuLnRva2VuLmZ1bmN0aW9uLW5hbWUsXFxuLnRva2VuLmNvbnN0YW50LFxcbi50b2tlbi5zeW1ib2wsXFxuLnRva2VuLmRlbGV0ZWQge1xcbiAgY29sb3I6ICNjOTJjMmM7XFxufVxcbi50b2tlbi5zZWxlY3RvcixcXG4udG9rZW4uYXR0ci1uYW1lLFxcbi50b2tlbi5zdHJpbmcsXFxuLnRva2VuLmNoYXIsXFxuLnRva2VuLmZ1bmN0aW9uLFxcbi50b2tlbi5idWlsdGluLFxcbi50b2tlbi5pbnNlcnRlZCB7XFxuICBjb2xvcjogIzJmOWMwYTtcXG59XFxuLnRva2VuLm9wZXJhdG9yLFxcbi50b2tlbi5lbnRpdHksXFxuLnRva2VuLnVybCxcXG4udG9rZW4udmFyaWFibGUge1xcbiAgY29sb3I6ICNhNjdmNTk7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbi50b2tlbi5hdHJ1bGUsXFxuLnRva2VuLmF0dHItdmFsdWUsXFxuLnRva2VuLmtleXdvcmQsXFxuLnRva2VuLmNsYXNzLW5hbWUge1xcbiAgY29sb3I6ICMxOTkwYjg7XFxufVxcbi50b2tlbi5yZWdleCxcXG4udG9rZW4uaW1wb3J0YW50IHtcXG4gIGNvbG9yOiAjZTkwO1xcbn1cXG4ubGFuZ3VhZ2UtY3NzIC50b2tlbi5zdHJpbmcsXFxuLnN0eWxlIC50b2tlbi5zdHJpbmcge1xcbiAgY29sb3I6ICNhNjdmNTk7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbi50b2tlbi5pbXBvcnRhbnQge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnRva2VuLmJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi50b2tlbi5pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udG9rZW4uZW50aXR5IHtcXG4gIGN1cnNvcjogaGVscDtcXG59XFxuLm5hbWVzcGFjZSB7XFxuICBvcGFjaXR5OiAuNztcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIHByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdOmJlZm9yZSxcXG4gIHByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdOmFmdGVyIHtcXG4gICAgYm90dG9tOiAxNHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIH1cXG59XFxuLyogUGx1Z2luIHN0eWxlcyAqL1xcbi50b2tlbi50YWI6bm90KDplbXB0eSk6YmVmb3JlLFxcbi50b2tlbi5jcjpiZWZvcmUsXFxuLnRva2VuLmxmOmJlZm9yZSB7XFxuICBjb2xvcjogI2UwZDdkMTtcXG59XFxuLyogUGx1Z2luIHN0eWxlczogTGluZSBOdW1iZXJzICovXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzIGNvZGUge1xcbiAgcGFkZGluZy1sZWZ0OiAzLjhlbTtcXG59XFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0ubGluZS1udW1iZXJzIC5saW5lLW51bWJlcnMtcm93cyB7XFxuICBsZWZ0OiAwO1xcbn1cXG4vKiBQbHVnaW4gc3R5bGVzOiBMaW5lIEhpZ2hsaWdodCAqL1xcbnByZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdW2RhdGEtbGluZV0ge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG59XFxucHJlW2RhdGEtbGluZV0gY29kZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDRlbTtcXG59XFxucHJlIC5saW5lLWhpZ2hsaWdodCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5wcmVbZGF0YS1saW5lXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxZW0gMCAxZW0gM2VtO1xcbn1cXG4ubGluZS1oaWdobGlnaHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogaW5oZXJpdCAwO1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbiAgLyogU2FtZSBhcyAucHJpc23igJlzIHBhZGRpbmctdG9wICovXFxuICBiYWNrZ3JvdW5kOiBoc2xhKDI0LCAyMCUsIDUwJSwuMDgpO1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgaHNsYSgyNCwgMjAlLCA1MCUsLjEpIDcwJSwgaHNsYSgyNCwgMjAlLCA1MCUsMCkpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgaHNsYSgyNCwgMjAlLCA1MCUsLjEpIDcwJSwgaHNsYSgyNCwgMjAlLCA1MCUsMCkpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIGhzbGEoMjQsIDIwJSwgNTAlLC4xKSA3MCUsIGhzbGEoMjQsIDIwJSwgNTAlLDApKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCBoc2xhKDI0LCAyMCUsIDUwJSwuMSkgNzAlLCBoc2xhKDI0LCAyMCUsIDUwJSwwKSk7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG59XFxuLmxpbmUtaGlnaGxpZ2h0OmJlZm9yZSxcXG4ubGluZS1oaWdobGlnaHRbZGF0YS1lbmRdOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1zdGFydCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC40ZW07XFxuICBsZWZ0OiAuNmVtO1xcbiAgbWluLXdpZHRoOiAxZW07XFxuICBwYWRkaW5nOiAwIC41ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDI0LCAyMCUsIDUwJSwuNCk7XFxuICBjb2xvcjogaHNsKDI0LCAyMCUsIDk1JSk7XFxuICBmb250OiBib2xkIDY1JS8xLjUgc2Fucy1zZXJpZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiAuM2VtO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IHdoaXRlO1xcbn1cXG4ubGluZS1oaWdobGlnaHRbZGF0YS1lbmRdOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1lbmQpO1xcbiAgdG9wOiBhdXRvO1xcbiAgYm90dG9tOiAuNGVtO1xcbn1cXG5wcmUubGluZS1udW1iZXJzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMy44ZW07XFxuICBjb3VudGVyLXJlc2V0OiBsaW5lbnVtYmVyO1xcbn1cXG5wcmUubGluZS1udW1iZXJzID4gY29kZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5saW5lLW51bWJlcnMgLmxpbmUtbnVtYmVycy1yb3dzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdG9wOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgbGVmdDogLTMuOGVtO1xcbiAgd2lkdGg6IDNlbTtcXG4gIC8qIHdvcmtzIGZvciBsaW5lLW51bWJlcnMgYmVsb3cgMTAwMCBsaW5lcyAqL1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTk5O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmxpbmUtbnVtYmVycy1yb3dzID4gc3BhbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpbmVudW1iZXI7XFxufVxcbi5saW5lLW51bWJlcnMtcm93cyA+IHNwYW46YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGNvdW50ZXIobGluZW51bWJlcik7XFxuICBjb2xvcjogIzk5OTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1yaWdodDogMC44ZW07XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnRva2VuLnRhYjpub3QoOmVtcHR5KTpiZWZvcmUsXFxuLnRva2VuLmNyOmJlZm9yZSxcXG4udG9rZW4ubGY6YmVmb3JlIHtcXG4gIGNvbG9yOiBoc2woMjQsIDIwJSwgODUlKTtcXG59XFxuLnRva2VuLnRhYjpub3QoOmVtcHR5KTpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwyMUU1JztcXG59XFxuLnRva2VuLmNyOmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXDI0MEQnO1xcbn1cXG4udG9rZW4uY3JsZjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwyNDBEXFxcXDI0MEEnO1xcbn1cXG4udG9rZW4ubGY6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdcXFxcMjQwQSc7XFxufVxcbi50b2tlbiBhIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5jb2RlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0gYVtocmVmXSxcXG5wcmVbY2xhc3MqPVxcXCJsYW5ndWFnZS1cXFwiXSBhW2hyZWZdIHtcXG4gIGN1cnNvcjogaGVscDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuY29kZVtjbGFzcyo9XFxcImxhbmd1YWdlLVxcXCJdIGFbaHJlZl06aG92ZXIsXFxucHJlW2NsYXNzKj1cXFwibGFuZ3VhZ2UtXFxcIl0gYVtocmVmXTpob3ZlciB7XFxuICBjdXJzb3I6IGhlbHA7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxucHJlW2NsYXNzKj0nbGFuZ3VhZ2UtJ10ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5wcmVbY2xhc3MqPSdsYW5ndWFnZS0nXVtkYXRhLWxhbmd1YWdlXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYW5ndWFnZSk7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZDRkNGO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgNXB4O1xcbiAgcGFkZGluZzogMCAwLjVlbTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cIjsgKHJlcXVpcmUoXCJicm93c2VyaWZ5LWNzc1wiKS5jcmVhdGVTdHlsZShjc3MsIHsgXCJocmVmXCI6IFwic3JjL3N0eWxlcy9zcy5jc3NcIn0pKTsgbW9kdWxlLmV4cG9ydHMgPSBjc3M7Il19
