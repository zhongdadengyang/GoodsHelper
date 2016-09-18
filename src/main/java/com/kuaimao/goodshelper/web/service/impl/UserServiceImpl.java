package com.kuaimao.goodshelper.web.service.impl;

import com.kuaimao.goodshelper.dao.UserMapper;
import com.kuaimao.goodshelper.domain.data.UserDO;
import com.kuaimao.goodshelper.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author ph0ly
 * @time 2016-09-07
 */
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public List<UserDO> getUsers() {
        return userMapper.getUsers();
    }
}
