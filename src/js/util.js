import $ from 'jquery'

function routerBind(){
    $(document).on("click",'[class*="ROUTER_"]', function(event){
        event.stopPropagation();
        var path = getRouterPath(this);
        if(path === undefined) return
        window.VM.$router.push(path);
        console.log('path'+ path);
    });
}

function getRouterPath(el){
    if($(el).hasClass('ROUTER_HOME')) return '/';
    if($(el).hasClass('ROUTER_BLOG')) return '/blog';
    if($(el).hasClass('ROUTER_DOC')) return '/doc';
    console.log('in getRouterPath')
}

function allBind(_vue){
    routerBind(_vue);
    console.log('in all Bind')
}
export default{
    routerBind,
    allBind
    
}