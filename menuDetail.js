//菜谱详情页
const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//添加路由
//查询菜谱图片、标题等
router.get("/getTitle",(req,res)=>{
    var mid=req.query.mid;
    var uid=req.session.uid;
    // 创建一个变量保存收藏状态
    var isCol=false;
    pool.query("select mname,img,video,subtitle,degree,taste,time,tips from menu where mid=?;select mid from user_collections where uid=?",[mid,uid],(err,result)=>{
        if(err) throw err;
        if(result[0].length>0){
            // 把查询到的菜谱id存取预先定义好的数组
            result[1].forEach((elem,i) => {
                if(elem.mid==mid){
                    isCol=true;
                    return;
                }
            })
            console.log(isCol)
            res.send({code:1,msg:"查询成功",data:result[0],isCol:isCol});
        }
    })
})
//查询菜谱食材
router.get("/getFoods",(req,res)=>{
    pool.query("select fname,count from food_material where menuId=?",[req.query.mid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//查询菜谱步骤
router.get("/getSteps",(req,res)=>{
    pool.query("select details,img from steps where stepsId=?",[req.query.mid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//查询要推荐的菜谱
router.get("/getRecom",(req,res)=>{
    var sql="SELECT mid,mname,img,subtitle FROM menu WHERE mid >= ((SELECT MAX(mid) FROM menu)-(SELECT MIN(mid) FROM menu)) * RAND() + (SELECT MIN(mid) FROM menu)  LIMIT 5";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//设置菜谱收藏数量并加入用户收藏表

router.get("/setCollect",(req,res)=>{
    //获取前端发来的参数
    var mid=req.query.mid;
    var msg=req.query.msg;
    var uid=req.session.uid;
    var sql="";
    if(msg=="add"){
        sql="UPDATE menu SET store=store+1 WHERE mid=?;insert into user_collections set mid=?,uid=?"
    }else{
        sql="UPDATE menu SET store=store-1 WHERE mid=?;delete from user_collections where mid=? and uid=?"
    }
    pool.query(sql,[mid,mid,uid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"更新成功"})
            console.log(result)
            console.log(result[0])
            console.log(result[1])
        }
    })
})
//导出路由器
module.exports=router;