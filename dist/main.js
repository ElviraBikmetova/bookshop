/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/style.scss":(e,t,r)=>{r.r(t)},"./src/js/catalog.js":(e,t,r)=>{function o(){const e=document.querySelector(".catalog"),t=e.querySelectorAll(".categories-nav__item"),o=["Architecture","Art","Biography & Autobiography","Business","Crafts & Hobbies","Drama","Fiction","Cooking","Health & Fitness","History","Humor","Poetry","Psychology","Science","Technology","Travel"];let n=!0;const a=e.querySelector(".btn-load-more");let c,s=e.querySelector(".books");const i="AIzaSyANW-xvXkVxLMyE94Ju5GsXYQc2Enq1F_c";async function l(e,t,o){try{console.log("try");const a=await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${e.dataset.index}"&key=${o}&printType=books&startIndex=${t}&maxResults=6&langRestrict=en`),c=await a.json();!function(e){let t="";e.forEach((e=>{const o=r("./src/img/book-placeholder.jpeg"),n=`\n            <div class="books-card">\n                <div class="books-card__image">\n                    <img\n                        src="${e.volumeInfo.imageLinks?.thumbnail||o}"\n                    />\n                </div>\n                <div class="books-card__text">\n                    <p class="books-card__gray-text">${e.volumeInfo.authors??""}</p>\n                    <p>${e.volumeInfo.title??""}</p>\n                    <div class="books-card__rating">\n                        <p>${e.volumeInfo.averageRating??""}</p>\n                        <p class="books-card__gray-text">${e.volumeInfo.ratingsCount??""}</p>\n                    </div>\n                    <p class="books-card__gray-text books-card__description">\n                        ${e.volumeInfo.description??""}\n                    </p>\n                    <p>${e.saleInfo.retailPrice?.amount||""}</p>\n                    <button class="btn btn-buy-now">buy now</button>\n                </div>\n            </div>\n          `;t+=n})),n?s.innerHTML=t:s.insertAdjacentHTML("beforeend",t)}(c.items)}catch{console.log("error")}}function d(t){const r=e.querySelector(".active-category");console.log("active",r),r&&r.classList.remove("active-category"),t.classList.add("active-category")}var u;t.forEach(((e,t)=>{e.dataset.index=o[t],function(e){e.addEventListener("click",(()=>{n=!0,l(e,0),d(e)}))}(e)})),l(u=t[0],0,i),d(u);e.querySelector(".active-category");!function(){let t=0;a.addEventListener("click",(()=>{const r=e.querySelector(".active-category");n&&(t=6),n=!1,l(r,t),t+=6}))}(),function(){let t=new MutationObserver((t=>{t.forEach((()=>{c=e.querySelectorAll(".btn-buy-now"),c&&function(e){let t=0;e.forEach((e=>{e.addEventListener("click",(()=>{t++,console.log(t),e.innerHTML="in the cart"}))}))}(c)}))}));t.observe(s,{childList:!0,subtree:!0})}()}r.r(t),r.d(t,{initCatalog:()=>o})},"./src/js/slider.js":(e,t,r)=>{r.r(t),r.d(t,{images:()=>o,initSlider:()=>n});let o=[{url:r("./src/img/black-friday-sale.png")},{url:r("./src/img/for-entrepreneurs.png")},{url:r("./src/img/check-out.png")}];function n(e,t){if(!e||!e.length)return;t=t||{dots:!1,autoplay:!1,autoplayInterval:3e3};const r=document.querySelector(".slider"),o=r.querySelector(".slider__images");function n(e){if(o.querySelector(".active").classList.remove("active"),o.querySelector(`.n${e}`).classList.add("active"),t.dots){let t=document.querySelector(".slider__dots");t.querySelector(".active").classList.remove("active"),t.querySelector(`.n${e}`).classList.add("active")}}e.forEach(((e,t)=>{let r=document.createElement("div");r.className=`image n${t} ${t?"":"active"}`,r.dataset.index=t,r.style.backgroundImage=`url(${e.url})`,o.appendChild(r)})),t.dots&&function(){let t=document.createElement("div");t.className="slider__dots",e.forEach(((e,r)=>{let o=document.createElement("div");o.className=`slider__dots-item n${r} ${r?"":"active"}`,o.dataset.index=r,o.addEventListener("click",(function(){n(this.dataset.index)})),t.appendChild(o)})),r.appendChild(t)}(),t.autoplay&&setInterval((()=>{let t=+o.querySelector(".active").dataset.index;n(t===e.length-1?0:t+1)}),t.autoplayInterval)}},"./src/img/black-friday-sale.png":(e,t,r)=>{e.exports=r.p+"img/954eb8e0013338d199a8.png"},"./src/img/book-placeholder.jpeg":(e,t,r)=>{e.exports=r.p+"img/4e5093fb876d4e646006.jpeg"},"./src/img/check-out.png":(e,t,r)=>{e.exports=r.p+"img/b244cee97baca03a47ab.png"},"./src/img/for-entrepreneurs.png":(e,t,r)=>{e.exports=r.p+"img/5c6392925d06c0cbab9e.png"}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})();var o={};(()=>{r.r(o);r("./src/style.scss");var e=r("./src/js/slider.js"),t=r("./src/js/catalog.js");document.addEventListener("DOMContentLoaded",(()=>{(0,e.initSlider)(e.images,{dots:!0,autoplay:!1,autoplayInterval:5e3}),(0,t.initCatalog)()}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU8sV0FFN0RqQixPQUFPQyxlQUFlUCxFQUFTLGFBQWMsQ0FBRXVCLE9BQU8sR0FBTyxRQ0w5RCxJQUFJQyxFQUNBNUIsRUFBb0JjLEVBQUVlLGdCQUFlRCxFQUFZNUIsRUFBb0JjLEVBQUVnQixTQUFXLElBQ3RGLElBQUlsSCxFQUFXb0YsRUFBb0JjLEVBQUVsRyxTQUNyQyxJQUFLZ0gsR0FBYWhILElBQ2JBLEVBQVNtSCxnQkFDWkgsRUFBWWhILEVBQVNtSCxjQUFjQyxNQUMvQkosR0FBVyxDQUNmLElBQUlLLEVBQVVySCxFQUFTc0gscUJBQXFCLFVBQ3pDRCxFQUFRdkQsU0FBUWtELEVBQVlLLEVBQVFBLEVBQVF2RCxPQUFTLEdBQUdzRCxJQUM1RCxDQUlELElBQUtKLEVBQVcsTUFBTSxJQUFJTyxNQUFNLHlEQUNoQ1AsRUFBWUEsRUFBVVEsUUFBUSxPQUFRLElBQUlBLFFBQVEsUUFBUyxJQUFJQSxRQUFRLFlBQWEsS0FDcEZwQyxFQUFvQnFDLEVBQUlULDJHQ1J4QmhILFNBQVM4QyxpQkFBaUIsb0JBQW9CLE1BTTFDLElBQUFjLFlBQVcsRUFBQUYsT0FMUyxDQUNsQkssTUFBTSxFQUNOQyxVQUFVLEVBQ1ZDLGlCQUFrQixPQUdwQixJQUFBbkUsY0FBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2tzaG9wLy4vc3JjL2pzL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vYm9va3Nob3AvLi9zcmMvanMvc2xpZGVyLmpzIiwid2VicGFjazovL2Jvb2tzaG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jvb2tzaG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Jvb2tzaG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9va3Nob3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib29rc2hvcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ib29rc2hvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLy8gcmVxdWlyZSgnZG90ZW52JykubG9hZCgpO1xyXG4gICAgLy8gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygna2V5JywgcHJvY2Vzcy5lbnYuQVBJX0tFWSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2F0YWxvZygpIHtcclxuXHJcbiAgICAvLyByZXF1aXJlKCdkb3RlbnYnKS5sb2FkKCk7XHJcbiAgICAvLyByZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdrZXknLCBwcm9jZXNzLmVudilcclxuXHJcbiAgICBjb25zdCBjYXRhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGFsb2cnKTtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBjYXRhbG9nLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRlZ29yaWVzLW5hdl9faXRlbScpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NhdGVnb3JpZXMnLCBjYXRlZ29yaWVzWzBdKVxyXG4gICAgY29uc3QgY2F0ZWdvcmllc1N1YmplY3QgPSBbJ0FyY2hpdGVjdHVyZScsICdBcnQnLCAnQmlvZ3JhcGh5ICYgQXV0b2Jpb2dyYXBoeScsICdCdXNpbmVzcycsICdDcmFmdHMgJiBIb2JiaWVzJywgJ0RyYW1hJywgJ0ZpY3Rpb24nLCAnQ29va2luZycsICdIZWFsdGggJiBGaXRuZXNzJywgJ0hpc3RvcnknLCAnSHVtb3InLCAnUG9ldHJ5JywgJ1BzeWNob2xvZ3knLCAnU2NpZW5jZScsICdUZWNobm9sb2d5JywgJ1RyYXZlbCddXHJcbiAgICBsZXQgaXNGaXJzdExvYWRpZyA9IHRydWVcclxuICAgIGNvbnN0IGJ0bkxvYWRNb3JlID0gY2F0YWxvZy5xdWVyeVNlbGVjdG9yKCcuYnRuLWxvYWQtbW9yZScpO1xyXG4gICAgbGV0IGJvb2tzID0gY2F0YWxvZy5xdWVyeVNlbGVjdG9yKCcuYm9va3MnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdidG5Mb2FkTW9yZScsIGJ0bkxvYWRNb3JlKVxyXG4gICAgbGV0IGJ0bkJ1eU5vd1xyXG5cclxuICAgIC8vIGNvbnN0IGFjdGl2ZUNhdGVnb3J5ID0gY2F0YWxvZy5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWNhdGVnb3J5Jyk7XHJcbiAgICAvLyBjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZXHJcbiAgICAvLyBjb25zb2xlLmxvZygna2V5Jywga2V5KVxyXG4gICAgLy8gY29uc29sZS5sb2coJ2tleScsIHByb2Nlc3MuZW52LkFQSV9LRVkpXHJcbiAgICBjb25zdCBrZXkgPSAnQUl6YVN5QU5XLXh2WGtWeExNeUU5NEp1NUdzWFlRYzJFbnExRl9jJ1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YShpdGVtLCBzdGFydEluZGV4LCBrZXkpIHtcclxuICAgICAgICAvLyBjb25zdCBrZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2tleScsIGtleSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygna2V5JywgcHJvY2Vzcy5lbnYuQVBJX0tFWSlcclxuICAgICAgICAvLyBjb25zdCBrZXkgPSAnQUl6YVN5QU5XLXh2WGtWeExNeUU5NEp1NUdzWFlRYzJFbnExRl9jJ1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndHJ5JylcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYm9va3MvdjEvdm9sdW1lcz9xPVwic3ViamVjdDoke2l0ZW0uZGF0YXNldC5pbmRleH1cIiZrZXk9JHtrZXl9JnByaW50VHlwZT1ib29rcyZzdGFydEluZGV4PSR7c3RhcnRJbmRleH0mbWF4UmVzdWx0cz02JmxhbmdSZXN0cmljdD1lbmApO1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpXHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gcmVzdWx0Lml0ZW1zXHJcbiAgICAgICAgICAgIGNyZWF0ZUJvb2tDYXJkQmxvY2soaXRlbXMpXHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCb29rQ2FyZEJsb2NrKGl0ZW1zKSB7XHJcblxyXG4gICAgICAgIGxldCBjYXJkcyA9ICcnO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VQbGFjZWhvbGRlckxpbmsgPSByZXF1aXJlKFwiLi4vaW1nL2Jvb2stcGxhY2Vob2xkZXIuanBlZ1wiKVxyXG4gICAgICAgICAgICBjb25zdCBjYXJkQmxvY2sgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rcy1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9va3MtY2FyZF9faW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIiR7aXRlbS52b2x1bWVJbmZvLmltYWdlTGlua3M/LnRodW1ibmFpbCB8fCBpbWFnZVBsYWNlaG9sZGVyTGlua31cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib29rcy1jYXJkX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib29rcy1jYXJkX19ncmF5LXRleHRcIj4ke2l0ZW0udm9sdW1lSW5mby5hdXRob3JzID8/ICcnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0udm9sdW1lSW5mby50aXRsZSA/PyAnJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvb2tzLWNhcmRfX3JhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0udm9sdW1lSW5mby5hdmVyYWdlUmF0aW5nID8/ICcnfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJib29rcy1jYXJkX19ncmF5LXRleHRcIj4ke2l0ZW0udm9sdW1lSW5mby5yYXRpbmdzQ291bnQgPz8gJyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYm9va3MtY2FyZF9fZ3JheS10ZXh0IGJvb2tzLWNhcmRfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS52b2x1bWVJbmZvLmRlc2NyaXB0aW9uID8/ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0uc2FsZUluZm8ucmV0YWlsUHJpY2U/LmFtb3VudCB8fCAnJ308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tYnV5LW5vd1wiPmJ1eSBub3c8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIGA7XHJcbiAgICAgICAgICBjYXJkcyA9IGNhcmRzICsgY2FyZEJsb2NrO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKGlzRmlyc3RMb2FkaWcpIHtcclxuICAgICAgICAgICAgYm9va3MuaW5uZXJIVE1MID0gY2FyZHNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBib29rcy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNhcmRzKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaXRlbS5kYXRhc2V0LmluZGV4ID0gY2F0ZWdvcmllc1N1YmplY3RbaW5kZXhdXHJcbiAgICAgICAgdXNlclJlcXVlc3QoaXRlbSlcclxuICAgICAgICAvLyBsb2FkTW9yZShpdGVtKVxyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBzZXRBY3RpdmVDYXRlZ29yeShpdGVtKSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlQ2F0ZWdvcnkgPSBjYXRhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtY2F0ZWdvcnknKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYWN0aXZlJywgYWN0aXZlQ2F0ZWdvcnkpXHJcbiAgICAgICAgaWYgKGFjdGl2ZUNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtY2F0ZWdvcnlcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWNhdGVnb3J5XCIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVmYXVsdFJlcXVlc3QoaXRlbSkge1xyXG4gICAgICAgIGZldGNoRGF0YShpdGVtLCAwLCBrZXkpXHJcbiAgICAgICAgc2V0QWN0aXZlQ2F0ZWdvcnkoaXRlbSlcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0UmVxdWVzdChjYXRlZ29yaWVzWzBdKVxyXG4gICAgLy8gZmV0Y2hEYXRhKGNhdGVnb3JpZXNbMF0sIDApXHJcblxyXG4gICAgZnVuY3Rpb24gdXNlclJlcXVlc3QoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlzRmlyc3RMb2FkaWcgPSB0cnVlXHJcbiAgICAgICAgICAgIGZldGNoRGF0YShpdGVtLCAwKVxyXG4gICAgICAgICAgICBzZXRBY3RpdmVDYXRlZ29yeShpdGVtKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50Q2F0ZWdvcnkgPSBjYXRhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtY2F0ZWdvcnknKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXJyZW50Q2F0ZWdvcnknLCBjdXJyZW50Q2F0ZWdvcnkpXHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZE1vcmUoKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSAwXHJcbiAgICAgICAgYnRuTG9hZE1vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUNhdGVnb3J5ID0gY2F0YWxvZy5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWNhdGVnb3J5Jyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZUNhdGVnb3J5LCBhY3RpdmVDYXRlZ29yeSlcclxuICAgICAgICAgICAgaWYgKGlzRmlyc3RMb2FkaWcpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSA2XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGaXJzdExvYWRpZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIGZldGNoRGF0YShhY3RpdmVDYXRlZ29yeSwgc3RhcnRJbmRleClcclxuICAgICAgICAgICAgc3RhcnRJbmRleCArPSA2XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTW9yZSgpXHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiB3YWl0Rm9yRWxlbWVudCgpIHtcclxuICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihtdXRhdGlvbnMgPT4ge1xyXG4gICAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgYnRuQnV5Tm93ID0gY2F0YWxvZy5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWJ1eS1ub3cnKTtcclxuICAgICAgICAgICAgaWYgKGJ0bkJ1eU5vdykge1xyXG4gICAgICAgICAgICAvLyAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAvLyDQtNC10LvQsNC10Lwg0YfRgtC+LdGC0L4g0YEg0LrQvdC+0L/QutC+0LlcclxuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZygnYnRuQnV5Tm93JywgYnRuQnV5Tm93KVxyXG4gICAgICAgICAgICBidXlOb3coYnRuQnV5Tm93KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShib29rcywgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdhaXRGb3JFbGVtZW50KClcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHdhaXRGb3JTZWxlY3Rvck9uY2Uoc2VsZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgIGxldCBvYnNlcnZlciA9IG51bGw7XHJcbiAgICAgICAgICBsZXQgY2hlY2tlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIgJiYgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8LCDQvNC+0LbQtdGCINCx0YvRgtGMINGB0LXQu9C10LrRgtC+0YAg0YHRgNCw0LfRgyDQuNC80LXQtdGC0YHRjyDQvdCwINGB0YLRgNCw0L3QuNGG0LVcclxuICAgICAgICAgIC8vINGC0L7Qs9C00LAg0Lgg0L3QtSDQvdCw0LTQviDQuNC90LjRhtC40LDQu9C40LfQuNGA0L7QstCw0YLRjCBNdXRhdGlvbk9ic2VydmVyXHJcbiAgICAgICAgICBpZiAoIWNoZWNrZXIoKSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGNoZWNrZXIpO1xyXG4gICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwge1xyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxyXG4gICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBidXlOb3coYnRuQnV5Tm93KSB7XHJcbiAgICAgICAgLy8gYnRuQnV5Tm93ID0gY2F0YWxvZy5xdWVyeVNlbGVjdG9yQWxsKCcuYnRuLWJ1eS1ub3cnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYnRuQnV5Tm93JywgYnRuQnV5Tm93KVxyXG4gICAgICAgIGxldCBib29rc0luQ2FydENvdW50ID0gMFxyXG4gICAgICAgIC8vIGNvbnN0IGluVGhlQ2FydCA9IGBgXHJcbiAgICAgICAgYnRuQnV5Tm93LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgLy8gbGV0IGJ0bkJ1eU5vdyA9IGNhdGFsb2cucXVlcnlTZWxlY3RvckFsbCgnLmJ0bi1idXktbm93Jyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdidG5CdXlOb3cnLCBidG5CdXlOb3cpXHJcbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBib29rc0luQ2FydENvdW50KytcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvb2tzSW5DYXJ0Q291bnQpXHJcbiAgICAgICAgICAgICAgICBpdGVtLmlubmVySFRNTCA9ICdpbiB0aGUgY2FydCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsImV4cG9ydCBsZXQgaW1hZ2VzID0gW3tcclxuICAgIHVybDogcmVxdWlyZShcIi4uLy4uL3NyYy9pbWcvYmxhY2stZnJpZGF5LXNhbGUucG5nXCIpLFxyXG4gIH0sIHtcclxuICAgIHVybDogcmVxdWlyZShcIi4uLy4uL3NyYy9pbWcvZm9yLWVudHJlcHJlbmV1cnMucG5nXCIpLFxyXG4gIH0sIHtcclxuICAgIHVybDogcmVxdWlyZShcIi4uLy4uL3NyYy9pbWcvY2hlY2stb3V0LnBuZ1wiKVxyXG4gIH1dO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTbGlkZXIoaW1hZ2VzLCBvcHRpb25zKSB7XHJcbiAgaWYgKCFpbWFnZXMgfHwgIWltYWdlcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBhdXRvcGxheUludGVydmFsOiAzMDAwXHJcbiAgfVxyXG5cclxuICBjb25zdCBzbGlkZXJXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXJcIik7XHJcbiAgY29uc3Qgc2xpZGVySW1hZ2VzID0gc2xpZGVyV3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9faW1hZ2VzXCIpO1xyXG5cclxuICBpbml0SW1hZ2VzKCk7XHJcblxyXG4gIGlmIChvcHRpb25zLmRvdHMpIHtcclxuICAgIGluaXREb3RzKCk7XHJcbiAgfVxyXG5cclxuICBpZiAob3B0aW9ucy5hdXRvcGxheSkge1xyXG4gICAgaW5pdEF1dG9wbGF5KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIGluaXRJbWFnZXMoKSB7XHJcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbWFnZUVsZW1lbnQuY2xhc3NOYW1lID0gYGltYWdlIG4ke2luZGV4fSAke2luZGV4PyBcIlwiIDogXCJhY3RpdmVcIn1gO1xyXG4gICAgICBpbWFnZUVsZW1lbnQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gICAgICBpbWFnZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlLnVybH0pYDtcclxuICAgICAgc2xpZGVySW1hZ2VzLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmVTbGlkZXIobnVtKSB7XHJcbiAgICBzbGlkZXJJbWFnZXMucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHNsaWRlckltYWdlcy5xdWVyeVNlbGVjdG9yKGAubiR7bnVtfWApLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuZG90cykge1xyXG4gICAgICBsZXQgZG90c1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlcl9fZG90c1wiKTtcclxuICAgICAgZG90c1dyYXBwZXIucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgZG90c1dyYXBwZXIucXVlcnlTZWxlY3RvcihgLm4ke251bX1gKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBpbml0RG90cygpIHtcclxuICAgIGxldCBkb3RzV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkb3RzV3JhcHBlci5jbGFzc05hbWUgPSBcInNsaWRlcl9fZG90c1wiO1xyXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZG90LmNsYXNzTmFtZSA9IGBzbGlkZXJfX2RvdHMtaXRlbSBuJHtpbmRleH0gJHtpbmRleD8gXCJcIiA6IFwiYWN0aXZlXCJ9YDtcclxuICAgICAgZG90LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICAgICAgZG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBtb3ZlU2xpZGVyKHRoaXMuZGF0YXNldC5pbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkb3RzV3JhcHBlci5hcHBlbmRDaGlsZChkb3QpO1xyXG4gICAgfSk7XHJcbiAgICBzbGlkZXJXcmFwcGVyLmFwcGVuZENoaWxkKGRvdHNXcmFwcGVyKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXRBdXRvcGxheSgpIHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgbGV0IGN1cnJlbnROdW1iZXIgPSArc2xpZGVySW1hZ2VzLnF1ZXJ5U2VsZWN0b3IoXCIuYWN0aXZlXCIpLmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIGxldCBuZXh0TnVtYmVyID0gY3VycmVudE51bWJlciA9PT0gaW1hZ2VzLmxlbmd0aCAtIDE/IDAgOiBjdXJyZW50TnVtYmVyICsgMTtcclxuICAgICAgbW92ZVNsaWRlcihuZXh0TnVtYmVyKTtcclxuICAgIH0sIG9wdGlvbnMuYXV0b3BsYXlJbnRlcnZhbCk7XHJcbiAgfVxyXG59XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyByZXF1aXJlKCdkb3RlbnYnKS5sb2FkKCk7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB7aW1hZ2VzLCBpbml0U2xpZGVyfSBmcm9tICcuL2pzL3NsaWRlcic7XHJcbmltcG9ydCB7IGluaXRDYXRhbG9nLCBmaXJzdENhdGVnb3J5UmVxdWVzdCwgYW5vdGhlckNhdGVnb3J5UmVxdWVzdCB9IGZyb20gJy4vanMvY2F0YWxvZyc7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgbGV0IHNsaWRlck9wdGlvbnMgPSB7XHJcbiAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSwgLy8g0L/QvtC80LXQvdGP0YLRjCDQvdCwIHRydWVcclxuICAgICAgYXV0b3BsYXlJbnRlcnZhbDogNTAwMFxyXG4gICAgfVxyXG4gICAgaW5pdFNsaWRlcihpbWFnZXMsIHNsaWRlck9wdGlvbnMpO1xyXG4gICAgaW5pdENhdGFsb2coKVxyXG4gICAgLy8gZmlyc3RDYXRlZ29yeVJlcXVlc3QoKVxyXG4gICAgLy8gYW5vdGhlckNhdGVnb3J5UmVxdWVzdCgpXHJcbiAgfSk7Il0sIm5hbWVzIjpbImluaXRDYXRhbG9nIiwiY2F0YWxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhdGVnb3JpZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2F0ZWdvcmllc1N1YmplY3QiLCJpc0ZpcnN0TG9hZGlnIiwiYnRuTG9hZE1vcmUiLCJidG5CdXlOb3ciLCJib29rcyIsImtleSIsImFzeW5jIiwiZmV0Y2hEYXRhIiwiaXRlbSIsInN0YXJ0SW5kZXgiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGFzZXQiLCJpbmRleCIsInJlc3VsdCIsImpzb24iLCJpdGVtcyIsImNhcmRzIiwiZm9yRWFjaCIsImltYWdlUGxhY2Vob2xkZXJMaW5rIiwiY2FyZEJsb2NrIiwidm9sdW1lSW5mbyIsImltYWdlTGlua3MiLCJ0aHVtYm5haWwiLCJhdXRob3JzIiwidGl0bGUiLCJhdmVyYWdlUmF0aW5nIiwicmF0aW5nc0NvdW50IiwiZGVzY3JpcHRpb24iLCJzYWxlSW5mbyIsInJldGFpbFByaWNlIiwiYW1vdW50IiwiaW5uZXJIVE1MIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY3JlYXRlQm9va0NhcmRCbG9jayIsInNldEFjdGl2ZUNhdGVnb3J5IiwiYWN0aXZlQ2F0ZWdvcnkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwidXNlclJlcXVlc3QiLCJsb2FkTW9yZSIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImJvb2tzSW5DYXJ0Q291bnQiLCJidXlOb3ciLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsIndhaXRGb3JFbGVtZW50IiwiaW1hZ2VzIiwidXJsIiwiaW5pdFNsaWRlciIsIm9wdGlvbnMiLCJsZW5ndGgiLCJkb3RzIiwiYXV0b3BsYXkiLCJhdXRvcGxheUludGVydmFsIiwic2xpZGVyV3JhcHBlciIsInNsaWRlckltYWdlcyIsIm1vdmVTbGlkZXIiLCJudW0iLCJkb3RzV3JhcHBlciIsImltYWdlIiwiaW1hZ2VFbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYXBwZW5kQ2hpbGQiLCJkb3QiLCJ0aGlzIiwiaW5pdERvdHMiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnROdW1iZXIiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsIkVycm9yIiwicmVwbGFjZSIsInAiXSwic291cmNlUm9vdCI6IiJ9