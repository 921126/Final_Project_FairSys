(function(){"use strict";var e={9220:function(e,t,i){var n=i(9963),r=i(6252);const d=(0,r._)("header",null,[(0,r._)("ul",{class:"head"},[(0,r._)("li",null,"메인로고"),(0,r._)("li",null,"등록"),(0,r._)("li",null,"공고 관리"),(0,r._)("li",null,"마이페이지"),(0,r._)("li",null,"로그인/로그아웃")])],-1),o=(0,r._)("h3",{style:{"text-align":"center"}},"채용 공고 수정 페이지",-1),l={action:"",method:"post"},u=(0,r.uE)('<div id=""> 제목 <input type="text"><br></div><div id=""> 기업명 <input type="text" id="com_name" value="데이터" readonly><br></div><div id=""> 담당자 성함 <input type="text"><br></div><div id=""> 휴대폰 번호 <div class="tel_number_input"><input type="text" id="tel_number_1"> - <input type="text" id="tel_number_2"> - <input type="text" id="tel_number_3"></div></div><div id=""> 이메일 주소 <input type="text"><br></div><div id=""> 업종 <input type="text"><br></div><div id=""> 모집부서 <input type="text"><br></div><div id=""> 대표 근무지역 <div class="kakaoAPI">(카카오맵api)</div> <br></div><div id=""> 경력 여부 <div style="display:inline-block;"><input type="radio" name="career_type">신입 <input type="radio" name="career_type">경력 <input type="radio" name="career_type">경력무관 </div></div><div id=""> 연봉/급여 <input type="text"><br></div><div id=""> 근무 형태 <div style="display:inline-block;"><input type="radio" name="work_type" value="정규직">정규직 <input type="radio" name="work_type" value="계약직">계약직 <input type="radio" name="work_type" value="인턴">인턴 </div></div><div id=""> 상세 내용 <div> (에디터api) </div></div>',12),p={id:""},a={id:""},v=(0,r._)("div",{id:"process_wrap"},[(0,r._)("input",{type:"text",id:"process",value:"서류전형",readonly:""})],-1),s={id:"process_wrap"},c=(0,r._)("input",{type:"text",id:"process",value:"1차면접",readonly:""},null,-1),y={id:"process_wrap"},f=(0,r._)("input",{type:"text",id:"process",value:"2차면접",readonly:""},null,-1),_=(0,r._)("div",{id:"process_wrap"},[(0,r._)("input",{type:"text",id:"process",value:"최종합격",readonly:""})],-1),m=(0,r.uE)('<div id="endDate_wrap"> 마감일자 <div> (달력api) </div></div><div class="buttons"><input type="submit" value="수정"><a href="#" class="list">목록</a><a href="#" class="delete">삭제</a></div>',2),b=(0,r._)("footer",{style:{"text-align":"center"}},[(0,r.Uk)(" 푸푸푸푸"),(0,r._)("br"),(0,r.Uk)(" 터터터터 ")],-1);function h(e,t,i,n,h,x){return(0,r.wg)(),(0,r.iD)(r.HY,null,[d,(0,r._)("section",null,[o,(0,r._)("form",l,[u,(0,r._)("div",p,[(0,r.Uk)(" 전형 절차 "),(0,r._)("div",a,[v,(0,r._)("div",s,[c,(0,r._)("img",{class:"deleteBtn",onClick:t[0]||(t[0]=(...e)=>x.deleteItem&&x.deleteItem(...e)),src:"https://picsum.photos/20/20",alt:"삭제"})]),(0,r._)("div",y,[f,(0,r._)("img",{class:"deleteBtn",onClick:t[1]||(t[1]=(...e)=>x.deleteItem&&x.deleteItem(...e)),src:"https://picsum.photos/20/20",alt:"삭제"})]),_])]),m])]),b],64)}var x={name:"App",methods:{deleteItem:()=>{alert("삭제 이벤트")}}},k=i(3744);const w=(0,k.Z)(x,[["render",h]]);var g=w;(0,n.ri)(g).mount("#app")}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,i),d.exports}i.m=e,function(){var e=[];i.O=function(t,n,r,d){if(!n){var o=1/0;for(a=0;a<e.length;a++){n=e[a][0],r=e[a][1],d=e[a][2];for(var l=!0,u=0;u<n.length;u++)(!1&d||o>=d)&&Object.keys(i.O).every((function(e){return i.O[e](n[u])}))?n.splice(u--,1):(l=!1,d<o&&(o=d));if(l){e.splice(a--,1);var p=r();void 0!==p&&(t=p)}}return t}d=d||0;for(var a=e.length;a>0&&e[a-1][2]>d;a--)e[a]=e[a-1];e[a]=[n,r,d]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.j=1511}(),function(){var e={1511:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,d,o=n[0],l=n[1],u=n[2],p=0;if(o.some((function(t){return 0!==e[t]}))){for(r in l)i.o(l,r)&&(i.m[r]=l[r]);if(u)var a=u(i)}for(t&&t(n);p<o.length;p++)d=o[p],i.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return i.O(a)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[4998],(function(){return i(9220)}));n=i.O(n)})();