const {app,BrowserWindow,shell}=require('electron');
const path=require('path');
const fs=require('fs');
app.whenReady().then(()=>{
 const win=new BrowserWindow({width:1440,height:920,minWidth:380,minHeight:620,backgroundColor:'#f5faff',title:'SVS Group of Institutions — Experience Preview',webPreferences:{nodeIntegration:false,contextIsolation:true,sandbox:true,webSecurity:true}});
 win.removeMenu();
 win.webContents.setWindowOpenHandler(({url})=>{if(/^https?:\/\//.test(url))shell.openExternal(url);return {action:'deny'}});
 win.webContents.on('will-navigate',(e,url)=>{if(!url.startsWith('file://')){e.preventDefault();if(/^https?:\/\//.test(url))shell.openExternal(url)}});
 win.loadFile(path.join(__dirname,'..','index.html'));
});
app.on('window-all-closed',()=>app.quit());
