"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[272],{8520:function(a,t,s){s.r(t),s.d(t,{default:function(){return _}});var d=s(6252);const n={class:"container"},e=(0,d.uE)('<div class="wrap_top"><div class="admin_profile"><h3>관리자 프로필</h3><div class="admin_account"><table><tr><td>ID</td><td>admin</td></tr><tr><td>비밀번호</td><td>*********</td></tr></table></div></div><div class="all_user"><h3>전체 유저</h3><span>명</span><b>9,999</b></div><div class="approved_company"><h3>승인완료 기업</h3><span>기업</span><b>217</b></div><div class="waiting_company"><h3>승인대기 기업</h3><span>기업</span><b>8</b></div></div><h1>한눈에 보는 통계</h1>',2),r={class:"wrap_middle"},i={class:"date_apply_user"},l={class:"date_pass_user"};function c(a,t,s,c,o,p){const v=(0,d.up)("Line"),h=(0,d.up)("Bar");return(0,d.wg)(),(0,d.iD)("div",n,[e,(0,d._)("div",r,[(0,d._)("div",i,[(0,d.Wm)(v,{class:"barchart",data:o.chartData},null,8,["data"])]),(0,d._)("div",l,[(0,d.Wm)(h,{class:"barchart",data:o.chartData2,options:o.options},null,8,["data","options"])])])])}var o=s(6154),p=s(2005),v=s(5750);v.kL.register(...v.zX);var h={name:"App",components:{Bar:p.$Q,Line:p.x1,Pie:p.by},data(){return{chartData:{labels:["1일","2일","3일","4일","5일","6일","7일"],datasets:[{label:"일자별 전체 지원자 수",data:[40,20,12,22,80,60,100]}]},chartData2:{labels:["여자","남자"],datasets:[{label:"전체 합격자 성별 비율",data:[40,20]}]},options:{responsive:!0}}},methods:{async get(){let a=await o.Z.get("/17");console.log(a.data)}},mounted(){this.get()}},u=s(3744);const b=(0,u.Z)(h,[["render",c]]);var _=b}}]);
//# sourceMappingURL=272.74f76d2f.js.map