// JavaScript Document

 
function CreateFlashControl(DivID, WIDTH, HEIGHT, URL, WMODE,MENU)
{
  
    var d = document.getElementById(DivID);

    FlObj='<object classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0  width=' + WIDTH + ' height=' + HEIGHT +'>'
    +'<param name="movie" value=' + URL + '>' 
    +'<param name="wmode" value=' + WMODE + '>'	
    +'<param name="menu" value=' + MENU + '>' 
    +'<param name="allowFullScreen" value="true" />' 
    +'<embed src='+ URL +'  wmode=' + WMODE + ' quality=high pluginspage=http://www.macromedia.com/go/getflashplayer type=application/x-shockwave-flash width=' + WIDTH + ' height=' + HEIGHT +'></embed></object>';
    d.innerHTML =FlObj;	
  
	
}
function CreateFlashControlID(DivID,  objID , WIDTH, HEIGHT, URL, WMODE,MENU)
{

  var d = document.getElementById(DivID);
	
	FlObj='<object id='+objID+'  name='+objID+' classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0  width=' + WIDTH + ' height=' + HEIGHT +'>'
	+'<param name="movie" value=' + URL + '>'
	+'<param name="wmode" value=' + WMODE + '>'	
	+'<param name="menu" value=' + MENU + '>'
	+'<param name="allowFullScreen" value="true" />'
	+'<embed id='+objID+'  name='+objID+'  src='+ URL +'  wmode=' + WMODE + ' quality=high pluginspage=http://www.macromedia.com/go/getflashplayer type=application/x-shockwave-flash width=' + WIDTH + ' height=' + HEIGHT +'></embed></object>';
	d.innerHTML =FlObj;	
	  }