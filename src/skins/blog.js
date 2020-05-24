const blogData ={
    blogTags:'个人博客',
    list: [
        {
            articleId: 0,
            blogTitle:'uni-app实现Mobile web Page',
            details:[
                {list:'1.选用工具HBuilderx快速创建uni-app项目。'},
                {list:'2.运行——>选择浏览器运行。等待编译及相关依赖安装完成后，浏览器会自动启动显示页面。'},
                {list:'3.自定义顶部导航栏部分，官网资料框架配置部分，配置pages.json的navigationStyle选项为“custom”'},
                {list:'4.在主页面实现顶部导航组件和下方内容中的购物功能'},
            ],
            times:'2020-03-30',
            count:0
        },
        {
            articleId: 1,
            blogTitle:'clac计算无效？',
            details:[
                {list:'clac进行计算的时候，计算符号两边必须要有空格！'},
            ],
            times:'2020-05-24',
            count:0
        }
    ]
}

const commentBox={
    
}

export {blogData}