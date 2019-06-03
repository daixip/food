#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库tedu，如果存在的话
DROP DATABASE IF EXISTS food;
#创建数据库tedu，设置存储的编码
CREATE DATABASE food CHARSET=UTF8;
#进入数据库
USE food;
#创建用户表
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(6),
  sex BOOL,
  upwd     VARCHAR(36),
  age INT,
  user_name VARCHAR(25),
  address   VARCHAR(36),
  phone     VARCHAR(11)
);
#插入数据
INSERT INTO user VALUES(NULL,"Tom",1,1902,25,"张冬冬","济南市山大路数码港大厦","11111111111");
INSERT INTO user VALUES(NULL,'jerry',1,1902,26,"尹小永","武汉市山大路数码港大厦","22222222222");
INSERT INTO user VALUES(NULL,'king',1,1902,23,"李志勇","杭州市山大路数码港大厦","33333333333");
INSERT INTO user VALUES(NULL,'mary',0,1902,18,"代云秋","贵州市山大路数码港大厦","44444444444");
INSERT INTO user VALUES(NULL,'lili',0,1902,1,"王丽","潍坊市山大路数码港大厦","55555555555");

#创建食谱表
CREATE TABLE menu(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    mname VARCHAR(36),
   img VARCHAR(36),
   subtitle VARCHAR(120),
   degree VARCHAR(36),
   taste VARCHAR(36),
   time VARCHAR(36)
);

INSERT INTO menu VALUES(NULL,"宝宝星星仔面","5819a133N03021b26.jpg","星星仔面特别的小，非常适合8个月以上的宝宝添加，胡萝卜营养丰富，含有丰富的胡萝卜素，也是宝宝辅食必不可少的蔬菜，用胡萝卜泥拌着星星仔面，特别的香甜宜人","容易","香甜","30分钟");
INSERT INTO menu VALUES(NULL,"宝宝手指面","5819a133N03021b26.jpg","小时候妈妈经常给我们做这样的面，轻巧可爱孩子看着就喜欢吃，搭配一些蔬菜炒着吃，孩子分分钟就吃完了，不喜欢吃饭的宝宝们，妈妈们不妨试试这样的手指面；","容易","清淡","40分钟");
INSERT INTO menu VALUES(NULL,"猫咪亲子便当","5819a133N03021b26.jpg","可爱的猫咪亲子便当搭配水果和豆浆，既营养还可以让便当餐看起来萌哒哒，这样有颜值的便当快来动手试试吧~","容易","清淡","40分钟");
INSERT INTO menu VALUES(NULL,"三文鱼杂蔬饭团","5819a133N03021b26.jpg","这是一道健康美味营养又快捷的美食，家人和我都喜欢吃呀……","容易","微辣","30分钟");
INSERT INTO menu VALUES(NULL,"芝麻红薯干","5819a133N03021b26.jpg","红薯富含蛋白质、糖、纤维素和多种维生素，能够为宝宝提供丰富的营养，还可以增强宝宝的免疫力。芝麻富含维生素E、维生素B族还有铁质和钙质，能够促进宝宝骨骼、牙齿和智力发育，还能帮助缓解便秘。这款芝麻红薯干因为芝麻没有碾碎，因此适合10个月及以上的有一定咀嚼能力的宝宝当做健康零食食用","容易","香甜","30分钟");

#创建食材表
CREATE TABLE food_material(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(36),
    count VARCHAR(36),
    menuId INT,
    FOREIGN KEY(menuId) REFERENCES menu(mid)
);
INSERT INTO food_material VALUES(NULL,"意面","30克","1");
INSERT INTO food_material VALUES(NULL,"胡萝卜","半个","1");
INSERT INTO food_material VALUES(NULL,"红薯","150克","5");
INSERT INTO food_material VALUES(NULL,"白砂糖","适量","5");

#创建步骤表
CREATE TABLE steps(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    details VARCHAR(255),
    img VARCHAR(36),
    stepsId INT,
    FOREIGN KEY(stepsId) REFERENCES menu(mid)
);
INSERT INTO steps VALUES(NULL,"红薯洗净备用","5819a133N03021b26.jpg","5");
INSERT INTO steps VALUES(NULL,"电饭煲加水刚好没过红薯，用煮饭模式将红薯煮熟","5819a133N03021b26.jpg","5");
INSERT INTO steps VALUES(NULL,"取煮熟的红薯两个，剥皮，再用叉子将红薯碾压成泥","5819a133N03021b26.jpg","5");
INSERT INTO steps VALUES(NULL,"待红薯泥稍冷却后，用手将红薯泥整形成扁扁的长条状，放置在烤盘上","5819a133N03021b26.jpg","5");
INSERT INTO steps VALUES(NULL,"红薯上均匀撒上白芝麻","5819a133N03021b26.jpg","5");
INSERT INTO steps VALUES(NULL,"烤箱预热，180度放烤箱中层烤20分钟，宝宝喜欢口感硬一点的可以再烤久一点","5819a133N03021b26.jpg","5");

