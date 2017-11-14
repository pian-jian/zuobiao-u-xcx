var util = require('../../utils/util.js')

Page({
    data: {
        fangyuan : {
            pricezuidi: ["5000"],
            pricezuigao: ["50000"],
            taoshu: ["364"]
        },
        jingjiren:{
            avg:"100",
            id:"109",
            kanfangCount:"0",
            photo:"uploadFile/userManager/131493358611835000.jpg",
            tel:"4000669000转224",
            userPhone:"15158971955",
            username:"张志慧",
            zhicheng:"经纪人"
        },
        list:[{address:"义乌市宏迪路65号",
            adminid:"109",
            duiKou:"稠江中学",
            duikoutype:"对口中学",
            imgC:"20160316063342377000.jpg",
            imgCounts:"25",
            jianZhangTitle:"2015年义乌开发区小学招生简章",
            minge:"180",
            moreImgC:"20160316063338861375.jpg," +
            "20160316063339392625.jpg," +
            "20160316063339892625.jpg," +
            "20160316063340408250.jpg," +
            "20160316063340970750.jpg," +
            "20160316063341392625.jpg," +
            "20160316063341908250.jpg" +
            ",20160316063342377000.jpg," +
            "20160316063342861375.jpg," +
            "20160316063343345750.jpg," +
            "20160316063343923875.jpg," +
            "20160316063344548875.jpg," +
            "20160316063345220750.jpg," +
            "20160316063345767625.jpg," +
            "20160316063346423875.jpg," +
            "20160316063347048875.jpg," +
            "20160316063347658250.jpg," +
            "20160316063348142625.jpg," +
            "20160316063348783250.jpg," +
            "20160316063349330125.jpg," +
            "20160316063403002000.jpg," +
            "20160316063403377000.jpg," +
            "20160316063403877000.jpg," +
            "20160316063404252000.jpg",
            nianJi:"0",
            schooName:"义乌市经济开发区学校",    
            schooid:"17",
            school_nature:"公办"}],
        xiaoqu:[{
            communityid:"275",
            communityname:"城店路",
            houseprice:"13550",
            zongtaoshu:"1"
        },{
            communityid:"482",
            communityname:"金马小区",
            houseprice:"10754",
            zongtaoshu:"2",
        },{
            communityid:"186",
            communityname:"现代公寓",
            houseprice:"24124",
            zongtaoshu:"31"
        },{
            communityid:"187",
            communityname:"贝村小区",
            houseprice:"16099",
            zongtaoshu:"11" 
        },{
            communityid:"195",
            communityname:"稠州西路",
            houseprice:"16599",
            zongtaoshu:"20"
        }],
        moreImgCarry:[{
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160316063338861375.jpg",
            id:1},{
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160316063339392625.jpg",
            id:1},{
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160316063339892625.jpg",
            id:1},{
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160316063340408250.jpg",
            id:1},{
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160316063340970750.jpg",
            id:1},{
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160316063341392625.jpg",
            id:1},{
            img:"http://www.zuobiao.wang/uploadFile/images/shuiyin/20160316063341908250.jpg",
            id:1},{
            img: "http://www.zuobiao.wang/uploadFile/images/shuiyin/20160316063342377000.jpg",
            id:1}
        ]
    },
    onLoad:function(){
        util.setBarTitle(this.data.list[0].schooName)
    },
    onShow:function () {
        
    }
    
})