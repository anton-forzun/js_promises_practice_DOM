parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=function(e,t,n){var s=document.createElement("div");return s.classList.add(e),s.dataset.qa="notification",s.innerText=t,s.style.backgroundColor=n,s.style.height="40px",s.style.display="flex",s.style.justifyContent="center",s.style.alignItems="center",s.style.padding="20px",s.style.borderRadius="16px",s.style.marginBottom="20px",s},t=new Promise(function(t,n){document.addEventListener("click",function(){var n=e("success","First promise was resolved","green");t(n)}),setTimeout(function(){var t=e("warning","First promise was rejected","red");n(t)},3e3)});t.then(function(e){document.body.lastElementChild.after(e)}).catch(function(e){document.body.lastElementChild.after(e)});var n=!1,s=!1,o=new Promise(function(t){var n;document.addEventListener("click",function(){n=e("success","Second promise was resolved","blue"),t(n)}),document.addEventListener("contextmenu",function(){n=e("success","Second promise was resolved","blue"),t(n)})});o.then(function(e){document.body.lastElementChild.after(e)});var i=new Promise(function(t){document.addEventListener("mousedown",function(o){if(0===o.button&&(n=!0),2===o.button&&(s=!0),n&&s){var i=e("sucess","Third promise was resolved","grey");t(i)}})});i.then(function(e){document.body.lastElementChild.after(e)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.748ed0aa.js.map