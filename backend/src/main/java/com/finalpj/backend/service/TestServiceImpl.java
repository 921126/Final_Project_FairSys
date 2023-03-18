package com.finalpj.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalpj.backend.command.CompanyVO;
import com.finalpj.backend.command.UserVO;

@Service("TestService")
public class TestServiceImpl implements TestService {

	@Autowired
	private TestMapper mapper;
	
	//개인 회원 가입 
	@Override
	public int regist(UserVO vo){
		return mapper.regist(vo);

	}
	
    // 개인 회원 아이디 중복 체크
	@Override
	public int checkId(String user_id){
		System.out.println(mapper.checkId(user_id));
		return mapper.checkId(user_id);

	}
	
    // 개인 회원 로그인
	@Override
	public UserVO login(UserVO vo) {
		return mapper.login(vo);
	}
	
    //회원정보 가져오기
	@Override
	public UserVO getUserInfo(String user_id) {
		
		return mapper.getUserInfo(user_id);
	}
	
    //회원 정보 수정하기
	@Override
	public void modifyForm(UserVO vo) {
		mapper.modifyForm(vo);
	}
	

	//===========================================================================================//
    // 기업 회원 가입
	@Override
	public int regist2(CompanyVO vo) {
		return mapper.regist2(vo);


	}
	
    // 기업 회원 아이디 중복 체크
	@Override
	public int checkId2(String com_id) {
		System.out.println(mapper.checkId2(com_id));
		return mapper.checkId2(com_id);

	}
	
	// 기업 회원 로그인
	@Override
	public CompanyVO login2(CompanyVO vo) {
		
		return mapper.login2(vo);
	}
	
	
}
