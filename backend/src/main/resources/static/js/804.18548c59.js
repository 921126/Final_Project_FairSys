"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[804],{6804:function(e,r,s){s.r(r),s.d(r,{default:function(){return x}});var t=s(6252),u=s(9963);const d=(0,t._)("h3",null,"개인회원가입",-1),l=(0,t._)("label",{for:"user_id"},"id: ",-1),n=(0,t._)("label",{for:"user_pw"},"password: ",-1),a=(0,t._)("label",{for:"user_name"},"이름: ",-1),i={for:"user_birth"},o=(0,t._)("label",{for:"user_email"},"이메일: ",-1),_=(0,t._)("label",{for:"user_hp"},"전화번호: ",-1),p=(0,t._)("label",{for:"user_gender"},"성별: ",-1),h=(0,t._)("br",null,null,-1),m=(0,t._)("h4",null,"푸터",-1);function c(e,r,s,c,b,w){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("section",null,[d,(0,t._)("div",null,[l,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":r[0]||(r[0]=r=>e.user_id=r),required:"",type:"text",placeholder:"아이디를 입력하세요"},null,512),[[u.nr,e.user_id]])]),(0,t._)("div",null,[n,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":r[1]||(r[1]=r=>e.user_pw=r),required:"",type:"password",placeholder:"비밀번호를 입력하세요"},null,512),[[u.nr,e.user_pw]])]),(0,t._)("div",null,[a,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":r[2]||(r[2]=r=>e.user_name=r),required:"",type:"text",placeholder:"이름 입력하세요"},null,512),[[u.nr,e.user_name]])]),(0,t._)("div",null,[(0,t._)("label",i,[(0,t.Uk)("생일: "),(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":r[3]||(r[3]=r=>e.user_birth=r),required:"",type:"text",placeholder:"생일 입력하세요"},null,512),[[u.nr,e.user_birth]])])]),(0,t._)("div",null,[o,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":r[4]||(r[4]=r=>e.user_email=r),required:"",type:"text",placeholder:"이메일 입력하세요"},null,512),[[u.nr,e.user_email]])]),(0,t._)("div",null,[_,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":r[5]||(r[5]=r=>e.user_hp=r),required:"",type:"text",placeholder:"전화번호를 입력하세요"},null,512),[[u.nr,e.user_hp]])]),(0,t._)("div",null,[p,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":r[6]||(r[6]=r=>e.user_gender=r),required:"",type:"text"},null,512),[[u.nr,e.user_gender]])]),(0,t._)("div",null,[(0,t.wy)((0,t._)("input",{type:"text","onUpdate:modelValue":r[7]||(r[7]=r=>e.user_address=r),placeholder:"주소"},null,512),[[u.nr,e.user_address]]),h]),(0,t._)("button",{type:"button",onClick:r[8]||(r[8]=(...e)=>w.submitForm&&w.submitForm(...e))},"가입하기")]),m],64)}s(7658);var b={data(){return{com_name:"",com_ceo:"",business_number:"",postcode:"",address:"",extraAddress:"",com_userid:"",com_password:"",com_number:"",com_manager:"",com_email:""}},methods:{btn_view(){location.href="page1"},execDaumPostcode(){new window.daum.Postcode({oncomplete:e=>{""!==this.extraAddress&&(this.extraAddress=""),"R"===e.userSelectedType?this.address=e.roadAddress:this.address=e.jibunAddress,"R"===e.userSelectedType?(""!==e.bname&&/[동|로|가]$/g.test(e.bname)&&(this.extraAddress+=e.bname),""!==e.buildingName&&"Y"===e.apartment&&(this.extraAddress+=""!==this.extraAddress?`, ${e.buildingName}`:e.buildingName),""!==this.extraAddress&&(this.extraAddress=`(${this.extraAddress})`)):this.extraAddress="",this.postcode=e.zonecode}}).open()},async submitForm(){console.log(1),this.axios.post("/test/registForm",{user_id:this.user_id,user_pw:this.user_pw,user_name:this.user_name,user_birth:this.user_birth,user_email:this.user_email,user_hp:this.user_hp,user_status:this.user_status,user_gender:this.user_gender,user_address:this.user_address}).then((e=>{console.log(e),this.$router.push({path:"/"})})).catch((e=>{console.log(e)}))}}},w=s(3744);const y=(0,w.Z)(b,[["render",c]]);var x=y}}]);
//# sourceMappingURL=804.18548c59.js.map