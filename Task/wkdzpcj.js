const axios = require('axios');

const method = 'POST';
const headers = {
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Accept-Encoding': 'gzip, deflate',
  'Origin': 'http://www.ahzs10000.com',
  'Connection': 'keep-alive',
  'Host': 'www.ahzs10000.com',
  'X-Requested-With': 'XMLHttpRequest'
};
const accounts = [
  {
    Phone: `133****2086`,
    query: `zw_time=1735660799&zw_param=DdB6_FNtlG4baD4tyNJNEPYjdZcWglmkADlQJuqYB7Xf-0XNaU6ZJt0abSBE%20goNMf6CeKuR05Qo_PxYeud1PLMJ716PVjvxNLiiskO7f2FMNFaIYlz309Z6L%20fEttGsBi&zw_token=c73cc93ee0a17e364db3b061b5beb91b`
  },
  {
    Phone: `177****3878`,
    query: `zw_time=1735660799&zw_param=a7BEMvkfSobhbxwQyYiOHdLRCgANAVq1oEP7-EF03UJX95UJ1kHwgFx3tgLY%20XzQNhpwIW4hnB37nNiOZhPgqHGwtsUoPoiJhkzFVhaUzoGmgUAKPGty2tX43%20HCvXoMsZ&zw_token=5e802000609dddde05c532e5da5767be`
  },
  {
    Phone: `181****5792`,
    query: `zw_time=1735660799&zw_param=8T4vfJg89upteBCHqLNYzY8JvL_RZe4xASTouasM1mHR7SgnhWY11fMOWYPj%20ZW4c97mi6di3ksi2QkYCnefe7i_xVaBKh-HepgtMjWUgoKreEQ2QAsdZEg1W%20m8maNF29&zw_token=d48aff929b57d0e7507c49682c08652c`
  },
  {
    Phone: `181****3072`,
    query: `zw_time=1735660799&zw_param=cHiL-11J8cQPh_O4KSL-5APUQy9EsikgTxgeuveVum_9H_0XqeIyLoXp732G%20Zg9wiY_PUBdWft0CR-ga8x8D7h_YPBFSWiSCRcB3Bebq-iO-09NSYqKfWGN2%204JUI1ixY&zw_token=5d4d922ec018a8d81f8b6260b6085521`
  },
  {
    Phone: `199****1786`,
    query: `zw_time=1735660799&zw_param=9F5FFFdjGsDvYzrkdEVOCEoQT-q1hZHVvMiQ48qUe4hkgv5E15hyhCR-OxNe%204RnInGnWTi1FPlXDinJ-KTuETrDgJ-rNEZnAcYU9jArhnFhgJuL8B9dLyyHd%20OvmcnAhk&zw_token=4cb0f513a581f25a515d853ac7f62fda`
  },
  {
    Phone: `189****1895`,
    query: `zw_time=1735660799&zw_param=PpZwj3p5SQGxZqxU72f9P0_lPE7Acu9LLlVUDoirTTNcJYqadYbUIlA2iXKI%20j-e4VCWbapYqwiRE3or6o9skbEupV00q0bLVlShnaor3HBTVzQN9qvNjCV68%20M2iqVC2i&zw_token=6e4f54c751cde0ce2fd062c4d0a4ffa7`
  },
  {
    Phone: `153****5320`,
    query: `zw_time=1735660799&zw_param=0dy8V2Ax59MKfhbqygE0KuP4OV_she1CaXvpWYxwQSrSEIJSdxjRKuR__0kk%20uNzXlhKgO8iEOY4ue2lpj-4FhCiTvEdiSubmPLxG7a9GyLnboiaEHRci3NED%20Uur4tOJ_&zw_token=767a06ff2da8b76a977a0c2a2e0618fb`
  },
  {
    Phone: `181****6137`,
    query: `zw_time=1735660799&zw_param=QBA70bMR1JLp85nheC74IWfJHtbRuVEife70psqNuRY-5QvXx7yg5V-awPfN%20ZYuC9Yhkr1TrlWnW8Bixoo6xitOZa21R3wO-aCYe-9CoG5Hv4kVc_QJi85bP%20nMmNp76u&zw_token=20ac847cf35d2db67e5c856460b226c5`
  }
];

const homeURL = "http://www.ahzs10000.com/palmhall/pdt/chouJiang_home.action?";
const chouJiangURL = "http://www.ahzs10000.com/palmhall/pdt/chouJiang_chouJiang.action?";
const Referer = "http://www.ahzs10000.com/palmhall/pdt/chouJiang_chouJiang.action?";

const createRequest = (url, account) => {
  return {
    method: method,
    headers: headers,
    url: `${url}${account.query}`,
    Referer: `${Referer}${account.query}`
  }
};

let accountIndex = 0;
let homeRequest = createRequest(homeURL, accounts[accountIndex]);

const checkAndChouJiang = async (request) => {
  try {
    let response = await axios(request);
    let body = response.data;
    let mianFeiChouNums = body.match(/mianFeiChouNums":"(\d+)"/)[1];
    if (parseInt(mianFeiChouNums) > 0) {
      let newAccount = {Phone: accounts[accountIndex].Phone, query: accounts[accountIndex].query};
      let chouJiangRequest = createRequest(chouJiangURL, newAccount);
      setTimeout(async () => {
        try {
          let response = await axios(chouJiangRequest);
          let body = response.data;
          let name = body.match(/NAME":"(.*?)"/)[1];
          console.log(`手机号码： ${accounts[accountIndex].Phone} 抽奖结果: ${name}`);
          // 这里需要替换为青龙平台的通知方式
          let newAccount = {Phone: accounts[accountIndex].Phone, query: accounts[accountIndex].query};
          let newRequest = createRequest(homeURL, newAccount);
          await checkAndChouJiang(newRequest);
        } catch (error) {
          console.log(error);
        }
      }, 3000);
    } else {
      console.log(`手机号码： ${accounts[accountIndex].Phone} 免费抽奖剩余：${mianFeiChouNums}次`);
      // 这里需要替换为青龙平台的通知方式
      accountIndex++;
      if (accountIndex < accounts.length) {
        let newRequest = createRequest(homeURL, accounts[accountIndex]);
        await checkAndChouJiang(newRequest);
      }
    }
  } catch (error) {
    console.log(error);
  }
};

checkAndChouJiang(homeRequest);
