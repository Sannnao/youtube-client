!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var s=e[i];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,i,o={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),d=null,c=0,l=[],u=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](r.parts[s]);for(;s<r.parts.length;s++)i.parts.push(v(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(v(r.parts[s],t));o[r.id]={id:r.id,refs:1,parts:a}}}}function m(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function h(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(e.insertAt.before,n);n.insertBefore(t,i)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),h(e,t),t}function b(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=c++;n=d||(d=g(t)),r=w.bind(null,n,s,!1),i=w.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),h(e,t),t}(t),r=function(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=m(e,t);return p(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var s=n[i];(a=o[s.id]).refs--,r.push(a)}e&&p(m(e,t),t);for(i=0;i<r.length;i++){var a;if(0===(a=r[i]).refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete o[a.id]}}}};var y,x=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function w(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var o=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}},function(e,t,n){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  position: relative;\n  font-family: "Roboto", sans-serif;\n  overflow-x: hidden;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n',""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(!1);var r=n(2)(n(8));t.push([e.i,".header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 80px;\r\n  background-color: rgb(241, 241, 241);\r\n  box-shadow: 0 1px 5px 0 rgb(190, 190, 190);\r\n}\r\n\r\n.input-field {\r\n  width: 50%;\r\n  height: 50px;\r\n  padding: 0 40px;\r\n  font-family: inherit;\r\n  font-size: 20px;\r\n  background: #fff url("+r+") 10px 50%/20px no-repeat;\r\n  border: none;\r\n  border-radius: 20px;\r\n  outline: none;\r\n}\r\n\r\n.input-field:hover {\r\n  box-shadow: 0 1px 5px 0 rgb(165, 165, 165);\r\n}\r\n\r\n.input-field:focus {\r\n  box-shadow: 0 1px 5px 0 rgb(165, 165, 165), inset 0 0 1px 1px rgb(165, 165, 165);\r\n}\r\n",""])},function(e,t,n){e.exports=n.p+"4d3954a3dc84803dc0c653a54d9ec11c.png"},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"@media (max-width: 1100px) {\r\n  .input-field {\r\n    width: 60%;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .input-field {\r\n    width: 70%;\r\n\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .input-field {\r\n    width: 80%;\r\n\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .input-field {\r\n    width: 90%;\r\n  }\r\n}\r\n",""])},function(e,t,n){var r=n(12);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".footer {\r\n  position: fixed;\r\n  bottom: 0;\r\n  left: 0;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 80px;\r\n  background-color: rgb(241, 241, 241);\r\n  box-shadow: 0 -1px 5px 0 rgb(190, 190, 190);\r\n}\r\n\r\n.slider-container {\r\n  display: flex;\r\n  width: 150px;\r\n  height: 25px;\r\n}\r\n.slider-hidden {\r\n  display: none;\r\n}\r\n\r\n.slider-item {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 25px;\r\n  height: 25px;\r\n  margin: 0 6px;\r\n  font-weight: 700;\r\n  font-size: 20px;\r\n  background-color: #fff;\r\n  border-radius: 50%;\r\n  border: 1px solid rgb(153, 153, 153);\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.slider-item-hidden {\r\n  visibility: hidden;\r\n}\r\n\r\n.tool-tip {\r\n  position: absolute;\r\n  bottom: 90px;\r\n  z-index: 2;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  font-size: 20px;\r\n  background-color: yellow;\r\n  border-radius: 20px;\r\n  box-shadow: 0 0 20px 0 rgb(190, 190, 190);\r\n  transition: opacity 1s;\r\n  opacity: 0;\r\n}\r\n\r\n.current-item {\r\n  color: red;\r\n}\r\n",""])},function(e,t,n){var r=n(14);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(0)(!1);var r=n(2),i=r(n(15)),o=r(n(16)),s=r(n(17));t.push([e.i,".main {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  transition: transform 1s;\n}\n\n.main:hover {\n  cursor: grab;\n}\n\n.main.active {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.clip-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-shrink: 0;\n  width: 23%;\n  height: 600px;\n  margin: 0 1%;\n  padding: 5px 0;\n  background-color: #FCF5F8;\n  border-radius: 5px;\n  box-shadow: -1px -1px 5px 0 rgb(161, 161, 161);\n}\n\n.title-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 110px;\n  padding: 10px 20px;\n  text-align: center;\n  font-size: 20px;\n  color: #fff;\n  background-color: green;\n}\n\n.title-item:hover {\n  color: rgb(253, 245, 133);\n}\n\n.clip-picture {\n  width: 100%;\n  height: 230px;\n  margin-bottom: 20px;\n}\n\n.clip-item-container {\n  width: 90%;\n  height: 40px;\n  text-align: center;\n}\n\n.channel-item {\n  padding: 0 20px;\n  overflow: auto;\n  background: url("+i+") 0 0/20px no-repeat;\n}\n\n.date-item {\n  background: url("+o+") 0 0/20px no-repeat;\n}\n\n.view-count-item {\n  background: url("+s+") 0 0/20px no-repeat;\n}\n\n.description-item {\n  width: 90%;\n  height: 200px;\n  overflow: auto;\n  font-size: 14px;\n  font-style: italic;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n",""])},function(e,t,n){e.exports=n.p+"87d12222d474d1abad1b945f9d326ebc.png"},function(e,t,n){e.exports=n.p+"f4171a124fea6cf7e2a3b5ff42e2159a.png"},function(e,t,n){e.exports=n.p+"1ea3e24d20a7d9b87ff464b5d263760b.png"},function(e,t,n){var r=n(19);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"@media (max-width: 1400px) {\r\n  .clip-container {\r\n    width: 31.3333333%;\r\n  }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .clip-container {\r\n    width: 42%;\r\n    margin: 0 4%;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n  .clip-container {\r\n    width: 46%;\r\n    margin: 0 2%;\r\n  }\r\n}\r\n\r\n@media (max-width: 700px) {\r\n  .clip-container {\r\n    width: 70%;\r\n    margin: 0 15%;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .clip-container {\r\n    width: 76%;\r\n    margin: 0 12%;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .clip-container {\r\n    width: 88%;\r\n    margin: 0 6%;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .clip-container {\r\n    width: 96%;\r\n    margin: 0 2%;\r\n  }\r\n}\r\n",""])},function(e,t,n){"use strict";n.r(t);n(3);n(6),n(9);var r=class{static render(){const e=document.createElement("header"),t=document.createElement("input");e.setAttribute("class","header"),e.appendChild(t),t.setAttribute("class","input-field"),document.body.appendChild(e)}};class i{static setAttributes(e,t){const n=document.createElement(e);return Object.keys(t).forEach(e=>{n.setAttribute(`${e}`,t[e])},t),n}static render(){const e=i.setAttributes("footer",{class:"footer"}),t=i.setAttributes("div",{class:"slider-container slider-hidden"}),n=i.setAttributes("div",{class:"slider-item first-item slider-item-hidden"}),r=i.setAttributes("div",{class:"slider-item prev-item slider-item-hidden"}),o=i.setAttributes("div",{class:"slider-item current-item"}),s=i.setAttributes("div",{class:"slider-item next-item"}),a=i.setAttributes("div",{class:"tool-tip invisible-tool"});n.innerHTML="<<",r.innerHTML="<",s.innerHTML=">",a.innerHTML="1",o.innerHTML="1",t.appendChild(n),t.appendChild(r),t.appendChild(o),t.appendChild(s),e.appendChild(a),e.appendChild(t),document.body.appendChild(e)}}n(11);var o=i;class s{constructor(e){this.dataArr=e}getContainerArr(){return this.dataArr.map(e=>{const t=document.createElement("section"),n=document.createElement("h2"),r=document.createElement("a"),i=document.createElement("img"),o=document.createElement("p"),s=document.createElement("p"),a=document.createElement("p"),d=document.createElement("p");return t.setAttribute("class","clip-container"),n.setAttribute("class","title-item"),r.setAttribute("href",`https://www.youtube.com/watch?v=${e.clipId}`),r.setAttribute("title","to YouTube"),r.setAttribute("target","_blank"),i.setAttribute("class","clip-picture"),i.setAttribute("src",`${e.picture.medium.url}`),i.setAttribute("width",`${e.picture.medium.width}`),i.setAttribute("height",`${e.picture.medium.height}`),i.setAttribute("alt","clip-picture"),o.setAttribute("class","channel-item clip-item-container"),s.setAttribute("class","date-item clip-item-container"),a.setAttribute("class","view-count-item clip-item-container"),d.setAttribute("class","description-item"),r.innerHTML=e.title,o.innerHTML=e.channelName,[s.innerHTML]=e.date.split("T"),a.innerHTML=e.viewCount,d.innerHTML=e.description,n.appendChild(r),t.appendChild(n),t.appendChild(i),t.appendChild(o),t.appendChild(s),t.appendChild(a),t.appendChild(d),t})}}n(13),n(18);var a=class{constructor(e){this.dataArr=e}static render(){const e=document.createElement("main");e.setAttribute("class","main"),document.body.appendChild(e)}fill(){const e=document.querySelector("main");new s(this.dataArr).getContainerArr().map(t=>e.appendChild(t))}};class d{constructor(e){this.state=e}static extractVideoId(e){return e.items.map(e=>e.id.videoId)}static extractPageToken(e){return e.nextPageToken}static extractClipData(e){return e.items.map(e=>{return{viewCount:e.statistics.viewCount,clipId:e.id,title:e.snippet.title,picture:e.snippet.thumbnails,channelName:e.snippet.channelTitle,date:e.snippet.publishedAt,description:e.snippet.description}})}async getSearchData(){const e=this.state,t=await fetch(e),n=await t.json();return{pageToken:d.extractPageToken(n),videoId:d.extractVideoId(n)}}async getVideoData(){const e=this.state,t=await fetch(e),n=await t.json();return d.extractClipData(n)}}class c{constructor(e,t){this.searchUrl=`https://www.googleapis.com/youtube/v3/search?fields=nextPageToken,items/id/videoId&part=snippet&key=${t}&type=video&maxResults=15&q=${e}`,this.videoUrl=null,this.request=e,this.key=t}async start(){const e=new d(this.searchUrl),t=await e.getSearchData(),{pageToken:n,videoId:r}=t;this.searchUrl=`https://www.googleapis.com/youtube/v3/search?fields=nextPageToken,items/id/videoId&part=snippet&key=${this.key}&type=video&maxResults=15&q=${this.request}&pageToken=${n}`,this.videoUrl=`https://www.googleapis.com/youtube/v3/videos?fields=items(id,snippet(publishedAt,title,description,thumbnails/medium,channelTitle),statistics/viewCount)&part=snippet,statistics&key=${this.key}&id=${r.join(",")}`;const i=new d(this.videoUrl),o=await i.getVideoData();new a(o).fill()}}class l{constructor(){this.pageControll=0,this.pageNumber=1}resetSliderData(){const e=document.querySelector(".main"),t=document.querySelector(".current-item"),n=document.querySelector(".tool-tip"),r=document.querySelector(".first-item"),i=document.querySelector(".prev-item");r.classList.toggle("slider-item-hidden",!0),i.classList.toggle("slider-item-hidden",!0),e.style.transform=`translateX(${this.pageControll})`,t.innerHTML=this.pageNumber,n.innerHTML=this.pageNumber}addSliderHandler(){const e=document.querySelector(".first-item"),t=document.querySelector(".next-item"),n=document.querySelector(".prev-item"),r=document.querySelector(".current-item"),i=document.querySelector(".tool-tip");let o;e.addEventListener("click",()=>{const t=document.querySelector(".main");n.classList.toggle("slider-item-hidden",!0),e.classList.toggle("slider-item-hidden",!0),this.pageControll=0,this.pageNumber=1,t.style.transform=`translateX(${-this.pageControll}%)`,i.innerHTML=`${this.pageNumber}`,r.innerHTML=`${this.pageNumber}`}),e.addEventListener("mousedown",()=>{i.style.opacity=1,i.innerHTML="1"}),e.addEventListener("mouseup",()=>{i.style.opacity=0}),n.addEventListener("click",()=>{const t=document.querySelector(".main");o=window.innerWidth,this.pageControll-=100,this.pageNumber-=1,i.innerHTML=`${this.pageNumber}`,r.innerHTML=`${this.pageNumber}`,t.style.transform=`translateX(${-this.pageControll}%)`,1===this.pageNumber&&n.classList.toggle("slider-item-hidden",!0),2===this.pageNumber&&e.classList.toggle("slider-item-hidden",!0)}),n.addEventListener("mousedown",()=>{i.style.opacity=1,i.innerHTML=this.pageNumber-1}),n.addEventListener("mouseup",()=>{i.style.opacity=0,i.innerHTML=this.pageNumber-1}),t.addEventListener("mousedown",()=>{i.style.opacity=1,i.innerHTML=this.pageNumber+1}),t.addEventListener("mouseup",()=>{i.style.opacity=0}),t.addEventListener("click",()=>{const t=document.querySelector(".main");n.classList.remove("slider-item-hidden"),o=window.innerWidth,t.scrollLeft+=o,this.pageControll+=100,this.pageNumber+=1,t.style.transform=`translateX(${-this.pageControll}%)`,i.innerHTML=this.pageNumber,r.innerHTML=this.pageNumber,"3"===r.innerHTML&&e.classList.remove("slider-item-hidden")})}addScrollHandler(){const e=document.querySelector("body"),t=document.querySelector(".main"),n=document.querySelector(".tool-tip"),r=document.querySelector(".current-item"),i=document.querySelector(".prev-item"),o=document.querySelector(".first-item");let s,a,d=!1;e.addEventListener("mousedown",e=>{n.style.opacity=1,d=!0,t.classList.add("active"),a=e.pageX,t.style.transform=`translateX(${-this.pageControll}%)`}),e.addEventListener("mouseleave",()=>{d=!1,t.classList.remove("active")}),e.addEventListener("mouseup",()=>{-s>10&&(this.pageControll+=100,this.pageNumber+=1),-s<-10&&0!==this.pageControll&&(this.pageControll-=100,this.pageNumber-=1),s=0,t.style.transform=`translateX(${-this.pageControll}%)`,n.innerHTML=this.pageNumber,r.innerHTML=this.pageNumber,n.style.opacity=0,d=!1,t.classList.remove("active"),2===this.pageNumber&&(i.classList.remove("slider-item-hidden"),o.classList.toggle("slider-item-hidden",!0)),1===this.pageNumber&&i.classList.toggle("slider-item-hidden",!0),3===this.pageNumber&&o.classList.remove("slider-item-hidden")}),e.addEventListener("mousemove",e=>{if(!d)return;e.preventDefault();const r=e.pageX-a;s=100/window.innerWidth*r,t.style.transform=`translateX(${-(this.pageControll+-r/20)}%)`,-s>10&&(n.innerHTML=this.pageNumber+1),-s<10&&-s>-10&&(n.innerHTML=this.pageNumber),-s<-10&&0!==this.pageControll&&(n.innerHTML=this.pageNumber-1)})}}r.render(),a.render(),o.render(),class{static addInputHandler(){const e=document.querySelector(".input-field"),t=document.querySelector(".main"),n=document.querySelector(".next-item");e.addEventListener("keypress",r=>{if(13===r.keyCode){const r=new c(e.value,"AIzaSyCRo6yvMOCcpbz2sLZojBXP4nWO2mVgAek"),i=new l;i.resetSliderData(),e.value=null,document.querySelector(".slider-container").classList.remove("slider-hidden"),""===t.innerHTML?r.start():(t.innerHTML="",r.start()),i.addSliderHandler(),i.addScrollHandler(),t.addEventListener("mouseup",()=>{const e=document.querySelector("body"),t=window.innerWidth;e.scrollWidth<=4*t&&r.start()}),n.addEventListener("click",()=>{const e=document.querySelector("body"),t=window.innerWidth;e.scrollWidth<=4*t&&r.start()})}})}}.addInputHandler()}]);
//# sourceMappingURL=app.bundle.js.map