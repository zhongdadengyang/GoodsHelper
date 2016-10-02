var local = angular.module('alert.config', []);

local.constant('$global', {
    messages: [{
        id: 'sms',
        name: '短信'
    }, {
        id: 'email',
        name: '邮件'
    }, {
        id: 'wechat',
        name: '微信'
    }, {
        id: 'phone',
        name: '电话'
    }, {
        id: 'youren',
        name: '有人消息'
    }, {
        id: 'youren_voice',
        name: '有人语音'
    }],
    messageMap: {
        'sms': {
            name: '短信',
            icon: 'fa fa-envelope'
        },
        'email': {
            name: '邮件',
            icon: 'fa fa-envelope-o'
        },
        'wechat': {
            name: '微信',
            icon: 'fa fa-weixin'
        },
        'phone': {
            name: '电话',
            icon: 'fa fa-volume-control-phone'
        },
        'youren': {
            name: '有人消息',
            icon: 'fa fa-user'
        },
        'youren_voice': {
            name: '有人语音',
            icon: 'fa fa-volume-up'
        }
    }
});

module.exports = local.name;