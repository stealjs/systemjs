!function($__global){$__global.upgradeSystemLoader=function(){function e(e){var t=String(e).replace(/^\s+|\s+$/g,"").match(/^([^:\/?#]+:)?(\/\/(?:[^:@\/?#]*(?::[^:@\/?#]*)?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);return t?{href:t[0]||"",protocol:t[1]||"",authority:t[2]||"",host:t[3]||"",hostname:t[4]||"",port:t[5]||"",pathname:t[6]||"",search:t[7]||"",hash:t[8]||""}:null}function t(t,r){function a(e){var t=[];return e.replace(/^(\.\.?(\/|$))+/,"").replace(/\/(\.(\/|$))+/g,"/").replace(/\/\.\.$/,"/../").replace(/\/?[^\/]*/g,function(e){"/.."===e?t.pop():t.push(e)}),t.join("").replace(/^\//,"/"===e.charAt(0)?"/":"")}return g&&(r=r.replace(/\\/g,"/")),r=e(r||""),t=e(t||""),r&&t?(r.protocol||t.protocol)+(r.protocol||r.authority?r.authority:t.authority)+a(r.protocol||r.authority||"/"===r.pathname.charAt(0)?r.pathname:r.pathname?(t.authority&&!t.pathname?"/":"")+t.pathname.slice(0,t.pathname.lastIndexOf("/")+1)+r.pathname:t.pathname)+(r.protocol||r.authority||r.pathname?r.search:r.search||t.search)+r.hash:null}function r(e){function a(e,t){t._extensions=[];for(var r=0,a=e.length;a>r;r++)e[r](t)}var n=e["import"];e["import"]=function(e,t){return n.call(this,e,t).then(function(e){return e.__useDefault?e["default"]:e})},e.set("@empty",e.newModule({})),"undefined"!=typeof require&&(e._nodeRequire=require),e.config=function(e){for(var t in e){var r=e[t];if("object"!=typeof r||r instanceof Array)this[t]=r;else{this[t]=this[t]||{};for(var a in r)this[t][a]=r[a]}}};var o;if("undefined"==typeof window&&"undefined"==typeof WorkerGlobalScope)o="file:"+process.cwd()+"/",g&&(o=o.replace(/\\/g,"/"));else if("undefined"==typeof window)o=e.global.location.href;else if(o=document.baseURI,!o){var i=document.getElementsByTagName("base");o=i[0]&&i[0].href||window.location.href}var s,l=e.locate;e.locate=function(e){return this.baseURL!=s&&(s=t(o,this.baseURL),"/"!=s.substr(s.length-1,1)&&(s+="/"),this.baseURL=s),Promise.resolve(l.call(this,e))},e._extensions=e._extensions||[],e._extensions.push(r),e.clone=function(){var e=this,t=new LoaderPolyfill(b);return t.baseURL=e.baseURL,t.paths={"*":"*.js"},a(e._extensions,t),t}}function a(e){"undefined"==typeof v&&(v=Array.prototype.indexOf),e._extensions.push(a);var t=document.getElementsByTagName("head")[0];e.onScriptLoad=function(){},e.fetch=function(r){return new Promise(function(a,n){function o(){l.readyState&&"loaded"!=l.readyState&&"complete"!=l.readyState||(s(),e.onScriptLoad(r),r.metadata.registered||n(r.address+" did not call System.register or AMD define"),a(""))}function i(e){s(),n(e)}function s(){l.detachEvent?l.detachEvent("onreadystatechange",o):(l.removeEventListener("load",o,!1),l.removeEventListener("error",i,!1)),t.removeChild(l)}var l=document.createElement("script");l.async=!0,l.attachEvent?l.attachEvent("onreadystatechange",o):(l.addEventListener("load",o,!1),l.addEventListener("error",i,!1)),l.src=r.address,t.appendChild(l)})},e.scriptLoader=!0}function n(e){function t(e,t){var r=e.meta&&e.meta[t.name];if(r)for(var a in r)t.metadata[a]=t.metadata[a]||r[a]}var r=/^(\s*\/\*.*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/,a=/\/\*.*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;e.meta={},e._extensions=e._extensions||[],e._extensions.push(n);var o=e.locate;e.locate=function(e){return t(this,e),o.call(this,e)};var i=e.translate;e.translate=function(e){var n=e.source.match(r);if(n)for(var o=n[0].match(a),s=0;s<o.length;s++){var l=o[s].length,u=o[s].substr(0,1);if(";"==o[s].substr(l-1,1)&&l--,'"'==u||"'"==u){var d=o[s].substr(1,o[s].length-3),c=d.substr(0,d.indexOf(" "));if(c){var f=d.substr(c.length+1,d.length-c.length-1);e.metadata[c]instanceof Array?e.metadata[c].push(f):e.metadata[c]||(e.metadata[c]=f)}}}return t(this,e),i.call(this,e)}}function o(e){function r(e){var r,a=e.source.lastIndexOf("\n");-1!=a&&"//# sourceMappingURL="==e.source.substr(a+1,21)&&(r=e.source.substr(a+22,e.source.length-a-22),"undefined"!=typeof t&&(r=t(e.address,r))),__eval(e.source,e.address,r)}function a(e){for(var t=[],r=0,a=e.length;a>r;r++)-1==v.call(t,e[r])&&t.push(e[r]);return t}function n(t,r,a,n){"string"!=typeof t&&(n=a,a=r,r=t,t=null),g=!0;var o;if(o="boolean"==typeof a?{declarative:!1,deps:r,execute:n,executingRequire:a}:{declarative:!0,deps:r,declare:a},t)o.name=t,t in e.defined||(e.defined[t]=o);else if(o.declarative){if(m)throw new TypeError("Multiple anonymous System.register calls in the same module file.");m=o}}function i(e){if(!e.register){e.register=n,e.defined||(e.defined={});var t=e.onScriptLoad;e.onScriptLoad=function(e){t(e),m&&(e.metadata.entry=m),g&&(e.metadata.format=e.metadata.format||"register",e.metadata.registered=!0)}}}function s(e,t,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var a=0,n=e.normalizedDeps.length;n>a;a++){var o=e.normalizedDeps[a],i=t.defined[o];if(i&&!i.evaluated){var l=e.groupIndex+(i.declarative!=e.declarative);if(void 0===i.groupIndex||i.groupIndex<l){if(void 0!==i.groupIndex&&(r[i.groupIndex].splice(v.call(r[i.groupIndex],i),1),0==r[i.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");i.groupIndex=l}s(i,t,r)}}}}function l(e,t){var r=t.defined[e];if(!r.module){r.groupIndex=0;var a=[];s(r,t,a);for(var n=!!r.declarative==a.length%2,o=a.length-1;o>=0;o--){for(var i=a[o],l=0;l<i.length;l++){var u=i[l];n?d(u,t):f(u,t)}n=!n}}}function u(e){return b[e]||(b[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(e,t){if(!e.module){var r=e.module=u(e.name),a=e.module.exports,n=e.declare.call(t.global,function(e,t){r.locked=!0,a[e]=t;for(var n=0,o=r.importers.length;o>n;n++){var i=r.importers[n];if(!i.locked){var s=v.call(i.dependencies,r);i.setters[s](a)}}return r.locked=!1,t});if(r.setters=n.setters,r.execute=n.execute,!r.setters||!r.execute)throw new TypeError("Invalid System.register form for "+e.name);for(var o=0,i=e.normalizedDeps.length;i>o;o++){var s,l=e.normalizedDeps[o],c=t.defined[l],f=b[l];f?s=f.exports:c&&!c.declarative?s=c.module.exports&&c.module.exports.__esModule?c.module.exports:{"default":c.module.exports,__useDefault:!0}:c?(d(c,t),f=c.module,s=f.exports):s=t.get(l),f&&f.importers?(f.importers.push(r),r.dependencies.push(f)):r.dependencies.push(null),r.setters[o]&&r.setters[o](s)}}}function c(e,t){var r,a=t.defined[e];if(a)a.declarative?p(e,[],t):a.evaluated||f(a,t),r=a.module.exports;else if(r=t.get(e),!r)throw new Error("Unable to load dependency "+e+".");return(!a||a.declarative)&&r&&r.__useDefault?r["default"]:r}function f(e,t){if(!e.module){var r={},a=e.module={exports:r,id:e.name};if(!e.executingRequire)for(var n=0,o=e.normalizedDeps.length;o>n;n++){var i=e.normalizedDeps[n],s=t.defined[i];s&&f(s,t)}e.evaluated=!0;var l=e.execute.call(t.global,function(r){for(var a=0,n=e.deps.length;n>a;a++)if(e.deps[a]==r)return c(e.normalizedDeps[a],t);throw new TypeError("Module "+r+" not declared as a dependency.")},r,a);l&&(a.exports=l)}}function p(e,t,r){var a=r.defined[e];if(a&&!a.evaluated&&a.declarative){t.push(e);for(var n=0,o=a.normalizedDeps.length;o>n;n++){var i=a.normalizedDeps[n];-1==v.call(t,i)&&(r.defined[i]?p(i,t,r):r.get(i))}a.evaluated||(a.evaluated=!0,a.module.execute.call(r.global))}}"undefined"==typeof v&&(v=Array.prototype.indexOf),("undefined"==typeof __eval||"undefined"!=typeof document&&!document.addEventListener)&&(__eval=0||eval),e._extensions=e._extensions||[],e._extensions.push(o);e.__exec=r;var m,g;i(e);var b={},x=/System\.register/,y=e.fetch;e.fetch=function(e){var t=this;return i(t),t.defined[e.name]?(e.metadata.format="defined",""):(m=null,g=!1,y.call(t,e))};var _=e.translate;e.translate=function(e){return this.register=n,this.__exec=r,e.metadata.deps=e.metadata.deps||[],Promise.resolve(_.call(this,e)).then(function(t){return(e.metadata.init||e.metadata.exports)&&(e.metadata.format=e.metadata.format||"global"),("register"==e.metadata.format||!e.metadata.format&&e.source.match(x))&&(e.metadata.format="register"),t})};var w=e.instantiate;e.instantiate=function(e){var t,r=this;if(r.defined[e.name])t=r.defined[e.name],t.deps=t.deps.concat(e.metadata.deps);else if(e.metadata.entry)t=e.metadata.entry;else if(e.metadata.execute)t={declarative:!1,deps:e.metadata.deps||[],execute:e.metadata.execute,executingRequire:e.metadata.executingRequire};else if("register"==e.metadata.format){m=null,g=!1;var n=r.global.System;if(r.global.System=r,r.__exec(e),r.global.System=n,m&&(t=m),!t&&h.defined[e.name]&&(t=h.defined[e.name]),!g&&!e.metadata.registered)throw new TypeError(e.name+" detected as System.register but didn't execute.")}if(!t&&"es6"!=e.metadata.format)return{deps:e.metadata.deps,execute:function(){return r.newModule({})}};if(!t)return w.call(this,e);r.defined[e.name]=t,t.deps=a(t.deps),t.name=e.name;for(var o=[],i=0,s=t.deps.length;s>i;i++)o.push(Promise.resolve(r.normalize(t.deps[i],e.name)));return Promise.all(o).then(function(a){return t.normalizedDeps=a,{deps:t.deps,execute:function(){l(e.name,r),p(e.name,[],r),r.defined[e.name]=void 0;var a=t.module.exports;return(!a||!t.declarative&&a.__esModule!==!0)&&(a={"default":a,__useDefault:!0}),r.newModule(a)}}})}}function i(e){function t(e,t,r){if(e.meta[t]={format:"global"},u&&!e.paths[t])try{e.paths[t]=require.resolve(r||t)}catch(a){}}e._extensions.push(i);var r,a,n=/(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/,o=/\$traceurRuntime\s*\./,s=/babelHelpers\s*\./,l=!0,u="undefined"!=typeof process&&"undefined"!=typeof require&&require.resolve,d=e.locate;e.locate=function(e){var r=this;return l&&("traceur"==r.transpiler?(t(r,"traceur","traceur/bin/traceur.js"),r.meta.traceur.exports="traceur",t(r,"traceur-runtime","traceur/bin/traceur-runtime.js")):"babel"==r.transpiler&&(t(r,"babel","babel-core/browser.js"),t(r,"babel-runtime","babel-core/external-helpers.js")),l=!1),d.call(r,e)};var c=e.translate;e.translate=function(e){var t=this;return c.call(t,e).then(function(i){if("es6"==e.metadata.format||!e.metadata.format&&i.match(n))return e.metadata.format="es6",i;if("register"==e.metadata.format){if(!t.global.$traceurRuntime&&e.source.match(o))return t["import"]("traceur-runtime").then(function(){return i});if(!t.global.babelHelpers&&e.source.match(s))return t["import"]("babel/external-helpers").then(function(){return i})}return"traceur"==t.transpiler?Promise.all([r||(r=t.normalize(t.transpiler)),a||(a=t.normalize(t.transpiler+"-runtime"))]).then(function(t){return e.name==t[0]||e.name==t[1]?"(function() { var curSystem = System; "+i+"\nSystem = curSystem; })();":i}):i})}}function s(e){function t(e,t){for(var r=e.split(".");r.length;)t=t[r.shift()];return t}function r(e){function r(e){for(var t={},r=0,a=e.length;a>r;r++)t[e[r]]=!0;return t}if(!e.has("@@global-helpers")){var a,n,o=e.global.hasOwnProperty,i={};e.set("@@global-helpers",e.newModule({prepareGlobal:function(t,s,l){for(var u=0;u<s.length;u++){var d=i[s[u]];if(d)for(var c in d)e.global[c]=d[c]}if(!l&&l!==!1&&e.inferGlobals!==!1){a={},n=r(["indexedDB","sessionStorage","localStorage","clipboardData","frames","webkitStorageInfo","toolbar","statusbar","scrollbars","personalbar","menubar","locationbar","webkitIndexedDB","screenTop","screenLeft"]);for(var f in e.global)if(!n[f]&&(!o||e.global.hasOwnProperty(f)))try{a[f]=e.global[f]}catch(p){n[f]=!0}}},retrieveGlobal:function(r,s,l){var u,d,c={};if(l)u=l.call(e.global);else if(s){var f=s.split(".")[0];u=t(s,e.global),c[f]=e.global[f]}else if(s!==!1&&e.inferGlobals!==!1)for(var p in e.global)n[p]||o&&!e.global.hasOwnProperty(p)||p==e.global||a[p]==e.global[p]||(c[p]=e.global[p],u?u!==e.global[p]&&(d=!0):void 0===u&&(u=e.global[p]));return i[r]=c,d?c:u}}))}}e._extensions.push(s),r(e);var a=e.instantiate;e.instantiate=function(e){var t=this;r(t);var n=e.metadata.exports;return e.metadata.format||(e.metadata.format="global"),"global"==e.metadata.format&&(e.metadata.execute=function(r,a,o){t.get("@@global-helpers").prepareGlobal(o.id,e.metadata.deps,n),n&&(e.source+='\nthis["'+n+'"] = '+n+";");var i=t.global.define,r=t.global.require;return t.global.define=void 0,t.global.module=void 0,t.global.exports=void 0,t.__exec(e),t.global.require=r,t.global.define=i,t.get("@@global-helpers").retrieveGlobal(o.id,n,e.metadata.init)}),a.call(t,e)}}function l(e){function t(e){function t(e,t){for(var r=0;r<e.length;r++)if(e[r][0]<t.index&&e[r][1]>t.index)return!0;return!1}a.lastIndex=n.lastIndex=o.lastIndex=0;var r,i=[],s=[],l=[];if(e.length/e.split("\n").length<200){for(;r=o.exec(e);)s.push([r.index,r.index+r[0].length]);for(;r=n.exec(e);)t(s,r)||l.push([r.index,r.index+r[0].length])}for(;r=a.exec(e);)if(!t(s,r)&&!t(l,r)){var u=r[1].substr(1,r[1].length-2);if(u.match(/"|'/))continue;i.push(u)}return i}e._extensions.push(l);var r=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/,a=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g,n=/(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,o=/("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g,i=e.instantiate;e.instantiate=function(n){return n.metadata.format||(r.lastIndex=0,a.lastIndex=0,(a.exec(n.source)||r.exec(n.source))&&(n.metadata.format="cjs")),"cjs"==n.metadata.format&&(n.metadata.deps=n.metadata.deps?n.metadata.deps.concat(t(n.source)):t(n.source),n.metadata.executingRequire=!0,n.metadata.execute=function(t,r,a){var o=(n.address||"").split("/");o.pop(),o=o.join("/"),h._nodeRequire&&(o=o.substr(5));var i=(e.global._g={global:e.global,exports:r,module:a,require:t,__filename:h._nodeRequire?n.address.substr(5):n.address,__dirname:o},e.global.define);e.global.define=void 0;var s={name:n.name,source:"(function() {\n(function(global, exports, module, require, __filename, __dirname){\n"+n.source+"\n}).call(_g.exports, _g.global, _g.exports, _g.module, _g.require, _g.__filename, _g.__dirname);})();",address:n.address};e.__exec(s),e.global.define=i,e.global._g=void 0}),i.call(this,n)}}function u(e){function t(e,t){e=e.replace(c,"");var r=e.match(m),a=(r[1].split(",")[t]||"require").replace(h,""),n=g[a]||(g[a]=new RegExp(f+a+p,"g"));n.lastIndex=0;for(var o,i=[];o=n.exec(e);)i.push(o[2]||o[3]);return i}function r(e,t,a,n){var o=this;if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if(!(e instanceof Array)){if("string"==typeof e){var i=o.get(e);return i.__useDefault?i["default"]:i}throw new TypeError("Invalid require")}Promise.all(e.map(function(e){return o["import"](e,n)})).then(function(e){t&&t.apply(null,e)},a)}function a(e,t,a){return function(n,o,i){return"string"==typeof n?t(n):r.call(a,n,o,i,{name:e})}}function n(e){function r(r,n,o){"string"!=typeof r&&(o=n,n=r,r=null),n instanceof Array||(o=n,n=["require","exports","module"]),"function"!=typeof o&&(o=function(e){return function(){return e}}(o)),void 0===n[n.length-1]&&n.pop();var i,l,u;if(-1!=(i=v.call(n,"require"))){n.splice(i,1);var d=o.toString();n=n.concat(t(d,i))}-1!=(l=v.call(n,"exports"))&&n.splice(l,1),-1!=(u=v.call(n,"module"))&&n.splice(u,1);var c={deps:n,execute:function(t,r,d){for(var c=[],f=0;f<n.length;f++)c.push(t(n[f]));d.uri=e.baseURL+d.id,d.config=function(){},-1!=u&&c.splice(u,0,d),-1!=l&&c.splice(l,0,r),-1!=i&&c.splice(i,0,a(d.id,t,e));var p=o.apply(s,c);return"undefined"==typeof p&&d&&(p=d.exports),"undefined"!=typeof p?p:void 0}};if(r)b=0!=n.length||b||x?null:c,x=!0,e.register(r,c.deps,!1,c.execute);else{if(b)throw new TypeError("Multiple defines for anonymous module");b=c}}var n=e.onScriptLoad;e.onScriptLoad=function(e){n(e),(b||x)&&(e.metadata.format="defined",e.metadata.registered=!0),b&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(b.deps):b.deps,e.metadata.execute=b.execute)},r.amd={},e.amdDefine=r}function o(e){e.amdDefine||n(e),b=null,x=null;var t=e.global;y=t.module,_=t.exports,w=t.define,t.module=void 0,t.exports=void 0,t.define&&t.define===e.amdDefine||(t.define=e.amdDefine)}function i(e){var t=e.global;t.define=w,t.module=y,t.exports=_}var l="undefined"!=typeof module&&module.exports;e._extensions.push(u);var d=/(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/,c=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,f="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",p="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",m=/\(([^\)]*)\)/,h=/^\s+|\s+$/g,g={};e.amdRequire=function(){return r.apply(this,arguments)};var b,x,y,_,w;if(n(e),e.scriptLoader){var S=e.fetch;e.fetch=function(e){return o(this),S.call(this,e)}}var z=e.instantiate;e.instantiate=function(e){var t=this;if("amd"==e.metadata.format||!e.metadata.format&&e.source.match(d)){if(e.metadata.format="amd",t.execute!==!1&&(o(t),t.__exec(e),i(t),!b&&!x&&!l))throw new TypeError("AMD module "+e.name+" did not define");b&&(e.metadata.deps=e.metadata.deps?e.metadata.deps.concat(b.deps):b.deps,e.metadata.execute=b.execute)}return z.call(t,e)}}function d(e){function t(e,t){return e.length<t.length?!1:e.substr(0,t.length)!=t?!1:e[t.length]&&"/"!=e[t.length]?!1:!0}function r(e){for(var t=1,r=0,a=e.length;a>r;r++)"/"===e[r]&&t++;return t}function a(e,t,r){return r+e.substr(t)}function n(e,n,o){var i,s,l,u,d=0,c=0;if(n)for(var f in o.map){var p=o.map[f];if("object"==typeof p&&t(n,f)&&(l=r(f),!(c>=l)))for(var m in p)t(e,m)&&(u=r(m),d>=u||(i=m,d=u,s=f,c=l))}if(i)return a(e,i.length,o.map[s][i]);for(var f in o.map){var p=o.map[f];if("string"==typeof p&&t(e,f)){var u=r(f);d>=u||(i=f,d=u)}}return i?a(e,i.length,o.map[i]):e}e.map=e.map||{},e._extensions.push(d);var o=e.normalize;e.normalize=function(e,t,r){var a=this;a.map||(a.map={});var i=!1;return"/"==e.substr(e.length-1,1)&&(i=!0,e+="#"),Promise.resolve(o.call(a,e,t,r)).then(function(e){if(e=n(e,t,a),i){var r=e.split("/");r.pop();var o=r.pop();r.push(o),r.push(o),e=r.join("/")}return e})}}function c(e){"undefined"==typeof v&&(v=Array.prototype.indexOf),e._extensions.push(c);var t=e.normalize;e.normalize=function(e,r,a){var n,o=this;return r&&-1!=(n=r.indexOf("!"))&&(r=r.substr(0,n)),Promise.resolve(t.call(o,e,r,a)).then(function(e){var t=e.lastIndexOf("!");if(-1!=t){var n=e.substr(0,t),i=e.substr(t+1)||n.substr(n.lastIndexOf(".")+1);return new Promise(function(e){e(o.normalize(i,r,a))}).then(function(e){return i=e,o.normalize(n,r,a,!0)}).then(function(e){return e+"!"+i})}return e})};var r=e.locate;e.locate=function(e){var t=this,a=e.name;if(this.defined&&this.defined[a])return r.call(this,e);var n=a.lastIndexOf("!");if(-1!=n){var o=a.substr(n+1);e.name=a.substr(0,n);var i=t.pluginLoader||t;return i["import"](o).then(function(){var r=i.get(o);return r=r["default"]||r,r.build===!1&&t.pluginLoader&&(e.metadata.build=!1),e.metadata.plugin=r,e.metadata.pluginName=o,e.metadata.pluginArgument=e.name,e.metadata.buildType=r.buildType||"js",r.locate?r.locate.call(t,e):Promise.resolve(t.locate(e)).then(function(e){return e.replace(/\.js$/,"")})})}return r.call(this,e)};var a=e.fetch;e.fetch=function(e){var t=this;return e.metadata.build===!1&&t.pluginLoader?"":e.metadata.plugin&&e.metadata.plugin.fetch&&!e.metadata.pluginFetchCalled?(e.metadata.pluginFetchCalled=!0,e.metadata.plugin.fetch.call(t,e,a)):a.call(t,e)};var n=e.translate;e.translate=function(e){var t=this;return e.metadata.plugin&&e.metadata.plugin.translate?Promise.resolve(e.metadata.plugin.translate.call(t,e)).then(function(r){return"string"==typeof r&&(e.source=r),n.call(t,e)}):n.call(t,e)};var o=e.instantiate;e.instantiate=function(e){var t=this;return e.metadata.plugin&&e.metadata.plugin.instantiate?Promise.resolve(e.metadata.plugin.instantiate.call(t,e)).then(function(r){return r?r:o.call(t,e)}):e.metadata.plugin&&e.metadata.plugin.build===!1?(e.metadata.format="defined",e.metadata.deps.push(e.metadata.pluginName),e.metadata.execute=function(){return t.newModule({})},o.call(t,e)):o.call(t,e)}}function f(e){"undefined"==typeof v&&(v=Array.prototype.indexOf),e._extensions.push(f),e.bundles=e.bundles||{};var t=e.fetch;e.fetch=function(e){var r=this;if(r.trace)return t.call(this,e);r.bundles||(r.bundles={});for(var a in r.bundles)if(-1!=v.call(r.bundles[a],e.name))return Promise.resolve(r.normalize(a)).then(function(e){return r.bundles[e]=r.bundles[e]||r.bundles[a],r.meta=r.meta||{},r.meta[e]=r.meta[e]||{},r.meta[e].bundle=!0,r.load(e)}).then(function(){return""});return t.call(this,e)}}function p(e){function t(e){return parseInt(e,10)}function r(e){var r=e.match(s);return r?{major:t(r[1]),minor:t(r[2]),patch:t(r[3]),pre:r[4]&&r[4].split(".")}:{tag:e}}function a(e,r){if(e.tag&&r.tag)return 0;if(e.tag)return-1;if(r.tag)return 1;for(var a=0;a<u.length;a++){var n=u[a],o=e[n],i=r[n];if(o!=i)return isNaN(o)?-1:isNaN(i)?1:o>i?1:-1}if(!e.pre&&!r.pre)return 0;if(!e.pre)return 1;if(!r.pre)return-1;for(var a=0,s=Math.min(e.pre.length,r.pre.length);s>a;a++)if(e.pre[a]!=r.pre[a]){var d=e.pre[a].match(l),c=r.pre[a].match(l);return d&&!c?-1:c&&!d?1:d&&c?t(e.pre[a])>t(r.pre[a])?1:-1:e.pre[a]>r.pre[a]?1:-1}return e.pre.length==r.pre.length?0:e.pre.length>r.pre.length?1:-1}function n(e,t){var r=e.version;return r.tag?r.tag==t.tag:1==a(r,t)?!1:isNaN(t.minor)||isNaN(t.patch)?!1:t.pre?r.major!=t.major||r.minor!=t.minor||r.patch!=t.patch?!1:e.semver||e.fuzzy||r.pre.join(".")==t.pre.join("."):e.semver?0==r.major&&isNaN(r.minor)?t.major<1:r.major>=1?r.major==t.major:r.minor>=1?r.minor==t.minor:(r.patch||0)==t.patch:e.fuzzy?t.major==r.major&&t.minor<(r.minor||0)+1:!r.pre&&r.major==t.major&&r.minor==t.minor&&r.patch==t.patch}function o(e){var t={};((t.semver="^"==e.substr(0,1))||(t.fuzzy="~"==e.substr(0,1)))&&(e=e.substr(1));var a=t.version=r(e);return a.tag?t:(t.fuzzy||t.semver||!isNaN(a.minor)&&!isNaN(a.patch)||(t.fuzzy=!0),t.fuzzy&&isNaN(a.minor)&&(t.semver=!0,t.fuzzy=!1),t.semver&&!isNaN(a.minor)&&isNaN(a.patch)&&(t.semver=!1,t.fuzzy=!0),t)}function i(e,t){return a(r(e),r(t))}"undefined"==typeof v&&(v=Array.prototype.indexOf),e._extensions.push(p);var s=/^(\d+)(?:\.(\d+)(?:\.(\d+)(?:-([\da-z-]+(?:\.[\da-z-]+)*)(?:\+([\da-z-]+(?:\.[\da-z-]+)*))?)?)?)?$/i,l=/^\d+$/,u=["major","minor","patch"];e.versions=e.versions||{};var d=e.normalize;e.normalize=function(e,t,a){this.versions||(this.versions={});var s,l,u=this.versions,c=-1!=e.indexOf("!")?0:e.lastIndexOf("@");if(c>0){var f=e.substr(c+1,e.length-c-1).split("/");s=f[0],l=f.length,e=e.substr(0,c)+e.substr(c+s.length+1,e.length-c-s.length-1)}return Promise.resolve(d.call(this,e,t,a)).then(function(e){var t=-1!=e.indexOf("!")?0:e.indexOf("@");if(s&&(-1==t||0==t)){var a=e.split("/");a[a.length-l]+="@"+s,e=a.join("/"),t=e.indexOf("@")}var d,c;if(-1==t||0==t){for(var f in u)if(c=u[f],e.substr(0,f.length)==f&&(d=e.substr(f.length,1),!d||"/"==d))return f+"@"+("string"==typeof c?c:c[c.length-1])+e.substr(f.length);return e}var p=e.substr(0,t),m=e.substr(t+1).split("/")[0],h=m.length,v=o(e.substr(t+1).split("/")[0]);c=u[e.substr(0,t)]||[],"string"==typeof c&&(c=[c]);for(var g=c.length-1;g>=0;g--)if(n(v,r(c[g])))return p+"@"+c[g]+e.substr(t+h+1);var b;return v.semver?b=0!=v.version.major||isNaN(v.version.minor)?v.version.major:"0."+v.version.minor:v.fuzzy?b=v.version.major+"."+v.version.minor:(b=m,c.push(m),c.sort(i),u[p]=1==c.length?c[0]:c),p+"@"+b+e.substr(t+h+1)})}}function m(e){e.depCache=e.depCache||{},e._extensions.push(m);var t=e.locate;e.locate=function(e){var r=this;r.depCache||(r.depCache={});var a=r.depCache[e.name];if(a)for(var n=0;n<a.length;n++)r.load(a[n]);return t.call(r,e)}}$__global.upgradeSystemLoader=void 0;var h,v=Array.prototype.indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(this[t]===e)return t;return-1},g="undefined"!=typeof process&&!!process.platform.match(/^win/);!function(){var e=$__global.System;h=$__global.System=new LoaderPolyfill(e),h.baseURL=e.baseURL,h.paths={"*":"*.js"},h.originalSystem=e}(),h.noConflict=function(){$__global.SystemJS=h,$__global.System=h.originalSystem};var b=$__global.System.originalSystem;r(h),a(h),n(h),o(h),i(h),s(h),l(h),u(h),d(h),c(h),f(h),p(h),m(h)};var $__curScript,__eval;!function(){var doEval,isWorker="undefined"==typeof window&&"undefined"!=typeof self&&"undefined"!=typeof importScripts,isBrowser="undefined"!=typeof window&&"undefined"!=typeof document;if(__eval=function(e,t,r){e+="\n//# sourceURL="+t+(r?"\n//# sourceMappingURL="+r:"");try{doEval(e)}catch(a){var n="Error evaluating "+t+"\n";throw a instanceof Error?a.message=n+a.message:a=n+a,a}},isWorker||isBrowser&&window.chrome&&window.chrome.extension)if(doEval=function(source){try{eval(source)}catch(e){throw e}},$__global.System&&$__global.LoaderPolyfill)$__global.upgradeSystemLoader();else{var basePath="";try{throw new Error("Get worker base path via error stack")}catch(e){e.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/,function(e,t){basePath=t.replace(/\/[^\/]*$/,"/")})}importScripts(basePath+"steal-es6-module-loader.js"),$__global.upgradeSystemLoader()}else if("undefined"!=typeof document){var head,scripts=document.getElementsByTagName("script");if($__curScript=scripts[scripts.length-1],doEval=function(e){head||(head=document.head||document.body||document.documentElement);var t=document.createElement("script");t.text=e;var r,a=window.onerror;if(window.onerror=function(e){r=e},head.appendChild(t),head.removeChild(t),window.onerror=a,r)throw r},$__global.System&&$__global.LoaderPolyfill)$__global.upgradeSystemLoader();else{var curPath=$__curScript.src,basePath=curPath.substr(0,curPath.lastIndexOf("/")+1);document.write('<script type="text/javascript" src="'+basePath+'steal-es6-module-loader.js" data-init="upgradeSystemLoader"></script>')}}else{var es6ModuleLoader=require("steal-es6-module-loader");$__global.System=es6ModuleLoader.System,$__global.Loader=es6ModuleLoader.Loader,$__global.upgradeSystemLoader(),module.exports=$__global.System;var vm=require("vm");doEval=function(e){vm.runInThisContext(e)}}}()}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope?self:global);
//# sourceMappingURL=system-csp.js.map