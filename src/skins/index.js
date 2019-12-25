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
                {name:'css设计',id:'css',clazz:'item-css'},
                {name:'js设计',id:'js',clazz:'item-js'},
                {name:'html设计',id:'html',clazz:'item-html'},
                {name:'vue设计',id:'vue',clazz:'item-vue'},
            ]
        },
        {
            id:'solarTerm',
            name:'二十四节气',
            text: '',
            clazz: 'solar ROUTER_SOLAR_TERM',
            list:[ 
                {name:'立春',id:'lc',clazz:'lichun0'},
                {name:'芒种',id:'mz',clazz:'mangzhong0'},
                {name:'白露',id:'bl',clazz:'bailu0'},
                {name:'冬至',id:'dz',clazz:'dongzhi0'},
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
    career:"职业：WEB网页设计",
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
            href:''
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

export{menu, headerTip, footer, card}