// JavaScript Document

	var ZoneTickerNews="/apps/xml/zone_header_ticker.xml";
	var xmlDso, tickerSet;
	var _objName, _counter, _maxMsgs, _timeOut;
	
	function initTicker(xmlFile, objName, counter, maxMsgs, timeOut) {
		xmlDso = false;
		_objName = objName;
		_counter = counter;
		_maxMsgs = maxMsgs;
		_timeOut = timeOut;
		// branch for native XMLHttpRequest object
		if(window.XMLHttpRequest && !(window.ActiveXObject)) {
			try {
				xmlDso = new XMLHttpRequest();
			} catch(e) {
				xmlDso = false;
			}
		// branch for IE/Windows ActiveX version
		} else if(window.ActiveXObject) {
			try {
				xmlDso = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				try {
					xmlDso = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {
					xmlDso = false;
				}
			}
		}
	
		
		if(xmlDso) {
			xmlDso.onreadystatechange = processReqChange;
			xmlDso.open("GET", ZoneTickerNews, true);
			xmlDso.send("");
		}

	/*	setTimeout("xmlDsoTicker('"+objName+"','"+counter+"','"+maxMsgs+"','"+timeOut+"')", 1);*/
	}
	function processReqChange() {
		if (xmlDso.readyState == 4) {
			xmlDsoTicker(_objName,_counter,_maxMsgs,_timeOut);	
		}
	}
	function xmlDsoTicker(objName, counter, maxMsgs, timeOut) {
	  if ( xmlDso.responseXML.getElementsByTagName("item")[counter].getElementsByTagName("message")[0].childNodes[0]!= null)
		var val = xmlDso.responseXML.getElementsByTagName("item")[counter].getElementsByTagName("message")[0].childNodes[0].nodeValue;
		var url = xmlDso.responseXML.getElementsByTagName("item")[counter].getElementsByTagName("URL")[0].childNodes[0].nodeValue;
		document.getElementById("ticklink").innerHTML=val;
		document.getElementById("ticklink").href=url;		
		if(counter<maxMsgs-1) {
			counter++;
		}
		else {
			counter=0;
		}
		timeOut=5000;
		setTimeout("xmlDsoTicker('"+objName+"','"+counter+"','"+maxMsgs+"','"+timeOut+"')", timeOut);
	}



function ZoneUploadPicute(ZoneID,picCat,ZoneUrl)
{
window.open('/zone/Zone_ImageUpload.asp?zone='+ZoneID+'&Mcat='+picCat+'&zurl='+ZoneUrl+'','ImageUpload','width=500,height=290,status=yes')
}


function zUploadPicuteVal()
{


var filename = form1.file.value;
filename=filename.toLowerCase()


 if (form1.file.value=="")
{
alert('יש לבחור קובץ להעלאה');
form1.file.focus();
}


else if ((filename.indexOf('jpg')==-1) && (filename.indexOf('jpeg')==-1) && (filename.indexOf('gif')==-1)) 
{
alert(' לא ניתן לעלות סוג קובץ זה ');
form1.file.focus();
}




else
{
CreateFlashControl('zoneUPL', '200', '74', '/images/Portal/dl_ok.swf', 'transparent', 'False');
form1.submit();
}

}
