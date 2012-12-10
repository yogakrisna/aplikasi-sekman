Ext.onReady(function(){
Ext.QuickTips.init();

var login = new Ext.FormPanel({
labelWidth:90,
//url:'login.php', //manggil file.php
frame:true,
width:300,
autoHeight:true,
padding:200,
defaultType:'textfield',
monitorValid:true,

items:[{
xtype:'box', //buat naruh gambar icon
autoEl:{
tag:'img',
src:'im48x48.png'
}
},
{
fieldLabel:'Username', //buat ngisi username
name:'username',
allowBlank:false
},{
fieldLabel:'Password', // buat ngisi password
name:'password',
inputType:'password',
allowBlank:false
}],


buttons:[{
text:'Login',

handler:function(){
login.getForm().submit({
method:'POST',
waitTitle:'Harap Tunggu',
waitMsg:'Mengirim data...',


success:function()
{
Ext.Msg.alert('Status', 'Login Berhasil!', function(btn, text)
{

if (btn == 'ok')
{
var redirect = 'index.html'; //jika sukses akan di redirec ke index1.php
window.location = redirect;
}
});
},

failure:function(form, action)
{
if(action.failureType == 'server')
{
obj = Ext.util.JSON.decode(action.response.responseText);
Ext.Msg.alert('Login Failed!', obj.errors.reason);
}
else
{
Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText + "abcd");
}
login.getForm().reset();
}
});
}
},
{
text: 'Reset',
handler: function(){
login.getForm().reset();
}

}]
});

var createwindow = new Ext.Window({
//frame:true,
title:'Please Login',
width:315,
height:155,
closable: false,
items: login
});

createwindow.show();
});