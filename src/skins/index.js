const menu = {
    clazz:'',
    max: 0,
    list:[
        {
            id: 'home',
            name: '首页',
            text:'',
            clazz: 'home ROUTER_HOME'
         },
        {
            id: 'blog',
            name: '博客',
            text: '',
            clazz: 'blog ROUTER_BLOG',
            list:[ 
                {name:'css设计',id:'css',clazz:'item-css ROUTER_BLOG'},
                {name:'js设计',id:'js',clazz:'item-js ROUTER_BLOG'},
                {name:'html设计',id:'html',clazz:'item-html ROUTER_BLOG'},
                {name:'vue设计',id:'vue',clazz:'item-vue ROUTER_BLOG'},
            ]
        },
        {
            id:'solarTerm',
            name:'二十四节气',
            text: '',
            clazz: 'solar ROUTER_SOLAR_TERM',
            list:[ 
                {name:'立春',id:'lc',clazz:'lichun0 ROUTER_SOLAR_TERM'},
                {name:'芒种',id:'mz',clazz:'mangzhong0 ROUTER_SOLAR_TERM'},
                {name:'白露',id:'bl',clazz:'bailu0 ROUTER_SOLAR_TERM'},
                {name:'冬至',id:'dz',clazz:'dongzhi0 ROUTER_SOLAR_TERM'},
            ]
        },
        {
            id:'doc',
            name:'关于我',
            text: '',
            clazz: 'doc ROUTER_DOC'
        }
    ]
}
const card={
    name:'我的名片',
    career:"职业：前端开发工程师",
    address:'住址：四川省-成都市',
    email:'邮件：1291636059@qq.com',
    list:[
        {
            clazz:'icon iconfont icon-homepage ROUTER_HOME ' ,
            title:'网站地址',
            href:''
        },
        {
            clazz:'icon iconfont icon-youxiang',
            title:'我的邮箱',
            href:'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=zfz-9Pz7-vv9_PSNvLzjrqKg'
        },
        {
            clazz:'icon iconfont icon-qie',
            title:'联系我',
            href:'tencent://message/?uin=1291636059&amp;Site=web&amp;Menu=yes'
        },
        {
            clazz:'icon iconfont icon-weixin',
            title:'关注我的微信',
            href:''
        },
    ]
}

const headerTip={
    list:[
        {
            clazz:'mycsdn',
            iClass:'icon iconfont icon-csdn',
            textZh:'',
            href: 'https://blog.csdn.net/u012183426'
        },
        {
            clazz:'mygithub',
            iClass:'icon iconfont icon-github',
            textZh:'',
            href: 'https://github.com/Arkoly/'
        }
    ]
}

const footer = {
    copyRight: 'CopyRight @www.xiareWang.com All Rights Reserved.',
    list:[
        {
            clazz: 'ROUTER_HOME',
            name: '返回首页'
        },
        {
            clazz:'ROUTER_DOC',
            name:'关于我'
        }
    ]
}

const perInfo={}
export{menu, headerTip, footer, card, perInfo}