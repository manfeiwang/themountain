SET NAMES 'utf8';
DROP DATABASE IF EXISTS tm;
CREATE DATABASE tm CHARSET=UTF8;
USE tm;

CREATE TABLE tm_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(64),
    upwd VARCHAR(64),
    uphone VARCHAR(64)
);
CREATE TABLE tm_list(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(64),
    pricenow DOUBLE(8,2),
    pricebefore DOUBLE(8,2),
    img VARCHAR(64),
    detail VARCHAR(1024)
);
INSERT INTO tm_list VALUES
(null,'波士顿梗 狗图...',158,129,'m01.jpg','波士顿梗 狗图案T恤 THE MOUNTAIN 3DT恤'),
(null,'神仙鱼 RUSSO ANGE...',178,99,'m02.jpg','神仙鱼 RUSSO ANGEL 海洋动物T恤 THE MOUNTAIN 3DT恤'),
(null,'两只海獭 A Love ...',178,136,'m03.jpg','两只海獭 A LOVE LIKE NO OTTER 可爱动物图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'小狐狸 FOXGLOVES ...',178,129,'m04.jpg','小狐狸 FOXGLOVES 可爱动物图案T恤 THE MOUNTAIN 3DT恤'),
(null,'蓝色星球 地球...',178,145,'m05.jpg','蓝色星球 地球图案T恤 THE MOUNTAIN 3DT恤'),
(null,'哥伦比亚号 COLU...',145,119,'m06.jpg','哥伦比亚号 COLUMBIA FIRST LAUNCH STS-1 MISSION 科幻图案T恤 THE MOUNTAIN 3DT恤'),
(null,'黑鸟 SR71 BLACKBIR...',178,139,'m07.jpg','黑鸟 SR71 BLACKBIRD 侦察机图案T恤 THE MOUNTAIN 3DT恤'),
(null,'大猩猩 BF LOW GOR...',178,139,'m08.jpg','大猩猩 BF LOW GORILLA 野生动物T恤 THE MOUNTAIN 3DT恤'),
(null,'雪中雄狮 LUKE IN...',178,145,'m09.jpg','雪中雄狮 LUKE IN SNOWFALL 狮子图案T恤 THE MOUNTAIN 3DT恤'),
(null,'濒危猎豹 BF CHEE...',145,119,'m10.jpg','濒危猎豹 BF CHEETAH ENDANGER 猛兽图案T恤 THE MOUNTAIN 3DT恤'),
(null,'九条命 Russo 9 Li...',178,139,'m11.jpg','九条命 RUSSO 9 LIVES 涂鸦猫咪图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'啸月狼 Russo Howl...',178,139,'m12.jpg','啸月狼 RUSSO HOWLING WOLF 涂鸦图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'蓝色星球 地球...',178,145,'m13.jpg','涂鸦猪 RUSSO PIG 可爱动物图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'哥伦比亚号 COLU...',145,119,'m14.jpg','猫咪云朵 KITTEN CLOUD 猫咪图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'黑鸟 SR71 BLACKBIR...',178,139,'m15.jpg','魔法扫帚 A BRUSH WITH MAGIC 猫咪图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'大猩猩 BF LOW GOR...',178,139,'m16.jpg','凛冬守护 WINTER GUARDIANS 狼图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'波士顿梗 狗图...',158,129,'m01.jpg','波士顿梗 狗图案T恤 THE MOUNTAIN 3DT恤'),
(null,'神仙鱼 RUSSO ANGE...',178,99,'m02.jpg','神仙鱼 RUSSO ANGEL 海洋动物T恤 THE MOUNTAIN 3DT恤'),
(null,'两只海獭 A Love ...',178,136,'m03.jpg','两只海獭 A LOVE LIKE NO OTTER 可爱动物图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'小狐狸 FOXGLOVES ...',178,129,'m04.jpg','小狐狸 FOXGLOVES 可爱动物图案T恤 THE MOUNTAIN 3DT恤'),
(null,'蓝色星球 地球...',178,145,'m05.jpg','蓝色星球 地球图案T恤 THE MOUNTAIN 3DT恤'),
(null,'哥伦比亚号 COLU...',145,119,'m06.jpg','哥伦比亚号 COLUMBIA FIRST LAUNCH STS-1 MISSION 科幻图案T恤 THE MOUNTAIN 3DT恤'),
(null,'黑鸟 SR71 BLACKBIR...',178,139,'m07.jpg','黑鸟 SR71 BLACKBIRD 侦察机图案T恤 THE MOUNTAIN 3DT恤'),
(null,'大猩猩 BF LOW GOR...',178,139,'m08.jpg','大猩猩 BF LOW GORILLA 野生动物T恤 THE MOUNTAIN 3DT恤'),
(null,'雪中雄狮 LUKE IN...',178,145,'m09.jpg','雪中雄狮 LUKE IN SNOWFALL 狮子图案T恤 THE MOUNTAIN 3DT恤'),
(null,'濒危猎豹 BF CHEE...',145,119,'m10.jpg','濒危猎豹 BF CHEETAH ENDANGER 猛兽图案T恤 THE MOUNTAIN 3DT恤'),
(null,'九条命 Russo 9 Li...',178,139,'m11.jpg','九条命 RUSSO 9 LIVES 涂鸦猫咪图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'啸月狼 Russo Howl...',178,139,'m12.jpg','啸月狼 RUSSO HOWLING WOLF 涂鸦图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'蓝色星球 地球...',178,145,'m13.jpg','涂鸦猪 RUSSO PIG 可爱动物图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'哥伦比亚号 COLU...',145,119,'m14.jpg','猫咪云朵 KITTEN CLOUD 猫咪图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'黑鸟 SR71 BLACKBIR...',178,139,'m15.jpg','魔法扫帚 A BRUSH WITH MAGIC 猫咪图案T恤 THE MOUNTAIN 3DT恤 (2017)'),
(null,'大猩猩 BF LOW GOR...',178,139,'m16.jpg','凛冬守护 WINTER GUARDIANS 狼图案T恤 THE MOUNTAIN 3DT恤 (2017)');




--CREATE TABLE kf_order(
--    oid INT PRIMARY KEY AUTO_INCREMENT,
--    phone VARCHAR(16),
--    uname VARCHAR(16),
--    sex INT,    /*1:男  2:女*/
--    order_time BIGINT,
--    addr VARCHAR(256),
--    did INT
--);
--INSERT INTO kf_order(oid, phone,uname,sex,order_time,addr,did) VALUES
--(NULL,'13501234567','婷婷',2,1445154859209,'大钟寺中鼎B座',3),
--(NULL,'13501234567','婷婷',2,1445254959209,'大钟寺中鼎B座',2),
--(NULL,'13501234567','婷婷',2,1445354959209,'大钟寺中鼎B座',5);
--
--##SELECT * FROM kf_order;