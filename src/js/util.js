import $ from 'jquery'
import _ from 'loadsh'

function routerBind(){
    $(document).on("click",'[class*="ROUTER_"]', function(event){
        event.stopPropagation();
        var path = getRouterPath(this);
        if(path === undefined) return
        window.VM.$router.push(path).catch(err => {});/*设置当前路由地址，catch避免重复设置当前路由时抛出警告*/
    });
}

function getRouterPath(el){
    if($(el).hasClass('ROUTER_HOME')) return '/';
    if($(el).hasClass('ROUTER_BLOG')) return '/blog';
    if($(el).hasClass('ROUTER_DOC')) return '/doc';
    if($(el).hasClass('ROUTER_SOLAR_TERM')) return '/solarTerm';
    if($(el).hasClass('ROUTER_THREE')) return '/three';
    if($(el).hasClass('ROUTER_ANIMATE')) return '/animate';
    if($(el).hasClass('ROUTER_INTRO')) return '/intro';
}

//导航菜单的鼠标mouseenter事件
function eventBind(){
    $(document).on('mouseenter','#menu .menu-main .menu-main-list',function(e){
        let self = this;
        let sub = $(this).data('sub');
        let duration = 400;
        $('[id^="subMenu_"]:visible:not([id="subMenu_' + sub + '"])').slideUp(duration);
        if(sub){
            $('#subMenu_' + sub )
            .stop()
            .slideDown(duration)
            .off('mouseleave').on('mouseleave',function(){
                _.delay(() => {
                    if(!($('[data-sub=' + sub + ']:hover').length > 0))  $(this).slideUp(duration);
                },150); 
            })
        }
    })
    .on('mouseleave','#menu .menu-main .menu-main-list',function(e){
        let sub =$(this).data('sub');
        _.delay(() => {
            if(sub && !($('#subMenu_'+ sub + ':hover').length > 0)){
                let duration = 400;
                $('#subMenu_'+sub)
                .stop()
                .slideUp(duration);
            }
        },150);
    })
}

function allBind(_vue){
    routerBind(_vue);
    eventBind();
}

// function menuRouteName(name){
//     const a = ['promo', 'sportNew'],
//           b = ['promotions', 'sport_new'];
//     return a.indexOf(name) === -1 ? name : b[a.indexOf(name)];
//   }
export default{
    routerBind,
    allBind
}