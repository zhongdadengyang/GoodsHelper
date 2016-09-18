package com.kuaimao.goodshelper.web.controller;

import com.kuaimao.goodshelper.domain.dto.UserDTO;
import com.kuaimao.goodshelper.domain.model.ResultModel;
import com.kuaimao.goodshelper.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ph0ly
 * @time 2016-09-07
 */
@RestController
@RequestMapping("/web")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/user/{name}", method = RequestMethod.GET)
    public ResultModel getUser() {
        return new ResultModel(userService.getUsers());
    }

}
