/***
脚本功能：电视果
软件版本：
下载地址：
脚本作者：
更新时间：2025-03-30
使用声明：此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！

[rewrite_local]
# >电视果
[rewrite_remote]
^https?:\/\/(m|static|oaa|pub\.m|security|vinfo\.vip|t7z\.cupid|l-rcd|cache\.video|mus|tpa-video|aliyuncoccdncnc-hd\.inter|cmonitor|dx-baiducdncnc\.inter)\.iqiyi\.com\/.* url script-request-header iqiyi_cookie_modify.js
[mitm]
hostname = m.iqiyi.com, static.iqiyi.com, oaa.iqiyi.com, pub.m.iqiyi.com, security.iqiyi.com, vinfo.vip.iqiyi.com, t7z.cupid.iqiyi.com, l-rcd.iqiyi.com, cache.video.iqiyi.com, mus.video.iqiyi.com, tpa-video.iqiyi.com, aliyuncoccdncnc-hd.inter.iqiyi.com, cmonitor.iqiyi.com, dx-baiducdncnc.inter.iqiyi.com,

***/