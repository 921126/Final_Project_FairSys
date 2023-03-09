<template>
  <form action="">
  
    <section>
      <div class="cont_division">

      
    <h3>기업회원가입</h3>
    <div>
      <label for="com_name">회사명: <input v-model="com_name" required type="text" placeholder="회사이름을 입력하세요"></label>
    </div>
    <div>
      <label for="com_ceo">대표자명: </label>
      <input v-model="com_ceo" required type="text" placeholder="대표자명을 입력하세요">
    </div>
    <div>
      <label for="business_number">사업자등록번호: </label>
      <input v-model="business_number" required type="number" placeholder="사업자 번호를 입력하세요">
    </div>
    <div>
      <!-- <label for="com_address">회사주소: </label> -->
      <!-- <input v-model="com_address" required type="text" placeholder="회사주소를 입력하세요"> -->
      <input type="text" v-model="postcode" placeholder="우편번호">
      <input type="button" @click="execDaumPostcode()" value="우편번호 찾기"><br>
      <input type="text" v-model="address" placeholder="주소"><br>
      <input type="text" v-model="detailAddress" placeholder="상세주소">
    </div>
    
    <div>
      <label for="com_userid">id: </label>
      <input v-model="com_userid" required type="text" placeholder="아이디를 입력하세요">
    </div>
    <div>
      <label for="com_password">password: </label>
      <input v-model="com_password" required type="password" placeholder="비밀번호를 입력하세요">
    </div>
    <div>
      <label for="com_number">전화번호: </label>
      <input v-model="com_number" required type="number" placeholder="전화번호를 입력하세요">
    </div>
    <div>
      <label for="com_manager">가입자명: </label>
      <input v-model="com_manager" required type="text" placeholder="성함을 입력하세요">
    </div>
    <div>
      <label for="com_email">이메일: </label>
      <input v-model="com_email" required type="email">
    </div>


    <div class="cont_division">
      <span class="terms_agree">
        <strong>약관</strong>
      </span>
      <div class="agree_box">
        <ul class="agree_article">
          <li>
            <span class="inpChk sizeL">
                                <input type="checkbox" class="check_mail" id="agreeAllPersonal">
                                <label class="check_all check_off lbl" for="agreeAllPersonal">
                                    <strong class="all_agree">전체 동의</strong>
                                </label>
                            </span>
                            </li>
                        </ul>
                        <ul class="agree_article depth2">
                            <li>
                                <div class="agree_desc">
                                <span class="inpChk">
                                    <input type="checkbox" id="agree_rule1">
                                    <label class="lbl check_custom check_off" for="agree_rule1">
                                       <span><strong>(필수) 개인회원 약관에 동의</strong></span>
                                    </label>
                                </span>
                                </div>
                                <a href="/zf_user/help/terms-of-service/person" class="view_indetail" target="_blank">
                                    <span class="blind">개인회원 약관 상세보기</span>
                                </a>
                            </li>
                            <li>
                                <div class="agree_desc">
                                <span class="inpChk">
                                    <input type="checkbox" id="agree_take1">
                                    <label class="lbl check_custom check_off" for="agree_take1">
                                       <span><strong>(필수) 개인정보 수집 및 이용에 동의</strong></span>
                                    </label>
                                </span>
                                </div>
                                <a id="popupClausePrivacyPerson" href="/zf_user/popup/privacy-policy?category=person_privacy_req" class="view_indetail popup_clause_open" target="_blank">
                                    <span class="blind">개인정보 수집 및 이용에 동의 약관 상세보기</span>
                                </a>
                            </li>
                            <li>
                                <div class="agree_desc">
                                <span class="inpChk">
                                    <input type="checkbox" id="locationBased" name="locationBased" value="y">
                                    <label class="lbl check_custom check_off" for="locationBased">
                                       <span>(선택) 위치기반서비스 이용약관에 동의</span>
                                    </label>
                                </span>
                                </div>
                                <a id="popupTermsAgreeLb" href="/zf_user/help/terms-of-service/location-based" class="view_indetail popup_clause_open" target="_blank">
                                    <span class="blind">위치기반서비스 이용약관에 동의 상세보기</span>
                                </a>
                            </li>
                            <li>
                                <div class="agree_desc">
                                <span class="inpChk">
                                    <input type="checkbox" class="check_mail" id="termsAgree" name="termsAgree" value="y">
                                    <label class="lbl check_custom check_off" for="termsAgree">
                                       <span>(선택) 마케팅 정보 수신 동의 - 이메일</span>
                                    </label>
                                </span>
                                </div>
                                <a id="popupEmailReceive" href="/zf_user/popup/privacy-policy?category=person_email_opt" class="view_indetail popup_clause_open" target="_blank">
                                    <span class="blind">마케팅 정보 수신 동의 - 이메일 약관 상세보기</span>
                                </a>
                            </li>
                            <li>
                                <div class="agree_desc">
                                <span class="inpChk">
                                    <input type="checkbox" id="sms_receive_fl" name="sms_receive_fl" value="y">
                                    <label class="lbl check_custom check_off" for="sms_receive_fl">
                                       <span>(선택) 마케팅 정보 수신 동의 - SMS/MMS</span>
                                    </label>
                                </span>
                                </div>
                                <a id="popupSmsReceive" href="/zf_user/popup/privacy-policy?category=person_sms_opt" class="view_indetail popup_clause_open" target="_blank">
                                    <span class="blind">마케팅 정보 수신 동의 - SMS/MMS 약관 상세보기</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    </div>






    <div class="list">
    <button type="submit" @click="page30">가입하기</button>
    <button class="view" @click="btn_view">목록</button>
    </div>

  </div>
  </section>
    <h4>푸터</h4>
  </form>
