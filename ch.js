/******************************

脚本功能：超神小队——解锁金币
下载地址：#微信小程序://超神小队
软件版本：6666
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/gjyklslb\.mantianfei\.net url script-response-body https://raw.githubusercontent.com/oosjdhdhd/qx/main/ch.js

[mitm]

hostname = gjyklslb.mantianfei.net

****************************************/


body = $response.body.replace(/\"num":\d+/g, '\"num" :99999999')

$done({body});
