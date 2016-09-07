package com.fastcat.goodshelper.web.controller;

import com.fastcat.goodshelper.domain.dto.UserDTO;
import com.fastcat.goodshelper.domain.model.ResultModel;
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

    @RequestMapping(value = "/user/{name}", method = RequestMethod.GET)
    public ResultModel<UserDTO> getUser() {
        return new ResultModel<UserDTO>();
    }

}
