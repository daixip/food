const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//1.引入multer和fs
var multer=require('multer')
var fs=require('fs')
//添加路由
//首页一日三餐
router.get("/meal",(req,res)=>{
    var sql="select mid,mname,img,video,subtitle,degree,taste,time,tid from menu limit 0,50";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//首页瘦身日记
router.get('/indexDiary',(req,res)=>{
	pool.query('select user_name,title,subtitle,age,sport,yundong,img from lose_weight limit 0,3',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('查询失败');
		}
	});
})
//首页和明星一起瘦身
router.get("/indexStar",(req,res)=>{
    pool.query('select slwId,title,subtitle,img from star limit 0,4',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('查询失败');
		}
	});
})
//首页瘦身小课堂
router.get("/indexClass",(req,res)=>{
    pool.query('select lcId,title,date,subtitle from lose_class limit 0,5',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}else{
			res.send('查询失败');
		}
	});
})
//首页燃烧吧卡路里
router.get("/fire",(req,res)=>{
    var sql="select title,img,content from fire_class limit 0,4";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//首页享瘦之旅
router.get("/travel",(req,res)=>{
    var sql="select mvid,mname,img,video,subtitle,degree,taste,time from menu_video";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }
    })
})
//4.瘦身日记二级页面
router.get("/dairy",(req,res)=>{
    var sql="select user_name,text,content,img from lose_weight";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
		}else{
			res.send({code:1,msg:"查询成功"});
		}
    });
})
// 瘦身日记二级页面
router.get("/dairy",(req,res)=>{
    var sql="select user_name,text,content,img from lose_weight";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
		}else{
			res.send({code:1,msg:"查询成功"});
		}
    });
})
//5.star
router.get("/stars",(req,res)=>{
    var sql="select slwId,title,img,height,weight,text from star";
    pool.query(sql,(err,result)=>{
        if (err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
		}else{
			res.send({code:1,msg:"查询失败"});
		}
    });
})

//6.starsMore
router.get("/starsMore",(req,res)=>{
    var slwId=req.query.slwId;
    var sql="select title,small_img,large_img,content,text,neirong, height,weight from star where slwId=?";
    pool.query(sql,[slwId],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }else{
            res.send({code:1,msg:"查询失败"});
        }
    });
})

//7.menu_two
router.get("/menu_two",(req,res)=>{
    var sql="select kid,title,tupian,picture,text,content from fire_class";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }else{
            res.send({code:1,msg:"查询失败"});
        }
    });
})

//mealslist三级页面
router.get("/meal_days",(req,res)=>{
    var dayId=req.query.dayId;
    var sql="select day,title,breakfast,lunch,dinner,content,b_img,l_img,d_img,img,dayId from meal_days where dayId=?";
    pool.query(sql,[dayId],(err,result)=>{
        if (err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send("查询失败");
        }
    })
})

//用户登录个人信息页面展示个人信息
router.get("/info",(req,res)=>{
    var uID=req.session.uid;
    var sql="SELECT uid,uname,sex,birth,home,job,intro,default_img FROM user WHERE uid=?"
    pool.query(sql,[uID],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result})
        }else{
            res.send({code:-1,msg:"查询失败"})
        }
    })
})

//用户个人信息完善
router.post("/userinfo",(req,res)=>{
    var sql="UPDATE user SET user_name=?,intro=?,sex=?,birth=?,home=?,default_img=?job=? WHERE uid=?";
    pool.query(sql,[req.body.name,req.body.intro,req.body.sex,req.body.birth,req.body.home,req.body.job,req.session.uid],(err,result)=>{
        if (err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"suc"});
        }else{
            res.send({code:-1,msg:"err"});
        }
    })
})


//用户上传更新头像图片
//2.创建storage
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // 接收到文件后输出的保存路径（若不存在则需要创建）
        cb(null, 'public/img/');
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 时间戳 + 文件原始名，比如 151342376785-123.jpg
        cb(null, Date.now() + "-" + file.originalname);
    }
});
//3.创建文件夹
var createFolder = function (folder) {
    try {
        // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
        // 如果文件路径不存在将会抛出错误"no such file or directory"
        fs.accessSync(folder);
    } catch (e) {
        // 文件夹不存在，以同步的方式创建文件目录。
        fs.mkdirSync(folder);
    }
};
//4.创建文件上传路径
var uploadFolder = './public/img/';
createFolder(uploadFolder);
//5.创建multer对象
var upload = multer({ storage: storage });
//6.上传接口
router.post('/upload', upload.single('file'), function (req, res, next) {
    var file = req.file;
    var uID=req.body.myuid
    console.log("新鲜出炉的"+uID)
    console.log(file)
});
//导出路由器
module.exports=router;

