parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var R={type:"slider",startAt:0,perView:1,focusAt:0,gap:10,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!1,swipeThreshold:80,dragThreshold:120,perTouch:!1,touchRatio:.5,touchAngle:45,animationDuration:400,rewind:!0,rewindDuration:800,animationTimingFunc:"cubic-bezier(.165, .840, .440, 1)",throttle:10,direction:"ltr",peek:0,breakpoints:{},classes:{direction:{ltr:"glide--ltr",rtl:"glide--rtl"},slider:"glide--slider",carousel:"glide--carousel",swipeable:"glide--swipeable",dragging:"glide--dragging",cloneSlide:"glide__slide--clone",activeNav:"glide__bullet--active",activeSlide:"glide__slide--active",disabledArrow:"glide__arrow--disabled"}};function j(t){console.error("[Glide warn]: "+t)}var S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},x=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},T=function t(e,n,r){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,n);if(void 0===i){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,r)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(r):void 0},U=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},V=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function g(t){return parseInt(t)}function W(t){return parseFloat(t)}function B(t){return"string"==typeof t}function q(t){var e=void 0===t?"undefined":S(t);return"function"===e||"object"===e&&!!t}function X(t){return"number"==typeof t}function y(t){return"function"==typeof t}function G(t){return void 0===t}function D(t){return t.constructor===Array}function Y(t,e,n){var r={};for(var i in e)y(e[i])?r[i]=e[i](t,r,n):j("Extension must be a function");for(var o in r)y(r[o].mount)&&r[o].mount();return r}function b(t,e,n){Object.defineProperty(t,e,n)}function Z(t){return Object.keys(t).sort().reduce(function(e,n){return e[n]=t[n],e[n],e},{})}function E(t,e){var n=k({},t,e);return e.hasOwnProperty("classes")&&(n.classes=k({},t.classes,e.classes),e.classes.hasOwnProperty("direction")&&(n.classes.direction=k({},t.classes.direction,e.classes.direction))),e.hasOwnProperty("breakpoints")&&(n.breakpoints=k({},t.breakpoints,e.breakpoints)),n}var _=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};w(this,t),this.events=e,this.hop=e.hasOwnProperty}return x(t,[{key:"on",value:function(t,e){if(D(t))for(var n=0;n<t.length;n++)this.on(t[n],e);this.hop.call(this.events,t)||(this.events[t]=[]);var r=this.events[t].push(e)-1;return{remove:function(){delete this.events[t][r]}}}},{key:"emit",value:function(t,e){if(D(t))for(var n=0;n<t.length;n++)this.emit(t[n],e);this.hop.call(this.events,t)&&this.events[t].forEach(function(t){t(e||{})})}}]),t}(),aa=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};w(this,t),this._c={},this._t=[],this._e=new _,this.disabled=!1,this.selector=e,this.settings=E(R,n),this.index=this.settings.startAt}return x(t,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this._e.emit("mount.before"),q(t)?this._c=Y(this,t,this._e):j("You need to provide a object on `mount()`"),this._e.emit("mount.after"),this}},{key:"mutate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return D(t)?this._t=t:j("You need to provide a array on `mutate()`"),this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.settings=E(this.settings,t),t.hasOwnProperty("startAt")&&(this.index=t.startAt),this._e.emit("update"),this}},{key:"go",value:function(t){return this._c.Run.make(t),this}},{key:"move",value:function(t){return this._c.Transition.disable(),this._c.Move.make(t),this}},{key:"destroy",value:function(){return this._e.emit("destroy"),this}},{key:"play",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&(this.settings.autoplay=t),this._e.emit("play"),this}},{key:"pause",value:function(){return this._e.emit("pause"),this}},{key:"disable",value:function(){return this.disabled=!0,this}},{key:"enable",value:function(){return this.disabled=!1,this}},{key:"on",value:function(t,e){return this._e.on(t,e),this}},{key:"isType",value:function(t){return this.settings.type===t}},{key:"settings",get:function(){return this._o},set:function(t){q(t)?this._o=t:j("Options must be an `object` instance.")}},{key:"index",get:function(){return this._i},set:function(t){this._i=g(t)}},{key:"type",get:function(){return this.settings.type}},{key:"disabled",get:function(){return this._d},set:function(t){this._d=!!t}}]),t}();function ba(t,e,n){var r={mount:function(){this._o=!1},make:function(r){var i=this;t.disabled||(t.disable(),this.move=r,n.emit("run.before",this.move),this.calculate(),n.emit("run",this.move),e.Transition.after(function(){i.isStart()&&n.emit("run.start",i.move),i.isEnd()&&n.emit("run.end",i.move),(i.isOffset("<")||i.isOffset(">"))&&(i._o=!1,n.emit("run.offset",i.move)),n.emit("run.after",i.move),t.enable()}))},calculate:function(){var e=this.move,n=this.length,r=e.steps,i=e.direction,o=X(g(r))&&0!==g(r);switch(i){case">":">"===r?t.index=n:this.isEnd()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=0):o?t.index+=Math.min(n-t.index,-g(r)):t.index++;break;case"<":"<"===r?t.index=0:this.isStart()?t.isType("slider")&&!t.settings.rewind||(this._o=!0,t.index=n):o?t.index-=Math.min(t.index,g(r)):t.index--;break;case"=":t.index=r;break;default:j("Invalid direction pattern ["+i+r+"] has been used");}},isStart:function(){return 0===t.index},isEnd:function(){return t.index===this.length},isOffset:function(t){return this._o&&this.move.direction===t}};return b(r,"move",{get:function(){return this._m},set:function(t){var e=t.substr(1);this._m={direction:t.substr(0,1),steps:e?g(e)?g(e):e:0}}}),b(r,"length",{get:function(){var n=t.settings,r=e.Html.slides.length;return t.isType("slider")&&"center"!==n.focusAt&&n.bound?r-1-(g(n.perView)-1)+g(n.focusAt):r-1}}),b(r,"offset",{get:function(){return this._o}}),r}function H(){return new Date().getTime()}function z(t,e,n){var r=void 0,i=void 0,o=void 0,s=void 0,a=0;n||(n={});var v=function(){a=!1===n.leading?0:H(),r=null,s=t.apply(i,o),r||(i=o=null)},f=function(){var f=H();a||!1!==n.leading||(a=f);var u=e-(f-a);return i=this,o=arguments,u<=0||u>e?(r&&(clearTimeout(r),r=null),a=f,s=t.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(v,u)),s};return f.cancel=function(){clearTimeout(r),a=0,r=i=o=null},f}var F={ltr:["marginLeft","marginRight"],rtl:["marginRight","marginLeft"]};function ca(t,e,n){var r={apply:function(t){for(var n=0,r=t.length;n<r;n++){var i=t[n].style,o=e.Direction.value;i[F[o][0]]=0!==n?this.value/2+"px":"",n!==t.length-1?i[F[o][1]]=this.value/2+"px":i[F[o][1]]=""}},remove:function(t){for(var e=0,n=t.length;e<n;e++){var r=t[e].style;r.marginLeft="",r.marginRight=""}}};return b(r,"value",{get:function(){return g(t.settings.gap)}}),b(r,"grow",{get:function(){return r.value*(e.Sizes.length-1)}}),b(r,"reductor",{get:function(){var e=t.settings.perView;return r.value*(e-1)/e}}),n.on(["build.after","update"],z(function(){r.apply(e.Html.wrapper.children)},30)),n.on("destroy",function(){r.remove(e.Html.wrapper.children)}),r}function I(t){if(t&&t.parentNode){for(var e=t.parentNode.firstChild,n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}return[]}function J(t){return!!(t&&t instanceof window.HTMLElement)}var K="[data-glide-el=\"track\"]";function da(t,e){var n={mount:function(){this.root=t.selector,this.track=this.root.querySelector(K),this.slides=Array.prototype.slice.call(this.wrapper.children).filter(function(e){return!e.classList.contains(t.settings.classes.cloneSlide)})}};return b(n,"root",{get:function(){return n._r},set:function(t){B(t)&&(t=document.querySelector(t)),J(t)?n._r=t:j("Root element must be a existing Html node")}}),b(n,"track",{get:function(){return n._t},set:function(t){J(t)?n._t=t:j("Could not find track element. Please use "+K+" attribute.")}}),b(n,"wrapper",{get:function(){return n.track.children[0]}}),n}function ea(t,e,n){var r={mount:function(){this.value=t.settings.peek}};return b(r,"value",{get:function(){return r._v},set:function(t){q(t)?(t.before=g(t.before),t.after=g(t.after)):t=g(t),r._v=t}}),b(r,"reductor",{get:function(){var e=r.value,n=t.settings.perView;return q(e)?e.before/n+e.after/n:2*e/n}}),n.on(["resize","update"],function(){r.mount()}),r}function fa(t,e,n){var r={mount:function(){this._o=0},make:function(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.offset=r,n.emit("move",{movement:this.value}),e.Transition.after(function(){n.emit("move.after",{movement:t.value})})}};return b(r,"offset",{get:function(){return r._o},set:function(t){r._o=G(t)?0:g(t)}}),b(r,"translate",{get:function(){return e.Sizes.slideWidth*t.index}}),b(r,"value",{get:function(){var t=this.offset,n=this.translate;return e.Direction.is("rtl")?n+t:n-t}}),n.on(["build.before","run"],function(){r.make()}),r}function ga(t,e,n){var r={setupSlides:function(){for(var t=this.slideWidth+"px",n=e.Html.slides,r=0;r<n.length;r++)n[r].style.width=t},setupWrapper:function(t){e.Html.wrapper.style.width=this.wrapperSize+"px"},remove:function(){for(var t=e.Html.slides,n=0;n<t.length;n++)t[n].style.width="";e.Html.wrapper.style.width=""}};return b(r,"length",{get:function(){return e.Html.slides.length}}),b(r,"width",{get:function(){return e.Html.root.offsetWidth}}),b(r,"wrapperSize",{get:function(){return r.slideWidth*r.length+e.Gaps.grow+e.Clones.grow}}),b(r,"slideWidth",{get:function(){return r.width/t.settings.perView-e.Peek.reductor-e.Gaps.reductor}}),n.on(["build.before","resize","update"],function(){r.setupSlides(),r.setupWrapper()}),n.on("destroy",function(){r.remove()}),r}function ha(t,e,n){var r={mount:function(){n.emit("build.before"),this.typeClass(),this.activeClass(),n.emit("build.after")},typeClass:function(){e.Html.root.classList.add(t.settings.classes[t.settings.type])},activeClass:function(){var n=t.settings.classes,r=e.Html.slides[t.index];r&&(r.classList.add(n.activeSlide),I(r).forEach(function(t){t.classList.remove(n.activeSlide)}))},removeClasses:function(){var n=t.settings.classes;e.Html.root.classList.remove(n[t.settings.type]),e.Html.slides.forEach(function(t){t.classList.remove(n.activeSlide)})}};return n.on(["destroy","update"],function(){r.removeClasses()}),n.on(["resize","update"],function(){r.mount()}),n.on("move.after",function(){r.activeClass()}),r}function ia(t,e,n){var r={mount:function(){this.items=[],t.isType("carousel")&&(this.items=this.collect())},collect:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=e.Html.slides,i=t.settings,o=i.perView,s=i.classes,a=o+ +!!t.settings.peek,v=r.slice(0,a),f=r.slice(-a),u=0;u<Math.max(1,Math.floor(o/r.length));u++){for(var $=0;$<v.length;$++){var c=v[$].cloneNode(!0);c.classList.add(s.cloneSlide),n.push(c)}for(var l=0;l<f.length;l++){var d=f[l].cloneNode(!0);d.classList.add(s.cloneSlide),n.unshift(d)}}return n},append:function(){for(var t=this.items,n=e.Html,r=n.wrapper,i=n.slides,o=Math.floor(t.length/2),s=t.slice(0,o).reverse(),a=t.slice(o,t.length),v=e.Sizes.slideWidth+"px",f=0;f<a.length;f++)r.appendChild(a[f]);for(var u=0;u<s.length;u++)r.insertBefore(s[u],i[0]);for(var $=0;$<t.length;$++)t[$].style.width=v},remove:function(){for(var t=this.items,n=0;n<t.length;n++)e.Html.wrapper.removeChild(t[n])}};return b(r,"grow",{get:function(){return(e.Sizes.slideWidth+e.Gaps.value)*r.items.length}}),n.on("update",function(){r.remove(),r.mount(),r.append()}),n.on("build.before",function(){t.isType("carousel")&&r.append()}),n.on("destroy",function(){r.remove()}),r}var m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};w(this,t),this.listeners=e}return x(t,[{key:"on",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];B(t)&&(t=[t]);for(var i=0;i<t.length;i++)this.listeners[t[i]]=n,e.addEventListener(t[i],this.listeners[t[i]],r)}},{key:"off",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];B(t)&&(t=[t]);for(var r=0;r<t.length;r++)e.removeEventListener(t[r],this.listeners[t[r]],n)}},{key:"destroy",value:function(){delete this.listeners}}]),t}();function ja(t,e,n){var r=new m,i={mount:function(){this.bind()},bind:function(){r.on("resize",window,z(function(){n.emit("resize")},t.settings.throttle))},unbind:function(){r.off("resize",window)}};return n.on("destroy",function(){i.unbind(),r.destroy()}),i}var ka=["ltr","rtl"],la={">":"<","<":">","=":"="};function ma(t,e,n){var r={mount:function(){this.value=t.settings.direction},resolve:function(t){var e=t.slice(0,1);return this.is("rtl")?t.split(e).join(la[e]):t},is:function(t){return this.value===t},addClass:function(){e.Html.root.classList.add(t.settings.classes.direction[this.value])},removeClass:function(){e.Html.root.classList.remove(t.settings.classes.direction[this.value])}};return b(r,"value",{get:function(){return r._v},set:function(t){ka.indexOf(t)>-1?r._v=t:j("Direction value must be `ltr` or `rtl`")}}),n.on(["destroy","update"],function(){r.removeClass()}),n.on("update",function(){r.mount()}),n.on(["build.before","update"],function(){r.addClass()}),r}function na(t,e){return{modify:function(t){return e.Direction.is("rtl")?-t:t}}}function oa(t,e){return{modify:function(n){return n+e.Gaps.value*t.index}}}function pa(t,e){return{modify:function(t){return t+e.Clones.grow/2}}}function qa(t,e){return{modify:function(n){if(t.settings.focusAt>=0){var r=e.Peek.value;return q(r)?n-r.before:n-r}return n}}}function ra(t,e){return{modify:function(n){var r=e.Gaps.value,i=e.Sizes.width,o=t.settings.focusAt,s=e.Sizes.slideWidth;return"center"===o?n-(i/2-s/2):n-s*o-r*o}}}function sa(t,e,n){var r=[oa,pa,qa,ra].concat(t._t,[na]);return{mutate:function(i){for(var o=0;o<r.length;o++){var s=r[o];y(s)&&y(s().modify)?i=s(t,e,n).modify(i):j("Transformer should be a function that returns an object with `modify()` method")}return i}}}function ta(t,e,n){var r={set:function(n){var r=sa(t,e).mutate(n);e.Html.wrapper.style.transform="translate3d("+-1*r+"px, 0px, 0px)"},remove:function(){e.Html.wrapper.style.transform=""}};return n.on("move",function(i){var o=e.Gaps.value,s=e.Sizes.length,a=e.Sizes.slideWidth;return t.isType("carousel")&&e.Run.isOffset("<")?(e.Transition.after(function(){n.emit("translate.jump"),r.set(a*(s-1))}),r.set(-a-o*s)):t.isType("carousel")&&e.Run.isOffset(">")?(e.Transition.after(function(){n.emit("translate.jump"),r.set(0)}),r.set(a*s+o*s)):r.set(i.movement)}),n.on("destroy",function(){r.remove()}),r}function ua(t,e,n){var r=!1,i={compose:function(e){var n=t.settings;return r?e+" 0ms "+n.animationTimingFunc:e+" "+this.duration+"ms "+n.animationTimingFunc},set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";e.Html.wrapper.style.transition=this.compose(t)},remove:function(){e.Html.wrapper.style.transition=""},after:function(t){setTimeout(function(){t()},this.duration)},enable:function(){r=!1,this.set()},disable:function(){r=!0,this.set()}};return b(i,"duration",{get:function(){var n=t.settings;return t.isType("slider")&&e.Run.offset?n.rewindDuration:n.animationDuration}}),n.on("move",function(){i.set()}),n.on(["build.before","resize","translate.jump"],function(){i.disable()}),n.on("run",function(){i.enable()}),n.on("destroy",function(){i.remove()}),i}var va=!1;try{var L=Object.defineProperty({},"passive",{get:function(){va=!0}});window.addEventListener("testPassive",null,L),window.removeEventListener("testPassive",null,L)}catch(e){}var M=va,A=["touchstart","mousedown"],N=["touchmove","mousemove"],O=["touchend","touchcancel","mouseup","mouseleave"],P=["mousedown","mousemove","mouseup","mouseleave"];function wa(t,e,n){var r=new m,i=0,o=0,s=0,a=!1,v=!!M&&{passive:!0},f={mount:function(){this.bindSwipeStart()},start:function(e){if(!a&&!t.disabled){this.disable();var r=this.touches(e);i=null,o=g(r.pageX),s=g(r.pageY),this.bindSwipeMove(),this.bindSwipeEnd(),n.emit("swipe.start")}},move:function(r){if(!t.disabled){var a=t.settings,v=a.touchAngle,f=a.touchRatio,u=a.classes,$=this.touches(r),c=g($.pageX)-o,l=g($.pageY)-s,d=Math.abs(c<<2),h=Math.abs(l<<2),p=Math.sqrt(d+h),C=Math.sqrt(h);if(!(180*(i=Math.asin(C/p))/Math.PI<v))return!1;r.stopPropagation(),e.Move.make(c*W(f)),e.Html.root.classList.add(u.dragging),n.emit("swipe.move")}},end:function(r){if(!t.disabled){var s=t.settings,a=this.touches(r),v=this.threshold(r),f=a.pageX-o,u=180*i/Math.PI,$=Math.round(f/e.Sizes.slideWidth);this.enable(),f>v&&u<s.touchAngle?(s.perTouch&&($=Math.min($,g(s.perTouch))),e.Direction.is("rtl")&&($=-$),e.Run.make(e.Direction.resolve("<"+$))):f<-v&&u<s.touchAngle?(s.perTouch&&($=Math.max($,-g(s.perTouch))),e.Direction.is("rtl")&&($=-$),e.Run.make(e.Direction.resolve(">"+$))):e.Move.make(),e.Html.root.classList.remove(s.classes.dragging),this.unbindSwipeMove(),this.unbindSwipeEnd(),n.emit("swipe.end")}},bindSwipeStart:function(){var n=this,i=t.settings;i.swipeThreshold&&r.on(A[0],e.Html.wrapper,function(t){n.start(t)},v),i.dragThreshold&&r.on(A[1],e.Html.wrapper,function(t){n.start(t)},v)},unbindSwipeStart:function(){r.off(A[0],e.Html.wrapper,v),r.off(A[1],e.Html.wrapper,v)},bindSwipeMove:function(){var n=this;r.on(N,e.Html.wrapper,z(function(t){n.move(t)},t.settings.throttle),v)},unbindSwipeMove:function(){r.off(N,e.Html.wrapper,v)},bindSwipeEnd:function(){var t=this;r.on(O,e.Html.wrapper,function(e){t.end(e)})},unbindSwipeEnd:function(){r.off(O,e.Html.wrapper)},touches:function(t){return P.indexOf(t.type)>-1?t:t.touches[0]||t.changedTouches[0]},threshold:function(e){var n=t.settings;return P.indexOf(e.type)>-1?n.dragThreshold:n.swipeThreshold},enable:function(){return a=!1,e.Transition.enable(),this},disable:function(){return a=!0,e.Transition.disable(),this}};return n.on("build.after",function(){e.Html.root.classList.add(t.settings.classes.swipeable)}),n.on("destroy",function(){f.unbindSwipeStart(),f.unbindSwipeMove(),f.unbindSwipeEnd(),r.destroy()}),f}function xa(t,e,n){var r=new m,i={mount:function(){this.bind()},bind:function(){r.on("dragstart",e.Html.wrapper,this.dragstart)},unbind:function(){r.off("dragstart",e.Html.wrapper)},dragstart:function(t){t.preventDefault()}};return n.on("destroy",function(){i.unbind(),r.destroy()}),i}function ya(t,e,n){var r=new m,i=!1,o=!1,s={mount:function(){this._a=e.Html.wrapper.querySelectorAll("a"),this.bind()},bind:function(){r.on("click",e.Html.wrapper,this.click)},unbind:function(){r.off("click",e.Html.wrapper)},click:function(t){o&&(t.stopPropagation(),t.preventDefault())},detach:function(){if(o=!0,!i){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!1,this.items[t].setAttribute("data-href",this.items[t].getAttribute("href")),this.items[t].removeAttribute("href");i=!0}return this},attach:function(){if(o=!1,i){for(var t=0;t<this.items.length;t++)this.items[t].draggable=!0,this.items[t].setAttribute("href",this.items[t].getAttribute("data-href"));i=!1}return this}};return b(s,"items",{get:function(){return s._a}}),n.on("swipe.move",function(){s.detach()}),n.on("swipe.end",function(){e.Transition.after(function(){s.attach()})}),n.on("destroy",function(){s.attach(),s.unbind(),r.destroy()}),s}var za="[data-glide-el=\"controls[nav]\"]",Aa="[data-glide-el^=\"controls\"]";function Ba(t,e,n){var r=new m,i=!!M&&{passive:!0},o={mount:function(){this._n=e.Html.root.querySelectorAll(za),this._c=e.Html.root.querySelectorAll(Aa),this.addBindings()},setActive:function(){for(var t=0;t<this._n.length;t++)this.addClass(this._n[t].children)},removeActive:function(){for(var t=0;t<this._n.length;t++)this.removeClass(this._n[t].children)},addClass:function(e){var n=t.settings,r=e[t.index];r&&(r.classList.add(n.classes.activeNav),I(r).forEach(function(t){t.classList.remove(n.classes.activeNav)}))},removeClass:function(e){var n=e[t.index];n&&n.classList.remove(t.settings.classes.activeNav)},addBindings:function(){for(var t=0;t<this._c.length;t++)this.bind(this._c[t].children)},removeBindings:function(){for(var t=0;t<this._c.length;t++)this.unbind(this._c[t].children)},bind:function(t){for(var e=0;e<t.length;e++)r.on("click",t[e],this.click),r.on("touchstart",t[e],this.click,i)},unbind:function(t){for(var e=0;e<t.length;e++)r.off(["click","touchstart"],t[e])},click:function(t){t.preventDefault(),e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))}};return b(o,"items",{get:function(){return o._c}}),n.on(["mount.after","move.after"],function(){o.setActive()}),n.on("destroy",function(){o.removeBindings(),o.removeActive(),r.destroy()}),o}function Ca(t,e,n){var r=new m,i={mount:function(){t.settings.keyboard&&this.bind()},bind:function(){r.on("keyup",document,this.press)},unbind:function(){r.off("keyup",document)},press:function(t){39===t.keyCode&&e.Run.make(e.Direction.resolve(">")),37===t.keyCode&&e.Run.make(e.Direction.resolve("<"))}};return n.on(["destroy","update"],function(){i.unbind()}),n.on("update",function(){i.mount()}),n.on("destroy",function(){r.destroy()}),i}function Da(t,e,n){var r=new m,i={mount:function(){this.start(),t.settings.hoverpause&&this.bind()},start:function(){var n=this;t.settings.autoplay&&G(this._i)&&(this._i=setInterval(function(){n.stop(),e.Run.make(">"),n.start()},this.time))},stop:function(){this._i=clearInterval(this._i)},bind:function(){var t=this;r.on("mouseover",e.Html.root,function(){t.stop()}),r.on("mouseout",e.Html.root,function(){t.start()})},unbind:function(){r.off(["mouseover","mouseout"],e.Html.root)}};return b(i,"time",{get:function(){var n=e.Html.slides[t.index].getAttribute("data-glide-autoplay");return g(n||t.settings.autoplay)}}),n.on(["destroy","update"],function(){i.unbind()}),n.on(["run.before","pause","destroy","swipe.start","update"],function(){i.stop()}),n.on(["run.after","play","swipe.end"],function(){i.start()}),n.on("update",function(){i.mount()}),n.on("destroy",function(){r.destroy()}),i}function Q(t){return q(t)?Z(t):(j("Breakpoints option must be an object"),{})}function Ea(t,e,n){var r=new m,i=t.settings,o=Q(i.breakpoints),s=k({},i),a={match:function(t){if(void 0!==window.matchMedia)for(var e in t)if(t.hasOwnProperty(e)&&window.matchMedia("(max-width: "+e+"px)").matches)return t[e];return s}};return k(i,a.match(o)),r.on("resize",window,z(function(){t.settings=E(i,a.match(o))},t.settings.throttle)),n.on("update",function(){o=Q(o),s=k({},i)}),n.on("destroy",function(){r.off("resize",window)}),a}var Fa={Html:da,Translate:ta,Transition:ua,Direction:ma,Peek:ea,Sizes:ga,Gaps:ca,Move:fa,Clones:ia,Resize:ja,Build:ha,Run:ba,Swipe:wa,Images:xa,Anchors:ya,Controls:Ba,Keyboard:Ca,Autoplay:Da,Breakpoints:Ea},Ga=function(t){function e(){return w(this,e),V(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return U(e,aa),x(e,[{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return T(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"mount",this).call(this,k({},Fa,t))}}]),e}();var Ha=new Ga(".glide",{type:"carousel",perView:2,autoplay:4e3,animationDuration:1500,hoverpause:!1,breakpoints:{680:{perView:1}}});Ha.mount();return{"hjd2":{}};});