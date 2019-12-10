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

const headerTip={
    list:[
        {
            clazz:'contact-qq',
            textZh:'QQ：8989@qq.com'
        },
        {
            clazz:'contact-phone',
            textZh:'Phone:18888888888'
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

export{menu, headerTip, footer}