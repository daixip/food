const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//添加路由
//文章列表
router.get("/articles",(req,res)=>{
    var sql="select lcId,img,title,subtitle,content from lose_class";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
// 文章详情
router.get("/getarticle",(req,res)=>{
    var lcId=req.query.lcId
    var sql="select lcId,img,title,subtitle,content from lose_class where lcId=?";
    pool.query(sql,[lcId],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})

//导出路由器
module.exports=router;