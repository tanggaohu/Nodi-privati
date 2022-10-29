/***********************************

> 应用名称：傲软抠图
> 脚本作者：Skinny Tiger

[rewrite_local]

# ～ CAD看图王解锁会员权限（2022-10-29）
https:\/\/user\.gstarcad\.com\/api\/v2\/userlnfo url script-response-body https://raw.githubusercontent.com/tanggaohu/Nodi-privati/main/Task/gstarcadVIP.js

[mitm] 

hostname=user.gstarcad.com

***********************************/

{
  "code": "0",
  "msg": "",
  "rs": {
    "active": {
      "app_try_get_show": false,
      "app_try_give_id": 9,
      "app_try_give_show": false,
      "app_try_give_usable": false
    },
    "advertisingUrl": "http://web.gstarcad.com/upgrade?uid=22636977&utoken=36fd0db1-63c2-4b56-a847-3b1f8fc9c65a",
    "chat": {
      "ordinary": {
        "createGroupNumberLimit": 3,
        "createGroupUserNumberLimit": 200,
        "joinGroupNumberLimit": 500
      },
      "senior": {
        "createGroupNumberLimit": 20,
        "createGroupUserNumberLimit": 200,
        "joinGroupNumberLimit": 500
      },
      "userSig": "eJyrVgrxCdZLrSjILEpVsjIzMLEwMNABi5WlFilZKRnpGShB*MUp2YkFBZkpSlaGJgYGxubmlpaGEJnMlNS8ksy0TIgGIzNjM0tzc5iuzHSgYLJhZGieV154WZC-Sa5FXmFEkkdBmEWFY4aJtpdZUWiuUWlgeJZpWWKkhastVGNJZi7QQYZmZuYGhqYmFma1ACSpMLU_"
    },
    "expiredList": [],
    "recentlyExpired": [],
    "serverCode": "CN",
    "serverLink": "https://cloud.gstarcad.com/getServerLink.do",
    "serverUrl": "https://user.gstarcad.com/login",
    "storage": {
      "free": 0,
      "surplus": 5120,
      "total": 5120,
      "used": 0
    },
    "userInfo": {
      "id": 22636977,
      "isActivate": 1,
      "lastLoginTime": "2022-10-13 23:42:12",
      "level": 1,
      "mobile": "13022891706",
      "name": "Skinny Tiger",
      "nickName": "Skinny Tiger",
      "registerDate": "2022-10-13 23:42:12",
      "score": 22,
      "sex": "",
      "trialType": 0,
      "updateTime": "",
      "vipType": 2
    },
    "utoken": "36fd0db1-63c2-4b56-a847-3b1f8fc9c65a",
    "vipInfo": {
      "amount": 10,
      "appTryStatus": false,
      "canBuy": true,
      "canUpgrade": false,
      "clientAlias": "Web_PC,Web_H5,Web_Weixin,DF_Android,DF_iOS,DF_Windows,MPWEIXIN",
      "descs": "高级账户",
      "goodId": 125,
      "goodsCodes": "ML2",
      "myAmountNumbers": "10个群组，每个群组限10,000人",
      "name": "高级账户",
      "numbers": 10000,
      "serverEndTime": "2099-12-31 23:59:59",
      "serverEndTimeStamp": 4102415999000,
      "serverStartTime": "2022-10-29 00:00:00",
      "serverStartTimeStamp": 1666972800000,
      "storages": 5120
    },
    "vipList": []
  },
  "status": true
}
$done({body});
