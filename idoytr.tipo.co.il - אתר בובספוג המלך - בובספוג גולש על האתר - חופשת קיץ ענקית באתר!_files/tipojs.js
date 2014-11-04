// JavaScript Document


function UserCard(id)
{
					window.open('tipocard.asp?id='+id+'','','width=450,height=420')
}

function CamUserCard(id)
{
					window.open('../tipocard.asp?id='+id+'','','width=450,height=420')
}


function SendMSG(id)
{
					window.open('tipomsg.asp?id='+id+'','','width=500,height=430')
}

function TipoWebCam(cam)
{
window.open('../webcam/wc_login.asp?Cam_Have='+cam+'','TipoCam','width=770,height=450')

}

function UpdateTstatus(id){
					window.open('update_st.asp?id='+id+'','','width=10,height=10,left=4000,top=5000')
}

function MyFriend(id){
					window.open('../user/UserFriendAdd.asp?tipo='+id+'','','width=10,height=10,left=4000,top=5000')
}
