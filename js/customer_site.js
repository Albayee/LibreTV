const CUSTOMER_SITES = {
    hongniu:   { api: 'https://www.hongniuzy2.com/api.php/provide/vod',             name: '红牛资源' },
    lziang:    { api: 'https://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',       name: '量子资源' },
    openmov:   { api: 'http://vod-demo.onrender.com/pubdovod.php',                 name: '开放电影' },
    zy1080:    { api: 'http://api.1080zyku.com/inc/api.php/provide/vod',            name: '优质资源库' },
    kan39:     { api: 'http://39kan.com/api.php/provide/vod',                       name: '39影视' },
    vipmv:     { api: 'http://vipmv.cc/api.php/provide/vod',                        name: '天堂资源' },
    lehoo:     { api: 'http://lehootv.com/api.php/provide/vod',                     name: '乐活影视' },
    tangren:   { api: 'http://tangrenjie.tv/api.php/provide/vod',                   name: '唐人街' },
    kuapi:     { api: 'http://api.kuapi.cc/api.php/provide/vod',                    name: '酷点资源' },
    wolong:    { api: 'http://collect.wolongzyw.com/api.php/provide/vod',           name: '卧龙资源' },
    kudian:    { api: 'http://kudian10.com/api.php/provide/vod',                    name: '酷点资源2' },
    tangrenxm: { api: 'http://tangrenjie.tv/api.php/provide/vod/at/xm',             name: '唐人街XM' },
    slapibf:   { api: 'http://slapibf.com/api.php/provide/vod',                     name: '森林资源' },
    ykapi:     { api: 'http://api.ykapi.net/api.php/provide/vod',                   name: '影库资源网' },
    kczy:      { api: 'http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',   name: '快车资源' },
    ttzy:      { api: 'http://apittzy.com/api.php/provide/vod',                     name: '探探资源' },
    sdzy:      { api: 'http://sdzyapi.com/api.php/provide/vod/from/sdm3u8',         name: '闪电资源' },
    jinying:   { api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',            name: '金鹰资源' },
    gszy:      { api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',  name: '光速资源' },
    aosika:    { api: 'http://aosikazy.com/api.php/provide/vod',                    name: '奥斯卡资源' },
    apilyzy:   { api: 'http://api.apilyzy.com/api.php/provide/vod',                 name: '老鸭资源' },
    uku:       { api: 'http://api.ukuapi.com/api.php/provide/vod',                  name: 'U酷资源' },
    bdxzy:     { api: 'http://m3u8.bdxzyapi.com/api.php/provide/vod',               name: '北斗星资源' },
    yhzy:      { api: 'http://m3u8.apiyhzy.com/api.php/provide/vod',                name: '樱花资源' },
    feisu2:    { api: 'http://feisuzy.com/api.php/provide/vod',                     name: '飞速资源2' },
    kuaibo:    { api: 'http://www.kuaibozy.com/api.php/provide/vod',                name: '快播资源' },
    baidu:     { api: 'http://api.apibdzy.com/api.php/provide/vod',                 name: '百度资源' },
    lovedan:   { api: 'http://lovedan.net/api.php/provide/vod',                     name: '艾旦影视' },
    piaohua:   { api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',        name: '飘花电影' },
    tianyi:    { api: 'https://www.911ysw.top/tianyi.php/provide/vod',              name: '天翼资源' },
    huya:      { api: 'https://www.huyaapi.com/api.php/provide/vod',                name: '虎牙资源' },
    p2100:     { api: 'https://p2100.net/api.php/provide/vod',                      name: '飘零资源' },
    wujin:     { api: 'https://api.wujinapi.com/api.php/provide/vod',               name: '无尽资源' },
    subo:      { api: 'https://subocaiji.com/api.php/provide/vod',                  name: '速博资源' },
    modu:      { api: 'https://caiji.moduapi.cc/api.php/provide/vod',               name: '魔都资源' },
    zuida:     { api: 'http://zuidazy.me/api.php/provide/vod',                      name: '最大资源' },
    qhzy:      { api: 'https://caiji.qhzyapi.com/api.php/provide/vod',              name: '奇虎资源' },
    hhzy:      { api: 'https://hhzyapi.com/api.php/provide/vod',                    name: '火狐资源' },
    xinlang:   { api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',      name: '新浪资源' },
    kuaiyun:   { api: 'https://www.kuaiyunzy.com/api.php/provide/vod',              name: '快云资源' },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
