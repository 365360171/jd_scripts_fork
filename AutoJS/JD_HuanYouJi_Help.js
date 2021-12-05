/*
  京东<热爱环游记>任务
  纯助力版
*/
Start();
console.info("开始任务");
/*
关于<邀请码>：搜索关键字"邀请码"，按规则填入即可互相助力
第一个参数：通过APP名指定打开APP
           填入“手动”则需要手动打开APP，脚本每5秒检测一次当前运行的APP名字作为判断是否启动成功
第二个参数：0：跳过助力邀请 1：助力邀请
*/
//Run("手动",1);//手动例子
Run("京东",1);//京东例子

console.info("结束任务");
home();
sleep(1000);

console.log("已退出脚本");
engines.myEngine().forceStop()

function Start() {
    auto.waitFor();//获取无障碍服务权限
    console.show();//开启悬浮窗
    console.info("京东<热爱环游记>助力任务");
}

function Run(LauchAPPName,IsInvite) {

    if(IsInvite == 1){
        console.info("开始活动助力");
        //将京口令分段填入，只要里面的特征码即可，分不清什么是特征码的也可以整段放进来，注意用双引号和逗号隔开
        Code=new Array("￥VBY2G6XMu8Dy7S%");//助力码 "","",""
        RunTime=Code.length;
        console.info("共识别到"+RunTime+"个助力码");
        for(var i = 0; i < RunTime; i++){
            console.log("第"+(i+1)+"个助力码");
            setClip(Code[i]);
            console.log("助力码写入剪切板");
            if(LauchAPPName == "手动"){
                console.log("请手动打开APP，以便进行下一步");
                while(text("领京豆").findOnce() == null){
                    if(app.getAppName(currentPackage()) == "京东"|currentActivity() =="com.jingdong.app.mall.MainFrameActivity"
                        | currentActivity()=="com.jingdong.sdk.jdshare.cell.k"){
                        break;
                    }
                    console.log("当前应用名:  " + app.getAppName(currentPackage())+ "\n"
                        +"当前活动:  " + currentActivity()+ "\n"
                        +"未识别到京东界面，继续等待……");
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
                                if(app.getAppName(currentPackage()) == "京东" | text("立即查看").exists()| currentActivity() =="com.jingdong.app.mall.MainFrameActivity"
                                    | currentActivity()=="com.jingdong.sdk.jdshare.cell.k"){
                                    break;
                                }
                                console.log("当前应用名:  " + app.getAppName(currentPackage())+ "\n"
                                    +"当前活动:  " + currentActivity()+ "\n"
                                    +"未识别到京东界面，继续等待……");
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
            while(text("立即查看").exists() |textContains("的助力邀请").exists()|textContains("+500汪汪币").exists()){
                if (text("立即查看").exists()){
                    sleep(2000);
                    console.log("立即查看");
                    text("立即查看").findOnce().click();
                    while(!text("正在加载100%").exists()){
                        sleep(2000);
                        console.log("等待加载……");
                    }
                    sleep(4000);
                    textContains("的助力邀请").findOne().parent().child(6).click();
                    console.log("为TA助力");
                    sleep(2000);
                    if(textContains("+500汪汪币").exists()){
                        textContains("+500汪汪币").findOne().parent().parent().child(4).click();
                        console.log("开心收下");
                    }
                    console.log("助力完成");
                    break;
                } else if(textContains("的助力邀请").exists()){
                    while(!text("正在加载100%").exists()){
                        sleep(2000);
                        console.log("等待加载……");
                    }
                    sleep(2000);
                    console.log("为TA助力");
                    textContains("的助力邀请").findOne().parent().child(6).click();
                    sleep(2000);
                    if(textContains("+500汪汪币").exists()){
                        textContains("+500汪汪币").findOne().parent().parent().child(4).click();
                        console.log("开心收下");
                    }
                    console.log("助力完成");
                    break;
                } else if(textContains("+500汪汪币").exists()){
                    sleep(2000);
                    console.log("开心收下");
                    textContains("+500汪汪币").findOnce().parent().parent().child(4).click();
                }
                else{
                    console.log("助力完成");
                    break;
                }
                sleep(3000);
            }
            //最后一次助力不返回首页，以便进行下一个任务
            if(i < RunTime-1){
                OutAPP(100);
                console.log("退出当前APP，准备第"+(i+2)+"个助力码");
            }
            else{
                console.log("当前账户已助力完成");
                home();
            }
        }
    }
    if(IsInvite == 0){
        console.info("跳过活动助力");
    }
}
//确保退出活动界面及当前账号

function OutAPP(SleepTime) {
    if(SleepTime == null){
        SleepTime=100
    }
    back();
    sleep(500);
    back();
    sleep(500);
    back();
    sleep(SleepTime);
}
