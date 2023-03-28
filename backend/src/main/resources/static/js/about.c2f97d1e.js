"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[443],{194:function(s,t,a){a.r(t),a.d(t,{default:function(){return B}});var e=a(6252),i=a(9963);const l={class:"login-wrap"},o={class:"login-html"},n=(0,e._)("input",{id:"tab-1",type:"radio",name:"tab",class:"sign-in",checked:""},null,-1),c=(0,e._)("label",{for:"tab-1",class:"tab"},"개인회원",-1),r=(0,e._)("input",{id:"tab-2",type:"radio",name:"tab",class:"sign-up"},null,-1),d=(0,e._)("label",{for:"tab-2",class:"tab"},"기업회원",-1),p={class:"login-form"},_={class:"sign-in-htm"},u={class:"group"},g=(0,e._)("label",{for:"user_id",class:"label"},"아이디 ",-1),h={class:"group"},v=(0,e._)("label",{for:"user_pw",class:"label"},"비밀번호 ",-1),b=(0,e._)("div",{class:"group"},[(0,e._)("input",{id:"check",type:"checkbox",class:"check",checked:""}),(0,e._)("label",{for:"check"},[(0,e._)("span",{class:"icon"}),(0,e.Uk)("로그인 정보 저장")])],-1),m={class:"group"},w=(0,e._)("a",{href:"#"},"아이디찾기 ",-1),y=(0,e._)("br",null,null,-1),f=(0,e._)("a",{href:"#"},"비밀번호찾기",-1),k=(0,e._)("br",null,null,-1),x=(0,e._)("div",{class:"hr"},null,-1),L=(0,e._)("div",{class:"sns"},"소셜 계정으로 간편 로그인",-1),S=(0,e._)("img",{src:"https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg",width:"222",alt:"카카오 로그인 버튼"},null,-1),D=[S],I={class:"sign-up-htm"},U={class:"group"},j=(0,e._)("label",{for:"com_id",class:"label"},"아이디 ",-1),C={class:"group"},z=(0,e._)("label",{for:"com_pw",class:"label"},"비밀번호 ",-1),E=(0,e._)("div",{class:"group"},[(0,e._)("input",{id:"check1",type:"checkbox",class:"check",checked:""}),(0,e._)("label",{for:"check1"},[(0,e._)("span",{class:"icon"}),(0,e.Uk)("로그인 정보 저장 ")])],-1),P={class:"group"},F=(0,e._)("a",{href:"#"},"아이디찾기 ",-1),O=(0,e._)("br",null,null,-1),T=(0,e._)("a",{href:"#"},"비밀번호찾기",-1),V=(0,e._)("br",null,null,-1),$=(0,e._)("div",{class:"hr"},null,-1);function N(s,t,a,S,N,H){const Z=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("form",null,[(0,e._)("div",l,[(0,e._)("div",o,[n,c,r,d,(0,e._)("div",p,[(0,e._)("div",_,[(0,e._)("div",u,[g,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>N.user_id=s),id:"user_id",type:"text",class:"input"},null,512),[[i.nr,N.user_id]])]),(0,e._)("div",h,[v,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[1]||(t[1]=s=>N.user_pw=s),id:"user_pw",type:"password",class:"input","data-type":"password"},null,512),[[i.nr,N.user_pw]])]),b,(0,e._)("div",m,[(0,e._)("button",{type:"button",class:"button",onClick:t[2]||(t[2]=(...s)=>H.loginForm1&&H.loginForm1(...s))},"login")]),w,y,f,k,(0,e.Wm)(Z,{to:"/3-1"},{default:(0,e.w5)((()=>[(0,e.Uk)("회원가입")])),_:1}),x,L,(0,e._)("a",{onClick:t[3]||(t[3]=t=>s.kakaoLogin())},D)]),(0,e._)("div",I,[(0,e._)("div",U,[j,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[4]||(t[4]=s=>N.com_id=s),required:"",type:"text",class:"input"},null,512),[[i.nr,N.com_id]])]),(0,e._)("div",C,[z,(0,e.wy)((0,e._)("input",{"onUpdate:modelValue":t[5]||(t[5]=s=>N.com_pw=s),id:"com_pw",type:"password",class:"input","data-type":"password"},null,512),[[i.nr,N.com_pw]])]),E,(0,e._)("div",P,[(0,e._)("button",{value:"2",type:"button",class:"button",onClick:t[6]||(t[6]=(...s)=>H.loginForm2&&H.loginForm2(...s))},"로그인")]),F,O,T,V,(0,e.Wm)(Z,{to:"/3-2"},{default:(0,e.w5)((()=>[(0,e.Uk)("회원가입")])),_:1}),$])])])])])}var H={name:"App",data(){return{user_id:"",user_pw:"",com_id:"",com_pw:""}},methods:{async loginForm1(){this.axios.post("/3-1/loginForm",{user_id:this.user_id,user_pw:this.user_pw}).then((s=>{console.log(s),console.log("개인 회원 로그인 들어옴?"),console.log(s.headers.authorization),sessionStorage.setItem("user_auth",s.headers.authorization.substr(7)),sessionStorage.setItem("user_id",s.data.user_id),sessionStorage.setItem("ut_no",s.data.ut_no),console.log(sessionStorage),this.$store.commit("setUtNo",1),location.href="/",console.log(this.$store.state.logInOut),this.$store.commit("setLogInOut","로그아웃")})).catch((s=>{401==s.response.status&&alert("아뒤 비번좀 봐라")}))},async loginForm2(){this.axios.post("/3-2/loginForm",{com_id:this.com_id,com_pw:this.com_pw}).then((s=>{console.log(s),console.log(s.headers.authorization),sessionStorage.setItem("com_auth",s.headers.authorization.substr(7)),sessionStorage.setItem("com_id",s.data.com_id),sessionStorage.setItem("ut_no",s.data.ut_no),console.log(sessionStorage),this.$store.commit("setUtNo",2),location.href="/",console.log(this.$store.state.logInOut),this.$store.commit("setLogInOut","로그아웃")})).catch((s=>{401==s.response.status?alert("아뒤 비번좀 봐라"):403==s.response.status&&alert("관리자의 승인이 필요합니다")}))}},mounted(){}},Z=a(3744);const A=(0,Z.Z)(H,[["render",N]]);var B=A},3214:function(s,t,a){a.r(t),a.d(t,{default:function(){return j}});var e=a(6252),i=a(3577),l=a(9963);const o={class:""},n={role:"region","aria-label":"추천공고",id:"section_contents",class:"cont_top"},c={class:"inner"},r={class:"wrap_service"},d={id:"lbl-theme-specific-service",class:"service_header"},p={class:"menu_list"},_={type:"button",class:"btn on"},u=(0,e._)("svg",{class:"icon"},null,-1),g=(0,e.uE)('<div class="content_body"><div class="area_slide"><div class="box_btn_prev"><div class="slide_step"></div><button type="button" class="btn_prev" style="display:block;"><span class="blind">이전</span></button></div><div class="box_btn_next"><div class="slide_step"></div><button type="button" class="btn_next" style="display:block;"><span class="blind">이전</span></button></div><div class="wrap_card"><div class="card_list" style="width:5124px;"><div class="slide"><div class="card _rcmd_recruit recomm_notice"><div class="card_detail"><div class="logo empty"><img src=""></div><div class="box_bubble"><span class="txt">내일 마감</span></div><div class="box_text"><strong class="tit_type2">회사명</strong></div><div class="box_source"><p class="corp">회사명</p></div></div><button class="btn_scrap2"><span class="blind">스크랩</span></button></div><div class="card _rcmd_recruit recomm_notice"><a href="page20"><div class="card_detail"><div class="logo empty"><img src=""></div><div class="box_bubble"><span class="txt">회사명</span></div><div class="box_text"><strong class="tit_type2">[모집중]</strong></div><div class="box_source"><p class="corp">회사명</p></div></div></a><button class="btn_scrap2"><span class="blind">스크랩</span></button></div><div class="card _rcmd_recruit recomm_notice"><a href="page30"><div class="card_detail"><div class="logo empty"><img src=""></div><div class="box_bubble"><span class="txt">내일 마감</span></div><div class="box_text"><strong class="tit_type2">[모집중]</strong></div><div class="box_source"><p class="corp">회사명</p></div></div></a><button class="btn_scrap2"><span class="blind">스크랩</span></button></div><div class="card recomm_notice"><div class="card_detail empty"><svg class="img"></svg><strong class="title">나에게 딱 매칭되는 공고만<br>모아서 보고싶다면?</strong><a href="" class="btn_link">Ai매치 공고 더보기</a></div></div></div></div></div></div></div>',1),h=(0,e._)("div",{class:"service_container"},null,-1),v=(0,e.uE)('<div class="wrap_service_aside"><a href="" class="area_matching banner01" style="display:none;"></a><a href="" class="area_matching banner02" style=""></a><a href="" class="area_matching banner03" style="display:none;"></a><div class="area_banner"><a href="" target="_blank"><img src="" alt="배너넣기" width="292"></a></div></div>',1),b={class:"company"},m={class:"com_item"},w={class:"com_line"},y={class:"menu"},f=(0,e._)("li",null,[(0,e._)("img",{src:"",alt:"",width:"300px"})],-1),k=["onClick"],x=(0,e._)("li",null,"신입/경력채용",-1);function L(s,t,a,L,S,D){return(0,e.wg)(),(0,e.iD)("section",o,[(0,e._)("div",n,[(0,e._)("div",c,[(0,e._)("div",r,[(0,e._)("div",d,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(S.pageList,((s,t)=>((0,e.wg)(),(0,e.iD)("div",{role:"region",key:t},[(0,e._)("ul",p,[(0,e._)("li",null,[(0,e._)("button",_,[u,(0,e.Uk)((0,i.zw)(s),1)]),g])])])))),128))]),h]),v])]),(0,e._)("div",b,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(S.jobPostingList,((s,t)=>((0,e.wg)(),(0,e.iD)("div",m,[(0,e._)("div",w,[(0,e._)("a",y,[(0,e._)("ul",null,[f,(0,e._)("li",{onClick:(0,l.iM)((t=>D.getDetail(s.j_no)),["prevent"])},(0,i.zw)(s.com_name),9,k),(0,e._)("li",null,(0,i.zw)(s.com_id),1),x,(0,e._)("li",null,(0,i.zw)(s.j_regdate.substr(0,11)),1)])])])])))),256))])])}a(7658);var S=a(6154),D={name:"App",data(){return{jobPostingList:"",pages:"",pageList:"",detailNum:"",page:1,amount:3,prev:"",pageStart:"",pageEnd:"",realEnd:"",total:"",list:[]}},methods:{getTop(){S.Z.get("/main2/?amount="+this.amount+"&page="+this.page).then((s=>{console.log(s),console.log(s.data),this.jobPostingList=s.data,console.log(s.data.pageVO),this.pages=s.data.pageVO,this.pageList=this.pages.pageList,this.total=s.data.pageVO.total,this.page=this.pages.page,this.searchTitle=this.pages.cri.searchTitle,this.searchContent=this.pages.cri.searchContent,this.prev=this.pages.prev,this.pageStart=this.pages.pageStart,this.pageEnd=this.pages.pageEnd,this.realEnd=this.pages.realEnd})).catch((s=>{console.log(s),console.log(s.data)}))},getBottom(){S.Z.get("/main2").then((s=>{console.log(s),console.log(s.data),this.jobPostingList=s.data})).catch((s=>{console.log(s)}))},getDetail(s){this.$router.push({path:"/jobPostingDetail",name:"jobPostingDetail",params:{j_no:s}})},goBeforePage(){this.page>1?(this.page=this.page-1,this.getTop()):alert("첫번째 페이지입니다.")},thisPage(s){this.page=s.innerHTML,this.getTop()},goNextPage(){this.page<this.realEnd?(this.page=this.page+1,this.getTop()):alert("마지막 페이지입니다.")}},created(){this.getTop()},mounted(){this.getBottom()}},I=a(3744);const U=(0,I.Z)(D,[["render",L]]);var j=U}}]);
//# sourceMappingURL=about.c2f97d1e.js.map