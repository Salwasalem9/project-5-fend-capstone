if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,s,c)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(s.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=c(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-224ec2e5"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./index.html",revision:"042bd9f26c29996b4de64303262eb237"},{url:"120.js",revision:"757a261473663e46e54c71436bbec55e"},{url:"120.js.LICENSE.txt",revision:"385c9a659c8a5182b86a7090d58d0fbc"},{url:"608.js",revision:"b335d5c269cd9065f40184cdd4efae3b"},{url:"856.js",revision:"419143e346bb6b7eebae649f2c3726a2"},{url:"856.js.LICENSE.txt",revision:"312b03fc2032f4a26db5e85de50ce98a"},{url:"main.css",revision:"8a1bd195b1b4b5cffddc43d37224e41c"},{url:"main.js",revision:"9d9d6b7af5757caf686ab598ba4165d2"},{url:"main.js.LICENSE.txt",revision:"a78278a45b87a1db3b3e10df5ea34356"},{url:"media/im.ico",revision:"db71d59c068d55fa43f9fbf776cd0c27"},{url:"media/yu.jpg",revision:"31e46274fbbda4c2f9767e6eb1e40aa7"}],{})}));
