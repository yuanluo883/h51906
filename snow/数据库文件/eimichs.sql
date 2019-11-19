/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : eimichs

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-11-15 08:57:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `amx_news_content`
-- ----------------------------
DROP TABLE IF EXISTS `amx_news_content`;
CREATE TABLE `amx_news_content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `imgsrc` varchar(255) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of amx_news_content
-- ----------------------------
INSERT INTO `amx_news_content` VALUES ('0', '紧身牛仔一直以来就是喜不费力就时髦的单品之一,尤其对上衣的选择极度宽容，几乎可以与任何风格完美契合，最好搭一-件白T，清新自然,或者配一件OVERSIZE衬衫,懦懒闲适。', 'images/news/news3_1.png', '3');
INSERT INTO `amx_news_content` VALUES ('1', '人人都对小黑裤的百搭青睐有加,殊不知裤也是清爽显瘦利器,黑白斑马条纹投光影魅力,如果搭配小黑裤,未免沉闷了,而小白裤则有提亮之效,上衣扎入裤中,腰线自然提升', 'images/news/news3_2.png', '3');
INSERT INTO `amx_news_content` VALUES ('2', '舒适是裤装除了简约以外的另ー个特点,那么。固腿裤则是把这一特点发辉到了极致,不受身形的東缚,自在不过如此,而当腿裤与肖带裤结合时。又突破了年的的困扰,走路都带风', 'images/news/news3_3.png', '3');
INSERT INTO `amx_news_content` VALUES ('3', '紧身牛仔一直以来就是喜不费力就时髦的单品之一,尤其对上衣的选择极度宽容，几乎可以与任何风格完美契合，最好搭一-件白T，清新自然,或者配一件OVERSIZE衬衫,懦懒闲适。', 'images/news/news1_1.png', '1');
INSERT INTO `amx_news_content` VALUES ('4', '人人都对小黑裤的百搭青睐有加,殊不知裤也是清爽显瘦利器,黑白斑马条纹投光影魅力,如果搭配小黑裤,未免沉闷了,而小白裤则有提亮之效,上衣扎入裤中,腰线自然提升', 'images/news/news1_2.png', '1');
INSERT INTO `amx_news_content` VALUES ('5', '舒适是裤装除了简约以外的另ー个特点,那么。固腿裤则是把这一特点发辉到了极致,不受身形的東缚,自在不过如此,而当腿裤与肖带裤结合时。又突破了年的的困扰,走路都带风', 'images/news/news1_3.png', '1');
INSERT INTO `amx_news_content` VALUES ('6', '紧身牛仔一直以来就是喜不费力就时髦的单品之一,尤其对上衣的选择极度宽容，几乎可以与任何风格完美契合，最好搭一-件白T，清新自然,或者配一件OVERSIZE衬衫,懦懒闲适。', 'images/news/news2_1.png', '2');
INSERT INTO `amx_news_content` VALUES ('7', '人人都对小黑裤的百搭青睐有加,殊不知裤也是清爽显瘦利器,黑白斑马条纹投光影魅力,如果搭配小黑裤,未免沉闷了,而小白裤则有提亮之效,上衣扎入裤中,腰线自然提升', 'images/news/news2_2.png', '2');
INSERT INTO `amx_news_content` VALUES ('8', '舒适是裤装除了简约以外的另ー个特点,那么。固腿裤则是把这一特点发辉到了极致,不受身形的東缚,自在不过如此,而当腿裤与肖带裤结合时。又突破了年的的困扰,走路都带风', 'images/news/news2_3.png', '2');
INSERT INTO `amx_news_content` VALUES ('9', '紧身牛仔一直以来就是喜不费力就时髦的单品之一,尤其对上衣的选择极度宽容，几乎可以与任何风格完美契合，最好搭一-件白T，清新自然,或者配一件OVERSIZE衬衫,懦懒闲适。', 'images/news/news4_1.png', '4');
INSERT INTO `amx_news_content` VALUES ('10', '人人都对小黑裤的百搭青睐有加,殊不知裤也是清爽显瘦利器,黑白斑马条纹投光影魅力,如果搭配小黑裤,未免沉闷了,而小白裤则有提亮之效,上衣扎入裤中,腰线自然提升', 'images/news/news4_2.png', '4');
INSERT INTO `amx_news_content` VALUES ('11', '舒适是裤装除了简约以外的另ー个特点,那么。固腿裤则是把这一特点发辉到了极致,不受身形的東缚,自在不过如此,而当腿裤与肖带裤结合时。又突破了年的的困扰,走路都带风', 'images/news/news4_3.png', '4');

-- ----------------------------
-- Table structure for `amx_news_title`
-- ----------------------------
DROP TABLE IF EXISTS `amx_news_title`;
CREATE TABLE `amx_news_title` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `introduce` varchar(255) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `month` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of amx_news_title
-- ----------------------------
INSERT INTO `amx_news_title` VALUES ('0', '美丽说,我把春天献给你', '三月,是属于樱花的李花的花期极短,从开花到周谢也不过一周,所以,每当樱花盛开漫天飞舞的时候,总有如湖的赏花人追着花讯从南到北,去感受樱花那短暂却生。除了以樱花司名的日本,国内也有不少观赏胜地呢', '1', '2018', 'ONE');
INSERT INTO `amx_news_title` VALUES ('1', '夏日,吹起,运动风', '在真正的夏天到来之前,全世界的女人都有一个共同理想,那就是瘦一点,再瘦健身这件“小事”实在无法随心所欲,三天打鱼两天西网的锻炼怎么也抵不过一杯奶茶带来的热量,是时候该另辞蹊径了,如果不能立刻减重,那,先显瘦吧。', '2', '2018', 'TWO');
INSERT INTO `amx_news_title` VALUES ('2', '时髦客不爱裙装爱裤装,她们美得不一样', '提起法国女人,优雅一词就会不由自主地映入脑海,记忆里,她们总穿着浪漫的裙装,化着精致的枚容,在巴黎街道缓走过,过着情的生活这并不是她们生活的全貌,而裙装也不是她们的必然选择,随着社会变迁,裤装逐新走上历史舞台,就这样,法国女人的优雅里多了一份自由', '3', '2018', 'THREE');
INSERT INTO `amx_news_title` VALUES ('3', '春日里的连衣裙，仙气又撩人', '又到人间四月天,这样花开的日子,不正是穿起裙装的好时节嘛。潮流的瞬息万变,让女人对于裙装的挑选变得越来越严苛了,可即便如此,总有一袭“仙女裙\"能轻而易举信得芳心,虽然“仙女\"一词不免有着些许夸张成分,但它终究满足了属于女人的极致浪漫', '4', '2018', 'FOUR');

-- ----------------------------
-- Table structure for `amx_product`
-- ----------------------------
DROP TABLE IF EXISTS `amx_product`;
CREATE TABLE `amx_product` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title1` varchar(300) NOT NULL,
  `content1` varchar(3000) NOT NULL,
  `src` varchar(3000) NOT NULL,
  `zw` varchar(300) NOT NULL,
  `yw` varchar(300) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of amx_product
