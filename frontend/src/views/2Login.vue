<template>
  <form>
<div class="login-wrap">
  <div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">개인회원</label>
    <input id="tab-2" type="radio" name="tab" class="sign-up" checked><label for="tab-2" class="tab">기업회원</label>
    <div class="login-form">
      <div class="sign-in-htm">
        <div class="group">
          <label for="user" class="label">ID</label>
          <input id="user" type="text" class="input">
        </div>
        <div class="group">
          <label for="pass" class="label">Password</label>
          <input id="pass" type="password" class="input" data-type="password">
        </div>
        <div class="group">
          <input id="check" type="checkbox" class="check" checked>
          <label for="check"><span class="icon"></span> Keep me Signed in</label>
        </div>
        <div class="group">
          <input type="submit" class="button" value="Sign In">
        </div>
        <a href="page33">아이디찾기 </a><br>
        <a href="page33">비밀번호찾기</a>
        <br>
        <a href="page11">Sign up</a>
        <div class="hr"></div>
        <div class="sns">소셜 계정으로 간편 로그인</div>
       
        <div class="simple_login_box">
                    <div class="simple_login_btn">
                        <div class="login_icon">
                            <a href="#" class="kakao_login"><img src="" alt="카카오로그인"></a>
                            <a href="#" class="naver_login"><img src="" alt="네이버로그인"></a>
                        </div>
                    </div>
                </div>
      </div>
      <div class="sign-up-htm">
        <div class="group">
          <label for="com_id" class="label">ID</label>
          <input id="com_id" type="text" class="input">
        </div>
        <div class="group">
          <label for="com_pass" class="label">Password</label>
          <input id="com_pass" type="password" class="input" data-type="password">
        </div>
        <div class="group">
          <input id="check1" type="checkbox" class="check" checked>
          <label for="check1"><span class="icon"></span> Keep me Signed in</label>
        </div>
        <div class="group">
          <input type="submit" class="button" value="Sign in">
        </div>
        <a href="page33">아이디찾기 </a><br>
        <a href="page33">비밀번호찾기</a>

        <br>
        <a href="page5">Sign up</a>
        <div class="hr"></div>
        <div class="sns">소셜 계정으로 간편 로그인</div>

        <div class="simple_login_box">
                    <div class="simple_login_btn">
                        <div class="login_icon">
                            <a href="#" class="kakao_login"><img src="" alt="카카오로그인"></a>
                            <a href="#" class="naver_login"><img src="" alt="네이버로그인"></a>
                        </div>
                    </div>
                </div>
      
     
        
      </div>
    </div>
  </div>
</div>
</form>
</template>

<script>
 export default {
    name: "App",
    data() {
      return {
        user: '',
        pass: ''
      }
    },
  methods: {
    login() {
      // 로그인 로직 구현
    }
  }
}
  </script>

<style>

body{
  margin:0;
  color:#6a6f8c;
  background:#c8c8c8;
}
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
  width:100%;
  margin:auto;
  max-width:525px;
  min-height:670px;
  position:relative;

}
.login-html{
  width:100%;
  height:100%;
  position:absolute;
  padding:90px 70px 50px 70px;
  background:rgba(40,57,101,.9);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
  top:0;
  left:0;
  right:0;
  bottom:0;
  position:absolute;
  transform:rotateY(180deg);
  backface-visibility:hidden;
  transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
  display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
  text-transform:uppercase;
}
.login-html .tab{
  font-size:22px;
  margin-right:15px;
  padding-bottom:5px;
  margin:0 15px 10px 0;
  display:inline-block;
  border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
  color:#fff;
  border-color:#1161ee;
}
.login-form{
  min-height:345px;
  position:relative;
  perspective:1000px;
  transform-style:preserve-3d;
}
.login-form .group{
  margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
  width:100%;
  color:#fff;
  display:block;
}
.login-form .group .input,
.login-form .group .button{
  border:none;
  padding:15px 20px;
  border-radius:25px;
  background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
  text-security:circle;
  -webkit-text-security:circle;
}
.login-form .group .label{
  color:#aaa;
  font-size:12px;
}
.login-form .group .button{
  background:#1161ee;
}
.login-form .group label .icon{
  width:15px;
  height:15px;
  border-radius:2px;
  position:relative;
  display:inline-block;
  background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
  content:'';
  width:10px;
  height:2px;
  background:#fff;
  position:absolute;
  transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
  left:3px;
  width:5px;
  bottom:6px;
  transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
  top:6px;
  right:0;
  transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
  color:#fff;
}
.login-form .group .check:checked + label .icon{
  background:#1161ee;
}
.login-form .group .check:checked + label .icon:before{
  transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
  transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
  transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
  transform:rotate(0);
}

.hr{
  height:2px;
  margin:60px 0 50px 0;
  background:rgba(255,255,255,.2);
}
.sns{
  height:2px;
  margin:-30px 0 50px 0;
  color: white
}
.foot-lnk{
  text-align:center;
}

.simple_login_box{
    margin-top: 30px;
}
.simple_login_btn > h3{
    color: #1F2124;
    font-weight: bold;
    margin-bottom: 30px;
}
.simple_login_btn .login_icon{
    display: inline;
    margin: 0 auto;
   
}
.login_icon > a > img{
    width: 50px;
    height: 50px;
    align-items: center;
    border-radius: 50%;
}
.login_icon > a > img:hover{
    opacity: 0.7;
    transition: 0.2s ease-in-out;
}

.login_icon .kakao_login{
    margin-right: 30px;
}

.login_icon .naver_login{
    margin-right: 30px;
}
</style>


