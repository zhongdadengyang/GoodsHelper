package com.kuaimao.goodshelper.config;

import com.github.pagehelper.PageHelper;
import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Properties;

/**
 * @author ph0ly
 * @time 2016-09-18
 */
@Configuration
@AutoConfigureAfter(DataSourceAutoConfiguration.class)
@EnableTransactionManagement
@MapperScan(basePackages = "com.fastcat.goodshelper.dao")
public class DataSourceConfiguration {

    private static Logger LOG = LoggerFactory.getLogger(DataSourceConfiguration.class);

    @Bean
    public PageHelper pageHelper() {
        PageHelper pageHelper = new PageHelper();
        Properties properties = new Properties();
        properties.setProperty("offsetAsPageNum", "true");
        properties.setProperty("rowBoundsWithCount", "true");
        properties.setProperty("reasonable", "true");
        pageHelper.setProperties(properties);
        return pageHelper;
    }

}
