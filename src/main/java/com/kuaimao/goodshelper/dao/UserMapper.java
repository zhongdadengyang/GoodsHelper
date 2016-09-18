package com.kuaimao.goodshelper.dao;

import com.kuaimao.goodshelper.domain.data.UserDO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author ph0ly
 * @time 2016-09-07
 */
@Mapper
public interface UserMapper {

    @Select("SELECT * FROM user")
    List<UserDO> getUsers();

    @Select("SELECT * FROM user WHERE id=#{id}")
    UserDO getUser(Long id);

}
