(function(){"use strict";var t={769:function(t,n,r){var e=r(9963),o=r(6252);const i=(0,o.uE)('<nav id="top"><ul><li><a href="#"><img src="#"></a></li><li><a href="#">채용정보</a></li><li><a href="#">기업/연봉</a></li><li><a href="#">마이페이지</a></li><li><a href="#">로그인</a></li></ul></nav>',1),l={class:"content"},a={class:"container"},u=(0,o.uE)('<table class="list"><tbody class="body"><tr><td>문의회사</td><td>내가 문의한 회사이름이 출력된다.</td></tr><tr><td>글제목</td><td>내가 쓴 글제목을 출력한다.</td></tr><tr><td>내용</td><td>내가 입력한 내용이 출력된다.</td></tr></tbody></table><hr><table class="list"><tbody class="answer"><tr><td>답변</td><td>내가 받은 답변이 출력된다</td></tr></tbody></table>',3),c=(0,o._)("hr",null,null,-1),f=(0,o._)("select",{name:"",id:""},[(0,o._)("option",{value:""},"답변대기"),(0,o._)("option",{value:""},"답변완료")],-1),s=(0,o._)("br",null,null,-1),d=(0,o._)("textarea",{name:"",id:"",cols:"30",rows:"10"},"\r\n\r\n      ",-1),v=(0,o._)("br",null,null,-1),b=(0,o._)("input",{type:"submit",value:"답변하기"},null,-1);function p(t,n,r,e,p,h){return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("div",l,[(0,o._)("div",a,[u,(0,o._)("button",{onClick:n[0]||(n[0]=(...t)=>h.golist&&h.golist(...t))},"목록으로"),c,(0,o.Uk)(" 답변상태 "),f,s,(0,o.Uk)(" 내용 "),d,v,b])])],64)}var h={name:"App",methods:{golist(){location.href="page10"}}},g=r(3744);const y=(0,g.Z)(h,[["render",p]]);var m=y;(0,e.ri)(m).mount("#app")}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(n,e,o,i){if(!e){var l=1/0;for(f=0;f<t.length;f++){e=t[f][0],o=t[f][1],i=t[f][2];for(var a=!0,u=0;u<e.length;u++)(!1&i||l>=i)&&Object.keys(r.O).every((function(t){return r.O[t](e[u])}))?e.splice(u--,1):(a=!1,i<l&&(l=i));if(a){t.splice(f--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[e,o,i]}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){r.j=2729}(),function(){var t={2729:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,i,l=e[0],a=e[1],u=e[2],c=0;if(l.some((function(n){return 0!==t[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(u)var f=u(r)}for(n&&n(e);c<l.length;c++)i=l[c],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(f)},e=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[4998],(function(){return r(769)}));e=r.O(e)})();