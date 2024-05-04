const axios = require('axios');

// 定义请求URL和请求头
const signInUrl = 'https://app.wjxxmagicbook.cn/api/parent/signin';
const taskSubmitUrl = 'https://app.wjxxmagicbook.cn/api/parent/act_202207_roll';
const headers = {
  'Sec-Fetch-Dest': 'empty',
  'Connection': 'keep-alive',
  'Accept-Encoding': 'gzip, deflate, br',
  'Content-Type': 'application/json',
  'Sec-Fetch-Site': 'cross-site',
  'Origin': 'http://wxqtn.wjxxmagicbook.cn',
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_7_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003127) NetType/4G Language/zh_CN',
  'Sec-Fetch-Mode': 'cors',
  'Host': 'app.wjxxmagicbook.cn',
  'Referer': 'http://wxqtn.wjxxmagicbook.cn/',
  'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
  'Accept': 'application/json, text/plain, */*'
};

// 定义请求体
const signInBody = JSON.stringify({
  openid: "od4EUwnx3v0dczsU4hNvqyFH35a0",
  _source: "qtn"
});
const taskSubmitBody = JSON.stringify({
  openid: "od4EUwnx3v0dczsU4hNvqyFH35a0",
  watch_openid: "",
  _source: "qtn"
});

// 定义延迟函数
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// 定义发送请求的函数
async function fetchRequest(url, body) {
  try {
    const response = await axios({
      url: url,
      method: 'POST',
      headers: headers,
      data: body
    });
    return response.data;
  } catch (error) {
    console.error(`请求错误: ${error}`);
    return null;
  }
}

// 定义执行请求的函数
async function performRequests() {
  // 执行签到请求
  const signInResponse = await fetchRequest(signInUrl, signInBody);
  if (signInResponse && signInResponse.code === 0) {
    // 签到成功的逻辑...
    console.log(`签到成功: ${JSON.stringify(signInResponse)}`);
  } else {
    // 签到失败的逻辑...
    console.log(`签到失败: ${signInResponse ? signInResponse.msg : '无响应'}`);
  }

  // 执行任务提交请求
  for (let i = 0; i < 5; i++) {
    await delay(2000); // 等待2秒
    const taskSubmitResponse = await fetchRequest(taskSubmitUrl, taskSubmitBody);
    if (taskSubmitResponse && taskSubmitResponse.code === -1) {
      // 任务提交失败的逻辑...
      console.log(`转一转今日次数已用尽，停止运行。`);
      break;
    } else {
      // 任务提交成功的逻辑...
      console.log(`转一转任务提交成功: ${JSON.stringify(taskSubmitResponse)}`);
    }
  }
}

// 执行所有请求
performRequests();