#创建瘦身日记表
CREATE TABLE lose_weight(
    lwId INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(36),
    title VARCHAR(36),
    subtitle VARCHAR(255),
    img VARCHAR(36),
    large_img VARCHAR(36),
    content VARCHAR(20000)
);
INSERT INTO lose_weight VALUES(NULL,"褚乐启","21天瘦身","怎么没吃怎么喝","5819a133N03021b26.jpg","5819a133N03021b26.jpg","少吃");
INSERT INTO lose_weight VALUES(NULL,"李琰帅","21天瘦身","怎么没吃怎么喝","5819a133N03021b26.jpg","5819a133N03021b26.jpg","少吃");
INSERT INTO lose_weight VALUES(NULL,"柳化军","21天瘦身","怎么没吃怎么喝","5819a133N03021b26.jpg","5819a133N03021b26.jpg","少吃");

#创建明星教你减肥
CREATE TABLE starts(
    slwId INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(36),
    title VARCHAR(36),
    subtitle VARCHAR(255),
    img VARCHAR(36),
    large_img VARCHAR(36),
    content VARCHAR(20000)
);
INSERT INTO starts VALUES(NULL,"褚佩奇","21天瘦身","怎么没吃怎么喝","5819a133N03021b26.jpg","5819a133N03021b26.jpg","少吃");
INSERT INTO starts VALUES(NULL,"团长","21天瘦身","怎么没吃怎么喝","5819a133N03021b26.jpg","5819a133N03021b26.jpg","少吃");
INSERT INTO starts VALUES(NULL,"二营长","21天瘦身","怎么没吃怎么喝","5819a133N03021b26.jpg","5819a133N03021b26.jpg","少吃");

#创建瘦身小课堂
CREATE TABLE lose_class(
    lcId  INT PRIMARY KEY AUTO_INCREMENT,
    date  VARCHAR(20),
    title VARCHAR(36),
    subtitle VARCHAR(255),
    img VARCHAR(36),
    content VARCHAR(20000)
);
INSERT INTO lose_class VALUES(NULL,"2019-5-15","吃得好吃得少","管住嘴迈开腿就瘦了","5819a133N03021b26.jpg","子曾经曰过，吾日三省吾身什么好吃？吃什么好？怎么吃好？这三个问题就像人生的终极三问”我是谁，我从哪里来，要到哪里去“一样经典，困扰着所有爱吃，好吃的吃货们。吃了那么多饭，还是不明白吃得好三个字背后藏着的顺其自然的道理，真是太对不起以吃货二字自居的自己了。从今天起，做一个会吃、懂吃的人，让吃变成一件享受的事。");
INSERT INTO lose_class VALUES(NULL,"2019-3-16","春运路上吃点什么美味又营养？","年关将至，一年一度的人类大迁徙又要开始了","5819a133N03021b26.jpg","有钱没钱，回家过年，每到这个时候，每个漂泊在外的游子，都会历经千山万水，横跨大半个中国，只为与家人们吃上一顿团圆饭。回家的路途中，打发时间也好，补充能量也罢，食物是少不了的。今天我们就来聊聊，舌尖上的春运，游子归家路上的食物。曾几何时，方便面+火腿肠就是回家路途中的标配，在那个绿皮火车的年代，出门回家路上，总忘不了在包里晒上几桶方便面。但随着时代的发展，出行的方式更加多样，绿皮火车也被快的高铁所取代，再加上人们对营养需求的提高，方便面不再是必需品。那么应该吃点什么呢？不吃肯定是不行的，春运乘坐火车对体力也是极大的考验，挤火车要力气，拿行李要力气，还得留点力气给久别重逢的亲人们一个大大的拥抱。");

#创建燃烧吧！卡路里表格
CREATE TABLE fire_class(
    kid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(36),
    img VARCHAR(36),
    content VARCHAR(20000)
);
INSERT INTO fire_class VALUES(NULL,"吃得好吃得少","5819a133N03021b26.jpg","管住嘴迈开腿就瘦了");
INSERT INTO fire_class VALUES(NULL,"总忘不了在包里晒上几桶方便面","5819a133N03021b26.jpg","管那么应该吃点什么呢？不吃肯定是不行的");
INSERT INTO fire_class VALUES(NULL,"绿皮火车也被快的高铁所取代","5819a133N03021b26.jpg","还得留点力气给久别重逢的亲人们一个大大的拥抱");

#创建一天餐食表格
CREATE TABLE days_fire_class(
    did INT PRIMARY KEY AUTO_INCREMENT,
    breakfast VARCHAR(255);
    lunch VARCHAR(255);
    dinner VARCHAR(255);
    fireId INT,
    FOREIGN KEY(fireId) REFERENCES fire_class(kid)
);
INSERT INTO fire_class VALUES(NULL,"水果","水果","水果");
INSERT INTO fire_class VALUES(NULL,"胡萝卜","胡萝卜","胡萝卜");

#创建一天餐食食材表格
CREATE TABLE food_material_fire_class(
    fcid INT PRIMARY KEY AUTO_INCREMENT,
    fname VARCHAR(36),
    count VARCHAR(36),
    foodId INT,
    FOREIGN KEY(foodId) REFERENCES fire_class(kid)
);
INSERT INTO food_material VALUES(NULL,"意面","30克","1");
INSERT INTO food_material VALUES(NULL,"胡萝卜","半个","1");
INSERT INTO food_material VALUES(NULL,"红薯","150克","5");
INSERT INTO food_material VALUES(NULL,"白砂糖","适量","5");







