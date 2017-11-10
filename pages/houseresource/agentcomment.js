Page({
    data:{
        list:[{
                contentC: "**本人对此房了解透彻，看房联系右方转接来电**<br>香山小区 <br>1：确权面积111平，大气3房，2厅1厨2卫<br>2：清爽装修，要求不高，可以拎包入住<br>3：黄金楼层，70年住宅，送24平车库<br>4：户型方正，坐北朝南，全明格局，采光极佳<br>5：证件齐全，满2年，省5.34%增值税，产权清晰，随时过户<br>6：经济开发区小学，稠江中学",
                dateC: "2017-2-27 20:48:05",
                id: "23216",
                photo: "http://www.zuobiao.wang/uploadFile/userManager/131494242781678750.jpg",
                tel: "4000669000转507",
                userPhone: "15257969375",
                username: "肖盛福",
            }, {
            contentC: "1.户型介绍：3室2厅2卫1阳台<br>2.装修情况：精装修，阳光洒满整个房间<br>3.关于税费：满二年<br>4.看房时间：看房只需给我一个电话，我为您预约业主！",
            dateC: "2016-9-19 9:13:29",
            id: "15090",
            photo: "http://www.zuobiao.wang/uploadFile/userManager/131077801600645000.JPG",
            tel: "4000669000转666",
            userPhone: "13373811359",
            username: "陈美渺"
        },{
            contentC:"证件齐全，满2年，首套税费2.5万，带地下储藏室22平，位置好，黄金楼层，房主自荐代理，十几万的清爽装修，性价比高",
            dateC:"2016-9-14 9:55:06",
            id:"14336",
            photo:"http://www.zuobiao.wang/uploadFile/userManager/131493355603866250.jpg",
            tel:"4000669000转237",
            userPhone:"15267963576",
            username:"姜新"
            }]
    },
    onLoad:function(){
        var that=this;
        wx.setNavigationBarTitle({
            title: "全部评房",
        })
    },
    callPhone:function(e){
        var that=this;
        var n_index=e.currentTarget.dataset.tag_index;
        console.log(n_index);

        wx.makePhoneCall({
            phoneNumber: that.data.list[n_index].userPhone
        })
    }


})