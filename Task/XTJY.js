/***********************************
> 应用名称：moneypro
> 脚本作者：Skinny Tiger
> 更新时间：2023-02-09
> 目前最新版本号：2.8.9
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
 
[rewrite_local]
#醒图+剪映会员+轻颜相机会
# ～ moneypro解锁会员权限（2023-02-09）@Skinny Tiger
^http[s]?:\/\/.+((retouchpics)|(faceu)|(ulikecam)).(com|cn|mobi)\/.+(user|\/v1\/homepage\/pro|ever_photo\/space_info).*$ url script-response-body https://raw.githubusercontent.com/tanggaohu/Nodi-privati/main/Task/XTJY.js
^http[s]?:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info\?(iid|.&aid|.&iid).*$ url script-request-header https://raw.githubusercontent.com/tanggaohu/Nodi-privati/main/Task/xintu.js
^http[s]?:\/\/commerce-api-.*\.faceu\.mobi\/commerce\/v1\/.*$ url script-request-header https://raw.githubusercontent.com/tanggaohu/Nodi-privati/main/Task/JY.js
^http[s]?:\/\/commerce-api.faceu.mobi\/commerce\/v1\/subscription\/user_info.*total_memory.*$ url script-request-header https://raw.githubusercontent.com/tanggaohu/Nodi-privati/main/Task/jxyq.js

[mitm] 
hostname = *faceu*,*retouchpics*,*.ulikecam.com
***********************************/


body = $response.body.replace(/"is_vip":\w+/g, '"is_vip":true');
$done({ body });
