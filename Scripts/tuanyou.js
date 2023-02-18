/***********************************
> 应用名称：团油去广告
> 脚本作者：Skinny Tiger
> 更新时间：2023-02-12
> 特别说明：本脚本仅供自己学习交流使用
> result目录下是广告内容，用null空值替换即可完美去广告

 
[rewrite_local]
# ～ 团油去广告（2023-02-12）@Skinny Tiger
^https:\/\/acs\.czb365\.com\/services\/v3\/facadeAdvertisingInfo\/getAdvertisingInfoByCode url script-response-body tuanyou.js
[mitm] 
hostname=acs.czb365.com
***********************************/



var body = $response.body;
var obj = JSON.parse(body);

obj.result = null,

$done({body: JSON.stringify(obj)});
