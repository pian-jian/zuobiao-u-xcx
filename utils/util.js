
function formatTime(date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//时间戳转为时间
function unixtoTime(ns,format) {
    var result;
    var time = new Date(ns*1000);
    result=format || 'YYYY年MM月DD日 HH时II分SS秒 WW';
    result=result.toUpperCase();
    result=result.replace('YYYY',time.getFullYear());
    var m=time.getMonth()+1;
    result=result.replace('MM',m>9?m:"0"+m);
    var d=time.getDate();
    result=result.replace('DD',d>9?d:'0'+d);
    var hh=time.getHours();
    result=result.replace('HH',hh>9?hh:'0'+hh);
    var ii=time.getMinutes();
    result=result.replace('II',ii>9?ii:'0'+ii);
    var ss=time.getSeconds();
    result=result.replace('SS',ss>9?ss:'0'+ss);
    var week;
    switch (time.getDay()) {
        case 0:week="星期天";break
        case 1:week="星期一";break
        case 2:week="星期二";break
        case 3:week="星期三";break
        case 4:week="星期四";break
        case 5:week="星期五";break
        case 6:week="星期六";break
    }
    result=result.replace('WW',week);
    return result;
}

//时间转为时间戳
function timetouUnix(dateStr)
{
    var newstr = dateStr.replace(/-/g,'/');
    var date =  new Date(newstr);
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);
}


module.exports = {
    formatTime: formatTime,
    unixtoTime:unixtoTime,

    alert:function(msg,success,cancel){
        wx.showModal({
            title:"提示信息",
            content:msg,
            showCancel:typeof cancel=='undefined'?false:true,
            success:function(res){
                if(res.confirm){
                    if(success) success();
                }else{
                    if(cancel) cancel();
                }
            }
        });
    },
    toast:function(title){
        wx.showToast({
            title:title,
            icon:"success"
        })
    },

    cache:function(key,value){
        if(value){
            wx.setStorageSync(key,value);
        }
        return wx.getStorageSync(key);
    },
    image:function(id,width=""){
        var url=this.cgi(uri.CGI__DOWNLOAD+'/id/'+id);
        if(width){
            url+='/width/'+width;
        }
        return url;
    },
    setBarTitle:function (t) {
        wx.setNavigationBarTitle({
            title: t
        })
    },
    //toast提示
    toast:function(val){
        wx.showToast({
            title: val,
            icon: 'fail',
            duration: 2000
        })
    }

}
