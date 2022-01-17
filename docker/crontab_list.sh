# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

##############短期活动##############
#美妆馆选品官
27 9,10 * * * node /scripts/jd_selectionOfficer.js >> /scripts/logs/jd_selectionOfficer.log 2>&1
# 极速版红包
30 9 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 超级直播间红包雨
0,30,31 0-23/1 * * * node /scripts/jd_live_redrain.js >> /scripts/logs/jd_live_redrain.log 2>&1
# 女装盲盒 活动时间：2021-8-5至2021-8-31
35 1,23 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 京东国际盲盒活动时间】2021年02月23日 起至 2021年03月31日 18:00:00
5 7,12,23 * * * node /scripts/jd_global_mh.js >> /scripts/logs/jd_global_mh.log 2>&1
# 环球挑战赛 第三季(活动时间：2021-04-28 至 2021-05-28)
35 6,22 * * * node /scripts/jd_global.js >> /scripts/logs/jd_global.log 2>&1
#jd_shoplottery
10 15 * * * node /scripts/jd_shoplottery.js >> /scripts/logs/jd_shoplottery.log 2>&1
# jd_super_redrain
0 0,1-23/1 * * * node /scripts/jd_super_redrain.js >> /scripts/logs/jd_super_redrain.log 2>&1
# jd_half_redrain
30 0,1-23/1 * * * node /scripts/jd_half_redrain.js >> /scripts/logs/jd_half_redrain.log 2>&1
#小鸽有礼
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
#京小鸽吾悦寄
13 1,22,23 * * * node /scripts/jd_jxg.js >> /scripts/logs/jd_jxg.log 2>&1
#jd_beauty
1 8,13,20 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
#金榜创造营
40 9,21 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
#京喜牧场
20 0-23/3 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
#京喜牧场助力
#10 0-23/3 * * * node /scripts/jd_jxmczl.js >> /scripts/logs/jd_jxmczl.log 2>&1
#东东电竞经理
0 0-23/2 * * * node /scripts/jd_EsportsManager.js >> /scripts/logs/jd_EsportsManager.log 2>&1
#天天优惠大乐透
15 6 * * * node /scripts/jd_DrawEntrance.js >> /scripts/logs/jd_DrawEntrance.log 2>&1
#柠檬伊利养牛记
0 12 * * * node /scripts/jd_ylyn.js >> /scripts/logs/jd_ylyn.log 2>&1
#升级赚京豆
21 9 * * * node /scripts/jd_MMdou.js >> /scripts/logs/jd_MMdou.log 2>&1
#5G超级盲盒
0 0,1-23/3 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
#省钱大赢家之翻翻乐
20 * * * * node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1
#京东众筹许愿池 - 京东抽奖机
22 0,8,12 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
#内容鉴赏官
15 3,6 * * *  node /scripts/jd_connoisseur.js >> /scripts/logs/jd_connoisseur.log 2>&1
#京喜购物返红包助力
44 6-23 * * *  node /scripts/jd_jxCashback.js >> /scripts/logs/jd_jxCashback.log 2>&1
#集魔方
16 10,19 * * * node /scripts/jd_mofang.js >> /scripts/logs/jd_mofang.log 2>&1
#幸运扭蛋
11 12 * * * node /scripts/jd_lucky_egg.js >> /scripts/logs/jd_lucky_egg.log 2>&1
#魔方兑换
0 0 * * * node /scripts/jd_mofang_exchange.js >> /scripts/logs/jd_mofang_exchange.log 2>&1
# 手机狂欢城
#0 0-18/6,21 * * * node /scripts/jd_carnivalcity.js >> /scripts/logs/jd_carnivalcity.log 2>&1
# 手机狂欢城助力
#10 0,21 * * * node /scripts/jd_carnivalcity_help.js >> /scripts/logs/jd_carnivalcity_help.log 2>&1
#发财挖宝
40 12,16 * * * node /scripts/jd_fcwb.js >> /scripts/logs/jd_fcwb.log 2>&1
#京东饭粒
35 8 * * * node /scripts/jd_fanli.js >> /scripts/logs/jd_fanli.log 2>&1
#东东世界
20 8 * * * node /scripts/jd_ddworld.js >> /scripts/logs/jd_ddworld.log 2>&1
#东东世界兑换
0 0 * * * node /scripts/jd_ddworld_exchange.js >> /scripts/logs/jd_ddworld_exchange.log 2>&1
#特务Z
23 15,21 * * * node /scripts/jd_productZ4Brand.js >> /scripts/logs/jd_productZ4Brand.log 2>&1
#邀请有礼
5 11 * * * node /scripts/jd_yqyl.js >> /scripts/logs/jd_yqyl.log 2>&1
#京东金榜
13 13 * * * node /scripts/jd_gold_sign.js >> /scripts/logs/jd_gold_sign.log 2>&1
#京东签到翻牌
8 8 * * * node /scripts/jd_sign_flop.js >> /scripts/logs/jd_sign_flop.log 2>&1
#京喜财富岛合成生鲜兑换
0 0,12 * * * node /scripts/jd_cfd_fresh_exchange.js >> /scripts/logs/jd_cfd_fresh_exchange.log 2>&1
#临期京豆兑换为喜豆
33 9 * * * node /scripts/jd_exchangejxbeans.js >> /scripts/logs/jd_exchangejxbeans.log 2>&1
#星系牧场
1 0-23/2 * * * node /scripts/jd_qqxing.js >> /scripts/logs/jd_qqxing.log 2>&1
#京东我的理想家
6 7 * * *  node /scripts/jd_lxLottery.js >> /scripts/logs/jd_lxLottery.log 2>&1
#逛京东会场
0 0,18 * * * node /scripts/jd_mall_active.js >> /scripts/logs/jd_mall_active.log 2>&1
#超级无线店铺签到
31 1 * * * node /scripts/jd_sevenDay.js >> /scripts/logs/jd_sevenDay.log 2>&1
#京东通天塔--签到
31 8 * * * node /scripts/jd_m_sign.js >> /scripts/logs/jd_m_sign.log 2>&1
#加购物车抽奖
35 10 * * * node /scripts/jd_wxCollectionActivity.js >> /scripts/logs/jd_wxCollectionActivity.log 2>&1
#运动户外盲盒活动
31 5 * * *  node /scripts/jd_hwmh.js >> /scripts/logs/jd_hwmh.log 2>&1
#通用游戏任务
28 1 * * *  node /scripts/jd_game.js >> /scripts/logs/jd_game.log 2>&1
#年货节签到
23 7 * * *  node /scripts/jd_nh_sign.js >> /scripts/logs/jd_nh_sign.log 2>&1
#见缝插针
15 10 * * * node /scripts/jd_jfcz.js >> /scripts/logs/jd_jfcz.log 2>&1
#集“年味卡”，享年货盛宴
0 0,8 * * * node /scripts/jd_lzdz1_customized.js >> /scripts/logs/jd_lzdz1_customized.log 2>&1
#年货盛宴 春节集福攻略
0 0,8 * * * node /scripts/jd_lzdz1_customized2.js >> /scripts/logs/jd_lzdz1_customized2.log 2>&1
#会场红包
0 0,12,20,23 * * * node /scripts/jd_nhs_red.js >> /scripts/logs/jd_nhs_red.log 2>&1
#城城分现金
0 22,0-23/5 9-21 1 * node /scripts/jd_city.js >> /scripts/logs/jd_city.log 2>&1
#炸年兽
#0 0-23/5 * * * node /scripts/jd_zns.js >> /scripts/logs/jd_zns.log 2>&1
#头文子J
5 7 * * * node /scripts/jd_mpdzcar.js >> /scripts/logs/jd_mpdzcar.log 2>&1
#头文字J 游戏
10 6,10,12 * * * node /scripts/jd_mpdzcar_game.js >> /scripts/logs/jd_mpdzcar_game.log 2>&1
#白条抽奖
10 8,20 13-31,1-7 1,2 * node /scripts/jd_bt_sign.js >> /scripts/logs/jd_bt_sign.log 2>&1
#天天压岁钱
50 0,16 * * * node /scripts/jd_ttysq.js >> /scripts/logs/jd_ttysq.log 2>&1
#萌虎摇摇乐
0 0,10,20 * * * node /scripts/jd_mhyyl.js >> /scripts/logs/jd_mhyyl.log 2>&1
#通天塔签到共建
33 1,12 * * * node /scripts/jd_babel_sign.js >> /scripts/logs/jd_babel_sign.log 2>&1
##############长期活动##############
# 签到
0 0,18 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 东东超市兑换奖品
59 23 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
0 0 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 宠汪汪
15 */2 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪喂食
15 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪偷好友积分与狗粮
10 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 摇钱树
0 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
5 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
0  */6 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东全民开红包
12 1,21,23 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 京东天天加速
8 */3 * * * node /scripts/jd_speed.js >> /scripts/logs/jd_speed.log 2>&1
# 东东超市
31 0,1-23/2 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
0 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东排行榜
11 9 * * * node /scripts/jd_rankingList.js >> /scripts/logs/jd_rankingList.log 2>&1
# 天天提鹅
18 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
12 * * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 点点券
#20 0,20 * * * node /scripts/jd_necklace.js >> /scripts/logs/jd_necklace.log 2>&1
# 京喜工厂
20 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
#京喜工厂电力开团
5,10,15,20 0 * * * node /scripts/jd_dreamFactory_tuan.js >> /scripts/logs/jd_dreamFactory_tuan.log 2>&1
# 东东小窝
16 6,23 * * * node /scripts/jd_small_home.js >> /scripts/logs/jd_small_home.log 2>&1
# 东东工厂
36 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 十元街
36 8,18 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
23 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
0 0 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
23 1,12,22 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 京东直播(每日18豆)
50 12-14 * * * node /scripts/jd_live.js >> /scripts/logs/jd_live.log 2>&1
# 微信小程序京东赚赚
10 11 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 宠汪汪邀请助力
10 10-20/2 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 京东汽车旅程赛点兑换金豆
0 0 * * * node /scripts/jd_car_exchange.js >> /scripts/logs/jd_car_exchange.log 2>&1
# 导到所有互助码
47 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 口袋书店
7 8,12,18 * * * node /scripts/jd_bookshop.js >> /scripts/logs/jd_bookshop.log 2>&1
# 签到领现金
27 7,15 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 闪购盲盒
27 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币
10 7 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 京喜财富岛
18 0-23/2 * * *  node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 京喜财富岛提现
#59 11,12,23 * * *  node /scripts/jx_cfdtx.js >> /scripts/logs/jx_cfdtx.log 2>&1
# 京东价格保护
10 0 */3 * *  node /scripts/jd_priceProtect.js >> /scripts/logs/jd_priceProtect.log 2>&1
# 京东极速版
48 0,12,18 * * *  node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 宠汪汪兑换
0 0,8,16 * * *  node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪兑换2
0 0,8,16 * * *  node /scripts/jd_reward_joy.js >> /scripts/logs/jd_reward_joy.log 2>&1
# 宠汪汪积分兑换就有版
58 7,15,23 * * * node /scripts/jd_joy_reward_Mod.js >> /scripts/logs/jd_joy_reward_Mod.log 2>&1
# 京东摇一摇
0 1,17 * * *   node /scripts/jd_shake.js >> /scripts/logs/jd_shake.log 2>&1
# 店铺签到
0 1,17 * * *   node /scripts/jd_ShopSign.js >> /scripts/logs/jd_ShopSign.log 2>&1
# 京东健康
13 1,7,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#京东健康社区收集健康能量
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 领金贴
5 0 * * * node /scripts/jd_jin_tie.js >> /scripts/logs/jd_jin_tie.log 2>&1
#来客有礼小程序 送豆得豆
45 4 * * * node /scripts/jd_senbeans.js >> /scripts/logs/jd_senbeans.log 2>&1
#京喜签到
5 0 * * * node /scripts/jd_jxSign.js >> /scripts/logs/jd_jxSign.log 2>&1
#京东签到图形验证
14 10 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
#汪汪乐园每日任务
20 7,9,17,20 * * * node /scripts/jd_joypark_task.js >> /scripts/logs/jd_joypark_task.log 2>&1
#汪汪乐园开工位
20 9 * * *  node /scripts/jd_joypark_open.js >> /scripts/logs/jd_joypark_open.log 2>&1
#汪汪乐园养joy
20 0-23/3 * * * node /scripts/jd_joypark_joy.js >> /scripts/logs/jd_joypark_joy.log 2>&1
#天天赚京豆
20 8 * * * node /scripts/jd_ttzjd.js >> /scripts/logs/jd_ttzjd.log 2>&1
#宠汪汪验证码获取
58 23,7,15 * * * node /scripts/jd_task_validate.js >> /scripts/logs/jd_task_validate.log 2>&1
#签到领现金兑换
0 0 * * * node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1
#领券中心
15 0 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
#京东到家鲜豆任务
35 0,6,12 * * * node /scripts/jd_jddj_bean.js >> /scripts/logs/jd_jddj_bean.log 2>&1
#京东到家果园水车收水滴任务
0-59/30 * * * * node /scripts/jd_jddj_collectWater.js >> /scripts/logs/jd_jddj_collectWater.log 2>&1
#京东到家果园任务
5 0,8,11,17 * * * node /scripts/jd_jddj_fruit.js >> /scripts/logs/jd_jddj_fruit.log 2>&1
#京东到家鲜豆庄园收水滴
45 * * * * node /scripts/jd_jddj_getPoints.js >> /scripts/logs/jd_jddj_getPoints.log 2>&1
#京东到家鲜豆庄园
20 0-23/6 * * * node /scripts/jd_jddj_plantBeans.js >> /scripts/logs/jd_jddj_plantBeans.log 2>&1
#东东超市抢京豆
13 0,9 * * * node /scripts/jd_fission.js >> /scripts/logs/jd_fission.log 2>&1
#京东店铺锁y
30 0,6-23 * * * node /scripts/jd_jingfen.js >> /scripts/logs/jd_jingfen.log 2>&1
#京东极速版免单签到
20 0,22 * * * node /scripts/jd_speed_md_sign.js >> /scripts/logs/jd_speed_md_sign.log 2>&1
##############默认注释活动##############
# 京东试用（默认注释，请配合取关脚本使用）
10 0 * * *  node /scripts/jd_try.js >> /scripts/logs/jd_try.log 2>&1
# 删除优惠券(默认注释，如需要自己开启，如有误删，已删除的券可以在回收站中还原，慎用)
#20 9 * * 6 node /scripts/jd_delCoupon.js >> /scripts/logs/jd_delCoupon.log 2>&1
# 京东家庭号(暂不知最佳cron)
# */20 * * * * node /scripts/jd_family.js >> /scripts/logs/jd_family.log 2>&1
# jd_cash_exchange
# 0,1,2 0 * * * node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1
##############其他活动#################
#爱企查日常任务
25 8,19 * * *  node /scripts/lf_aiqiche.js >> /scripts/logs/lf_aiqiche.log 2>&1
#爱企查商城监控
*/10 * * * *  node /scripts/lf_aiqichaShop.js >> /scripts/logs/lf_aiqichaShop.log 2>&1
