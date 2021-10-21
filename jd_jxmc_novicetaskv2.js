"use strict";
/**
 * 京喜牧场-新手任务（开木板）
 * 代码核心来源于hw，喝水不忘挖井人，再次感谢hw
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var TS_USER_AGENTS_1 = require("./TS_USER_AGENTS");
var notify = require('./sendNotify');
var A = require('./utils/jd_jxmcToken');
var cookie = '', res = '', shareCodes = [], homePageInfo, activeid = '', jxToken, UserName, index;
!(function () { return __awaiter(void 0, void 0, void 0, function () {
    var cookiesArr, i, _a, isLogin, nickName, lastgettime, food, petid, coins, _i, _b, day, taskRetCode;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0: return [4 /*yield*/, TS_USER_AGENTS_1.requestAlgo()];
            case 1:
                _e.sent();
                return [4 /*yield*/, TS_USER_AGENTS_1.requireConfig()];
            case 2:
                cookiesArr = _e.sent();
                i = 0;
                _e.label = 3;
            case 3:
                if (!(i < cookiesArr.length)) return [3 /*break*/, 17];
                cookie = cookiesArr[i];
                UserName = decodeURIComponent(cookie.match(/pt_pin=([^;]*)/)[1]);
                index = i + 1;
                return [4 /*yield*/, TS_USER_AGENTS_1.TotalBean(cookie)];
            case 4:
                _a = _e.sent(), isLogin = _a.isLogin, nickName = _a.nickName;
                if (!isLogin) {
                    notify.sendNotify(__filename.split('/').pop(), "cookie\u5DF2\u5931\u6548\n\u4EAC\u4E1C\u8D26\u53F7" + index + ":" + (nickName || UserName));
                    return [3 /*break*/, 16];
                }
                console.log("\n\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7" + index + "\u3011" + (nickName || UserName) + "\n");
                jxToken = TS_USER_AGENTS_1.getJxToken(cookie);
                return [4 /*yield*/, api('queryservice/GetHomePageInfo', 'activeid,activekey,channel,isgift,isquerypicksite,sceneid', { isgift: 0, isquerypicksite: 0 })];
            case 5:
                homePageInfo = _e.sent();
                activeid = homePageInfo.data.activeid;
                lastgettime = void 0;
                if ((_d = (_c = homePageInfo.data) === null || _c === void 0 ? void 0 : _c.cow) === null || _d === void 0 ? void 0 : _d.lastgettime) {
                    lastgettime = homePageInfo.data.cow.lastgettime;
                }
                else {
                    // continue
                    lastgettime = 0;
                }
                food = 0;
                try {
                    food = homePageInfo.data.materialinfo[0].value;
                }
                catch (e) {
                    console.log('jxmc未开通？黑号？');
                    return [3 /*break*/, 16];
                }
                petid = homePageInfo.data.petinfo[0].petid;
                coins = homePageInfo.data.coins;
                console.log('助力码:', homePageInfo.data.sharekey);
                console.log('现有草:', food);
                console.log('金币:', coins);
                console.log('此CK开通Jxmc获得验证');
                return [4 /*yield*/, api1('operservice/DoMainTask', 'activeid,activekey,channel,step,jxmc_jstoken,phoneid,sceneid,timestamp')
                    //if (res.ret === 0)
                ];
            case 6:
                // 新手任务1
                res = _e.sent();
                //if (res.ret === 0)
                console.log('开板第一式。。。。效果不知道，需要事后进入jxmc查看');
                return [4 /*yield*/, api2('operservice/DoMainTask', 'activeid,activekey,channel,step,jxmc_jstoken,phoneid,sceneid,timestamp')
                    //if (res.ret === 0)
                ];
            case 7:
                // 新手任务2
                res = _e.sent();
                //if (res.ret === 0)
                console.log('开板第二式。。。效果不知道，需要事后进入jxmc查看');
                return [4 /*yield*/, api3('operservice/DoMainTask', 'activeid,activekey,channel,step,jxmc_jstoken,phoneid,sceneid,timestamp')
                    //if (res.ret === 0)
                ];
            case 8:
                // 新手任务3
                res = _e.sent();
                //if (res.ret === 0)
                console.log('开板第三式。。。效果不知道，需要事后进入jxmc查看');
                return [4 /*yield*/, api('queryservice/GetSignInfo', 'activeid,activekey,channel,sceneid')];
            case 9:
                // 签到
                res = _e.sent();
                if (!res.data.signlist) return [3 /*break*/, 14];
                _i = 0, _b = res.data.signlist;
                _e.label = 10;
            case 10:
                if (!(_i < _b.length)) return [3 /*break*/, 13];
                day = _b[_i];
                if (!(day.fortoday && !day.hasdone)) return [3 /*break*/, 12];
                return [4 /*yield*/, api('operservice/GetSignReward', 'channel,currdate,sceneid', { currdate: res.data.currdate })];
            case 11:
                res = _e.sent();
                if (res.ret === 0) {
                    console.log('签到成功!说明CK有效');
                }
                else {
                    console.log(res);
                }
                return [3 /*break*/, 13];
            case 12:
                _i++;
                return [3 /*break*/, 10];
            case 13: return [3 /*break*/, 15];
            case 14:
                console.log('没有获取到签到信息！');
                _e.label = 15;
            case 15:
                taskRetCode = 0;
                _e.label = 16;
            case 16:
                i++;
                return [3 /*break*/, 3];
            case 17: return [2 /*return*/];
        }
    });
}); })();
function api(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=" + activeid + "&activekey=null&jxmc_jstoken=" + jxToken.strPgUUNum + "&timestamp=" + Date.now() + "&phoneid=" + jxToken.strPhoneID + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + TS_USER_AGENTS_1.decrypt(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Cookie': cookie,
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;iPhone;4.11.0;12.4.1;52cf225f0c463b69e1e36b11783074f9a7d9cbf0;network/wifi;model/iPhone11,6;appBuild/100591;ADID/C51FD279-5C69-4F94-B1C5-890BC8EB501F;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/503;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Referer': 'https://st.jingxi.com/'
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function api1(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=" + activeid + "&activekey=null&step=B-1&jxmc_jstoken=" + jxToken.strPgUUNum + "&timestamp=" + Date.now() + "&phoneid=" + jxToken.strPhoneID + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBKS&g_ty=ls";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + TS_USER_AGENTS_1.decrypt(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Cookie': cookie,
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;android;5.3.0;11;9caf6ce67c094856;network/wifi;model/PCCM00;appBuild/18113;partner/oppo01;;session/116;aid/9caf6ce67c094856;oaid/;pap/JA2019_3111789;brand/OPPO;eu/9336166663365663;fv/7336039343835363;Mozilla/5.0 (Linux; Android 11; PCCM00 Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.159 Mobile Safari/537.36',
                                'Referer': 'https://st.jingxi.com/'
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_2 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function api2(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=" + activeid + "&activekey=null&step=C-1&jxmc_jstoken=" + jxToken.strPgUUNum + "&timestamp=" + Date.now() + "&phoneid=" + jxToken.strPhoneID + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBKS&g_ty=ls";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + TS_USER_AGENTS_1.decrypt(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Cookie': cookie,
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;android;5.3.0;11;9caf6ce67c094856;network/wifi;model/PCCM00;appBuild/18113;partner/oppo01;;session/116;aid/9caf6ce67c094856;oaid/;pap/JA2019_3111789;brand/OPPO;eu/9336166663365663;fv/7336039343835363;Mozilla/5.0 (Linux; Android 11; PCCM00 Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.159 Mobile Safari/537.36',
                                'Referer': 'https://st.jingxi.com/'
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function api3(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/jxmc/" + fn + "?channel=7&sceneid=1001&activeid=" + activeid + "&activekey=null&step=C-1&jxmc_jstoken=" + jxToken.strPgUUNum + "&timestamp=" + Date.now() + "&phoneid=" + jxToken.strPhoneID + "&_stk=" + encodeURIComponent(stk) + "&_ste=1&_=" + Date.now() + "&sceneval=2&g_login_type=1&callback=jsonpCBKS&g_ty=ls";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + TS_USER_AGENTS_1.decrypt(stk, url);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Cookie': cookie,
                                'Host': 'm.jingxi.com',
                                'User-Agent': 'jdpingou;android;5.3.0;11;9caf6ce67c094856;network/wifi;model/PCCM00;appBuild/18113;partner/oppo01;;session/116;aid/9caf6ce67c094856;oaid/;pap/JA2019_3111789;brand/OPPO;eu/9336166663365663;fv/7336039343835363;Mozilla/5.0 (Linux; Android 11; PCCM00 Build/RKQ1.200928.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/92.0.4515.159 Mobile Safari/537.36',
                                'Referer': 'https://st.jingxi.com/'
                            }
                        })];
                case 2:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [3 /*break*/, 4];
                case 3:
                    e_4 = _a.sent();
                    reject(401);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
}
function getTask() {
    var _this = this;
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var tasks, doTaskRes, _i, _a, t, awardCoin;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, taskAPI('GetUserTaskStatusList', 'bizCode,dateType,source')];
                case 1:
                    tasks = _b.sent();
                    doTaskRes = { ret: 1 };
                    _i = 0, _a = tasks.data.userTaskStatusList;
                    _b.label = 2;
                case 2:
                    if (!(_i < _a.length)) return [3 /*break*/, 9];
                    t = _a[_i];
                    if (!((t.dateType === 1 || t.dateType === 2) && t.completedTimes == t.targetTimes && t.awardStatus === 2)) return [3 /*break*/, 5];
                    // 成就任务
                    t.dateType === 1
                        ?
                            console.log('成就任务可领取:', t.taskName, t.completedTimes, t.targetTimes)
                        :
                            console.log('每日任务可领取:', t.taskName, t.completedTimes, t.targetTimes);
                    return [4 /*yield*/, taskAPI('Award', 'bizCode,source,taskId', { taskId: t.taskId })];
                case 3:
                    doTaskRes = _b.sent();
                    return [4 /*yield*/, TS_USER_AGENTS_1.wait(4000)];
                case 4:
                    _b.sent();
                    if (doTaskRes.ret === 0) {
                        awardCoin = doTaskRes['data']['prizeInfo'].match(/:(.*)}/)[1] * 1;
                        console.log('领奖成功:', awardCoin);
                    }
                    _b.label = 5;
                case 5:
                    if (!(t.dateType === 2 && t.completedTimes < t.targetTimes && t.awardStatus === 2 && t.taskType === 2)) return [3 /*break*/, 8];
                    console.log('可做每日任务:', t.taskName, t.taskId);
                    return [4 /*yield*/, taskAPI('DoTask', 'bizCode,configExtra,source,taskId', { taskId: t.taskId, configExtra: '' })];
                case 6:
                    doTaskRes = _b.sent();
                    if (!(doTaskRes.ret === 0)) return [3 /*break*/, 8];
                    console.log('任务完成');
                    return [4 /*yield*/, TS_USER_AGENTS_1.wait(5000)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 2];
                case 9:
                    resolve(doTaskRes.ret);
                    return [2 /*return*/];
            }
        });
    }); });
}
function taskAPI(fn, stk, params) {
    var _this = this;
    if (params === void 0) { params = {}; }
    return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
        var url, key, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://m.jingxi.com/newtasksys/newtasksys_front/" + fn + "?_=" + Date.now() + "&source=jxmc&bizCode=jxmc&_ste=1&sceneval=2&_stk=" + encodeURIComponent(stk) + "&g_login_type=1&g_ty=ajax";
                    if (Object.keys(params).length !== 0) {
                        key = void 0;
                        for (key in params) {
                            if (params.hasOwnProperty(key))
                                url += "&" + key + "=" + params[key];
                        }
                    }
                    url += '&h5st=' + TS_USER_AGENTS_1.decrypt(stk, url);
                    return [4 /*yield*/, axios_1["default"].get(url, {
                            headers: {
                                'Origin': 'https://st.jingxi.com',
                                'Accept-Language': 'zh-cn',
                                'Connection': 'keep-alive',
                                'Host': 'm.jingxi.com',
                                'Referer': 'https://st.jingxi.com/pingou/jxmc/index.html?nativeConfig=%7B%22immersion%22%3A1%2C%22toColor%22%3A%22%23e62e0f%22%7D&__mcwvt=sjcp&PTAG=139279.13.31&jxsid=16257474246337594063',
                                'Accept': 'application/json',
                                'User-Agent': 'jdpingou;iPhone;4.11.0;12.4.1;52cf225f0c463b69e1e36b11783074f9a7d9cbf0;network/wifi;model/iPhone11,6;appBuild/100591;ADID/C51FD279-5C69-4F94-B1C5-890BC8EB501F;supportApplePay/1;hasUPPay/0;pushNoticeIsOpen/0;hasOCPay/0;supportBestPay/0;session/503;pap/JA2019_3111789;brand/apple;supportJDSHWK/1;Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
                                'Cookie': cookie
                            }
                        })];
                case 1:
                    data = (_a.sent()).data;
                    resolve(data);
                    return [2 /*return*/];
            }
        });
    }); });
}
