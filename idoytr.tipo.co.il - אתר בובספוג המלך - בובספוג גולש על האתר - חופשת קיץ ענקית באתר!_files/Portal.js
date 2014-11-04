// JavaScript Document


// Is player Tvinchi play now
var isTvinchiPlayerPlayNow=false;


// Reload function check if Tvinchi play now
function IsReloadPage(){
    if(!isTvinchiPlayerPlayNow)window.location.href=window.location.href;
}

var IsLeftOzenBanner = 1;
 
 
// -----------------------------------------------------------------------------
// Globals
// Major version of Flash required
var requiredMajorVersion = 8;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Minor version of Flash required
var requiredRevision = 0;
// the version of javascript supported
var jsVersion = 1.0;
// Location visited after installation is complete if installation is required
var MMredirectURL = window.location;
// -----------------------------------------------------------------------------


function SubmitMsnForm() {
    //searchValue = document.getElementById("searchBox")
    searchValue = document.getElementById("tChannelinpt").value;
    if(searchValue==null)
        return;
    //msnsearch.qtop.value = searchValue.value;
    document.getElementById("qtop").value = searchValue;
    document.getElementById("q").value = encodeURI(document.getElementById("qtop").value);
    document.getElementById("msnsearch").submit();
}



function IsNumeric(sText)
{
    var ValidChars = "0123456789.";
    var IsNumber=true;
    var Char;

 
    for (i = 0; i < sText.length && IsNumber == true; i++) 
    { 
        Char = sText.charAt(i); 
        if (ValidChars.indexOf(Char) == -1) 
        {
            IsNumber = false;
        }
    }
    return IsNumber;
   
}



// Portal 2006 funcs /////////////////////////////////////////////////////////////////////////////////////////////

function TipoPhoneCall(dial_num)
{
    window.open('/apps/phoneme/?dial='+dial_num+'','TipoPhoneCall','width=510,height=330');
}


function TeenzSms(SmsString)
{
    showModalDialog('http://storage.tipo.co.il/apps/avatar/Generate_Jteen_sms.aspx?'+SmsString+'', 'TeenzSMS', 'resizable:no; help: no; status: no; scroll: no; ');
}


function TipoMovePop()
{
    window.open('http://82.80.250.211/vimtipo/','Vim','');

}

function PrivacyTipoPop()
{
    window.open('privacy.asp','TipoPrivacy','width=500,height=460');
}

function ContactTipoPop()
{
    window.open('contact.asp','TipoContact','width=500,height=400');
}

function AdvertizePop()
{
    window.open('http://www.tipo.co.il/advertize.htm','ADV','');
}

