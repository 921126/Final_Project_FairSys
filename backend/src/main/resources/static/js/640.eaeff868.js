"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[640],{8640:function(t,e,a){a.r(e),a.d(e,{default:function(){return z}});var s=a(6252),i=a(9963),l=a(3577);const n={class:"main"},o={class:"container"},g=(0,s._)("h2",null,"지원자 목록",-1),h=(0,s._)("option",{value:"10"},"10개 보기",-1),u=(0,s._)("option",{value:"20"},"20개 보기",-1),r=(0,s._)("option",{value:"30"},"30개 보기",-1),p=[h,u,r],c={class:"list"},d=(0,s._)("thead",{class:"head"},[(0,s._)("tr",null,[(0,s._)("th",null,"번호"),(0,s._)("th",null,"이름"),(0,s._)("th",null,"성별"),(0,s._)("th",null,"조회"),(0,s._)("th",null,"합격여부")])],-1),_={class:"body"},m=["onClick"],f={class:"serch_box"},v=(0,s._)("select",{name:"",id:""},[(0,s._)("option",{value:"title"},"이름"),(0,s._)("option",{value:"status"},"상태")],-1),w=(0,s._)("input",{type:"text"},null,-1),C={class:"page"},k=(0,s._)("i",{class:"fa fa-angle-double-left","aria-hidden":"true"},"<<",-1),y={style:{"margin-right":"5px"}},S=(0,s._)("i",{class:"fa fa-angle-left","aria-hidden":"true"},"<",-1),b={style:{"margin-left":"5px"}},E=(0,s._)("i",{class:"fa fa-angle-right","aria-hidden":"true"},">",-1),P=(0,s._)("i",{class:"fa fa-angle-double-right","aria-hidden":"true"},">>",-1);function A(t,e,a,h,u,r){const A=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",o,[g,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>u.amount=t),class:"view",onChange:e[1]||(e[1]=(...t)=>r.loglist_view&&r.loglist_view(...t))},p,544),[[i.bM,u.amount]]),(0,s._)("table",c,[d,(0,s._)("tbody",_,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.list,((t,e)=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",null,(0,l.zw)(e),1),(0,s._)("td",null,(0,l.zw)(t.user_name),1),(0,s._)("td",null,(0,l.zw)(t.user_gender),1),(0,s._)("td",{onClick:(0,i.iM)((e=>r.ResumeModify(t.user_no)),["prevent"])},"이력서열람",8,m),(0,s._)("td",null,(0,l.zw)(t.status),1)])))),128))])]),(0,s._)("div",f,[v,w,(0,s._)("button",{onClick:e[2]||(e[2]=t=>r.search(t.target))},"검색")]),(0,s._)("div",C,[(0,s._)("ul",null,[(0,s._)("li",null,[(0,s.Wm)(A,{to:{path:"/ApplyStatus/?page=1&amount="+u.amount},onClick:r.goFirstPage},{default:(0,s.w5)((()=>[k])),_:1},8,["to","onClick"])]),(0,s._)("li",y,[(0,s.Wm)(A,{to:{path:"/ApplyStatus/?page="+u.page+"&amount="+u.amount},onClick:r.goBeforePage},{default:(0,s.w5)((()=>[S])),_:1},8,["to","onClick"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.pageList,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{key:a,class:"page_btn"},[(0,s._)("li",{class:(0,l.C_)({on:t===u.page})},[(0,s.Wm)(A,{to:{path:"/ApplyStatus/?page="+u.page+"&amount="+u.amount},onClick:e[3]||(e[3]=t=>r.thisPage(t.target))},{default:(0,s.w5)((()=>[(0,s.Uk)((0,l.zw)(t),1)])),_:2},1032,["to"])],2)])))),128)),(0,s._)("li",b,[(0,s.Wm)(A,{to:{path:"/ApplyStatus/?page="+u.page+"&amount="+u.amount},onClick:r.goNextPage},{default:(0,s.w5)((()=>[E])),_:1},8,["to","onClick"])]),(0,s._)("li",null,[(0,s.Wm)(A,{to:{path:"/ApplyStatus/?page="+u.realEnd+"&amount="+u.amount},onClick:r.goLastPage},{default:(0,s.w5)((()=>[P])),_:1},8,["to","onClick"])])])])])])}a(7658);var L=a(6154),M={el:"#App",data(){return{pages:"",pageList:"",detailNum:"",page:1,amount:10,searchTitle:"",searchStatus:"",searchContent:"",prev:"",pageStart:"",pageEnd:"",realEnd:"",list:[]}},watch:{amount:function(){this.get()}},methods:{async get(){let t=await L.Z.get("/ApplyStatus/?amount="+this.amount+"&page="+this.page+"&searchTitle="+this.searchTitle+"&searchStatus="+this.searchStatus+"&searchContent="+this.searchContent,{params:{com_id:sessionStorage.getItem("com_id")},headers:{"content-type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("com_auth")}});this.list=t.data.list,this.pages=t.data.pageVO,this.pageList=this.pages.pageList,this.page=this.pages.page,this.searchTitle=this.pages.cri.searchTitle,this.searchStatus=this.pages.cri.searchStatus,this.searchContent=this.pages.cri.searchContent,this.prev=this.pages.prev,this.pageStart=this.pages.pageStart,this.pageEnd=this.pages.pageEnd,this.realEnd=this.pages.realEnd},ResumeModify(t){this.$router.push({path:"/ResumeComModify/",name:"ResumeComModify",params:{user_no:t}})},loglist_view(){this.amount=this.amount},goFirstPage(){this.page=1,this.get()},goBeforePage(){this.page>1?this.page=this.page-1:alert("첫번째 페이지입니다.")},thisPage(t){this.page=t.innerHTML,this.get()},goNextPage(){this.page<this.realEnd?(this.page=this.page+1,this.get()):alert("마지막 페이지입니다.")},goLastPage(){this.page=this.realEnd,this.get()},search(t){const e=t.previousElementSibling.previousElementSibling.value,a=t.previousElementSibling.value;console.log(e),console.log(a),"title"===e?(this.searchTitle=a,this.get()):"content"===e?(this.searchContent=a,this.get()):"status"===e&&(console.log("여기로"),this.searchStatus=a,this.get())}},mounted(){this.get()}},T=a(3744);const x=(0,T.Z)(M,[["render",A]]);var z=x}}]);
//# sourceMappingURL=640.eaeff868.js.map