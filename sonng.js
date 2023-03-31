脚本功能：问真八字——解锁VIP
下载地址：https://dwurl.cn/KxqHgv 短链被拦截就自行苹果商店搜索下载
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
   作者：光头道人
*******************************

[rewrite_local]

^https:\/\/bzpp2\.iwzbz\.com\/api\/v1\.1\/user\/getpwnewios_v url script-response-body https://raw.githubusercontent.com/laosuyo/Quantumult-X/main/zhouyi.js

[mitm] 

hostname = bzpp2.iwzbz.com

*******************************/


var body = $response.body.replace(/vipLevel": 0/g,'vipLevel": 3')
.replace(/expires": "1970-01-01 00:00:00"/g,'expires": "2099-01-01 00:00:00"')
.replace(/vipTipsType": -1/g,'vipTipsType": 0')
$done({ body });
