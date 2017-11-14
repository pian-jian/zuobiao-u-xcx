var util = require('../../utils/util.js')

Page({
    data:{},
    onLoad:function(opt){
        if(opt&&opt.from){
            var n_inputtext;
            switch (opt.from){
                case "index":
                    n_inputtext="请输入城区，商圈或学区房名..."
                break;
                case "newhouse":
                    n_inputtext="请输入楼盘或区域"
                break;
                default:
                    n_inputtext="请输入城区，商圈或学区房名..."
                break;
            }
            this.setData({
                placeholder:n_inputtext
            })
        }
    }
})