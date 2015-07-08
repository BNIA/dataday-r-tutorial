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
exports=undefined;!function(e){"undefined"!=typeof exports?e(exports):(window.hljs=e({}),"function"==typeof define&&define.amd&&define("hljs",[],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){return/no-?highlight|plain|text/.test(e)}function i(e){var n,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=/\blang(?:uage)?-([\w-]+)\b/.exec(i))return E(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),n=0,r=i.length;r>n;n++)if(E(i[n])||a(i[n]))return i[n]}function o(e,n){var t,r={};for(t in e)r[t]=e[t];if(n)for(t in n)r[t]=n[t];return r}function u(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3==i.nodeType?a+=i.nodeValue.length:1==i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function c(e,r,a){function i(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:"start"==r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value)+'"'}f+="<"+t(e)+Array.prototype.map.call(e.attributes,r).join("")+">"}function u(e){f+="</"+t(e)+">"}function c(e){("start"==e.event?o:u)(e.node)}for(var s=0,f="",l=[];e.length||r.length;){var g=i();if(f+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){l.reverse().forEach(u);do c(g.splice(0,1)[0]),g=i();while(g==e&&g.length&&g[0].offset==s);l.reverse().forEach(o)}else"start"==g[0].event?l.push(g[0].node):l.pop(),c(g.splice(0,1)[0])}return f+n(a.substr(s))}function s(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var u={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?c("keyword",a.k):Object.keys(a.k).forEach(function(e){c(e,a.k[e])}),a.k=u}a.lR=t(a.l||/\b\w+\b/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push("self"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var f=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=f.length?t(f.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,a,i){function o(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function c(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function h(e,n,t,r){var a=r?"":w.classPrefix,i='<span class="'+a,o=t?"":"</span>";return i+=e+'">',i+n+o}function p(){if(!L.k)return n(B);var e="",t=0;L.lR.lastIndex=0;for(var r=L.lR.exec(B);r;){e+=n(B.substr(t,r.index-t));var a=g(L,r);a?(y+=a[1],e+=h(a[0],n(r[0]))):e+=n(r[0]),t=L.lR.lastIndex,r=L.lR.exec(B)}return e+n(B.substr(t))}function d(){if(L.sL&&!x[L.sL])return n(B);var e=L.sL?f(L.sL,B,!0,M[L.sL]):l(B);return L.r>0&&(y+=e.r),"continuous"==L.subLanguageMode&&(M[L.sL]=e.top),h(e.language,e.value,!1,!0)}function b(){return void 0!==L.sL?d():p()}function v(e,t){var r=e.cN?h(e.cN,"",!0):"";e.rB?(k+=r,B=""):e.eB?(k+=n(t)+r,B=""):(k+=r,B=t),L=Object.create(e,{parent:{value:L}})}function m(e,t){if(B+=e,void 0===t)return k+=b(),0;var r=o(t,L);if(r)return k+=b(),v(r,t),r.rB?0:t.length;var a=u(L,t);if(a){var i=L;i.rE||i.eE||(B+=t),k+=b();do L.cN&&(k+="</span>"),y+=L.r,L=L.parent;while(L!=a.parent);return i.eE&&(k+=n(t)),B="",a.starts&&v(a.starts,""),i.rE?0:t.length}if(c(t,L))throw new Error('Illegal lexeme "'+t+'" for mode "'+(L.cN||"<unnamed>")+'"');return B+=t,t.length||1}var N=E(e);if(!N)throw new Error('Unknown language: "'+e+'"');s(N);var R,L=i||N,M={},k="";for(R=L;R!=N;R=R.parent)R.cN&&(k=h(R.cN,"",!0)+k);var B="",y=0;try{for(var C,j,I=0;;){if(L.t.lastIndex=I,C=L.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}for(m(t.substr(I)),R=L;R.parent;R=R.parent)R.cN&&(k+="</span>");return{r:y,value:k,language:e,top:L}}catch(O){if(-1!=O.message.indexOf("Illegal"))return{r:0,value:n(t)};throw O}}function l(e,t){t=t||w.languages||Object.keys(x);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(E(n)){var t=f(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function g(e){return w.tabReplace&&(e=e.replace(/^((<[^>]+>|\t)+)/gm,function(e,n){return n.replace(/\t/g,w.tabReplace)})),w.useBR&&(e=e.replace(/\n/g,"<br>")),e}function h(e,n,t){var r=n?R[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function p(e){var n=i(e);if(!a(n)){var t;w.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div"),t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):t=e;var r=t.textContent,o=n?f(n,r,!0):l(r),s=u(t);if(s.length){var p=document.createElementNS("http://www.w3.org/1999/xhtml","div");p.innerHTML=o.value,o.value=c(s,u(p),r)}o.value=g(o.value),e.innerHTML=o.value,e.className=h(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){w=o(w,e)}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");Array.prototype.forEach.call(e,p)}}function v(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function m(n,t){var r=x[n]=t(e);r.aliases&&r.aliases.forEach(function(e){R[e]=n})}function N(){return Object.keys(x)}function E(e){return x[e]||x[R[e]]}var w={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},x={},R={};return e.highlight=f,e.highlightAuto=l,e.fixMarkup=g,e.highlightBlock=p,e.configure=d,e.initHighlighting=b,e.initHighlightingOnLoad=v,e.registerLanguage=m,e.listLanguages=N,e.getLanguage=E,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="\\b(0[xX][a-fA-F0-9]+|(\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",bK:"TODO FIXME NOTE BUG XXX",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e});hljs.registerLanguage("r",function(e){var r="([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*";return{c:[e.HCM,{b:r,l:r,k:{keyword:"function if in break next repeat else for return switch while try tryCatch stop warning require library attach detach source setMethod setGeneric setGroupGeneric setClass ...",literal:"NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10"},r:0},{cN:"number",b:"0[xX][0-9a-fA-F]+[Li]?\\b",r:0},{cN:"number",b:"\\d+(?:[eE][+\\-]?\\d*)?L\\b",r:0},{cN:"number",b:"\\d+\\.(?!\\d)(?:i\\b)?",r:0},{cN:"number",b:"\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{cN:"number",b:"\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",r:0},{b:"`",e:"`",r:0},{cN:"string",c:[e.BE],v:[{b:'"',e:'"'},{b:"'",e:"'"}]}]}});
},{}],3:[function(require,module,exports){
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

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
var _hljs = require('./../components/highlight.js/highlight.pack.js');

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
window.hljs.initHighlightingOnLoad();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./../components/highlight.js/highlight.pack.js":2,"./../components/jquery/dist/jquery.min.js":3,"./../components/reveal.js/js/reveal.js":4,"./../components/rfiddleHelper/rfiddleHelper.min.js":5,"./../styles/ss.css":7}],7:[function(require,module,exports){
var css = "@import url(\"https://fonts.googleapis.com/css?family=News+Cycle:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic\");\nbody {\n  font-size: 14px;\n  line-height: 22px;\n  font-family: Helvetica Neue, Helvetica, Arial;\n  background: #f4f4f4 url(src/components/_processed/docs/images/background.png);\n}\n.interface {\n  font-family: \"Lucida Grande\", \"Lucida Sans Unicode\", Helvetica, Arial, sans-serif !important;\n}\ndiv#sidebar {\n  background: #fff;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 200px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  padding: 15px 0 30px 30px;\n  border-right: 1px solid #bbb;\n  box-shadow: 0 0 20px #ccc;\n  -webkit-box-shadow: 0 0 20px #ccc;\n  -moz-box-shadow: 0 0 20px #ccc;\n}\na.toc_title,\na.toc_title:visited {\n  display: block;\n  color: black;\n  font-weight: bold;\n  margin-top: 15px;\n}\na.toc_title:hover {\n  text-decoration: underline;\n}\n#sidebar .version {\n  font-size: 10px;\n  font-weight: normal;\n}\nul.toc_section {\n  font-size: 11px;\n  line-height: 14px;\n  margin: 5px 0 0 0;\n  padding-left: 0px;\n  list-style-type: none;\n  font-family: Lucida Grande;\n}\n.toc_section li {\n  cursor: pointer;\n  margin: 0 0 3px 0;\n}\n.toc_section li a {\n  text-decoration: none;\n  color: black;\n}\n.toc_section li a:hover {\n  text-decoration: underline;\n}\ndiv.container {\n  position: relative;\n  width: 550px;\n  margin: 40px 0 50px 260px;\n}\nimg#logo {\n  width: 450px;\n  height: 80px;\n}\ndiv.run {\n  position: absolute;\n  right: 15px;\n  width: 26px;\n  height: 18px;\n  background: url('src/components/_processed/docs/images/arrows.png') no-repeat -26px 0;\n}\ndiv.run:active {\n  background-position: -51px 0;\n}\np,\ndiv.container ul {\n  margin: 25px 0;\n  width: 550px;\n}\np.warning {\n  font-size: 12px;\n  line-height: 18px;\n  font-style: italic;\n}\ndiv.container ul {\n  list-style: circle;\n  padding-left: 15px;\n  font-size: 13px;\n  line-height: 18px;\n}\ndiv.container ul li {\n  margin-bottom: 10px;\n}\ndiv.container ul.small {\n  font-size: 12px;\n}\na,\na:visited {\n  color: #444;\n}\na:active,\na:hover {\n  color: #000;\n}\na.punch {\n  display: inline-block;\n  background: #4162a8;\n  border-top: 1px solid #38538c;\n  border-right: 1px solid #1f2d4d;\n  border-bottom: 1px solid #151e33;\n  border-left: 1px solid #1f2d4d;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -moz-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -ms-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -o-box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  box-shadow: inset 0 1px 10px 1px #5c8bee, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  color: #fff;\n  font: bold 14px \"helvetica neue\", helvetica, arial, sans-serif;\n  line-height: 1;\n  margin-bottom: 15px;\n  padding: 8px 0 10px 0;\n  text-align: center;\n  text-shadow: 0px -1px 1px #1e2d4d;\n  text-decoration: none;\n  width: 225px;\n  -webkit-background-clip: padding-box;\n}\na.punch:hover {\n  -webkit-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -moz-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -ms-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  -o-box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  box-shadow: inset 0 0px 20px 1px #87adff, 0px 1px 0 #1d2c4d, 0 6px 0px #1f3053, 0 8px 4px 1px #111111;\n  cursor: pointer;\n}\na.punch:active {\n  -webkit-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  -moz-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  -ms-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  -o-box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  box-shadow: inset 0 1px 10px 1px #5c8bee, 0 1px 0 #1d2c4d, 0 2px 0 #1f3053, 0 4px 3px 0 #111111;\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\na img {\n  border: 0;\n}\na.travis-badge {\n  display: block;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  padding-top: 20px;\n}\nh2 {\n  font-size: 22px;\n}\nb.header {\n  font-size: 18px;\n  line-height: 35px;\n}\nspan.alias {\n  font-size: 14px;\n  font-style: italic;\n  margin-left: 20px;\n}\ntable {\n  margin: 15px 0 0;\n  padding: 0;\n}\ntr,\ntd {\n  margin: 0;\n  padding: 0;\n}\ntd {\n  padding: 0px 15px 5px 0;\n}\ntable .rule {\n  height: 1px;\n  background: #ccc;\n  margin: 5px 0;\n}\ncode,\npre,\ntt {\n  font-family: Monaco, Consolas, \"Lucida Console\", monospace;\n  font-size: 12px;\n  line-height: 18px;\n  font-style: normal;\n}\ntt {\n  padding: 0px 3px;\n  background: #fff;\n  border: 1px solid #ddd;\n  zoom: 1;\n}\ncode {\n  margin-left: 20px;\n}\npre {\n  font-size: 12px;\n  padding: 2px 0 2px 15px;\n  border: 4px solid #bbb;\n  border-top: 0;\n  border-bottom: 0;\n  margin: 0px 0 25px;\n}\nimg.example_image {\n  margin: 0px auto;\n}\nimg.example_retina {\n  margin: 20px;\n  box-shadow: 0 8px 15px rgba(0,0,0,0.4);\n}\n@media only screen and (-webkit-max-device-pixel-ratio: 1) and (max-width: 600px),\n           only screen and (max--moz-device-pixel-ratio: 1) and (max-width: 600px) {\n  div#sidebar {\n    display: none;\n  }\n\n  img#logo {\n    max-width: 450px;\n    width: 100%;\n    height: auto;\n  }\n\n  div.container {\n    width: auto;\n    margin-left: 15px;\n    margin-right: 15px;\n  }\n\n  p,\n  div.container ul {\n    width: auto;\n  }\n}\n@media only screen and (-webkit-min-device-pixel-ratio: 1.5) and (max-width: 640px),\n          only screen and (-o-min-device-pixel-ratio: 3/2) and (max-width: 640px),\n          only screen and (min-device-pixel-ratio: 1.5) and (max-width: 640px) {\n  img {\n    max-width: 100%;\n    height: auto;\n  }\n\n  div#sidebar {\n    -webkit-overflow-scrolling: initial;\n    position: relative;\n    width: 90%;\n    height: 120px;\n    left: 0;\n    top: -7px;\n    padding: 10px 0 10px 30px;\n    border: 0;\n  }\n\n  img#logo {\n    width: auto;\n    height: auto;\n  }\n\n  div.container {\n    margin: 0;\n    width: 100%;\n  }\n\n  p,\n  div.container ul {\n    max-width: 98%;\n    overflow-x: scroll;\n  }\n\n  table {\n    position: relative;\n  }\n\n  tr:first-child td {\n    padding-bottom: 25px;\n  }\n\n  td.text {\n    line-height: 12px;\n    padding: 0;\n    position: absolute;\n    left: 0;\n    top: 48px;\n  }\n\n  tr:last-child td.text {\n    top: 122px;\n  }\n\n  pre {\n    overflow: scroll;\n  }\n}\nimg.figure {\n  width: 100%;\n}\ndiv.columns {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\ndiv.columns ul {\n  margin: 10px 0;\n}\ndiv.col-50 {\n  display: table-cell;\n  width: 50%;\n}\n/*!\n * reveal.js\n * http://lab.hakim.se/reveal-js\n * MIT licensed\n *\n * Copyright (C) 2015 Hakim El Hattab, http://hakim.se\n */\n/*********************************************\n * RESET STYLES\n *********************************************/\nhtml,\nbody,\n.reveal div,\n.reveal span,\n.reveal applet,\n.reveal object,\n.reveal iframe,\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6,\n.reveal p,\n.reveal blockquote,\n.reveal pre,\n.reveal a,\n.reveal abbr,\n.reveal acronym,\n.reveal address,\n.reveal big,\n.reveal cite,\n.reveal code,\n.reveal del,\n.reveal dfn,\n.reveal em,\n.reveal img,\n.reveal ins,\n.reveal kbd,\n.reveal q,\n.reveal s,\n.reveal samp,\n.reveal small,\n.reveal strike,\n.reveal strong,\n.reveal sub,\n.reveal sup,\n.reveal tt,\n.reveal var,\n.reveal b,\n.reveal u,\n.reveal center,\n.reveal dl,\n.reveal dt,\n.reveal dd,\n.reveal ol,\n.reveal ul,\n.reveal li,\n.reveal fieldset,\n.reveal form,\n.reveal label,\n.reveal legend,\n.reveal table,\n.reveal caption,\n.reveal tbody,\n.reveal tfoot,\n.reveal thead,\n.reveal tr,\n.reveal th,\n.reveal td,\n.reveal article,\n.reveal aside,\n.reveal canvas,\n.reveal details,\n.reveal embed,\n.reveal figure,\n.reveal figcaption,\n.reveal footer,\n.reveal header,\n.reveal hgroup,\n.reveal menu,\n.reveal nav,\n.reveal output,\n.reveal ruby,\n.reveal section,\n.reveal summary,\n.reveal time,\n.reveal mark,\n.reveal audio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n.reveal article,\n.reveal aside,\n.reveal details,\n.reveal figcaption,\n.reveal figure,\n.reveal footer,\n.reveal header,\n.reveal hgroup,\n.reveal menu,\n.reveal nav,\n.reveal section {\n  display: block;\n}\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  position: relative;\n  line-height: 1;\n  background-color: #fff;\n  color: #000;\n}\n/*********************************************\n * VIEW FRAGMENTS\n *********************************************/\n.reveal .slides section .fragment {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n.reveal .slides section .fragment.visible {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.grow {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.grow.visible {\n  -webkit-transform: scale(1.3);\n  -ms-transform: scale(1.3);\n  transform: scale(1.3);\n}\n.reveal .slides section .fragment.shrink {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.shrink.visible {\n  -webkit-transform: scale(0.7);\n  -ms-transform: scale(0.7);\n  transform: scale(0.7);\n}\n.reveal .slides section .fragment.zoom-in {\n  -webkit-transform: scale(0.1);\n  -ms-transform: scale(0.1);\n  transform: scale(0.1);\n}\n.reveal .slides section .fragment.zoom-in.visible {\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n}\n.reveal .slides section .fragment.fade-out {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.fade-out.visible {\n  opacity: 0;\n  visibility: hidden;\n}\n.reveal .slides section .fragment.semi-fade-out {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.semi-fade-out.visible {\n  opacity: 0.5;\n  visibility: visible;\n}\n.reveal .slides section .fragment.strike {\n  opacity: 1;\n}\n.reveal .slides section .fragment.strike.visible {\n  text-decoration: line-through;\n}\n.reveal .slides section .fragment.current-visible {\n  opacity: 0;\n  visibility: hidden;\n}\n.reveal .slides section .fragment.current-visible.current-fragment {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.highlight-red,\n.reveal .slides section .fragment.highlight-current-red,\n.reveal .slides section .fragment.highlight-green,\n.reveal .slides section .fragment.highlight-current-green,\n.reveal .slides section .fragment.highlight-blue,\n.reveal .slides section .fragment.highlight-current-blue {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .slides section .fragment.highlight-red.visible {\n  color: #ff2c2d;\n}\n.reveal .slides section .fragment.highlight-green.visible {\n  color: #17ff2e;\n}\n.reveal .slides section .fragment.highlight-blue.visible {\n  color: #1b91ff;\n}\n.reveal .slides section .fragment.highlight-current-red.current-fragment {\n  color: #ff2c2d;\n}\n.reveal .slides section .fragment.highlight-current-green.current-fragment {\n  color: #17ff2e;\n}\n.reveal .slides section .fragment.highlight-current-blue.current-fragment {\n  color: #1b91ff;\n}\n/*********************************************\n * DEFAULT ELEMENT STYLES\n *********************************************/\n/* Fixes issue in Chrome where italic fonts did not appear when printing to PDF */\n.reveal:after {\n  content: '';\n  font-style: italic;\n}\n.reveal iframe {\n  z-index: 1;\n}\n/** Prevents layering issues in certain browser/transition combinations */\n.reveal a {\n  position: relative;\n}\n.reveal .stretch {\n  max-width: none;\n  max-height: none;\n}\n.reveal pre.stretch code {\n  height: 100%;\n  max-height: 100%;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n/*********************************************\n * CONTROLS\n *********************************************/\n.reveal .controls {\n  display: none;\n  position: fixed;\n  width: 110px;\n  height: 110px;\n  z-index: 30;\n  right: 10px;\n  bottom: 10px;\n  -webkit-user-select: none;\n}\n.reveal .controls div {\n  position: absolute;\n  opacity: 0.05;\n  width: 0;\n  height: 0;\n  border: 12px solid transparent;\n  -webkit-transform: scale(0.9999);\n  -ms-transform: scale(0.9999);\n  transform: scale(0.9999);\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.reveal .controls div.enabled {\n  opacity: 0.7;\n  cursor: pointer;\n}\n.reveal .controls div.enabled:active {\n  margin-top: 1px;\n}\n.reveal .controls div.navigate-left {\n  top: 42px;\n  border-right-width: 22px;\n  border-right-color: #000;\n}\n.reveal .controls div.navigate-left.fragmented {\n  opacity: 0.3;\n}\n.reveal .controls div.navigate-right {\n  left: 74px;\n  top: 42px;\n  border-left-width: 22px;\n  border-left-color: #000;\n}\n.reveal .controls div.navigate-right.fragmented {\n  opacity: 0.3;\n}\n.reveal .controls div.navigate-up {\n  left: 42px;\n  border-bottom-width: 22px;\n  border-bottom-color: #000;\n}\n.reveal .controls div.navigate-up.fragmented {\n  opacity: 0.3;\n}\n.reveal .controls div.navigate-down {\n  left: 42px;\n  top: 74px;\n  border-top-width: 22px;\n  border-top-color: #000;\n}\n.reveal .controls div.navigate-down.fragmented {\n  opacity: 0.3;\n}\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  position: fixed;\n  display: none;\n  height: 3px;\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.reveal .progress:after {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 20px;\n  width: 100%;\n  top: -20px;\n}\n.reveal .progress span {\n  display: block;\n  height: 100%;\n  width: 0px;\n  background-color: #000;\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n/*********************************************\n * SLIDE NUMBER\n *********************************************/\n.reveal .slide-number {\n  position: fixed;\n  display: block;\n  right: 15px;\n  bottom: 15px;\n  opacity: 0.5;\n  z-index: 31;\n  font-size: 12px;\n}\n/*********************************************\n * SLIDES\n *********************************************/\n.reveal {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -ms-touch-action: none;\n  touch-action: none;\n}\n.reveal .slides {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  overflow: visible;\n  z-index: 1;\n  text-align: center;\n  -webkit-perspective: 600px;\n  perspective: 600px;\n  -webkit-perspective-origin: 50% 40%;\n  perspective-origin: 50% 40%;\n}\n.reveal .slides > section {\n  -ms-perspective: 600px;\n}\n.reveal .slides > section,\n.reveal .slides > section > section {\n  display: none;\n  position: absolute;\n  width: 100%;\n  padding: 20px 0px;\n  z-index: 10;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-transition: -webkit-transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), -webkit-transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: -ms-transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: transform-origin 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), transform 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), visibility 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985), opacity 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] .slides section {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.reveal[data-transition-speed=\"slow\"] .slides section {\n  -webkit-transition-duration: 1200ms;\n  transition-duration: 1200ms;\n}\n/* Slide-specific transition speed overrides */\n.reveal .slides section[data-transition-speed=\"fast\"] {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.reveal .slides section[data-transition-speed=\"slow\"] {\n  -webkit-transition-duration: 1200ms;\n  transition-duration: 1200ms;\n}\n.reveal .slides > section.stack {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.reveal .slides > section.present,\n.reveal .slides > section > section.present {\n  display: block;\n  z-index: 11;\n  opacity: 1;\n}\n.reveal.center,\n.reveal.center .slides,\n.reveal.center .slides section {\n  min-height: 0 !important;\n}\n/* Don't allow interaction with invisible slides */\n.reveal .slides > section.future,\n.reveal .slides > section > section.future,\n.reveal .slides > section.past,\n.reveal .slides > section > section.past {\n  pointer-events: none;\n}\n.reveal.overview .slides > section,\n.reveal.overview .slides > section > section {\n  pointer-events: auto;\n}\n.reveal .slides > section.past,\n.reveal .slides > section.future,\n.reveal .slides > section > section.past,\n.reveal .slides > section > section.future {\n  opacity: 0;\n}\n/*********************************************\n * Mixins for readability of transitions\n *********************************************/\n/*********************************************\n * SLIDE TRANSITION\n * Aliased 'linear' for backwards compatibility\n *********************************************/\n.reveal.slide section {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.reveal .slides > section[data-transition=slide].past,\n.reveal .slides > section[data-transition~=slide-out].past,\n.reveal.slide .slides > section:not([data-transition]).past {\n  -webkit-transform: translate(-150%, 0);\n  -ms-transform: translate(-150%, 0);\n  transform: translate(-150%, 0);\n}\n.reveal .slides > section[data-transition=slide].future,\n.reveal .slides > section[data-transition~=slide-in].future,\n.reveal.slide .slides > section:not([data-transition]).future {\n  -webkit-transform: translate(150%, 0);\n  -ms-transform: translate(150%, 0);\n  transform: translate(150%, 0);\n}\n.reveal .slides > section > section[data-transition=slide].past,\n.reveal .slides > section > section[data-transition~=slide-out].past,\n.reveal.slide .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n  -ms-transform: translate(0, -150%);\n  transform: translate(0, -150%);\n}\n.reveal .slides > section > section[data-transition=slide].future,\n.reveal .slides > section > section[data-transition~=slide-in].future,\n.reveal.slide .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n  -ms-transform: translate(0, 150%);\n  transform: translate(0, 150%);\n}\n.reveal.linear section {\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.reveal .slides > section[data-transition=linear].past,\n.reveal .slides > section[data-transition~=linear-out].past,\n.reveal.linear .slides > section:not([data-transition]).past {\n  -webkit-transform: translate(-150%, 0);\n  -ms-transform: translate(-150%, 0);\n  transform: translate(-150%, 0);\n}\n.reveal .slides > section[data-transition=linear].future,\n.reveal .slides > section[data-transition~=linear-in].future,\n.reveal.linear .slides > section:not([data-transition]).future {\n  -webkit-transform: translate(150%, 0);\n  -ms-transform: translate(150%, 0);\n  transform: translate(150%, 0);\n}\n.reveal .slides > section > section[data-transition=linear].past,\n.reveal .slides > section > section[data-transition~=linear-out].past,\n.reveal.linear .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n  -ms-transform: translate(0, -150%);\n  transform: translate(0, -150%);\n}\n.reveal .slides > section > section[data-transition=linear].future,\n.reveal .slides > section > section[data-transition~=linear-in].future,\n.reveal.linear .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n  -ms-transform: translate(0, 150%);\n  transform: translate(0, 150%);\n}\n/*********************************************\n * CONVEX TRANSITION\n * Aliased 'default' for backwards compatibility\n *********************************************/\n.reveal .slides > section[data-transition=default].past,\n.reveal .slides > section[data-transition~=default-out].past,\n.reveal.default .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n}\n.reveal .slides > section[data-transition=default].future,\n.reveal .slides > section[data-transition~=default-in].future,\n.reveal.default .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n}\n.reveal .slides > section > section[data-transition=default].past,\n.reveal .slides > section > section[data-transition~=default-out].past,\n.reveal.default .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n}\n.reveal .slides > section > section[data-transition=default].future,\n.reveal .slides > section > section[data-transition~=default-in].future,\n.reveal.default .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n  transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n}\n.reveal .slides > section[data-transition=convex].past,\n.reveal .slides > section[data-transition~=convex-out].past,\n.reveal.convex .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n}\n.reveal .slides > section[data-transition=convex].future,\n.reveal .slides > section[data-transition~=convex-in].future,\n.reveal.convex .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n}\n.reveal .slides > section > section[data-transition=convex].past,\n.reveal .slides > section > section[data-transition~=convex-out].past,\n.reveal.convex .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n  transform: translate3d(0, -300px, 0) rotateX(70deg) translate3d(0, -300px, 0);\n}\n.reveal .slides > section > section[data-transition=convex].future,\n.reveal .slides > section > section[data-transition~=convex-in].future,\n.reveal.convex .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n  transform: translate3d(0, 300px, 0) rotateX(-70deg) translate3d(0, 300px, 0);\n}\n/*********************************************\n * CONCAVE TRANSITION\n *********************************************/\n.reveal .slides > section[data-transition=concave].past,\n.reveal .slides > section[data-transition~=concave-out].past,\n.reveal.concave .slides > section:not([data-transition]).past {\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n}\n.reveal .slides > section[data-transition=concave].future,\n.reveal .slides > section[data-transition~=concave-in].future,\n.reveal.concave .slides > section:not([data-transition]).future {\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n}\n.reveal .slides > section > section[data-transition=concave].past,\n.reveal .slides > section > section[data-transition~=concave-out].past,\n.reveal.concave .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n  transform: translate3d(0, -80%, 0) rotateX(-70deg) translate3d(0, -80%, 0);\n}\n.reveal .slides > section > section[data-transition=concave].future,\n.reveal .slides > section > section[data-transition~=concave-in].future,\n.reveal.concave .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n  transform: translate3d(0, 80%, 0) rotateX(70deg) translate3d(0, 80%, 0);\n}\n/*********************************************\n * ZOOM TRANSITION\n *********************************************/\n.reveal .slides > section[data-transition=zoom],\n.reveal.zoom .slides > section:not([data-transition]) {\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.reveal .slides > section[data-transition=zoom].past,\n.reveal .slides > section[data-transition~=zoom-out].past,\n.reveal.zoom .slides > section:not([data-transition]).past {\n  visibility: hidden;\n  -webkit-transform: scale(16);\n  -ms-transform: scale(16);\n  transform: scale(16);\n}\n.reveal .slides > section[data-transition=zoom].future,\n.reveal .slides > section[data-transition~=zoom-in].future,\n.reveal.zoom .slides > section:not([data-transition]).future {\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n}\n.reveal .slides > section > section[data-transition=zoom].past,\n.reveal .slides > section > section[data-transition~=zoom-out].past,\n.reveal.zoom .slides > section > section:not([data-transition]).past {\n  -webkit-transform: translate(0, -150%);\n  -ms-transform: translate(0, -150%);\n  transform: translate(0, -150%);\n}\n.reveal .slides > section > section[data-transition=zoom].future,\n.reveal .slides > section > section[data-transition~=zoom-in].future,\n.reveal.zoom .slides > section > section:not([data-transition]).future {\n  -webkit-transform: translate(0, 150%);\n  -ms-transform: translate(0, 150%);\n  transform: translate(0, 150%);\n}\n/*********************************************\n * CUBE TRANSITION\n *********************************************/\n.reveal.cube .slides {\n  -webkit-perspective: 1300px;\n  perspective: 1300px;\n}\n.reveal.cube .slides section {\n  padding: 30px;\n  min-height: 700px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.reveal.center.cube .slides section {\n  min-height: 0;\n}\n.reveal.cube .slides section:not(.stack):before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  -webkit-transform: translateZ(-20px);\n  transform: translateZ(-20px);\n}\n.reveal.cube .slides section:not(.stack):after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 90%;\n  height: 30px;\n  left: 5%;\n  bottom: 0;\n  background: none;\n  z-index: 1;\n  border-radius: 4px;\n  box-shadow: 0px 95px 25px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateZ(-90px) rotateX(65deg);\n  transform: translateZ(-90px) rotateX(65deg);\n}\n.reveal.cube .slides > section.stack {\n  padding: 0;\n  background: none;\n}\n.reveal.cube .slides > section.past {\n  -webkit-transform-origin: 100% 0%;\n  -ms-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n  transform: translate3d(-100%, 0, 0) rotateY(-90deg);\n}\n.reveal.cube .slides > section.future {\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg);\n  transform: translate3d(100%, 0, 0) rotateY(90deg);\n}\n.reveal.cube .slides > section > section.past {\n  -webkit-transform-origin: 0% 100%;\n  -ms-transform-origin: 0% 100%;\n  transform-origin: 0% 100%;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(90deg);\n  transform: translate3d(0, -100%, 0) rotateX(90deg);\n}\n.reveal.cube .slides > section > section.future {\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg);\n  transform: translate3d(0, 100%, 0) rotateX(-90deg);\n}\n/*********************************************\n * PAGE TRANSITION\n *********************************************/\n.reveal.page .slides {\n  -webkit-perspective-origin: 0% 50%;\n  perspective-origin: 0% 50%;\n  -webkit-perspective: 3000px;\n  perspective: 3000px;\n}\n.reveal.page .slides section {\n  padding: 30px;\n  min-height: 700px;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.reveal.page .slides section.past {\n  z-index: 12;\n}\n.reveal.page .slides section:not(.stack):before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateZ(-20px);\n  transform: translateZ(-20px);\n}\n.reveal.page .slides section:not(.stack):after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 90%;\n  height: 30px;\n  left: 5%;\n  bottom: 0;\n  background: none;\n  z-index: 1;\n  border-radius: 4px;\n  box-shadow: 0px 95px 25px rgba(0, 0, 0, 0.2);\n  -webkit-transform: translateZ(-90px) rotateX(65deg);\n}\n.reveal.page .slides > section.stack {\n  padding: 0;\n  background: none;\n}\n.reveal.page .slides > section.past {\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n  transform: translate3d(-40%, 0, 0) rotateY(-80deg);\n}\n.reveal.page .slides > section.future {\n  -webkit-transform-origin: 100% 0%;\n  -ms-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.reveal.page .slides > section > section.past {\n  -webkit-transform-origin: 0% 0%;\n  -ms-transform-origin: 0% 0%;\n  transform-origin: 0% 0%;\n  -webkit-transform: translate3d(0, -40%, 0) rotateX(80deg);\n  transform: translate3d(0, -40%, 0) rotateX(80deg);\n}\n.reveal.page .slides > section > section.future {\n  -webkit-transform-origin: 0% 100%;\n  -ms-transform-origin: 0% 100%;\n  transform-origin: 0% 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n/*********************************************\n * FADE TRANSITION\n *********************************************/\n.reveal .slides section[data-transition=fade],\n.reveal.fade .slides section:not([data-transition]),\n.reveal.fade .slides > section > section:not([data-transition]) {\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n  -webkit-transition: opacity 0.5s;\n  transition: opacity 0.5s;\n}\n.reveal.fade.overview .slides section,\n.reveal.fade.overview .slides > section > section {\n  -webkit-transition: none;\n  transition: none;\n}\n/*********************************************\n * NO TRANSITION\n *********************************************/\n.reveal .slides > section[data-transition=none],\n.reveal.none .slides > section:not([data-transition]) {\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n  -webkit-transition: none;\n  transition: none;\n}\n/*********************************************\n * PAUSED MODE\n *********************************************/\n.reveal .pause-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: black;\n  visibility: hidden;\n  opacity: 0;\n  z-index: 100;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n.reveal.paused .pause-overlay {\n  visibility: visible;\n  opacity: 1;\n}\n/*********************************************\n * FALLBACK\n *********************************************/\n.no-transforms {\n  overflow-y: auto;\n}\n.no-transforms .reveal .slides {\n  position: relative;\n  width: 80%;\n  height: auto !important;\n  top: 0;\n  left: 50%;\n  margin: 0;\n  text-align: center;\n}\n.no-transforms .reveal .controls,\n.no-transforms .reveal .progress {\n  display: none !important;\n}\n.no-transforms .reveal .slides section {\n  display: block !important;\n  opacity: 1 !important;\n  position: relative !important;\n  height: auto;\n  min-height: 0;\n  top: 0;\n  left: -50%;\n  margin: 70px 0;\n  -webkit-transform: none;\n  -ms-transform: none;\n  transform: none;\n}\n.no-transforms .reveal .slides section section {\n  left: 0;\n}\n.reveal .no-transition,\n.reveal .no-transition * {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n/*********************************************\n * PER-SLIDE BACKGROUNDS\n *********************************************/\n.reveal .backgrounds {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  -webkit-perspective: 600px;\n  perspective: 600px;\n}\n.reveal .slide-background {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  visibility: hidden;\n  background-color: rgba(0, 0, 0, 0);\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  -webkit-transition: all 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: all 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n.reveal .slide-background.stack {\n  display: block;\n}\n.reveal .slide-background.present {\n  opacity: 1;\n  visibility: visible;\n}\n.print-pdf .reveal .slide-background {\n  opacity: 1 !important;\n  visibility: visible !important;\n}\n/* Video backgrounds */\n.reveal .slide-background video {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  max-width: none;\n  max-height: none;\n  top: 0;\n  left: 0;\n}\n/* Immediate transition style */\n.reveal[data-background-transition=none] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=none] {\n  -webkit-transition: none;\n  transition: none;\n}\n/* Slide */\n.reveal[data-background-transition=slide] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=slide] {\n  opacity: 1;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.reveal[data-background-transition=slide] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=slide] {\n  -webkit-transform: translate(-100%, 0);\n  -ms-transform: translate(-100%, 0);\n  transform: translate(-100%, 0);\n}\n.reveal[data-background-transition=slide] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=slide] {\n  -webkit-transform: translate(100%, 0);\n  -ms-transform: translate(100%, 0);\n  transform: translate(100%, 0);\n}\n.reveal[data-background-transition=slide] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=slide] {\n  -webkit-transform: translate(0, -100%);\n  -ms-transform: translate(0, -100%);\n  transform: translate(0, -100%);\n}\n.reveal[data-background-transition=slide] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=slide] {\n  -webkit-transform: translate(0, 100%);\n  -ms-transform: translate(0, 100%);\n  transform: translate(0, 100%);\n}\n/* Convex */\n.reveal[data-background-transition=convex] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(-90deg) translate3d(-100%, 0, 0);\n}\n.reveal[data-background-transition=convex] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(90deg) translate3d(100%, 0, 0);\n}\n.reveal[data-background-transition=convex] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0) rotateX(90deg) translate3d(0, -100%, 0);\n}\n.reveal[data-background-transition=convex] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=convex] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0) rotateX(-90deg) translate3d(0, 100%, 0);\n}\n/* Concave */\n.reveal[data-background-transition=concave] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n  transform: translate3d(-100%, 0, 0) rotateY(90deg) translate3d(-100%, 0, 0);\n}\n.reveal[data-background-transition=concave] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n  transform: translate3d(100%, 0, 0) rotateY(-90deg) translate3d(100%, 0, 0);\n}\n.reveal[data-background-transition=concave] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n  transform: translate3d(0, -100%, 0) rotateX(-90deg) translate3d(0, -100%, 0);\n}\n.reveal[data-background-transition=concave] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=concave] {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0) rotateX(90deg) translate3d(0, 100%, 0);\n}\n/* Zoom */\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background,\n.reveal > .backgrounds .slide-background[data-background-transition=zoom] {\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease;\n}\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background.past,\n.reveal > .backgrounds .slide-background.past[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(16);\n  -ms-transform: scale(16);\n  transform: scale(16);\n}\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background.future,\n.reveal > .backgrounds .slide-background.future[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n}\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background > .slide-background.past,\n.reveal > .backgrounds .slide-background > .slide-background.past[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(16);\n  -ms-transform: scale(16);\n  transform: scale(16);\n}\n.reveal[data-background-transition=zoom] > .backgrounds .slide-background > .slide-background.future,\n.reveal > .backgrounds .slide-background > .slide-background.future[data-background-transition=zoom] {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n}\n/* Global transition speed settings */\n.reveal[data-transition-speed=\"fast\"] > .backgrounds .slide-background {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.reveal[data-transition-speed=\"slow\"] > .backgrounds .slide-background {\n  -webkit-transition-duration: 1200ms;\n  transition-duration: 1200ms;\n}\n/*********************************************\n * OVERVIEW\n *********************************************/\n.reveal.overview {\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n  -webkit-perspective: 700px;\n  perspective: 700px;\n}\n.reveal.overview .slides section {\n  height: 700px;\n  opacity: 1 !important;\n  overflow: hidden;\n  visibility: visible !important;\n  cursor: pointer;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.reveal.overview .slides section:hover,\n.reveal.overview .slides section.present {\n  outline: 10px solid rgba(150, 150, 150, 0.4);\n  outline-offset: 10px;\n}\n.reveal.overview .slides section .fragment {\n  opacity: 1;\n  -webkit-transition: none;\n  transition: none;\n}\n.reveal.overview .slides section:after,\n.reveal.overview .slides section:before {\n  display: none !important;\n}\n.reveal.overview .slides > section.stack {\n  padding: 0;\n  top: 0 !important;\n  background: none;\n  outline: none;\n  overflow: visible;\n}\n.reveal.overview .backgrounds {\n  -webkit-perspective: inherit;\n  perspective: inherit;\n}\n.reveal.overview .backgrounds .slide-background {\n  opacity: 1;\n  visibility: visible;\n  outline: 10px solid rgba(150, 150, 150, 0.1);\n  outline-offset: 10px;\n}\n.reveal.overview .slides section,\n.reveal.overview-deactivating .slides section {\n  -webkit-transition: none;\n  transition: none;\n}\n.reveal.overview .backgrounds .slide-background,\n.reveal.overview-deactivating .backgrounds .slide-background {\n  -webkit-transition: none;\n  transition: none;\n}\n.reveal.overview-animated .slides {\n  -webkit-transition: -webkit-transform 0.4s ease;\n  transition: transform 0.4s ease;\n}\n/*********************************************\n * RTL SUPPORT\n *********************************************/\n.reveal.rtl .slides,\n.reveal.rtl .slides h1,\n.reveal.rtl .slides h2,\n.reveal.rtl .slides h3,\n.reveal.rtl .slides h4,\n.reveal.rtl .slides h5,\n.reveal.rtl .slides h6 {\n  direction: rtl;\n  font-family: sans-serif;\n}\n.reveal.rtl pre,\n.reveal.rtl code {\n  direction: ltr;\n}\n.reveal.rtl ol,\n.reveal.rtl ul {\n  text-align: right;\n}\n.reveal.rtl .progress span {\n  float: right;\n}\n/*********************************************\n * PARALLAX BACKGROUND\n *********************************************/\n.reveal.has-parallax-background .backgrounds {\n  -webkit-transition: all 0.8s ease;\n  transition: all 0.8s ease;\n}\n/* Global transition speed settings */\n.reveal.has-parallax-background[data-transition-speed=\"fast\"] .backgrounds {\n  -webkit-transition-duration: 400ms;\n  transition-duration: 400ms;\n}\n.reveal.has-parallax-background[data-transition-speed=\"slow\"] .backgrounds {\n  -webkit-transition-duration: 1200ms;\n  transition-duration: 1200ms;\n}\n/*********************************************\n * LINK PREVIEW OVERLAY\n *********************************************/\n.reveal .overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.9);\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.reveal .overlay.visible {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .overlay .spinner {\n  position: absolute;\n  display: block;\n  top: 50%;\n  left: 50%;\n  width: 32px;\n  height: 32px;\n  margin: -16px 0 0 -16px;\n  z-index: 10;\n  background-image: url(data:image/gif;base64,R0lGODlhIAAgAPMAAJmZmf%2F%2F%2F6%2Bvr8nJybW1tcDAwOjo6Nvb26ioqKOjo7Ozs%2FLy8vz8%2FAAAAAAAAAAAACH%2FC05FVFNDQVBFMi4wAwEAAAAh%2FhpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh%2BQQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ%2FV%2FnmOM82XiHRLYKhKP1oZmADdEAAAh%2BQQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY%2FCZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB%2BA4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6%2BHo7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq%2BB6QDtuetcaBPnW6%2BO7wDHpIiK9SaVK5GgV543tzjgGcghAgAh%2BQQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK%2B%2BG%2Bw48edZPK%2BM6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE%2BG%2BcD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm%2BFNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk%2BaV%2BoJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0%2FVNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc%2BXiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30%2FiI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE%2FjiuL04RGEBgwWhShRgQExHBAAh%2BQQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR%2BipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq%2BE71SRQeyqUToLA7VxF0JDyIQh%2FMVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY%2BYip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd%2BMFCN6HAAIKgNggY0KtEBAAh%2BQQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1%2BvsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d%2BjYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg%2BygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0%2Bbm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h%2BKr0SJ8MFihpNbx%2B4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX%2BBP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA%3D%3D);\n  visibility: visible;\n  opacity: 0.6;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.reveal .overlay header {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 40px;\n  z-index: 2;\n  border-bottom: 1px solid #222;\n}\n.reveal .overlay header a {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  padding: 0 10px;\n  float: right;\n  opacity: 0.6;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.reveal .overlay header a:hover {\n  opacity: 1;\n}\n.reveal .overlay header a .icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background-position: 50% 50%;\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n.reveal .overlay header a.close .icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABkklEQVRYR8WX4VHDMAxG6wnoJrABZQPYBCaBTWAD2g1gE5gg6OOsXuxIlr40d81dfrSJ9V4c2VLK7spHuTJ/5wpM07QXuXc5X0opX2tEJcadjHuV80li/FgxTIEK/5QBCICBD6xEhSMGHgQPgBgLiYVAB1dpSqKDawxTohFw4JSEA3clzgIBPCURwE2JucBR7rhPJJv5OpJwDX+SfDjgx1wACQeJG1aChP9K/IMmdZ8DtESV1WyP3Bt4MwM6sj4NMxMYiqUWHQu4KYA/SYkIjOsm3BXYWMKFDwU2khjCQ4ELJUJ4SmClRArOCmSXGuKma0fYD5CbzHxFpCSGAhfAVSSUGDUk2BWZaff2g6GE15BsBQ9nwmpIGDiyHQddwNTMKkbZaf9fajXQca1EX44puJZUsnY0ObGmITE3GVLCbEhQUjGVt146j6oasWN+49Vph2w1pZ5EansNZqKBm1txbU57iRRcZ86RWMDdWtBJUHBHwoQPi1GV+JCbntmvok7iTX4/Up9mgyTc/FJYDTcndgH/AA5A/CHsyEkVAAAAAElFTkSuQmCC);\n}\n.reveal .overlay header a.external .icon {\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAcElEQVRYR+2WSQoAIQwEzf8f7XiOMkUQxUPlGkM3hVmiQfQR9GYnH1SsAQlI4DiBqkCMoNb9y2e90IAEJPAcgdznU9+engMaeJ7Azh5Y1U67gAho4DqBqmB1buAf0MB1AlVBek83ZPkmJMGc1wAR+AAqod/B97TRpQAAAABJRU5ErkJggg==);\n}\n.reveal .overlay .viewport {\n  position: absolute;\n  top: 40px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.reveal .overlay.overlay-preview .viewport iframe {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  border: 0;\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.reveal .overlay.overlay-preview.loaded .viewport iframe {\n  opacity: 1;\n  visibility: visible;\n}\n.reveal .overlay.overlay-preview.loaded .spinner {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0.2);\n  -ms-transform: scale(0.2);\n  transform: scale(0.2);\n}\n.reveal .overlay.overlay-help .viewport {\n  overflow: auto;\n  color: #fff;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner {\n  width: 600px;\n  margin: 0 auto;\n  padding: 60px;\n  text-align: center;\n  letter-spacing: normal;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner .title {\n  font-size: 20px;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner table {\n  border: 1px solid #fff;\n  border-collapse: collapse;\n  font-size: 14px;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner table th,\n.reveal .overlay.overlay-help .viewport .viewport-inner table td {\n  width: 200px;\n  padding: 10px;\n  border: 1px solid #fff;\n  vertical-align: middle;\n}\n.reveal .overlay.overlay-help .viewport .viewport-inner table th {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n/*********************************************\n * PLAYBACK COMPONENT\n *********************************************/\n.reveal .playback {\n  position: fixed;\n  left: 15px;\n  bottom: 15px;\n  z-index: 30;\n  cursor: pointer;\n  -webkit-transition: all 400ms ease;\n  transition: all 400ms ease;\n}\n.reveal.overview .playback {\n  opacity: 0;\n  visibility: hidden;\n}\n/*********************************************\n * ROLLING LINKS\n *********************************************/\n.reveal .roll {\n  display: inline-block;\n  line-height: 1.2;\n  overflow: hidden;\n  vertical-align: top;\n  -webkit-perspective: 400px;\n  perspective: 400px;\n  -webkit-perspective-origin: 50% 50%;\n  perspective-origin: 50% 50%;\n}\n.reveal .roll:hover {\n  background: none;\n  text-shadow: none;\n}\n.reveal .roll span {\n  display: block;\n  position: relative;\n  padding: 0 2px;\n  pointer-events: none;\n  -webkit-transition: all 400ms ease;\n  transition: all 400ms ease;\n  -webkit-transform-origin: 50% 0%;\n  -ms-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.reveal .roll:hover span {\n  background: rgba(0, 0, 0, 0.5);\n  -webkit-transform: translate3d(0px, 0px, -45px) rotateX(90deg);\n  transform: translate3d(0px, 0px, -45px) rotateX(90deg);\n}\n.reveal .roll span:after {\n  content: attr(data-title);\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 0 2px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform-origin: 50% 0%;\n  -ms-transform-origin: 50% 0%;\n  transform-origin: 50% 0%;\n  -webkit-transform: translate3d(0px, 110%, 0px) rotateX(-90deg);\n  transform: translate3d(0px, 110%, 0px) rotateX(-90deg);\n}\n/*********************************************\n * SPEAKER NOTES\n *********************************************/\n.reveal aside.notes {\n  display: none;\n}\n/*********************************************\n * ZOOM PLUGIN\n *********************************************/\n.zoomed .reveal *,\n.zoomed .reveal *:before,\n.zoomed .reveal *:after {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n.zoomed .reveal .progress,\n.zoomed .reveal .controls {\n  opacity: 0;\n}\n.zoomed .reveal .roll span {\n  background: none;\n}\n.zoomed .reveal .roll span:after {\n  visibility: hidden;\n}\n/**\n * A simple theme for reveal.js presentations, similar\n * to the default theme. The accent color is darkblue.\n *\n * This theme is Copyright (C) 2012 Owen Versteeg, https://github.com/StereotypicalApps. It is MIT licensed.\n * reveal.js is Copyright (C) 2011-2012 Hakim El Hattab, http://hakim.se\n */\n/*********************************************\n * GLOBAL STYLES\n *********************************************/\nbody {\n  background: #fff;\n  background-color: #fff;\n}\n.reveal {\n  font-family: 'Lato', sans-serif;\n  font-size: 36px;\n  font-weight: normal;\n  color: #000;\n}\n::selection {\n  color: #fff;\n  background: rgba(0, 0, 0, 0.99);\n  text-shadow: none;\n}\n.reveal .slides > section,\n.reveal .slides > section > section {\n  line-height: 1.3;\n  font-weight: inherit;\n}\n/*********************************************\n * HEADERS\n *********************************************/\n.reveal h1,\n.reveal h2,\n.reveal h3,\n.reveal h4,\n.reveal h5,\n.reveal h6 {\n  margin: 0 0 20px 0;\n  color: #000;\n  font-family: 'News Cycle', Impact, sans-serif;\n  font-weight: normal;\n  line-height: 1.2;\n  letter-spacing: normal;\n  text-transform: none;\n  text-shadow: none;\n  word-wrap: break-word;\n}\n.reveal h1 {\n  font-size: 3.77em;\n}\n.reveal h2 {\n  font-size: 2.11em;\n}\n.reveal h3 {\n  font-size: 1.55em;\n}\n.reveal h4 {\n  font-size: 1em;\n}\n.reveal h1 {\n  text-shadow: none;\n}\n/*********************************************\n * OTHER\n *********************************************/\n.reveal p {\n  margin: 20px 0;\n  line-height: 1.3;\n}\n/* Ensure certain elements are never larger than the slide itself */\n.reveal img,\n.reveal video,\n.reveal iframe {\n  max-width: 95%;\n  max-height: 95%;\n}\n.reveal strong,\n.reveal b {\n  font-weight: bold;\n}\n.reveal em {\n  font-style: italic;\n}\n.reveal ol,\n.reveal dl,\n.reveal ul {\n  display: inline-block;\n  text-align: left;\n  margin: 0 0 0 1em;\n}\n.reveal ol {\n  list-style-type: decimal;\n}\n.reveal ul {\n  list-style-type: disc;\n}\n.reveal ul ul {\n  list-style-type: square;\n}\n.reveal ul ul ul {\n  list-style-type: circle;\n}\n.reveal ul ul,\n.reveal ul ol,\n.reveal ol ol,\n.reveal ol ul {\n  display: block;\n  margin-left: 40px;\n}\n.reveal dt {\n  font-weight: bold;\n}\n.reveal dd {\n  margin-left: 40px;\n}\n.reveal q,\n.reveal blockquote {\n  quotes: none;\n}\n.reveal blockquote {\n  display: block;\n  position: relative;\n  width: 70%;\n  margin: 20px auto;\n  padding: 5px;\n  font-style: italic;\n  background: rgba(255, 255, 255, 0.05);\n  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);\n}\n.reveal blockquote p:first-child,\n.reveal blockquote p:last-child {\n  display: inline-block;\n}\n.reveal q {\n  font-style: italic;\n}\n.reveal pre {\n  display: block;\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n  text-align: left;\n  font-size: 0.55em;\n  font-family: monospace;\n  line-height: 1.2em;\n  word-wrap: break-word;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);\n}\n.reveal code {\n  font-family: monospace;\n}\n.reveal pre code {\n  display: block;\n  padding: 5px;\n  overflow: auto;\n  max-height: 400px;\n  word-wrap: normal;\n  background: #3F3F3F;\n  color: #DCDCDC;\n}\n.reveal table {\n  margin: auto;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.reveal table th {\n  font-weight: bold;\n}\n.reveal table th,\n.reveal table td {\n  text-align: left;\n  padding: 0.2em 0.5em 0.2em 0.5em;\n  border-bottom: 1px solid;\n}\n.reveal table th[align=\"center\"],\n.reveal table td[align=\"center\"] {\n  text-align: center;\n}\n.reveal table th[align=\"right\"],\n.reveal table td[align=\"right\"] {\n  text-align: right;\n}\n.reveal table tr:last-child td {\n  border-bottom: none;\n}\n.reveal sup {\n  vertical-align: super;\n}\n.reveal sub {\n  vertical-align: sub;\n}\n.reveal small {\n  display: inline-block;\n  font-size: 0.6em;\n  line-height: 1.2em;\n  vertical-align: top;\n}\n.reveal small * {\n  vertical-align: top;\n}\n/*********************************************\n * LINKS\n *********************************************/\n.reveal a {\n  color: #00008B;\n  text-decoration: none;\n  -webkit-transition: color 0.15s ease;\n  -moz-transition: color 0.15s ease;\n  transition: color 0.15s ease;\n}\n.reveal a:hover {\n  color: #0000f1;\n  text-shadow: none;\n  border: none;\n}\n.reveal .roll span:after {\n  color: #fff;\n  background: #00003f;\n}\n/*********************************************\n * IMAGES\n *********************************************/\n.reveal section img {\n  margin: 15px 0px;\n  background: rgba(255, 255, 255, 0.12);\n  border: 4px solid #000;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.reveal a img {\n  -webkit-transition: all 0.15s linear;\n  -moz-transition: all 0.15s linear;\n  transition: all 0.15s linear;\n}\n.reveal a:hover img {\n  background: rgba(255, 255, 255, 0.2);\n  border-color: #00008B;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.55);\n}\n/*********************************************\n * NAVIGATION CONTROLS\n *********************************************/\n.reveal .controls div.navigate-left,\n.reveal .controls div.navigate-left.enabled {\n  border-right-color: #00008B;\n}\n.reveal .controls div.navigate-right,\n.reveal .controls div.navigate-right.enabled {\n  border-left-color: #00008B;\n}\n.reveal .controls div.navigate-up,\n.reveal .controls div.navigate-up.enabled {\n  border-bottom-color: #00008B;\n}\n.reveal .controls div.navigate-down,\n.reveal .controls div.navigate-down.enabled {\n  border-top-color: #00008B;\n}\n.reveal .controls div.navigate-left.enabled:hover {\n  border-right-color: #0000f1;\n}\n.reveal .controls div.navigate-right.enabled:hover {\n  border-left-color: #0000f1;\n}\n.reveal .controls div.navigate-up.enabled:hover {\n  border-bottom-color: #0000f1;\n}\n.reveal .controls div.navigate-down.enabled:hover {\n  border-top-color: #0000f1;\n}\n/*********************************************\n * PROGRESS BAR\n *********************************************/\n.reveal .progress {\n  background: rgba(0, 0, 0, 0.2);\n}\n.reveal .progress span {\n  background: #00008B;\n  -webkit-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  -moz-transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n  transition: width 800ms cubic-bezier(0.26, 0.86, 0.44, 0.985);\n}\n/*********************************************\n * SLIDE NUMBER\n *********************************************/\n.reveal .slide-number {\n  color: #00008B;\n}\n/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n.hljs-regexp {\n  color: #009926;\n}\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n.hljs-built_in {\n  color: #0086b3;\n}\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n.hljs-deletion {\n  background: #fdd;\n}\n.hljs-addition {\n  background: #dfd;\n}\n.diff .hljs-change {\n  background: #0086b3;\n}\n.hljs-chunk {\n  color: #aaa;\n}\n"; (require("browserify-css").createStyle(css, { "href": "src/styles/ss.css"})); module.exports = css;
},{"browserify-css":1}]},{},[6])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYnJvd3NlcmlmeS1jc3MvYnJvd3Nlci5qcyIsInNyYy9jb21wb25lbnRzL2hpZ2hsaWdodC5qcy9oaWdobGlnaHQucGFjay5qcyIsInNyYy9jb21wb25lbnRzL2pxdWVyeS9kaXN0L2pxdWVyeS5taW4uanMiLCJzcmMvY29tcG9uZW50cy9yZXZlYWwuanMvanMvcmV2ZWFsLmpzIiwic3JjL2NvbXBvbmVudHMvcmZpZGRsZUhlbHBlci9yZmlkZGxlSGVscGVyLm1pbi5qcyIsInNyYy9zY3JpcHRzL3NzLmpzIiwic3JjL3N0eWxlcy9zcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzU1SUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMzRkEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYnJvd3NlciBmaWVsZCwgY2hlY2sgb3V0IHRoZSBicm93c2VyIGZpZWxkIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9icm93c2VyaWZ5LWhhbmRib29rI2Jyb3dzZXItZmllbGQuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIC8vIENyZWF0ZSBhIDxsaW5rPiB0YWcgd2l0aCBvcHRpb25hbCBkYXRhIGF0dHJpYnV0ZXNcbiAgICBjcmVhdGVMaW5rOiBmdW5jdGlvbihocmVmLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCAhIGF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9LFxuICAgIC8vIENyZWF0ZSBhIDxzdHlsZT4gdGFnIHdpdGggb3B0aW9uYWwgZGF0YSBhdHRyaWJ1dGVzXG4gICAgY3JlYXRlU3R5bGU6IGZ1bmN0aW9uKGNzc1RleHQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0sXG4gICAgICAgICAgICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICAgICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGlmICggISBhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS0nICsga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChzdHlsZS5zaGVldCkgeyAvLyBmb3IganNkb20gYW5kIElFOStcbiAgICAgICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGNzc1RleHQ7XG4gICAgICAgICAgICBzdHlsZS5zaGVldC5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHsgLy8gZm9yIElFOCBhbmQgYmVsb3dcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzVGV4dDtcbiAgICAgICAgfSBlbHNlIHsgLy8gZm9yIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaVxuICAgICAgICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzVGV4dCkpO1xuICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuIiwiZXhwb3J0cz11bmRlZmluZWQ7IWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP2UoZXhwb3J0cyk6KHdpbmRvdy5obGpzPWUoe30pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwiaGxqc1wiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIHdpbmRvdy5obGpzfSkpfShmdW5jdGlvbihlKXtmdW5jdGlvbiBuKGUpe3JldHVybiBlLnJlcGxhY2UoLyYvZ20sXCImYW1wO1wiKS5yZXBsYWNlKC88L2dtLFwiJmx0O1wiKS5yZXBsYWNlKC8+L2dtLFwiJmd0O1wiKX1mdW5jdGlvbiB0KGUpe3JldHVybiBlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCl9ZnVuY3Rpb24gcihlLG4pe3ZhciB0PWUmJmUuZXhlYyhuKTtyZXR1cm4gdCYmMD09dC5pbmRleH1mdW5jdGlvbiBhKGUpe3JldHVybi9uby0/aGlnaGxpZ2h0fHBsYWlufHRleHQvLnRlc3QoZSl9ZnVuY3Rpb24gaShlKXt2YXIgbix0LHIsaT1lLmNsYXNzTmFtZStcIiBcIjtpZihpKz1lLnBhcmVudE5vZGU/ZS5wYXJlbnROb2RlLmNsYXNzTmFtZTpcIlwiLHQ9L1xcYmxhbmcoPzp1YWdlKT8tKFtcXHctXSspXFxiLy5leGVjKGkpKXJldHVybiBFKHRbMV0pP3RbMV06XCJuby1oaWdobGlnaHRcIjtmb3IoaT1pLnNwbGl0KC9cXHMrLyksbj0wLHI9aS5sZW5ndGg7cj5uO24rKylpZihFKGlbbl0pfHxhKGlbbl0pKXJldHVybiBpW25dfWZ1bmN0aW9uIG8oZSxuKXt2YXIgdCxyPXt9O2Zvcih0IGluIGUpclt0XT1lW3RdO2lmKG4pZm9yKHQgaW4gbilyW3RdPW5bdF07cmV0dXJuIHJ9ZnVuY3Rpb24gdShlKXt2YXIgbj1bXTtyZXR1cm4gZnVuY3Rpb24gcihlLGEpe2Zvcih2YXIgaT1lLmZpcnN0Q2hpbGQ7aTtpPWkubmV4dFNpYmxpbmcpMz09aS5ub2RlVHlwZT9hKz1pLm5vZGVWYWx1ZS5sZW5ndGg6MT09aS5ub2RlVHlwZSYmKG4ucHVzaCh7ZXZlbnQ6XCJzdGFydFwiLG9mZnNldDphLG5vZGU6aX0pLGE9cihpLGEpLHQoaSkubWF0Y2goL2JyfGhyfGltZ3xpbnB1dC8pfHxuLnB1c2goe2V2ZW50Olwic3RvcFwiLG9mZnNldDphLG5vZGU6aX0pKTtyZXR1cm4gYX0oZSwwKSxufWZ1bmN0aW9uIGMoZSxyLGEpe2Z1bmN0aW9uIGkoKXtyZXR1cm4gZS5sZW5ndGgmJnIubGVuZ3RoP2VbMF0ub2Zmc2V0IT1yWzBdLm9mZnNldD9lWzBdLm9mZnNldDxyWzBdLm9mZnNldD9lOnI6XCJzdGFydFwiPT1yWzBdLmV2ZW50P2U6cjplLmxlbmd0aD9lOnJ9ZnVuY3Rpb24gbyhlKXtmdW5jdGlvbiByKGUpe3JldHVyblwiIFwiK2Uubm9kZU5hbWUrJz1cIicrbihlLnZhbHVlKSsnXCInfWYrPVwiPFwiK3QoZSkrQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGUuYXR0cmlidXRlcyxyKS5qb2luKFwiXCIpK1wiPlwifWZ1bmN0aW9uIHUoZSl7Zis9XCI8L1wiK3QoZSkrXCI+XCJ9ZnVuY3Rpb24gYyhlKXsoXCJzdGFydFwiPT1lLmV2ZW50P286dSkoZS5ub2RlKX1mb3IodmFyIHM9MCxmPVwiXCIsbD1bXTtlLmxlbmd0aHx8ci5sZW5ndGg7KXt2YXIgZz1pKCk7aWYoZis9bihhLnN1YnN0cihzLGdbMF0ub2Zmc2V0LXMpKSxzPWdbMF0ub2Zmc2V0LGc9PWUpe2wucmV2ZXJzZSgpLmZvckVhY2godSk7ZG8gYyhnLnNwbGljZSgwLDEpWzBdKSxnPWkoKTt3aGlsZShnPT1lJiZnLmxlbmd0aCYmZ1swXS5vZmZzZXQ9PXMpO2wucmV2ZXJzZSgpLmZvckVhY2gobyl9ZWxzZVwic3RhcnRcIj09Z1swXS5ldmVudD9sLnB1c2goZ1swXS5ub2RlKTpsLnBvcCgpLGMoZy5zcGxpY2UoMCwxKVswXSl9cmV0dXJuIGYrbihhLnN1YnN0cihzKSl9ZnVuY3Rpb24gcyhlKXtmdW5jdGlvbiBuKGUpe3JldHVybiBlJiZlLnNvdXJjZXx8ZX1mdW5jdGlvbiB0KHQscil7cmV0dXJuIG5ldyBSZWdFeHAobih0KSxcIm1cIisoZS5jST9cImlcIjpcIlwiKSsocj9cImdcIjpcIlwiKSl9ZnVuY3Rpb24gcihhLGkpe2lmKCFhLmNvbXBpbGVkKXtpZihhLmNvbXBpbGVkPSEwLGEuaz1hLmt8fGEuYkssYS5rKXt2YXIgdT17fSxjPWZ1bmN0aW9uKG4sdCl7ZS5jSSYmKHQ9dC50b0xvd2VyQ2FzZSgpKSx0LnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCJ8XCIpO3VbdFswXV09W24sdFsxXT9OdW1iZXIodFsxXSk6MV19KX07XCJzdHJpbmdcIj09dHlwZW9mIGEuaz9jKFwia2V5d29yZFwiLGEuayk6T2JqZWN0LmtleXMoYS5rKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2MoZSxhLmtbZV0pfSksYS5rPXV9YS5sUj10KGEubHx8L1xcYlxcdytcXGIvLCEwKSxpJiYoYS5iSyYmKGEuYj1cIlxcXFxiKFwiK2EuYksuc3BsaXQoXCIgXCIpLmpvaW4oXCJ8XCIpK1wiKVxcXFxiXCIpLGEuYnx8KGEuYj0vXFxCfFxcYi8pLGEuYlI9dChhLmIpLGEuZXx8YS5lV3x8KGEuZT0vXFxCfFxcYi8pLGEuZSYmKGEuZVI9dChhLmUpKSxhLnRFPW4oYS5lKXx8XCJcIixhLmVXJiZpLnRFJiYoYS50RSs9KGEuZT9cInxcIjpcIlwiKStpLnRFKSksYS5pJiYoYS5pUj10KGEuaSkpLHZvaWQgMD09PWEuciYmKGEucj0xKSxhLmN8fChhLmM9W10pO3ZhciBzPVtdO2EuYy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2Uudj9lLnYuZm9yRWFjaChmdW5jdGlvbihuKXtzLnB1c2gobyhlLG4pKX0pOnMucHVzaChcInNlbGZcIj09ZT9hOmUpfSksYS5jPXMsYS5jLmZvckVhY2goZnVuY3Rpb24oZSl7cihlLGEpfSksYS5zdGFydHMmJnIoYS5zdGFydHMsaSk7dmFyIGY9YS5jLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZS5iSz9cIlxcXFwuPyhcIitlLmIrXCIpXFxcXC4/XCI6ZS5ifSkuY29uY2F0KFthLnRFLGEuaV0pLm1hcChuKS5maWx0ZXIoQm9vbGVhbik7YS50PWYubGVuZ3RoP3QoZi5qb2luKFwifFwiKSwhMCk6e2V4ZWM6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH19fX1yKGUpfWZ1bmN0aW9uIGYoZSx0LGEsaSl7ZnVuY3Rpb24gbyhlLG4pe2Zvcih2YXIgdD0wO3Q8bi5jLmxlbmd0aDt0KyspaWYocihuLmNbdF0uYlIsZSkpcmV0dXJuIG4uY1t0XX1mdW5jdGlvbiB1KGUsbil7aWYocihlLmVSLG4pKXtmb3IoO2UuZW5kc1BhcmVudCYmZS5wYXJlbnQ7KWU9ZS5wYXJlbnQ7cmV0dXJuIGV9cmV0dXJuIGUuZVc/dShlLnBhcmVudCxuKTp2b2lkIDB9ZnVuY3Rpb24gYyhlLG4pe3JldHVybiFhJiZyKG4uaVIsZSl9ZnVuY3Rpb24gZyhlLG4pe3ZhciB0PU4uY0k/blswXS50b0xvd2VyQ2FzZSgpOm5bMF07cmV0dXJuIGUuay5oYXNPd25Qcm9wZXJ0eSh0KSYmZS5rW3RdfWZ1bmN0aW9uIGgoZSxuLHQscil7dmFyIGE9cj9cIlwiOncuY2xhc3NQcmVmaXgsaT0nPHNwYW4gY2xhc3M9XCInK2Esbz10P1wiXCI6XCI8L3NwYW4+XCI7cmV0dXJuIGkrPWUrJ1wiPicsaStuK299ZnVuY3Rpb24gcCgpe2lmKCFMLmspcmV0dXJuIG4oQik7dmFyIGU9XCJcIix0PTA7TC5sUi5sYXN0SW5kZXg9MDtmb3IodmFyIHI9TC5sUi5leGVjKEIpO3I7KXtlKz1uKEIuc3Vic3RyKHQsci5pbmRleC10KSk7dmFyIGE9ZyhMLHIpO2E/KHkrPWFbMV0sZSs9aChhWzBdLG4oclswXSkpKTplKz1uKHJbMF0pLHQ9TC5sUi5sYXN0SW5kZXgscj1MLmxSLmV4ZWMoQil9cmV0dXJuIGUrbihCLnN1YnN0cih0KSl9ZnVuY3Rpb24gZCgpe2lmKEwuc0wmJiF4W0wuc0xdKXJldHVybiBuKEIpO3ZhciBlPUwuc0w/ZihMLnNMLEIsITAsTVtMLnNMXSk6bChCKTtyZXR1cm4gTC5yPjAmJih5Kz1lLnIpLFwiY29udGludW91c1wiPT1MLnN1Ykxhbmd1YWdlTW9kZSYmKE1bTC5zTF09ZS50b3ApLGgoZS5sYW5ndWFnZSxlLnZhbHVlLCExLCEwKX1mdW5jdGlvbiBiKCl7cmV0dXJuIHZvaWQgMCE9PUwuc0w/ZCgpOnAoKX1mdW5jdGlvbiB2KGUsdCl7dmFyIHI9ZS5jTj9oKGUuY04sXCJcIiwhMCk6XCJcIjtlLnJCPyhrKz1yLEI9XCJcIik6ZS5lQj8oays9bih0KStyLEI9XCJcIik6KGsrPXIsQj10KSxMPU9iamVjdC5jcmVhdGUoZSx7cGFyZW50Ont2YWx1ZTpMfX0pfWZ1bmN0aW9uIG0oZSx0KXtpZihCKz1lLHZvaWQgMD09PXQpcmV0dXJuIGsrPWIoKSwwO3ZhciByPW8odCxMKTtpZihyKXJldHVybiBrKz1iKCksdihyLHQpLHIuckI/MDp0Lmxlbmd0aDt2YXIgYT11KEwsdCk7aWYoYSl7dmFyIGk9TDtpLnJFfHxpLmVFfHwoQis9dCksays9YigpO2RvIEwuY04mJihrKz1cIjwvc3Bhbj5cIikseSs9TC5yLEw9TC5wYXJlbnQ7d2hpbGUoTCE9YS5wYXJlbnQpO3JldHVybiBpLmVFJiYoays9bih0KSksQj1cIlwiLGEuc3RhcnRzJiZ2KGEuc3RhcnRzLFwiXCIpLGkuckU/MDp0Lmxlbmd0aH1pZihjKHQsTCkpdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGxleGVtZSBcIicrdCsnXCIgZm9yIG1vZGUgXCInKyhMLmNOfHxcIjx1bm5hbWVkPlwiKSsnXCInKTtyZXR1cm4gQis9dCx0Lmxlbmd0aHx8MX12YXIgTj1FKGUpO2lmKCFOKXRocm93IG5ldyBFcnJvcignVW5rbm93biBsYW5ndWFnZTogXCInK2UrJ1wiJyk7cyhOKTt2YXIgUixMPWl8fE4sTT17fSxrPVwiXCI7Zm9yKFI9TDtSIT1OO1I9Ui5wYXJlbnQpUi5jTiYmKGs9aChSLmNOLFwiXCIsITApK2spO3ZhciBCPVwiXCIseT0wO3RyeXtmb3IodmFyIEMsaixJPTA7Oyl7aWYoTC50Lmxhc3RJbmRleD1JLEM9TC50LmV4ZWModCksIUMpYnJlYWs7aj1tKHQuc3Vic3RyKEksQy5pbmRleC1JKSxDWzBdKSxJPUMuaW5kZXgran1mb3IobSh0LnN1YnN0cihJKSksUj1MO1IucGFyZW50O1I9Ui5wYXJlbnQpUi5jTiYmKGsrPVwiPC9zcGFuPlwiKTtyZXR1cm57cjp5LHZhbHVlOmssbGFuZ3VhZ2U6ZSx0b3A6TH19Y2F0Y2goTyl7aWYoLTEhPU8ubWVzc2FnZS5pbmRleE9mKFwiSWxsZWdhbFwiKSlyZXR1cm57cjowLHZhbHVlOm4odCl9O3Rocm93IE99fWZ1bmN0aW9uIGwoZSx0KXt0PXR8fHcubGFuZ3VhZ2VzfHxPYmplY3Qua2V5cyh4KTt2YXIgcj17cjowLHZhbHVlOm4oZSl9LGE9cjtyZXR1cm4gdC5mb3JFYWNoKGZ1bmN0aW9uKG4pe2lmKEUobikpe3ZhciB0PWYobixlLCExKTt0Lmxhbmd1YWdlPW4sdC5yPmEuciYmKGE9dCksdC5yPnIuciYmKGE9cixyPXQpfX0pLGEubGFuZ3VhZ2UmJihyLnNlY29uZF9iZXN0PWEpLHJ9ZnVuY3Rpb24gZyhlKXtyZXR1cm4gdy50YWJSZXBsYWNlJiYoZT1lLnJlcGxhY2UoL14oKDxbXj5dKz58XFx0KSspL2dtLGZ1bmN0aW9uKGUsbil7cmV0dXJuIG4ucmVwbGFjZSgvXFx0L2csdy50YWJSZXBsYWNlKX0pKSx3LnVzZUJSJiYoZT1lLnJlcGxhY2UoL1xcbi9nLFwiPGJyPlwiKSksZX1mdW5jdGlvbiBoKGUsbix0KXt2YXIgcj1uP1Jbbl06dCxhPVtlLnRyaW0oKV07cmV0dXJuIGUubWF0Y2goL1xcYmhsanNcXGIvKXx8YS5wdXNoKFwiaGxqc1wiKSwtMT09PWUuaW5kZXhPZihyKSYmYS5wdXNoKHIpLGEuam9pbihcIiBcIikudHJpbSgpfWZ1bmN0aW9uIHAoZSl7dmFyIG49aShlKTtpZighYShuKSl7dmFyIHQ7dy51c2VCUj8odD1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsXCJkaXZcIiksdC5pbm5lckhUTUw9ZS5pbm5lckhUTUwucmVwbGFjZSgvXFxuL2csXCJcIikucmVwbGFjZSgvPGJyWyBcXC9dKj4vZyxcIlxcblwiKSk6dD1lO3ZhciByPXQudGV4dENvbnRlbnQsbz1uP2YobixyLCEwKTpsKHIpLHM9dSh0KTtpZihzLmxlbmd0aCl7dmFyIHA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFwiZGl2XCIpO3AuaW5uZXJIVE1MPW8udmFsdWUsby52YWx1ZT1jKHMsdShwKSxyKX1vLnZhbHVlPWcoby52YWx1ZSksZS5pbm5lckhUTUw9by52YWx1ZSxlLmNsYXNzTmFtZT1oKGUuY2xhc3NOYW1lLG4sby5sYW5ndWFnZSksZS5yZXN1bHQ9e2xhbmd1YWdlOm8ubGFuZ3VhZ2UscmU6by5yfSxvLnNlY29uZF9iZXN0JiYoZS5zZWNvbmRfYmVzdD17bGFuZ3VhZ2U6by5zZWNvbmRfYmVzdC5sYW5ndWFnZSxyZTpvLnNlY29uZF9iZXN0LnJ9KX19ZnVuY3Rpb24gZChlKXt3PW8odyxlKX1mdW5jdGlvbiBiKCl7aWYoIWIuY2FsbGVkKXtiLmNhbGxlZD0hMDt2YXIgZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicHJlIGNvZGVcIik7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChlLHApfX1mdW5jdGlvbiB2KCl7YWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixiLCExKSxhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGIsITEpfWZ1bmN0aW9uIG0obix0KXt2YXIgcj14W25dPXQoZSk7ci5hbGlhc2VzJiZyLmFsaWFzZXMuZm9yRWFjaChmdW5jdGlvbihlKXtSW2VdPW59KX1mdW5jdGlvbiBOKCl7cmV0dXJuIE9iamVjdC5rZXlzKHgpfWZ1bmN0aW9uIEUoZSl7cmV0dXJuIHhbZV18fHhbUltlXV19dmFyIHc9e2NsYXNzUHJlZml4OlwiaGxqcy1cIix0YWJSZXBsYWNlOm51bGwsdXNlQlI6ITEsbGFuZ3VhZ2VzOnZvaWQgMH0seD17fSxSPXt9O3JldHVybiBlLmhpZ2hsaWdodD1mLGUuaGlnaGxpZ2h0QXV0bz1sLGUuZml4TWFya3VwPWcsZS5oaWdobGlnaHRCbG9jaz1wLGUuY29uZmlndXJlPWQsZS5pbml0SGlnaGxpZ2h0aW5nPWIsZS5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkPXYsZS5yZWdpc3Rlckxhbmd1YWdlPW0sZS5saXN0TGFuZ3VhZ2VzPU4sZS5nZXRMYW5ndWFnZT1FLGUuaW5oZXJpdD1vLGUuSVI9XCJbYS16QS1aXVxcXFx3KlwiLGUuVUlSPVwiW2EtekEtWl9dXFxcXHcqXCIsZS5OUj1cIlxcXFxiXFxcXGQrKFxcXFwuXFxcXGQrKT9cIixlLkNOUj1cIlxcXFxiKDBbeFhdW2EtZkEtRjAtOV0rfChcXFxcZCsoXFxcXC5cXFxcZCopP3xcXFxcLlxcXFxkKykoW2VFXVstK10/XFxcXGQrKT8pXCIsZS5CTlI9XCJcXFxcYigwYlswMV0rKVwiLGUuUlNSPVwiIXwhPXwhPT18JXwlPXwmfCYmfCY9fFxcXFwqfFxcXFwqPXxcXFxcK3xcXFxcKz18LHwtfC09fC89fC98Onw7fDw8fDw8PXw8PXw8fD09PXw9PXw9fD4+Pj18Pj49fD49fD4+Pnw+Pnw+fFxcXFw/fFxcXFxbfFxcXFx7fFxcXFwofFxcXFxefFxcXFxePXxcXFxcfHxcXFxcfD18XFxcXHxcXFxcfHx+XCIsZS5CRT17YjpcIlxcXFxcXFxcW1xcXFxzXFxcXFNdXCIscjowfSxlLkFTTT17Y046XCJzdHJpbmdcIixiOlwiJ1wiLGU6XCInXCIsaTpcIlxcXFxuXCIsYzpbZS5CRV19LGUuUVNNPXtjTjpcInN0cmluZ1wiLGI6J1wiJyxlOidcIicsaTpcIlxcXFxuXCIsYzpbZS5CRV19LGUuUFdNPXtiOi9cXGIoYXxhbnx0aGV8YXJlfEl8SSdtfGlzbid0fGRvbid0fGRvZXNuJ3R8d29uJ3R8YnV0fGp1c3R8c2hvdWxkfHByZXR0eXxzaW1wbHl8ZW5vdWdofGdvbm5hfGdvaW5nfHd0Znxzb3xzdWNoKVxcYi99LGUuQz1mdW5jdGlvbihuLHQscil7dmFyIGE9ZS5pbmhlcml0KHtjTjpcImNvbW1lbnRcIixiOm4sZTp0LGM6W119LHJ8fHt9KTtyZXR1cm4gYS5jLnB1c2goZS5QV00pLGEuYy5wdXNoKHtjTjpcImRvY3RhZ1wiLGJLOlwiVE9ETyBGSVhNRSBOT1RFIEJVRyBYWFhcIixyOjB9KSxhfSxlLkNMQ009ZS5DKFwiLy9cIixcIiRcIiksZS5DQkNNPWUuQyhcIi9cXFxcKlwiLFwiXFxcXCovXCIpLGUuSENNPWUuQyhcIiNcIixcIiRcIiksZS5OTT17Y046XCJudW1iZXJcIixiOmUuTlIscjowfSxlLkNOTT17Y046XCJudW1iZXJcIixiOmUuQ05SLHI6MH0sZS5CTk09e2NOOlwibnVtYmVyXCIsYjplLkJOUixyOjB9LGUuQ1NTTk09e2NOOlwibnVtYmVyXCIsYjplLk5SK1wiKCV8ZW18ZXh8Y2h8cmVtfHZ3fHZofHZtaW58dm1heHxjbXxtbXxpbnxwdHxwY3xweHxkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenxkcGl8ZHBjbXxkcHB4KT9cIixyOjB9LGUuUk09e2NOOlwicmVnZXhwXCIsYjovXFwvLyxlOi9cXC9bZ2ltdXldKi8saTovXFxuLyxjOltlLkJFLHtiOi9cXFsvLGU6L1xcXS8scjowLGM6W2UuQkVdfV19LGUuVE09e2NOOlwidGl0bGVcIixiOmUuSVIscjowfSxlLlVUTT17Y046XCJ0aXRsZVwiLGI6ZS5VSVIscjowfSxlfSk7aGxqcy5yZWdpc3Rlckxhbmd1YWdlKFwiclwiLGZ1bmN0aW9uKGUpe3ZhciByPVwiKFthLXpBLVpdfFxcXFwuW2EtekEtWi5dKVthLXpBLVowLTkuX10qXCI7cmV0dXJue2M6W2UuSENNLHtiOnIsbDpyLGs6e2tleXdvcmQ6XCJmdW5jdGlvbiBpZiBpbiBicmVhayBuZXh0IHJlcGVhdCBlbHNlIGZvciByZXR1cm4gc3dpdGNoIHdoaWxlIHRyeSB0cnlDYXRjaCBzdG9wIHdhcm5pbmcgcmVxdWlyZSBsaWJyYXJ5IGF0dGFjaCBkZXRhY2ggc291cmNlIHNldE1ldGhvZCBzZXRHZW5lcmljIHNldEdyb3VwR2VuZXJpYyBzZXRDbGFzcyAuLi5cIixsaXRlcmFsOlwiTlVMTCBOQSBUUlVFIEZBTFNFIFQgRiBJbmYgTmFOIE5BX2ludGVnZXJffDEwIE5BX3JlYWxffDEwIE5BX2NoYXJhY3Rlcl98MTAgTkFfY29tcGxleF98MTBcIn0scjowfSx7Y046XCJudW1iZXJcIixiOlwiMFt4WF1bMC05YS1mQS1GXStbTGldP1xcXFxiXCIscjowfSx7Y046XCJudW1iZXJcIixiOlwiXFxcXGQrKD86W2VFXVsrXFxcXC1dP1xcXFxkKik/TFxcXFxiXCIscjowfSx7Y046XCJudW1iZXJcIixiOlwiXFxcXGQrXFxcXC4oPyFcXFxcZCkoPzppXFxcXGIpP1wiLHI6MH0se2NOOlwibnVtYmVyXCIsYjpcIlxcXFxkKyg/OlxcXFwuXFxcXGQqKT8oPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9pP1xcXFxiXCIscjowfSx7Y046XCJudW1iZXJcIixiOlwiXFxcXC5cXFxcZCsoPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9pP1xcXFxiXCIscjowfSx7YjpcImBcIixlOlwiYFwiLHI6MH0se2NOOlwic3RyaW5nXCIsYzpbZS5CRV0sdjpbe2I6J1wiJyxlOidcIid9LHtiOlwiJ1wiLGU6XCInXCJ9XX1dfX0pOyIsIi8qISBqUXVlcnkgdjIuMS40IHwgKGMpIDIwMDUsIDIwMTUgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9Yy5zbGljZSxlPWMuY29uY2F0LGY9Yy5wdXNoLGc9Yy5pbmRleE9mLGg9e30saT1oLnRvU3RyaW5nLGo9aC5oYXNPd25Qcm9wZXJ0eSxrPXt9LGw9YS5kb2N1bWVudCxtPVwiMi4xLjRcIixuPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBuLmZuLmluaXQoYSxiKX0sbz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2cscD0vXi1tcy0vLHE9Ly0oW1xcZGEtel0pL2dpLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtuLmZuPW4ucHJvdG90eXBlPXtqcXVlcnk6bSxjb25zdHJ1Y3RvcjpuLHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBkLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8wPmE/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdOmQuY2FsbCh0aGlzKX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPW4ubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxiLmNvbnRleHQ9dGhpcy5jb250ZXh0LGJ9LGVhY2g6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSxiKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKG51bGwpfSxwdXNoOmYsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihuLmlzUGxhaW5PYmplY3QoZCl8fChlPW4uaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmbi5pc0FycmF5KGMpP2M6W10pOmY9YyYmbi5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1uLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNBcnJheShhKSYmYS1wYXJzZUZsb2F0KGEpKzE+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKT8hMTphLmNvbnN0cnVjdG9yJiYhai5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKT8hMTohMH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9oW2kuY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1sLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsbC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPTAsZj1hLmxlbmd0aCxnPXMoYSk7aWYoYyl7aWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgaWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zi5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmcuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxmPTAsZz1hLmxlbmd0aCxoPXMoYSksaT1bXTtpZihoKWZvcig7Zz5mO2YrKylkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtlbHNlIGZvcihmIGluIGEpZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7cmV0dXJuIGUuYXBwbHkoW10saSl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGU9ZC5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxlLmNvbmNhdChkLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDprfSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2hbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHMoYSl7dmFyIGI9XCJsZW5ndGhcImluIGEmJmEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6MT09PWEubm9kZVR5cGUmJmI/ITA6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHU9XCJzaXp6bGVcIisxKm5ldyBEYXRlLHY9YS5kb2N1bWVudCx3PTAseD0wLHk9aGEoKSx6PWhhKCksQT1oYSgpLEI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT09PWImJihsPSEwKSwwfSxDPTE8PDMxLEQ9e30uaGFzT3duUHJvcGVydHksRT1bXSxGPUUucG9wLEc9RS5wdXNoLEg9RS5wdXNoLEk9RS5zbGljZSxKPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKWlmKGFbY109PT1iKXJldHVybiBjO3JldHVybi0xfSxLPVwiY2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWRcIixMPVwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixNPVwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsTj1NLnJlcGxhY2UoXCJ3XCIsXCJ3I1wiKSxPPVwiXFxcXFtcIitMK1wiKihcIitNK1wiKSg/OlwiK0wrXCIqKFsqXiR8IX5dPz0pXCIrTCtcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK04rXCIpKXwpXCIrTCtcIipcXFxcXVwiLFA9XCI6KFwiK00rXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK08rXCIpKil8LiopXFxcXCl8KVwiLFE9bmV3IFJlZ0V4cChMK1wiK1wiLFwiZ1wiKSxSPW5ldyBSZWdFeHAoXCJeXCIrTCtcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTCtcIiskXCIsXCJnXCIpLFM9bmV3IFJlZ0V4cChcIl5cIitMK1wiKixcIitMK1wiKlwiKSxUPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiooWz4rfl18XCIrTCtcIilcIitMK1wiKlwiKSxVPW5ldyBSZWdFeHAoXCI9XCIrTCtcIiooW15cXFxcXSdcXFwiXSo/KVwiK0wrXCIqXFxcXF1cIixcImdcIiksVj1uZXcgUmVnRXhwKFApLFc9bmV3IFJlZ0V4cChcIl5cIitOK1wiJFwiKSxYPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitNK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTS5yZXBsYWNlKFwid1wiLFwidypcIikrXCIpXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitPKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitQKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitMK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTCtcIiooPzooWystXXwpXCIrTCtcIiooXFxcXGQrKXwpKVwiK0wrXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSytcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0wrXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0wrXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0wrXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFk9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxaPS9eaFxcZCQvaSwkPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sXz0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxhYT0vWyt+XS8sYmE9Lyd8XFxcXC9nLGNhPW5ldyBSZWdFeHAoXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIitMK1wiP3woXCIrTCtcIil8LilcIixcImlnXCIpLGRhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1cIjB4XCIrYi02NTUzNjtyZXR1cm4gZCE9PWR8fGM/YjowPmQ/U3RyaW5nLmZyb21DaGFyQ29kZShkKzY1NTM2KTpTdHJpbmcuZnJvbUNoYXJDb2RlKGQ+PjEwfDU1Mjk2LDEwMjMmZHw1NjMyMCl9LGVhPWZ1bmN0aW9uKCl7bSgpfTt0cnl7SC5hcHBseShFPUkuY2FsbCh2LmNoaWxkTm9kZXMpLHYuY2hpbGROb2RlcyksRVt2LmNoaWxkTm9kZXMubGVuZ3RoXS5ub2RlVHlwZX1jYXRjaChmYSl7SD17YXBwbHk6RS5sZW5ndGg/ZnVuY3Rpb24oYSxiKXtHLmFwcGx5KGEsSS5jYWxsKGIpKX06ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLmxlbmd0aCxkPTA7d2hpbGUoYVtjKytdPWJbZCsrXSk7YS5sZW5ndGg9Yy0xfX19ZnVuY3Rpb24gZ2EoYSxiLGQsZSl7dmFyIGYsaCxqLGssbCxvLHIscyx3LHg7aWYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4sZD1kfHxbXSxrPWIubm9kZVR5cGUsXCJzdHJpbmdcIiE9dHlwZW9mIGF8fCFhfHwxIT09ayYmOSE9PWsmJjExIT09aylyZXR1cm4gZDtpZighZSYmcCl7aWYoMTEhPT1rJiYoZj1fLmV4ZWMoYSkpKWlmKGo9ZlsxXSl7aWYoOT09PWspe2lmKGg9Yi5nZXRFbGVtZW50QnlJZChqKSwhaHx8IWgucGFyZW50Tm9kZSlyZXR1cm4gZDtpZihoLmlkPT09ailyZXR1cm4gZC5wdXNoKGgpLGR9ZWxzZSBpZihiLm93bmVyRG9jdW1lbnQmJihoPWIub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZChqKSkmJnQoYixoKSYmaC5pZD09PWopcmV0dXJuIGQucHVzaChoKSxkfWVsc2V7aWYoZlsyXSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGo9ZlszXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShqKSksZH1pZihjLnFzYSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYocz1yPXUsdz1iLHg9MSE9PWsmJmEsMT09PWsmJlwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpe289ZyhhKSwocj1iLmdldEF0dHJpYnV0ZShcImlkXCIpKT9zPXIucmVwbGFjZShiYSxcIlxcXFwkJlwiKTpiLnNldEF0dHJpYnV0ZShcImlkXCIscykscz1cIltpZD0nXCIrcytcIiddIFwiLGw9by5sZW5ndGg7d2hpbGUobC0tKW9bbF09cytyYShvW2xdKTt3PWFhLnRlc3QoYSkmJnBhKGIucGFyZW50Tm9kZSl8fGIseD1vLmpvaW4oXCIsXCIpfWlmKHgpdHJ5e3JldHVybiBILmFwcGx5KGQsdy5xdWVyeVNlbGVjdG9yQWxsKHgpKSxkfWNhdGNoKHkpe31maW5hbGx5e3J8fGIucmVtb3ZlQXR0cmlidXRlKFwiaWRcIil9fX1yZXR1cm4gaShhLnJlcGxhY2UoUixcIiQxXCIpLGIsZCxlKX1mdW5jdGlvbiBoYSgpe3ZhciBhPVtdO2Z1bmN0aW9uIGIoYyxlKXtyZXR1cm4gYS5wdXNoKGMrXCIgXCIpPmQuY2FjaGVMZW5ndGgmJmRlbGV0ZSBiW2Euc2hpZnQoKV0sYltjK1wiIFwiXT1lfXJldHVybiBifWZ1bmN0aW9uIGlhKGEpe3JldHVybiBhW3VdPSEwLGF9ZnVuY3Rpb24gamEoYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3RyeXtyZXR1cm4hIWEoYil9Y2F0Y2goYyl7cmV0dXJuITF9ZmluYWxseXtiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGx9fWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YS5zcGxpdChcInxcIiksZT1hLmxlbmd0aDt3aGlsZShlLS0pZC5hdHRySGFuZGxlW2NbZV1dPWJ9ZnVuY3Rpb24gbGEoYSxiKXt2YXIgYz1iJiZhLGQ9YyYmMT09PWEubm9kZVR5cGUmJjE9PT1iLm5vZGVUeXBlJiYofmIuc291cmNlSW5kZXh8fEMpLSh+YS5zb3VyY2VJbmRleHx8Qyk7aWYoZClyZXR1cm4gZDtpZihjKXdoaWxlKGM9Yy5uZXh0U2libGluZylpZihjPT09YilyZXR1cm4tMTtyZXR1cm4gYT8xOi0xfWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YyYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4oXCJpbnB1dFwiPT09Y3x8XCJidXR0b25cIj09PWMpJiZiLnR5cGU9PT1hfX1mdW5jdGlvbiBvYShhKXtyZXR1cm4gaWEoZnVuY3Rpb24oYil7cmV0dXJuIGI9K2IsaWEoZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEoW10sYy5sZW5ndGgsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pY1tlPWZbZ11dJiYoY1tlXT0hKGRbZV09Y1tlXSkpfSl9KX1mdW5jdGlvbiBwYShhKXtyZXR1cm4gYSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWUmJmF9Yz1nYS5zdXBwb3J0PXt9LGY9Z2EuaXNYTUw9ZnVuY3Rpb24oYSl7dmFyIGI9YSYmKGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50O3JldHVybiBiP1wiSFRNTFwiIT09Yi5ub2RlTmFtZTohMX0sbT1nYS5zZXREb2N1bWVudD1mdW5jdGlvbihhKXt2YXIgYixlLGc9YT9hLm93bmVyRG9jdW1lbnR8fGE6djtyZXR1cm4gZyE9PW4mJjk9PT1nLm5vZGVUeXBlJiZnLmRvY3VtZW50RWxlbWVudD8obj1nLG89Zy5kb2N1bWVudEVsZW1lbnQsZT1nLmRlZmF1bHRWaWV3LGUmJmUhPT1lLnRvcCYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixlYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZWEpKSxwPSFmKGcpLGMuYXR0cmlidXRlcz1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5jbGFzc05hbWU9XCJpXCIsIWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpfSksYy5nZXRFbGVtZW50c0J5VGFnTmFtZT1qYShmdW5jdGlvbihhKXtyZXR1cm4gYS5hcHBlbmRDaGlsZChnLmNyZWF0ZUNvbW1lbnQoXCJcIikpLCFhLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGh9KSxjLmdldEVsZW1lbnRzQnlDbGFzc05hbWU9JC50ZXN0KGcuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSksYy5nZXRCeUlkPWphKGZ1bmN0aW9uKGEpe3JldHVybiBvLmFwcGVuZENoaWxkKGEpLmlkPXUsIWcuZ2V0RWxlbWVudHNCeU5hbWV8fCFnLmdldEVsZW1lbnRzQnlOYW1lKHUpLmxlbmd0aH0pLGMuZ2V0QnlJZD8oZC5maW5kLklEPWZ1bmN0aW9uKGEsYil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudEJ5SWQmJnApe3ZhciBjPWIuZ2V0RWxlbWVudEJ5SWQoYSk7cmV0dXJuIGMmJmMucGFyZW50Tm9kZT9bY106W119fSxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2EsZGEpO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoXCJpZFwiKT09PWJ9fSk6KGRlbGV0ZSBkLmZpbmQuSUQsZC5maWx0ZXIuSUQ9ZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKGNhLGRhKTtyZXR1cm4gZnVuY3Rpb24oYSl7dmFyIGM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlTm9kZSYmYS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7cmV0dXJuIGMmJmMudmFsdWU9PT1ifX0pLGQuZmluZC5UQUc9Yy5nZXRFbGVtZW50c0J5VGFnTmFtZT9mdW5jdGlvbihhLGIpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRzQnlUYWdOYW1lP2IuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk6Yy5xc2E/Yi5xdWVyeVNlbGVjdG9yQWxsKGEpOnZvaWQgMH06ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9MCxmPWIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSk7aWYoXCIqXCI9PT1hKXt3aGlsZShjPWZbZSsrXSkxPT09Yy5ub2RlVHlwZSYmZC5wdXNoKGMpO3JldHVybiBkfXJldHVybiBmfSxkLmZpbmQuQ0xBU1M9Yy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lJiZmdW5jdGlvbihhLGIpe3JldHVybiBwP2IuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShhKTp2b2lkIDB9LHI9W10scT1bXSwoYy5xc2E9JC50ZXN0KGcucXVlcnlTZWxlY3RvckFsbCkpJiYoamEoZnVuY3Rpb24oYSl7by5hcHBlbmRDaGlsZChhKS5pbm5lckhUTUw9XCI8YSBpZD0nXCIrdStcIic+PC9hPjxzZWxlY3QgaWQ9J1wiK3UrXCItXFxmXScgbXNhbGxvd2NhcHR1cmU9Jyc+PG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIixhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbXNhbGxvd2NhcHR1cmVePScnXVwiKS5sZW5ndGgmJnEucHVzaChcIlsqXiRdPVwiK0wrXCIqKD86Jyd8XFxcIlxcXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RofHxxLnB1c2goXCJcXFxcW1wiK0wrXCIqKD86dmFsdWV8XCIrSytcIilcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIit1K1wiLV1cIikubGVuZ3RofHxxLnB1c2goXCJ+PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGh8fHEucHVzaChcIjpjaGVja2VkXCIpLGEucXVlcnlTZWxlY3RvckFsbChcImEjXCIrdStcIisqXCIpLmxlbmd0aHx8cS5wdXNoKFwiLiMuK1srfl1cIil9KSxqYShmdW5jdGlvbihhKXt2YXIgYj1nLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImhpZGRlblwiKSxhLmFwcGVuZENoaWxkKGIpLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcIkRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoJiZxLnB1c2goXCJuYW1lXCIrTCtcIipbKl4kfCF+XT89XCIpLGEucXVlcnlTZWxlY3RvckFsbChcIjplbmFibGVkXCIpLmxlbmd0aHx8cS5wdXNoKFwiOmVuYWJsZWRcIixcIjpkaXNhYmxlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqLDp4XCIpLHEucHVzaChcIiwuKjpcIil9KSksKGMubWF0Y2hlc1NlbGVjdG9yPSQudGVzdChzPW8ubWF0Y2hlc3x8by53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fG8ubW96TWF0Y2hlc1NlbGVjdG9yfHxvLm9NYXRjaGVzU2VsZWN0b3J8fG8ubXNNYXRjaGVzU2VsZWN0b3IpKSYmamEoZnVuY3Rpb24oYSl7Yy5kaXNjb25uZWN0ZWRNYXRjaD1zLmNhbGwoYSxcImRpdlwiKSxzLmNhbGwoYSxcIltzIT0nJ106eFwiKSxyLnB1c2goXCIhPVwiLFApfSkscT1xLmxlbmd0aCYmbmV3IFJlZ0V4cChxLmpvaW4oXCJ8XCIpKSxyPXIubGVuZ3RoJiZuZXcgUmVnRXhwKHIuam9pbihcInxcIikpLGI9JC50ZXN0KG8uY29tcGFyZURvY3VtZW50UG9zaXRpb24pLHQ9Ynx8JC50ZXN0KG8uY29udGFpbnMpP2Z1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhKGMuY29udGFpbnM/Yy5jb250YWlucyhkKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiYxNiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGQpKSl9OmZ1bmN0aW9uKGEsYil7aWYoYil3aGlsZShiPWIucGFyZW50Tm9kZSlpZihiPT09YSlyZXR1cm4hMDtyZXR1cm4hMX0sQj1iP2Z1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgZD0hYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbi0hYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbjtyZXR1cm4gZD9kOihkPShhLm93bmVyRG9jdW1lbnR8fGEpPT09KGIub3duZXJEb2N1bWVudHx8Yik/YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKToxLDEmZHx8IWMuc29ydERldGFjaGVkJiZiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEpPT09ZD9hPT09Z3x8YS5vd25lckRvY3VtZW50PT09diYmdCh2LGEpPy0xOmI9PT1nfHxiLm93bmVyRG9jdW1lbnQ9PT12JiZ0KHYsYik/MTprP0ooayxhKS1KKGssYik6MDo0JmQ/LTE6MSl9OmZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIGw9ITAsMDt2YXIgYyxkPTAsZT1hLnBhcmVudE5vZGUsZj1iLnBhcmVudE5vZGUsaD1bYV0saT1bYl07aWYoIWV8fCFmKXJldHVybiBhPT09Zz8tMTpiPT09Zz8xOmU/LTE6Zj8xOms/SihrLGEpLUooayxiKTowO2lmKGU9PT1mKXJldHVybiBsYShhLGIpO2M9YTt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7Yz1iO3doaWxlKGM9Yy5wYXJlbnROb2RlKWkudW5zaGlmdChjKTt3aGlsZShoW2RdPT09aVtkXSlkKys7cmV0dXJuIGQ/bGEoaFtkXSxpW2RdKTpoW2RdPT09dj8tMTppW2RdPT09dj8xOjB9LGcpOm59LGdhLm1hdGNoZXM9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gZ2EoYSxudWxsLG51bGwsYil9LGdhLm1hdGNoZXNTZWxlY3Rvcj1mdW5jdGlvbihhLGIpe2lmKChhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSxiPWIucmVwbGFjZShVLFwiPSckMSddXCIpLCEoIWMubWF0Y2hlc1NlbGVjdG9yfHwhcHx8ciYmci50ZXN0KGIpfHxxJiZxLnRlc3QoYikpKXRyeXt2YXIgZD1zLmNhbGwoYSxiKTtpZihkfHxjLmRpc2Nvbm5lY3RlZE1hdGNofHxhLmRvY3VtZW50JiYxMSE9PWEuZG9jdW1lbnQubm9kZVR5cGUpcmV0dXJuIGR9Y2F0Y2goZSl7fXJldHVybiBnYShiLG4sbnVsbCxbYV0pLmxlbmd0aD4wfSxnYS5jb250YWlucz1mdW5jdGlvbihhLGIpe3JldHVybihhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKSx0KGEsYil9LGdhLmF0dHI9ZnVuY3Rpb24oYSxiKXsoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSk7dmFyIGU9ZC5hdHRySGFuZGxlW2IudG9Mb3dlckNhc2UoKV0sZj1lJiZELmNhbGwoZC5hdHRySGFuZGxlLGIudG9Mb3dlckNhc2UoKSk/ZShhLGIsIXApOnZvaWQgMDtyZXR1cm4gdm9pZCAwIT09Zj9mOmMuYXR0cmlidXRlc3x8IXA/YS5nZXRBdHRyaWJ1dGUoYik6KGY9YS5nZXRBdHRyaWJ1dGVOb2RlKGIpKSYmZi5zcGVjaWZpZWQ/Zi52YWx1ZTpudWxsfSxnYS5lcnJvcj1mdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIithKX0sZ2EudW5pcXVlU29ydD1mdW5jdGlvbihhKXt2YXIgYixkPVtdLGU9MCxmPTA7aWYobD0hYy5kZXRlY3REdXBsaWNhdGVzLGs9IWMuc29ydFN0YWJsZSYmYS5zbGljZSgwKSxhLnNvcnQoQiksbCl7d2hpbGUoYj1hW2YrK10pYj09PWFbZl0mJihlPWQucHVzaChmKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGRbZV0sMSl9cmV0dXJuIGs9bnVsbCxhfSxlPWdhLmdldFRleHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxmPWEubm9kZVR5cGU7aWYoZil7aWYoMT09PWZ8fDk9PT1mfHwxMT09PWYpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhLnRleHRDb250ZW50KXJldHVybiBhLnRleHRDb250ZW50O2ZvcihhPWEuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyljKz1lKGEpfWVsc2UgaWYoMz09PWZ8fDQ9PT1mKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPWUoYik7cmV0dXJuIGN9LGQ9Z2Euc2VsZWN0b3JzPXtjYWNoZUxlbmd0aDo1MCxjcmVhdGVQc2V1ZG86aWEsbWF0Y2g6WCxhdHRySGFuZGxlOnt9LGZpbmQ6e30scmVsYXRpdmU6e1wiPlwiOntkaXI6XCJwYXJlbnROb2RlXCIsZmlyc3Q6ITB9LFwiIFwiOntkaXI6XCJwYXJlbnROb2RlXCJ9LFwiK1wiOntkaXI6XCJwcmV2aW91c1NpYmxpbmdcIixmaXJzdDohMH0sXCJ+XCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wifX0scHJlRmlsdGVyOntBVFRSOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0ucmVwbGFjZShjYSxkYSksYVszXT0oYVszXXx8YVs0XXx8YVs1XXx8XCJcIikucmVwbGFjZShjYSxkYSksXCJ+PVwiPT09YVsyXSYmKGFbM109XCIgXCIrYVszXStcIiBcIiksYS5zbGljZSgwLDQpfSxDSElMRDpmdW5jdGlvbihhKXtyZXR1cm4gYVsxXT1hWzFdLnRvTG93ZXJDYXNlKCksXCJudGhcIj09PWFbMV0uc2xpY2UoMCwzKT8oYVszXXx8Z2EuZXJyb3IoYVswXSksYVs0XT0rKGFbNF0/YVs1XSsoYVs2XXx8MSk6MiooXCJldmVuXCI9PT1hWzNdfHxcIm9kZFwiPT09YVszXSkpLGFbNV09KyhhWzddK2FbOF18fFwib2RkXCI9PT1hWzNdKSk6YVszXSYmZ2EuZXJyb3IoYVswXSksYX0sUFNFVURPOmZ1bmN0aW9uKGEpe3ZhciBiLGM9IWFbNl0mJmFbMl07cmV0dXJuIFguQ0hJTEQudGVzdChhWzBdKT9udWxsOihhWzNdP2FbMl09YVs0XXx8YVs1XXx8XCJcIjpjJiZWLnRlc3QoYykmJihiPWcoYywhMCkpJiYoYj1jLmluZGV4T2YoXCIpXCIsYy5sZW5ndGgtYiktYy5sZW5ndGgpJiYoYVswXT1hWzBdLnNsaWNlKDAsYiksYVsyXT1jLnNsaWNlKDAsYikpLGEuc2xpY2UoMCwzKSl9fSxmaWx0ZXI6e1RBRzpmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoY2EsZGEpLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCIqXCI9PT1hP2Z1bmN0aW9uKCl7cmV0dXJuITB9OmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1ifX0sQ0xBU1M6ZnVuY3Rpb24oYSl7dmFyIGI9eVthK1wiIFwiXTtyZXR1cm4gYnx8KGI9bmV3IFJlZ0V4cChcIihefFwiK0wrXCIpXCIrYStcIihcIitMK1wifCQpXCIpKSYmeShhLGZ1bmN0aW9uKGEpe3JldHVybiBiLnRlc3QoXCJzdHJpbmdcIj09dHlwZW9mIGEuY2xhc3NOYW1lJiZhLmNsYXNzTmFtZXx8XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0QXR0cmlidXRlJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiKX0pfSxBVFRSOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZCl7dmFyIGU9Z2EuYXR0cihkLGEpO3JldHVybiBudWxsPT1lP1wiIT1cIj09PWI6Yj8oZSs9XCJcIixcIj1cIj09PWI/ZT09PWM6XCIhPVwiPT09Yj9lIT09YzpcIl49XCI9PT1iP2MmJjA9PT1lLmluZGV4T2YoYyk6XCIqPVwiPT09Yj9jJiZlLmluZGV4T2YoYyk+LTE6XCIkPVwiPT09Yj9jJiZlLnNsaWNlKC1jLmxlbmd0aCk9PT1jOlwifj1cIj09PWI/KFwiIFwiK2UucmVwbGFjZShRLFwiIFwiKStcIiBcIikuaW5kZXhPZihjKT4tMTpcInw9XCI9PT1iP2U9PT1jfHxlLnNsaWNlKDAsYy5sZW5ndGgrMSk9PT1jK1wiLVwiOiExKTohMH19LENISUxEOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJudGhcIiE9PWEuc2xpY2UoMCwzKSxnPVwibGFzdFwiIT09YS5zbGljZSgtNCksaD1cIm9mLXR5cGVcIj09PWI7cmV0dXJuIDE9PT1kJiYwPT09ZT9mdW5jdGlvbihhKXtyZXR1cm4hIWEucGFyZW50Tm9kZX06ZnVuY3Rpb24oYixjLGkpe3ZhciBqLGssbCxtLG4sbyxwPWYhPT1nP1wibmV4dFNpYmxpbmdcIjpcInByZXZpb3VzU2libGluZ1wiLHE9Yi5wYXJlbnROb2RlLHI9aCYmYi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLHM9IWkmJiFoO2lmKHEpe2lmKGYpe3doaWxlKHApe2w9Yjt3aGlsZShsPWxbcF0paWYoaD9sLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1sLm5vZGVUeXBlKXJldHVybiExO289cD1cIm9ubHlcIj09PWEmJiFvJiZcIm5leHRTaWJsaW5nXCJ9cmV0dXJuITB9aWYobz1bZz9xLmZpcnN0Q2hpbGQ6cS5sYXN0Q2hpbGRdLGcmJnMpe2s9cVt1XXx8KHFbdV09e30pLGo9a1thXXx8W10sbj1qWzBdPT09dyYmalsxXSxtPWpbMF09PT13JiZqWzJdLGw9biYmcS5jaGlsZE5vZGVzW25dO3doaWxlKGw9KytuJiZsJiZsW3BdfHwobT1uPTApfHxvLnBvcCgpKWlmKDE9PT1sLm5vZGVUeXBlJiYrK20mJmw9PT1iKXtrW2FdPVt3LG4sbV07YnJlYWt9fWVsc2UgaWYocyYmKGo9KGJbdV18fChiW3VdPXt9KSlbYV0pJiZqWzBdPT09dyltPWpbMV07ZWxzZSB3aGlsZShsPSsrbiYmbCYmbFtwXXx8KG09bj0wKXx8by5wb3AoKSlpZigoaD9sLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1yOjE9PT1sLm5vZGVUeXBlKSYmKyttJiYocyYmKChsW3VdfHwobFt1XT17fSkpW2FdPVt3LG1dKSxsPT09YikpYnJlYWs7cmV0dXJuIG0tPWUsbT09PWR8fG0lZD09PTAmJm0vZD49MH19fSxQU0VVRE86ZnVuY3Rpb24oYSxiKXt2YXIgYyxlPWQucHNldWRvc1thXXx8ZC5zZXRGaWx0ZXJzW2EudG9Mb3dlckNhc2UoKV18fGdhLmVycm9yKFwidW5zdXBwb3J0ZWQgcHNldWRvOiBcIithKTtyZXR1cm4gZVt1XT9lKGIpOmUubGVuZ3RoPjE/KGM9W2EsYSxcIlwiLGJdLGQuc2V0RmlsdGVycy5oYXNPd25Qcm9wZXJ0eShhLnRvTG93ZXJDYXNlKCkpP2lhKGZ1bmN0aW9uKGEsYyl7dmFyIGQsZj1lKGEsYiksZz1mLmxlbmd0aDt3aGlsZShnLS0pZD1KKGEsZltnXSksYVtkXT0hKGNbZF09ZltnXSl9KTpmdW5jdGlvbihhKXtyZXR1cm4gZShhLDAsYyl9KTplfX0scHNldWRvczp7bm90OmlhKGZ1bmN0aW9uKGEpe3ZhciBiPVtdLGM9W10sZD1oKGEucmVwbGFjZShSLFwiJDFcIikpO3JldHVybiBkW3VdP2lhKGZ1bmN0aW9uKGEsYixjLGUpe3ZhciBmLGc9ZChhLG51bGwsZSxbXSksaD1hLmxlbmd0aDt3aGlsZShoLS0pKGY9Z1toXSkmJihhW2hdPSEoYltoXT1mKSl9KTpmdW5jdGlvbihhLGUsZil7cmV0dXJuIGJbMF09YSxkKGIsbnVsbCxmLGMpLGJbMF09bnVsbCwhYy5wb3AoKX19KSxoYXM6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3JldHVybiBnYShhLGIpLmxlbmd0aD4wfX0pLGNvbnRhaW5zOmlhKGZ1bmN0aW9uKGEpe3JldHVybiBhPWEucmVwbGFjZShjYSxkYSksZnVuY3Rpb24oYil7cmV0dXJuKGIudGV4dENvbnRlbnR8fGIuaW5uZXJUZXh0fHxlKGIpKS5pbmRleE9mKGEpPi0xfX0pLGxhbmc6aWEoZnVuY3Rpb24oYSl7cmV0dXJuIFcudGVzdChhfHxcIlwiKXx8Z2EuZXJyb3IoXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIithKSxhPWEucmVwbGFjZShjYSxkYSkudG9Mb3dlckNhc2UoKSxmdW5jdGlvbihiKXt2YXIgYztkbyBpZihjPXA/Yi5sYW5nOmIuZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIil8fGIuZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSlyZXR1cm4gYz1jLnRvTG93ZXJDYXNlKCksYz09PWF8fDA9PT1jLmluZGV4T2YoYStcIi1cIik7d2hpbGUoKGI9Yi5wYXJlbnROb2RlKSYmMT09PWIubm9kZVR5cGUpO3JldHVybiExfX0pLHRhcmdldDpmdW5jdGlvbihiKXt2YXIgYz1hLmxvY2F0aW9uJiZhLmxvY2F0aW9uLmhhc2g7cmV0dXJuIGMmJmMuc2xpY2UoMSk9PT1iLmlkfSxyb290OmZ1bmN0aW9uKGEpe3JldHVybiBhPT09b30sZm9jdXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1uLmFjdGl2ZUVsZW1lbnQmJighbi5oYXNGb2N1c3x8bi5oYXNGb2N1cygpKSYmISEoYS50eXBlfHxhLmhyZWZ8fH5hLnRhYkluZGV4KX0sZW5hYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSExfSxkaXNhYmxlZDpmdW5jdGlvbihhKXtyZXR1cm4gYS5kaXNhYmxlZD09PSEwfSxjaGVja2VkOmZ1bmN0aW9uKGEpe3ZhciBiPWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iJiYhIWEuY2hlY2tlZHx8XCJvcHRpb25cIj09PWImJiEhYS5zZWxlY3RlZH0sc2VsZWN0ZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsYS5zZWxlY3RlZD09PSEwfSxlbXB0eTpmdW5jdGlvbihhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YTthPWEubmV4dFNpYmxpbmcpaWYoYS5ub2RlVHlwZTw2KXJldHVybiExO3JldHVybiEwfSxwYXJlbnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIWQucHNldWRvcy5lbXB0eShhKX0saGVhZGVyOmZ1bmN0aW9uKGEpe3JldHVybiBaLnRlc3QoYS5ub2RlTmFtZSl9LGlucHV0OmZ1bmN0aW9uKGEpe3JldHVybiBZLnRlc3QoYS5ub2RlTmFtZSl9LGJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmXCJidXR0b25cIj09PWEudHlwZXx8XCJidXR0b25cIj09PWJ9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuXCJpbnB1dFwiPT09YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiZcInRleHRcIj09PWEudHlwZSYmKG51bGw9PShiPWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSl8fFwidGV4dFwiPT09Yi50b0xvd2VyQ2FzZSgpKX0sZmlyc3Q6b2EoZnVuY3Rpb24oKXtyZXR1cm5bMF19KSxsYXN0Om9hKGZ1bmN0aW9uKGEsYil7cmV0dXJuW2ItMV19KSxlcTpvYShmdW5jdGlvbihhLGIsYyl7cmV0dXJuWzA+Yz9jK2I6Y119KSxldmVuOm9hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksb2RkOm9hKGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTE7Yj5jO2MrPTIpYS5wdXNoKGMpO3JldHVybiBhfSksbHQ6b2EoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7LS1kPj0wOylhLnB1c2goZCk7cmV0dXJuIGF9KSxndDpvYShmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPTA+Yz9jK2I6YzsrK2Q8YjspYS5wdXNoKGQpO3JldHVybiBhfSl9fSxkLnBzZXVkb3MubnRoPWQucHNldWRvcy5lcTtmb3IoYiBpbntyYWRpbzohMCxjaGVja2JveDohMCxmaWxlOiEwLHBhc3N3b3JkOiEwLGltYWdlOiEwfSlkLnBzZXVkb3NbYl09bWEoYik7Zm9yKGIgaW57c3VibWl0OiEwLHJlc2V0OiEwfSlkLnBzZXVkb3NbYl09bmEoYik7ZnVuY3Rpb24gcWEoKXt9cWEucHJvdG90eXBlPWQuZmlsdGVycz1kLnBzZXVkb3MsZC5zZXRGaWx0ZXJzPW5ldyBxYSxnPWdhLnRva2VuaXplPWZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmLGcsaCxpLGosaz16W2ErXCIgXCJdO2lmKGspcmV0dXJuIGI/MDprLnNsaWNlKDApO2g9YSxpPVtdLGo9ZC5wcmVGaWx0ZXI7d2hpbGUoaCl7KCFjfHwoZT1TLmV4ZWMoaCkpKSYmKGUmJihoPWguc2xpY2UoZVswXS5sZW5ndGgpfHxoKSxpLnB1c2goZj1bXSkpLGM9ITEsKGU9VC5leGVjKGgpKSYmKGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmVbMF0ucmVwbGFjZShSLFwiIFwiKX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2ZvcihnIGluIGQuZmlsdGVyKSEoZT1YW2ddLmV4ZWMoaCkpfHxqW2ddJiYhKGU9altnXShlKSl8fChjPWUuc2hpZnQoKSxmLnB1c2goe3ZhbHVlOmMsdHlwZTpnLG1hdGNoZXM6ZX0pLGg9aC5zbGljZShjLmxlbmd0aCkpO2lmKCFjKWJyZWFrfXJldHVybiBiP2gubGVuZ3RoOmg/Z2EuZXJyb3IoYSk6eihhLGkpLnNsaWNlKDApfTtmdW5jdGlvbiByYShhKXtmb3IodmFyIGI9MCxjPWEubGVuZ3RoLGQ9XCJcIjtjPmI7YisrKWQrPWFbYl0udmFsdWU7cmV0dXJuIGR9ZnVuY3Rpb24gc2EoYSxiLGMpe3ZhciBkPWIuZGlyLGU9YyYmXCJwYXJlbnROb2RlXCI9PT1kLGY9eCsrO3JldHVybiBiLmZpcnN0P2Z1bmN0aW9uKGIsYyxmKXt3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpcmV0dXJuIGEoYixjLGYpfTpmdW5jdGlvbihiLGMsZyl7dmFyIGgsaSxqPVt3LGZdO2lmKGcpe3doaWxlKGI9YltkXSlpZigoMT09PWIubm9kZVR5cGV8fGUpJiZhKGIsYyxnKSlyZXR1cm4hMH1lbHNlIHdoaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSl7aWYoaT1iW3VdfHwoYlt1XT17fSksKGg9aVtkXSkmJmhbMF09PT13JiZoWzFdPT09ZilyZXR1cm4galsyXT1oWzJdO2lmKGlbZF09aixqWzJdPWEoYixjLGcpKXJldHVybiEwfX19ZnVuY3Rpb24gdGEoYSl7cmV0dXJuIGEubGVuZ3RoPjE/ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWEubGVuZ3RoO3doaWxlKGUtLSlpZighYVtlXShiLGMsZCkpcmV0dXJuITE7cmV0dXJuITB9OmFbMF19ZnVuY3Rpb24gdWEoYSxiLGMpe2Zvcih2YXIgZD0wLGU9Yi5sZW5ndGg7ZT5kO2QrKylnYShhLGJbZF0sYyk7cmV0dXJuIGN9ZnVuY3Rpb24gdmEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZz1bXSxoPTAsaT1hLmxlbmd0aCxqPW51bGwhPWI7aT5oO2grKykoZj1hW2hdKSYmKCFjfHxjKGYsZCxlKSkmJihnLnB1c2goZiksaiYmYi5wdXNoKGgpKTtyZXR1cm4gZ31mdW5jdGlvbiB3YShhLGIsYyxkLGUsZil7cmV0dXJuIGQmJiFkW3VdJiYoZD13YShkKSksZSYmIWVbdV0mJihlPXdhKGUsZikpLGlhKGZ1bmN0aW9uKGYsZyxoLGkpe3ZhciBqLGssbCxtPVtdLG49W10sbz1nLmxlbmd0aCxwPWZ8fHVhKGJ8fFwiKlwiLGgubm9kZVR5cGU/W2hdOmgsW10pLHE9IWF8fCFmJiZiP3A6dmEocCxtLGEsaCxpKSxyPWM/ZXx8KGY/YTpvfHxkKT9bXTpnOnE7aWYoYyYmYyhxLHIsaCxpKSxkKXtqPXZhKHIsbiksZChqLFtdLGgsaSksaz1qLmxlbmd0aDt3aGlsZShrLS0pKGw9altrXSkmJihyW25ba11dPSEocVtuW2tdXT1sKSl9aWYoZil7aWYoZXx8YSl7aWYoZSl7aj1bXSxrPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmai5wdXNoKHFba109bCk7ZShudWxsLHI9W10saixpKX1rPXIubGVuZ3RoO3doaWxlKGstLSkobD1yW2tdKSYmKGo9ZT9KKGYsbCk6bVtrXSk+LTEmJihmW2pdPSEoZ1tqXT1sKSl9fWVsc2Ugcj12YShyPT09Zz9yLnNwbGljZShvLHIubGVuZ3RoKTpyKSxlP2UobnVsbCxnLHIsaSk6SC5hcHBseShnLHIpfSl9ZnVuY3Rpb24geGEoYSl7Zm9yKHZhciBiLGMsZSxmPWEubGVuZ3RoLGc9ZC5yZWxhdGl2ZVthWzBdLnR5cGVdLGg9Z3x8ZC5yZWxhdGl2ZVtcIiBcIl0saT1nPzE6MCxrPXNhKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Yn0saCwhMCksbD1zYShmdW5jdGlvbihhKXtyZXR1cm4gSihiLGEpPi0xfSxoLCEwKSxtPVtmdW5jdGlvbihhLGMsZCl7dmFyIGU9IWcmJihkfHxjIT09ail8fCgoYj1jKS5ub2RlVHlwZT9rKGEsYyxkKTpsKGEsYyxkKSk7cmV0dXJuIGI9bnVsbCxlfV07Zj5pO2krKylpZihjPWQucmVsYXRpdmVbYVtpXS50eXBlXSltPVtzYSh0YShtKSxjKV07ZWxzZXtpZihjPWQuZmlsdGVyW2FbaV0udHlwZV0uYXBwbHkobnVsbCxhW2ldLm1hdGNoZXMpLGNbdV0pe2ZvcihlPSsraTtmPmU7ZSsrKWlmKGQucmVsYXRpdmVbYVtlXS50eXBlXSlicmVhaztyZXR1cm4gd2EoaT4xJiZ0YShtKSxpPjEmJnJhKGEuc2xpY2UoMCxpLTEpLmNvbmNhdCh7dmFsdWU6XCIgXCI9PT1hW2ktMl0udHlwZT9cIipcIjpcIlwifSkpLnJlcGxhY2UoUixcIiQxXCIpLGMsZT5pJiZ4YShhLnNsaWNlKGksZSkpLGY+ZSYmeGEoYT1hLnNsaWNlKGUpKSxmPmUmJnJhKGEpKX1tLnB1c2goYyl9cmV0dXJuIHRhKG0pfWZ1bmN0aW9uIHlhKGEsYil7dmFyIGM9Yi5sZW5ndGg+MCxlPWEubGVuZ3RoPjAsZj1mdW5jdGlvbihmLGcsaCxpLGspe3ZhciBsLG0sbyxwPTAscT1cIjBcIixyPWYmJltdLHM9W10sdD1qLHU9Znx8ZSYmZC5maW5kLlRBRyhcIipcIixrKSx2PXcrPW51bGw9PXQ/MTpNYXRoLnJhbmRvbSgpfHwuMSx4PXUubGVuZ3RoO2ZvcihrJiYoaj1nIT09biYmZyk7cSE9PXgmJm51bGwhPShsPXVbcV0pO3ErKyl7aWYoZSYmbCl7bT0wO3doaWxlKG89YVttKytdKWlmKG8obCxnLGgpKXtpLnB1c2gobCk7YnJlYWt9ayYmKHc9dil9YyYmKChsPSFvJiZsKSYmcC0tLGYmJnIucHVzaChsKSl9aWYocCs9cSxjJiZxIT09cCl7bT0wO3doaWxlKG89YlttKytdKW8ocixzLGcsaCk7aWYoZil7aWYocD4wKXdoaWxlKHEtLSlyW3FdfHxzW3FdfHwoc1txXT1GLmNhbGwoaSkpO3M9dmEocyl9SC5hcHBseShpLHMpLGsmJiFmJiZzLmxlbmd0aD4wJiZwK2IubGVuZ3RoPjEmJmdhLnVuaXF1ZVNvcnQoaSl9cmV0dXJuIGsmJih3PXYsaj10KSxyfTtyZXR1cm4gYz9pYShmKTpmfXJldHVybiBoPWdhLmNvbXBpbGU9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9W10sZj1BW2ErXCIgXCJdO2lmKCFmKXtifHwoYj1nKGEpKSxjPWIubGVuZ3RoO3doaWxlKGMtLSlmPXhhKGJbY10pLGZbdV0/ZC5wdXNoKGYpOmUucHVzaChmKTtmPUEoYSx5YShlLGQpKSxmLnNlbGVjdG9yPWF9cmV0dXJuIGZ9LGk9Z2Euc2VsZWN0PWZ1bmN0aW9uKGEsYixlLGYpe3ZhciBpLGosayxsLG0sbj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiZhLG89IWYmJmcoYT1uLnNlbGVjdG9yfHxhKTtpZihlPWV8fFtdLDE9PT1vLmxlbmd0aCl7aWYoaj1vWzBdPW9bMF0uc2xpY2UoMCksai5sZW5ndGg+MiYmXCJJRFwiPT09KGs9alswXSkudHlwZSYmYy5nZXRCeUlkJiY5PT09Yi5ub2RlVHlwZSYmcCYmZC5yZWxhdGl2ZVtqWzFdLnR5cGVdKXtpZihiPShkLmZpbmQuSUQoay5tYXRjaGVzWzBdLnJlcGxhY2UoY2EsZGEpLGIpfHxbXSlbMF0sIWIpcmV0dXJuIGU7biYmKGI9Yi5wYXJlbnROb2RlKSxhPWEuc2xpY2Uoai5zaGlmdCgpLnZhbHVlLmxlbmd0aCl9aT1YLm5lZWRzQ29udGV4dC50ZXN0KGEpPzA6ai5sZW5ndGg7d2hpbGUoaS0tKXtpZihrPWpbaV0sZC5yZWxhdGl2ZVtsPWsudHlwZV0pYnJlYWs7aWYoKG09ZC5maW5kW2xdKSYmKGY9bShrLm1hdGNoZXNbMF0ucmVwbGFjZShjYSxkYSksYWEudGVzdChqWzBdLnR5cGUpJiZwYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGouc3BsaWNlKGksMSksYT1mLmxlbmd0aCYmcmEoaiksIWEpcmV0dXJuIEguYXBwbHkoZSxmKSxlO2JyZWFrfX19cmV0dXJuKG58fGgoYSxvKSkoZixiLCFwLGUsYWEudGVzdChhKSYmcGEoYi5wYXJlbnROb2RlKXx8YiksZX0sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1qYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImRpdlwiKSl9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxrYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmamEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGthKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGN8fFwiaW5wdXRcIiE9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT92b2lkIDA6YS5kZWZhdWx0VmFsdWV9KSxqYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxrYShLLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6YVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxnYX0oYSk7bi5maW5kPXQsbi5leHByPXQuc2VsZWN0b3JzLG4uZXhwcltcIjpcIl09bi5leHByLnBzZXVkb3Msbi51bmlxdWU9dC51bmlxdWVTb3J0LG4udGV4dD10LmdldFRleHQsbi5pc1hNTERvYz10LmlzWE1MLG4uY29udGFpbnM9dC5jb250YWluczt2YXIgdT1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHY9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHc9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIHgoYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih3LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBnLmNhbGwoYixhKT49MCE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh4KHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayh4KHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISF4KHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJnUudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIHksej0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxBPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ7aWYoIWEpcmV0dXJuIHRoaXM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGM9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06ei5leGVjKGEpLCFjfHwhY1sxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fHkpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGNbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChjWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmwsITApKSx2LnRlc3QoY1sxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoYyBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2NdKT90aGlzW2NdKGJbY10pOnRoaXMuYXR0cihjLGJbY10pO3JldHVybiB0aGlzfXJldHVybiBkPWwuZ2V0RWxlbWVudEJ5SWQoY1syXSksZCYmZC5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWQpLHRoaXMuY29udGV4dD1sLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP1widW5kZWZpbmVkXCIhPXR5cGVvZiB5LnJlYWR5P3kucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07QS5wcm90b3R5cGU9bi5mbix5PW4obCk7dmFyIEI9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sQz17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmV4dGVuZCh7ZGlyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sc2libGluZzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY319KSxuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPW4oYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2M+YTthKyspaWYobi5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXUudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/bihhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmbi5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP24udW5pcXVlKGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9nLmNhbGwobihhKSx0aGlzWzBdKTpnLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlKG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEQoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEQoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBEKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uc2libGluZygoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIG4uc2libGluZyhhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihDW2FdfHxuLnVuaXF1ZShlKSxCLnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgRT0vXFxTKy9nLEY9e307ZnVuY3Rpb24gRyhhKXt2YXIgYj1GW2FdPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChFKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0ZbYV18fEcoYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZixnLGg9W10saT0hYS5vbmNlJiZbXSxqPWZ1bmN0aW9uKGwpe2ZvcihiPWEubWVtb3J5JiZsLGM9ITAsZz1lfHwwLGU9MCxmPWgubGVuZ3RoLGQ9ITA7aCYmZj5nO2crKylpZihoW2ddLmFwcGx5KGxbMF0sbFsxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSl7Yj0hMTticmVha31kPSExLGgmJihpP2kubGVuZ3RoJiZqKGkuc2hpZnQoKSk6Yj9oPVtdOmsuZGlzYWJsZSgpKX0saz17YWRkOmZ1bmN0aW9uKCl7aWYoaCl7dmFyIGM9aC5sZW5ndGg7IWZ1bmN0aW9uIGcoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1uLnR5cGUoYyk7XCJmdW5jdGlvblwiPT09ZD9hLnVuaXF1ZSYmay5oYXMoYyl8fGgucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PWQmJmcoYyl9KX0oYXJndW1lbnRzKSxkP2Y9aC5sZW5ndGg6YiYmKGU9YyxqKGIpKX1yZXR1cm4gdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIGgmJm4uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1uLmluQXJyYXkoYixoLGMpKT4tMSloLnNwbGljZShjLDEpLGQmJihmPj1jJiZmLS0sZz49YyYmZy0tKX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9uLmluQXJyYXkoYSxoKT4tMTohKCFofHwhaC5sZW5ndGgpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBoPVtdLGY9MCx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGg9aT1iPXZvaWQgMCx0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFofSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGk9dm9pZCAwLGJ8fGsuZGlzYWJsZSgpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiFpfSxmaXJlV2l0aDpmdW5jdGlvbihhLGIpe3JldHVybiFofHxjJiYhaXx8KGI9Ynx8W10sYj1bYSxiLnNsaWNlP2Iuc2xpY2UoKTpiXSxkP2kucHVzaChiKTpqKGIpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGsuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFjfX07cmV0dXJuIGt9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KS5wcm9ncmVzcyhjLm5vdGlmeSk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWQuY2FsbChhcmd1bWVudHMpLGU9Yy5sZW5ndGgsZj0xIT09ZXx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZTowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGUpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9kLmNhbGwoYXJndW1lbnRzKTplLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZT4xKWZvcihpPW5ldyBBcnJheShlKSxqPW5ldyBBcnJheShlKSxrPW5ldyBBcnJheShlKTtlPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpLnByb2dyZXNzKGgoYixqLGkpKTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSDtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSC5yZXNvbHZlV2l0aChsLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4obCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGwpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEkoKXtsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSSwhMSksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEksITEpLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEh8fChIPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1sLnJlYWR5U3RhdGU/c2V0VGltZW91dChuLnJlYWR5KToobC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEksITEpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixJLCExKSkpLEgucHJvbWlzZShiKX0sbi5yZWFkeS5wcm9taXNlKCk7dmFyIEo9bi5hY2Nlc3M9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bi50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpbi5hY2Nlc3MoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn07bi5hY2NlcHREYXRhPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gSygpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNhY2hlPXt9LDAse2dldDpmdW5jdGlvbigpe3JldHVybnt9fX0pLHRoaXMuZXhwYW5kbz1uLmV4cGFuZG8rSy51aWQrK31LLnVpZD0xLEsuYWNjZXB0cz1uLmFjY2VwdERhdGEsSy5wcm90b3R5cGU9e2tleTpmdW5jdGlvbihhKXtpZighSy5hY2NlcHRzKGEpKXJldHVybiAwO3ZhciBiPXt9LGM9YVt0aGlzLmV4cGFuZG9dO2lmKCFjKXtjPUsudWlkKys7dHJ5e2JbdGhpcy5leHBhbmRvXT17dmFsdWU6Y30sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSxiKX1jYXRjaChkKXtiW3RoaXMuZXhwYW5kb109YyxuLmV4dGVuZChhLGIpfX1yZXR1cm4gdGhpcy5jYWNoZVtjXXx8KHRoaXMuY2FjaGVbY109e30pLGN9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmtleShhKSxmPXRoaXMuY2FjaGVbZV07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZltiXT1jO2Vsc2UgaWYobi5pc0VtcHR5T2JqZWN0KGYpKW4uZXh0ZW5kKHRoaXMuY2FjaGVbZV0sYik7ZWxzZSBmb3IoZCBpbiBiKWZbZF09YltkXTtyZXR1cm4gZn0sZ2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jYWNoZVt0aGlzLmtleShhKV07cmV0dXJuIHZvaWQgMD09PWI/YzpjW2JdfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz8oZD10aGlzLmdldChhLGIpLHZvaWQgMCE9PWQ/ZDp0aGlzLmdldChhLG4uY2FtZWxDYXNlKGIpKSk6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXMua2V5KGEpLGc9dGhpcy5jYWNoZVtmXTtpZih2b2lkIDA9PT1iKXRoaXMuY2FjaGVbZl09e307ZWxzZXtuLmlzQXJyYXkoYik/ZD1iLmNvbmNhdChiLm1hcChuLmNhbWVsQ2FzZSkpOihlPW4uY2FtZWxDYXNlKGIpLGIgaW4gZz9kPVtiLGVdOihkPWUsZD1kIGluIGc/W2RdOmQubWF0Y2goRSl8fFtdKSksYz1kLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGdbZFtjXV19fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiFuLmlzRW1wdHlPYmplY3QodGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfHx7fSl9LGRpc2NhcmQ6ZnVuY3Rpb24oYSl7YVt0aGlzLmV4cGFuZG9dJiZkZWxldGUgdGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfX07dmFyIEw9bmV3IEssTT1uZXcgSyxOPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxPPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUChhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKE8sXCItJDFcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpOLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9TS5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIE0uaGFzRGF0YShhKXx8TC5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtcbnJldHVybiBNLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtNLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIEwuYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtMLnJlbW92ZShhLGIpfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9TS5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFMLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUChmLGQsZVtkXSkpKTtMLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe00uc2V0KHRoaXMsYSl9KTpKKHRoaXMsZnVuY3Rpb24oYil7dmFyIGMsZD1uLmNhbWVsQ2FzZShhKTtpZihmJiZ2b2lkIDA9PT1iKXtpZihjPU0uZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPU0uZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVAoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPU0uZ2V0KHRoaXMsZCk7TS5zZXQodGhpcyxkLGIpLC0xIT09YS5pbmRleE9mKFwiLVwiKSYmdm9pZCAwIT09YyYmTS5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe00ucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPUwuZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1MLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBMLmdldChhLGMpfHxMLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7TC5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9TC5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgUT0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsUj1bXCJUb3BcIixcIlJpZ2h0XCIsXCJCb3R0b21cIixcIkxlZnRcIl0sUz1mdW5jdGlvbihhLGIpe3JldHVybiBhPWJ8fGEsXCJub25lXCI9PT1uLmNzcyhhLFwiZGlzcGxheVwiKXx8IW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfSxUPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pOyFmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksay5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGsubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgVT1cInVuZGVmaW5lZFwiO2suZm9jdXNpbkJ1YmJsZXM9XCJvbmZvY3VzaW5cImluIGE7dmFyIFY9L15rZXkvLFc9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51KXxjbGljay8sWD0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sWT0vXihbXi5dKikoPzpcXC4oLispfCkkLztmdW5jdGlvbiBaKCl7cmV0dXJuITB9ZnVuY3Rpb24gJCgpe3JldHVybiExfWZ1bmN0aW9uIF8oKXt0cnl7cmV0dXJuIGwuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fW4uZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9TC5nZXQoYSk7aWYocil7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoaT1yLmV2ZW50cyl8fChpPXIuZXZlbnRzPXt9KSwoZz1yLmhhbmRsZSl8fChnPXIuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVybiB0eXBlb2YgbiE9PVUmJm4uZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP24uZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEUpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD1ZLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZywhMSkpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9TC5oYXNEYXRhKGEpJiZMLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEUpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1ZLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbT1pW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcSE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxuLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGlbb10pfWVsc2UgZm9yKG8gaW4gaSluLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO24uaXNFbXB0eU9iamVjdChpKSYmKGRlbGV0ZSByLmhhbmRsZSxMLnJlbW92ZShhLFwiZXZlbnRzXCIpKX19LHRyaWdnZXI6ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGYsZyxoLGksayxtLG8scD1bZHx8bF0scT1qLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1qLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoZz1oPWQ9ZHx8bCwzIT09ZC5ub2RlVHlwZSYmOCE9PWQubm9kZVR5cGUmJiFYLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPj0wJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksaz1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9ZT8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLm5hbWVzcGFjZV9yZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1kKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxvPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZXx8IW8udHJpZ2dlcnx8by50cmlnZ2VyLmFwcGx5KGQsYykhPT0hMSkpe2lmKCFlJiYhby5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZCkpe2ZvcihpPW8uZGVsZWdhdGVUeXBlfHxxLFgudGVzdChpK3EpfHwoZz1nLnBhcmVudE5vZGUpO2c7Zz1nLnBhcmVudE5vZGUpcC5wdXNoKGcpLGg9ZztoPT09KGQub3duZXJEb2N1bWVudHx8bCkmJnAucHVzaChoLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvd3x8YSl9Zj0wO3doaWxlKChnPXBbZisrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWY+MT9pOm8uYmluZFR5cGV8fHEsbT0oTC5nZXQoZyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJkwuZ2V0KGcsXCJoYW5kbGVcIiksbSYmbS5hcHBseShnLGMpLG09ayYmZ1trXSxtJiZtLmFwcGx5JiZuLmFjY2VwdERhdGEoZykmJihiLnJlc3VsdD1tLmFwcGx5KGcsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXEsZXx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8by5fZGVmYXVsdCYmby5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpIT09ITF8fCFuLmFjY2VwdERhdGEoZCl8fGsmJm4uaXNGdW5jdGlvbihkW3FdKSYmIW4uaXNXaW5kb3coZCkmJihoPWRba10saCYmKGRba109bnVsbCksbi5ldmVudC50cmlnZ2VyZWQ9cSxkW3FdKCksbi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGgmJihkW2tdPWgpKSxiLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxlLGYsZyxoPVtdLGk9ZC5jYWxsKGFyZ3VtZW50cyksaj0oTC5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bi5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxjPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tjKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkoIWEubmFtZXNwYWNlX3JlfHxhLm5hbWVzcGFjZV9yZS50ZXN0KGcubmFtZXNwYWNlKSkmJihhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZT0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZSYmKGEucmVzdWx0PWUpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKCFhLmJ1dHRvbnx8XCJjbGlja1wiIT09YS50eXBlKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT49MDpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPWIuYnV0dG9uO3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihjPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGwsZD1jLmRvY3VtZW50RWxlbWVudCxlPWMuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZCYmZC5zY3JvbGxMZWZ0fHxlJiZlLnNjcm9sbExlZnR8fDApLShkJiZkLmNsaWVudExlZnR8fGUmJmUuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGQmJmQuc2Nyb2xsVG9wfHxlJiZlLnNjcm9sbFRvcHx8MCktKGQmJmQuY2xpZW50VG9wfHxlJiZlLmNsaWVudFRvcHx8MCkpLGEud2hpY2h8fHZvaWQgMD09PWZ8fChhLndoaWNoPTEmZj8xOjImZj8zOjQmZj8yOjApLGF9fSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZCxlPWEudHlwZSxmPWEsZz10aGlzLmZpeEhvb2tzW2VdO2d8fCh0aGlzLmZpeEhvb2tzW2VdPWc9Vy50ZXN0KGUpP3RoaXMubW91c2VIb29rczpWLnRlc3QoZSk/dGhpcy5rZXlIb29rczp7fSksZD1nLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGcucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChmKSxiPWQubGVuZ3RoO3doaWxlKGItLSljPWRbYl0sYVtjXT1mW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWwpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGcuZmlsdGVyP2cuZmlsdGVyKGEsZik6YX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMhPT1fKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PV8oKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO2Q/bi5ldmVudC50cmlnZ2VyKGUsbnVsbCxiKTpuLmV2ZW50LmRpc3BhdGNoLmNhbGwoYixlKSxlLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT9aOiQpOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOiQsaXNQcm9wYWdhdGlvblN0b3BwZWQ6JCxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDokLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPVosYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1aLGEmJmEuc3RvcFByb3BhZ2F0aW9uJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD1aLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFuLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxrLmZvY3VzaW5CdWJibGVzfHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSwhMCl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1MLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLEwuYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9TC5hY2Nlc3MoZCxiKS0xO2U/TC5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxMLnJlbW92ZShkLGIpKX19fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWN8fGIsYj12b2lkIDApO2ZvcihnIGluIGEpdGhpcy5vbihnLGIsYyxhW2ddLGUpO3JldHVybiB0aGlzfWlmKG51bGw9PWMmJm51bGw9PWQ/KGQ9YixjPWI9dm9pZCAwKTpudWxsPT1kJiYoXCJzdHJpbmdcIj09dHlwZW9mIGI/KGQ9YyxjPXZvaWQgMCk6KGQ9YyxjPWIsYj12b2lkIDApKSxkPT09ITEpZD0kO2Vsc2UgaWYoIWQpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1lJiYoZj1kLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGQuZ3VpZD1mLmd1aWR8fChmLmd1aWQ9bi5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGEsZCxjLGIpfSl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz0kKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pO3ZhciBhYT0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksYmE9LzwoW1xcdzpdKykvLGNhPS88fCYjP1xcdys7LyxkYT0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLGVhPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksZmE9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxnYT0vXnRydWVcXC8oLiopLyxoYT0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csaWE9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtpYS5vcHRncm91cD1pYS5vcHRpb24saWEudGJvZHk9aWEudGZvb3Q9aWEuY29sZ3JvdXA9aWEuY2FwdGlvbj1pYS50aGVhZCxpYS50aD1pYS50ZDtmdW5jdGlvbiBqYShhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBrYShhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBsYShhKXt2YXIgYj1nYS5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gbWEoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTC5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8TC5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfWZ1bmN0aW9uIG5hKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoTC5oYXNEYXRhKGEpJiYoZj1MLmFjY2VzcyhhKSxnPUwuc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtkPmM7YysrKW4uZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1NLmhhc0RhdGEoYSkmJihoPU0uYWNjZXNzKGEpLGk9bi5leHRlbmQoe30saCksTS5zZXQoYixpKSl9fWZ1bmN0aW9uIG9hKGEsYil7dmFyIGM9YS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTphLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gcGEoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmVC50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDooXCJpbnB1dFwiPT09Y3x8XCJ0ZXh0YXJlYVwiPT09YykmJihiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9bi5leHRlbmQoe2Nsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoay5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9b2EoaCksZj1vYShhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXBhKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fG9hKGEpLGc9Z3x8b2EoaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKyluYShmW2RdLGdbZF0pO2Vsc2UgbmEoYSxoKTtyZXR1cm4gZz1vYShoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm1hKGcsIWkmJm9hKGEsXCJzY3JpcHRcIikpLGh9LGJ1aWxkRnJhZ21lbnQ6ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlLGYsZyxoLGksaixrPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGw9W10sbT0wLG89YS5sZW5ndGg7bz5tO20rKylpZihlPWFbbV0sZXx8MD09PWUpaWYoXCJvYmplY3RcIj09PW4udHlwZShlKSluLm1lcmdlKGwsZS5ub2RlVHlwZT9bZV06ZSk7ZWxzZSBpZihjYS50ZXN0KGUpKXtmPWZ8fGsuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxnPShiYS5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxoPWlhW2ddfHxpYS5fZGVmYXVsdCxmLmlubmVySFRNTD1oWzFdK2UucmVwbGFjZShhYSxcIjwkMT48LyQyPlwiKStoWzJdLGo9aFswXTt3aGlsZShqLS0pZj1mLmxhc3RDaGlsZDtuLm1lcmdlKGwsZi5jaGlsZE5vZGVzKSxmPWsuZmlyc3RDaGlsZCxmLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBsLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShlKSk7ay50ZXh0Q29udGVudD1cIlwiLG09MDt3aGlsZShlPWxbbSsrXSlpZigoIWR8fC0xPT09bi5pbkFycmF5KGUsZCkpJiYoaT1uLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSxmPW9hKGsuYXBwZW5kQ2hpbGQoZSksXCJzY3JpcHRcIiksaSYmbWEoZiksYykpe2o9MDt3aGlsZShlPWZbaisrXSlmYS50ZXN0KGUudHlwZXx8XCJcIikmJmMucHVzaChlKX1yZXR1cm4ga30sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZSxmPW4uZXZlbnQuc3BlY2lhbCxnPTA7dm9pZCAwIT09KGM9YVtnXSk7ZysrKXtpZihuLmFjY2VwdERhdGEoYykmJihlPWNbTC5leHBhbmRvXSxlJiYoYj1MLmNhY2hlW2VdKSkpe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWZbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7TC5jYWNoZVtlXSYmZGVsZXRlIEwuY2FjaGVbZV19ZGVsZXRlIE0uY2FjaGVbY1tNLmV4cGFuZG9dXX19fSksbi5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiYodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9amEodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1qYSh0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LHJlbW92ZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPWE/bi5maWx0ZXIoYSx0aGlzKTp0aGlzLGU9MDtudWxsIT0oYz1kW2VdKTtlKyspYnx8MSE9PWMubm9kZVR5cGV8fG4uY2xlYW5EYXRhKG9hKGMpKSxjLnBhcmVudE5vZGUmJihiJiZuLmNvbnRhaW5zKGMub3duZXJEb2N1bWVudCxjKSYmbWEob2EoYyxcInNjcmlwdFwiKSksYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpKTtyZXR1cm4gdGhpc30sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKG9hKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFkYS50ZXN0KGEpJiYhaWFbKGJhLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1hLnJlcGxhY2UoYWEsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEob2EoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF07cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2E9dGhpcy5wYXJlbnROb2RlLG4uY2xlYW5EYXRhKG9hKHRoaXMpKSxhJiZhLnJlcGxhY2VDaGlsZChiLHRoaXMpfSksYSYmKGEubGVuZ3RofHxhLm5vZGVUeXBlKT90aGlzOnRoaXMucmVtb3ZlKCl9LGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSwhMCl9LGRvbU1hbmlwOmZ1bmN0aW9uKGEsYil7YT1lLmFwcGx5KFtdLGEpO3ZhciBjLGQsZixnLGgsaSxqPTAsbD10aGlzLmxlbmd0aCxtPXRoaXMsbz1sLTEscD1hWzBdLHE9bi5pc0Z1bmN0aW9uKHApO2lmKHF8fGw+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHAmJiFrLmNoZWNrQ2xvbmUmJmVhLnRlc3QocCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZD1tLmVxKGMpO3EmJihhWzBdPXAuY2FsbCh0aGlzLGMsZC5odG1sKCkpKSxkLmRvbU1hbmlwKGEsYil9KTtpZihsJiYoYz1uLmJ1aWxkRnJhZ21lbnQoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksZD1jLmZpcnN0Q2hpbGQsMT09PWMuY2hpbGROb2Rlcy5sZW5ndGgmJihjPWQpLGQpKXtmb3IoZj1uLm1hcChvYShjLFwic2NyaXB0XCIpLGthKSxnPWYubGVuZ3RoO2w+ajtqKyspaD1jLGohPT1vJiYoaD1uLmNsb25lKGgsITAsITApLGcmJm4ubWVyZ2UoZixvYShoLFwic2NyaXB0XCIpKSksYi5jYWxsKHRoaXNbal0saCxqKTtpZihnKWZvcihpPWZbZi5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChmLGxhKSxqPTA7Zz5qO2orKyloPWZbal0sZmEudGVzdChoLnR5cGV8fFwiXCIpJiYhTC5hY2Nlc3MoaCxcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoaSxoKSYmKGguc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoaC5zcmMpOm4uZ2xvYmFsRXZhbChoLnRleHRDb250ZW50LnJlcGxhY2UoaGEsXCJcIikpKX1yZXR1cm4gdGhpc319KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxnPWUubGVuZ3RoLTEsaD0wO2c+PWg7aCsrKWM9aD09PWc/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGYuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSk7dmFyIHFhLHJhPXt9O2Z1bmN0aW9uIHNhKGIsYyl7dmFyIGQsZT1uKGMuY3JlYXRlRWxlbWVudChiKSkuYXBwZW5kVG8oYy5ib2R5KSxmPWEuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUmJihkPWEuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUoZVswXSkpP2QuZGlzcGxheTpuLmNzcyhlWzBdLFwiZGlzcGxheVwiKTtyZXR1cm4gZS5kZXRhY2goKSxmfWZ1bmN0aW9uIHRhKGEpe3ZhciBiPWwsYz1yYVthXTtyZXR1cm4gY3x8KGM9c2EoYSxiKSxcIm5vbmVcIiE9PWMmJmN8fChxYT0ocWF8fG4oXCI8aWZyYW1lIGZyYW1lYm9yZGVyPScwJyB3aWR0aD0nMCcgaGVpZ2h0PScwJy8+XCIpKS5hcHBlbmRUbyhiLmRvY3VtZW50RWxlbWVudCksYj1xYVswXS5jb250ZW50RG9jdW1lbnQsYi53cml0ZSgpLGIuY2xvc2UoKSxjPXNhKGEsYikscWEuZGV0YWNoKCkpLHJhW2FdPWMpLGN9dmFyIHVhPS9ebWFyZ2luLyx2YT1uZXcgUmVnRXhwKFwiXihcIitRK1wiKSg/IXB4KVthLXolXSskXCIsXCJpXCIpLHdhPWZ1bmN0aW9uKGIpe3JldHVybiBiLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcub3BlbmVyP2Iub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKGIsbnVsbCk6YS5nZXRDb21wdXRlZFN0eWxlKGIsbnVsbCl9O2Z1bmN0aW9uIHhhKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8d2EoYSksYyYmKGc9Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjW2JdKSxjJiYoXCJcIiE9PWd8fG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1uLnN0eWxlKGEsYikpLHZhLnRlc3QoZykmJnVhLnRlc3QoYikmJihkPWgud2lkdGgsZT1oLm1pbldpZHRoLGY9aC5tYXhXaWR0aCxoLm1pbldpZHRoPWgubWF4V2lkdGg9aC53aWR0aD1nLGc9Yy53aWR0aCxoLndpZHRoPWQsaC5taW5XaWR0aD1lLGgubWF4V2lkdGg9ZikpLHZvaWQgMCE9PWc/ZytcIlwiOmd9ZnVuY3Rpb24geWEoYSxiKXtyZXR1cm57Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGEoKT92b2lkIGRlbGV0ZSB0aGlzLmdldDoodGhpcy5nZXQ9YikuYXBwbHkodGhpcyxhcmd1bWVudHMpfX19IWZ1bmN0aW9uKCl7dmFyIGIsYyxkPWwuZG9jdW1lbnRFbGVtZW50LGU9bC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGY9bC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGYuc3R5bGUpe2Yuc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGYuY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGsuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWYuc3R5bGUuYmFja2dyb3VuZENsaXAsZS5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixlLmFwcGVuZENoaWxkKGYpO2Z1bmN0aW9uIGcoKXtmLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjElO3RvcDoxJTtib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjRweDtwb3NpdGlvbjphYnNvbHV0ZVwiLGYuaW5uZXJIVE1MPVwiXCIsZC5hcHBlbmRDaGlsZChlKTt2YXIgZz1hLmdldENvbXB1dGVkU3R5bGUoZixudWxsKTtiPVwiMSVcIiE9PWcudG9wLGM9XCI0cHhcIj09PWcud2lkdGgsZC5yZW1vdmVDaGlsZChlKX1hLmdldENvbXB1dGVkU3R5bGUmJm4uZXh0ZW5kKGsse3BpeGVsUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gZygpLGJ9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWMmJmcoKSxjfSxyZWxpYWJsZU1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7dmFyIGIsYz1mLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7cmV0dXJuIGMuc3R5bGUuY3NzVGV4dD1mLnN0eWxlLmNzc1RleHQ9XCItd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7LW1vei1ib3gtc2l6aW5nOmNvbnRlbnQtYm94O2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDtib3JkZXI6MDtwYWRkaW5nOjBcIixjLnN0eWxlLm1hcmdpblJpZ2h0PWMuc3R5bGUud2lkdGg9XCIwXCIsZi5zdHlsZS53aWR0aD1cIjFweFwiLGQuYXBwZW5kQ2hpbGQoZSksYj0hcGFyc2VGbG9hdChhLmdldENvbXB1dGVkU3R5bGUoYyxudWxsKS5tYXJnaW5SaWdodCksZC5yZW1vdmVDaGlsZChlKSxmLnJlbW92ZUNoaWxkKGMpLGJ9fSl9fSgpLG4uc3dhcD1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX07dmFyIHphPS9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxBYT1uZXcgUmVnRXhwKFwiXihcIitRK1wiKSguKikkXCIsXCJpXCIpLEJhPW5ldyBSZWdFeHAoXCJeKFsrLV0pPShcIitRK1wiKVwiLFwiaVwiKSxDYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sRGE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxFYT1bXCJXZWJraXRcIixcIk9cIixcIk1velwiLFwibXNcIl07ZnVuY3Rpb24gRmEoYSxiKXtpZihiIGluIGEpcmV0dXJuIGI7dmFyIGM9YlswXS50b1VwcGVyQ2FzZSgpK2Iuc2xpY2UoMSksZD1iLGU9RWEubGVuZ3RoO3doaWxlKGUtLSlpZihiPUVhW2VdK2MsYiBpbiBhKXJldHVybiBiO3JldHVybiBkfWZ1bmN0aW9uIEdhKGEsYixjKXt2YXIgZD1BYS5leGVjKGIpO3JldHVybiBkP01hdGgubWF4KDAsZFsxXS0oY3x8MCkpKyhkWzJdfHxcInB4XCIpOmJ9ZnVuY3Rpb24gSGEoYSxiLGMsZCxlKXtmb3IodmFyIGY9Yz09PShkP1wiYm9yZGVyXCI6XCJjb250ZW50XCIpPzQ6XCJ3aWR0aFwiPT09Yj8xOjAsZz0wOzQ+ZjtmKz0yKVwibWFyZ2luXCI9PT1jJiYoZys9bi5jc3MoYSxjK1JbZl0sITAsZSkpLGQ/KFwiY29udGVudFwiPT09YyYmKGctPW4uY3NzKGEsXCJwYWRkaW5nXCIrUltmXSwhMCxlKSksXCJtYXJnaW5cIiE9PWMmJihnLT1uLmNzcyhhLFwiYm9yZGVyXCIrUltmXStcIldpZHRoXCIsITAsZSkpKTooZys9bi5jc3MoYSxcInBhZGRpbmdcIitSW2ZdLCEwLGUpLFwicGFkZGluZ1wiIT09YyYmKGcrPW4uY3NzKGEsXCJib3JkZXJcIitSW2ZdK1wiV2lkdGhcIiwhMCxlKSkpO3JldHVybiBnfWZ1bmN0aW9uIElhKGEsYixjKXt2YXIgZD0hMCxlPVwid2lkdGhcIj09PWI/YS5vZmZzZXRXaWR0aDphLm9mZnNldEhlaWdodCxmPXdhKGEpLGc9XCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZik7aWYoMD49ZXx8bnVsbD09ZSl7aWYoZT14YShhLGIsZiksKDA+ZXx8bnVsbD09ZSkmJihlPWEuc3R5bGVbYl0pLHZhLnRlc3QoZSkpcmV0dXJuIGU7ZD1nJiYoay5ib3hTaXppbmdSZWxpYWJsZSgpfHxlPT09YS5zdHlsZVtiXSksZT1wYXJzZUZsb2F0KGUpfHwwfXJldHVybiBlK0hhKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGYpK1wicHhcIn1mdW5jdGlvbiBKYShhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1MLmdldChkLFwib2xkZGlzcGxheVwiKSxjPWQuc3R5bGUuZGlzcGxheSxiPyhmW2ddfHxcIm5vbmVcIiE9PWN8fChkLnN0eWxlLmRpc3BsYXk9XCJcIiksXCJcIj09PWQuc3R5bGUuZGlzcGxheSYmUyhkKSYmKGZbZ109TC5hY2Nlc3MoZCxcIm9sZGRpc3BsYXlcIix0YShkLm5vZGVOYW1lKSkpKTooZT1TKGQpLFwibm9uZVwiPT09YyYmZXx8TC5zZXQoZCxcIm9sZGRpc3BsYXlcIixlP2M6bi5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9bi5leHRlbmQoe2Nzc0hvb2tzOntvcGFjaXR5OntnZXQ6ZnVuY3Rpb24oYSxiKXtpZihiKXt2YXIgYz14YShhLFwib3BhY2l0eVwiKTtyZXR1cm5cIlwiPT09Yz9cIjFcIjpjfX19fSxjc3NOdW1iZXI6e2NvbHVtbkNvdW50OiEwLGZpbGxPcGFjaXR5OiEwLGZsZXhHcm93OiEwLGZsZXhTaHJpbms6ITAsZm9udFdlaWdodDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITB9LGNzc1Byb3BzOntcImZsb2F0XCI6XCJjc3NGbG9hdFwifSxzdHlsZTpmdW5jdGlvbihhLGIsYyxkKXtpZihhJiYzIT09YS5ub2RlVHlwZSYmOCE9PWEubm9kZVR5cGUmJmEuc3R5bGUpe3ZhciBlLGYsZyxoPW4uY2FtZWxDYXNlKGIpLGk9YS5zdHlsZTtyZXR1cm4gYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1GYShpLGgpKSxnPW4uY3NzSG9va3NbYl18fG4uY3NzSG9va3NbaF0sdm9pZCAwPT09Yz9nJiZcImdldFwiaW4gZyYmdm9pZCAwIT09KGU9Zy5nZXQoYSwhMSxkKSk/ZTppW2JdOihmPXR5cGVvZiBjLFwic3RyaW5nXCI9PT1mJiYoZT1CYS5leGVjKGMpKSYmKGM9KGVbMV0rMSkqZVsyXStwYXJzZUZsb2F0KG4uY3NzKGEsYikpLGY9XCJudW1iZXJcIiksbnVsbCE9YyYmYz09PWMmJihcIm51bWJlclwiIT09Znx8bi5jc3NOdW1iZXJbaF18fChjKz1cInB4XCIpLGsuY2xlYXJDbG9uZVN0eWxlfHxcIlwiIT09Y3x8MCE9PWIuaW5kZXhPZihcImJhY2tncm91bmRcIil8fChpW2JdPVwiaW5oZXJpdFwiKSxnJiZcInNldFwiaW4gZyYmdm9pZCAwPT09KGM9Zy5zZXQoYSxjLGQpKXx8KGlbYl09YykpLHZvaWQgMCl9fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYik7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09RmEoYS5zdHlsZSxoKSksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLGcmJlwiZ2V0XCJpbiBnJiYoZT1nLmdldChhLCEwLGMpKSx2b2lkIDA9PT1lJiYoZT14YShhLGIsZCkpLFwibm9ybWFsXCI9PT1lJiZiIGluIERhJiYoZT1EYVtiXSksXCJcIj09PWN8fGM/KGY9cGFyc2VGbG9hdChlKSxjPT09ITB8fG4uaXNOdW1lcmljKGYpP2Z8fDA6ZSk6ZX19KSxuLmVhY2goW1wiaGVpZ2h0XCIsXCJ3aWR0aFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09e2dldDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGM/emEudGVzdChuLmNzcyhhLFwiZGlzcGxheVwiKSkmJjA9PT1hLm9mZnNldFdpZHRoP24uc3dhcChhLENhLGZ1bmN0aW9uKCl7cmV0dXJuIElhKGEsYixkKX0pOklhKGEsYixkKTp2b2lkIDB9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGU9ZCYmd2EoYSk7cmV0dXJuIEdhKGEsYyxkP0hhKGEsYixkLFwiYm9yZGVyLWJveFwiPT09bi5jc3MoYSxcImJveFNpemluZ1wiLCExLGUpLGUpOjApfX19KSxuLmNzc0hvb2tzLm1hcmdpblJpZ2h0PXlhKGsucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP24uc3dhcChhLHtkaXNwbGF5OlwiaW5saW5lLWJsb2NrXCJ9LHhhLFthLFwibWFyZ2luUmlnaHRcIl0pOnZvaWQgMH0pLG4uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStSW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LHVhLnRlc3QoYSl8fChuLmNzc0hvb2tzW2ErYl0uc2V0PUdhKX0pLG4uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG4uaXNBcnJheShiKSl7Zm9yKGQ9d2EoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09bi5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP24uc3R5bGUoYSxiLGMpOm4uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIEphKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Uyh0aGlzKT9uKHRoaXMpLnNob3coKTpuKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIEthKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBLYS5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW4uVHdlZW49S2EsS2EucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpLYSxpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxcInN3aW5nXCIsdGhpcy5vcHRpb25zPWIsdGhpcy5zdGFydD10aGlzLm5vdz10aGlzLmN1cigpLHRoaXMuZW5kPWQsdGhpcy51bml0PWZ8fChuLmNzc051bWJlcltjXT9cIlwiOlwicHhcIil9LGN1cjpmdW5jdGlvbigpe3ZhciBhPUthLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiBhJiZhLmdldD9hLmdldCh0aGlzKTpLYS5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KHRoaXMpfSxydW46ZnVuY3Rpb24oYSl7dmFyIGIsYz1LYS5wcm9wSG9va3NbdGhpcy5wcm9wXTtyZXR1cm4gdGhpcy5vcHRpb25zLmR1cmF0aW9uP3RoaXMucG9zPWI9bi5lYXNpbmdbdGhpcy5lYXNpbmddKGEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKmEsMCwxLHRoaXMub3B0aW9ucy5kdXJhdGlvbik6dGhpcy5wb3M9Yj1hLHRoaXMubm93PSh0aGlzLmVuZC10aGlzLnN0YXJ0KSpiK3RoaXMuc3RhcnQsdGhpcy5vcHRpb25zLnN0ZXAmJnRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLHRoaXMubm93LHRoaXMpLGMmJmMuc2V0P2Muc2V0KHRoaXMpOkthLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyksdGhpc319LEthLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZT1LYS5wcm90b3R5cGUsS2EucHJvcEhvb2tzPXtfZGVmYXVsdDp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBudWxsPT1hLmVsZW1bYS5wcm9wXXx8YS5lbGVtLnN0eWxlJiZudWxsIT1hLmVsZW0uc3R5bGVbYS5wcm9wXT8oYj1uLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApOmEuZWxlbVthLnByb3BdfSxzZXQ6ZnVuY3Rpb24oYSl7bi5meC5zdGVwW2EucHJvcF0/bi5meC5zdGVwW2EucHJvcF0oYSk6YS5lbGVtLnN0eWxlJiYobnVsbCE9YS5lbGVtLnN0eWxlW24uY3NzUHJvcHNbYS5wcm9wXV18fG4uY3NzSG9va3NbYS5wcm9wXSk/bi5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCk6YS5lbGVtW2EucHJvcF09YS5ub3d9fX0sS2EucHJvcEhvb2tzLnNjcm9sbFRvcD1LYS5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxuLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9fSxuLmZ4PUthLnByb3RvdHlwZS5pbml0LG4uZnguc3RlcD17fTt2YXIgTGEsTWEsTmE9L14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLE9hPW5ldyBSZWdFeHAoXCJeKD86KFsrLV0pPXwpKFwiK1ErXCIpKFthLXolXSopJFwiLFwiaVwiKSxQYT0vcXVldWVIb29rcyQvLFFhPVtWYV0sUmE9e1wiKlwiOltmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY3JlYXRlVHdlZW4oYSxiKSxkPWMuY3VyKCksZT1PYS5leGVjKGIpLGY9ZSYmZVszXXx8KG4uY3NzTnVtYmVyW2FdP1wiXCI6XCJweFwiKSxnPShuLmNzc051bWJlclthXXx8XCJweFwiIT09ZiYmK2QpJiZPYS5leGVjKG4uY3NzKGMuZWxlbSxhKSksaD0xLGk9MjA7aWYoZyYmZ1szXSE9PWYpe2Y9Znx8Z1szXSxlPWV8fFtdLGc9K2R8fDE7ZG8gaD1ofHxcIi41XCIsZy89aCxuLnN0eWxlKGMuZWxlbSxhLGcrZik7d2hpbGUoaCE9PShoPWMuY3VyKCkvZCkmJjEhPT1oJiYtLWkpfXJldHVybiBlJiYoZz1jLnN0YXJ0PStnfHwrZHx8MCxjLnVuaXQ9ZixjLmVuZD1lWzFdP2crKGVbMV0rMSkqZVsyXTorZVsyXSksY31dfTtmdW5jdGlvbiBTYSgpe3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7TGE9dm9pZCAwfSksTGE9bi5ub3coKX1mdW5jdGlvbiBUYShhLGIpe3ZhciBjLGQ9MCxlPXtoZWlnaHQ6YX07Zm9yKGI9Yj8xOjA7ND5kO2QrPTItYiljPVJbZF0sZVtcIm1hcmdpblwiK2NdPWVbXCJwYWRkaW5nXCIrY109YTtyZXR1cm4gYiYmKGUub3BhY2l0eT1lLndpZHRoPWEpLGV9ZnVuY3Rpb24gVWEoYSxiLGMpe2Zvcih2YXIgZCxlPShSYVtiXXx8W10pLmNvbmNhdChSYVtcIipcIl0pLGY9MCxnPWUubGVuZ3RoO2c+ZjtmKyspaWYoZD1lW2ZdLmNhbGwoYyxiLGEpKXJldHVybiBkfWZ1bmN0aW9uIFZhKGEsYixjKXt2YXIgZCxlLGYsZyxoLGksaixrLGw9dGhpcyxtPXt9LG89YS5zdHlsZSxwPWEubm9kZVR5cGUmJlMoYSkscT1MLmdldChhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW4uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLGwuYWx3YXlzKGZ1bmN0aW9uKCl7bC5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbi5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bby5vdmVyZmxvdyxvLm92ZXJmbG93WCxvLm92ZXJmbG93WV0saj1uLmNzcyhhLFwiZGlzcGxheVwiKSxrPVwibm9uZVwiPT09aj9MLmdldChhLFwib2xkZGlzcGxheVwiKXx8dGEoYS5ub2RlTmFtZSk6aixcImlubGluZVwiPT09ayYmXCJub25lXCI9PT1uLmNzcyhhLFwiZmxvYXRcIikmJihvLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIikpLGMub3ZlcmZsb3cmJihvLm92ZXJmbG93PVwiaGlkZGVuXCIsbC5hbHdheXMoZnVuY3Rpb24oKXtvLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0sby5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxvLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLE5hLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShwP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcXx8dm9pZCAwPT09cVtkXSljb250aW51ZTtwPSEwfW1bZF09cSYmcVtkXXx8bi5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobi5pc0VtcHR5T2JqZWN0KG0pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP3RhKGEubm9kZU5hbWUpOmopJiYoby5kaXNwbGF5PWopO2Vsc2V7cT9cImhpZGRlblwiaW4gcSYmKHA9cS5oaWRkZW4pOnE9TC5hY2Nlc3MoYSxcImZ4c2hvd1wiLHt9KSxmJiYocS5oaWRkZW49IXApLHA/bihhKS5zaG93KCk6bC5kb25lKGZ1bmN0aW9uKCl7bihhKS5oaWRlKCl9KSxsLmRvbmUoZnVuY3Rpb24oKXt2YXIgYjtMLnJlbW92ZShhLFwiZnhzaG93XCIpO2ZvcihiIGluIG0pbi5zdHlsZShhLGIsbVtiXSl9KTtmb3IoZCBpbiBtKWc9VWEocD9xW2RdOjAsZCxsKSxkIGluIHF8fChxW2RdPWcuc3RhcnQscCYmKGcuZW5kPWcuc3RhcnQsZy5zdGFydD1cIndpZHRoXCI9PT1kfHxcImhlaWdodFwiPT09ZD8xOjApKX19ZnVuY3Rpb24gV2EoYSxiKXt2YXIgYyxkLGUsZixnO2ZvcihjIGluIGEpaWYoZD1uLmNhbWVsQ2FzZShjKSxlPWJbZF0sZj1hW2NdLG4uaXNBcnJheShmKSYmKGU9ZlsxXSxmPWFbY109ZlswXSksYyE9PWQmJihhW2RdPWYsZGVsZXRlIGFbY10pLGc9bi5jc3NIb29rc1tkXSxnJiZcImV4cGFuZFwiaW4gZyl7Zj1nLmV4cGFuZChmKSxkZWxldGUgYVtkXTtmb3IoYyBpbiBmKWMgaW4gYXx8KGFbY109ZltjXSxiW2NdPWUpfWVsc2UgYltkXT1lfWZ1bmN0aW9uIFhhKGEsYixjKXt2YXIgZCxlLGY9MCxnPVFhLmxlbmd0aCxoPW4uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPUxhfHxTYSgpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpuLmV4dGVuZCh7fSxiKSxvcHRzOm4uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9fSxjKSxvcmlnaW5hbFByb3BlcnRpZXM6YixvcmlnaW5hbE9wdGlvbnM6YyxzdGFydFRpbWU6TGF8fFNhKCksZHVyYXRpb246Yy5kdXJhdGlvbix0d2VlbnM6W10sY3JlYXRlVHdlZW46ZnVuY3Rpb24oYixjKXt2YXIgZD1uLlR3ZWVuKGEsai5vcHRzLGIsYyxqLm9wdHMuc3BlY2lhbEVhc2luZ1tiXXx8ai5vcHRzLmVhc2luZyk7cmV0dXJuIGoudHdlZW5zLnB1c2goZCksZH0sc3RvcDpmdW5jdGlvbihiKXt2YXIgYz0wLGQ9Yj9qLnR3ZWVucy5sZW5ndGg6MDtpZihlKXJldHVybiB0aGlzO2ZvcihlPSEwO2Q+YztjKyspai50d2VlbnNbY10ucnVuKDEpO3JldHVybiBiP2gucmVzb2x2ZVdpdGgoYSxbaixiXSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihXYShrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9UWFbZl0uY2FsbChqLGEsayxqLm9wdHMpKXJldHVybiBkO3JldHVybiBuLm1hcChrLFVhLGopLG4uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG4uZngudGltZXIobi5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bi5BbmltYXRpb249bi5leHRlbmQoWGEse3R3ZWVuZXI6ZnVuY3Rpb24oYSxiKXtuLmlzRnVuY3Rpb24oYSk/KGI9YSxhPVtcIipcIl0pOmE9YS5zcGxpdChcIiBcIik7Zm9yKHZhciBjLGQ9MCxlPWEubGVuZ3RoO2U+ZDtkKyspYz1hW2RdLFJhW2NdPVJhW2NdfHxbXSxSYVtjXS51bnNoaWZ0KGIpfSxwcmVmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtiP1FhLnVuc2hpZnQoYSk6UWEucHVzaChhKX19KSxuLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9uLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG4uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbi5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1uLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBuLmZ4LnNwZWVkcz9uLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpuLmZ4LnNwZWVkcy5fZGVmYXVsdCwobnVsbD09ZC5xdWV1ZXx8ZC5xdWV1ZT09PSEwKSYmKGQucXVldWU9XCJmeFwiKSxkLm9sZD1kLmNvbXBsZXRlLGQuY29tcGxldGU9ZnVuY3Rpb24oKXtuLmlzRnVuY3Rpb24oZC5vbGQpJiZkLm9sZC5jYWxsKHRoaXMpLGQucXVldWUmJm4uZGVxdWV1ZSh0aGlzLGQucXVldWUpfSxkfSxuLmZuLmV4dGVuZCh7ZmFkZVRvOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmZpbHRlcihTKS5jc3MoXCJvcGFjaXR5XCIsMCkuc2hvdygpLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6Yn0sYSxjLGQpfSxhbmltYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uaXNFbXB0eU9iamVjdChhKSxmPW4uc3BlZWQoYixjLGQpLGc9ZnVuY3Rpb24oKXt2YXIgYj1YYSh0aGlzLG4uZXh0ZW5kKHt9LGEpLGYpOyhlfHxMLmdldCh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bi50aW1lcnMsZz1MLmdldCh0aGlzKTtpZihlKWdbZV0mJmdbZV0uc3RvcCYmZChnW2VdKTtlbHNlIGZvcihlIGluIGcpZ1tlXSYmZ1tlXS5zdG9wJiZQYS50ZXN0KGUpJiZkKGdbZV0pO2ZvcihlPWYubGVuZ3RoO2UtLTspZltlXS5lbGVtIT09dGhpc3x8bnVsbCE9YSYmZltlXS5xdWV1ZSE9PWF8fChmW2VdLmFuaW0uc3RvcChjKSxiPSExLGYuc3BsaWNlKGUsMSkpOyhifHwhYykmJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9TC5nZXQodGhpcyksZD1jW2ErXCJxdWV1ZVwiXSxlPWNbYStcInF1ZXVlSG9va3NcIl0sZj1uLnRpbWVycyxnPWQ/ZC5sZW5ndGg6MDtmb3IoYy5maW5pc2g9ITAsbi5xdWV1ZSh0aGlzLGEsW10pLGUmJmUuc3RvcCYmZS5zdG9wLmNhbGwodGhpcywhMCksYj1mLmxlbmd0aDtiLS07KWZbYl0uZWxlbT09PXRoaXMmJmZbYl0ucXVldWU9PT1hJiYoZltiXS5hbmltLnN0b3AoITApLGYuc3BsaWNlKGIsMSkpO2ZvcihiPTA7Zz5iO2IrKylkW2JdJiZkW2JdLmZpbmlzaCYmZFtiXS5maW5pc2guY2FsbCh0aGlzKTtkZWxldGUgYy5maW5pc2h9KX19KSxuLmVhY2goW1widG9nZ2xlXCIsXCJzaG93XCIsXCJoaWRlXCJdLGZ1bmN0aW9uKGEsYil7dmFyIGM9bi5mbltiXTtuLmZuW2JdPWZ1bmN0aW9uKGEsZCxlKXtyZXR1cm4gbnVsbD09YXx8XCJib29sZWFuXCI9PXR5cGVvZiBhP2MuYXBwbHkodGhpcyxhcmd1bWVudHMpOnRoaXMuYW5pbWF0ZShUYShiLCEwKSxhLGQsZSl9fSksbi5lYWNoKHtzbGlkZURvd246VGEoXCJzaG93XCIpLHNsaWRlVXA6VGEoXCJoaWRlXCIpLHNsaWRlVG9nZ2xlOlRhKFwidG9nZ2xlXCIpLGZhZGVJbjp7b3BhY2l0eTpcInNob3dcIn0sZmFkZU91dDp7b3BhY2l0eTpcImhpZGVcIn0sZmFkZVRvZ2dsZTp7b3BhY2l0eTpcInRvZ2dsZVwifX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gdGhpcy5hbmltYXRlKGIsYSxjLGQpfX0pLG4udGltZXJzPVtdLG4uZngudGljaz1mdW5jdGlvbigpe3ZhciBhLGI9MCxjPW4udGltZXJzO2ZvcihMYT1uLm5vdygpO2I8Yy5sZW5ndGg7YisrKWE9Y1tiXSxhKCl8fGNbYl0hPT1hfHxjLnNwbGljZShiLS0sMSk7Yy5sZW5ndGh8fG4uZnguc3RvcCgpLExhPXZvaWQgMH0sbi5meC50aW1lcj1mdW5jdGlvbihhKXtuLnRpbWVycy5wdXNoKGEpLGEoKT9uLmZ4LnN0YXJ0KCk6bi50aW1lcnMucG9wKCl9LG4uZnguaW50ZXJ2YWw9MTMsbi5meC5zdGFydD1mdW5jdGlvbigpe01hfHwoTWE9c2V0SW50ZXJ2YWwobi5meC50aWNrLG4uZnguaW50ZXJ2YWwpKX0sbi5meC5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChNYSksTWE9bnVsbH0sbi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbi5mbi5kZWxheT1mdW5jdGlvbihhLGIpe3JldHVybiBhPW4uZng/bi5meC5zcGVlZHNbYV18fGE6YSxiPWJ8fFwiZnhcIix0aGlzLnF1ZXVlKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1zZXRUaW1lb3V0KGIsYSk7Yy5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9bC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsay5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGsub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGsub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsay5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgWWEsWmEsJGE9bi5leHByLmF0dHJIYW5kbGU7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gSih0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoYSYmMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gdHlwZW9mIGEuZ2V0QXR0cmlidXRlPT09VT9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGQ9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP1phOllhKSksXG52b2lkIDA9PT1jP2QmJlwiZ2V0XCJpbiBkJiZudWxsIT09KGU9ZC5nZXQoYSxiKSk/ZTooZT1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWU/dm9pZCAwOmUpOm51bGwhPT1jP2QmJlwic2V0XCJpbiBkJiZ2b2lkIDAhPT0oZT1kLnNldChhLGMsYikpP2U6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTp2b2lkIG4ucmVtb3ZlQXR0cihhLGIpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChFKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWsucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19fSksWmE9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9JGFbYl18fG4uZmluZC5hdHRyOyRhW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj0kYVtiXSwkYVtiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsJGFbYl09ZiksZX19KTt2YXIgX2E9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBKKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW4uaXNYTUxEb2MoYSksZiYmKGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8X2EudGVzdChhLm5vZGVOYW1lKXx8YS5ocmVmP2EudGFiSW5kZXg6LTF9fX19KSxrLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciBhYj0vW1xcdFxcclxcblxcZl0vZztuLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChFKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYixcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW4udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goRSl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UoYWIsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9uLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChFKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09VXx8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZMLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8YT09PSExP1wiXCI6TC5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZShhYixcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgYmI9L1xcci9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKGJiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sISghYy5zZWxlY3RlZCYmaSE9PWV8fChrLm9wdERpc2FibGVkP2MuZGlzYWJsZWQ6bnVsbCE9PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxjLnBhcmVudE5vZGUuZGlzYWJsZWQmJm4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KGQudmFsdWUsZik+PTApJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+PTA6dm9pZCAwfX0say5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfSxiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSk7dmFyIGNiPW4ubm93KCksZGI9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihhKXt2YXIgYixjO2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7Yz1uZXcgRE9NUGFyc2VyLGI9Yy5wYXJzZUZyb21TdHJpbmcoYSxcInRleHQveG1sXCIpfWNhdGNoKGQpe2I9dm9pZCAwfXJldHVybighYnx8Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYSksYn07dmFyIGViPS8jLiokLyxmYj0vKFs/Jl0pXz1bXiZdKi8sZ2I9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxoYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxpYj0vXig/OkdFVHxIRUFEKSQvLGpiPS9eXFwvXFwvLyxrYj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxsYj17fSxtYj17fSxuYj1cIiovXCIuY29uY2F0KFwiKlwiKSxvYj1hLmxvY2F0aW9uLmhyZWYscGI9a2IuZXhlYyhvYi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gcWIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gcmIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09bWI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBzYihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gdGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gdWIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6b2IsdHlwZTpcIkdFVFwiLGlzTG9jYWw6aGIudGVzdChwYlsxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6bmIsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9zYihzYihhLG4uYWpheFNldHRpbmdzKSxiKTpzYihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpxYihsYiksYWpheFRyYW5zcG9ydDpxYihtYiksYWpheDpmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxiPWJ8fHt9O3ZhciBjLGQsZSxmLGcsaCxpLGosaz1uLmFqYXhTZXR1cCh7fSxiKSxsPWsuY29udGV4dHx8ayxtPWsuY29udGV4dCYmKGwubm9kZVR5cGV8fGwuanF1ZXJ5KT9uKGwpOm4uZXZlbnQsbz1uLkRlZmVycmVkKCkscD1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHE9ay5zdGF0dXNDb2RlfHx7fSxyPXt9LHM9e30sdD0wLHU9XCJjYW5jZWxlZFwiLHY9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dCl7aWYoIWYpe2Y9e307d2hpbGUoYj1nYi5leGVjKGUpKWZbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9ZlthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT10P2U6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdHx8KGE9c1tjXT1zW2NdfHxhLHJbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdHx8KGsubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dClmb3IoYiBpbiBhKXFbYl09W3FbYl0sYVtiXV07ZWxzZSB2LmFsd2F5cyhhW3Yuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHU7cmV0dXJuIGMmJmMuYWJvcnQoYikseCgwLGIpLHRoaXN9fTtpZihvLnByb21pc2UodikuY29tcGxldGU9cC5hZGQsdi5zdWNjZXNzPXYuZG9uZSx2LmVycm9yPXYuZmFpbCxrLnVybD0oKGF8fGsudXJsfHxvYikrXCJcIikucmVwbGFjZShlYixcIlwiKS5yZXBsYWNlKGpiLHBiWzFdK1wiLy9cIiksay50eXBlPWIubWV0aG9kfHxiLnR5cGV8fGsubWV0aG9kfHxrLnR5cGUsay5kYXRhVHlwZXM9bi50cmltKGsuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEUpfHxbXCJcIl0sbnVsbD09ay5jcm9zc0RvbWFpbiYmKGg9a2IuZXhlYyhrLnVybC50b0xvd2VyQ2FzZSgpKSxrLmNyb3NzRG9tYWluPSEoIWh8fGhbMV09PT1wYlsxXSYmaFsyXT09PXBiWzJdJiYoaFszXXx8KFwiaHR0cDpcIj09PWhbMV0/XCI4MFwiOlwiNDQzXCIpKT09PShwYlszXXx8KFwiaHR0cDpcIj09PXBiWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxrLmRhdGEmJmsucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBrLmRhdGEmJihrLmRhdGE9bi5wYXJhbShrLmRhdGEsay50cmFkaXRpb25hbCkpLHJiKGxiLGssYix2KSwyPT09dClyZXR1cm4gdjtpPW4uZXZlbnQmJmsuZ2xvYmFsLGkmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksay50eXBlPWsudHlwZS50b1VwcGVyQ2FzZSgpLGsuaGFzQ29udGVudD0haWIudGVzdChrLnR5cGUpLGQ9ay51cmwsay5oYXNDb250ZW50fHwoay5kYXRhJiYoZD1rLnVybCs9KGRiLnRlc3QoZCk/XCImXCI6XCI/XCIpK2suZGF0YSxkZWxldGUgay5kYXRhKSxrLmNhY2hlPT09ITEmJihrLnVybD1mYi50ZXN0KGQpP2QucmVwbGFjZShmYixcIiQxXz1cIitjYisrKTpkKyhkYi50ZXN0KGQpP1wiJlwiOlwiP1wiKStcIl89XCIrY2IrKykpLGsuaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2RdKSxuLmV0YWdbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZF0pKSwoay5kYXRhJiZrLmhhc0NvbnRlbnQmJmsuY29udGVudFR5cGUhPT0hMXx8Yi5jb250ZW50VHlwZSkmJnYuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGsuY29udGVudFR5cGUpLHYuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGsuZGF0YVR5cGVzWzBdJiZrLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dP2suYWNjZXB0c1trLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09ay5kYXRhVHlwZXNbMF0/XCIsIFwiK25iK1wiOyBxPTAuMDFcIjpcIlwiKTprLmFjY2VwdHNbXCIqXCJdKTtmb3IoaiBpbiBrLmhlYWRlcnMpdi5zZXRSZXF1ZXN0SGVhZGVyKGosay5oZWFkZXJzW2pdKTtpZihrLmJlZm9yZVNlbmQmJihrLmJlZm9yZVNlbmQuY2FsbChsLHYsayk9PT0hMXx8Mj09PXQpKXJldHVybiB2LmFib3J0KCk7dT1cImFib3J0XCI7Zm9yKGogaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pdltqXShrW2pdKTtpZihjPXJiKG1iLGssYix2KSl7di5yZWFkeVN0YXRlPTEsaSYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbdixrXSksay5hc3luYyYmay50aW1lb3V0PjAmJihnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2LmFib3J0KFwidGltZW91dFwiKX0say50aW1lb3V0KSk7dHJ5e3Q9MSxjLnNlbmQocix4KX1jYXRjaCh3KXtpZighKDI+dCkpdGhyb3cgdzt4KC0xLHcpfX1lbHNlIHgoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geChhLGIsZixoKXt2YXIgaixyLHMsdSx3LHg9YjsyIT09dCYmKHQ9MixnJiZjbGVhclRpbWVvdXQoZyksYz12b2lkIDAsZT1ofHxcIlwiLHYucmVhZHlTdGF0ZT1hPjA/NDowLGo9YT49MjAwJiYzMDA+YXx8MzA0PT09YSxmJiYodT10YihrLHYsZikpLHU9dWIoayx1LHYsaiksaj8oay5pZk1vZGlmaWVkJiYodz12LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZF09dyksdz12LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2RdPXcpKSwyMDQ9PT1hfHxcIkhFQURcIj09PWsudHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09YT94PVwibm90bW9kaWZpZWRcIjooeD11LnN0YXRlLHI9dS5kYXRhLHM9dS5lcnJvcixqPSFzKSk6KHM9eCwoYXx8IXgpJiYoeD1cImVycm9yXCIsMD5hJiYoYT0wKSkpLHYuc3RhdHVzPWEsdi5zdGF0dXNUZXh0PShifHx4KStcIlwiLGo/by5yZXNvbHZlV2l0aChsLFtyLHgsdl0pOm8ucmVqZWN0V2l0aChsLFt2LHgsc10pLHYuc3RhdHVzQ29kZShxKSxxPXZvaWQgMCxpJiZtLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdixrLGo/cjpzXSkscC5maXJlV2l0aChsLFt2LHhdKSxpJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3Ysa10pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHZ9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9KX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG4uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBuLmlzRnVuY3Rpb24oYSk/dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KToodGhpc1swXSYmKGI9bihhLHRoaXNbMF0ub3duZXJEb2N1bWVudCkuZXEoMCkuY2xvbmUoITApLHRoaXNbMF0ucGFyZW50Tm9kZSYmYi5pbnNlcnRCZWZvcmUodGhpc1swXSksYi5tYXAoZnVuY3Rpb24oKXt2YXIgYT10aGlzO3doaWxlKGEuZmlyc3RFbGVtZW50Q2hpbGQpYT1hLmZpcnN0RWxlbWVudENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpKSx0aGlzKX0sd3JhcElubmVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2gobi5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGIpe24odGhpcykud3JhcElubmVyKGEuY2FsbCh0aGlzLGIpKX06ZnVuY3Rpb24oKXt2YXIgYj1uKHRoaXMpLGM9Yi5jb250ZW50cygpO2MubGVuZ3RoP2Mud3JhcEFsbChhKTpiLmFwcGVuZChhKX0pfSx3cmFwOmZ1bmN0aW9uKGEpe3ZhciBiPW4uaXNGdW5jdGlvbihhKTtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe24odGhpcykud3JhcEFsbChiP2EuY2FsbCh0aGlzLGMpOmEpfSl9LHVud3JhcDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKXtuLm5vZGVOYW1lKHRoaXMsXCJib2R5XCIpfHxuKHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyl9KS5lbmQoKX19KSxuLmV4cHIuZmlsdGVycy5oaWRkZW49ZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0V2lkdGg8PTAmJmEub2Zmc2V0SGVpZ2h0PD0wfSxuLmV4cHIuZmlsdGVycy52aXNpYmxlPWZ1bmN0aW9uKGEpe3JldHVybiFuLmV4cHIuZmlsdGVycy5oaWRkZW4oYSl9O3ZhciB2Yj0vJTIwL2csd2I9L1xcW1xcXSQvLHhiPS9cXHI/XFxuL2cseWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLHpiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBBYihhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHx3Yi50ZXN0KGEpP2QoYSxlKTpBYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKUFiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlBYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKHZiLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZ6Yi50ZXN0KHRoaXMubm9kZU5hbWUpJiYheWIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVQudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZSh4YixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKHhiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0fWNhdGNoKGEpe319O3ZhciBCYj0wLENiPXt9LERiPXswOjIwMCwxMjIzOjIwNH0sRWI9bi5hamF4U2V0dGluZ3MueGhyKCk7YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gQ2IpQ2JbYV0oKX0pLGsuY29ycz0hIUViJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gRWIsay5hamF4PUViPSEhRWIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBrLmNvcnN8fEViJiYhYS5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9YS54aHIoKSxnPSsrQmI7aWYoZi5vcGVuKGEudHlwZSxhLnVybCxhLmFzeW5jLGEudXNlcm5hbWUsYS5wYXNzd29yZCksYS54aHJGaWVsZHMpZm9yKGUgaW4gYS54aHJGaWVsZHMpZltlXT1hLnhockZpZWxkc1tlXTthLm1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZShhLm1pbWVUeXBlKSxhLmNyb3NzRG9tYWlufHxjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGUgaW4gYylmLnNldFJlcXVlc3RIZWFkZXIoZSxjW2VdKTtiPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2ImJihkZWxldGUgQ2JbZ10sYj1mLm9ubG9hZD1mLm9uZXJyb3I9bnVsbCxcImFib3J0XCI9PT1hP2YuYWJvcnQoKTpcImVycm9yXCI9PT1hP2QoZi5zdGF0dXMsZi5zdGF0dXNUZXh0KTpkKERiW2Yuc3RhdHVzXXx8Zi5zdGF0dXMsZi5zdGF0dXNUZXh0LFwic3RyaW5nXCI9PXR5cGVvZiBmLnJlc3BvbnNlVGV4dD97dGV4dDpmLnJlc3BvbnNlVGV4dH06dm9pZCAwLGYuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGYub25sb2FkPWIoKSxmLm9uZXJyb3I9YihcImVycm9yXCIpLGI9Q2JbZ109YihcImFib3J0XCIpO3RyeXtmLnNlbmQoYS5oYXNDb250ZW50JiZhLmRhdGF8fG51bGwpfWNhdGNoKGgpe2lmKGIpdGhyb3cgaH19LGFib3J0OmZ1bmN0aW9uKCl7YiYmYigpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZCxlKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHthc3luYzohMCxjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmUoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGwuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgRmI9W10sR2I9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1GYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK2NiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKEdiLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmIShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZHYi50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKEdiLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KGRiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe2FbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxGYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8bDt2YXIgZD12LmV4ZWMoYSksZT0hYyYmW107cmV0dXJuIGQ/W2IuY3JlYXRlRWxlbWVudChkWzFdKV06KGQ9bi5idWlsZEZyYWdtZW50KFthXSxiLGUpLGUmJmUubGVuZ3RoJiZuKGUpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZC5jaGlsZE5vZGVzKSl9O3ZhciBIYj1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmSGIpcmV0dXJuIEhiLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD49MCYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZSxkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5jb21wbGV0ZShjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChjLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pLHRoaXN9LG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBuLmdyZXAobi50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O3ZhciBJYj1hLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtmdW5jdGlvbiBKYihhKXtyZXR1cm4gbi5pc1dpbmRvdyhhKT9hOjk9PT1hLm5vZGVUeXBlJiZhLmRlZmF1bHRWaWV3fW4ub2Zmc2V0PXtzZXRPZmZzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGgsaSxqLGs9bi5jc3MoYSxcInBvc2l0aW9uXCIpLGw9bihhKSxtPXt9O1wic3RhdGljXCI9PT1rJiYoYS5zdHlsZS5wb3NpdGlvbj1cInJlbGF0aXZlXCIpLGg9bC5vZmZzZXQoKSxmPW4uY3NzKGEsXCJ0b3BcIiksaT1uLmNzcyhhLFwibGVmdFwiKSxqPShcImFic29sdXRlXCI9PT1rfHxcImZpeGVkXCI9PT1rKSYmKGYraSkuaW5kZXhPZihcImF1dG9cIik+LTEsaj8oZD1sLnBvc2l0aW9uKCksZz1kLnRvcCxlPWQubGVmdCk6KGc9cGFyc2VGbG9hdChmKXx8MCxlPXBhcnNlRmxvYXQoaSl8fDApLG4uaXNGdW5jdGlvbihiKSYmKGI9Yi5jYWxsKGEsYyxoKSksbnVsbCE9Yi50b3AmJihtLnRvcD1iLnRvcC1oLnRvcCtnKSxudWxsIT1iLmxlZnQmJihtLmxlZnQ9Yi5sZWZ0LWgubGVmdCtlKSxcInVzaW5nXCJpbiBiP2IudXNpbmcuY2FsbChhLG0pOmwuY3NzKG0pfX0sbi5mbi5leHRlbmQoe29mZnNldDpmdW5jdGlvbihhKXtpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiB2b2lkIDA9PT1hP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24ub2Zmc2V0LnNldE9mZnNldCh0aGlzLGEsYil9KTt2YXIgYixjLGQ9dGhpc1swXSxlPXt0b3A6MCxsZWZ0OjB9LGY9ZCYmZC5vd25lckRvY3VtZW50O2lmKGYpcmV0dXJuIGI9Zi5kb2N1bWVudEVsZW1lbnQsbi5jb250YWlucyhiLGQpPyh0eXBlb2YgZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QhPT1VJiYoZT1kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKSxjPUpiKGYpLHt0b3A6ZS50b3ArYy5wYWdlWU9mZnNldC1iLmNsaWVudFRvcCxsZWZ0OmUubGVmdCtjLnBhZ2VYT2Zmc2V0LWIuY2xpZW50TGVmdH0pOmV9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXRoaXNbMF0sZD17dG9wOjAsbGVmdDowfTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhjLFwicG9zaXRpb25cIik/Yj1jLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChkPWEub2Zmc2V0KCkpLGQudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksZC5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWQudG9wLW4uY3NzKGMsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtZC5sZWZ0LW4uY3NzKGMsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50fHxJYjt3aGlsZShhJiYhbi5ub2RlTmFtZShhLFwiaHRtbFwiKSYmXCJzdGF0aWNcIj09PW4uY3NzKGEsXCJwb3NpdGlvblwiKSlhPWEub2Zmc2V0UGFyZW50O3JldHVybiBhfHxJYn0pfX0pLG4uZWFjaCh7c2Nyb2xsTGVmdDpcInBhZ2VYT2Zmc2V0XCIsc2Nyb2xsVG9wOlwicGFnZVlPZmZzZXRcIn0sZnVuY3Rpb24oYixjKXt2YXIgZD1cInBhZ2VZT2Zmc2V0XCI9PT1jO24uZm5bYl09ZnVuY3Rpb24oZSl7cmV0dXJuIEoodGhpcyxmdW5jdGlvbihiLGUsZil7dmFyIGc9SmIoYik7cmV0dXJuIHZvaWQgMD09PWY/Zz9nW2NdOmJbZV06dm9pZChnP2cuc2Nyb2xsVG8oZD9hLnBhZ2VYT2Zmc2V0OmYsZD9mOmEucGFnZVlPZmZzZXQpOmJbZV09Zil9LGIsZSxhcmd1bWVudHMubGVuZ3RoLG51bGwpfX0pLG4uZWFjaChbXCJ0b3BcIixcImxlZnRcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXlhKGsucGl4ZWxQb3NpdGlvbixmdW5jdGlvbihhLGMpe3JldHVybiBjPyhjPXhhKGEsYiksdmEudGVzdChjKT9uKGEpLnBvc2l0aW9uKClbYl0rXCJweFwiOmMpOnZvaWQgMH0pfSksbi5lYWNoKHtIZWlnaHQ6XCJoZWlnaHRcIixXaWR0aDpcIndpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5lYWNoKHtwYWRkaW5nOlwiaW5uZXJcIithLGNvbnRlbnQ6YixcIlwiOlwib3V0ZXJcIithfSxmdW5jdGlvbihjLGQpe24uZm5bZF09ZnVuY3Rpb24oZCxlKXt2YXIgZj1hcmd1bWVudHMubGVuZ3RoJiYoY3x8XCJib29sZWFuXCIhPXR5cGVvZiBkKSxnPWN8fChkPT09ITB8fGU9PT0hMD9cIm1hcmdpblwiOlwiYm9yZGVyXCIpO3JldHVybiBKKHRoaXMsZnVuY3Rpb24oYixjLGQpe3ZhciBlO3JldHVybiBuLmlzV2luZG93KGIpP2IuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIrYV06OT09PWIubm9kZVR5cGU/KGU9Yi5kb2N1bWVudEVsZW1lbnQsTWF0aC5tYXgoYi5ib2R5W1wic2Nyb2xsXCIrYV0sZVtcInNjcm9sbFwiK2FdLGIuYm9keVtcIm9mZnNldFwiK2FdLGVbXCJvZmZzZXRcIithXSxlW1wiY2xpZW50XCIrYV0pKTp2b2lkIDA9PT1kP24uY3NzKGIsYyxnKTpuLnN0eWxlKGIsYyxkLGcpfSxiLGY/ZDp2b2lkIDAsZixudWxsKX19KX0pLG4uZm4uc2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0sbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgS2I9YS5qUXVlcnksTGI9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9TGIpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PUtiKSxufSx0eXBlb2YgYj09PVUmJihhLmpRdWVyeT1hLiQ9biksbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anF1ZXJ5Lm1pbi5tYXAiLCIvKiFcbiAqIHJldmVhbC5qc1xuICogaHR0cDovL2xhYi5oYWtpbS5zZS9yZXZlYWwtanNcbiAqIE1JVCBsaWNlbnNlZFxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxNSBIYWtpbSBFbCBIYXR0YWIsIGh0dHA6Ly9oYWtpbS5zZVxuICovXG4oZnVuY3Rpb24oIHJvb3QsIGZhY3RvcnkgKSB7XG5cdGlmKCB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuXHRcdGRlZmluZSggZnVuY3Rpb24oKSB7XG5cdFx0XHRyb290LlJldmVhbCA9IGZhY3RvcnkoKTtcblx0XHRcdHJldHVybiByb290LlJldmVhbDtcblx0XHR9ICk7XG5cdH0gZWxzZSBpZiggdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICkge1xuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMuXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzLlxuXHRcdHJvb3QuUmV2ZWFsID0gZmFjdG9yeSgpO1xuXHR9XG59KCB0aGlzLCBmdW5jdGlvbigpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIFJldmVhbDtcblxuXHR2YXIgU0xJREVTX1NFTEVDVE9SID0gJy5zbGlkZXMgc2VjdGlvbicsXG5cdFx0SE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgPSAnLnNsaWRlcz5zZWN0aW9uJyxcblx0XHRWRVJUSUNBTF9TTElERVNfU0VMRUNUT1IgPSAnLnNsaWRlcz5zZWN0aW9uLnByZXNlbnQ+c2VjdGlvbicsXG5cdFx0SE9NRV9TTElERV9TRUxFQ1RPUiA9ICcuc2xpZGVzPnNlY3Rpb246Zmlyc3Qtb2YtdHlwZScsXG5cblx0XHQvLyBDb25maWd1cmF0aW9uIGRlZmF1bHRzLCBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBpbml0aWFsaXphdGlvbiB0aW1lXG5cdFx0Y29uZmlnID0ge1xuXG5cdFx0XHQvLyBUaGUgXCJub3JtYWxcIiBzaXplIG9mIHRoZSBwcmVzZW50YXRpb24sIGFzcGVjdCByYXRpbyB3aWxsIGJlIHByZXNlcnZlZFxuXHRcdFx0Ly8gd2hlbiB0aGUgcHJlc2VudGF0aW9uIGlzIHNjYWxlZCB0byBmaXQgZGlmZmVyZW50IHJlc29sdXRpb25zXG5cdFx0XHR3aWR0aDogOTYwLFxuXHRcdFx0aGVpZ2h0OiA3MDAsXG5cblx0XHRcdC8vIEZhY3RvciBvZiB0aGUgZGlzcGxheSBzaXplIHRoYXQgc2hvdWxkIHJlbWFpbiBlbXB0eSBhcm91bmQgdGhlIGNvbnRlbnRcblx0XHRcdG1hcmdpbjogMC4xLFxuXG5cdFx0XHQvLyBCb3VuZHMgZm9yIHNtYWxsZXN0L2xhcmdlc3QgcG9zc2libGUgc2NhbGUgdG8gYXBwbHkgdG8gY29udGVudFxuXHRcdFx0bWluU2NhbGU6IDAuMixcblx0XHRcdG1heFNjYWxlOiAxLjUsXG5cblx0XHRcdC8vIERpc3BsYXkgY29udHJvbHMgaW4gdGhlIGJvdHRvbSByaWdodCBjb3JuZXJcblx0XHRcdGNvbnRyb2xzOiB0cnVlLFxuXG5cdFx0XHQvLyBEaXNwbGF5IGEgcHJlc2VudGF0aW9uIHByb2dyZXNzIGJhclxuXHRcdFx0cHJvZ3Jlc3M6IHRydWUsXG5cblx0XHRcdC8vIERpc3BsYXkgdGhlIHBhZ2UgbnVtYmVyIG9mIHRoZSBjdXJyZW50IHNsaWRlXG5cdFx0XHRzbGlkZU51bWJlcjogZmFsc2UsXG5cblx0XHRcdC8vIFB1c2ggZWFjaCBzbGlkZSBjaGFuZ2UgdG8gdGhlIGJyb3dzZXIgaGlzdG9yeVxuXHRcdFx0aGlzdG9yeTogZmFsc2UsXG5cblx0XHRcdC8vIEVuYWJsZSBrZXlib2FyZCBzaG9ydGN1dHMgZm9yIG5hdmlnYXRpb25cblx0XHRcdGtleWJvYXJkOiB0cnVlLFxuXG5cdFx0XHQvLyBPcHRpb25hbCBmdW5jdGlvbiB0aGF0IGJsb2NrcyBrZXlib2FyZCBldmVudHMgd2hlbiByZXR1bmluZyBmYWxzZVxuXHRcdFx0a2V5Ym9hcmRDb25kaXRpb246IG51bGwsXG5cblx0XHRcdC8vIEVuYWJsZSB0aGUgc2xpZGUgb3ZlcnZpZXcgbW9kZVxuXHRcdFx0b3ZlcnZpZXc6IHRydWUsXG5cblx0XHRcdC8vIFZlcnRpY2FsIGNlbnRlcmluZyBvZiBzbGlkZXNcblx0XHRcdGNlbnRlcjogdHJ1ZSxcblxuXHRcdFx0Ly8gRW5hYmxlcyB0b3VjaCBuYXZpZ2F0aW9uIG9uIGRldmljZXMgd2l0aCB0b3VjaCBpbnB1dFxuXHRcdFx0dG91Y2g6IHRydWUsXG5cblx0XHRcdC8vIExvb3AgdGhlIHByZXNlbnRhdGlvblxuXHRcdFx0bG9vcDogZmFsc2UsXG5cblx0XHRcdC8vIENoYW5nZSB0aGUgcHJlc2VudGF0aW9uIGRpcmVjdGlvbiB0byBiZSBSVExcblx0XHRcdHJ0bDogZmFsc2UsXG5cblx0XHRcdC8vIFR1cm5zIGZyYWdtZW50cyBvbiBhbmQgb2ZmIGdsb2JhbGx5XG5cdFx0XHRmcmFnbWVudHM6IHRydWUsXG5cblx0XHRcdC8vIEZsYWdzIGlmIHRoZSBwcmVzZW50YXRpb24gaXMgcnVubmluZyBpbiBhbiBlbWJlZGRlZCBtb2RlLFxuXHRcdFx0Ly8gaS5lLiBjb250YWluZWQgd2l0aGluIGEgbGltaXRlZCBwb3J0aW9uIG9mIHRoZSBzY3JlZW5cblx0XHRcdGVtYmVkZGVkOiBmYWxzZSxcblxuXHRcdFx0Ly8gRmxhZ3MgaWYgd2Ugc2hvdWxkIHNob3cgYSBoZWxwIG92ZXJsYXkgd2hlbiB0aGUgcXVlc3Rpb25tYXJrXG5cdFx0XHQvLyBrZXkgaXMgcHJlc3NlZFxuXHRcdFx0aGVscDogdHJ1ZSxcblxuXHRcdFx0Ly8gRmxhZ3MgaWYgaXQgc2hvdWxkIGJlIHBvc3NpYmxlIHRvIHBhdXNlIHRoZSBwcmVzZW50YXRpb24gKGJsYWNrb3V0KVxuXHRcdFx0cGF1c2U6IHRydWUsXG5cblx0XHRcdC8vIE51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiBhdXRvbWF0aWNhbGx5IHByb2NlZWRpbmcgdG8gdGhlXG5cdFx0XHQvLyBuZXh0IHNsaWRlLCBkaXNhYmxlZCB3aGVuIHNldCB0byAwLCB0aGlzIHZhbHVlIGNhbiBiZSBvdmVyd3JpdHRlblxuXHRcdFx0Ly8gYnkgdXNpbmcgYSBkYXRhLWF1dG9zbGlkZSBhdHRyaWJ1dGUgb24geW91ciBzbGlkZXNcblx0XHRcdGF1dG9TbGlkZTogMCxcblxuXHRcdFx0Ly8gU3RvcCBhdXRvLXNsaWRpbmcgYWZ0ZXIgdXNlciBpbnB1dFxuXHRcdFx0YXV0b1NsaWRlU3RvcHBhYmxlOiB0cnVlLFxuXG5cdFx0XHQvLyBFbmFibGUgc2xpZGUgbmF2aWdhdGlvbiB2aWEgbW91c2Ugd2hlZWxcblx0XHRcdG1vdXNlV2hlZWw6IGZhbHNlLFxuXG5cdFx0XHQvLyBBcHBseSBhIDNEIHJvbGwgdG8gbGlua3Mgb24gaG92ZXJcblx0XHRcdHJvbGxpbmdMaW5rczogZmFsc2UsXG5cblx0XHRcdC8vIEhpZGVzIHRoZSBhZGRyZXNzIGJhciBvbiBtb2JpbGUgZGV2aWNlc1xuXHRcdFx0aGlkZUFkZHJlc3NCYXI6IHRydWUsXG5cblx0XHRcdC8vIE9wZW5zIGxpbmtzIGluIGFuIGlmcmFtZSBwcmV2aWV3IG92ZXJsYXlcblx0XHRcdHByZXZpZXdMaW5rczogZmFsc2UsXG5cblx0XHRcdC8vIEV4cG9zZXMgdGhlIHJldmVhbC5qcyBBUEkgdGhyb3VnaCB3aW5kb3cucG9zdE1lc3NhZ2Vcblx0XHRcdHBvc3RNZXNzYWdlOiB0cnVlLFxuXG5cdFx0XHQvLyBEaXNwYXRjaGVzIGFsbCByZXZlYWwuanMgZXZlbnRzIHRvIHRoZSBwYXJlbnQgd2luZG93IHRocm91Z2ggcG9zdE1lc3NhZ2Vcblx0XHRcdHBvc3RNZXNzYWdlRXZlbnRzOiBmYWxzZSxcblxuXHRcdFx0Ly8gRm9jdXNlcyBib2R5IHdoZW4gcGFnZSBjaGFuZ2VzIHZpc2libGl0eSB0byBlbnN1cmUga2V5Ym9hcmQgc2hvcnRjdXRzIHdvcmtcblx0XHRcdGZvY3VzQm9keU9uUGFnZVZpc2liaWxpdHlDaGFuZ2U6IHRydWUsXG5cblx0XHRcdC8vIFRyYW5zaXRpb24gc3R5bGVcblx0XHRcdHRyYW5zaXRpb246ICdzbGlkZScsIC8vIG5vbmUvZmFkZS9zbGlkZS9jb252ZXgvY29uY2F2ZS96b29tXG5cblx0XHRcdC8vIFRyYW5zaXRpb24gc3BlZWRcblx0XHRcdHRyYW5zaXRpb25TcGVlZDogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0L2Zhc3Qvc2xvd1xuXG5cdFx0XHQvLyBUcmFuc2l0aW9uIHN0eWxlIGZvciBmdWxsIHBhZ2Ugc2xpZGUgYmFja2dyb3VuZHNcblx0XHRcdGJhY2tncm91bmRUcmFuc2l0aW9uOiAnZmFkZScsIC8vIG5vbmUvZmFkZS9zbGlkZS9jb252ZXgvY29uY2F2ZS96b29tXG5cblx0XHRcdC8vIFBhcmFsbGF4IGJhY2tncm91bmQgaW1hZ2Vcblx0XHRcdHBhcmFsbGF4QmFja2dyb3VuZEltYWdlOiAnJywgLy8gQ1NTIHN5bnRheCwgZS5nLiBcImEuanBnXCJcblxuXHRcdFx0Ly8gUGFyYWxsYXggYmFja2dyb3VuZCBzaXplXG5cdFx0XHRwYXJhbGxheEJhY2tncm91bmRTaXplOiAnJywgLy8gQ1NTIHN5bnRheCwgZS5nLiBcIjMwMDBweCAyMDAwcHhcIlxuXG5cdFx0XHQvLyBBbW91bnQgb2YgcGl4ZWxzIHRvIG1vdmUgdGhlIHBhcmFsbGF4IGJhY2tncm91bmQgcGVyIHNsaWRlIHN0ZXBcblx0XHRcdHBhcmFsbGF4QmFja2dyb3VuZEhvcml6b250YWw6IG51bGwsXG5cdFx0XHRwYXJhbGxheEJhY2tncm91bmRWZXJ0aWNhbDogbnVsbCxcblxuXHRcdFx0Ly8gTnVtYmVyIG9mIHNsaWRlcyBhd2F5IGZyb20gdGhlIGN1cnJlbnQgdGhhdCBhcmUgdmlzaWJsZVxuXHRcdFx0dmlld0Rpc3RhbmNlOiAzLFxuXG5cdFx0XHQvLyBTY3JpcHQgZGVwZW5kZW5jaWVzIHRvIGxvYWRcblx0XHRcdGRlcGVuZGVuY2llczogW11cblxuXHRcdH0sXG5cblx0XHQvLyBGbGFncyBpZiByZXZlYWwuanMgaXMgbG9hZGVkIChoYXMgZGlzcGF0Y2hlZCB0aGUgJ3JlYWR5JyBldmVudClcblx0XHRsb2FkZWQgPSBmYWxzZSxcblxuXHRcdC8vIEZsYWdzIGlmIHRoZSBvdmVydmlldyBtb2RlIGlzIGN1cnJlbnRseSBhY3RpdmVcblx0XHRvdmVydmlldyA9IGZhbHNlLFxuXG5cdFx0Ly8gVGhlIGhvcml6b250YWwgYW5kIHZlcnRpY2FsIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgYWN0aXZlIHNsaWRlXG5cdFx0aW5kZXhoLFxuXHRcdGluZGV4dixcblxuXHRcdC8vIFRoZSBwcmV2aW91cyBhbmQgY3VycmVudCBzbGlkZSBIVE1MIGVsZW1lbnRzXG5cdFx0cHJldmlvdXNTbGlkZSxcblx0XHRjdXJyZW50U2xpZGUsXG5cblx0XHRwcmV2aW91c0JhY2tncm91bmQsXG5cblx0XHQvLyBTbGlkZXMgbWF5IGhvbGQgYSBkYXRhLXN0YXRlIGF0dHJpYnV0ZSB3aGljaCB3ZSBwaWNrIHVwIGFuZCBhcHBseVxuXHRcdC8vIGFzIGEgY2xhc3MgdG8gdGhlIGJvZHkuIFRoaXMgbGlzdCBjb250YWlucyB0aGUgY29tYmluZWQgc3RhdGUgb2Zcblx0XHQvLyBhbGwgY3VycmVudCBzbGlkZXMuXG5cdFx0c3RhdGUgPSBbXSxcblxuXHRcdC8vIFRoZSBjdXJyZW50IHNjYWxlIG9mIHRoZSBwcmVzZW50YXRpb24gKHNlZSB3aWR0aC9oZWlnaHQgY29uZmlnKVxuXHRcdHNjYWxlID0gMSxcblxuXHRcdC8vIENTUyB0cmFuc2Zvcm0gdGhhdCBpcyBjdXJyZW50bHkgYXBwbGllZCB0byB0aGUgc2xpZGVzIGNvbnRhaW5lcixcblx0XHQvLyBzcGxpdCBpbnRvIHR3byBncm91cHNcblx0XHRzbGlkZXNUcmFuc2Zvcm0gPSB7IGxheW91dDogJycsIG92ZXJ2aWV3OiAnJyB9LFxuXG5cdFx0Ly8gQ2FjaGVkIHJlZmVyZW5jZXMgdG8gRE9NIGVsZW1lbnRzXG5cdFx0ZG9tID0ge30sXG5cblx0XHQvLyBGZWF0dXJlcyBzdXBwb3J0ZWQgYnkgdGhlIGJyb3dzZXIsIHNlZSAjY2hlY2tDYXBhYmlsaXRpZXMoKVxuXHRcdGZlYXR1cmVzID0ge30sXG5cblx0XHQvLyBDbGllbnQgaXMgYSBtb2JpbGUgZGV2aWNlLCBzZWUgI2NoZWNrQ2FwYWJpbGl0aWVzKClcblx0XHRpc01vYmlsZURldmljZSxcblxuXHRcdC8vIFRocm90dGxlcyBtb3VzZSB3aGVlbCBuYXZpZ2F0aW9uXG5cdFx0bGFzdE1vdXNlV2hlZWxTdGVwID0gMCxcblxuXHRcdC8vIERlbGF5cyB1cGRhdGVzIHRvIHRoZSBVUkwgZHVlIHRvIGEgQ2hyb21lIHRodW1ibmFpbGVyIGJ1Z1xuXHRcdHdyaXRlVVJMVGltZW91dCA9IDAsXG5cblx0XHQvLyBGbGFncyBpZiB0aGUgaW50ZXJhY3Rpb24gZXZlbnQgbGlzdGVuZXJzIGFyZSBib3VuZFxuXHRcdGV2ZW50c0FyZUJvdW5kID0gZmFsc2UsXG5cblx0XHQvLyBUaGUgY3VycmVudCBhdXRvLXNsaWRlIGR1cmF0aW9uXG5cdFx0YXV0b1NsaWRlID0gMCxcblxuXHRcdC8vIEF1dG8gc2xpZGUgcHJvcGVydGllc1xuXHRcdGF1dG9TbGlkZVBsYXllcixcblx0XHRhdXRvU2xpZGVUaW1lb3V0ID0gMCxcblx0XHRhdXRvU2xpZGVTdGFydFRpbWUgPSAtMSxcblx0XHRhdXRvU2xpZGVQYXVzZWQgPSBmYWxzZSxcblxuXHRcdC8vIEhvbGRzIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50bHkgb25nb2luZyB0b3VjaCBpbnB1dFxuXHRcdHRvdWNoID0ge1xuXHRcdFx0c3RhcnRYOiAwLFxuXHRcdFx0c3RhcnRZOiAwLFxuXHRcdFx0c3RhcnRTcGFuOiAwLFxuXHRcdFx0c3RhcnRDb3VudDogMCxcblx0XHRcdGNhcHR1cmVkOiBmYWxzZSxcblx0XHRcdHRocmVzaG9sZDogNDBcblx0XHR9LFxuXG5cdFx0Ly8gSG9sZHMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGtleWJvYXJkIHNob3J0Y3V0c1xuXHRcdGtleWJvYXJkU2hvcnRjdXRzID0ge1xuXHRcdFx0J04gICwgIFNQQUNFJzpcdFx0XHQnTmV4dCBzbGlkZScsXG5cdFx0XHQnUCc6XHRcdFx0XHRcdCdQcmV2aW91cyBzbGlkZScsXG5cdFx0XHQnJiM4NTkyOyAgLCAgSCc6XHRcdCdOYXZpZ2F0ZSBsZWZ0Jyxcblx0XHRcdCcmIzg1OTQ7ICAsICBMJzpcdFx0J05hdmlnYXRlIHJpZ2h0Jyxcblx0XHRcdCcmIzg1OTM7ICAsICBLJzpcdFx0J05hdmlnYXRlIHVwJyxcblx0XHRcdCcmIzg1OTU7ICAsICBKJzpcdFx0J05hdmlnYXRlIGRvd24nLFxuXHRcdFx0J0hvbWUnOlx0XHRcdFx0XHQnRmlyc3Qgc2xpZGUnLFxuXHRcdFx0J0VuZCc6XHRcdFx0XHRcdCdMYXN0IHNsaWRlJyxcblx0XHRcdCdCICAsICAuJzpcdFx0XHRcdCdQYXVzZScsXG5cdFx0XHQnRic6XHRcdFx0XHRcdCdGdWxsc2NyZWVuJyxcblx0XHRcdCdFU0MsIE8nOlx0XHRcdFx0J1NsaWRlIG92ZXJ2aWV3J1xuXHRcdH07XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyB1cCB0aGUgcHJlc2VudGF0aW9uIGlmIHRoZSBjbGllbnQgaXMgY2FwYWJsZS5cblx0ICovXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoIG9wdGlvbnMgKSB7XG5cblx0XHRjaGVja0NhcGFiaWxpdGllcygpO1xuXG5cdFx0aWYoICFmZWF0dXJlcy50cmFuc2Zvcm1zMmQgJiYgIWZlYXR1cmVzLnRyYW5zZm9ybXMzZCApIHtcblx0XHRcdGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCAnY2xhc3MnLCAnbm8tdHJhbnNmb3JtcycgKTtcblxuXHRcdFx0Ly8gU2luY2UgSlMgd29uJ3QgYmUgcnVubmluZyBhbnkgZnVydGhlciwgd2UgbG9hZCBhbGwgbGF6eVxuXHRcdFx0Ly8gbG9hZGluZyBlbGVtZW50cyB1cGZyb250XG5cdFx0XHR2YXIgaW1hZ2VzID0gdG9BcnJheSggZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdpbWcnICkgKSxcblx0XHRcdFx0aWZyYW1lcyA9IHRvQXJyYXkoIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnaWZyYW1lJyApICk7XG5cblx0XHRcdHZhciBsYXp5TG9hZGFibGUgPSBpbWFnZXMuY29uY2F0KCBpZnJhbWVzICk7XG5cblx0XHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBsYXp5TG9hZGFibGUubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gbGF6eUxvYWRhYmxlW2ldO1xuXHRcdFx0XHRpZiggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApIHtcblx0XHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ3NyYycsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1zcmMnICkgKTtcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjb3JlIGZlYXR1cmVzIHdlIHdvbid0IGJlXG5cdFx0XHQvLyB1c2luZyBKYXZhU2NyaXB0IHRvIGNvbnRyb2wgdGhlIHByZXNlbnRhdGlvblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENhY2hlIHJlZmVyZW5jZXMgdG8ga2V5IERPTSBlbGVtZW50c1xuXHRcdGRvbS53cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5yZXZlYWwnICk7XG5cdFx0ZG9tLnNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucmV2ZWFsIC5zbGlkZXMnICk7XG5cblx0XHQvLyBGb3JjZSBhIGxheW91dCB3aGVuIHRoZSB3aG9sZSBwYWdlLCBpbmNsIGZvbnRzLCBoYXMgbG9hZGVkXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgbGF5b3V0LCBmYWxzZSApO1xuXG5cdFx0dmFyIHF1ZXJ5ID0gUmV2ZWFsLmdldFF1ZXJ5SGFzaCgpO1xuXG5cdFx0Ly8gRG8gbm90IGFjY2VwdCBuZXcgZGVwZW5kZW5jaWVzIHZpYSBxdWVyeSBjb25maWcgdG8gYXZvaWRcblx0XHQvLyB0aGUgcG90ZW50aWFsIG9mIG1hbGljaW91cyBzY3JpcHQgaW5qZWN0aW9uXG5cdFx0aWYoIHR5cGVvZiBxdWVyeVsnZGVwZW5kZW5jaWVzJ10gIT09ICd1bmRlZmluZWQnICkgZGVsZXRlIHF1ZXJ5WydkZXBlbmRlbmNpZXMnXTtcblxuXHRcdC8vIENvcHkgb3B0aW9ucyBvdmVyIHRvIG91ciBjb25maWcgb2JqZWN0XG5cdFx0ZXh0ZW5kKCBjb25maWcsIG9wdGlvbnMgKTtcblx0XHRleHRlbmQoIGNvbmZpZywgcXVlcnkgKTtcblxuXHRcdC8vIEhpZGUgdGhlIGFkZHJlc3MgYmFyIGluIG1vYmlsZSBicm93c2Vyc1xuXHRcdGhpZGVBZGRyZXNzQmFyKCk7XG5cblx0XHQvLyBMb2FkcyB0aGUgZGVwZW5kZW5jaWVzIGFuZCBjb250aW51ZXMgdG8gI3N0YXJ0KCkgb25jZSBkb25lXG5cdFx0bG9hZCgpO1xuXG5cdH1cblxuXHQvKipcblx0ICogSW5zcGVjdCB0aGUgY2xpZW50IHRvIHNlZSB3aGF0IGl0J3MgY2FwYWJsZSBvZiwgdGhpc1xuXHQgKiBzaG91bGQgb25seSBoYXBwZW5zIG9uY2UgcGVyIHJ1bnRpbWUuXG5cdCAqL1xuXHRmdW5jdGlvbiBjaGVja0NhcGFiaWxpdGllcygpIHtcblxuXHRcdGZlYXR1cmVzLnRyYW5zZm9ybXMzZCA9ICdXZWJraXRQZXJzcGVjdGl2ZScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdCdNb3pQZXJzcGVjdGl2ZScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdCdtc1BlcnNwZWN0aXZlJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8XG5cdFx0XHRcdFx0XHRcdFx0J09QZXJzcGVjdGl2ZScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZSB8fFxuXHRcdFx0XHRcdFx0XHRcdCdwZXJzcGVjdGl2ZScgaW4gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuXHRcdGZlYXR1cmVzLnRyYW5zZm9ybXMyZCA9ICdXZWJraXRUcmFuc2Zvcm0nIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgfHxcblx0XHRcdFx0XHRcdFx0XHQnTW96VHJhbnNmb3JtJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8XG5cdFx0XHRcdFx0XHRcdFx0J21zVHJhbnNmb3JtJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlIHx8XG5cdFx0XHRcdFx0XHRcdFx0J09UcmFuc2Zvcm0nIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgfHxcblx0XHRcdFx0XHRcdFx0XHQndHJhbnNmb3JtJyBpbiBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG5cdFx0ZmVhdHVyZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lTWV0aG9kID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cdFx0ZmVhdHVyZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gdHlwZW9mIGZlYXR1cmVzLnJlcXVlc3RBbmltYXRpb25GcmFtZU1ldGhvZCA9PT0gJ2Z1bmN0aW9uJztcblxuXHRcdGZlYXR1cmVzLmNhbnZhcyA9ICEhZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2NhbnZhcycgKS5nZXRDb250ZXh0O1xuXG5cdFx0ZmVhdHVyZXMudG91Y2ggPSAhISggJ29udG91Y2hzdGFydCcgaW4gd2luZG93ICk7XG5cblx0XHQvLyBUcmFuc2l0aW9ucyBpbiB0aGUgb3ZlcnZpZXcgYXJlIGRpc2FibGVkIGluIGRlc2t0b3AgYW5kXG5cdFx0Ly8gbW9iaWxlIFNhZmFyaSBkdWUgdG8gbGFnXG5cdFx0ZmVhdHVyZXMub3ZlcnZpZXdUcmFuc2l0aW9ucyA9ICEvVmVyc2lvblxcL1tcXGRcXC5dKy4qU2FmYXJpLy50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICk7XG5cblx0XHRpc01vYmlsZURldmljZSA9IC8oaXBob25lfGlwb2R8aXBhZHxhbmRyb2lkKS9naS50ZXN0KCBuYXZpZ2F0b3IudXNlckFnZW50ICk7XG5cblx0fVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIGRlcGVuZGVuY2llcyBvZiByZXZlYWwuanMuIERlcGVuZGVuY2llcyBhcmVcbiAgICAgKiBkZWZpbmVkIHZpYSB0aGUgY29uZmlndXJhdGlvbiBvcHRpb24gJ2RlcGVuZGVuY2llcydcbiAgICAgKiBhbmQgd2lsbCBiZSBsb2FkZWQgcHJpb3IgdG8gc3RhcnRpbmcvYmluZGluZyByZXZlYWwuanMuXG4gICAgICogU29tZSBkZXBlbmRlbmNpZXMgbWF5IGhhdmUgYW4gJ2FzeW5jJyBmbGFnLCBpZiBzbyB0aGV5XG4gICAgICogd2lsbCBsb2FkIGFmdGVyIHJldmVhbC5qcyBoYXMgYmVlbiBzdGFydGVkIHVwLlxuICAgICAqL1xuXHRmdW5jdGlvbiBsb2FkKCkge1xuXG5cdFx0dmFyIHNjcmlwdHMgPSBbXSxcblx0XHRcdHNjcmlwdHNBc3luYyA9IFtdLFxuXHRcdFx0c2NyaXB0c1RvUHJlbG9hZCA9IDA7XG5cblx0XHQvLyBDYWxsZWQgb25jZSBzeW5jaHJvbm91cyBzY3JpcHRzIGZpbmlzaCBsb2FkaW5nXG5cdFx0ZnVuY3Rpb24gcHJvY2VlZCgpIHtcblx0XHRcdGlmKCBzY3JpcHRzQXN5bmMubGVuZ3RoICkge1xuXHRcdFx0XHQvLyBMb2FkIGFzeW5jaHJvbm91cyBzY3JpcHRzXG5cdFx0XHRcdGhlYWQuanMuYXBwbHkoIG51bGwsIHNjcmlwdHNBc3luYyApO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGFydCgpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGxvYWRTY3JpcHQoIHMgKSB7XG5cdFx0XHRoZWFkLnJlYWR5KCBzLnNyYy5tYXRjaCggLyhbXFx3XFxkX1xcLV0qKVxcLj9qcyR8W15cXFxcXFwvXSokL2kgKVswXSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIEV4dGVuc2lvbiBtYXkgY29udGFpbiBjYWxsYmFjayBmdW5jdGlvbnNcblx0XHRcdFx0aWYoIHR5cGVvZiBzLmNhbGxiYWNrID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdHMuY2FsbGJhY2suYXBwbHkoIHRoaXMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCAtLXNjcmlwdHNUb1ByZWxvYWQgPT09IDAgKSB7XG5cdFx0XHRcdFx0cHJvY2VlZCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gY29uZmlnLmRlcGVuZGVuY2llcy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdHZhciBzID0gY29uZmlnLmRlcGVuZGVuY2llc1tpXTtcblxuXHRcdFx0Ly8gTG9hZCBpZiB0aGVyZSdzIG5vIGNvbmRpdGlvbiBvciB0aGUgY29uZGl0aW9uIGlzIHRydXRoeVxuXHRcdFx0aWYoICFzLmNvbmRpdGlvbiB8fCBzLmNvbmRpdGlvbigpICkge1xuXHRcdFx0XHRpZiggcy5hc3luYyApIHtcblx0XHRcdFx0XHRzY3JpcHRzQXN5bmMucHVzaCggcy5zcmMgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRzY3JpcHRzLnB1c2goIHMuc3JjICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsb2FkU2NyaXB0KCBzICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoIHNjcmlwdHMubGVuZ3RoICkge1xuXHRcdFx0c2NyaXB0c1RvUHJlbG9hZCA9IHNjcmlwdHMubGVuZ3RoO1xuXG5cdFx0XHQvLyBMb2FkIHN5bmNocm9ub3VzIHNjcmlwdHNcblx0XHRcdGhlYWQuanMuYXBwbHkoIG51bGwsIHNjcmlwdHMgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwcm9jZWVkKCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogU3RhcnRzIHVwIHJldmVhbC5qcyBieSBiaW5kaW5nIGlucHV0IGV2ZW50cyBhbmQgbmF2aWdhdGluZ1xuXHQgKiB0byB0aGUgY3VycmVudCBVUkwgZGVlcGxpbmsgaWYgdGhlcmUgaXMgb25lLlxuXHQgKi9cblx0ZnVuY3Rpb24gc3RhcnQoKSB7XG5cblx0XHQvLyBNYWtlIHN1cmUgd2UndmUgZ290IGFsbCB0aGUgRE9NIGVsZW1lbnRzIHdlIG5lZWRcblx0XHRzZXR1cERPTSgpO1xuXG5cdFx0Ly8gTGlzdGVuIHRvIG1lc3NhZ2VzIHBvc3RlZCB0byB0aGlzIHdpbmRvd1xuXHRcdHNldHVwUG9zdE1lc3NhZ2UoKTtcblxuXHRcdC8vIFByZXZlbnQgaWZyYW1lcyBmcm9tIHNjcm9sbGluZyB0aGUgc2xpZGVzIG91dCBvZiB2aWV3XG5cdFx0c2V0dXBJZnJhbWVTY3JvbGxQcmV2ZW50aW9uKCk7XG5cblx0XHQvLyBSZXNldHMgYWxsIHZlcnRpY2FsIHNsaWRlcyBzbyB0aGF0IG9ubHkgdGhlIGZpcnN0IGlzIHZpc2libGVcblx0XHRyZXNldFZlcnRpY2FsU2xpZGVzKCk7XG5cblx0XHQvLyBVcGRhdGVzIHRoZSBwcmVzZW50YXRpb24gdG8gbWF0Y2ggdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiB2YWx1ZXNcblx0XHRjb25maWd1cmUoKTtcblxuXHRcdC8vIFJlYWQgdGhlIGluaXRpYWwgaGFzaFxuXHRcdHJlYWRVUkwoKTtcblxuXHRcdC8vIFVwZGF0ZSBhbGwgYmFja2dyb3VuZHNcblx0XHR1cGRhdGVCYWNrZ3JvdW5kKCB0cnVlICk7XG5cblx0XHQvLyBOb3RpZnkgbGlzdGVuZXJzIHRoYXQgdGhlIHByZXNlbnRhdGlvbiBpcyByZWFkeSBidXQgdXNlIGEgMW1zXG5cdFx0Ly8gdGltZW91dCB0byBlbnN1cmUgaXQncyBub3QgZmlyZWQgc3luY2hyb25vdXNseSBhZnRlciAjaW5pdGlhbGl6ZSgpXG5cdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBFbmFibGUgdHJhbnNpdGlvbnMgbm93IHRoYXQgd2UncmUgbG9hZGVkXG5cdFx0XHRkb20uc2xpZGVzLmNsYXNzTGlzdC5yZW1vdmUoICduby10cmFuc2l0aW9uJyApO1xuXG5cdFx0XHRsb2FkZWQgPSB0cnVlO1xuXG5cdFx0XHRkaXNwYXRjaEV2ZW50KCAncmVhZHknLCB7XG5cdFx0XHRcdCdpbmRleGgnOiBpbmRleGgsXG5cdFx0XHRcdCdpbmRleHYnOiBpbmRleHYsXG5cdFx0XHRcdCdjdXJyZW50U2xpZGUnOiBjdXJyZW50U2xpZGVcblx0XHRcdH0gKTtcblx0XHR9LCAxICk7XG5cblx0XHQvLyBTcGVjaWFsIHNldHVwIGFuZCBjb25maWcgaXMgcmVxdWlyZWQgd2hlbiBwcmludGluZyB0byBQREZcblx0XHRpZiggaXNQcmludGluZ1BERigpICkge1xuXHRcdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblxuXHRcdFx0Ly8gVGhlIGRvY3VtZW50IG5lZWRzIHRvIGhhdmUgbG9hZGVkIGZvciB0aGUgUERGIGxheW91dFxuXHRcdFx0Ly8gbWVhc3VyZW1lbnRzIHRvIGJlIGFjY3VyYXRlXG5cdFx0XHRpZiggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyApIHtcblx0XHRcdFx0c2V0dXBQREYoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBzZXR1cFBERiApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEZpbmRzIGFuZCBzdG9yZXMgcmVmZXJlbmNlcyB0byBET00gZWxlbWVudHMgd2hpY2ggYXJlXG5cdCAqIHJlcXVpcmVkIGJ5IHRoZSBwcmVzZW50YXRpb24uIElmIGEgcmVxdWlyZWQgZWxlbWVudCBpc1xuXHQgKiBub3QgZm91bmQsIGl0IGlzIGNyZWF0ZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXR1cERPTSgpIHtcblxuXHRcdC8vIFByZXZlbnQgdHJhbnNpdGlvbnMgd2hpbGUgd2UncmUgbG9hZGluZ1xuXHRcdGRvbS5zbGlkZXMuY2xhc3NMaXN0LmFkZCggJ25vLXRyYW5zaXRpb24nICk7XG5cblx0XHQvLyBCYWNrZ3JvdW5kIGVsZW1lbnRcblx0XHRkb20uYmFja2dyb3VuZCA9IGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGRvbS53cmFwcGVyLCAnZGl2JywgJ2JhY2tncm91bmRzJywgbnVsbCApO1xuXG5cdFx0Ly8gUHJvZ3Jlc3MgYmFyXG5cdFx0ZG9tLnByb2dyZXNzID0gY3JlYXRlU2luZ2xldG9uTm9kZSggZG9tLndyYXBwZXIsICdkaXYnLCAncHJvZ3Jlc3MnLCAnPHNwYW4+PC9zcGFuPicgKTtcblx0XHRkb20ucHJvZ3Jlc3NiYXIgPSBkb20ucHJvZ3Jlc3MucXVlcnlTZWxlY3RvciggJ3NwYW4nICk7XG5cblx0XHQvLyBBcnJvdyBjb250cm9sc1xuXHRcdGNyZWF0ZVNpbmdsZXRvbk5vZGUoIGRvbS53cmFwcGVyLCAnYXNpZGUnLCAnY29udHJvbHMnLFxuXHRcdFx0JzxkaXYgY2xhc3M9XCJuYXZpZ2F0ZS1sZWZ0XCI+PC9kaXY+JyArXG5cdFx0XHQnPGRpdiBjbGFzcz1cIm5hdmlnYXRlLXJpZ2h0XCI+PC9kaXY+JyArXG5cdFx0XHQnPGRpdiBjbGFzcz1cIm5hdmlnYXRlLXVwXCI+PC9kaXY+JyArXG5cdFx0XHQnPGRpdiBjbGFzcz1cIm5hdmlnYXRlLWRvd25cIj48L2Rpdj4nICk7XG5cblx0XHQvLyBTbGlkZSBudW1iZXJcblx0XHRkb20uc2xpZGVOdW1iZXIgPSBjcmVhdGVTaW5nbGV0b25Ob2RlKCBkb20ud3JhcHBlciwgJ2RpdicsICdzbGlkZS1udW1iZXInLCAnJyApO1xuXG5cdFx0Ly8gT3ZlcmxheSBncmFwaGljIHdoaWNoIGlzIGRpc3BsYXllZCBkdXJpbmcgdGhlIHBhdXNlZCBtb2RlXG5cdFx0Y3JlYXRlU2luZ2xldG9uTm9kZSggZG9tLndyYXBwZXIsICdkaXYnLCAncGF1c2Utb3ZlcmxheScsIG51bGwgKTtcblxuXHRcdC8vIENhY2hlIHJlZmVyZW5jZXMgdG8gZWxlbWVudHNcblx0XHRkb20uY29udHJvbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnJldmVhbCAuY29udHJvbHMnICk7XG5cdFx0ZG9tLnRoZW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJyN0aGVtZScgKTtcblxuXHRcdGRvbS53cmFwcGVyLnNldEF0dHJpYnV0ZSggJ3JvbGUnLCAnYXBwbGljYXRpb24nICk7XG5cblx0XHQvLyBUaGVyZSBjYW4gYmUgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIGNvbnRyb2xzIHRocm91Z2hvdXQgdGhlIHBhZ2Vcblx0XHRkb20uY29udHJvbHNMZWZ0ID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS1sZWZ0JyApICk7XG5cdFx0ZG9tLmNvbnRyb2xzUmlnaHQgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm5hdmlnYXRlLXJpZ2h0JyApICk7XG5cdFx0ZG9tLmNvbnRyb2xzVXAgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm5hdmlnYXRlLXVwJyApICk7XG5cdFx0ZG9tLmNvbnRyb2xzRG93biA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcubmF2aWdhdGUtZG93bicgKSApO1xuXHRcdGRvbS5jb250cm9sc1ByZXYgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm5hdmlnYXRlLXByZXYnICkgKTtcblx0XHRkb20uY29udHJvbHNOZXh0ID0gdG9BcnJheSggZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5uYXZpZ2F0ZS1uZXh0JyApICk7XG5cblx0XHRkb20uc3RhdHVzRGl2ID0gY3JlYXRlU3RhdHVzRGl2KCk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGhpZGRlbiBkaXYgd2l0aCByb2xlIGFyaWEtbGl2ZSB0byBhbm5vdW5jZSB0aGVcblx0ICogY3VycmVudCBzbGlkZSBjb250ZW50LiBIaWRlIHRoZSBkaXYgb2ZmLXNjcmVlbiB0byBtYWtlIGl0XG5cdCAqIGF2YWlsYWJsZSBvbmx5IHRvIEFzc2lzdGl2ZSBUZWNobm9sb2dpZXMuXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVTdGF0dXNEaXYoKSB7XG5cblx0XHR2YXIgc3RhdHVzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdhcmlhLXN0YXR1cy1kaXYnICk7XG5cdFx0aWYoICFzdGF0dXNEaXYgKSB7XG5cdFx0XHRzdGF0dXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnZGl2JyApO1xuXHRcdFx0c3RhdHVzRGl2LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblx0XHRcdHN0YXR1c0Rpdi5zdHlsZS5oZWlnaHQgPSAnMXB4Jztcblx0XHRcdHN0YXR1c0Rpdi5zdHlsZS53aWR0aCA9ICcxcHgnO1xuXHRcdFx0c3RhdHVzRGl2LnN0eWxlLm92ZXJmbG93ID0naGlkZGVuJztcblx0XHRcdHN0YXR1c0Rpdi5zdHlsZS5jbGlwID0gJ3JlY3QoIDFweCwgMXB4LCAxcHgsIDFweCApJztcblx0XHRcdHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoICdpZCcsICdhcmlhLXN0YXR1cy1kaXYnICk7XG5cdFx0XHRzdGF0dXNEaXYuc2V0QXR0cmlidXRlKCAnYXJpYS1saXZlJywgJ3BvbGl0ZScgKTtcblx0XHRcdHN0YXR1c0Rpdi5zZXRBdHRyaWJ1dGUoICdhcmlhLWF0b21pYycsJ3RydWUnICk7XG5cdFx0XHRkb20ud3JhcHBlci5hcHBlbmRDaGlsZCggc3RhdHVzRGl2ICk7XG5cdFx0fVxuXHRcdHJldHVybiBzdGF0dXNEaXY7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb25maWd1cmVzIHRoZSBwcmVzZW50YXRpb24gZm9yIHByaW50aW5nIHRvIGEgc3RhdGljXG5cdCAqIFBERi5cblx0ICovXG5cdGZ1bmN0aW9uIHNldHVwUERGKCkge1xuXG5cdFx0dmFyIHNsaWRlU2l6ZSA9IGdldENvbXB1dGVkU2xpZGVTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0ICk7XG5cblx0XHQvLyBEaW1lbnNpb25zIG9mIHRoZSBQREYgcGFnZXNcblx0XHR2YXIgcGFnZVdpZHRoID0gTWF0aC5mbG9vciggc2xpZGVTaXplLndpZHRoICogKCAxICsgY29uZmlnLm1hcmdpbiApICksXG5cdFx0XHRwYWdlSGVpZ2h0ID0gTWF0aC5mbG9vciggc2xpZGVTaXplLmhlaWdodCAqICggMSArIGNvbmZpZy5tYXJnaW4gICkgKTtcblxuXHRcdC8vIERpbWVuc2lvbnMgb2Ygc2xpZGVzIHdpdGhpbiB0aGUgcGFnZXNcblx0XHR2YXIgc2xpZGVXaWR0aCA9IHNsaWRlU2l6ZS53aWR0aCxcblx0XHRcdHNsaWRlSGVpZ2h0ID0gc2xpZGVTaXplLmhlaWdodDtcblxuXHRcdC8vIExldCB0aGUgYnJvd3NlciBrbm93IHdoYXQgcGFnZSBzaXplIHdlIHdhbnQgdG8gcHJpbnRcblx0XHRpbmplY3RTdHlsZVNoZWV0KCAnQHBhZ2V7c2l6ZTonKyBwYWdlV2lkdGggKydweCAnKyBwYWdlSGVpZ2h0ICsncHg7IG1hcmdpbjogMDt9JyApO1xuXG5cdFx0Ly8gTGltaXQgdGhlIHNpemUgb2YgY2VydGFpbiBlbGVtZW50cyB0byB0aGUgZGltZW5zaW9ucyBvZiB0aGUgc2xpZGVcblx0XHRpbmplY3RTdHlsZVNoZWV0KCAnLnJldmVhbCBzZWN0aW9uPmltZywgLnJldmVhbCBzZWN0aW9uPnZpZGVvLCAucmV2ZWFsIHNlY3Rpb24+aWZyYW1le21heC13aWR0aDogJysgc2xpZGVXaWR0aCArJ3B4OyBtYXgtaGVpZ2h0OicrIHNsaWRlSGVpZ2h0ICsncHh9JyApO1xuXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAncHJpbnQtcGRmJyApO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSBwYWdlV2lkdGggKyAncHgnO1xuXHRcdGRvY3VtZW50LmJvZHkuc3R5bGUuaGVpZ2h0ID0gcGFnZUhlaWdodCArICdweCc7XG5cblx0XHQvLyBTbGlkZSBhbmQgc2xpZGUgYmFja2dyb3VuZCBsYXlvdXRcblx0XHR0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZSApIHtcblxuXHRcdFx0Ly8gVmVydGljYWwgc3RhY2tzIGFyZSBub3QgY2VudHJlZCBzaW5jZSB0aGVpciBzZWN0aW9uXG5cdFx0XHQvLyBjaGlsZHJlbiB3aWxsIGJlXG5cdFx0XHRpZiggc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3RhY2snICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHQvLyBDZW50ZXIgdGhlIHNsaWRlIGluc2lkZSBvZiB0aGUgcGFnZSwgZ2l2aW5nIHRoZSBzbGlkZSBzb21lIG1hcmdpblxuXHRcdFx0XHR2YXIgbGVmdCA9ICggcGFnZVdpZHRoIC0gc2xpZGVXaWR0aCApIC8gMixcblx0XHRcdFx0XHR0b3AgPSAoIHBhZ2VIZWlnaHQgLSBzbGlkZUhlaWdodCApIC8gMjtcblxuXHRcdFx0XHR2YXIgY29udGVudEhlaWdodCA9IGdldEFic29sdXRlSGVpZ2h0KCBzbGlkZSApO1xuXHRcdFx0XHR2YXIgbnVtYmVyT2ZQYWdlcyA9IE1hdGgubWF4KCBNYXRoLmNlaWwoIGNvbnRlbnRIZWlnaHQgLyBwYWdlSGVpZ2h0ICksIDEgKTtcblxuXHRcdFx0XHQvLyBDZW50ZXIgc2xpZGVzIHZlcnRpY2FsbHlcblx0XHRcdFx0aWYoIG51bWJlck9mUGFnZXMgPT09IDEgJiYgY29uZmlnLmNlbnRlciB8fCBzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdjZW50ZXInICkgKSB7XG5cdFx0XHRcdFx0dG9wID0gTWF0aC5tYXgoICggcGFnZUhlaWdodCAtIGNvbnRlbnRIZWlnaHQgKSAvIDIsIDAgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFBvc2l0aW9uIHRoZSBzbGlkZSBpbnNpZGUgb2YgdGhlIHBhZ2Vcblx0XHRcdFx0c2xpZGUuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuXHRcdFx0XHRzbGlkZS5zdHlsZS50b3AgPSB0b3AgKyAncHgnO1xuXHRcdFx0XHRzbGlkZS5zdHlsZS53aWR0aCA9IHNsaWRlV2lkdGggKyAncHgnO1xuXG5cdFx0XHRcdC8vIFRPRE8gQmFja2dyb3VuZHMgbmVlZCB0byBiZSBtdWx0aXBsaWVkIHdoZW4gdGhlIHNsaWRlXG5cdFx0XHRcdC8vIHN0cmV0Y2hlcyBvdmVyIG11bHRpcGxlIHBhZ2VzXG5cdFx0XHRcdHZhciBiYWNrZ3JvdW5kID0gc2xpZGUucXVlcnlTZWxlY3RvciggJy5zbGlkZS1iYWNrZ3JvdW5kJyApO1xuXHRcdFx0XHRpZiggYmFja2dyb3VuZCApIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLnN0eWxlLndpZHRoID0gcGFnZVdpZHRoICsgJ3B4Jztcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLnN0eWxlLmhlaWdodCA9ICggcGFnZUhlaWdodCAqIG51bWJlck9mUGFnZXMgKSArICdweCc7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC5zdHlsZS50b3AgPSAtdG9wICsgJ3B4Jztcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLnN0eWxlLmxlZnQgPSAtbGVmdCArICdweCc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0gKTtcblxuXHRcdC8vIFNob3cgYWxsIGZyYWdtZW50c1xuXHRcdHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiArICcgLmZyYWdtZW50JyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGZyYWdtZW50ICkge1xuXHRcdFx0ZnJhZ21lbnQuY2xhc3NMaXN0LmFkZCggJ3Zpc2libGUnICk7XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBpcyBhbiB1bmZvcnR1bmF0ZSBuZWNlc3NpdHkuIElmcmFtZXMgY2FuIHRyaWdnZXIgdGhlXG5cdCAqIHBhcmVudCB3aW5kb3cgdG8gc2Nyb2xsLCBmb3IgZXhhbXBsZSBieSBmb2N1c2luZyBhbiBpbnB1dC5cblx0ICogVGhpcyBzY3JvbGxpbmcgY2FuIG5vdCBiZSBwcmV2ZW50ZWQgYnkgaGlkaW5nIG92ZXJmbG93IGluXG5cdCAqIENTUyBzbyB3ZSBoYXZlIHRvIHJlc29ydCB0byByZXBlYXRlZGx5IGNoZWNraW5nIGlmIHRoZVxuXHQgKiBicm93c2VyIGhhcyBkZWNpZGVkIHRvIG9mZnNldCBvdXIgc2xpZGVzIDooXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXR1cElmcmFtZVNjcm9sbFByZXZlbnRpb24oKSB7XG5cblx0XHRpZiggZG9tLnNsaWRlcy5xdWVyeVNlbGVjdG9yKCAnaWZyYW1lJyApICkge1xuXHRcdFx0c2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiggZG9tLndyYXBwZXIuc2Nyb2xsVG9wICE9PSAwIHx8IGRvbS53cmFwcGVyLnNjcm9sbExlZnQgIT09IDAgKSB7XG5cdFx0XHRcdFx0ZG9tLndyYXBwZXIuc2Nyb2xsVG9wID0gMDtcblx0XHRcdFx0XHRkb20ud3JhcHBlci5zY3JvbGxMZWZ0ID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0fSwgNTAwICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhbiBIVE1MIGVsZW1lbnQgYW5kIHJldHVybnMgYSByZWZlcmVuY2UgdG8gaXQuXG5cdCAqIElmIHRoZSBlbGVtZW50IGFscmVhZHkgZXhpc3RzIHRoZSBleGlzdGluZyBpbnN0YW5jZSB3aWxsXG5cdCAqIGJlIHJldHVybmVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlU2luZ2xldG9uTm9kZSggY29udGFpbmVyLCB0YWduYW1lLCBjbGFzc25hbWUsIGlubmVySFRNTCApIHtcblxuXHRcdC8vIEZpbmQgYWxsIG5vZGVzIG1hdGNoaW5nIHRoZSBkZXNjcmlwdGlvblxuXHRcdHZhciBub2RlcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCAnLicgKyBjbGFzc25hbWUgKTtcblxuXHRcdC8vIENoZWNrIGFsbCBtYXRjaGVzIHRvIGZpbmQgb25lIHdoaWNoIGlzIGEgZGlyZWN0IGNoaWxkIG9mXG5cdFx0Ly8gdGhlIHNwZWNpZmllZCBjb250YWluZXJcblx0XHRmb3IoIHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0dmFyIHRlc3ROb2RlID0gbm9kZXNbaV07XG5cdFx0XHRpZiggdGVzdE5vZGUucGFyZW50Tm9kZSA9PT0gY29udGFpbmVyICkge1xuXHRcdFx0XHRyZXR1cm4gdGVzdE5vZGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgbm8gbm9kZSB3YXMgZm91bmQsIGNyZWF0ZSBpdCBub3dcblx0XHR2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIHRhZ25hbWUgKTtcblx0XHRub2RlLmNsYXNzTGlzdC5hZGQoIGNsYXNzbmFtZSApO1xuXHRcdGlmKCB0eXBlb2YgaW5uZXJIVE1MID09PSAnc3RyaW5nJyApIHtcblx0XHRcdG5vZGUuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXHRcdH1cblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIG5vZGUgKTtcblxuXHRcdHJldHVybiBub2RlO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgc2xpZGUgYmFja2dyb3VuZCBlbGVtZW50cyBhbmQgYXBwZW5kcyB0aGVtXG5cdCAqIHRvIHRoZSBiYWNrZ3JvdW5kIGNvbnRhaW5lci4gT25lIGVsZW1lbnQgaXMgY3JlYXRlZCBwZXJcblx0ICogc2xpZGUgbm8gbWF0dGVyIGlmIHRoZSBnaXZlbiBzbGlkZSBoYXMgdmlzaWJsZSBiYWNrZ3JvdW5kLlxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlQmFja2dyb3VuZHMoKSB7XG5cblx0XHR2YXIgcHJpbnRNb2RlID0gaXNQcmludGluZ1BERigpO1xuXG5cdFx0Ly8gQ2xlYXIgcHJpb3IgYmFja2dyb3VuZHNcblx0XHRkb20uYmFja2dyb3VuZC5pbm5lckhUTUwgPSAnJztcblx0XHRkb20uYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCAnbm8tdHJhbnNpdGlvbicgKTtcblxuXHRcdC8vIEl0ZXJhdGUgb3ZlciBhbGwgaG9yaXpvbnRhbCBzbGlkZXNcblx0XHR0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApICkuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlaCApIHtcblxuXHRcdFx0dmFyIGJhY2tncm91bmRTdGFjaztcblxuXHRcdFx0aWYoIHByaW50TW9kZSApIHtcblx0XHRcdFx0YmFja2dyb3VuZFN0YWNrID0gY3JlYXRlQmFja2dyb3VuZCggc2xpZGVoLCBzbGlkZWggKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRiYWNrZ3JvdW5kU3RhY2sgPSBjcmVhdGVCYWNrZ3JvdW5kKCBzbGlkZWgsIGRvbS5iYWNrZ3JvdW5kICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEl0ZXJhdGUgb3ZlciBhbGwgdmVydGljYWwgc2xpZGVzXG5cdFx0XHR0b0FycmF5KCBzbGlkZWgucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc2xpZGV2ICkge1xuXG5cdFx0XHRcdGlmKCBwcmludE1vZGUgKSB7XG5cdFx0XHRcdFx0Y3JlYXRlQmFja2dyb3VuZCggc2xpZGV2LCBzbGlkZXYgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRjcmVhdGVCYWNrZ3JvdW5kKCBzbGlkZXYsIGJhY2tncm91bmRTdGFjayApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YmFja2dyb3VuZFN0YWNrLmNsYXNzTGlzdC5hZGQoICdzdGFjaycgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdFx0Ly8gQWRkIHBhcmFsbGF4IGJhY2tncm91bmQgaWYgc3BlY2lmaWVkXG5cdFx0aWYoIGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRJbWFnZSApIHtcblxuXHRcdFx0ZG9tLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcIicgKyBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kSW1hZ2UgKyAnXCIpJztcblx0XHRcdGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRTaXplID0gY29uZmlnLnBhcmFsbGF4QmFja2dyb3VuZFNpemU7XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB0aGUgYmVsb3cgcHJvcGVydGllcyBhcmUgc2V0IG9uIHRoZSBlbGVtZW50IC0gdGhlc2UgcHJvcGVydGllcyBhcmVcblx0XHRcdC8vIG5lZWRlZCBmb3IgcHJvcGVyIHRyYW5zaXRpb25zIHRvIGJlIHNldCBvbiB0aGUgZWxlbWVudCB2aWEgQ1NTLiBUbyByZW1vdmVcblx0XHRcdC8vIGFubm95aW5nIGJhY2tncm91bmQgc2xpZGUtaW4gZWZmZWN0IHdoZW4gdGhlIHByZXNlbnRhdGlvbiBzdGFydHMsIGFwcGx5XG5cdFx0XHQvLyB0aGVzZSBwcm9wZXJ0aWVzIGFmdGVyIHNob3J0IHRpbWUgZGVsYXlcblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnaGFzLXBhcmFsbGF4LWJhY2tncm91bmQnICk7XG5cdFx0XHR9LCAxICk7XG5cblx0XHR9XG5cdFx0ZWxzZSB7XG5cblx0XHRcdGRvbS5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggJ2hhcy1wYXJhbGxheC1iYWNrZ3JvdW5kJyApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIGJhY2tncm91bmQgZm9yIHRoZSBnaXZlbiBzbGlkZS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2xpZGVcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIFRoZSBlbGVtZW50IHRoYXQgdGhlIGJhY2tncm91bmRcblx0ICogc2hvdWxkIGJlIGFwcGVuZGVkIHRvXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVCYWNrZ3JvdW5kKCBzbGlkZSwgY29udGFpbmVyICkge1xuXG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRiYWNrZ3JvdW5kOiBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQnICksXG5cdFx0XHRiYWNrZ3JvdW5kU2l6ZTogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXNpemUnICksXG5cdFx0XHRiYWNrZ3JvdW5kSW1hZ2U6IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pbWFnZScgKSxcblx0XHRcdGJhY2tncm91bmRWaWRlbzogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXZpZGVvJyApLFxuXHRcdFx0YmFja2dyb3VuZElmcmFtZTogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWlmcmFtZScgKSxcblx0XHRcdGJhY2tncm91bmRDb2xvcjogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWNvbG9yJyApLFxuXHRcdFx0YmFja2dyb3VuZFJlcGVhdDogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXJlcGVhdCcgKSxcblx0XHRcdGJhY2tncm91bmRQb3NpdGlvbjogc2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLXBvc2l0aW9uJyApLFxuXHRcdFx0YmFja2dyb3VuZFRyYW5zaXRpb246IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uJyApXG5cdFx0fTtcblxuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2RpdicgKTtcblxuXHRcdC8vIENhcnJ5IG92ZXIgY3VzdG9tIGNsYXNzZXMgZnJvbSB0aGUgc2xpZGUgdG8gdGhlIGJhY2tncm91bmRcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9ICdzbGlkZS1iYWNrZ3JvdW5kICcgKyBzbGlkZS5jbGFzc05hbWUucmVwbGFjZSggL3ByZXNlbnR8cGFzdHxmdXR1cmUvLCAnJyApO1xuXG5cdFx0aWYoIGRhdGEuYmFja2dyb3VuZCApIHtcblx0XHRcdC8vIEF1dG8td3JhcCBpbWFnZSB1cmxzIGluIHVybCguLi4pXG5cdFx0XHRpZiggL14oaHR0cHxmaWxlfFxcL1xcLykvZ2kudGVzdCggZGF0YS5iYWNrZ3JvdW5kICkgfHwgL1xcLihzdmd8cG5nfGpwZ3xqcGVnfGdpZnxibXApJC9naS50ZXN0KCBkYXRhLmJhY2tncm91bmQgKSApIHtcblx0XHRcdFx0c2xpZGUuc2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWltYWdlJywgZGF0YS5iYWNrZ3JvdW5kICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gZGF0YS5iYWNrZ3JvdW5kO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENyZWF0ZSBhIGhhc2ggZm9yIHRoaXMgY29tYmluYXRpb24gb2YgYmFja2dyb3VuZCBzZXR0aW5ncy5cblx0XHQvLyBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZW4gdHdvIHNsaWRlIGJhY2tncm91bmRzIGFyZVxuXHRcdC8vIHRoZSBzYW1lLlxuXHRcdGlmKCBkYXRhLmJhY2tncm91bmQgfHwgZGF0YS5iYWNrZ3JvdW5kQ29sb3IgfHwgZGF0YS5iYWNrZ3JvdW5kSW1hZ2UgfHwgZGF0YS5iYWNrZ3JvdW5kVmlkZW8gfHwgZGF0YS5iYWNrZ3JvdW5kSWZyYW1lICkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaGFzaCcsIGRhdGEuYmFja2dyb3VuZCArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmJhY2tncm91bmRTaXplICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuYmFja2dyb3VuZEltYWdlICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuYmFja2dyb3VuZFZpZGVvICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGEuYmFja2dyb3VuZElmcmFtZSArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmJhY2tncm91bmRDb2xvciArXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhLmJhY2tncm91bmRSZXBlYXQgK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5iYWNrZ3JvdW5kUG9zaXRpb24gK1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS5iYWNrZ3JvdW5kVHJhbnNpdGlvbiApO1xuXHRcdH1cblxuXHRcdC8vIEFkZGl0aW9uYWwgYW5kIG9wdGlvbmFsIGJhY2tncm91bmQgcHJvcGVydGllc1xuXHRcdGlmKCBkYXRhLmJhY2tncm91bmRTaXplICkgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IGRhdGEuYmFja2dyb3VuZFNpemU7XG5cdFx0aWYoIGRhdGEuYmFja2dyb3VuZENvbG9yICkgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXRhLmJhY2tncm91bmRDb2xvcjtcblx0XHRpZiggZGF0YS5iYWNrZ3JvdW5kUmVwZWF0ICkgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gZGF0YS5iYWNrZ3JvdW5kUmVwZWF0O1xuXHRcdGlmKCBkYXRhLmJhY2tncm91bmRQb3NpdGlvbiApIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gZGF0YS5iYWNrZ3JvdW5kUG9zaXRpb247XG5cdFx0aWYoIGRhdGEuYmFja2dyb3VuZFRyYW5zaXRpb24gKSBlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uJywgZGF0YS5iYWNrZ3JvdW5kVHJhbnNpdGlvbiApO1xuXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBlbGVtZW50ICk7XG5cblx0XHQvLyBJZiBiYWNrZ3JvdW5kcyBhcmUgYmVpbmcgcmVjcmVhdGVkLCBjbGVhciBvbGQgY2xhc3Nlc1xuXHRcdHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtZGFyay1iYWNrZ3JvdW5kJyApO1xuXHRcdHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoICdoYXMtbGlnaHQtYmFja2dyb3VuZCcgKTtcblxuXHRcdC8vIElmIHRoaXMgc2xpZGUgaGFzIGEgYmFja2dyb3VuZCBjb2xvciwgYWRkIGEgY2xhc3MgdGhhdFxuXHRcdC8vIHNpZ25hbHMgaWYgaXQgaXMgbGlnaHQgb3IgZGFyay4gSWYgdGhlIHNsaWRlIGhhcyBubyBiYWNrZ3JvdW5kXG5cdFx0Ly8gY29sb3IsIG5vIGNsYXNzIHdpbGwgYmUgc2V0XG5cdFx0dmFyIGNvbXB1dGVkQmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGVsZW1lbnQgKS5iYWNrZ3JvdW5kQ29sb3I7XG5cdFx0aWYoIGNvbXB1dGVkQmFja2dyb3VuZENvbG9yICkge1xuXHRcdFx0dmFyIHJnYiA9IGNvbG9yVG9SZ2IoIGNvbXB1dGVkQmFja2dyb3VuZENvbG9yICk7XG5cblx0XHRcdC8vIElnbm9yZSBmdWxseSB0cmFuc3BhcmVudCBiYWNrZ3JvdW5kcy4gU29tZSBicm93c2VycyByZXR1cm5cblx0XHRcdC8vIHJnYmEoMCwwLDAsMCkgd2hlbiByZWFkaW5nIHRoZSBjb21wdXRlZCBiYWNrZ3JvdW5kIGNvbG9yIG9mXG5cdFx0XHQvLyBhbiBlbGVtZW50IHdpdGggbm8gYmFja2dyb3VuZFxuXHRcdFx0aWYoIHJnYiAmJiByZ2IuYSAhPT0gMCApIHtcblx0XHRcdFx0aWYoIGNvbG9yQnJpZ2h0bmVzcyggY29tcHV0ZWRCYWNrZ3JvdW5kQ29sb3IgKSA8IDEyOCApIHtcblx0XHRcdFx0XHRzbGlkZS5jbGFzc0xpc3QuYWRkKCAnaGFzLWRhcmstYmFja2dyb3VuZCcgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRzbGlkZS5jbGFzc0xpc3QuYWRkKCAnaGFzLWxpZ2h0LWJhY2tncm91bmQnICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZWxlbWVudDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGxpc3RlbmVyIHRvIHBvc3RNZXNzYWdlIGV2ZW50cywgdGhpcyBtYWtlcyBpdFxuXHQgKiBwb3NzaWJsZSB0byBjYWxsIGFsbCByZXZlYWwuanMgQVBJIG1ldGhvZHMgZnJvbSBhbm90aGVyXG5cdCAqIHdpbmRvdy4gRm9yIGV4YW1wbGU6XG5cdCAqXG5cdCAqIHJldmVhbFdpbmRvdy5wb3N0TWVzc2FnZSggSlNPTi5zdHJpbmdpZnkoe1xuXHQgKiAgIG1ldGhvZDogJ3NsaWRlJyxcblx0ICogICBhcmdzOiBbIDIgXVxuXHQgKiB9KSwgJyonICk7XG5cdCAqL1xuXHRmdW5jdGlvbiBzZXR1cFBvc3RNZXNzYWdlKCkge1xuXG5cdFx0aWYoIGNvbmZpZy5wb3N0TWVzc2FnZSApIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnbWVzc2FnZScsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cdFx0XHRcdHZhciBkYXRhID0gZXZlbnQuZGF0YTtcblxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgd2UncmUgZGVhbGluZyB3aXRoIEpTT05cblx0XHRcdFx0aWYoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyAmJiBkYXRhLmNoYXJBdCggMCApID09PSAneycgJiYgZGF0YS5jaGFyQXQoIGRhdGEubGVuZ3RoIC0gMSApID09PSAnfScgKSB7XG5cdFx0XHRcdFx0ZGF0YSA9IEpTT04ucGFyc2UoIGRhdGEgKTtcblxuXHRcdFx0XHRcdC8vIENoZWNrIGlmIHRoZSByZXF1ZXN0ZWQgbWV0aG9kIGNhbiBiZSBmb3VuZFxuXHRcdFx0XHRcdGlmKCBkYXRhLm1ldGhvZCAmJiB0eXBlb2YgUmV2ZWFsW2RhdGEubWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRcdFJldmVhbFtkYXRhLm1ldGhvZF0uYXBwbHkoIFJldmVhbCwgZGF0YS5hcmdzICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LCBmYWxzZSApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgdGhlIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgZnJvbSB0aGUgY29uZmlnXG5cdCAqIG9iamVjdC4gTWF5IGJlIGNhbGxlZCBtdWx0aXBsZSB0aW1lcy5cblx0ICovXG5cdGZ1bmN0aW9uIGNvbmZpZ3VyZSggb3B0aW9ucyApIHtcblxuXHRcdHZhciBudW1iZXJPZlNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiApLmxlbmd0aDtcblxuXHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoIGNvbmZpZy50cmFuc2l0aW9uICk7XG5cblx0XHQvLyBOZXcgY29uZmlnIG9wdGlvbnMgbWF5IGJlIHBhc3NlZCB3aGVuIHRoaXMgbWV0aG9kXG5cdFx0Ly8gaXMgaW52b2tlZCB0aHJvdWdoIHRoZSBBUEkgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cblx0XHRpZiggdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnICkgZXh0ZW5kKCBjb25maWcsIG9wdGlvbnMgKTtcblxuXHRcdC8vIEZvcmNlIGxpbmVhciB0cmFuc2l0aW9uIGJhc2VkIG9uIGJyb3dzZXIgY2FwYWJpbGl0aWVzXG5cdFx0aWYoIGZlYXR1cmVzLnRyYW5zZm9ybXMzZCA9PT0gZmFsc2UgKSBjb25maWcudHJhbnNpdGlvbiA9ICdsaW5lYXInO1xuXG5cdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggY29uZmlnLnRyYW5zaXRpb24gKTtcblxuXHRcdGRvbS53cmFwcGVyLnNldEF0dHJpYnV0ZSggJ2RhdGEtdHJhbnNpdGlvbi1zcGVlZCcsIGNvbmZpZy50cmFuc2l0aW9uU3BlZWQgKTtcblx0XHRkb20ud3JhcHBlci5zZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbicsIGNvbmZpZy5iYWNrZ3JvdW5kVHJhbnNpdGlvbiApO1xuXG5cdFx0ZG9tLmNvbnRyb2xzLnN0eWxlLmRpc3BsYXkgPSBjb25maWcuY29udHJvbHMgPyAnYmxvY2snIDogJ25vbmUnO1xuXHRcdGRvbS5wcm9ncmVzcy5zdHlsZS5kaXNwbGF5ID0gY29uZmlnLnByb2dyZXNzID8gJ2Jsb2NrJyA6ICdub25lJztcblxuXHRcdGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ3J0bCcgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAncnRsJyApO1xuXHRcdH1cblxuXHRcdGlmKCBjb25maWcuY2VudGVyICkge1xuXHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ2NlbnRlcicgKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnY2VudGVyJyApO1xuXHRcdH1cblxuXHRcdC8vIEV4aXQgdGhlIHBhdXNlZCBtb2RlIGlmIGl0IHdhcyBjb25maWd1cmVkIG9mZlxuXHRcdGlmKCBjb25maWcucGF1c2UgPT09IGZhbHNlICkge1xuXHRcdFx0cmVzdW1lKCk7XG5cdFx0fVxuXG5cdFx0aWYoIGNvbmZpZy5tb3VzZVdoZWVsICkge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Eb2N1bWVudE1vdXNlU2Nyb2xsLCBmYWxzZSApOyAvLyBGRlxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbkRvY3VtZW50TW91c2VTY3JvbGwsIGZhbHNlICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ0RPTU1vdXNlU2Nyb2xsJywgb25Eb2N1bWVudE1vdXNlU2Nyb2xsLCBmYWxzZSApOyAvLyBGRlxuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBvbkRvY3VtZW50TW91c2VTY3JvbGwsIGZhbHNlICk7XG5cdFx0fVxuXG5cdFx0Ly8gUm9sbGluZyAzRCBsaW5rc1xuXHRcdGlmKCBjb25maWcucm9sbGluZ0xpbmtzICkge1xuXHRcdFx0ZW5hYmxlUm9sbGluZ0xpbmtzKCk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZGlzYWJsZVJvbGxpbmdMaW5rcygpO1xuXHRcdH1cblxuXHRcdC8vIElmcmFtZSBsaW5rIHByZXZpZXdzXG5cdFx0aWYoIGNvbmZpZy5wcmV2aWV3TGlua3MgKSB7XG5cdFx0XHRlbmFibGVQcmV2aWV3TGlua3MoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRkaXNhYmxlUHJldmlld0xpbmtzKCk7XG5cdFx0XHRlbmFibGVQcmV2aWV3TGlua3MoICdbZGF0YS1wcmV2aWV3LWxpbmtdJyApO1xuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBleGlzdGluZyBhdXRvLXNsaWRlIGNvbnRyb2xzXG5cdFx0aWYoIGF1dG9TbGlkZVBsYXllciApIHtcblx0XHRcdGF1dG9TbGlkZVBsYXllci5kZXN0cm95KCk7XG5cdFx0XHRhdXRvU2xpZGVQbGF5ZXIgPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGF1dG8tc2xpZGUgY29udHJvbHMgaWYgbmVlZGVkXG5cdFx0aWYoIG51bWJlck9mU2xpZGVzID4gMSAmJiBjb25maWcuYXV0b1NsaWRlICYmIGNvbmZpZy5hdXRvU2xpZGVTdG9wcGFibGUgJiYgZmVhdHVyZXMuY2FudmFzICYmIGZlYXR1cmVzLnJlcXVlc3RBbmltYXRpb25GcmFtZSApIHtcblx0XHRcdGF1dG9TbGlkZVBsYXllciA9IG5ldyBQbGF5YmFjayggZG9tLndyYXBwZXIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gTWF0aC5taW4oIE1hdGgubWF4KCAoIERhdGUubm93KCkgLSBhdXRvU2xpZGVTdGFydFRpbWUgKSAvIGF1dG9TbGlkZSwgMCApLCAxICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdGF1dG9TbGlkZVBsYXllci5vbiggJ2NsaWNrJywgb25BdXRvU2xpZGVQbGF5ZXJDbGljayApO1xuXHRcdFx0YXV0b1NsaWRlUGF1c2VkID0gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gV2hlbiBmcmFnbWVudHMgYXJlIHR1cm5lZCBvZmYgdGhleSBzaG91bGQgYmUgdmlzaWJsZVxuXHRcdGlmKCBjb25maWcuZnJhZ21lbnRzID09PSBmYWxzZSApIHtcblx0XHRcdHRvQXJyYXkoIGRvbS5zbGlkZXMucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJyApO1xuXHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdjdXJyZW50LWZyYWdtZW50JyApO1xuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHN5bmMoKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEJpbmRzIGFsbCBldmVudCBsaXN0ZW5lcnMuXG5cdCAqL1xuXHRmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcblxuXHRcdGV2ZW50c0FyZUJvdW5kID0gdHJ1ZTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnaGFzaGNoYW5nZScsIG9uV2luZG93SGFzaENoYW5nZSwgZmFsc2UgKTtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggJ3Jlc2l6ZScsIG9uV2luZG93UmVzaXplLCBmYWxzZSApO1xuXG5cdFx0aWYoIGNvbmZpZy50b3VjaCApIHtcblx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSApO1xuXHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydCBwb2ludGVyLXN0eWxlIHRvdWNoIGludGVyYWN0aW9uIGFzIHdlbGxcblx0XHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkICkge1xuXHRcdFx0XHQvLyBJRSAxMSB1c2VzIHVuLXByZWZpeGVkIHZlcnNpb24gb2YgcG9pbnRlciBldmVudHNcblx0XHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcblx0XHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJtb3ZlJywgb25Qb2ludGVyTW92ZSwgZmFsc2UgKTtcblx0XHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJ1cCcsIG9uUG9pbnRlclVwLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkICkge1xuXHRcdFx0XHQvLyBJRSAxMCB1c2VzIHByZWZpeGVkIHZlcnNpb24gb2YgcG9pbnRlciBldmVudHNcblx0XHRcdFx0ZG9tLndyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ01TUG9pbnRlckRvd24nLCBvblBvaW50ZXJEb3duLCBmYWxzZSApO1xuXHRcdFx0XHRkb20ud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyTW92ZScsIG9uUG9pbnRlck1vdmUsIGZhbHNlICk7XG5cdFx0XHRcdGRvbS53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoICdNU1BvaW50ZXJVcCcsIG9uUG9pbnRlclVwLCBmYWxzZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCBjb25maWcua2V5Ym9hcmQgKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uRG9jdW1lbnRLZXlEb3duLCBmYWxzZSApO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2tleXByZXNzJywgb25Eb2N1bWVudEtleVByZXNzLCBmYWxzZSApO1xuXHRcdH1cblxuXHRcdGlmKCBjb25maWcucHJvZ3Jlc3MgJiYgZG9tLnByb2dyZXNzICkge1xuXHRcdFx0ZG9tLnByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIG9uUHJvZ3Jlc3NDbGlja2VkLCBmYWxzZSApO1xuXHRcdH1cblxuXHRcdGlmKCBjb25maWcuZm9jdXNCb2R5T25QYWdlVmlzaWJpbGl0eUNoYW5nZSApIHtcblx0XHRcdHZhciB2aXNpYmlsaXR5Q2hhbmdlO1xuXG5cdFx0XHRpZiggJ2hpZGRlbicgaW4gZG9jdW1lbnQgKSB7XG5cdFx0XHRcdHZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKCAnbXNIaWRkZW4nIGluIGRvY3VtZW50ICkge1xuXHRcdFx0XHR2aXNpYmlsaXR5Q2hhbmdlID0gJ21zdmlzaWJpbGl0eWNoYW5nZSc7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKCAnd2Via2l0SGlkZGVuJyBpbiBkb2N1bWVudCApIHtcblx0XHRcdFx0dmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcblx0XHRcdH1cblxuXHRcdFx0aWYoIHZpc2liaWxpdHlDaGFuZ2UgKSB7XG5cdFx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIHZpc2liaWxpdHlDaGFuZ2UsIG9uUGFnZVZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTGlzdGVuIHRvIGJvdGggdG91Y2ggYW5kIGNsaWNrIGV2ZW50cywgaW4gY2FzZSB0aGUgZGV2aWNlXG5cdFx0Ly8gc3VwcG9ydHMgYm90aFxuXHRcdHZhciBwb2ludGVyRXZlbnRzID0gWyAndG91Y2hzdGFydCcsICdjbGljaycgXTtcblxuXHRcdC8vIE9ubHkgc3VwcG9ydCB0b3VjaCBmb3IgQW5kcm9pZCwgZml4ZXMgZG91YmxlIG5hdmlnYXRpb25zIGluXG5cdFx0Ly8gc3RvY2sgYnJvd3NlclxuXHRcdGlmKCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKCAvYW5kcm9pZC9naSApICkge1xuXHRcdFx0cG9pbnRlckV2ZW50cyA9IFsgJ3RvdWNoc3RhcnQnIF07XG5cdFx0fVxuXG5cdFx0cG9pbnRlckV2ZW50cy5mb3JFYWNoKCBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuXHRcdFx0ZG9tLmNvbnRyb2xzTGVmdC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZUxlZnRDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNSaWdodC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZVJpZ2h0Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzVXAuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVVcENsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc0Rvd24uZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5hZGRFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVEb3duQ2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzUHJldi5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmFkZEV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZVByZXZDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNOZXh0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuYWRkRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlTmV4dENsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVbmJpbmRzIGFsbCBldmVudCBsaXN0ZW5lcnMuXG5cdCAqL1xuXHRmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVycygpIHtcblxuXHRcdGV2ZW50c0FyZUJvdW5kID0gZmFsc2U7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCAna2V5ZG93bicsIG9uRG9jdW1lbnRLZXlEb3duLCBmYWxzZSApO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdrZXlwcmVzcycsIG9uRG9jdW1lbnRLZXlQcmVzcywgZmFsc2UgKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2hhc2hjaGFuZ2UnLCBvbldpbmRvd0hhc2hDaGFuZ2UsIGZhbHNlICk7XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoICdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UgKTtcblxuXHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSApO1xuXHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UgKTtcblx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSApO1xuXG5cdFx0Ly8gSUUxMVxuXHRcdGlmKCB3aW5kb3cubmF2aWdhdG9yLnBvaW50ZXJFbmFibGVkICkge1xuXHRcdFx0ZG9tLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ3BvaW50ZXJkb3duJywgb25Qb2ludGVyRG93biwgZmFsc2UgKTtcblx0XHRcdGRvbS53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdwb2ludGVybW92ZScsIG9uUG9pbnRlck1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAncG9pbnRlcnVwJywgb25Qb2ludGVyVXAsIGZhbHNlICk7XG5cdFx0fVxuXHRcdC8vIElFMTBcblx0XHRlbHNlIGlmKCB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgKSB7XG5cdFx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyRG93bicsIG9uUG9pbnRlckRvd24sIGZhbHNlICk7XG5cdFx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyTW92ZScsIG9uUG9pbnRlck1vdmUsIGZhbHNlICk7XG5cdFx0XHRkb20ud3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCAnTVNQb2ludGVyVXAnLCBvblBvaW50ZXJVcCwgZmFsc2UgKTtcblx0XHR9XG5cblx0XHRpZiAoIGNvbmZpZy5wcm9ncmVzcyAmJiBkb20ucHJvZ3Jlc3MgKSB7XG5cdFx0XHRkb20ucHJvZ3Jlc3MucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb25Qcm9ncmVzc0NsaWNrZWQsIGZhbHNlICk7XG5cdFx0fVxuXG5cdFx0WyAndG91Y2hzdGFydCcsICdjbGljaycgXS5mb3JFYWNoKCBmdW5jdGlvbiggZXZlbnROYW1lICkge1xuXHRcdFx0ZG9tLmNvbnRyb2xzTGVmdC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZUxlZnRDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNSaWdodC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZVJpZ2h0Q2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzVXAuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVVcENsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHRcdGRvbS5jb250cm9sc0Rvd24uZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCBldmVudE5hbWUsIG9uTmF2aWdhdGVEb3duQ2xpY2tlZCwgZmFsc2UgKTsgfSApO1xuXHRcdFx0ZG9tLmNvbnRyb2xzUHJldi5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGV2ZW50TmFtZSwgb25OYXZpZ2F0ZVByZXZDbGlja2VkLCBmYWxzZSApOyB9ICk7XG5cdFx0XHRkb20uY29udHJvbHNOZXh0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciggZXZlbnROYW1lLCBvbk5hdmlnYXRlTmV4dENsaWNrZWQsIGZhbHNlICk7IH0gKTtcblx0XHR9ICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBFeHRlbmQgb2JqZWN0IGEgd2l0aCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cblx0ICogSWYgdGhlcmUncyBhIGNvbmZsaWN0LCBvYmplY3QgYiB0YWtlcyBwcmVjZWRlbmNlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXh0ZW5kKCBhLCBiICkge1xuXG5cdFx0Zm9yKCB2YXIgaSBpbiBiICkge1xuXHRcdFx0YVsgaSBdID0gYlsgaSBdO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIHRoZSB0YXJnZXQgb2JqZWN0IHRvIGFuIGFycmF5LlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9BcnJheSggbyApIHtcblxuXHRcdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggbyApO1xuXG5cdH1cblxuXHQvKipcblx0ICogVXRpbGl0eSBmb3IgZGVzZXJpYWxpemluZyBhIHZhbHVlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZGVzZXJpYWxpemUoIHZhbHVlICkge1xuXG5cdFx0aWYoIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgKSB7XG5cdFx0XHRpZiggdmFsdWUgPT09ICdudWxsJyApIHJldHVybiBudWxsO1xuXHRcdFx0ZWxzZSBpZiggdmFsdWUgPT09ICd0cnVlJyApIHJldHVybiB0cnVlO1xuXHRcdFx0ZWxzZSBpZiggdmFsdWUgPT09ICdmYWxzZScgKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRlbHNlIGlmKCB2YWx1ZS5tYXRjaCggL15cXGQrJC8gKSApIHJldHVybiBwYXJzZUZsb2F0KCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE1lYXN1cmVzIHRoZSBkaXN0YW5jZSBpbiBwaXhlbHMgYmV0d2VlbiBwb2ludCBhXG5cdCAqIGFuZCBwb2ludCBiLlxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gYSBwb2ludCB3aXRoIHgveSBwcm9wZXJ0aWVzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBiIHBvaW50IHdpdGggeC95IHByb3BlcnRpZXNcblx0ICovXG5cdGZ1bmN0aW9uIGRpc3RhbmNlQmV0d2VlbiggYSwgYiApIHtcblxuXHRcdHZhciBkeCA9IGEueCAtIGIueCxcblx0XHRcdGR5ID0gYS55IC0gYi55O1xuXG5cdFx0cmV0dXJuIE1hdGguc3FydCggZHgqZHggKyBkeSpkeSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQXBwbGllcyBhIENTUyB0cmFuc2Zvcm0gdG8gdGhlIHRhcmdldCBlbGVtZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gdHJhbnNmb3JtRWxlbWVudCggZWxlbWVudCwgdHJhbnNmb3JtICkge1xuXG5cdFx0ZWxlbWVudC5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cdFx0ZWxlbWVudC5zdHlsZS5Nb3pUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG5cdFx0ZWxlbWVudC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblx0XHRlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEFwcGxpZXMgQ1NTIHRyYW5zZm9ybXMgdG8gdGhlIHNsaWRlcyBjb250YWluZXIuIFRoZSBjb250YWluZXJcblx0ICogaXMgdHJhbnNmb3JtZWQgZnJvbSB0d28gc2VwYXJhdGUgc291cmNlczogbGF5b3V0IGFuZCB0aGUgb3ZlcnZpZXdcblx0ICogbW9kZS5cblx0ICovXG5cdGZ1bmN0aW9uIHRyYW5zZm9ybVNsaWRlcyggdHJhbnNmb3JtcyApIHtcblxuXHRcdC8vIFBpY2sgdXAgbmV3IHRyYW5zZm9ybXMgZnJvbSBhcmd1bWVudHNcblx0XHRpZiggdHlwZW9mIHRyYW5zZm9ybXMubGF5b3V0ID09PSAnc3RyaW5nJyApIHNsaWRlc1RyYW5zZm9ybS5sYXlvdXQgPSB0cmFuc2Zvcm1zLmxheW91dDtcblx0XHRpZiggdHlwZW9mIHRyYW5zZm9ybXMub3ZlcnZpZXcgPT09ICdzdHJpbmcnICkgc2xpZGVzVHJhbnNmb3JtLm92ZXJ2aWV3ID0gdHJhbnNmb3Jtcy5vdmVydmlldztcblxuXHRcdC8vIEFwcGx5IHRoZSB0cmFuc2Zvcm1zIHRvIHRoZSBzbGlkZXMgY29udGFpbmVyXG5cdFx0aWYoIHNsaWRlc1RyYW5zZm9ybS5sYXlvdXQgKSB7XG5cdFx0XHR0cmFuc2Zvcm1FbGVtZW50KCBkb20uc2xpZGVzLCBzbGlkZXNUcmFuc2Zvcm0ubGF5b3V0ICsgJyAnICsgc2xpZGVzVHJhbnNmb3JtLm92ZXJ2aWV3ICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dHJhbnNmb3JtRWxlbWVudCggZG9tLnNsaWRlcywgc2xpZGVzVHJhbnNmb3JtLm92ZXJ2aWV3ICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSW5qZWN0cyB0aGUgZ2l2ZW4gQ1NTIHN0eWxlcyBpbnRvIHRoZSBET00uXG5cdCAqL1xuXHRmdW5jdGlvbiBpbmplY3RTdHlsZVNoZWV0KCB2YWx1ZSApIHtcblxuXHRcdHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnc3R5bGUnICk7XG5cdFx0dGFnLnR5cGUgPSAndGV4dC9jc3MnO1xuXHRcdGlmKCB0YWcuc3R5bGVTaGVldCApIHtcblx0XHRcdHRhZy5zdHlsZVNoZWV0LmNzc1RleHQgPSB2YWx1ZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0YWcuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCB2YWx1ZSApICk7XG5cdFx0fVxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnaGVhZCcgKVswXS5hcHBlbmRDaGlsZCggdGFnICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB2YXJpb3VzIGNvbG9yIGlucHV0IGZvcm1hdHMgdG8gYW4ge3I6MCxnOjAsYjowfSBvYmplY3QuXG5cdCAqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBUaGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgY29sb3IsXG5cdCAqIHRoZSBmb2xsb3dpbmcgZm9ybWF0cyBhcmUgc3VwcG9ydGVkOlxuXHQgKiAtICMwMDBcblx0ICogLSAjMDAwMDAwXG5cdCAqIC0gcmdiKDAsMCwwKVxuXHQgKi9cblx0ZnVuY3Rpb24gY29sb3JUb1JnYiggY29sb3IgKSB7XG5cblx0XHR2YXIgaGV4MyA9IGNvbG9yLm1hdGNoKCAvXiMoWzAtOWEtZl17M30pJC9pICk7XG5cdFx0aWYoIGhleDMgJiYgaGV4M1sxXSApIHtcblx0XHRcdGhleDMgPSBoZXgzWzFdO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cjogcGFyc2VJbnQoIGhleDMuY2hhckF0KCAwICksIDE2ICkgKiAweDExLFxuXHRcdFx0XHRnOiBwYXJzZUludCggaGV4My5jaGFyQXQoIDEgKSwgMTYgKSAqIDB4MTEsXG5cdFx0XHRcdGI6IHBhcnNlSW50KCBoZXgzLmNoYXJBdCggMiApLCAxNiApICogMHgxMVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR2YXIgaGV4NiA9IGNvbG9yLm1hdGNoKCAvXiMoWzAtOWEtZl17Nn0pJC9pICk7XG5cdFx0aWYoIGhleDYgJiYgaGV4NlsxXSApIHtcblx0XHRcdGhleDYgPSBoZXg2WzFdO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cjogcGFyc2VJbnQoIGhleDYuc3Vic3RyKCAwLCAyICksIDE2ICksXG5cdFx0XHRcdGc6IHBhcnNlSW50KCBoZXg2LnN1YnN0ciggMiwgMiApLCAxNiApLFxuXHRcdFx0XHRiOiBwYXJzZUludCggaGV4Ni5zdWJzdHIoIDQsIDIgKSwgMTYgKVxuXHRcdFx0fTtcblx0XHR9XG5cblx0XHR2YXIgcmdiID0gY29sb3IubWF0Y2goIC9ecmdiXFxzKlxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqXFwpJC9pICk7XG5cdFx0aWYoIHJnYiApIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHI6IHBhcnNlSW50KCByZ2JbMV0sIDEwICksXG5cdFx0XHRcdGc6IHBhcnNlSW50KCByZ2JbMl0sIDEwICksXG5cdFx0XHRcdGI6IHBhcnNlSW50KCByZ2JbM10sIDEwIClcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0dmFyIHJnYmEgPSBjb2xvci5tYXRjaCggL15yZ2JhXFxzKlxcKFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqLFxccyooXFxkKylcXHMqXFwsXFxzKihbXFxkXSt8W1xcZF0qLltcXGRdKylcXHMqXFwpJC9pICk7XG5cdFx0aWYoIHJnYmEgKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRyOiBwYXJzZUludCggcmdiYVsxXSwgMTAgKSxcblx0XHRcdFx0ZzogcGFyc2VJbnQoIHJnYmFbMl0sIDEwICksXG5cdFx0XHRcdGI6IHBhcnNlSW50KCByZ2JhWzNdLCAxMCApLFxuXHRcdFx0XHRhOiBwYXJzZUZsb2F0KCByZ2JhWzRdIClcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIGJyaWdodG5lc3Mgb24gYSBzY2FsZSBvZiAwLTI1NS5cblx0ICpcblx0ICogQHBhcmFtIGNvbG9yIFNlZSBjb2xvclN0cmluZ1RvUmdiIGZvciBzdXBwb3J0ZWQgZm9ybWF0cy5cblx0ICovXG5cdGZ1bmN0aW9uIGNvbG9yQnJpZ2h0bmVzcyggY29sb3IgKSB7XG5cblx0XHRpZiggdHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyApIGNvbG9yID0gY29sb3JUb1JnYiggY29sb3IgKTtcblxuXHRcdGlmKCBjb2xvciApIHtcblx0XHRcdHJldHVybiAoIGNvbG9yLnIgKiAyOTkgKyBjb2xvci5nICogNTg3ICsgY29sb3IuYiAqIDExNCApIC8gMTAwMDtcblx0XHR9XG5cblx0XHRyZXR1cm4gbnVsbDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgaGVpZ2h0IG9mIHRoZSBnaXZlbiBlbGVtZW50IGJ5IGxvb2tpbmdcblx0ICogYXQgdGhlIHBvc2l0aW9uIGFuZCBoZWlnaHQgb2YgaXRzIGltbWVkaWF0ZSBjaGlsZHJlbi5cblx0ICovXG5cdGZ1bmN0aW9uIGdldEFic29sdXRlSGVpZ2h0KCBlbGVtZW50ICkge1xuXG5cdFx0dmFyIGhlaWdodCA9IDA7XG5cblx0XHRpZiggZWxlbWVudCApIHtcblx0XHRcdHZhciBhYnNvbHV0ZUNoaWxkcmVuID0gMDtcblxuXHRcdFx0dG9BcnJheSggZWxlbWVudC5jaGlsZE5vZGVzICkuZm9yRWFjaCggZnVuY3Rpb24oIGNoaWxkICkge1xuXG5cdFx0XHRcdGlmKCB0eXBlb2YgY2hpbGQub2Zmc2V0VG9wID09PSAnbnVtYmVyJyAmJiBjaGlsZC5zdHlsZSApIHtcblx0XHRcdFx0XHQvLyBDb3VudCAjIG9mIGFicyBjaGlsZHJlblxuXHRcdFx0XHRcdGlmKCB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggY2hpbGQgKS5wb3NpdGlvbiA9PT0gJ2Fic29sdXRlJyApIHtcblx0XHRcdFx0XHRcdGFic29sdXRlQ2hpbGRyZW4gKz0gMTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoZWlnaHQgPSBNYXRoLm1heCggaGVpZ2h0LCBjaGlsZC5vZmZzZXRUb3AgKyBjaGlsZC5vZmZzZXRIZWlnaHQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIElmIHRoZXJlIGFyZSBubyBhYnNvbHV0ZSBjaGlsZHJlbiwgdXNlIG9mZnNldEhlaWdodFxuXHRcdFx0aWYoIGFic29sdXRlQ2hpbGRyZW4gPT09IDAgKSB7XG5cdFx0XHRcdGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhlaWdodDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHJlbWFpbmluZyBoZWlnaHQgd2l0aGluIHRoZSBwYXJlbnQgb2YgdGhlXG5cdCAqIHRhcmdldCBlbGVtZW50LlxuXHQgKlxuXHQgKiByZW1haW5pbmcgaGVpZ2h0ID0gWyBjb25maWd1cmVkIHBhcmVudCBoZWlnaHQgXSAtIFsgY3VycmVudCBwYXJlbnQgaGVpZ2h0IF1cblx0ICovXG5cdGZ1bmN0aW9uIGdldFJlbWFpbmluZ0hlaWdodCggZWxlbWVudCwgaGVpZ2h0ICkge1xuXG5cdFx0aGVpZ2h0ID0gaGVpZ2h0IHx8IDA7XG5cblx0XHRpZiggZWxlbWVudCApIHtcblx0XHRcdHZhciBuZXdIZWlnaHQsIG9sZEhlaWdodCA9IGVsZW1lbnQuc3R5bGUuaGVpZ2h0O1xuXG5cdFx0XHQvLyBDaGFuZ2UgdGhlIC5zdHJldGNoIGVsZW1lbnQgaGVpZ2h0IHRvIDAgaW4gb3JkZXIgZmluZCB0aGUgaGVpZ2h0IG9mIGFsbFxuXHRcdFx0Ly8gdGhlIG90aGVyIGVsZW1lbnRzXG5cdFx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuXHRcdFx0bmV3SGVpZ2h0ID0gaGVpZ2h0IC0gZWxlbWVudC5wYXJlbnROb2RlLm9mZnNldEhlaWdodDtcblxuXHRcdFx0Ly8gUmVzdG9yZSB0aGUgb2xkIGhlaWdodCwganVzdCBpbiBjYXNlXG5cdFx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9IG9sZEhlaWdodCArICdweCc7XG5cblx0XHRcdHJldHVybiBuZXdIZWlnaHQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhlaWdodDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGlzIGluc3RhbmNlIGlzIGJlaW5nIHVzZWQgdG8gcHJpbnQgYSBQREYuXG5cdCAqL1xuXHRmdW5jdGlvbiBpc1ByaW50aW5nUERGKCkge1xuXG5cdFx0cmV0dXJuICggL3ByaW50LXBkZi9naSApLnRlc3QoIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEhpZGVzIHRoZSBhZGRyZXNzIGJhciBpZiB3ZSdyZSBvbiBhIG1vYmlsZSBkZXZpY2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBoaWRlQWRkcmVzc0JhcigpIHtcblxuXHRcdGlmKCBjb25maWcuaGlkZUFkZHJlc3NCYXIgJiYgaXNNb2JpbGVEZXZpY2UgKSB7XG5cdFx0XHQvLyBFdmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlciB0aGUgYWRkcmVzcyBiYXIgdG8gaGlkZVxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgcmVtb3ZlQWRkcmVzc0JhciwgZmFsc2UgKTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCAnb3JpZW50YXRpb25jaGFuZ2UnLCByZW1vdmVBZGRyZXNzQmFyLCBmYWxzZSApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENhdXNlcyB0aGUgYWRkcmVzcyBiYXIgdG8gaGlkZSBvbiBtb2JpbGUgZGV2aWNlcyxcblx0ICogbW9yZSB2ZXJ0aWNhbCBzcGFjZSBmdHcuXG5cdCAqL1xuXHRmdW5jdGlvbiByZW1vdmVBZGRyZXNzQmFyKCkge1xuXG5cdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cuc2Nyb2xsVG8oIDAsIDEgKTtcblx0XHR9LCAxMCApO1xuXG5cdH1cblxuXHQvKipcblx0ICogRGlzcGF0Y2hlcyBhbiBldmVudCBvZiB0aGUgc3BlY2lmaWVkIHR5cGUgZnJvbSB0aGVcblx0ICogcmV2ZWFsIERPTSBlbGVtZW50LlxuXHQgKi9cblx0ZnVuY3Rpb24gZGlzcGF0Y2hFdmVudCggdHlwZSwgYXJncyApIHtcblxuXHRcdHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnSFRNTEV2ZW50cycsIDEsIDIgKTtcblx0XHRldmVudC5pbml0RXZlbnQoIHR5cGUsIHRydWUsIHRydWUgKTtcblx0XHRleHRlbmQoIGV2ZW50LCBhcmdzICk7XG5cdFx0ZG9tLndyYXBwZXIuZGlzcGF0Y2hFdmVudCggZXZlbnQgKTtcblxuXHRcdC8vIElmIHdlJ3JlIGluIGFuIGlmcmFtZSwgcG9zdCBlYWNoIHJldmVhbC5qcyBldmVudCB0byB0aGVcblx0XHQvLyBwYXJlbnQgd2luZG93LiBVc2VkIGJ5IHRoZSBub3RlcyBwbHVnaW5cblx0XHRpZiggY29uZmlnLnBvc3RNZXNzYWdlRXZlbnRzICYmIHdpbmRvdy5wYXJlbnQgIT09IHdpbmRvdy5zZWxmICkge1xuXHRcdFx0d2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSggSlNPTi5zdHJpbmdpZnkoeyBuYW1lc3BhY2U6ICdyZXZlYWwnLCBldmVudE5hbWU6IHR5cGUsIHN0YXRlOiBnZXRTdGF0ZSgpIH0pLCAnKicgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBXcmFwIGFsbCBsaW5rcyBpbiAzRCBnb29kbmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIGVuYWJsZVJvbGxpbmdMaW5rcygpIHtcblxuXHRcdGlmKCBmZWF0dXJlcy50cmFuc2Zvcm1zM2QgJiYgISggJ21zUGVyc3BlY3RpdmUnIGluIGRvY3VtZW50LmJvZHkuc3R5bGUgKSApIHtcblx0XHRcdHZhciBhbmNob3JzID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggU0xJREVTX1NFTEVDVE9SICsgJyBhJyApO1xuXG5cdFx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gYW5jaG9ycy5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0dmFyIGFuY2hvciA9IGFuY2hvcnNbaV07XG5cblx0XHRcdFx0aWYoIGFuY2hvci50ZXh0Q29udGVudCAmJiAhYW5jaG9yLnF1ZXJ5U2VsZWN0b3IoICcqJyApICYmICggIWFuY2hvci5jbGFzc05hbWUgfHwgIWFuY2hvci5jbGFzc0xpc3QuY29udGFpbnMoIGFuY2hvciwgJ3JvbGwnICkgKSApIHtcblx0XHRcdFx0XHR2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0XHRzcGFuLnNldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScsIGFuY2hvci50ZXh0KTtcblx0XHRcdFx0XHRzcGFuLmlubmVySFRNTCA9IGFuY2hvci5pbm5lckhUTUw7XG5cblx0XHRcdFx0XHRhbmNob3IuY2xhc3NMaXN0LmFkZCggJ3JvbGwnICk7XG5cdFx0XHRcdFx0YW5jaG9yLmlubmVySFRNTCA9ICcnO1xuXHRcdFx0XHRcdGFuY2hvci5hcHBlbmRDaGlsZChzcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFVud3JhcCBhbGwgM0QgbGlua3MuXG5cdCAqL1xuXHRmdW5jdGlvbiBkaXNhYmxlUm9sbGluZ0xpbmtzKCkge1xuXG5cdFx0dmFyIGFuY2hvcnMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKyAnIGEucm9sbCcgKTtcblxuXHRcdGZvciggdmFyIGkgPSAwLCBsZW4gPSBhbmNob3JzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0dmFyIGFuY2hvciA9IGFuY2hvcnNbaV07XG5cdFx0XHR2YXIgc3BhbiA9IGFuY2hvci5xdWVyeVNlbGVjdG9yKCAnc3BhbicgKTtcblxuXHRcdFx0aWYoIHNwYW4gKSB7XG5cdFx0XHRcdGFuY2hvci5jbGFzc0xpc3QucmVtb3ZlKCAncm9sbCcgKTtcblx0XHRcdFx0YW5jaG9yLmlubmVySFRNTCA9IHNwYW4uaW5uZXJIVE1MO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEJpbmQgcHJldmlldyBmcmFtZSBsaW5rcy5cblx0ICovXG5cdGZ1bmN0aW9uIGVuYWJsZVByZXZpZXdMaW5rcyggc2VsZWN0b3IgKSB7XG5cblx0XHR2YXIgYW5jaG9ycyA9IHRvQXJyYXkoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIHNlbGVjdG9yID8gc2VsZWN0b3IgOiAnYScgKSApO1xuXG5cdFx0YW5jaG9ycy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdGlmKCAvXihodHRwfHd3dykvZ2kudGVzdCggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdocmVmJyApICkgKSB7XG5cdFx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb25QcmV2aWV3TGlua0NsaWNrZWQsIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogVW5iaW5kIHByZXZpZXcgZnJhbWUgbGlua3MuXG5cdCAqL1xuXHRmdW5jdGlvbiBkaXNhYmxlUHJldmlld0xpbmtzKCkge1xuXG5cdFx0dmFyIGFuY2hvcnMgPSB0b0FycmF5KCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnYScgKSApO1xuXG5cdFx0YW5jaG9ycy5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdGlmKCAvXihodHRwfHd3dykvZ2kudGVzdCggZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdocmVmJyApICkgKSB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgb25QcmV2aWV3TGlua0NsaWNrZWQsIGZhbHNlICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogT3BlbnMgYSBwcmV2aWV3IHdpbmRvdyBmb3IgdGhlIHRhcmdldCBVUkwuXG5cdCAqL1xuXHRmdW5jdGlvbiBzaG93UHJldmlldyggdXJsICkge1xuXG5cdFx0Y2xvc2VPdmVybGF5KCk7XG5cblx0XHRkb20ub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0ZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ292ZXJsYXknICk7XG5cdFx0ZG9tLm92ZXJsYXkuY2xhc3NMaXN0LmFkZCggJ292ZXJsYXktcHJldmlldycgKTtcblx0XHRkb20ud3JhcHBlci5hcHBlbmRDaGlsZCggZG9tLm92ZXJsYXkgKTtcblxuXHRcdGRvbS5vdmVybGF5LmlubmVySFRNTCA9IFtcblx0XHRcdCc8aGVhZGVyPicsXG5cdFx0XHRcdCc8YSBjbGFzcz1cImNsb3NlXCIgaHJlZj1cIiNcIj48c3BhbiBjbGFzcz1cImljb25cIj48L3NwYW4+PC9hPicsXG5cdFx0XHRcdCc8YSBjbGFzcz1cImV4dGVybmFsXCIgaHJlZj1cIicrIHVybCArJ1wiIHRhcmdldD1cIl9ibGFua1wiPjxzcGFuIGNsYXNzPVwiaWNvblwiPjwvc3Bhbj48L2E+Jyxcblx0XHRcdCc8L2hlYWRlcj4nLFxuXHRcdFx0JzxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PC9kaXY+Jyxcblx0XHRcdCc8ZGl2IGNsYXNzPVwidmlld3BvcnRcIj4nLFxuXHRcdFx0XHQnPGlmcmFtZSBzcmM9XCInKyB1cmwgKydcIj48L2lmcmFtZT4nLFxuXHRcdFx0JzwvZGl2Pidcblx0XHRdLmpvaW4oJycpO1xuXG5cdFx0ZG9tLm92ZXJsYXkucXVlcnlTZWxlY3RvciggJ2lmcmFtZScgKS5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdsb2FkZWQnICk7XG5cdFx0fSwgZmFsc2UgKTtcblxuXHRcdGRvbS5vdmVybGF5LnF1ZXJ5U2VsZWN0b3IoICcuY2xvc2UnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0Y2xvc2VPdmVybGF5KCk7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH0sIGZhbHNlICk7XG5cblx0XHRkb20ub3ZlcmxheS5xdWVyeVNlbGVjdG9yKCAnLmV4dGVybmFsJyApLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdGNsb3NlT3ZlcmxheSgpO1xuXHRcdH0sIGZhbHNlICk7XG5cblx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJyApO1xuXHRcdH0sIDEgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE9wZW5zIGEgb3ZlcmxheSB3aW5kb3cgd2l0aCBoZWxwIG1hdGVyaWFsLlxuXHQgKi9cblx0ZnVuY3Rpb24gc2hvd0hlbHAoKSB7XG5cblx0XHRpZiggY29uZmlnLmhlbHAgKSB7XG5cblx0XHRcdGNsb3NlT3ZlcmxheSgpO1xuXG5cdFx0XHRkb20ub3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdkaXYnICk7XG5cdFx0XHRkb20ub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCAnb3ZlcmxheScgKTtcblx0XHRcdGRvbS5vdmVybGF5LmNsYXNzTGlzdC5hZGQoICdvdmVybGF5LWhlbHAnICk7XG5cdFx0XHRkb20ud3JhcHBlci5hcHBlbmRDaGlsZCggZG9tLm92ZXJsYXkgKTtcblxuXHRcdFx0dmFyIGh0bWwgPSAnPHAgY2xhc3M9XCJ0aXRsZVwiPktleWJvYXJkIFNob3J0Y3V0czwvcD48YnIvPic7XG5cblx0XHRcdGh0bWwgKz0gJzx0YWJsZT48dGg+S0VZPC90aD48dGg+QUNUSU9OPC90aD4nO1xuXHRcdFx0Zm9yKCB2YXIga2V5IGluIGtleWJvYXJkU2hvcnRjdXRzICkge1xuXHRcdFx0XHRodG1sICs9ICc8dHI+PHRkPicgKyBrZXkgKyAnPC90ZD48dGQ+JyArIGtleWJvYXJkU2hvcnRjdXRzWyBrZXkgXSArICc8L3RkPjwvdHI+Jztcblx0XHRcdH1cblxuXHRcdFx0aHRtbCArPSAnPC90YWJsZT4nO1xuXG5cdFx0XHRkb20ub3ZlcmxheS5pbm5lckhUTUwgPSBbXG5cdFx0XHRcdCc8aGVhZGVyPicsXG5cdFx0XHRcdFx0JzxhIGNsYXNzPVwiY2xvc2VcIiBocmVmPVwiI1wiPjxzcGFuIGNsYXNzPVwiaWNvblwiPjwvc3Bhbj48L2E+Jyxcblx0XHRcdFx0JzwvaGVhZGVyPicsXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwidmlld3BvcnRcIj4nLFxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwidmlld3BvcnQtaW5uZXJcIj4nKyBodG1sICsnPC9kaXY+Jyxcblx0XHRcdFx0JzwvZGl2Pidcblx0XHRcdF0uam9pbignJyk7XG5cblx0XHRcdGRvbS5vdmVybGF5LnF1ZXJ5U2VsZWN0b3IoICcuY2xvc2UnICkuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRjbG9zZU92ZXJsYXkoKTtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdH0sIGZhbHNlICk7XG5cblx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkb20ub3ZlcmxheS5jbGFzc0xpc3QuYWRkKCAndmlzaWJsZScgKTtcblx0XHRcdH0sIDEgKTtcblxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENsb3NlcyBhbnkgY3VycmVudGx5IG9wZW4gb3ZlcmxheS5cblx0ICovXG5cdGZ1bmN0aW9uIGNsb3NlT3ZlcmxheSgpIHtcblxuXHRcdGlmKCBkb20ub3ZlcmxheSApIHtcblx0XHRcdGRvbS5vdmVybGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGRvbS5vdmVybGF5ICk7XG5cdFx0XHRkb20ub3ZlcmxheSA9IG51bGw7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQXBwbGllcyBKYXZhU2NyaXB0LWNvbnRyb2xsZWQgbGF5b3V0IHJ1bGVzIHRvIHRoZVxuXHQgKiBwcmVzZW50YXRpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBsYXlvdXQoKSB7XG5cblx0XHRpZiggZG9tLndyYXBwZXIgJiYgIWlzUHJpbnRpbmdQREYoKSApIHtcblxuXHRcdFx0dmFyIHNpemUgPSBnZXRDb21wdXRlZFNsaWRlU2l6ZSgpO1xuXG5cdFx0XHR2YXIgc2xpZGVQYWRkaW5nID0gMjA7IC8vIFRPRE8gRGlnIHRoaXMgb3V0IG9mIERPTVxuXG5cdFx0XHQvLyBMYXlvdXQgdGhlIGNvbnRlbnRzIG9mIHRoZSBzbGlkZXNcblx0XHRcdGxheW91dFNsaWRlQ29udGVudHMoIGNvbmZpZy53aWR0aCwgY29uZmlnLmhlaWdodCwgc2xpZGVQYWRkaW5nICk7XG5cblx0XHRcdGRvbS5zbGlkZXMuc3R5bGUud2lkdGggPSBzaXplLndpZHRoICsgJ3B4Jztcblx0XHRcdGRvbS5zbGlkZXMuc3R5bGUuaGVpZ2h0ID0gc2l6ZS5oZWlnaHQgKyAncHgnO1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgc2NhbGUgb2YgY29udGVudCB0byBmaXQgd2l0aGluIGF2YWlsYWJsZSBzcGFjZVxuXHRcdFx0c2NhbGUgPSBNYXRoLm1pbiggc2l6ZS5wcmVzZW50YXRpb25XaWR0aCAvIHNpemUud2lkdGgsIHNpemUucHJlc2VudGF0aW9uSGVpZ2h0IC8gc2l6ZS5oZWlnaHQgKTtcblxuXHRcdFx0Ly8gUmVzcGVjdCBtYXgvbWluIHNjYWxlIHNldHRpbmdzXG5cdFx0XHRzY2FsZSA9IE1hdGgubWF4KCBzY2FsZSwgY29uZmlnLm1pblNjYWxlICk7XG5cdFx0XHRzY2FsZSA9IE1hdGgubWluKCBzY2FsZSwgY29uZmlnLm1heFNjYWxlICk7XG5cblx0XHRcdC8vIERvbid0IGFwcGx5IGFueSBzY2FsaW5nIHN0eWxlcyBpZiBzY2FsZSBpcyAxXG5cdFx0XHRpZiggc2NhbGUgPT09IDEgKSB7XG5cdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUuem9vbSA9ICcnO1xuXHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLmxlZnQgPSAnJztcblx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS50b3AgPSAnJztcblx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS5ib3R0b20gPSAnJztcblx0XHRcdFx0ZG9tLnNsaWRlcy5zdHlsZS5yaWdodCA9ICcnO1xuXHRcdFx0XHR0cmFuc2Zvcm1TbGlkZXMoIHsgbGF5b3V0OiAnJyB9ICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Ly8gUHJlZmVyIHpvb21pbmcgaW4gZGVza3RvcCBDaHJvbWUgc28gdGhhdCBjb250ZW50IHJlbWFpbnMgY3Jpc3Bcblx0XHRcdFx0aWYoICFpc01vYmlsZURldmljZSAmJiAvY2hyb21lL2kudGVzdCggbmF2aWdhdG9yLnVzZXJBZ2VudCApICYmIHR5cGVvZiBkb20uc2xpZGVzLnN0eWxlLnpvb20gIT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUuem9vbSA9IHNjYWxlO1xuXHRcdFx0XHRcdHRyYW5zZm9ybVNsaWRlcyggeyBsYXlvdXQ6ICcnIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBcHBseSBzY2FsZSB0cmFuc2Zvcm0gYXMgYSBmYWxsYmFja1xuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLmxlZnQgPSAnNTAlJztcblx0XHRcdFx0XHRkb20uc2xpZGVzLnN0eWxlLnRvcCA9ICc1MCUnO1xuXHRcdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUuYm90dG9tID0gJ2F1dG8nO1xuXHRcdFx0XHRcdGRvbS5zbGlkZXMuc3R5bGUucmlnaHQgPSAnYXV0byc7XG5cdFx0XHRcdFx0dHJhbnNmb3JtU2xpZGVzKCB7IGxheW91dDogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgnKyBzY2FsZSArJyknIH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZWxlY3QgYWxsIHNsaWRlcywgdmVydGljYWwgYW5kIGhvcml6b250YWxcblx0XHRcdHZhciBzbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKSApO1xuXG5cdFx0XHRmb3IoIHZhciBpID0gMCwgbGVuID0gc2xpZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHR2YXIgc2xpZGUgPSBzbGlkZXNbIGkgXTtcblxuXHRcdFx0XHQvLyBEb24ndCBib3RoZXIgdXBkYXRpbmcgaW52aXNpYmxlIHNsaWRlc1xuXHRcdFx0XHRpZiggc2xpZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIGNvbmZpZy5jZW50ZXIgfHwgc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnY2VudGVyJyApICkge1xuXHRcdFx0XHRcdC8vIFZlcnRpY2FsIHN0YWNrcyBhcmUgbm90IGNlbnRyZWQgc2luY2UgdGhlaXIgc2VjdGlvblxuXHRcdFx0XHRcdC8vIGNoaWxkcmVuIHdpbGwgYmVcblx0XHRcdFx0XHRpZiggc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3RhY2snICkgKSB7XG5cdFx0XHRcdFx0XHRzbGlkZS5zdHlsZS50b3AgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdHNsaWRlLnN0eWxlLnRvcCA9IE1hdGgubWF4KCAoICggc2l6ZS5oZWlnaHQgLSBnZXRBYnNvbHV0ZUhlaWdodCggc2xpZGUgKSApIC8gMiApIC0gc2xpZGVQYWRkaW5nLCAwICkgKyAncHgnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRzbGlkZS5zdHlsZS50b3AgPSAnJztcblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZVByb2dyZXNzKCk7XG5cdFx0XHR1cGRhdGVQYXJhbGxheCgpO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQXBwbGllcyBsYXlvdXQgbG9naWMgdG8gdGhlIGNvbnRlbnRzIG9mIGFsbCBzbGlkZXMgaW5cblx0ICogdGhlIHByZXNlbnRhdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIGxheW91dFNsaWRlQ29udGVudHMoIHdpZHRoLCBoZWlnaHQsIHBhZGRpbmcgKSB7XG5cblx0XHQvLyBIYW5kbGUgc2l6aW5nIG9mIGVsZW1lbnRzIHdpdGggdGhlICdzdHJldGNoJyBjbGFzc1xuXHRcdHRvQXJyYXkoIGRvbS5zbGlkZXMucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24gPiAuc3RyZXRjaCcgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbGVtZW50ICkge1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgaG93IG11Y2ggdmVydGljYWwgc3BhY2Ugd2UgY2FuIHVzZVxuXHRcdFx0dmFyIHJlbWFpbmluZ0hlaWdodCA9IGdldFJlbWFpbmluZ0hlaWdodCggZWxlbWVudCwgaGVpZ2h0ICk7XG5cblx0XHRcdC8vIENvbnNpZGVyIHRoZSBhc3BlY3QgcmF0aW8gb2YgbWVkaWEgZWxlbWVudHNcblx0XHRcdGlmKCAvKGltZ3x2aWRlbykvZ2kudGVzdCggZWxlbWVudC5ub2RlTmFtZSApICkge1xuXHRcdFx0XHR2YXIgbncgPSBlbGVtZW50Lm5hdHVyYWxXaWR0aCB8fCBlbGVtZW50LnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0bmggPSBlbGVtZW50Lm5hdHVyYWxIZWlnaHQgfHwgZWxlbWVudC52aWRlb0hlaWdodDtcblxuXHRcdFx0XHR2YXIgZXMgPSBNYXRoLm1pbiggd2lkdGggLyBudywgcmVtYWluaW5nSGVpZ2h0IC8gbmggKTtcblxuXHRcdFx0XHRlbGVtZW50LnN0eWxlLndpZHRoID0gKCBudyAqIGVzICkgKyAncHgnO1xuXHRcdFx0XHRlbGVtZW50LnN0eWxlLmhlaWdodCA9ICggbmggKiBlcyApICsgJ3B4JztcblxuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG5cdFx0XHRcdGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcmVtYWluaW5nSGVpZ2h0ICsgJ3B4Jztcblx0XHRcdH1cblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZXMgdGhlIGNvbXB1dGVkIHBpeGVsIHNpemUgb2Ygb3VyIHNsaWRlcy4gVGhlc2Vcblx0ICogdmFsdWVzIGFyZSBiYXNlZCBvbiB0aGUgd2lkdGggYW5kIGhlaWdodCBjb25maWd1cmF0aW9uXG5cdCAqIG9wdGlvbnMuXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRDb21wdXRlZFNsaWRlU2l6ZSggcHJlc2VudGF0aW9uV2lkdGgsIHByZXNlbnRhdGlvbkhlaWdodCApIHtcblxuXHRcdHZhciBzaXplID0ge1xuXHRcdFx0Ly8gU2xpZGUgc2l6ZVxuXHRcdFx0d2lkdGg6IGNvbmZpZy53aWR0aCxcblx0XHRcdGhlaWdodDogY29uZmlnLmhlaWdodCxcblxuXHRcdFx0Ly8gUHJlc2VudGF0aW9uIHNpemVcblx0XHRcdHByZXNlbnRhdGlvbldpZHRoOiBwcmVzZW50YXRpb25XaWR0aCB8fCBkb20ud3JhcHBlci5vZmZzZXRXaWR0aCxcblx0XHRcdHByZXNlbnRhdGlvbkhlaWdodDogcHJlc2VudGF0aW9uSGVpZ2h0IHx8IGRvbS53cmFwcGVyLm9mZnNldEhlaWdodFxuXHRcdH07XG5cblx0XHQvLyBSZWR1Y2UgYXZhaWxhYmxlIHNwYWNlIGJ5IG1hcmdpblxuXHRcdHNpemUucHJlc2VudGF0aW9uV2lkdGggLT0gKCBzaXplLnByZXNlbnRhdGlvbldpZHRoICogY29uZmlnLm1hcmdpbiApO1xuXHRcdHNpemUucHJlc2VudGF0aW9uSGVpZ2h0IC09ICggc2l6ZS5wcmVzZW50YXRpb25IZWlnaHQgKiBjb25maWcubWFyZ2luICk7XG5cblx0XHQvLyBTbGlkZSB3aWR0aCBtYXkgYmUgYSBwZXJjZW50YWdlIG9mIGF2YWlsYWJsZSB3aWR0aFxuXHRcdGlmKCB0eXBlb2Ygc2l6ZS53aWR0aCA9PT0gJ3N0cmluZycgJiYgLyUkLy50ZXN0KCBzaXplLndpZHRoICkgKSB7XG5cdFx0XHRzaXplLndpZHRoID0gcGFyc2VJbnQoIHNpemUud2lkdGgsIDEwICkgLyAxMDAgKiBzaXplLnByZXNlbnRhdGlvbldpZHRoO1xuXHRcdH1cblxuXHRcdC8vIFNsaWRlIGhlaWdodCBtYXkgYmUgYSBwZXJjZW50YWdlIG9mIGF2YWlsYWJsZSBoZWlnaHRcblx0XHRpZiggdHlwZW9mIHNpemUuaGVpZ2h0ID09PSAnc3RyaW5nJyAmJiAvJSQvLnRlc3QoIHNpemUuaGVpZ2h0ICkgKSB7XG5cdFx0XHRzaXplLmhlaWdodCA9IHBhcnNlSW50KCBzaXplLmhlaWdodCwgMTAgKSAvIDEwMCAqIHNpemUucHJlc2VudGF0aW9uSGVpZ2h0O1xuXHRcdH1cblxuXHRcdHJldHVybiBzaXplO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3RvcmVzIHRoZSB2ZXJ0aWNhbCBpbmRleCBvZiBhIHN0YWNrIHNvIHRoYXQgdGhlIHNhbWVcblx0ICogdmVydGljYWwgc2xpZGUgY2FuIGJlIHNlbGVjdGVkIHdoZW4gbmF2aWdhdGluZyB0byBhbmRcblx0ICogZnJvbSB0aGUgc3RhY2suXG5cdCAqXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHN0YWNrIFRoZSB2ZXJ0aWNhbCBzdGFjayBlbGVtZW50XG5cdCAqIEBwYXJhbSB7aW50fSB2IEluZGV4IHRvIG1lbW9yaXplXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoIHN0YWNrLCB2ICkge1xuXG5cdFx0aWYoIHR5cGVvZiBzdGFjayA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHN0YWNrLnNldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdHN0YWNrLnNldEF0dHJpYnV0ZSggJ2RhdGEtcHJldmlvdXMtaW5kZXh2JywgdiB8fCAwICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogUmV0cmlldmVzIHRoZSB2ZXJ0aWNhbCBpbmRleCB3aGljaCB3YXMgc3RvcmVkIHVzaW5nXG5cdCAqICNzZXRQcmV2aW91c1ZlcnRpY2FsSW5kZXgoKSBvciAwIGlmIG5vIHByZXZpb3VzIGluZGV4XG5cdCAqIGV4aXN0cy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc3RhY2sgVGhlIHZlcnRpY2FsIHN0YWNrIGVsZW1lbnRcblx0ICovXG5cdGZ1bmN0aW9uIGdldFByZXZpb3VzVmVydGljYWxJbmRleCggc3RhY2sgKSB7XG5cblx0XHRpZiggdHlwZW9mIHN0YWNrID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygc3RhY2suc2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nICYmIHN0YWNrLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApICkge1xuXHRcdFx0Ly8gUHJlZmVyIG1hbnVhbGx5IGRlZmluZWQgc3RhcnQtaW5kZXh2XG5cdFx0XHR2YXIgYXR0cmlidXRlTmFtZSA9IHN0YWNrLmhhc0F0dHJpYnV0ZSggJ2RhdGEtc3RhcnQtaW5kZXh2JyApID8gJ2RhdGEtc3RhcnQtaW5kZXh2JyA6ICdkYXRhLXByZXZpb3VzLWluZGV4dic7XG5cblx0XHRcdHJldHVybiBwYXJzZUludCggc3RhY2suZ2V0QXR0cmlidXRlKCBhdHRyaWJ1dGVOYW1lICkgfHwgMCwgMTAgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gMDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIERpc3BsYXlzIHRoZSBvdmVydmlldyBvZiBzbGlkZXMgKHF1aWNrIG5hdikgYnkgc2NhbGluZ1xuXHQgKiBkb3duIGFuZCBhcnJhbmdpbmcgYWxsIHNsaWRlIGVsZW1lbnRzLlxuXHQgKi9cblx0ZnVuY3Rpb24gYWN0aXZhdGVPdmVydmlldygpIHtcblxuXHRcdC8vIE9ubHkgcHJvY2VlZCBpZiBlbmFibGVkIGluIGNvbmZpZ1xuXHRcdGlmKCBjb25maWcub3ZlcnZpZXcgJiYgIWlzT3ZlcnZpZXcoKSApIHtcblxuXHRcdFx0b3ZlcnZpZXcgPSB0cnVlO1xuXG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnb3ZlcnZpZXcnICk7XG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnb3ZlcnZpZXctZGVhY3RpdmF0aW5nJyApO1xuXG5cdFx0XHRpZiggZmVhdHVyZXMub3ZlcnZpZXdUcmFuc2l0aW9ucyApIHtcblx0XHRcdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LmFkZCggJ292ZXJ2aWV3LWFuaW1hdGVkJyApO1xuXHRcdFx0XHR9LCAxICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERvbid0IGF1dG8tc2xpZGUgd2hpbGUgaW4gb3ZlcnZpZXcgbW9kZVxuXHRcdFx0Y2FuY2VsQXV0b1NsaWRlKCk7XG5cblx0XHRcdC8vIE1vdmUgdGhlIGJhY2tncm91bmRzIGVsZW1lbnQgaW50byB0aGUgc2xpZGUgY29udGFpbmVyIHRvXG5cdFx0XHQvLyB0aGF0IHRoZSBzYW1lIHNjYWxpbmcgaXMgYXBwbGllZFxuXHRcdFx0ZG9tLnNsaWRlcy5hcHBlbmRDaGlsZCggZG9tLmJhY2tncm91bmQgKTtcblxuXHRcdFx0Ly8gQ2xpY2tpbmcgb24gYW4gb3ZlcnZpZXcgc2xpZGUgbmF2aWdhdGVzIHRvIGl0XG5cdFx0XHR0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBTTElERVNfU0VMRUNUT1IgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBzbGlkZSApIHtcblx0XHRcdFx0aWYoICFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoICdzdGFjaycgKSApIHtcblx0XHRcdFx0XHRzbGlkZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvbk92ZXJ2aWV3U2xpZGVDbGlja2VkLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblxuXHRcdFx0dXBkYXRlU2xpZGVzVmlzaWJpbGl0eSgpO1xuXHRcdFx0bGF5b3V0T3ZlcnZpZXcoKTtcblx0XHRcdHVwZGF0ZU92ZXJ2aWV3KCk7XG5cblx0XHRcdGxheW91dCgpO1xuXG5cdFx0XHQvLyBOb3RpZnkgb2JzZXJ2ZXJzIG9mIHRoZSBvdmVydmlldyBzaG93aW5nXG5cdFx0XHRkaXNwYXRjaEV2ZW50KCAnb3ZlcnZpZXdzaG93bicsIHtcblx0XHRcdFx0J2luZGV4aCc6IGluZGV4aCxcblx0XHRcdFx0J2luZGV4dic6IGluZGV4dixcblx0XHRcdFx0J2N1cnJlbnRTbGlkZSc6IGN1cnJlbnRTbGlkZVxuXHRcdFx0fSApO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVXNlcyBDU1MgdHJhbnNmb3JtcyB0byBwb3NpdGlvbiBhbGwgc2xpZGVzIGluIGEgZ3JpZCBmb3Jcblx0ICogZGlzcGxheSBpbnNpZGUgb2YgdGhlIG92ZXJ2aWV3IG1vZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiBsYXlvdXRPdmVydmlldygpIHtcblxuXHRcdHZhciBtYXJnaW4gPSA3MDtcblx0XHR2YXIgc2xpZGVXaWR0aCA9IGNvbmZpZy53aWR0aCArIG1hcmdpbixcblx0XHRcdHNsaWRlSGVpZ2h0ID0gY29uZmlnLmhlaWdodCArIG1hcmdpbjtcblxuXHRcdC8vIFJldmVyc2UgaW4gUlRMIG1vZGVcblx0XHRpZiggY29uZmlnLnJ0bCApIHtcblx0XHRcdHNsaWRlV2lkdGggPSAtc2xpZGVXaWR0aDtcblx0XHR9XG5cblx0XHQvLyBMYXlvdXQgc2xpZGVzXG5cdFx0dG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBoc2xpZGUsIGggKSB7XG5cdFx0XHRoc2xpZGUuc2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC1oJywgaCApO1xuXHRcdFx0dHJhbnNmb3JtRWxlbWVudCggaHNsaWRlLCAndHJhbnNsYXRlM2QoJyArICggaCAqIHNsaWRlV2lkdGggKSArICdweCwgMCwgMCknICk7XG5cblx0XHRcdGlmKCBoc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnc3RhY2snICkgKSB7XG5cblx0XHRcdFx0dG9BcnJheSggaHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIHZzbGlkZSwgdiApIHtcblx0XHRcdFx0XHR2c2xpZGUuc2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC1oJywgaCApO1xuXHRcdFx0XHRcdHZzbGlkZS5zZXRBdHRyaWJ1dGUoICdkYXRhLWluZGV4LXYnLCB2ICk7XG5cblx0XHRcdFx0XHR0cmFuc2Zvcm1FbGVtZW50KCB2c2xpZGUsICd0cmFuc2xhdGUzZCgwLCAnICsgKCB2ICogc2xpZGVIZWlnaHQgKSArICdweCwgMCknICk7XG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHRcdC8vIExheW91dCBzbGlkZSBiYWNrZ3JvdW5kc1xuXHRcdHRvQXJyYXkoIGRvbS5iYWNrZ3JvdW5kLmNoaWxkTm9kZXMgKS5mb3JFYWNoKCBmdW5jdGlvbiggaGJhY2tncm91bmQsIGggKSB7XG5cdFx0XHR0cmFuc2Zvcm1FbGVtZW50KCBoYmFja2dyb3VuZCwgJ3RyYW5zbGF0ZTNkKCcgKyAoIGggKiBzbGlkZVdpZHRoICkgKyAncHgsIDAsIDApJyApO1xuXG5cdFx0XHR0b0FycmF5KCBoYmFja2dyb3VuZC5xdWVyeVNlbGVjdG9yQWxsKCAnLnNsaWRlLWJhY2tncm91bmQnICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggdmJhY2tncm91bmQsIHYgKSB7XG5cdFx0XHRcdHRyYW5zZm9ybUVsZW1lbnQoIHZiYWNrZ3JvdW5kLCAndHJhbnNsYXRlM2QoMCwgJyArICggdiAqIHNsaWRlSGVpZ2h0ICkgKyAncHgsIDApJyApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmVzIHRoZSBvdmVydmlldyB2aWV3cG9ydCB0byB0aGUgY3VycmVudCBzbGlkZXMuXG5cdCAqIENhbGxlZCBlYWNoIHRpbWUgdGhlIGN1cnJlbnQgc2xpZGUgY2hhbmdlcy5cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZU92ZXJ2aWV3KCkge1xuXG5cdFx0dmFyIG1hcmdpbiA9IDcwO1xuXHRcdHZhciBzbGlkZVdpZHRoID0gY29uZmlnLndpZHRoICsgbWFyZ2luLFxuXHRcdFx0c2xpZGVIZWlnaHQgPSBjb25maWcuaGVpZ2h0ICsgbWFyZ2luO1xuXG5cdFx0Ly8gUmV2ZXJzZSBpbiBSVEwgbW9kZVxuXHRcdGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0c2xpZGVXaWR0aCA9IC1zbGlkZVdpZHRoO1xuXHRcdH1cblxuXHRcdHRyYW5zZm9ybVNsaWRlcygge1xuXHRcdFx0b3ZlcnZpZXc6IFtcblx0XHRcdFx0J3RyYW5zbGF0ZVgoJysgKCAtaW5kZXhoICogc2xpZGVXaWR0aCApICsncHgpJyxcblx0XHRcdFx0J3RyYW5zbGF0ZVkoJysgKCAtaW5kZXh2ICogc2xpZGVIZWlnaHQgKSArJ3B4KScsXG5cdFx0XHRcdCd0cmFuc2xhdGVaKCcrICggd2luZG93LmlubmVyV2lkdGggPCA0MDAgPyAtMTAwMCA6IC0yNTAwICkgKydweCknXG5cdFx0XHRdLmpvaW4oICcgJyApXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogRXhpdHMgdGhlIHNsaWRlIG92ZXJ2aWV3IGFuZCBlbnRlcnMgdGhlIGN1cnJlbnRseVxuXHQgKiBhY3RpdmUgc2xpZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiBkZWFjdGl2YXRlT3ZlcnZpZXcoKSB7XG5cblx0XHQvLyBPbmx5IHByb2NlZWQgaWYgZW5hYmxlZCBpbiBjb25maWdcblx0XHRpZiggY29uZmlnLm92ZXJ2aWV3ICkge1xuXG5cdFx0XHRvdmVydmlldyA9IGZhbHNlO1xuXG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnb3ZlcnZpZXcnICk7XG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAnb3ZlcnZpZXctYW5pbWF0ZWQnICk7XG5cblx0XHRcdC8vIFRlbXBvcmFyaWx5IGFkZCBhIGNsYXNzIHNvIHRoYXQgdHJhbnNpdGlvbnMgY2FuIGRvIGRpZmZlcmVudCB0aGluZ3Ncblx0XHRcdC8vIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZXkgYXJlIGV4aXRpbmcvZW50ZXJpbmcgb3ZlcnZpZXcsIG9yIGp1c3Rcblx0XHRcdC8vIG1vdmluZyBmcm9tIHNsaWRlIHRvIHNsaWRlXG5cdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCAnb3ZlcnZpZXctZGVhY3RpdmF0aW5nJyApO1xuXG5cdFx0XHRzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoICdvdmVydmlldy1kZWFjdGl2YXRpbmcnICk7XG5cdFx0XHR9LCAxICk7XG5cblx0XHRcdC8vIE1vdmUgdGhlIGJhY2tncm91bmQgZWxlbWVudCBiYWNrIG91dFxuXHRcdFx0ZG9tLndyYXBwZXIuYXBwZW5kQ2hpbGQoIGRvbS5iYWNrZ3JvdW5kICk7XG5cblx0XHRcdC8vIENsZWFuIHVwIGNoYW5nZXMgbWFkZSB0byBzbGlkZXNcblx0XHRcdHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiApICkuZm9yRWFjaCggZnVuY3Rpb24oIHNsaWRlICkge1xuXHRcdFx0XHR0cmFuc2Zvcm1FbGVtZW50KCBzbGlkZSwgJycgKTtcblxuXHRcdFx0XHRzbGlkZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnY2xpY2snLCBvbk92ZXJ2aWV3U2xpZGVDbGlja2VkLCB0cnVlICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIENsZWFuIHVwIGNoYW5nZXMgbWFkZSB0byBiYWNrZ3JvdW5kc1xuXHRcdFx0dG9BcnJheSggZG9tLmJhY2tncm91bmQucXVlcnlTZWxlY3RvckFsbCggJy5zbGlkZS1iYWNrZ3JvdW5kJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGJhY2tncm91bmQgKSB7XG5cdFx0XHRcdHRyYW5zZm9ybUVsZW1lbnQoIGJhY2tncm91bmQsICcnICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdHRyYW5zZm9ybVNsaWRlcyggeyBvdmVydmlldzogJycgfSApO1xuXG5cdFx0XHRzbGlkZSggaW5kZXhoLCBpbmRleHYgKTtcblxuXHRcdFx0bGF5b3V0KCk7XG5cblx0XHRcdGN1ZUF1dG9TbGlkZSgpO1xuXG5cdFx0XHQvLyBOb3RpZnkgb2JzZXJ2ZXJzIG9mIHRoZSBvdmVydmlldyBoaWRpbmdcblx0XHRcdGRpc3BhdGNoRXZlbnQoICdvdmVydmlld2hpZGRlbicsIHtcblx0XHRcdFx0J2luZGV4aCc6IGluZGV4aCxcblx0XHRcdFx0J2luZGV4dic6IGluZGV4dixcblx0XHRcdFx0J2N1cnJlbnRTbGlkZSc6IGN1cnJlbnRTbGlkZVxuXHRcdFx0fSApO1xuXG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRvZ2dsZXMgdGhlIHNsaWRlIG92ZXJ2aWV3IG1vZGUgb24gYW5kIG9mZi5cblx0ICpcblx0ICogQHBhcmFtIHtCb29sZWFufSBvdmVycmlkZSBPcHRpb25hbCBmbGFnIHdoaWNoIG92ZXJyaWRlcyB0aGVcblx0ICogdG9nZ2xlIGxvZ2ljIGFuZCBmb3JjaWJseSBzZXRzIHRoZSBkZXNpcmVkIHN0YXRlLiBUcnVlIG1lYW5zXG5cdCAqIG92ZXJ2aWV3IGlzIG9wZW4sIGZhbHNlIG1lYW5zIGl0J3MgY2xvc2VkLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9nZ2xlT3ZlcnZpZXcoIG92ZXJyaWRlICkge1xuXG5cdFx0aWYoIHR5cGVvZiBvdmVycmlkZSA9PT0gJ2Jvb2xlYW4nICkge1xuXHRcdFx0b3ZlcnJpZGUgPyBhY3RpdmF0ZU92ZXJ2aWV3KCkgOiBkZWFjdGl2YXRlT3ZlcnZpZXcoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpc092ZXJ2aWV3KCkgPyBkZWFjdGl2YXRlT3ZlcnZpZXcoKSA6IGFjdGl2YXRlT3ZlcnZpZXcoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdGhlIG92ZXJ2aWV3IGlzIGN1cnJlbnRseSBhY3RpdmUuXG5cdCAqXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlIG92ZXJ2aWV3IGlzIGFjdGl2ZSxcblx0ICogZmFsc2Ugb3RoZXJ3aXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBpc092ZXJ2aWV3KCkge1xuXG5cdFx0cmV0dXJuIG92ZXJ2aWV3O1xuXG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50IG9yIHNwZWNpZmllZCBzbGlkZSBpcyB2ZXJ0aWNhbFxuXHQgKiAobmVzdGVkIHdpdGhpbiBhbm90aGVyIHNsaWRlKS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2xpZGUgW29wdGlvbmFsXSBUaGUgc2xpZGUgdG8gY2hlY2tcblx0ICogb3JpZW50YXRpb24gb2Zcblx0ICovXG5cdGZ1bmN0aW9uIGlzVmVydGljYWxTbGlkZSggc2xpZGUgKSB7XG5cblx0XHQvLyBQcmVmZXIgc2xpZGUgYXJndW1lbnQsIG90aGVyd2lzZSB1c2UgY3VycmVudCBzbGlkZVxuXHRcdHNsaWRlID0gc2xpZGUgPyBzbGlkZSA6IGN1cnJlbnRTbGlkZTtcblxuXHRcdHJldHVybiBzbGlkZSAmJiBzbGlkZS5wYXJlbnROb2RlICYmICEhc2xpZGUucGFyZW50Tm9kZS5ub2RlTmFtZS5tYXRjaCggL3NlY3Rpb24vaSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxpbmcgdGhlIGZ1bGxzY3JlZW4gZnVuY3Rpb25hbGl0eSB2aWEgdGhlIGZ1bGxzY3JlZW4gQVBJXG5cdCAqXG5cdCAqIEBzZWUgaHR0cDovL2Z1bGxzY3JlZW4uc3BlYy53aGF0d2cub3JnL1xuXHQgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvRE9NL1VzaW5nX2Z1bGxzY3JlZW5fbW9kZVxuXHQgKi9cblx0ZnVuY3Rpb24gZW50ZXJGdWxsc2NyZWVuKCkge1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuXG5cdFx0Ly8gQ2hlY2sgd2hpY2ggaW1wbGVtZW50YXRpb24gaXMgYXZhaWxhYmxlXG5cdFx0dmFyIHJlcXVlc3RNZXRob2QgPSBlbGVtZW50LnJlcXVlc3RGdWxsU2NyZWVuIHx8XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQud2Via2l0UmVxdWVzdEZ1bGxzY3JlZW4gfHxcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC53ZWJraXRSZXF1ZXN0RnVsbFNjcmVlbiB8fFxuXHRcdFx0XHRcdFx0XHRlbGVtZW50Lm1velJlcXVlc3RGdWxsU2NyZWVuIHx8XG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQubXNSZXF1ZXN0RnVsbHNjcmVlbjtcblxuXHRcdGlmKCByZXF1ZXN0TWV0aG9kICkge1xuXHRcdFx0cmVxdWVzdE1ldGhvZC5hcHBseSggZWxlbWVudCApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEVudGVycyB0aGUgcGF1c2VkIG1vZGUgd2hpY2ggZmFkZXMgZXZlcnl0aGluZyBvbiBzY3JlZW4gdG9cblx0ICogYmxhY2suXG5cdCAqL1xuXHRmdW5jdGlvbiBwYXVzZSgpIHtcblxuXHRcdGlmKCBjb25maWcucGF1c2UgKSB7XG5cdFx0XHR2YXIgd2FzUGF1c2VkID0gZG9tLndyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGF1c2VkJyApO1xuXG5cdFx0XHRjYW5jZWxBdXRvU2xpZGUoKTtcblx0XHRcdGRvbS53cmFwcGVyLmNsYXNzTGlzdC5hZGQoICdwYXVzZWQnICk7XG5cblx0XHRcdGlmKCB3YXNQYXVzZWQgPT09IGZhbHNlICkge1xuXHRcdFx0XHRkaXNwYXRjaEV2ZW50KCAncGF1c2VkJyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEV4aXRzIGZyb20gdGhlIHBhdXNlZCBtb2RlLlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVzdW1lKCkge1xuXG5cdFx0dmFyIHdhc1BhdXNlZCA9IGRvbS53cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucyggJ3BhdXNlZCcgKTtcblx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCAncGF1c2VkJyApO1xuXG5cdFx0Y3VlQXV0b1NsaWRlKCk7XG5cblx0XHRpZiggd2FzUGF1c2VkICkge1xuXHRcdFx0ZGlzcGF0Y2hFdmVudCggJ3Jlc3VtZWQnICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlcyB0aGUgcGF1c2VkIG1vZGUgb24gYW5kIG9mZi5cblx0ICovXG5cdGZ1bmN0aW9uIHRvZ2dsZVBhdXNlKCBvdmVycmlkZSApIHtcblxuXHRcdGlmKCB0eXBlb2Ygb3ZlcnJpZGUgPT09ICdib29sZWFuJyApIHtcblx0XHRcdG92ZXJyaWRlID8gcGF1c2UoKSA6IHJlc3VtZSgpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlzUGF1c2VkKCkgPyByZXN1bWUoKSA6IHBhdXNlKCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHdlIGFyZSBjdXJyZW50bHkgaW4gdGhlIHBhdXNlZCBtb2RlLlxuXHQgKi9cblx0ZnVuY3Rpb24gaXNQYXVzZWQoKSB7XG5cblx0XHRyZXR1cm4gZG9tLndyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCAncGF1c2VkJyApO1xuXG5cdH1cblxuXHQvKipcblx0ICogVG9nZ2xlcyB0aGUgYXV0byBzbGlkZSBtb2RlIG9uIGFuZCBvZmYuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gb3ZlcnJpZGUgT3B0aW9uYWwgZmxhZyB3aGljaCBzZXRzIHRoZSBkZXNpcmVkIHN0YXRlLlxuXHQgKiBUcnVlIG1lYW5zIGF1dG9wbGF5IHN0YXJ0cywgZmFsc2UgbWVhbnMgaXQgc3RvcHMuXG5cdCAqL1xuXG5cdGZ1bmN0aW9uIHRvZ2dsZUF1dG9TbGlkZSggb3ZlcnJpZGUgKSB7XG5cblx0XHRpZiggdHlwZW9mIG92ZXJyaWRlID09PSAnYm9vbGVhbicgKSB7XG5cdFx0XHRvdmVycmlkZSA/IHJlc3VtZUF1dG9TbGlkZSgpIDogcGF1c2VBdXRvU2xpZGUoKTtcblx0XHR9XG5cblx0XHRlbHNlIHtcblx0XHRcdGF1dG9TbGlkZVBhdXNlZCA/IHJlc3VtZUF1dG9TbGlkZSgpIDogcGF1c2VBdXRvU2xpZGUoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgaWYgdGhlIGF1dG8gc2xpZGUgbW9kZSBpcyBjdXJyZW50bHkgb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBpc0F1dG9TbGlkaW5nKCkge1xuXG5cdFx0cmV0dXJuICEhKCBhdXRvU2xpZGUgJiYgIWF1dG9TbGlkZVBhdXNlZCApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU3RlcHMgZnJvbSB0aGUgY3VycmVudCBwb2ludCBpbiB0aGUgcHJlc2VudGF0aW9uIHRvIHRoZVxuXHQgKiBzbGlkZSB3aGljaCBtYXRjaGVzIHRoZSBzcGVjaWZpZWQgaG9yaXpvbnRhbCBhbmQgdmVydGljYWxcblx0ICogaW5kaWNlcy5cblx0ICpcblx0ICogQHBhcmFtIHtpbnR9IGggSG9yaXpvbnRhbCBpbmRleCBvZiB0aGUgdGFyZ2V0IHNsaWRlXG5cdCAqIEBwYXJhbSB7aW50fSB2IFZlcnRpY2FsIGluZGV4IG9mIHRoZSB0YXJnZXQgc2xpZGVcblx0ICogQHBhcmFtIHtpbnR9IGYgT3B0aW9uYWwgaW5kZXggb2YgYSBmcmFnbWVudCB3aXRoaW4gdGhlXG5cdCAqIHRhcmdldCBzbGlkZSB0byBhY3RpdmF0ZVxuXHQgKiBAcGFyYW0ge2ludH0gbyBPcHRpb25hbCBvcmlnaW4gZm9yIHVzZSBpbiBtdWx0aW1hc3RlciBlbnZpcm9ubWVudHNcblx0ICovXG5cdGZ1bmN0aW9uIHNsaWRlKCBoLCB2LCBmLCBvICkge1xuXG5cdFx0Ly8gUmVtZW1iZXIgd2hlcmUgd2Ugd2VyZSBhdCBiZWZvcmVcblx0XHRwcmV2aW91c1NsaWRlID0gY3VycmVudFNsaWRlO1xuXG5cdFx0Ly8gUXVlcnkgYWxsIGhvcml6b250YWwgc2xpZGVzIGluIHRoZSBkZWNrXG5cdFx0dmFyIGhvcml6b250YWxTbGlkZXMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApO1xuXG5cdFx0Ly8gSWYgbm8gdmVydGljYWwgaW5kZXggaXMgc3BlY2lmaWVkIGFuZCB0aGUgdXBjb21pbmcgc2xpZGUgaXMgYVxuXHRcdC8vIHN0YWNrLCByZXN1bWUgYXQgaXRzIHByZXZpb3VzIHZlcnRpY2FsIGluZGV4XG5cdFx0aWYoIHYgPT09IHVuZGVmaW5lZCAmJiAhaXNPdmVydmlldygpICkge1xuXHRcdFx0diA9IGdldFByZXZpb3VzVmVydGljYWxJbmRleCggaG9yaXpvbnRhbFNsaWRlc1sgaCBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2Ugd2VyZSBvbiBhIHZlcnRpY2FsIHN0YWNrLCByZW1lbWJlciB3aGF0IHZlcnRpY2FsIGluZGV4XG5cdFx0Ly8gaXQgd2FzIG9uIHNvIHdlIGNhbiByZXN1bWUgYXQgdGhlIHNhbWUgcG9zaXRpb24gd2hlbiByZXR1cm5pbmdcblx0XHRpZiggcHJldmlvdXNTbGlkZSAmJiBwcmV2aW91c1NsaWRlLnBhcmVudE5vZGUgJiYgcHJldmlvdXNTbGlkZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApICkge1xuXHRcdFx0c2V0UHJldmlvdXNWZXJ0aWNhbEluZGV4KCBwcmV2aW91c1NsaWRlLnBhcmVudE5vZGUsIGluZGV4diApO1xuXHRcdH1cblxuXHRcdC8vIFJlbWVtYmVyIHRoZSBzdGF0ZSBiZWZvcmUgdGhpcyBzbGlkZVxuXHRcdHZhciBzdGF0ZUJlZm9yZSA9IHN0YXRlLmNvbmNhdCgpO1xuXG5cdFx0Ly8gUmVzZXQgdGhlIHN0YXRlIGFycmF5XG5cdFx0c3RhdGUubGVuZ3RoID0gMDtcblxuXHRcdHZhciBpbmRleGhCZWZvcmUgPSBpbmRleGggfHwgMCxcblx0XHRcdGluZGV4dkJlZm9yZSA9IGluZGV4diB8fCAwO1xuXG5cdFx0Ly8gQWN0aXZhdGUgYW5kIHRyYW5zaXRpb24gdG8gdGhlIG5ldyBzbGlkZVxuXHRcdGluZGV4aCA9IHVwZGF0ZVNsaWRlcyggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IsIGggPT09IHVuZGVmaW5lZCA/IGluZGV4aCA6IGggKTtcblx0XHRpbmRleHYgPSB1cGRhdGVTbGlkZXMoIFZFUlRJQ0FMX1NMSURFU19TRUxFQ1RPUiwgdiA9PT0gdW5kZWZpbmVkID8gaW5kZXh2IDogdiApO1xuXG5cdFx0Ly8gVXBkYXRlIHRoZSB2aXNpYmlsaXR5IG9mIHNsaWRlcyBub3cgdGhhdCB0aGUgaW5kaWNlcyBoYXZlIGNoYW5nZWRcblx0XHR1cGRhdGVTbGlkZXNWaXNpYmlsaXR5KCk7XG5cblx0XHRsYXlvdXQoKTtcblxuXHRcdC8vIEFwcGx5IHRoZSBuZXcgc3RhdGVcblx0XHRzdGF0ZUxvb3A6IGZvciggdmFyIGkgPSAwLCBsZW4gPSBzdGF0ZS5sZW5ndGg7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdC8vIENoZWNrIGlmIHRoaXMgc3RhdGUgZXhpc3RlZCBvbiB0aGUgcHJldmlvdXMgc2xpZGUuIElmIGl0XG5cdFx0XHQvLyBkaWQsIHdlIHdpbGwgYXZvaWQgYWRkaW5nIGl0IHJlcGVhdGVkbHlcblx0XHRcdGZvciggdmFyIGogPSAwOyBqIDwgc3RhdGVCZWZvcmUubGVuZ3RoOyBqKysgKSB7XG5cdFx0XHRcdGlmKCBzdGF0ZUJlZm9yZVtqXSA9PT0gc3RhdGVbaV0gKSB7XG5cdFx0XHRcdFx0c3RhdGVCZWZvcmUuc3BsaWNlKCBqLCAxICk7XG5cdFx0XHRcdFx0Y29udGludWUgc3RhdGVMb29wO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCBzdGF0ZVtpXSApO1xuXG5cdFx0XHQvLyBEaXNwYXRjaCBjdXN0b20gZXZlbnQgbWF0Y2hpbmcgdGhlIHN0YXRlJ3MgbmFtZVxuXHRcdFx0ZGlzcGF0Y2hFdmVudCggc3RhdGVbaV0gKTtcblx0XHR9XG5cblx0XHQvLyBDbGVhbiB1cCB0aGUgcmVtYWlucyBvZiB0aGUgcHJldmlvdXMgc3RhdGVcblx0XHR3aGlsZSggc3RhdGVCZWZvcmUubGVuZ3RoICkge1xuXHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoIHN0YXRlQmVmb3JlLnBvcCgpICk7XG5cdFx0fVxuXG5cdFx0Ly8gVXBkYXRlIHRoZSBvdmVydmlldyBpZiBpdCdzIGN1cnJlbnRseSBhY3RpdmVcblx0XHRpZiggaXNPdmVydmlldygpICkge1xuXHRcdFx0dXBkYXRlT3ZlcnZpZXcoKTtcblx0XHR9XG5cblx0XHQvLyBGaW5kIHRoZSBjdXJyZW50IGhvcml6b250YWwgc2xpZGUgYW5kIGFueSBwb3NzaWJsZSB2ZXJ0aWNhbCBzbGlkZXNcblx0XHQvLyB3aXRoaW4gaXRcblx0XHR2YXIgY3VycmVudEhvcml6b250YWxTbGlkZSA9IGhvcml6b250YWxTbGlkZXNbIGluZGV4aCBdLFxuXHRcdFx0Y3VycmVudFZlcnRpY2FsU2xpZGVzID0gY3VycmVudEhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKTtcblxuXHRcdC8vIFN0b3JlIHJlZmVyZW5jZXMgdG8gdGhlIHByZXZpb3VzIGFuZCBjdXJyZW50IHNsaWRlc1xuXHRcdGN1cnJlbnRTbGlkZSA9IGN1cnJlbnRWZXJ0aWNhbFNsaWRlc1sgaW5kZXh2IF0gfHwgY3VycmVudEhvcml6b250YWxTbGlkZTtcblxuXHRcdC8vIFNob3cgZnJhZ21lbnQsIGlmIHNwZWNpZmllZFxuXHRcdGlmKCB0eXBlb2YgZiAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRuYXZpZ2F0ZUZyYWdtZW50KCBmICk7XG5cdFx0fVxuXG5cdFx0Ly8gRGlzcGF0Y2ggYW4gZXZlbnQgaWYgdGhlIHNsaWRlIGNoYW5nZWRcblx0XHR2YXIgc2xpZGVDaGFuZ2VkID0gKCBpbmRleGggIT09IGluZGV4aEJlZm9yZSB8fCBpbmRleHYgIT09IGluZGV4dkJlZm9yZSApO1xuXHRcdGlmKCBzbGlkZUNoYW5nZWQgKSB7XG5cdFx0XHRkaXNwYXRjaEV2ZW50KCAnc2xpZGVjaGFuZ2VkJywge1xuXHRcdFx0XHQnaW5kZXhoJzogaW5kZXhoLFxuXHRcdFx0XHQnaW5kZXh2JzogaW5kZXh2LFxuXHRcdFx0XHQncHJldmlvdXNTbGlkZSc6IHByZXZpb3VzU2xpZGUsXG5cdFx0XHRcdCdjdXJyZW50U2xpZGUnOiBjdXJyZW50U2xpZGUsXG5cdFx0XHRcdCdvcmlnaW4nOiBvXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Ly8gRW5zdXJlIHRoYXQgdGhlIHByZXZpb3VzIHNsaWRlIGlzIG5ldmVyIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50XG5cdFx0XHRwcmV2aW91c1NsaWRlID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBTb2x2ZXMgYW4gZWRnZSBjYXNlIHdoZXJlIHRoZSBwcmV2aW91cyBzbGlkZSBtYWludGFpbnMgdGhlXG5cdFx0Ly8gJ3ByZXNlbnQnIGNsYXNzIHdoZW4gbmF2aWdhdGluZyBiZXR3ZWVuIGFkamFjZW50IHZlcnRpY2FsXG5cdFx0Ly8gc3RhY2tzXG5cdFx0aWYoIHByZXZpb3VzU2xpZGUgKSB7XG5cdFx0XHRwcmV2aW91c1NsaWRlLmNsYXNzTGlzdC5yZW1vdmUoICdwcmVzZW50JyApO1xuXHRcdFx0cHJldmlvdXNTbGlkZS5zZXRBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicsICd0cnVlJyApO1xuXG5cdFx0XHQvLyBSZXNldCBhbGwgc2xpZGVzIHVwb24gbmF2aWdhdGUgdG8gaG9tZVxuXHRcdFx0Ly8gSXNzdWU6ICMyODVcblx0XHRcdGlmICggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvciggSE9NRV9TTElERV9TRUxFQ1RPUiApLmNsYXNzTGlzdC5jb250YWlucyggJ3ByZXNlbnQnICkgKSB7XG5cdFx0XHRcdC8vIExhdW5jaCBhc3luYyB0YXNrXG5cdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR2YXIgc2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKyAnLnN0YWNrJykgKSwgaTtcblx0XHRcdFx0XHRmb3IoIGkgaW4gc2xpZGVzICkge1xuXHRcdFx0XHRcdFx0aWYoIHNsaWRlc1tpXSApIHtcblx0XHRcdFx0XHRcdFx0Ly8gUmVzZXQgc3RhY2tcblx0XHRcdFx0XHRcdFx0c2V0UHJldmlvdXNWZXJ0aWNhbEluZGV4KCBzbGlkZXNbaV0sIDAgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIDAgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgZW1iZWRkZWQgY29udGVudFxuXHRcdGlmKCBzbGlkZUNoYW5nZWQgfHwgIXByZXZpb3VzU2xpZGUgKSB7XG5cdFx0XHRzdG9wRW1iZWRkZWRDb250ZW50KCBwcmV2aW91c1NsaWRlICk7XG5cdFx0XHRzdGFydEVtYmVkZGVkQ29udGVudCggY3VycmVudFNsaWRlICk7XG5cdFx0fVxuXG5cdFx0Ly8gQW5ub3VuY2UgdGhlIGN1cnJlbnQgc2xpZGUgY29udGVudHMsIGZvciBzY3JlZW4gcmVhZGVyc1xuXHRcdGRvbS5zdGF0dXNEaXYudGV4dENvbnRlbnQgPSBjdXJyZW50U2xpZGUudGV4dENvbnRlbnQ7XG5cblx0XHR1cGRhdGVDb250cm9scygpO1xuXHRcdHVwZGF0ZVByb2dyZXNzKCk7XG5cdFx0dXBkYXRlQmFja2dyb3VuZCgpO1xuXHRcdHVwZGF0ZVBhcmFsbGF4KCk7XG5cdFx0dXBkYXRlU2xpZGVOdW1iZXIoKTtcblxuXHRcdC8vIFVwZGF0ZSB0aGUgVVJMIGhhc2hcblx0XHR3cml0ZVVSTCgpO1xuXG5cdFx0Y3VlQXV0b1NsaWRlKCk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTeW5jcyB0aGUgcHJlc2VudGF0aW9uIHdpdGggdGhlIGN1cnJlbnQgRE9NLiBVc2VmdWxcblx0ICogd2hlbiBuZXcgc2xpZGVzIG9yIGNvbnRyb2wgZWxlbWVudHMgYXJlIGFkZGVkIG9yIHdoZW5cblx0ICogdGhlIGNvbmZpZ3VyYXRpb24gaGFzIGNoYW5nZWQuXG5cdCAqL1xuXHRmdW5jdGlvbiBzeW5jKCkge1xuXG5cdFx0Ly8gU3Vic2NyaWJlIHRvIGlucHV0XG5cdFx0cmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcblx0XHRhZGRFdmVudExpc3RlbmVycygpO1xuXG5cdFx0Ly8gRm9yY2UgYSBsYXlvdXQgdG8gbWFrZSBzdXJlIHRoZSBjdXJyZW50IGNvbmZpZyBpcyBhY2NvdW50ZWQgZm9yXG5cdFx0bGF5b3V0KCk7XG5cblx0XHQvLyBSZWZsZWN0IHRoZSBjdXJyZW50IGF1dG9TbGlkZSB2YWx1ZVxuXHRcdGF1dG9TbGlkZSA9IGNvbmZpZy5hdXRvU2xpZGU7XG5cblx0XHQvLyBTdGFydCBhdXRvLXNsaWRpbmcgaWYgaXQncyBlbmFibGVkXG5cdFx0Y3VlQXV0b1NsaWRlKCk7XG5cblx0XHQvLyBSZS1jcmVhdGUgdGhlIHNsaWRlIGJhY2tncm91bmRzXG5cdFx0Y3JlYXRlQmFja2dyb3VuZHMoKTtcblxuXHRcdC8vIFdyaXRlIHRoZSBjdXJyZW50IGhhc2ggdG8gdGhlIFVSTFxuXHRcdHdyaXRlVVJMKCk7XG5cblx0XHRzb3J0QWxsRnJhZ21lbnRzKCk7XG5cblx0XHR1cGRhdGVDb250cm9scygpO1xuXHRcdHVwZGF0ZVByb2dyZXNzKCk7XG5cdFx0dXBkYXRlQmFja2dyb3VuZCggdHJ1ZSApO1xuXHRcdHVwZGF0ZVNsaWRlTnVtYmVyKCk7XG5cdFx0dXBkYXRlU2xpZGVzVmlzaWJpbGl0eSgpO1xuXG5cdFx0Zm9ybWF0RW1iZWRkZWRDb250ZW50KCk7XG5cdFx0c3RhcnRFbWJlZGRlZENvbnRlbnQoIGN1cnJlbnRTbGlkZSApO1xuXG5cdFx0aWYoIGlzT3ZlcnZpZXcoKSApIHtcblx0XHRcdGxheW91dE92ZXJ2aWV3KCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogUmVzZXRzIGFsbCB2ZXJ0aWNhbCBzbGlkZXMgc28gdGhhdCBvbmx5IHRoZSBmaXJzdFxuXHQgKiBpcyB2aXNpYmxlLlxuXHQgKi9cblx0ZnVuY3Rpb24gcmVzZXRWZXJ0aWNhbFNsaWRlcygpIHtcblxuXHRcdHZhciBob3Jpem9udGFsU2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApO1xuXHRcdGhvcml6b250YWxTbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIGhvcml6b250YWxTbGlkZSApIHtcblxuXHRcdFx0dmFyIHZlcnRpY2FsU2xpZGVzID0gdG9BcnJheSggaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICk7XG5cdFx0XHR2ZXJ0aWNhbFNsaWRlcy5mb3JFYWNoKCBmdW5jdGlvbiggdmVydGljYWxTbGlkZSwgeSApIHtcblxuXHRcdFx0XHRpZiggeSA+IDAgKSB7XG5cdFx0XHRcdFx0dmVydGljYWxTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCAncHJlc2VudCcgKTtcblx0XHRcdFx0XHR2ZXJ0aWNhbFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoICdwYXN0JyApO1xuXHRcdFx0XHRcdHZlcnRpY2FsU2xpZGUuY2xhc3NMaXN0LmFkZCggJ2Z1dHVyZScgKTtcblx0XHRcdFx0XHR2ZXJ0aWNhbFNsaWRlLnNldEF0dHJpYnV0ZSggJ2FyaWEtaGlkZGVuJywgJ3RydWUnICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSApO1xuXG5cdFx0fSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogU29ydHMgYW5kIGZvcm1hdHMgYWxsIG9mIGZyYWdtZW50cyBpbiB0aGVcblx0ICogcHJlc2VudGF0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gc29ydEFsbEZyYWdtZW50cygpIHtcblxuXHRcdHZhciBob3Jpem9udGFsU2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApO1xuXHRcdGhvcml6b250YWxTbGlkZXMuZm9yRWFjaCggZnVuY3Rpb24oIGhvcml6b250YWxTbGlkZSApIHtcblxuXHRcdFx0dmFyIHZlcnRpY2FsU2xpZGVzID0gdG9BcnJheSggaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICk7XG5cdFx0XHR2ZXJ0aWNhbFNsaWRlcy5mb3JFYWNoKCBmdW5jdGlvbiggdmVydGljYWxTbGlkZSwgeSApIHtcblxuXHRcdFx0XHRzb3J0RnJhZ21lbnRzKCB2ZXJ0aWNhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICkgKTtcblxuXHRcdFx0fSApO1xuXG5cdFx0XHRpZiggdmVydGljYWxTbGlkZXMubGVuZ3RoID09PSAwICkgc29ydEZyYWdtZW50cyggaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICkgKTtcblxuXHRcdH0gKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgb25lIGRpbWVuc2lvbiBvZiBzbGlkZXMgYnkgc2hvd2luZyB0aGUgc2xpZGVcblx0ICogd2l0aCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuXHQgKlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3IgQSBDU1Mgc2VsZWN0b3IgdGhhdCB3aWxsIGZldGNoXG5cdCAqIHRoZSBncm91cCBvZiBzbGlkZXMgd2UgYXJlIHdvcmtpbmcgd2l0aFxuXHQgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBzbGlkZSB0aGF0IHNob3VsZCBiZVxuXHQgKiBzaG93blxuXHQgKlxuXHQgKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgc2xpZGUgdGhhdCBpcyBub3cgc2hvd24sXG5cdCAqIG1pZ2h0IGRpZmZlciBmcm9tIHRoZSBwYXNzZWQgaW4gaW5kZXggaWYgaXQgd2FzIG91dCBvZlxuXHQgKiBib3VuZHMuXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVTbGlkZXMoIHNlbGVjdG9yLCBpbmRleCApIHtcblxuXHRcdC8vIFNlbGVjdCBhbGwgc2xpZGVzIGFuZCBjb252ZXJ0IHRoZSBOb2RlTGlzdCByZXN1bHQgdG9cblx0XHQvLyBhbiBhcnJheVxuXHRcdHZhciBzbGlkZXMgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBzZWxlY3RvciApICksXG5cdFx0XHRzbGlkZXNMZW5ndGggPSBzbGlkZXMubGVuZ3RoO1xuXG5cdFx0dmFyIHByaW50TW9kZSA9IGlzUHJpbnRpbmdQREYoKTtcblxuXHRcdGlmKCBzbGlkZXNMZW5ndGggKSB7XG5cblx0XHRcdC8vIFNob3VsZCB0aGUgaW5kZXggbG9vcD9cblx0XHRcdGlmKCBjb25maWcubG9vcCApIHtcblx0XHRcdFx0aW5kZXggJT0gc2xpZGVzTGVuZ3RoO1xuXG5cdFx0XHRcdGlmKCBpbmRleCA8IDAgKSB7XG5cdFx0XHRcdFx0aW5kZXggPSBzbGlkZXNMZW5ndGggKyBpbmRleDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbmZvcmNlIG1heCBhbmQgbWluaW11bSBpbmRleCBib3VuZHNcblx0XHRcdGluZGV4ID0gTWF0aC5tYXgoIE1hdGgubWluKCBpbmRleCwgc2xpZGVzTGVuZ3RoIC0gMSApLCAwICk7XG5cblx0XHRcdGZvciggdmFyIGkgPSAwOyBpIDwgc2xpZGVzTGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdHZhciBlbGVtZW50ID0gc2xpZGVzW2ldO1xuXG5cdFx0XHRcdHZhciByZXZlcnNlID0gY29uZmlnLnJ0bCAmJiAhaXNWZXJ0aWNhbFNsaWRlKCBlbGVtZW50ICk7XG5cblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAncGFzdCcgKTtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAncHJlc2VudCcgKTtcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnZnV0dXJlJyApO1xuXG5cdFx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL2h0bWwvd2cvZHJhZnRzL2h0bWwvbWFzdGVyL2VkaXRpbmcuaHRtbCN0aGUtaGlkZGVuLWF0dHJpYnV0ZVxuXHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSggJ2hpZGRlbicsICcnICk7XG5cdFx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScgKTtcblxuXHRcdFx0XHQvLyBJZiB0aGlzIGVsZW1lbnQgY29udGFpbnMgdmVydGljYWwgc2xpZGVzXG5cdFx0XHRcdGlmKCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoICdzZWN0aW9uJyApICkge1xuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3N0YWNrJyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgd2UncmUgcHJpbnRpbmcgc3RhdGljIHNsaWRlcywgYWxsIHNsaWRlcyBhcmUgXCJwcmVzZW50XCJcblx0XHRcdFx0aWYoIHByaW50TW9kZSApIHtcblx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwcmVzZW50JyApO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIGkgPCBpbmRleCApIHtcblx0XHRcdFx0XHQvLyBBbnkgZWxlbWVudCBwcmV2aW91cyB0byBpbmRleCBpcyBnaXZlbiB0aGUgJ3Bhc3QnIGNsYXNzXG5cdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCByZXZlcnNlID8gJ2Z1dHVyZScgOiAncGFzdCcgKTtcblxuXHRcdFx0XHRcdGlmKCBjb25maWcuZnJhZ21lbnRzICkge1xuXHRcdFx0XHRcdFx0dmFyIHBhc3RGcmFnbWVudHMgPSB0b0FycmF5KCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICkgKTtcblxuXHRcdFx0XHRcdFx0Ly8gU2hvdyBhbGwgZnJhZ21lbnRzIG9uIHByaW9yIHNsaWRlc1xuXHRcdFx0XHRcdFx0d2hpbGUoIHBhc3RGcmFnbWVudHMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0XHR2YXIgcGFzdEZyYWdtZW50ID0gcGFzdEZyYWdtZW50cy5wb3AoKTtcblx0XHRcdFx0XHRcdFx0cGFzdEZyYWdtZW50LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJyApO1xuXHRcdFx0XHRcdFx0XHRwYXN0RnJhZ21lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2N1cnJlbnQtZnJhZ21lbnQnICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoIGkgPiBpbmRleCApIHtcblx0XHRcdFx0XHQvLyBBbnkgZWxlbWVudCBzdWJzZXF1ZW50IHRvIGluZGV4IGlzIGdpdmVuIHRoZSAnZnV0dXJlJyBjbGFzc1xuXHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggcmV2ZXJzZSA/ICdwYXN0JyA6ICdmdXR1cmUnICk7XG5cblx0XHRcdFx0XHRpZiggY29uZmlnLmZyYWdtZW50cyApIHtcblx0XHRcdFx0XHRcdHZhciBmdXR1cmVGcmFnbWVudHMgPSB0b0FycmF5KCBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQudmlzaWJsZScgKSApO1xuXG5cdFx0XHRcdFx0XHQvLyBObyBmcmFnbWVudHMgaW4gZnV0dXJlIHNsaWRlcyBzaG91bGQgYmUgdmlzaWJsZSBhaGVhZCBvZiB0aW1lXG5cdFx0XHRcdFx0XHR3aGlsZSggZnV0dXJlRnJhZ21lbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRcdFx0dmFyIGZ1dHVyZUZyYWdtZW50ID0gZnV0dXJlRnJhZ21lbnRzLnBvcCgpO1xuXHRcdFx0XHRcdFx0XHRmdXR1cmVGcmFnbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAndmlzaWJsZScgKTtcblx0XHRcdFx0XHRcdFx0ZnV0dXJlRnJhZ21lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2N1cnJlbnQtZnJhZ21lbnQnICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1hcmsgdGhlIGN1cnJlbnQgc2xpZGUgYXMgcHJlc2VudFxuXHRcdFx0c2xpZGVzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCAncHJlc2VudCcgKTtcblx0XHRcdHNsaWRlc1tpbmRleF0ucmVtb3ZlQXR0cmlidXRlKCAnaGlkZGVuJyApO1xuXHRcdFx0c2xpZGVzW2luZGV4XS5yZW1vdmVBdHRyaWJ1dGUoICdhcmlhLWhpZGRlbicgKTtcblxuXHRcdFx0Ly8gSWYgdGhpcyBzbGlkZSBoYXMgYSBzdGF0ZSBhc3NvY2lhdGVkIHdpdGggaXQsIGFkZCBpdFxuXHRcdFx0Ly8gb250byB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZGVja1xuXHRcdFx0dmFyIHNsaWRlU3RhdGUgPSBzbGlkZXNbaW5kZXhdLmdldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnICk7XG5cdFx0XHRpZiggc2xpZGVTdGF0ZSApIHtcblx0XHRcdFx0c3RhdGUgPSBzdGF0ZS5jb25jYXQoIHNsaWRlU3RhdGUuc3BsaXQoICcgJyApICk7XG5cdFx0XHR9XG5cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBTaW5jZSB0aGVyZSBhcmUgbm8gc2xpZGVzIHdlIGNhbid0IGJlIGFueXdoZXJlIGJleW9uZCB0aGVcblx0XHRcdC8vIHplcm90aCBpbmRleFxuXHRcdFx0aW5kZXggPSAwO1xuXHRcdH1cblxuXHRcdHJldHVybiBpbmRleDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE9wdGltaXphdGlvbiBtZXRob2Q7IGhpZGUgYWxsIHNsaWRlcyB0aGF0IGFyZSBmYXIgYXdheVxuXHQgKiBmcm9tIHRoZSBwcmVzZW50IHNsaWRlLlxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlU2xpZGVzVmlzaWJpbGl0eSgpIHtcblxuXHRcdC8vIFNlbGVjdCBhbGwgc2xpZGVzIGFuZCBjb252ZXJ0IHRoZSBOb2RlTGlzdCByZXN1bHQgdG9cblx0XHQvLyBhbiBhcnJheVxuXHRcdHZhciBob3Jpem9udGFsU2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApLFxuXHRcdFx0aG9yaXpvbnRhbFNsaWRlc0xlbmd0aCA9IGhvcml6b250YWxTbGlkZXMubGVuZ3RoLFxuXHRcdFx0ZGlzdGFuY2VYLFxuXHRcdFx0ZGlzdGFuY2VZO1xuXG5cdFx0aWYoIGhvcml6b250YWxTbGlkZXNMZW5ndGggJiYgdHlwZW9mIGluZGV4aCAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cblx0XHRcdC8vIFRoZSBudW1iZXIgb2Ygc3RlcHMgYXdheSBmcm9tIHRoZSBwcmVzZW50IHNsaWRlIHRoYXQgd2lsbFxuXHRcdFx0Ly8gYmUgdmlzaWJsZVxuXHRcdFx0dmFyIHZpZXdEaXN0YW5jZSA9IGlzT3ZlcnZpZXcoKSA/IDEwIDogY29uZmlnLnZpZXdEaXN0YW5jZTtcblxuXHRcdFx0Ly8gTGltaXQgdmlldyBkaXN0YW5jZSBvbiB3ZWFrZXIgZGV2aWNlc1xuXHRcdFx0aWYoIGlzTW9iaWxlRGV2aWNlICkge1xuXHRcdFx0XHR2aWV3RGlzdGFuY2UgPSBpc092ZXJ2aWV3KCkgPyA2IDogMjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWxsIHNsaWRlcyBuZWVkIHRvIGJlIHZpc2libGUgd2hlbiBleHBvcnRpbmcgdG8gUERGXG5cdFx0XHRpZiggaXNQcmludGluZ1BERigpICkge1xuXHRcdFx0XHR2aWV3RGlzdGFuY2UgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoIHZhciB4ID0gMDsgeCA8IGhvcml6b250YWxTbGlkZXNMZW5ndGg7IHgrKyApIHtcblx0XHRcdFx0dmFyIGhvcml6b250YWxTbGlkZSA9IGhvcml6b250YWxTbGlkZXNbeF07XG5cblx0XHRcdFx0dmFyIHZlcnRpY2FsU2xpZGVzID0gdG9BcnJheSggaG9yaXpvbnRhbFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdzZWN0aW9uJyApICksXG5cdFx0XHRcdFx0dmVydGljYWxTbGlkZXNMZW5ndGggPSB2ZXJ0aWNhbFNsaWRlcy5sZW5ndGg7XG5cblx0XHRcdFx0Ly8gRGV0ZXJtaW5lIGhvdyBmYXIgYXdheSB0aGlzIHNsaWRlIGlzIGZyb20gdGhlIHByZXNlbnRcblx0XHRcdFx0ZGlzdGFuY2VYID0gTWF0aC5hYnMoICggaW5kZXhoIHx8IDAgKSAtIHggKSB8fCAwO1xuXG5cdFx0XHRcdC8vIElmIHRoZSBwcmVzZW50YXRpb24gaXMgbG9vcGVkLCBkaXN0YW5jZSBzaG91bGQgbWVhc3VyZVxuXHRcdFx0XHQvLyAxIGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IHNsaWRlc1xuXHRcdFx0XHRpZiggY29uZmlnLmxvb3AgKSB7XG5cdFx0XHRcdFx0ZGlzdGFuY2VYID0gTWF0aC5hYnMoICggKCBpbmRleGggfHwgMCApIC0geCApICUgKCBob3Jpem9udGFsU2xpZGVzTGVuZ3RoIC0gdmlld0Rpc3RhbmNlICkgKSB8fCAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2hvdyB0aGUgaG9yaXpvbnRhbCBzbGlkZSBpZiBpdCdzIHdpdGhpbiB0aGUgdmlldyBkaXN0YW5jZVxuXHRcdFx0XHRpZiggZGlzdGFuY2VYIDwgdmlld0Rpc3RhbmNlICkge1xuXHRcdFx0XHRcdHNob3dTbGlkZSggaG9yaXpvbnRhbFNsaWRlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0aGlkZVNsaWRlKCBob3Jpem9udGFsU2xpZGUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCB2ZXJ0aWNhbFNsaWRlc0xlbmd0aCApIHtcblxuXHRcdFx0XHRcdHZhciBveSA9IGdldFByZXZpb3VzVmVydGljYWxJbmRleCggaG9yaXpvbnRhbFNsaWRlICk7XG5cblx0XHRcdFx0XHRmb3IoIHZhciB5ID0gMDsgeSA8IHZlcnRpY2FsU2xpZGVzTGVuZ3RoOyB5KysgKSB7XG5cdFx0XHRcdFx0XHR2YXIgdmVydGljYWxTbGlkZSA9IHZlcnRpY2FsU2xpZGVzW3ldO1xuXG5cdFx0XHRcdFx0XHRkaXN0YW5jZVkgPSB4ID09PSAoIGluZGV4aCB8fCAwICkgPyBNYXRoLmFicyggKCBpbmRleHYgfHwgMCApIC0geSApIDogTWF0aC5hYnMoIHkgLSBveSApO1xuXG5cdFx0XHRcdFx0XHRpZiggZGlzdGFuY2VYICsgZGlzdGFuY2VZIDwgdmlld0Rpc3RhbmNlICkge1xuXHRcdFx0XHRcdFx0XHRzaG93U2xpZGUoIHZlcnRpY2FsU2xpZGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRoaWRlU2xpZGUoIHZlcnRpY2FsU2xpZGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgcHJvZ3Jlc3MgYmFyIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc2xpZGUuXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVQcm9ncmVzcygpIHtcblxuXHRcdC8vIFVwZGF0ZSBwcm9ncmVzcyBpZiBlbmFibGVkXG5cdFx0aWYoIGNvbmZpZy5wcm9ncmVzcyAmJiBkb20ucHJvZ3Jlc3NiYXIgKSB7XG5cblx0XHRcdGRvbS5wcm9ncmVzc2Jhci5zdHlsZS53aWR0aCA9IGdldFByb2dyZXNzKCkgKiBkb20ud3JhcHBlci5vZmZzZXRXaWR0aCArICdweCc7XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBzbGlkZSBudW1iZXIgZGl2IHRvIHJlZmxlY3QgdGhlIGN1cnJlbnQgc2xpZGUuXG5cdCAqXG5cdCAqIFNsaWRlIG51bWJlciBmb3JtYXQgY2FuIGJlIGRlZmluZWQgYXMgYSBzdHJpbmcgdXNpbmcgdGhlXG5cdCAqIGZvbGxvd2luZyB2YXJpYWJsZXM6XG5cdCAqICBoOiBjdXJyZW50IHNsaWRlJ3MgaG9yaXpvbnRhbCBpbmRleFxuXHQgKiAgdjogY3VycmVudCBzbGlkZSdzIHZlcnRpY2FsIGluZGV4XG5cdCAqICBjOiBjdXJyZW50IHNsaWRlIGluZGV4IChmbGF0dGVuZWQpXG5cdCAqICB0OiB0b3RhbCBudW1iZXIgb2Ygc2xpZGVzIChmbGF0dGVuZWQpXG5cdCAqL1xuXHRmdW5jdGlvbiB1cGRhdGVTbGlkZU51bWJlcigpIHtcblxuXHRcdC8vIFVwZGF0ZSBzbGlkZSBudW1iZXIgaWYgZW5hYmxlZFxuXHRcdGlmKCBjb25maWcuc2xpZGVOdW1iZXIgJiYgZG9tLnNsaWRlTnVtYmVyKSB7XG5cblx0XHRcdC8vIERlZmF1bHQgdG8gb25seSBzaG93aW5nIHRoZSBjdXJyZW50IHNsaWRlIG51bWJlclxuXHRcdFx0dmFyIGZvcm1hdCA9ICdjJztcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYSBjdXN0b20gc2xpZGUgbnVtYmVyIGZvcm1hdCBpcyBhdmFpbGFibGVcblx0XHRcdGlmKCB0eXBlb2YgY29uZmlnLnNsaWRlTnVtYmVyID09PSAnc3RyaW5nJyApIHtcblx0XHRcdFx0Zm9ybWF0ID0gY29uZmlnLnNsaWRlTnVtYmVyO1xuXHRcdFx0fVxuXG5cdFx0XHRkb20uc2xpZGVOdW1iZXIuaW5uZXJIVE1MID0gZm9ybWF0LnJlcGxhY2UoIC9oL2csIGluZGV4aCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSggL3YvZywgaW5kZXh2IClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKCAvYy9nLCBnZXRTbGlkZVBhc3RDb3VudCgpICsgMSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQucmVwbGFjZSggL3QvZywgZ2V0VG90YWxTbGlkZXMoKSApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgdGhlIHN0YXRlIG9mIGFsbCBjb250cm9sL25hdmlnYXRpb24gYXJyb3dzLlxuXHQgKi9cblx0ZnVuY3Rpb24gdXBkYXRlQ29udHJvbHMoKSB7XG5cblx0XHR2YXIgcm91dGVzID0gYXZhaWxhYmxlUm91dGVzKCk7XG5cdFx0dmFyIGZyYWdtZW50cyA9IGF2YWlsYWJsZUZyYWdtZW50cygpO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSAnZW5hYmxlZCcgY2xhc3MgZnJvbSBhbGwgZGlyZWN0aW9uc1xuXHRcdGRvbS5jb250cm9sc0xlZnQuY29uY2F0KCBkb20uY29udHJvbHNSaWdodCApXG5cdFx0XHRcdFx0XHQuY29uY2F0KCBkb20uY29udHJvbHNVcCApXG5cdFx0XHRcdFx0XHQuY29uY2F0KCBkb20uY29udHJvbHNEb3duIClcblx0XHRcdFx0XHRcdC5jb25jYXQoIGRvbS5jb250cm9sc1ByZXYgKVxuXHRcdFx0XHRcdFx0LmNvbmNhdCggZG9tLmNvbnRyb2xzTmV4dCApLmZvckVhY2goIGZ1bmN0aW9uKCBub2RlICkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnZW5hYmxlZCcgKTtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2ZyYWdtZW50ZWQnICk7XG5cdFx0fSApO1xuXG5cdFx0Ly8gQWRkIHRoZSAnZW5hYmxlZCcgY2xhc3MgdG8gdGhlIGF2YWlsYWJsZSByb3V0ZXNcblx0XHRpZiggcm91dGVzLmxlZnQgKSBkb20uY29udHJvbHNMZWZ0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2VuYWJsZWQnICk7XHR9ICk7XG5cdFx0aWYoIHJvdXRlcy5yaWdodCApIGRvbS5jb250cm9sc1JpZ2h0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2VuYWJsZWQnICk7IH0gKTtcblx0XHRpZiggcm91dGVzLnVwICkgZG9tLmNvbnRyb2xzVXAuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTtcdH0gKTtcblx0XHRpZiggcm91dGVzLmRvd24gKSBkb20uY29udHJvbHNEb3duLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2VuYWJsZWQnICk7IH0gKTtcblxuXHRcdC8vIFByZXYvbmV4dCBidXR0b25zXG5cdFx0aWYoIHJvdXRlcy5sZWZ0IHx8IHJvdXRlcy51cCApIGRvbS5jb250cm9sc1ByZXYuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZW5hYmxlZCcgKTsgfSApO1xuXHRcdGlmKCByb3V0ZXMucmlnaHQgfHwgcm91dGVzLmRvd24gKSBkb20uY29udHJvbHNOZXh0LmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHsgZWwuY2xhc3NMaXN0LmFkZCggJ2VuYWJsZWQnICk7IH0gKTtcblxuXHRcdC8vIEhpZ2hsaWdodCBmcmFnbWVudCBkaXJlY3Rpb25zXG5cdFx0aWYoIGN1cnJlbnRTbGlkZSApIHtcblxuXHRcdFx0Ly8gQWx3YXlzIGFwcGx5IGZyYWdtZW50IGRlY29yYXRvciB0byBwcmV2L25leHQgYnV0dG9uc1xuXHRcdFx0aWYoIGZyYWdtZW50cy5wcmV2ICkgZG9tLmNvbnRyb2xzUHJldi5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdmcmFnbWVudGVkJywgJ2VuYWJsZWQnICk7IH0gKTtcblx0XHRcdGlmKCBmcmFnbWVudHMubmV4dCApIGRvbS5jb250cm9sc05leHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZnJhZ21lbnRlZCcsICdlbmFibGVkJyApOyB9ICk7XG5cblx0XHRcdC8vIEFwcGx5IGZyYWdtZW50IGRlY29yYXRvcnMgdG8gZGlyZWN0aW9uYWwgYnV0dG9ucyBiYXNlZCBvblxuXHRcdFx0Ly8gd2hhdCBzbGlkZSBheGlzIHRoZXkgYXJlIGluXG5cdFx0XHRpZiggaXNWZXJ0aWNhbFNsaWRlKCBjdXJyZW50U2xpZGUgKSApIHtcblx0XHRcdFx0aWYoIGZyYWdtZW50cy5wcmV2ICkgZG9tLmNvbnRyb2xzVXAuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZnJhZ21lbnRlZCcsICdlbmFibGVkJyApOyB9ICk7XG5cdFx0XHRcdGlmKCBmcmFnbWVudHMubmV4dCApIGRvbS5jb250cm9sc0Rvd24uZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZnJhZ21lbnRlZCcsICdlbmFibGVkJyApOyB9ICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYoIGZyYWdtZW50cy5wcmV2ICkgZG9tLmNvbnRyb2xzTGVmdC5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7IGVsLmNsYXNzTGlzdC5hZGQoICdmcmFnbWVudGVkJywgJ2VuYWJsZWQnICk7IH0gKTtcblx0XHRcdFx0aWYoIGZyYWdtZW50cy5uZXh0ICkgZG9tLmNvbnRyb2xzUmlnaHQuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkgeyBlbC5jbGFzc0xpc3QuYWRkKCAnZnJhZ21lbnRlZCcsICdlbmFibGVkJyApOyB9ICk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIHRvIHJlZmxlY3QgdGhlIGN1cnJlbnRcblx0ICogc2xpZGUuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5jbHVkZUFsbCBJZiB0cnVlLCB0aGUgYmFja2dyb3VuZHMgb2Zcblx0ICogYWxsIHZlcnRpY2FsIHNsaWRlcyAobm90IGp1c3QgdGhlIHByZXNlbnQpIHdpbGwgYmUgdXBkYXRlZC5cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZUJhY2tncm91bmQoIGluY2x1ZGVBbGwgKSB7XG5cblx0XHR2YXIgY3VycmVudEJhY2tncm91bmQgPSBudWxsO1xuXG5cdFx0Ly8gUmV2ZXJzZSBwYXN0L2Z1dHVyZSBjbGFzc2VzIHdoZW4gaW4gUlRMIG1vZGVcblx0XHR2YXIgaG9yaXpvbnRhbFBhc3QgPSBjb25maWcucnRsID8gJ2Z1dHVyZScgOiAncGFzdCcsXG5cdFx0XHRob3Jpem9udGFsRnV0dXJlID0gY29uZmlnLnJ0bCA/ICdwYXN0JyA6ICdmdXR1cmUnO1xuXG5cdFx0Ly8gVXBkYXRlIHRoZSBjbGFzc2VzIG9mIGFsbCBiYWNrZ3JvdW5kcyB0byBtYXRjaCB0aGVcblx0XHQvLyBzdGF0ZXMgb2YgdGhlaXIgc2xpZGVzIChwYXN0L3ByZXNlbnQvZnV0dXJlKVxuXHRcdHRvQXJyYXkoIGRvbS5iYWNrZ3JvdW5kLmNoaWxkTm9kZXMgKS5mb3JFYWNoKCBmdW5jdGlvbiggYmFja2dyb3VuZGgsIGggKSB7XG5cblx0XHRcdGJhY2tncm91bmRoLmNsYXNzTGlzdC5yZW1vdmUoICdwYXN0JyApO1xuXHRcdFx0YmFja2dyb3VuZGguY2xhc3NMaXN0LnJlbW92ZSggJ3ByZXNlbnQnICk7XG5cdFx0XHRiYWNrZ3JvdW5kaC5jbGFzc0xpc3QucmVtb3ZlKCAnZnV0dXJlJyApO1xuXG5cdFx0XHRpZiggaCA8IGluZGV4aCApIHtcblx0XHRcdFx0YmFja2dyb3VuZGguY2xhc3NMaXN0LmFkZCggaG9yaXpvbnRhbFBhc3QgKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBoID4gaW5kZXhoICkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kaC5jbGFzc0xpc3QuYWRkKCBob3Jpem9udGFsRnV0dXJlICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YmFja2dyb3VuZGguY2xhc3NMaXN0LmFkZCggJ3ByZXNlbnQnICk7XG5cblx0XHRcdFx0Ly8gU3RvcmUgYSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgYmFja2dyb3VuZCBlbGVtZW50XG5cdFx0XHRcdGN1cnJlbnRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZGg7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBpbmNsdWRlQWxsIHx8IGggPT09IGluZGV4aCApIHtcblx0XHRcdFx0dG9BcnJheSggYmFja2dyb3VuZGgucXVlcnlTZWxlY3RvckFsbCggJy5zbGlkZS1iYWNrZ3JvdW5kJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGJhY2tncm91bmR2LCB2ICkge1xuXG5cdFx0XHRcdFx0YmFja2dyb3VuZHYuY2xhc3NMaXN0LnJlbW92ZSggJ3Bhc3QnICk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZHYuY2xhc3NMaXN0LnJlbW92ZSggJ3ByZXNlbnQnICk7XG5cdFx0XHRcdFx0YmFja2dyb3VuZHYuY2xhc3NMaXN0LnJlbW92ZSggJ2Z1dHVyZScgKTtcblxuXHRcdFx0XHRcdGlmKCB2IDwgaW5kZXh2ICkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZHYuY2xhc3NMaXN0LmFkZCggJ3Bhc3QnICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCB2ID4gaW5kZXh2ICkge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZHYuY2xhc3NMaXN0LmFkZCggJ2Z1dHVyZScgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kdi5jbGFzc0xpc3QuYWRkKCAncHJlc2VudCcgKTtcblxuXHRcdFx0XHRcdFx0Ly8gT25seSBpZiB0aGlzIGlzIHRoZSBwcmVzZW50IGhvcml6b250YWwgYW5kIHZlcnRpY2FsIHNsaWRlXG5cdFx0XHRcdFx0XHRpZiggaCA9PT0gaW5kZXhoICkgY3VycmVudEJhY2tncm91bmQgPSBiYWNrZ3JvdW5kdjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0fSApO1xuXG5cdFx0Ly8gU3RvcCBhbnkgY3VycmVudGx5IHBsYXlpbmcgdmlkZW8gYmFja2dyb3VuZFxuXHRcdGlmKCBwcmV2aW91c0JhY2tncm91bmQgKSB7XG5cblx0XHRcdHZhciBwcmV2aW91c1ZpZGVvID0gcHJldmlvdXNCYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoICd2aWRlbycgKTtcblx0XHRcdGlmKCBwcmV2aW91c1ZpZGVvICkgcHJldmlvdXNWaWRlby5wYXVzZSgpO1xuXG5cdFx0fVxuXG5cdFx0aWYoIGN1cnJlbnRCYWNrZ3JvdW5kICkge1xuXG5cdFx0XHQvLyBTdGFydCB2aWRlbyBwbGF5YmFja1xuXHRcdFx0dmFyIGN1cnJlbnRWaWRlbyA9IGN1cnJlbnRCYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3IoICd2aWRlbycgKTtcblx0XHRcdGlmKCBjdXJyZW50VmlkZW8gKSB7XG5cdFx0XHRcdGN1cnJlbnRWaWRlby5jdXJyZW50VGltZSA9IDA7XG5cdFx0XHRcdGN1cnJlbnRWaWRlby5wbGF5KCk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBiYWNrZ3JvdW5kSW1hZ2VVUkwgPSBjdXJyZW50QmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgfHwgJyc7XG5cblx0XHRcdC8vIFJlc3RhcnQgR0lGcyAoZG9lc24ndCB3b3JrIGluIEZpcmVmb3gpXG5cdFx0XHRpZiggL1xcLmdpZi9pLnRlc3QoIGJhY2tncm91bmRJbWFnZVVSTCApICkge1xuXHRcdFx0XHRjdXJyZW50QmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnJztcblx0XHRcdFx0d2luZG93LmdldENvbXB1dGVkU3R5bGUoIGN1cnJlbnRCYWNrZ3JvdW5kICkub3BhY2l0eTtcblx0XHRcdFx0Y3VycmVudEJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYmFja2dyb3VuZEltYWdlVVJMO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEb24ndCB0cmFuc2l0aW9uIGJldHdlZW4gaWRlbnRpY2FsIGJhY2tncm91bmRzLiBUaGlzXG5cdFx0XHQvLyBwcmV2ZW50cyB1bndhbnRlZCBmbGlja2VyLlxuXHRcdFx0dmFyIHByZXZpb3VzQmFja2dyb3VuZEhhc2ggPSBwcmV2aW91c0JhY2tncm91bmQgPyBwcmV2aW91c0JhY2tncm91bmQuZ2V0QXR0cmlidXRlKCAnZGF0YS1iYWNrZ3JvdW5kLWhhc2gnICkgOiBudWxsO1xuXHRcdFx0dmFyIGN1cnJlbnRCYWNrZ3JvdW5kSGFzaCA9IGN1cnJlbnRCYWNrZ3JvdW5kLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1oYXNoJyApO1xuXHRcdFx0aWYoIGN1cnJlbnRCYWNrZ3JvdW5kSGFzaCAmJiBjdXJyZW50QmFja2dyb3VuZEhhc2ggPT09IHByZXZpb3VzQmFja2dyb3VuZEhhc2ggJiYgY3VycmVudEJhY2tncm91bmQgIT09IHByZXZpb3VzQmFja2dyb3VuZCApIHtcblx0XHRcdFx0ZG9tLmJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCggJ25vLXRyYW5zaXRpb24nICk7XG5cdFx0XHR9XG5cblx0XHRcdHByZXZpb3VzQmFja2dyb3VuZCA9IGN1cnJlbnRCYWNrZ3JvdW5kO1xuXG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIGJhY2tncm91bmQgYnJpZ2h0bmVzcyBmbGFnIGZvciB0aGlzIHNsaWRlLFxuXHRcdC8vIGJ1YmJsZSBpdCB0byB0aGUgLnJldmVhbCBjb250YWluZXJcblx0XHRpZiggY3VycmVudFNsaWRlICkge1xuXHRcdFx0WyAnaGFzLWxpZ2h0LWJhY2tncm91bmQnLCAnaGFzLWRhcmstYmFja2dyb3VuZCcgXS5mb3JFYWNoKCBmdW5jdGlvbiggY2xhc3NUb0J1YmJsZSApIHtcblx0XHRcdFx0aWYoIGN1cnJlbnRTbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoIGNsYXNzVG9CdWJibGUgKSApIHtcblx0XHRcdFx0XHRkb20ud3JhcHBlci5jbGFzc0xpc3QuYWRkKCBjbGFzc1RvQnViYmxlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZG9tLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSggY2xhc3NUb0J1YmJsZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgdGhlIGZpcnN0IGJhY2tncm91bmQgdG8gYXBwbHkgd2l0aG91dCB0cmFuc2l0aW9uXG5cdFx0c2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkb20uYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCAnbm8tdHJhbnNpdGlvbicgKTtcblx0XHR9LCAxICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcGFyYWxsYXggYmFja2dyb3VuZCBiYXNlZFxuXHQgKiBvbiB0aGUgY3VycmVudCBzbGlkZSBpbmRleC5cblx0ICovXG5cdGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xuXG5cdFx0aWYoIGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRJbWFnZSApIHtcblxuXHRcdFx0dmFyIGhvcml6b250YWxTbGlkZXMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApLFxuXHRcdFx0XHR2ZXJ0aWNhbFNsaWRlcyA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFZFUlRJQ0FMX1NMSURFU19TRUxFQ1RPUiApO1xuXG5cdFx0XHR2YXIgYmFja2dyb3VuZFNpemUgPSBkb20uYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZS5zcGxpdCggJyAnICksXG5cdFx0XHRcdGJhY2tncm91bmRXaWR0aCwgYmFja2dyb3VuZEhlaWdodDtcblxuXHRcdFx0aWYoIGJhY2tncm91bmRTaXplLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdFx0YmFja2dyb3VuZFdpZHRoID0gYmFja2dyb3VuZEhlaWdodCA9IHBhcnNlSW50KCBiYWNrZ3JvdW5kU2l6ZVswXSwgMTAgKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRiYWNrZ3JvdW5kV2lkdGggPSBwYXJzZUludCggYmFja2dyb3VuZFNpemVbMF0sIDEwICk7XG5cdFx0XHRcdGJhY2tncm91bmRIZWlnaHQgPSBwYXJzZUludCggYmFja2dyb3VuZFNpemVbMV0sIDEwICk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzbGlkZVdpZHRoID0gZG9tLmJhY2tncm91bmQub2Zmc2V0V2lkdGgsXG5cdFx0XHRcdGhvcml6b250YWxTbGlkZUNvdW50ID0gaG9yaXpvbnRhbFNsaWRlcy5sZW5ndGgsXG5cdFx0XHRcdGhvcml6b250YWxPZmZzZXRNdWx0aXBsaWVyLFxuXHRcdFx0XHRob3Jpem9udGFsT2Zmc2V0O1xuXG5cdFx0XHRpZiggdHlwZW9mIGNvbmZpZy5wYXJhbGxheEJhY2tncm91bmRIb3Jpem9udGFsID09PSAnbnVtYmVyJyApIHtcblx0XHRcdFx0aG9yaXpvbnRhbE9mZnNldE11bHRpcGxpZXIgPSBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kSG9yaXpvbnRhbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRob3Jpem9udGFsT2Zmc2V0TXVsdGlwbGllciA9ICggYmFja2dyb3VuZFdpZHRoIC0gc2xpZGVXaWR0aCApIC8gKCBob3Jpem9udGFsU2xpZGVDb3VudC0xICk7XG5cdFx0XHR9XG5cblx0XHRcdGhvcml6b250YWxPZmZzZXQgPSBob3Jpem9udGFsT2Zmc2V0TXVsdGlwbGllciAqIGluZGV4aCAqIC0xO1xuXG5cdFx0XHR2YXIgc2xpZGVIZWlnaHQgPSBkb20uYmFja2dyb3VuZC5vZmZzZXRIZWlnaHQsXG5cdFx0XHRcdHZlcnRpY2FsU2xpZGVDb3VudCA9IHZlcnRpY2FsU2xpZGVzLmxlbmd0aCxcblx0XHRcdFx0dmVydGljYWxPZmZzZXRNdWx0aXBsaWVyLFxuXHRcdFx0XHR2ZXJ0aWNhbE9mZnNldDtcblxuXHRcdFx0aWYoIHR5cGVvZiBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kVmVydGljYWwgPT09ICdudW1iZXInICkge1xuXHRcdFx0XHR2ZXJ0aWNhbE9mZnNldE11bHRpcGxpZXIgPSBjb25maWcucGFyYWxsYXhCYWNrZ3JvdW5kVmVydGljYWw7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dmVydGljYWxPZmZzZXRNdWx0aXBsaWVyID0gKCBiYWNrZ3JvdW5kSGVpZ2h0IC0gc2xpZGVIZWlnaHQgKSAvICggdmVydGljYWxTbGlkZUNvdW50LTEgKTtcblx0XHRcdH1cblxuXHRcdFx0dmVydGljYWxPZmZzZXQgPSB2ZXJ0aWNhbFNsaWRlQ291bnQgPiAwID8gIHZlcnRpY2FsT2Zmc2V0TXVsdGlwbGllciAqIGluZGV4diAqIDEgOiAwO1xuXG5cdFx0XHRkb20uYmFja2dyb3VuZC5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBob3Jpem9udGFsT2Zmc2V0ICsgJ3B4ICcgKyAtdmVydGljYWxPZmZzZXQgKyAncHgnO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gdGhlIGdpdmVuIHNsaWRlIGlzIHdpdGhpbiB0aGUgY29uZmlndXJlZCB2aWV3XG5cdCAqIGRpc3RhbmNlLiBTaG93cyB0aGUgc2xpZGUgZWxlbWVudCBhbmQgbG9hZHMgYW55IGNvbnRlbnRcblx0ICogdGhhdCBpcyBzZXQgdG8gbG9hZCBsYXppbHkgKGRhdGEtc3JjKS5cblx0ICovXG5cdGZ1bmN0aW9uIHNob3dTbGlkZSggc2xpZGUgKSB7XG5cblx0XHQvLyBTaG93IHRoZSBzbGlkZSBlbGVtZW50XG5cdFx0c2xpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cblx0XHQvLyBNZWRpYSBlbGVtZW50cyB3aXRoIGRhdGEtc3JjIGF0dHJpYnV0ZXNcblx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnaW1nW2RhdGEtc3JjXSwgdmlkZW9bZGF0YS1zcmNdLCBhdWRpb1tkYXRhLXNyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbWVudCApIHtcblx0XHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCAnc3JjJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLXNyYycgKSApO1xuXHRcdFx0ZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLXNyYycgKTtcblx0XHR9ICk7XG5cblx0XHQvLyBNZWRpYSBlbGVtZW50cyB3aXRoIDxzb3VyY2U+IGNoaWxkcmVuXG5cdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3ZpZGVvLCBhdWRpbycgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBtZWRpYSApIHtcblx0XHRcdHZhciBzb3VyY2VzID0gMDtcblxuXHRcdFx0dG9BcnJheSggbWVkaWEucXVlcnlTZWxlY3RvckFsbCggJ3NvdXJjZVtkYXRhLXNyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggc291cmNlICkge1xuXHRcdFx0XHRzb3VyY2Uuc2V0QXR0cmlidXRlKCAnc3JjJywgc291cmNlLmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICk7XG5cdFx0XHRcdHNvdXJjZS5yZW1vdmVBdHRyaWJ1dGUoICdkYXRhLXNyYycgKTtcblx0XHRcdFx0c291cmNlcyArPSAxO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBJZiB3ZSByZXdyb3RlIHNvdXJjZXMgZm9yIHRoaXMgdmlkZW8vYXVkaW8gZWxlbWVudCwgd2UgbmVlZFxuXHRcdFx0Ly8gdG8gbWFudWFsbHkgdGVsbCBpdCB0byBsb2FkIGZyb20gaXRzIG5ldyBvcmlnaW5cblx0XHRcdGlmKCBzb3VyY2VzID4gMCApIHtcblx0XHRcdFx0bWVkaWEubG9hZCgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXG5cdFx0Ly8gU2hvdyB0aGUgY29ycmVzcG9uZGluZyBiYWNrZ3JvdW5kIGVsZW1lbnRcblx0XHR2YXIgaW5kaWNlcyA9IGdldEluZGljZXMoIHNsaWRlICk7XG5cdFx0dmFyIGJhY2tncm91bmQgPSBnZXRTbGlkZUJhY2tncm91bmQoIGluZGljZXMuaCwgaW5kaWNlcy52ICk7XG5cdFx0aWYoIGJhY2tncm91bmQgKSB7XG5cdFx0XHRiYWNrZ3JvdW5kLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG5cdFx0XHQvLyBJZiB0aGUgYmFja2dyb3VuZCBjb250YWlucyBtZWRpYSwgbG9hZCBpdFxuXHRcdFx0aWYoIGJhY2tncm91bmQuaGFzQXR0cmlidXRlKCAnZGF0YS1sb2FkZWQnICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSggJ2RhdGEtbG9hZGVkJywgJ3RydWUnICk7XG5cblx0XHRcdFx0dmFyIGJhY2tncm91bmRJbWFnZSA9IHNsaWRlLmdldEF0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC1pbWFnZScgKSxcblx0XHRcdFx0XHRiYWNrZ3JvdW5kVmlkZW8gPSBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtdmlkZW8nICksXG5cdFx0XHRcdFx0YmFja2dyb3VuZFZpZGVvTG9vcCA9IHNsaWRlLmhhc0F0dHJpYnV0ZSggJ2RhdGEtYmFja2dyb3VuZC12aWRlby1sb29wJyApLFxuXHRcdFx0XHRcdGJhY2tncm91bmRJZnJhbWUgPSBzbGlkZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWJhY2tncm91bmQtaWZyYW1lJyApO1xuXG5cdFx0XHRcdC8vIEltYWdlc1xuXHRcdFx0XHRpZiggYmFja2dyb3VuZEltYWdlICkge1xuXHRcdFx0XHRcdGJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnKyBiYWNrZ3JvdW5kSW1hZ2UgKycpJztcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBWaWRlb3Ncblx0XHRcdFx0ZWxzZSBpZiAoIGJhY2tncm91bmRWaWRlbyAmJiAhaXNTcGVha2VyTm90ZXMoKSApIHtcblx0XHRcdFx0XHR2YXIgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndmlkZW8nICk7XG5cblx0XHRcdFx0XHRpZiggYmFja2dyb3VuZFZpZGVvTG9vcCApIHtcblx0XHRcdFx0XHRcdHZpZGVvLnNldEF0dHJpYnV0ZSggJ2xvb3AnLCAnJyApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQgY29tbWEgc2VwYXJhdGVkIGxpc3RzIG9mIHZpZGVvIHNvdXJjZXNcblx0XHRcdFx0XHRiYWNrZ3JvdW5kVmlkZW8uc3BsaXQoICcsJyApLmZvckVhY2goIGZ1bmN0aW9uKCBzb3VyY2UgKSB7XG5cdFx0XHRcdFx0XHR2aWRlby5pbm5lckhUTUwgKz0gJzxzb3VyY2Ugc3JjPVwiJysgc291cmNlICsnXCI+Jztcblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0XHRiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKCB2aWRlbyApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIElmcmFtZXNcblx0XHRcdFx0ZWxzZSBpZiggYmFja2dyb3VuZElmcmFtZSApIHtcblx0XHRcdFx0XHR2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2lmcmFtZScgKTtcblx0XHRcdFx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoICdzcmMnLCBiYWNrZ3JvdW5kSWZyYW1lICk7XG5cdFx0XHRcdFx0XHRpZnJhbWUuc3R5bGUud2lkdGggID0gJzEwMCUnO1xuXHRcdFx0XHRcdFx0aWZyYW1lLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblx0XHRcdFx0XHRcdGlmcmFtZS5zdHlsZS5tYXhIZWlnaHQgPSAnMTAwJSc7XG5cdFx0XHRcdFx0XHRpZnJhbWUuc3R5bGUubWF4V2lkdGggPSAnMTAwJSc7XG5cblx0XHRcdFx0XHRiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKCBpZnJhbWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBnaXZlbiBzbGlkZSBpcyBtb3ZlZCBvdXRzaWRlIG9mIHRoZVxuXHQgKiBjb25maWd1cmVkIHZpZXcgZGlzdGFuY2UuXG5cdCAqL1xuXHRmdW5jdGlvbiBoaWRlU2xpZGUoIHNsaWRlICkge1xuXG5cdFx0Ly8gSGlkZSB0aGUgc2xpZGUgZWxlbWVudFxuXHRcdHNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cblx0XHQvLyBIaWRlIHRoZSBjb3JyZXNwb25kaW5nIGJhY2tncm91bmQgZWxlbWVudFxuXHRcdHZhciBpbmRpY2VzID0gZ2V0SW5kaWNlcyggc2xpZGUgKTtcblx0XHR2YXIgYmFja2dyb3VuZCA9IGdldFNsaWRlQmFja2dyb3VuZCggaW5kaWNlcy5oLCBpbmRpY2VzLnYgKTtcblx0XHRpZiggYmFja2dyb3VuZCApIHtcblx0XHRcdGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBEZXRlcm1pbmUgd2hhdCBhdmFpbGFibGUgcm91dGVzIHRoZXJlIGFyZSBmb3IgbmF2aWdhdGlvbi5cblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSBjb250YWluaW5nIGZvdXIgYm9vbGVhbnM6IGxlZnQvcmlnaHQvdXAvZG93blxuXHQgKi9cblx0ZnVuY3Rpb24gYXZhaWxhYmxlUm91dGVzKCkge1xuXG5cdFx0dmFyIGhvcml6b250YWxTbGlkZXMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiApLFxuXHRcdFx0dmVydGljYWxTbGlkZXMgPSBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBWRVJUSUNBTF9TTElERVNfU0VMRUNUT1IgKTtcblxuXHRcdHZhciByb3V0ZXMgPSB7XG5cdFx0XHRsZWZ0OiBpbmRleGggPiAwIHx8IGNvbmZpZy5sb29wLFxuXHRcdFx0cmlnaHQ6IGluZGV4aCA8IGhvcml6b250YWxTbGlkZXMubGVuZ3RoIC0gMSB8fCBjb25maWcubG9vcCxcblx0XHRcdHVwOiBpbmRleHYgPiAwLFxuXHRcdFx0ZG93bjogaW5kZXh2IDwgdmVydGljYWxTbGlkZXMubGVuZ3RoIC0gMVxuXHRcdH07XG5cblx0XHQvLyByZXZlcnNlIGhvcml6b250YWwgY29udHJvbHMgZm9yIHJ0bFxuXHRcdGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0dmFyIGxlZnQgPSByb3V0ZXMubGVmdDtcblx0XHRcdHJvdXRlcy5sZWZ0ID0gcm91dGVzLnJpZ2h0O1xuXHRcdFx0cm91dGVzLnJpZ2h0ID0gbGVmdDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcm91dGVzO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhbiBvYmplY3QgZGVzY3JpYmluZyB0aGUgYXZhaWxhYmxlIGZyYWdtZW50XG5cdCAqIGRpcmVjdGlvbnMuXG5cdCAqXG5cdCAqIEByZXR1cm4ge09iamVjdH0gdHdvIGJvb2xlYW4gcHJvcGVydGllczogcHJldi9uZXh0XG5cdCAqL1xuXHRmdW5jdGlvbiBhdmFpbGFibGVGcmFnbWVudHMoKSB7XG5cblx0XHRpZiggY3VycmVudFNsaWRlICYmIGNvbmZpZy5mcmFnbWVudHMgKSB7XG5cdFx0XHR2YXIgZnJhZ21lbnRzID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICk7XG5cdFx0XHR2YXIgaGlkZGVuRnJhZ21lbnRzID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQ6bm90KC52aXNpYmxlKScgKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cHJldjogZnJhZ21lbnRzLmxlbmd0aCAtIGhpZGRlbkZyYWdtZW50cy5sZW5ndGggPiAwLFxuXHRcdFx0XHRuZXh0OiAhIWhpZGRlbkZyYWdtZW50cy5sZW5ndGhcblx0XHRcdH07XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIHsgcHJldjogZmFsc2UsIG5leHQ6IGZhbHNlIH07XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogRW5mb3JjZXMgb3JpZ2luLXNwZWNpZmljIGZvcm1hdCBydWxlcyBmb3IgZW1iZWRkZWQgbWVkaWEuXG5cdCAqL1xuXHRmdW5jdGlvbiBmb3JtYXRFbWJlZGRlZENvbnRlbnQoKSB7XG5cblx0XHR2YXIgX2FwcGVuZFBhcmFtVG9JZnJhbWVTb3VyY2UgPSBmdW5jdGlvbiggc291cmNlQXR0cmlidXRlLCBzb3VyY2VVUkwsIHBhcmFtICkge1xuXHRcdFx0dG9BcnJheSggZG9tLnNsaWRlcy5xdWVyeVNlbGVjdG9yQWxsKCAnaWZyYW1lWycrIHNvdXJjZUF0dHJpYnV0ZSArJyo9XCInKyBzb3VyY2VVUkwgKydcIl0nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdHZhciBzcmMgPSBlbC5nZXRBdHRyaWJ1dGUoIHNvdXJjZUF0dHJpYnV0ZSApO1xuXHRcdFx0XHRpZiggc3JjICYmIHNyYy5pbmRleE9mKCBwYXJhbSApID09PSAtMSApIHtcblx0XHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoIHNvdXJjZUF0dHJpYnV0ZSwgc3JjICsgKCAhL1xcPy8udGVzdCggc3JjICkgPyAnPycgOiAnJicgKSArIHBhcmFtICk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyBZb3VUdWJlIGZyYW1lcyBtdXN0IGluY2x1ZGUgXCI/ZW5hYmxlanNhcGk9MVwiXG5cdFx0X2FwcGVuZFBhcmFtVG9JZnJhbWVTb3VyY2UoICdzcmMnLCAneW91dHViZS5jb20vZW1iZWQvJywgJ2VuYWJsZWpzYXBpPTEnICk7XG5cdFx0X2FwcGVuZFBhcmFtVG9JZnJhbWVTb3VyY2UoICdkYXRhLXNyYycsICd5b3V0dWJlLmNvbS9lbWJlZC8nLCAnZW5hYmxlanNhcGk9MScgKTtcblxuXHRcdC8vIFZpbWVvIGZyYW1lcyBtdXN0IGluY2x1ZGUgXCI/YXBpPTFcIlxuXHRcdF9hcHBlbmRQYXJhbVRvSWZyYW1lU291cmNlKCAnc3JjJywgJ3BsYXllci52aW1lby5jb20vJywgJ2FwaT0xJyApO1xuXHRcdF9hcHBlbmRQYXJhbVRvSWZyYW1lU291cmNlKCAnZGF0YS1zcmMnLCAncGxheWVyLnZpbWVvLmNvbS8nLCAnYXBpPTEnICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBwbGF5YmFjayBvZiBhbnkgZW1iZWRkZWQgY29udGVudCBpbnNpZGUgb2Zcblx0ICogdGhlIHRhcmdldGVkIHNsaWRlLlxuXHQgKi9cblx0ZnVuY3Rpb24gc3RhcnRFbWJlZGRlZENvbnRlbnQoIHNsaWRlICkge1xuXG5cdFx0aWYoIHNsaWRlICYmICFpc1NwZWFrZXJOb3RlcygpICkge1xuXHRcdFx0Ly8gUmVzdGFydCBHSUZzXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnaW1nW3NyYyQ9XCIuZ2lmXCJdJyApICkuZm9yRWFjaCggZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0XHQvLyBTZXR0aW5nIHRoZSBzYW1lIHVuY2hhbmdlZCBzb3VyY2UgbGlrZSB0aGlzIHdhcyBjb25maXJtZWRcblx0XHRcdFx0Ly8gdG8gd29yayBpbiBDaHJvbWUsIEZGICYgU2FmYXJpXG5cdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSggJ3NyYycsIGVsLmdldEF0dHJpYnV0ZSggJ3NyYycgKSApO1xuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBIVE1MNSBtZWRpYSBlbGVtZW50c1xuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3ZpZGVvLCBhdWRpbycgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0aWYoIGVsLmhhc0F0dHJpYnV0ZSggJ2RhdGEtYXV0b3BsYXknICkgJiYgdHlwZW9mIGVsLnBsYXkgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0ZWwucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIE5vcm1hbCBpZnJhbWVzXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnaWZyYW1lW3NyY10nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdHN0YXJ0RW1iZWRkZWRJZnJhbWUoIHsgdGFyZ2V0OiBlbCB9ICk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIExhenkgbG9hZGluZyBpZnJhbWVzXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnaWZyYW1lW2RhdGEtc3JjXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0aWYoIGVsLmdldEF0dHJpYnV0ZSggJ3NyYycgKSAhPT0gZWwuZ2V0QXR0cmlidXRlKCAnZGF0YS1zcmMnICkgKSB7XG5cdFx0XHRcdFx0ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBzdGFydEVtYmVkZGVkSWZyYW1lICk7IC8vIHJlbW92ZSBmaXJzdCB0byBhdm9pZCBkdXBlc1xuXHRcdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgc3RhcnRFbWJlZGRlZElmcmFtZSApO1xuXHRcdFx0XHRcdGVsLnNldEF0dHJpYnV0ZSggJ3NyYycsIGVsLmdldEF0dHJpYnV0ZSggJ2RhdGEtc3JjJyApICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBcIlN0YXJ0c1wiIHRoZSBjb250ZW50IG9mIGFuIGVtYmVkZGVkIGlmcmFtZSB1c2luZyB0aGVcblx0ICogcG9zdG1lc3NhZ2UgQVBJLlxuXHQgKi9cblx0ZnVuY3Rpb24gc3RhcnRFbWJlZGRlZElmcmFtZSggZXZlbnQgKSB7XG5cblx0XHR2YXIgaWZyYW1lID0gZXZlbnQudGFyZ2V0O1xuXG5cdFx0Ly8gWW91VHViZSBwb3N0TWVzc2FnZSBBUElcblx0XHRpZiggL3lvdXR1YmVcXC5jb21cXC9lbWJlZFxcLy8udGVzdCggaWZyYW1lLmdldEF0dHJpYnV0ZSggJ3NyYycgKSApICYmIGlmcmFtZS5oYXNBdHRyaWJ1dGUoICdkYXRhLWF1dG9wbGF5JyApICkge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoICd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGxheVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCAnKicgKTtcblx0XHR9XG5cdFx0Ly8gVmltZW8gcG9zdE1lc3NhZ2UgQVBJXG5cdFx0ZWxzZSBpZiggL3BsYXllclxcLnZpbWVvXFwuY29tXFwvLy50ZXN0KCBpZnJhbWUuZ2V0QXR0cmlidXRlKCAnc3JjJyApICkgJiYgaWZyYW1lLmhhc0F0dHJpYnV0ZSggJ2RhdGEtYXV0b3BsYXknICkgKSB7XG5cdFx0XHRpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3tcIm1ldGhvZFwiOlwicGxheVwifScsICcqJyApO1xuXHRcdH1cblx0XHQvLyBHZW5lcmljIHBvc3RNZXNzYWdlIEFQSVxuXHRcdGVsc2Uge1xuXHRcdFx0aWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoICdzbGlkZTpzdGFydCcsICcqJyApO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgcGxheWJhY2sgb2YgYW55IGVtYmVkZGVkIGNvbnRlbnQgaW5zaWRlIG9mXG5cdCAqIHRoZSB0YXJnZXRlZCBzbGlkZS5cblx0ICovXG5cdGZ1bmN0aW9uIHN0b3BFbWJlZGRlZENvbnRlbnQoIHNsaWRlICkge1xuXG5cdFx0aWYoIHNsaWRlICYmIHNsaWRlLnBhcmVudE5vZGUgKSB7XG5cdFx0XHQvLyBIVE1MNSBtZWRpYSBlbGVtZW50c1xuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3ZpZGVvLCBhdWRpbycgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0aWYoICFlbC5oYXNBdHRyaWJ1dGUoICdkYXRhLWlnbm9yZScgKSAmJiB0eXBlb2YgZWwucGF1c2UgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0ZWwucGF1c2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXG5cdFx0XHQvLyBHZW5lcmljIHBvc3RNZXNzYWdlIEFQSSBmb3Igbm9uLWxhenkgbG9hZGVkIGlmcmFtZXNcblx0XHRcdHRvQXJyYXkoIHNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICdpZnJhbWUnICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdGVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoICdzbGlkZTpzdG9wJywgJyonICk7XG5cdFx0XHRcdGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgc3RhcnRFbWJlZGRlZElmcmFtZSApO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFlvdVR1YmUgcG9zdE1lc3NhZ2UgQVBJXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdGlmKCAhZWwuaGFzQXR0cmlidXRlKCAnZGF0YS1pZ25vcmUnICkgJiYgdHlwZW9mIGVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0ZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwYXVzZVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCAnKicgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFZpbWVvIHBvc3RNZXNzYWdlIEFQSVxuXHRcdFx0dG9BcnJheSggc2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ2lmcmFtZVtzcmMqPVwicGxheWVyLnZpbWVvLmNvbS9cIl0nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdGlmKCAhZWwuaGFzQXR0cmlidXRlKCAnZGF0YS1pZ25vcmUnICkgJiYgdHlwZW9mIGVsLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0ZWwuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSggJ3tcIm1ldGhvZFwiOlwicGF1c2VcIn0nLCAnKicgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdC8vIExhenkgbG9hZGluZyBpZnJhbWVzXG5cdFx0XHR0b0FycmF5KCBzbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnaWZyYW1lW2RhdGEtc3JjXScgKSApLmZvckVhY2goIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0Ly8gT25seSByZW1vdmluZyB0aGUgc3JjIGRvZXNuJ3QgYWN0dWFsbHkgdW5sb2FkIHRoZSBmcmFtZVxuXHRcdFx0XHQvLyBpbiBhbGwgYnJvd3NlcnMgKEZpcmVmb3gpIHNvIHdlIHNldCBpdCB0byBibGFuayBmaXJzdFxuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoICdzcmMnLCAnYWJvdXQ6YmxhbmsnICk7XG5cdFx0XHRcdGVsLnJlbW92ZUF0dHJpYnV0ZSggJ3NyYycgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgcGFzdCBzbGlkZXMuIFRoaXMgY2FuIGJlIHVzZWQgYXMgYSBnbG9iYWxcblx0ICogZmxhdHRlbmVkIGluZGV4IGZvciBzbGlkZXMuXG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRTbGlkZVBhc3RDb3VudCgpIHtcblxuXHRcdHZhciBob3Jpem9udGFsU2xpZGVzID0gdG9BcnJheSggZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKSApO1xuXG5cdFx0Ly8gVGhlIG51bWJlciBvZiBwYXN0IHNsaWRlc1xuXHRcdHZhciBwYXN0Q291bnQgPSAwO1xuXG5cdFx0Ly8gU3RlcCB0aHJvdWdoIGFsbCBzbGlkZXMgYW5kIGNvdW50IHRoZSBwYXN0IG9uZXNcblx0XHRtYWluTG9vcDogZm9yKCB2YXIgaSA9IDA7IGkgPCBob3Jpem9udGFsU2xpZGVzLmxlbmd0aDsgaSsrICkge1xuXG5cdFx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlID0gaG9yaXpvbnRhbFNsaWRlc1tpXTtcblx0XHRcdHZhciB2ZXJ0aWNhbFNsaWRlcyA9IHRvQXJyYXkoIGhvcml6b250YWxTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKSApO1xuXG5cdFx0XHRmb3IoIHZhciBqID0gMDsgaiA8IHZlcnRpY2FsU2xpZGVzLmxlbmd0aDsgaisrICkge1xuXG5cdFx0XHRcdC8vIFN0b3AgYXMgc29vbiBhcyB3ZSBhcnJpdmUgYXQgdGhlIHByZXNlbnRcblx0XHRcdFx0aWYoIHZlcnRpY2FsU2xpZGVzW2pdLmNsYXNzTGlzdC5jb250YWlucyggJ3ByZXNlbnQnICkgKSB7XG5cdFx0XHRcdFx0YnJlYWsgbWFpbkxvb3A7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXN0Q291bnQrKztcblxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdG9wIGFzIHNvb24gYXMgd2UgYXJyaXZlIGF0IHRoZSBwcmVzZW50XG5cdFx0XHRpZiggaG9yaXpvbnRhbFNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ3ByZXNlbnQnICkgKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEb24ndCBjb3VudCB0aGUgd3JhcHBpbmcgc2VjdGlvbiBmb3IgdmVydGljYWwgc2xpZGVzXG5cdFx0XHRpZiggaG9yaXpvbnRhbFNsaWRlLmNsYXNzTGlzdC5jb250YWlucyggJ3N0YWNrJyApID09PSBmYWxzZSApIHtcblx0XHRcdFx0cGFzdENvdW50Kys7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFzdENvdW50O1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhIHZhbHVlIHJhbmdpbmcgZnJvbSAwLTEgdGhhdCByZXByZXNlbnRzXG5cdCAqIGhvdyBmYXIgaW50byB0aGUgcHJlc2VudGF0aW9uIHdlIGhhdmUgbmF2aWdhdGVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0UHJvZ3Jlc3MoKSB7XG5cblx0XHQvLyBUaGUgbnVtYmVyIG9mIHBhc3QgYW5kIHRvdGFsIHNsaWRlc1xuXHRcdHZhciB0b3RhbENvdW50ID0gZ2V0VG90YWxTbGlkZXMoKTtcblx0XHR2YXIgcGFzdENvdW50ID0gZ2V0U2xpZGVQYXN0Q291bnQoKTtcblxuXHRcdGlmKCBjdXJyZW50U2xpZGUgKSB7XG5cblx0XHRcdHZhciBhbGxGcmFnbWVudHMgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudCcgKTtcblxuXHRcdFx0Ly8gSWYgdGhlcmUgYXJlIGZyYWdtZW50cyBpbiB0aGUgY3VycmVudCBzbGlkZSB0aG9zZSBzaG91bGQgYmVcblx0XHRcdC8vIGFjY291bnRlZCBmb3IgaW4gdGhlIHByb2dyZXNzLlxuXHRcdFx0aWYoIGFsbEZyYWdtZW50cy5sZW5ndGggPiAwICkge1xuXHRcdFx0XHR2YXIgdmlzaWJsZUZyYWdtZW50cyA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50LnZpc2libGUnICk7XG5cblx0XHRcdFx0Ly8gVGhpcyB2YWx1ZSByZXByZXNlbnRzIGhvdyBiaWcgYSBwb3J0aW9uIG9mIHRoZSBzbGlkZSBwcm9ncmVzc1xuXHRcdFx0XHQvLyB0aGF0IGlzIG1hZGUgdXAgYnkgaXRzIGZyYWdtZW50cyAoMC0xKVxuXHRcdFx0XHR2YXIgZnJhZ21lbnRXZWlnaHQgPSAwLjk7XG5cblx0XHRcdFx0Ly8gQWRkIGZyYWdtZW50IHByb2dyZXNzIHRvIHRoZSBwYXN0IHNsaWRlIGNvdW50XG5cdFx0XHRcdHBhc3RDb3VudCArPSAoIHZpc2libGVGcmFnbWVudHMubGVuZ3RoIC8gYWxsRnJhZ21lbnRzLmxlbmd0aCApICogZnJhZ21lbnRXZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gcGFzdENvdW50IC8gKCB0b3RhbENvdW50IC0gMSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIHRoaXMgcHJlc2VudGF0aW9uIGlzIHJ1bm5pbmcgaW5zaWRlIG9mIHRoZVxuXHQgKiBzcGVha2VyIG5vdGVzIHdpbmRvdy5cblx0ICovXG5cdGZ1bmN0aW9uIGlzU3BlYWtlck5vdGVzKCkge1xuXG5cdFx0cmV0dXJuICEhd2luZG93LmxvY2F0aW9uLnNlYXJjaC5tYXRjaCggL3JlY2VpdmVyL2dpICk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWFkcyB0aGUgY3VycmVudCBVUkwgKGhhc2gpIGFuZCBuYXZpZ2F0ZXMgYWNjb3JkaW5nbHkuXG5cdCAqL1xuXHRmdW5jdGlvbiByZWFkVVJMKCkge1xuXG5cdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuXHRcdC8vIEF0dGVtcHQgdG8gcGFyc2UgdGhlIGhhc2ggYXMgZWl0aGVyIGFuIGluZGV4IG9yIG5hbWVcblx0XHR2YXIgYml0cyA9IGhhc2guc2xpY2UoIDIgKS5zcGxpdCggJy8nICksXG5cdFx0XHRuYW1lID0gaGFzaC5yZXBsYWNlKCAvI3xcXC8vZ2ksICcnICk7XG5cblx0XHQvLyBJZiB0aGUgZmlyc3QgYml0IGlzIGludmFsaWQgYW5kIHRoZXJlIGlzIGEgbmFtZSB3ZSBjYW5cblx0XHQvLyBhc3N1bWUgdGhhdCB0aGlzIGlzIGEgbmFtZWQgbGlua1xuXHRcdGlmKCBpc05hTiggcGFyc2VJbnQoIGJpdHNbMF0sIDEwICkgKSAmJiBuYW1lLmxlbmd0aCApIHtcblx0XHRcdHZhciBlbGVtZW50O1xuXG5cdFx0XHQvLyBFbnN1cmUgdGhlIG5hbWVkIGxpbmsgaXMgYSB2YWxpZCBIVE1MIElEIGF0dHJpYnV0ZVxuXHRcdFx0aWYoIC9eW2EtekEtWl1bXFx3Oi4tXSokLy50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIHNsaWRlIHdpdGggdGhlIHNwZWNpZmllZCBJRFxuXHRcdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG5hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGVsZW1lbnQgKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIHBvc2l0aW9uIG9mIHRoZSBuYW1lZCBzbGlkZSBhbmQgbmF2aWdhdGUgdG8gaXRcblx0XHRcdFx0dmFyIGluZGljZXMgPSBSZXZlYWwuZ2V0SW5kaWNlcyggZWxlbWVudCApO1xuXHRcdFx0XHRzbGlkZSggaW5kaWNlcy5oLCBpbmRpY2VzLnYgKTtcblx0XHRcdH1cblx0XHRcdC8vIElmIHRoZSBzbGlkZSBkb2Vzbid0IGV4aXN0LCBuYXZpZ2F0ZSB0byB0aGUgY3VycmVudCBzbGlkZVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNsaWRlKCBpbmRleGggfHwgMCwgaW5kZXh2IHx8IDAgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHQvLyBSZWFkIHRoZSBpbmRleCBjb21wb25lbnRzIG9mIHRoZSBoYXNoXG5cdFx0XHR2YXIgaCA9IHBhcnNlSW50KCBiaXRzWzBdLCAxMCApIHx8IDAsXG5cdFx0XHRcdHYgPSBwYXJzZUludCggYml0c1sxXSwgMTAgKSB8fCAwO1xuXG5cdFx0XHRpZiggaCAhPT0gaW5kZXhoIHx8IHYgIT09IGluZGV4diApIHtcblx0XHRcdFx0c2xpZGUoIGgsIHYgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSBwYWdlIFVSTCAoaGFzaCkgdG8gcmVmbGVjdCB0aGUgY3VycmVudFxuXHQgKiBzdGF0ZS5cblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5IFRoZSB0aW1lIGluIG1zIHRvIHdhaXQgYmVmb3JlXG5cdCAqIHdyaXRpbmcgdGhlIGhhc2hcblx0ICovXG5cdGZ1bmN0aW9uIHdyaXRlVVJMKCBkZWxheSApIHtcblxuXHRcdGlmKCBjb25maWcuaGlzdG9yeSApIHtcblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoZXJlJ3MgbmV2ZXIgbW9yZSB0aGFuIG9uZSB0aW1lb3V0IHJ1bm5pbmdcblx0XHRcdGNsZWFyVGltZW91dCggd3JpdGVVUkxUaW1lb3V0ICk7XG5cblx0XHRcdC8vIElmIGEgZGVsYXkgaXMgc3BlY2lmaWVkLCB0aW1lb3V0IHRoaXMgY2FsbFxuXHRcdFx0aWYoIHR5cGVvZiBkZWxheSA9PT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdHdyaXRlVVJMVGltZW91dCA9IHNldFRpbWVvdXQoIHdyaXRlVVJMLCBkZWxheSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiggY3VycmVudFNsaWRlICkge1xuXHRcdFx0XHR2YXIgdXJsID0gJy8nO1xuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gY3JlYXRlIGEgbmFtZWQgbGluayBiYXNlZCBvbiB0aGUgc2xpZGUncyBJRFxuXHRcdFx0XHR2YXIgaWQgPSBjdXJyZW50U2xpZGUuZ2V0QXR0cmlidXRlKCAnaWQnICk7XG5cdFx0XHRcdGlmKCBpZCApIHtcblx0XHRcdFx0XHRpZCA9IGlkLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0aWQgPSBpZC5yZXBsYWNlKCAvW15hLXpBLVowLTlcXC1cXF9cXDpcXC5dL2csICcnICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgY3VycmVudCBzbGlkZSBoYXMgYW4gSUQsIHVzZSB0aGF0IGFzIGEgbmFtZWQgbGlua1xuXHRcdFx0XHRpZiggdHlwZW9mIGlkID09PSAnc3RyaW5nJyAmJiBpZC5sZW5ndGggKSB7XG5cdFx0XHRcdFx0dXJsID0gJy8nICsgaWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHVzZSB0aGUgL2gvdiBpbmRleFxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRpZiggaW5kZXhoID4gMCB8fCBpbmRleHYgPiAwICkgdXJsICs9IGluZGV4aDtcblx0XHRcdFx0XHRpZiggaW5kZXh2ID4gMCApIHVybCArPSAnLycgKyBpbmRleHY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXRyaWV2ZXMgdGhlIGgvdiBsb2NhdGlvbiBvZiB0aGUgY3VycmVudCwgb3Igc3BlY2lmaWVkLFxuXHQgKiBzbGlkZS5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gc2xpZGUgSWYgc3BlY2lmaWVkLCB0aGUgcmV0dXJuZWRcblx0ICogaW5kZXggd2lsbCBiZSBmb3IgdGhpcyBzbGlkZSByYXRoZXIgdGhhbiB0aGUgY3VycmVudGx5XG5cdCAqIGFjdGl2ZSBvbmVcblx0ICpcblx0ICogQHJldHVybiB7T2JqZWN0fSB7IGg6IDxpbnQ+LCB2OiA8aW50PiwgZjogPGludD4gfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0SW5kaWNlcyggc2xpZGUgKSB7XG5cblx0XHQvLyBCeSBkZWZhdWx0LCByZXR1cm4gdGhlIGN1cnJlbnQgaW5kaWNlc1xuXHRcdHZhciBoID0gaW5kZXhoLFxuXHRcdFx0diA9IGluZGV4dixcblx0XHRcdGY7XG5cblx0XHQvLyBJZiBhIHNsaWRlIGlzIHNwZWNpZmllZCwgcmV0dXJuIHRoZSBpbmRpY2VzIG9mIHRoYXQgc2xpZGVcblx0XHRpZiggc2xpZGUgKSB7XG5cdFx0XHR2YXIgaXNWZXJ0aWNhbCA9IGlzVmVydGljYWxTbGlkZSggc2xpZGUgKTtcblx0XHRcdHZhciBzbGlkZWggPSBpc1ZlcnRpY2FsID8gc2xpZGUucGFyZW50Tm9kZSA6IHNsaWRlO1xuXG5cdFx0XHQvLyBTZWxlY3QgYWxsIGhvcml6b250YWwgc2xpZGVzXG5cdFx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlcyA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKTtcblxuXHRcdFx0Ly8gTm93IHRoYXQgd2Uga25vdyB3aGljaCB0aGUgaG9yaXpvbnRhbCBzbGlkZSBpcywgZ2V0IGl0cyBpbmRleFxuXHRcdFx0aCA9IE1hdGgubWF4KCBob3Jpem9udGFsU2xpZGVzLmluZGV4T2YoIHNsaWRlaCApLCAwICk7XG5cblx0XHRcdC8vIEFzc3VtZSB3ZSdyZSBub3QgdmVydGljYWxcblx0XHRcdHYgPSB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSB2ZXJ0aWNhbCBzbGlkZSwgZ3JhYiB0aGUgdmVydGljYWwgaW5kZXhcblx0XHRcdGlmKCBpc1ZlcnRpY2FsICkge1xuXHRcdFx0XHR2ID0gTWF0aC5tYXgoIHRvQXJyYXkoIHNsaWRlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICkgKS5pbmRleE9mKCBzbGlkZSApLCAwICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoICFzbGlkZSAmJiBjdXJyZW50U2xpZGUgKSB7XG5cdFx0XHR2YXIgaGFzRnJhZ21lbnRzID0gY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICcuZnJhZ21lbnQnICkubGVuZ3RoID4gMDtcblx0XHRcdGlmKCBoYXNGcmFnbWVudHMgKSB7XG5cdFx0XHRcdHZhciBjdXJyZW50RnJhZ21lbnQgPSBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvciggJy5jdXJyZW50LWZyYWdtZW50JyApO1xuXHRcdFx0XHRpZiggY3VycmVudEZyYWdtZW50ICYmIGN1cnJlbnRGcmFnbWVudC5oYXNBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApICkge1xuXHRcdFx0XHRcdGYgPSBwYXJzZUludCggY3VycmVudEZyYWdtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICksIDEwICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZiA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50LnZpc2libGUnICkubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB7IGg6IGgsIHY6IHYsIGY6IGYgfTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHNsaWRlcyBpbiB0aGlzIHByZXNlbnRhdGlvbi5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFRvdGFsU2xpZGVzKCkge1xuXG5cdFx0cmV0dXJuIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIFNMSURFU19TRUxFQ1RPUiArICc6bm90KC5zdGFjayknICkubGVuZ3RoO1xuXG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgc2xpZGUgZWxlbWVudCBtYXRjaGluZyB0aGUgc3BlY2lmaWVkIGluZGV4LlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0U2xpZGUoIHgsIHkgKSB7XG5cblx0XHR2YXIgaG9yaXpvbnRhbFNsaWRlID0gZG9tLndyYXBwZXIucXVlcnlTZWxlY3RvckFsbCggSE9SSVpPTlRBTF9TTElERVNfU0VMRUNUT1IgKVsgeCBdO1xuXHRcdHZhciB2ZXJ0aWNhbFNsaWRlcyA9IGhvcml6b250YWxTbGlkZSAmJiBob3Jpem9udGFsU2xpZGUucXVlcnlTZWxlY3RvckFsbCggJ3NlY3Rpb24nICk7XG5cblx0XHRpZiggdmVydGljYWxTbGlkZXMgJiYgdmVydGljYWxTbGlkZXMubGVuZ3RoICYmIHR5cGVvZiB5ID09PSAnbnVtYmVyJyApIHtcblx0XHRcdHJldHVybiB2ZXJ0aWNhbFNsaWRlcyA/IHZlcnRpY2FsU2xpZGVzWyB5IF0gOiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhvcml6b250YWxTbGlkZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGJhY2tncm91bmQgZWxlbWVudCBmb3IgdGhlIGdpdmVuIHNsaWRlLlxuXHQgKiBBbGwgc2xpZGVzLCBldmVuIHRoZSBvbmVzIHdpdGggbm8gYmFja2dyb3VuZCBwcm9wZXJ0aWVzXG5cdCAqIGRlZmluZWQsIGhhdmUgYSBiYWNrZ3JvdW5kIGVsZW1lbnQgc28gYXMgbG9uZyBhcyB0aGVcblx0ICogaW5kZXggaXMgdmFsaWQgYW4gZWxlbWVudCB3aWxsIGJlIHJldHVybmVkLlxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0U2xpZGVCYWNrZ3JvdW5kKCB4LCB5ICkge1xuXG5cdFx0Ly8gV2hlbiBwcmludGluZyB0byBQREYgdGhlIHNsaWRlIGJhY2tncm91bmRzIGFyZSBuZXN0ZWRcblx0XHQvLyBpbnNpZGUgb2YgdGhlIHNsaWRlc1xuXHRcdGlmKCBpc1ByaW50aW5nUERGKCkgKSB7XG5cdFx0XHR2YXIgc2xpZGUgPSBnZXRTbGlkZSggeCwgeSApO1xuXHRcdFx0aWYoIHNsaWRlICkge1xuXHRcdFx0XHR2YXIgYmFja2dyb3VuZCA9IHNsaWRlLnF1ZXJ5U2VsZWN0b3IoICcuc2xpZGUtYmFja2dyb3VuZCcgKTtcblx0XHRcdFx0aWYoIGJhY2tncm91bmQgJiYgYmFja2dyb3VuZC5wYXJlbnROb2RlID09PSBzbGlkZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYmFja2dyb3VuZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHZhciBob3Jpem9udGFsQmFja2dyb3VuZCA9IGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoICcuYmFja2dyb3VuZHM+LnNsaWRlLWJhY2tncm91bmQnIClbIHggXTtcblx0XHR2YXIgdmVydGljYWxCYWNrZ3JvdW5kcyA9IGhvcml6b250YWxCYWNrZ3JvdW5kICYmIGhvcml6b250YWxCYWNrZ3JvdW5kLnF1ZXJ5U2VsZWN0b3JBbGwoICcuc2xpZGUtYmFja2dyb3VuZCcgKTtcblxuXHRcdGlmKCB2ZXJ0aWNhbEJhY2tncm91bmRzICYmIHZlcnRpY2FsQmFja2dyb3VuZHMubGVuZ3RoICYmIHR5cGVvZiB5ID09PSAnbnVtYmVyJyApIHtcblx0XHRcdHJldHVybiB2ZXJ0aWNhbEJhY2tncm91bmRzID8gdmVydGljYWxCYWNrZ3JvdW5kc1sgeSBdIDogdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdHJldHVybiBob3Jpem9udGFsQmFja2dyb3VuZDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHJpZXZlcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgcHJlc2VudGF0aW9uIGFzXG5cdCAqIGFuIG9iamVjdC4gVGhpcyBzdGF0ZSBjYW4gdGhlbiBiZSByZXN0b3JlZCBhdCBhbnlcblx0ICogdGltZS5cblx0ICovXG5cdGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuXG5cdFx0dmFyIGluZGljZXMgPSBnZXRJbmRpY2VzKCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aW5kZXhoOiBpbmRpY2VzLmgsXG5cdFx0XHRpbmRleHY6IGluZGljZXMudixcblx0XHRcdGluZGV4ZjogaW5kaWNlcy5mLFxuXHRcdFx0cGF1c2VkOiBpc1BhdXNlZCgpLFxuXHRcdFx0b3ZlcnZpZXc6IGlzT3ZlcnZpZXcoKVxuXHRcdH07XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXN0b3JlcyB0aGUgcHJlc2VudGF0aW9uIHRvIHRoZSBnaXZlbiBzdGF0ZS5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIEFzIGdlbmVyYXRlZCBieSBnZXRTdGF0ZSgpXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXRTdGF0ZSggc3RhdGUgKSB7XG5cblx0XHRpZiggdHlwZW9mIHN0YXRlID09PSAnb2JqZWN0JyApIHtcblx0XHRcdHNsaWRlKCBkZXNlcmlhbGl6ZSggc3RhdGUuaW5kZXhoICksIGRlc2VyaWFsaXplKCBzdGF0ZS5pbmRleHYgKSwgZGVzZXJpYWxpemUoIHN0YXRlLmluZGV4ZiApICk7XG5cblx0XHRcdHZhciBwYXVzZWRGbGFnID0gZGVzZXJpYWxpemUoIHN0YXRlLnBhdXNlZCApLFxuXHRcdFx0XHRvdmVydmlld0ZsYWcgPSBkZXNlcmlhbGl6ZSggc3RhdGUub3ZlcnZpZXcgKTtcblxuXHRcdFx0aWYoIHR5cGVvZiBwYXVzZWRGbGFnID09PSAnYm9vbGVhbicgJiYgcGF1c2VkRmxhZyAhPT0gaXNQYXVzZWQoKSApIHtcblx0XHRcdFx0dG9nZ2xlUGF1c2UoIHBhdXNlZEZsYWcgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIHR5cGVvZiBvdmVydmlld0ZsYWcgPT09ICdib29sZWFuJyAmJiBvdmVydmlld0ZsYWcgIT09IGlzT3ZlcnZpZXcoKSApIHtcblx0XHRcdFx0dG9nZ2xlT3ZlcnZpZXcoIG92ZXJ2aWV3RmxhZyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIHNvcnRlZCBmcmFnbWVudHMgbGlzdCwgb3JkZXJlZCBieSBhbiBpbmNyZWFzaW5nXG5cdCAqIFwiZGF0YS1mcmFnbWVudC1pbmRleFwiIGF0dHJpYnV0ZS5cblx0ICpcblx0ICogRnJhZ21lbnRzIHdpbGwgYmUgcmV2ZWFsZWQgaW4gdGhlIG9yZGVyIHRoYXQgdGhleSBhcmUgcmV0dXJuZWQgYnlcblx0ICogdGhpcyBmdW5jdGlvbiwgc28geW91IGNhbiB1c2UgdGhlIGluZGV4IGF0dHJpYnV0ZXMgdG8gY29udHJvbCB0aGVcblx0ICogb3JkZXIgb2YgZnJhZ21lbnQgYXBwZWFyYW5jZS5cblx0ICpcblx0ICogVG8gbWFpbnRhaW4gYSBzZW5zaWJsZSBkZWZhdWx0IGZyYWdtZW50IG9yZGVyLCBmcmFnbWVudHMgYXJlIHByZXN1bWVkXG5cdCAqIHRvIGJlIHBhc3NlZCBpbiBkb2N1bWVudCBvcmRlci4gVGhpcyBmdW5jdGlvbiBhZGRzIGEgXCJmcmFnbWVudC1pbmRleFwiXG5cdCAqIGF0dHJpYnV0ZSB0byBlYWNoIG5vZGUgaWYgc3VjaCBhbiBhdHRyaWJ1dGUgaXMgbm90IGFscmVhZHkgcHJlc2VudCxcblx0ICogYW5kIHNldHMgdGhhdCBhdHRyaWJ1dGUgdG8gYW4gaW50ZWdlciB2YWx1ZSB3aGljaCBpcyB0aGUgcG9zaXRpb24gb2Zcblx0ICogdGhlIGZyYWdtZW50IHdpdGhpbiB0aGUgZnJhZ21lbnRzIGxpc3QuXG5cdCAqL1xuXHRmdW5jdGlvbiBzb3J0RnJhZ21lbnRzKCBmcmFnbWVudHMgKSB7XG5cblx0XHRmcmFnbWVudHMgPSB0b0FycmF5KCBmcmFnbWVudHMgKTtcblxuXHRcdHZhciBvcmRlcmVkID0gW10sXG5cdFx0XHR1bm9yZGVyZWQgPSBbXSxcblx0XHRcdHNvcnRlZCA9IFtdO1xuXG5cdFx0Ly8gR3JvdXAgb3JkZXJlZCBhbmQgdW5vcmRlcmVkIGVsZW1lbnRzXG5cdFx0ZnJhZ21lbnRzLmZvckVhY2goIGZ1bmN0aW9uKCBmcmFnbWVudCwgaSApIHtcblx0XHRcdGlmKCBmcmFnbWVudC5oYXNBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JyApICkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBwYXJzZUludCggZnJhZ21lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSwgMTAgKTtcblxuXHRcdFx0XHRpZiggIW9yZGVyZWRbaW5kZXhdICkge1xuXHRcdFx0XHRcdG9yZGVyZWRbaW5kZXhdID0gW107XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRvcmRlcmVkW2luZGV4XS5wdXNoKCBmcmFnbWVudCApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHVub3JkZXJlZC5wdXNoKCBbIGZyYWdtZW50IF0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cblx0XHQvLyBBcHBlbmQgZnJhZ21lbnRzIHdpdGhvdXQgZXhwbGljaXQgaW5kaWNlcyBpbiB0aGVpclxuXHRcdC8vIERPTSBvcmRlclxuXHRcdG9yZGVyZWQgPSBvcmRlcmVkLmNvbmNhdCggdW5vcmRlcmVkICk7XG5cblx0XHQvLyBNYW51YWxseSBjb3VudCB0aGUgaW5kZXggdXAgcGVyIGdyb3VwIHRvIGVuc3VyZSB0aGVyZVxuXHRcdC8vIGFyZSBubyBnYXBzXG5cdFx0dmFyIGluZGV4ID0gMDtcblxuXHRcdC8vIFB1c2ggYWxsIGZyYWdtZW50cyBpbiB0aGVpciBzb3J0ZWQgb3JkZXIgdG8gYW4gYXJyYXksXG5cdFx0Ly8gdGhpcyBmbGF0dGVucyB0aGUgZ3JvdXBzXG5cdFx0b3JkZXJlZC5mb3JFYWNoKCBmdW5jdGlvbiggZ3JvdXAgKSB7XG5cdFx0XHRncm91cC5mb3JFYWNoKCBmdW5jdGlvbiggZnJhZ21lbnQgKSB7XG5cdFx0XHRcdHNvcnRlZC5wdXNoKCBmcmFnbWVudCApO1xuXHRcdFx0XHRmcmFnbWVudC5zZXRBdHRyaWJ1dGUoICdkYXRhLWZyYWdtZW50LWluZGV4JywgaW5kZXggKTtcblx0XHRcdH0gKTtcblxuXHRcdFx0aW5kZXggKys7XG5cdFx0fSApO1xuXG5cdFx0cmV0dXJuIHNvcnRlZDtcblxuXHR9XG5cblx0LyoqXG5cdCAqIE5hdmlnYXRlIHRvIHRoZSBzcGVjaWZpZWQgc2xpZGUgZnJhZ21lbnQuXG5cdCAqXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGZyYWdtZW50IHRoYXRcblx0ICogc2hvdWxkIGJlIHNob3duLCAtMSBtZWFucyBhbGwgYXJlIGludmlzaWJsZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IEludGVnZXIgb2Zmc2V0IHRvIGFwcGx5IHRvIHRoZVxuXHQgKiBmcmFnbWVudCBpbmRleFxuXHQgKlxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIGEgY2hhbmdlIHdhcyBtYWRlIGluIGFueVxuXHQgKiBmcmFnbWVudHMgdmlzaWJpbGl0eSBhcyBwYXJ0IG9mIHRoaXMgY2FsbFxuXHQgKi9cblx0ZnVuY3Rpb24gbmF2aWdhdGVGcmFnbWVudCggaW5kZXgsIG9mZnNldCApIHtcblxuXHRcdGlmKCBjdXJyZW50U2xpZGUgJiYgY29uZmlnLmZyYWdtZW50cyApIHtcblxuXHRcdFx0dmFyIGZyYWdtZW50cyA9IHNvcnRGcmFnbWVudHMoIGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApICk7XG5cdFx0XHRpZiggZnJhZ21lbnRzLmxlbmd0aCApIHtcblxuXHRcdFx0XHQvLyBJZiBubyBpbmRleCBpcyBzcGVjaWZpZWQsIGZpbmQgdGhlIGN1cnJlbnRcblx0XHRcdFx0aWYoIHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicgKSB7XG5cdFx0XHRcdFx0dmFyIGxhc3RWaXNpYmxlRnJhZ21lbnQgPSBzb3J0RnJhZ21lbnRzKCBjdXJyZW50U2xpZGUucXVlcnlTZWxlY3RvckFsbCggJy5mcmFnbWVudC52aXNpYmxlJyApICkucG9wKCk7XG5cblx0XHRcdFx0XHRpZiggbGFzdFZpc2libGVGcmFnbWVudCApIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gcGFyc2VJbnQoIGxhc3RWaXNpYmxlRnJhZ21lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSB8fCAwLCAxMCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGluZGV4ID0gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgYW4gb2Zmc2V0IGlzIHNwZWNpZmllZCwgYXBwbHkgaXQgdG8gdGhlIGluZGV4XG5cdFx0XHRcdGlmKCB0eXBlb2Ygb2Zmc2V0ID09PSAnbnVtYmVyJyApIHtcblx0XHRcdFx0XHRpbmRleCArPSBvZmZzZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgZnJhZ21lbnRzU2hvd24gPSBbXSxcblx0XHRcdFx0XHRmcmFnbWVudHNIaWRkZW4gPSBbXTtcblxuXHRcdFx0XHR0b0FycmF5KCBmcmFnbWVudHMgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWxlbWVudCwgaSApIHtcblxuXHRcdFx0XHRcdGlmKCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSggJ2RhdGEtZnJhZ21lbnQtaW5kZXgnICkgKSB7XG5cdFx0XHRcdFx0XHRpID0gcGFyc2VJbnQoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1mcmFnbWVudC1pbmRleCcgKSwgMTAgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBWaXNpYmxlIGZyYWdtZW50c1xuXHRcdFx0XHRcdGlmKCBpIDw9IGluZGV4ICkge1xuXHRcdFx0XHRcdFx0aWYoICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ3Zpc2libGUnICkgKSBmcmFnbWVudHNTaG93bi5wdXNoKCBlbGVtZW50ICk7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICd2aXNpYmxlJyApO1xuXHRcdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnY3VycmVudC1mcmFnbWVudCcgKTtcblxuXHRcdFx0XHRcdFx0Ly8gQW5ub3VuY2UgdGhlIGZyYWdtZW50cyBvbmUgYnkgb25lIHRvIHRoZSBTY3JlZW4gUmVhZGVyXG5cdFx0XHRcdFx0XHRkb20uc3RhdHVzRGl2LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcblxuXHRcdFx0XHRcdFx0aWYoIGkgPT09IGluZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdjdXJyZW50LWZyYWdtZW50JyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBIaWRkZW4gZnJhZ21lbnRzXG5cdFx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICd2aXNpYmxlJyApICkgZnJhZ21lbnRzSGlkZGVuLnB1c2goIGVsZW1lbnQgKTtcblx0XHRcdFx0XHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ3Zpc2libGUnICk7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdjdXJyZW50LWZyYWdtZW50JyApO1xuXHRcdFx0XHRcdH1cblxuXG5cdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRpZiggZnJhZ21lbnRzSGlkZGVuLmxlbmd0aCApIHtcblx0XHRcdFx0XHRkaXNwYXRjaEV2ZW50KCAnZnJhZ21lbnRoaWRkZW4nLCB7IGZyYWdtZW50OiBmcmFnbWVudHNIaWRkZW5bMF0sIGZyYWdtZW50czogZnJhZ21lbnRzSGlkZGVuIH0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCBmcmFnbWVudHNTaG93bi5sZW5ndGggKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hFdmVudCggJ2ZyYWdtZW50c2hvd24nLCB7IGZyYWdtZW50OiBmcmFnbWVudHNTaG93blswXSwgZnJhZ21lbnRzOiBmcmFnbWVudHNTaG93biB9ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR1cGRhdGVDb250cm9scygpO1xuXHRcdFx0XHR1cGRhdGVQcm9ncmVzcygpO1xuXG5cdFx0XHRcdHJldHVybiAhISggZnJhZ21lbnRzU2hvd24ubGVuZ3RoIHx8IGZyYWdtZW50c0hpZGRlbi5sZW5ndGggKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdH1cblxuXHQvKipcblx0ICogTmF2aWdhdGUgdG8gdGhlIG5leHQgc2xpZGUgZnJhZ21lbnQuXG5cdCAqXG5cdCAqIEByZXR1cm4ge0Jvb2xlYW59IHRydWUgaWYgdGhlcmUgd2FzIGEgbmV4dCBmcmFnbWVudCxcblx0ICogZmFsc2Ugb3RoZXJ3aXNlXG5cdCAqL1xuXHRmdW5jdGlvbiBuZXh0RnJhZ21lbnQoKSB7XG5cblx0XHRyZXR1cm4gbmF2aWdhdGVGcmFnbWVudCggbnVsbCwgMSApO1xuXG5cdH1cblxuXHQvKipcblx0ICogTmF2aWdhdGUgdG8gdGhlIHByZXZpb3VzIHNsaWRlIGZyYWdtZW50LlxuXHQgKlxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSB0cnVlIGlmIHRoZXJlIHdhcyBhIHByZXZpb3VzIGZyYWdtZW50LFxuXHQgKiBmYWxzZSBvdGhlcndpc2Vcblx0ICovXG5cdGZ1bmN0aW9uIHByZXZpb3VzRnJhZ21lbnQoKSB7XG5cblx0XHRyZXR1cm4gbmF2aWdhdGVGcmFnbWVudCggbnVsbCwgLTEgKTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIEN1ZXMgYSBuZXcgYXV0b21hdGVkIHNsaWRlIGlmIGVuYWJsZWQgaW4gdGhlIGNvbmZpZy5cblx0ICovXG5cdGZ1bmN0aW9uIGN1ZUF1dG9TbGlkZSgpIHtcblxuXHRcdGNhbmNlbEF1dG9TbGlkZSgpO1xuXG5cdFx0aWYoIGN1cnJlbnRTbGlkZSApIHtcblxuXHRcdFx0dmFyIGN1cnJlbnRGcmFnbWVudCA9IGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yKCAnLmN1cnJlbnQtZnJhZ21lbnQnICk7XG5cblx0XHRcdHZhciBmcmFnbWVudEF1dG9TbGlkZSA9IGN1cnJlbnRGcmFnbWVudCA/IGN1cnJlbnRGcmFnbWVudC5nZXRBdHRyaWJ1dGUoICdkYXRhLWF1dG9zbGlkZScgKSA6IG51bGw7XG5cdFx0XHR2YXIgcGFyZW50QXV0b1NsaWRlID0gY3VycmVudFNsaWRlLnBhcmVudE5vZGUgPyBjdXJyZW50U2xpZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWF1dG9zbGlkZScgKSA6IG51bGw7XG5cdFx0XHR2YXIgc2xpZGVBdXRvU2xpZGUgPSBjdXJyZW50U2xpZGUuZ2V0QXR0cmlidXRlKCAnZGF0YS1hdXRvc2xpZGUnICk7XG5cblx0XHRcdC8vIFBpY2sgdmFsdWUgaW4gdGhlIGZvbGxvd2luZyBwcmlvcml0eSBvcmRlcjpcblx0XHRcdC8vIDEuIEN1cnJlbnQgZnJhZ21lbnQncyBkYXRhLWF1dG9zbGlkZVxuXHRcdFx0Ly8gMi4gQ3VycmVudCBzbGlkZSdzIGRhdGEtYXV0b3NsaWRlXG5cdFx0XHQvLyAzLiBQYXJlbnQgc2xpZGUncyBkYXRhLWF1dG9zbGlkZVxuXHRcdFx0Ly8gNC4gR2xvYmFsIGF1dG9TbGlkZSBzZXR0aW5nXG5cdFx0XHRpZiggZnJhZ21lbnRBdXRvU2xpZGUgKSB7XG5cdFx0XHRcdGF1dG9TbGlkZSA9IHBhcnNlSW50KCBmcmFnbWVudEF1dG9TbGlkZSwgMTAgKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoIHNsaWRlQXV0b1NsaWRlICkge1xuXHRcdFx0XHRhdXRvU2xpZGUgPSBwYXJzZUludCggc2xpZGVBdXRvU2xpZGUsIDEwICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKCBwYXJlbnRBdXRvU2xpZGUgKSB7XG5cdFx0XHRcdGF1dG9TbGlkZSA9IHBhcnNlSW50KCBwYXJlbnRBdXRvU2xpZGUsIDEwICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YXV0b1NsaWRlID0gY29uZmlnLmF1dG9TbGlkZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUgYXJlIG1lZGlhIGVsZW1lbnRzIHdpdGggZGF0YS1hdXRvcGxheSxcblx0XHRcdC8vIGF1dG9tYXRpY2FsbHkgc2V0IHRoZSBhdXRvU2xpZGUgZHVyYXRpb24gdG8gdGhlXG5cdFx0XHQvLyBsZW5ndGggb2YgdGhhdCBtZWRpYS4gTm90IGFwcGxpY2FibGUgaWYgdGhlIHNsaWRlXG5cdFx0XHQvLyBpcyBkaXZpZGVkIHVwIGludG8gZnJhZ21lbnRzLlxuXHRcdFx0aWYoIGN1cnJlbnRTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnLmZyYWdtZW50JyApLmxlbmd0aCA9PT0gMCApIHtcblx0XHRcdFx0dG9BcnJheSggY3VycmVudFNsaWRlLnF1ZXJ5U2VsZWN0b3JBbGwoICd2aWRlbywgYXVkaW8nICkgKS5mb3JFYWNoKCBmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHRcdFx0aWYoIGVsLmhhc0F0dHJpYnV0ZSggJ2RhdGEtYXV0b3BsYXknICkgKSB7XG5cdFx0XHRcdFx0XHRpZiggYXV0b1NsaWRlICYmIGVsLmR1cmF0aW9uICogMTAwMCA+IGF1dG9TbGlkZSApIHtcblx0XHRcdFx0XHRcdFx0YXV0b1NsaWRlID0gKCBlbC5kdXJhdGlvbiAqIDEwMDAgKSArIDEwMDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEN1ZSB0aGUgbmV4dCBhdXRvLXNsaWRlIGlmOlxuXHRcdFx0Ly8gLSBUaGVyZSBpcyBhbiBhdXRvU2xpZGUgdmFsdWVcblx0XHRcdC8vIC0gQXV0by1zbGlkaW5nIGlzbid0IHBhdXNlZCBieSB0aGUgdXNlclxuXHRcdFx0Ly8gLSBUaGUgcHJlc2VudGF0aW9uIGlzbid0IHBhdXNlZFxuXHRcdFx0Ly8gLSBUaGUgb3ZlcnZpZXcgaXNuJ3QgYWN0aXZlXG5cdFx0XHQvLyAtIFRoZSBwcmVzZW50YXRpb24gaXNuJ3Qgb3ZlclxuXHRcdFx0aWYoIGF1dG9TbGlkZSAmJiAhYXV0b1NsaWRlUGF1c2VkICYmICFpc1BhdXNlZCgpICYmICFpc092ZXJ2aWV3KCkgJiYgKCAhUmV2ZWFsLmlzTGFzdFNsaWRlKCkgfHwgYXZhaWxhYmxlRnJhZ21lbnRzKCkubmV4dCB8fCBjb25maWcubG9vcCA9PT0gdHJ1ZSApICkge1xuXHRcdFx0XHRhdXRvU2xpZGVUaW1lb3V0ID0gc2V0VGltZW91dCggbmF2aWdhdGVOZXh0LCBhdXRvU2xpZGUgKTtcblx0XHRcdFx0YXV0b1NsaWRlU3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcblx0XHRcdH1cblxuXHRcdFx0aWYoIGF1dG9TbGlkZVBsYXllciApIHtcblx0XHRcdFx0YXV0b1NsaWRlUGxheWVyLnNldFBsYXlpbmcoIGF1dG9TbGlkZVRpbWVvdXQgIT09IC0xICk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDYW5jZWxzIGFueSBvbmdvaW5nIHJlcXVlc3QgdG8gYXV0by1zbGlkZS5cblx0ICovXG5cdGZ1bmN0aW9uIGNhbmNlbEF1dG9TbGlkZSgpIHtcblxuXHRcdGNsZWFyVGltZW91dCggYXV0b1NsaWRlVGltZW91dCApO1xuXHRcdGF1dG9TbGlkZVRpbWVvdXQgPSAtMTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gcGF1c2VBdXRvU2xpZGUoKSB7XG5cblx0XHRpZiggYXV0b1NsaWRlICYmICFhdXRvU2xpZGVQYXVzZWQgKSB7XG5cdFx0XHRhdXRvU2xpZGVQYXVzZWQgPSB0cnVlO1xuXHRcdFx0ZGlzcGF0Y2hFdmVudCggJ2F1dG9zbGlkZXBhdXNlZCcgKTtcblx0XHRcdGNsZWFyVGltZW91dCggYXV0b1NsaWRlVGltZW91dCApO1xuXG5cdFx0XHRpZiggYXV0b1NsaWRlUGxheWVyICkge1xuXHRcdFx0XHRhdXRvU2xpZGVQbGF5ZXIuc2V0UGxheWluZyggZmFsc2UgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJlc3VtZUF1dG9TbGlkZSgpIHtcblxuXHRcdGlmKCBhdXRvU2xpZGUgJiYgYXV0b1NsaWRlUGF1c2VkICkge1xuXHRcdFx0YXV0b1NsaWRlUGF1c2VkID0gZmFsc2U7XG5cdFx0XHRkaXNwYXRjaEV2ZW50KCAnYXV0b3NsaWRlcmVzdW1lZCcgKTtcblx0XHRcdGN1ZUF1dG9TbGlkZSgpO1xuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gbmF2aWdhdGVMZWZ0KCkge1xuXG5cdFx0Ly8gUmV2ZXJzZSBmb3IgUlRMXG5cdFx0aWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHRpZiggKCBpc092ZXJ2aWV3KCkgfHwgbmV4dEZyYWdtZW50KCkgPT09IGZhbHNlICkgJiYgYXZhaWxhYmxlUm91dGVzKCkubGVmdCApIHtcblx0XHRcdFx0c2xpZGUoIGluZGV4aCArIDEgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gTm9ybWFsIG5hdmlnYXRpb25cblx0XHRlbHNlIGlmKCAoIGlzT3ZlcnZpZXcoKSB8fCBwcmV2aW91c0ZyYWdtZW50KCkgPT09IGZhbHNlICkgJiYgYXZhaWxhYmxlUm91dGVzKCkubGVmdCApIHtcblx0XHRcdHNsaWRlKCBpbmRleGggLSAxICk7XG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBuYXZpZ2F0ZVJpZ2h0KCkge1xuXG5cdFx0Ly8gUmV2ZXJzZSBmb3IgUlRMXG5cdFx0aWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHRpZiggKCBpc092ZXJ2aWV3KCkgfHwgcHJldmlvdXNGcmFnbWVudCgpID09PSBmYWxzZSApICYmIGF2YWlsYWJsZVJvdXRlcygpLnJpZ2h0ICkge1xuXHRcdFx0XHRzbGlkZSggaW5kZXhoIC0gMSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBOb3JtYWwgbmF2aWdhdGlvblxuXHRcdGVsc2UgaWYoICggaXNPdmVydmlldygpIHx8IG5leHRGcmFnbWVudCgpID09PSBmYWxzZSApICYmIGF2YWlsYWJsZVJvdXRlcygpLnJpZ2h0ICkge1xuXHRcdFx0c2xpZGUoIGluZGV4aCArIDEgKTtcblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG5hdmlnYXRlVXAoKSB7XG5cblx0XHQvLyBQcmlvcml0aXplIGhpZGluZyBmcmFnbWVudHNcblx0XHRpZiggKCBpc092ZXJ2aWV3KCkgfHwgcHJldmlvdXNGcmFnbWVudCgpID09PSBmYWxzZSApICYmIGF2YWlsYWJsZVJvdXRlcygpLnVwICkge1xuXHRcdFx0c2xpZGUoIGluZGV4aCwgaW5kZXh2IC0gMSApO1xuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gbmF2aWdhdGVEb3duKCkge1xuXG5cdFx0Ly8gUHJpb3JpdGl6ZSByZXZlYWxpbmcgZnJhZ21lbnRzXG5cdFx0aWYoICggaXNPdmVydmlldygpIHx8IG5leHRGcmFnbWVudCgpID09PSBmYWxzZSApICYmIGF2YWlsYWJsZVJvdXRlcygpLmRvd24gKSB7XG5cdFx0XHRzbGlkZSggaW5kZXhoLCBpbmRleHYgKyAxICk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogTmF2aWdhdGVzIGJhY2t3YXJkcywgcHJpb3JpdGl6ZWQgaW4gdGhlIGZvbGxvd2luZyBvcmRlcjpcblx0ICogMSkgUHJldmlvdXMgZnJhZ21lbnRcblx0ICogMikgUHJldmlvdXMgdmVydGljYWwgc2xpZGVcblx0ICogMykgUHJldmlvdXMgaG9yaXpvbnRhbCBzbGlkZVxuXHQgKi9cblx0ZnVuY3Rpb24gbmF2aWdhdGVQcmV2KCkge1xuXG5cdFx0Ly8gUHJpb3JpdGl6ZSByZXZlYWxpbmcgZnJhZ21lbnRzXG5cdFx0aWYoIHByZXZpb3VzRnJhZ21lbnQoKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRpZiggYXZhaWxhYmxlUm91dGVzKCkudXAgKSB7XG5cdFx0XHRcdG5hdmlnYXRlVXAoKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHQvLyBGZXRjaCB0aGUgcHJldmlvdXMgaG9yaXpvbnRhbCBzbGlkZSwgaWYgdGhlcmUgaXMgb25lXG5cdFx0XHRcdHZhciBwcmV2aW91c1NsaWRlO1xuXG5cdFx0XHRcdGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0XHRcdHByZXZpb3VzU2xpZGUgPSB0b0FycmF5KCBkb20ud3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCBIT1JJWk9OVEFMX1NMSURFU19TRUxFQ1RPUiArICcuZnV0dXJlJyApICkucG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0cHJldmlvdXNTbGlkZSA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICsgJy5wYXN0JyApICkucG9wKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiggcHJldmlvdXNTbGlkZSApIHtcblx0XHRcdFx0XHR2YXIgdiA9ICggcHJldmlvdXNTbGlkZS5xdWVyeVNlbGVjdG9yQWxsKCAnc2VjdGlvbicgKS5sZW5ndGggLSAxICkgfHwgdW5kZWZpbmVkO1xuXHRcdFx0XHRcdHZhciBoID0gaW5kZXhoIC0gMTtcblx0XHRcdFx0XHRzbGlkZSggaCwgdiApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogVGhlIHJldmVyc2Ugb2YgI25hdmlnYXRlUHJldigpLlxuXHQgKi9cblx0ZnVuY3Rpb24gbmF2aWdhdGVOZXh0KCkge1xuXG5cdFx0Ly8gUHJpb3JpdGl6ZSByZXZlYWxpbmcgZnJhZ21lbnRzXG5cdFx0aWYoIG5leHRGcmFnbWVudCgpID09PSBmYWxzZSApIHtcblx0XHRcdGlmKCBhdmFpbGFibGVSb3V0ZXMoKS5kb3duICkge1xuXHRcdFx0XHRuYXZpZ2F0ZURvd24oKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoIGNvbmZpZy5ydGwgKSB7XG5cdFx0XHRcdG5hdmlnYXRlTGVmdCgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG5hdmlnYXRlUmlnaHQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiBhdXRvLXNsaWRpbmcgaXMgZW5hYmxlZCB3ZSBuZWVkIHRvIGN1ZSB1cFxuXHRcdC8vIGFub3RoZXIgdGltZW91dFxuXHRcdGN1ZUF1dG9TbGlkZSgpO1xuXG5cdH1cblxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gRVZFTlRTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblx0LyoqXG5cdCAqIENhbGxlZCBieSBhbGwgZXZlbnQgaGFuZGxlcnMgdGhhdCBhcmUgYmFzZWQgb24gdXNlclxuXHQgKiBpbnB1dC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uVXNlcklucHV0KCBldmVudCApIHtcblxuXHRcdGlmKCBjb25maWcuYXV0b1NsaWRlU3RvcHBhYmxlICkge1xuXHRcdFx0cGF1c2VBdXRvU2xpZGUoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgZG9jdW1lbnQgbGV2ZWwgJ2tleXByZXNzJyBldmVudC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlQcmVzcyggZXZlbnQgKSB7XG5cblx0XHQvLyBDaGVjayBpZiB0aGUgcHJlc3NlZCBrZXkgaXMgcXVlc3Rpb24gbWFya1xuXHRcdGlmKCBldmVudC5zaGlmdEtleSAmJiBldmVudC5jaGFyQ29kZSA9PT0gNjMgKSB7XG5cdFx0XHRpZiggZG9tLm92ZXJsYXkgKSB7XG5cdFx0XHRcdGNsb3NlT3ZlcmxheSgpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHNob3dIZWxwKCB0cnVlICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIGRvY3VtZW50IGxldmVsICdrZXlkb3duJyBldmVudC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uRG9jdW1lbnRLZXlEb3duKCBldmVudCApIHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYSBjb25kaXRpb24gc3BlY2lmaWVkIGFuZCBpdCByZXR1cm5zIGZhbHNlLFxuXHRcdC8vIGlnbm9yZSB0aGlzIGV2ZW50XG5cdFx0aWYoIHR5cGVvZiBjb25maWcua2V5Ym9hcmRDb25kaXRpb24gPT09ICdmdW5jdGlvbicgJiYgY29uZmlnLmtleWJvYXJkQ29uZGl0aW9uKCkgPT09IGZhbHNlICkge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtZW1iZXIgaWYgYXV0by1zbGlkaW5nIHdhcyBwYXVzZWQgc28gd2UgY2FuIHRvZ2dsZSBpdFxuXHRcdHZhciBhdXRvU2xpZGVXYXNQYXVzZWQgPSBhdXRvU2xpZGVQYXVzZWQ7XG5cblx0XHRvblVzZXJJbnB1dCggZXZlbnQgKTtcblxuXHRcdC8vIENoZWNrIGlmIHRoZXJlJ3MgYSBmb2N1c2VkIGVsZW1lbnQgdGhhdCBjb3VsZCBiZSB1c2luZ1xuXHRcdC8vIHRoZSBrZXlib2FyZFxuXHRcdHZhciBhY3RpdmVFbGVtZW50SXNDRSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5jb250ZW50RWRpdGFibGUgIT09ICdpbmhlcml0Jztcblx0XHR2YXIgYWN0aXZlRWxlbWVudElzSW5wdXQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudGFnTmFtZSAmJiAvaW5wdXR8dGV4dGFyZWEvaS50ZXN0KCBkb2N1bWVudC5hY3RpdmVFbGVtZW50LnRhZ05hbWUgKTtcblxuXHRcdC8vIERpc3JlZ2FyZCB0aGUgZXZlbnQgaWYgdGhlcmUncyBhIGZvY3VzZWQgZWxlbWVudCBvciBhXG5cdFx0Ly8ga2V5Ym9hcmQgbW9kaWZpZXIga2V5IGlzIHByZXNlbnRcblx0XHRpZiggYWN0aXZlRWxlbWVudElzQ0UgfHwgYWN0aXZlRWxlbWVudElzSW5wdXQgfHwgKGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleUNvZGUgIT09IDMyKSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5tZXRhS2V5ICkgcmV0dXJuO1xuXG5cdFx0Ly8gV2hpbGUgcGF1c2VkIG9ubHkgYWxsb3cgXCJ1bnBhdXNpbmdcIiBrZXlib2FyZCBldmVudHMgKGIgYW5kIC4pXG5cdFx0aWYoIGlzUGF1c2VkKCkgJiYgWzY2LDE5MCwxOTFdLmluZGV4T2YoIGV2ZW50LmtleUNvZGUgKSA9PT0gLTEgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dmFyIHRyaWdnZXJlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gMS4gVXNlciBkZWZpbmVkIGtleSBiaW5kaW5nc1xuXHRcdGlmKCB0eXBlb2YgY29uZmlnLmtleWJvYXJkID09PSAnb2JqZWN0JyApIHtcblxuXHRcdFx0Zm9yKCB2YXIga2V5IGluIGNvbmZpZy5rZXlib2FyZCApIHtcblxuXHRcdFx0XHQvLyBDaGVjayBpZiB0aGlzIGJpbmRpbmcgbWF0Y2hlcyB0aGUgcHJlc3NlZCBrZXlcblx0XHRcdFx0aWYoIHBhcnNlSW50KCBrZXksIDEwICkgPT09IGV2ZW50LmtleUNvZGUgKSB7XG5cblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBjb25maWcua2V5Ym9hcmRbIGtleSBdO1xuXG5cdFx0XHRcdFx0Ly8gQ2FsbGJhY2sgZnVuY3Rpb25cblx0XHRcdFx0XHRpZiggdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdFx0dmFsdWUuYXBwbHkoIG51bGwsIFsgZXZlbnQgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBTdHJpbmcgc2hvcnRjdXRzIHRvIHJldmVhbC5qcyBBUElcblx0XHRcdFx0XHRlbHNlIGlmKCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBSZXZlYWxbIHZhbHVlIF0gPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0XHRSZXZlYWxbIHZhbHVlIF0uY2FsbCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRyaWdnZXJlZCA9IHRydWU7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHQvLyAyLiBTeXN0ZW0gZGVmaW5lZCBrZXkgYmluZGluZ3Ncblx0XHRpZiggdHJpZ2dlcmVkID09PSBmYWxzZSApIHtcblxuXHRcdFx0Ly8gQXNzdW1lIHRydWUgYW5kIHRyeSB0byBwcm92ZSBmYWxzZVxuXHRcdFx0dHJpZ2dlcmVkID0gdHJ1ZTtcblxuXHRcdFx0c3dpdGNoKCBldmVudC5rZXlDb2RlICkge1xuXHRcdFx0XHQvLyBwLCBwYWdlIHVwXG5cdFx0XHRcdGNhc2UgODA6IGNhc2UgMzM6IG5hdmlnYXRlUHJldigpOyBicmVhaztcblx0XHRcdFx0Ly8gbiwgcGFnZSBkb3duXG5cdFx0XHRcdGNhc2UgNzg6IGNhc2UgMzQ6IG5hdmlnYXRlTmV4dCgpOyBicmVhaztcblx0XHRcdFx0Ly8gaCwgbGVmdFxuXHRcdFx0XHRjYXNlIDcyOiBjYXNlIDM3OiBuYXZpZ2F0ZUxlZnQoKTsgYnJlYWs7XG5cdFx0XHRcdC8vIGwsIHJpZ2h0XG5cdFx0XHRcdGNhc2UgNzY6IGNhc2UgMzk6IG5hdmlnYXRlUmlnaHQoKTsgYnJlYWs7XG5cdFx0XHRcdC8vIGssIHVwXG5cdFx0XHRcdGNhc2UgNzU6IGNhc2UgMzg6IG5hdmlnYXRlVXAoKTsgYnJlYWs7XG5cdFx0XHRcdC8vIGosIGRvd25cblx0XHRcdFx0Y2FzZSA3NDogY2FzZSA0MDogbmF2aWdhdGVEb3duKCk7IGJyZWFrO1xuXHRcdFx0XHQvLyBob21lXG5cdFx0XHRcdGNhc2UgMzY6IHNsaWRlKCAwICk7IGJyZWFrO1xuXHRcdFx0XHQvLyBlbmRcblx0XHRcdFx0Y2FzZSAzNTogc2xpZGUoIE51bWJlci5NQVhfVkFMVUUgKTsgYnJlYWs7XG5cdFx0XHRcdC8vIHNwYWNlXG5cdFx0XHRcdGNhc2UgMzI6IGlzT3ZlcnZpZXcoKSA/IGRlYWN0aXZhdGVPdmVydmlldygpIDogZXZlbnQuc2hpZnRLZXkgPyBuYXZpZ2F0ZVByZXYoKSA6IG5hdmlnYXRlTmV4dCgpOyBicmVhaztcblx0XHRcdFx0Ly8gcmV0dXJuXG5cdFx0XHRcdGNhc2UgMTM6IGlzT3ZlcnZpZXcoKSA/IGRlYWN0aXZhdGVPdmVydmlldygpIDogdHJpZ2dlcmVkID0gZmFsc2U7IGJyZWFrO1xuXHRcdFx0XHQvLyB0d28tc3BvdCwgc2VtaWNvbG9uLCBiLCBwZXJpb2QsIExvZ2l0ZWNoIHByZXNlbnRlciB0b29scyBcImJsYWNrIHNjcmVlblwiIGJ1dHRvblxuXHRcdFx0XHRjYXNlIDU4OiBjYXNlIDU5OiBjYXNlIDY2OiBjYXNlIDE5MDogY2FzZSAxOTE6IHRvZ2dsZVBhdXNlKCk7IGJyZWFrO1xuXHRcdFx0XHQvLyBmXG5cdFx0XHRcdGNhc2UgNzA6IGVudGVyRnVsbHNjcmVlbigpOyBicmVhaztcblx0XHRcdFx0Ly8gYVxuXHRcdFx0XHRjYXNlIDY1OiBpZiAoIGNvbmZpZy5hdXRvU2xpZGVTdG9wcGFibGUgKSB0b2dnbGVBdXRvU2xpZGUoIGF1dG9TbGlkZVdhc1BhdXNlZCApOyBicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHR0cmlnZ2VyZWQgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBpbnB1dCByZXN1bHRlZCBpbiBhIHRyaWdnZXJlZCBhY3Rpb24gd2Ugc2hvdWxkIHByZXZlbnRcblx0XHQvLyB0aGUgYnJvd3NlcnMgZGVmYXVsdCBiZWhhdmlvclxuXHRcdGlmKCB0cmlnZ2VyZWQgKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblx0XHQvLyBFU0Mgb3IgTyBrZXlcblx0XHRlbHNlIGlmICggKCBldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXlDb2RlID09PSA3OSApICYmIGZlYXR1cmVzLnRyYW5zZm9ybXMzZCApIHtcblx0XHRcdGlmKCBkb20ub3ZlcmxheSApIHtcblx0XHRcdFx0Y2xvc2VPdmVybGF5KCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dG9nZ2xlT3ZlcnZpZXcoKTtcblx0XHRcdH1cblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHQvLyBJZiBhdXRvLXNsaWRpbmcgaXMgZW5hYmxlZCB3ZSBuZWVkIHRvIGN1ZSB1cFxuXHRcdC8vIGFub3RoZXIgdGltZW91dFxuXHRcdGN1ZUF1dG9TbGlkZSgpO1xuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlICd0b3VjaHN0YXJ0JyBldmVudCwgZW5hYmxlcyBzdXBwb3J0IGZvclxuXHQgKiBzd2lwZSBhbmQgcGluY2ggZ2VzdHVyZXMuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoIGV2ZW50ICkge1xuXG5cdFx0dG91Y2guc3RhcnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuXHRcdHRvdWNoLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcblx0XHR0b3VjaC5zdGFydENvdW50ID0gZXZlbnQudG91Y2hlcy5sZW5ndGg7XG5cblx0XHQvLyBJZiB0aGVyZSdzIHR3byB0b3VjaGVzIHdlIG5lZWQgdG8gbWVtb3JpemUgdGhlIGRpc3RhbmNlXG5cdFx0Ly8gYmV0d2VlbiB0aG9zZSB0d28gcG9pbnRzIHRvIGRldGVjdCBwaW5jaGluZ1xuXHRcdGlmKCBldmVudC50b3VjaGVzLmxlbmd0aCA9PT0gMiAmJiBjb25maWcub3ZlcnZpZXcgKSB7XG5cdFx0XHR0b3VjaC5zdGFydFNwYW4gPSBkaXN0YW5jZUJldHdlZW4oIHtcblx0XHRcdFx0eDogZXZlbnQudG91Y2hlc1sxXS5jbGllbnRYLFxuXHRcdFx0XHR5OiBldmVudC50b3VjaGVzWzFdLmNsaWVudFlcblx0XHRcdH0sIHtcblx0XHRcdFx0eDogdG91Y2guc3RhcnRYLFxuXHRcdFx0XHR5OiB0b3VjaC5zdGFydFlcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgJ3RvdWNobW92ZScgZXZlbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvblRvdWNoTW92ZSggZXZlbnQgKSB7XG5cblx0XHQvLyBFYWNoIHRvdWNoIHNob3VsZCBvbmx5IHRyaWdnZXIgb25lIGFjdGlvblxuXHRcdGlmKCAhdG91Y2guY2FwdHVyZWQgKSB7XG5cdFx0XHRvblVzZXJJbnB1dCggZXZlbnQgKTtcblxuXHRcdFx0dmFyIGN1cnJlbnRYID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuXHRcdFx0dmFyIGN1cnJlbnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuXG5cdFx0XHQvLyBJZiB0aGUgdG91Y2ggc3RhcnRlZCB3aXRoIHR3byBwb2ludHMgYW5kIHN0aWxsIGhhc1xuXHRcdFx0Ly8gdHdvIGFjdGl2ZSB0b3VjaGVzOyB0ZXN0IGZvciB0aGUgcGluY2ggZ2VzdHVyZVxuXHRcdFx0aWYoIGV2ZW50LnRvdWNoZXMubGVuZ3RoID09PSAyICYmIHRvdWNoLnN0YXJ0Q291bnQgPT09IDIgJiYgY29uZmlnLm92ZXJ2aWV3ICkge1xuXG5cdFx0XHRcdC8vIFRoZSBjdXJyZW50IGRpc3RhbmNlIGluIHBpeGVscyBiZXR3ZWVuIHRoZSB0d28gdG91Y2ggcG9pbnRzXG5cdFx0XHRcdHZhciBjdXJyZW50U3BhbiA9IGRpc3RhbmNlQmV0d2Vlbigge1xuXHRcdFx0XHRcdHg6IGV2ZW50LnRvdWNoZXNbMV0uY2xpZW50WCxcblx0XHRcdFx0XHR5OiBldmVudC50b3VjaGVzWzFdLmNsaWVudFlcblx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdHg6IHRvdWNoLnN0YXJ0WCxcblx0XHRcdFx0XHR5OiB0b3VjaC5zdGFydFlcblx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdC8vIElmIHRoZSBzcGFuIGlzIGxhcmdlciB0aGFuIHRoZSBkZXNpcmUgYW1vdW50IHdlJ3ZlIGdvdFxuXHRcdFx0XHQvLyBvdXJzZWx2ZXMgYSBwaW5jaFxuXHRcdFx0XHRpZiggTWF0aC5hYnMoIHRvdWNoLnN0YXJ0U3BhbiAtIGN1cnJlbnRTcGFuICkgPiB0b3VjaC50aHJlc2hvbGQgKSB7XG5cdFx0XHRcdFx0dG91Y2guY2FwdHVyZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0aWYoIGN1cnJlbnRTcGFuIDwgdG91Y2guc3RhcnRTcGFuICkge1xuXHRcdFx0XHRcdFx0YWN0aXZhdGVPdmVydmlldygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGRlYWN0aXZhdGVPdmVydmlldygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdH1cblx0XHRcdC8vIFRoZXJlIHdhcyBvbmx5IG9uZSB0b3VjaCBwb2ludCwgbG9vayBmb3IgYSBzd2lwZVxuXHRcdFx0ZWxzZSBpZiggZXZlbnQudG91Y2hlcy5sZW5ndGggPT09IDEgJiYgdG91Y2guc3RhcnRDb3VudCAhPT0gMiApIHtcblxuXHRcdFx0XHR2YXIgZGVsdGFYID0gY3VycmVudFggLSB0b3VjaC5zdGFydFgsXG5cdFx0XHRcdFx0ZGVsdGFZID0gY3VycmVudFkgLSB0b3VjaC5zdGFydFk7XG5cblx0XHRcdFx0aWYoIGRlbHRhWCA+IHRvdWNoLnRocmVzaG9sZCAmJiBNYXRoLmFicyggZGVsdGFYICkgPiBNYXRoLmFicyggZGVsdGFZICkgKSB7XG5cdFx0XHRcdFx0dG91Y2guY2FwdHVyZWQgPSB0cnVlO1xuXHRcdFx0XHRcdG5hdmlnYXRlTGVmdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoIGRlbHRhWCA8IC10b3VjaC50aHJlc2hvbGQgJiYgTWF0aC5hYnMoIGRlbHRhWCApID4gTWF0aC5hYnMoIGRlbHRhWSApICkge1xuXHRcdFx0XHRcdHRvdWNoLmNhcHR1cmVkID0gdHJ1ZTtcblx0XHRcdFx0XHRuYXZpZ2F0ZVJpZ2h0KCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiggZGVsdGFZID4gdG91Y2gudGhyZXNob2xkICkge1xuXHRcdFx0XHRcdHRvdWNoLmNhcHR1cmVkID0gdHJ1ZTtcblx0XHRcdFx0XHRuYXZpZ2F0ZVVwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSBpZiggZGVsdGFZIDwgLXRvdWNoLnRocmVzaG9sZCApIHtcblx0XHRcdFx0XHR0b3VjaC5jYXB0dXJlZCA9IHRydWU7XG5cdFx0XHRcdFx0bmF2aWdhdGVEb3duKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB3ZSdyZSBlbWJlZGRlZCwgb25seSBibG9jayB0b3VjaCBldmVudHMgaWYgdGhleSBoYXZlXG5cdFx0XHRcdC8vIHRyaWdnZXJlZCBhbiBhY3Rpb25cblx0XHRcdFx0aWYoIGNvbmZpZy5lbWJlZGRlZCApIHtcblx0XHRcdFx0XHRpZiggdG91Y2guY2FwdHVyZWQgfHwgaXNWZXJ0aWNhbFNsaWRlKCBjdXJyZW50U2xpZGUgKSApIHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIE5vdCBlbWJlZGRlZD8gQmxvY2sgdGhlbSBhbGwgdG8gYXZvaWQgbmVlZGxlc3MgdG9zc2luZ1xuXHRcdFx0XHQvLyBhcm91bmQgb2YgdGhlIHZpZXdwb3J0IGluIGlPU1xuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gVGhlcmUncyBhIGJ1ZyB3aXRoIHN3aXBpbmcgb24gc29tZSBBbmRyb2lkIGRldmljZXMgdW5sZXNzXG5cdFx0Ly8gdGhlIGRlZmF1bHQgYWN0aW9uIGlzIGFsd2F5cyBwcmV2ZW50ZWRcblx0XHRlbHNlIGlmKCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKCAvYW5kcm9pZC9naSApICkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVyIGZvciB0aGUgJ3RvdWNoZW5kJyBldmVudC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoIGV2ZW50ICkge1xuXG5cdFx0dG91Y2guY2FwdHVyZWQgPSBmYWxzZTtcblxuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnQgcG9pbnRlciBkb3duIHRvIHRvdWNoIHN0YXJ0LlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Qb2ludGVyRG93biggZXZlbnQgKSB7XG5cblx0XHRpZiggZXZlbnQucG9pbnRlclR5cGUgPT09IGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1RPVUNIIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIgKSB7XG5cdFx0XHRldmVudC50b3VjaGVzID0gW3sgY2xpZW50WDogZXZlbnQuY2xpZW50WCwgY2xpZW50WTogZXZlbnQuY2xpZW50WSB9XTtcblx0XHRcdG9uVG91Y2hTdGFydCggZXZlbnQgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IHBvaW50ZXIgbW92ZSB0byB0b3VjaCBtb3ZlLlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Qb2ludGVyTW92ZSggZXZlbnQgKSB7XG5cblx0XHRpZiggZXZlbnQucG9pbnRlclR5cGUgPT09IGV2ZW50Lk1TUE9JTlRFUl9UWVBFX1RPVUNIIHx8IGV2ZW50LnBvaW50ZXJUeXBlID09PSBcInRvdWNoXCIgKSAge1xuXHRcdFx0ZXZlbnQudG91Y2hlcyA9IFt7IGNsaWVudFg6IGV2ZW50LmNsaWVudFgsIGNsaWVudFk6IGV2ZW50LmNsaWVudFkgfV07XG5cdFx0XHRvblRvdWNoTW92ZSggZXZlbnQgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IHBvaW50ZXIgdXAgdG8gdG91Y2ggZW5kLlxuXHQgKi9cblx0ZnVuY3Rpb24gb25Qb2ludGVyVXAoIGV2ZW50ICkge1xuXG5cdFx0aWYoIGV2ZW50LnBvaW50ZXJUeXBlID09PSBldmVudC5NU1BPSU5URVJfVFlQRV9UT1VDSCB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gXCJ0b3VjaFwiICkgIHtcblx0XHRcdGV2ZW50LnRvdWNoZXMgPSBbeyBjbGllbnRYOiBldmVudC5jbGllbnRYLCBjbGllbnRZOiBldmVudC5jbGllbnRZIH1dO1xuXHRcdFx0b25Ub3VjaEVuZCggZXZlbnQgKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIG1vdXNlIHdoZWVsIHNjcm9sbGluZywgdGhyb3R0bGVkIHRvIGF2b2lkIHNraXBwaW5nXG5cdCAqIG11bHRpcGxlIHNsaWRlcy5cblx0ICovXG5cdGZ1bmN0aW9uIG9uRG9jdW1lbnRNb3VzZVNjcm9sbCggZXZlbnQgKSB7XG5cblx0XHRpZiggRGF0ZS5ub3coKSAtIGxhc3RNb3VzZVdoZWVsU3RlcCA+IDYwMCApIHtcblxuXHRcdFx0bGFzdE1vdXNlV2hlZWxTdGVwID0gRGF0ZS5ub3coKTtcblxuXHRcdFx0dmFyIGRlbHRhID0gZXZlbnQuZGV0YWlsIHx8IC1ldmVudC53aGVlbERlbHRhO1xuXHRcdFx0aWYoIGRlbHRhID4gMCApIHtcblx0XHRcdFx0bmF2aWdhdGVOZXh0KCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bmF2aWdhdGVQcmV2KCk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBDbGlja2luZyBvbiB0aGUgcHJvZ3Jlc3MgYmFyIHJlc3VsdHMgaW4gYSBuYXZpZ2F0aW9uIHRvIHRoZVxuXHQgKiBjbG9zZXN0IGFwcHJveGltYXRlIGhvcml6b250YWwgc2xpZGUgdXNpbmcgdGhpcyBlcXVhdGlvbjpcblx0ICpcblx0ICogKCBjbGlja1ggLyBwcmVzZW50YXRpb25XaWR0aCApICogbnVtYmVyT2ZTbGlkZXNcblx0ICovXG5cdGZ1bmN0aW9uIG9uUHJvZ3Jlc3NDbGlja2VkKCBldmVudCApIHtcblxuXHRcdG9uVXNlcklucHV0KCBldmVudCApO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHZhciBzbGlkZXNUb3RhbCA9IHRvQXJyYXkoIGRvbS53cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoIEhPUklaT05UQUxfU0xJREVTX1NFTEVDVE9SICkgKS5sZW5ndGg7XG5cdFx0dmFyIHNsaWRlSW5kZXggPSBNYXRoLmZsb29yKCAoIGV2ZW50LmNsaWVudFggLyBkb20ud3JhcHBlci5vZmZzZXRXaWR0aCApICogc2xpZGVzVG90YWwgKTtcblxuXHRcdGlmKCBjb25maWcucnRsICkge1xuXHRcdFx0c2xpZGVJbmRleCA9IHNsaWRlc1RvdGFsIC0gc2xpZGVJbmRleDtcblx0XHR9XG5cblx0XHRzbGlkZSggc2xpZGVJbmRleCApO1xuXG5cdH1cblxuXHQvKipcblx0ICogRXZlbnQgaGFuZGxlciBmb3IgbmF2aWdhdGlvbiBjb250cm9sIGJ1dHRvbnMuXG5cdCAqL1xuXHRmdW5jdGlvbiBvbk5hdmlnYXRlTGVmdENsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBuYXZpZ2F0ZUxlZnQoKTsgfVxuXHRmdW5jdGlvbiBvbk5hdmlnYXRlUmlnaHRDbGlja2VkKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25Vc2VySW5wdXQoKTsgbmF2aWdhdGVSaWdodCgpOyB9XG5cdGZ1bmN0aW9uIG9uTmF2aWdhdGVVcENsaWNrZWQoIGV2ZW50ICkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyBvblVzZXJJbnB1dCgpOyBuYXZpZ2F0ZVVwKCk7IH1cblx0ZnVuY3Rpb24gb25OYXZpZ2F0ZURvd25DbGlja2VkKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25Vc2VySW5wdXQoKTsgbmF2aWdhdGVEb3duKCk7IH1cblx0ZnVuY3Rpb24gb25OYXZpZ2F0ZVByZXZDbGlja2VkKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25Vc2VySW5wdXQoKTsgbmF2aWdhdGVQcmV2KCk7IH1cblx0ZnVuY3Rpb24gb25OYXZpZ2F0ZU5leHRDbGlja2VkKCBldmVudCApIHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgb25Vc2VySW5wdXQoKTsgbmF2aWdhdGVOZXh0KCk7IH1cblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIHdpbmRvdyBsZXZlbCAnaGFzaGNoYW5nZScgZXZlbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvbldpbmRvd0hhc2hDaGFuZ2UoIGV2ZW50ICkge1xuXG5cdFx0cmVhZFVSTCgpO1xuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlciBmb3IgdGhlIHdpbmRvdyBsZXZlbCAncmVzaXplJyBldmVudC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCBldmVudCApIHtcblxuXHRcdGxheW91dCgpO1xuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlIGZvciB0aGUgd2luZG93IGxldmVsICd2aXNpYmlsaXR5Y2hhbmdlJyBldmVudC5cblx0ICovXG5cdGZ1bmN0aW9uIG9uUGFnZVZpc2liaWxpdHlDaGFuZ2UoIGV2ZW50ICkge1xuXG5cdFx0dmFyIGlzSGlkZGVuID0gIGRvY3VtZW50LndlYmtpdEhpZGRlbiB8fFxuXHRcdFx0XHRcdFx0ZG9jdW1lbnQubXNIaWRkZW4gfHxcblx0XHRcdFx0XHRcdGRvY3VtZW50LmhpZGRlbjtcblxuXHRcdC8vIElmLCBhZnRlciBjbGlja2luZyBhIGxpbmsgb3Igc2ltaWxhciBhbmQgd2UncmUgY29taW5nIGJhY2ssXG5cdFx0Ly8gZm9jdXMgdGhlIGRvY3VtZW50LmJvZHkgdG8gZW5zdXJlIHdlIGNhbiB1c2Uga2V5Ym9hcmQgc2hvcnRjdXRzXG5cdFx0aWYoIGlzSGlkZGVuID09PSBmYWxzZSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBkb2N1bWVudC5ib2R5ICkge1xuXHRcdFx0Ly8gTm90IGFsbCBlbGVtZW50cyBzdXBwb3J0IC5ibHVyKCkgLSBTVkdzIGFtb25nIHRoZW0uXG5cdFx0XHRpZiggdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0ZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG5cdFx0XHR9XG5cdFx0XHRkb2N1bWVudC5ib2R5LmZvY3VzKCk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSW52b2tlZCB3aGVuIGEgc2xpZGUgaXMgYW5kIHdlJ3JlIGluIHRoZSBvdmVydmlldy5cblx0ICovXG5cdGZ1bmN0aW9uIG9uT3ZlcnZpZXdTbGlkZUNsaWNrZWQoIGV2ZW50ICkge1xuXG5cdFx0Ly8gVE9ETyBUaGVyZSdzIGEgYnVnIGhlcmUgd2hlcmUgdGhlIGV2ZW50IGxpc3RlbmVycyBhcmUgbm90XG5cdFx0Ly8gcmVtb3ZlZCBhZnRlciBkZWFjdGl2YXRpbmcgdGhlIG92ZXJ2aWV3LlxuXHRcdGlmKCBldmVudHNBcmVCb3VuZCAmJiBpc092ZXJ2aWV3KCkgKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR2YXIgZWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblxuXHRcdFx0d2hpbGUoIGVsZW1lbnQgJiYgIWVsZW1lbnQubm9kZU5hbWUubWF0Y2goIC9zZWN0aW9uL2dpICkgKSB7XG5cdFx0XHRcdGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCBlbGVtZW50ICYmICFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyggJ2Rpc2FibGVkJyApICkge1xuXG5cdFx0XHRcdGRlYWN0aXZhdGVPdmVydmlldygpO1xuXG5cdFx0XHRcdGlmKCBlbGVtZW50Lm5vZGVOYW1lLm1hdGNoKCAvc2VjdGlvbi9naSApICkge1xuXHRcdFx0XHRcdHZhciBoID0gcGFyc2VJbnQoIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCAnZGF0YS1pbmRleC1oJyApLCAxMCApLFxuXHRcdFx0XHRcdFx0diA9IHBhcnNlSW50KCBlbGVtZW50LmdldEF0dHJpYnV0ZSggJ2RhdGEtaW5kZXgtdicgKSwgMTAgKTtcblxuXHRcdFx0XHRcdHNsaWRlKCBoLCB2ICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgY2xpY2tzIG9uIGxpbmtzIHRoYXQgYXJlIHNldCB0byBwcmV2aWV3IGluIHRoZVxuXHQgKiBpZnJhbWUgb3ZlcmxheS5cblx0ICovXG5cdGZ1bmN0aW9uIG9uUHJldmlld0xpbmtDbGlja2VkKCBldmVudCApIHtcblxuXHRcdGlmKCBldmVudC5jdXJyZW50VGFyZ2V0ICYmIGV2ZW50LmN1cnJlbnRUYXJnZXQuaGFzQXR0cmlidXRlKCAnaHJlZicgKSApIHtcblx0XHRcdHZhciB1cmwgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSggJ2hyZWYnICk7XG5cdFx0XHRpZiggdXJsICkge1xuXHRcdFx0XHRzaG93UHJldmlldyggdXJsICk7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogSGFuZGxlcyBjbGljayBvbiB0aGUgYXV0by1zbGlkaW5nIGNvbnRyb2xzIGVsZW1lbnQuXG5cdCAqL1xuXHRmdW5jdGlvbiBvbkF1dG9TbGlkZVBsYXllckNsaWNrKCBldmVudCApIHtcblxuXHRcdC8vIFJlcGxheVxuXHRcdGlmKCBSZXZlYWwuaXNMYXN0U2xpZGUoKSAmJiBjb25maWcubG9vcCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRzbGlkZSggMCwgMCApO1xuXHRcdFx0cmVzdW1lQXV0b1NsaWRlKCk7XG5cdFx0fVxuXHRcdC8vIFJlc3VtZVxuXHRcdGVsc2UgaWYoIGF1dG9TbGlkZVBhdXNlZCApIHtcblx0XHRcdHJlc3VtZUF1dG9TbGlkZSgpO1xuXHRcdH1cblx0XHQvLyBQYXVzZVxuXHRcdGVsc2Uge1xuXHRcdFx0cGF1c2VBdXRvU2xpZGUoKTtcblx0XHR9XG5cblx0fVxuXG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUExBWUJBQ0sgQ09NUE9ORU5UIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvciBmb3IgdGhlIHBsYXliYWNrIGNvbXBvbmVudCwgd2hpY2ggZGlzcGxheXNcblx0ICogcGxheS9wYXVzZS9wcm9ncmVzcyBjb250cm9scy5cblx0ICpcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyIFRoZSBjb21wb25lbnQgd2lsbCBhcHBlbmRcblx0ICogaXRzZWxmIHRvIHRoaXNcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gcHJvZ3Jlc3NDaGVjayBBIG1ldGhvZCB3aGljaCB3aWxsIGJlXG5cdCAqIGNhbGxlZCBmcmVxdWVudGx5IHRvIGdldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvbiBhIHJhbmdlXG5cdCAqIG9mIDAtMVxuXHQgKi9cblx0ZnVuY3Rpb24gUGxheWJhY2soIGNvbnRhaW5lciwgcHJvZ3Jlc3NDaGVjayApIHtcblxuXHRcdC8vIENvc21ldGljc1xuXHRcdHRoaXMuZGlhbWV0ZXIgPSA1MDtcblx0XHR0aGlzLnRoaWNrbmVzcyA9IDM7XG5cblx0XHQvLyBGbGFncyBpZiB3ZSBhcmUgY3VycmVudGx5IHBsYXlpbmdcblx0XHR0aGlzLnBsYXlpbmcgPSBmYWxzZTtcblxuXHRcdC8vIEN1cnJlbnQgcHJvZ3Jlc3Mgb24gYSAwLTEgcmFuZ2Vcblx0XHR0aGlzLnByb2dyZXNzID0gMDtcblxuXHRcdC8vIFVzZWQgdG8gbG9vcCB0aGUgYW5pbWF0aW9uIHNtb290aGx5XG5cdFx0dGhpcy5wcm9ncmVzc09mZnNldCA9IDE7XG5cblx0XHR0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcblx0XHR0aGlzLnByb2dyZXNzQ2hlY2sgPSBwcm9ncmVzc0NoZWNrO1xuXG5cdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnY2FudmFzJyApO1xuXHRcdHRoaXMuY2FudmFzLmNsYXNzTmFtZSA9ICdwbGF5YmFjayc7XG5cdFx0dGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmRpYW1ldGVyO1xuXHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuZGlhbWV0ZXI7XG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCggJzJkJyApO1xuXG5cdFx0dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoIHRoaXMuY2FudmFzICk7XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXG5cdH1cblxuXHRQbGF5YmFjay5wcm90b3R5cGUuc2V0UGxheWluZyA9IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblxuXHRcdHZhciB3YXNQbGF5aW5nID0gdGhpcy5wbGF5aW5nO1xuXG5cdFx0dGhpcy5wbGF5aW5nID0gdmFsdWU7XG5cblx0XHQvLyBTdGFydCByZXBhaW50aW5nIGlmIHdlIHdlcmVuJ3QgYWxyZWFkeVxuXHRcdGlmKCAhd2FzUGxheWluZyAmJiB0aGlzLnBsYXlpbmcgKSB7XG5cdFx0XHR0aGlzLmFuaW1hdGUoKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdH1cblxuXHR9O1xuXG5cdFBsYXliYWNrLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24oKSB7XG5cblx0XHR2YXIgcHJvZ3Jlc3NCZWZvcmUgPSB0aGlzLnByb2dyZXNzO1xuXG5cdFx0dGhpcy5wcm9ncmVzcyA9IHRoaXMucHJvZ3Jlc3NDaGVjaygpO1xuXG5cdFx0Ly8gV2hlbiB3ZSBsb29wLCBvZmZzZXQgdGhlIHByb2dyZXNzIHNvIHRoYXQgaXQgZWFzZXNcblx0XHQvLyBzbW9vdGhseSByYXRoZXIgdGhhbiBpbW1lZGlhdGVseSByZXNldHRpbmdcblx0XHRpZiggcHJvZ3Jlc3NCZWZvcmUgPiAwLjggJiYgdGhpcy5wcm9ncmVzcyA8IDAuMiApIHtcblx0XHRcdHRoaXMucHJvZ3Jlc3NPZmZzZXQgPSB0aGlzLnByb2dyZXNzO1xuXHRcdH1cblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cblx0XHRpZiggdGhpcy5wbGF5aW5nICkge1xuXHRcdFx0ZmVhdHVyZXMucmVxdWVzdEFuaW1hdGlvbkZyYW1lTWV0aG9kLmNhbGwoIHdpbmRvdywgdGhpcy5hbmltYXRlLmJpbmQoIHRoaXMgKSApO1xuXHRcdH1cblxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZW5kZXJzIHRoZSBjdXJyZW50IHByb2dyZXNzIGFuZCBwbGF5YmFjayBzdGF0ZS5cblx0ICovXG5cdFBsYXliYWNrLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbigpIHtcblxuXHRcdHZhciBwcm9ncmVzcyA9IHRoaXMucGxheWluZyA/IHRoaXMucHJvZ3Jlc3MgOiAwLFxuXHRcdFx0cmFkaXVzID0gKCB0aGlzLmRpYW1ldGVyIC8gMiApIC0gdGhpcy50aGlja25lc3MsXG5cdFx0XHR4ID0gdGhpcy5kaWFtZXRlciAvIDIsXG5cdFx0XHR5ID0gdGhpcy5kaWFtZXRlciAvIDIsXG5cdFx0XHRpY29uU2l6ZSA9IDE0O1xuXG5cdFx0Ly8gRWFzZSB0b3dhcmRzIDFcblx0XHR0aGlzLnByb2dyZXNzT2Zmc2V0ICs9ICggMSAtIHRoaXMucHJvZ3Jlc3NPZmZzZXQgKSAqIDAuMTtcblxuXHRcdHZhciBlbmRBbmdsZSA9ICggLSBNYXRoLlBJIC8gMiApICsgKCBwcm9ncmVzcyAqICggTWF0aC5QSSAqIDIgKSApO1xuXHRcdHZhciBzdGFydEFuZ2xlID0gKCAtIE1hdGguUEkgLyAyICkgKyAoIHRoaXMucHJvZ3Jlc3NPZmZzZXQgKiAoIE1hdGguUEkgKiAyICkgKTtcblxuXHRcdHRoaXMuY29udGV4dC5zYXZlKCk7XG5cdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCggMCwgMCwgdGhpcy5kaWFtZXRlciwgdGhpcy5kaWFtZXRlciApO1xuXG5cdFx0Ly8gU29saWQgYmFja2dyb3VuZCBjb2xvclxuXHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcblx0XHR0aGlzLmNvbnRleHQuYXJjKCB4LCB5LCByYWRpdXMgKyAyLCAwLCBNYXRoLlBJICogMiwgZmFsc2UgKTtcblx0XHR0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJ3JnYmEoIDAsIDAsIDAsIDAuNCApJztcblx0XHR0aGlzLmNvbnRleHQuZmlsbCgpO1xuXG5cdFx0Ly8gRHJhdyBwcm9ncmVzcyB0cmFja1xuXHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcblx0XHR0aGlzLmNvbnRleHQuYXJjKCB4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSApO1xuXHRcdHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnRoaWNrbmVzcztcblx0XHR0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzY2Nic7XG5cdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXG5cdFx0aWYoIHRoaXMucGxheWluZyApIHtcblx0XHRcdC8vIERyYXcgcHJvZ3Jlc3Mgb24gdG9wIG9mIHRyYWNrXG5cdFx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG5cdFx0XHR0aGlzLmNvbnRleHQuYXJjKCB4LCB5LCByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlLCBmYWxzZSApO1xuXHRcdFx0dGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMudGhpY2tuZXNzO1xuXHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gJyNmZmYnO1xuXHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29udGV4dC50cmFuc2xhdGUoIHggLSAoIGljb25TaXplIC8gMiApLCB5IC0gKCBpY29uU2l6ZSAvIDIgKSApO1xuXG5cdFx0Ly8gRHJhdyBwbGF5L3BhdXNlIGljb25zXG5cdFx0aWYoIHRoaXMucGxheWluZyApIHtcblx0XHRcdHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSAnI2ZmZic7XG5cdFx0XHR0aGlzLmNvbnRleHQuZmlsbFJlY3QoIDAsIDAsIGljb25TaXplIC8gMiAtIDIsIGljb25TaXplICk7XG5cdFx0XHR0aGlzLmNvbnRleHQuZmlsbFJlY3QoIGljb25TaXplIC8gMiArIDIsIDAsIGljb25TaXplIC8gMiAtIDIsIGljb25TaXplICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuXHRcdFx0dGhpcy5jb250ZXh0LnRyYW5zbGF0ZSggMiwgMCApO1xuXHRcdFx0dGhpcy5jb250ZXh0Lm1vdmVUbyggMCwgMCApO1xuXHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyggaWNvblNpemUgLSAyLCBpY29uU2l6ZSAvIDIgKTtcblx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8oIDAsIGljb25TaXplICk7XG5cdFx0XHR0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gJyNmZmYnO1xuXHRcdFx0dGhpcy5jb250ZXh0LmZpbGwoKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuXG5cdH07XG5cblx0UGxheWJhY2sucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oIHR5cGUsIGxpc3RlbmVyICkge1xuXHRcdHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSApO1xuXHR9O1xuXG5cdFBsYXliYWNrLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiggdHlwZSwgbGlzdGVuZXIgKSB7XG5cdFx0dGhpcy5jYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgbGlzdGVuZXIsIGZhbHNlICk7XG5cdH07XG5cblx0UGxheWJhY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMucGxheWluZyA9IGZhbHNlO1xuXG5cdFx0aWYoIHRoaXMuY2FudmFzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCggdGhpcy5jYW52YXMgKTtcblx0XHR9XG5cblx0fTtcblxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBBUEkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuXHRSZXZlYWwgPSB7XG5cdFx0aW5pdGlhbGl6ZTogaW5pdGlhbGl6ZSxcblx0XHRjb25maWd1cmU6IGNvbmZpZ3VyZSxcblx0XHRzeW5jOiBzeW5jLFxuXG5cdFx0Ly8gTmF2aWdhdGlvbiBtZXRob2RzXG5cdFx0c2xpZGU6IHNsaWRlLFxuXHRcdGxlZnQ6IG5hdmlnYXRlTGVmdCxcblx0XHRyaWdodDogbmF2aWdhdGVSaWdodCxcblx0XHR1cDogbmF2aWdhdGVVcCxcblx0XHRkb3duOiBuYXZpZ2F0ZURvd24sXG5cdFx0cHJldjogbmF2aWdhdGVQcmV2LFxuXHRcdG5leHQ6IG5hdmlnYXRlTmV4dCxcblxuXHRcdC8vIEZyYWdtZW50IG1ldGhvZHNcblx0XHRuYXZpZ2F0ZUZyYWdtZW50OiBuYXZpZ2F0ZUZyYWdtZW50LFxuXHRcdHByZXZGcmFnbWVudDogcHJldmlvdXNGcmFnbWVudCxcblx0XHRuZXh0RnJhZ21lbnQ6IG5leHRGcmFnbWVudCxcblxuXHRcdC8vIERlcHJlY2F0ZWQgYWxpYXNlc1xuXHRcdG5hdmlnYXRlVG86IHNsaWRlLFxuXHRcdG5hdmlnYXRlTGVmdDogbmF2aWdhdGVMZWZ0LFxuXHRcdG5hdmlnYXRlUmlnaHQ6IG5hdmlnYXRlUmlnaHQsXG5cdFx0bmF2aWdhdGVVcDogbmF2aWdhdGVVcCxcblx0XHRuYXZpZ2F0ZURvd246IG5hdmlnYXRlRG93bixcblx0XHRuYXZpZ2F0ZVByZXY6IG5hdmlnYXRlUHJldixcblx0XHRuYXZpZ2F0ZU5leHQ6IG5hdmlnYXRlTmV4dCxcblxuXHRcdC8vIEZvcmNlcyBhbiB1cGRhdGUgaW4gc2xpZGUgbGF5b3V0XG5cdFx0bGF5b3V0OiBsYXlvdXQsXG5cblx0XHQvLyBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBhdmFpbGFibGUgcm91dGVzIGFzIGJvb2xlYW5zIChsZWZ0L3JpZ2h0L3RvcC9ib3R0b20pXG5cdFx0YXZhaWxhYmxlUm91dGVzOiBhdmFpbGFibGVSb3V0ZXMsXG5cblx0XHQvLyBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRoZSBhdmFpbGFibGUgZnJhZ21lbnRzIGFzIGJvb2xlYW5zIChwcmV2L25leHQpXG5cdFx0YXZhaWxhYmxlRnJhZ21lbnRzOiBhdmFpbGFibGVGcmFnbWVudHMsXG5cblx0XHQvLyBUb2dnbGVzIHRoZSBvdmVydmlldyBtb2RlIG9uL29mZlxuXHRcdHRvZ2dsZU92ZXJ2aWV3OiB0b2dnbGVPdmVydmlldyxcblxuXHRcdC8vIFRvZ2dsZXMgdGhlIFwiYmxhY2sgc2NyZWVuXCIgbW9kZSBvbi9vZmZcblx0XHR0b2dnbGVQYXVzZTogdG9nZ2xlUGF1c2UsXG5cblx0XHQvLyBUb2dnbGVzIHRoZSBhdXRvIHNsaWRlIG1vZGUgb24vb2ZmXG5cdFx0dG9nZ2xlQXV0b1NsaWRlOiB0b2dnbGVBdXRvU2xpZGUsXG5cblx0XHQvLyBTdGF0ZSBjaGVja3Ncblx0XHRpc092ZXJ2aWV3OiBpc092ZXJ2aWV3LFxuXHRcdGlzUGF1c2VkOiBpc1BhdXNlZCxcblx0XHRpc0F1dG9TbGlkaW5nOiBpc0F1dG9TbGlkaW5nLFxuXG5cdFx0Ly8gQWRkcyBvciByZW1vdmVzIGFsbCBpbnRlcm5hbCBldmVudCBsaXN0ZW5lcnMgKHN1Y2ggYXMga2V5Ym9hcmQpXG5cdFx0YWRkRXZlbnRMaXN0ZW5lcnM6IGFkZEV2ZW50TGlzdGVuZXJzLFxuXHRcdHJlbW92ZUV2ZW50TGlzdGVuZXJzOiByZW1vdmVFdmVudExpc3RlbmVycyxcblxuXHRcdC8vIEZhY2lsaXR5IGZvciBwZXJzaXN0aW5nIGFuZCByZXN0b3JpbmcgdGhlIHByZXNlbnRhdGlvbiBzdGF0ZVxuXHRcdGdldFN0YXRlOiBnZXRTdGF0ZSxcblx0XHRzZXRTdGF0ZTogc2V0U3RhdGUsXG5cblx0XHQvLyBQcmVzZW50YXRpb24gcHJvZ3Jlc3Mgb24gcmFuZ2Ugb2YgMC0xXG5cdFx0Z2V0UHJvZ3Jlc3M6IGdldFByb2dyZXNzLFxuXG5cdFx0Ly8gUmV0dXJucyB0aGUgaW5kaWNlcyBvZiB0aGUgY3VycmVudCwgb3Igc3BlY2lmaWVkLCBzbGlkZVxuXHRcdGdldEluZGljZXM6IGdldEluZGljZXMsXG5cblx0XHRnZXRUb3RhbFNsaWRlczogZ2V0VG90YWxTbGlkZXMsXG5cblx0XHQvLyBSZXR1cm5zIHRoZSBzbGlkZSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhcblx0XHRnZXRTbGlkZTogZ2V0U2xpZGUsXG5cblx0XHQvLyBSZXR1cm5zIHRoZSBzbGlkZSBiYWNrZ3JvdW5kIGVsZW1lbnQgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuXHRcdGdldFNsaWRlQmFja2dyb3VuZDogZ2V0U2xpZGVCYWNrZ3JvdW5kLFxuXG5cdFx0Ly8gUmV0dXJucyB0aGUgcHJldmlvdXMgc2xpZGUgZWxlbWVudCwgbWF5IGJlIG51bGxcblx0XHRnZXRQcmV2aW91c1NsaWRlOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwcmV2aW91c1NsaWRlO1xuXHRcdH0sXG5cblx0XHQvLyBSZXR1cm5zIHRoZSBjdXJyZW50IHNsaWRlIGVsZW1lbnRcblx0XHRnZXRDdXJyZW50U2xpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGN1cnJlbnRTbGlkZTtcblx0XHR9LFxuXG5cdFx0Ly8gUmV0dXJucyB0aGUgY3VycmVudCBzY2FsZSBvZiB0aGUgcHJlc2VudGF0aW9uIGNvbnRlbnRcblx0XHRnZXRTY2FsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gc2NhbGU7XG5cdFx0fSxcblxuXHRcdC8vIFJldHVybnMgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBvYmplY3Rcblx0XHRnZXRDb25maWc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGNvbmZpZztcblx0XHR9LFxuXG5cdFx0Ly8gSGVscGVyIG1ldGhvZCwgcmV0cmlldmVzIHF1ZXJ5IHN0cmluZyBhcyBhIGtleS92YWx1ZSBoYXNoXG5cdFx0Z2V0UXVlcnlIYXNoOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBxdWVyeSA9IHt9O1xuXG5cdFx0XHRsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSggL1tBLVowLTldKz89KFtcXHdcXC4lLV0qKS9naSwgZnVuY3Rpb24oYSkge1xuXHRcdFx0XHRxdWVyeVsgYS5zcGxpdCggJz0nICkuc2hpZnQoKSBdID0gYS5zcGxpdCggJz0nICkucG9wKCk7XG5cdFx0XHR9ICk7XG5cblx0XHRcdC8vIEJhc2ljIGRlc2VyaWFsaXphdGlvblxuXHRcdFx0Zm9yKCB2YXIgaSBpbiBxdWVyeSApIHtcblx0XHRcdFx0dmFyIHZhbHVlID0gcXVlcnlbIGkgXTtcblxuXHRcdFx0XHRxdWVyeVsgaSBdID0gZGVzZXJpYWxpemUoIHVuZXNjYXBlKCB2YWx1ZSApICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBxdWVyeTtcblx0XHR9LFxuXG5cdFx0Ly8gUmV0dXJucyB0cnVlIGlmIHdlJ3JlIGN1cnJlbnRseSBvbiB0aGUgZmlyc3Qgc2xpZGVcblx0XHRpc0ZpcnN0U2xpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICggaW5kZXhoID09PSAwICYmIGluZGV4diA9PT0gMCApO1xuXHRcdH0sXG5cblx0XHQvLyBSZXR1cm5zIHRydWUgaWYgd2UncmUgY3VycmVudGx5IG9uIHRoZSBsYXN0IHNsaWRlXG5cdFx0aXNMYXN0U2xpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIGN1cnJlbnRTbGlkZSApIHtcblx0XHRcdFx0Ly8gRG9lcyB0aGlzIHNsaWRlIGhhcyBuZXh0IGEgc2libGluZz9cblx0XHRcdFx0aWYoIGN1cnJlbnRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmcgKSByZXR1cm4gZmFsc2U7XG5cblx0XHRcdFx0Ly8gSWYgaXQncyB2ZXJ0aWNhbCwgZG9lcyBpdHMgcGFyZW50IGhhdmUgYSBuZXh0IHNpYmxpbmc/XG5cdFx0XHRcdGlmKCBpc1ZlcnRpY2FsU2xpZGUoIGN1cnJlbnRTbGlkZSApICYmIGN1cnJlbnRTbGlkZS5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZyApIHJldHVybiBmYWxzZTtcblxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0sXG5cblx0XHQvLyBDaGVja3MgaWYgcmV2ZWFsLmpzIGhhcyBiZWVuIGxvYWRlZCBhbmQgaXMgcmVhZHkgZm9yIHVzZVxuXHRcdGlzUmVhZHk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGxvYWRlZDtcblx0XHR9LFxuXG5cdFx0Ly8gRm9yd2FyZCBldmVudCBiaW5kaW5nIHRvIHRoZSByZXZlYWwgRE9NIGVsZW1lbnRcblx0XHRhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiggdHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUgKSB7XG5cdFx0XHRpZiggJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdyApIHtcblx0XHRcdFx0KCBkb20ud3JhcHBlciB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnJldmVhbCcgKSApLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlICk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRyZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiggdHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUgKSB7XG5cdFx0XHRpZiggJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdyApIHtcblx0XHRcdFx0KCBkb20ud3JhcHBlciB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnJldmVhbCcgKSApLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIFByb2dyYW1hdGljYWxseSB0cmlnZ2VycyBhIGtleWJvYXJkIGV2ZW50XG5cdFx0dHJpZ2dlcktleTogZnVuY3Rpb24oIGtleUNvZGUgKSB7XG5cdFx0XHRvbkRvY3VtZW50S2V5RG93biggeyBrZXlDb2RlOiBrZXlDb2RlIH0gKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIFJldmVhbDtcblxufSkpO1xuIiwiZnVuY3Rpb24gcmVuZGVyUGFnZSgpeyQuZm4uaW5saW5lU3R5bGU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucHJvcChcInN0eWxlXCIpWyQuY2FtZWxDYXNlKGUpXX07JChcInByZS5yZmlkZGxlXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1cImh0dHA6Ly9yLWZpZGRsZS5vcmcvIy9xdWVyeS9wcmV2aWV3P2NvZGU9XCI7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTt2YXIgbj0kKHRoaXMpLnRleHQoKTt2YXIgcj0kKHRoaXMpLmlubGluZVN0eWxlKFwiaGVpZ2h0XCIpO3Quc3JjPWUrZW5jb2RlVVJJQ29tcG9uZW50KG4pO3Qud2lkdGg9XCIxMDAlXCI7aWYoIXIpdC5oZWlnaHQ9MzgrMTkqZ2V0TnVtYmVyT2ZMaW5lcyhuKStcInB4XCI7ZWxzZSB0LmhlaWdodD1yO3QuZnJhbWVCb3JkZXI9XCIwXCI7dC5hbGxvd0Z1bGxTY3JlZW49XCJhbGxvd2Z1bGxzY3JlZW5cIjskKHRoaXMpLnJlcGxhY2VXaXRoKHQpfSk7JChcInByZS5yZmlkZGxlLWludGVyYWN0aXZlXCIpLmVhY2goZnVuY3Rpb24oKXt2YXIgZT1cImh0dHA6Ly9yLWZpZGRsZS5vcmcvIy9xdWVyeS9lbWJlZD9jb2RlPVwiO3ZhciB0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7dmFyIG49JCh0aGlzKS50ZXh0KCk7dmFyIHI9JCh0aGlzKS5pbmxpbmVTdHlsZShcImhlaWdodFwiKTt0LnNyYz1lK2VuY29kZVVSSUNvbXBvbmVudChuKTt0LndpZHRoPVwiMTAwJVwiO2lmKCFyKXQuaGVpZ2h0PTg1KzM4KzE5KmdldE51bWJlck9mTGluZXMobikrXCJweFwiO2Vsc2UgdC5oZWlnaHQ9cjt0LmZyYW1lQm9yZGVyPVwiMFwiO3QuYWxsb3dGdWxsU2NyZWVuPVwiYWxsb3dmdWxsc2NyZWVuXCI7JCh0aGlzKS5yZXBsYWNlV2l0aCh0KX0pfWZ1bmN0aW9uIGdldE51bWJlck9mTGluZXMoZSl7dmFyIHQ9ZS5zcGxpdCgvXFxyXFxufFxccnxcXG4vKTtyZXR1cm4gdC5sZW5ndGh9JChcImRvY3VtZW50XCIpLnJlYWR5KGZ1bmN0aW9uKCl7cmVuZGVyUGFnZSgpfSkiLCJ2YXIgY3NzID0gcmVxdWlyZSgnLi8uLi9zdHlsZXMvc3MuY3NzJyk7XG5nbG9iYWwuJCA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkubWluLmpzJyk7XG52YXIgX3JGaWRkbGVIZWxwZXIgPSByZXF1aXJlKCcuLy4uL2NvbXBvbmVudHMvcmZpZGRsZUhlbHBlci9yZmlkZGxlSGVscGVyLm1pbi5qcycpO1xudmFyIFJldmVhbCA9IHJlcXVpcmUoJy4vLi4vY29tcG9uZW50cy9yZXZlYWwuanMvanMvcmV2ZWFsLmpzJyk7XG52YXIgX2hsanMgPSByZXF1aXJlKCcuLy4uL2NvbXBvbmVudHMvaGlnaGxpZ2h0LmpzL2hpZ2hsaWdodC5wYWNrLmpzJyk7XG5cblJldmVhbC5pbml0aWFsaXplKHtcblxuICAgIC8vIERpc3BsYXkgY29udHJvbHMgaW4gdGhlIGJvdHRvbSByaWdodCBjb3JuZXJcbiAgICBjb250cm9sczogdHJ1ZSxcblxuICAgIC8vIERpc3BsYXkgYSBwcmVzZW50YXRpb24gcHJvZ3Jlc3MgYmFyXG4gICAgcHJvZ3Jlc3M6IHRydWUsXG5cbiAgICAvLyBEaXNwbGF5IHRoZSBwYWdlIG51bWJlciBvZiB0aGUgY3VycmVudCBzbGlkZVxuICAgIHNsaWRlTnVtYmVyOiB0cnVlLFxuXG4gICAgLy8gUHVzaCBlYWNoIHNsaWRlIGNoYW5nZSB0byB0aGUgYnJvd3NlciBoaXN0b3J5XG4gICAgaGlzdG9yeTogZmFsc2UsXG5cbiAgICAvLyBFbmFibGUga2V5Ym9hcmQgc2hvcnRjdXRzIGZvciBuYXZpZ2F0aW9uXG4gICAga2V5Ym9hcmQ6IHRydWUsXG5cbiAgICAvLyBFbmFibGUgdGhlIHNsaWRlIG92ZXJ2aWV3IG1vZGVcbiAgICBvdmVydmlldzogdHJ1ZSxcblxuICAgIC8vIFZlcnRpY2FsIGNlbnRlcmluZyBvZiBzbGlkZXNcbiAgICBjZW50ZXI6IHRydWUsXG5cbiAgICAvLyBFbmFibGVzIHRvdWNoIG5hdmlnYXRpb24gb24gZGV2aWNlcyB3aXRoIHRvdWNoIGlucHV0XG4gICAgdG91Y2g6IHRydWUsXG5cbiAgICAvLyBMb29wIHRoZSBwcmVzZW50YXRpb25cbiAgICBsb29wOiBmYWxzZSxcblxuICAgIC8vIENoYW5nZSB0aGUgcHJlc2VudGF0aW9uIGRpcmVjdGlvbiB0byBiZSBSVExcbiAgICBydGw6IGZhbHNlLFxuXG4gICAgLy8gVHVybnMgZnJhZ21lbnRzIG9uIGFuZCBvZmYgZ2xvYmFsbHlcbiAgICBmcmFnbWVudHM6IHRydWUsXG5cbiAgICAvLyBGbGFncyBpZiB0aGUgcHJlc2VudGF0aW9uIGlzIHJ1bm5pbmcgaW4gYW4gZW1iZWRkZWQgbW9kZSxcbiAgICAvLyBpLmUuIGNvbnRhaW5lZCB3aXRoaW4gYSBsaW1pdGVkIHBvcnRpb24gb2YgdGhlIHNjcmVlblxuICAgIGVtYmVkZGVkOiBmYWxzZSxcblxuICAgIC8vIEZsYWdzIGlmIHdlIHNob3VsZCBzaG93IGEgaGVscCBvdmVybGF5IHdoZW4gdGhlIHF1ZXN0aW9ubWFya1xuICAgIC8vIGtleSBpcyBwcmVzc2VkXG4gICAgaGVscDogdHJ1ZSxcblxuICAgIC8vIE51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiBhdXRvbWF0aWNhbGx5IHByb2NlZWRpbmcgdG8gdGhlXG4gICAgLy8gbmV4dCBzbGlkZSwgZGlzYWJsZWQgd2hlbiBzZXQgdG8gMCwgdGhpcyB2YWx1ZSBjYW4gYmUgb3ZlcndyaXR0ZW5cbiAgICAvLyBieSB1c2luZyBhIGRhdGEtYXV0b3NsaWRlIGF0dHJpYnV0ZSBvbiB5b3VyIHNsaWRlc1xuICAgIGF1dG9TbGlkZTogMCxcblxuICAgIC8vIFN0b3AgYXV0by1zbGlkaW5nIGFmdGVyIHVzZXIgaW5wdXRcbiAgICBhdXRvU2xpZGVTdG9wcGFibGU6IHRydWUsXG5cbiAgICAvLyBFbmFibGUgc2xpZGUgbmF2aWdhdGlvbiB2aWEgbW91c2Ugd2hlZWxcbiAgICBtb3VzZVdoZWVsOiBmYWxzZSxcblxuICAgIC8vIEhpZGVzIHRoZSBhZGRyZXNzIGJhciBvbiBtb2JpbGUgZGV2aWNlc1xuICAgIGhpZGVBZGRyZXNzQmFyOiB0cnVlLFxuXG4gICAgLy8gT3BlbnMgbGlua3MgaW4gYW4gaWZyYW1lIHByZXZpZXcgb3ZlcmxheVxuICAgIHByZXZpZXdMaW5rczogZmFsc2UsXG5cbiAgICAvLyBUcmFuc2l0aW9uIHN0eWxlXG4gICAgdHJhbnNpdGlvbjogJ2RlZmF1bHQnLCAvLyBub25lL2ZhZGUvc2xpZGUvY29udmV4L2NvbmNhdmUvem9vbVxuXG4gICAgLy8gVHJhbnNpdGlvbiBzcGVlZFxuICAgIHRyYW5zaXRpb25TcGVlZDogJ2RlZmF1bHQnLCAvLyBkZWZhdWx0L2Zhc3Qvc2xvd1xuXG4gICAgLy8gVHJhbnNpdGlvbiBzdHlsZSBmb3IgZnVsbCBwYWdlIHNsaWRlIGJhY2tncm91bmRzXG4gICAgYmFja2dyb3VuZFRyYW5zaXRpb246ICdkZWZhdWx0JywgLy8gbm9uZS9mYWRlL3NsaWRlL2NvbnZleC9jb25jYXZlL3pvb21cblxuICAgIC8vIE51bWJlciBvZiBzbGlkZXMgYXdheSBmcm9tIHRoZSBjdXJyZW50IHRoYXQgYXJlIHZpc2libGVcbiAgICB2aWV3RGlzdGFuY2U6IDMsXG5cbiAgICAvLyBQYXJhbGxheCBiYWNrZ3JvdW5kIGltYWdlXG4gICAgcGFyYWxsYXhCYWNrZ3JvdW5kSW1hZ2U6ICcnLCAvLyBlLmcuIFwiJ2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9oYWtpbS1zdGF0aWMvcmV2ZWFsLWpzL3JldmVhbC1wYXJhbGxheC0xLmpwZydcIlxuXG4gICAgLy8gUGFyYWxsYXggYmFja2dyb3VuZCBzaXplXG4gICAgcGFyYWxsYXhCYWNrZ3JvdW5kU2l6ZTogJycsIC8vIENTUyBzeW50YXgsIGUuZy4gXCIyMTAwcHggOTAwcHhcIlxuXG4gICAgLy8gQW1vdW50IHRvIG1vdmUgcGFyYWxsYXggYmFja2dyb3VuZCAoaG9yaXpvbnRhbCBhbmQgdmVydGljYWwpIG9uIHNsaWRlIGNoYW5nZVxuICAgIC8vIE51bWJlciwgZS5nLiAxMDBcbiAgICBwYXJhbGxheEJhY2tncm91bmRIb3Jpem9udGFsOiAnJyxcbiAgICBwYXJhbGxheEJhY2tncm91bmRWZXJ0aWNhbDogJydcblxufSk7XG53aW5kb3cuaGxqcy5pbml0SGlnaGxpZ2h0aW5nT25Mb2FkKCk7XG4iLCJ2YXIgY3NzID0gXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5ld3MrQ3ljbGU6NDAwLDcwMFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwLDQwMGl0YWxpYyw3MDBpdGFsaWNcXFwiKTtcXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsO1xcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNCB1cmwoc3JjL2NvbXBvbmVudHMvX3Byb2Nlc3NlZC9kb2NzL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZyk7XFxufVxcbi5pbnRlcmZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMdWNpZGEgR3JhbmRlXFxcIiwgXFxcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxufVxcbmRpdiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMjAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgcGFkZGluZzogMTVweCAwIDMwcHggMzBweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmI7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMjBweCAjY2NjO1xcbn1cXG5hLnRvY190aXRsZSxcXG5hLnRvY190aXRsZTp2aXNpdGVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5hLnRvY190aXRsZTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI3NpZGViYXIgLnZlcnNpb24ge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxudWwudG9jX3NlY3Rpb24ge1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBtYXJnaW46IDVweCAwIDAgMDtcXG4gIHBhZGRpbmctbGVmdDogMHB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IEx1Y2lkYSBHcmFuZGU7XFxufVxcbi50b2Nfc2VjdGlvbiBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW46IDAgMCAzcHggMDtcXG59XFxuLnRvY19zZWN0aW9uIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4udG9jX3NlY3Rpb24gbGkgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuZGl2LmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTUwcHg7XFxuICBtYXJnaW46IDQwcHggMCA1MHB4IDI2MHB4O1xcbn1cXG5pbWcjbG9nbyB7XFxuICB3aWR0aDogNDUwcHg7XFxuICBoZWlnaHQ6IDgwcHg7XFxufVxcbmRpdi5ydW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMjZweDtcXG4gIGhlaWdodDogMThweDtcXG4gIGJhY2tncm91bmQ6IHVybCgnc3JjL2NvbXBvbmVudHMvX3Byb2Nlc3NlZC9kb2NzL2ltYWdlcy9hcnJvd3MucG5nJykgbm8tcmVwZWF0IC0yNnB4IDA7XFxufVxcbmRpdi5ydW46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01MXB4IDA7XFxufVxcbnAsXFxuZGl2LmNvbnRhaW5lciB1bCB7XFxuICBtYXJnaW46IDI1cHggMDtcXG4gIHdpZHRoOiA1NTBweDtcXG59XFxucC53YXJuaW5nIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5kaXYuY29udGFpbmVyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG5kaXYuY29udGFpbmVyIHVsIGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbmRpdi5jb250YWluZXIgdWwuc21hbGwge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5hLFxcbmE6dmlzaXRlZCB7XFxuICBjb2xvcjogIzQ0NDtcXG59XFxuYTphY3RpdmUsXFxuYTpob3ZlciB7XFxuICBjb2xvcjogIzAwMDtcXG59XFxuYS5wdW5jaCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjNDE2MmE4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzODUzOGM7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMWYyZDRkO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxNTFlMzM7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxZjJkNGQ7XFxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC1vLWJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMTBweCAxcHggIzVjOGJlZSwgMHB4IDFweCAwICMxZDJjNGQsIDAgNnB4IDBweCAjMWYzMDUzLCAwIDhweCA0cHggMXB4ICMxMTExMTE7XFxuICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDEwcHggMXB4ICM1YzhiZWUsIDBweCAxcHggMCAjMWQyYzRkLCAwIDZweCAwcHggIzFmMzA1MywgMCA4cHggNHB4IDFweCAjMTExMTExO1xcbiAgLW1zLWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDEwcHggMXB4ICM1YzhiZWUsIDBweCAxcHggMCAjMWQyYzRkLCAwIDZweCAwcHggIzFmMzA1MywgMCA4cHggNHB4IDFweCAjMTExMTExO1xcbiAgLW8tYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMTBweCAxcHggIzVjOGJlZSwgMHB4IDFweCAwICMxZDJjNGQsIDAgNnB4IDBweCAjMWYzMDUzLCAwIDhweCA0cHggMXB4ICMxMTExMTE7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAxMHB4IDFweCAjNWM4YmVlLCAwcHggMXB4IDAgIzFkMmM0ZCwgMCA2cHggMHB4ICMxZjMwNTMsIDAgOHB4IDRweCAxcHggIzExMTExMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udDogYm9sZCAxNHB4IFxcXCJoZWx2ZXRpY2EgbmV1ZVxcXCIsIGhlbHZldGljYSwgYXJpYWwsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBwYWRkaW5nOiA4cHggMCAxMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IC0xcHggMXB4ICMxZTJkNGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB3aWR0aDogMjI1cHg7XFxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XFxufVxcbmEucHVuY2g6aG92ZXIge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDBweCAyMHB4IDFweCAjODdhZGZmLCAwcHggMXB4IDAgIzFkMmM0ZCwgMCA2cHggMHB4ICMxZjMwNTMsIDAgOHB4IDRweCAxcHggIzExMTExMTtcXG4gIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMjBweCAxcHggIzg3YWRmZiwgMHB4IDFweCAwICMxZDJjNGQsIDAgNnB4IDBweCAjMWYzMDUzLCAwIDhweCA0cHggMXB4ICMxMTExMTE7XFxuICAtbXMtYm94LXNoYWRvdzogaW5zZXQgMCAwcHggMjBweCAxcHggIzg3YWRmZiwgMHB4IDFweCAwICMxZDJjNGQsIDAgNnB4IDBweCAjMWYzMDUzLCAwIDhweCA0cHggMXB4ICMxMTExMTE7XFxuICAtby1ib3gtc2hhZG93OiBpbnNldCAwIDBweCAyMHB4IDFweCAjODdhZGZmLCAwcHggMXB4IDAgIzFkMmM0ZCwgMCA2cHggMHB4ICMxZjMwNTMsIDAgOHB4IDRweCAxcHggIzExMTExMTtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMHB4IDIwcHggMXB4ICM4N2FkZmYsIDBweCAxcHggMCAjMWQyYzRkLCAwIDZweCAwcHggIzFmMzA1MywgMCA4cHggNHB4IDFweCAjMTExMTExO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5hLnB1bmNoOmFjdGl2ZSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDEwcHggMXB4ICM1YzhiZWUsIDAgMXB4IDAgIzFkMmM0ZCwgMCAycHggMCAjMWYzMDUzLCAwIDRweCAzcHggMCAjMTExMTExO1xcbiAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxMHB4IDFweCAjNWM4YmVlLCAwIDFweCAwICMxZDJjNGQsIDAgMnB4IDAgIzFmMzA1MywgMCA0cHggM3B4IDAgIzExMTExMTtcXG4gIC1tcy1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxMHB4IDFweCAjNWM4YmVlLCAwIDFweCAwICMxZDJjNGQsIDAgMnB4IDAgIzFmMzA1MywgMCA0cHggM3B4IDAgIzExMTExMTtcXG4gIC1vLWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDEwcHggMXB4ICM1YzhiZWUsIDAgMXB4IDAgIzFkMmM0ZCwgMCAycHggMCAjMWYzMDUzLCAwIDRweCAzcHggMCAjMTExMTExO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMTBweCAxcHggIzVjOGJlZSwgMCAxcHggMCAjMWQyYzRkLCAwIDJweCAwICMxZjMwNTMsIDAgNHB4IDNweCAwICMxMTExMTE7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5hIGltZyB7XFxuICBib3JkZXI6IDA7XFxufVxcbmEudHJhdmlzLWJhZGdlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG59XFxuaDIge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cXG5iLmhlYWRlciB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG59XFxuc3Bhbi5hbGlhcyB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxudGFibGUge1xcbiAgbWFyZ2luOiAxNXB4IDAgMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbnRyLFxcbnRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbnRkIHtcXG4gIHBhZGRpbmc6IDBweCAxNXB4IDVweCAwO1xcbn1cXG50YWJsZSAucnVsZSB7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNjY2M7XFxuICBtYXJnaW46IDVweCAwO1xcbn1cXG5jb2RlLFxcbnByZSxcXG50dCB7XFxuICBmb250LWZhbWlseTogTW9uYWNvLCBDb25zb2xhcywgXFxcIkx1Y2lkYSBDb25zb2xlXFxcIiwgbW9ub3NwYWNlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbnR0IHtcXG4gIHBhZGRpbmc6IDBweCAzcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIHpvb206IDE7XFxufVxcbmNvZGUge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbnByZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiAycHggMCAycHggMTVweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNiYmI7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIG1hcmdpbjogMHB4IDAgMjVweDtcXG59XFxuaW1nLmV4YW1wbGVfaW1hZ2Uge1xcbiAgbWFyZ2luOiAwcHggYXV0bztcXG59XFxuaW1nLmV4YW1wbGVfcmV0aW5hIHtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE1cHggcmdiYSgwLDAsMCwwLjQpO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1heC1kZXZpY2UtcGl4ZWwtcmF0aW86IDEpIGFuZCAobWF4LXdpZHRoOiA2MDBweCksXFxuICAgICAgICAgICBvbmx5IHNjcmVlbiBhbmQgKG1heC0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMSkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBkaXYjc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICBpbWcjbG9nbyB7XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICB9XFxuXFxuICBkaXYuY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICB9XFxuXFxuICBwLFxcbiAgZGl2LmNvbnRhaW5lciB1bCB7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KSxcXG4gICAgICAgICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzLzIpIGFuZCAobWF4LXdpZHRoOiA2NDBweCksXFxuICAgICAgICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcXG4gIGltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgfVxcblxcbiAgZGl2I3NpZGViYXIge1xcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogaW5pdGlhbDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IC03cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDMwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gIH1cXG5cXG4gIGltZyNsb2dvIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogYXV0bztcXG4gIH1cXG5cXG4gIGRpdi5jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgcCxcXG4gIGRpdi5jb250YWluZXIgdWwge1xcbiAgICBtYXgtd2lkdGg6IDk4JTtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgfVxcblxcbiAgdGFibGUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICB0cjpmaXJzdC1jaGlsZCB0ZCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xcbiAgfVxcblxcbiAgdGQudGV4dCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNDhweDtcXG4gIH1cXG5cXG4gIHRyOmxhc3QtY2hpbGQgdGQudGV4dCB7XFxuICAgIHRvcDogMTIycHg7XFxuICB9XFxuXFxuICBwcmUge1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgfVxcbn1cXG5pbWcuZmlndXJlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5kaXYuY29sdW1ucyB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuZGl2LmNvbHVtbnMgdWwge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcbmRpdi5jb2wtNTAge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcbi8qIVxcbiAqIHJldmVhbC5qc1xcbiAqIGh0dHA6Ly9sYWIuaGFraW0uc2UvcmV2ZWFsLWpzXFxuICogTUlUIGxpY2Vuc2VkXFxuICpcXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTUgSGFraW0gRWwgSGF0dGFiLCBodHRwOi8vaGFraW0uc2VcXG4gKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUkVTRVQgU1RZTEVTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5odG1sLFxcbmJvZHksXFxuLnJldmVhbCBkaXYsXFxuLnJldmVhbCBzcGFuLFxcbi5yZXZlYWwgYXBwbGV0LFxcbi5yZXZlYWwgb2JqZWN0LFxcbi5yZXZlYWwgaWZyYW1lLFxcbi5yZXZlYWwgaDEsXFxuLnJldmVhbCBoMixcXG4ucmV2ZWFsIGgzLFxcbi5yZXZlYWwgaDQsXFxuLnJldmVhbCBoNSxcXG4ucmV2ZWFsIGg2LFxcbi5yZXZlYWwgcCxcXG4ucmV2ZWFsIGJsb2NrcXVvdGUsXFxuLnJldmVhbCBwcmUsXFxuLnJldmVhbCBhLFxcbi5yZXZlYWwgYWJicixcXG4ucmV2ZWFsIGFjcm9ueW0sXFxuLnJldmVhbCBhZGRyZXNzLFxcbi5yZXZlYWwgYmlnLFxcbi5yZXZlYWwgY2l0ZSxcXG4ucmV2ZWFsIGNvZGUsXFxuLnJldmVhbCBkZWwsXFxuLnJldmVhbCBkZm4sXFxuLnJldmVhbCBlbSxcXG4ucmV2ZWFsIGltZyxcXG4ucmV2ZWFsIGlucyxcXG4ucmV2ZWFsIGtiZCxcXG4ucmV2ZWFsIHEsXFxuLnJldmVhbCBzLFxcbi5yZXZlYWwgc2FtcCxcXG4ucmV2ZWFsIHNtYWxsLFxcbi5yZXZlYWwgc3RyaWtlLFxcbi5yZXZlYWwgc3Ryb25nLFxcbi5yZXZlYWwgc3ViLFxcbi5yZXZlYWwgc3VwLFxcbi5yZXZlYWwgdHQsXFxuLnJldmVhbCB2YXIsXFxuLnJldmVhbCBiLFxcbi5yZXZlYWwgdSxcXG4ucmV2ZWFsIGNlbnRlcixcXG4ucmV2ZWFsIGRsLFxcbi5yZXZlYWwgZHQsXFxuLnJldmVhbCBkZCxcXG4ucmV2ZWFsIG9sLFxcbi5yZXZlYWwgdWwsXFxuLnJldmVhbCBsaSxcXG4ucmV2ZWFsIGZpZWxkc2V0LFxcbi5yZXZlYWwgZm9ybSxcXG4ucmV2ZWFsIGxhYmVsLFxcbi5yZXZlYWwgbGVnZW5kLFxcbi5yZXZlYWwgdGFibGUsXFxuLnJldmVhbCBjYXB0aW9uLFxcbi5yZXZlYWwgdGJvZHksXFxuLnJldmVhbCB0Zm9vdCxcXG4ucmV2ZWFsIHRoZWFkLFxcbi5yZXZlYWwgdHIsXFxuLnJldmVhbCB0aCxcXG4ucmV2ZWFsIHRkLFxcbi5yZXZlYWwgYXJ0aWNsZSxcXG4ucmV2ZWFsIGFzaWRlLFxcbi5yZXZlYWwgY2FudmFzLFxcbi5yZXZlYWwgZGV0YWlscyxcXG4ucmV2ZWFsIGVtYmVkLFxcbi5yZXZlYWwgZmlndXJlLFxcbi5yZXZlYWwgZmlnY2FwdGlvbixcXG4ucmV2ZWFsIGZvb3RlcixcXG4ucmV2ZWFsIGhlYWRlcixcXG4ucmV2ZWFsIGhncm91cCxcXG4ucmV2ZWFsIG1lbnUsXFxuLnJldmVhbCBuYXYsXFxuLnJldmVhbCBvdXRwdXQsXFxuLnJldmVhbCBydWJ5LFxcbi5yZXZlYWwgc2VjdGlvbixcXG4ucmV2ZWFsIHN1bW1hcnksXFxuLnJldmVhbCB0aW1lLFxcbi5yZXZlYWwgbWFyayxcXG4ucmV2ZWFsIGF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4ucmV2ZWFsIGFydGljbGUsXFxuLnJldmVhbCBhc2lkZSxcXG4ucmV2ZWFsIGRldGFpbHMsXFxuLnJldmVhbCBmaWdjYXB0aW9uLFxcbi5yZXZlYWwgZmlndXJlLFxcbi5yZXZlYWwgZm9vdGVyLFxcbi5yZXZlYWwgaGVhZGVyLFxcbi5yZXZlYWwgaGdyb3VwLFxcbi5yZXZlYWwgbWVudSxcXG4ucmV2ZWFsIG5hdixcXG4ucmV2ZWFsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBHTE9CQUwgU1RZTEVTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogVklFVyBGUkFHTUVOVFNcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LnZpc2libGUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5ncm93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuZ3Jvdy52aXNpYmxlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LnNocmluayB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LnNocmluay52aXNpYmxlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50Lnpvb20taW4ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMSk7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuem9vbS1pbi52aXNpYmxlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LmZhZGUtb3V0IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuZmFkZS1vdXQudmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuc2VtaS1mYWRlLW91dCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LnNlbWktZmFkZS1vdXQudmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuc3RyaWtlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5zdHJpa2UudmlzaWJsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LmN1cnJlbnQtdmlzaWJsZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuY3VycmVudC12aXNpYmxlLmN1cnJlbnQtZnJhZ21lbnQge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtcmVkLFxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtY3VycmVudC1yZWQsXFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LmhpZ2hsaWdodC1ncmVlbixcXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LWN1cnJlbnQtZ3JlZW4sXFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gLmZyYWdtZW50LmhpZ2hsaWdodC1ibHVlLFxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtY3VycmVudC1ibHVlIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LXJlZC52aXNpYmxlIHtcXG4gIGNvbG9yOiAjZmYyYzJkO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LWdyZWVuLnZpc2libGUge1xcbiAgY29sb3I6ICMxN2ZmMmU7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtYmx1ZS52aXNpYmxlIHtcXG4gIGNvbG9yOiAjMWI5MWZmO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LWN1cnJlbnQtcmVkLmN1cnJlbnQtZnJhZ21lbnQge1xcbiAgY29sb3I6ICNmZjJjMmQ7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudC5oaWdobGlnaHQtY3VycmVudC1ncmVlbi5jdXJyZW50LWZyYWdtZW50IHtcXG4gIGNvbG9yOiAjMTdmZjJlO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgc2VjdGlvbiAuZnJhZ21lbnQuaGlnaGxpZ2h0LWN1cnJlbnQtYmx1ZS5jdXJyZW50LWZyYWdtZW50IHtcXG4gIGNvbG9yOiAjMWI5MWZmO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogREVGQVVMVCBFTEVNRU5UIFNUWUxFU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogRml4ZXMgaXNzdWUgaW4gQ2hyb21lIHdoZXJlIGl0YWxpYyBmb250cyBkaWQgbm90IGFwcGVhciB3aGVuIHByaW50aW5nIHRvIFBERiAqL1xcbi5yZXZlYWw6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5yZXZlYWwgaWZyYW1lIHtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi8qKiBQcmV2ZW50cyBsYXllcmluZyBpc3N1ZXMgaW4gY2VydGFpbiBicm93c2VyL3RyYW5zaXRpb24gY29tYmluYXRpb25zICovXFxuLnJldmVhbCBhIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnJldmVhbCAuc3RyZXRjaCB7XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxuICBtYXgtaGVpZ2h0OiBub25lO1xcbn1cXG4ucmV2ZWFsIHByZS5zdHJldGNoIGNvZGUge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBDT05UUk9MU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAuY29udHJvbHMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogMTEwcHg7XFxuICB6LWluZGV4OiAzMDtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDAuMDU7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlcjogMTJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk5OTkpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45OTk5KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45OTk5KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5lbmFibGVkIHtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2LmVuYWJsZWQ6YWN0aXZlIHtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLWxlZnQge1xcbiAgdG9wOiA0MnB4O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAyMnB4O1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtbGVmdC5mcmFnbWVudGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLXJpZ2h0IHtcXG4gIGxlZnQ6IDc0cHg7XFxuICB0b3A6IDQycHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMjJweDtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtcmlnaHQuZnJhZ21lbnRlZCB7XFxuICBvcGFjaXR5OiAwLjM7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS11cCB7XFxuICBsZWZ0OiA0MnB4O1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMjJweDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDA7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS11cC5mcmFnbWVudGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLWRvd24ge1xcbiAgbGVmdDogNDJweDtcXG4gIHRvcDogNzRweDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDIycHg7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtZG93bi5mcmFnbWVudGVkIHtcXG4gIG9wYWNpdHk6IDAuMztcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFBST0dSRVNTIEJBUlxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAucHJvZ3Jlc3Mge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogM3B4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5yZXZlYWwgLnByb2dyZXNzOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogLTIwcHg7XFxufVxcbi5yZXZlYWwgLnByb2dyZXNzIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBTTElERSBOVU1CRVJcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlLW51bWJlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHJpZ2h0OiAxNXB4O1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgei1pbmRleDogMzE7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBTTElERVNcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XFxuICBwZXJzcGVjdGl2ZTogNjAwcHg7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDQwJTtcXG4gIHBlcnNwZWN0aXZlLW9yaWdpbjogNTAlIDQwJTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiB7XFxuICAtbXMtcGVyc3BlY3RpdmU6IDYwMHB4O1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcbiAgei1pbmRleDogMTA7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW4gODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KSwgLXdlYmtpdC10cmFuc2Zvcm0gODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KSwgdmlzaWJpbGl0eSA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpLCBvcGFjaXR5IDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxuICB0cmFuc2l0aW9uOiAtbXMtdHJhbnNmb3JtLW9yaWdpbiA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpLCB0cmFuc2Zvcm0gODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KSwgdmlzaWJpbGl0eSA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpLCBvcGFjaXR5IDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0tb3JpZ2luIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSksIHRyYW5zZm9ybSA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpLCB2aXNpYmlsaXR5IDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSksIG9wYWNpdHkgODAwbXMgY3ViaWMtYmV6aWVyKDAuMjYsIDAuODYsIDAuNDQsIDAuOTg1KTtcXG59XFxuLyogR2xvYmFsIHRyYW5zaXRpb24gc3BlZWQgc2V0dGluZ3MgKi9cXG4ucmV2ZWFsW2RhdGEtdHJhbnNpdGlvbi1zcGVlZD1cXFwiZmFzdFxcXCJdIC5zbGlkZXMgc2VjdGlvbiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxufVxcbi5yZXZlYWxbZGF0YS10cmFuc2l0aW9uLXNwZWVkPVxcXCJzbG93XFxcIl0gLnNsaWRlcyBzZWN0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbn1cXG4vKiBTbGlkZS1zcGVjaWZpYyB0cmFuc2l0aW9uIHNwZWVkIG92ZXJyaWRlcyAqL1xcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbi1zcGVlZD1cXFwiZmFzdFxcXCJdIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG59XFxuLnJldmVhbCAuc2xpZGVzIHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uLXNwZWVkPVxcXCJzbG93XFxcIl0ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24uc3RhY2sge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbi5wcmVzZW50LFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uLnByZXNlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB6LWluZGV4OiAxMTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5yZXZlYWwuY2VudGVyLFxcbi5yZXZlYWwuY2VudGVyIC5zbGlkZXMsXFxuLnJldmVhbC5jZW50ZXIgLnNsaWRlcyBzZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcXG59XFxuLyogRG9uJ3QgYWxsb3cgaW50ZXJhY3Rpb24gd2l0aCBpbnZpc2libGUgc2xpZGVzICovXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbi5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb24uZnV0dXJlLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbi5wYXN0IHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4ucmV2ZWFsLm92ZXJ2aWV3IC5zbGlkZXMgPiBzZWN0aW9uLFxcbi5yZXZlYWwub3ZlcnZpZXcgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbi5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb24ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbi5mdXR1cmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIE1peGlucyBmb3IgcmVhZGFiaWxpdHkgb2YgdHJhbnNpdGlvbnNcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBTTElERSBUUkFOU0lUSU9OXFxuICogQWxpYXNlZCAnbGluZWFyJyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwuc2xpZGUgc2VjdGlvbiB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249c2xpZGVdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXNsaWRlLW91dF0ucGFzdCxcXG4ucmV2ZWFsLnNsaWRlIC5zbGlkZXMgPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTUwJSwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPXNsaWRlXS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXNsaWRlLWluXS5mdXR1cmUsXFxuLnJldmVhbC5zbGlkZSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MCUsIDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDE1MCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwJSwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1zbGlkZV0ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXNsaWRlLW91dF0ucGFzdCxcXG4ucmV2ZWFsLnNsaWRlIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLnBhc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE1MCUpO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249c2xpZGVdLmZ1dHVyZSxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXNsaWRlLWluXS5mdXR1cmUsXFxuLnJldmVhbC5zbGlkZSAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5mdXR1cmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1MCUpO1xcbn1cXG4ucmV2ZWFsLmxpbmVhciBzZWN0aW9uIHtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1saW5lYXJdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWxpbmVhci1vdXRdLnBhc3QsXFxuLnJldmVhbC5saW5lYXIgLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTE1MCUsIDApO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNTAlLCAwKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249bGluZWFyXS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWxpbmVhci1pbl0uZnV0dXJlLFxcbi5yZXZlYWwubGluZWFyIC5zbGlkZXMgPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkuZnV0dXJlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwJSwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNTAlLCAwKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWxpbmVhcl0ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWxpbmVhci1vdXRdLnBhc3QsXFxuLnJldmVhbC5saW5lYXIgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTUwJSk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1saW5lYXJdLmZ1dHVyZSxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWxpbmVhci1pbl0uZnV0dXJlLFxcbi5yZXZlYWwubGluZWFyIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDE1MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTUwJSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBDT05WRVggVFJBTlNJVElPTlxcbiAqIEFsaWFzZWQgJ2RlZmF1bHQnIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249ZGVmYXVsdF0ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49ZGVmYXVsdC1vdXRdLnBhc3QsXFxuLnJldmVhbC5kZWZhdWx0IC5zbGlkZXMgPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1kZWZhdWx0XS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWRlZmF1bHQtaW5dLmZ1dHVyZSxcXG4ucmV2ZWFsLmRlZmF1bHQgLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5mdXR1cmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWRlZmF1bHRdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9ufj1kZWZhdWx0LW91dF0ucGFzdCxcXG4ucmV2ZWFsLmRlZmF1bHQgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMHB4LCAwKSByb3RhdGVYKDcwZGVnKSB0cmFuc2xhdGUzZCgwLCAtMzAwcHgsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwcHgsIDApIHJvdGF0ZVgoNzBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0zMDBweCwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1kZWZhdWx0XS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9ufj1kZWZhdWx0LWluXS5mdXR1cmUsXFxuLnJldmVhbC5kZWZhdWx0IC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwcHgsIDApIHJvdGF0ZVgoLTcwZGVnKSB0cmFuc2xhdGUzZCgwLCAzMDBweCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMHB4LCAwKSByb3RhdGVYKC03MGRlZykgdHJhbnNsYXRlM2QoMCwgMzAwcHgsIDApO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1jb252ZXhdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWNvbnZleC1vdXRdLnBhc3QsXFxuLnJldmVhbC5jb252ZXggLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWNvbnZleF0uZnV0dXJlLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9ufj1jb252ZXgtaW5dLmZ1dHVyZSxcXG4ucmV2ZWFsLmNvbnZleCAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249Y29udmV4XS5wYXN0LFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29udmV4LW91dF0ucGFzdCxcXG4ucmV2ZWFsLmNvbnZleCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwcHgsIDApIHJvdGF0ZVgoNzBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0zMDBweCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMDBweCwgMCkgcm90YXRlWCg3MGRlZykgdHJhbnNsYXRlM2QoMCwgLTMwMHB4LCAwKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWNvbnZleF0uZnV0dXJlLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29udmV4LWluXS5mdXR1cmUsXFxuLnJldmVhbC5jb252ZXggLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkuZnV0dXJlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAzMDBweCwgMCkgcm90YXRlWCgtNzBkZWcpIHRyYW5zbGF0ZTNkKDAsIDMwMHB4LCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMzAwcHgsIDApIHJvdGF0ZVgoLTcwZGVnKSB0cmFuc2xhdGUzZCgwLCAzMDBweCwgMCk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBDT05DQVZFIFRSQU5TSVRJT05cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWNvbmNhdmVdLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PWNvbmNhdmUtb3V0XS5wYXN0LFxcbi5yZXZlYWwuY29uY2F2ZSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLnBhc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPWNvbmNhdmVdLmZ1dHVyZSxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29uY2F2ZS1pbl0uZnV0dXJlLFxcbi5yZXZlYWwuY29uY2F2ZSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1jb25jYXZlXS5wYXN0LFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29uY2F2ZS1vdXRdLnBhc3QsXFxuLnJldmVhbC5jb25jYXZlIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLnBhc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC04MCUsIDApIHJvdGF0ZVgoLTcwZGVnKSB0cmFuc2xhdGUzZCgwLCAtODAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTgwJSwgMCkgcm90YXRlWCgtNzBkZWcpIHRyYW5zbGF0ZTNkKDAsIC04MCUsIDApO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249Y29uY2F2ZV0uZnV0dXJlLFxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbn49Y29uY2F2ZS1pbl0uZnV0dXJlLFxcbi5yZXZlYWwuY29uY2F2ZSAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5mdXR1cmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDgwJSwgMCkgcm90YXRlWCg3MGRlZykgdHJhbnNsYXRlM2QoMCwgODAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgODAlLCAwKSByb3RhdGVYKDcwZGVnKSB0cmFuc2xhdGUzZCgwLCA4MCUsIDApO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogWk9PTSBUUkFOU0lUSU9OXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj16b29tXSxcXG4ucmV2ZWFsLnpvb20gLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XFxufVxcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPXpvb21dLnBhc3QsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXpvb20tb3V0XS5wYXN0LFxcbi5yZXZlYWwuem9vbSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pLnBhc3Qge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDE2KTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDE2KTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj16b29tXS5mdXR1cmUsXFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXpvb20taW5dLmZ1dHVyZSxcXG4ucmV2ZWFsLnpvb20gLnNsaWRlcyA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5mdXR1cmUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbn1cXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb249em9vbV0ucGFzdCxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXpvb20tb3V0XS5wYXN0LFxcbi5yZXZlYWwuem9vbSAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb246bm90KFtkYXRhLXRyYW5zaXRpb25dKS5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTE1MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xNTAlKTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPXpvb21dLmZ1dHVyZSxcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbltkYXRhLXRyYW5zaXRpb25+PXpvb20taW5dLmZ1dHVyZSxcXG4ucmV2ZWFsLnpvb20gLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSkuZnV0dXJlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxNTAlKTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIENVQkUgVFJBTlNJVElPTlxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbC5jdWJlIC5zbGlkZXMge1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xcbiAgcGVyc3BlY3RpdmU6IDEzMDBweDtcXG59XFxuLnJldmVhbC5jdWJlIC5zbGlkZXMgc2VjdGlvbiB7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgbWluLWhlaWdodDogNzAwcHg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5yZXZlYWwuY2VudGVyLmN1YmUgLnNsaWRlcyBzZWN0aW9uIHtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxufVxcbi5yZXZlYWwuY3ViZSAuc2xpZGVzIHNlY3Rpb246bm90KC5zdGFjayk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjBweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpO1xcbn1cXG4ucmV2ZWFsLmN1YmUgLnNsaWRlcyBzZWN0aW9uOm5vdCguc3RhY2spOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGVmdDogNSU7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgei1pbmRleDogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJveC1zaGFkb3c6IDBweCA5NXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTkwcHgpIHJvdGF0ZVgoNjVkZWcpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC05MHB4KSByb3RhdGVYKDY1ZGVnKTtcXG59XFxuLnJldmVhbC5jdWJlIC5zbGlkZXMgPiBzZWN0aW9uLnN0YWNrIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4ucmV2ZWFsLmN1YmUgLnNsaWRlcyA+IHNlY3Rpb24ucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKTtcXG59XFxuLnJldmVhbC5jdWJlIC5zbGlkZXMgPiBzZWN0aW9uLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlWSg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZVkoOTBkZWcpO1xcbn1cXG4ucmV2ZWFsLmN1YmUgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uLnBhc3Qge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKSByb3RhdGVYKDkwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApIHJvdGF0ZVgoOTBkZWcpO1xcbn1cXG4ucmV2ZWFsLmN1YmUgLnNsaWRlcyA+IHNlY3Rpb24gPiBzZWN0aW9uLmZ1dHVyZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCkgcm90YXRlWCgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKSByb3RhdGVYKC05MGRlZyk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBQQUdFIFRSQU5TSVRJT05cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwucGFnZSAuc2xpZGVzIHtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmUtb3JpZ2luOiAwJSA1MCU7XFxuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDAlIDUwJTtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDMwMDBweDtcXG4gIHBlcnNwZWN0aXZlOiAzMDAwcHg7XFxufVxcbi5yZXZlYWwucGFnZSAuc2xpZGVzIHNlY3Rpb24ge1xcbiAgcGFkZGluZzogMzBweDtcXG4gIG1pbi1oZWlnaHQ6IDcwMHB4O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnJldmVhbC5wYWdlIC5zbGlkZXMgc2VjdGlvbi5wYXN0IHtcXG4gIHotaW5kZXg6IDEyO1xcbn1cXG4ucmV2ZWFsLnBhZ2UgLnNsaWRlcyBzZWN0aW9uOm5vdCguc3RhY2spOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTIwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMHB4KTtcXG59XFxuLnJldmVhbC5wYWdlIC5zbGlkZXMgc2VjdGlvbjpub3QoLnN0YWNrKTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxlZnQ6IDUlO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwcHggOTVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC05MHB4KSByb3RhdGVYKDY1ZGVnKTtcXG59XFxuLnJldmVhbC5wYWdlIC5zbGlkZXMgPiBzZWN0aW9uLnN0YWNrIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4ucmV2ZWFsLnBhZ2UgLnNsaWRlcyA+IHNlY3Rpb24ucGFzdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTQwJSwgMCwgMCkgcm90YXRlWSgtODBkZWcpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNDAlLCAwLCAwKSByb3RhdGVZKC04MGRlZyk7XFxufVxcbi5yZXZlYWwucGFnZSAuc2xpZGVzID4gc2VjdGlvbi5mdXR1cmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG59XFxuLnJldmVhbC5wYWdlIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbi5wYXN0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNDAlLCAwKSByb3RhdGVYKDgwZGVnKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTQwJSwgMCkgcm90YXRlWCg4MGRlZyk7XFxufVxcbi5yZXZlYWwucGFnZSAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb24uZnV0dXJlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBGQURFIFRSQU5TSVRJT05cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlcyBzZWN0aW9uW2RhdGEtdHJhbnNpdGlvbj1mYWRlXSxcXG4ucmV2ZWFsLmZhZGUgLnNsaWRlcyBzZWN0aW9uOm5vdChbZGF0YS10cmFuc2l0aW9uXSksXFxuLnJldmVhbC5mYWRlIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG4ucmV2ZWFsLmZhZGUub3ZlcnZpZXcgLnNsaWRlcyBzZWN0aW9uLFxcbi5yZXZlYWwuZmFkZS5vdmVydmlldyAuc2xpZGVzID4gc2VjdGlvbiA+IHNlY3Rpb24ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIE5PIFRSQU5TSVRJT05cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgLnNsaWRlcyA+IHNlY3Rpb25bZGF0YS10cmFuc2l0aW9uPW5vbmVdLFxcbi5yZXZlYWwubm9uZSAuc2xpZGVzID4gc2VjdGlvbjpub3QoW2RhdGEtdHJhbnNpdGlvbl0pIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBQQVVTRUQgTU9ERVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAucGF1c2Utb3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIG9wYWNpdHk6IDA7XFxuICB6LWluZGV4OiAxMDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcbi5yZXZlYWwucGF1c2VkIC5wYXVzZS1vdmVybGF5IHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogRkFMTEJBQ0tcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5uby10cmFuc2Zvcm1zIHtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5uby10cmFuc2Zvcm1zIC5yZXZlYWwgLnNsaWRlcyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogODAlO1xcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5uby10cmFuc2Zvcm1zIC5yZXZlYWwgLmNvbnRyb2xzLFxcbi5uby10cmFuc2Zvcm1zIC5yZXZlYWwgLnByb2dyZXNzIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLm5vLXRyYW5zZm9ybXMgLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWluLWhlaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC01MCU7XFxuICBtYXJnaW46IDcwcHggMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuLm5vLXRyYW5zZm9ybXMgLnJldmVhbCAuc2xpZGVzIHNlY3Rpb24gc2VjdGlvbiB7XFxuICBsZWZ0OiAwO1xcbn1cXG4ucmV2ZWFsIC5uby10cmFuc2l0aW9uLFxcbi5yZXZlYWwgLm5vLXRyYW5zaXRpb24gKiB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG4gIHRyYW5zaXRpb246IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFBFUi1TTElERSBCQUNLR1JPVU5EU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAuYmFja2dyb3VuZHMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XFxuICBwZXJzcGVjdGl2ZTogNjAwcHg7XFxufVxcbi5yZXZlYWwgLnNsaWRlLWJhY2tncm91bmQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxufVxcbi5yZXZlYWwgLnNsaWRlLWJhY2tncm91bmQuc3RhY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5yZXZlYWwgLnNsaWRlLWJhY2tncm91bmQucHJlc2VudCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnByaW50LXBkZiAucmV2ZWFsIC5zbGlkZS1iYWNrZ3JvdW5kIHtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuLyogVmlkZW8gYmFja2dyb3VuZHMgKi9cXG4ucmV2ZWFsIC5zbGlkZS1iYWNrZ3JvdW5kIHZpZGVvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbiAgbWF4LWhlaWdodDogbm9uZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi8qIEltbWVkaWF0ZSB0cmFuc2l0aW9uIHN0eWxlICovXFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1ub25lXSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZCxcXG4ucmV2ZWFsID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPW5vbmVdIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcbi8qIFNsaWRlICovXFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1zbGlkZV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1zbGlkZV0ge1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXNsaWRlXSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQucGFzdFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1zbGlkZV0ge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIDApO1xcbn1cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXNsaWRlXSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmUsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249c2xpZGVdIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMDAlLCAwKTtcXG59XFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1zbGlkZV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXNsaWRlXSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMDAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtMTAwJSk7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249c2xpZGVdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249c2xpZGVdIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMTAwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAxMDAlKTtcXG59XFxuLyogQ29udmV4ICovXFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb252ZXhdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kLnBhc3QsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPWNvbnZleF0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApIHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29udmV4XSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmUsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29udmV4XSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcXG59XFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb252ZXhdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQucGFzdCxcXG4ucmV2ZWFsID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQucGFzdFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb252ZXhdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApIHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApIHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcXG59XFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb252ZXhdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29udmV4XSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApIHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCkgcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xcbn1cXG4vKiBDb25jYXZlICovXFxuLnJldmVhbFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb25jYXZlXSA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQucGFzdFtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj1jb25jYXZlXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKSByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29uY2F2ZV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPWNvbmNhdmVdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgcm90YXRlWSgtOTBkZWcpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29uY2F2ZV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPWNvbmNhdmVdIHtcXG4gIG9wYWNpdHk6IDA7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApIHJvdGF0ZVgoLTkwZGVnKSB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKSByb3RhdGVYKC05MGRlZykgdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xcbn1cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPWNvbmNhdmVdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kID4gLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmVbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249Y29uY2F2ZV0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKSByb3RhdGVYKDkwZGVnKSB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCkgcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XFxufVxcbi8qIFpvb20gKi9cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmRbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249em9vbV0ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xcbn1cXG4ucmV2ZWFsW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kLnBhc3QsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxNik7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249em9vbV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlLFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQuZnV0dXJlW2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249em9vbV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0LFxcbi5yZXZlYWwgPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5wYXN0W2RhdGEtYmFja2dyb3VuZC10cmFuc2l0aW9uPXpvb21dIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMTYpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxNik7XFxufVxcbi5yZXZlYWxbZGF0YS1iYWNrZ3JvdW5kLXRyYW5zaXRpb249em9vbV0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQgPiAuc2xpZGUtYmFja2dyb3VuZC5mdXR1cmUsXFxuLnJldmVhbCA+IC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZCA+IC5zbGlkZS1iYWNrZ3JvdW5kLmZ1dHVyZVtkYXRhLWJhY2tncm91bmQtdHJhbnNpdGlvbj16b29tXSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjIpO1xcbn1cXG4vKiBHbG9iYWwgdHJhbnNpdGlvbiBzcGVlZCBzZXR0aW5ncyAqL1xcbi5yZXZlYWxbZGF0YS10cmFuc2l0aW9uLXNwZWVkPVxcXCJmYXN0XFxcIl0gPiAuYmFja2dyb3VuZHMgLnNsaWRlLWJhY2tncm91bmQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xcbn1cXG4ucmV2ZWFsW2RhdGEtdHJhbnNpdGlvbi1zcGVlZD1cXFwic2xvd1xcXCJdID4gLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTIwMG1zO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogT1ZFUlZJRVdcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwub3ZlcnZpZXcge1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiA3MDBweDtcXG4gIHBlcnNwZWN0aXZlOiA3MDBweDtcXG59XFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzIHNlY3Rpb24ge1xcbiAgaGVpZ2h0OiA3MDBweDtcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ucmV2ZWFsLm92ZXJ2aWV3IC5zbGlkZXMgc2VjdGlvbjpob3ZlcixcXG4ucmV2ZWFsLm92ZXJ2aWV3IC5zbGlkZXMgc2VjdGlvbi5wcmVzZW50IHtcXG4gIG91dGxpbmU6IDEwcHggc29saWQgcmdiYSgxNTAsIDE1MCwgMTUwLCAwLjQpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IDEwcHg7XFxufVxcbi5yZXZlYWwub3ZlcnZpZXcgLnNsaWRlcyBzZWN0aW9uIC5mcmFnbWVudCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG59XFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzIHNlY3Rpb246YWZ0ZXIsXFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzIHNlY3Rpb246YmVmb3JlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzID4gc2VjdGlvbi5zdGFjayB7XFxuICBwYWRkaW5nOiAwO1xcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG4ucmV2ZWFsLm92ZXJ2aWV3IC5iYWNrZ3JvdW5kcyB7XFxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xcbiAgcGVyc3BlY3RpdmU6IGluaGVyaXQ7XFxufVxcbi5yZXZlYWwub3ZlcnZpZXcgLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3V0bGluZTogMTBweCBzb2xpZCByZ2JhKDE1MCwgMTUwLCAxNTAsIDAuMSk7XFxuICBvdXRsaW5lLW9mZnNldDogMTBweDtcXG59XFxuLnJldmVhbC5vdmVydmlldyAuc2xpZGVzIHNlY3Rpb24sXFxuLnJldmVhbC5vdmVydmlldy1kZWFjdGl2YXRpbmcgLnNsaWRlcyBzZWN0aW9uIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcXG4gIHRyYW5zaXRpb246IG5vbmU7XFxufVxcbi5yZXZlYWwub3ZlcnZpZXcgLmJhY2tncm91bmRzIC5zbGlkZS1iYWNrZ3JvdW5kLFxcbi5yZXZlYWwub3ZlcnZpZXctZGVhY3RpdmF0aW5nIC5iYWNrZ3JvdW5kcyAuc2xpZGUtYmFja2dyb3VuZCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbn1cXG4ucmV2ZWFsLm92ZXJ2aWV3LWFuaW1hdGVkIC5zbGlkZXMge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUlRMIFNVUFBPUlRcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwucnRsIC5zbGlkZXMsXFxuLnJldmVhbC5ydGwgLnNsaWRlcyBoMSxcXG4ucmV2ZWFsLnJ0bCAuc2xpZGVzIGgyLFxcbi5yZXZlYWwucnRsIC5zbGlkZXMgaDMsXFxuLnJldmVhbC5ydGwgLnNsaWRlcyBoNCxcXG4ucmV2ZWFsLnJ0bCAuc2xpZGVzIGg1LFxcbi5yZXZlYWwucnRsIC5zbGlkZXMgaDYge1xcbiAgZGlyZWN0aW9uOiBydGw7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuLnJldmVhbC5ydGwgcHJlLFxcbi5yZXZlYWwucnRsIGNvZGUge1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxufVxcbi5yZXZlYWwucnRsIG9sLFxcbi5yZXZlYWwucnRsIHVsIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ucmV2ZWFsLnJ0bCAucHJvZ3Jlc3Mgc3BhbiB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBQQVJBTExBWCBCQUNLR1JPVU5EXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsLmhhcy1wYXJhbGxheC1iYWNrZ3JvdW5kIC5iYWNrZ3JvdW5kcyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC44cyBlYXNlO1xcbn1cXG4vKiBHbG9iYWwgdHJhbnNpdGlvbiBzcGVlZCBzZXR0aW5ncyAqL1xcbi5yZXZlYWwuaGFzLXBhcmFsbGF4LWJhY2tncm91bmRbZGF0YS10cmFuc2l0aW9uLXNwZWVkPVxcXCJmYXN0XFxcIl0gLmJhY2tncm91bmRzIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogNDAwbXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0MDBtcztcXG59XFxuLnJldmVhbC5oYXMtcGFyYWxsYXgtYmFja2dyb3VuZFtkYXRhLXRyYW5zaXRpb24tc3BlZWQ9XFxcInNsb3dcXFwiXSAuYmFja2dyb3VuZHMge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMjAwbXM7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMSU5LIFBSRVZJRVcgT1ZFUkxBWVxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcbi5yZXZlYWwgLm92ZXJsYXkudmlzaWJsZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnJldmVhbCAub3ZlcmxheSAuc3Bpbm5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBtYXJnaW46IC0xNnB4IDAgMCAtMTZweDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaElBQWdBUE1BQUptWm1mJTJGJTJGJTJGNiUyQnZyOG5KeWJXMXRjREF3T2pvNk52YjI2aW9xS09qbzdPenMlMkZMeTh2ejglMkZBQUFBQUFBQUFBQUFDSCUyRkMwNUZWRk5EUVZCRk1pNHdBd0VBQUFBaCUyRmhwRGNtVmhkR1ZrSUhkcGRHZ2dZV3BoZUd4dllXUXVhVzVtYndBaCUyQlFRSkNnQUFBQ3dBQUFBQUlBQWdBQUFFNXhESVNXbGhwZXJONTJKTGhTU2RSZ3dWbzFJQ1FaUlVzaXdIcFRKVDRpb3dOUzh2eVcyaWNDRjZrOEhNTUJrQ0VEc2t4VEJEQVp3dUFra3FJZnhJUXloQlFCRnZBUVNESVRNNVZEVzZYTkU0S2FnTmg2Qmd3ZTYwc21RVUIzZDRSejFaQkFwbkZBU0RkMGhpaGgxMkJrRTlrakFKVmx5Y1hJZzdDUUlGQTZTbG5KODdwYXFiU0tpS29xdXNuYk1kbURDMnRYUWxrVWh6aVl0eVdUeElmeTZCRThXSnQ1WUp2cEppdnhOYUdtTEhUMFZuT2dTWWYwZFpYUzdBUGRwQjMwOVJuSE9HNWdEcVhHTERhQzQ1N0QxelolMkZWJTJGbm1PTTgyWGlIUkxZS2hLUDFvWm1BRGRFQUFBaCUyQlFRSkNnQUFBQ3dBQUFBQUlBQWdBQUFFNmhESVNXbFpwT3JOcDFsR05SU2RScERVb2xJR3c1UlVZaGhIdWtxRnU4RHNyRXlxbldUaEd2QW1oVmx0ZUJ2b2pwVEREQlVFSUZ3TUZCUkFtQmtTZ09yQkZab2dDQVN3QkRFWSUyRkNaU2c3R1NFMGdTQ2pRQk1WRzAyM3hXQmhrbEFub0VkaFFFZnlOcU1JY0tqaFJzakVkbmV6QiUyQkE0azhnVHdKaEZ1aVc0ZG9rWGlsb1VlcEJBcDVxYUtwcDYlMkJIbzdhV1c1NHdsN29idkVlMGtSdW9wbENHZXB3U3gyakp2cUhFbUd0NndoSnBHcGZKQ0htT29OSEthSHg2MVdpU1I5MkU0bGJGb3ElMkJCNlFEdHVldGNhQlBuVzYlMkJPN3dESHBJaUs5U2FWSzVHZ1Y1NDN0empnR2NnaEFnQWglMkJRUUpDZ0FBQUN3QUFBQUFJQUFnQUFBRTdoRElTU2t4cE9yTjV6RkhOV1JkaFNpVm9WTEhzcFJVTW95VWFreUVlOFBUUENBVFc5QTE0RTBVdnVBS01OQVpLWVVaQ2lCTXVCYWtTUUtHOEcyRnpVV294MkFVdEFRRmNCS2xWUW9MZ1FSZVpoUWxDSUplc1FYSTVCMENCblVNT3hNQ2Vub0NmVENFV0JzSkNvbFRNQU5sZHgxNUJHczhCNXdsQ1o5UG82T0prd21ScG5xa3FudVNyYXlxZkttcXBMYWpvaVc1SEpxN0ZMMUdyMm1NTWNLVU1JaUpnSWVteTd4WnRKc1Rtc000eEhpS3Y1S01DWHFmeVVDSkVvblhQTjJyQU9JQW1zZkIzdVBvQUslMkIlMkJHJTJCdzQ4ZWRaUEslMkJNNmhMSnBRZzQ4NGVuWElkUUZTUzF1NlVoa3NFTkVRQUFJZmtFQ1FvQUFBQXNBQUFBQUNBQUlBQUFCT2NReUVtcEdLTHF6V2NaUlZVUW5aWWcxYUJTaDJHVVZFSVEyYVFPRSUyQkclMkJjRDRudHBXa1pRajFKSWlaSW9nREZGeUhJMFV4UXdGdWdNU09GSVBKZnRmVkFFb1pMQmJjTEVGaGxRaXFHcDFWZDE0MEFVa2xVTjNlQ0E1MUMxRVdNek1DZXpDQkJta3hWSVZIQldkM0hIbDlKUU9JSlNkU25KMFRES0NoQ3dVSmpvV01QYUdxREthbm5hc01vNlduTTU2MlI1WWx1WlJ3dXIwd3BncVpFN05LVW0lMkJGTlJQSWhqQkp4S1p0ZVd1SUJNTjR6Uk1JVkloZmZjZ29qd0NGMTE3aTRubExuWTV6dFJMc25PayUyQmFWJTJCb0pZN1Y3bTc2UGRrUzR0cktjZGcwWmMwdFRjS2tSQUFBSWZrRUNRb0FBQUFzQUFBQUFDQUFJQUFBQk80UXlFa3BLcWpxelNjcFJhVmtYWldRRXhpbXcxQlNDVUVJbERvaHJmdDZjcEtDazV4aWQ1TU5KVGFBSWtla0tHUWtXeUtIa3ZoS3NSN0FSbWl0a0FZRFlSSWJVUVJRaldCd0pSekNoaTlDUmxCY1kxVU40ZzAlMkZWTkIwQWxjdmNBWUhSeVpQZEVRRllWOGNjd1I1SFd4RUowMlltUk1MbkoxeENZcDBZNWlkcFF1aG9wbW1DMktnb2pLYXNVUURrNUJOQXd3TU9oMlJ0UnE1dVF1UFpLR0lKUUlHd0F3R2Y2STBKWE1wQzhDN2tYV0RCSU5GTXhTNERLTUFXVldBR1lzQWROcVc1dWFSeGtTS0pPWkthVTN0UE9CWjREdUsyTEFUZ0poa1BKTWdUd0tDZEZqeVBIRW5LeEZDRGhFQUFDSDVCQWtLQUFBQUxBQUFBQUFnQUNBQUFBVHpFTWhKYVZLcDZzMm5Ja29sSUoyV2tCU2hwa1ZSV3FxUXJoTFNFdTlNWkpLSzl5MVpycVlLOVdpQ2xtdm9VYUY4Z0lRU05lRjFFcjRNTkZuNFNSU0RBUldyb0FJRVRnMWlWd3VIallCMWtZYzFtd3J1d1hLQzlnbXNKWGxpR3hjJTJCWGlVQ2J5OXlkaDFzT1NkTWtwTVRCcGFYQnpzZmhvYzVsNThHbTV5VG9BYVpoYU9VcWprRGdDV05IQVVMQ3dPTGFUbXpzd2FkRXFnZ1F3Z0h1UXNISW9aQ0hRTU1RZ1FHdWJWRWN4T1BGQWNNREFZVUE4NWVXQVJtZlNSUUNkY01lMHplUDFBQXlnd0xsSnRQTkFBTDE5REFSZFB6Qk9XU20xYnJKQmk0NXNvUkFXUUFBa3JRSXlrU2hROXdWaEhDd0NRQ0FDSDVCQWtLQUFBQUxBQUFBQUFnQUNBQUFBVHJFTWhKYVZLcDZzMm5Ja3FGWkYyVklCV2hVc0phVG9rcVVDb0JxJTJCRTcxU1JRZXlxVVRvTEE3VnhGMEpEeUlRaCUyRk1WVlBNdDFFQ1psZmNqWko5bUlLb2FUbDFNUklsNW80Q1VLWE93bXlyQ0luQ0txY1d0dmFkTDJTWWh5QVN5TkRKMHVJaVJNRGpJMEZkMzAlMkZpSTJVQTVHU1M1VURqMmw2Tm9xZ09nTjRna3NFQmdZRmYwRkRxS2dIbnlaOU9YOEhyZ1lIZEhwY0hRVUxYQVMycUtwRU5SZzdlQU1MQzdrVEJhaXhVWUZrS0F6V0FBbkxDN0ZMVnhMV0RCTEtDd2FLVFVMZ0V3YkxBNGhKdE9rU0JOcUlUVDN4RWdmTHBCdHpFJTJGaml1TDA0UkdFQmd3V2hTaFJnUUV4SEJBQWglMkJRUUpDZ0FBQUN3QUFBQUFJQUFnQUFBRTd4RElTV2xTcWVyTnB5SktoV1JkbFNBVm9WTENXazZKS2xBcUFhdmhPOVVrVUhzcWxFNkN3TzFjUmRDUThpRUlmekZWVHpMZFJBbVpYM0kyU2ZaaUNxR2s1ZFRFU0plYU9BbENsenNKc3F3aUp3aXFuRnJiMm5TOWttSWNnRXNqUXlkTGlJbEhlaGhwZWphSWp6aDllb21TalpSJTJCaXBzbFdJUkxBZ01ET1IyRE9xS29nVEI5cENVSkJhZ0RCWFI2WEIwRUJrSUlzYVJzR0dNTUF4b0RCZ1lIVEtKaVVZRUdEQXpIQzlFQUNjVUdrSWdGemd3WjBRc1NCY1hIaVF2T3dnRGRFd2ZGczBzRHp0NFM2Qks0eFlqa0RPem4wdW5GZUJ6T0JpakltMURnbWc1WUZRd3NDTWpwMW9KOEx5SUFBQ0g1QkFrS0FBQUFMQUFBQUFBZ0FDQUFBQVR3RU1oSmFWS3A2czJuSWtxRlpGMlZJQldoVXNKYVRva3FVQ29CcSUyQkU3MVNSUWV5cVVUb0xBN1Z4RjBKRHlJUWglMkZNVlZQTXQxRUNabGZjalpKOW1JS29hVGwxTVJJbDVvNENVS1hPd215ckNJbkNLcWNXdHZhZEwyU1loeUFTeU5ESjB1SWlVZDZHR2w2Tm9pUE9IMTZpWktObEg2S215V0ZPZ2dIaEVFdkF3d01BME45R0JzRUM2YW1oblZjRXdhdkRBYXpHd0lEYUgxaXBhWUxCVVRDR2dRREE4TmRIejBGcHFnVEJ3c0xxQWJXQUFuSUE0RldLZE1MR2RZR0VncmFpZ2JUME9JVEJjZzVRd1BUNHhMclJPWkw2QXVRQVBVUzdieExwb1dpZFkwSnR4TEhLaHd3TUpCVEhnUEtkRVFBQUNINUJBa0tBQUFBTEFBQUFBQWdBQ0FBQUFUckVNaEphVktwNnMybklrcUZaRjJWSUJXaFVzSmFUb2txVUNvQnElMkJFNzFTUlFleXFVVG9MQTdWeEYwSkR5SVFoJTJGTVZWUE10MUVDWmxmY2paSjltSUtvYVRsMU1SSWw1bzRDVUtYT3dteXJDSW5DS3FjV3R2YWRMMlNZaHlBU3lOREowdUlpVWQ2R0FVTERKQ1JpWG8xQ3BHWERKT1VqWSUyQllpcDlEaFRvSkE0UkJMd01MQ3dWRGZSZ2JCQWFxcW9aMVhCTUhzd3NIdHh0RmFIMWlxYW9HTmdBSXhScGJGQWdmUFFTcXBiZ0dCcVVEMXdCWGVDWXAxQVlaMTlKSk9ZZ0gxS3dBNFVCdlF3WFVCeFBxVkQ5TDNzYnAyQk5rMnh2dkZQSmQlMkJNRkNONkhBQUlLZ05nZ1kwS3RFQkFBaCUyQlFRSkNnQUFBQ3dBQUFBQUlBQWdBQUFFNkJESVNXbFNxZXJOcHlKS2hXUmRsU0FWb1ZMQ1drNkpLbEFxQWF2aE85VWtVSHNxbEU2Q3dPMWNSZENROGlFSWZ6RlZUekxkUkFtWlgzSTJTZllJRE1hQUZkVEVTSmVhRURBSU14WUZxck9VYU5XNEU0T2JZY0NYYWlCVkVnVUxlME5KYXh4dFlrc2poMk5Ma1pJU2dEZ0poSHRoa3BVNG1XNmJsUmlZbVpPbGg0SldrRHFJTHdVR0JuRTZUWUViQ2dldnIwTjFnSDRBdDdnSGlScEZhTE5ycnE4SE5nQUpBNzBBV3hRSUgxJTJCdnNZTURBelpRUEM5VkNOa0RXVWhHa3VFNVB4Sk53aVVLNFVmTHpPbEQ0V3Z6QUhhb0c5bnhQaTVkJTJCallVcWZBaGh5a09Gd0pXaUFBQUlma0VDUW9BQUFBc0FBQUFBQ0FBSUFBQUJQQVF5RWxwVXFucXphY2lTb1ZrWFZVTUZhRlN3bHBPQ2NNWWxFckFhdmhPTW5OTE5vOEtzWnNNWkl0SkVJRElGU2tMR1FvUVROaElzRmVoUnd3MkNRTEtGMHRZR0tZU2clMkJ5Z3NaSXVOcUprc0tnYmZnSUdlcE5vMmNJVUIzVjFCM0l2TmlCWU5RYURTVHRmaGh4MEN3VlBJMFVKZTAlMkJibTRnNVZnY0dvcU9jbmptanFEU2RuaGdFb2FtY3NadVhPMWFXUXk4S0F3T0F1VFlZR3dpN3c1aCUyQktyMFNKOE1GaWhwTmJ4JTJCNEVycTdCWUJ1enNkaUgxakNBem9TZmwwclZpck5iUlhsQkJsTFglMkJCUDBYSkxBUEd6VGtBdUFPcWIwV1Q1QUg3T2NkQ201QjhUZ1J3U1JLSUhRdGFMQ3dnMVJBQUFPd0FBQUFBQUFBQUFBQSUzRCUzRCk7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuLnJldmVhbCAub3ZlcmxheSBoZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgei1pbmRleDogMjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5IGhlYWRlciBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgb3BhY2l0eTogMC42O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLnJldmVhbCAub3ZlcmxheSBoZWFkZXIgYTpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5IGhlYWRlciBhIC5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5yZXZlYWwgLm92ZXJsYXkgaGVhZGVyIGEuY2xvc2UgLmljb24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUJra2xFUVZSWVI4V1g0VkhETUF4RzZ3bm9KckFCWlFQWUJDYUJUV0FEMmcxZ0U1Z2c2T09zWHV4SWxyNDBkODFkZnJTSjlWNGMyVkxLN3NwSHVUSi81d3BNMDdRWHVYYzVYMG9wWDJ0RUpjYWRqSHVWODBsaS9GZ3hUSUVLLzVRQkNJQ0JENnhFaFNNR0hnUVBnQmdMaVlWQUIxZHBTcUtEYXd4VG9oRnc0SlNFQTNjbHpnSUJQQ1VSd0UySnVjQlI3cmhQSkp2NU9wSndEWCtTZkRqZ3gxd0FDUWVKRzFhQ2hQOUsvSU1tZFo4RHRFU1YxV3lQM0J0NE13TTZzajROTXhNWWlxVVdIUXU0S1lBL1NZa0lqT3NtM0JYWVdNS0ZEd1Uya2hqQ1E0RUxKVUo0U21DbFJBck9DbVNYR3VLbWEwZllENUNiekh4RnBDU0dBaGZBVlNTVUdEVWsyQldaYWZmMmc2R0UxNUJzQlE5bndtcElHRGl5SFFkZHdOVE1La2JaYWY5ZmFqWFFjYTFFWDQ0cHVKWlVzblkwT2JHbUlURTNHVkxDYkVoUVVqR1Z0MTQ2ajZvYXNXTis0OVZwaDJ3MXBaNUVhbnNOWnFLQm0xdHhiVTU3aVJSY1o4NlJXTURkV3RCSlVIQkh3b1FQaTFHVitKQ2JudG12b2s3aVRYNC9VcDltZ3lUYy9GSllEVGNuZGdIL0FBNUEvQ0hzeUVrVkFBQUFBRWxGVGtTdVFtQ0MpO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5IGhlYWRlciBhLmV4dGVybmFsIC5pY29uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBY0VsRVFWUllSKzJXU1FvQUlRd0V6ZjhmN1hpT01rVVF4VVBsR2tNM2hWbWlRZlFSOUdZbkgxU3NBUWxJNERpQnFrQ01vTmI5eTJlOTBJQUVKUEFjZ2R6blU5K2VuZ01hZUo3QXpoNVkxVTY3Z0FobzREcUJxbUIxYnVBZjBNQjFBbFZCZWs4M1pQa21KTUdjMXdBUitBQXFvZC9COTdUUnBRQUFBQUJKUlU1RXJrSmdnZz09KTtcXG59XFxuLnJldmVhbCAub3ZlcmxheSAudmlld3BvcnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA0MHB4O1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5Lm92ZXJsYXktcHJldmlldyAudmlld3BvcnQgaWZyYW1lIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5Lm92ZXJsYXktcHJldmlldy5sb2FkZWQgLnZpZXdwb3J0IGlmcmFtZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLnJldmVhbCAub3ZlcmxheS5vdmVybGF5LXByZXZpZXcubG9hZGVkIC5zcGlubmVyIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4yKTtcXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMik7XFxufVxcbi5yZXZlYWwgLm92ZXJsYXkub3ZlcmxheS1oZWxwIC52aWV3cG9ydCB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ucmV2ZWFsIC5vdmVybGF5Lm92ZXJsYXktaGVscCAudmlld3BvcnQgLnZpZXdwb3J0LWlubmVyIHtcXG4gIHdpZHRoOiA2MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogNjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxufVxcbi5yZXZlYWwgLm92ZXJsYXkub3ZlcmxheS1oZWxwIC52aWV3cG9ydCAudmlld3BvcnQtaW5uZXIgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLnJldmVhbCAub3ZlcmxheS5vdmVybGF5LWhlbHAgLnZpZXdwb3J0IC52aWV3cG9ydC1pbm5lciB0YWJsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnJldmVhbCAub3ZlcmxheS5vdmVybGF5LWhlbHAgLnZpZXdwb3J0IC52aWV3cG9ydC1pbm5lciB0YWJsZSB0aCxcXG4ucmV2ZWFsIC5vdmVybGF5Lm92ZXJsYXktaGVscCAudmlld3BvcnQgLnZpZXdwb3J0LWlubmVyIHRhYmxlIHRkIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLnJldmVhbCAub3ZlcmxheS5vdmVybGF5LWhlbHAgLnZpZXdwb3J0IC52aWV3cG9ydC1pbm5lciB0YWJsZSB0aCB7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogUExBWUJBQ0sgQ09NUE9ORU5UXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5wbGF5YmFjayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAxNXB4O1xcbiAgYm90dG9tOiAxNXB4O1xcbiAgei1pbmRleDogMzA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDQwMG1zIGVhc2U7XFxufVxcbi5yZXZlYWwub3ZlcnZpZXcgLnBsYXliYWNrIHtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBST0xMSU5HIExJTktTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5yb2xsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDQwMHB4O1xcbiAgcGVyc3BlY3RpdmU6IDQwMHB4O1xcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxuICBwZXJzcGVjdGl2ZS1vcmlnaW46IDUwJSA1MCU7XFxufVxcbi5yZXZlYWwgLnJvbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHRleHQtc2hhZG93OiBub25lO1xcbn1cXG4ucmV2ZWFsIC5yb2xsIHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAwIDJweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNDAwbXMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcyBlYXNlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XFxuICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ucmV2ZWFsIC5yb2xsOmhvdmVyIHNwYW4ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtNDVweCkgcm90YXRlWCg5MGRlZyk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAtNDVweCkgcm90YXRlWCg5MGRlZyk7XFxufVxcbi5yZXZlYWwgLnJvbGwgc3BhbjphZnRlciB7XFxuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMCAycHg7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDExMCUsIDBweCkgcm90YXRlWCgtOTBkZWcpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDExMCUsIDBweCkgcm90YXRlWCgtOTBkZWcpO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogU1BFQUtFUiBOT1RFU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCBhc2lkZS5ub3RlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogWk9PTSBQTFVHSU5cXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi56b29tZWQgLnJldmVhbCAqLFxcbi56b29tZWQgLnJldmVhbCAqOmJlZm9yZSxcXG4uem9vbWVkIC5yZXZlYWwgKjphZnRlciB7XFxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG59XFxuLnpvb21lZCAucmV2ZWFsIC5wcm9ncmVzcyxcXG4uem9vbWVkIC5yZXZlYWwgLmNvbnRyb2xzIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi56b29tZWQgLnJldmVhbCAucm9sbCBzcGFuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi56b29tZWQgLnJldmVhbCAucm9sbCBzcGFuOmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLyoqXFxuICogQSBzaW1wbGUgdGhlbWUgZm9yIHJldmVhbC5qcyBwcmVzZW50YXRpb25zLCBzaW1pbGFyXFxuICogdG8gdGhlIGRlZmF1bHQgdGhlbWUuIFRoZSBhY2NlbnQgY29sb3IgaXMgZGFya2JsdWUuXFxuICpcXG4gKiBUaGlzIHRoZW1lIGlzIENvcHlyaWdodCAoQykgMjAxMiBPd2VuIFZlcnN0ZWVnLCBodHRwczovL2dpdGh1Yi5jb20vU3RlcmVvdHlwaWNhbEFwcHMuIEl0IGlzIE1JVCBsaWNlbnNlZC5cXG4gKiByZXZlYWwuanMgaXMgQ29weXJpZ2h0IChDKSAyMDExLTIwMTIgSGFraW0gRWwgSGF0dGFiLCBodHRwOi8vaGFraW0uc2VcXG4gKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogR0xPQkFMIFNUWUxFU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLnJldmVhbCB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDAwO1xcbn1cXG46OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45OSk7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuLnJldmVhbCAuc2xpZGVzID4gc2VjdGlvbixcXG4ucmV2ZWFsIC5zbGlkZXMgPiBzZWN0aW9uID4gc2VjdGlvbiB7XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBIRUFERVJTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIGgxLFxcbi5yZXZlYWwgaDIsXFxuLnJldmVhbCBoMyxcXG4ucmV2ZWFsIGg0LFxcbi5yZXZlYWwgaDUsXFxuLnJldmVhbCBoNiB7XFxuICBtYXJnaW46IDAgMCAyMHB4IDA7XFxuICBjb2xvcjogIzAwMDtcXG4gIGZvbnQtZmFtaWx5OiAnTmV3cyBDeWNsZScsIEltcGFjdCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5yZXZlYWwgaDEge1xcbiAgZm9udC1zaXplOiAzLjc3ZW07XFxufVxcbi5yZXZlYWwgaDIge1xcbiAgZm9udC1zaXplOiAyLjExZW07XFxufVxcbi5yZXZlYWwgaDMge1xcbiAgZm9udC1zaXplOiAxLjU1ZW07XFxufVxcbi5yZXZlYWwgaDQge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcbi5yZXZlYWwgaDEge1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBPVEhFUlxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCBwIHtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuLyogRW5zdXJlIGNlcnRhaW4gZWxlbWVudHMgYXJlIG5ldmVyIGxhcmdlciB0aGFuIHRoZSBzbGlkZSBpdHNlbGYgKi9cXG4ucmV2ZWFsIGltZyxcXG4ucmV2ZWFsIHZpZGVvLFxcbi5yZXZlYWwgaWZyYW1lIHtcXG4gIG1heC13aWR0aDogOTUlO1xcbiAgbWF4LWhlaWdodDogOTUlO1xcbn1cXG4ucmV2ZWFsIHN0cm9uZyxcXG4ucmV2ZWFsIGIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5yZXZlYWwgZW0ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4ucmV2ZWFsIG9sLFxcbi5yZXZlYWwgZGwsXFxuLnJldmVhbCB1bCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbWFyZ2luOiAwIDAgMCAxZW07XFxufVxcbi5yZXZlYWwgb2wge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsO1xcbn1cXG4ucmV2ZWFsIHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogZGlzYztcXG59XFxuLnJldmVhbCB1bCB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IHNxdWFyZTtcXG59XFxuLnJldmVhbCB1bCB1bCB1bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcXG59XFxuLnJldmVhbCB1bCB1bCxcXG4ucmV2ZWFsIHVsIG9sLFxcbi5yZXZlYWwgb2wgb2wsXFxuLnJldmVhbCBvbCB1bCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG4ucmV2ZWFsIGR0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucmV2ZWFsIGRkIHtcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG4ucmV2ZWFsIHEsXFxuLnJldmVhbCBibG9ja3F1b3RlIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuLnJldmVhbCBibG9ja3F1b3RlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLnJldmVhbCBibG9ja3F1b3RlIHA6Zmlyc3QtY2hpbGQsXFxuLnJldmVhbCBibG9ja3F1b3RlIHA6bGFzdC1jaGlsZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5yZXZlYWwgcSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5yZXZlYWwgcHJlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMC41NWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLnJldmVhbCBjb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5yZXZlYWwgcHJlIGNvZGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgd29yZC13cmFwOiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kOiAjM0YzRjNGO1xcbiAgY29sb3I6ICNEQ0RDREM7XFxufVxcbi5yZXZlYWwgdGFibGUge1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG4ucmV2ZWFsIHRhYmxlIHRoIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ucmV2ZWFsIHRhYmxlIHRoLFxcbi5yZXZlYWwgdGFibGUgdGQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmc6IDAuMmVtIDAuNWVtIDAuMmVtIDAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xcbn1cXG4ucmV2ZWFsIHRhYmxlIHRoW2FsaWduPVxcXCJjZW50ZXJcXFwiXSxcXG4ucmV2ZWFsIHRhYmxlIHRkW2FsaWduPVxcXCJjZW50ZXJcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5yZXZlYWwgdGFibGUgdGhbYWxpZ249XFxcInJpZ2h0XFxcIl0sXFxuLnJldmVhbCB0YWJsZSB0ZFthbGlnbj1cXFwicmlnaHRcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLnJldmVhbCB0YWJsZSB0cjpsYXN0LWNoaWxkIHRkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcbi5yZXZlYWwgc3VwIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG59XFxuLnJldmVhbCBzdWIge1xcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcXG59XFxuLnJldmVhbCBzbWFsbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDAuNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnJldmVhbCBzbWFsbCAqIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBMSU5LU1xcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCBhIHtcXG4gIGNvbG9yOiAjMDAwMDhCO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcXG59XFxuLnJldmVhbCBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDAwMGYxO1xcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5yZXZlYWwgLnJvbGwgc3BhbjphZnRlciB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQ6ICMwMDAwM2Y7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBJTUFHRVNcXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi5yZXZlYWwgc2VjdGlvbiBpbWcge1xcbiAgbWFyZ2luOiAxNXB4IDBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XFxuICBib3JkZXI6IDRweCBzb2xpZCAjMDAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLnJldmVhbCBhIGltZyB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjE1cyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgbGluZWFyO1xcbn1cXG4ucmV2ZWFsIGE6aG92ZXIgaW1nIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGJvcmRlci1jb2xvcjogIzAwMDA4QjtcXG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41NSk7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXG4gKiBOQVZJR0FUSU9OIENPTlRST0xTXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtbGVmdCxcXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtbGVmdC5lbmFibGVkIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMDA4QjtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLXJpZ2h0LFxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS1yaWdodC5lbmFibGVkIHtcXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwMDhCO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtdXAsXFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLXVwLmVuYWJsZWQge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwMDA4QjtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLWRvd24sXFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLWRvd24uZW5hYmxlZCB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDhCO1xcbn1cXG4ucmV2ZWFsIC5jb250cm9scyBkaXYubmF2aWdhdGUtbGVmdC5lbmFibGVkOmhvdmVyIHtcXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMDBmMTtcXG59XFxuLnJldmVhbCAuY29udHJvbHMgZGl2Lm5hdmlnYXRlLXJpZ2h0LmVuYWJsZWQ6aG92ZXIge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDAwZjE7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS11cC5lbmFibGVkOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwMDAwZjE7XFxufVxcbi5yZXZlYWwgLmNvbnRyb2xzIGRpdi5uYXZpZ2F0ZS1kb3duLmVuYWJsZWQ6aG92ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzAwMDBmMTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcbiAqIFBST0dSRVNTIEJBUlxcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLnJldmVhbCAucHJvZ3Jlc3Mge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ucmV2ZWFsIC5wcm9ncmVzcyBzcGFuIHtcXG4gIGJhY2tncm91bmQ6ICMwMDAwOEI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxuICAtbW96LXRyYW5zaXRpb246IHdpZHRoIDgwMG1zIGN1YmljLWJlemllcigwLjI2LCAwLjg2LCAwLjQ0LCAwLjk4NSk7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCA4MDBtcyBjdWJpYy1iZXppZXIoMC4yNiwgMC44NiwgMC40NCwgMC45ODUpO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxuICogU0xJREUgTlVNQkVSXFxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4ucmV2ZWFsIC5zbGlkZS1udW1iZXIge1xcbiAgY29sb3I6ICMwMDAwOEI7XFxufVxcbi8qXFxuXFxuZ2l0aHViLmNvbSBzdHlsZSAoYykgVmFzaWx5IFBvbG92bnlvdiA8dmFzdEB3aGl0ZWFudHMubmV0PlxcblxcbiovXFxuLmhsanMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBjb2xvcjogIzMzMztcXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxufVxcbi5obGpzLWNvbW1lbnQsXFxuLmRpZmYgLmhsanMtaGVhZGVyIHtcXG4gIGNvbG9yOiAjOTk4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uaGxqcy1rZXl3b3JkLFxcbi5jc3MgLnJ1bGUgLmhsanMta2V5d29yZCxcXG4uaGxqcy13aW51dGlscyxcXG4ubmdpbnggLmhsanMtdGl0bGUsXFxuLmhsanMtc3Vic3QsXFxuLmhsanMtcmVxdWVzdCxcXG4uaGxqcy1zdGF0dXMge1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhsanMtbnVtYmVyLFxcbi5obGpzLWhleGNvbG9yLFxcbi5ydWJ5IC5obGpzLWNvbnN0YW50IHtcXG4gIGNvbG9yOiAjMDA4MDgwO1xcbn1cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtdGFnIC5obGpzLXZhbHVlLFxcbi5obGpzLWRvY3RhZyxcXG4udGV4IC5obGpzLWZvcm11bGEge1xcbiAgY29sb3I6ICNkMTQ7XFxufVxcbi5obGpzLXRpdGxlLFxcbi5obGpzLWlkLFxcbi5zY3NzIC5obGpzLXByZXByb2Nlc3NvciB7XFxuICBjb2xvcjogIzkwMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGxqcy1saXN0IC5obGpzLWtleXdvcmQsXFxuLmhsanMtc3Vic3Qge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLmhsanMtY2xhc3MgLmhsanMtdGl0bGUsXFxuLmhsanMtdHlwZSxcXG4udmhkbCAuaGxqcy1saXRlcmFsLFxcbi50ZXggLmhsanMtY29tbWFuZCB7XFxuICBjb2xvcjogIzQ1ODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaGxqcy10YWcsXFxuLmhsanMtdGFnIC5obGpzLXRpdGxlLFxcbi5obGpzLXJ1bGUgLmhsanMtcHJvcGVydHksXFxuLmRqYW5nbyAuaGxqcy10YWcgLmhsanMta2V5d29yZCB7XFxuICBjb2xvcjogIzAwMDA4MDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5obGpzLWF0dHJpYnV0ZSxcXG4uaGxqcy12YXJpYWJsZSxcXG4ubGlzcCAuaGxqcy1ib2R5LFxcbi5obGpzLW5hbWUge1xcbiAgY29sb3I6ICMwMDgwODA7XFxufVxcbi5obGpzLXJlZ2V4cCB7XFxuICBjb2xvcjogIzAwOTkyNjtcXG59XFxuLmhsanMtc3ltYm9sLFxcbi5ydWJ5IC5obGpzLXN5bWJvbCAuaGxqcy1zdHJpbmcsXFxuLmxpc3AgLmhsanMta2V5d29yZCxcXG4uY2xvanVyZSAuaGxqcy1rZXl3b3JkLFxcbi5zY2hlbWUgLmhsanMta2V5d29yZCxcXG4udGV4IC5obGpzLXNwZWNpYWwsXFxuLmhsanMtcHJvbXB0IHtcXG4gIGNvbG9yOiAjOTkwMDczO1xcbn1cXG4uaGxqcy1idWlsdF9pbiB7XFxuICBjb2xvcjogIzAwODZiMztcXG59XFxuLmhsanMtcHJlcHJvY2Vzc29yLFxcbi5obGpzLXByYWdtYSxcXG4uaGxqcy1waSxcXG4uaGxqcy1kb2N0eXBlLFxcbi5obGpzLXNoZWJhbmcsXFxuLmhsanMtY2RhdGEge1xcbiAgY29sb3I6ICM5OTk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhsanMtZGVsZXRpb24ge1xcbiAgYmFja2dyb3VuZDogI2ZkZDtcXG59XFxuLmhsanMtYWRkaXRpb24ge1xcbiAgYmFja2dyb3VuZDogI2RmZDtcXG59XFxuLmRpZmYgLmhsanMtY2hhbmdlIHtcXG4gIGJhY2tncm91bmQ6ICMwMDg2YjM7XFxufVxcbi5obGpzLWNodW5rIHtcXG4gIGNvbG9yOiAjYWFhO1xcbn1cXG5cIjsgKHJlcXVpcmUoXCJicm93c2VyaWZ5LWNzc1wiKS5jcmVhdGVTdHlsZShjc3MsIHsgXCJocmVmXCI6IFwic3JjL3N0eWxlcy9zcy5jc3NcIn0pKTsgbW9kdWxlLmV4cG9ydHMgPSBjc3M7Il19
