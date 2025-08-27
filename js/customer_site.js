const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    caiji: {
        api: 'https://caiji.cangniu.pro/api.php/provide/vod',
        name: '苍牛资源',
    },
    feisu: {
        api: 'https://feisuzyapi.com/api.php/provide/vod',
        name: '飞速资源',
    },
    haozy: {
        api: 'https://api.haozy.top/api.php/provide/vod',
        name: '好资源网',
    },
    hhm: {
        api: 'https://hhm.ink/api.php/provide/vod',
        name: '火狐资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
    },
    kankan: {
        api: 'https://kankanju.cc/api.php/provide/vod',
        name: '看看剧资源',
    },
    kuaikan: {
        api: 'https://kuaikan-api.com/api.php/provide/vod',
        name: '快看资源',
    },
    ledya: {
        api: 'https://leduozy.com/api.php/provide/vod',
        name: '乐多资源',
    },
    libvio: {
        api: 'https://www.libvio.me/api.php/provide/vod',
        name: 'libvio 资源',
    },
    lgyy: {
        api: 'https://api.lgyy.vip/api.php/provide/vod',
        name: '蓝光影院',
    },
    lzzy: {
        api: 'https://lzzy.us/api.php/provide/vod',
        name: '荔枝资源',
    },
    miao: {
        api: 'https://miaotvs.cn/api.php/provide/vod',
        name: '喵影视',
    },
    qitian: {
        api: 'https://api.qitianwu.com/api.php/provide/vod',
        name: '齐天资源',
    },
    qiyun: {
        api: 'https://api.qiyunzy.com/api.php/provide/vod',
        name: '奇云资源',
    },
    sliu: {
        api: 'https://sliu.ikunyyds.com/api.php/provide/vod',
        name: 'ikun 资源',
    },
    tiantian: {
        api: 'https://ttzyapi.com/api.php/provide/vod',
        name: '天天资源',
    },
    tuili: {
        api: 'https://tuili.cc/api.php/provide/vod',
        name: '推理资源',
    },
    wolong: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源',
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '吾爱资源',
    },
    xueren: {
        api: 'https://api.xueerpig.com/api.php/provide/vod',
        name: '雪人资源',
    },
    yunfan: {
        api: 'https://api.yunfan.vip/api.php/provide/vod',
        name: '云帆资源',
    },
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
