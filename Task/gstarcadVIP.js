/***********************************

> 应用名称：CAD看图王
> 脚本作者：Skinny Tiger
> 更新时间：2022-10-29
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
 
[rewrite_local]

# ～ CAD看图王解锁会员权限（2022-10-29）@Skinny Tiger
https?:\/\/user\.gstarcad\.com\/api\/v2\/ url script-response-body https://raw.githubusercontent.com/tanggaohu/Nodi-privati/main/Task/gstarcadVIP.js

[mitm] 

hostname=user.gstarcad.com

***********************************/


var body = {
  "code" : "0",
  "rs" : {
    "serverLink" : "https:\/\/cloud.gstarcad.com\/getServerLink.do",
    "expiredList" : [

    ],
    "serverUrl" : "https:\/\/user.gstarcad.com\/login",
    "utoken" : "7d9229cc-2011-416b-9195-eb863e75d57d",
    "vipInfo" : {
      "serverEndTimeStamp" : 4102415999,
      "amount" : 10,
      "numbers" : 10000,
      "storages" : 5120,
      "appTryStatus" : false,
      "myAmountNumbers" : "10个群组，每个群组限10,000人",
      "serverEndTime" : "2022-12-31 23:59:59",
      "goodId" : 125,
      "clientAlias" : "Web_PC,Web_H5,Web_Weixin,DF_Android,DF_iOS,DF_Windows,MPWEIXIN",
      "canBuy" : true,
      "canUpgrade" : false,
      "goodsCodes" : "ML2",
      "descs" : "高级账户",
      "serverStartTime" : "2022-10-29 00:00:00",
      "serverStartTimeStamp" : 1666972800000,
      "name" : "高级账户"
    },
    "active" : {
      "app_try_give_usable" : false,
      "app_try_get_show" : false,
      "app_try_give_show" : false,
      "app_try_give_id" : 9
    },
    "recentlyExpired" : [

    ],
    "advertisingUrl" : "http:\/\/web.gstarcad.com\/upgrade?uid=22636977&utoken=7d9229cc-2011-416b-9195-eb863e75d57d",
    "serverCode" : "CN",
    "storage" : {
      "free" : 0,
      "surplus" : 5120,
      "total" : 5120,
      "used" : 0
    },
    "vipList" : [

    ],
    "userInfo" : {
      "id" : 22636977,
      "updateTime" : "",
      "trialType" : 0,
      "registerDate" : "2022-10-13 23:42:12",
      "mobile" : "13022891706",
      "sex" : "",
      "level" : 1,
      "nickName" : "Skinny Tiger",
      "lastLoginTime" : "2022-10-13 23:42:12",
      "vipType" : 2,
      "isActivate" : 1,
      "name" : "Skinny Tiger",
      "score" : 22
    },
    "chat" : {
      "userSig" : "eJw1jkELgjAYhv-LzqHfpu1zQgelDrGow7rUTXLGpxnLiQTRf09aHd-n5YHnxY47E9mno8GyXEKaASy*bLIDy5mIgIXt665yjmqW8xQgQVSKh4dqex*poSAImUiF*LfoOsPN5WHaW*HKuI1PhZ5aj2t92JfERXdu9LZqwBut*qzwq584Uj8HcSkRlihU9v4AExIwXg__",
      "ordinary" : {
        "joinGroupNumberLimit" : 500,
        "createGroupNumberLimit" : 3,
        "createGroupUserNumberLimit" : 200
      },
      "senior" : {
        "joinGroupNumberLimit" : 500,
        "createGroupNumberLimit" : 20,
        "createGroupUserNumberLimit" : 200
      }
    }
  },
  "status" : true,
  "msg" : ""
}
};
$done({body: JSON.stringify(body)});
