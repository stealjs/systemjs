!function(e){e.upgradeSystemLoader=function(){function t(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@\/?#]*(?::[^:@\/?#]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function a(e,r){function a(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return w&&(r=r.replace(/\\/g,"/")),r=t(r||""),e=t(e||""),r&&e?(r.protocol||e.protocol)+(r.protocol||r.authority?r.authority:e.authority)+a(r.protocol||r.authority||"/"===r.pathname.charAt(0)?r.pathname:r.pathname?(e.authority&&!e.pathname?"/":"")+e.pathname.slice(0,e.pathname.lastIndexOf("/")+1)+r.pathname:e.pathname)+(r.protocol||r.authority||r.pathname?r.search:r.search||e.search)+r.hash:null}function n(t){var r={};if(("object"==typeof t||"function"==typeof t)&&t!==e)if(S)for(var a in t)"default"!==a&&o(r,t,a);else i(r,t);return r["default"]=t,j(r,"__useDefault",{value:!0}),r}function o(e,t,r){try{var a;(a=Object.getOwnPropertyDescriptor(t,r))&&j(e,r,a)}catch(n){return e[r]=t[r],!1}}function i(e,t,r){var a=t&&t.hasOwnProperty;for(var n in t)(!a||t.hasOwnProperty(n))&&(r&&n in e||(e[n]=t[n]));return e}function s(e){function t(e,t){t._extensions=[];for(var r=0,a=e.length;a>r;r++)e[r](t)}var r=e["import"];e["import"]=function(e,t){return r.call(this,e,t).then(function(e){return e.__useDefault?e["default"]:e})},e.set("@empty",e.newModule({})),"undefined"!=typeof require&&(e._nodeRequire=require),e.config=function(e){for(var t in e){var r=e[t];if("object"!=typeof r||r instanceof Array)this[t]=r;else{this[t]=this[t]||{};for(var a in r)this[t][a]=r[a]}}};var n;if("undefined"==typeof window&&"undefined"==typeof WorkerGlobalScope)n="file:"+process.cwd()+"/",w&&(n=n.replace(/\\/g,"/"));else if("undefined"==typeof window)n=e.global.location.href;else if(n=document.baseURI,!n){var o=document.getElementsByTagName("base");n=o[0]&&o[0].href||window.location.href}var i,l=e.locate;e.locate=function(e){return this.baseURL!=i&&(i=a(n,this.baseURL),"/"!=i.substr(i.length-1,1)&&(i+="/"),this.baseURL=i),Promise.resolve(l.call(this,e))},e._extensions=e._extensions||[],e._extensions.push(s),e.clone=function(){var e=this,r=new LoaderPolyfill(E);return r.baseURL=e.baseURL,r.paths={"*":"*.js"},t(e._extensions,r),r}}function l(e){"undefined"==typeof _&&(_=Array.prototype.indexOf),e._extensions.push(l);var t=document.getElementsByTagName("head")[0];e.onScriptLoad=function(){},e.fetch=function(r){return new Promise(function(a,n){function o(t){l.readyState&&"loaded"!=l.readyState&&"complete"!=l.readyState||(s(),e.onScriptLoad(r),r.metadata.registered||n(r.address+" did not call System.register or AMD define"),a(""))}function i(e){s(),n(e)}function s(){l.detachEvent?l.detachEvent("onreadystatechange",o):(l.removeEventListener("load",o,!1),l.removeEventListener("error",i,!1)),t.removeChild(l)}var l=document.createElement("script");l.async=!0,l.attachEvent?l.attachEvent("onreadystatechange",o):(l.addEventListener("load",o,!1),l.addEventListener("error",i,!1)),l.src=r.address,t.appendChild(l)})},e.scriptLoader=!0}function u(e){function t(e,t){var r=e.meta&&e.meta[t.name];if(r)for(var a in r)t.metadata[a]=t.metadata[a]||r[a]}var r=/^(\s*\/\*.*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,a=/\/\*.*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;e.meta={},e._extensions=e._extensions||[],e._extensions.push(u);var n=e.locate;e.locate=function(e){return t(this,e),n.call(this,e)};var o=e.translate;e.translate=function(e){var n=e.source.match(r);if(n)for(var i=n[0].match(a),s=0;s<i.length;s++){var l=i[s].length,u=i[s].substr(0,1);if(";"==i[s].substr(l-1,1)&&l--,'"'==u||"'"==u){var d=i[s].substr(1,i[s].length-3),f=d.substr(0,d.indexOf(" "));if(f){var c=d.substr(f.length+1,d.length-f.length-1);e.metadata[f]instanceof Array?e.metadata[f].push(c):e.metadata[f]||(e.metadata[f]=c)}}}return t(this,e),o.call(this,e)}}function d(e){function t(e,t){var n,o=this,i=e.source.lastIndexOf("\n");-1!=i&&"//# sourceMappingURL="==e.source.substr(i+1,21)&&(n=e.source.substr(i+22,e.source.length-i-22),"undefined"!=typeof a&&(n=a(e.address,n)));var s=e.metadata&&e.metadata.eval;t=t||o.global,r(e.source,e.address,t,n,s)}function o(e){for(var t=[],r=0,a=e.length;a>r;r++)-1==_.call(t,e[r])&&t.push(e[r]);return t}function i(t,r,a,n){"string"!=typeof t&&(n=a,a=r,r=t,t=null),v=!0;var o;if(o="boolean"==typeof a?{declarative:!1,deps:r,execute:n,executingRequire:a}:{declarative:!0,deps:r,declare:a},t)o.name=t,t in e.defined||(e.defined[t]=o);else if(o.declarative){if(g)throw new TypeError("Multiple anonymous System.register calls in the same module file.");g=o}}function s(e){if(!e.register){e.register=i,e.defined||(e.defined={});var t=e.onScriptLoad;e.onScriptLoad=function(e){t(e),g&&(e.metadata.entry=g),v&&(e.metadata.format=e.metadata.format||"register",e.metadata.registered=!0)}}}function l(e,t,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==_.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,n=e.normalizedDeps.length;n>a;a++){var o=e.normalizedDeps[a],i=t.defined[o];if(i&&!i.evaluated){var s=e.groupIndex+(i.declarative!=e.declarative);if(void 0===i.groupIndex||i.groupIndex<s){if(void 0!==i.groupIndex&&(r[i.groupIndex].splice(_.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");i.groupIndex=s}l(i,t,r)}}}}function u(e,t){var r=t.defined[e];if(!r.module){r.groupIndex=0;var a=[];l(r,t,a);for(var n=!!r.declarative==a.length%2,o=a.length-1;o>=0;o--){for(var i=a[o],s=0;s<i.length;s++){var u=i[s];n?c(u,t):m(u,t)}n=!n}}}function f(e){return b[e]||(b[e]={name:e,dependencies:[],exports:{},importers:[]})}function c(e,t){if(!e.module){var r=e.module=f(e.name),a=e.module.exports,n=e.declare.call(t.global,function(e,t){r.locked=!0,a[e]=t;for(var n=0,o=r.importers.length;o>n;n++){var i=r.importers[n];if(!i.locked){var s=_.call(i.dependencies,r);i.setters[s](a)}}return r.locked=!1,t});if(r.setters=n.setters,r.execute=n.execute,!r.setters||!r.execute)throw new TypeError("Invalid System.register form for "+e.name);for(var o=0,i=e.normalizedDeps.length;i>o;o++){var s,l=e.normalizedDeps[o],u=t.defined[l],d=b[l];d?s=d.exports:u&&!u.declarative?s=u.module.exports&&u.module.exports.__esModule?u.module.exports:u.esModule:u?(c(u,t),d=u.module,s=d.exports):s=t.get(l),d&&d.importers?(d.importers.push(r),r.dependencies.push(d)):r.dependencies.push(null),r.setters[o]&&r.setters[o](s)}}}function p(e,t){var r,a=t.defined[e];if(a)a.declarative?h(e,[],t):a.evaluated||m(a,t),r=a.module.exports;else if(r=t.get(e),!r)throw new Error("Unable to load dependency "+e+".");return(!a||a.declarative)&&r&&r.__useDefault?r["default"]:r}function m(e,t){if(!e.module){var r={},a=e.module={exports:r,id:e.name};if(!e.executingRequire)for(var o=0,i=e.normalizedDeps.length;i>o;o++){var s=e.normalizedDeps[o],l=t.defined[s];l&&m(l,t)}e.evaluated=!0;var u=e.execute.call(t.global,function(r){for(var a=0,n=e.deps.length;n>a;a++)if(e.deps[a]==r)return p(e.normalizedDeps[a],t);throw new TypeError("Module "+r+" not declared as a dependency.")},r,a);u&&(a.exports=u),r=a.exports,r&&(r.__esModule||r instanceof x)?e.esModule=r:e.esmExports&&r!==t.global?e.esModule=n(r):e.esModule={"default":r}}}function h(e,t,r){var a=r.defined[e];if(a&&!a.evaluated&&a.declarative){t.push(e);for(var n=0,o=a.normalizedDeps.length;o>n;n++){var i=a.normalizedDeps[n];-1==_.call(t,i)&&(r.defined[i]?h(i,t,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(r.global))}}"undefined"==typeof _&&(_=Array.prototype.indexOf),("undefined"==typeof r||"undefined"!=typeof document&&!document.addEventListener)&&(r=eval),e._extensions=e._extensions||[],e._extensions.push(d);e.__exec=t;var g,v;s(e);var b={},x=e.newModule({}).constructor,w=/System\.register/,S=e.fetch;e.fetch=function(e){var t=this;return s(t),t.defined[e.name]?(e.metadata.format="defined",""):(g=null,v=!1,S.call(t,e))};var z=e.translate;e.translate=function(e){return this.register=i,this.__exec=t,e.metadata.deps=e.metadata.deps||[],Promise.resolve(z.call(this,e)).then(function(t){return(e.metadata.init||e.metadata.exports)&&(e.metadata.format=e.metadata.format||"global"),("register"==e.metadata.format||!e.metadata.format&&e.source.match(w))&&(e.metadata.format="register"),t})};var j=e.instantiate;e.instantiate=function(e){var t,r=this;if(r.defined[e.name])t=r.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],esModule:null,execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if("register"==e.metadata.format){g=null,v=!1;var a=r.global.System;if(r.global.System=r,r.__exec(e),r.global.System=a,g&&(t=g),!t&&y.defined[e.name]&&(t=y.defined[e.name]),!v&&!e.metadata.registered)throw new TypeError(e.name+" detected as System.register but didn't execute.")}if(!t&&"es6"!=e.metadata.format)return{deps:e.metadata.deps,execute:function(){return r.newModule({})}};if(!t)return j.call(this,e);r.defined[e.name]=t,t.deps=o(t.deps),t.name=e.name,t.esmExports=e.metadata.esmExports!==!1;for(var n=[],i=0,s=t.deps.length;s>i;i++)n.push(Promise.resolve(r.normalize(t.deps[i],e.name)));return Promise.all(n).then(function(a){return t.normalizedDeps=a,{deps:t.deps,execute:function(){u(e.name,r),h(e.name,[],r),r.defined[e.name]=void 0;var a=t.module.exports;return t.declarative||(a=t.esModule),r.newModule(a)}}})}}function f(e){function t(e,t,r){if(e.meta[t]={format:"global"},l&&!e.paths[t])try{e.paths[t]=require.resolve(r||t)}catch(a){}}e._extensions.push(f);var r,a,n=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,o=/\$traceurRuntime\s*\./,i=/babelHelpers\s*\./,s=!0,l="undefined"!=typeof process&&"undefined"!=typeof require&&require.resolve,u=e.locate;e.locate=function(e){var r=this;return s&&("traceur"==r.transpiler?(t(r,"traceur","traceur/bin/traceur.js"),r.meta.traceur.exports="traceur",t(r,"traceur-runtime","traceur/bin/traceur-runtime.js")):"babel"==r.transpiler&&(t(r,"babel","babel-core/browser.js"),t(r,"babel-runtime","babel-core/external-helpers.js")),s=!1),u.call(r,e)};var d=e.translate;e.translate=function(e){var t=this;return d.call(t,e).then(function(s){if("es6"==e.metadata.format||!e.metadata.format&&s.match(n))return e.metadata.format="es6",s;if("register"==e.metadata.format){if(!t.global.$traceurRuntime&&e.source.match(o))return t["import"]("traceur-runtime").then(function(){return s});if(!t.global.babelHelpers&&e.source.match(i))return t["import"]("babel/external-helpers").then(function(){return s})}return"traceur"==t.transpiler?Promise.all([r||(r=t.normalize(t.transpiler)),a||(a=t.normalize(t.transpiler+"-runtime"))]).then(function(t){return e.name==t[0]||e.name==t[1]?"(function() { var curSystem = System; "+s+"\nSystem = curSystem; })();":s}):s})}}function c(e){function t(e,t){for(var r=e.split(".");r.length;)t=t[r.shift()];return t}function r(e){function r(e){for(var t={},r=0,a=e.length;a>r;r++)t[e[r]]=!0;return t}if(!e.has("@@global-helpers")){var a,n,o=e.global.hasOwnProperty,i={};e.set("@@global-helpers",e.newModule({prepareGlobal:function(t,s,l){var u,d;if("object"==typeof t){var f=t;s=f.deps,u=f.globals,l=f.exportName,t=f.moduleName,d=f.require}if(s)for(var c=0;c<s.length;c++){var p=i[s[c]];if(p)for(var m in p)e.global[m]=p[m]}if(u&&d)for(var h in u)e.global[h]=d(u[h]);if(!l&&l!==!1&&e.inferGlobals!==!1){a={},n=r(["indexedDB","sessionStorage","localStorage","clipboardData","frames","webkitStorageInfo","toolbar","statusbar","scrollbars","personalbar","menubar","locationbar","webkitIndexedDB","screenTop","screenLeft"]);for(var g in e.global)if(!n[g]&&(!o||e.global.hasOwnProperty(g)))try{a[g]=e.global[g]}catch(v){n[g]=!0}}},retrieveGlobal:function(r,s,l){var u,d,f={};if(l)u=l.call(e.global);else if(s){var c=s.split(".")[0];u=t(s,e.global),f[c]=e.global[c]}else if(s!==!1&&e.inferGlobals!==!1)for(var p in e.global)n[p]||o&&!e.global.hasOwnProperty(p)||p==e.global||a[p]==e.global[p]||(f[p]=e.global[p],u?u!==e.global[p]&&(d=!0):void 0===u&&(u=e.global[p]));return i[r]=f,d?f:u}}))}}e._extensions.push(c),r(e);var a=e.instantiate;e.instantiate=function(e){var t=this;r(t);var n=e.metadata.exports;if(e.metadata.format||(e.metadata.format="global"),e.metadata.globals)for(var o in e.metadata.globals)e.metadata.deps.push(e.metadata.globals[o]);return"global"==e.metadata.format&&(e.metadata.execute=function(r,a,o){t.get("@@global-helpers").prepareGlobal({require:r,moduleName:o.id,exportName:n,deps:e.metadata.deps,globals:e.metadata.globals}),n&&(e.source+='\nthis["'+n+'"] = '+n+";");var i=t.global.define,r=t.global.require;return t.global.define=void 0,t.global.module=void 0,t.global.exports=void 0,t.__exec(e,t.global),t.global.require=r,t.global.define=i,t.get("@@global-helpers").retrieveGlobal(o.id,n,e.metadata.init)}),a.call(t,e)}}function p(e){function t(e){function t(e,t){for(var r=0;r<e.length;r++)if(e[r][0]<t.index&&e[r][1]>t.index)return!0;return!1}a.lastIndex=n.lastIndex=o.lastIndex=0;var r,i=[],s=[],l=[];if(e.length/e.split("\n").length<200){for(;r=o.exec(e);)s.push([r.index,r.index+r[0].length]);for(;r=n.exec(e);)t(s,r)||l.push([r.index,r.index+r[0].length])}for(;r=a.exec(e);)if(!t(s,r)&&!t(l,r)){var u=r[1].substr(1,r[1].length-2);if(u.match(/"|'/))continue;i.push(u)}return i}e._extensions.push(p);var r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,a=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,n=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,o=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g,i=e.instantiate;e.instantiate=function(n){return n.metadata.format||(r.lastIndex=0,a.lastIndex=0,(a.exec(n.source)||r.exec(n.source))&&(n.metadata.format="cjs")),"cjs"==n.metadata.format&&(n.metadata.deps=n.metadata.deps?n.metadata.deps.concat(t(n.source)):t(n.source),n.metadata.executingRequire=!0,n.metadata.execute=function(t,r,a){var o=(n.address||"").split("/");o.pop(),o=o.join("/"),y._nodeRequire&&(o=o.substr(5));var i=(e.global._g={global:e.global,exports:r,module:a,require:t,__filename:y._nodeRequire?n.address.substr(5):n.address,__dirname:o},e.global.define);e.global.define=void 0;var s={name:n.name,source:"(function() {\n(function(global, exports, module, require, __filename, __dirname){\n"+n.source+"\n}).call(_g.exports, _g.global, _g.exports, _g.module, _g.require, _g.__filename, _g.__dirname);})();",address:n.address};e.__exec(s),e.global.define=i,e.global._g=void 0}),i.call(this,n)}}function m(e){function t(e,t){function r(e,t){for(var r=0;r<e.length;r++)if(e[r][0]<t&&e[r][1]>t)return!0;return!1}for(var a,n=[];a=f.exec(e);)n.push([a.index,a.index+a[0].length]);e=e.replace(d,function(e,t,a,o,i,s){return r(n,s+1)?e:""});var o=e.match(v),i=(o[1].split(",")[t]||"require").replace(b,""),s=x[i]||(x[i]=new RegExp(h+i+g,"g"));s.lastIndex=0;for(var a,l=[];a=s.exec(e);)l.push(a[2]||a[3]);return l}function r(e,t,a,n){var o=this;if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if(!(e instanceof Array)){if("string"==typeof e){var i=o.get(e);return i.__useDefault?i["default"]:i}throw new TypeError("Invalid require")}Promise.all(e.map(function(e){return o["import"](e,n)})).then(function(e){t&&t.apply(null,e)},a)}function a(e,t,a){return function(n,o,i){return"string"==typeof n?t(n):r.call(a,n,o,i,{name:e})}}function n(e){function r(r,n,o){"string"!=typeof r&&(o=n,n=r,r=null),n instanceof Array||(o=n,n=["require","exports","module"]),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===n[n.length-1]&&n.pop();var i,s,l;if(-1!=(i=_.call(n,"require"))){n.splice(i,1);var u=o.toString();n=n.concat(t(u,i))}-1!=(s=_.call(n,"exports"))&&n.splice(s,1),-1!=(l=_.call(n,"module"))&&n.splice(l,1);var d={deps:n,execute:function(t,r,u){for(var d=[],f=0;f<n.length;f++)d.push(t(n[f]));u.uri=e.baseURL+u.id,u.config=function(){},-1!=l&&d.splice(l,0,u),-1!=s&&d.splice(s,0,r),-1!=i&&d.splice(i,0,a(u.id,t,e));var p=o.apply(c,d);return"undefined"==typeof p&&u&&(p=u.exports),"undefined"!=typeof p?p:void 0}};if(r)y=0!=n.length||y||w?null:d,w=!0,e.register(r,d.deps,!1,d.execute);else{if(y)throw new TypeError("Multiple defines for anonymous module");y=d}}var n=e.onScriptLoad;e.onScriptLoad=function(e){n(e),(y||w)&&(e.metadata.format="defined",e.metadata.registered=!0),y&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(y.deps):y.deps,e.metadata.execute=y.execute)},r.amd={},e.amdDefine=r}function o(e){e.amdDefine||n(e),y=null,w=null;var t=e.global;S=t.module,z=t.exports,j=t.define,t.module=void 0,t.exports=void 0,t.define&&t.define===e.amdDefine||(t.define=e.amdDefine)}function i(e){var t=e.global;t.define=j,t.module=S,t.exports=z}var s="undefined"!=typeof module&&module.exports;e._extensions.push(m);var l=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,u=/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm,d=/(\/\*([\s\S]*?)\*\/|([^:(?!\\)]|^)\/\/(.*)$)/gm,f=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g,p=/(function|var|let|const|return|export|\"|\'|\(|\=)$/i,h="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",g="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",v=/\(([^\)]*)\)/,b=/^\s+|\s+$/g,x={};e.amdRequire=function(){return r.apply(this,arguments)};var y,w,S,z,j;if(n(e),e.scriptLoader){var E=e.fetch;e.fetch=function(e){return o(this),E.call(this,e)}}var L=e.instantiate;e.instantiate=function(e){var t=this,r=e.source.replace(u,"$1"),a=r.match(l);if("amd"==e.metadata.format||!e.metadata.format&&a){var n=r.substring(0,r.indexOf(a[0])),d=n.replace(b,"");if(!p.test(d)){if(e.metadata.format="amd",t.execute!==!1&&(o(t),t.__exec(e),i(t),!y&&!w&&!s))throw new TypeError("AMD module "+e.name+" did not define");y&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(y.deps):y.deps,e.metadata.execute=y.execute)}}return L.call(t,e)}}function h(e){function t(e,t){return e.length<t.length?!1:e.substr(0,t.length)!=t?!1:e[t.length]&&"/"!=e[t.length]?!1:!0}function r(e){for(var t=1,r=0,a=e.length;a>r;r++)"/"===e[r]&&t++;return t}function a(e,t,r){return r+e.substr(t)}function n(e,n,o){var i,s,l,u,d=0,f=0;if(n)for(var c in o.map){var p=o.map[c];if("object"==typeof p&&t(n,c)&&(l=r(c),!(f>=l)))for(var m in p)t(e,m)&&(u=r(m),d>=u||(i=m,d=u,s=c,f=l))}if(i)return a(e,i.length,o.map[s][i]);for(var c in o.map){var p=o.map[c];if("string"==typeof p&&t(e,c)){var u=r(c);d>=u||(i=c,d=u)}}return i?a(e,i.length,o.map[i]):e}e.map=e.map||{},e._extensions.push(h);var o=e.normalize;e.normalize=function(e,t,r){var a=this;a.map||(a.map={});var i=!1;return"/"==e.substr(e.length-1,1)&&(i=!0,e+="#"),Promise.resolve(o.call(a,e,t,r)).then(function(e){if(e=n(e,t,a),i){var r=e.split("/");r.pop();var o=r.pop();r.push(o),r.push(o),e=r.join("/")}return e})}}function g(e){"undefined"==typeof _&&(_=Array.prototype.indexOf),e._extensions.push(g);var t=e.normalize;e.normalize=function(e,r,a){var n,o=this;return r&&-1!=(n=r.indexOf("!"))&&(r=r.substr(0,n)),Promise.resolve(t.call(o,e,r,a)).then(function(e){var t=e.lastIndexOf("!");if(-1!=t){var n=e.substr(0,t),i=e.substr(t+1)||n.substr(n.lastIndexOf(".")+1);return new Promise(function(e){e(o.normalize(i,r,a))}).then(function(e){return i=e,o.normalize(n,r,a,!0)}).then(function(e){return e+"!"+i})}return e})};var r=e.locate;e.locate=function(e){var t=this,a=e.name;if(this.defined&&this.defined[a])return r.call(this,e);var n=a.lastIndexOf("!");if(-1!=n){var o=a.substr(n+1);e.name=a.substr(0,n);var i=t.pluginLoader||t;return i["import"](o,{metadata:{importingModuleName:a}}).then(function(){var r=i.get(o);return r=r["default"]||r,r.build===!1&&t.pluginLoader&&(e.metadata.build=!1),e.metadata.plugin=r,e.metadata.pluginName=o,e.metadata.pluginArgument=e.name,e.metadata.buildType=r.buildType||"js",r.locate?r.locate.call(t,e):Promise.resolve(t.locate(e)).then(function(e){return e.replace(/\.js$/,"")})})}return r.call(this,e)};var a=e.fetch;e.fetch=function(e){var t=this;return e.metadata.build===!1&&t.pluginLoader?"":e.metadata.plugin&&e.metadata.plugin.fetch&&!e.metadata.pluginFetchCalled?(e.metadata.pluginFetchCalled=!0,e.metadata.plugin.fetch.call(t,e,a)):a.call(t,e)};var n=e.translate;e.translate=function(e){var t=this;return e.metadata.plugin&&e.metadata.plugin.translate?Promise.resolve(e.metadata.plugin.translate.call(t,e)).then(function(r){return"string"==typeof r&&(e.source=r),n.call(t,e)}):n.call(t,e)};var o=e.instantiate;e.instantiate=function(e){var t=this;return e.metadata.plugin&&e.metadata.plugin.instantiate?Promise.resolve(e.metadata.plugin.instantiate.call(t,e)).then(function(r){return r?r:o.call(t,e)}):e.metadata.plugin&&e.metadata.plugin.build===!1?(e.metadata.format="defined",e.metadata.deps.push(e.metadata.pluginName),e.metadata.execute=function(){return t.newModule({})},o.call(t,e)):o.call(t,e)}}function v(e){"undefined"==typeof _&&(_=Array.prototype.indexOf),e._extensions.push(v),e.bundles=e.bundles||{};var t=e.fetch;e.fetch=function(e){var r=this;if(r.trace)return t.call(this,e);r.bundles||(r.bundles={});for(var a in r.bundles)if(-1!=_.call(r.bundles[a],e.name))return Promise.resolve(r.normalize(a)).then(function(e){return r.bundles[e]=r.bundles[e]||r.bundles[a],r.meta=r.meta||{},r.meta[e]=r.meta[e]||{},r.meta[e].bundle=!0,r.load(e)}).then(function(){return""});return t.call(this,e)}}function b(e){function t(e){return parseInt(e,10)}function r(e){var r=e.match(s);return r?{major:t(r[1]),minor:t(r[2]),patch:t(r[3]),pre:r[4]&&r[4].split(".")}:{tag:e}}function a(e,r){if(e.tag&&r.tag)return 0;if(e.tag)return-1;if(r.tag)return 1;for(var a=0;a<u.length;a++){var n=u[a],o=e[n],i=r[n];if(o!=i)return isNaN(o)?-1:isNaN(i)?1:o>i?1:-1}if(!e.pre&&!r.pre)return 0;if(!e.pre)return 1;if(!r.pre)return-1;for(var a=0,s=Math.min(e.pre.length,r.pre.length);s>a;a++)if(e.pre[a]!=r.pre[a]){var d=e.pre[a].match(l),f=r.pre[a].match(l);return d&&!f?-1:f&&!d?1:d&&f?t(e.pre[a])>t(r.pre[a])?1:-1:e.pre[a]>r.pre[a]?1:-1}return e.pre.length==r.pre.length?0:e.pre.length>r.pre.length?1:-1}function n(e,t){var r=e.version;return r.tag?r.tag==t.tag:1==a(r,t)?!1:isNaN(t.minor)||isNaN(t.patch)?!1:t.pre?r.major!=t.major||r.minor!=t.minor||r.patch!=t.patch?!1:e.semver||e.fuzzy||r.pre.join(".")==t.pre.join("."):e.semver?0==r.major&&isNaN(r.minor)?t.major<1:r.major>=1?r.major==t.major:r.minor>=1?r.minor==t.minor:(r.patch||0)==t.patch:e.fuzzy?t.major==r.major&&t.minor<(r.minor||0)+1:!r.pre&&r.major==t.major&&r.minor==t.minor&&r.patch==t.patch}function o(e){var t={};((t.semver="^"==e.substr(0,1))||(t.fuzzy="~"==e.substr(0,1)))&&(e=e.substr(1));var a=t.version=r(e);return a.tag?t:(t.fuzzy||t.semver||!isNaN(a.minor)&&!isNaN(a.patch)||(t.fuzzy=!0),t.fuzzy&&isNaN(a.minor)&&(t.semver=!0,t.fuzzy=!1),t.semver&&!isNaN(a.minor)&&isNaN(a.patch)&&(t.semver=!1,t.fuzzy=!0),t)}function i(e,t){return a(r(e),r(t))}"undefined"==typeof _&&(_=Array.prototype.indexOf),e._extensions.push(b);var s=/^(\d+)(?:\.(\d+)(?:\.(\d+)(?:-([\da-z-]+(?:\.[\da-z-]+)*)(?:\+([\da-z-]+(?:\.[\da-z-]+)*))?)?)?)?$/i,l=/^\d+$/,u=["major","minor","patch"];e.versions=e.versions||{};var d=e.normalize;e.normalize=function(e,t,a){this.versions||(this.versions={});var s,l,u=this.versions,f=-1!=e.indexOf("!")?0:e.lastIndexOf("@");if(f>0){var c=e.substr(f+1,e.length-f-1).split("/");s=c[0],l=c.length,e=e.substr(0,f)+e.substr(f+s.length+1,e.length-f-s.length-1)}return Promise.resolve(d.call(this,e,t,a)).then(function(e){var t=-1!=e.indexOf("!")?0:e.indexOf("@");if(s&&(-1==t||0==t)){var a=e.split("/");a[a.length-l]+="@"+s,e=a.join("/"),t=e.indexOf("@")}var d,f;if(-1==t||0==t){for(var c in u)if(f=u[c],e.substr(0,c.length)==c&&(d=e.substr(c.length,1),!d||"/"==d))return c+"@"+("string"==typeof f?f:f[f.length-1])+e.substr(c.length);return e}var p=e.substr(0,t),m=e.substr(t+1).split("/")[0],h=m.length,g=o(e.substr(t+1).split("/")[0]);f=u[e.substr(0,t)]||[],"string"==typeof f&&(f=[f]);for(var v=f.length-1;v>=0;v--)if(n(g,r(f[v])))return p+"@"+f[v]+e.substr(t+h+1);var b;return g.semver?b=0!=g.version.major||isNaN(g.version.minor)?g.version.major:"0."+g.version.minor:g.fuzzy?b=g.version.major+"."+g.version.minor:(b=m,f.push(m),f.sort(i),u[p]=1==f.length?f[0]:f),p+"@"+b+e.substr(t+h+1)})}}function x(e){e.depCache=e.depCache||{},e._extensions.push(x);var t=e.locate;e.locate=function(e){var r=this;r.depCache||(r.depCache={});var a=r.depCache[e.name];if(a)for(var n=0;n<a.length;n++)r.load(a[n]);return t.call(r,e)}}e.upgradeSystemLoader=void 0;var y,_=Array.prototype.indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(this[t]===e)return t;return-1},w="undefined"!=typeof process&&!!process.platform.match(/^win/);!function(){var t=e.System;y=e.System=new LoaderPolyfill(t),y.baseURL=t.baseURL,y.paths={"*":"*.js"},y.originalSystem=t}(),y.noConflict=function(){e.SystemJS=y,e.System=y.originalSystem};var S=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(z){S=!1}var j;!function(){try{Object.defineProperty({},"a",{})&&(j=Object.defineProperty)}catch(e){j=function(e,t,r){try{e[t]=r.value||r.get.call(e)}catch(a){}}}}();var E=e.System.originalSystem;s(y),l(y),u(y),d(y),f(y),c(y),p(y),m(y),h(y),g(y),v(y),b(y),x(y)};var t,r;!function(){function a(e,r){if(!e.originalErr)for(var a=(e.stack||e.message||e).toString().split("\n"),n=[],o=0;o<a.length;o++)("undefined"==typeof t||-1==a[o].indexOf(t.src))&&n.push(a[o]);var i=(n?n.join("\n	"):e.message)+"\n	"+r;s||(i=i.replace(isWindows?/file:\/\/\//g:/file:\/\//g,""));var l=h?new Error(i,e.fileName,e.lineNumber):new Error(i);return s?l.stack=null:l.stack=i,l.originalErr=e.originalErr||e,l}var n,o,i="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,s="undefined"!=typeof window&&"undefined"!=typeof document,l="object"==typeof process&&"[object process]"==={}.toString.call(process),u=!!(l&&global.nw&&global.nw.process),d=s&&!u&&window.chrome&&window.chrome.extension;if(n=function(e,t,r){try{new Function(e).call(r)}catch(n){throw a(n,"Evaluating "+t)}},i)e.upgradeSystemLoader();else if(!s&&!u||d){if(l){var f=require("steal-es6-module-loader");e.System=f.System,e.Loader=f.Loader,e.upgradeSystemLoader(),module.exports=e.System;var c=require("vm");n=function(e){c.runInThisContext(e)}}}else{var p,m=document.getElementsByTagName("script");t=m[m.length-1],o=function(e){p||(p=document.head||document.body||document.documentElement);var t=document.createElement("script");t.text=e;var r,a=window.onerror;if(window.onerror=function(e){r=e},p.appendChild(t),p.removeChild(t),window.onerror=a,r)throw r},e.upgradeSystemLoader()}var h="_"==new Error(0,"_").fileName;r=function(e,t,r,a,i){e+="\n//# sourceURL="+t+(a?"\n//# sourceMappingURL="+a:"");var s="script"===i&&"function"==typeof o;s?o(e):n(e,t,r)}}()}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:global);
//# sourceMappingURL=system-csp.js.map
