const axios = require('axios');

const taskSubmitUrl = 'https://wemp.issks.com/lottery/v1/welfare/taskSubmit';
const method = 'POST';
const headers = {
  'Accept-Encoding': 'gzip,compress,br,deflate',
  'content-type': 'application/json;charset=utf-8',
  'Connection': 'keep-alive',
  'Referer': 'https://servicewechat.com/wx9a52264f55a86ce1/93/page-frame.html',
  'Host': 'wemp.issks.com',
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_7_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.48(0x18003030) NetType/WIFI Language/zh_CN',
  'token': 'issks_565417b3156fd93498fe01041130f222'
};
const newTaskSubmitBody = '{"taskId":37}';

async function fetchRequest(url, body) {
  try {
    const response = await axios({
      url: url,
      method: method,
      headers: headers,
      data: body
    });
    return response;
  } catch (error) {
    console.error(`请求错误: ${error}`);
    return null; // 或者处理错误
  }
}

async function performRequests() {
  // 快速连续执行5次请求
  for (let i = 0; i < 5; i++) {
    const newTaskSubmitResponse = await fetchRequest(taskSubmitUrl, newTaskSubmitBody);
    if (newTaskSubmitResponse) {
      console.log(`骑行保平安任务提交 ${i+1}: ` + newTaskSubmitResponse.status + "\n\n" + JSON.stringify(newTaskSubmitResponse.data));
      // 这里添加您的通知处理逻辑
    }
  }
}

// 每62秒调用一次performRequests函数
setInterval(performRequests, 62000);
