const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//添加路由
//1.菜谱
router.get('/mealsList',(req,res)=>{
	// var currentPage=req.query.currentPage;
	// var ps=req.query.pagesize;
	// 	if(!currentPage){currentPage=1};
	// 	if(!ps){ps=16};
	// 	var start=(currentPage-1)*ps;
		// ps=parseInt(ps)
	pool.query('select mid,mname,img,subtitle,grade,watch,store from menu',(err,result)=>{
		if(err) throw err;
		res.send({code:1,msg:"查询成功",data:result})
	});
})
//2.带参数传递查找菜谱
router.get('/meals/search',(req,res)=>{
	var keyword=req.query.keyword;
	console.log(keyword)
	pool.query('select mid,mname,img,subtitle,grade,watch,store from menu where mname like "%"?"%"',[keyword],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
		res.send({code:1,msg:"查询成功",data:result})
		console.log(result)
		} else {
			res.send({code:-1,msg:"查询失败",data:"非常抱歉,没有相关菜谱"})
		}
	})
})
module.exports=router; 