function createCookie(name,value,days)
{
    if (days)
    {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++)
    {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name)
{
    createCookie(name,"",-1);
    //alert('עדי');
}

function SmsBoxDl(sCode)
{
    showModalDialog('/apps/sms/TipoSmsTvBoxDL.asp?code='+sCode+'', 'TipoSMS', 'resizable:no; help: no; status: no; scroll: no; ');
}



function SmsMidiAutoPlay(id,url,code)
{	
    //	var cookVar;
    //	cookVar=readCookie('SmsBoxCook'+code);
    //	if (cookVar!=1)
    //	{
    //		SmsMidiPlay(id,url,code);
    //	}

}



function SmsMidiPlay(id,url,code)
{

    createCookie('SmsBoxCook'+code,1,7);
    id.filename=url;
    id.play();

}

function SmsMidiStop(id)
{
    id.stop();
}


function channelSearchAction()
{

    document.getElementById("tChannelfrm").target          = '_top';
    document.getElementById("tChannelfrm").action         = '/Channel_Search.asp';


    if (document.getElementById("tChannelinpt").value=="")
    {
        alert('יש להקליד נושא לחיפוש');
        document.getElementById("tChannelinpt").focus();
    }
    else
    {
        document.getElementById("tChannelPreSearch").style.display='none';
        document.getElementById("tChannelDoSearch").style.display='';	
        document.getElementById("tChannelfrm").submit();
    }	
}

function disableTipoEnterKey() 
{ 
    // if (window.event.keyCode == 13) window.event.keyCode = 0; 
    if (window.event.keyCode == 13) 
    {
        window.event.keyCode = 0; 
        channelSearchAction();
    }
	
}
function DoSearchSubmit()
{
    if (sForm.search.value =='')
        alert('נא להקליד מילה לחיפוש');
    else
        sForm.submit();
}

function tChannelFrmbyID(cID,sDisplay){
    document.getElementById("tChannelSrType").value=cID;	
    if ((cID==2)|| (cID==1))
    {	
        if (cID==2)
        {
            document.getElementById("cx").value='partner-pub-1289387860492024:wvv30t-xl90';			 	
        }
        else
        {
            document.getElementById("cx").value='partner-pub-1289387860492024:u0h0no-6l8w';			 
        }
        document.getElementById("channElsearchBar").style.display='none';
        document.getElementById("channElsearchBarGoogle").style.display='';
    }
    else 
    {	
        document.getElementById("channElsearchBarGoogle").style.display='none';
        document.getElementById("channElsearchBar").style.display='';
    }    
}



function TalkBack_RepAdd(NewsID)
{
    window.open('/re_add.asp?qid='+NewsID+'','TalkBack','width=450,height=530');


}

function RateTalkBack(RepID)
{
    eval('repRateBtDiv'+RepID+'.innerHTML="...אנא המתינו";');
    TipoChannelActionFrame.location='/user/user_talkbackRate.asp?rid='+RepID+'';
}

function displayHpTabBox(TabID,ActiveID)
{
    eval(TabID+'1.className="dispNone";');
    eval(TabID+'2.className="dispNone";');
    eval(TabID+'3.className="dispNone";');
    eval(TabID+ActiveID+'.className="dispShow";');

}

function ScopTalkBackDisplay(Head,Body,Foot,Simage,Title,bgcolor)
{
    if(Head.style.display=='none')
    {
        Head.style.display='';
        Body.style.display='';
        Foot.style.display='';
        Title.style.background=bgcolor;
        Simage.src='/images/re_close.gif';
    }

    else
    {
        Head.style.display='none';
        Body.style.display='none';
        Foot.style.display='none';
        Title.style.background='';
        Simage.src='/images/re_open.gif';
    }
}

// Portal 2006 funcs /////////////////////////////////////////////////////////////////////////////////////////////



function FixSite(id,trid){
    if(confirm('?האם את/ה בטוח')==1)
    {
        document.getElementById("DeleteFrame").src='/user/zone_fix_frame.asp?ZoneID='+id+'&trid='+trid+'';

        document.getElementById("ZoneTable").style.display='none';
        document.getElementById("ZoneDiv").style.display='none'; 
        document.getElementById("ZoneDeleteTable").style.display='';
    }
}

function TipoLite_Login(){
    window.open('/apps/tipolite/qtu_chat.asp','TipoLiteChat','width=285,height=565')
}


function DeleteSite(id,trid){

    if(confirm('? מחיקת האתר תמחק לגמרי את כל האתר עם התמונות והכתבות שלך, האם את/ה בטוח')==1)
    {
        document.getElementById("DeleteFrame").src='/user/zone_delete_frame.asp?ZoneID='+id+'&trid='+trid+'';
        document.getElementById("ZoneTable").style.display='none';
        document.getElementById("ZoneDiv").style.display='none'; 
        document.getElementById("ZoneDeleteTable").style.display='';
    }
}

function AvatarTab(tab,bgcolor){
    ContentFrame.location='/apps/avatar/frames/'+tab+'.htm';
    ContentTD.style.background=bgcolor;
}

function UpdateAvatar(cname,val) {
	
    GenAvatar.location='/apps/avatar/UpdateAvatar.asp?cname='+cname+'&val='+val+'&action=1';
}

function AvatarAction(id) {
    GenAvatar.location='/apps/avatar/UpdateAvatar.asp?action='+id+'';
}

function sethome()
{

    window.external.AddFavorite('http://www.tipo.co.il', 'www.tipo.co.il - קהילת המסנגר הישראלית');
    //this.style.behavior='url(#default#homepage)'; this.setHomePage('http://www.tipo.co.il');
}

function PortalPage(ref)
{

    top.location=''+ref+'';
}

function TabActive(Tabid)
{
    // Main navigation
    MainNav1.className='NavOff';
    MainNav2.className='NavOff';
    MainNav3.className='NavOff';
    MainNav4.className='NavOff';
    MainNav5.className='NavOff';
    MainNav6.className='NavOff';
    MainNav7.className='NavOff';
    MainNav8.className='NavOff';
    MainNav9.className='NavOff';
    MainNav10.className='NavOff';	
	
    //Sub navigation
    SubNav1.style.display='none';
    SubNav2.style.display='none';
    SubNav3.style.display='none';
    SubNav4.style.display='none';
    SubNav5.style.display='none';
    SubNav6.style.display='none';
    SubNav7.style.display='none';
    SubNav8.style.display='none';
    SubNav9.style.display='none';
    SubNav10.style.display='none';	
	
    ActiveNav='MainNav'+Tabid;
    ActiveSubNav='SubNav'+Tabid;
	
    eval(ActiveNav+".className='NavOn'");
    eval(ActiveSubNav+".style.display=''");
}
	
function icPopular(id)
{
    if(id==1)
    {
				
        icPopimage1.src='images/Portal/b_ic_1a.gif';
        icPopimage2.src='images/Portal/b_ic_2a.gif';
					
        IcTable1.style.display='';
        IcTable2.style.display='none';
					
    }
    if(id==2)
    {
				
        icPopimage1.src='images/Portal/b_ic_1b.gif';
        icPopimage2.src='images/Portal/b_ic_2b.gif';
					
        IcTable1.style.display='none';
        IcTable2.style.display='';
					
    }
					
}
		
function sTableView(id)
{
    sTable1.style.display='none';
    sTable2.style.display='none';
    sTable3.style.display='none';
    sTable4.style.display='none';
		
		
    sToShow='sTable'+id;
    //alert(sToShow)
    eval(sToShow+".style.display=''");
}
		
		
function Expand(id,Simage)
{
    if(id.style.display=='none')
    {
        id.style.display='';
        Simage.src='icq/images/re_close.gif';
    }
            
    else
    {
        id.style.display='none';
        Simage.src='icq/images/re_open.gif';
    }
}
	
function TabGto(TabID,TabLocation)
{
    //alert(TabID.location)
		
    //if  (TabID.location!=TabLocation)
    //{
    TabID.location=TabLocation
    //}

	
	
}
	
	
	
function UserCard(id)
{
    window.open('/tipocard.asp?id='+id+'','','width=560,height=430,toolbar=no, location=no,directories=no,menubar=no,resizable=no')
    //window.open('http://www.tipo.co.il/tipocard.asp?id='+id+'','','width=450,height=420')
}

	


function CamUserCard(id)
{
    window.open('../../tipocard.asp?id='+id+'','','width=560,height=430,toolbar=no, location=no,directories=no,menubar=no,resizable=no')
}


function SendMSG(id)
{
    window.open('/tipomsg.asp?id='+id+'','','width=540,height=700,toolbar=no, location=no,directories=no,menubar=no,resizable=no,scrollbars=yes')
}

function TipoWebCam(cam)
{
    window.open('apps/webcam/wc_login.asp?Cam_Have='+cam+'','TipoCam','width=770,height=450')

}

function UpdateTstatus(id){
    window.open('update_st.asp?id='+id+'','','width=10,height=10,left=4000,top=5000')
}

function MyFriend(id){
    window.open('/user/UserFriendAdd.asp?tipo='+id+'','','width=10,height=10,left=40,top=50')
}
function QomLogin(){
    window.open('http://www.tipo.co.il/apps/qsennger/Portal_Qom.asp','Qsenger','width=350,height=450,resizable=yes')
}


function DisplayBreakOutBanner(elementID,divName,divdisplay,swfObjName,Width,hieght)
{
		
    var hb = document.getElementById(elementID)
    document.body.style.backgroundAttachment = 'fixed';
    document.getElementById(divName).style.width = document.body.clientWidth + "px";
    document.getElementById(divName).style.left = document.body.clientWidth/2-Width/2 + "px";
    document.getElementById(divName).style.position = "absolute";
    hb.style.display = "block";
    CreateFlashControl(divdisplay, Width, hieght , swfObjName, 'Transparent', 'False');
    //alert("home");
		
}
function NoneBreakOutBanner(elementID,divName,exitURL)
{
    var hb = document.getElementById(elementID);
    document.body.style.backgroundAttachment = '';
    hb.style.display = "none";
    document.getElementById(divName).style.display = "none";
    document.location="http://www.tipo.co.il"+exitURL;
}
	
function closeBreakOutBanner(elementID,divName,exitURL)
{
    //alert(elementID);
    var hb = document.getElementById(elementID);
    document.body.style.backgroundAttachment = '';
    hb.style.display = "none";
    document.getElementById(divName).style.display = "none";
}
function adjustImage(){}


<!-- // Detect Client Browser type
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
jsVersion = 1.1;
// JavaScript helper required to detect Flash Player PlugIn version information
function JSGetSwfVer(i){

    // NS/Opera version >= 3 check for Flash plugin in plugin array
    if (navigator.plugins != null && navigator.plugins.length > 0) {
        if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
            var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
            var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
            descArray = flashDescription.split(" ");
            tempArrayMajor = descArray[2].split(".");
            versionMajor = tempArrayMajor[0];
            versionMinor = tempArrayMajor[1];
            if ( descArray[3] != "" ) {
                tempArrayMinor = descArray[3].split("r");
            } else {
                tempArrayMinor = descArray[4].split("r");
            }
            versionRevision = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
            flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
        } else {
            flashVer = -1;
        }
    }
        // MSN/WebTV 2.6 supports Flash 4
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
        // WebTV 2.5 supports Flash 3
    else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
        // older WebTV supports Flash 2
    else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
        // Can't detect in all other cases
    else {
		
        flashVer = -1;
    }
    //flashVer =6;
    return flashVer;
} 
// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision) 
{
    return true; //flash 9 patch
    reqVer = parseFloat(reqMajorVer + "." + reqRevision);
    // loop backwards through the versions until we find the newest version	
    for (i=25;i>0;i--) {	
        if (isIE && isWin && !isOpera) {
            versionStr = VBGetSwfVer(i);
        } else {
            versionStr = JSGetSwfVer(i);		
        }
        if (versionStr == -1 ) { 
            return false;
        } else if (versionStr != 0) {
            if(isIE && isWin && !isOpera) {
                tempArray         = versionStr.split(" ");
                tempString        = tempArray[1];
                versionArray      = tempString .split(",");				
            } else {
                versionArray      = versionStr.split(".");
            }
            versionMajor      = versionArray[0];
            versionMinor      = versionArray[1];
            versionRevision   = versionArray[2];
			
            versionString     = versionMajor + "." + versionRevision;   // 7.0r24 == 7.24
            versionNum        = parseFloat(versionString);
            // is the major.revision >= requested major.revision AND the minor version >= requested minor
			
            if ( (versionMajor > reqMajorVer) && (versionNum >= reqVer) ) {
                return true;
            } else {
                return ((versionNum >= reqVer && versionMinor >= reqMinorVer) ? true : false );	
            }
            return false;
        }
    }	
}

