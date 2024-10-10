const axios = require('axios');

const url = 'https://api.ys7.com/v3/integral/lottery/create?appVersion=7.0.1.2228084&rnVersion=v4.3.8_21017072&rnExchangeFlag=1';
const method = 'POST';
const headers = {
    'Connection': 'keep-alive',
    'Accept-Encoding': 'gzip, deflate, br',
    'rnmodulebiz': 'ServiceOperationActivity',
    'rnmoduleversion': '5.0.0.22178958',
    'Content-Type': 'application/json',
    'User-Agent': 'VideoGo/2228084 CFNetwork/1410.1 Darwin/22.6.0',
    'sessionid': 'eyJhbGciOiJIUzM4NCJ9.eyJhdWQiOiJjNjM5MDE4ZjZhY2E0ZDU0YWZlMmQwMWQyY2M4Y2I1NiIsImlzcyI6InlzNyIsImV4cCI6MTcyODU2OTQzMCwiaWF0IjoxNzI4NDgzMDMwLCJzdWIiOiJzIiwiY3QiOiIxIiwidGQiOjE3Mjg0ODMwOTAzNzksInMiOiIyNDhjMDA5MTQ1MGM1ZTdmZWFmYTUzNDVjYWIzMDJkMSIsImNuIjoiaVBob25lIiwidW4iOiJ1dGd1dGkifQ.kuhrDcnE7r-NFyOwP7-mlchxQ3aL0tbJ1rSc8hpTB2rtf0tJPL7k0rlSaj9mlzAE',
    'Cookie': 'ASG_DisplayName=utguti; C_SS=eyJhbGciOiJIUzM4NCJ9.eyJhdWQiOiJjNjM5MDE4ZjZhY2E0ZDU0YWZlMmQwMWQyY2M4Y2I1NiIsImlzcyI6InlzNyIsImV4cCI6MTcyODU2OTQzMCwiaWF0IjoxNzI4NDgzMDMwLCJzdWIiOiJzIiwiY3QiOiIxIiwidGQiOjE3Mjg0ODMwOTAzNzksInMiOiIyNDhjMDA5MTQ1MGM1ZTdmZWFmYTUzNDVjYWIzMDJkMSIsImNuIjoiaVBob25lIiwidW4iOiJ1dGd1dGkifQ.kuhrDcnE7r-NFyOwP7-mlchxQ3aL0tbJ1rSc8hpTB2rtf0tJPL7k0rlSaj9mlzAE; C_TYPE=1; C_VER=7.0.1.2228084; track_identity=41ccdf7bfa86254cebd4fb6e8d779288; user=%2BhAKuYZZELQ7dM30P9af1mAObpnagl8wVQvoTv8Lj5cbojYT7lrizViXaDBb9mqYNhoAFfdJAQc%3D',
    'Host': 'api.ys7.com',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Accept': '*/*'
};
const body = {};

async function fetchRequest() {
    try {
        const response = await axios({
            url: url,
            method: method,
            headers: headers,
            data: body
        });
        console.log(response.status + "\n\n" + JSON.stringify(response.data));
    } catch (error) {
        console.error(`请求错误: ${error}`);
    }
}

fetchRequest();
