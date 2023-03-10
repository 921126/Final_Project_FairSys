package com.finalpj.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalpj.backend.command.UserVO;

@Service("TestService")
public class TestServiceImpl implements TestService {

    @Autowired
	private TestMapper mapper;

    @Override
    public int regist(UserVO vo){
        return mapper.regist(vo);
       
    }
}
