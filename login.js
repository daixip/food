const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//添加路由
// 注册新用户
router.post("/reg",(req,res)=>{
    pool.query('insert into user set uname=?,upwd=?',[req.body.uname,req.body.upwd],(err,result)=>{
        if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg suc'});
		}else{
			res.send({code:301,msg:'reg err'});
		}
    })
})
//登录
router.post("/login",(req,res)=>{
	// 判断登录是否成功
    pool.query('select uid from user where uname=? and upwd=?',[req.body.uname,req.body.upwd],(err,result)=>{
        if(err) throw err;
		if(result.length>0){
			// 成功，把登陆的用户id存入session
			req.session.uid=result[0].uid;
			res.send({code:200,msg:'login suc'});
		}else{
			res.send({code:301,msg:'login err'});
		}
	})
	
})
//判断是否登录
router.post("/islogin",(req,res)=>{
    //接收参数
	var uid=req.session.uid;
	// 获取登录的用户名
    pool.query('select uname from user where uid=?',[uid],(err,result)=>{
        if(err) throw err;
		if(result.length>0){
			res.send({code:200,msg:'login suc',data:result});
		}else{
			res.send({code:301,msg:'login err'});
		}
    })
})
// 退出登录
router.post("/loginOut",(req,res)=>{
	// 清除session中存储的uid
	req.session.uid="";
	if(req.session.uid==""){
		res.send({code:200,msg:'logout suc'});
	}else{
		res.send({code:301,msg:'logout err'});
	}
})

//导出路由器
module.exports=router;
