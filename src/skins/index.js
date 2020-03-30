const menu = {
    clazz:'',
    max: 0,
    list:[
        {
            id: 'home',
            name: '首页',
            text:'',
            clazz: 'home-menu ROUTER_HOME'
         },
         
        {
            id: 'blog',
            name: '博客',
            text: '',
            clazz: 'blog-menu ROUTER_BLOG',
            list:[ 
                {name:'css设计',id:'css',clazz:'item-css ROUTER_BLOG'},
                {name:'js设计',id:'js',clazz:'item-js ROUTER_BLOG'},
                {name:'html设计',id:'html',clazz:'item-html ROUTER_BLOG'},
                {name:'vue设计',id:'vue',clazz:'item-vue ROUTER_BLOG'},
            ]
        },
        {
            id: 'intro',
            name: '推荐',
            text: '',
            clazz: 'intro-menu ROUTER_INTRO',
            list:[ 
                {name:'css工具',id:'css',clazz:'item-css ROUTER_INTRO'},
                {name:'学习推荐',id:'js',clazz:'item-js ROUTER_INTRO'},
                {name:'项目推荐',id:'html',clazz:'item-html ROUTER_INTRO'},
                {name:'网站推荐',id:'vue',clazz:'item-vue ROUTER_INTRO'},
            ]
        },
        {
            id:'solarTerm',
            name:'二十四节气',
            text: '',
            clazz: 'solar-menu ROUTER_SOLAR_TERM',
            list:[ 
                {name:'立春',id:'lc',clazz:'lichun0 ROUTER_SOLAR_TERM'},
                {name:'芒种',id:'mz',clazz:'mangzhong0 ROUTER_SOLAR_TERM'},
                {name:'白露',id:'bl',clazz:'bailu0 ROUTER_SOLAR_TERM'},
                {name:'冬至',id:'dz',clazz:'dongzhi0 ROUTER_SOLAR_TERM'},
            ]
        },
        // {
        //     id:'three',
        //     name:'threeJs',
        //     text: '',
        //     clazz: 'three-menu ROUTER_THREE'
        // },
        {
            id:'animate',
            name:'动画',
            text: '',
            clazz: 'animate-menu ROUTER_ANIMATE'
        },
        {
            id:'doc',
            name:'关于我',
            text: '',
            clazz: 'doc-menu ROUTER_DOC'
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

const linkBox={
    listClazz:'ROUTER_BLOG',
    list:[
        {
            clazz:'link-box-item box1 ROUTER_BLOG' ,
            title:'uni-app实现购物功能模块',
            text:'uni-app实现购物功能模块?',
            href:''
        },
        {
            clazz:'link-box-item box2 ROUTER_BLOG' ,
            title:'calc()无效的问题',
            text:'calc()无效的问题?',
            href:''
        },
    ]
}
const contentBox={
    listTitle:'最新博文',
    listClazz:'ROUTER_BLOG',
    list:[
        {clazz:'item0',title:'uni-app的学习0',tags:'vuejs0',times:'2020-03-22',other:'阅读更多',detail:'01uni-app的学习uni-app的学习uni-app的学习uni-app的学习'},
        {clazz:'item1',title:'uni-app的学习1',tags:'vuejs1',times:'2020-03-23',other:'阅读更多',detail:'02uni-app的学习uni-app的学习uni-app的学习uni-app的学习'},
        {clazz:'item2',title:'uni-app的学习2',tags:'vuejs2',times:'2020-03-24',other:'阅读更多',detail:'03uni-app的学习uni-app的学习uni-app的学习uni-app的学习'},
        {clazz:'item3',title:'uni-app的学习3',tags:'vuejs3',times:'2020-03-25',other:'阅读更多',detail:'04uni-app的学习uni-app的学习uni-app的学习uni-app的学习'},
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

export{menu, headerTip, footer, card, linkBox, contentBox, perInfo}