/*
  京东<热爱环游记>小程序任务
  需手动进入任务界面，注意脚本提醒

  20211107 V1.6
  调整跳出循环方式
 */
Start();
console.info("开始任务");
Run();

console.info("结束任务");

console.log("已退出脚本");
engines.myEngine().forceStop()


function Start() {
    auto.waitFor();//获取无障碍服务权限
    console.show();//开启悬浮窗
    console.info("京东<热爱环游记>微信小程序任务");
    console.log("请尽快进入活动界面")
}

function Run(){
    var PageStatus = 0//页面状态，用于记录当前页面状态，避免点击错位置
    setScreenMetrics(1440, 3120);//基于分辨率1440*3120的点击
    if(!text("去完成").exists()){
        if(!textMatches(/.*消耗.*汪汪币/).exists()){
            for(var i = 0; !textMatches(/.*消耗.*汪汪币/).exists() && i < 10; i++){
                console.log("未识别到活动相关界面，继续等待……")
                sleep(3000);
            }
            if(i >= 10){
                console.log("未按时打开活动界面，退出当前任务");
                return;
            }
        }
        else{
            console.log("检测到活动页面");
            PageStatus=1//进入活动页面，未打开任务列表
        }
        console.log("准备打开任务列表");
        click(1250,1950);
        sleep(2000);
        for(var i = 0; !text("去完成").exists() && i < 3; i++){
            console.log("未识别到可执行任务，请确认已打开任务列表")
            sleep(3000);
        }
        if(i >= 3){
            console.log("未识别到可执行任务，退出当前任务");
            return;
        }
    }
    else{
        console.log("检测到可执行任务");
        PageStatus=2//已打开任务列表
    }
    sleep(3000);
    var boundsX = 0;
    var boundsY = 0;
    var t = 0
    while(true) {
        t++;
        console.info("第"+t+"次任务");
        if (textStartsWith("浏览8s可得").exists() && textStartsWith("浏览8s可得").findOnce().parent().child(4).child(0).text() == "去完成") {
            console.info("开始计时浏览任务");
            boundsX = textStartsWith("浏览8s可得").findOnce().parent().child(4).bounds().centerX();
            boundsY = textStartsWith("浏览8s可得").findOnce().parent().child(4).bounds().centerY();
            click(boundsX,boundsY);
            sleep(10000);
            back();
            sleep(1000);
            console.log("任务完成");
        } else if(textStartsWith("浏览并关注8s").exists() && textStartsWith("浏览并关注8s").findOnce().parent().child(4).child(0).text() == "去完成") {
            console.info("开始浏览关注任务");
            boundsX = textStartsWith("浏览并关注8s").findOnce().parent().child(4).bounds().centerX();
            boundsY = textStartsWith("浏览并关注8s").findOnce().parent().child(4).bounds().centerY();
            click(boundsX,boundsY);
            sleep(10000);
            back();
            sleep(1000);
            console.log("任务完成");
        } else if(textStartsWith("成功浏览可得").exists() && textStartsWith("成功浏览可得").findOnce().parent().child(4).child(0).text() == "去完成") {
            console.info("开始浏览任务");
            boundsX = textStartsWith("成功浏览可得").findOnce().parent().child(4).bounds().centerX();
            boundsY = textStartsWith("成功浏览可得").findOnce().parent().child(4).bounds().centerY();
            click(boundsX,boundsY);
            sleep(3000);
            back();
            sleep(1000);
            console.log("任务完成");
        }
        if(!text("去完成").exists()){
            break;
        }
        sleep(1000);
    }
    if(text("去完成").findOnce() == null) {
        console.log("小程序所有任务完成");
    }
}