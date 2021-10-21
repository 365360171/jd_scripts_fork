//京东<东东玩家>
/*
  20210928 V1.5
  调整脚本写法，增加可读性
  增加活动助力代码，以便自动进入会场完成助力
  20210929 V1.9
  增加手动启动APP判断，未安装<多开分身>的话，其他分身可手动启动
  增加微信小程序任务脚本，跳转小程序会场时，会自动做小程序会场任务（如网络不好，加载较慢，可自行延长等待时间，搜索关键字<小程序加载>进行调整）
  20210929 V2.0
  调整手动模式启动判断方式
  优化微信小程序任务
  20210929 V3.0
  与个人版保持版本号统一
  20210929 V3.1
  调整APP启动逻辑，提升识别新助力码速度
  增加活动页面判断
  20210930 V3.2
  小程序任务调整为坐标点击（目前测试时会偶尔报错，原因不明）
  调整活动弹窗识别方式
  20210930 V3.3
  修复手动模式判断问题
  小程序任务增加异常信息判断，自动返回
  20210930 V3.4
  小程序任务改为按次数执行，尝试跳转2次，两次后不再尝试执行此任务
  跳过稳健飞侠异常任务
  20210930 V3.5
  尝试解决小程序计时偶发的报错
  异常任务无法完美处理，等京东修复，脚本不再跳过
  //author：嘉佳
*/
Start();
CheckEnvironment();
console.info("开始任务");
/*
关于<邀请码>：搜索关键字"邀请码"，按规则填入即可互相助力
第一个参数：通过APP名指定打开APP
           填入“手动”则需要手动打开APP，脚本每5秒检测一次当前运行的APP名字作为判断是否启动成功
第二个参数：0：跳过助力邀请 1：助力邀请
第三个参数：0：不执行入会任务 1：执行入会任务，遇到新入会店铺则退出脚本
第四个参数：运行环境检测参数，不用管
*/
Run("京东",1,1,Isnormal);Bcak();
//Run("手动",1,1,Isnormal);Bcak();//手动例子
/*
指定打开哪些京东分身，就可以达到执行一次脚本，同时完成多个小号的目的
仅在<多开分身>中测试，其他分身APP建议使用手动模式或旧版
如果分身是同名APP，仅是图标上有区分，那不用试了，跳转不了
示例
Run("京东分身",1,1,Isnormal);Bcak();
Run("京东分身2",1,1,Isnormal);Bcak();
*/

console.info("结束任务");
home();
sleep(1000);

console.log("已退出脚本");
engines.myEngine().forceStop()

function Start() {
    auto.waitFor();//获取无障碍服务权限
    console.show();//开启悬浮窗
    console.info("京东<东东玩家>任务");
    sleep(2000);
    //console.log("倒计时5秒开始执行脚本");
    //sleep(5000);
}

function CheckEnvironment() {
    console.info("运行环境检测");
    var launchResult = app.launchApp("多开分身")
    if (!launchResult) {
        console.error("你没有安装<多开分身>！"+ "\n"+"其他分身APP未经测试，不确保脚本分身功能可用");
        sleep(1000)
        return Isnormal = 0;
    }
    else{
        console.log("检测到<多开分身>，脚本可用");
        home();
        return Isnormal = 1;
    }
}

