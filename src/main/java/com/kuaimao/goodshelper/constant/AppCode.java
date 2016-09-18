package com.kuaimao.goodshelper.constant;

/**
 * @author ph0ly
 * @time 2016-09-07
 */
public enum AppCode {

    SUCCESS("000000", "操作成功完成");

    private String code;
    private String message;

    AppCode(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