function ImagePreload() {
    if (typeof(arguments) != 'undefined') {
        for (i=0; i<arguments.length; i++ ) {
            if (typeof(arguments[i]) == "object") {
                for (k=0; k<arguments[i].length; k++) {
                    var oImage = new Image;
                    oImage.src = arguments[i][k];
                }
            }
 
            if (typeof(arguments[i]) == "string") {
                var oImage = new Image;
                oImage.src = arguments[i];
            }
        }
    }
}

// Change status of variable isTvinchiPlayerPlayNow when player play
function flashEvents(json)
{
    var player = document.getElementsByName("lucy_player")[0];
    isTvinchiPlayerPlayNow=json.eventType=="playerAction"?json.type=="play" || json.type=="jump":false;
}

// ================ Baner Popup code 
// function runPopUp(1) - run to one day
function createCookiePopup(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function readCookiePopup(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookiePopup(name) {
    createCookiePopup(name,"",-1);
}

function runPopUp(periodDays){
    if(!readCookiePopup("popupCookie")){
        createCookiePopup("popupCookie","1",periodDays);
        showBoxOP();
    }
    //eraseCookiePopup("popupCookie");
}

function showBoxOP()
{  
    // Banner html and size
    var popupHtml="<a href='http://www.tipo.co.il/media/summer2010/'><IMG SRC='http://www.tipo.co.il/images/summer_tipo.png' style='border:0;'  /></a>";
    var closeHtml="<IMG SRC='http://www.tipo.co.il/images/X_lightbox.png' style='border:0;'  />";
    var bWidth="724"
    var bHeight="585"


    var width = document.documentElement.clientWidth + document.documentElement.scrollLeft;
 
    var layer = document.createElement('div');
    layer.style.zIndex = 2;
    layer.id = 'layer';
    layer.style.position = 'absolute';
    layer.style.top = '0px';
    layer.style.left = '0px';
    layer.style.height = document.documentElement.scrollHeight + 'px';
    layer.style.width = width + 'px';
    layer.style.backgroundColor = 'black';
    layer.style.opacity = '.6';
    layer.style.filter += ("progid:DXImageTransform.Microsoft.Alpha(opacity=30)");
    document.body.appendChild(layer);  
    
    var div = document.createElement('div');
    div.style.zIndex = 3;
    div.id = 'box';
    div.style.position = (navigator.userAgent.indexOf('MSIE 6') > -1) ? 'absolute' : 'fixed';
    div.style.top = '10px';
    div.style.left = (width / 2) - (bWidth / 2) + 'px';	
    div.style.height = bWidth+'px';
    div.style.width = bHeight+'px';
    //div.style.backgroundColor = 'white';
    //div.style.border = '2px solid silver';
    div.style.padding = '20px';
    document.body.appendChild(div);  
    
    var a = document.createElement('a');
    a.innerHTML = closeHtml;
    a.href = 'javascript:void(0)';
    a.onclick = function() 
    {
        document.body.removeChild(document.getElementById('layer'));
        document.body.removeChild(document.getElementById('box'));
    };
      
    div.appendChild(a);

    var p = document.createElement('p');
    p.innerHTML = popupHtml;
    div.appendChild(p);
  
} 
// ================ end Baner Popup code 
  