-- ----------------------------
INSERT INTO `amx_product` VALUES ('1', '百搭风格&STYLE', '百搭，般为单品，可以搭配各类农服，很实用的单件服饰，与其他款式、颗色的服饰均能产生一 定的效果一 般都是比较基本的，经典的样式或颜色。如纯色系服装下仔裤等.', 'images/product/product1_1.png&images/product/product1_2.png&images/product/product1_3.png&images/product/product1_4.png', '舒适百搭印花&浩瀚如海&光年里骑行&花样年华', 'COMFORTABLE STAMPING&AS VASTASTHE SEA&RIDING IN LIGHT-YEARS&IN THE MOOD FOR LOVE&DGJNDGN&SDN SNBN&QEGFFBNB&JKGHIKF&ADEYSHQWF&DSGBVNVH&SRFLOSAE&SDRFYHHS');
INSERT INTO `amx_product` VALUES ('2', '韩版风格&KOREAN STYLE', '韩装舍弃了简单的色调堆砌，而是通过特别的明暗对比来彰显品位。服装的设计者通过面料的质感与对比，加上款式的丰富变化来强调冲击力，那种浓艳的、紫复的表面的东西被精致的、甚至有点羞涩的展现取而代之，简洁得连口袋都省了的长裤、不规则的衣裙下摆、极具风情的榴褶花边都在表白它的美丽与流行，\r\n', 'images/product/product2_1.png&images/product/product2_2.png&images/product/product2_3.png&images/product/product2_4.png', '橘色季风&橙色季风&粉色妖姬&白色玫瑰', 'ORANGE MONSOON&AS VASTASTHE SEA&PINK MONSOON&WHITE ROSE&DGJNDGN&SDN SNBN&QEGFFBNB&JKGHIKF&ADEYSHQWF&DSGBVNVH&SRFLOSAE&SDRFYHHS');
INSERT INTO `amx_product` VALUES ('3', '欧美风格&EUROPEAN AND AMERICAN STYLE', '主张大气简洁，面料自然，比较随意比较简约搭配感和设计感强。黑白色调、卡其色调为主的服饰，加以马甲、围巾、帽子、珠宝等配饰就可以称为欧美风格。', 'images/product/product3_1.png&images/product/product3_2.png&images/product/product3_3.png&images/product/product3_4.png', '森林变奏曲&沉醉飞鱼池&幻陷翡翠鸟&高级系列', 'FORSET VARIATION&DRUNKEN FLYING FISH POND&JADEITE&ADVANCED SERIES&DGJNDGN&SDN SNBN&QEGFFBNB&JKGHIKF&ADEYSHQWF&DSGBVNVH&SRFLOSAE&SDRFYHHS');
INSERT INTO `amx_product` VALUES ('4', '简约风格&SIMPLE STYLE', '简约风格的服装几乎不要任何装饰。信奉简门主义的服装设计师播长做减法。他们把切多余的东西从服装 上拿走。这种精心设计的磨形常常需要精歌的材科来表院通过精确的结构(板型)和精到的工艺来完成。', 'images/product/product4_1.png&images/product/product4_2.png&images/product/product4_3.png&images/product/product4_4.png', '暮色森林&黑色经典&棕色毛衣&黑色毛衣', 'TWILIGHT FOREST&BLACK CLASSICS&BROWN SWEATER&BLACK SWEATER&DGJNDGN&SDN SNBN&QEGFFBNB&JKGHIKF&ADEYSHQWF&DSGBVNVH&SRFLOSAE&SDRFYHHS');

