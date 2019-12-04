const menu = {
    clazz:'',
    max: 0,
    list:[
        {
            id: 'home',
            name: '首页',
            text:'',
            clazz: 'home'
         },
        {
            id: 'blog',
            name: '博客',
            text: '',
            clazz: 'blog',
            list:[
                {name:'css设计',id:'css',clazz:'item-css'},
                {name:'js设计',id:'js',clazz:'item-js'},
                {name:'html设计',id:'html',clazz:'item-html'},
                {name:'vue设计',id:'vue',clazz:'item-vue'},
            ]
        },
        {
            id:'introduce',
            name:'关于我',
            text: '',
            clazz: 'introduce'
        }
    ]
}

const footer = {
    copyRight: 'CopyRight @www.xiareWang.com All Rights Reserved.',
    list:[
        {
            path: 'home',
            name: '返回首页'
        },
        {
            path:'introduce',
            name:'关于我'
        }
    ]
}

export{menu, footer}