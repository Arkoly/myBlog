function setHomePage() {
	try {
	  var url = window.top.location.href;
	  event.setHomePage(url);
	} catch (e) {
	  alertWarning("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【" + url + "】设置为首页。");
	}
}

export default{
    setHomePage
}