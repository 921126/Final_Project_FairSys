"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[744],{2744:function(e,t,s){s.r(t),s.d(t,{default:function(){return Y}});var a=s(6252),i=s(9963),l=s(3577);const o={class:"hw_admin_nav"},n={class:"hw_sub_menu_toggle"},r=(0,a._)("a",{class:"hw_sub menu select"},"채용공고",-1),u={class:"hw_sub_menu",style:{display:"block"}},h={class:"hw_sub_menu_toggle"},g=(0,a._)("a",{href:"#"},"이력서",-1),_={class:"hw_sub_menu"},c=(0,a._)("li",null,[(0,a._)("a",{href:"#"})],-1),p={class:"hw_sub_menu_toggle"},d=(0,a._)("a",{href:"#"},"회사정보수정",-1),m={class:"sub_menu"},f={class:"hw_main"},w={class:"hw_container"},y=(0,a._)("h2",null,"지원 이력서",-1),k=(0,a._)("option",{value:"10"},"10개 보기",-1),v=(0,a._)("option",{value:"20"},"20개 보기",-1),b=(0,a._)("option",{value:"30"},"30개 보기",-1),C=[k,v,b],U={class:"hw_list"},P=(0,a._)("thead",{class:"hw_head"},[(0,a._)("tr",null,[(0,a._)("th",null,"번호"),(0,a._)("th",null,"진행상황"),(0,a._)("th",null,"조회"),(0,a._)("th",null,"수정"),(0,a._)("th",null,"삭제")])],-1),M={class:"hw_body"},S=["onClick"],x=["onClick"],E={class:"hw_serch_box"},W=(0,a._)("select",{name:"",id:""},[(0,a._)("option",{value:"title"},"이름"),(0,a._)("option",{value:"status"},"진행상황")],-1),I=(0,a._)("input",{type:"text"},null,-1),L={class:"hw_page"},R=(0,a._)("i",{class:"fa fa-angle-double-left","aria-hidden":"true"},"<<",-1),$={style:{"margin-right":"5px"}},D=(0,a._)("i",{class:"fa fa-angle-left","aria-hidden":"true"},"<",-1),T={style:{"margin-left":"5px"}},z=(0,a._)("i",{class:"fa fa-angle-right","aria-hidden":"true"},">",-1),F=(0,a._)("i",{class:"fa fa-angle-double-right","aria-hidden":"true"},">>",-1);function A(e,t,s,k,v,b){const A=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",o,[(0,a._)("ul",null,[(0,a._)("li",n,[r,(0,a._)("ul",u,[(0,a._)("li",null,[(0,a.Wm)(A,{to:"/4"},{default:(0,a.w5)((()=>[(0,a.Uk)("공고목록")])),_:1})])])]),(0,a._)("li",h,[g,(0,a._)("ul",_,[(0,a._)("li",null,[(0,a.Wm)(A,{to:"/ResumeRegist"},{default:(0,a.w5)((()=>[(0,a.Uk)("이력서 작성")])),_:1})]),(0,a._)("li",null,[(0,a.Wm)(A,{to:"/UserMypage"},{default:(0,a.w5)((()=>[(0,a.Uk)("이력서 목록")])),_:1})]),c])]),(0,a._)("li",p,[d,(0,a._)("ul",m,[(0,a._)("li",null,[(0,a.Wm)(A,{to:"/9-1"},{default:(0,a.w5)((()=>[(0,a.Uk)("회원정보수정")])),_:1})]),(0,a._)("li",null,[(0,a._)("a",{href:"#",onClick:t[0]||(t[0]=(...e)=>b.deleteUser&&b.deleteUser(...e))},"회원탈퇴")])])])])]),(0,a._)("div",f,[(0,a._)("div",w,[y,(0,a.wy)((0,a._)("select",{"onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t),class:"hw_view",onChange:t[2]||(t[2]=(...t)=>e.loglist_view&&e.loglist_view(...t))},C,544),[[i.bM,e.amount]]),(0,a._)("table",U,[P,(0,a._)("tbody",M,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(v.list,((e,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",null,(0,l.zw)(e.com_id),1),(0,a._)("td",null,(0,l.zw)(e.status),1),(0,a._)("td",{onClick:(0,i.iM)((t=>b.ResumeModify(e.user_no)),["prevent"])},"조회",8,S),(0,a._)("td",null,[(0,a.Wm)(A,{to:{name:"ResumeUpdate",params:{user_no:e.com_id}}},{default:(0,a.w5)((()=>[(0,a.Uk)("수정")])),_:2},1032,["to"])]),(0,a._)("td",null,[(0,a._)("button",{type:"button",value:"삭제",onClick:t=>b.deleteForm(e.user_no),style:{"margin-right":"10px"}},"삭제",8,x)])])))),128))])]),(0,a._)("div",E,[W,I,(0,a._)("button",{onClick:t[3]||(t[3]=t=>e.search(t.target))},"검색")]),(0,a._)("div",L,[(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Wm)(A,{to:{path:"/UserMyPage/?page=1&amount="+e.amount},onClick:e.goFirstPage},{default:(0,a.w5)((()=>[R])),_:1},8,["to","onClick"])]),(0,a._)("li",$,[(0,a.Wm)(A,{to:{path:"/UserMyPage/?page="+e.page+"&amount="+e.amount},onClick:e.goBeforePage},{default:(0,a.w5)((()=>[D])),_:1},8,["to","onClick"])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pageList,((s,i)=>((0,a.wg)(),(0,a.iD)("div",{key:i,class:"page_btn"},[(0,a._)("li",{class:(0,l.C_)({on:s===e.page})},[(0,a.Wm)(A,{to:{path:"/UserMyPage/?page="+e.page+"&amount="+e.amount},onClick:t[4]||(t[4]=t=>e.thisPage(t.target))},{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(s),1)])),_:2},1032,["to"])],2)])))),128)),(0,a._)("li",T,[(0,a.Wm)(A,{to:{path:"/UserMyPage/?page="+e.page+"&amount="+e.amount},onClick:e.goNextPage},{default:(0,a.w5)((()=>[z])),_:1},8,["to","onClick"])]),(0,a._)("li",null,[(0,a.Wm)(A,{to:{path:"/UserMyPage/?page="+e.realEnd+"&amount="+e.amount},onClick:e.goLastPage},{default:(0,a.w5)((()=>[F])),_:1},8,["to","onClick"])])])])])])],64)}s(7658);var B={name:"App",data(){return{user_no:"",list:[],a:"",user_id:sessionStorage.getItem("user_id"),com_id:"",user_phone:"",user_name:""}},methods:{UserMyPage(){this.axios.get("/UserMyPage",{params:{user_id:sessionStorage.getItem("user_id")},headers:{"content-type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("user_auth")}}).then((e=>{this.user_name=this.$route.query.user_name,this.user_phone=this.$route.query.user_phone,this.user_id=sessionStorage.getItem("user_id"),console.log(this.user_id),console.log(this.user_name),console.log(e),this.list=e.data,console.log(e.data)})).catch((e=>{console.log(e),alert("로그인이 필요한 서비스입니다."),sessionStorage.clear(),this.$store.commit("setLogInOut","로그인"),this.$router.push({path:"/2"})}))},deleteUser(){confirm("아이디를 삭제하시겠습니까?")&&this.axios.get("/UserMyPage/deleteForm",{params:{user_id:sessionStorage.getItem("user_id")},headers:{"content-type":"application/json",Authorization:"Bearer "+sessionStorage.getItem("user_auth")}}).then((e=>{alert("아이디가 삭제되었습니다."),sessionStorage.clear(),this.$store.commit("setLogInOut","로그인"),this.$router.push({path:"/"})}))},ResumeModify(e){this.$router.push({path:"/ResumeModify/",name:"ResumeModify",params:{user_no:e}})},deleteForm(e){confirm("삭제하시겠습니까?")&&this.axios.post("/ResumeDelete",{user_no:e}).then((()=>{alert("삭제되었습니다"),this.$router.go("/UserMyPage")})).catch((e=>console.log(e)))}},async get(){let e=await Axios.get("/UserMyPage/?amount="+this.amount+"&page="+this.page+"&searchTitle="+this.searchTitle+"&searchStatus="+this.searchStatus+"&searchContent="+this.searchContent);this.list=e.data.list,this.pages=e.data.pageVO,this.pageList=this.pages.pageList,this.page=this.pages.page,this.searchTitle=this.pages.cri.searchTitle,this.searchStatus=this.pages.cri.searchStatus,this.searchContent=this.pages.cri.searchContent,this.prev=this.pages.prev,this.pageStart=this.pages.pageStart,this.pageEnd=this.pages.pageEnd,this.realEnd=this.pages.realEnd},loglist_view(){this.amount=this.amount},goFirstPage(){this.page=1,this.get()},goBeforePage(){this.page>1?this.page=this.page-1:alert("첫번째 페이지입니다.")},thisPage(e){this.page=e.innerHTML,this.get()},goNextPage(){this.page<this.realEnd?(this.page=this.page+1,this.get()):alert("마지막 페이지입니다.")},goLastPage(){this.page=this.realEnd,this.get()},search(e){const t=e.previousElementSibling.previousElementSibling.value,s=e.previousElementSibling.value;console.log(t),console.log(s),"title"===t?(this.searchTitle=s,this.get()):"content"===t?(this.searchContent=s,this.get()):"status"===t&&(console.log("여기로"),this.searchStatus=s,this.get())},mounted(){this.UserMyPage()}},H=s(3744);const O=(0,H.Z)(B,[["render",A]]);var Y=O}}]);
//# sourceMappingURL=744.75f7cfca.js.map