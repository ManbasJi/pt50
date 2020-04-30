import api from '../api/api'

function log(name, str) {
  api.env === '-dev' && console.log(name, str)
}

function getReleaseTime(startTime) {
  let st = new Date(startTime)
  let et = new Date()
  if (Math.floor((et - st) / 1000 / 60 / 60 / 24) >= 1) {
    return startTime.split(" ")[0]
  } else if (Math.floor((et - st) / 1000 / 60 / 60) >= 1) {
    return Math.floor((et - st) / 1000 / 60 / 60) + '小时前'
  } else if (Math.floor((et - st) / 1000 / 60) >= 1) {
    return Math.floor((et - st) / 1000 / 60) + '分钟前'
  } else if (Math.floor(et - st) / 1000 >= 1) {
    return Math.floor((et - st) / 1000) + '秒前'
  }
}

function getZeroTime() {
  let date = new Date()
  let times = date.getTime()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()
  let dayTime = times - hour * 3600 * 1000 - minute * 60 * 1000 - second * 1000
  return dayTime
}

function getCurrentTime() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '-' + m + '-' + d + ' ' + h + ':' + f;
  return keep; //20160614134947
}

function getCurrentDate() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '-' + m + '-' + d;
  return keep; //20160614134947
}

function getMDCurrentDate() {
  var keep = '';
  var date = new Date();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  keep = m + '-' + d;
  return keep; //20160614134947
}

function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() + ' ';
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds();
  return h + ':' + f;
}

function timestampToDate(timestamp) {
  var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  return Y + M + D;
}

function getCurrentTimeFull() {
  var keep = '';
  var date = new Date();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  var h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  var f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  var rand = Math.round(Math.random() * 899 + 100);
  keep = y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s;
  return keep; //20160614134947
}

function addDate(startDate, days) {
  startDate = new Date(startDate);
  startDate = +startDate + days * 1000 * 60 * 60 * 24;
  startDate = new Date(startDate);
  var m = startDate.getMonth() + 1
  m = m < 10 ? '0' + m : m;
  var d = startDate.getDate()
  d = d < 10 ? '0' + d : d
  var nextStartDate = startDate.getFullYear() + "-" + m + "-" + d + " " + startDate.getHours() + ":" + startDate.getMinutes();
  return nextStartDate;
}

//获取时间戳
function getTimeStamp() {
  var timeStamp = Date.parse(new Date());
  timeStamp = timeStamp / 1000;
  return timeStamp;
}

function isNumber(number) { //带小数
  let flag = false;
  //let myreg = /^\d+(\.\d{1,2})?$/;
  let myreg = /^(([^0][0-9]+|0)\.([0-9]{1,2})$)|^(([^0][0-9]+|0)$)|^(([1-9]+)\.([0-9]{1,2})$)|^(([1-9]+)$)/;
  if (number.length == 0) {
    flag = flag;
  } else if (!myreg.test(number)) {
    flag = flag;
  } else {
    flag = true;
  }
  return flag;
}

function isNumberNotDecimal(number) { //非零的正整数
  let flag = false;
  //let myreg = /^\d+(\.\d{1,2})?$/;
  let myreg = /^\+?[1-9][0-9]*$/;
  if (number.length == 0) {
    flag = flag;
  } else if (!myreg.test(number)) {
    flag = flag;
  } else {
    flag = true;
  }
  return flag;
}
//根据经纬度计算距离
function Calculation(la1, lo1, la2, lo2) {
  var La1 = la1 * Math.PI / 180.0;
  var La2 = la2 * Math.PI / 180.0;
  var La3 = La1 - La2;
  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(Lb3 / 2), 2)));
  s = s * 6378.137; //地球半径
  s = Math.round(s * 10000) / 10000;
  return s.toFixed(2);
}

module.exports = {
  getCurrentTime: getCurrentTime,
  getTimeStamp: getTimeStamp,
  addDate: addDate,
  getCurrentTimeFull: getCurrentTimeFull,
  isNumber: isNumber,
  getCurrentDate: getCurrentDate,
  timestampToTime: timestampToTime,
  isNumberNotDecimal,
  getMDCurrentDate,
  log,
  Calculation,
  getZeroTime,
  getReleaseTime,
  timestampToDate
}
