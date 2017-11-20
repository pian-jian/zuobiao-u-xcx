var util = require('../../utils/util.js')

Page({
    data: {
        avg:"100",
        list:[{
            Id:"179",
            adminId:"191",
            commentC:"服务热情，详细帮我介绍小区，值得信赖",
            dateC:"2016-7-26 14:25:00",
            field1:"",
            field2:"",
            field3: "",
            serverScore:"100",
            skillScore:"100",
            typC:"0",
            userId:"191",
        },{
            Id:"106",
            adminId:"191",
            commentC:"热情积极 主动",
            dateC:"2016-6-11 20:01:52",
            field1:"",
            field2:"",
            field3: "",
            serverScore:"100",
            skillScore:"100",
            typC: "0",
            userId:"191"
        },{
            Id:"50",
            adminId:"191",
            commentC:"",
            dateC:"2016-5-14 18:42:31",
            field1:"",
            field2:"",
            field3:"",
            serverScore:"100",
            skillScore:"100",
            typC:"0",
            userId:"191"
        },{
            Id:"49",
            adminId:"191",
            commentC:"",
            dateC:"2016-5-13 20:20:39",
            field1:"",
            field2:"",
            field3:"",
            serverScore:"100",
            skillScore:"100",
            typC:"0",
            userId:"191",
            listCount:"4",
            maxPage:"1"
        }]
    },
    onLoad:function(){
        var that=this;
        var n_list=this.data.list;
        n_list.map(function(r,n){
            r.serverstarsnum=parseInt(r.serverScore/20);
            r.skillstarsnum=parseInt(r.skillScore/20);
            return r;
        })
        this.setData({
            list:n_list
        })
    }
})