-- ----------------------------
-- Table structure for `amx_team`
-- ----------------------------
DROP TABLE IF EXISTS `amx_team`;
CREATE TABLE `amx_team` (
  `id` int(11) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `title` varchar(300) DEFAULT NULL,
  `img` varchar(30) DEFAULT NULL,
  `content1` varchar(1000) DEFAULT NULL,
  `content2` varchar(1000) DEFAULT NULL,
  `content3` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of amx_team
-- ----------------------------
INSERT INTO `amx_team` VALUES ('0', '刘清扬', '生平简介&BRIEF ACCOUNT OF THE AUTHOR\'S LIFE&设计风格&DESIGNSTYLE&设计作品&DESIGN WORKS', 'images/team/team1.png', '设计师刘清扬( CHRISTINE LAU) . 生在北京，长在香港, 18岁留学英国，就读于CENTRAL SAINT MARTINSCOLLAGE英国圣马丁艺术设计学院TEXTILEDESIGN (面料设计)专业出于对服装设计的热爱，毕业后，在做面料设计师的同时开始自学服装设计。在中西文化结合的生长环境影响下，形成了对设计的独特见解。面料设计的基础更令其在服装设计上有得天独厚的优势。\r\n', '设计风格优雅而前卫，注重服装设计的原创精神，设计师将复古元素和现代简约设计巧妙的结合在起，创造出一种精致并且经典的设计风格。设计师认为面料是影响服装设计的关键所在.因此对面料的运用有着独特的见解而每一季由设计师亲自损刀设计的另类印花面料\r\n', 'images/team/team1_1.png&images/team/team1_2.png&images/team/team1_3.png&images/team/team1_4.png&images/team/team1_4.png&images/team/team1_3.png&images/team/team1_2.png&images/team/team1_1.png');
INSERT INTO `amx_team` VALUES ('1', '韩璐璐', '生平简介&BRIEF ACCOUNT OF THE AUTHOR\'S LIFE&设计风格&DESIGNSTYLE&设计作品&DESIGN WORKS', 'images/team/team2.png', ' 韩璐璐曾游学于加拿大及意大利，在意大利米兰顶级设计学院ISTITUTO MARANGON获得硕士学位。她曾参与多家高端品牌的设计项目。其中更以自由设计师身份加入世界顶级礼服巨擘桂由美YUMI KATSURA的设计工作,成为其合作的首位华人设计师。同时,以时尚博主冠军身份受邀ELLE巴黎秀场头排客,并担任悦己专栏撰稿人及多家电视媒体造型师。作为“新式轻礼服”创导者,从2008年HLL设计工作室成立之初,便受到都会精英女性的热捧和时尚媒体的广泛关注。', '作为“新式轻礼服” 创导者,韩璐璐不拘泥于轻礼服既为酒会小礼服的固有形式,推出了”新式轻礼服” 的概念将礼服的精致与成衣的实穿完美结合。在材料及工艺的选择处理上,细致考究、自然妥贴。她擅长将典雅的东方气质与利落的西式剪裁相融和，强调女性精致、优雅的特质;提倡一衣多变及无季节性的穿搭理念,力求在设计感与实穿性上找到最佳契合点。', 'images/team/team2_1.png&images/team/team2_2.png&images/team/team2_3.png&images/team/team2_4.png&images/team/team2_4.png&images/team/team2_3.png&images/team/team2_2.png&images/team/team2_1.png&images/team/team2_2.png&images/team/team2_3.png&images/team/team2_1.png&images/team/team2_4.png');
INSERT INTO `amx_team` VALUES ('2', '周翔宇', '生平简介&BRIEF ACCOUNT OF THE AUTHOR\'S LIFE&设计风格&DESIGNSTYLE&设计作品&DESIGN WORKS', 'images/team/team3.png', '周翔宇出生于1982年,毕业于DEN HAAG服装学院，曾经攻读工业造型设计并在AMSTERDAM自由大学修读荷兰语。周翔宇曾经为夏纳国际电影节、威尼斯国际电影节、东京国际电影节、香港国际电影节、釜山国际电影节、印度国际电影节等艺人、导演定制红毯礼服。', 'XANDER ZHOU以独特的视觉艺术角度、出众的设计剪裁进行一 种新的诠释 ,他的多元化的市场理念在中国服装界构筑出一个全新的商业模式。周祥宇喜欢MIUCCIA PRADA以及NICOLAS GHESQUIERE的设计。多年的专业经历让他对设计以及经营都有着很清晰的思路。他的作品非常注重服装穿着时的整体搭配性，强调模糊性别的着装概念,而不是刻意的中性感, -切以完美的视觉效果出发。', 'images/team/team3_1.png&images/team/team3_2.png&images/team/team3_3.png&images/team/team3_4.png&images/team/team3_4.png&images/team/team3_3.png&images/team/team3_2.png&images/team/team3_1.png&images/team/team3_2.png&images/team/team3_3.png&images/team/team3_1.png&images/team/team3_4.png');
INSERT INTO `amx_team` VALUES ('3', '罗峥', '生平简介&BRIEF ACCOUNT OF THE AUTHOR\'S LIFE&设计风格&DESIGNSTYLE&设计作品&DESIGN WORKS', 'images/team/team4.png', '罗峥淡然处事,笑谈风云,在成功经营自己的时装品牌的同时又成为国际投资商的座上宾,用她设计师敏锐的感悟与与他们讨论着天下时尚大势。但她毕竟只是一个女孩子,而且还是一一个很年轻的女孩子。所以知性加感性的她有着无限美好的发展前景。看罗峥设计的时装,就会发现许多艺术元素,比如,用扇子.中国花鸟、旧上海洋烟图等意象组合而成的中西合璧旗袍;', '风之翼系列源自新古典浪漫主义,秉承经典时尚的风格,极富唯美,浪漫的韵味。把传统的思维用现代的理念表达出来,寻求一种自然而现代的平衡。用纯艺术的，戏剧性的手法来突出一种典雅的气质。运用各种富有机理质感的面料和现代的结构技巧来实现时尚与古典优雅的统- - ,创造一种不同凡想的视觉效果。从而营造出高贵中带有不羁的女性,她就象灵动而富有激情的天使，于典雅中流露着忧郁,诠释着无法抵挡的女性魅力。', 'images/team/team4_1.png&images/team/team4_2.png&images/team/team4_3.png&images/team/team4_4.png&images/team/team4_4.png&images/team/team4_3.png&images/team/team4_2.png&images/team/team4_1.png&images/team/team4_2.png&images/team/team4_3.png&images/team/team4_1.png&images/team/team4_4.png');
