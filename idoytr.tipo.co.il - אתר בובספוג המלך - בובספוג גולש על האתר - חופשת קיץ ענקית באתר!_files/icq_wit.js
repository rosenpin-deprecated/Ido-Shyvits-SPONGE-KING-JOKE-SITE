if(!document.getElementById('scrpt_wit')){
	var newScript = document.createElement('script');
	var newCss = document.createElement('link');
	newScript.setAttribute('type', 'text/javascript');
	newScript.setAttribute('id', 'scrpt_wit');
	newScript.setAttribute('src', 'http://wit.icq.com/wit/?act=new');
	newCss.setAttribute('type', 'text/css');
	newCss.setAttribute('rel', 'stylesheet');
	newCss.setAttribute('href', 'http://wit.icq.com/wit/css/wit_css.css');
	document.getElementsByTagName("head")[0].appendChild(newCss);
	document.getElementsByTagName("head")[0].appendChild(newScript);	
}