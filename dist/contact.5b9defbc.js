parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var c=document.querySelector(".contact-us-form"),b=Array.from(document.querySelectorAll(".contact-us-form__input")),g=Array.from(document.querySelectorAll(".contact-us-form__err-msg")),d=document.querySelector(".contact-us-form__input--textarea");console.log(c,b,g,d),d.value="",c.addEventListener("submit",function(t){b.forEach(function(e){e.validity.valid||(t.preventDefault(),f(e))})});var f=function(t){var e,a=t.validity.valid,r=t.parentElement.children[3];t.validity.valueMissing?r.textContent="The field ".concat(t.name," hasn't been filled yet"):t.validity.tooShort?r.textContent="The feild ".concat(t.name," should have at least ").concat(t.minLength," characters; you have entered ").concat(t.value.length):t.validity.typeMismatch?r.textContent="The value entered in this field needs to be a ".concat(t.type):t.validity.patternMismatch&&(r.textContent="the set password value is not consistent with check password value"),e=a,r.style.display=e?"none":"block"};b.forEach(function(t){t.addEventListener("input",function(){f(t)})});return{"RWwg":{}};});