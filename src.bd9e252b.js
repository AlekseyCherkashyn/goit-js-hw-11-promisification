parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/background-g4c51ff816_1280.jpg":[["background-g4c51ff816_1280.be2a1af4.jpg","eyqE"],"eyqE"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");const e=(new Date).getFullYear(),s=new Date(e,0,1).getTime(),t=new Date(e+1,0,1).getTime(),i=(new Date).getMonth();let n=setInterval(function(){const e=(new Date).getTime();let n;n=i>6?t-e:s-e;let a=Math.floor(n/864e5),d=Math.floor(n%864e5/36e5),l=Math.floor(n%36e5/6e4),v=Math.floor(n%6e4/1e3);document.getElementById("timer").innerHTML='<div class="days">   <div class="numbers">'+a+'</div>days</div> <div class="hours">   <div class="numbers">'+d+'</div>hours</div> <div class="minutes">   <div class="numbers">'+l+'</div>minutes</div> <div class="seconds">   <div class="numbers">'+v+"</div>seconds</div> </div>"},1e3);
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/src.bd9e252b.js.map