</template>


<script>
export default {
  data() {
    return {
      com_name: '',
      com_ceo: '',
      business_number:'',
      postcode: "",
      address: "",
      extraAddress: "",
      com_userid:'',
      com_password:'',
      com_number:'',
      com_manager:'',
      com_email:'',
    };
  }, methods: {
    btn_view() {
      location.href = "page1";
    },
    execDaumPostcode() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          if (this.extraAddress !== "") {
            this.extraAddress = "";
          }
          if (data.userSelectedType === "R") {
            // 사용자가 도로명 주소를 선택했을 경우
            this.address = data.roadAddress;
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            this.address = data.jibunAddress;
          }
 
          // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
          if (data.userSelectedType === "R") {
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
              this.extraAddress += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if (data.buildingName !== "" && data.apartment === "Y") {
              this.extraAddress +=
                this.extraAddress !== ""
                  ? `, ${data.buildingName}`
                  : data.buildingName;
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if (this.extraAddress !== "") {
              this.extraAddress = `(${this.extraAddress})`;
            }
          } else {
            this.extraAddress = "";
          }
          // 우편번호를 입력한다.
          this.postcode = data.zonecode;
        },
      }).open();
    },
  },
};


</script>

<style>

li{
  list-style: none;
}
a:link, a:visited, a:active, a:hover {
    text-decoration: none;
    color: black;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  font-weight: bold;
}

input {
  padding: 5px;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 100%;
}

button[type="submit"] {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.view {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #005fa3;
}

.list {
  text-align: center;
  margin-top: 30px;
}
.cont_division {
    position: relative;
    width: 360px;
    *overflow: hidden;
    box-sizing: border-box;
    margin-top: 24px;
}

.cont_division .terms_agree {
  font-size: 16px;
  color: #373f57;
  margin-bottom: 8px;
  display: inline-block;
}
.cont_division .agree_box {
    border-radius: 4px;
    border: 1px solid #d7dce5;
    padding: 16px;
}
.cont_division .agree_box .agree_article {
    color: #5c667b;
    border-bottom: 1px solid #d7dce5;
    padding-bottom: 16px;
}
.inpChk {
    display: inline-block;
    position: relative;
    vertical-align: top;
}
input[type="checkbox"], input[type="radio"] {
    display: inline-block;
    width: 13px;
    height: 13px;
    vertical-align: -1px;
    *vertical-align: middle;
}
.inpChk>input {
    position: absolute;
    top: 0;
    width: 1px;
    height: 1px;
    outline: none;
    opacity: 0;
    pointer-events: none;
}


.inpChk.sizeL>.lbl {
    font-size: 16px;
    line-height: 24px;
}
.inpChk>.lbl {
    display: inline-block;
    color: #373f57;
    font-size: 14px;
    letter-spacing: -1px;
    line-height: 20px;
    vertical-align: top;
}

.strong{
  font-weight: bold;
}
.inpChk>input {
    position: absolute;
    top: 0;
    width: 1px;
    height: 1px;
    outline: none;
    opacity: 0;
    pointer-events: none;
}
.cont_division .agree_box .agree_article.depth2 {
    border: none;
    padding-bottom: 0;
}
.cont_division .agree_box .agree_article.depth2 li {
    position: relative;
    margin: 16px 0;
}
.cont_division .agree_box .agree_article.depth2 span {
    font-size: 15px;
}
.inpChk {
    display: inline-block;
    position: relative;
    vertical-align: top;
}
input[type="checkbox"], input[type="radio"] {
    display: inline-block;
    width: 13px;
    height: 13px;
    vertical-align: -1px;
    *vertical-align: middle;
}
.inpChk>input {
    position: absolute;
    top: 0;
    width: 1px;
    height: 1px;
    outline: none;
    opacity: 0;
    pointer-events: none;
}
.inpChk>.lbl {
    display: inline-block;
    color: #373f57;
    font-size: 14px;
    letter-spacing: -1px;
    line-height: 20px;
    vertical-align: top;
}


.inpChk>.lbl:before {
    float: left;
    margin: 0 8px 0 0;
    width: 20px;
    height: 20px;
    background: url(//www.saraminimage.co.kr/sri/person/spr/input_check_radio2.png) no-repeat;
    content: "";
}

.inpChk>.lbl:after {
    display: table;
    clear: both;
    content: "";
    table-layout: fixed;
}

</style>



