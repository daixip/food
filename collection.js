const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//添加路由
//用户收藏的菜谱
router.get("/collectionMeals",(req,res)=>{
    var uID=req.session.uid;
    console.log(uID)
    var sql="select mid,mname,img,subtitle,degree,taste,time from menu where mid in (select mid from user_collections where uid=uID)";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        } else {
            res.send({code:-1,msg:"查询失败"})
        }   
    })
})
// 用户收藏的文章
router.get("/collectionArticles",(req,res)=>{
    var uID=req.session.uid;
    console.log(uID)
    var sql="select lcId,title,subtitle,img,content from lose_class where lcId in (select lcId from user_collections where uid=uID)";
    pool.query(sql,(err,result)=>{ 
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        } else {
            res.send({code:-1,msg:"查询失败"})
        }   
    })
})
//导出路由器
module.exports=router;