function Run(LauchAPPName,IsInvite,IsJoinMember,Isnormal) {
    //运行环境正常，而且也不是手动模式，则按设置的参数启动相应APP
    if(Isnormal == 1 && LauchAPPName != "手动"){
        console.log("即将启动<"+LauchAPPName+">");
    }
    //运行环境不满足，而且也不是手动模式，则指定启动京东
    else if(Isnormal != 1 && LauchAPPName != "手动"){
        console.log("分身运行环境检测异常"+ "\n"+"只启动<京东>");
        LauchAPPName="京东";
        //app.launchApp(LauchAPPName);
    }

    if(IsInvite == 1){
        console.info("开始活动助力");
        //将京口令分段填入，只要里面的特征码即可，分不清什么是特征码的也可以整段放进来，注意用双引号和逗号隔开
        Code=new Array("￥85TP8C47DYLVDA%","￥40Ohs5rQ79MXzL%");//第一、二个是助力作者
        RunTime=Code.length;
        console.info("共识别到"+RunTime+"个助力码");
        for(var i = 0; i < RunTime; i++){
            console.log("第"+(i+1)+"个助力码");
            setClip(Code[i]);
            console.log("助力码写入剪切板");
            if(LauchAPPName == "手动"){
                console.log("请手动打开APP，以便进行下一步");
                while(text("领京豆").findOnce() == null){
                    if(app.getAppName(currentPackage()) == "京东"){
                        break;
                    }
                    console.log("当前为手动模式"+ "\n"+"未识别到京东界面，继续等待……");
                    sleep(3000);
                }
                console.log("已检测到京东APP，等待下一步");
            }
            else{
                console.log("打开"+LauchAPPName+"");
                app.launchApp(LauchAPPName);
                sleep(2000);
            }
            if(text("立即查看").findOnce() == null){
                console.log("等待APP识别助力码");
                var j = 0;
                while(j < 15 | text("立即查看").findOnce() == null){
                    if(text("立即查看").exists()){
                        break;
                    }
                    console.log(j+1);
                    j++;
                    sleep(1000);
                    if(j == 10){
                        console.log("未检测到新助力码，尝试再次复制");
                        OutAPP(1000);
                        setClip(Code[i]);
                        console.log("助力码重新写入剪切板");
                        sleep(1000);
                        if(LauchAPPName == "手动"){
                            console.log("请手动打开APP，以便进行下一步");
                            while(text("领京豆").findOnce() == null){
                                if(app.getAppName(currentPackage()) == "京东" | text("立即查看").exists()){
                                    break;
                                }
                                console.log("当前为手动模式"+ "\n"+"未识别到京东界面，继续等待……");
                                sleep(3000);
                            }
                            console.log("检测到京东APP，等待再次检测");
                        }
                        else{
                            app.launchApp(LauchAPPName);
                            console.log("重启APP成功，等待再次检测");
                            sleep(1000);
                        }
                    }
                    if(j > 15){
                        console.error("超时未检测到新助力码，跳过助力任务");
                        sleep(1000);
                        if(i < RunTime-1){
                            console.log("退出当前APP，准备第"+(i+2)+"个助力码");
                            OutAPP(2000);
                        }
                        break;
                    }
                }
                if(j > 15){
                    //超时则跳出当前助力任务
                    continue;
                }
            }
            text("立即查看").waitFor();
            sleep(2000);
            console.log("立即查看");
            text("立即查看").findOnce().click();
            sleep(2000);
            text("为TA赚好玩豆").waitFor();
            sleep(2000);
            console.log("为TA赚好玩豆");
            text("为TA赚好玩豆").findOne().click();
            console.log("助力完成");
            sleep(2000);
            //最后一次助力不返回首页，以便进行下一个任务
            if(i < RunTime-1){
                back();
                sleep(1000);
                console.log("退出当前APP，准备第"+(i+2)+"个助力码");
                OutAPP(2000);
            }
        }
    }
    if(IsInvite == 0){
        console.info("跳过活动助力");
    }
    RunTask(IsJoinMember);

    function OutAPP(SleepTime) {
        back();
        sleep(500);
        back();
        sleep(SleepTime);
    }
    function RunTask(IsJoinMember) {
        console.info("开始寻找活动任务列表");
        setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
        //是否执行入会
        //var IsJoinMember = 1 //0：不执行入会任务 1：执行入会任务，遇到新入会店铺则退出脚本

        var t = 0
        var x = 0
        while (textContains("全民玩家瓜分5亿").findOnce() == null) {
            console.info("未找到活动界面，请手动进入");
            sleep(3000);
        }
        if (textContains("全民玩家瓜分5亿").exists()) {
            console.info("成功进入活动界面");
            console.log("等待加载弹窗……");
            sleep(5000);//防止网络加载过慢，增加等待时间
            while(text("继续探索赢红包").exists() |text("开心收下").exists() |text("取消").exists() |text("立即抽奖").exists()){
                console.log("处理弹窗");
                if (text("继续探索赢红包").exists()) {
                    text("继续探索赢红包").findOnce().click();
                    console.log("继续探索赢红包");
                    sleep(1000);
                }else if (text("开心收下").exists()) {
                    text("开心收下").findOnce().click();
                    console.log("收下奖励");
                    sleep(1000);
                }else if (text("取消").exists()) {
                    text("取消").findOnce().click();
                    console.log("取消通知");
                    sleep(1000);
                }else if (text("立即抽奖").exists()) {
                    text("立即抽奖").findOnce().parent().parent().child(2).click();
                    console.log("关闭抽奖窗口");
                    sleep(1000);
                }else{
                    console.log("弹窗处理完毕");
                }
                sleep(1000);
            }
            click(712,2670);
            sleep(3000);
        }
        if (text("去完成").exists()) {
            console.info("发现任务列表");
            sleep(500);
            for(;;) {
                if (textMatches(/.*[0-9]S.*/).exists() && textMatches(/.*[0-9]S.*/).findOnce().parent().child(8).text() == "去完成") {
                    console.info("开始浏览任务");
                    textMatches(/.*[0-9]S.*/).findOnce().parent().child(8).click();
                    t = 0;
                    while(text("任务已完成，获得2000好玩豆").findOnce() == null) {
                        sleep(1000);
                        t=t+1
                        if(t==5 |t==8){
                            console.log("已等待"+t+"秒");
                        }
                        if(t==10){//默认浏览时长上限10秒，如网络不稳，可适当延长
                            if(textContains("东东超市").exists()){
                                //东东超市加载时间较久，延长等待时间，确保完成任务
                                console.log("当前为东东超市任务，延长浏览时间");
                                sleep(5000);
                            }
                            break;
                        }

                    }
                    if(textContains("任务已完成，获得2000好玩豆").exists()){
                        console.log("任务完成");
                    }
                    else{
                        console.info("已达浏览时长上限，即将返回");
                    }
                } else if (textContains("加购").exists() && textContains("加购").findOnce().parent().child(8).text() == "去完成") {
                    console.info("开始加购任务");
                    textContains("加购").findOnce().parent().child(8).click();
                    sleep(3000);
                    for(var i = 0; i < 5; i++){
                        className("android.view.View").scrollable(true).depth(15).findOne().child(i).child(0).child(4).click();
                        console.log("加购第" + (i+1) + "个商品");
                        sleep(3000);
                        back();
                        console.log("返回加购界面");
                        sleep(3000);
                    }
                    console.log("浏览加购完成，返回");
                } else if (textContains("浏览小程序会场").exists() && textContains("浏览小程序会场").findOnce().parent().child(8).text() == "去完成" && x < 2) {
                    console.info("开始浏览小程序任务");
                    textContains("浏览小程序会场").findOnce().parent().child(8).click();
                    x = x + 1
                    console.log("第"+x+"次小程序任务");
                    sleep(2000);
                    //if(app.getAppName(currentPackage()) == "微信"){//偶尔会报错，屏蔽观察效果
                    console.log("当前为小程序任务，延长浏览时间");
                    for(var i = 0; i < 10 ; i++){//小程序加载时间较久，可自行调整延长等待时间，默认10秒
                        sleep(1000);
                        console.log(i+1)
                    }
                    if(i == 10 ){
                        console.log("已到时间上限，准备返回");
                    }
                    //}
                } else if (textContains("浏览").exists() && textContains("浏览").findOnce().parent().child(8).text() == "去完成") {
                    console.info("开始浏览任务");
                    textContains("浏览").findOnce().parent().child(8).click();
                    sleep(3000);
                    console.log("浏览完成，返回");
                } else if (textStartsWith("成功关注").exists() && textStartsWith("成功关注").findOnce().parent().child(8).text() == "去完成") {
                    console.info("开始关注任务");
                    textStartsWith("成功关注").findOnce().parent().child(8).click();
                    sleep(3000);
                    console.log("任务完成，返回");
                } else if (IsJoinMember == 1 && textContains("开通品牌会员").exists() && textContains("开通品牌会员").findOnce().parent().child(8).text() == "去完成") {
                    textContains("开通品牌会员").findOnce().parent().child(8).click();
                    sleep(3000);
                    if(textContains("确认授权并加入店铺会员").exists()){
                        console.log("涉及个人隐私,请手动加入店铺会员或者忽略加入会员任务");
                        break;
                    }
                    else{
                        console.info("已是当前店铺会员");
                        console.log("任务完成，返回");
                    }
                }
                else {
                    //所有任务已完成，退出循环
                    if(IsJoinMember != 1){
                        console.log("入会任务请手动完成");
                    }
                    break;
                }
                sleep(1000);
                back();
                sleep(3000);
                for(var i=0;!textContains("全民玩家瓜分5亿").exists() && i<5;i++){
                    toast("返回");
                    sleep(200);
                    back();
                    sleep(200);
                    if(i==5){
                        console.log("无法返回任务界面,请重新执行脚本");
                        exit();
                    }
                }
            }
        }
        else{
            console.log("如未能正确打开任务列表，请手动打开任务列表后再启动脚本");
            sleep(3000);
        }
        console.log("当前账号所有任务已完成，若有剩余可再启动脚本或手动完成");
        sleep(2000);
        back();
    }
}
//确保退出活动界面及当前账号
function Bcak() {
    sleep(500);
    back();
    sleep(500);
    back();
    sleep(3000);
}