function getDistance(e,a,s,c){const{sin:t,cos:r,asin:o,PI:n,hypot:i}=Math;let b=(e,a)=>(e*=n/180,{x:r(a*=n/180)*r(e),y:r(a)*t(e),z:t(a)}),k=b(e,a),p=b(s,c),l=2*o(i(k.x-p.x,k.y-p.y,k.z-p.z)/2)*6371;return Math.round(l)}function showWelcome(){let e,a,s,c=getDistance(113.34499552,23.15537143,ipLoacation.result.location.lng,ipLoacation.result.location.lat),t=ipLoacation.result.ad_info.nation;switch(ipLoacation.result.ad_info.nation){case"日本":a="よろしく，一起去看樱花吗";break;case"美国":a="Let us live in peace!";break;case"英国":a="想同你一起夜乘伦敦眼";break;case"俄罗斯":a="干了这瓶伏特加！";break;case"法国":a="C'est La Vie";break;case"德国":a="Die Zeit verging im Fluge.";break;case"澳大利亚":a="一起去大堡礁吧！";break;case"加拿大":a="拾起一片枫叶赠予你";break;case"中国":switch(t=ipLoacation.result.ad_info.province+" "+ipLoacation.result.ad_info.city+" "+ipLoacation.result.ad_info.district,e=ipLoacation.result.ip,ipLoacation.result.ad_info.province){case"北京市":a="北——京——欢迎你~~~";break;case"天津市":a="讲段相声吧。";break;case"河北省":a="山势巍巍成壁垒，天下雄关。铁马金戈由此向，无限江山。";break;case"山西省":a="展开坐具长三尺，已占山河五百余。";break;case"内蒙古自治区":a="天苍苍，野茫茫，风吹草低见牛羊。";break;case"辽宁省":a="我想吃烤鸡架！";break;case"吉林省":a="状元阁就是东北烧烤之王。";break;case"黑龙江省":a="很喜欢哈尔滨大剧院。";break;case"上海市":a="众所周知，中国只有两个城市。";break;case"江苏省":switch(ipLoacation.result.ad_info.city){case"南京市":a="这是我挺想去的城市啦。";break;case"苏州市":a="上有天堂，下有苏杭。";break;case"扬州市":a="烟花三月下扬州。";break;default:a="可以去你的城市吗？"}break;case"浙江省":a="东风渐绿西湖柳，雁已还人未南归。";break;case"河南省":switch(ipLoacation.result.ad_info.city){case"郑州市":a="豫州之域，天地之中。";break;case"南阳市":a="臣本布衣，躬耕于南阳。此南阳非彼南阳！";break;case"驻马店市":a="峰峰有奇石，石石挟仙气。嵖岈山的花很美哦！";break;case"开封市":a="刚正不阿包青天。";break;case"洛阳市":a="洛阳牡丹甲天下。";break;default:a="可否带我品尝河南烩面啦？"}break;case"安徽省":a="蚌埠住了，芜湖起飞。";break;case"福建省":a="井邑白云间，岩城远带山。";break;case"江西省":a="落霞与孤鹜齐飞，秋水共长天一色。";break;case"山东省":a="遥望齐州九点烟，一泓海水杯中泻。";break;case"湖北省":a="来碗热干面！";break;case"湖南省":a="74751，长沙斯塔克。";break;case"广东省":a="老板来两斤福建人。";break;case"广西壮族自治区":a="桂林山水甲天下。";break;case"海南省":a="朝观日出逐白浪，夕看云起收霞光。";break;case"四川省":a="康康川妹子。";break;case"贵州省":a="茅台，学生，再塞200。";break;case"云南省":a="玉龙飞舞云缠绕，万仞冰川直耸天。";break;case"西藏自治区":a="躺在茫茫草原上，仰望蓝天。";break;case"陕西省":a="来份臊子面加馍。";break;case"甘肃省":a="羌笛何须怨杨柳，春风不度玉门关。";break;case"青海省":a="牛肉干和老酸奶都好好吃。";break;case"宁夏回族自治区":a="大漠孤烟直，长河落日圆。";break;case"新疆维吾尔自治区":a="驼铃古道丝绸路，胡马犹闻唐汉风。";break;case"台湾省":a="我在这头，大陆在那头。";break;case"香港特别行政区":a="永定贼有残留地鬼嚎，迎击光非岁玉。";break;case"澳门特别行政区":a="性感荷官，在线发牌。";break;default:a="带我去你的城市逛逛吧！"}break;default:a="带我去你的国家逛逛吧。"}let r=new Date;s=r.getHours()>=5&&r.getHours()<11?"<span>上午好</span>，一日之计在于晨！":r.getHours()>=11&&r.getHours()<13?"<span>中午好</span>，该摸鱼吃午饭了。":r.getHours()>=13&&r.getHours()<15?"<span>下午好</span>，懒懒地睡个午觉吧！":r.getHours()>=15&&r.getHours()<16?"<span>三点几啦</span>，一起饮茶呀！":r.getHours()>=16&&r.getHours()<19?"<span>夕阳无限好！</span>":r.getHours()>=19&&r.getHours()<24?"<span>晚上好</span>，夜生活嗨起来！":"夜深了，早点休息，少熬夜。";try{document.getElementById("welcome-info").innerHTML=`<b><center>🎉 欢迎信息 🎉</center>&emsp;&emsp;欢迎来自 <span style="color:var(--theme-color)">${t}</span> 的小伙伴，${s}您现在距离站长约 <span style="color:var(--theme-color)">${c}</span> 公里，当前的IP地址为： <span style="color:var(--theme-color)">${e}</span>， ${a}</b>`}catch(e){}}$.ajax({type:"get",url:"https://apis.map.qq.com/ws/location/v1/ip",data:{key:"CPPBZ-2ABRM-U2B6Z-6WBGJ-ZUZMH-FSBA5",output:"jsonp"},dataType:"jsonp",success:function(e){ipLoacation=e}}),window.onload=showWelcome,document.addEventListener("pjax:complete",showWelcome);