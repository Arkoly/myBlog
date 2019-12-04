import $ from 'jquery'

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
}

function allBind(_vue){
    routerBind(_vue);
}

function menuRouteName(name){
    const a = ['promo', 'sportNew'],
          b = ['promotions', 'sport_new'];
    return a.indexOf(name) === -1 ? name : b[a.indexOf(name)];
  }
export default{
    routerBind,
    allBind,
    menuRouteName
}